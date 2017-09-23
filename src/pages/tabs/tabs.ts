import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

//import { HomePage } from '../home/home';
//import { CategoryPage } from '../category/category';
//import { TransactionPage } from '../transaction/transaction';
//import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab_home = 'HomePage';
  tab_category = 'CategoryPage';
  tab_transaction = 'TransactionPage';
  tab_profile = 'ProfilePage';

  constructor() {

  }
}
