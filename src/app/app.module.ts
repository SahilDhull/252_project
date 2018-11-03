import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RocketsPage } from '../pages/rockets/rockets';
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';

import { HomePage } from '../pages/home/home';

import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './httpservice.service';
import { InfoPage } from '../pages/info/info';

import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';
import { Camera}  from '@ionic-native/camera';
import { CameraPage } from '../pages/camera/camera';

import { File } from '@ionic-native/file';
import { CommonProvider } from '../providers/common/common';
// import { AuthServiceProvider } from '../providers/auth-service/auth-service';
// import { SignaturePadModule } from 'angular2-signaturepad';
@NgModule({
  declarations: [
    MyApp,
    RocketsPage,
    InfoPage,
    MapPage,
    Welcome,
    Login,
    Signup,
    CameraPage,
    HomePage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RocketsPage,
    InfoPage,
    MapPage,
    Welcome,
    Login,
    Signup,
    CameraPage,
    HomePage
  ],
  providers: [
    File,
    Camera,
    Geolocation,
    HTTPService,
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider,
    // AuthServiceProvider
  ]
})
export class AppModule {}
