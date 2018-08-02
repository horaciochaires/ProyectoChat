import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavServersComponent } from '../app/nav-servers/nav-servers.component';
import { Server1Component } from './server1/server1.component';
import { Server2Component } from './server2/server2.component';
import { NavChatComponent } from './nav-chat/nav-chat.component';
import { MessengerComponent } from './pages/messenger/messenger.component';

const routes: Routes = [
  {
    path: '',
    component: MessengerComponent
  },
  {
    path: 'server1',
    component: Server1Component
  },
  {
    path: 'server2',
    component: Server2Component
  },
  {
    path: 'mensajes/:user',
    component: Server1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
