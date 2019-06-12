import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  value: any;
 infos = [];
 
 ref = firebase.database().ref('G1_Padre/');

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.value = navParams.get('item');
    console.log(this.value);

   // this.ref.orderByChild('IdLinea').equalTo( this.value);

     //this.ref.on('value', resp => {
   firebase.database().ref('G1_Padre2').child("Grupos").on('value', resp => {
      //console.log('resp : '+resp)
      this.infos = [];
      this.infos = snapshotToArray(resp);
       console.log(this.infos)

       // let storageRef = firebase.storage().ref();
    //var imageRef = storageRef.child('Menu').storage.app;
    //console.log(imageRef)
    });
  }

}




export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
      console.log(childSnapshot)
      console.log(childSnapshot.val())
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };

