import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharing-data-between-components';
  bebidaActual = "Coffee"
  bebidas = ['leche','Tea','Coffee']

  agregarBebidaList(nuevaBebidaa : string){
    this.bebidas.push(nuevaBebidaa)
  }
}
