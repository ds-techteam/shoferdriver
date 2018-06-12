import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Registration} from '../pages/registration/register';

import {Otp} from '../pages/otp/otp';
import {VehicleType} from '../pages/vehicle/vehicletype';
import {DriverLocation} from '../pages/map/driverlocation';
import {VehicleRegistration} from '../pages/vehicleregistration/vehicleregistration';
import {Documents} from '../pages/documents/documents';
import {ForgotPassword} from '../pages/forgotpassword/forgotpassword';

import { AgmCoreModule } from '@agm/core';            // @agm/core
import { AgmDirectionModule } from 'agm-direction';

import {DriverLicence} from '../pages/driverlicence/driverlicence';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Registration,
    Otp,
    VehicleType,
    DriverLocation,
    VehicleRegistration,
    Documents,
    ForgotPassword,
    DriverLicence
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyB--YrlilHgbAvZjJwLQQumWmWMV0wl0GM&sensor=true',
    }),
    AgmDirectionModule      
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Registration,
    Otp,
    VehicleType,
    DriverLocation,
    VehicleRegistration,
    Documents,
    ForgotPassword,
    DriverLicence
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
