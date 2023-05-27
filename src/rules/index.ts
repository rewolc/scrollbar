import { Rule } from 'eslint'

// module.exports = {
//     create: (context) => {
//         return {
//             ImportDeclaration: function (node) {
//             },
//         }},
// };

const rule: Rule.RuleModule = {
    create: context => {
        return {
            ImportDeclaration: node => {
           console.log(context)
            },
        }
    },
}

export default rule


