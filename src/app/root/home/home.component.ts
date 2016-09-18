import { AppController} from '../root.component';

export class HomeController {
  songs: {url:string}[];

  constructor() {
  }

  $onInit() {
    // get the songs from parent
  }

  playSong(url: string) {
    // call playSong on parent, pass the URL
    // extend the playSong on the parent so it'll start playing this songs
    // make sure the song order is correct once the song finishes :)
  }
}

export default {
  controller: HomeController,
  template: `
    <table class="table">
      <tr>
        <th translate>SONG</th>
        <th></th>
      </tr>
      <!-- repeat over songs
           add URL + button
           button calls the playSong method on the controller
      -->
   </table>
  `,
  require: {
    parent: '^appRoot'
  }
}
