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
      console.log(
        firebase.storage().refFromURL(
          firebase
            .storage()
            .ref("Menu/animated.png")
            .toString()
        )
      );
      console.log(
        firebase
          .storage()
          .ref("Menu/animated.png")
          .toString()
      );

      // Create a reference to the file we want to download
      var starsRef = firebase.storage().ref().child("Menu/animated.png");

      // Get the download URL
      starsRef
        .getDownloadURL()
        .then(function(url) {
          console.log(url)
          this.urlimagen = url;
        })
        .catch(function(error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/object-not-found":
              console.log("File doesn't exist");
              break;
            case "storage/unauthorized":
              console.log("User doesn't have permission to access the object");
              break;
            case "storage/canceled":
              console.log("User canceled the upload");
              break;
            case "storage/unknown":
              console.log("Unknown error occurred, inspect the server response");
              break;
          }
        });
               
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
