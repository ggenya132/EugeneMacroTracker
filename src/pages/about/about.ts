import { Component, ViewChild } from '@angular/core';

import { NavController, ModalController, ViewController } from 'ionic-angular';
import { AddMealPage } from '../add-meal/add-meal';
import { Chart } from 'chart.js';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart : any;

 presentProfileModal() {
   let profileModal = this.modalCtrl.create(AddMealPage);
   profileModal.present();
   this.view.dismiss();
 }


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public view: ViewController ) {

     this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
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

  }


 
 
}
