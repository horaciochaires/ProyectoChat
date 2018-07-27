import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  imgs=[
    "https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/Batman-512.png",
    "https://www.shareicon.net/data/2016/08/18/813791_people_512x512.png"
  ]
  users = [{nombre:"Batman",img:"https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/Batman-512.png"},
  {nombre:"Superman",img:"https://www.shareicon.net/data/2016/08/18/813791_people_512x512.png"},
  {nombre:"Mujer Maravilla",img:"https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/wonder-women-512.png"},
  {nombre:"Flash",img:"https://cdn4.iconfinder.com/data/icons/superheroes/512/theflash-512.png"}

];
  
  constructor() { }  
  guardarLocal(users){
    localStorage.setItem("item",users.nombre)
  }
  ngOnInit() {
  }

}
