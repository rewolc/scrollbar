module.exports = {
  rules: {
    "import-rules": {
      meta: {
        fixable: "whitespace",
      },
      create: function (context) {
        const styleKeyWords = ["css", "scss", "less"];

        const fsdMap = {
          shared: "shared",
          entity: "entity",
          feature: "feature",
          widget: "widget",
        };
        const fsdPriority = {
          [fsdMap.shared]: 1,
          [fsdMap.entity]: 2,
          [fsdMap.feature]: 3,
          [fsdMap.widget]: 4,
        };

        const fsdKeyWords = [
          fsdMap.shared,
          fsdMap.feature,
          fsdMap.entity,
          fsdMap.widget,
        ];

        const getFormattedImports = (v) => {
          const empty = "\n";
          const otherImports = [];
          const fsdImports = {
            shared: [],
            entity: [],
            feature: [],
            widget: [],
          };
          const styleImports = [""];

          v.forEach((el) => {
            let fsdImport;

            let isFSD = false;

            fsdKeyWords.forEach((word) => {
              if (el.includes(word)) {
                isFSD = true;

                fsdImport = {
                  key: word,
                };
              }
            });

            if (isFSD) {
              fsdImports[fsdImport.key].push(el);

              return;
            }

            const isStyle = styleKeyWords.some((word) => el.includes(word));

            if (isStyle) {
              styleImports.push(el);

              return;
            }

            otherImports.push(el);
          });

          for (const i in fsdImports) {
            fsdImports[i].sort((a, b) => a.length - b.length);
          }

          const fsdImport = Object.values(fsdImports).flat();

          // const fsdSorted = fsdImports
          //   .sort((a, b) => {
          //     console.log(a.key, b.key);
          //     console.log(fsdPriority[a.key ?? {}], fsdPriority[b.key ?? {}]);
          //
          //     return (fsdPriority[a.key] ?? 0) - (fsdPriority[b.key] ?? 0);
          //   })
          //   .map(({ name }) => name);
          //
          // console.log(fsdSorted);

          return [...otherImports, "", ...fsdImport, ...styleImports];
        };

        console.log(context.getFilename());

        return {
          Program: (node) => {
            const imports = node.body.filter(
              (statement) => statement.type === "ImportDeclaration"
            );

            if (imports.length > 2) {
              const sourceCode = context.getSourceCode();
              const firstImport = imports[0];
              const lastImport = imports[imports.length - 1];

              // Получение позиций начала и конца последнего импорта
              const start = (firstImport ?? {}).range[0];
              const end = (lastImport ?? {}).range[1];

              // Получение текущего текста импортов
              const importText = sourceCode.text.slice(start, end);

              // Разбиение текста на отдельные импорты
              const importsArray = importText.split("\n").filter(Boolean);

              const sortedImports = getFormattedImports(importsArray);

              const sortedImportText = `${sortedImports.join("\n")}`;

              context.report({
                node,
                message: "Wrong imports order",
                fix: (f) => {
                  return f.replaceTextRange([start, end], sortedImportText);
                },
              });
            }
          },
        };
      },
    },
  },
};
