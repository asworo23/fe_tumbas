import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

//import { TabsPage } from '../tabs/tabs';
//import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }
  tabs(){
    this.navCtrl.push("TabsPage");
  }
  signup(){
    this.navCtrl.push("SignupPage");
  }

}
