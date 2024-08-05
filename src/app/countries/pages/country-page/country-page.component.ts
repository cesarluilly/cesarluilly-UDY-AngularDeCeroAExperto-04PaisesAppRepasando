import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Idd } from '../../interfaces/ICountry';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,

  ){

  }


  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe((params: Params)  => {

  //     // Cuando el objeto no tiene mapeado una clase para
  //     //    acceder a las propiedades, podemos acceder o
  //     //    especificar la propiedad encerrado en llave
  //     console.log({params: params['id'] });
  //   }
  //   );

  // ngOnInit(): void {

  //   //  Lo que tenemos es un observable dentro de otro
  //   //    observable
  //   this.activatedRoute.params.subscribe(({ id })  => {

  //     this.searchCountry(id);

  //     console.log({params: id });
  //   }
  //   );
  // }

  ngOnInit(): void {

    //  Lo que tenemos es un observable dentro de otro
    //    observable
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id)),

    ).subscribe( (country ) => {

      if(!country){
        return this.router.navigateByUrl('')
      }

      console.log('Tenemos un pais');

      return;
    });

  }

  searchCountry(params: Params){
    this.countriesService.searchCountryByAlphaCode(params['id'])
        .subscribe(country => {
          console.log(country);

        });
  }



}
