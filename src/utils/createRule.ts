import { ESLintUtils } from '@typescript-eslint/utils';

export const createRule = ESLintUtils.RuleCreator((name) => {
  console.log(name);
  return `https://github.com/thilllon/eslint-plugin-woowa/blob/main/README.md`;
});
