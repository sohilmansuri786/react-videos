/* eslint-disable */
// source: users/enums.proto
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

goog.exportSymbol('proto.users.api.v1.ChatType', null, global);
goog.exportSymbol('proto.users.api.v1.UserAccess', null, global);
goog.exportSymbol('proto.users.api.v1.UserOption', null, global);
goog.exportSymbol('proto.users.api.v1.UserRelationType', null, global);
goog.exportSymbol('proto.users.api.v1.UserStatus', null, global);
goog.exportSymbol('proto.users.api.v1.UserType', null, global);
/**
 * @enum {number}
 */
proto.users.api.v1.ChatType = {
  CHATTYPE_UNKNOWN: 0,
  CHATTYPE_PRIVATE: 1
};

/**
 * @enum {number}
 */
proto.users.api.v1.UserType = {
  USERTYPE_UNKNOWN: 0,
  USERTYPE_GUEST: 1,
  USERTYPE_GOOGLE: 2,
  USERTYPE_TWITTER: 3,
  USERTYPE_FACEBOOK: 4,
  USERTYPE_PASSWORD: 5
};

/**
 * @enum {number}
 */
proto.users.api.v1.UserAccess = {
  USERACCESS_UNKNOWN: 0,
  USERACCESS_PUBLIC: 1,
  USERACCESS_PRIVATE: 2
};

/**
 * @enum {number}
 */
proto.users.api.v1.UserStatus = {
  USERSTATUS_UNKNOWN: 0,
  USERSTATUS_CONNECTED: 1,
  USERSTATUS_DISCONNECTED: 2
};

/**
 * @enum {number}
 */
proto.users.api.v1.UserOption = {
  USEROPTION_UNKNOWN: 0,
  USEROPTION_IGNORE_MESSAGES: 1,
  USEROPTION_DISPLAY_FULLNAME: 2
};

/**
 * @enum {number}
 */
proto.users.api.v1.UserRelationType = {
  USERRELATIONTYPE_UNKNOWN: 0,
  USERRELATIONTYPE_BLOCK: 1,
  USERRELATIONTYPE_FRIEND: 2,
  USERRELATIONTYPE_INVITE: 3,
  USERRELATIONTYPE_FOLLOW: 4
};

goog.object.extend(exports, proto.users.api.v1);
