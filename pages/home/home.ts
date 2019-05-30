import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  infos = [];
  ref = firebase.database().ref('MenuTF/');

  constructor(public navCtrl: NavController) {
    this.ref.on('value', resp => {
      console.log(resp)
      this.infos = [];
      this.infos = snapshotToArray(resp);
       console.log(this.infos)
    });
    
  }
  
}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };