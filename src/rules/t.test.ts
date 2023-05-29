import { RuleTester } from "eslint";
import rule from "rules/utils";
const tester = new RuleTester({
  parserOptions: { ecmaVersion: 2015, sourceType: "module" },
});

tester.run("imports order", rule, {
  valid: [
    { code: "import c from '../../entity/qwerty';" },
    { code: "import b from '../../../shared/comp/a';" },
    { code: "import a from '../features/zzz';" },
    { code: "import c from 'd';" },
    // { code: "const App = () => <div></div>';" },
  ],
  invalid: [
    // {
    //     code: "import a from 'shared'; import b from 'features'; import c from 'shared';",
    //     errors: [{ messageId: 'noDefaultLodashImport' }],
    //     output:  "import a from 'features'; import b from 'shared'; import c from 'shared';",
    // },
  ],
});
