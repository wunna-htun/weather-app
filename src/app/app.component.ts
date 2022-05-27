import { Component } from '@angular/core';
import { WeatherData } from './weather';
import { WeatherService } from './weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  cityName='Yangon';
  weatherData?: WeatherData;


  constructor(private weatherService:WeatherService){

  }

  ngOnInit():void{
    this.getWeatherData(this.cityName)
    this.cityName = '';
  }

  onSubmit(){
    console.log("cityname",this.cityName)
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }


  getWeatherData(cityName:string){
    this.weatherService.getWeatherData(this.cityName)
    .subscribe(response=>{
      this.weatherData = response;
      console.log('weather data',this.weatherData)
    }
    
    )

  }


}
