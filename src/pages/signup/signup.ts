import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { SigninPage } from '../signin/signin';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
  signin(){
    this.navCtrl.push(SigninPage);
  }

}
