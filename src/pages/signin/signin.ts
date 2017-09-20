import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }
  tabs(){
    this.navCtrl.push(TabsPage);
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }

}
