import {Component, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {WeatherPage} from "../pages/weather/weather";
import {WeatherServiceProvider} from "../providers/weather-service/weather-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('myNav') nav: NavController;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public weatherService:WeatherServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.weatherService.getWeatherData().then((data)=>{

        this.nav.setRoot(TabsPage,{tabs:data});

      });

    });
  }
}
