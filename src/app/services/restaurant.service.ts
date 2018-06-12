import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import { Platform } from 'ionic-angular';
import 'rxjs/Rx';

@Injectable()
export class RestaurantService
{
    http:any;
    baseUrl:string;
    watch : any;


    constructor(http:Http,private storageMedium : Storage,private platform: Platform)
    {
        this.http=http;
        this.baseUrl='https://www.reddit.com/r';

        
console.log("dsdsdsdsdsdsdsdsdsdsd");
        
      
    }




    getCurrentLocation():any
    {
     
    }

    getPosts(category,limit)
    {
        return   this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(res=>res.json());
    }

    saveValue(val)
    {
        this.storageMedium.set("test",val);
    }

    getValue()
    {
        return this.storageMedium.get("test").then(
            (tes)=>{return tes;}
        )
    }
}