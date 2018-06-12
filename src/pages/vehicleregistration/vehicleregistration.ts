import { Component,ViewChild} from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {Otp} from '../otp/otp';

@Component({
    selector: 'page-vehicleregistration',
    templateUrl: 'vehicleregistration.html'
  })
  export class VehicleRegistration {

  



    constructor(public navCtrl: NavController,
        public platform : Platform,public alertControler :AlertController) {
       
      }

    //   login()
    //   {
    //       console.log(this.uname.value);
    //       console.log(this.password.value);

    //       if(this.uname.value==='bgiri' && this.password.value==='dholu')
    //       {
    //           this.navCtrl.push(CabHome);
    //       }
    //   }

      goBack() {
        this.navCtrl.pop();
      }

      next() {
        
        this.navCtrl.push(Otp);
      }

  }