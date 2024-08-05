import {  Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-table',
  templateUrl: './countryTable.component.html',
  styles: [`
    :host {
      display: block;
    }
    img {
      width: 35px;
    }
  `]
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];


}
