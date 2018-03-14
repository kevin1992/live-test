
import {Injectable} from '@angular/core';
import moment from 'moment';

/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherServiceProvider {

  constructor() {

  }


  getWeatherData() {
    return fetch("http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b1b15e88fa797225412429c1c50c122a1").then(response=>{
      return response.json();
    }).then((data) => {

      let list = data.list;


      return this.get2NextDays(list);


    });

  }


  get2NextDays(list){

    let today = moment(list[0].dt*1000).utc();
    let next2 = moment(list[0].dt*1000).add('2' ,'days').utc();

    let days = list.filter((elem)=>{

      let date = moment(elem.dt*1000).utc();

      return (date.isBetween(today,next2)||date.isSame(today)||date.isSame(next2)) && date.hours()==12;

    });

    //les harcodeo algunos iconos ya que todos vienen con clear y otro formato de iconos
    days.forEach((d,index)=>{

      if(index==0){
        d.icon = 'icon-Cloud-Sun';
      }

      if(index==1){
        d.icon = 'icon-Sun';
      }


      if(index==2){
        d.icon = 'icon-Cloud-Rain';
      }

    });

    return days;

  }



}
