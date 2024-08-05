import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/ICountry';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: ICountry[] = [];

  constructor(private countriesService : CountriesService){

  }

  searchCountry(term: string):void {
    this.countriesService.searchCountry(term).subscribe(
      countries => {
        this.countries = countries;
      }
    );
  }
}
