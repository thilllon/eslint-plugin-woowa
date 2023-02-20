import { ESLintUtils } from '@typescript-eslint/utils';
import rule from './forceAsyncFunctionNaming';

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});

ruleTester.run('force-async-function-naming', rule, {
  valid: [
    {
      code: `async function fooAsync() {}`,
    },
    // FIXME: add test case for anonymous function
    // {
    //   name: 'anonymous function',
    //   code: `async function() {}`,
    // },
  ],
  invalid: [
    {
      code: `async function bar() {}`,
      errors: [
        {
          messageId: 'missing-async-suffix',
        },
      ],
    },
  ],
});
