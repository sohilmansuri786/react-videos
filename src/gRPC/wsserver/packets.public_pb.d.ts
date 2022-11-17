import * as jspb from 'google-protobuf'

import * as wsserver_models_pb from '../wsserver/models_pb';


export class Packet extends jspb.Message {
  getType(): string;
  setType(value: string): Packet;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Packet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    type: string,
    data: Uint8Array | string,
  }
}

export class SuccessPacket extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): SuccessPacket;

  getTimestamp(): number;
  setTimestamp(value: number): SuccessPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessPacket.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessPacket): SuccessPacket.AsObject;
  static serializeBinaryToWriter(message: SuccessPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessPacket;
  static deserializeBinaryFromReader(message: SuccessPacket, reader: jspb.BinaryReader): SuccessPacket;
}

export namespace SuccessPacket {
  export type AsObject = {
    index: number,
    timestamp: number,
  }
}

export class FailurePacket extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): FailurePacket;

  getMessage(): string;
  setMessage(value: string): FailurePacket;

  getTimestamp(): number;
  setTimestamp(value: number): FailurePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailurePacket.AsObject;
  static toObject(includeInstance: boolean, msg: FailurePacket): FailurePacket.AsObject;
  static serializeBinaryToWriter(message: FailurePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailurePacket;
  static deserializeBinaryFromReader(message: FailurePacket, reader: jspb.BinaryReader): FailurePacket;
}

export namespace FailurePacket {
  export type AsObject = {
    index: number,
    message: string,
    timestamp: number,
  }
}

export class RefreshPacket extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): RefreshPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshPacket.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshPacket): RefreshPacket.AsObject;
  static serializeBinaryToWriter(message: RefreshPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshPacket;
  static deserializeBinaryFromReader(message: RefreshPacket, reader: jspb.BinaryReader): RefreshPacket;
}

export namespace RefreshPacket {
  export type AsObject = {
    timestamp: number,
  }
}

export class HeartbeatPacket extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): HeartbeatPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeartbeatPacket.AsObject;
  static toObject(includeInstance: boolean, msg: HeartbeatPacket): HeartbeatPacket.AsObject;
  static serializeBinaryToWriter(message: HeartbeatPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeartbeatPacket;
  static deserializeBinaryFromReader(message: HeartbeatPacket, reader: jspb.BinaryReader): HeartbeatPacket;
}

export namespace HeartbeatPacket {
  export type AsObject = {
    timestamp: number,
  }
}

export class AuthenticationPacket extends jspb.Message {
  getToken(): string;
  setToken(value: string): AuthenticationPacket;

  getClient(): wsserver_models_pb.ClientInfo | undefined;
  setClient(value?: wsserver_models_pb.ClientInfo): AuthenticationPacket;
  hasClient(): boolean;
  clearClient(): AuthenticationPacket;

  getTimestamp(): number;
  setTimestamp(value: number): AuthenticationPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationPacket.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationPacket): AuthenticationPacket.AsObject;
  static serializeBinaryToWriter(message: AuthenticationPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationPacket;
  static deserializeBinaryFromReader(message: AuthenticationPacket, reader: jspb.BinaryReader): AuthenticationPacket;
}

export namespace AuthenticationPacket {
  export type AsObject = {
    token: string,
    client?: wsserver_models_pb.ClientInfo.AsObject,
    timestamp: number,
  }
}

export class DisconnectUserPacket extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): DisconnectUserPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectUserPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectUserPacket): DisconnectUserPacket.AsObject;
  static serializeBinaryToWriter(message: DisconnectUserPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectUserPacket;
  static deserializeBinaryFromReader(message: DisconnectUserPacket, reader: jspb.BinaryReader): DisconnectUserPacket;
}

export namespace DisconnectUserPacket {
  export type AsObject = {
    timestamp: number,
  }
}

export class DisconnectSessionPacket extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): DisconnectSessionPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectSessionPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectSessionPacket): DisconnectSessionPacket.AsObject;
  static serializeBinaryToWriter(message: DisconnectSessionPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectSessionPacket;
  static deserializeBinaryFromReader(message: DisconnectSessionPacket, reader: jspb.BinaryReader): DisconnectSessionPacket;
}

export namespace DisconnectSessionPacket {
  export type AsObject = {
    timestamp: number,
  }
}

export class DisconnectRoomUserPacket extends jspb.Message {
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
    timestamp: number,
  }
}

export class RemindMaintenanceBreakPacket extends jspb.Message {
  getMinutesLeft(): number;
  setMinutesLeft(value: number): RemindMaintenanceBreakPacket;

  getTimestamp(): number;
  setTimestamp(value: number): RemindMaintenanceBreakPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemindMaintenanceBreakPacket.AsObject;
  static toObject(includeInstance: boolean, msg: RemindMaintenanceBreakPacket): RemindMaintenanceBreakPacket.AsObject;
  static serializeBinaryToWriter(message: RemindMaintenanceBreakPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemindMaintenanceBreakPacket;
  static deserializeBinaryFromReader(message: RemindMaintenanceBreakPacket, reader: jspb.BinaryReader): RemindMaintenanceBreakPacket;
}

export namespace RemindMaintenanceBreakPacket {
  export type AsObject = {
    minutesLeft: number,
    timestamp: number,
  }
}

export class EnableMaintenanceBreakPacket extends jspb.Message {
  getDuration(): number;
  setDuration(value: number): EnableMaintenanceBreakPacket;

  getTimestamp(): number;
  setTimestamp(value: number): EnableMaintenanceBreakPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableMaintenanceBreakPacket.AsObject;
  static toObject(includeInstance: boolean, msg: EnableMaintenanceBreakPacket): EnableMaintenanceBreakPacket.AsObject;
  static serializeBinaryToWriter(message: EnableMaintenanceBreakPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableMaintenanceBreakPacket;
  static deserializeBinaryFromReader(message: EnableMaintenanceBreakPacket, reader: jspb.BinaryReader): EnableMaintenanceBreakPacket;
}

export namespace EnableMaintenanceBreakPacket {
  export type AsObject = {
    duration: number,
    timestamp: number,
  }
}

