import { Component, OnInit } from '@angular/core';
import {MesagesDataService} from '../services/mesages-data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  Friend=[];
  constructor(private Friends: MesagesDataService) { }  
  guardarLocal(users){
    localStorage.setItem("item",users.nombre)
    localStorage.setItem("image",users.img)
  }

 

  ngOnInit() {
    this.Friend=this.Friends.getFriends();
  }

}
