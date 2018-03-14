import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherPage } from './weather';
import {PipesModule} from "../../pipes/pipes.module";
import {TemperaturePipe} from "../../pipes/temperature/temperature";

@NgModule({
  declarations: [
    WeatherPage,
  ],
  imports: [

    PipesModule,
    IonicPageModule.forChild(WeatherPage),

  ],
  exports: [
    WeatherPage
  ]
})
export class WeatherPageModule {}
