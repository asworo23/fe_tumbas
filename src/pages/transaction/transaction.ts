import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})
export class TransactionPage {

  constructor(public navCtrl: NavController) {

  }
  searching(){
    this.navCtrl.push("SearchingPage");
  }

}
