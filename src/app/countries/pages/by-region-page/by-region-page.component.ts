import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';


import { ICountry } from '../../interfaces/ICountry';
import { TypeRegion } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: ICountry[] = [];
  public regions: TypeRegion[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: TypeRegion;



  constructor(private countriesService : CountriesService){

  }

  searchRegion(region: TypeRegion):void {

    this.selectedRegion = region;
    this.countriesService.searchCountryByRegion(region).subscribe(
      countries => {
        this.countries = countries;
      }
    );
  }
}
