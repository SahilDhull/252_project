import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './httpservice.service';

import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';
import { Camera}  from '@ionic-native/camera';

import { File } from '@ionic-native/file';
import { CommonProvider } from '../providers/common/common';
// import { AuthServiceProvider } from '../providers/auth-service/auth-service';
// import { SignaturePadModule } from 'angular2-signaturepad';
@NgModule({
  declarations: [
    MyApp,
    MapPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage
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
