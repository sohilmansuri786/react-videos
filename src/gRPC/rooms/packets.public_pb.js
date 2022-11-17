/* eslint-disable */
// source: rooms/packets.public.proto
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

var rooms_enums_pb = require('../rooms/enums_pb.js');
goog.object.extend(proto, rooms_enums_pb);
var rooms_models_pb = require('../rooms/models_pb.js');
goog.object.extend(proto, rooms_models_pb);
goog.exportSymbol('proto.rooms.api.v1.CancelEventPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.CancelEventPerformerPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.ClearChatMessagesPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.ClearRoomStreamsPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.CreateEventObserverPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.CreateEventPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.CreateEventPerformerPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.CreateRoomStreamPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.CreateUserTicketPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.DeleteChatMessagePacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.DeleteEventObserverPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.DeleteEventPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.DeleteEventPerformerPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.DeleteRoomPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.DeleteRoomStreamPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.DeliverRoomInvitePacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.DisconnectRoomUserPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.FinishEventPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.PrepareEventPerformerPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.RefreshEventBroadcastPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.StartEventPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateChatMessageContentPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateChatStatusPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventAudiencePacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventBackgroundPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventDescriptionPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventGenresPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventLayoutPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventNamePacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventPerformerPositionPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventSourcePacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventStatusPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventSummaryPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateEventThumbnailPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomAccessPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomBackgroundPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomLimitPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomNamePacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomPidPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomStreamPositionPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomThumbnailPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomTypePacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomUserFlagsPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomUserRolePacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomUserStatesPacket', null, global);
goog.exportSymbol('proto.rooms.api.v1.UpdateRoomUserStatusPacket', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateChatStatusPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateChatStatusPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateChatStatusPacket.displayName = 'proto.rooms.api.v1.UpdateChatStatusPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.DeleteChatMessagePacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.DeleteChatMessagePacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.DeleteChatMessagePacket.displayName = 'proto.rooms.api.v1.DeleteChatMessagePacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.ClearChatMessagesPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rooms.api.v1.ClearChatMessagesPacket.repeatedFields_, null);
};
goog.inherits(proto.rooms.api.v1.ClearChatMessagesPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.ClearChatMessagesPacket.displayName = 'proto.rooms.api.v1.ClearChatMessagesPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateChatMessageContentPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateChatMessageContentPacket.displayName = 'proto.rooms.api.v1.UpdateChatMessageContentPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.CreateUserTicketPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.CreateUserTicketPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.CreateUserTicketPacket.displayName = 'proto.rooms.api.v1.CreateUserTicketPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.DeleteRoomPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.DeleteRoomPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.DeleteRoomPacket.displayName = 'proto.rooms.api.v1.DeleteRoomPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomPidPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomPidPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomPidPacket.displayName = 'proto.rooms.api.v1.UpdateRoomPidPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomNamePacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomNamePacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomNamePacket.displayName = 'proto.rooms.api.v1.UpdateRoomNamePacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomTypePacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomTypePacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomTypePacket.displayName = 'proto.rooms.api.v1.UpdateRoomTypePacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomLimitPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomLimitPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomLimitPacket.displayName = 'proto.rooms.api.v1.UpdateRoomLimitPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomAccessPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomAccessPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomAccessPacket.displayName = 'proto.rooms.api.v1.UpdateRoomAccessPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomThumbnailPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomThumbnailPacket.displayName = 'proto.rooms.api.v1.UpdateRoomThumbnailPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomBackgroundPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomBackgroundPacket.displayName = 'proto.rooms.api.v1.UpdateRoomBackgroundPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.DisconnectRoomUserPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.DisconnectRoomUserPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.DisconnectRoomUserPacket.displayName = 'proto.rooms.api.v1.DisconnectRoomUserPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomUserRolePacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomUserRolePacket.displayName = 'proto.rooms.api.v1.UpdateRoomUserRolePacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rooms.api.v1.UpdateRoomUserFlagsPacket.repeatedFields_, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomUserFlagsPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomUserFlagsPacket.displayName = 'proto.rooms.api.v1.UpdateRoomUserFlagsPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rooms.api.v1.UpdateRoomUserStatesPacket.repeatedFields_, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomUserStatesPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomUserStatesPacket.displayName = 'proto.rooms.api.v1.UpdateRoomUserStatesPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomUserStatusPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomUserStatusPacket.displayName = 'proto.rooms.api.v1.UpdateRoomUserStatusPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.displayName = 'proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.displayName = 'proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.CreateRoomStreamPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.CreateRoomStreamPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.CreateRoomStreamPacket.displayName = 'proto.rooms.api.v1.CreateRoomStreamPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.DeleteRoomStreamPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.DeleteRoomStreamPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.DeleteRoomStreamPacket.displayName = 'proto.rooms.api.v1.DeleteRoomStreamPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.ClearRoomStreamsPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rooms.api.v1.ClearRoomStreamsPacket.repeatedFields_, null);
};
goog.inherits(proto.rooms.api.v1.ClearRoomStreamsPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.ClearRoomStreamsPacket.displayName = 'proto.rooms.api.v1.ClearRoomStreamsPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomStreamPositionPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomStreamPositionPacket.displayName = 'proto.rooms.api.v1.UpdateRoomStreamPositionPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.displayName = 'proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.displayName = 'proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.displayName = 'proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.displayName = 'proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.displayName = 'proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.displayName = 'proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.DeliverRoomInvitePacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.DeliverRoomInvitePacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.DeliverRoomInvitePacket.displayName = 'proto.rooms.api.v1.DeliverRoomInvitePacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.StartEventPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.StartEventPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.StartEventPacket.displayName = 'proto.rooms.api.v1.StartEventPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.FinishEventPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.FinishEventPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.FinishEventPacket.displayName = 'proto.rooms.api.v1.FinishEventPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.CancelEventPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.CancelEventPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.CancelEventPacket.displayName = 'proto.rooms.api.v1.CancelEventPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.CreateEventPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.CreateEventPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.CreateEventPacket.displayName = 'proto.rooms.api.v1.CreateEventPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.DeleteEventPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.DeleteEventPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.DeleteEventPacket.displayName = 'proto.rooms.api.v1.DeleteEventPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventNamePacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventNamePacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventNamePacket.displayName = 'proto.rooms.api.v1.UpdateEventNamePacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventStatusPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventStatusPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventStatusPacket.displayName = 'proto.rooms.api.v1.UpdateEventStatusPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventSourcePacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventSourcePacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventSourcePacket.displayName = 'proto.rooms.api.v1.UpdateEventSourcePacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventLayoutPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventLayoutPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventLayoutPacket.displayName = 'proto.rooms.api.v1.UpdateEventLayoutPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventGenresPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rooms.api.v1.UpdateEventGenresPacket.repeatedFields_, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventGenresPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventGenresPacket.displayName = 'proto.rooms.api.v1.UpdateEventGenresPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventSummaryPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventSummaryPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventSummaryPacket.displayName = 'proto.rooms.api.v1.UpdateEventSummaryPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventAudiencePacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventAudiencePacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventAudiencePacket.displayName = 'proto.rooms.api.v1.UpdateEventAudiencePacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventThumbnailPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventThumbnailPacket.displayName = 'proto.rooms.api.v1.UpdateEventThumbnailPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventBackgroundPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventBackgroundPacket.displayName = 'proto.rooms.api.v1.UpdateEventBackgroundPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventDescriptionPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventDescriptionPacket.displayName = 'proto.rooms.api.v1.UpdateEventDescriptionPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.RefreshEventBroadcastPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.RefreshEventBroadcastPacket.displayName = 'proto.rooms.api.v1.RefreshEventBroadcastPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.CreateEventObserverPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.CreateEventObserverPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.CreateEventObserverPacket.displayName = 'proto.rooms.api.v1.CreateEventObserverPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.DeleteEventObserverPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.DeleteEventObserverPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.DeleteEventObserverPacket.displayName = 'proto.rooms.api.v1.DeleteEventObserverPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.CreateEventPerformerPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.CreateEventPerformerPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.CreateEventPerformerPacket.displayName = 'proto.rooms.api.v1.CreateEventPerformerPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.DeleteEventPerformerPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.DeleteEventPerformerPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.DeleteEventPerformerPacket.displayName = 'proto.rooms.api.v1.DeleteEventPerformerPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.CancelEventPerformerPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.CancelEventPerformerPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.CancelEventPerformerPacket.displayName = 'proto.rooms.api.v1.CancelEventPerformerPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.PrepareEventPerformerPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.PrepareEventPerformerPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.PrepareEventPerformerPacket.displayName = 'proto.rooms.api.v1.PrepareEventPerformerPacket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rooms.api.v1.UpdateEventPerformerPositionPacket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rooms.api.v1.UpdateEventPerformerPositionPacket.displayName = 'proto.rooms.api.v1.UpdateEventPerformerPositionPacket';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateChatStatusPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateChatStatusPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateChatStatusPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateChatStatusPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateChatStatusPacket}
 */
proto.rooms.api.v1.UpdateChatStatusPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateChatStatusPacket;
  return proto.rooms.api.v1.UpdateChatStatusPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateChatStatusPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateChatStatusPacket}
 */
proto.rooms.api.v1.UpdateChatStatusPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.rooms.api.v1.ChatStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateChatStatusPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateChatStatusPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateChatStatusPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateChatStatusPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateChatStatusPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateChatStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateChatStatusPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ChatStatus status = 2;
 * @return {!proto.rooms.api.v1.ChatStatus}
 */
proto.rooms.api.v1.UpdateChatStatusPacket.prototype.getStatus = function() {
  return /** @type {!proto.rooms.api.v1.ChatStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rooms.api.v1.ChatStatus} value
 * @return {!proto.rooms.api.v1.UpdateChatStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateChatStatusPacket.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateChatStatusPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateChatStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateChatStatusPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.DeleteChatMessagePacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.DeleteChatMessagePacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.DeleteChatMessagePacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteChatMessagePacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chatId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.DeleteChatMessagePacket}
 */
proto.rooms.api.v1.DeleteChatMessagePacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.DeleteChatMessagePacket;
  return proto.rooms.api.v1.DeleteChatMessagePacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.DeleteChatMessagePacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.DeleteChatMessagePacket}
 */
proto.rooms.api.v1.DeleteChatMessagePacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.DeleteChatMessagePacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.DeleteChatMessagePacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.DeleteChatMessagePacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteChatMessagePacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.DeleteChatMessagePacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DeleteChatMessagePacket} returns this
 */
proto.rooms.api.v1.DeleteChatMessagePacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string chat_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.DeleteChatMessagePacket.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DeleteChatMessagePacket} returns this
 */
proto.rooms.api.v1.DeleteChatMessagePacket.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.DeleteChatMessagePacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.DeleteChatMessagePacket} returns this
 */
proto.rooms.api.v1.DeleteChatMessagePacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rooms.api.v1.ClearChatMessagesPacket.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.ClearChatMessagesPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.ClearChatMessagesPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.ClearChatMessagesPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    chatId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.ClearChatMessagesPacket}
 */
proto.rooms.api.v1.ClearChatMessagesPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.ClearChatMessagesPacket;
  return proto.rooms.api.v1.ClearChatMessagesPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.ClearChatMessagesPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.ClearChatMessagesPacket}
 */
proto.rooms.api.v1.ClearChatMessagesPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.ClearChatMessagesPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.ClearChatMessagesPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.ClearChatMessagesPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.rooms.api.v1.ClearChatMessagesPacket} returns this
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.rooms.api.v1.ClearChatMessagesPacket} returns this
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rooms.api.v1.ClearChatMessagesPacket} returns this
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * optional string chat_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.ClearChatMessagesPacket} returns this
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.ClearChatMessagesPacket} returns this
 */
proto.rooms.api.v1.ClearChatMessagesPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateChatMessageContentPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateChatMessageContentPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chatId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateChatMessageContentPacket}
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateChatMessageContentPacket;
  return proto.rooms.api.v1.UpdateChatMessageContentPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateChatMessageContentPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateChatMessageContentPacket}
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateChatMessageContentPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateChatMessageContentPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateChatMessageContentPacket} returns this
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string chat_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateChatMessageContentPacket} returns this
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateChatMessageContentPacket} returns this
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateChatMessageContentPacket} returns this
 */
proto.rooms.api.v1.UpdateChatMessageContentPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.CreateUserTicketPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.CreateUserTicketPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.CreateUserTicketPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateUserTicketPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: (f = msg.getTicket()) && rooms_models_pb.UserTicketInfo.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.CreateUserTicketPacket}
 */
proto.rooms.api.v1.CreateUserTicketPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.CreateUserTicketPacket;
  return proto.rooms.api.v1.CreateUserTicketPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.CreateUserTicketPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.CreateUserTicketPacket}
 */
proto.rooms.api.v1.CreateUserTicketPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new rooms_models_pb.UserTicketInfo;
      reader.readMessage(value,rooms_models_pb.UserTicketInfo.deserializeBinaryFromReader);
      msg.setTicket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.CreateUserTicketPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.CreateUserTicketPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.CreateUserTicketPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateUserTicketPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      rooms_models_pb.UserTicketInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional UserTicketInfo ticket = 1;
 * @return {?proto.rooms.api.v1.UserTicketInfo}
 */
proto.rooms.api.v1.CreateUserTicketPacket.prototype.getTicket = function() {
  return /** @type{?proto.rooms.api.v1.UserTicketInfo} */ (
    jspb.Message.getWrapperField(this, rooms_models_pb.UserTicketInfo, 1));
};


/**
 * @param {?proto.rooms.api.v1.UserTicketInfo|undefined} value
 * @return {!proto.rooms.api.v1.CreateUserTicketPacket} returns this
*/
proto.rooms.api.v1.CreateUserTicketPacket.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rooms.api.v1.CreateUserTicketPacket} returns this
 */
proto.rooms.api.v1.CreateUserTicketPacket.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rooms.api.v1.CreateUserTicketPacket.prototype.hasTicket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.CreateUserTicketPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.CreateUserTicketPacket} returns this
 */
proto.rooms.api.v1.CreateUserTicketPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.DeleteRoomPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.DeleteRoomPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.DeleteRoomPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteRoomPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.DeleteRoomPacket}
 */
proto.rooms.api.v1.DeleteRoomPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.DeleteRoomPacket;
  return proto.rooms.api.v1.DeleteRoomPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.DeleteRoomPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.DeleteRoomPacket}
 */
proto.rooms.api.v1.DeleteRoomPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.DeleteRoomPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.DeleteRoomPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.DeleteRoomPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteRoomPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.DeleteRoomPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DeleteRoomPacket} returns this
 */
proto.rooms.api.v1.DeleteRoomPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.DeleteRoomPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.DeleteRoomPacket} returns this
 */
proto.rooms.api.v1.DeleteRoomPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomPidPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomPidPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomPidPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomPidPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomPidPacket}
 */
proto.rooms.api.v1.UpdateRoomPidPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomPidPacket;
  return proto.rooms.api.v1.UpdateRoomPidPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomPidPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomPidPacket}
 */
proto.rooms.api.v1.UpdateRoomPidPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomPidPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomPidPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomPidPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomPidPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomPidPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomPidPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomPidPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pid = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomPidPacket.prototype.getPid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomPidPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomPidPacket.prototype.setPid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomPidPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomPidPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomPidPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomNamePacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomNamePacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomNamePacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomNamePacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomNamePacket}
 */
proto.rooms.api.v1.UpdateRoomNamePacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomNamePacket;
  return proto.rooms.api.v1.UpdateRoomNamePacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomNamePacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomNamePacket}
 */
proto.rooms.api.v1.UpdateRoomNamePacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomNamePacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomNamePacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomNamePacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomNamePacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomNamePacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomNamePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomNamePacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomNamePacket.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomNamePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomNamePacket.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomNamePacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomNamePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomNamePacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomTypePacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomTypePacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomTypePacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomTypePacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomTypePacket}
 */
proto.rooms.api.v1.UpdateRoomTypePacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomTypePacket;
  return proto.rooms.api.v1.UpdateRoomTypePacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomTypePacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomTypePacket}
 */
proto.rooms.api.v1.UpdateRoomTypePacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.rooms.api.v1.RoomType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomTypePacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomTypePacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomTypePacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomTypePacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomTypePacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomTypePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomTypePacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RoomType type = 2;
 * @return {!proto.rooms.api.v1.RoomType}
 */
proto.rooms.api.v1.UpdateRoomTypePacket.prototype.getType = function() {
  return /** @type {!proto.rooms.api.v1.RoomType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rooms.api.v1.RoomType} value
 * @return {!proto.rooms.api.v1.UpdateRoomTypePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomTypePacket.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomTypePacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomTypePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomTypePacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomLimitPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomLimitPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomLimitPacket}
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomLimitPacket;
  return proto.rooms.api.v1.UpdateRoomLimitPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomLimitPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomLimitPacket}
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomLimitPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomLimitPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomLimitPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomLimitPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomLimitPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomLimitPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomAccessPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomAccessPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    access: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomAccessPacket}
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomAccessPacket;
  return proto.rooms.api.v1.UpdateRoomAccessPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomAccessPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomAccessPacket}
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.rooms.api.v1.RoomAccess} */ (reader.readEnum());
      msg.setAccess(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomAccessPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomAccessPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccess();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomAccessPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RoomAccess access = 2;
 * @return {!proto.rooms.api.v1.RoomAccess}
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.prototype.getAccess = function() {
  return /** @type {!proto.rooms.api.v1.RoomAccess} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rooms.api.v1.RoomAccess} value
 * @return {!proto.rooms.api.v1.UpdateRoomAccessPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.prototype.setAccess = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomAccessPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomAccessPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomThumbnailPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomThumbnailPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    thumbnailUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomThumbnailPacket}
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomThumbnailPacket;
  return proto.rooms.api.v1.UpdateRoomThumbnailPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomThumbnailPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomThumbnailPacket}
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailUrl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomThumbnailPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomThumbnailPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThumbnailUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomThumbnailPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string thumbnail_url = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.prototype.getThumbnailUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomThumbnailPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.prototype.setThumbnailUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomThumbnailPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomThumbnailPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomBackgroundPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomBackgroundPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    backgroundUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomBackgroundPacket}
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomBackgroundPacket;
  return proto.rooms.api.v1.UpdateRoomBackgroundPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomBackgroundPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomBackgroundPacket}
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgroundUrl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomBackgroundPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomBackgroundPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBackgroundUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomBackgroundPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string background_url = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.prototype.getBackgroundUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomBackgroundPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.prototype.setBackgroundUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomBackgroundPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomBackgroundPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.DisconnectRoomUserPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.DisconnectRoomUserPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.DisconnectRoomUserPacket}
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.DisconnectRoomUserPacket;
  return proto.rooms.api.v1.DisconnectRoomUserPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.DisconnectRoomUserPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.DisconnectRoomUserPacket}
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.DisconnectRoomUserPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.DisconnectRoomUserPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DisconnectRoomUserPacket} returns this
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DisconnectRoomUserPacket} returns this
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.DisconnectRoomUserPacket} returns this
 */
proto.rooms.api.v1.DisconnectRoomUserPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomUserRolePacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomUserRolePacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    role: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomUserRolePacket}
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomUserRolePacket;
  return proto.rooms.api.v1.UpdateRoomUserRolePacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomUserRolePacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomUserRolePacket}
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRole(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomUserRolePacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomUserRolePacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRole();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserRolePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserRolePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 role = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.getRole = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserRolePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.setRole = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserRolePacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserRolePacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomUserFlagsPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    flagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket}
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomUserFlagsPacket;
  return proto.rooms.api.v1.UpdateRoomUserFlagsPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket}
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.rooms.api.v1.RoomUserFlag>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFlags(values[i]);
      }
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomUserFlagsPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFlagsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated RoomUserFlag flags = 3;
 * @return {!Array<!proto.rooms.api.v1.RoomUserFlag>}
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.getFlagsList = function() {
  return /** @type {!Array<!proto.rooms.api.v1.RoomUserFlag>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.rooms.api.v1.RoomUserFlag>} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.setFlagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.rooms.api.v1.RoomUserFlag} value
 * @param {number=} opt_index
 * @return {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.addFlags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.clearFlagsList = function() {
  return this.setFlagsList([]);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserFlagsPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserFlagsPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomUserStatesPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatesPacket}
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomUserStatesPacket;
  return proto.rooms.api.v1.UpdateRoomUserStatesPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatesPacket}
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.rooms.api.v1.RoomUserState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStates(values[i]);
      }
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomUserStatesPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated RoomUserState states = 3;
 * @return {!Array<!proto.rooms.api.v1.RoomUserState>}
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.getStatesList = function() {
  return /** @type {!Array<!proto.rooms.api.v1.RoomUserState>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.rooms.api.v1.RoomUserState>} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.setStatesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.rooms.api.v1.RoomUserState} value
 * @param {number=} opt_index
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.addStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.clearStatesList = function() {
  return this.setStatesList([]);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatesPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatesPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomUserStatusPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomUserStatusPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatusPacket}
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomUserStatusPacket;
  return proto.rooms.api.v1.UpdateRoomUserStatusPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomUserStatusPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatusPacket}
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {!proto.rooms.api.v1.RoomUserStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomUserStatusPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomUserStatusPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RoomUserStatus status = 3;
 * @return {!proto.rooms.api.v1.RoomUserStatus}
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.getStatus = function() {
  return /** @type {!proto.rooms.api.v1.RoomUserStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rooms.api.v1.RoomUserStatus} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserStatusPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderConnectionStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket}
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket;
  return proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket}
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {!proto.rooms.api.v1.RoomUserSenderConnectionStatus} */ (reader.readEnum());
      msg.setSenderConnectionStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSenderConnectionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RoomUserSenderConnectionStatus sender_connection_status = 3;
 * @return {!proto.rooms.api.v1.RoomUserSenderConnectionStatus}
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.getSenderConnectionStatus = function() {
  return /** @type {!proto.rooms.api.v1.RoomUserSenderConnectionStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rooms.api.v1.RoomUserSenderConnectionStatus} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.setSenderConnectionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserSenderConnectionStatusPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    receiverConnectionStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket}
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket;
  return proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket}
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {!proto.rooms.api.v1.RoomUserReceiverConnectionStatus} */ (reader.readEnum());
      msg.setReceiverConnectionStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReceiverConnectionStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RoomUserReceiverConnectionStatus receiver_connection_status = 3;
 * @return {!proto.rooms.api.v1.RoomUserReceiverConnectionStatus}
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.getReceiverConnectionStatus = function() {
  return /** @type {!proto.rooms.api.v1.RoomUserReceiverConnectionStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.rooms.api.v1.RoomUserReceiverConnectionStatus} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.setReceiverConnectionStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomUserReceiverConnectionStatusPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.CreateRoomStreamPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.CreateRoomStreamPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.CreateRoomStreamPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateRoomStreamPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    stream: (f = msg.getStream()) && rooms_models_pb.RoomStreamInfo.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.CreateRoomStreamPacket}
 */
proto.rooms.api.v1.CreateRoomStreamPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.CreateRoomStreamPacket;
  return proto.rooms.api.v1.CreateRoomStreamPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.CreateRoomStreamPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.CreateRoomStreamPacket}
 */
proto.rooms.api.v1.CreateRoomStreamPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new rooms_models_pb.RoomStreamInfo;
      reader.readMessage(value,rooms_models_pb.RoomStreamInfo.deserializeBinaryFromReader);
      msg.setStream(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.CreateRoomStreamPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.CreateRoomStreamPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.CreateRoomStreamPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateRoomStreamPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStream();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      rooms_models_pb.RoomStreamInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional RoomStreamInfo stream = 1;
 * @return {?proto.rooms.api.v1.RoomStreamInfo}
 */
proto.rooms.api.v1.CreateRoomStreamPacket.prototype.getStream = function() {
  return /** @type{?proto.rooms.api.v1.RoomStreamInfo} */ (
    jspb.Message.getWrapperField(this, rooms_models_pb.RoomStreamInfo, 1));
};


/**
 * @param {?proto.rooms.api.v1.RoomStreamInfo|undefined} value
 * @return {!proto.rooms.api.v1.CreateRoomStreamPacket} returns this
*/
proto.rooms.api.v1.CreateRoomStreamPacket.prototype.setStream = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rooms.api.v1.CreateRoomStreamPacket} returns this
 */
proto.rooms.api.v1.CreateRoomStreamPacket.prototype.clearStream = function() {
  return this.setStream(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rooms.api.v1.CreateRoomStreamPacket.prototype.hasStream = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.CreateRoomStreamPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.CreateRoomStreamPacket} returns this
 */
proto.rooms.api.v1.CreateRoomStreamPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.DeleteRoomStreamPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.DeleteRoomStreamPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.DeleteRoomStreamPacket}
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.DeleteRoomStreamPacket;
  return proto.rooms.api.v1.DeleteRoomStreamPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.DeleteRoomStreamPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.DeleteRoomStreamPacket}
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.DeleteRoomStreamPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.DeleteRoomStreamPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DeleteRoomStreamPacket} returns this
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.DeleteRoomStreamPacket} returns this
 */
proto.rooms.api.v1.DeleteRoomStreamPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.ClearRoomStreamsPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.ClearRoomStreamsPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    roomId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.ClearRoomStreamsPacket}
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.ClearRoomStreamsPacket;
  return proto.rooms.api.v1.ClearRoomStreamsPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.ClearRoomStreamsPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.ClearRoomStreamsPacket}
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.ClearRoomStreamsPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.ClearRoomStreamsPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRoomId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.rooms.api.v1.ClearRoomStreamsPacket} returns this
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.rooms.api.v1.ClearRoomStreamsPacket} returns this
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rooms.api.v1.ClearRoomStreamsPacket} returns this
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * optional string room_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.ClearRoomStreamsPacket} returns this
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.ClearRoomStreamsPacket} returns this
 */
proto.rooms.api.v1.ClearRoomStreamsPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomStreamPositionPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomStreamPositionPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamPositionPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomStreamPositionPacket;
  return proto.rooms.api.v1.UpdateRoomStreamPositionPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamPositionPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamPositionPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPosition(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomStreamPositionPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamPositionPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamPositionPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 position = 2;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamPositionPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamPositionPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamPositionPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stack: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket;
  return proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStack(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStack();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stack = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.prototype.getStack = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.prototype.setStack = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataStackPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket;
  return proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataOffsetPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paused: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket;
  return proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPaused(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaused();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool paused = 2;
 * @return {boolean}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.prototype.getPaused = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.prototype.setPaused = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataPausedPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    related: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket;
  return proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRelated(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRelated();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool related = 2;
 * @return {boolean}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.prototype.getRelated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.prototype.setRelated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataRelatedPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    suggest: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket;
  return proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuggest(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSuggest();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool suggest = 2;
 * @return {boolean}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.prototype.getSuggest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.prototype.setSuggest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataSuggestPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket;
  return proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 duration = 2;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket} returns this
 */
proto.rooms.api.v1.UpdateRoomStreamMetadataDurationPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.DeliverRoomInvitePacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.DeliverRoomInvitePacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    invite: (f = msg.getInvite()) && rooms_models_pb.RoomInviteInfo.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.DeliverRoomInvitePacket}
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.DeliverRoomInvitePacket;
  return proto.rooms.api.v1.DeliverRoomInvitePacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.DeliverRoomInvitePacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.DeliverRoomInvitePacket}
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new rooms_models_pb.RoomInviteInfo;
      reader.readMessage(value,rooms_models_pb.RoomInviteInfo.deserializeBinaryFromReader);
      msg.setInvite(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.DeliverRoomInvitePacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.DeliverRoomInvitePacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvite();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      rooms_models_pb.RoomInviteInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional RoomInviteInfo invite = 1;
 * @return {?proto.rooms.api.v1.RoomInviteInfo}
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.prototype.getInvite = function() {
  return /** @type{?proto.rooms.api.v1.RoomInviteInfo} */ (
    jspb.Message.getWrapperField(this, rooms_models_pb.RoomInviteInfo, 1));
};


/**
 * @param {?proto.rooms.api.v1.RoomInviteInfo|undefined} value
 * @return {!proto.rooms.api.v1.DeliverRoomInvitePacket} returns this
*/
proto.rooms.api.v1.DeliverRoomInvitePacket.prototype.setInvite = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rooms.api.v1.DeliverRoomInvitePacket} returns this
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.prototype.clearInvite = function() {
  return this.setInvite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.prototype.hasInvite = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.DeliverRoomInvitePacket} returns this
 */
proto.rooms.api.v1.DeliverRoomInvitePacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.StartEventPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.StartEventPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.StartEventPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.StartEventPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.StartEventPacket}
 */
proto.rooms.api.v1.StartEventPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.StartEventPacket;
  return proto.rooms.api.v1.StartEventPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.StartEventPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.StartEventPacket}
 */
proto.rooms.api.v1.StartEventPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.StartEventPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.StartEventPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.StartEventPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.StartEventPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.StartEventPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.StartEventPacket} returns this
 */
proto.rooms.api.v1.StartEventPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.StartEventPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.StartEventPacket} returns this
 */
proto.rooms.api.v1.StartEventPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.FinishEventPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.FinishEventPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.FinishEventPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.FinishEventPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.FinishEventPacket}
 */
proto.rooms.api.v1.FinishEventPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.FinishEventPacket;
  return proto.rooms.api.v1.FinishEventPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.FinishEventPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.FinishEventPacket}
 */
proto.rooms.api.v1.FinishEventPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.FinishEventPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.FinishEventPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.FinishEventPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.FinishEventPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.FinishEventPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.FinishEventPacket} returns this
 */
proto.rooms.api.v1.FinishEventPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.FinishEventPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.FinishEventPacket} returns this
 */
proto.rooms.api.v1.FinishEventPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.CancelEventPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.CancelEventPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.CancelEventPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CancelEventPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.CancelEventPacket}
 */
proto.rooms.api.v1.CancelEventPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.CancelEventPacket;
  return proto.rooms.api.v1.CancelEventPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.CancelEventPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.CancelEventPacket}
 */
proto.rooms.api.v1.CancelEventPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.CancelEventPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.CancelEventPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.CancelEventPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CancelEventPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.CancelEventPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.CancelEventPacket} returns this
 */
proto.rooms.api.v1.CancelEventPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.rooms.api.v1.CancelEventPacket.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.CancelEventPacket} returns this
 */
proto.rooms.api.v1.CancelEventPacket.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.CancelEventPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.CancelEventPacket} returns this
 */
proto.rooms.api.v1.CancelEventPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.CreateEventPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.CreateEventPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.CreateEventPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateEventPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: (f = msg.getEvent()) && rooms_models_pb.EventInfo.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.CreateEventPacket}
 */
proto.rooms.api.v1.CreateEventPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.CreateEventPacket;
  return proto.rooms.api.v1.CreateEventPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.CreateEventPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.CreateEventPacket}
 */
proto.rooms.api.v1.CreateEventPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new rooms_models_pb.EventInfo;
      reader.readMessage(value,rooms_models_pb.EventInfo.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.CreateEventPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.CreateEventPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.CreateEventPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateEventPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      rooms_models_pb.EventInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional EventInfo event = 1;
 * @return {?proto.rooms.api.v1.EventInfo}
 */
proto.rooms.api.v1.CreateEventPacket.prototype.getEvent = function() {
  return /** @type{?proto.rooms.api.v1.EventInfo} */ (
    jspb.Message.getWrapperField(this, rooms_models_pb.EventInfo, 1));
};


/**
 * @param {?proto.rooms.api.v1.EventInfo|undefined} value
 * @return {!proto.rooms.api.v1.CreateEventPacket} returns this
*/
proto.rooms.api.v1.CreateEventPacket.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rooms.api.v1.CreateEventPacket} returns this
 */
proto.rooms.api.v1.CreateEventPacket.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rooms.api.v1.CreateEventPacket.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.CreateEventPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.CreateEventPacket} returns this
 */
proto.rooms.api.v1.CreateEventPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.DeleteEventPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.DeleteEventPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.DeleteEventPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteEventPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.DeleteEventPacket}
 */
proto.rooms.api.v1.DeleteEventPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.DeleteEventPacket;
  return proto.rooms.api.v1.DeleteEventPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.DeleteEventPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.DeleteEventPacket}
 */
proto.rooms.api.v1.DeleteEventPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.DeleteEventPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.DeleteEventPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.DeleteEventPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteEventPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.DeleteEventPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DeleteEventPacket} returns this
 */
proto.rooms.api.v1.DeleteEventPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.DeleteEventPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.DeleteEventPacket} returns this
 */
proto.rooms.api.v1.DeleteEventPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventNamePacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventNamePacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventNamePacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventNamePacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventNamePacket}
 */
proto.rooms.api.v1.UpdateEventNamePacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventNamePacket;
  return proto.rooms.api.v1.UpdateEventNamePacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventNamePacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventNamePacket}
 */
proto.rooms.api.v1.UpdateEventNamePacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventNamePacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventNamePacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventNamePacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventNamePacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventNamePacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventNamePacket} returns this
 */
proto.rooms.api.v1.UpdateEventNamePacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventNamePacket.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventNamePacket} returns this
 */
proto.rooms.api.v1.UpdateEventNamePacket.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventNamePacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventNamePacket} returns this
 */
proto.rooms.api.v1.UpdateEventNamePacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventStatusPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventStatusPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventStatusPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventStatusPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventStatusPacket}
 */
proto.rooms.api.v1.UpdateEventStatusPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventStatusPacket;
  return proto.rooms.api.v1.UpdateEventStatusPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventStatusPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventStatusPacket}
 */
proto.rooms.api.v1.UpdateEventStatusPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.rooms.api.v1.EventStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventStatusPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventStatusPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventStatusPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventStatusPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventStatusPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateEventStatusPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EventStatus status = 2;
 * @return {!proto.rooms.api.v1.EventStatus}
 */
proto.rooms.api.v1.UpdateEventStatusPacket.prototype.getStatus = function() {
  return /** @type {!proto.rooms.api.v1.EventStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rooms.api.v1.EventStatus} value
 * @return {!proto.rooms.api.v1.UpdateEventStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateEventStatusPacket.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventStatusPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventStatusPacket} returns this
 */
proto.rooms.api.v1.UpdateEventStatusPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventSourcePacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventSourcePacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventSourcePacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventSourcePacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    source: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventSourcePacket}
 */
proto.rooms.api.v1.UpdateEventSourcePacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventSourcePacket;
  return proto.rooms.api.v1.UpdateEventSourcePacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventSourcePacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventSourcePacket}
 */
proto.rooms.api.v1.UpdateEventSourcePacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.rooms.api.v1.EventSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventSourcePacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventSourcePacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventSourcePacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventSourcePacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventSourcePacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventSourcePacket} returns this
 */
proto.rooms.api.v1.UpdateEventSourcePacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EventSource source = 2;
 * @return {!proto.rooms.api.v1.EventSource}
 */
proto.rooms.api.v1.UpdateEventSourcePacket.prototype.getSource = function() {
  return /** @type {!proto.rooms.api.v1.EventSource} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rooms.api.v1.EventSource} value
 * @return {!proto.rooms.api.v1.UpdateEventSourcePacket} returns this
 */
proto.rooms.api.v1.UpdateEventSourcePacket.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventSourcePacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventSourcePacket} returns this
 */
proto.rooms.api.v1.UpdateEventSourcePacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventLayoutPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventLayoutPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    layout: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventLayoutPacket}
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventLayoutPacket;
  return proto.rooms.api.v1.UpdateEventLayoutPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventLayoutPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventLayoutPacket}
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.rooms.api.v1.EventLayout} */ (reader.readEnum());
      msg.setLayout(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventLayoutPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventLayoutPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLayout();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventLayoutPacket} returns this
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EventLayout layout = 2;
 * @return {!proto.rooms.api.v1.EventLayout}
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.prototype.getLayout = function() {
  return /** @type {!proto.rooms.api.v1.EventLayout} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rooms.api.v1.EventLayout} value
 * @return {!proto.rooms.api.v1.UpdateEventLayoutPacket} returns this
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.prototype.setLayout = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventLayoutPacket} returns this
 */
proto.rooms.api.v1.UpdateEventLayoutPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rooms.api.v1.UpdateEventGenresPacket.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventGenresPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventGenresPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventGenresPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    genresList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventGenresPacket}
 */
proto.rooms.api.v1.UpdateEventGenresPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventGenresPacket;
  return proto.rooms.api.v1.UpdateEventGenresPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventGenresPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventGenresPacket}
 */
proto.rooms.api.v1.UpdateEventGenresPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.rooms.api.v1.EventGenre>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGenres(values[i]);
      }
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventGenresPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventGenresPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventGenresPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGenresList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventGenresPacket} returns this
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated EventGenre genres = 2;
 * @return {!Array<!proto.rooms.api.v1.EventGenre>}
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.getGenresList = function() {
  return /** @type {!Array<!proto.rooms.api.v1.EventGenre>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.rooms.api.v1.EventGenre>} value
 * @return {!proto.rooms.api.v1.UpdateEventGenresPacket} returns this
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.setGenresList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.rooms.api.v1.EventGenre} value
 * @param {number=} opt_index
 * @return {!proto.rooms.api.v1.UpdateEventGenresPacket} returns this
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.addGenres = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rooms.api.v1.UpdateEventGenresPacket} returns this
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.clearGenresList = function() {
  return this.setGenresList([]);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventGenresPacket} returns this
 */
proto.rooms.api.v1.UpdateEventGenresPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventSummaryPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventSummaryPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    summary: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventSummaryPacket}
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventSummaryPacket;
  return proto.rooms.api.v1.UpdateEventSummaryPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventSummaryPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventSummaryPacket}
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventSummaryPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventSummaryPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventSummaryPacket} returns this
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string summary = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventSummaryPacket} returns this
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventSummaryPacket} returns this
 */
proto.rooms.api.v1.UpdateEventSummaryPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventAudiencePacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventAudiencePacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    audience: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventAudiencePacket}
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventAudiencePacket;
  return proto.rooms.api.v1.UpdateEventAudiencePacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventAudiencePacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventAudiencePacket}
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAudience(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventAudiencePacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventAudiencePacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAudience();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventAudiencePacket} returns this
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 audience = 2;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.prototype.getAudience = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventAudiencePacket} returns this
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.prototype.setAudience = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventAudiencePacket} returns this
 */
proto.rooms.api.v1.UpdateEventAudiencePacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventThumbnailPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventThumbnailPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    thumbnailUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventThumbnailPacket}
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventThumbnailPacket;
  return proto.rooms.api.v1.UpdateEventThumbnailPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventThumbnailPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventThumbnailPacket}
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailUrl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventThumbnailPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventThumbnailPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThumbnailUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventThumbnailPacket} returns this
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string thumbnail_url = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.prototype.getThumbnailUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventThumbnailPacket} returns this
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.prototype.setThumbnailUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventThumbnailPacket} returns this
 */
proto.rooms.api.v1.UpdateEventThumbnailPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventBackgroundPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventBackgroundPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    backgroundUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventBackgroundPacket}
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventBackgroundPacket;
  return proto.rooms.api.v1.UpdateEventBackgroundPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventBackgroundPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventBackgroundPacket}
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgroundUrl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventBackgroundPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventBackgroundPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBackgroundUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventBackgroundPacket} returns this
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string background_url = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.prototype.getBackgroundUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventBackgroundPacket} returns this
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.prototype.setBackgroundUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventBackgroundPacket} returns this
 */
proto.rooms.api.v1.UpdateEventBackgroundPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventDescriptionPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventDescriptionPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventDescriptionPacket}
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventDescriptionPacket;
  return proto.rooms.api.v1.UpdateEventDescriptionPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventDescriptionPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventDescriptionPacket}
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventDescriptionPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventDescriptionPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventDescriptionPacket} returns this
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventDescriptionPacket} returns this
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventDescriptionPacket} returns this
 */
proto.rooms.api.v1.UpdateEventDescriptionPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.RefreshEventBroadcastPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.RefreshEventBroadcastPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.RefreshEventBroadcastPacket}
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.RefreshEventBroadcastPacket;
  return proto.rooms.api.v1.RefreshEventBroadcastPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.RefreshEventBroadcastPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.RefreshEventBroadcastPacket}
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.RefreshEventBroadcastPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.RefreshEventBroadcastPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.RefreshEventBroadcastPacket} returns this
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.RefreshEventBroadcastPacket} returns this
 */
proto.rooms.api.v1.RefreshEventBroadcastPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.CreateEventObserverPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.CreateEventObserverPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.CreateEventObserverPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateEventObserverPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    observer: (f = msg.getObserver()) && rooms_models_pb.EventObserverInfo.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.CreateEventObserverPacket}
 */
proto.rooms.api.v1.CreateEventObserverPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.CreateEventObserverPacket;
  return proto.rooms.api.v1.CreateEventObserverPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.CreateEventObserverPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.CreateEventObserverPacket}
 */
proto.rooms.api.v1.CreateEventObserverPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new rooms_models_pb.EventObserverInfo;
      reader.readMessage(value,rooms_models_pb.EventObserverInfo.deserializeBinaryFromReader);
      msg.setObserver(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.CreateEventObserverPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.CreateEventObserverPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.CreateEventObserverPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateEventObserverPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObserver();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      rooms_models_pb.EventObserverInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional EventObserverInfo observer = 1;
 * @return {?proto.rooms.api.v1.EventObserverInfo}
 */
proto.rooms.api.v1.CreateEventObserverPacket.prototype.getObserver = function() {
  return /** @type{?proto.rooms.api.v1.EventObserverInfo} */ (
    jspb.Message.getWrapperField(this, rooms_models_pb.EventObserverInfo, 1));
};


/**
 * @param {?proto.rooms.api.v1.EventObserverInfo|undefined} value
 * @return {!proto.rooms.api.v1.CreateEventObserverPacket} returns this
*/
proto.rooms.api.v1.CreateEventObserverPacket.prototype.setObserver = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rooms.api.v1.CreateEventObserverPacket} returns this
 */
proto.rooms.api.v1.CreateEventObserverPacket.prototype.clearObserver = function() {
  return this.setObserver(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rooms.api.v1.CreateEventObserverPacket.prototype.hasObserver = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.CreateEventObserverPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.CreateEventObserverPacket} returns this
 */
proto.rooms.api.v1.CreateEventObserverPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.DeleteEventObserverPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.DeleteEventObserverPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.DeleteEventObserverPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteEventObserverPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.DeleteEventObserverPacket}
 */
proto.rooms.api.v1.DeleteEventObserverPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.DeleteEventObserverPacket;
  return proto.rooms.api.v1.DeleteEventObserverPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.DeleteEventObserverPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.DeleteEventObserverPacket}
 */
proto.rooms.api.v1.DeleteEventObserverPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.DeleteEventObserverPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.DeleteEventObserverPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.DeleteEventObserverPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteEventObserverPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string room_id = 1;
 * @return {string}
 */
proto.rooms.api.v1.DeleteEventObserverPacket.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DeleteEventObserverPacket} returns this
 */
proto.rooms.api.v1.DeleteEventObserverPacket.prototype.setRoomId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string event_id = 2;
 * @return {string}
 */
proto.rooms.api.v1.DeleteEventObserverPacket.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DeleteEventObserverPacket} returns this
 */
proto.rooms.api.v1.DeleteEventObserverPacket.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.DeleteEventObserverPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.DeleteEventObserverPacket} returns this
 */
proto.rooms.api.v1.DeleteEventObserverPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.CreateEventPerformerPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.CreateEventPerformerPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.CreateEventPerformerPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateEventPerformerPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    performer: (f = msg.getPerformer()) && rooms_models_pb.EventPerformerInfo.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.CreateEventPerformerPacket}
 */
proto.rooms.api.v1.CreateEventPerformerPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.CreateEventPerformerPacket;
  return proto.rooms.api.v1.CreateEventPerformerPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.CreateEventPerformerPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.CreateEventPerformerPacket}
 */
proto.rooms.api.v1.CreateEventPerformerPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new rooms_models_pb.EventPerformerInfo;
      reader.readMessage(value,rooms_models_pb.EventPerformerInfo.deserializeBinaryFromReader);
      msg.setPerformer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.CreateEventPerformerPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.CreateEventPerformerPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.CreateEventPerformerPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CreateEventPerformerPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerformer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      rooms_models_pb.EventPerformerInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional EventPerformerInfo performer = 1;
 * @return {?proto.rooms.api.v1.EventPerformerInfo}
 */
proto.rooms.api.v1.CreateEventPerformerPacket.prototype.getPerformer = function() {
  return /** @type{?proto.rooms.api.v1.EventPerformerInfo} */ (
    jspb.Message.getWrapperField(this, rooms_models_pb.EventPerformerInfo, 1));
};


/**
 * @param {?proto.rooms.api.v1.EventPerformerInfo|undefined} value
 * @return {!proto.rooms.api.v1.CreateEventPerformerPacket} returns this
*/
proto.rooms.api.v1.CreateEventPerformerPacket.prototype.setPerformer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rooms.api.v1.CreateEventPerformerPacket} returns this
 */
proto.rooms.api.v1.CreateEventPerformerPacket.prototype.clearPerformer = function() {
  return this.setPerformer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rooms.api.v1.CreateEventPerformerPacket.prototype.hasPerformer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.CreateEventPerformerPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.CreateEventPerformerPacket} returns this
 */
proto.rooms.api.v1.CreateEventPerformerPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.DeleteEventPerformerPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.DeleteEventPerformerPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.DeleteEventPerformerPacket}
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.DeleteEventPerformerPacket;
  return proto.rooms.api.v1.DeleteEventPerformerPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.DeleteEventPerformerPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.DeleteEventPerformerPacket}
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.DeleteEventPerformerPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.DeleteEventPerformerPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.DeleteEventPerformerPacket} returns this
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.DeleteEventPerformerPacket} returns this
 */
proto.rooms.api.v1.DeleteEventPerformerPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.CancelEventPerformerPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.CancelEventPerformerPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.CancelEventPerformerPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CancelEventPerformerPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.CancelEventPerformerPacket}
 */
proto.rooms.api.v1.CancelEventPerformerPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.CancelEventPerformerPacket;
  return proto.rooms.api.v1.CancelEventPerformerPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.CancelEventPerformerPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.CancelEventPerformerPacket}
 */
proto.rooms.api.v1.CancelEventPerformerPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.CancelEventPerformerPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.CancelEventPerformerPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.CancelEventPerformerPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.CancelEventPerformerPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.rooms.api.v1.CancelEventPerformerPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.CancelEventPerformerPacket} returns this
 */
proto.rooms.api.v1.CancelEventPerformerPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.CancelEventPerformerPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.CancelEventPerformerPacket} returns this
 */
proto.rooms.api.v1.CancelEventPerformerPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.PrepareEventPerformerPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.PrepareEventPerformerPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.PrepareEventPerformerPacket}
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.PrepareEventPerformerPacket;
  return proto.rooms.api.v1.PrepareEventPerformerPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.PrepareEventPerformerPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.PrepareEventPerformerPacket}
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.PrepareEventPerformerPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.PrepareEventPerformerPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.PrepareEventPerformerPacket} returns this
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.PrepareEventPerformerPacket} returns this
 */
proto.rooms.api.v1.PrepareEventPerformerPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.prototype.toObject = function(opt_includeInstance) {
  return proto.rooms.api.v1.UpdateEventPerformerPositionPacket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rooms.api.v1.UpdateEventPerformerPositionPacket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rooms.api.v1.UpdateEventPerformerPositionPacket}
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rooms.api.v1.UpdateEventPerformerPositionPacket;
  return proto.rooms.api.v1.UpdateEventPerformerPositionPacket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rooms.api.v1.UpdateEventPerformerPositionPacket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rooms.api.v1.UpdateEventPerformerPositionPacket}
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPosition(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rooms.api.v1.UpdateEventPerformerPositionPacket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rooms.api.v1.UpdateEventPerformerPositionPacket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rooms.api.v1.UpdateEventPerformerPositionPacket} returns this
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 position = 2;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventPerformerPositionPacket} returns this
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.rooms.api.v1.UpdateEventPerformerPositionPacket} returns this
 */
proto.rooms.api.v1.UpdateEventPerformerPositionPacket.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.rooms.api.v1);
