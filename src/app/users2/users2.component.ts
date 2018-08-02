import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css']
})
export class Users2Component implements OnInit {
 
  
  constructor() { }  
  guardarLocal(users){
    localStorage.setItem("item",users.nombre)
  }
  ngOnInit() {
  }

}
