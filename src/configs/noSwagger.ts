// Should turn off swagger rules for folks not using swagger typings
export const noSwagger = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  rules: {
    'woowa/nestjs-api-property-matches-property-optionality': 'off',
    'woowa/nestjs-api-method-should-specify-api-response': 'off',
    'woowa/nestjs-controllers-should-supply-api-tags': 'off',
    'woowa/nestjs-api-enum-property-best-practices': 'off',
    'woowa/nestjs-api-property-returning-array-should-set-array': 'off',
  },
};
