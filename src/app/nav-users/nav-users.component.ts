import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-users',
  templateUrl: './nav-users.component.html',
  styleUrls: ['./nav-users.component.css']
})
export class NavUsersComponent implements OnInit {
  estado: boolean;
  item: string;
  constructor() { }

  ngOnInit() {
  }

  agregarnombres(){
    this.item= localStorage.getItem("item")
 }

  setConectado(){

    return this.estado=true;
    
    }
  
    setDesconectado(){
      
      return this.estado=false;
      
    }

}
