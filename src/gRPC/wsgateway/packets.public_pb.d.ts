import * as jspb from 'google-protobuf'

import * as users_models_pb from '../users/models_pb';
import * as rooms_models_pb from '../rooms/models_pb';


export class UserChatMessagePacket extends jspb.Message {
  getFid(): string;
  setFid(value: string): UserChatMessagePacket;

  getMessage(): users_models_pb.ChatMessageInfo | undefined;
  setMessage(value?: users_models_pb.ChatMessageInfo): UserChatMessagePacket;
  hasMessage(): boolean;
  clearMessage(): UserChatMessagePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UserChatMessagePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserChatMessagePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UserChatMessagePacket): UserChatMessagePacket.AsObject;
  static serializeBinaryToWriter(message: UserChatMessagePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserChatMessagePacket;
  static deserializeBinaryFromReader(message: UserChatMessagePacket, reader: jspb.BinaryReader): UserChatMessagePacket;
}

export namespace UserChatMessagePacket {
  export type AsObject = {
    fid: string,
    message?: users_models_pb.ChatMessageInfo.AsObject,
    timestamp: number,
  }
}

export class RoomChatMessagePacket extends jspb.Message {
  getFid(): string;
  setFid(value: string): RoomChatMessagePacket;

  getMessage(): rooms_models_pb.ChatMessageInfo | undefined;
  setMessage(value?: rooms_models_pb.ChatMessageInfo): RoomChatMessagePacket;
  hasMessage(): boolean;
  clearMessage(): RoomChatMessagePacket;

  getTimestamp(): number;
  setTimestamp(value: number): RoomChatMessagePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomChatMessagePacket.AsObject;
  static toObject(includeInstance: boolean, msg: RoomChatMessagePacket): RoomChatMessagePacket.AsObject;
  static serializeBinaryToWriter(message: RoomChatMessagePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomChatMessagePacket;
  static deserializeBinaryFromReader(message: RoomChatMessagePacket, reader: jspb.BinaryReader): RoomChatMessagePacket;
}

export namespace RoomChatMessagePacket {
  export type AsObject = {
    fid: string,
    message?: rooms_models_pb.ChatMessageInfo.AsObject,
    timestamp: number,
  }
}

export class EventChatMessagePacket extends jspb.Message {
  getFid(): string;
  setFid(value: string): EventChatMessagePacket;

  getMessage(): rooms_models_pb.ChatMessageInfo | undefined;
  setMessage(value?: rooms_models_pb.ChatMessageInfo): EventChatMessagePacket;
  hasMessage(): boolean;
  clearMessage(): EventChatMessagePacket;

  getTimestamp(): number;
  setTimestamp(value: number): EventChatMessagePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventChatMessagePacket.AsObject;
  static toObject(includeInstance: boolean, msg: EventChatMessagePacket): EventChatMessagePacket.AsObject;
  static serializeBinaryToWriter(message: EventChatMessagePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventChatMessagePacket;
  static deserializeBinaryFromReader(message: EventChatMessagePacket, reader: jspb.BinaryReader): EventChatMessagePacket;
}

export namespace EventChatMessagePacket {
  export type AsObject = {
    fid: string,
    message?: rooms_models_pb.ChatMessageInfo.AsObject,
    timestamp: number,
  }
}

