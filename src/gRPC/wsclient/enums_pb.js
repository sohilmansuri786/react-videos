/* eslint-disable */
// source: wsclient/enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.wsclient.api.v1.Action', null, global);
goog.exportSymbol('proto.wsclient.api.v1.Platform', null, global);
goog.exportSymbol('proto.wsclient.api.v1.Protocol', null, global);
/**
 * @enum {number}
 */
proto.wsclient.api.v1.Action = {
  UNKNOWN: 0,
  HANDSHAKE: 1,
  AUTHENTICATE: 2,
  HEARTBEAT: 3,
  DISCONNECT: 4,
  SFU_CONNECT: 20,
  SFU_ICE_CANDIDATE: 21,
  USER_CHAT: 30,
  ROOM_CHAT: 40,
  ROOM_JOIN: 41,
  ROOM_LEAVE: 42,
  EVENT_CHAT: 50,
  ROOM_USER_FLAGS: 60
};

/**
 * @enum {number}
 */
proto.wsclient.api.v1.Protocol = {
  PROTOCOL_UNKNOWN: 0,
  PROTOCOL_TEXT: 1,
  PROTOCOL_BINARY: 2
};

/**
 * @enum {number}
 */
proto.wsclient.api.v1.Platform = {
  PLATFORM_UNKNOWN: 0,
  PLATFORM_MOBILE: 1,
  PLATFORM_DESKTOP: 2
};

goog.object.extend(exports, proto.wsclient.api.v1);
