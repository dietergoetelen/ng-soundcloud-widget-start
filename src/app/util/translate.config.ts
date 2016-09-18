import { TranslateServiceProvider } from './translate.provider';

config.$inject = [TranslateServiceProvider.iid]
function config(translateProvider:TranslateServiceProvider) {
}

export default config;
