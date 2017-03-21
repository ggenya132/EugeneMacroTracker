import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Meal } from '../app/Interface/Meal';
/*
  Generated class for the Macros provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Macros {

  meal: Meal;

  meals: Meal[] = [

  ]

  
  mealProtein : number;
  mealFat : number;
  mealCarbs : number; 
  trainingProtein : number; 
  trainingCarbs : number;
  trainingFat : number;
  restProtein : number;
  restCarbs : number;
  restFat : number;

  constructor(public http: Http) {
    console.log('Hello Macros Provider');
  }


 getMeals() {


    this.http.get("http://localhost:8080/meals").map(res => res.json()).subscribe(

      data => {



        for (let prop in data) {
          console.log(data[prop])
          let meal: Meal = data[prop];
          this.meals[prop] = meal;
          console.log(this.meals[prop])
        }
      }

    )
    // this.event.subscribe("student:created", (data => {
//for later 
    //   this.getStudents();
    }
  
}
