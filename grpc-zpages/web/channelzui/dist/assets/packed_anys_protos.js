// This file registers functions to packed_any.js
// Additional files can be created for internal protos.

registerProtoAnyToStringFunction('type.googleapis.com/grpc.channelz.v1.SocketOptionLinger',
  function(data) {
    var solinger = proto.grpc.channelz.v1.SocketOptionLinger.deserializeBinary(data);
    var duration = solinger.getDuration();
    if ('undefined' === typeof duration) {
      return "active: " + solinger.getActive();
    }
    return "active: " + solinger.getActive() + "\n" +
      "seconds: " + duration.getSeconds() + "\n" +
      "nanos: " + duration.getNanos() + "\n";
  });

registerProtoAnyToStringFunction('type.googleapis.com/grpc.channelz.v1.SocketOptionTimeout',
  function(data) {
    var sotimeout = proto.grpc.channelz.v1.SocketOptionTimeout.deserializeBinary(data);
    return "seconds: " + sotimeout.getDuration().getSeconds() + "\n" +
      "nanos: " + sotimeout.getDuration().getNanos() + "\n";
  });

registerProtoAnyToStringFunction('type.googleapis.com/grpc.channelz.v1.SocketOptionTcpInfo',
  function(data) {
    var tcpi = proto.grpc.channelz.v1.SocketOptionTcpInfo.deserializeBinary(data);
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
  });
