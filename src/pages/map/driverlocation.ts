import { Component,ViewChild,EventEmitter } from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { AgmCoreModule } from '@agm/core';
import * as io from 'socket.io-client';

          // @agm/core
import { AgmDirectionModule } from 'agm-direction';
@Component({
    selector: 'page-driverlocation',
    templateUrl: 'driverlocation.html'
  })
  export class DriverLocation {

    lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: Number = 14;
    items:any;
    socket : any;
    messages:string;
    zone : any;
    messageChange : EventEmitter<string> = new EventEmitter();
    constructor(public navCtrl: NavController,public alertControler :AlertController) {

      this.messageChange.subscribe(
       
        item=>{
         // this.messages=item;
    console.log(item);
         let alert = this.alertControler.create({
          title: 'Congratulation!',
         subTitle: 'Booking for u',
        // message:'Driver name '+item.name+' cab No. '+item.cabNo +' Mobile : '+item.mobNO,
         buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
              this.sendRecjetcceptMessage();
            }
          },
          {
            text: 'Accept',
            handler: () => {
             this.sendAcceptMessage();
              
            }
          }
        ]
         });
         alert.present();
        });
      }
      connectSocket()
      {
        this.socket = io.connect("http://localhost:3000");
        this.socket.on('connect',()=>{
          this.socket.emit('room', 'abc123');
        }
      );
        
        
        this.socket.on('message', (data) =>{
          console.log(data);  
      //console.log(this.messages);
     // var self=this;
      this.messages=data;
      this.messageChange.emit(data);
        })
    
      }
  
  
 
  dir = undefined;
  
      getDirection() {
        this.dir = {
          origin: { lat: 24.799448, lng: 120.979021 },
          destination: { lat: 24.799524, lng: 120.975017 }
        }
      }

      disconnect()
      {
        this.socket.emit('remove from room',"abc123");
        this.socket.disconnect();
      }
      subscribeEmit()
      {
        this.message().subscribe(item=>{this.messages=item;});
      }
    
      emit(data)
      {
        this.messageChange.emit('Incoming message:'+ data);
    
      }
    
      message()
      {
       return this.messageChange;
      }
  
      sendAcceptMessage()
      {
        this.socket.emit('chat message', {room: 'abc123', msg:{name:'bhupesh',cabNo:'MP-09-CW-9168',mobNO:7760888291,accept:true}});
      }
  
      sendRecjetcceptMessage()
      {
        this.socket.emit('chat message', {room: 'abc123', msg:{name:'bhupesh',cabNo:'MP-09-CW-9168',mobNO:7760888291,accept:false}});
      }

  }