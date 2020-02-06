import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { AlertController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import * as firebase from "firebase";
import { AboutPage } from "../about/about";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  infos = [];
  ref = firebase.database().ref("MenuTF/");
  urlimagen = "";

  constructor(public navCtrl: NavController) {
    this.ref.on("value", resp => {
      // console.log(resp)
      this.infos = [];
      this.infos = snapshotToArray(resp);
      // console.log(this.infos)

      // Points to the root reference
      var storageRef = firebase.storage().ref();

      // Points to 'images'
      var imagesRef = storageRef.child("Menu");

      // Points to 'images/space.jpg'
      // Note that you can use variables to create child values
      var fileName = "animated.png";
      var spaceRef = imagesRef.child(fileName);

      // File path is 'images/space.jpg'
      var path = spaceRef.fullPath;

      // File name is 'space.jpg'
      var name = spaceRef.name;

      // Points to 'images'
      var imagesRef = spaceRef.parent;

      this.urlimagen = path; //spaceRef.fullPath;
      console.log(spaceRef);

    });
  }

  public ListaFiguras(item, linea) {
    console.log(item);
    this.navCtrl.push(AboutPage, {
      item: item,
      linea: linea
    });
    // alert('Download ' + item);
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
