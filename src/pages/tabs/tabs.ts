
import { NavController,NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AddMealPage } from '../add-meal/add-meal';
import { ChartPage } from '../chart-page/chart-page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  paramsData : any;
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
    console.log(this.params.data);


    this.trainingProtein = params.get("trainingProtein");
    this.trainingCarbs = params.get("trainingCarbs");
    this.trainingFat = params.get("trainingFat");
    this.restProtein = params.get("restProtein");
    this.restCarbs = params.get("restCarbs");
    this.restFat = params.get ("restFat"); 
  }

  ionViewDidLoad(){
    console.log( this.trainingProtein);
    console.log(this.trainingCarbs);
    console.log(this.trainingFat);
    console.log(this.restProtein);
    console.log(this.restFat);
    console.log(this.restCarbs);
    
  }
}
