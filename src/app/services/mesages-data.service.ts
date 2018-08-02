import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesagesDataService {
  private usuarios:any[]=[
    {id:'1', mensaje:'Hola'},
    {id:'2', mensaje:'Pasame el codigo porque el isntructor solo ayuda a jesus :('}
  ]
  
private friends:any[]=[
  {id:1,nombre:"Batman",img:"https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/Batman-512.png"},
  {id:2,nombre:"SuperMan",img:"https://www.shareicon.net/data/2016/08/18/813791_people_512x512.png"},
  {id:3,nombre:"Mujer Maravilla",img:"https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/wonder-women-512.png"},
  {id:4,nombre:"Flash",img:"https://cdn4.iconfinder.com/data/icons/superheroes/512/theflash-512.png"}
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

//Metodos para las conversaciones
 public getFriends():any[]{

   return this.friends;
  }
  
}
