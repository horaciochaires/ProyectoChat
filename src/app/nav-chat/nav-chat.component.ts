import { Component, OnInit, Input } from '@angular/core';
import {MesagesDataService} from '../services/mesages-data.service'
import { AngularWaitBarrier } from '../../../node_modules/blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-nav-chat',
  templateUrl: './nav-chat.component.html',
  styleUrls: ['./nav-chat.component.css']
})
export class NavChatComponent implements OnInit {
  heroes = [];
  mensaje:string;
  usuarioSeleccionado = "Default";
  usuarioReceptor: any;
  id:any;
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(localStorage.getItem("item") + ": " + newHero);
    }
  }
  @Input() user:Number;
  constructor(private MesagesDatasService: MesagesDataService) {}

  ngOnInit() {
    this.heroes= this.MesagesDatasService.getMensajesPorUsuario(this.user);
   
  }
  keyDownFunction(event) {
    console.log("Entro");
    if(event.keyCode == 13) {
      this.heroes.push(localStorage.getItem("item") + ": " + event.currentTarget.value);
     return false;
  }
    }
  
    public  postMensajeLike(){
      this.usuarioReceptor= localStorage.getItem("IdReceptor");
      this.MesagesDatasService.postMensajes("👍",this.usuarioReceptor);
      this.mensaje='';
    }
    public  postMensaje(){
      this.usuarioReceptor= localStorage.getItem("IdReceptor");
      this.MesagesDatasService.postMensajes(this.mensaje,this.usuarioReceptor);
      this.mensaje='';
     
    }

      
    public mensajesPorUsuario(){
     this.heroes= this.MesagesDatasService.getMensajesPorUsuario(this.id);
    }


  }

  
 


