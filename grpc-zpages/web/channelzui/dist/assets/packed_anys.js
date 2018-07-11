// This file sets up a global map from typeUrl to function that converts
// proto to string. We also define a few handy helper functions.

if ('undefined' === typeof grpcChannelzAnys) {
  grpcChannelzAnys = {};
}

/**
 * @return {string}
 */
function protoAnyToString(packedAny) {
  var typeUrl = packedAny.getTypeUrl();
  if (typeUrl in grpcChannelzAnys) {
    return grpcChannelzAnys[typeUrl](packedAny.getValue())
  }
  return '(Unknown Any type: ' + typeUrl + ')'
}

function registerProtoAnyToStringFunction(typeUrl, fn) {
  grpcChannelzAnys[typeUrl] = fn;
}

// Proto enum values are numbers. This function maps the number back to
// the human friendly identifier.
function protoEnumToString(enumClass, enumVal) {
  return Object.keys(enumClass).find(k => enumClass[k] === enumVal);
}
