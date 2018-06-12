import { Component,ViewChild} from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {VehicleRegistration} from '../vehicleregistration/vehicleregistration';
import {DriverLicence} from '../driverlicence/driverlicence';

@Component({
    selector: 'page-documents',
    templateUrl: 'documents.html'
  })
  export class Documents {

  



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

      vehicleregistration() {
        
        this.navCtrl.push(VehicleRegistration);
      }
      driverlicence() {
        
        this.navCtrl.push(DriverLicence);
      }

  }