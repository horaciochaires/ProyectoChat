import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChanelTextComponent } from './chanel-text/chanel-text.component';
import { ChanelVoiceComponent } from './chanel-voice/chanel-voice.component';
import { NavChatComponent } from './nav-chat/nav-chat.component';
import { NavServersComponent } from './nav-servers/nav-servers.component';
import { FormsModule } from '@angular/forms';
import { NavToolsComponent } from './nav-tools/nav-tools.component';
import { NavUsersComponent } from './nav-users/nav-users.component';
import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Server1Component } from './server1/server1.component';
import { Server2Component } from './server2/server2.component';
import { SearchComponent } from './search/search.component';
import { ChanelVoice2Component } from './chanel-voice2/chanel-voice2.component';
import { NavTools2Component } from './nav-tools2/nav-tools2.component';
import { Users2Component } from './users2/users2.component';
import { NavChat2Component } from './nav-chat2/nav-chat2.component';
import { NavUsers2Component } from './nav-users2/nav-users2.component';
import { StatusChatDirective } from './status-chat.directive';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterdataPipe } from './filterdata.pipe';

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
    ChanelVoice2Component,
    NavTools2Component,
    Users2Component,
    NavChat2Component,
    NavUsers2Component,
    StatusChatDirective,
    FilterdataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FilterPipeModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
