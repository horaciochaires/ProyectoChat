import { Component, OnInit } from '@angular/core';
import {MesagesDataService} from '../services/mesages-data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  Chats=[];
  idUser: Number;
  constructor(private Friends: MesagesDataService) { }  
  guardarLocal(users){
    localStorage.setItem("item",users.nombre)
    localStorage.setItem("id",users.id)
    localStorage.setItem("image",users.img)
    
     this.idUser=users.id
    // alert(this.idUser);
    
  }

  ngOnInit() {
    
    this.Chats=this.Friends.getFriends();
  }



}
