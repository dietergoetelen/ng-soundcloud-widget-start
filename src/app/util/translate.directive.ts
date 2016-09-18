import { TranslateService } from './translate.provider';

export default translateDirective;

translateDirective.$inject = [TranslateService.iid, '$interpolate'];
function translateDirective(translateService:TranslateService, $interpolate:ng.IInterpolateService) {
  let directive = {
    restrict: "A",
    link
  };

  function link(scope:ng.IScope, element:angular.IAugmentedJQuery, attrs) {
    // TODO: directive implementation
  }

  return directive;
}
