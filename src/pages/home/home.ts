import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Registration} from '../registration/register';

import {DriverLocation} from '../map/driverlocation';
import {ForgotPassword} from '../forgotpassword/forgotpassword';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    

  }
  register()
  {
    this.navCtrl.push(Registration);
  
  }
  login()
  {
    this.navCtrl.push(DriverLocation);
  
  }
  forgotpasswordsubmit()
  {
    this.navCtrl.push(ForgotPassword);
  
  }

}
