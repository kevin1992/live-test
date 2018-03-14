import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {WeatherServiceProvider} from "../../providers/weather-service/weather-service";
import moment from "moment";
import {animate, state, style, transition, trigger} from "@angular/animations";

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  animations: [
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms ease-in')
      ])
    ])
  ]
})
export class WeatherPage {

  weatherInfo;
  screenState = 'in';

  constructor(public navCtrl: NavController, public navParams: NavParams,public weatherService:WeatherServiceProvider,public event:Events) {

    this.event.subscribe('weatherInfo',weatherInfo=>{
      this.weatherInfo = weatherInfo;
    });

  }


  ionViewDidEnter(){



  }


  ionViewDidLoad() {

  }


}
