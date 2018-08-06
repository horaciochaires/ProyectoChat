import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavServersComponent} from '../app/nav-servers/nav-servers.component'
import { Server1Component } from './server1/server1.component';
import { Server2Component } from './server2/server2.component';
import { NavChatComponent } from './nav-chat/nav-chat.component';

const routes: Routes = [
  {
    path: '', component:Server1Component,
      
  },
  {
    path: 'mensajes/:user',component:NavChatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
