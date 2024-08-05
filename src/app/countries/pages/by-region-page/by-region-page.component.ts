import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/ICountry';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: ICountry[] = [];

  constructor(private countriesService : CountriesService){

  }

  searchRegion(term: string):void {
    this.countriesService.searchCountryByRegion(term).subscribe(
      countries => {
        this.countries = countries;
      }
    );
  }
}
