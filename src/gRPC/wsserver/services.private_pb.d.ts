import * as jspb from 'google-protobuf'

import * as error_models_pb from '../error/models_pb';


export class PingInternallyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingInternallyRequest): PingInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: PingInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingInternallyRequest;
  static deserializeBinaryFromReader(message: PingInternallyRequest, reader: jspb.BinaryReader): PingInternallyRequest;
}

export namespace PingInternallyRequest {
  export type AsObject = {
  }
}

export class PingInternallyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): PingInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): PingInternallyResponse;
  hasError(): boolean;
  clearError(): PingInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingInternallyResponse): PingInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: PingInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingInternallyResponse;
  static deserializeBinaryFromReader(message: PingInternallyResponse, reader: jspb.BinaryReader): PingInternallyResponse;
}

export namespace PingInternallyResponse {
  export type AsObject = {
    id: string,
    error?: error_models_pb.Error.AsObject,
  }
}

export class BroadcastInternallyRequest extends jspb.Message {
  getPackettype(): string;
  setPackettype(value: string): BroadcastInternallyRequest;

  getPacketdata(): Uint8Array | string;
  getPacketdata_asU8(): Uint8Array;
  getPacketdata_asB64(): string;
  setPacketdata(value: Uint8Array | string): BroadcastInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): BroadcastInternallyRequest;
  clearUserIdsList(): BroadcastInternallyRequest;
  addUserIds(value: string, index?: number): BroadcastInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): BroadcastInternallyRequest;
  clearRoomIdsList(): BroadcastInternallyRequest;
  addRoomIds(value: string, index?: number): BroadcastInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): BroadcastInternallyRequest;
  clearEventIdsList(): BroadcastInternallyRequest;
  addEventIds(value: string, index?: number): BroadcastInternallyRequest;

  getSessionIdsList(): Array<string>;
  setSessionIdsList(value: Array<string>): BroadcastInternallyRequest;
  clearSessionIdsList(): BroadcastInternallyRequest;
  addSessionIds(value: string, index?: number): BroadcastInternallyRequest;

  getRoomUserIdsList(): Array<string>;
  setRoomUserIdsList(value: Array<string>): BroadcastInternallyRequest;
  clearRoomUserIdsList(): BroadcastInternallyRequest;
  addRoomUserIds(value: string, index?: number): BroadcastInternallyRequest;

  getUserRoomsIdsList(): Array<string>;
  setUserRoomsIdsList(value: Array<string>): BroadcastInternallyRequest;
  clearUserRoomsIdsList(): BroadcastInternallyRequest;
  addUserRoomsIds(value: string, index?: number): BroadcastInternallyRequest;

  getUserEventsIdsList(): Array<string>;
  setUserEventsIdsList(value: Array<string>): BroadcastInternallyRequest;
  clearUserEventsIdsList(): BroadcastInternallyRequest;
  addUserEventsIds(value: string, index?: number): BroadcastInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastInternallyRequest): BroadcastInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: BroadcastInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastInternallyRequest;
  static deserializeBinaryFromReader(message: BroadcastInternallyRequest, reader: jspb.BinaryReader): BroadcastInternallyRequest;
}

export namespace BroadcastInternallyRequest {
  export type AsObject = {
    packettype: string,
    packetdata: Uint8Array | string,
    userIdsList: Array<string>,
    roomIdsList: Array<string>,
    eventIdsList: Array<string>,
    sessionIdsList: Array<string>,
    roomUserIdsList: Array<string>,
    userRoomsIdsList: Array<string>,
    userEventsIdsList: Array<string>,
  }
}

export class BroadcastInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): BroadcastInternallyResponse;
  hasError(): boolean;
  clearError(): BroadcastInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastInternallyResponse): BroadcastInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: BroadcastInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastInternallyResponse;
  static deserializeBinaryFromReader(message: BroadcastInternallyResponse, reader: jspb.BinaryReader): BroadcastInternallyResponse;
}

export namespace BroadcastInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class DisconnectInternallyRequest extends jspb.Message {
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): DisconnectInternallyRequest;
  clearUserIdsList(): DisconnectInternallyRequest;
  addUserIds(value: string, index?: number): DisconnectInternallyRequest;

  getSessionIdsList(): Array<string>;
  setSessionIdsList(value: Array<string>): DisconnectInternallyRequest;
  clearSessionIdsList(): DisconnectInternallyRequest;
  addSessionIds(value: string, index?: number): DisconnectInternallyRequest;

  getRoomUserIdsList(): Array<string>;
  setRoomUserIdsList(value: Array<string>): DisconnectInternallyRequest;
  clearRoomUserIdsList(): DisconnectInternallyRequest;
  addRoomUserIds(value: string, index?: number): DisconnectInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectInternallyRequest): DisconnectInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DisconnectInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectInternallyRequest;
  static deserializeBinaryFromReader(message: DisconnectInternallyRequest, reader: jspb.BinaryReader): DisconnectInternallyRequest;
}

export namespace DisconnectInternallyRequest {
  export type AsObject = {
    userIdsList: Array<string>,
    sessionIdsList: Array<string>,
    roomUserIdsList: Array<string>,
  }
}

export class DisconnectInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DisconnectInternallyResponse;
  hasError(): boolean;
  clearError(): DisconnectInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectInternallyResponse): DisconnectInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DisconnectInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectInternallyResponse;
  static deserializeBinaryFromReader(message: DisconnectInternallyResponse, reader: jspb.BinaryReader): DisconnectInternallyResponse;
}

export namespace DisconnectInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

