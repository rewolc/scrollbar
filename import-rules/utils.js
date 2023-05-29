// module.exports = {
//     create: (context) => {
//         return {
//             ImportDeclaration: function (node) {
//             },
//         }},
// };
// const fsdMap = {
//   shared: "shared",
//   entity: "entity",
//   feature: "feature",
//   widget: "widget",
// };
// const fsdPriority = {
//   [fsdMap.shared]: 1,
//   [fsdMap.feature]: 2,
//   [fsdMap.entity]: 3,
//   [fsdMap.widget]: 4,
// };
//
// const fsdKeyWords = [
//   fsdMap.shared,
//   fsdMap.feature,
//   fsdMap.entity,
//   fsdMap.widget,
// ];
//
// const styleKeyWords = ["css", "scss", "less"];

// const getFormattedImports = (v) => {
//   const empty = { type: "EmptyStatement" };
//   const otherImports = [];
//   const fsdImports = [empty];
//   const styleImports = [empty];
//
//   v.forEach((el) => {
//     const importName = el;
//     const isFSD = fsdKeyWords.some((word) => importName.includes(word));
//
//     if (isFSD) {
//       fsdImports.push(el);
//
//       return;
//     }
//
//     const isStyle = styleImports.some((word) => importName.includes(word));
//
//     if (isStyle) {
//       styleImports.push(el);
//
//       return;
//     }
//
//     otherImports.push(el);
//   });
//
//   const fsdSorted =
//     fsdImports.length > 1
//       ? fsdImports.sort(
//           (a, b) =>
//             (fsdPriority[(b.source ?? {}).value] ?? 0) -
//             (fsdPriority[(b.source ?? {}).value] ?? 0)
//         )
//       : fsdImports;
//
//   return [...otherImports, ...fsdSorted, ...styleImports, empty];
// };

// const rule = {
//   create: (context) => {
//     return {
//       Program: (node) => {
//         const imports = node.body.filter(
//           (statement) => statement.type === "ImportDeclaration"
//         );
//         const sourceCode = context.getSourceCode();
//         const firstImport = imports[0];
//         const lastImport = imports[imports.length - 1];
//
//         // Получение позиций начала и конца последнего импорта
//         const start = firstImport.range[0];
//         const end = lastImport.range[1];
//
//         // Получение текущего текста импортов
//         const importText = sourceCode.text.slice(start, end);
//
//         // Разбиение текста на отдельные импорты
//         const importsArray = importText.split("\n").filter(Boolean);
//
//         console.log(importsArray);
//
//         const sortedImports = getFormattedImports(importsArray);
//
//         const sortedImportText = `${sortedImports.join("\n")}\n\n`;
//
//         // console.log(sortedImports);
//
//         context.report({
//           node,
//           message: "Wrong imports order",
//           fix: (f) => {
//             f.replaceTextRange([start, end], sortedImportText);
//           },
//         });
//       },
//     };
//   },
// };

// module.exports = {
//   meta: {
//     messages: {
//       name: "eslint-plugin-sort-imports",
//       unnecessaryEscape: "Wrong imports sort",
//     },
//     hasSuggestions: true,
//   },
//   create: function (context) {
//     return {
//       Program: (node) => {
//         const imports = node.body.filter(
//           (statement) => statement.type === "ImportDeclaration"
//         );
//         const sourceCode = context.getSourceCode();
//         const firstImport = imports[0];
//         const lastImport = imports[imports.length - 1];
//
//         // Получение позиций начала и конца последнего импорта
//         const start = firstImport.range[0];
//         const end = lastImport.range[1];
//
//         // Получение текущего текста импортов
//         const importText = sourceCode.text.slice(start, end);
//
//         // Разбиение текста на отдельные импорты
//         const importsArray = importText.split("\n").filter(Boolean);
//
//         console.log(importsArray);
//
//         const sortedImports = getFormattedImports(importsArray);
//
//         const sortedImportText = `${sortedImports.join("\n")}\n\n`;
//
//         // console.log(sortedImports);
//
//         context.report({
//           node,
//           message: "Wrong imports order",
//           fix: (f) => {
//             f.replaceTextRange([start, end], sortedImportText);
//           },
//         });
//       },
//     };
//   },
// };

// export default rule;
