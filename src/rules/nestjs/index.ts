import allPropertiesAreWhitelisted from './allPropertiesAreWhitelisted/allPropertiesAreWhitelisted';
import allPropertiesHaveExplicitDefined from './allPropertiesHaveExplicitDefined/allPropertiesHaveExplicitDefined';
import apiEnumPropertyBestPractices from './apiEnumPropertyBestPractices/apiEnumPropertyBestPractices';
import apiMethodsShouldSpecifyApiResponse from './apiMethodsShouldSpecifyApiResponse/apiMethodsShouldSpecifyApiResponse';
import apiPropertyMatchesPropertyOptionality from './apiPropertyMatchesPropertyOptionality/apiPropertyMatchesPropertyOptionality';
import apiPropertyReturningArrayShouldSetArray from './apiPropertyReturningArrayShouldSetArray/apiPropertyReturningArrayShouldSetArray';
import controllerDecoratedHasApiTags from './controllerDecoratedHasApiTags/controllerDecoratedHasApiTags';
import injectableShouldBeProvided from './injectablesShouldBeProvided/injectableShouldBeProvided';
import parameterDecoratorNameMatchesRouteParam from './paramDecoratorNameMatchesRouteParam/paramDecoratorNameMatchesRouteParam';
import providedInjectedShouldMatchFactoryParameters from './providerInjectedShouldMatchFactory/ProviderInjectedShouldMatchFactory';
import shouldSpecifyForbidUnknownValues from './shouldSpecifyForbidUnknownValues/shouldSpecifyForbidUnknownValuesRule';
import validateNestedOfArrayShouldSetEach from './validateNestedOfArrayShouldSetEach/validateNestedOfArrayShouldSetEach';
import validateNonPrimitiveNeedsDecorators from './validateNonPrimitvesNeedsTypeDecorator/validateNonPrimitiveNeedsDecorators';

export const nestjsRules = {
  'nestjs-all-properties-are-whitelisted': allPropertiesAreWhitelisted,
  'nestjs-all-properties-have-explicit-defined': allPropertiesHaveExplicitDefined,
  'nestjs-api-property-matches-property-optionality': apiPropertyMatchesPropertyOptionality,
  'nestjs-injectable-should-be-provided': injectableShouldBeProvided,
  'nestjs-provided-injected-should-match-factory-parameters':
    providedInjectedShouldMatchFactoryParameters,
  'nestjs-controllers-should-supply-api-tags': controllerDecoratedHasApiTags,
  'nestjs-api-method-should-specify-api-response': apiMethodsShouldSpecifyApiResponse,
  'nestjs-api-enum-property-best-practices': apiEnumPropertyBestPractices,
  'nestjs-api-property-returning-array-should-set-array': apiPropertyReturningArrayShouldSetArray,
  'nestjs-should-specify-forbid-unknown-values': shouldSpecifyForbidUnknownValues,
  'nestjs-param-decorator-name-matches-route-param': parameterDecoratorNameMatchesRouteParam,
  'nestjs-validated-non-primitive-property-needs-type-decorator':
    validateNonPrimitiveNeedsDecorators,
  'nestjs-validate-nested-of-array-should-set-each': validateNestedOfArrayShouldSetEach,
};
