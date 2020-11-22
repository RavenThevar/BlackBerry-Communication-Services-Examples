import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDd9oIY5m4FRScmj9qTJenXHxGn3C-wjKA',
  databaseURL: 'https://chatwithstrangers-69c9f.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatwithStrangers';

  constructor() {
    firebase.initializeApp(config);
  }
}