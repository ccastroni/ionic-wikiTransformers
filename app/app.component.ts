import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase/app';

var config = {
  apiKey: "AIzaSyCclb-wMBY4bQtHRd0oy85bjAG_Xnh6XYE",
  authDomain: "wikitransformers-c5d72.firebaseapp.com",
  databaseURL: "https://wikitransformers-c5d72.firebaseio.com",
  projectId: "wikitransformers-c5d72",
  storageBucket: "wikitransformers-c5d72.appspot.com",
  messagingSenderId: "923555644993",
  appId: "1:923555644993:web:4112b1f1e614df63"
};

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = TabsPage;



  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
}
