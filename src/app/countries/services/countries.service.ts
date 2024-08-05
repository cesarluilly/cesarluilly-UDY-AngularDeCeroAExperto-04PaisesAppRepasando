import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { ICountry } from '../interfaces/ICountry';




@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL:string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) {


  }


  searchCountryByAlphaCode(code: string): Observable<ICountry | null>{
    const url = `${this.apiURL}/alpha/${code}`;

    return this.httpClient.get<ICountry[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(error => {
        console.log(error);

        return of(null)
      })
    );
  }


  searchCapital(term: string): Observable<ICountry[]>{
    //  Como vemos, devuelve un observable, pero para que se
    //    ejecute, tenemos que suscribirnos al observable.

    const url = `${this.apiURL}/capital/${term}`;

    // Podemos hacer uso de los operadores RxJS
    // return this.httpClient.get<ICountry[]>(url)
    // .pipe(
    //   tap(item => console.log('Tab1', item)),
    //   map(item => []),
    //   tap(item => console.log('Tab2', item)),
    // );

    return this.httpClient.get<ICountry[]>(url)
    // Agregamos esta linea, para en caso de que el api mande error, entonces que por defecto
    //    el servicio mande un arreglo, simulando que el api no trono, si no que no se encontro
    //    respuesta y limpie lo de la consulta anterior.
    .pipe(
      catchError(error => {
        console.log(error);

        return of([])
      })
    );
  }

  searchCountry(term: string): Observable<ICountry[]>{
    const url = `${this.apiURL}/name/${term}`;

    return this.httpClient.get<ICountry[]>(url)
    .pipe(
      catchError(error => {
        console.log(error);

        return of([])
      })
    );
  }

  searchCountryByRegion(term: string): Observable<ICountry[]>{
    const url = `${this.apiURL}/region/${term}`;

    return this.httpClient.get<ICountry[]>(url)
    .pipe(
      catchError(error => {
        console.log(error);

        return of([])
      })
    );
  }
}
