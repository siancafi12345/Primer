import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NuevaPage } from '../pages/nueva/nueva';
import { InicioPage } from '../pages/inicio/inicio';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NuevaPage,
    InicioPage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,   
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NuevaPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
