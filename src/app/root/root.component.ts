import {TranslateService} from '../util/translate.provider';

export class AppController {
  private title = 'Musify';
  private states = [
    {
      title: 'NAV_HOME',
      state: 'app.home'
    }
  ];
  private songs: {url:string}[];

  static $inject = ['$state', TranslateService.iid];
  constructor(private $state:ng.ui.IStateService, private translateService: TranslateService) {}

  $onInit() {
    this.songs = [
      { url: 'http://api.soundcloud.com/tracks/251059513'},
      { url: 'http://api.soundcloud.com/tracks/245673410'},
      { url: 'http://api.soundcloud.com/tracks/263284333'},
      { url: 'http://api.soundcloud.com/tracks/1848538'}
    ];

  }

  public getSongs() {
    return this.songs;
  }

  public playSong(url: string) {
  }

  private getNextSong() {
  }

  public onRegister(api: app.scApi) {
    // this method should be called once the sc-widget is ready
  }

  public setLanguage(lang:string) {
  }
}

export default {
  controller: AppController,
  template: `
  <div class="container">
    <div class="row">
      <app-header set-language="$ctrl.setLanguage(lang)" title="{{ $ctrl.title }}"></app-header>
      <app-navbar current-state="{{ $ctrl.$state.current.name }}" states="$ctrl.states"></app-navbar>
      <p><span translate>CURRENTLY_PLAYING</span> {{ $ctrl.songIndex }}</p>
      <div ui-view></div>
    </div>
  </div>
  <app-footer>
    <sc-widget on-register-api=""></sc-widget>
  </app-footer>
  `
};
