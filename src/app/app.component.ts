import { Component } from '@angular/core';
import {App, Platform } from 'ionic-angular';
import {StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RestaurantService} from './services/restaurant.service';
import { TabsPage } from '../pages/tabs/tabs';
import {HomePage} from '../pages/home/home';
import { Cordova } from '@ionic-native/core';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
  templateUrl: 'app.html',
  providers:[RestaurantService,Keyboard]
 
})

export class MyApp {
  rootPage:any = HomePage;
  cordova:any;
  window:any;

  constructor(private platform: Platform,private statusBar: StatusBar, private splashScreen: SplashScreen,private keyboard:Keyboard) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
     
     // this.initDataEventStream();     
      //this.keyboard.disableScroll(true);
     

      this.statusBar.styleDefault();
      this.splashScreen.hide();
     // this.keyboard.disableScroll(true);
    });
  }
}
