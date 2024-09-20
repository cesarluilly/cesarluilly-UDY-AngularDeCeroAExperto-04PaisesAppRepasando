import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';


import { ICountry } from '../../interfaces/ICountry';
import { TypeRegion } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{
  public countries: ICountry[] = [];
  public regions: TypeRegion[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: TypeRegion;



  constructor(private countriesService : CountriesService){

  }

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
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
