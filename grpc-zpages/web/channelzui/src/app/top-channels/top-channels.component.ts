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
  selector: 'app-top-channels',
  templateUrl: './top-channels.component.html',
  styleUrls: ['./top-channels.component.css']
})
export class TopChannelsComponent implements OnInit {
  startId: number = 0;
  topChannelsList: any[];
  nextId:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private channelzService: ChannelzService) { }

  ngOnInit() {
    this.render();
    this.route.params.subscribe(e => this.render());
  }

  processEntry(): void {
    this.router.navigateByUrl(`/channelz/topchannels/${this.startId}`)
  }

  private render(): void {
    const startIdParam = this.route.snapshot.paramMap.get('startId');
    this.startId = startIdParam == null ? 0 : +startIdParam;
    this.channelzService.getTopChannels(this.startId)
      .subscribe((resp: any) => this.handleResponse(resp));
  }

  channelDataHelperProxy(channelData: any): string {
    return channelDataHelper(channelData);
  }

  private handleResponse(resp: any): void {
    this.topChannelsList = resp.getChannelList();
    if (!resp.getEnd()) {
      const last = this.topChannelsList[this.topChannelsList.length - 1];
      this.nextId = last.getRef().getChannelId();
    } else {
      this.nextId = null;
    }
  }
}
