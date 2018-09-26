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
import { DateFromProto, protoAnyToStringHelper } from '../utils'

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
  securiyStr: string;

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
    this.socket = socketResponse.getSocket();
    this.simplifiedData = this.simplifiedDataHelper();
    this.securiyStr = this.securityHelper(this.socket.getSecurity());
  }

  /**
   * Returns a copy of the socket data, but with socket options removed.
   */
  simplifiedDataHelper(): string {
    const data = this.socket.getData();
    if (data == null) {
      return "undefined";
    }
    return `Streams started: ${data.getStreamsStarted()}
Streams succeeded: ${data.getStreamsSucceeded()}
Streams failed: ${data.getStreamsFailed()}
Messages sent: ${data.getMessagesSent()}
Messages received: ${data.getMessagesReceived()}
Keepalives sent: ${data.getKeepAlivesSent()}
Last local stream created: ${DateFromProto.transform(data.getLastLocalStreamCreatedTimestamp())}
Last remote stream created: ${DateFromProto.transform(data.getLastRemoteStreamCreatedTimestamp())}
Last message sent: ${DateFromProto.transform(data.getLastMessageSentTimestamp())}
Last message received: ${DateFromProto.transform(data.getLastMessageReceivedTimestamp())}
Local flow control window: ${data.getLocalFlowControlWindow()}
Remote flow control window: ${data.getRemoteFlowControlWindow()}
`
  }

  securityHelper(security: any): string {
    if (security == null) {
      return "plaintext";
    }
    if (security.getTls() != null) {
      const tls = security.getTls();
      return `standard name: ${tls.getStandardName()}
other name: ${tls.getOtherName()}
local cert (base64): ${btoa(tls.getLocalCertificate())}
remote cert (base64): ${btoa(tls.getRemoteCertificate())}`;
    } else if (security.getOther() != null) {
      const other = security.getOther();
      return `name: ${other.getName()}
value: ${protoAnyToStringHelper(other.getValue())}`;
    } else {
      return "plaintext"
    }
  }

  socketOptions(): SocketOpt[] {
    const data = this.socket.getData();
    if (data == null || data.getOptionList() == null) {
      return [];
    }

    return data.getOptionList().map((opt: any) => {
      if (opt.getAdditional() != null) {
        return new SocketOpt(
          opt.getName(), protoAnyToStringHelper(opt.getAdditional()));
      } else {
        return new SocketOpt(opt.getName(), opt.getValue());
      }
    });
  }
}
