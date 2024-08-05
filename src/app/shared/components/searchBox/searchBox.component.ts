import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SearchBoxComponent {
  @Input()
  public placeholdercesar: string = ''

  @Output()
  public OnValueCesar: EventEmitter<string> =  new EventEmitter<string>();


  emitValue(value:string): void{
    this.OnValueCesar.emit(value);
  }


}
