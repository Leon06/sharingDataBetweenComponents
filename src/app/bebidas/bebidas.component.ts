import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  @Input() bebida = "";

  @Output() nuevaBebidaEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Click al botton
  agregarNuevaBebida(value : string){
    this.nuevaBebidaEvent.emit(value)
  }

}
