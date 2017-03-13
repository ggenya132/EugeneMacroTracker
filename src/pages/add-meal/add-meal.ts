import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import {SetMacrosPage} from '../set-macros/set-macros';
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
    foodUrl: string = "/Users/eugenevendensky/MacroAgain/src/pages/add-meal/chickensalas.jpg";
  meals: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alrtContrler: AlertController, public modalCtrl: ModalController) {}

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

 

}
