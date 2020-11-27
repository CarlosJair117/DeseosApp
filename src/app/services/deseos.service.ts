import { Injectable } from '@angular/core';
import { Lista } from '../pages/models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { 
    
    const lista1 = new Lista('Recolectar piedra para el vicio');
    const lista2 = new Lista('Ser batman');

    this.listas.push(lista1, lista2);
    
   }

   crearLista( titulo:string ) {
      const nuevaLista= new Lista(titulo);
      this.listas.push(nuevaLista);
   }
}
