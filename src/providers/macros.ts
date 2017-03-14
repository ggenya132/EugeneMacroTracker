import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Macros provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Macros {


  
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

}
