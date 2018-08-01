import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-chat',
  templateUrl: './nav-chat.component.html',
  styleUrls: ['./nav-chat.component.css']
})
export class NavChatComponent implements OnInit {
  heroes = [];
  usuarioSeleccionado = "Default";
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(localStorage.getItem("item") + ": " + newHero);
    }
  }
  @Input() user:string;
  constructor() { }

  ngOnInit() {
  }
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.heroes.push(localStorage.getItem("item") + ": " + event.currentTarget.value);
     return false;
  }
    }
  }
  
 


