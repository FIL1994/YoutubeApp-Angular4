import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youtube App';
  client_id: string;


  constructor() {
    function start() {
      //https://console.developers.google.com
      gapi.client.init({
        apiKey: 'N/A',
        discoveryDocs: ['https://people.googleapis.com/$discovery/rest']
      }).then(() => {
        console.log(gapi);
      });
    }

    gapi.load('client', start);
  }
}
