import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { RocketsPage } from '../pages/rockets/rockets';

import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';
//import { Welcome } from '../pages/welcome/welcome';
// import { CameraPage } from '../pages/camera/camera';
import { LoginPage } from '../pages/login/login';
import { File } from '@ionic-native/file';
import { AuthService } from '../services/auth.service';

//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private gl: Geolocation, private auth: AuthService) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      // {title: 'Rockets', component: RocketsPage},
    //  {title: 'Welcome', component: Welcome},
    {title: 'Map', component: MapPage},
	//	{title: 'Login', component: LoginPage}
      // {title: 'Camera', component: CameraPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.show();
      this.splashScreen.hide();
			//this.rootPage = LoginPage;
      /**
       * Shows the current location coordinates. Plugins can be used once the platform is ready.
       */
      this.gl.getCurrentPosition()
      .then((res) => {
        console.log(res);
      })
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
