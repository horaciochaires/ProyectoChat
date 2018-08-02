import { Component, OnInit, Input } from '@angular/core';
import {MesagesDataService} from '../services/mesages-data.service'

@Component({
  selector: 'app-nav-chat',
  templateUrl: './nav-chat.component.html',
  styleUrls: ['./nav-chat.component.css']
})
export class NavChatComponent implements OnInit {
  heroes = [];
  mensaje:string;
  usuarioSeleccionado = "Default";
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(localStorage.getItem("item") + ": " + newHero);
    }
  }
  @Input() user:string;
  constructor(private MesagesDatasService: MesagesDataService) { }

  ngOnInit() {
    this.heroes= this.MesagesDatasService.getmensajes();
  }
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.heroes.push(localStorage.getItem("item") + ": " + event.currentTarget.value);
     return false;
  }
    }
    public  postMensaje(){
      this.MesagesDatasService.postMensajes(this.mensaje);
      this.mensaje='';
     
    }
  }
  
  
 


