/* eslint-disable */
// source: wsgateway/enums.proto
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

goog.exportSymbol('proto.wsgateway.api.v1.SfuStatus', null, global);
goog.exportSymbol('proto.wsgateway.api.v1.SfuType', null, global);
goog.exportSymbol('proto.wsgateway.api.v1.SfuUserStatus', null, global);
goog.exportSymbol('proto.wsgateway.api.v1.WebsocketStatus', null, global);
/**
 * @enum {number}
 */
proto.wsgateway.api.v1.SfuType = {
  STYPE_UNKNOWN: 0,
  STYPE_ROUTER: 1,
  STYPE_GATEWAY: 2
};

/**
 * @enum {number}
 */
proto.wsgateway.api.v1.SfuStatus = {
  SSTATUS_UNKNOWN: 0,
  SSTATUS_RUNNING: 1,
  SSTATUS_STARTING: 2,
  SSTATUS_TERMINATING: 3,
  SSTATUS_UNAVAILABLE: 4
};

/**
 * @enum {number}
 */
proto.wsgateway.api.v1.SfuUserStatus = {
  SUSTATUS_UNKNOWN: 0,
  SUSTATUS_CONNECTED: 1,
  SUSTATUS_CONNECTING: 2,
  SUSTATUS_RECONNECTING: 3
};

/**
 * @enum {number}
 */
proto.wsgateway.api.v1.WebsocketStatus = {
  WSTATUS_UNKNOWN: 0,
  WSTATUS_RUNNING: 1,
  WSTATUS_STARTING: 2,
  WSTATUS_TERMINATING: 3,
  WSTATUS_UNAVAILABLE: 4
};

goog.object.extend(exports, proto.wsgateway.api.v1);
