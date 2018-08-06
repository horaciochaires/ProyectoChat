import { Component, OnInit, Input } from '@angular/core';
import {MesagesDataService} from '../services/mesages-data.service'

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
@Input() item:string;

  
  Friends=[];
  constructor(private FriendsServices: MesagesDataService) { }

  ngOnInit() {
    this.Friends=this.FriendsServices.getFriends();
  }
  agregarnombre(){
    return localStorage.getItem("id")
  }

 
  guardarLocal(users){
    localStorage.setItem("item",users.nombre)
    localStorage.setItem("image",users.img)
    localStorage.setItem("IdReceptor",users.id)
    
  }

}
