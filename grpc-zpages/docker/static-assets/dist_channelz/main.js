(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _socket_socket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket/socket.component */ "./src/app/socket/socket.component.ts");
/* harmony import */ var _top_channels_top_channels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-channels/top-channels.component */ "./src/app/top-channels/top-channels.component.ts");
/* harmony import */ var _subchannel_subchannel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subchannel/subchannel.component */ "./src/app/subchannel/subchannel.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _server_sockets_server_sockets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server-sockets/server-sockets.component */ "./src/app/server-sockets/server-sockets.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'channelz/servers/:startId', component: _servers_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"] },
    { path: 'channelz/servers', component: _servers_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"] },
    { path: 'channelz/servers/:startId', component: _servers_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"] },
    { path: 'channelz/servers', component: _servers_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"] },
    { path: 'channelz/topchannels/:startId', component: _top_channels_top_channels_component__WEBPACK_IMPORTED_MODULE_4__["TopChannelsComponent"] },
    { path: 'channelz/topchannels', component: _top_channels_top_channels_component__WEBPACK_IMPORTED_MODULE_4__["TopChannelsComponent"] },
    { path: 'channelz/socket/:id', component: _socket_socket_component__WEBPACK_IMPORTED_MODULE_3__["SocketComponent"] },
    { path: 'channelz/socket', component: _socket_socket_component__WEBPACK_IMPORTED_MODULE_3__["SocketComponent"] },
    { path: 'channelz/channel/:id', component: _channel_channel_component__WEBPACK_IMPORTED_MODULE_6__["ChannelComponent"] },
    { path: 'channelz/channel', component: _channel_channel_component__WEBPACK_IMPORTED_MODULE_6__["ChannelComponent"] },
    { path: 'channelz/subchannel/:id', component: _subchannel_subchannel_component__WEBPACK_IMPORTED_MODULE_5__["SubchannelComponent"] },
    { path: 'channelz/subchannel', component: _subchannel_subchannel_component__WEBPACK_IMPORTED_MODULE_5__["SubchannelComponent"] },
    { path: 'channelz/serversockets/:serverId/:socketStartId', component: _server_sockets_server_sockets_component__WEBPACK_IMPORTED_MODULE_7__["ServerSocketsComponent"] },
    { path: 'channelz/serversockets/:serverId', component: _server_sockets_server_sockets_component__WEBPACK_IMPORTED_MODULE_7__["ServerSocketsComponent"] },
    { path: 'channelz/serversockets', component: _server_sockets_server_sockets_component__WEBPACK_IMPORTED_MODULE_7__["ServerSocketsComponent"] },
    { path: 'channelz/help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"] },
    { path: 'channelz', redirectTo: '/', pathMatch: 'full' },
    { path: '', redirectTo: '/', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Channelz</h2>\n<nav>\n  <a routerLink=\"/channelz/servers\" routerLinkActive=\"active\">Servers</a>&nbsp;&nbsp;\n  <a routerLink=\"/channelz/topchannels\" routerLinkActive=\"active\">TopChannels</a>&nbsp;&nbsp;\n  <a routerLink=\"/channelz/serversockets\" routerLinkActive=\"active\">Server sockets</a>&nbsp;&nbsp;\n  <a routerLink=\"/channelz/channel\" routerLinkActive=\"active\">Channel</a>&nbsp;&nbsp;\n  <a routerLink=\"/channelz/subchannel\" routerLinkActive=\"active\">Subchannel</a>&nbsp;&nbsp;\n  <a routerLink=\"/channelz/socket\" routerLinkActive=\"active\">Socket</a>&nbsp;&nbsp;\n  <a routerLink=\"/channelz/help\" routerLinkActive=\"active\">Help</a>&nbsp;&nbsp;\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Channelz';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _socket_socket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./socket/socket.component */ "./src/app/socket/socket.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _channelz_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./channelz.service */ "./src/app/channelz.service.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");
/* harmony import */ var _server_sockets_server_sockets_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./server-sockets/server-sockets.component */ "./src/app/server-sockets/server-sockets.component.ts");
/* harmony import */ var _subchannel_subchannel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subchannel/subchannel.component */ "./src/app/subchannel/subchannel.component.ts");
/* harmony import */ var _top_channels_top_channels_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./top-channels/top-channels.component */ "./src/app/top-channels/top-channels.component.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
                _utils__WEBPACK_IMPORTED_MODULE_11__["AddrToString"],
                _utils__WEBPACK_IMPORTED_MODULE_11__["DateFromProto"],
                _channel_channel_component__WEBPACK_IMPORTED_MODULE_8__["ChannelComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"],
                _server_sockets_server_sockets_component__WEBPACK_IMPORTED_MODULE_12__["ServerSocketsComponent"],
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_6__["ServersComponent"],
                _socket_socket_component__WEBPACK_IMPORTED_MODULE_7__["SocketComponent"],
                _subchannel_subchannel_component__WEBPACK_IMPORTED_MODULE_13__["SubchannelComponent"],
                _top_channels_top_channels_component__WEBPACK_IMPORTED_MODULE_14__["TopChannelsComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [_channelz_service__WEBPACK_IMPORTED_MODULE_9__["ChannelzService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/channel/channel.component.css":
/*!***********************************************!*\
  !*** ./src/app/channel/channel.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/channel/channel.component.html":
/*!************************************************!*\
  !*** ./src/app/channel/channel.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Showing channel:</h3>\n<input #textbox type=\"text\" [(ngModel)]=\"enteredData\" (keyup.enter)=\"processEntry()\" required>\n<button (click)=\"processEntry()\">Refresh</button>\n<div>\n  <div *ngIf=\"channel\">\n  <table>\n    <tr>\n      <th>Field</th>\n      <th>Value</th>\n    </tr>\n    <tr>\n      <td>ChannelRef</td>\n      <td><pre>{{channel.getRef().getChannelId()}}[{{channel.getRef().getName()}}]</pre></td>\n    </tr>\n    <tr>\n      <td>Data</td>\n      <td><pre>{{channelDataStr}}</pre></td>\n    </tr>\n    <tr>\n      <td>Channels</td>\n      <td>\n        <div *ngFor=\"let ref of channel.getChannelRefList()\">\n          <a routerLink=\"/channelz/channel/{{ref.getChannelId()}}\">{{ref.getChannelId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td>Subchannels</td>\n      <td>\n        <div *ngFor=\"let ref of channel.getSubchannelRefList()\">\n          <a routerLink=\"/channelz/subchannel/{{ref.getSubchannelId()}}\">{{ref.getSubchannelId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td>Sockets</td>\n      <td>\n        <div *ngFor=\"let ref of channel.getSocketRefList()\">\n          <a routerLink=\"/channelz/socket/{{ref.getSocketId()}}\">{{ref.getSocketId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td>Channel trace summary</td>\n      <td><pre>{{traceSummary}}</pre></td>\n    </tr>\n    <tr>\n      <td>Channel trace events</td>\n      <td>\n        <div *ngIf=\"!traceEvents\"><pre>No events recorded</pre></div>\n        <div *ngFor=\"let evt of traceEvents\">\n          <pre>{{evt.combinedDetails}}</pre>\n          <div *ngIf=\"evt.channelRef\">\n            <pre> <a routerLink=\"/channelz/channel/{{evt.channelRef.getChannelId()}}\">{{evt.channelRef.getName()}}</a></pre>\n          </div>\n          <div *ngIf=\"evt.subchannelRef\">\n            <pre> <a routerLink=\"/channelz/subchannel/{{evt.subchannelRef.getSubchannelId()}}\">{{evt.subchannelRef.getName()}}</a></pre>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </table>\n  </div>\n  <div *ngIf=\"!channel && id\">\n    <p>Channel does not exist</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/channel/channel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/channel/channel.component.ts ***!
  \**********************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channelz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channelz.service */ "./src/app/channelz.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelComponent = /** @class */ (function () {
    function ChannelComponent(route, router, channelzService) {
        this.route = route;
        this.router = router;
        this.channelzService = channelzService;
        this.enteredData = "0";
        this.id = 0;
        this.traceEvents = null;
    }
    ChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.render();
        this.route.params.subscribe(function (e) { return _this.render(); });
    };
    ChannelComponent.prototype.processEntry = function () {
        this.router.navigateByUrl('/channelz/channel/' + this.enteredData);
    };
    ChannelComponent.prototype.render = function () {
        var _this = this;
        var idParam = this.route.snapshot.paramMap.get('id');
        this.id = idParam == null ? 0 : +idParam;
        this.enteredData = this.id.toString();
        this.channelzService.getChannel(this.id)
            .subscribe(function (response) { return _this.handleResponse(response); });
    };
    ChannelComponent.prototype.handleResponse = function (resp) {
        this.channel = resp.getChannel();
        this.channelDataStr = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["channelDataHelper"])(this.channel.getData());
        var channelTrace = this.channel.getData().getTrace();
        if (channelTrace != null && channelTrace.getEventsList() != null) {
            this.traceSummary = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["channelTraceSummary"])(channelTrace);
            this.traceEvents = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["traceEventHelper"])(channelTrace.getEventsList());
        }
    };
    ChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel',
            template: __webpack_require__(/*! ./channel.component.html */ "./src/app/channel/channel.component.html"),
            styles: [__webpack_require__(/*! ./channel.component.css */ "./src/app/channel/channel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _channelz_service__WEBPACK_IMPORTED_MODULE_2__["ChannelzService"]])
    ], ChannelComponent);
    return ChannelComponent;
}());



/***/ }),

/***/ "./src/app/channelz.service.ts":
/*!*************************************!*\
  !*** ./src/app/channelz.service.ts ***!
  \*************************************/
/*! exports provided: ChannelzService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelzService", function() { return ChannelzService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



goog.require('proto.grpc.channelz.v1.ChannelzClient');
goog.require('proto.grpc.channelz.v1.GetChannelRequest');
goog.require('proto.grpc.channelz.v1.GetServerSocketsRequest');
goog.require('proto.grpc.channelz.v1.GetServersRequest');
goog.require('proto.grpc.channelz.v1.GetSocketRequest');
goog.require('proto.grpc.channelz.v1.GetSubchannelRequest');
goog.require('proto.grpc.channelz.v1.GetTopChannelsRequest');
var ChannelzService = /** @class */ (function () {
    function ChannelzService() {
        this.xsrfMeta = ChannelzService_1.genXsrfMeta();
        this.client = new proto.grpc.channelz.v1.ChannelzClient(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].grpcRemoteAddr);
    }
    ChannelzService_1 = ChannelzService;
    ChannelzService.genXsrfMeta = function () {
        var arr = new Int8Array(32); // 256 bits of entropy
        window.crypto.getRandomValues(arr);
        var xsrfVal = btoa(arr.toString());
        document.cookie = "gdebug-xsrf-token=" + xsrfVal + ";path=/";
        return { "gdebug-xsrf-token": xsrfVal };
    };
    ChannelzService.prototype.functionToObserver = function (rpcMethod, req) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            // To use a method passed around as a parameter, the method must be bound
            // to an instance of the object.
            rpcMethod.bind(_this.client)(req, _this.xsrfMeta, function (err, response) {
                observer.next(response);
                observer.complete();
            });
        });
    };
    ChannelzService.prototype.getServers = function (startId) {
        var req = new proto.grpc.channelz.v1.GetServersRequest();
        req.setStartServerId(startId);
        return this.functionToObserver(this.client.getServers, req);
    };
    ChannelzService.prototype.getServerSockets = function (serverId, startId) {
        var req = new proto.grpc.channelz.v1.GetServerSocketsRequest();
        req.setServerId(serverId);
        req.setStartSocketId(startId);
        return this.functionToObserver(this.client.getServerSockets, req);
    };
    ChannelzService.prototype.getTopChannels = function (startId) {
        var req = new proto.grpc.channelz.v1.GetTopChannelsRequest();
        req.setStartChannelId(startId);
        return this.functionToObserver(this.client.getTopChannels, req);
    };
    ChannelzService.prototype.getSubchannel = function (id) {
        var req = new proto.grpc.channelz.v1.GetSubchannelRequest();
        req.setSubchannelId(id);
        return this.functionToObserver(this.client.getSubchannel, req);
    };
    ChannelzService.prototype.getChannel = function (id) {
        var req = new proto.grpc.channelz.v1.GetChannelRequest();
        req.setChannelId(id);
        return this.functionToObserver(this.client.getChannel, req);
    };
    ChannelzService.prototype.getSocket = function (id) {
        var req = new proto.grpc.channelz.v1.GetSocketRequest();
        req.setSocketId(id);
        return this.functionToObserver(this.client.getSocket, req);
    };
    ChannelzService = ChannelzService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChannelzService);
    return ChannelzService;
    var ChannelzService_1;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Java notes:</h2>\n  <ul>\n    <li>InProcessTransport is not a real socket, so in process servers and channels will\n      not provide socket level stats. If you try to load an InProcesTransport, channelz will\n      report that the socket is not found. This is normal. Use the provided channel, subchannel, or\n      server level stats instead.</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () { };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/server-sockets/server-sockets.component.css":
/*!*************************************************************!*\
  !*** ./src/app/server-sockets/server-sockets.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server-sockets/server-sockets.component.html":
/*!**************************************************************!*\
  !*** ./src/app/server-sockets/server-sockets.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Showing server sockets starting from:</h3>\nServer id:\n<input #serverIdTextBox type=\"text\" [(ngModel)]=\"serverId\" (keyup.enter)=\"processEntry()\" required>\nStarting socket:\n<input #socketStartIdTextBox type=\"text\" [(ngModel)]=\"socketStartId\" (keyup.enter)=\"processEntry()\" required>\n<button (click)=\"processEntry()\">Refresh</button>\n<div>\n  <table>\n    <tr>\n      <th>Sockets</th>\n    </tr>\n    <tr *ngFor=\"let s of sockets\">\n      <td>\n        <a routerLink=\"/channelz/socket/{{s.getSocketId()}}\">{{s.getSocketId()}}[{{s.getName()}}]</a>\n      </td>\n    </tr>\n  </table>\n</div>\n<div *ngIf=\"nextSocketId\">\n  <a routerLink=\"/channelz/serversockets/{{serverId}}/{{nextSocketId}}\">Click here for next page</a>\n</div>\n<div *ngIf=\"!nextSocketId\">\n  <p>End of results</p>\n</div>\n"

/***/ }),

/***/ "./src/app/server-sockets/server-sockets.component.ts":
/*!************************************************************!*\
  !*** ./src/app/server-sockets/server-sockets.component.ts ***!
  \************************************************************/
/*! exports provided: ServerSocketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSocketsComponent", function() { return ServerSocketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channelz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channelz.service */ "./src/app/channelz.service.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerSocketsComponent = /** @class */ (function () {
    function ServerSocketsComponent(route, router, channelzService) {
        this.route = route;
        this.router = router;
        this.channelzService = channelzService;
    }
    ServerSocketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.render();
        this.route.params.subscribe(function (e) { return _this.render(); });
    };
    ServerSocketsComponent.prototype.processEntry = function () {
        this.router.navigateByUrl("/channelz/serversockets/" + this.serverId + "/" + this.socketStartId);
    };
    ServerSocketsComponent.prototype.render = function () {
        var _this = this;
        var serverIdParam = this.route.snapshot.paramMap.get('serverId');
        this.serverId = serverIdParam == null ? 0 : +serverIdParam;
        var socketStartIdParam = this.route.snapshot.paramMap.get('socketStartId');
        this.socketStartId = socketStartIdParam == null ? 0 : +socketStartIdParam;
        this.channelzService.getServerSockets(this.serverId, this.socketStartId)
            .subscribe(function (resp) { return _this.handleResponse(resp); });
    };
    ServerSocketsComponent.prototype.handleResponse = function (resp) {
        this.sockets = resp.getSocketRefList();
        if (!resp.getEnd()) {
            var last = this.sockets[this.sockets.length - 1];
            this.nextSocketId = last.getSocketId();
        }
        else {
            this.nextSocketId = null;
        }
    };
    ServerSocketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-sockets',
            template: __webpack_require__(/*! ./server-sockets.component.html */ "./src/app/server-sockets/server-sockets.component.html"),
            styles: [__webpack_require__(/*! ./server-sockets.component.css */ "./src/app/server-sockets/server-sockets.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _channelz_service__WEBPACK_IMPORTED_MODULE_2__["ChannelzService"]])
    ], ServerSocketsComponent);
    return ServerSocketsComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/*!************************************************!*\
  !*** ./src/app/servers/servers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Showing servers starting from:</h3>\nServer id:\n<input #textbox type=\"text\" [(ngModel)]=\"startId\" (keyup.enter)=\"processEntry()\" required>\n<button (click)=\"processEntry()\">Refresh</button>\n<div>\n  <table>\n    <tr>\n      <th>Server</th>\n      <th>Calls started</th>\n      <th>Calls succeeded</th>\n      <th>Calls failed</th>\n      <th>Last call started ts</th>\n      <th>Listen Sockets</th>\n    </tr>\n    <tr *ngFor=\"let server of serversList\">\n      <td><a routerLink=\"/channelz/serversockets/{{server.getRef().getServerId()}}\">{{server.getRef().getServerId()}}[{{server.getRef().getName()}}]</a></td>\n      <td>{{server.getData().getCallsStarted()}}</td>\n      <td>{{server.getData().getCallsSucceeded()}}</td>\n      <td>{{server.getData().getCallsFailed()}}</td>\n      <td>{{server.getData().getLastCallStartedTimestamp() | dateFromProto}}</td>\n      <td>\n        <div *ngFor=\"let lsock of server.getListenSocketList()\">\n          <a routerLink=\"/channelz/socket/{{lsock.getSocketId()}}\">{{lsock.getSocketId()}}[{{lsock.getName()}}]</a>\n        </div>\n      </td>\n    </tr>\n  </table>\n</div>\n<div *ngIf=\"nextId\">\n  <a routerLink=\"/channelz/servers/{{nextId}}\">Click here for next page</a>\n</div>\n<div *ngIf=\"!nextId\">\n  <p>End of results</p>\n</div>\n"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channelz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channelz.service */ "./src/app/channelz.service.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServersComponent = /** @class */ (function () {
    function ServersComponent(route, router, channelzService) {
        this.route = route;
        this.router = router;
        this.channelzService = channelzService;
        this.startId = 0;
    }
    ServersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.render();
        this.route.params.subscribe(function (e) { return _this.render(); });
    };
    ServersComponent.prototype.processEntry = function () {
        this.router.navigateByUrl("/channelz/servers/" + this.startId);
    };
    ServersComponent.prototype.render = function () {
        var _this = this;
        var startIdParam = this.route.snapshot.paramMap.get('startId');
        this.startId = startIdParam == null ? 0 : +startIdParam;
        this.channelzService.getServers(this.startId)
            .subscribe(function (resp) { return _this.handleResponse(resp); });
    };
    ServersComponent.prototype.handleResponse = function (resp) {
        this.serversList = resp.getServerList();
        if (!resp.getEnd()) {
            var last = this.serversList[this.serversList.length - 1];
            this.nextId = last.getRef().getServerId();
        }
        else {
            this.nextId = null;
        }
    };
    ServersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servers',
            template: __webpack_require__(/*! ./servers.component.html */ "./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _channelz_service__WEBPACK_IMPORTED_MODULE_2__["ChannelzService"]])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/socket/socket.component.css":
/*!*********************************************!*\
  !*** ./src/app/socket/socket.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/socket/socket.component.html":
/*!**********************************************!*\
  !*** ./src/app/socket/socket.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Showing socket:</h3>\n<input #textbox type=\"text\" [(ngModel)]=\"enteredData\" (keyup.enter)=\"processEntry()\" required>\n<button (click)=\"processEntry()\">Refresh</button>\n<div>\n  <div *ngIf=\"socket\">\n  <table>\n    <tr>\n      <th>Field</th>\n      <th>Value</th>\n    </tr>\n    <tr>\n      <td>Socketref</td>\n      <td><pre>{{socket.getRef().getSocketId()}}[{{socket.getRef().getName()}}]</pre></td>\n    </tr>\n    <tr>\n      <td>Local Address</td>\n      <td><pre>{{socket.getLocal() | addrToString}}</pre></td>\n    </tr>\n    <tr>\n      <td>Remote Address</td>\n      <td><pre>{{socket.getRemote() | addrToString}}</pre></td>\n    </tr>\n    <tr>\n      <td>Security</td>\n      <td><pre>{{securiyStr}}</pre></td>\n    </tr>\n    <tr>\n      <td>Data</td>\n      <td><pre>{{simplifiedData}}</pre></td>\n    </tr>\n    <tr *ngFor=\"let opt of socketOptions()\">\n      <td>Socket Option: {{opt.name}}</td>\n      <td><pre>{{opt.value}}</pre></td>\n    </tr>\n  </table>\n  </div>\n  <div *ngIf=\"!socket\">\n    <p>Socket does not exist</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/socket/socket.component.ts":
/*!********************************************!*\
  !*** ./src/app/socket/socket.component.ts ***!
  \********************************************/
/*! exports provided: SocketOpt, SocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketOpt", function() { return SocketOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketComponent", function() { return SocketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channelz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channelz.service */ "./src/app/channelz.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketOpt = /** @class */ (function () {
    function SocketOpt(name, value) {
        this.name = name;
        this.value = value;
    }
    return SocketOpt;
}());

var SocketComponent = /** @class */ (function () {
    function SocketComponent(route, router, channelzService) {
        this.route = route;
        this.router = router;
        this.channelzService = channelzService;
    }
    SocketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.render();
        this.route.params.subscribe(function (e) { return _this.render(); });
    };
    SocketComponent.prototype.processEntry = function () {
        this.router.navigateByUrl("/channelz/socket/" + this.enteredData);
    };
    SocketComponent.prototype.render = function () {
        var _this = this;
        var idParam = this.route.snapshot.paramMap.get('id');
        this.id = idParam == null ? 0 : +idParam;
        this.enteredData = this.id.toString();
        this.channelzService.getSocket(+this.id)
            .subscribe(function (response) { return _this.handleResponse(response); });
    };
    SocketComponent.prototype.handleResponse = function (socketResponse) {
        this.socket = socketResponse.getSocket();
        this.simplifiedData = this.simplifiedDataHelper();
        this.securiyStr = this.securityHelper(this.socket.getSecurity());
    };
    /**
     * Returns a copy of the socket data, but with socket options removed.
     */
    SocketComponent.prototype.simplifiedDataHelper = function () {
        var data = this.socket.getData();
        if (data == null) {
            return "undefined";
        }
        return "Streams started: " + data.getStreamsStarted() + "\nStreams succeeded: " + data.getStreamsSucceeded() + "\nStreams failed: " + data.getStreamsFailed() + "\nMessages sent: " + data.getMessagesSent() + "\nMessages received: " + data.getMessagesReceived() + "\nKeepalives sent: " + data.getKeepAlivesSent() + "\nLast local stream created: " + _utils__WEBPACK_IMPORTED_MODULE_3__["DateFromProto"].transform(data.getLastLocalStreamCreatedTimestamp()) + "\nLast remote stream created: " + _utils__WEBPACK_IMPORTED_MODULE_3__["DateFromProto"].transform(data.getLastRemoteStreamCreatedTimestamp()) + "\nLast message sent: " + _utils__WEBPACK_IMPORTED_MODULE_3__["DateFromProto"].transform(data.getLastMessageSentTimestamp()) + "\nLast message received: " + _utils__WEBPACK_IMPORTED_MODULE_3__["DateFromProto"].transform(data.getLastMessageReceivedTimestamp()) + "\nLocal flow control window: " + data.getLocalFlowControlWindow() + "\nRemote flow control window: " + data.getRemoteFlowControlWindow() + "\n";
    };
    SocketComponent.prototype.securityHelper = function (security) {
        if (security == null) {
            return "plaintext";
        }
        if (security.getTls() != null) {
            var tls = security.getTls();
            return "standard name: " + tls.getStandardName() + "\nother name: " + tls.getOtherName() + "\nlocal cert (base64): " + btoa(tls.getLocalCertificate()) + "\nremote cert (base64): " + btoa(tls.getRemoteCertificate());
        }
        else if (security.getOther() != null) {
            var other = security.getOther();
            return "name: " + other.getName() + "\nvalue: " + Object(_utils__WEBPACK_IMPORTED_MODULE_3__["protoAnyToStringHelper"])(other.getValue());
        }
        else {
            return "plaintext";
        }
    };
    SocketComponent.prototype.socketOptions = function () {
        var data = this.socket.getData();
        if (data == null || data.getOptionList() == null) {
            return [];
        }
        return data.getOptionList().map(function (opt) {
            if (opt.getAdditional() != null) {
                return new SocketOpt(opt.getName(), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["protoAnyToStringHelper"])(opt.getAdditional()));
            }
            else {
                return new SocketOpt(opt.getName(), opt.getValue());
            }
        });
    };
    SocketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-socket',
            template: __webpack_require__(/*! ./socket.component.html */ "./src/app/socket/socket.component.html"),
            styles: [__webpack_require__(/*! ./socket.component.css */ "./src/app/socket/socket.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _channelz_service__WEBPACK_IMPORTED_MODULE_2__["ChannelzService"]])
    ], SocketComponent);
    return SocketComponent;
}());



/***/ }),

/***/ "./src/app/subchannel/subchannel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/subchannel/subchannel.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subchannel/subchannel.component.html":
/*!******************************************************!*\
  !*** ./src/app/subchannel/subchannel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Showing subchannel:</h3>\n<input #textbox type=\"text\" [(ngModel)]=\"enteredData\" (keyup.enter)=\"processEntry()\" required>\n<button (click)=\"processEntry()\">Refresh</button>\n<div>\n  <div *ngIf=\"subchannel\">\n  <table>\n    <tr>\n      <th>Field</th>\n      <th>Value</th>\n    </tr>\n    <tr>\n      <td>SubchannelRef</td>\n      <td><pre>{{subchannel.getRef().getSubchannelId()}}[{{subchannel.getRef().getName()}}]</pre></td>\n    </tr>\n    <tr>\n      <td>Data</td>\n      <td><pre>{{subchannelDataStr}}</pre></td>\n    </tr>\n    <tr>\n      <td>Channels</td>\n      <td>\n        <div *ngFor=\"let ref of subchannel.getChannelRefList()\">\n          <a routerLink=\"/channelz/channel/{{ref.getChannelId()}}\">{{ref.getChannelId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td>Subchannels</td>\n      <td>\n        <div *ngFor=\"let ref of subchannel.getSubchannelRefList()\">\n          <a routerLink=\"/channelz/subchannel/{{ref.getChannelId()}}\">{{ref.getSubchannelId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td>Sockets</td>\n      <td>\n        <div *ngFor=\"let ref of subchannel.getSocketRefList()\">\n          <a routerLink=\"/channelz/socket/{{ref.getSocketId()}}\">{{ref.getSocketId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td>Channel trace summary</td>\n      <td><pre>{{traceSummary}}</pre></td>\n    </tr>\n    <tr>\n      <td>Channel trace events</td>\n      <td>\n        <div *ngIf=\"!traceEvents\"><pre>No events recorded</pre></div>\n        <div *ngFor=\"let evt of traceEvents\">\n          <pre>{{evt.combinedDetails}}</pre>\n          <div *ngIf=\"evt.channelRef\">\n            <pre> <a routerLink=\"/channelz/channel/{{evt.channelRef.getChannelId()}}\">{{evt.channelRef.getName()}}</a></pre>\n          </div>\n          <div *ngIf=\"evt.subchannelRef\">\n            <pre> <a routerLink=\"/channelz/subchannel/{{evt.subchannelRef.getSubchannelId()}}\">{{evt.subchannelRef.getName()}}</a></pre>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </table>\n  </div>\n  <div *ngIf=\"!subchannel && id\">\n    <p>Subchannel does not exist</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/subchannel/subchannel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/subchannel/subchannel.component.ts ***!
  \****************************************************/
/*! exports provided: SubchannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubchannelComponent", function() { return SubchannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channelz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channelz.service */ "./src/app/channelz.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubchannelComponent = /** @class */ (function () {
    function SubchannelComponent(route, router, channelzService) {
        this.route = route;
        this.router = router;
        this.channelzService = channelzService;
        this.traceEvents = null;
    }
    SubchannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.render();
        this.route.params.subscribe(function (e) { return _this.render(); });
    };
    SubchannelComponent.prototype.processEntry = function () {
        this.router.navigateByUrl('/channelz/subchannel/' + this.enteredData);
    };
    SubchannelComponent.prototype.render = function () {
        var _this = this;
        var idParam = this.route.snapshot.paramMap.get('id');
        this.id = idParam == null ? 0 : +idParam;
        this.enteredData = this.id.toString();
        this.channelzService.getSubchannel(this.id)
            .subscribe(function (response) { return _this.handleResponse(response); });
    };
    SubchannelComponent.prototype.handleResponse = function (resp) {
        this.subchannel = resp.getSubchannel();
        this.subchannelDataStr = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["channelDataHelper"])(this.subchannel.getData());
        var channelTrace = this.subchannel.getData().getTrace();
        if (channelTrace != null && channelTrace.getEvents() != null) {
            this.traceSummary = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["channelTraceSummary"])(channelTrace);
            this.traceEvents = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["traceEventHelper"])(channelTrace.getEvents());
        }
    };
    SubchannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subchannel',
            template: __webpack_require__(/*! ./subchannel.component.html */ "./src/app/subchannel/subchannel.component.html"),
            styles: [__webpack_require__(/*! ./subchannel.component.css */ "./src/app/subchannel/subchannel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _channelz_service__WEBPACK_IMPORTED_MODULE_2__["ChannelzService"]])
    ], SubchannelComponent);
    return SubchannelComponent;
}());



/***/ }),

/***/ "./src/app/top-channels/top-channels.component.css":
/*!*********************************************************!*\
  !*** ./src/app/top-channels/top-channels.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/top-channels/top-channels.component.html":
/*!**********************************************************!*\
  !*** ./src/app/top-channels/top-channels.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Showing top level channels starting from:</h3>\n<input #textbox type=\"text\" [(ngModel)]=\"startId\" (keyup.enter)=\"processEntry()\" required>\n<button (click)=\"processEntry()\">Refresh</button>\n<div>\n  <table>\n    <tr>\n      <th>Channel</th>\n      <th>Data</th>\n      <th>Channels</th>\n      <th>Subchannels</th>\n      <th>Sockets</th>\n    </tr>\n    <tr *ngFor=\"let c of topChannelsList\">\n      <td><a routerLink=\"/channelz/channel/{{c.getRef().getChannelId()}}\">{{c.getRef().getChannelId()}}[{{c.getRef().getName()}}]</a></td>\n      <td><pre>{{channelDataHelperProxy(c.getData())}}</pre></td>\n      <td>\n        <div *ngFor=\"let ref of c.getChannelRefList()\">\n          <a routerLink=\"/channelz/channel/{{ref.getChannelId()}}\">{{ref.getChannelId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n      <td>\n        <div *ngFor=\"let ref of c.getSubchannelRefList()\">\n          <a routerLink=\"/channelz/subchannel/{{ref.getSubchannelId()}}\">{{ref.getSubchannelId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n      <td>\n        <div *ngFor=\"let ref of c.getSocketRefList()\">\n          <a routerLink=\"/channelz/socket/{{ref.getSocketId()}}\">{{ref.getSocketId()}}[{{ref.getName()}}]</a>,\n        </div>\n      </td>\n    </tr>\n  </table>\n</div>\n<div *ngIf=\"nextId\">\n  <a routerLink=\"/channelz/topchannels/{{nextId}}\">Click here for next page</a>\n</div>\n<div *ngIf=\"!nextId\">\n  <p>End of results</p>\n</div>\n"

/***/ }),

/***/ "./src/app/top-channels/top-channels.component.ts":
/*!********************************************************!*\
  !*** ./src/app/top-channels/top-channels.component.ts ***!
  \********************************************************/
/*! exports provided: TopChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopChannelsComponent", function() { return TopChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channelz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channelz.service */ "./src/app/channelz.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopChannelsComponent = /** @class */ (function () {
    function TopChannelsComponent(route, router, channelzService) {
        this.route = route;
        this.router = router;
        this.channelzService = channelzService;
        this.startId = 0;
    }
    TopChannelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.render();
        this.route.params.subscribe(function (e) { return _this.render(); });
    };
    TopChannelsComponent.prototype.processEntry = function () {
        this.router.navigateByUrl("/channelz/topchannels/" + this.startId);
    };
    TopChannelsComponent.prototype.render = function () {
        var _this = this;
        var startIdParam = this.route.snapshot.paramMap.get('startId');
        this.startId = startIdParam == null ? 0 : +startIdParam;
        this.channelzService.getTopChannels(this.startId)
            .subscribe(function (resp) { return _this.handleResponse(resp); });
    };
    TopChannelsComponent.prototype.channelDataHelperProxy = function (channelData) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["channelDataHelper"])(channelData);
    };
    TopChannelsComponent.prototype.handleResponse = function (resp) {
        this.topChannelsList = resp.getChannelList();
        if (!resp.getEnd()) {
            var last = this.topChannelsList[this.topChannelsList.length - 1];
            this.nextId = last.getRef().getChannelId();
        }
        else {
            this.nextId = null;
        }
    };
    TopChannelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-channels',
            template: __webpack_require__(/*! ./top-channels.component.html */ "./src/app/top-channels/top-channels.component.html"),
            styles: [__webpack_require__(/*! ./top-channels.component.css */ "./src/app/top-channels/top-channels.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _channelz_service__WEBPACK_IMPORTED_MODULE_2__["ChannelzService"]])
    ], TopChannelsComponent);
    return TopChannelsComponent;
}());



/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: protoAnyToStringHelper, TraceEvent, traceEventHelper, registerProtoAnyToStringFn, protoEnumToString, channelTraceSummary, channelTraceEventData, channelDataHelper, DateFromProto, AddrToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoAnyToStringHelper", function() { return protoAnyToStringHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceEvent", function() { return TraceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traceEventHelper", function() { return traceEventHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerProtoAnyToStringFn", function() { return registerProtoAnyToStringFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoEnumToString", function() { return protoEnumToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channelTraceSummary", function() { return channelTraceSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channelTraceEventData", function() { return channelTraceEventData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channelDataHelper", function() { return channelDataHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFromProto", function() { return DateFromProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrToString", function() { return AddrToString; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

goog.require('proto.grpc.channelz.v1.SocketOptionLinger');
goog.require('proto.grpc.channelz.v1.SocketOptionTimeout');
goog.require('proto.grpc.channelz.v1.SocketOptionTcpInfo');
goog.require('proto.grpc.channelz.v1.ChannelConnectivityState.State');
var protoAnyToStringHelpers = {
    'type.googleapis.com/grpc.channelz.v1.SocketOptionLinger': function (protoAny) {
        var solinger = proto.grpc.channelz.v1.SocketOptionLinger.deserializeBinary(protoAny.getValue());
        var duration = solinger.getDuration();
        if ('undefined' === typeof duration) {
            return "active: " + solinger.getActive();
        }
        return "active: " + solinger.getActive() + "\n" +
            "seconds: " + duration.getSeconds() + "\n" +
            "nanos: " + duration.getNanos() + "\n";
    },
    'type.googleapis.com/grpc.channelz.v1.SocketOptionTimeout': function (protoAny) {
        var sotimeout = proto.grpc.channelz.v1.SocketOptionTimeout.deserializeBinary(protoAny.getValue());
        return "seconds: " + sotimeout.getDuration().getSeconds() + "\n" +
            "nanos: " + sotimeout.getDuration().getNanos() + "\n";
    },
    'type.googleapis.com/grpc.channelz.v1.SocketOptionTcpInfo': function (protoAny) {
        var tcpi = proto.grpc.channelz.v1.SocketOptionTcpInfo.deserializeBinary(protoAny.getValue());
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
function protoAnyToStringHelper(packedAny) {
    if (packedAny.getTypeUrl() in protoAnyToStringHelpers) {
        return protoAnyToStringHelpers[packedAny.getTypeUrl()](packedAny);
    }
    else {
        return "Unrecognized Any type: " + packedAny.getTypeUrl();
    }
}
var TraceEvent = /** @class */ (function () {
    function TraceEvent(combinedDetails, channelRef, subchannelRef) {
        this.combinedDetails = combinedDetails;
        this.channelRef = channelRef;
        this.subchannelRef = subchannelRef;
    }
    return TraceEvent;
}());

function traceEventHelper(events) {
    return events.map(function (evt) {
        return new TraceEvent(channelTraceEventData(evt), evt.getChannelRef(), evt.getSubchannelRef());
    });
}
// Registers a handler that can take a google.protobuf.Any for the given
// typeUrl and returns a human friendly string.
function registerProtoAnyToStringFn(typeUrl, fn) {
    protoAnyToStringHelpers[typeUrl] = fn;
}
function protoEnumToString(enumClass, enumVal) {
    return Object.keys(enumClass).find(function (k) { return enumClass[k] === enumVal; });
}
function channelTraceSummary(ct) {
    if (ct == null) {
        return "None";
    }
    return "events logged: " + ct.getNumEventsLogged() + "\nchannel creation timestamp: " + DateFromProto.transform(ct.getCreationTimestamp());
}
function channelTraceEventData(evt) {
    if (evt == null) {
        return "undefined";
    }
    var timestamp = DateFromProto.transform(evt.getTimestamp());
    var description = evt.getDescription();
    var sev = protoEnumToString(proto.grpc.channelz.v1.ChannelTraceEvent.Severity, evt.getSeverity());
    return timestamp + " " + sev + " " + description;
}
function channelDataHelper(channelData) {
    return "state: " + protoEnumToString(proto.grpc.channelz.v1.ChannelConnectivityState.State, channelData.getState().getState()) + "\ntarget: " + channelData.getTarget() + "\ncalls started: " + channelData.getCallsStarted() + "\ncalls succeeded: " + channelData.getCallsSucceeded() + "\ncalls failed: " + channelData.getCallsFailed() + "\nlast call started: " + DateFromProto.transform(channelData.getLastCallStartedTimestamp());
}
var DateFromProto = /** @class */ (function () {
    function DateFromProto() {
    }
    DateFromProto_1 = DateFromProto;
    DateFromProto.prototype.transform = function (protodate) {
        return DateFromProto_1.transform(protodate);
    };
    DateFromProto.transform = function (protodate) {
        if (protodate == null) {
            return "undefined";
        }
        // the 0 is required to set the initial date to unix epoch
        var date = new Date(0);
        date.setUTCSeconds(protodate.getSeconds());
        date.setUTCMilliseconds(protodate.getNanos() / 1000000.0);
        return date.toISOString();
    };
    DateFromProto = DateFromProto_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'dateFromProto' })
    ], DateFromProto);
    return DateFromProto;
    var DateFromProto_1;
}());

var AddrToString = /** @class */ (function () {
    function AddrToString() {
    }
    AddrToString_1 = AddrToString;
    AddrToString.prototype.transform = function (value) {
        return AddrToString_1.transform(value);
    };
    AddrToString.transform = function (addr) {
        if (addr == null) {
            return "undefined";
        }
        else if (addr.getUdsAddress() != null) {
            return addr.getUdsAddress();
        }
        else if (addr.getOtherAddress() != null) {
            return protoAnyToStringHelper(addr.getOtherAddress().getValue());
        }
        else {
            var tcpAddrPort = addr.getTcpipAddress();
            var tcpAddr = tcpAddrPort.getIpAddress();
            if (tcpAddr.length === 4) {
                // ipv4: turn bytes into decimal form
                return tcpAddr
                    .join(".") + ":" + tcpAddrPort.getPort();
            }
            else if (tcpAddr.length === 16) {
                // ipv6: turn bytes into hex, pad with a 0 so always 2 digits long
                var hex = tcpAddr
                    .map(function (c) { return ("0" + c.toString(16)).substr(-2); })
                    .join("");
                // use regex to split into 4 character chunks
                return "[" + hex.match(/..../g).join(":") + "]:" + tcpAddrPort.getPort();
            }
        }
    };
    AddrToString = AddrToString_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'addrToString' })
    ], AddrToString);
    return AddrToString;
    var AddrToString_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // window.location.origin is the reverse proxy that both serves the
    // app and performs grpc-web translation
    grpcRemoteAddr: window.location.origin,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// this file differs with internal, must use instead:
// import { AppModuleNgFactory } from './app/app.module.ngfactory';
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
//    .catch((err: any) => console.log(err));
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/spencerfang/git/grpc-experiments/grpc-zpages/web/channelzui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map