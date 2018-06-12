import { Component,ViewChild} from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import {VehicleType} from '../vehicle/vehicletype';

@Component({
    selector: 'page-otp',
    templateUrl: 'otp.html'
  })
  export class Otp {
  @ViewChild('otp')otp;
  @ViewChild('password') password;
  image: String;
    constructor(public navCtrl: NavController,
        public platform : Platform,public alertControler :AlertController) {       
          this.image = '../assets/imgs/logo.png';
      }
     
      goBack() {
        this.navCtrl.pop();
      }

      verify()
      {
        this.navCtrl.push(VehicleType);
          
      }

  }