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

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

// When building with angular CLI in OSS:
//   The standalone channelz.js file provides a proto symbol with the
//   client and message types. goog.require() is effectively a noop.
// When building with closure compiler:
//   goog.require() imports the client and message libraries
declare var goog: any;
goog.require('proto.grpc.channelz.v1.ChannelzClient');
goog.require('proto.grpc.channelz.v1.GetChannelRequest');
goog.require('proto.grpc.channelz.v1.GetServerSocketsRequest');
goog.require('proto.grpc.channelz.v1.GetServersRequest');
goog.require('proto.grpc.channelz.v1.GetSocketRequest');
goog.require('proto.grpc.channelz.v1.GetSubchannelRequest');
goog.require('proto.grpc.channelz.v1.GetTopChannelsRequest');
declare var proto: any;

@Injectable()
export class ChannelzService {
  xsrfMeta: {};
  client: any;

  constructor() {
    this.xsrfMeta = ChannelzService.genXsrfMeta();
    this.client = new proto.grpc.channelz.v1.ChannelzClient(
      environment.grpcRemoteAddr);
  }

  private static genXsrfMeta(): any {
    const arr = new Int8Array(32); // 256 bits of entropy
    window.crypto.getRandomValues(arr);
    const xsrfVal = btoa(arr.toString());
    document.cookie = `gdebug-xsrf-token=${xsrfVal};path=/`;
    return {"gdebug-xsrf-token": xsrfVal};
  }

  private functionToObserver(rpcMethod: any, req: any): Observable<any> {
    return new Observable(observer => {
      // To use a method passed around as a parameter, the method must be bound
      // to an instance of the object.
      rpcMethod.bind(this.client)(req, this.xsrfMeta, function(err, response) {
        observer.next(response);
        observer.complete();
      })
      }
    )
  }

  getServers(startId: number): Observable<{}> {
    const req = new proto.grpc.channelz.v1.GetServersRequest();
    req.setStartServerId(startId);
    return this.functionToObserver(this.client.getServers, req);
  }

  getServerSockets(serverId: number, startId: number): Observable<{}> {
    const req = new proto.grpc.channelz.v1.GetServerSocketsRequest();
    req.setServerId(serverId);
    req.setStartSocketId(startId);
    return this.functionToObserver(this.client.getServerSockets, req);
  }

  getTopChannels(startId: number): Observable<{}> {
    const req = new proto.grpc.channelz.v1.GetTopChannelsRequest();
    req.setStartChannelId(startId);
    return this.functionToObserver(this.client.getTopChannels, req);
  }

  getSubchannel(id: number): Observable<{}> {
    const req = new proto.grpc.channelz.v1.GetSubchannelRequest();
    req.setSubchannelId(id);
    return this.functionToObserver(this.client.getSubchannel, req);
  }

  getChannel(id: number): Observable<{}> {
    const req = new proto.grpc.channelz.v1.GetChannelRequest();
    req.setChannelId(id);
    return this.functionToObserver(this.client.getChannel, req);
  }

  getSocket(id: number): Observable<{}> {
    const req = new proto.grpc.channelz.v1.GetSocketRequest();
    req.setSocketId(id);
    return this.functionToObserver(this.client.getSocket, req);
  }
}
