/* eslint-disable */
// source: rooms/enums.proto
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

goog.exportSymbol('proto.rooms.api.v1.ChatStatus', null, global);
goog.exportSymbol('proto.rooms.api.v1.ChatType', null, global);
goog.exportSymbol('proto.rooms.api.v1.EventAccess', null, global);
goog.exportSymbol('proto.rooms.api.v1.EventGenre', null, global);
goog.exportSymbol('proto.rooms.api.v1.EventLayout', null, global);
goog.exportSymbol('proto.rooms.api.v1.EventOverseer', null, global);
goog.exportSymbol('proto.rooms.api.v1.EventPerformerStatus', null, global);
goog.exportSymbol('proto.rooms.api.v1.EventSource', null, global);
goog.exportSymbol('proto.rooms.api.v1.EventStatus', null, global);
goog.exportSymbol('proto.rooms.api.v1.EventType', null, global);
goog.exportSymbol('proto.rooms.api.v1.RecommendationType', null, global);
goog.exportSymbol('proto.rooms.api.v1.RoomAccess', null, global);
goog.exportSymbol('proto.rooms.api.v1.RoomStreamType', null, global);
goog.exportSymbol('proto.rooms.api.v1.RoomType', null, global);
goog.exportSymbol('proto.rooms.api.v1.RoomUserFlag', null, global);
goog.exportSymbol('proto.rooms.api.v1.RoomUserReceiverConnectionStatus', null, global);
goog.exportSymbol('proto.rooms.api.v1.RoomUserSenderConnectionStatus', null, global);
goog.exportSymbol('proto.rooms.api.v1.RoomUserState', null, global);
goog.exportSymbol('proto.rooms.api.v1.RoomUserStatus', null, global);
goog.exportSymbol('proto.rooms.api.v1.UserTicketStatus', null, global);
/**
 * @enum {number}
 */
proto.rooms.api.v1.ChatType = {
  CTYPE_UNKNOWN: 0,
  CTYPE_ROOM: 1,
  CTYPE_EVENT: 2
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.ChatStatus = {
  CSTATUS_UNKNOWN: 0,
  CSTATUS_ACTIVE: 1,
  CSTATUS_INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.UserTicketStatus = {
  UTSTATUS_UNKNOWN: 0,
  UTSTATUS_ACTIVE: 1,
  UTSTATUS_INACTIVE: 2,
  UTSTATUS_EXPIRED: 3
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RoomType = {
  RTYPE_UNKNOWN: 0,
  RTYPE_AUTOMATIC: 4,
  RTYPE_BROADCAST: 1,
  RTYPE_TEMPORARY: 2,
  RTYPE_PERMANENT: 3
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RoomAccess = {
  RACCESS_UNKNOWN: 0,
  RACCESS_PUBLIC: 1,
  RACCESS_PRIVATE: 2,
  RACCESS_PROTECTED: 3
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RoomUserFlag = {
  RUFLAG_UNKNOWN: 0,
  RUFLAG_SHARING_AUDIO: 1,
  RUFLAG_SHARING_VIDEO: 2,
  RUFLAG_SHARING_SCREEN_AUDIO: 3,
  RUFLAG_SHARING_SCREEN_VIDEO: 4,
  RUFLAG_DISABLED_AUDIO: 5,
  RUFLAG_DISABLED_VIDEO: 6,
  RUFLAG_DISABLED_SCREEN_AUDIO: 7,
  RUFLAG_DISABLED_SCREEN_VIDEO: 8
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RoomUserState = {
  RUSTATE_UNKNOWN: 0,
  RUSTATE_DISABLED_AUDIO: 1,
  RUSTATE_DISABLED_VIDEO: 2,
  RUSTATE_DISABLED_SCREEN_AUDIO: 3,
  RUSTATE_DISABLED_SCREEN_VIDEO: 4
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RoomUserStatus = {
  RUSTATUS_UNKNOWN: 0,
  RUSTATUS_CONNECTED: 1,
  RUSTATUS_RECONNECTING: 2,
  RUSTATUS_DISCONNECTED: 3
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RoomUserSenderConnectionStatus = {
  RUSCSTATUS_UNKNOWN: 0,
  RUSCSTATUS_CONNECTED: 1,
  RUSCSTATUS_CONNECTING: 2,
  RUSCSTATUS_RECONNECTING: 3,
  RUSCSTATUS_DISCONNECTED: 4
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RoomUserReceiverConnectionStatus = {
  RURCSTATUS_UNKNOWN: 0,
  RURCSTATUS_CONNECTED: 1,
  RURCSTATUS_CONNECTING: 2,
  RURCSTATUS_RECONNECTING: 3,
  RURCSTATUS_DISCONNECTED: 4
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RoomStreamType = {
  RSTYPE_UNKNOWN: 0,
  RSTYPE_AUDIO: 1,
  RSTYPE_IMAGE: 2,
  RSTYPE_VIDEO: 3,
  RSTYPE_EVENT: 4,
  RSTYPE_VIMEO: 5,
  RSTYPE_TIKTOK: 9,
  RSTYPE_SPOTIFY: 6,
  RSTYPE_YOUTUBE: 7,
  RSTYPE_FACEBOOK: 8
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.EventType = {
  ETYPE_UNKNOWN: 0,
  ETYPE_FREE: 1,
  ETYPE_PAID: 2
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.EventGenre = {
  EGENRE_UNKNOWN: 0,
  EGENRE_COMEDY: 1,
  EGENRE_SPORT: 2,
  EGENRE_PODCAST: 3,
  EGENRE_INTERVIEW: 4,
  EGENRE_OTHER: 5
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.EventAccess = {
  EACCESS_UNKNOWN: 0,
  EACCESS_PUBLIC: 1,
  EACCESS_PRIVATE: 2
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.EventStatus = {
  ESTATUS_UNKNOWN: 0,
  ESTATUS_PLANNED: 1,
  ESTATUS_QUEUED: 2,
  ESTATUS_CREATED: 3,
  ESTATUS_STARTED: 4,
  ESTATUS_FINISHED: 5,
  ESTATUS_CANCELED: 6
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.EventSource = {
  ESOURCE_UNKNOWN: 0,
  ESOURCE_MCU: 1,
  ESOURCE_LIVESTREAM: 2,
  ESOURCE_STATICSTREAM: 3
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.EventLayout = {
  ELAYOUT_UNKNOWN: 0,
  ELAYOUT_RECT_ONE: 1,
  ELAYOUT_SQUARE_TWO: 2,
  ELAYOUT_SQUARE_THREE: 3
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.EventOverseer = {
  EOVERSEER_UNKNOWN: 0,
  EOVERSEER_MANUAL: 1,
  EOVERSEER_AUTOMATIC: 2
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.EventPerformerStatus = {
  EPSTATUS_UNKNOWN: 0,
  EPSTATUS_AWAITING: 1,
  EPSTATUS_PERFORMING: 2
};

/**
 * @enum {number}
 */
proto.rooms.api.v1.RecommendationType = {
  RNTYPE_UNKNOWN: 0,
  RNTYPE_YOUTUBE: 1
};

goog.object.extend(exports, proto.rooms.api.v1);
