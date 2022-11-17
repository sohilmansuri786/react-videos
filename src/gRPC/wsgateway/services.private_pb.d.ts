import * as jspb from 'google-protobuf'

import * as sfu_enums_pb from '../sfu/enums_pb';
import * as sfu_models_pb from '../sfu/models_pb';
import * as rooms_enums_pb from '../rooms/enums_pb';
import * as error_models_pb from '../error/models_pb';
import * as rooms_models_pb from '../rooms/models_pb';
import * as users_models_pb from '../users/models_pb';
import * as wsgateway_enums_pb from '../wsgateway/enums_pb';
import * as wsgateway_models_pb from '../wsgateway/models_pb';


export class TransmitInternallyRequest extends jspb.Message {
  getRequesttype(): string;
  setRequesttype(value: string): TransmitInternallyRequest;

  getRequestdata(): Uint8Array | string;
  getRequestdata_asU8(): Uint8Array;
  getRequestdata_asB64(): string;
  setRequestdata(value: Uint8Array | string): TransmitInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransmitInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransmitInternallyRequest): TransmitInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: TransmitInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransmitInternallyRequest;
  static deserializeBinaryFromReader(message: TransmitInternallyRequest, reader: jspb.BinaryReader): TransmitInternallyRequest;
}

export namespace TransmitInternallyRequest {
  export type AsObject = {
    requesttype: string,
    requestdata: Uint8Array | string,
  }
}

export class TransmitInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): TransmitInternallyResponse;
  hasError(): boolean;
  clearError(): TransmitInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransmitInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransmitInternallyResponse): TransmitInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: TransmitInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransmitInternallyResponse;
  static deserializeBinaryFromReader(message: TransmitInternallyResponse, reader: jspb.BinaryReader): TransmitInternallyResponse;
}

export namespace TransmitInternallyResponse {
  export type AsObject = {
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

export class DeliverUserChatMessageInternallyRequest extends jspb.Message {
  getFid(): string;
  setFid(value: string): DeliverUserChatMessageInternallyRequest;

  getChatId(): string;
  setChatId(value: string): DeliverUserChatMessageInternallyRequest;

  getUserId(): string;
  setUserId(value: string): DeliverUserChatMessageInternallyRequest;

  getName(): string;
  setName(value: string): DeliverUserChatMessageInternallyRequest;

  getRole(): number;
  setRole(value: number): DeliverUserChatMessageInternallyRequest;

  getContent(): string;
  setContent(value: string): DeliverUserChatMessageInternallyRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): DeliverUserChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverUserChatMessageInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverUserChatMessageInternallyRequest): DeliverUserChatMessageInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeliverUserChatMessageInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverUserChatMessageInternallyRequest;
  static deserializeBinaryFromReader(message: DeliverUserChatMessageInternallyRequest, reader: jspb.BinaryReader): DeliverUserChatMessageInternallyRequest;
}

export namespace DeliverUserChatMessageInternallyRequest {
  export type AsObject = {
    fid: string,
    chatId: string,
    userId: string,
    name: string,
    role: number,
    content: string,
    avatarUrl: string,
  }
}

export class DeliverUserChatMessageInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeliverUserChatMessageInternallyResponse;
  hasError(): boolean;
  clearError(): DeliverUserChatMessageInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverUserChatMessageInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverUserChatMessageInternallyResponse): DeliverUserChatMessageInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeliverUserChatMessageInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverUserChatMessageInternallyResponse;
  static deserializeBinaryFromReader(message: DeliverUserChatMessageInternallyResponse, reader: jspb.BinaryReader): DeliverUserChatMessageInternallyResponse;
}

export namespace DeliverUserChatMessageInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeliverRoomChatMessageInternallyRequest extends jspb.Message {
  getFid(): string;
  setFid(value: string): DeliverRoomChatMessageInternallyRequest;

  getChatId(): string;
  setChatId(value: string): DeliverRoomChatMessageInternallyRequest;

  getUserId(): string;
  setUserId(value: string): DeliverRoomChatMessageInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): DeliverRoomChatMessageInternallyRequest;

  getName(): string;
  setName(value: string): DeliverRoomChatMessageInternallyRequest;

  getRole(): number;
  setRole(value: number): DeliverRoomChatMessageInternallyRequest;

  getContent(): string;
  setContent(value: string): DeliverRoomChatMessageInternallyRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): DeliverRoomChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverRoomChatMessageInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverRoomChatMessageInternallyRequest): DeliverRoomChatMessageInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeliverRoomChatMessageInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverRoomChatMessageInternallyRequest;
  static deserializeBinaryFromReader(message: DeliverRoomChatMessageInternallyRequest, reader: jspb.BinaryReader): DeliverRoomChatMessageInternallyRequest;
}

export namespace DeliverRoomChatMessageInternallyRequest {
  export type AsObject = {
    fid: string,
    chatId: string,
    userId: string,
    roomId: string,
    name: string,
    role: number,
    content: string,
    avatarUrl: string,
  }
}

export class DeliverRoomChatMessageInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeliverRoomChatMessageInternallyResponse;
  hasError(): boolean;
  clearError(): DeliverRoomChatMessageInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverRoomChatMessageInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverRoomChatMessageInternallyResponse): DeliverRoomChatMessageInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeliverRoomChatMessageInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverRoomChatMessageInternallyResponse;
  static deserializeBinaryFromReader(message: DeliverRoomChatMessageInternallyResponse, reader: jspb.BinaryReader): DeliverRoomChatMessageInternallyResponse;
}

export namespace DeliverRoomChatMessageInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeliverEventChatMessageInternallyRequest extends jspb.Message {
  getFid(): string;
  setFid(value: string): DeliverEventChatMessageInternallyRequest;

  getChatId(): string;
  setChatId(value: string): DeliverEventChatMessageInternallyRequest;

  getUserId(): string;
  setUserId(value: string): DeliverEventChatMessageInternallyRequest;

  getEventId(): string;
  setEventId(value: string): DeliverEventChatMessageInternallyRequest;

  getName(): string;
  setName(value: string): DeliverEventChatMessageInternallyRequest;

  getRole(): number;
  setRole(value: number): DeliverEventChatMessageInternallyRequest;

  getContent(): string;
  setContent(value: string): DeliverEventChatMessageInternallyRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): DeliverEventChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverEventChatMessageInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverEventChatMessageInternallyRequest): DeliverEventChatMessageInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeliverEventChatMessageInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverEventChatMessageInternallyRequest;
  static deserializeBinaryFromReader(message: DeliverEventChatMessageInternallyRequest, reader: jspb.BinaryReader): DeliverEventChatMessageInternallyRequest;
}

export namespace DeliverEventChatMessageInternallyRequest {
  export type AsObject = {
    fid: string,
    chatId: string,
    userId: string,
    eventId: string,
    name: string,
    role: number,
    content: string,
    avatarUrl: string,
  }
}

export class DeliverEventChatMessageInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeliverEventChatMessageInternallyResponse;
  hasError(): boolean;
  clearError(): DeliverEventChatMessageInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverEventChatMessageInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverEventChatMessageInternallyResponse): DeliverEventChatMessageInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeliverEventChatMessageInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverEventChatMessageInternallyResponse;
  static deserializeBinaryFromReader(message: DeliverEventChatMessageInternallyResponse, reader: jspb.BinaryReader): DeliverEventChatMessageInternallyResponse;
}

export namespace DeliverEventChatMessageInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInternallyRequest): GetUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInternallyRequest;
  static deserializeBinaryFromReader(message: GetUserInternallyRequest, reader: jspb.BinaryReader): GetUserInternallyRequest;
}

export namespace GetUserInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetUserInternallyResponse extends jspb.Message {
  getInfo(): users_models_pb.UserInfo | undefined;
  setInfo(value?: users_models_pb.UserInfo): GetUserInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetUserInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetUserInternallyResponse;
  hasError(): boolean;
  clearError(): GetUserInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInternallyResponse): GetUserInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInternallyResponse;
  static deserializeBinaryFromReader(message: GetUserInternallyResponse, reader: jspb.BinaryReader): GetUserInternallyResponse;
}

export namespace GetUserInternallyResponse {
  export type AsObject = {
    info?: users_models_pb.UserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoomInternallyRequest;

  getEventId(): string;
  setEventId(value: string): GetRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomInternallyRequest): GetRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomInternallyRequest;
  static deserializeBinaryFromReader(message: GetRoomInternallyRequest, reader: jspb.BinaryReader): GetRoomInternallyRequest;
}

export namespace GetRoomInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
  }
}

export class GetRoomInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInfo): GetRoomInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetRoomInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomInternallyResponse;
  hasError(): boolean;
  clearError(): GetRoomInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomInternallyResponse): GetRoomInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomInternallyResponse;
  static deserializeBinaryFromReader(message: GetRoomInternallyResponse, reader: jspb.BinaryReader): GetRoomInternallyResponse;
}

export namespace GetRoomInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class StateRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): StateRoomInternallyRequest;

  getEventId(): string;
  setEventId(value: string): StateRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateRoomInternallyRequest): StateRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: StateRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateRoomInternallyRequest;
  static deserializeBinaryFromReader(message: StateRoomInternallyRequest, reader: jspb.BinaryReader): StateRoomInternallyRequest;
}

export namespace StateRoomInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
  }
}

export class StateRoomInternallyResponse extends jspb.Message {
  getState(): rooms_models_pb.RoomState | undefined;
  setState(value?: rooms_models_pb.RoomState): StateRoomInternallyResponse;
  hasState(): boolean;
  clearState(): StateRoomInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): StateRoomInternallyResponse;
  hasError(): boolean;
  clearError(): StateRoomInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateRoomInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateRoomInternallyResponse): StateRoomInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: StateRoomInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateRoomInternallyResponse;
  static deserializeBinaryFromReader(message: StateRoomInternallyResponse, reader: jspb.BinaryReader): StateRoomInternallyResponse;
}

export namespace StateRoomInternallyResponse {
  export type AsObject = {
    state?: rooms_models_pb.RoomState.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): GetEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventInternallyRequest): GetEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventInternallyRequest;
  static deserializeBinaryFromReader(message: GetEventInternallyRequest, reader: jspb.BinaryReader): GetEventInternallyRequest;
}

export namespace GetEventInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
  }
}

export class GetEventInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventInfo | undefined;
  setInfo(value?: rooms_models_pb.EventInfo): GetEventInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventInternallyResponse;
  hasError(): boolean;
  clearError(): GetEventInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventInternallyResponse): GetEventInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventInternallyResponse;
  static deserializeBinaryFromReader(message: GetEventInternallyResponse, reader: jspb.BinaryReader): GetEventInternallyResponse;
}

export namespace GetEventInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class StateEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): StateEventInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): StateEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateEventInternallyRequest): StateEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: StateEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateEventInternallyRequest;
  static deserializeBinaryFromReader(message: StateEventInternallyRequest, reader: jspb.BinaryReader): StateEventInternallyRequest;
}

export namespace StateEventInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
  }
}

export class StateEventInternallyResponse extends jspb.Message {
  getState(): rooms_models_pb.EventState | undefined;
  setState(value?: rooms_models_pb.EventState): StateEventInternallyResponse;
  hasState(): boolean;
  clearState(): StateEventInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): StateEventInternallyResponse;
  hasError(): boolean;
  clearError(): StateEventInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateEventInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateEventInternallyResponse): StateEventInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: StateEventInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateEventInternallyResponse;
  static deserializeBinaryFromReader(message: StateEventInternallyResponse, reader: jspb.BinaryReader): StateEventInternallyResponse;
}

export namespace StateEventInternallyResponse {
  export type AsObject = {
    state?: rooms_models_pb.EventState.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoomUserInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): GetRoomUserInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomUserInternallyRequest): GetRoomUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomUserInternallyRequest;
  static deserializeBinaryFromReader(message: GetRoomUserInternallyRequest, reader: jspb.BinaryReader): GetRoomUserInternallyRequest;
}

export namespace GetRoomUserInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    userId: string,
  }
}

export class GetRoomUserInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomUserInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomUserInfo): GetRoomUserInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetRoomUserInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomUserInternallyResponse;
  hasError(): boolean;
  clearError(): GetRoomUserInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomUserInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomUserInternallyResponse): GetRoomUserInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomUserInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomUserInternallyResponse;
  static deserializeBinaryFromReader(message: GetRoomUserInternallyResponse, reader: jspb.BinaryReader): GetRoomUserInternallyResponse;
}

export namespace GetRoomUserInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomUserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRoomUserInternallyRequest extends jspb.Message {
  getRoomUserId(): string;
  setRoomUserId(value: string): UpdateRoomUserInternallyRequest;

  getFlagsList(): Array<rooms_enums_pb.RoomUserFlag>;
  setFlagsList(value: Array<rooms_enums_pb.RoomUserFlag>): UpdateRoomUserInternallyRequest;
  clearFlagsList(): UpdateRoomUserInternallyRequest;
  addFlags(value: rooms_enums_pb.RoomUserFlag, index?: number): UpdateRoomUserInternallyRequest;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserInternallyRequest): UpdateRoomUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateRoomUserInternallyRequest, reader: jspb.BinaryReader): UpdateRoomUserInternallyRequest;
}

export namespace UpdateRoomUserInternallyRequest {
  export type AsObject = {
    roomUserId: string,
    flagsList: Array<rooms_enums_pb.RoomUserFlag>,
    timestamp: number,
  }
}

export class UpdateRoomUserInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateRoomUserInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateRoomUserInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserInternallyResponse): UpdateRoomUserInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateRoomUserInternallyResponse, reader: jspb.BinaryReader): UpdateRoomUserInternallyResponse;
}

export namespace UpdateRoomUserInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetSfuInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetSfuInternallyRequest;

  getType(): wsgateway_enums_pb.SfuType;
  setType(value: wsgateway_enums_pb.SfuType): GetSfuInternallyRequest;

  getAddress(): string;
  setAddress(value: string): GetSfuInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSfuInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSfuInternallyRequest): GetSfuInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetSfuInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSfuInternallyRequest;
  static deserializeBinaryFromReader(message: GetSfuInternallyRequest, reader: jspb.BinaryReader): GetSfuInternallyRequest;
}

export namespace GetSfuInternallyRequest {
  export type AsObject = {
    id: string,
    type: wsgateway_enums_pb.SfuType,
    address: string,
  }
}

export class GetSfuInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.SfuInfo | undefined;
  setInfo(value?: wsgateway_models_pb.SfuInfo): GetSfuInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetSfuInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetSfuInternallyResponse;
  hasError(): boolean;
  clearError(): GetSfuInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSfuInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSfuInternallyResponse): GetSfuInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetSfuInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSfuInternallyResponse;
  static deserializeBinaryFromReader(message: GetSfuInternallyResponse, reader: jspb.BinaryReader): GetSfuInternallyResponse;
}

export namespace GetSfuInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.SfuInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListSfusInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListSfusInternallyRequest;
  clearIdsList(): ListSfusInternallyRequest;
  addIds(value: string, index?: number): ListSfusInternallyRequest;

  getTypesList(): Array<wsgateway_enums_pb.SfuType>;
  setTypesList(value: Array<wsgateway_enums_pb.SfuType>): ListSfusInternallyRequest;
  clearTypesList(): ListSfusInternallyRequest;
  addTypes(value: wsgateway_enums_pb.SfuType, index?: number): ListSfusInternallyRequest;

  getRegionsList(): Array<string>;
  setRegionsList(value: Array<string>): ListSfusInternallyRequest;
  clearRegionsList(): ListSfusInternallyRequest;
  addRegions(value: string, index?: number): ListSfusInternallyRequest;

  getStatusesList(): Array<wsgateway_enums_pb.SfuStatus>;
  setStatusesList(value: Array<wsgateway_enums_pb.SfuStatus>): ListSfusInternallyRequest;
  clearStatusesList(): ListSfusInternallyRequest;
  addStatuses(value: wsgateway_enums_pb.SfuStatus, index?: number): ListSfusInternallyRequest;

  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): ListSfusInternallyRequest;
  clearAddressesList(): ListSfusInternallyRequest;
  addAddresses(value: string, index?: number): ListSfusInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListSfusInternallyRequest;
  clearUserIdsList(): ListSfusInternallyRequest;
  addUserIds(value: string, index?: number): ListSfusInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListSfusInternallyRequest;
  clearRoomIdsList(): ListSfusInternallyRequest;
  addRoomIds(value: string, index?: number): ListSfusInternallyRequest;

  getSessionIdsList(): Array<string>;
  setSessionIdsList(value: Array<string>): ListSfusInternallyRequest;
  clearSessionIdsList(): ListSfusInternallyRequest;
  addSessionIds(value: string, index?: number): ListSfusInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListSfusInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListSfusInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListSfusInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSfusInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSfusInternallyRequest): ListSfusInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListSfusInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSfusInternallyRequest;
  static deserializeBinaryFromReader(message: ListSfusInternallyRequest, reader: jspb.BinaryReader): ListSfusInternallyRequest;
}

export namespace ListSfusInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    typesList: Array<wsgateway_enums_pb.SfuType>,
    regionsList: Array<string>,
    statusesList: Array<wsgateway_enums_pb.SfuStatus>,
    addressesList: Array<string>,
    userIdsList: Array<string>,
    roomIdsList: Array<string>,
    sessionIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListSfusInternallyResponse extends jspb.Message {
  getSfusList(): Array<wsgateway_models_pb.SfuInfo>;
  setSfusList(value: Array<wsgateway_models_pb.SfuInfo>): ListSfusInternallyResponse;
  clearSfusList(): ListSfusInternallyResponse;
  addSfus(value?: wsgateway_models_pb.SfuInfo, index?: number): wsgateway_models_pb.SfuInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListSfusInternallyResponse;
  hasError(): boolean;
  clearError(): ListSfusInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSfusInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSfusInternallyResponse): ListSfusInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListSfusInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSfusInternallyResponse;
  static deserializeBinaryFromReader(message: ListSfusInternallyResponse, reader: jspb.BinaryReader): ListSfusInternallyResponse;
}

export namespace ListSfusInternallyResponse {
  export type AsObject = {
    sfusList: Array<wsgateway_models_pb.SfuInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountSfusInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountSfusInternallyRequest;
  clearIdsList(): CountSfusInternallyRequest;
  addIds(value: string, index?: number): CountSfusInternallyRequest;

  getTypesList(): Array<wsgateway_enums_pb.SfuType>;
  setTypesList(value: Array<wsgateway_enums_pb.SfuType>): CountSfusInternallyRequest;
  clearTypesList(): CountSfusInternallyRequest;
  addTypes(value: wsgateway_enums_pb.SfuType, index?: number): CountSfusInternallyRequest;

  getRegionsList(): Array<string>;
  setRegionsList(value: Array<string>): CountSfusInternallyRequest;
  clearRegionsList(): CountSfusInternallyRequest;
  addRegions(value: string, index?: number): CountSfusInternallyRequest;

  getStatusesList(): Array<wsgateway_enums_pb.SfuStatus>;
  setStatusesList(value: Array<wsgateway_enums_pb.SfuStatus>): CountSfusInternallyRequest;
  clearStatusesList(): CountSfusInternallyRequest;
  addStatuses(value: wsgateway_enums_pb.SfuStatus, index?: number): CountSfusInternallyRequest;

  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): CountSfusInternallyRequest;
  clearAddressesList(): CountSfusInternallyRequest;
  addAddresses(value: string, index?: number): CountSfusInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountSfusInternallyRequest;
  clearUserIdsList(): CountSfusInternallyRequest;
  addUserIds(value: string, index?: number): CountSfusInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): CountSfusInternallyRequest;
  clearRoomIdsList(): CountSfusInternallyRequest;
  addRoomIds(value: string, index?: number): CountSfusInternallyRequest;

  getSessionIdsList(): Array<string>;
  setSessionIdsList(value: Array<string>): CountSfusInternallyRequest;
  clearSessionIdsList(): CountSfusInternallyRequest;
  addSessionIds(value: string, index?: number): CountSfusInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountSfusInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountSfusInternallyRequest): CountSfusInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountSfusInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountSfusInternallyRequest;
  static deserializeBinaryFromReader(message: CountSfusInternallyRequest, reader: jspb.BinaryReader): CountSfusInternallyRequest;
}

export namespace CountSfusInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    typesList: Array<wsgateway_enums_pb.SfuType>,
    regionsList: Array<string>,
    statusesList: Array<wsgateway_enums_pb.SfuStatus>,
    addressesList: Array<string>,
    userIdsList: Array<string>,
    roomIdsList: Array<string>,
    sessionIdsList: Array<string>,
  }
}

export class CountSfusInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountSfusInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountSfusInternallyResponse;
  hasError(): boolean;
  clearError(): CountSfusInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountSfusInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountSfusInternallyResponse): CountSfusInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountSfusInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountSfusInternallyResponse;
  static deserializeBinaryFromReader(message: CountSfusInternallyResponse, reader: jspb.BinaryReader): CountSfusInternallyResponse;
}

export namespace CountSfusInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateSfuInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSfuInternallyRequest;

  getType(): wsgateway_enums_pb.SfuType;
  setType(value: wsgateway_enums_pb.SfuType): CreateSfuInternallyRequest;

  getStatus(): wsgateway_enums_pb.SfuStatus;
  setStatus(value: wsgateway_enums_pb.SfuStatus): CreateSfuInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateSfuInternallyRequest;

  getAddress(): string;
  setAddress(value: string): CreateSfuInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateSfuInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateSfuInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSfuInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSfuInternallyRequest): CreateSfuInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSfuInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSfuInternallyRequest;
  static deserializeBinaryFromReader(message: CreateSfuInternallyRequest, reader: jspb.BinaryReader): CreateSfuInternallyRequest;
}

export namespace CreateSfuInternallyRequest {
  export type AsObject = {
    id: string,
    type: wsgateway_enums_pb.SfuType,
    status: wsgateway_enums_pb.SfuStatus,
    region: string,
    address: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateSfusInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateSfuInternallyRequest>;
  setRequestsList(value: Array<CreateSfuInternallyRequest>): CreateSfusInternallyRequest;
  clearRequestsList(): CreateSfusInternallyRequest;
  addRequests(value?: CreateSfuInternallyRequest, index?: number): CreateSfuInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSfusInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSfusInternallyRequest): CreateSfusInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSfusInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSfusInternallyRequest;
  static deserializeBinaryFromReader(message: CreateSfusInternallyRequest, reader: jspb.BinaryReader): CreateSfusInternallyRequest;
}

export namespace CreateSfusInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateSfuInternallyRequest.AsObject>,
  }
}

export class CreateSfusInternallyResponse extends jspb.Message {
  getSfusList(): Array<wsgateway_models_pb.SfuInfo>;
  setSfusList(value: Array<wsgateway_models_pb.SfuInfo>): CreateSfusInternallyResponse;
  clearSfusList(): CreateSfusInternallyResponse;
  addSfus(value?: wsgateway_models_pb.SfuInfo, index?: number): wsgateway_models_pb.SfuInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateSfusInternallyResponse;
  hasError(): boolean;
  clearError(): CreateSfusInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSfusInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSfusInternallyResponse): CreateSfusInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSfusInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSfusInternallyResponse;
  static deserializeBinaryFromReader(message: CreateSfusInternallyResponse, reader: jspb.BinaryReader): CreateSfusInternallyResponse;
}

export namespace CreateSfusInternallyResponse {
  export type AsObject = {
    sfusList: Array<wsgateway_models_pb.SfuInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateSfuInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSfuInternallyRequest;

  getStatus(): wsgateway_models_pb.IntegerValue | undefined;
  setStatus(value?: wsgateway_models_pb.IntegerValue): UpdateSfuInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateSfuInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSfuInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSfuInternallyRequest): UpdateSfuInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSfuInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSfuInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateSfuInternallyRequest, reader: jspb.BinaryReader): UpdateSfuInternallyRequest;
}

export namespace UpdateSfuInternallyRequest {
  export type AsObject = {
    id: string,
    status?: wsgateway_models_pb.IntegerValue.AsObject,
  }
}

export class UpdateSfusInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateSfuInternallyRequest>;
  setRequestsList(value: Array<UpdateSfuInternallyRequest>): UpdateSfusInternallyRequest;
  clearRequestsList(): UpdateSfusInternallyRequest;
  addRequests(value?: UpdateSfuInternallyRequest, index?: number): UpdateSfuInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSfusInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSfusInternallyRequest): UpdateSfusInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSfusInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSfusInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateSfusInternallyRequest, reader: jspb.BinaryReader): UpdateSfusInternallyRequest;
}

export namespace UpdateSfusInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateSfuInternallyRequest.AsObject>,
  }
}

export class UpdateSfusInternallyResponse extends jspb.Message {
  getSfusList(): Array<wsgateway_models_pb.SfuInfo>;
  setSfusList(value: Array<wsgateway_models_pb.SfuInfo>): UpdateSfusInternallyResponse;
  clearSfusList(): UpdateSfusInternallyResponse;
  addSfus(value?: wsgateway_models_pb.SfuInfo, index?: number): wsgateway_models_pb.SfuInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateSfusInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateSfusInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSfusInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSfusInternallyResponse): UpdateSfusInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSfusInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSfusInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateSfusInternallyResponse, reader: jspb.BinaryReader): UpdateSfusInternallyResponse;
}

export namespace UpdateSfusInternallyResponse {
  export type AsObject = {
    sfusList: Array<wsgateway_models_pb.SfuInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteSfuInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSfuInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSfuInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSfuInternallyRequest): DeleteSfuInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSfuInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSfuInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteSfuInternallyRequest, reader: jspb.BinaryReader): DeleteSfuInternallyRequest;
}

export namespace DeleteSfuInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteSfusInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteSfuInternallyRequest>;
  setRequestsList(value: Array<DeleteSfuInternallyRequest>): DeleteSfusInternallyRequest;
  clearRequestsList(): DeleteSfusInternallyRequest;
  addRequests(value?: DeleteSfuInternallyRequest, index?: number): DeleteSfuInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSfusInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSfusInternallyRequest): DeleteSfusInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSfusInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSfusInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteSfusInternallyRequest, reader: jspb.BinaryReader): DeleteSfusInternallyRequest;
}

export namespace DeleteSfusInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteSfuInternallyRequest.AsObject>,
  }
}

export class DeleteSfusInternallyResponse extends jspb.Message {
  getSfusList(): Array<wsgateway_models_pb.SfuInfo>;
  setSfusList(value: Array<wsgateway_models_pb.SfuInfo>): DeleteSfusInternallyResponse;
  clearSfusList(): DeleteSfusInternallyResponse;
  addSfus(value?: wsgateway_models_pb.SfuInfo, index?: number): wsgateway_models_pb.SfuInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteSfusInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteSfusInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSfusInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSfusInternallyResponse): DeleteSfusInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSfusInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSfusInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteSfusInternallyResponse, reader: jspb.BinaryReader): DeleteSfusInternallyResponse;
}

export namespace DeleteSfusInternallyResponse {
  export type AsObject = {
    sfusList: Array<wsgateway_models_pb.SfuInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetAndDeleteSfuInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAndDeleteSfuInternallyRequest;

  getType(): wsgateway_enums_pb.SfuType;
  setType(value: wsgateway_enums_pb.SfuType): GetAndDeleteSfuInternallyRequest;

  getAddress(): string;
  setAddress(value: string): GetAndDeleteSfuInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteSfuInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteSfuInternallyRequest): GetAndDeleteSfuInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteSfuInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteSfuInternallyRequest;
  static deserializeBinaryFromReader(message: GetAndDeleteSfuInternallyRequest, reader: jspb.BinaryReader): GetAndDeleteSfuInternallyRequest;
}

export namespace GetAndDeleteSfuInternallyRequest {
  export type AsObject = {
    id: string,
    type: wsgateway_enums_pb.SfuType,
    address: string,
  }
}

export class GetAndDeleteSfuInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.SfuInfo | undefined;
  setInfo(value?: wsgateway_models_pb.SfuInfo): GetAndDeleteSfuInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetAndDeleteSfuInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetAndDeleteSfuInternallyResponse;
  hasError(): boolean;
  clearError(): GetAndDeleteSfuInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteSfuInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteSfuInternallyResponse): GetAndDeleteSfuInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteSfuInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteSfuInternallyResponse;
  static deserializeBinaryFromReader(message: GetAndDeleteSfuInternallyResponse, reader: jspb.BinaryReader): GetAndDeleteSfuInternallyResponse;
}

export namespace GetAndDeleteSfuInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.SfuInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetSfuUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetSfuUserInternallyRequest;

  getSfuId(): string;
  setSfuId(value: string): GetSfuUserInternallyRequest;

  getSessionId(): string;
  setSessionId(value: string): GetSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSfuUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSfuUserInternallyRequest): GetSfuUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetSfuUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSfuUserInternallyRequest;
  static deserializeBinaryFromReader(message: GetSfuUserInternallyRequest, reader: jspb.BinaryReader): GetSfuUserInternallyRequest;
}

export namespace GetSfuUserInternallyRequest {
  export type AsObject = {
    id: string,
    sfuId: string,
    sessionId: string,
  }
}

export class GetSfuUserInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.SfuUserInfo | undefined;
  setInfo(value?: wsgateway_models_pb.SfuUserInfo): GetSfuUserInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetSfuUserInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetSfuUserInternallyResponse;
  hasError(): boolean;
  clearError(): GetSfuUserInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSfuUserInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSfuUserInternallyResponse): GetSfuUserInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetSfuUserInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSfuUserInternallyResponse;
  static deserializeBinaryFromReader(message: GetSfuUserInternallyResponse, reader: jspb.BinaryReader): GetSfuUserInternallyResponse;
}

export namespace GetSfuUserInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.SfuUserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListSfuUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListSfuUsersInternallyRequest;
  clearIdsList(): ListSfuUsersInternallyRequest;
  addIds(value: string, index?: number): ListSfuUsersInternallyRequest;

  getSfuIdsList(): Array<string>;
  setSfuIdsList(value: Array<string>): ListSfuUsersInternallyRequest;
  clearSfuIdsList(): ListSfuUsersInternallyRequest;
  addSfuIds(value: string, index?: number): ListSfuUsersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListSfuUsersInternallyRequest;
  clearUserIdsList(): ListSfuUsersInternallyRequest;
  addUserIds(value: string, index?: number): ListSfuUsersInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListSfuUsersInternallyRequest;
  clearRoomIdsList(): ListSfuUsersInternallyRequest;
  addRoomIds(value: string, index?: number): ListSfuUsersInternallyRequest;

  getSessionIdsList(): Array<string>;
  setSessionIdsList(value: Array<string>): ListSfuUsersInternallyRequest;
  clearSessionIdsList(): ListSfuUsersInternallyRequest;
  addSessionIds(value: string, index?: number): ListSfuUsersInternallyRequest;

  getStatusesList(): Array<wsgateway_enums_pb.SfuUserStatus>;
  setStatusesList(value: Array<wsgateway_enums_pb.SfuUserStatus>): ListSfuUsersInternallyRequest;
  clearStatusesList(): ListSfuUsersInternallyRequest;
  addStatuses(value: wsgateway_enums_pb.SfuUserStatus, index?: number): ListSfuUsersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListSfuUsersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListSfuUsersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListSfuUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSfuUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSfuUsersInternallyRequest): ListSfuUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListSfuUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSfuUsersInternallyRequest;
  static deserializeBinaryFromReader(message: ListSfuUsersInternallyRequest, reader: jspb.BinaryReader): ListSfuUsersInternallyRequest;
}

export namespace ListSfuUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    sfuIdsList: Array<string>,
    userIdsList: Array<string>,
    roomIdsList: Array<string>,
    sessionIdsList: Array<string>,
    statusesList: Array<wsgateway_enums_pb.SfuUserStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListSfuUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<wsgateway_models_pb.SfuUserInfo>;
  setUsersList(value: Array<wsgateway_models_pb.SfuUserInfo>): ListSfuUsersInternallyResponse;
  clearUsersList(): ListSfuUsersInternallyResponse;
  addUsers(value?: wsgateway_models_pb.SfuUserInfo, index?: number): wsgateway_models_pb.SfuUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListSfuUsersInternallyResponse;
  hasError(): boolean;
  clearError(): ListSfuUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSfuUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSfuUsersInternallyResponse): ListSfuUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListSfuUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSfuUsersInternallyResponse;
  static deserializeBinaryFromReader(message: ListSfuUsersInternallyResponse, reader: jspb.BinaryReader): ListSfuUsersInternallyResponse;
}

export namespace ListSfuUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<wsgateway_models_pb.SfuUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountSfuUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountSfuUsersInternallyRequest;
  clearIdsList(): CountSfuUsersInternallyRequest;
  addIds(value: string, index?: number): CountSfuUsersInternallyRequest;

  getSfuIdsList(): Array<string>;
  setSfuIdsList(value: Array<string>): CountSfuUsersInternallyRequest;
  clearSfuIdsList(): CountSfuUsersInternallyRequest;
  addSfuIds(value: string, index?: number): CountSfuUsersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountSfuUsersInternallyRequest;
  clearUserIdsList(): CountSfuUsersInternallyRequest;
  addUserIds(value: string, index?: number): CountSfuUsersInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): CountSfuUsersInternallyRequest;
  clearRoomIdsList(): CountSfuUsersInternallyRequest;
  addRoomIds(value: string, index?: number): CountSfuUsersInternallyRequest;

  getSessionIdsList(): Array<string>;
  setSessionIdsList(value: Array<string>): CountSfuUsersInternallyRequest;
  clearSessionIdsList(): CountSfuUsersInternallyRequest;
  addSessionIds(value: string, index?: number): CountSfuUsersInternallyRequest;

  getStatusesList(): Array<wsgateway_enums_pb.SfuUserStatus>;
  setStatusesList(value: Array<wsgateway_enums_pb.SfuUserStatus>): CountSfuUsersInternallyRequest;
  clearStatusesList(): CountSfuUsersInternallyRequest;
  addStatuses(value: wsgateway_enums_pb.SfuUserStatus, index?: number): CountSfuUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountSfuUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountSfuUsersInternallyRequest): CountSfuUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountSfuUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountSfuUsersInternallyRequest;
  static deserializeBinaryFromReader(message: CountSfuUsersInternallyRequest, reader: jspb.BinaryReader): CountSfuUsersInternallyRequest;
}

export namespace CountSfuUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    sfuIdsList: Array<string>,
    userIdsList: Array<string>,
    roomIdsList: Array<string>,
    sessionIdsList: Array<string>,
    statusesList: Array<wsgateway_enums_pb.SfuUserStatus>,
  }
}

export class CountSfuUsersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountSfuUsersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountSfuUsersInternallyResponse;
  hasError(): boolean;
  clearError(): CountSfuUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountSfuUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountSfuUsersInternallyResponse): CountSfuUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountSfuUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountSfuUsersInternallyResponse;
  static deserializeBinaryFromReader(message: CountSfuUsersInternallyResponse, reader: jspb.BinaryReader): CountSfuUsersInternallyResponse;
}

export namespace CountSfuUsersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateSfuUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSfuUserInternallyRequest;

  getSfuId(): string;
  setSfuId(value: string): CreateSfuUserInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateSfuUserInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): CreateSfuUserInternallyRequest;

  getSessionId(): string;
  setSessionId(value: string): CreateSfuUserInternallyRequest;

  getStatus(): wsgateway_enums_pb.SfuUserStatus;
  setStatus(value: wsgateway_enums_pb.SfuUserStatus): CreateSfuUserInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateSfuUserInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSfuUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSfuUserInternallyRequest): CreateSfuUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSfuUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSfuUserInternallyRequest;
  static deserializeBinaryFromReader(message: CreateSfuUserInternallyRequest, reader: jspb.BinaryReader): CreateSfuUserInternallyRequest;
}

export namespace CreateSfuUserInternallyRequest {
  export type AsObject = {
    id: string,
    sfuId: string,
    userId: string,
    roomId: string,
    sessionId: string,
    status: wsgateway_enums_pb.SfuUserStatus,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateSfuUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateSfuUserInternallyRequest>;
  setRequestsList(value: Array<CreateSfuUserInternallyRequest>): CreateSfuUsersInternallyRequest;
  clearRequestsList(): CreateSfuUsersInternallyRequest;
  addRequests(value?: CreateSfuUserInternallyRequest, index?: number): CreateSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSfuUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSfuUsersInternallyRequest): CreateSfuUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSfuUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSfuUsersInternallyRequest;
  static deserializeBinaryFromReader(message: CreateSfuUsersInternallyRequest, reader: jspb.BinaryReader): CreateSfuUsersInternallyRequest;
}

export namespace CreateSfuUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateSfuUserInternallyRequest.AsObject>,
  }
}

export class CreateSfuUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<wsgateway_models_pb.SfuUserInfo>;
  setUsersList(value: Array<wsgateway_models_pb.SfuUserInfo>): CreateSfuUsersInternallyResponse;
  clearUsersList(): CreateSfuUsersInternallyResponse;
  addUsers(value?: wsgateway_models_pb.SfuUserInfo, index?: number): wsgateway_models_pb.SfuUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateSfuUsersInternallyResponse;
  hasError(): boolean;
  clearError(): CreateSfuUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSfuUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSfuUsersInternallyResponse): CreateSfuUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSfuUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSfuUsersInternallyResponse;
  static deserializeBinaryFromReader(message: CreateSfuUsersInternallyResponse, reader: jspb.BinaryReader): CreateSfuUsersInternallyResponse;
}

export namespace CreateSfuUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<wsgateway_models_pb.SfuUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateSfuUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateSfuUserInternallyRequest;

  getSfuId(): string;
  setSfuId(value: string): UpdateSfuUserInternallyRequest;

  getSessionId(): string;
  setSessionId(value: string): UpdateSfuUserInternallyRequest;

  getStatus(): wsgateway_models_pb.IntegerValue | undefined;
  setStatus(value?: wsgateway_models_pb.IntegerValue): UpdateSfuUserInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSfuUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSfuUserInternallyRequest): UpdateSfuUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSfuUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSfuUserInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateSfuUserInternallyRequest, reader: jspb.BinaryReader): UpdateSfuUserInternallyRequest;
}

export namespace UpdateSfuUserInternallyRequest {
  export type AsObject = {
    id: string,
    sfuId: string,
    sessionId: string,
    status?: wsgateway_models_pb.IntegerValue.AsObject,
  }
}

export class UpdateSfuUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateSfuUserInternallyRequest>;
  setRequestsList(value: Array<UpdateSfuUserInternallyRequest>): UpdateSfuUsersInternallyRequest;
  clearRequestsList(): UpdateSfuUsersInternallyRequest;
  addRequests(value?: UpdateSfuUserInternallyRequest, index?: number): UpdateSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSfuUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSfuUsersInternallyRequest): UpdateSfuUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSfuUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSfuUsersInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateSfuUsersInternallyRequest, reader: jspb.BinaryReader): UpdateSfuUsersInternallyRequest;
}

export namespace UpdateSfuUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateSfuUserInternallyRequest.AsObject>,
  }
}

export class UpdateSfuUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<wsgateway_models_pb.SfuUserInfo>;
  setUsersList(value: Array<wsgateway_models_pb.SfuUserInfo>): UpdateSfuUsersInternallyResponse;
  clearUsersList(): UpdateSfuUsersInternallyResponse;
  addUsers(value?: wsgateway_models_pb.SfuUserInfo, index?: number): wsgateway_models_pb.SfuUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateSfuUsersInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateSfuUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSfuUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSfuUsersInternallyResponse): UpdateSfuUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSfuUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSfuUsersInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateSfuUsersInternallyResponse, reader: jspb.BinaryReader): UpdateSfuUsersInternallyResponse;
}

export namespace UpdateSfuUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<wsgateway_models_pb.SfuUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteSfuUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteSfuUserInternallyRequest;

  getSfuId(): string;
  setSfuId(value: string): DeleteSfuUserInternallyRequest;

  getSessionId(): string;
  setSessionId(value: string): DeleteSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSfuUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSfuUserInternallyRequest): DeleteSfuUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSfuUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSfuUserInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteSfuUserInternallyRequest, reader: jspb.BinaryReader): DeleteSfuUserInternallyRequest;
}

export namespace DeleteSfuUserInternallyRequest {
  export type AsObject = {
    id: string,
    sfuId: string,
    sessionId: string,
  }
}

export class DeleteSfuUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteSfuUserInternallyRequest>;
  setRequestsList(value: Array<DeleteSfuUserInternallyRequest>): DeleteSfuUsersInternallyRequest;
  clearRequestsList(): DeleteSfuUsersInternallyRequest;
  addRequests(value?: DeleteSfuUserInternallyRequest, index?: number): DeleteSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSfuUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSfuUsersInternallyRequest): DeleteSfuUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSfuUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSfuUsersInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteSfuUsersInternallyRequest, reader: jspb.BinaryReader): DeleteSfuUsersInternallyRequest;
}

export namespace DeleteSfuUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteSfuUserInternallyRequest.AsObject>,
  }
}

export class DeleteSfuUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<wsgateway_models_pb.SfuUserInfo>;
  setUsersList(value: Array<wsgateway_models_pb.SfuUserInfo>): DeleteSfuUsersInternallyResponse;
  clearUsersList(): DeleteSfuUsersInternallyResponse;
  addUsers(value?: wsgateway_models_pb.SfuUserInfo, index?: number): wsgateway_models_pb.SfuUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteSfuUsersInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteSfuUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSfuUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSfuUsersInternallyResponse): DeleteSfuUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSfuUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSfuUsersInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteSfuUsersInternallyResponse, reader: jspb.BinaryReader): DeleteSfuUsersInternallyResponse;
}

export namespace DeleteSfuUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<wsgateway_models_pb.SfuUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ConnectSfuUserInternallyRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ConnectSfuUserInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): ConnectSfuUserInternallyRequest;

  getSessionId(): string;
  setSessionId(value: string): ConnectSfuUserInternallyRequest;

  getRegion(): string;
  setRegion(value: string): ConnectSfuUserInternallyRequest;

  getSdpOffer(): Uint8Array | string;
  getSdpOffer_asU8(): Uint8Array;
  getSdpOffer_asB64(): string;
  setSdpOffer(value: Uint8Array | string): ConnectSfuUserInternallyRequest;

  getSfuType(): wsgateway_enums_pb.SfuType;
  setSfuType(value: wsgateway_enums_pb.SfuType): ConnectSfuUserInternallyRequest;

  getClientType(): sfu_enums_pb.ClientType;
  setClientType(value: sfu_enums_pb.ClientType): ConnectSfuUserInternallyRequest;

  getProtocolVersion(): sfu_enums_pb.ProtocolVersion;
  setProtocolVersion(value: sfu_enums_pb.ProtocolVersion): ConnectSfuUserInternallyRequest;

  getOptions(): sfu_models_pb.SfuConnectionOptions | undefined;
  setOptions(value?: sfu_models_pb.SfuConnectionOptions): ConnectSfuUserInternallyRequest;
  hasOptions(): boolean;
  clearOptions(): ConnectSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectSfuUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectSfuUserInternallyRequest): ConnectSfuUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectSfuUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectSfuUserInternallyRequest;
  static deserializeBinaryFromReader(message: ConnectSfuUserInternallyRequest, reader: jspb.BinaryReader): ConnectSfuUserInternallyRequest;
}

export namespace ConnectSfuUserInternallyRequest {
  export type AsObject = {
    userId: string,
    roomId: string,
    sessionId: string,
    region: string,
    sdpOffer: Uint8Array | string,
    sfuType: wsgateway_enums_pb.SfuType,
    clientType: sfu_enums_pb.ClientType,
    protocolVersion: sfu_enums_pb.ProtocolVersion,
    options?: sfu_models_pb.SfuConnectionOptions.AsObject,
  }
}

export class ConnectSfuUserInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ConnectSfuUserInternallyResponse;
  hasError(): boolean;
  clearError(): ConnectSfuUserInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectSfuUserInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectSfuUserInternallyResponse): ConnectSfuUserInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ConnectSfuUserInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectSfuUserInternallyResponse;
  static deserializeBinaryFromReader(message: ConnectSfuUserInternallyResponse, reader: jspb.BinaryReader): ConnectSfuUserInternallyResponse;
}

export namespace ConnectSfuUserInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class IceCandidateSfuUserInternallyRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): IceCandidateSfuUserInternallyRequest;

  getSfuType(): wsgateway_enums_pb.SfuType;
  setSfuType(value: wsgateway_enums_pb.SfuType): IceCandidateSfuUserInternallyRequest;

  getSdpCandidate(): Uint8Array | string;
  getSdpCandidate_asU8(): Uint8Array;
  getSdpCandidate_asB64(): string;
  setSdpCandidate(value: Uint8Array | string): IceCandidateSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IceCandidateSfuUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IceCandidateSfuUserInternallyRequest): IceCandidateSfuUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: IceCandidateSfuUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IceCandidateSfuUserInternallyRequest;
  static deserializeBinaryFromReader(message: IceCandidateSfuUserInternallyRequest, reader: jspb.BinaryReader): IceCandidateSfuUserInternallyRequest;
}

export namespace IceCandidateSfuUserInternallyRequest {
  export type AsObject = {
    sessionId: string,
    sfuType: wsgateway_enums_pb.SfuType,
    sdpCandidate: Uint8Array | string,
  }
}

export class IceCandidateSfuUserInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): IceCandidateSfuUserInternallyResponse;
  hasError(): boolean;
  clearError(): IceCandidateSfuUserInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IceCandidateSfuUserInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IceCandidateSfuUserInternallyResponse): IceCandidateSfuUserInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: IceCandidateSfuUserInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IceCandidateSfuUserInternallyResponse;
  static deserializeBinaryFromReader(message: IceCandidateSfuUserInternallyResponse, reader: jspb.BinaryReader): IceCandidateSfuUserInternallyResponse;
}

export namespace IceCandidateSfuUserInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class DisconnectSfuUsersInternallyRequest extends jspb.Message {
  getSessionIdsList(): Array<string>;
  setSessionIdsList(value: Array<string>): DisconnectSfuUsersInternallyRequest;
  clearSessionIdsList(): DisconnectSfuUsersInternallyRequest;
  addSessionIds(value: string, index?: number): DisconnectSfuUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectSfuUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectSfuUsersInternallyRequest): DisconnectSfuUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DisconnectSfuUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectSfuUsersInternallyRequest;
  static deserializeBinaryFromReader(message: DisconnectSfuUsersInternallyRequest, reader: jspb.BinaryReader): DisconnectSfuUsersInternallyRequest;
}

export namespace DisconnectSfuUsersInternallyRequest {
  export type AsObject = {
    sessionIdsList: Array<string>,
  }
}

export class DisconnectSfuUsersInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DisconnectSfuUsersInternallyResponse;
  hasError(): boolean;
  clearError(): DisconnectSfuUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectSfuUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectSfuUsersInternallyResponse): DisconnectSfuUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DisconnectSfuUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectSfuUsersInternallyResponse;
  static deserializeBinaryFromReader(message: DisconnectSfuUsersInternallyResponse, reader: jspb.BinaryReader): DisconnectSfuUsersInternallyResponse;
}

export namespace DisconnectSfuUsersInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetAndDeleteSfuUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAndDeleteSfuUserInternallyRequest;

  getSfuId(): string;
  setSfuId(value: string): GetAndDeleteSfuUserInternallyRequest;

  getSessionId(): string;
  setSessionId(value: string): GetAndDeleteSfuUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteSfuUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteSfuUserInternallyRequest): GetAndDeleteSfuUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteSfuUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteSfuUserInternallyRequest;
  static deserializeBinaryFromReader(message: GetAndDeleteSfuUserInternallyRequest, reader: jspb.BinaryReader): GetAndDeleteSfuUserInternallyRequest;
}

export namespace GetAndDeleteSfuUserInternallyRequest {
  export type AsObject = {
    id: string,
    sfuId: string,
    sessionId: string,
  }
}

export class GetAndDeleteSfuUserInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.SfuUserInfo | undefined;
  setInfo(value?: wsgateway_models_pb.SfuUserInfo): GetAndDeleteSfuUserInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetAndDeleteSfuUserInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetAndDeleteSfuUserInternallyResponse;
  hasError(): boolean;
  clearError(): GetAndDeleteSfuUserInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteSfuUserInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteSfuUserInternallyResponse): GetAndDeleteSfuUserInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteSfuUserInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteSfuUserInternallyResponse;
  static deserializeBinaryFromReader(message: GetAndDeleteSfuUserInternallyResponse, reader: jspb.BinaryReader): GetAndDeleteSfuUserInternallyResponse;
}

export namespace GetAndDeleteSfuUserInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.SfuUserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetWebsocketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetWebsocketInternallyRequest;

  getAddress(): string;
  setAddress(value: string): GetWebsocketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketInternallyRequest): GetWebsocketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketInternallyRequest;
  static deserializeBinaryFromReader(message: GetWebsocketInternallyRequest, reader: jspb.BinaryReader): GetWebsocketInternallyRequest;
}

export namespace GetWebsocketInternallyRequest {
  export type AsObject = {
    id: string,
    address: string,
  }
}

export class GetWebsocketInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketInfo): GetWebsocketInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetWebsocketInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetWebsocketInternallyResponse;
  hasError(): boolean;
  clearError(): GetWebsocketInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketInternallyResponse): GetWebsocketInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketInternallyResponse;
  static deserializeBinaryFromReader(message: GetWebsocketInternallyResponse, reader: jspb.BinaryReader): GetWebsocketInternallyResponse;
}

export namespace GetWebsocketInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListWebsocketsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListWebsocketsInternallyRequest;
  clearIdsList(): ListWebsocketsInternallyRequest;
  addIds(value: string, index?: number): ListWebsocketsInternallyRequest;

  getRegionsList(): Array<string>;
  setRegionsList(value: Array<string>): ListWebsocketsInternallyRequest;
  clearRegionsList(): ListWebsocketsInternallyRequest;
  addRegions(value: string, index?: number): ListWebsocketsInternallyRequest;

  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): ListWebsocketsInternallyRequest;
  clearAddressesList(): ListWebsocketsInternallyRequest;
  addAddresses(value: string, index?: number): ListWebsocketsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListWebsocketsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListWebsocketsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListWebsocketsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketsInternallyRequest): ListWebsocketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketsInternallyRequest;
  static deserializeBinaryFromReader(message: ListWebsocketsInternallyRequest, reader: jspb.BinaryReader): ListWebsocketsInternallyRequest;
}

export namespace ListWebsocketsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    regionsList: Array<string>,
    addressesList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListWebsocketsInternallyResponse extends jspb.Message {
  getWebsocketsList(): Array<wsgateway_models_pb.WebsocketInfo>;
  setWebsocketsList(value: Array<wsgateway_models_pb.WebsocketInfo>): ListWebsocketsInternallyResponse;
  clearWebsocketsList(): ListWebsocketsInternallyResponse;
  addWebsockets(value?: wsgateway_models_pb.WebsocketInfo, index?: number): wsgateway_models_pb.WebsocketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListWebsocketsInternallyResponse;
  hasError(): boolean;
  clearError(): ListWebsocketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketsInternallyResponse): ListWebsocketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketsInternallyResponse;
  static deserializeBinaryFromReader(message: ListWebsocketsInternallyResponse, reader: jspb.BinaryReader): ListWebsocketsInternallyResponse;
}

export namespace ListWebsocketsInternallyResponse {
  export type AsObject = {
    websocketsList: Array<wsgateway_models_pb.WebsocketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountWebsocketsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountWebsocketsInternallyRequest;
  clearIdsList(): CountWebsocketsInternallyRequest;
  addIds(value: string, index?: number): CountWebsocketsInternallyRequest;

  getRegionsList(): Array<string>;
  setRegionsList(value: Array<string>): CountWebsocketsInternallyRequest;
  clearRegionsList(): CountWebsocketsInternallyRequest;
  addRegions(value: string, index?: number): CountWebsocketsInternallyRequest;

  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): CountWebsocketsInternallyRequest;
  clearAddressesList(): CountWebsocketsInternallyRequest;
  addAddresses(value: string, index?: number): CountWebsocketsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketsInternallyRequest): CountWebsocketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketsInternallyRequest;
  static deserializeBinaryFromReader(message: CountWebsocketsInternallyRequest, reader: jspb.BinaryReader): CountWebsocketsInternallyRequest;
}

export namespace CountWebsocketsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    regionsList: Array<string>,
    addressesList: Array<string>,
  }
}

export class CountWebsocketsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountWebsocketsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountWebsocketsInternallyResponse;
  hasError(): boolean;
  clearError(): CountWebsocketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketsInternallyResponse): CountWebsocketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketsInternallyResponse;
  static deserializeBinaryFromReader(message: CountWebsocketsInternallyResponse, reader: jspb.BinaryReader): CountWebsocketsInternallyResponse;
}

export namespace CountWebsocketsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateWebsocketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateWebsocketInternallyRequest;

  getStatus(): wsgateway_enums_pb.WebsocketStatus;
  setStatus(value: wsgateway_enums_pb.WebsocketStatus): CreateWebsocketInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateWebsocketInternallyRequest;

  getAddress(): string;
  setAddress(value: string): CreateWebsocketInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateWebsocketInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateWebsocketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketInternallyRequest): CreateWebsocketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketInternallyRequest;
}

export namespace CreateWebsocketInternallyRequest {
  export type AsObject = {
    id: string,
    status: wsgateway_enums_pb.WebsocketStatus,
    region: string,
    address: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateWebsocketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateWebsocketInternallyRequest>;
  setRequestsList(value: Array<CreateWebsocketInternallyRequest>): CreateWebsocketsInternallyRequest;
  clearRequestsList(): CreateWebsocketsInternallyRequest;
  addRequests(value?: CreateWebsocketInternallyRequest, index?: number): CreateWebsocketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketsInternallyRequest): CreateWebsocketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketsInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketsInternallyRequest;
}

export namespace CreateWebsocketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateWebsocketInternallyRequest.AsObject>,
  }
}

export class CreateWebsocketsInternallyResponse extends jspb.Message {
  getWebsocketsList(): Array<wsgateway_models_pb.WebsocketInfo>;
  setWebsocketsList(value: Array<wsgateway_models_pb.WebsocketInfo>): CreateWebsocketsInternallyResponse;
  clearWebsocketsList(): CreateWebsocketsInternallyResponse;
  addWebsockets(value?: wsgateway_models_pb.WebsocketInfo, index?: number): wsgateway_models_pb.WebsocketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateWebsocketsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateWebsocketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketsInternallyResponse): CreateWebsocketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateWebsocketsInternallyResponse, reader: jspb.BinaryReader): CreateWebsocketsInternallyResponse;
}

export namespace CreateWebsocketsInternallyResponse {
  export type AsObject = {
    websocketsList: Array<wsgateway_models_pb.WebsocketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateWebsocketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateWebsocketInternallyRequest;

  getStatus(): wsgateway_models_pb.IntegerValue | undefined;
  setStatus(value?: wsgateway_models_pb.IntegerValue): UpdateWebsocketInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateWebsocketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebsocketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebsocketInternallyRequest): UpdateWebsocketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWebsocketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebsocketInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateWebsocketInternallyRequest, reader: jspb.BinaryReader): UpdateWebsocketInternallyRequest;
}

export namespace UpdateWebsocketInternallyRequest {
  export type AsObject = {
    id: string,
    status?: wsgateway_models_pb.IntegerValue.AsObject,
  }
}

export class UpdateWebsocketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateWebsocketInternallyRequest>;
  setRequestsList(value: Array<UpdateWebsocketInternallyRequest>): UpdateWebsocketsInternallyRequest;
  clearRequestsList(): UpdateWebsocketsInternallyRequest;
  addRequests(value?: UpdateWebsocketInternallyRequest, index?: number): UpdateWebsocketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebsocketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebsocketsInternallyRequest): UpdateWebsocketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWebsocketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebsocketsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateWebsocketsInternallyRequest, reader: jspb.BinaryReader): UpdateWebsocketsInternallyRequest;
}

export namespace UpdateWebsocketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateWebsocketInternallyRequest.AsObject>,
  }
}

export class UpdateWebsocketsInternallyResponse extends jspb.Message {
  getWebsocketsList(): Array<wsgateway_models_pb.WebsocketInfo>;
  setWebsocketsList(value: Array<wsgateway_models_pb.WebsocketInfo>): UpdateWebsocketsInternallyResponse;
  clearWebsocketsList(): UpdateWebsocketsInternallyResponse;
  addWebsockets(value?: wsgateway_models_pb.WebsocketInfo, index?: number): wsgateway_models_pb.WebsocketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateWebsocketsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateWebsocketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebsocketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebsocketsInternallyResponse): UpdateWebsocketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateWebsocketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebsocketsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateWebsocketsInternallyResponse, reader: jspb.BinaryReader): UpdateWebsocketsInternallyResponse;
}

export namespace UpdateWebsocketsInternallyResponse {
  export type AsObject = {
    websocketsList: Array<wsgateway_models_pb.WebsocketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteWebsocketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteWebsocketInternallyRequest;

  getAddress(): string;
  setAddress(value: string): DeleteWebsocketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketInternallyRequest): DeleteWebsocketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketInternallyRequest;
}

export namespace DeleteWebsocketInternallyRequest {
  export type AsObject = {
    id: string,
    address: string,
  }
}

export class DeleteWebsocketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteWebsocketInternallyRequest>;
  setRequestsList(value: Array<DeleteWebsocketInternallyRequest>): DeleteWebsocketsInternallyRequest;
  clearRequestsList(): DeleteWebsocketsInternallyRequest;
  addRequests(value?: DeleteWebsocketInternallyRequest, index?: number): DeleteWebsocketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketsInternallyRequest): DeleteWebsocketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketsInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketsInternallyRequest;
}

export namespace DeleteWebsocketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteWebsocketInternallyRequest.AsObject>,
  }
}

export class DeleteWebsocketsInternallyResponse extends jspb.Message {
  getWebsocketsList(): Array<wsgateway_models_pb.WebsocketInfo>;
  setWebsocketsList(value: Array<wsgateway_models_pb.WebsocketInfo>): DeleteWebsocketsInternallyResponse;
  clearWebsocketsList(): DeleteWebsocketsInternallyResponse;
  addWebsockets(value?: wsgateway_models_pb.WebsocketInfo, index?: number): wsgateway_models_pb.WebsocketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteWebsocketsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteWebsocketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketsInternallyResponse): DeleteWebsocketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteWebsocketsInternallyResponse, reader: jspb.BinaryReader): DeleteWebsocketsInternallyResponse;
}

export namespace DeleteWebsocketsInternallyResponse {
  export type AsObject = {
    websocketsList: Array<wsgateway_models_pb.WebsocketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetAndDeleteWebsocketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAndDeleteWebsocketInternallyRequest;

  getAddress(): string;
  setAddress(value: string): GetAndDeleteWebsocketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketInternallyRequest): GetAndDeleteWebsocketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketInternallyRequest;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketInternallyRequest, reader: jspb.BinaryReader): GetAndDeleteWebsocketInternallyRequest;
}

export namespace GetAndDeleteWebsocketInternallyRequest {
  export type AsObject = {
    id: string,
    address: string,
  }
}

export class GetAndDeleteWebsocketInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketInfo): GetAndDeleteWebsocketInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetAndDeleteWebsocketInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetAndDeleteWebsocketInternallyResponse;
  hasError(): boolean;
  clearError(): GetAndDeleteWebsocketInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketInternallyResponse): GetAndDeleteWebsocketInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketInternallyResponse;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketInternallyResponse, reader: jspb.BinaryReader): GetAndDeleteWebsocketInternallyResponse;
}

export namespace GetAndDeleteWebsocketInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetWebsocketRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetWebsocketRoomInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): GetWebsocketRoomInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): GetWebsocketRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketRoomInternallyRequest): GetWebsocketRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketRoomInternallyRequest;
  static deserializeBinaryFromReader(message: GetWebsocketRoomInternallyRequest, reader: jspb.BinaryReader): GetWebsocketRoomInternallyRequest;
}

export namespace GetWebsocketRoomInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    websocketId: string,
  }
}

export class GetWebsocketRoomInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketRoomInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketRoomInfo): GetWebsocketRoomInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetWebsocketRoomInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetWebsocketRoomInternallyResponse;
  hasError(): boolean;
  clearError(): GetWebsocketRoomInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketRoomInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketRoomInternallyResponse): GetWebsocketRoomInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketRoomInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketRoomInternallyResponse;
  static deserializeBinaryFromReader(message: GetWebsocketRoomInternallyResponse, reader: jspb.BinaryReader): GetWebsocketRoomInternallyResponse;
}

export namespace GetWebsocketRoomInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketRoomInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListWebsocketRoomsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListWebsocketRoomsInternallyRequest;
  clearIdsList(): ListWebsocketRoomsInternallyRequest;
  addIds(value: string, index?: number): ListWebsocketRoomsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListWebsocketRoomsInternallyRequest;
  clearRoomIdsList(): ListWebsocketRoomsInternallyRequest;
  addRoomIds(value: string, index?: number): ListWebsocketRoomsInternallyRequest;

  getWebsocketIdsList(): Array<string>;
  setWebsocketIdsList(value: Array<string>): ListWebsocketRoomsInternallyRequest;
  clearWebsocketIdsList(): ListWebsocketRoomsInternallyRequest;
  addWebsocketIds(value: string, index?: number): ListWebsocketRoomsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListWebsocketRoomsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListWebsocketRoomsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListWebsocketRoomsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketRoomsInternallyRequest): ListWebsocketRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: ListWebsocketRoomsInternallyRequest, reader: jspb.BinaryReader): ListWebsocketRoomsInternallyRequest;
}

export namespace ListWebsocketRoomsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    websocketIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListWebsocketRoomsInternallyResponse extends jspb.Message {
  getRoomsList(): Array<wsgateway_models_pb.WebsocketRoomInfo>;
  setRoomsList(value: Array<wsgateway_models_pb.WebsocketRoomInfo>): ListWebsocketRoomsInternallyResponse;
  clearRoomsList(): ListWebsocketRoomsInternallyResponse;
  addRooms(value?: wsgateway_models_pb.WebsocketRoomInfo, index?: number): wsgateway_models_pb.WebsocketRoomInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListWebsocketRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): ListWebsocketRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketRoomsInternallyResponse): ListWebsocketRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: ListWebsocketRoomsInternallyResponse, reader: jspb.BinaryReader): ListWebsocketRoomsInternallyResponse;
}

export namespace ListWebsocketRoomsInternallyResponse {
  export type AsObject = {
    roomsList: Array<wsgateway_models_pb.WebsocketRoomInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountWebsocketRoomsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountWebsocketRoomsInternallyRequest;
  clearIdsList(): CountWebsocketRoomsInternallyRequest;
  addIds(value: string, index?: number): CountWebsocketRoomsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): CountWebsocketRoomsInternallyRequest;
  clearRoomIdsList(): CountWebsocketRoomsInternallyRequest;
  addRoomIds(value: string, index?: number): CountWebsocketRoomsInternallyRequest;

  getWebsocketIdsList(): Array<string>;
  setWebsocketIdsList(value: Array<string>): CountWebsocketRoomsInternallyRequest;
  clearWebsocketIdsList(): CountWebsocketRoomsInternallyRequest;
  addWebsocketIds(value: string, index?: number): CountWebsocketRoomsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketRoomsInternallyRequest): CountWebsocketRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: CountWebsocketRoomsInternallyRequest, reader: jspb.BinaryReader): CountWebsocketRoomsInternallyRequest;
}

export namespace CountWebsocketRoomsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    websocketIdsList: Array<string>,
  }
}

export class CountWebsocketRoomsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountWebsocketRoomsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountWebsocketRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): CountWebsocketRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketRoomsInternallyResponse): CountWebsocketRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: CountWebsocketRoomsInternallyResponse, reader: jspb.BinaryReader): CountWebsocketRoomsInternallyResponse;
}

export namespace CountWebsocketRoomsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateWebsocketRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateWebsocketRoomInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): CreateWebsocketRoomInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): CreateWebsocketRoomInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateWebsocketRoomInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateWebsocketRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketRoomInternallyRequest): CreateWebsocketRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketRoomInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketRoomInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketRoomInternallyRequest;
}

export namespace CreateWebsocketRoomInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    websocketId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateWebsocketRoomsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateWebsocketRoomInternallyRequest>;
  setRequestsList(value: Array<CreateWebsocketRoomInternallyRequest>): CreateWebsocketRoomsInternallyRequest;
  clearRequestsList(): CreateWebsocketRoomsInternallyRequest;
  addRequests(value?: CreateWebsocketRoomInternallyRequest, index?: number): CreateWebsocketRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketRoomsInternallyRequest): CreateWebsocketRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketRoomsInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketRoomsInternallyRequest;
}

export namespace CreateWebsocketRoomsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateWebsocketRoomInternallyRequest.AsObject>,
  }
}

export class CreateWebsocketRoomsInternallyResponse extends jspb.Message {
  getRoomsList(): Array<wsgateway_models_pb.WebsocketRoomInfo>;
  setRoomsList(value: Array<wsgateway_models_pb.WebsocketRoomInfo>): CreateWebsocketRoomsInternallyResponse;
  clearRoomsList(): CreateWebsocketRoomsInternallyResponse;
  addRooms(value?: wsgateway_models_pb.WebsocketRoomInfo, index?: number): wsgateway_models_pb.WebsocketRoomInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateWebsocketRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateWebsocketRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketRoomsInternallyResponse): CreateWebsocketRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateWebsocketRoomsInternallyResponse, reader: jspb.BinaryReader): CreateWebsocketRoomsInternallyResponse;
}

export namespace CreateWebsocketRoomsInternallyResponse {
  export type AsObject = {
    roomsList: Array<wsgateway_models_pb.WebsocketRoomInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteWebsocketRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteWebsocketRoomInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): DeleteWebsocketRoomInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): DeleteWebsocketRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketRoomInternallyRequest): DeleteWebsocketRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketRoomInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketRoomInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketRoomInternallyRequest;
}

export namespace DeleteWebsocketRoomInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    websocketId: string,
  }
}

export class DeleteWebsocketRoomsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteWebsocketRoomInternallyRequest>;
  setRequestsList(value: Array<DeleteWebsocketRoomInternallyRequest>): DeleteWebsocketRoomsInternallyRequest;
  clearRequestsList(): DeleteWebsocketRoomsInternallyRequest;
  addRequests(value?: DeleteWebsocketRoomInternallyRequest, index?: number): DeleteWebsocketRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketRoomsInternallyRequest): DeleteWebsocketRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketRoomsInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketRoomsInternallyRequest;
}

export namespace DeleteWebsocketRoomsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteWebsocketRoomInternallyRequest.AsObject>,
  }
}

export class DeleteWebsocketRoomsInternallyResponse extends jspb.Message {
  getRoomsList(): Array<wsgateway_models_pb.WebsocketRoomInfo>;
  setRoomsList(value: Array<wsgateway_models_pb.WebsocketRoomInfo>): DeleteWebsocketRoomsInternallyResponse;
  clearRoomsList(): DeleteWebsocketRoomsInternallyResponse;
  addRooms(value?: wsgateway_models_pb.WebsocketRoomInfo, index?: number): wsgateway_models_pb.WebsocketRoomInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteWebsocketRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteWebsocketRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketRoomsInternallyResponse): DeleteWebsocketRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteWebsocketRoomsInternallyResponse, reader: jspb.BinaryReader): DeleteWebsocketRoomsInternallyResponse;
}

export namespace DeleteWebsocketRoomsInternallyResponse {
  export type AsObject = {
    roomsList: Array<wsgateway_models_pb.WebsocketRoomInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetAndDeleteWebsocketRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAndDeleteWebsocketRoomInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): GetAndDeleteWebsocketRoomInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): GetAndDeleteWebsocketRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketRoomInternallyRequest): GetAndDeleteWebsocketRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketRoomInternallyRequest;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketRoomInternallyRequest, reader: jspb.BinaryReader): GetAndDeleteWebsocketRoomInternallyRequest;
}

export namespace GetAndDeleteWebsocketRoomInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    websocketId: string,
  }
}

export class GetAndDeleteWebsocketRoomInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketRoomInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketRoomInfo): GetAndDeleteWebsocketRoomInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetAndDeleteWebsocketRoomInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetAndDeleteWebsocketRoomInternallyResponse;
  hasError(): boolean;
  clearError(): GetAndDeleteWebsocketRoomInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketRoomInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketRoomInternallyResponse): GetAndDeleteWebsocketRoomInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketRoomInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketRoomInternallyResponse;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketRoomInternallyResponse, reader: jspb.BinaryReader): GetAndDeleteWebsocketRoomInternallyResponse;
}

export namespace GetAndDeleteWebsocketRoomInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketRoomInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetWebsocketEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetWebsocketEventInternallyRequest;

  getEventId(): string;
  setEventId(value: string): GetWebsocketEventInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): GetWebsocketEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketEventInternallyRequest): GetWebsocketEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketEventInternallyRequest;
  static deserializeBinaryFromReader(message: GetWebsocketEventInternallyRequest, reader: jspb.BinaryReader): GetWebsocketEventInternallyRequest;
}

export namespace GetWebsocketEventInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
    websocketId: string,
  }
}

export class GetWebsocketEventInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketEventInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketEventInfo): GetWebsocketEventInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetWebsocketEventInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetWebsocketEventInternallyResponse;
  hasError(): boolean;
  clearError(): GetWebsocketEventInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketEventInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketEventInternallyResponse): GetWebsocketEventInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketEventInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketEventInternallyResponse;
  static deserializeBinaryFromReader(message: GetWebsocketEventInternallyResponse, reader: jspb.BinaryReader): GetWebsocketEventInternallyResponse;
}

export namespace GetWebsocketEventInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketEventInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListWebsocketEventsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListWebsocketEventsInternallyRequest;
  clearIdsList(): ListWebsocketEventsInternallyRequest;
  addIds(value: string, index?: number): ListWebsocketEventsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListWebsocketEventsInternallyRequest;
  clearEventIdsList(): ListWebsocketEventsInternallyRequest;
  addEventIds(value: string, index?: number): ListWebsocketEventsInternallyRequest;

  getWebsocketIdsList(): Array<string>;
  setWebsocketIdsList(value: Array<string>): ListWebsocketEventsInternallyRequest;
  clearWebsocketIdsList(): ListWebsocketEventsInternallyRequest;
  addWebsocketIds(value: string, index?: number): ListWebsocketEventsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListWebsocketEventsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListWebsocketEventsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListWebsocketEventsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketEventsInternallyRequest): ListWebsocketEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketEventsInternallyRequest;
  static deserializeBinaryFromReader(message: ListWebsocketEventsInternallyRequest, reader: jspb.BinaryReader): ListWebsocketEventsInternallyRequest;
}

export namespace ListWebsocketEventsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
    websocketIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListWebsocketEventsInternallyResponse extends jspb.Message {
  getEventsList(): Array<wsgateway_models_pb.WebsocketEventInfo>;
  setEventsList(value: Array<wsgateway_models_pb.WebsocketEventInfo>): ListWebsocketEventsInternallyResponse;
  clearEventsList(): ListWebsocketEventsInternallyResponse;
  addEvents(value?: wsgateway_models_pb.WebsocketEventInfo, index?: number): wsgateway_models_pb.WebsocketEventInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListWebsocketEventsInternallyResponse;
  hasError(): boolean;
  clearError(): ListWebsocketEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketEventsInternallyResponse): ListWebsocketEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketEventsInternallyResponse;
  static deserializeBinaryFromReader(message: ListWebsocketEventsInternallyResponse, reader: jspb.BinaryReader): ListWebsocketEventsInternallyResponse;
}

export namespace ListWebsocketEventsInternallyResponse {
  export type AsObject = {
    eventsList: Array<wsgateway_models_pb.WebsocketEventInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountWebsocketEventsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountWebsocketEventsInternallyRequest;
  clearIdsList(): CountWebsocketEventsInternallyRequest;
  addIds(value: string, index?: number): CountWebsocketEventsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): CountWebsocketEventsInternallyRequest;
  clearEventIdsList(): CountWebsocketEventsInternallyRequest;
  addEventIds(value: string, index?: number): CountWebsocketEventsInternallyRequest;

  getWebsocketIdsList(): Array<string>;
  setWebsocketIdsList(value: Array<string>): CountWebsocketEventsInternallyRequest;
  clearWebsocketIdsList(): CountWebsocketEventsInternallyRequest;
  addWebsocketIds(value: string, index?: number): CountWebsocketEventsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketEventsInternallyRequest): CountWebsocketEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketEventsInternallyRequest;
  static deserializeBinaryFromReader(message: CountWebsocketEventsInternallyRequest, reader: jspb.BinaryReader): CountWebsocketEventsInternallyRequest;
}

export namespace CountWebsocketEventsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
    websocketIdsList: Array<string>,
  }
}

export class CountWebsocketEventsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountWebsocketEventsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountWebsocketEventsInternallyResponse;
  hasError(): boolean;
  clearError(): CountWebsocketEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketEventsInternallyResponse): CountWebsocketEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketEventsInternallyResponse;
  static deserializeBinaryFromReader(message: CountWebsocketEventsInternallyResponse, reader: jspb.BinaryReader): CountWebsocketEventsInternallyResponse;
}

export namespace CountWebsocketEventsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateWebsocketEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateWebsocketEventInternallyRequest;

  getEventId(): string;
  setEventId(value: string): CreateWebsocketEventInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): CreateWebsocketEventInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateWebsocketEventInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateWebsocketEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketEventInternallyRequest): CreateWebsocketEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketEventInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketEventInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketEventInternallyRequest;
}

export namespace CreateWebsocketEventInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
    websocketId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateWebsocketEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateWebsocketEventInternallyRequest>;
  setRequestsList(value: Array<CreateWebsocketEventInternallyRequest>): CreateWebsocketEventsInternallyRequest;
  clearRequestsList(): CreateWebsocketEventsInternallyRequest;
  addRequests(value?: CreateWebsocketEventInternallyRequest, index?: number): CreateWebsocketEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketEventsInternallyRequest): CreateWebsocketEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketEventsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketEventsInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketEventsInternallyRequest;
}

export namespace CreateWebsocketEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateWebsocketEventInternallyRequest.AsObject>,
  }
}

export class CreateWebsocketEventsInternallyResponse extends jspb.Message {
  getEventsList(): Array<wsgateway_models_pb.WebsocketEventInfo>;
  setEventsList(value: Array<wsgateway_models_pb.WebsocketEventInfo>): CreateWebsocketEventsInternallyResponse;
  clearEventsList(): CreateWebsocketEventsInternallyResponse;
  addEvents(value?: wsgateway_models_pb.WebsocketEventInfo, index?: number): wsgateway_models_pb.WebsocketEventInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateWebsocketEventsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateWebsocketEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketEventsInternallyResponse): CreateWebsocketEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketEventsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateWebsocketEventsInternallyResponse, reader: jspb.BinaryReader): CreateWebsocketEventsInternallyResponse;
}

export namespace CreateWebsocketEventsInternallyResponse {
  export type AsObject = {
    eventsList: Array<wsgateway_models_pb.WebsocketEventInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteWebsocketEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteWebsocketEventInternallyRequest;

  getEventId(): string;
  setEventId(value: string): DeleteWebsocketEventInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): DeleteWebsocketEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketEventInternallyRequest): DeleteWebsocketEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketEventInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketEventInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketEventInternallyRequest;
}

export namespace DeleteWebsocketEventInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
    websocketId: string,
  }
}

export class DeleteWebsocketEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteWebsocketEventInternallyRequest>;
  setRequestsList(value: Array<DeleteWebsocketEventInternallyRequest>): DeleteWebsocketEventsInternallyRequest;
  clearRequestsList(): DeleteWebsocketEventsInternallyRequest;
  addRequests(value?: DeleteWebsocketEventInternallyRequest, index?: number): DeleteWebsocketEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketEventsInternallyRequest): DeleteWebsocketEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketEventsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketEventsInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketEventsInternallyRequest;
}

export namespace DeleteWebsocketEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteWebsocketEventInternallyRequest.AsObject>,
  }
}

export class DeleteWebsocketEventsInternallyResponse extends jspb.Message {
  getEventsList(): Array<wsgateway_models_pb.WebsocketEventInfo>;
  setEventsList(value: Array<wsgateway_models_pb.WebsocketEventInfo>): DeleteWebsocketEventsInternallyResponse;
  clearEventsList(): DeleteWebsocketEventsInternallyResponse;
  addEvents(value?: wsgateway_models_pb.WebsocketEventInfo, index?: number): wsgateway_models_pb.WebsocketEventInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteWebsocketEventsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteWebsocketEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketEventsInternallyResponse): DeleteWebsocketEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketEventsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteWebsocketEventsInternallyResponse, reader: jspb.BinaryReader): DeleteWebsocketEventsInternallyResponse;
}

export namespace DeleteWebsocketEventsInternallyResponse {
  export type AsObject = {
    eventsList: Array<wsgateway_models_pb.WebsocketEventInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetAndDeleteWebsocketEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAndDeleteWebsocketEventInternallyRequest;

  getEventId(): string;
  setEventId(value: string): GetAndDeleteWebsocketEventInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): GetAndDeleteWebsocketEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketEventInternallyRequest): GetAndDeleteWebsocketEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketEventInternallyRequest;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketEventInternallyRequest, reader: jspb.BinaryReader): GetAndDeleteWebsocketEventInternallyRequest;
}

export namespace GetAndDeleteWebsocketEventInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
    websocketId: string,
  }
}

export class GetAndDeleteWebsocketEventInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketEventInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketEventInfo): GetAndDeleteWebsocketEventInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetAndDeleteWebsocketEventInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetAndDeleteWebsocketEventInternallyResponse;
  hasError(): boolean;
  clearError(): GetAndDeleteWebsocketEventInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketEventInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketEventInternallyResponse): GetAndDeleteWebsocketEventInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketEventInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketEventInternallyResponse;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketEventInternallyResponse, reader: jspb.BinaryReader): GetAndDeleteWebsocketEventInternallyResponse;
}

export namespace GetAndDeleteWebsocketEventInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketEventInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetWebsocketSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetWebsocketSessionInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetWebsocketSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): GetWebsocketSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketSessionInternallyRequest): GetWebsocketSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketSessionInternallyRequest;
  static deserializeBinaryFromReader(message: GetWebsocketSessionInternallyRequest, reader: jspb.BinaryReader): GetWebsocketSessionInternallyRequest;
}

export namespace GetWebsocketSessionInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    roomUserId: string,
  }
}

export class GetWebsocketSessionInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketSessionInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketSessionInfo): GetWebsocketSessionInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetWebsocketSessionInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetWebsocketSessionInternallyResponse;
  hasError(): boolean;
  clearError(): GetWebsocketSessionInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketSessionInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketSessionInternallyResponse): GetWebsocketSessionInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketSessionInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketSessionInternallyResponse;
  static deserializeBinaryFromReader(message: GetWebsocketSessionInternallyResponse, reader: jspb.BinaryReader): GetWebsocketSessionInternallyResponse;
}

export namespace GetWebsocketSessionInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketSessionInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListWebsocketSessionsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListWebsocketSessionsInternallyRequest;
  clearIdsList(): ListWebsocketSessionsInternallyRequest;
  addIds(value: string, index?: number): ListWebsocketSessionsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListWebsocketSessionsInternallyRequest;
  clearUserIdsList(): ListWebsocketSessionsInternallyRequest;
  addUserIds(value: string, index?: number): ListWebsocketSessionsInternallyRequest;

  getRoomUserIdsList(): Array<string>;
  setRoomUserIdsList(value: Array<string>): ListWebsocketSessionsInternallyRequest;
  clearRoomUserIdsList(): ListWebsocketSessionsInternallyRequest;
  addRoomUserIds(value: string, index?: number): ListWebsocketSessionsInternallyRequest;

  getWebsocketIdsList(): Array<string>;
  setWebsocketIdsList(value: Array<string>): ListWebsocketSessionsInternallyRequest;
  clearWebsocketIdsList(): ListWebsocketSessionsInternallyRequest;
  addWebsocketIds(value: string, index?: number): ListWebsocketSessionsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListWebsocketSessionsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListWebsocketSessionsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListWebsocketSessionsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketSessionsInternallyRequest): ListWebsocketSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: ListWebsocketSessionsInternallyRequest, reader: jspb.BinaryReader): ListWebsocketSessionsInternallyRequest;
}

export namespace ListWebsocketSessionsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    roomUserIdsList: Array<string>,
    websocketIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListWebsocketSessionsInternallyResponse extends jspb.Message {
  getSessionsList(): Array<wsgateway_models_pb.WebsocketSessionInfo>;
  setSessionsList(value: Array<wsgateway_models_pb.WebsocketSessionInfo>): ListWebsocketSessionsInternallyResponse;
  clearSessionsList(): ListWebsocketSessionsInternallyResponse;
  addSessions(value?: wsgateway_models_pb.WebsocketSessionInfo, index?: number): wsgateway_models_pb.WebsocketSessionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListWebsocketSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): ListWebsocketSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketSessionsInternallyResponse): ListWebsocketSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: ListWebsocketSessionsInternallyResponse, reader: jspb.BinaryReader): ListWebsocketSessionsInternallyResponse;
}

export namespace ListWebsocketSessionsInternallyResponse {
  export type AsObject = {
    sessionsList: Array<wsgateway_models_pb.WebsocketSessionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountWebsocketSessionsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountWebsocketSessionsInternallyRequest;
  clearIdsList(): CountWebsocketSessionsInternallyRequest;
  addIds(value: string, index?: number): CountWebsocketSessionsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountWebsocketSessionsInternallyRequest;
  clearUserIdsList(): CountWebsocketSessionsInternallyRequest;
  addUserIds(value: string, index?: number): CountWebsocketSessionsInternallyRequest;

  getRoomUserIdsList(): Array<string>;
  setRoomUserIdsList(value: Array<string>): CountWebsocketSessionsInternallyRequest;
  clearRoomUserIdsList(): CountWebsocketSessionsInternallyRequest;
  addRoomUserIds(value: string, index?: number): CountWebsocketSessionsInternallyRequest;

  getWebsocketIdsList(): Array<string>;
  setWebsocketIdsList(value: Array<string>): CountWebsocketSessionsInternallyRequest;
  clearWebsocketIdsList(): CountWebsocketSessionsInternallyRequest;
  addWebsocketIds(value: string, index?: number): CountWebsocketSessionsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketSessionsInternallyRequest): CountWebsocketSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: CountWebsocketSessionsInternallyRequest, reader: jspb.BinaryReader): CountWebsocketSessionsInternallyRequest;
}

export namespace CountWebsocketSessionsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    roomUserIdsList: Array<string>,
    websocketIdsList: Array<string>,
  }
}

export class CountWebsocketSessionsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountWebsocketSessionsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountWebsocketSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): CountWebsocketSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketSessionsInternallyResponse): CountWebsocketSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: CountWebsocketSessionsInternallyResponse, reader: jspb.BinaryReader): CountWebsocketSessionsInternallyResponse;
}

export namespace CountWebsocketSessionsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateWebsocketSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateWebsocketSessionInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateWebsocketSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): CreateWebsocketSessionInternallyRequest;

  getWebsocketId(): string;
  setWebsocketId(value: string): CreateWebsocketSessionInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateWebsocketSessionInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateWebsocketSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketSessionInternallyRequest): CreateWebsocketSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketSessionInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketSessionInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketSessionInternallyRequest;
}

export namespace CreateWebsocketSessionInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    roomUserId: string,
    websocketId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateWebsocketSessionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateWebsocketSessionInternallyRequest>;
  setRequestsList(value: Array<CreateWebsocketSessionInternallyRequest>): CreateWebsocketSessionsInternallyRequest;
  clearRequestsList(): CreateWebsocketSessionsInternallyRequest;
  addRequests(value?: CreateWebsocketSessionInternallyRequest, index?: number): CreateWebsocketSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketSessionsInternallyRequest): CreateWebsocketSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketSessionsInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketSessionsInternallyRequest;
}

export namespace CreateWebsocketSessionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateWebsocketSessionInternallyRequest.AsObject>,
  }
}

export class CreateWebsocketSessionsInternallyResponse extends jspb.Message {
  getSessionsList(): Array<wsgateway_models_pb.WebsocketSessionInfo>;
  setSessionsList(value: Array<wsgateway_models_pb.WebsocketSessionInfo>): CreateWebsocketSessionsInternallyResponse;
  clearSessionsList(): CreateWebsocketSessionsInternallyResponse;
  addSessions(value?: wsgateway_models_pb.WebsocketSessionInfo, index?: number): wsgateway_models_pb.WebsocketSessionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateWebsocketSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateWebsocketSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketSessionsInternallyResponse): CreateWebsocketSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateWebsocketSessionsInternallyResponse, reader: jspb.BinaryReader): CreateWebsocketSessionsInternallyResponse;
}

export namespace CreateWebsocketSessionsInternallyResponse {
  export type AsObject = {
    sessionsList: Array<wsgateway_models_pb.WebsocketSessionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateWebsocketSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateWebsocketSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): UpdateWebsocketSessionInternallyRequest;

  getRoomUser(): wsgateway_models_pb.StringValue | undefined;
  setRoomUser(value?: wsgateway_models_pb.StringValue): UpdateWebsocketSessionInternallyRequest;
  hasRoomUser(): boolean;
  clearRoomUser(): UpdateWebsocketSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebsocketSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebsocketSessionInternallyRequest): UpdateWebsocketSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWebsocketSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebsocketSessionInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateWebsocketSessionInternallyRequest, reader: jspb.BinaryReader): UpdateWebsocketSessionInternallyRequest;
}

export namespace UpdateWebsocketSessionInternallyRequest {
  export type AsObject = {
    id: string,
    roomUserId: string,
    roomUser?: wsgateway_models_pb.StringValue.AsObject,
  }
}

export class UpdateWebsocketSessionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateWebsocketSessionInternallyRequest>;
  setRequestsList(value: Array<UpdateWebsocketSessionInternallyRequest>): UpdateWebsocketSessionsInternallyRequest;
  clearRequestsList(): UpdateWebsocketSessionsInternallyRequest;
  addRequests(value?: UpdateWebsocketSessionInternallyRequest, index?: number): UpdateWebsocketSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebsocketSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebsocketSessionsInternallyRequest): UpdateWebsocketSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWebsocketSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebsocketSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateWebsocketSessionsInternallyRequest, reader: jspb.BinaryReader): UpdateWebsocketSessionsInternallyRequest;
}

export namespace UpdateWebsocketSessionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateWebsocketSessionInternallyRequest.AsObject>,
  }
}

export class UpdateWebsocketSessionsInternallyResponse extends jspb.Message {
  getSessionsList(): Array<wsgateway_models_pb.WebsocketSessionInfo>;
  setSessionsList(value: Array<wsgateway_models_pb.WebsocketSessionInfo>): UpdateWebsocketSessionsInternallyResponse;
  clearSessionsList(): UpdateWebsocketSessionsInternallyResponse;
  addSessions(value?: wsgateway_models_pb.WebsocketSessionInfo, index?: number): wsgateway_models_pb.WebsocketSessionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateWebsocketSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateWebsocketSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWebsocketSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWebsocketSessionsInternallyResponse): UpdateWebsocketSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateWebsocketSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWebsocketSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateWebsocketSessionsInternallyResponse, reader: jspb.BinaryReader): UpdateWebsocketSessionsInternallyResponse;
}

export namespace UpdateWebsocketSessionsInternallyResponse {
  export type AsObject = {
    sessionsList: Array<wsgateway_models_pb.WebsocketSessionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteWebsocketSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteWebsocketSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): DeleteWebsocketSessionInternallyRequest;

  getAbnormalClosure(): boolean;
  setAbnormalClosure(value: boolean): DeleteWebsocketSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketSessionInternallyRequest): DeleteWebsocketSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketSessionInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketSessionInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketSessionInternallyRequest;
}

export namespace DeleteWebsocketSessionInternallyRequest {
  export type AsObject = {
    id: string,
    roomUserId: string,
    abnormalClosure: boolean,
  }
}

export class DeleteWebsocketSessionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteWebsocketSessionInternallyRequest>;
  setRequestsList(value: Array<DeleteWebsocketSessionInternallyRequest>): DeleteWebsocketSessionsInternallyRequest;
  clearRequestsList(): DeleteWebsocketSessionsInternallyRequest;
  addRequests(value?: DeleteWebsocketSessionInternallyRequest, index?: number): DeleteWebsocketSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketSessionsInternallyRequest): DeleteWebsocketSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketSessionsInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketSessionsInternallyRequest;
}

export namespace DeleteWebsocketSessionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteWebsocketSessionInternallyRequest.AsObject>,
  }
}

export class DeleteWebsocketSessionsInternallyResponse extends jspb.Message {
  getSessionsList(): Array<wsgateway_models_pb.WebsocketSessionInfo>;
  setSessionsList(value: Array<wsgateway_models_pb.WebsocketSessionInfo>): DeleteWebsocketSessionsInternallyResponse;
  clearSessionsList(): DeleteWebsocketSessionsInternallyResponse;
  addSessions(value?: wsgateway_models_pb.WebsocketSessionInfo, index?: number): wsgateway_models_pb.WebsocketSessionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteWebsocketSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteWebsocketSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketSessionsInternallyResponse): DeleteWebsocketSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteWebsocketSessionsInternallyResponse, reader: jspb.BinaryReader): DeleteWebsocketSessionsInternallyResponse;
}

export namespace DeleteWebsocketSessionsInternallyResponse {
  export type AsObject = {
    sessionsList: Array<wsgateway_models_pb.WebsocketSessionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DisconnectWebsocketSessionsInternallyRequest extends jspb.Message {
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): DisconnectWebsocketSessionsInternallyRequest;
  clearUserIdsList(): DisconnectWebsocketSessionsInternallyRequest;
  addUserIds(value: string, index?: number): DisconnectWebsocketSessionsInternallyRequest;

  getSessionIdsList(): Array<string>;
  setSessionIdsList(value: Array<string>): DisconnectWebsocketSessionsInternallyRequest;
  clearSessionIdsList(): DisconnectWebsocketSessionsInternallyRequest;
  addSessionIds(value: string, index?: number): DisconnectWebsocketSessionsInternallyRequest;

  getRoomUserIdsList(): Array<string>;
  setRoomUserIdsList(value: Array<string>): DisconnectWebsocketSessionsInternallyRequest;
  clearRoomUserIdsList(): DisconnectWebsocketSessionsInternallyRequest;
  addRoomUserIds(value: string, index?: number): DisconnectWebsocketSessionsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectWebsocketSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectWebsocketSessionsInternallyRequest): DisconnectWebsocketSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DisconnectWebsocketSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectWebsocketSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: DisconnectWebsocketSessionsInternallyRequest, reader: jspb.BinaryReader): DisconnectWebsocketSessionsInternallyRequest;
}

export namespace DisconnectWebsocketSessionsInternallyRequest {
  export type AsObject = {
    userIdsList: Array<string>,
    sessionIdsList: Array<string>,
    roomUserIdsList: Array<string>,
  }
}

export class DisconnectWebsocketSessionsInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DisconnectWebsocketSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): DisconnectWebsocketSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectWebsocketSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectWebsocketSessionsInternallyResponse): DisconnectWebsocketSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DisconnectWebsocketSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectWebsocketSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: DisconnectWebsocketSessionsInternallyResponse, reader: jspb.BinaryReader): DisconnectWebsocketSessionsInternallyResponse;
}

export namespace DisconnectWebsocketSessionsInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetAndDeleteWebsocketSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAndDeleteWebsocketSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): GetAndDeleteWebsocketSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketSessionInternallyRequest): GetAndDeleteWebsocketSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketSessionInternallyRequest;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketSessionInternallyRequest, reader: jspb.BinaryReader): GetAndDeleteWebsocketSessionInternallyRequest;
}

export namespace GetAndDeleteWebsocketSessionInternallyRequest {
  export type AsObject = {
    id: string,
    roomUserId: string,
  }
}

export class GetAndDeleteWebsocketSessionInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketSessionInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketSessionInfo): GetAndDeleteWebsocketSessionInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetAndDeleteWebsocketSessionInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetAndDeleteWebsocketSessionInternallyResponse;
  hasError(): boolean;
  clearError(): GetAndDeleteWebsocketSessionInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketSessionInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketSessionInternallyResponse): GetAndDeleteWebsocketSessionInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketSessionInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketSessionInternallyResponse;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketSessionInternallyResponse, reader: jspb.BinaryReader): GetAndDeleteWebsocketSessionInternallyResponse;
}

export namespace GetAndDeleteWebsocketSessionInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketSessionInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetWebsocketOfflineSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetWebsocketOfflineSessionInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetWebsocketOfflineSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): GetWebsocketOfflineSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketOfflineSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketOfflineSessionInternallyRequest): GetWebsocketOfflineSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketOfflineSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketOfflineSessionInternallyRequest;
  static deserializeBinaryFromReader(message: GetWebsocketOfflineSessionInternallyRequest, reader: jspb.BinaryReader): GetWebsocketOfflineSessionInternallyRequest;
}

export namespace GetWebsocketOfflineSessionInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    roomUserId: string,
  }
}

export class GetWebsocketOfflineSessionInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketOfflineSessionInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketOfflineSessionInfo): GetWebsocketOfflineSessionInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetWebsocketOfflineSessionInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetWebsocketOfflineSessionInternallyResponse;
  hasError(): boolean;
  clearError(): GetWebsocketOfflineSessionInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWebsocketOfflineSessionInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWebsocketOfflineSessionInternallyResponse): GetWebsocketOfflineSessionInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetWebsocketOfflineSessionInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWebsocketOfflineSessionInternallyResponse;
  static deserializeBinaryFromReader(message: GetWebsocketOfflineSessionInternallyResponse, reader: jspb.BinaryReader): GetWebsocketOfflineSessionInternallyResponse;
}

export namespace GetWebsocketOfflineSessionInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketOfflineSessionInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListWebsocketOfflineSessionsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListWebsocketOfflineSessionsInternallyRequest;
  clearIdsList(): ListWebsocketOfflineSessionsInternallyRequest;
  addIds(value: string, index?: number): ListWebsocketOfflineSessionsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListWebsocketOfflineSessionsInternallyRequest;
  clearUserIdsList(): ListWebsocketOfflineSessionsInternallyRequest;
  addUserIds(value: string, index?: number): ListWebsocketOfflineSessionsInternallyRequest;

  getRoomUserIdsList(): Array<string>;
  setRoomUserIdsList(value: Array<string>): ListWebsocketOfflineSessionsInternallyRequest;
  clearRoomUserIdsList(): ListWebsocketOfflineSessionsInternallyRequest;
  addRoomUserIds(value: string, index?: number): ListWebsocketOfflineSessionsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListWebsocketOfflineSessionsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListWebsocketOfflineSessionsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListWebsocketOfflineSessionsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketOfflineSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketOfflineSessionsInternallyRequest): ListWebsocketOfflineSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketOfflineSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketOfflineSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: ListWebsocketOfflineSessionsInternallyRequest, reader: jspb.BinaryReader): ListWebsocketOfflineSessionsInternallyRequest;
}

export namespace ListWebsocketOfflineSessionsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    roomUserIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListWebsocketOfflineSessionsInternallyResponse extends jspb.Message {
  getSessionsList(): Array<wsgateway_models_pb.WebsocketOfflineSessionInfo>;
  setSessionsList(value: Array<wsgateway_models_pb.WebsocketOfflineSessionInfo>): ListWebsocketOfflineSessionsInternallyResponse;
  clearSessionsList(): ListWebsocketOfflineSessionsInternallyResponse;
  addSessions(value?: wsgateway_models_pb.WebsocketOfflineSessionInfo, index?: number): wsgateway_models_pb.WebsocketOfflineSessionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListWebsocketOfflineSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): ListWebsocketOfflineSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWebsocketOfflineSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWebsocketOfflineSessionsInternallyResponse): ListWebsocketOfflineSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListWebsocketOfflineSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWebsocketOfflineSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: ListWebsocketOfflineSessionsInternallyResponse, reader: jspb.BinaryReader): ListWebsocketOfflineSessionsInternallyResponse;
}

export namespace ListWebsocketOfflineSessionsInternallyResponse {
  export type AsObject = {
    sessionsList: Array<wsgateway_models_pb.WebsocketOfflineSessionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountWebsocketOfflineSessionsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountWebsocketOfflineSessionsInternallyRequest;
  clearIdsList(): CountWebsocketOfflineSessionsInternallyRequest;
  addIds(value: string, index?: number): CountWebsocketOfflineSessionsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountWebsocketOfflineSessionsInternallyRequest;
  clearUserIdsList(): CountWebsocketOfflineSessionsInternallyRequest;
  addUserIds(value: string, index?: number): CountWebsocketOfflineSessionsInternallyRequest;

  getRoomUserIdsList(): Array<string>;
  setRoomUserIdsList(value: Array<string>): CountWebsocketOfflineSessionsInternallyRequest;
  clearRoomUserIdsList(): CountWebsocketOfflineSessionsInternallyRequest;
  addRoomUserIds(value: string, index?: number): CountWebsocketOfflineSessionsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketOfflineSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketOfflineSessionsInternallyRequest): CountWebsocketOfflineSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketOfflineSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketOfflineSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: CountWebsocketOfflineSessionsInternallyRequest, reader: jspb.BinaryReader): CountWebsocketOfflineSessionsInternallyRequest;
}

export namespace CountWebsocketOfflineSessionsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    roomUserIdsList: Array<string>,
  }
}

export class CountWebsocketOfflineSessionsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountWebsocketOfflineSessionsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountWebsocketOfflineSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): CountWebsocketOfflineSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountWebsocketOfflineSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountWebsocketOfflineSessionsInternallyResponse): CountWebsocketOfflineSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountWebsocketOfflineSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountWebsocketOfflineSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: CountWebsocketOfflineSessionsInternallyResponse, reader: jspb.BinaryReader): CountWebsocketOfflineSessionsInternallyResponse;
}

export namespace CountWebsocketOfflineSessionsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateWebsocketOfflineSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateWebsocketOfflineSessionInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateWebsocketOfflineSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): CreateWebsocketOfflineSessionInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateWebsocketOfflineSessionInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateWebsocketOfflineSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketOfflineSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketOfflineSessionInternallyRequest): CreateWebsocketOfflineSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketOfflineSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketOfflineSessionInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketOfflineSessionInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketOfflineSessionInternallyRequest;
}

export namespace CreateWebsocketOfflineSessionInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    roomUserId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateWebsocketOfflineSessionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateWebsocketOfflineSessionInternallyRequest>;
  setRequestsList(value: Array<CreateWebsocketOfflineSessionInternallyRequest>): CreateWebsocketOfflineSessionsInternallyRequest;
  clearRequestsList(): CreateWebsocketOfflineSessionsInternallyRequest;
  addRequests(value?: CreateWebsocketOfflineSessionInternallyRequest, index?: number): CreateWebsocketOfflineSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketOfflineSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketOfflineSessionsInternallyRequest): CreateWebsocketOfflineSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketOfflineSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketOfflineSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateWebsocketOfflineSessionsInternallyRequest, reader: jspb.BinaryReader): CreateWebsocketOfflineSessionsInternallyRequest;
}

export namespace CreateWebsocketOfflineSessionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateWebsocketOfflineSessionInternallyRequest.AsObject>,
  }
}

export class CreateWebsocketOfflineSessionsInternallyResponse extends jspb.Message {
  getSessionsList(): Array<wsgateway_models_pb.WebsocketOfflineSessionInfo>;
  setSessionsList(value: Array<wsgateway_models_pb.WebsocketOfflineSessionInfo>): CreateWebsocketOfflineSessionsInternallyResponse;
  clearSessionsList(): CreateWebsocketOfflineSessionsInternallyResponse;
  addSessions(value?: wsgateway_models_pb.WebsocketOfflineSessionInfo, index?: number): wsgateway_models_pb.WebsocketOfflineSessionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateWebsocketOfflineSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateWebsocketOfflineSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebsocketOfflineSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebsocketOfflineSessionsInternallyResponse): CreateWebsocketOfflineSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebsocketOfflineSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebsocketOfflineSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateWebsocketOfflineSessionsInternallyResponse, reader: jspb.BinaryReader): CreateWebsocketOfflineSessionsInternallyResponse;
}

export namespace CreateWebsocketOfflineSessionsInternallyResponse {
  export type AsObject = {
    sessionsList: Array<wsgateway_models_pb.WebsocketOfflineSessionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteWebsocketOfflineSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteWebsocketOfflineSessionInternallyRequest;

  getUserId(): string;
  setUserId(value: string): DeleteWebsocketOfflineSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): DeleteWebsocketOfflineSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketOfflineSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketOfflineSessionInternallyRequest): DeleteWebsocketOfflineSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketOfflineSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketOfflineSessionInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketOfflineSessionInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketOfflineSessionInternallyRequest;
}

export namespace DeleteWebsocketOfflineSessionInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    roomUserId: string,
  }
}

export class DeleteWebsocketOfflineSessionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteWebsocketOfflineSessionInternallyRequest>;
  setRequestsList(value: Array<DeleteWebsocketOfflineSessionInternallyRequest>): DeleteWebsocketOfflineSessionsInternallyRequest;
  clearRequestsList(): DeleteWebsocketOfflineSessionsInternallyRequest;
  addRequests(value?: DeleteWebsocketOfflineSessionInternallyRequest, index?: number): DeleteWebsocketOfflineSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketOfflineSessionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketOfflineSessionsInternallyRequest): DeleteWebsocketOfflineSessionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketOfflineSessionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketOfflineSessionsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteWebsocketOfflineSessionsInternallyRequest, reader: jspb.BinaryReader): DeleteWebsocketOfflineSessionsInternallyRequest;
}

export namespace DeleteWebsocketOfflineSessionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteWebsocketOfflineSessionInternallyRequest.AsObject>,
  }
}

export class DeleteWebsocketOfflineSessionsInternallyResponse extends jspb.Message {
  getSessionsList(): Array<wsgateway_models_pb.WebsocketOfflineSessionInfo>;
  setSessionsList(value: Array<wsgateway_models_pb.WebsocketOfflineSessionInfo>): DeleteWebsocketOfflineSessionsInternallyResponse;
  clearSessionsList(): DeleteWebsocketOfflineSessionsInternallyResponse;
  addSessions(value?: wsgateway_models_pb.WebsocketOfflineSessionInfo, index?: number): wsgateway_models_pb.WebsocketOfflineSessionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteWebsocketOfflineSessionsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteWebsocketOfflineSessionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWebsocketOfflineSessionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWebsocketOfflineSessionsInternallyResponse): DeleteWebsocketOfflineSessionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWebsocketOfflineSessionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWebsocketOfflineSessionsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteWebsocketOfflineSessionsInternallyResponse, reader: jspb.BinaryReader): DeleteWebsocketOfflineSessionsInternallyResponse;
}

export namespace DeleteWebsocketOfflineSessionsInternallyResponse {
  export type AsObject = {
    sessionsList: Array<wsgateway_models_pb.WebsocketOfflineSessionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetAndDeleteWebsocketOfflineSessionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetAndDeleteWebsocketOfflineSessionInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetAndDeleteWebsocketOfflineSessionInternallyRequest;

  getRoomUserId(): string;
  setRoomUserId(value: string): GetAndDeleteWebsocketOfflineSessionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketOfflineSessionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketOfflineSessionInternallyRequest): GetAndDeleteWebsocketOfflineSessionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketOfflineSessionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketOfflineSessionInternallyRequest;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketOfflineSessionInternallyRequest, reader: jspb.BinaryReader): GetAndDeleteWebsocketOfflineSessionInternallyRequest;
}

export namespace GetAndDeleteWebsocketOfflineSessionInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    roomUserId: string,
  }
}

export class GetAndDeleteWebsocketOfflineSessionInternallyResponse extends jspb.Message {
  getInfo(): wsgateway_models_pb.WebsocketOfflineSessionInfo | undefined;
  setInfo(value?: wsgateway_models_pb.WebsocketOfflineSessionInfo): GetAndDeleteWebsocketOfflineSessionInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetAndDeleteWebsocketOfflineSessionInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetAndDeleteWebsocketOfflineSessionInternallyResponse;
  hasError(): boolean;
  clearError(): GetAndDeleteWebsocketOfflineSessionInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndDeleteWebsocketOfflineSessionInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndDeleteWebsocketOfflineSessionInternallyResponse): GetAndDeleteWebsocketOfflineSessionInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetAndDeleteWebsocketOfflineSessionInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndDeleteWebsocketOfflineSessionInternallyResponse;
  static deserializeBinaryFromReader(message: GetAndDeleteWebsocketOfflineSessionInternallyResponse, reader: jspb.BinaryReader): GetAndDeleteWebsocketOfflineSessionInternallyResponse;
}

export namespace GetAndDeleteWebsocketOfflineSessionInternallyResponse {
  export type AsObject = {
    info?: wsgateway_models_pb.WebsocketOfflineSessionInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

