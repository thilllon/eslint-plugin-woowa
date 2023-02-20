export const recommended = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  rules: {
    'nestjs-provided-injected-should-match-factory-parameters': 'error',
    'nestjs-injectable-should-be-provided': [
      'error',
      {
        src: ['src/**/*.ts'],
        filterFromPaths: ['node_modules', '.test.', '.spec.'],
      },
    ],
    'nestjs-api-property-matches-property-optionality': 'error',
    'nestjs-api-method-should-specify-api-response': 'error',
    'nestjs-controllers-should-supply-api-tags': 'error',
    'nestjs-api-enum-property-best-practices': 'error',
    'nestjs-api-property-returning-array-should-set-array': 'error',
    'nestjs-should-specify-forbid-unknown-values': 'error',
    'nestjs-param-decorator-name-matches-route-param': 'error',
    'nestjs-validated-non-primitive-property-needs-type-decorator': 'error',
    'nestjs-validate-nested-of-array-should-set-each': 'error',
    'nestjs-all-properties-are-whitelisted': 'error',
    'nestjs-all-properties-have-explicit-defined': 'error',
  },
};
