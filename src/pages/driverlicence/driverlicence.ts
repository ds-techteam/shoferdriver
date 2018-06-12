import { Component,ViewChild} from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';


@Component({
    selector: 'page-driverlicence',
    templateUrl: 'driverlicence.html'
  })
  export class DriverLicence {

  



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
        
        
      }

  }