import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesagesDataService {
  private usuarios:any[]=[
    {id:'1', mensaje:'Hola',idUserReceptor:1},
    {id:'2', mensaje:'Pasame el codigo porque el isntructor solo ayuda a jesus :(',idUserReceptor:1},
    {id:'2', mensaje:'Hola',idUserReceptor:2}
  ]
  
private friends:any[]=[
  {id:1,nombre:"Batman",img:"https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/Batman-512.png"},
  {id:2,nombre:"SuperMan",img:"https://www.shareicon.net/data/2016/08/18/813791_people_512x512.png"},
  {id:3,nombre:"Mujer Maravilla",img:"https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/wonder-women-512.png"},
  {id:4,nombre:"Flash",img:"https://cdn4.iconfinder.com/data/icons/superheroes/512/theflash-512.png"}
]
public id:any;



  constructor() { }
  public getmensajes():any[]{
    return this.usuarios;
  }

public getMensajesPorUsuario(id:Number){
  
  console.log(this.usuarios.filter(x=> x.idUserReceptor==localStorage.getItem("id")));
 return this.usuarios.filter(x=> x.idUserReceptor==id);
}

  public postMensajes(mensaje:any,userReceptor:any){
    const mensajeobj={
      id:new Date().getTime().toString(),
      mensaje:mensaje,
      idUserReceptor:userReceptor
    };
    this.usuarios.push(mensajeobj)
    console.log(mensajeobj);
  }

//Metodos para las conversaciones
 public getFriends():any[]{

   return this.friends;
  }

  public getIdChat(){
    return this.id=localStorage.getItem("id");
  }
  
}
