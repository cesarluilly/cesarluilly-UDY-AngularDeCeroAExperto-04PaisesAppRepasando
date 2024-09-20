import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { ICountry } from '../interfaces/ICountry';
import { ICacheStore } from '../interfaces/cache-store.interface';
import { TypeRegion } from '../interfaces/region.type';



// Los servicios funcionan con inyeccion de dependencia, a traves de
//  singleton, es decir una unica instancia para toda la
//  la aplicacion.
@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL:string = 'https://restcountries.com/v3.1'


  public cacheStore : ICacheStore = {
    byCapital:      {term: '', countries: [] },
    byCountries:    {term: '', countries: [] },
    byRegion:       {region: '', countries: [] }

  };

  constructor(private httpClient: HttpClient) {
    console.log('Countries service init');


  }

  private getCountriesRequest(url: string): Observable<ICountry[]> {

    return this.httpClient.get<ICountry[]>(url)
    // Agregamos esta linea, para en caso de que el api mande error, entonces que por defecto
    //    el servicio mande un arreglo, simulando que el api no trono, si no que no se encontro
    //    respuesta y limpie lo de la consulta anterior.
    .pipe(
      catchError(error => {
        console.log(error);

        return of([])
      })
      // Lo utilizamos para simular que el servicio esta
      //    tardando un poner un loader.
      ,delay ( 2000 )
    );
  }

  searchCountryByAlphaCode(code: string): Observable<ICountry | null>{
    const url = `${this.apiURL}/alpha/${code}`;

    return this.httpClient.get<ICountry[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(error => {
        console.log(error);

        return of(null)
      }),
      // Lo utilizamos para simular que el servicio esta
      //    tardando un poner un loader.
      delay ( 2000 )
    );
  }


  searchCapital(term: string): Observable<ICountry[]>{
    //  Como vemos, devuelve un observable, pero para que se
    //    ejecute, tenemos que suscribirnos al observable.

    const url = `${this.apiURL}/capital/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        // El tap no influye nada en el funcionamiento. Solo es para ejecutar o hacer algo
        //    enseguida despues de haberse consultado el servicio a traves del observable.
        tap(countries => this.cacheStore.byCapital = { term, countries })
      );

    // Podemos hacer uso de los operadores RxJS
    // return this.httpClient.get<ICountry[]>(url)
    // .pipe(
    //   tap(item => console.log('Tab1', item)),
    //   map(item => []),
    //   tap(item => console.log('Tab2', item)),
    // );

  }

  searchCountry(term: string): Observable<ICountry[]>{
    const url = `${this.apiURL}/name/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        // El tap no influye nada en el funcionamiento. Solo es para ejecutar o hacer algo
        //    enseguida despues de haberse consultado el servicio a traves del observable.
        tap(countries => this.cacheStore.byCountries = { term, countries })
      );
  }

  searchCountryByRegion(region: TypeRegion): Observable<ICountry[]>{
    const url = `${this.apiURL}/region/${region}`;

    return this.getCountriesRequest(url)
      .pipe(
        // El tap no influye nada en el funcionamiento. Solo es para ejecutar o hacer algo
        //    enseguida despues de haberse consultado el servicio a traves del observable.
        tap(countries => this.cacheStore.byRegion = { region, countries })
      );
  }
}
