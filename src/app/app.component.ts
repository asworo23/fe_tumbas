import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { SigninPage } from '../pages/signin/signin';
//import { TabsPage } from '../pages/tabs/tabs';
//import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'SlidesPage';
  //rootPage:any = SplashPage;

  constructor(platform: Platform, modalCtrl: ModalController,statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
      let splash = modalCtrl.create("SplashPage");
      splash.present();
    });
  }
}
