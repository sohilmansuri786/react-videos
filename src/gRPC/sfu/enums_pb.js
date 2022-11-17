/* eslint-disable */
// source: sfu/enums.proto
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

goog.exportSymbol('proto.sfu.api.v1.Action', null, global);
goog.exportSymbol('proto.sfu.api.v1.ClientType', null, global);
goog.exportSymbol('proto.sfu.api.v1.Codec', null, global);
goog.exportSymbol('proto.sfu.api.v1.ConferenceMode', null, global);
goog.exportSymbol('proto.sfu.api.v1.ProtocolVersion', null, global);
goog.exportSymbol('proto.sfu.api.v1.SfuType', null, global);
goog.exportSymbol('proto.sfu.api.v1.StreamType', null, global);
/**
 * @enum {number}
 */
proto.sfu.api.v1.ProtocolVersion = {
  PROTOCOLVERSION_UNKNOWN: 0,
  PROTOCOLVERSION_1_1_0: 1
};

/**
 * @enum {number}
 */
proto.sfu.api.v1.ClientType = {
  CLIENTTYPE_UNKNOWN: 0,
  CHROMIUM: 1,
  FIREFOX: 2,
  SAFARI: 3,
  WINDOWS: 4,
  MACOS: 5,
  IOS: 7,
  ANDROID: 8
};

/**
 * @enum {number}
 */
proto.sfu.api.v1.SfuType = {
  STYPE_UNKNOWN: 0,
  STYPE_ROUTER: 1,
  STYPE_GATEWAY: 2
};

/**
 * @enum {number}
 */
proto.sfu.api.v1.Action = {
  ACTION_UNKNOWN: 0,
  CONNECT: 1,
  DISCONNECT: 3,
  PONG: 4,
  MCU: 5,
  TOGGLE_STREAMS: 6,
  NEGOTIATE_STREAMS: 7
};

/**
 * @enum {number}
 */
proto.sfu.api.v1.StreamType = {
  STREAMTYPE_UNKNOWN: 0,
  CAMERA: 1,
  AUDIO: 2,
  SCREEN: 3,
  SCREEN_AUDIO: 4,
  MCU_VIDEO: 5,
  MCU_VIDEO_IS: 6
};

/**
 * @enum {number}
 */
proto.sfu.api.v1.ConferenceMode = {
  CONFERENCEMODEUNKNOWN: 0,
  SFU: 1,
  HYBRID: 2
};

/**
 * @enum {number}
 */
proto.sfu.api.v1.Codec = {
  CODEC_UNKNOWN: 0,
  H264: 1,
  VP8: 2,
  VP9: 3,
  H265: 4,
  AV1: 5,
  OPUS: 6
};

goog.object.extend(exports, proto.sfu.api.v1);
