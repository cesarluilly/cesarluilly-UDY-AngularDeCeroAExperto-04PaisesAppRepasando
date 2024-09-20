import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  //  Tubo de Agua
  //  Este termino es para cuando tecleamos en un Input, pero al momento de
  //    dejar de teclar, entonces queremos que se lance una peticion al
  //    back.
  private debouncer: Subject<string> = new Subject<string>();

  // De esta forma manejamos de forma independiente la suscripcion.
  private debouncerSescription? : Subscription;

  @Input()
  public initialPlaceholder: string = ''

  @Input()
  public initialValue: string = ''

  //                        Ya no se utiliza ahorita, solo se utilizo para la primera fase.
  @Output()
  public OnValueCesar: EventEmitter<string> =  new EventEmitter<string>();

  @Output()
  public OnDebounce: EventEmitter<string> =  new EventEmitter<string>();

  ngOnInit(): void{

    //  Encargado de hacer las emisiones es este.
    this.debouncerSescription = this.debouncer
    .pipe(
      //  Me tengo que esperar un segundo para ver si no
      //    recibo mas valores y no emito nada.
      debounceTime(300)
    )
    // Siempre que tengas un suscribe, hay que hacer limp
    .subscribe(value => {
      console.log('debouncer value', value);

      this.OnDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    console.log('Destruido');

    // Siempre que hagamos un suscribe, hay que limpiarlo despues
    //    de que ya no lo necesitamos, ya que de lo contrario
    //    la suscripcion va a estar escuchando a pesar de ya no
    //    tener un componente que ya no lo necesite.
    // Esto nos ayudar a tener la memoria de los observable
    //   al minimo.
    this.debouncerSescription?.unsubscribe();
  }

  emitValue(value:string): void{
    this.OnValueCesar.emit(value);
  }

  onKeyPress(searchTerm: string){
    // console.log(searchTerm);

    this.debouncer.next(searchTerm);

  }

}
