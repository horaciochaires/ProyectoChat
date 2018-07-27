import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-chat2',
  templateUrl: './nav-chat2.component.html',
  styleUrls: ['./nav-chat2.component.css']
})
export class NavChat2Component implements OnInit {
  heroes = [];
  usuarioSeleccionado = "Default";
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(localStorage.getItem("item") + ": " + newHero);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
