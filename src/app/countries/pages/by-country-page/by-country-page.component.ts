import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/ICountry';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public initialValue: string = "";
  public countries: ICountry[] = [];

  constructor(private countriesService : CountriesService){

  }
  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
    this.countries = this.countriesService.cacheStore.byCountries.countries;
  }

  searchCountry(term: string):void {
    this.countriesService.searchCountry(term).subscribe(
      countries => {
        this.countries = countries;
      }
    );
  }
}
