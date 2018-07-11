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
  selector: 'app-subchannel',
  templateUrl: './subchannel.component.html',
  styleUrls: ['./subchannel.component.css']
})
export class SubchannelComponent implements OnInit {
  enteredData: string;
  subchannel: any;
  id: number;
  subchannelDataStr: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private channelzService: ChannelzService) { }

  ngOnInit() {
    this.render();
    this.route.params.subscribe(e => this.render());
  }

  processEntry(): void {
    this.router.navigateByUrl('/channelz/subchannel/' + this.enteredData);
  }

  private render(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam == null ? 0 : +idParam;
    this.enteredData = this.id.toString();
    this.channelzService.getSubchannel(this.id)
      .subscribe((response: any) => this.handleResponse(response));
  }

  private handleResponse(resp: any): void {
    this.subchannel = resp.getSubchannel();
    this.subchannelDataStr = channelDataHelper(this.subchannel.getData());
  }
}
