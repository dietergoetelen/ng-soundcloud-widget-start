
export class TranslateService {
  private currentLanguage= this.preferred;

  constructor(private translations: app.ITranslation[],
              private preferred: string) {}

  // todo implement functions

}
TranslateService.iid = 'TranslateService';
export class TranslateServiceProvider {

  private preferred : string = "en";
  private translations: app.ITranslation[];

  // todo implement functions

  // this function will execute once we inject LanguageService
  // during run phase (controllers/service/filter/...)
  $get() {
  }
}

TranslateServiceProvider.iid = "TranslateServiceProvider";
