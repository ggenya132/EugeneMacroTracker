
import { NavController,NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AddMealPage } from '../add-meal/add-meal';
import { ChartPage } from '../chart-page/chart-page';
import { Macros } from '../../providers/macros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  paramsData : any;
  paramsData2 : any;
  macros : any = Macros;
  mealProtein : number;
  mealFat : number;
  mealCarbs : number; 
  trainingProtein : number; 
  trainingCarbs : number;
  trainingFat : number;
  restProtein : number;
  restCarbs : number;
  restFat : number;
  tab1Root: any = AddMealPage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab5Root: any = ChartPage;
  constructor(public navCtrl: NavController,public params:NavParams) {

    this.paramsData = params.data;
    this.paramsData2 = params.data;

    console.log(this.params.data);
    console.log(this.paramsData2);

    this.macros.trainingProtein = params.get("trainingProtein");
    this.macros.trainingCarbs = params.get("trainingCarbs");
    this.macros.trainingFat = params.get("trainingFat");
    this.macros.restProtein = params.get("restProtein");
    this.macros.restCarbs = params.get("restCarbs");
    this.macros.restFat = params.get ("restFat");

  }

  ionViewDidLoad(){
    console.log( this.macros.trainingProtein);
    console.log(this.macros.trainingCarbs);
    console.log(this.macros.trainingFat);
    console.log(this.macros.restProtein);
    console.log(this.macros.restFat);
    console.log(this.macros.restCarbs);
  }
}
