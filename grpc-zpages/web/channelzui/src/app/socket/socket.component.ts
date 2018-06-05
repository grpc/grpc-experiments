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
import { JsonPretty } from '../utils'

export class SocketOpt {
  constructor(public name: string, public value: string) {}
}

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {
  enteredData: string;
  socket: any;
  id: number;
  simplifiedData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private channelzService: ChannelzService) { }

  ngOnInit() {
    this.render();
    this.route.params.subscribe(e => this.render());
  }

  processEntry(): void {
    this.router.navigateByUrl(`/channelz/socket/${this.enteredData}`);
  }

  private render(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam == null ? 0 : +idParam;
    this.enteredData = this.id.toString();
    this.channelzService.getSocket(+this.id)
      .subscribe((response: any) => this.handleResponse(response));
  }

  private handleResponse(socketResponse: any): void {
    this.socket = socketResponse['socket'];
    this.simplifiedData = this.simplifiedDataHelper();
  }

  /**
   * Returns a copy of the socket data, but with socket options removed.
   */
  simplifiedDataHelper(): any {
    if (this.socket['data'] == null) {
      return {};
    }
    const copy: any = JSON.parse(JSON.stringify(this.socket.data));
    copy['option'] = null;
    return copy;
  }

  socketOptions(): SocketOpt[] {
    if (this.socket['data'] == null || this.socket['data']['option'] == null) {
      return [];
    }
    return this.socket['data']['option'].map((opt: any) => {
      // value OR additional is set
      if (opt['value']) {
        return new SocketOpt(opt['name'], opt['value']);
      } else {
        return new SocketOpt(opt['name'], opt['additional']);
      }
    });
  }
}
