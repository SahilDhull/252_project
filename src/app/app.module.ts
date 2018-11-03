import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { SignupPage } from '../pages/signup/signup';

//import { AuthService } from '../providers/auth-service/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
//import {Config} from '../config';

import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './httpservice.service';

import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';
import { Camera}  from '@ionic-native/camera';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

import { File } from '@ionic-native/file';
import { CommonProvider } from '../providers/common/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

// import { AuthServiceProvider } from '../providers/auth-service/auth-service';
// import { SignaturePadModule } from 'angular2-signaturepad';
@NgModule({
  declarations: [
    MyApp,
    MapPage,
		LoginPage,
		SignupPage,
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig.fire),
		//AgmCoreModule.forRoot(),
    HttpClientModule,
		NgxErrorsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
		LoginPage,
		SignupPage,
  ],
  providers: [
    File,
    Camera,
		//Config,
    Geolocation,
    HTTPService,
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider,
		AngularFireAuth
    // AuthServiceProvider
  ]
})
export class AppModule {}
