import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {LoginPage,RecuperarContraPage,RegistroUsuPage, RegistroEmprePage} from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RecuperarContraPage,
    RegistroUsuPage,
    RegistroEmprePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RecuperarContraPage,
    RegistroUsuPage,
    RegistroEmprePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
