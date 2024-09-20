import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/ICountry';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  public countries: ICountry[] = [];
  public isLoading: boolean = false;
  public initialValue: string = "";

  constructor(private countriesService : CountriesService){

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string):void {

    this.isLoading = true;

    console.log('Desde ByCapitaPage');
    console.log(term);

    this.countriesService.searchCapital(term).subscribe(
      countries => {
        this.countries = countries;

        // Despues de que ya tengo el resultado, remuevo el loading.
        this.isLoading = false;
      }
    );
  }
}
