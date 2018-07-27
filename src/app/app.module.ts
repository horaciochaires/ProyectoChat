import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChanelTextComponent } from './chanel-text/chanel-text.component';
import { ChanelVoiceComponent } from './chanel-voice/chanel-voice.component';
import { NavChatComponent } from './nav-chat/nav-chat.component';
import { NavServersComponent } from './nav-servers/nav-servers.component';
import { NavToolsComponent } from './nav-tools/nav-tools.component';
import { NavUsersComponent } from './nav-users/nav-users.component';
import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Server1Component } from './server1/server1.component';
import { Server2Component } from './server2/server2.component';
import { SearchComponent } from './search/search.component';
import { ChanelText2Component } from './chanel-text2/chanel-text2.component';
import { ChanelVoice2Component } from './chanel-voice2/chanel-voice2.component';
import { NavTools2Component } from './nav-tools2/nav-tools2.component';
import { Users2Component } from './users2/users2.component';
import { NavChat2Component } from './nav-chat2/nav-chat2.component';
import { NavUsers2Component } from './nav-users2/nav-users2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChanelTextComponent,
    ChanelVoiceComponent,
    NavChatComponent,
    NavServersComponent,
    NavToolsComponent,
    NavUsersComponent,
    UsersComponent,
    Server1Component,
    Server2Component,
    SearchComponent,
    ChanelText2Component,
    ChanelVoice2Component,
    NavTools2Component,
    Users2Component,
    NavChat2Component,
    NavUsers2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
