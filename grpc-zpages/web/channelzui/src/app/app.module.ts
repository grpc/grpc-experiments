/*
 * @license
 * Copyright 2018, gRPC Authors All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServersComponent } from './servers/servers.component';
import { SocketComponent } from './socket/socket.component';

import { ChannelComponent } from './channel/channel.component';
import { ChannelzService } from './channelz.service';
import { HelpComponent } from './help/help.component';
import { JsonPretty, AddrPretty } from './utils';
import { ServerSocketsComponent } from './server-sockets/server-sockets.component';
import { SubchannelComponent } from './subchannel/subchannel.component';
import { TopChannelsComponent } from './top-channels/top-channels.component';


@NgModule({
  declarations: [
    AppComponent,
    AddrPretty,
    ChannelComponent,
    HelpComponent,
    JsonPretty,
    ServerSocketsComponent,
    ServersComponent,
    SocketComponent,
    SubchannelComponent,
    TopChannelsComponent,
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ChannelzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
