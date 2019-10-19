import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { DetailsComponent } from './page/details/details.component';
import { WeatherService } from './services/weather/weather.service';
import { UiService } from './services/ui/ui.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    UiService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
