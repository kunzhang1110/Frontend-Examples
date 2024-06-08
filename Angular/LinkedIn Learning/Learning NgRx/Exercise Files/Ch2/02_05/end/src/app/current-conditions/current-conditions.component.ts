import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';

import {Router} from "@angular/router";
import {State} from '../reducers';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    zipcodes: Array<String>;

    constructor(private weatherService : WeatherService,
                private router : Router,
                private store: Store<State>) {
        store.select(state => state.zipcodes)
            .subscribe(zips => this.zipcodes = zips.zipcodes);
    }

    showForecast(zipcode : string) {
        this.router.navigate(['/forecast', zipcode]);
    }
}
