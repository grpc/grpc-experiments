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
import { channelDataHelper } from '../utils';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  enteredData: string = "0";
  channel: any;
  id: number = 0;
  channelDataStr: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private channelzService: ChannelzService) { }

  ngOnInit() {
    this.render();
    this.route.params.subscribe(e => this.render());
  }

  processEntry(): void {
    this.router.navigateByUrl('/channelz/channel/' + this.enteredData);
  }

  private render(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam == null ? 0 : +idParam;
    this.enteredData = this.id.toString();
    this.channelzService.getChannel(this.id)
      .subscribe((response: any) => this.handleResponse(response));
  }

  private handleResponse(resp: any): void {
    this.channel = resp.getChannel();
    this.channelDataStr = channelDataHelper(this.channel.getData());
  }
}
