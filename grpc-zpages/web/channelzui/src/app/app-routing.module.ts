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

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent }  from './servers/servers.component';
import { SocketComponent } from './socket/socket.component';
import { TopChannelsComponent } from './top-channels/top-channels.component';
import { SubchannelComponent } from './subchannel/subchannel.component';
import { ChannelComponent } from './channel/channel.component';
import { ServerSocketsComponent } from './server-sockets/server-sockets.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'channelz/servers/:startId', component: ServersComponent },
  { path: 'channelz/servers', component: ServersComponent },
  { path: 'channelz/servers/:startId', component: ServersComponent },
  { path: 'channelz/servers', component: ServersComponent },
  { path: 'channelz/topchannels/:startId', component: TopChannelsComponent },
  { path: 'channelz/topchannels', component: TopChannelsComponent },
  { path: 'channelz/socket/:id', component: SocketComponent},
  { path: 'channelz/socket', component: SocketComponent},
  { path: 'channelz/channel/:id', component: ChannelComponent },
  { path: 'channelz/channel', component: ChannelComponent },
  { path: 'channelz/subchannel/:id', component: SubchannelComponent },
  { path: 'channelz/subchannel', component: SubchannelComponent },
  { path: 'channelz/serversockets/:serverId/:socketStartId', component: ServerSocketsComponent },
  { path: 'channelz/serversockets/:serverId', component: ServerSocketsComponent },
  { path: 'channelz/serversockets', component: ServerSocketsComponent },
  { path: 'channelz/help', component: HelpComponent },
  { path: 'channelz', redirectTo: '/', pathMatch: 'full' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
