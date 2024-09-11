import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/ICountry';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: ICountry[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;



  constructor(private countriesService : CountriesService){

  }

  searchRegion(region: Region):void {

    this.selectedRegion = region;
    this.countriesService.searchCountryByRegion(region).subscribe(
      countries => {
        this.countries = countries;
      }
    );
  }
}
