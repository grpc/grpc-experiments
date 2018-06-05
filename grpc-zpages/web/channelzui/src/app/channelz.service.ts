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
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class ChannelzService {
  baseUrl = "/grpcz_internal";

  constructor(private http: HttpClient) {}

  private makeUrl(method: string, req: {}): string {
    const encodedMethod = encodeURIComponent(method);
    const encodedReq = encodeURIComponent(JSON.stringify(req));
    return `${this.baseUrl}?full_method_name=${encodedMethod}&request=${encodedReq}`;
  }

  getHelper(url: string) {
    console.log("getting: " + url);
    return this.http.get(url, {responseType: "text"})
        .pipe(map((buf: string) => {
          console.log(`Received: ${buf}`);
          // TODO: only parse if 200, otherwise put error into UI
          const json = JSON.parse(buf);
          console.log(`Parsed into: ${json}`);
          return json;
        }));
  }

  getServers(startId: number): Observable<{}> {
    const url = this.makeUrl(
        "grpc.channelz.v1.Channelz/GetServers", {"startServerId": startId});
    return this.getHelper(url);
  }

  getServerSockets(serverId: number, startId: number): Observable<{}> {
    const url = this.makeUrl(
        "grpc.channelz.v1.Channelz/GetServerSockets",
        {"serverId": serverId, "startSocketId": startId});
    return this.getHelper(url);
  }

  getTopChannels(startId: number): Observable<{}> {
    const url = this.makeUrl(
        "grpc.channelz.v1.Channelz/GetTopChannels", {"startChannelId": startId});
    return this.getHelper(url);
  }

  getSubchannel(id: number): Observable<{}> {
    const url = this.makeUrl(
        "grpc.channelz.v1.Channelz/GetSubchannel", {"subchannelId": id});
    return this.getHelper(url);
  }

  getChannel(id: number): Observable<{}> {
    const url = this.makeUrl(
        "grpc.channelz.v1.Channelz/GetChannel", {"channelId": id});
    return this.getHelper(url);
  }

  getSocket(id: number): Observable<{}> {
    const url = this.makeUrl(
        "grpc.channelz.v1.Channelz/GetSocket", {"socketId": id});
    return this.getHelper(url);
  }
}
