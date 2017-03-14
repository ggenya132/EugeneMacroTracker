import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, Events} from 'ionic-angular';
import {SetMacrosPage} from '../set-macros/set-macros';
import {ChartPage} from '../chart-page/chart-page';
import {TabsPage} from '../tabs/tabs';
import {Macros} from '../../providers/macros';
/*
  Generated class for the AddMeal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-meal',
  templateUrl: 'add-meal.html'
})
export class AddMealPage {
    macros : any = Macros;
    foodUrl: string = "/Users/eugenevendensky/MacroAgain/src/pages/add-meal/chickensalas.jpg";
  meals: any = [];
  ChartPage : any = ChartPage;

  mealProtein : number;
  mealCarbs : number;
  mealFat : number; 
  paramsData : any;

  trainingProtein : number; 
  trainingCarbs : number;
  trainingFat : number;
  restProtein : number;
  restCarbs : number;
  restFat : number;

  constructor(public navCtrl: NavController, public params: NavParams, public alrtContrler: AlertController, public modalCtrl: ModalController, public event : Events) {
    
    
    this.paramsData = params.data;
    console.log(this.params.data);
     this.trainingProtein = params.get("trainingProtein") 
    this.trainingCarbs = params.get("trainingCarbs")
    this.trainingFat = params.get("trainingFat") 
    this.restProtein = params.get("restProtein");
    this.restCarbs = params.get("restCarbs");
    this.restFat = params.get ("restFat"); 

  }




  addMeal(){
 
        let prompt = this.alrtContrler.create({
            title: 'Add a meal',
             message: 'Name your meal and add your macros, Protein, Carbohydrate, Fat.',

            inputs: [{
                name: 'title',
                placeholder: "Meal name"
            }, 
            {
                name: 'Protein',
                placeholder: "Protein"
                
            },
            {
                name: 'Carbohydrate',
                placeholder: "Carbohydrate"

            },

            {
                name: 'Fat',
                placeholder: "Fat"
            }
            ],
            
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        this.meals.push(data);
                    }
                }
            ]
        });
 
        prompt.present();
    }

     editMeal(meal){
 
        let prompt = this.alrtContrler.create({
            title: 'Edit Meal',
            message: "Edit your macros",

            inputs: [{

               name: 'title',
                placeholder: "Meal name"

            },
              {
                name: 'Protein',
                placeholder: "Protein"
                
            },
            {
                name: 'Carbohydrate',
                placeholder: "Carbohydrate"

            },

            {
                name: 'Fat',
                placeholder: "Fat"
            }
            
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.meals.indexOf(meal);
 
                        if(index > -1){
                          this.meals[index] = data;
                        }
                    }
                }
            ]
        });
 
        prompt.present();       
 
    }

      deleteMeal(meal){
 
        let index = this.meals.indexOf(meal);
 
        if(index > -1){
            this.meals.splice(index, 1);
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMealPage');
  }

     presentProfileModal() {
   let profileModal = this.modalCtrl.create(SetMacrosPage);
   profileModal.present();
 }

 
 logMeal(meal){
      console.log(this.trainingProtein);
    console.log(this.trainingCarbs);
    console.log(this.trainingFat);
    console.log(this.trainingCarbs);
    console.log(this.restProtein);
    console.log(this.restCarbs);
    console.log(this.restFat);
    this.mealProtein = meal.Protein;
    this.mealFat = meal.Fat;
    this.mealCarbs = meal.Carbohydrate;
    this.macros.trainingProtein =   this.macros.trainingProtein - this.mealProtein;
    this.macros.trainingCarbs = this.macros.trainingCarbs - this.mealCarbs;
    this.macros.trainingFat = this.macros.trainingFat - this.mealFat;
    this.macros.restProtein = this.macros.restProtein - this.mealProtein;
    this.macros.restCarbs = this.macros.restCarbs - this.mealCarbs;
    this.macros.restFat  = this.macros.restFat - this.mealFat;
    console.log(this.macros.trainingProtein);
    console.log(this.macros.trainingCarbs);
    console.log(this.macros.trainingFat);
    console.log(this.macros.trainingCarbs);
    console.log(this.macros.restProtein);
    console.log(this.macros.restCarbs);
    console.log(this.macros.restFat);
    let data = {
        trainingProtein: this.macros.trainingProtein,
        trainingCarbs: this.macros.trainingCarbs,
        trainingFat:  this.macros.trainingFat,
        restProtein:  this.macros.restProtein,
        restCarbs:   this.macros.restCarbs,
        restFat: this.macros.restFat
    };

    this.event.publish("macros:logged", data);
 }

}
