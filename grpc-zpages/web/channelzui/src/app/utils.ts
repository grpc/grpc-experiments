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


@Pipe({name: 'jsonpretty'})
export class JsonPretty implements PipeTransform {
  transform(value: any): string {
    return JsonPretty.transform(value);
  }

  static transform(value: any): string {
    if (value == null) {
      return "NULL";
    }
    return JSON.stringify(value, null, 2);
  }
}


@Pipe({name: 'addrpretty'})
export class AddrPretty implements PipeTransform {
  transform(value: any): string {
    return AddrPretty.transform(value);
  }

  static transform(addr: {}): string {
    if (addr['tcpipAddress'] == null) {
      return JsonPretty.transform(addr);
    }
    const copy = JSON.parse(JSON.stringify(addr));
    const tcpIp = copy['tcpipAddress'];
    const ipAddress = tcpIp['ipAddress'];
    const binary = atob(ipAddress);
    const addressLen = binary.length;
    if (binary.length === 4) {
      // ipv4: turn bytes into decimal form
      tcpIp['ipAddress'] = binary
          .split("")
          .map((c: string) => c.charCodeAt(0))
          .join(".");
    } else if (binary.length === 16) {
      // ipv6: turn bytes into hex, pad with a 0 so always 2 digits long
      const hex = binary.split("")
          .map((c: string) => ("0" + c.charCodeAt(0).toString(16)).substr(-2))
          .join("");
      // use regex to split into 4 character chunks
      tcpIp['ipAddress'] = hex.match(/..../g).join(":");
    }
    return JsonPretty.transform(copy);
  }
}
