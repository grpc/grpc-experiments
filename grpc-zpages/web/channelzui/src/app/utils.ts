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

// goog and proto are symbols provided by grpc generated code
// In OSS, the grpc generated code is imported from a standalone .js file
declare var goog: any;
declare var proto: any;
goog.require('proto.grpc.channelz.v1.SocketOptionLinger');
goog.require('proto.grpc.channelz.v1.SocketOptionTimeout');
goog.require('proto.grpc.channelz.v1.SocketOptionTcpInfo');
goog.require('proto.grpc.channelz.v1.ChannelConnectivityState.State');

const protoAnyToStringHelpers = {
  'type.googleapis.com/grpc.channelz.v1.SocketOptionLinger': (protoAny: any) => {
    const solinger = proto.grpc.channelz.v1.SocketOptionLinger.deserializeBinary(protoAny.getValue());
    const duration = solinger.getDuration();
    if ('undefined' === typeof duration) {
      return "active: " + solinger.getActive();
    }
    return "active: " + solinger.getActive() + "\n" +
      "seconds: " + duration.getSeconds() + "\n" +
      "nanos: " + duration.getNanos() + "\n";
  },
  'type.googleapis.com/grpc.channelz.v1.SocketOptionTimeout': (protoAny: any) => {
    const sotimeout = proto.grpc.channelz.v1.SocketOptionTimeout.deserializeBinary(protoAny.getValue());
    return "seconds: " + sotimeout.getDuration().getSeconds() + "\n" +
      "nanos: " + sotimeout.getDuration().getNanos() + "\n";
  },
  'type.googleapis.com/grpc.channelz.v1.SocketOptionTcpInfo': (protoAny: any) => {
    const tcpi = proto.grpc.channelz.v1.SocketOptionTcpInfo.deserializeBinary(protoAny.getValue());
    return "tcpi_state: " + tcpi.getTcpiState() + "\n" +
    "tcpi_ca_state: " + tcpi.getTcpiCaState() + "\n" +
    "tcpi_retransmits: " + tcpi.getTcpiRetransmits() + "\n" +
    "tcpi_probes: " + tcpi.getTcpiProbes() + "\n" +
    "tcpi_backoff: " + tcpi.getTcpiBackoff() + "\n" +
    "tcpi_options: " + tcpi.getTcpiOptions() + "\n" +
    "tcpi_snd_wscale: " + tcpi.getTcpiSndWscale() + "\n" +
    "tcpi_rcv_wscale: " + tcpi.getTcpiRcvWscale() + "\n" +
    "tcpi_rto: " + tcpi.getTcpiRto() + "\n" +
    "tcpi_ato: " + tcpi.getTcpiAto() + "\n" +
    "tcpi_snd_mss: " + tcpi.getTcpiSndMss() + "\n" +
    "tcpi_rcv_mss: " + tcpi.getTcpiRcvMss() + "\n" +
    "tcpi_unacked: " + tcpi.getTcpiUnacked() + "\n" +
    "tcpi_sacked: " + tcpi.getTcpiSacked() + "\n" +
    "tcpi_lost: " + tcpi.getTcpiLost() + "\n" +
    "tcpi_retrans: " + tcpi.getTcpiRetrans() + "\n" +
    "tcpi_fackets: " + tcpi.getTcpiFackets() + "\n" +
    "tcpi_last_data_sent: " + tcpi.getTcpiLastDataSent() + "\n" +
    "tcpi_last_ack_sent: " + tcpi.getTcpiLastAckSent() + "\n" +
    "tcpi_last_data_recv: " + tcpi.getTcpiLastDataRecv() + "\n" +
    "tcpi_last_ack_recv: " + tcpi.getTcpiLastAckRecv() + "\n" +
    "tcpi_pmtu: " + tcpi.getTcpiPmtu() + "\n" +
    "tcpi_rcv_ssthresh: " + tcpi.getTcpiRcvSsthresh() + "\n" +
    "tcpi_rtt: " + tcpi.getTcpiRtt() + "\n" +
    "tcpi_rttvar: " + tcpi.getTcpiRttvar() + "\n" +
    "tcpi_snd_ssthresh: " + tcpi.getTcpiSndSsthresh() + "\n" +
    "tcpi_snd_cwnd: " + tcpi.getTcpiSndCwnd() + "\n" +
    "tcpi_advmss: " + tcpi.getTcpiAdvmss() + "\n" +
    "tcpi_reordering: " + tcpi.getTcpiReordering() + "\n";
  }
};

export function protoAnyToStringHelper(packedAny: any): string {
  if (packedAny.getTypeUrl() in protoAnyToStringHelpers) {
    return protoAnyToStringHelpers[packedAny.getTypeUrl()](packedAny);
  } else {
    return "Unrecognized Any type: " + packedAny.getTypeUrl();
  }
}

// Registers a handler that can take a google.protobuf.Any for the given
// typeUrl and returns a human friendly string.
export function registerProtoAnyToStringFn(
  typeUrl: string,
  fn: (protoAny: any) => string): void {
  protoAnyToStringHelpers[typeUrl] = fn;
}

function protoEnumToString(enumClass, enumVal) {
  return Object.keys(enumClass).find(k => enumClass[k] === enumVal);
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
