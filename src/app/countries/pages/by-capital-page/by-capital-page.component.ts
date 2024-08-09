import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/ICountry';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: ICountry[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService : CountriesService){

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
