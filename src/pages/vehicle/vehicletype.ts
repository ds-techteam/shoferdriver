import { Component,ViewChild} from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import {Documents} from '../documents/documents';


@Component({
    selector: 'page-vehicletype',
    templateUrl: 'vehicletype.html'
  })
  export class VehicleType {
  @ViewChild('vehicletype') vehicletype;
  

    constructor(public navCtrl: NavController,
        public platform : Platform,public alertControler :AlertController) {       
       
      }
     
      goBack() {
        this.navCtrl.pop();
      }

      submit()
      {
          this.navCtrl.push(Documents);
      }

  }