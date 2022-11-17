/* eslint-disable */
// source: mcu/enums.proto
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

goog.exportSymbol('proto.mcu.api.v1.BroadcastLayout', null, global);
goog.exportSymbol('proto.mcu.api.v1.MixerType', null, global);
goog.exportSymbol('proto.mcu.api.v1.SampleType', null, global);
/**
 * @enum {number}
 */
proto.mcu.api.v1.BroadcastLayout = {
  BROADCASTLAYOUT_UNKNOWN: 0,
  BROADCASTLAYOUT_RECT_ONE: 1,
  BROADCASTLAYOUT_SQUARE_TWO: 2,
  BROADCASTLAYOUT_SQUARE_THREE: 3,
  BROADCASTLAYOUT_RECT_ONE_DYNAMIC: 4
};

/**
 * @enum {number}
 */
proto.mcu.api.v1.MixerType = {
  MIXERTYPE_UNKNOWN: 0,
  MIXERTYPE_SIMPLE_GRID: 1,
  MIXERTYPE_ROOM_GRID: 2
};

/**
 * @enum {number}
 */
proto.mcu.api.v1.SampleType = {
  SAMPLETYPE_UNKNOWN: 0,
  VP8: 1,
  VP9: 2,
  H264: 3,
  OPUS: 4,
  AV1: 5,
  AAC: 6,
  H265: 7
};

goog.object.extend(exports, proto.mcu.api.v1);
