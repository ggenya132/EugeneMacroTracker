import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
/*
  Generated class for the SetMacros page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-set-macros',
  templateUrl: 'set-macros.html'
})
export class SetMacrosPage {

  trainingProtein : number; 
  trainingCarbs : number; 
  trainingFat: number; 

  restProtein : number; 
  restCarbs : number; 
  restFat: number; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetMacrosPage');
  }

  goHome(): void{

    this.navCtrl.push(TabsPage, {trainingProtein : this.trainingProtein,

    trainingCarbs: this.trainingCarbs,
    trainingFat: this.trainingFat,

    restCarbs: this.restCarbs,
    restFat : this.restFat,
    restProtein : this.restProtein
  
}
    
    );
  }
}
