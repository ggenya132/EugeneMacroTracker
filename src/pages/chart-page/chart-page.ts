import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Chart } from 'chart.js';
import {SetMacrosPage} from '../set-macros/set-macros';
import {Macros } from '../../providers/macros';
@Component({
  selector: 'page-chart',
  templateUrl: 'chart-page.html'
})
export class ChartPage {
  macros : any = Macros;
  isRestDay : boolean = true; 
  trainingProtein : number; 
  trainingCarbs : number;
  trainingFat : number;
  restProtein : number;
  restCarbs : number;
  restFat : number;
    

    @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvasTraining') doughnutCanvasTraining;
    @ViewChild('doughnutCanvasResting') doughnutCanvasResting;

    @ViewChild('lineCanvas') lineCanvas;
 
    barChart: any;
    doughnutChartTraining: any;
    doughnutChartResting: any;

    lineChart: any;
 
    constructor(public navCtrl: NavController, public params: NavParams, public event: Events) {
 

    // this.trainingProtein = params.get("trainingProtein") 
    // this.trainingCarbs = params.get("trainingCarbs")
    // this.trainingFat = params.get("trainingFat") 
    // this.restProtein = params.get("restProtein");
    // this.restCarbs = params.get("restCarbs");
    // this.restFat = params.get ("restFat"); 



    }
 
    ionViewDidLoad() {
        this.event.subscribe("macros:logged", (data)=>{

            console.log(data);

             this.doughnutChartTraining = new Chart(this.doughnutCanvasTraining.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Protein", "Fats", "Carbohydrates"],
                datasets: [{
                    label: '# of Votes',
                    data: [this.macros.trainingProtein, this.macros.trainingFat, this.macros.trainingCarbs],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    
                    ]
                }]
            }
 
        });

         this.doughnutChartResting = new Chart(this.doughnutCanvasResting.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Protein", "Fats", "Carbohydrates"],
                datasets: [{
                    label: '# of Votes',
                    data: [this.macros.restProtein, this.macros.restFat, this.macros.restCarbs],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    
                    ]
                }]
            }
 
        });
        });
       console.log( this.macros.trainingProtein);
    console.log(this.macros.trainingCarbs);
    console.log(this.macros.trainingFat);
    console.log(this.macros.restProtein);
    console.log(this.macros.restFat);
    console.log(this.macros.restCarbs);
 

           
    
    }
 

 ngAfterViewInit(){


 this.doughnutChartTraining = new Chart(this.doughnutCanvasTraining.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Protein", "Fats", "Carbohydrates"],
                datasets: [{
                    label: '# of Votes',
                    data: [this.macros.trainingProtein, this.macros.trainingFat, this.macros.trainingCarbs],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    
                    ]
                }]
            }
 
        });

         this.doughnutChartResting = new Chart(this.doughnutCanvasResting.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Protein", "Fats", "Carbohydrates"],
                datasets: [{
                    label: '# of Votes',
                    data: [this.macros.restProtein, this.macros.restFat, this.macros.restCarbs],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    
                    ]
                }]
            }
 
        });


  // this.barChart = new Chart(this.barCanvas.nativeElement, {

          
 
  //           type: 'bar',
  //           data: {
  //               labels: ["Red", "Blue", "Yellow"],
  //               datasets: [{
  //                   label: '# of Votes',
  //                   data: [this.trainingCarbs, this.trainingProtein, this.trainingFat],
  //                   backgroundColor: [
  //                       'rgba(255, 99, 132, 0.2)',
  //                       'rgba(54, 162, 235, 0.2)',
  //                       'rgba(255, 206, 86, 0.2)'
            
  //                   ],
  //                   borderColor: [
  //                       'rgba(255,99,132,1)',
  //                       'rgba(54, 162, 235, 1)',
  //                       'rgba(255, 206, 86, 1)'
                    
  //                   ],
  //                   borderWidth: 1
  //               }]
  //           },
  //           options: {
  //               scales: {
  //                   yAxes: [{
  //                       ticks: {
  //                           beginAtZero:true
  //                       }
  //                   }]
  //               }
  //           }
 
  //       });


       

 }
 
editMacros(): void{ 
  this.navCtrl.push(SetMacrosPage);
}

test(): void{

  if(this.isRestDay == false){

    console.log("it is false");
  }

  if(this.isRestDay == true){

    console.log("it is true")

      }
  }



}