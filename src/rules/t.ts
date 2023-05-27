import { RuleTester } from 'eslint'
import rule from "./index"
const tester = new RuleTester({
    parserOptions: { ecmaVersion: 2015, sourceType: 'module' },
})

tester.run('no-lodash-named-imports', rule, {
    valid: [
        { code: "import a from 'features'; import b from 'shared'; import c from 'shared';" },
    ],
    invalid: [
        {
            code: "import a from 'shared'; import b from 'features'; import c from 'shared';",
            errors: [{ messageId: 'noDefaultLodashImport' }],
            output:  "import a from 'features'; import b from 'shared'; import c from 'shared';",
        },
    ],
})