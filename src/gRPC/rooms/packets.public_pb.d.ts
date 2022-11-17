import * as jspb from 'google-protobuf'

import * as rooms_enums_pb from '../rooms/enums_pb';
import * as rooms_models_pb from '../rooms/models_pb';


export class UpdateChatStatusPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateChatStatusPacket;

  getStatus(): rooms_enums_pb.ChatStatus;
  setStatus(value: rooms_enums_pb.ChatStatus): UpdateChatStatusPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateChatStatusPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatStatusPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatStatusPacket): UpdateChatStatusPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateChatStatusPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatStatusPacket;
  static deserializeBinaryFromReader(message: UpdateChatStatusPacket, reader: jspb.BinaryReader): UpdateChatStatusPacket;
}

export namespace UpdateChatStatusPacket {
  export type AsObject = {
    id: string,
    status: rooms_enums_pb.ChatStatus,
    timestamp: number,
  }
}

export class DeleteChatMessagePacket extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteChatMessagePacket;

  getChatId(): string;
  setChatId(value: string): DeleteChatMessagePacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeleteChatMessagePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatMessagePacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatMessagePacket): DeleteChatMessagePacket.AsObject;
  static serializeBinaryToWriter(message: DeleteChatMessagePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatMessagePacket;
  static deserializeBinaryFromReader(message: DeleteChatMessagePacket, reader: jspb.BinaryReader): DeleteChatMessagePacket;
}

export namespace DeleteChatMessagePacket {
  export type AsObject = {
    id: string,
    chatId: string,
    timestamp: number,
  }
}

export class ClearChatMessagesPacket extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ClearChatMessagesPacket;
  clearIdsList(): ClearChatMessagesPacket;
  addIds(value: string, index?: number): ClearChatMessagesPacket;

  getChatId(): string;
  setChatId(value: string): ClearChatMessagesPacket;

  getTimestamp(): number;
  setTimestamp(value: number): ClearChatMessagesPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearChatMessagesPacket.AsObject;
  static toObject(includeInstance: boolean, msg: ClearChatMessagesPacket): ClearChatMessagesPacket.AsObject;
  static serializeBinaryToWriter(message: ClearChatMessagesPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearChatMessagesPacket;
  static deserializeBinaryFromReader(message: ClearChatMessagesPacket, reader: jspb.BinaryReader): ClearChatMessagesPacket;
}

export namespace ClearChatMessagesPacket {
  export type AsObject = {
    idsList: Array<string>,
    chatId: string,
    timestamp: number,
  }
}

export class UpdateChatMessageContentPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateChatMessageContentPacket;

  getChatId(): string;
  setChatId(value: string): UpdateChatMessageContentPacket;

  getContent(): string;
  setContent(value: string): UpdateChatMessageContentPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateChatMessageContentPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatMessageContentPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatMessageContentPacket): UpdateChatMessageContentPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateChatMessageContentPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatMessageContentPacket;
  static deserializeBinaryFromReader(message: UpdateChatMessageContentPacket, reader: jspb.BinaryReader): UpdateChatMessageContentPacket;
}

export namespace UpdateChatMessageContentPacket {
  export type AsObject = {
    id: string,
    chatId: string,
    content: string,
    timestamp: number,
  }
}

export class CreateUserTicketPacket extends jspb.Message {
  getTicket(): rooms_models_pb.UserTicketInfo | undefined;
  setTicket(value?: rooms_models_pb.UserTicketInfo): CreateUserTicketPacket;
  hasTicket(): boolean;
  clearTicket(): CreateUserTicketPacket;

  getTimestamp(): number;
  setTimestamp(value: number): CreateUserTicketPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserTicketPacket.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserTicketPacket): CreateUserTicketPacket.AsObject;
  static serializeBinaryToWriter(message: CreateUserTicketPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserTicketPacket;
  static deserializeBinaryFromReader(message: CreateUserTicketPacket, reader: jspb.BinaryReader): CreateUserTicketPacket;
}

export namespace CreateUserTicketPacket {
  export type AsObject = {
    ticket?: rooms_models_pb.UserTicketInfo.AsObject,
    timestamp: number,
  }
}

export class DeleteRoomPacket extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRoomPacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeleteRoomPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomPacket): DeleteRoomPacket.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomPacket;
  static deserializeBinaryFromReader(message: DeleteRoomPacket, reader: jspb.BinaryReader): DeleteRoomPacket;
}

export namespace DeleteRoomPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

export class UpdateRoomPidPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomPidPacket;

  getPid(): string;
  setPid(value: string): UpdateRoomPidPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomPidPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomPidPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomPidPacket): UpdateRoomPidPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomPidPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomPidPacket;
  static deserializeBinaryFromReader(message: UpdateRoomPidPacket, reader: jspb.BinaryReader): UpdateRoomPidPacket;
}

export namespace UpdateRoomPidPacket {
  export type AsObject = {
    id: string,
    pid: string,
    timestamp: number,
  }
}

export class UpdateRoomNamePacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomNamePacket;

  getName(): string;
  setName(value: string): UpdateRoomNamePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomNamePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomNamePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomNamePacket): UpdateRoomNamePacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomNamePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomNamePacket;
  static deserializeBinaryFromReader(message: UpdateRoomNamePacket, reader: jspb.BinaryReader): UpdateRoomNamePacket;
}

export namespace UpdateRoomNamePacket {
  export type AsObject = {
    id: string,
    name: string,
    timestamp: number,
  }
}

export class UpdateRoomTypePacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomTypePacket;

  getType(): rooms_enums_pb.RoomType;
  setType(value: rooms_enums_pb.RoomType): UpdateRoomTypePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomTypePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomTypePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomTypePacket): UpdateRoomTypePacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomTypePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomTypePacket;
  static deserializeBinaryFromReader(message: UpdateRoomTypePacket, reader: jspb.BinaryReader): UpdateRoomTypePacket;
}

export namespace UpdateRoomTypePacket {
  export type AsObject = {
    id: string,
    type: rooms_enums_pb.RoomType,
    timestamp: number,
  }
}

export class UpdateRoomLimitPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomLimitPacket;

  getLimit(): number;
  setLimit(value: number): UpdateRoomLimitPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomLimitPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomLimitPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomLimitPacket): UpdateRoomLimitPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomLimitPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomLimitPacket;
  static deserializeBinaryFromReader(message: UpdateRoomLimitPacket, reader: jspb.BinaryReader): UpdateRoomLimitPacket;
}

export namespace UpdateRoomLimitPacket {
  export type AsObject = {
    id: string,
    limit: number,
    timestamp: number,
  }
}

export class UpdateRoomAccessPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomAccessPacket;

  getAccess(): rooms_enums_pb.RoomAccess;
  setAccess(value: rooms_enums_pb.RoomAccess): UpdateRoomAccessPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomAccessPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomAccessPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomAccessPacket): UpdateRoomAccessPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomAccessPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomAccessPacket;
  static deserializeBinaryFromReader(message: UpdateRoomAccessPacket, reader: jspb.BinaryReader): UpdateRoomAccessPacket;
}

export namespace UpdateRoomAccessPacket {
  export type AsObject = {
    id: string,
    access: rooms_enums_pb.RoomAccess,
    timestamp: number,
  }
}

export class UpdateRoomThumbnailPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomThumbnailPacket;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): UpdateRoomThumbnailPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomThumbnailPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomThumbnailPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomThumbnailPacket): UpdateRoomThumbnailPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomThumbnailPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomThumbnailPacket;
  static deserializeBinaryFromReader(message: UpdateRoomThumbnailPacket, reader: jspb.BinaryReader): UpdateRoomThumbnailPacket;
}

export namespace UpdateRoomThumbnailPacket {
  export type AsObject = {
    id: string,
    thumbnailUrl: string,
    timestamp: number,
  }
}

export class UpdateRoomBackgroundPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomBackgroundPacket;

  getBackgroundUrl(): string;
  setBackgroundUrl(value: string): UpdateRoomBackgroundPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomBackgroundPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomBackgroundPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomBackgroundPacket): UpdateRoomBackgroundPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomBackgroundPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomBackgroundPacket;
  static deserializeBinaryFromReader(message: UpdateRoomBackgroundPacket, reader: jspb.BinaryReader): UpdateRoomBackgroundPacket;
}

export namespace UpdateRoomBackgroundPacket {
  export type AsObject = {
    id: string,
    backgroundUrl: string,
    timestamp: number,
  }
}

export class DisconnectRoomUserPacket extends jspb.Message {
  getId(): string;
  setId(value: string): DisconnectRoomUserPacket;

  getUserId(): string;
  setUserId(value: string): DisconnectRoomUserPacket;

  getTimestamp(): number;
  setTimestamp(value: number): DisconnectRoomUserPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectRoomUserPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectRoomUserPacket): DisconnectRoomUserPacket.AsObject;
  static serializeBinaryToWriter(message: DisconnectRoomUserPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectRoomUserPacket;
  static deserializeBinaryFromReader(message: DisconnectRoomUserPacket, reader: jspb.BinaryReader): DisconnectRoomUserPacket;
}

export namespace DisconnectRoomUserPacket {
  export type AsObject = {
    id: string,
    userId: string,
    timestamp: number,
  }
}

export class UpdateRoomUserRolePacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomUserRolePacket;

  getUserId(): string;
  setUserId(value: string): UpdateRoomUserRolePacket;

  getRole(): number;
  setRole(value: number): UpdateRoomUserRolePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomUserRolePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserRolePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserRolePacket): UpdateRoomUserRolePacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserRolePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserRolePacket;
  static deserializeBinaryFromReader(message: UpdateRoomUserRolePacket, reader: jspb.BinaryReader): UpdateRoomUserRolePacket;
}

export namespace UpdateRoomUserRolePacket {
  export type AsObject = {
    id: string,
    userId: string,
    role: number,
    timestamp: number,
  }
}

export class UpdateRoomUserFlagsPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomUserFlagsPacket;

  getUserId(): string;
  setUserId(value: string): UpdateRoomUserFlagsPacket;

  getFlagsList(): Array<rooms_enums_pb.RoomUserFlag>;
  setFlagsList(value: Array<rooms_enums_pb.RoomUserFlag>): UpdateRoomUserFlagsPacket;
  clearFlagsList(): UpdateRoomUserFlagsPacket;
  addFlags(value: rooms_enums_pb.RoomUserFlag, index?: number): UpdateRoomUserFlagsPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomUserFlagsPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserFlagsPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserFlagsPacket): UpdateRoomUserFlagsPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserFlagsPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserFlagsPacket;
  static deserializeBinaryFromReader(message: UpdateRoomUserFlagsPacket, reader: jspb.BinaryReader): UpdateRoomUserFlagsPacket;
}

export namespace UpdateRoomUserFlagsPacket {
  export type AsObject = {
    id: string,
    userId: string,
    flagsList: Array<rooms_enums_pb.RoomUserFlag>,
    timestamp: number,
  }
}

export class UpdateRoomUserStatesPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomUserStatesPacket;

  getUserId(): string;
  setUserId(value: string): UpdateRoomUserStatesPacket;

  getStatesList(): Array<rooms_enums_pb.RoomUserState>;
  setStatesList(value: Array<rooms_enums_pb.RoomUserState>): UpdateRoomUserStatesPacket;
  clearStatesList(): UpdateRoomUserStatesPacket;
  addStates(value: rooms_enums_pb.RoomUserState, index?: number): UpdateRoomUserStatesPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomUserStatesPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserStatesPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserStatesPacket): UpdateRoomUserStatesPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserStatesPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserStatesPacket;
  static deserializeBinaryFromReader(message: UpdateRoomUserStatesPacket, reader: jspb.BinaryReader): UpdateRoomUserStatesPacket;
}

export namespace UpdateRoomUserStatesPacket {
  export type AsObject = {
    id: string,
    userId: string,
    statesList: Array<rooms_enums_pb.RoomUserState>,
    timestamp: number,
  }
}

export class UpdateRoomUserStatusPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomUserStatusPacket;

  getUserId(): string;
  setUserId(value: string): UpdateRoomUserStatusPacket;

  getStatus(): rooms_enums_pb.RoomUserStatus;
  setStatus(value: rooms_enums_pb.RoomUserStatus): UpdateRoomUserStatusPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomUserStatusPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserStatusPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserStatusPacket): UpdateRoomUserStatusPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserStatusPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserStatusPacket;
  static deserializeBinaryFromReader(message: UpdateRoomUserStatusPacket, reader: jspb.BinaryReader): UpdateRoomUserStatusPacket;
}

export namespace UpdateRoomUserStatusPacket {
  export type AsObject = {
    id: string,
    userId: string,
    status: rooms_enums_pb.RoomUserStatus,
    timestamp: number,
  }
}

export class UpdateRoomUserSenderConnectionStatusPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomUserSenderConnectionStatusPacket;

  getUserId(): string;
  setUserId(value: string): UpdateRoomUserSenderConnectionStatusPacket;

  getSenderConnectionStatus(): rooms_enums_pb.RoomUserSenderConnectionStatus;
  setSenderConnectionStatus(value: rooms_enums_pb.RoomUserSenderConnectionStatus): UpdateRoomUserSenderConnectionStatusPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomUserSenderConnectionStatusPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserSenderConnectionStatusPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserSenderConnectionStatusPacket): UpdateRoomUserSenderConnectionStatusPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserSenderConnectionStatusPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserSenderConnectionStatusPacket;
  static deserializeBinaryFromReader(message: UpdateRoomUserSenderConnectionStatusPacket, reader: jspb.BinaryReader): UpdateRoomUserSenderConnectionStatusPacket;
}

export namespace UpdateRoomUserSenderConnectionStatusPacket {
  export type AsObject = {
    id: string,
    userId: string,
    senderConnectionStatus: rooms_enums_pb.RoomUserSenderConnectionStatus,
    timestamp: number,
  }
}

export class UpdateRoomUserReceiverConnectionStatusPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomUserReceiverConnectionStatusPacket;

  getUserId(): string;
  setUserId(value: string): UpdateRoomUserReceiverConnectionStatusPacket;

  getReceiverConnectionStatus(): rooms_enums_pb.RoomUserReceiverConnectionStatus;
  setReceiverConnectionStatus(value: rooms_enums_pb.RoomUserReceiverConnectionStatus): UpdateRoomUserReceiverConnectionStatusPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomUserReceiverConnectionStatusPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserReceiverConnectionStatusPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserReceiverConnectionStatusPacket): UpdateRoomUserReceiverConnectionStatusPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserReceiverConnectionStatusPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserReceiverConnectionStatusPacket;
  static deserializeBinaryFromReader(message: UpdateRoomUserReceiverConnectionStatusPacket, reader: jspb.BinaryReader): UpdateRoomUserReceiverConnectionStatusPacket;
}

export namespace UpdateRoomUserReceiverConnectionStatusPacket {
  export type AsObject = {
    id: string,
    userId: string,
    receiverConnectionStatus: rooms_enums_pb.RoomUserReceiverConnectionStatus,
    timestamp: number,
  }
}

export class CreateRoomStreamPacket extends jspb.Message {
  getStream(): rooms_models_pb.RoomStreamInfo | undefined;
  setStream(value?: rooms_models_pb.RoomStreamInfo): CreateRoomStreamPacket;
  hasStream(): boolean;
  clearStream(): CreateRoomStreamPacket;

  getTimestamp(): number;
  setTimestamp(value: number): CreateRoomStreamPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomStreamPacket.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomStreamPacket): CreateRoomStreamPacket.AsObject;
  static serializeBinaryToWriter(message: CreateRoomStreamPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomStreamPacket;
  static deserializeBinaryFromReader(message: CreateRoomStreamPacket, reader: jspb.BinaryReader): CreateRoomStreamPacket;
}

export namespace CreateRoomStreamPacket {
  export type AsObject = {
    stream?: rooms_models_pb.RoomStreamInfo.AsObject,
    timestamp: number,
  }
}

export class DeleteRoomStreamPacket extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRoomStreamPacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeleteRoomStreamPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomStreamPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomStreamPacket): DeleteRoomStreamPacket.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomStreamPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomStreamPacket;
  static deserializeBinaryFromReader(message: DeleteRoomStreamPacket, reader: jspb.BinaryReader): DeleteRoomStreamPacket;
}

export namespace DeleteRoomStreamPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

export class ClearRoomStreamsPacket extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ClearRoomStreamsPacket;
  clearIdsList(): ClearRoomStreamsPacket;
  addIds(value: string, index?: number): ClearRoomStreamsPacket;

  getRoomId(): string;
  setRoomId(value: string): ClearRoomStreamsPacket;

  getTimestamp(): number;
  setTimestamp(value: number): ClearRoomStreamsPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearRoomStreamsPacket.AsObject;
  static toObject(includeInstance: boolean, msg: ClearRoomStreamsPacket): ClearRoomStreamsPacket.AsObject;
  static serializeBinaryToWriter(message: ClearRoomStreamsPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearRoomStreamsPacket;
  static deserializeBinaryFromReader(message: ClearRoomStreamsPacket, reader: jspb.BinaryReader): ClearRoomStreamsPacket;
}

export namespace ClearRoomStreamsPacket {
  export type AsObject = {
    idsList: Array<string>,
    roomId: string,
    timestamp: number,
  }
}

export class UpdateRoomStreamPositionPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomStreamPositionPacket;

  getPosition(): number;
  setPosition(value: number): UpdateRoomStreamPositionPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomStreamPositionPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamPositionPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamPositionPacket): UpdateRoomStreamPositionPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamPositionPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamPositionPacket;
  static deserializeBinaryFromReader(message: UpdateRoomStreamPositionPacket, reader: jspb.BinaryReader): UpdateRoomStreamPositionPacket;
}

export namespace UpdateRoomStreamPositionPacket {
  export type AsObject = {
    id: string,
    position: number,
    timestamp: number,
  }
}

export class UpdateRoomStreamMetadataStackPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomStreamMetadataStackPacket;

  getStack(): string;
  setStack(value: string): UpdateRoomStreamMetadataStackPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomStreamMetadataStackPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamMetadataStackPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamMetadataStackPacket): UpdateRoomStreamMetadataStackPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamMetadataStackPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamMetadataStackPacket;
  static deserializeBinaryFromReader(message: UpdateRoomStreamMetadataStackPacket, reader: jspb.BinaryReader): UpdateRoomStreamMetadataStackPacket;
}

export namespace UpdateRoomStreamMetadataStackPacket {
  export type AsObject = {
    id: string,
    stack: string,
    timestamp: number,
  }
}

export class UpdateRoomStreamMetadataOffsetPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomStreamMetadataOffsetPacket;

  getOffset(): number;
  setOffset(value: number): UpdateRoomStreamMetadataOffsetPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomStreamMetadataOffsetPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamMetadataOffsetPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamMetadataOffsetPacket): UpdateRoomStreamMetadataOffsetPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamMetadataOffsetPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamMetadataOffsetPacket;
  static deserializeBinaryFromReader(message: UpdateRoomStreamMetadataOffsetPacket, reader: jspb.BinaryReader): UpdateRoomStreamMetadataOffsetPacket;
}

export namespace UpdateRoomStreamMetadataOffsetPacket {
  export type AsObject = {
    id: string,
    offset: number,
    timestamp: number,
  }
}

export class UpdateRoomStreamMetadataPausedPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomStreamMetadataPausedPacket;

  getPaused(): boolean;
  setPaused(value: boolean): UpdateRoomStreamMetadataPausedPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomStreamMetadataPausedPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamMetadataPausedPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamMetadataPausedPacket): UpdateRoomStreamMetadataPausedPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamMetadataPausedPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamMetadataPausedPacket;
  static deserializeBinaryFromReader(message: UpdateRoomStreamMetadataPausedPacket, reader: jspb.BinaryReader): UpdateRoomStreamMetadataPausedPacket;
}

export namespace UpdateRoomStreamMetadataPausedPacket {
  export type AsObject = {
    id: string,
    paused: boolean,
    timestamp: number,
  }
}

export class UpdateRoomStreamMetadataRelatedPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomStreamMetadataRelatedPacket;

  getRelated(): boolean;
  setRelated(value: boolean): UpdateRoomStreamMetadataRelatedPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomStreamMetadataRelatedPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamMetadataRelatedPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamMetadataRelatedPacket): UpdateRoomStreamMetadataRelatedPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamMetadataRelatedPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamMetadataRelatedPacket;
  static deserializeBinaryFromReader(message: UpdateRoomStreamMetadataRelatedPacket, reader: jspb.BinaryReader): UpdateRoomStreamMetadataRelatedPacket;
}

export namespace UpdateRoomStreamMetadataRelatedPacket {
  export type AsObject = {
    id: string,
    related: boolean,
    timestamp: number,
  }
}

export class UpdateRoomStreamMetadataSuggestPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomStreamMetadataSuggestPacket;

  getSuggest(): boolean;
  setSuggest(value: boolean): UpdateRoomStreamMetadataSuggestPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomStreamMetadataSuggestPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamMetadataSuggestPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamMetadataSuggestPacket): UpdateRoomStreamMetadataSuggestPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamMetadataSuggestPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamMetadataSuggestPacket;
  static deserializeBinaryFromReader(message: UpdateRoomStreamMetadataSuggestPacket, reader: jspb.BinaryReader): UpdateRoomStreamMetadataSuggestPacket;
}

export namespace UpdateRoomStreamMetadataSuggestPacket {
  export type AsObject = {
    id: string,
    suggest: boolean,
    timestamp: number,
  }
}

export class UpdateRoomStreamMetadataDurationPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomStreamMetadataDurationPacket;

  getDuration(): number;
  setDuration(value: number): UpdateRoomStreamMetadataDurationPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomStreamMetadataDurationPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamMetadataDurationPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamMetadataDurationPacket): UpdateRoomStreamMetadataDurationPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamMetadataDurationPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamMetadataDurationPacket;
  static deserializeBinaryFromReader(message: UpdateRoomStreamMetadataDurationPacket, reader: jspb.BinaryReader): UpdateRoomStreamMetadataDurationPacket;
}

export namespace UpdateRoomStreamMetadataDurationPacket {
  export type AsObject = {
    id: string,
    duration: number,
    timestamp: number,
  }
}

export class DeliverRoomInvitePacket extends jspb.Message {
  getInvite(): rooms_models_pb.RoomInviteInfo | undefined;
  setInvite(value?: rooms_models_pb.RoomInviteInfo): DeliverRoomInvitePacket;
  hasInvite(): boolean;
  clearInvite(): DeliverRoomInvitePacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeliverRoomInvitePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverRoomInvitePacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverRoomInvitePacket): DeliverRoomInvitePacket.AsObject;
  static serializeBinaryToWriter(message: DeliverRoomInvitePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverRoomInvitePacket;
  static deserializeBinaryFromReader(message: DeliverRoomInvitePacket, reader: jspb.BinaryReader): DeliverRoomInvitePacket;
}

export namespace DeliverRoomInvitePacket {
  export type AsObject = {
    invite?: rooms_models_pb.RoomInviteInfo.AsObject,
    timestamp: number,
  }
}

export class StartEventPacket extends jspb.Message {
  getId(): string;
  setId(value: string): StartEventPacket;

  getTimestamp(): number;
  setTimestamp(value: number): StartEventPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartEventPacket.AsObject;
  static toObject(includeInstance: boolean, msg: StartEventPacket): StartEventPacket.AsObject;
  static serializeBinaryToWriter(message: StartEventPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartEventPacket;
  static deserializeBinaryFromReader(message: StartEventPacket, reader: jspb.BinaryReader): StartEventPacket;
}

export namespace StartEventPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

export class FinishEventPacket extends jspb.Message {
  getId(): string;
  setId(value: string): FinishEventPacket;

  getTimestamp(): number;
  setTimestamp(value: number): FinishEventPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishEventPacket.AsObject;
  static toObject(includeInstance: boolean, msg: FinishEventPacket): FinishEventPacket.AsObject;
  static serializeBinaryToWriter(message: FinishEventPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishEventPacket;
  static deserializeBinaryFromReader(message: FinishEventPacket, reader: jspb.BinaryReader): FinishEventPacket;
}

export namespace FinishEventPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

export class CancelEventPacket extends jspb.Message {
  getId(): string;
  setId(value: string): CancelEventPacket;

  getReason(): string;
  setReason(value: string): CancelEventPacket;

  getTimestamp(): number;
  setTimestamp(value: number): CancelEventPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelEventPacket.AsObject;
  static toObject(includeInstance: boolean, msg: CancelEventPacket): CancelEventPacket.AsObject;
  static serializeBinaryToWriter(message: CancelEventPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelEventPacket;
  static deserializeBinaryFromReader(message: CancelEventPacket, reader: jspb.BinaryReader): CancelEventPacket;
}

export namespace CancelEventPacket {
  export type AsObject = {
    id: string,
    reason: string,
    timestamp: number,
  }
}

export class CreateEventPacket extends jspb.Message {
  getEvent(): rooms_models_pb.EventInfo | undefined;
  setEvent(value?: rooms_models_pb.EventInfo): CreateEventPacket;
  hasEvent(): boolean;
  clearEvent(): CreateEventPacket;

  getTimestamp(): number;
  setTimestamp(value: number): CreateEventPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventPacket.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventPacket): CreateEventPacket.AsObject;
  static serializeBinaryToWriter(message: CreateEventPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventPacket;
  static deserializeBinaryFromReader(message: CreateEventPacket, reader: jspb.BinaryReader): CreateEventPacket;
}

export namespace CreateEventPacket {
  export type AsObject = {
    event?: rooms_models_pb.EventInfo.AsObject,
    timestamp: number,
  }
}

export class DeleteEventPacket extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventPacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeleteEventPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventPacket): DeleteEventPacket.AsObject;
  static serializeBinaryToWriter(message: DeleteEventPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventPacket;
  static deserializeBinaryFromReader(message: DeleteEventPacket, reader: jspb.BinaryReader): DeleteEventPacket;
}

export namespace DeleteEventPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

export class UpdateEventNamePacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventNamePacket;

  getName(): string;
  setName(value: string): UpdateEventNamePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventNamePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventNamePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventNamePacket): UpdateEventNamePacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventNamePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventNamePacket;
  static deserializeBinaryFromReader(message: UpdateEventNamePacket, reader: jspb.BinaryReader): UpdateEventNamePacket;
}

export namespace UpdateEventNamePacket {
  export type AsObject = {
    id: string,
    name: string,
    timestamp: number,
  }
}

export class UpdateEventStatusPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventStatusPacket;

  getStatus(): rooms_enums_pb.EventStatus;
  setStatus(value: rooms_enums_pb.EventStatus): UpdateEventStatusPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventStatusPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventStatusPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventStatusPacket): UpdateEventStatusPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventStatusPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventStatusPacket;
  static deserializeBinaryFromReader(message: UpdateEventStatusPacket, reader: jspb.BinaryReader): UpdateEventStatusPacket;
}

export namespace UpdateEventStatusPacket {
  export type AsObject = {
    id: string,
    status: rooms_enums_pb.EventStatus,
    timestamp: number,
  }
}

export class UpdateEventSourcePacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventSourcePacket;

  getSource(): rooms_enums_pb.EventSource;
  setSource(value: rooms_enums_pb.EventSource): UpdateEventSourcePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventSourcePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventSourcePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventSourcePacket): UpdateEventSourcePacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventSourcePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventSourcePacket;
  static deserializeBinaryFromReader(message: UpdateEventSourcePacket, reader: jspb.BinaryReader): UpdateEventSourcePacket;
}

export namespace UpdateEventSourcePacket {
  export type AsObject = {
    id: string,
    source: rooms_enums_pb.EventSource,
    timestamp: number,
  }
}

export class UpdateEventLayoutPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventLayoutPacket;

  getLayout(): rooms_enums_pb.EventLayout;
  setLayout(value: rooms_enums_pb.EventLayout): UpdateEventLayoutPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventLayoutPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventLayoutPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventLayoutPacket): UpdateEventLayoutPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventLayoutPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventLayoutPacket;
  static deserializeBinaryFromReader(message: UpdateEventLayoutPacket, reader: jspb.BinaryReader): UpdateEventLayoutPacket;
}

export namespace UpdateEventLayoutPacket {
  export type AsObject = {
    id: string,
    layout: rooms_enums_pb.EventLayout,
    timestamp: number,
  }
}

export class UpdateEventGenresPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventGenresPacket;

  getGenresList(): Array<rooms_enums_pb.EventGenre>;
  setGenresList(value: Array<rooms_enums_pb.EventGenre>): UpdateEventGenresPacket;
  clearGenresList(): UpdateEventGenresPacket;
  addGenres(value: rooms_enums_pb.EventGenre, index?: number): UpdateEventGenresPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventGenresPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventGenresPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventGenresPacket): UpdateEventGenresPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventGenresPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventGenresPacket;
  static deserializeBinaryFromReader(message: UpdateEventGenresPacket, reader: jspb.BinaryReader): UpdateEventGenresPacket;
}

export namespace UpdateEventGenresPacket {
  export type AsObject = {
    id: string,
    genresList: Array<rooms_enums_pb.EventGenre>,
    timestamp: number,
  }
}

export class UpdateEventSummaryPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventSummaryPacket;

  getSummary(): string;
  setSummary(value: string): UpdateEventSummaryPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventSummaryPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventSummaryPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventSummaryPacket): UpdateEventSummaryPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventSummaryPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventSummaryPacket;
  static deserializeBinaryFromReader(message: UpdateEventSummaryPacket, reader: jspb.BinaryReader): UpdateEventSummaryPacket;
}

export namespace UpdateEventSummaryPacket {
  export type AsObject = {
    id: string,
    summary: string,
    timestamp: number,
  }
}

export class UpdateEventAudiencePacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventAudiencePacket;

  getAudience(): number;
  setAudience(value: number): UpdateEventAudiencePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventAudiencePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventAudiencePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventAudiencePacket): UpdateEventAudiencePacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventAudiencePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventAudiencePacket;
  static deserializeBinaryFromReader(message: UpdateEventAudiencePacket, reader: jspb.BinaryReader): UpdateEventAudiencePacket;
}

export namespace UpdateEventAudiencePacket {
  export type AsObject = {
    id: string,
    audience: number,
    timestamp: number,
  }
}

export class UpdateEventThumbnailPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventThumbnailPacket;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): UpdateEventThumbnailPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventThumbnailPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventThumbnailPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventThumbnailPacket): UpdateEventThumbnailPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventThumbnailPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventThumbnailPacket;
  static deserializeBinaryFromReader(message: UpdateEventThumbnailPacket, reader: jspb.BinaryReader): UpdateEventThumbnailPacket;
}

export namespace UpdateEventThumbnailPacket {
  export type AsObject = {
    id: string,
    thumbnailUrl: string,
    timestamp: number,
  }
}

export class UpdateEventBackgroundPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventBackgroundPacket;

  getBackgroundUrl(): string;
  setBackgroundUrl(value: string): UpdateEventBackgroundPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventBackgroundPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventBackgroundPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventBackgroundPacket): UpdateEventBackgroundPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventBackgroundPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventBackgroundPacket;
  static deserializeBinaryFromReader(message: UpdateEventBackgroundPacket, reader: jspb.BinaryReader): UpdateEventBackgroundPacket;
}

export namespace UpdateEventBackgroundPacket {
  export type AsObject = {
    id: string,
    backgroundUrl: string,
    timestamp: number,
  }
}

export class UpdateEventDescriptionPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventDescriptionPacket;

  getDescription(): string;
  setDescription(value: string): UpdateEventDescriptionPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventDescriptionPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventDescriptionPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventDescriptionPacket): UpdateEventDescriptionPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventDescriptionPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventDescriptionPacket;
  static deserializeBinaryFromReader(message: UpdateEventDescriptionPacket, reader: jspb.BinaryReader): UpdateEventDescriptionPacket;
}

export namespace UpdateEventDescriptionPacket {
  export type AsObject = {
    id: string,
    description: string,
    timestamp: number,
  }
}

export class RefreshEventBroadcastPacket extends jspb.Message {
  getId(): string;
  setId(value: string): RefreshEventBroadcastPacket;

  getTimestamp(): number;
  setTimestamp(value: number): RefreshEventBroadcastPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshEventBroadcastPacket.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshEventBroadcastPacket): RefreshEventBroadcastPacket.AsObject;
  static serializeBinaryToWriter(message: RefreshEventBroadcastPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshEventBroadcastPacket;
  static deserializeBinaryFromReader(message: RefreshEventBroadcastPacket, reader: jspb.BinaryReader): RefreshEventBroadcastPacket;
}

export namespace RefreshEventBroadcastPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

export class CreateEventObserverPacket extends jspb.Message {
  getObserver(): rooms_models_pb.EventObserverInfo | undefined;
  setObserver(value?: rooms_models_pb.EventObserverInfo): CreateEventObserverPacket;
  hasObserver(): boolean;
  clearObserver(): CreateEventObserverPacket;

  getTimestamp(): number;
  setTimestamp(value: number): CreateEventObserverPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventObserverPacket.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventObserverPacket): CreateEventObserverPacket.AsObject;
  static serializeBinaryToWriter(message: CreateEventObserverPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventObserverPacket;
  static deserializeBinaryFromReader(message: CreateEventObserverPacket, reader: jspb.BinaryReader): CreateEventObserverPacket;
}

export namespace CreateEventObserverPacket {
  export type AsObject = {
    observer?: rooms_models_pb.EventObserverInfo.AsObject,
    timestamp: number,
  }
}

export class DeleteEventObserverPacket extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): DeleteEventObserverPacket;

  getEventId(): string;
  setEventId(value: string): DeleteEventObserverPacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeleteEventObserverPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventObserverPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventObserverPacket): DeleteEventObserverPacket.AsObject;
  static serializeBinaryToWriter(message: DeleteEventObserverPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventObserverPacket;
  static deserializeBinaryFromReader(message: DeleteEventObserverPacket, reader: jspb.BinaryReader): DeleteEventObserverPacket;
}

export namespace DeleteEventObserverPacket {
  export type AsObject = {
    roomId: string,
    eventId: string,
    timestamp: number,
  }
}

export class CreateEventPerformerPacket extends jspb.Message {
  getPerformer(): rooms_models_pb.EventPerformerInfo | undefined;
  setPerformer(value?: rooms_models_pb.EventPerformerInfo): CreateEventPerformerPacket;
  hasPerformer(): boolean;
  clearPerformer(): CreateEventPerformerPacket;

  getTimestamp(): number;
  setTimestamp(value: number): CreateEventPerformerPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventPerformerPacket.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventPerformerPacket): CreateEventPerformerPacket.AsObject;
  static serializeBinaryToWriter(message: CreateEventPerformerPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventPerformerPacket;
  static deserializeBinaryFromReader(message: CreateEventPerformerPacket, reader: jspb.BinaryReader): CreateEventPerformerPacket;
}

export namespace CreateEventPerformerPacket {
  export type AsObject = {
    performer?: rooms_models_pb.EventPerformerInfo.AsObject,
    timestamp: number,
  }
}

export class DeleteEventPerformerPacket extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): DeleteEventPerformerPacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeleteEventPerformerPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventPerformerPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventPerformerPacket): DeleteEventPerformerPacket.AsObject;
  static serializeBinaryToWriter(message: DeleteEventPerformerPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventPerformerPacket;
  static deserializeBinaryFromReader(message: DeleteEventPerformerPacket, reader: jspb.BinaryReader): DeleteEventPerformerPacket;
}

export namespace DeleteEventPerformerPacket {
  export type AsObject = {
    userId: string,
    timestamp: number,
  }
}

export class CancelEventPerformerPacket extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CancelEventPerformerPacket;

  getTimestamp(): number;
  setTimestamp(value: number): CancelEventPerformerPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelEventPerformerPacket.AsObject;
  static toObject(includeInstance: boolean, msg: CancelEventPerformerPacket): CancelEventPerformerPacket.AsObject;
  static serializeBinaryToWriter(message: CancelEventPerformerPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelEventPerformerPacket;
  static deserializeBinaryFromReader(message: CancelEventPerformerPacket, reader: jspb.BinaryReader): CancelEventPerformerPacket;
}

export namespace CancelEventPerformerPacket {
  export type AsObject = {
    userId: string,
    timestamp: number,
  }
}

export class PrepareEventPerformerPacket extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): PrepareEventPerformerPacket;

  getTimestamp(): number;
  setTimestamp(value: number): PrepareEventPerformerPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareEventPerformerPacket.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareEventPerformerPacket): PrepareEventPerformerPacket.AsObject;
  static serializeBinaryToWriter(message: PrepareEventPerformerPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareEventPerformerPacket;
  static deserializeBinaryFromReader(message: PrepareEventPerformerPacket, reader: jspb.BinaryReader): PrepareEventPerformerPacket;
}

export namespace PrepareEventPerformerPacket {
  export type AsObject = {
    userId: string,
    timestamp: number,
  }
}

export class UpdateEventPerformerPositionPacket extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): UpdateEventPerformerPositionPacket;

  getPosition(): number;
  setPosition(value: number): UpdateEventPerformerPositionPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateEventPerformerPositionPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventPerformerPositionPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventPerformerPositionPacket): UpdateEventPerformerPositionPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateEventPerformerPositionPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventPerformerPositionPacket;
  static deserializeBinaryFromReader(message: UpdateEventPerformerPositionPacket, reader: jspb.BinaryReader): UpdateEventPerformerPositionPacket;
}

export namespace UpdateEventPerformerPositionPacket {
  export type AsObject = {
    userId: string,
    position: number,
    timestamp: number,
  }
}

