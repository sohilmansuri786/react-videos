import * as jspb from 'google-protobuf'

import * as sfu_enums_pb from '../sfu/enums_pb';
import * as sfu_models_pb from '../sfu/models_pb';
import * as rooms_enums_pb from '../rooms/enums_pb';
import * as wsclient_enums_pb from '../wsclient/enums_pb';
import * as wsgateway_enums_pb from '../wsgateway/enums_pb';


export class Packet extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): Packet;

  getAction(): wsclient_enums_pb.Action;
  setAction(value: wsclient_enums_pb.Action): Packet;

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
    index: number,
    action: wsclient_enums_pb.Action,
    data: Uint8Array | string,
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

export class HandshakePacket extends jspb.Message {
  getProtocol(): wsclient_enums_pb.Protocol;
  setProtocol(value: wsclient_enums_pb.Protocol): HandshakePacket;

  getPlatform(): wsclient_enums_pb.Platform;
  setPlatform(value: wsclient_enums_pb.Platform): HandshakePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandshakePacket.AsObject;
  static toObject(includeInstance: boolean, msg: HandshakePacket): HandshakePacket.AsObject;
  static serializeBinaryToWriter(message: HandshakePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandshakePacket;
  static deserializeBinaryFromReader(message: HandshakePacket, reader: jspb.BinaryReader): HandshakePacket;
}

export namespace HandshakePacket {
  export type AsObject = {
    protocol: wsclient_enums_pb.Protocol,
    platform: wsclient_enums_pb.Platform,
  }
}

export class DisconnectPacket extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectPacket): DisconnectPacket.AsObject;
  static serializeBinaryToWriter(message: DisconnectPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectPacket;
  static deserializeBinaryFromReader(message: DisconnectPacket, reader: jspb.BinaryReader): DisconnectPacket;
}

export namespace DisconnectPacket {
  export type AsObject = {
  }
}

export class AuthenticationPacket extends jspb.Message {
  getToken(): string;
  setToken(value: string): AuthenticationPacket;

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
  }
}

export class SfuConnectPacket extends jspb.Message {
  getSfuType(): wsgateway_enums_pb.SfuType;
  setSfuType(value: wsgateway_enums_pb.SfuType): SfuConnectPacket;

  getSdpOffer(): Uint8Array | string;
  getSdpOffer_asU8(): Uint8Array;
  getSdpOffer_asB64(): string;
  setSdpOffer(value: Uint8Array | string): SfuConnectPacket;

  getClientType(): sfu_enums_pb.ClientType;
  setClientType(value: sfu_enums_pb.ClientType): SfuConnectPacket;

  getProtocolVersion(): sfu_enums_pb.ProtocolVersion;
  setProtocolVersion(value: sfu_enums_pb.ProtocolVersion): SfuConnectPacket;

  getOptions(): sfu_models_pb.SfuConnectionOptions | undefined;
  setOptions(value?: sfu_models_pb.SfuConnectionOptions): SfuConnectPacket;
  hasOptions(): boolean;
  clearOptions(): SfuConnectPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SfuConnectPacket.AsObject;
  static toObject(includeInstance: boolean, msg: SfuConnectPacket): SfuConnectPacket.AsObject;
  static serializeBinaryToWriter(message: SfuConnectPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SfuConnectPacket;
  static deserializeBinaryFromReader(message: SfuConnectPacket, reader: jspb.BinaryReader): SfuConnectPacket;
}

export namespace SfuConnectPacket {
  export type AsObject = {
    sfuType: wsgateway_enums_pb.SfuType,
    sdpOffer: Uint8Array | string,
    clientType: sfu_enums_pb.ClientType,
    protocolVersion: sfu_enums_pb.ProtocolVersion,
    options?: sfu_models_pb.SfuConnectionOptions.AsObject,
  }
}

export class SfuIceCandidatePacket extends jspb.Message {
  getSfuType(): wsgateway_enums_pb.SfuType;
  setSfuType(value: wsgateway_enums_pb.SfuType): SfuIceCandidatePacket;

  getSdpCandidate(): Uint8Array | string;
  getSdpCandidate_asU8(): Uint8Array;
  getSdpCandidate_asB64(): string;
  setSdpCandidate(value: Uint8Array | string): SfuIceCandidatePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SfuIceCandidatePacket.AsObject;
  static toObject(includeInstance: boolean, msg: SfuIceCandidatePacket): SfuIceCandidatePacket.AsObject;
  static serializeBinaryToWriter(message: SfuIceCandidatePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SfuIceCandidatePacket;
  static deserializeBinaryFromReader(message: SfuIceCandidatePacket, reader: jspb.BinaryReader): SfuIceCandidatePacket;
}

export namespace SfuIceCandidatePacket {
  export type AsObject = {
    sfuType: wsgateway_enums_pb.SfuType,
    sdpCandidate: Uint8Array | string,
  }
}

export class UserChatPacket extends jspb.Message {
  getFid(): string;
  setFid(value: string): UserChatPacket;

  getChatId(): string;
  setChatId(value: string): UserChatPacket;

  getMessage(): string;
  setMessage(value: string): UserChatPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserChatPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UserChatPacket): UserChatPacket.AsObject;
  static serializeBinaryToWriter(message: UserChatPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserChatPacket;
  static deserializeBinaryFromReader(message: UserChatPacket, reader: jspb.BinaryReader): UserChatPacket;
}

export namespace UserChatPacket {
  export type AsObject = {
    fid: string,
    chatId: string,
    message: string,
  }
}

export class RoomChatPacket extends jspb.Message {
  getFid(): string;
  setFid(value: string): RoomChatPacket;

  getMessage(): string;
  setMessage(value: string): RoomChatPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomChatPacket.AsObject;
  static toObject(includeInstance: boolean, msg: RoomChatPacket): RoomChatPacket.AsObject;
  static serializeBinaryToWriter(message: RoomChatPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomChatPacket;
  static deserializeBinaryFromReader(message: RoomChatPacket, reader: jspb.BinaryReader): RoomChatPacket;
}

export namespace RoomChatPacket {
  export type AsObject = {
    fid: string,
    message: string,
  }
}

export class RoomJoinPacket extends jspb.Message {
  getToken(): string;
  setToken(value: string): RoomJoinPacket;

  getForce(): boolean;
  setForce(value: boolean): RoomJoinPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomJoinPacket.AsObject;
  static toObject(includeInstance: boolean, msg: RoomJoinPacket): RoomJoinPacket.AsObject;
  static serializeBinaryToWriter(message: RoomJoinPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomJoinPacket;
  static deserializeBinaryFromReader(message: RoomJoinPacket, reader: jspb.BinaryReader): RoomJoinPacket;
}

export namespace RoomJoinPacket {
  export type AsObject = {
    token: string,
    force: boolean,
  }
}

export class RoomLeavePacket extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomLeavePacket.AsObject;
  static toObject(includeInstance: boolean, msg: RoomLeavePacket): RoomLeavePacket.AsObject;
  static serializeBinaryToWriter(message: RoomLeavePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomLeavePacket;
  static deserializeBinaryFromReader(message: RoomLeavePacket, reader: jspb.BinaryReader): RoomLeavePacket;
}

export namespace RoomLeavePacket {
  export type AsObject = {
  }
}

export class EventChatPacket extends jspb.Message {
  getFid(): string;
  setFid(value: string): EventChatPacket;

  getMessage(): string;
  setMessage(value: string): EventChatPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventChatPacket.AsObject;
  static toObject(includeInstance: boolean, msg: EventChatPacket): EventChatPacket.AsObject;
  static serializeBinaryToWriter(message: EventChatPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventChatPacket;
  static deserializeBinaryFromReader(message: EventChatPacket, reader: jspb.BinaryReader): EventChatPacket;
}

export namespace EventChatPacket {
  export type AsObject = {
    fid: string,
    message: string,
  }
}

export class RoomUserFlagsPacket extends jspb.Message {
  getFlagsList(): Array<rooms_enums_pb.RoomUserFlag>;
  setFlagsList(value: Array<rooms_enums_pb.RoomUserFlag>): RoomUserFlagsPacket;
  clearFlagsList(): RoomUserFlagsPacket;
  addFlags(value: rooms_enums_pb.RoomUserFlag, index?: number): RoomUserFlagsPacket;

  getTimestamp(): number;
  setTimestamp(value: number): RoomUserFlagsPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserFlagsPacket.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserFlagsPacket): RoomUserFlagsPacket.AsObject;
  static serializeBinaryToWriter(message: RoomUserFlagsPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserFlagsPacket;
  static deserializeBinaryFromReader(message: RoomUserFlagsPacket, reader: jspb.BinaryReader): RoomUserFlagsPacket;
}

export namespace RoomUserFlagsPacket {
  export type AsObject = {
    flagsList: Array<rooms_enums_pb.RoomUserFlag>,
    timestamp: number,
  }
}

