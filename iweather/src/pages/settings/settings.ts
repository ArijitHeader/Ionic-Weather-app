import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Storage} from '@ionic/storage';
import{HomePage} from '../home/home';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private st: Storage) {
    this.st.get('location').then((val)=>{

      if(val !=null){
        let location=JSON.parse(val);
        console.log(location);
        this.city=location.city;
        this.state=location.state;
      }
      else{
        this.city="chennai";
        this.state="TamilNadu";
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  saveForm(){
    let location={
      city: this.city,
      state:this.state
    }

    this.st.set('location',JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
