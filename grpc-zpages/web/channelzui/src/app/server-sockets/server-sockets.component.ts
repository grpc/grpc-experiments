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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelzService } from '../channelz.service';

@Component({
  selector: 'app-server-sockets',
  templateUrl: './server-sockets.component.html',
  styleUrls: ['./server-sockets.component.css']
})
export class ServerSocketsComponent implements OnInit {
  sockets: any[];
  serverId: number;
  socketStartId: number;
  nextSocketId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private channelzService: ChannelzService
  ) { }

  ngOnInit() {
    this.render();
    this.route.params.subscribe(e => this.render());
  }

  processEntry(): void {
    this.router.navigateByUrl(`/channelz/serversockets/${this.serverId}/${this.socketStartId}`);
  }

  private render(): void {
    const serverIdParam = this.route.snapshot.paramMap.get('serverId');
    this.serverId = serverIdParam == null ? 0 : +serverIdParam;
    const socketStartIdParam = this.route.snapshot.paramMap.get('socketStartId');
    this.socketStartId = socketStartIdParam == null ? 0 : +socketStartIdParam;
    this.channelzService.getServerSockets(this.serverId, this.socketStartId)
      .subscribe((resp: any) => this.handleResponse(resp));
  }

  private handleResponse(resp: any): void {
    this.sockets = resp['socketRef'];
    if (!resp['end']) {
      const last = this.sockets[this.sockets.length - 1];
      this.nextSocketId = last['socketId'];
    }
  }
}
