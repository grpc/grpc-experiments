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

import { Pipe, PipeTransform } from '@angular/core';

declare var protoAnyToString: any;
declare var protoEnumToString: any;
declare var proto: any;

export function protoAnyToStringHelper(packedAny: any): string {
  return protoAnyToString(packedAny);
}

export function channelDataHelper(channelData: any): string {
  return `state: ${protoEnumToString(proto.grpc.channelz.v1.ChannelConnectivityState.State, channelData.getState().getState())}
target: ${channelData.getTarget()}
calls started: ${channelData.getCallsStarted()}
calls succeeded: ${channelData.getCallsSucceeded()}
calls failed: ${channelData.getCallsFailed()}
last call started: ${DateFromProto.transform(channelData.getLastCallStartedTimestamp())}`;
}

@Pipe({name: 'dateFromProto'})
export class DateFromProto implements PipeTransform {
  transform(protodate: any): string {
    return DateFromProto.transform(protodate);
  }

  static transform(protodate: any): string {
    if (protodate == null) {
      return "undefined"
    }
    // the 0 is required to set the initial date to unix epoch
    const date = new Date(0);
    date.setUTCSeconds(protodate.getSeconds());
    date.setUTCMilliseconds(protodate.getNanos() / 1000000.0);
    return date.toISOString();
  }
}

@Pipe({name: 'addrToString'})
export class AddrToString implements PipeTransform {
  transform(value: any): string {
    return AddrToString.transform(value);
  }

  static transform(addr: any): string {
    if (addr == null) {
      return "undefined"
    } else if (addr.getUdsAddress() != null) {
      return addr.getUdsAddress();
    } else if (addr.getOtherAddress() != null) {
      return protoAnyToStringHelper(addr.getOtherAddress().getValue());
    } else {
      const tcpAddrPort = addr.getTcpipAddress();
      const tcpAddr = tcpAddrPort.getIpAddress();
      if (tcpAddr.length === 4) {
        // ipv4: turn bytes into decimal form
        return tcpAddr
          .join(".") + ":" + tcpAddrPort.getPort();
      } else if (tcpAddr.length === 16) {
        // ipv6: turn bytes into hex, pad with a 0 so always 2 digits long
        const hex = tcpAddr
          .map((c: number) => ("0" + c.toString(16)).substr(-2))
          .join("");
        // use regex to split into 4 character chunks
        return "[" + hex.match(/..../g).join(":")  + "]:" + tcpAddrPort.getPort();
      }
    }
  }
}
