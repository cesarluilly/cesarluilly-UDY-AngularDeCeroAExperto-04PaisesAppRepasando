import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL:string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) {


  }

  searchCapital(term: string): Observable<Country[]>{
    //  Como vemos, devuelve un observable, pero para que se
    //    ejecute, tenemos que suscribirnos al observable.

    const url = `${this.apiURL}/capital/${term}`;

    return this.httpClient.get<Country[]>(url);
  }

}
