import { Component,ViewChild} from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import {VehicleType} from '../vehicle/vehicletype';

@Component({
    selector: 'page-forgotpassword',
    templateUrl: 'forgotpassword.html'
  })
  export class ForgotPassword {
  @ViewChild('forgotpassword')forgotpassword;
  @ViewChild('password') password;

    constructor(public navCtrl: NavController,
        public platform : Platform,public alertControler :AlertController) {       
       
      }
     
      goBack() {
        this.navCtrl.pop();
      }

      submit()
      {
        this.navCtrl.push(VehicleType);
          
      }

  }