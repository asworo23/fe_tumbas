import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { TransactionPage } from '../transaction/transaction';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab_home = HomePage;
  tab_category = CategoryPage;
  tab_transaction = TransactionPage;
  tab_profile = ProfilePage;

  constructor() {

  }
}
