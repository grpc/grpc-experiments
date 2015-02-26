# Copyright 2015, Google Inc.
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are
# met:
#
#     * Redistributions of source code must retain the above copyright
# notice, this list of conditions and the following disclaimer.
#     * Redistributions in binary form must reproduce the above
# copyright notice, this list of conditions and the following disclaimer
# in the documentation and/or other materials provided with the
# distribution.
#     * Neither the name of Google Inc. nor the names of its
# contributors may be used to endorse or promote products derived from
# this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
# "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
# LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
# A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
# OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
# LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
# DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
# THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

"""The Python implementation of the gRPC route guide server."""

import json
import time

import route_guide_pb2

_ONE_DAY_IN_SECONDS = 60 * 60 * 24


def read_route_guide_db():
  """Reads the route guide"""
  with open("route_guide_db.json") as f:
    return json.load(f)


class RouteGuideServicer(route_guide_pb2.EarlyAdopterRouteGuideServicer):

  def __init__(self):
      self.db = read_route_guide_db()

  def GetFeature(self, request, context):
    response = route_guide_pb2.Feature()
    response.name = ""
    for db_item in self.db:
      location = db_item["location"]
      if location["latitude"] == request.latitude and location["longitude"] == request.longitude:
        response.name = db_item["name"]
    response.location.longitude = request.longitude;
    response.location.latitude = request.latitude;
    return response

  def ListFeatures(self, request, context):
    # TODO: return some features...
    return iter([])

  def RecordRoute(self, requests, context):
    # TODO: provide real implementation....
    for req in requests:
      pass
    return route_guide_pb2.RouteSummary()

  def RouteChat(self, request_iterator, context):
    received_notes = []
    for note in request_iterator:
      for n in received_notes:
        if n.location.latitude == note.location.latitude and n.location.longitude == note.location.longitude:
          yield n
      received_notes.append(note)


def serve():

  server = route_guide_pb2.early_adopter_create_RouteGuide_server(
      RouteGuideServicer(), 50051, None, None)
  server.start()
  try:
    while True:
      time.sleep(_ONE_DAY_IN_SECONDS)
  except KeyboardInterrupt:
    server.stop()

if __name__ == '__main__':
  serve()