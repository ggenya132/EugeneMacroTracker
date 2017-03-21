import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddMealPage } from '../pages/add-meal/add-meal';
import {SetMacrosPage } from '../pages/set-macros/set-macros';
import { ChartPage } from '../pages/chart-page/chart-page';
import {Macros } from '../providers/macros';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddMealPage,
    SetMacrosPage,
    ChartPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddMealPage,
    SetMacrosPage,
    ChartPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Macros]
})
export class AppModule {}
