import { TSESLint } from '@typescript-eslint/utils';
import { createRule } from '../../../utils/createRule';

const rule = createRule({
  name: 'force-async-function-naming',
  meta: {
    docs: {
      description: 'Force async function naming with `Async` suffix',
      suggestion: true,
      recommended: 'warn',
    },
    messages: {
      'missing-async-suffix': 'Async functions must have `Async` suffix',
    },
    type: 'suggestion',
    schema: {},
  },
  defaultOptions: [],
  create(context: Readonly<TSESLint.RuleContext<'missing-async-suffix', never[]>>) {
    return {
      FunctionDeclaration(node) {
        if (typeof node?.id?.name === 'string' && node.async && !node.id.name.endsWith('Async')) {
          context.report({
            node,
            messageId: 'missing-async-suffix',
          });
        }
      },
    };
  },
});

export default rule;
