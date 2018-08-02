import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesagesDataService {
  private usuarios:any[]=[
    {id:'1', mensaje:'Hola'},
    {id:'2', mensaje:'Pasame el codigo porque el isntructor solo ayuda a jesus :('}
  ]
  constructor() { }
  public getmensajes():any[]{
    return this.usuarios;
  }
  public postMensajes(mensaje:any){
    const mensajeobj={
      id:new Date().getTime().toString(),
      mensaje:mensaje
    };
    this.usuarios.push(mensajeobj)
    console.log(mensajeobj);
  }
  
}
