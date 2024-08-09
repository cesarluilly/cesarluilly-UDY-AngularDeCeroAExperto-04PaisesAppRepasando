import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SearchBoxComponent implements OnInit{

  //  Tubo de Agua
  //  Este termino es para cuando tecleamos en un Input, pero al momento de
  //    dejar de teclar, entonces queremos que se lance una peticion al
  //    back.
  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholdercesar: string = ''

  @Output()
  public OnValueCesar: EventEmitter<string> =  new EventEmitter<string>();

  @Output()
  public OnDebounce: EventEmitter<string> =  new EventEmitter<string>();

  ngOnInit(): void{

    //  Encargado de hacer las emisiones es este.
    this.debouncer
    .pipe(
      //  Me tengo que esperar un segundo para ver si no
      //    recibo mas valores y no emito nada.
      debounceTime(300)
    )
    .subscribe(value => {
      console.log('debouncer value', value);

      this.OnDebounce.emit(value);
    })
  }

  emitValue(value:string): void{
    this.OnValueCesar.emit(value);
  }

  onKeyPress(searchTerm: string){
    // console.log(searchTerm);

    this.debouncer.next(searchTerm);

  }

}
