import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server1',
  templateUrl: './server1.component.html',
  styleUrls: ['./server1.component.css']
})
export class Server1Component implements OnInit {
@Input() item:string;
users = [{name:"Batman",img:"https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/Batman-512.png"},
  {name:"Superman",img:"https://www.shareicon.net/data/2016/08/18/813791_people_512x512.png"},
  {name:"Mujer Maravilla",img:"https://cdn2.iconfinder.com/data/icons/many-people-flat-icons/128/wonder-women-512.png"},
  {name:"Flash",img:"https://cdn4.iconfinder.com/data/icons/superheroes/512/theflash-512.png"}

];
  constructor() { }

  ngOnInit() {
  }
  agregarnombre(){
    return localStorage.getItem("item")
 }
}
