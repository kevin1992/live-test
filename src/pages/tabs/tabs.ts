import {Component, ViewChild} from '@angular/core';
import moment from 'moment';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WeatherPage } from '../weather/weather';
import {WeatherServiceProvider} from "../../providers/weather-service/weather-service";
import {Events, NavParams, Tabs} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WeatherPage;
  @ViewChild('myTabs') tabRef: Tabs;


  tabs = [];
  weatherInfo = {};

  constructor(public weatherService:WeatherServiceProvider,public navParams:NavParams,public event:Events) {

    this.tabs = this.navParams.get('tabs');


  }

  ionViewDidLoad(){

    this.changeTab();

  }

  changeTab(){

    let index = 0;

    if(this.tabRef.getSelected()){
      index = this.tabRef.getSelected().index;
    }

    this.weatherInfo = this.tabs[index];

    this.event.publish('weatherInfo',this.weatherInfo);
  }


  formatDate(dt){
    return moment(dt*1000).format('ddd');
  }
}
