import { Component, OnInit, Input } from '@angular/core';
import {MesagesDataService} from '../services/mesages-data.service'

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
@Input() item:string;
users = [{id:1,name:"Batman",img:"https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/Batman-512.png"},
  {id:2,name:"Superman",img:"https://www.shareicon.net/data/2016/08/18/813791_people_512x512.png"},
  {id:3,name:"Mujer Maravilla",img:"https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/wonder-women-512.png"},
  {id:4,name:"Flash",img:"https://cdn4.iconfinder.com/data/icons/superheroes/512/theflash-512.png"}

];
  estado: boolean;
  Friends=[];
  constructor(private FriendsServices: MesagesDataService) { }

  ngOnInit() {
    this.Friends=this.FriendsServices.getFriends();
  }
  agregarnombre(){
    return localStorage.getItem("item")
  }

 setConectado(){

  return this.estado=true;
  
  }

  setDesconectado(){
    
    return this.estado=false;
    
  }
  guardarLocal(users){
    localStorage.setItem("item",users.nombre)
    localStorage.setItem("image",users.img)
    localStorage.setItem("IdReceptor",users.id)
    
  }

}
