import * as jspb from 'google-protobuf'

import * as wsgateway_enums_pb from '../wsgateway/enums_pb';


export class StringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringValue.AsObject;
  static toObject(includeInstance: boolean, msg: StringValue): StringValue.AsObject;
  static serializeBinaryToWriter(message: StringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringValue;
  static deserializeBinaryFromReader(message: StringValue, reader: jspb.BinaryReader): StringValue;
}

export namespace StringValue {
  export type AsObject = {
    value: string,
  }
}

export class StringArrayValue extends jspb.Message {
  getValueList(): Array<string>;
  setValueList(value: Array<string>): StringArrayValue;
  clearValueList(): StringArrayValue;
  addValue(value: string, index?: number): StringArrayValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: StringArrayValue): StringArrayValue.AsObject;
  static serializeBinaryToWriter(message: StringArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringArrayValue;
  static deserializeBinaryFromReader(message: StringArrayValue, reader: jspb.BinaryReader): StringArrayValue;
}

export namespace StringArrayValue {
  export type AsObject = {
    valueList: Array<string>,
  }
}

export class BooleanValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): BooleanValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BooleanValue.AsObject;
  static toObject(includeInstance: boolean, msg: BooleanValue): BooleanValue.AsObject;
  static serializeBinaryToWriter(message: BooleanValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BooleanValue;
  static deserializeBinaryFromReader(message: BooleanValue, reader: jspb.BinaryReader): BooleanValue;
}

export namespace BooleanValue {
  export type AsObject = {
    value: boolean,
  }
}

export class BooleanArrayValue extends jspb.Message {
  getValueList(): Array<boolean>;
  setValueList(value: Array<boolean>): BooleanArrayValue;
  clearValueList(): BooleanArrayValue;
  addValue(value: boolean, index?: number): BooleanArrayValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BooleanArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: BooleanArrayValue): BooleanArrayValue.AsObject;
  static serializeBinaryToWriter(message: BooleanArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BooleanArrayValue;
  static deserializeBinaryFromReader(message: BooleanArrayValue, reader: jspb.BinaryReader): BooleanArrayValue;
}

export namespace BooleanArrayValue {
  export type AsObject = {
    valueList: Array<boolean>,
  }
}

export class IntegerValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): IntegerValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegerValue.AsObject;
  static toObject(includeInstance: boolean, msg: IntegerValue): IntegerValue.AsObject;
  static serializeBinaryToWriter(message: IntegerValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegerValue;
  static deserializeBinaryFromReader(message: IntegerValue, reader: jspb.BinaryReader): IntegerValue;
}

export namespace IntegerValue {
  export type AsObject = {
    value: number,
  }
}

export class IntegerArrayValue extends jspb.Message {
  getValueList(): Array<number>;
  setValueList(value: Array<number>): IntegerArrayValue;
  clearValueList(): IntegerArrayValue;
  addValue(value: number, index?: number): IntegerArrayValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegerArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: IntegerArrayValue): IntegerArrayValue.AsObject;
  static serializeBinaryToWriter(message: IntegerArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegerArrayValue;
  static deserializeBinaryFromReader(message: IntegerArrayValue, reader: jspb.BinaryReader): IntegerArrayValue;
}

export namespace IntegerArrayValue {
  export type AsObject = {
    valueList: Array<number>,
  }
}

export class SfuInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SfuInfo;

  getType(): wsgateway_enums_pb.SfuType;
  setType(value: wsgateway_enums_pb.SfuType): SfuInfo;

  getStatus(): wsgateway_enums_pb.SfuStatus;
  setStatus(value: wsgateway_enums_pb.SfuStatus): SfuInfo;

  getRegion(): string;
  setRegion(value: string): SfuInfo;

  getAddress(): string;
  setAddress(value: string): SfuInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): SfuInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SfuInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SfuInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SfuInfo): SfuInfo.AsObject;
  static serializeBinaryToWriter(message: SfuInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SfuInfo;
  static deserializeBinaryFromReader(message: SfuInfo, reader: jspb.BinaryReader): SfuInfo;
}

export namespace SfuInfo {
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

export class SfuUserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): SfuUserInfo;

  getSfuId(): string;
  setSfuId(value: string): SfuUserInfo;

  getUserId(): string;
  setUserId(value: string): SfuUserInfo;

  getRoomId(): string;
  setRoomId(value: string): SfuUserInfo;

  getSessionId(): string;
  setSessionId(value: string): SfuUserInfo;

  getStatus(): wsgateway_enums_pb.SfuUserStatus;
  setStatus(value: wsgateway_enums_pb.SfuUserStatus): SfuUserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): SfuUserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): SfuUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SfuUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SfuUserInfo): SfuUserInfo.AsObject;
  static serializeBinaryToWriter(message: SfuUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SfuUserInfo;
  static deserializeBinaryFromReader(message: SfuUserInfo, reader: jspb.BinaryReader): SfuUserInfo;
}

export namespace SfuUserInfo {
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

export class WebsocketInfo extends jspb.Message {
  getId(): string;
  setId(value: string): WebsocketInfo;

  getStatus(): wsgateway_enums_pb.WebsocketStatus;
  setStatus(value: wsgateway_enums_pb.WebsocketStatus): WebsocketInfo;

  getRegion(): string;
  setRegion(value: string): WebsocketInfo;

  getAddress(): string;
  setAddress(value: string): WebsocketInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): WebsocketInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): WebsocketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketInfo): WebsocketInfo.AsObject;
  static serializeBinaryToWriter(message: WebsocketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketInfo;
  static deserializeBinaryFromReader(message: WebsocketInfo, reader: jspb.BinaryReader): WebsocketInfo;
}

export namespace WebsocketInfo {
  export type AsObject = {
    id: string,
    status: wsgateway_enums_pb.WebsocketStatus,
    region: string,
    address: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class WebsocketRoomInfo extends jspb.Message {
  getId(): string;
  setId(value: string): WebsocketRoomInfo;

  getRoomId(): string;
  setRoomId(value: string): WebsocketRoomInfo;

  getWebsocketId(): string;
  setWebsocketId(value: string): WebsocketRoomInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): WebsocketRoomInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): WebsocketRoomInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketRoomInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketRoomInfo): WebsocketRoomInfo.AsObject;
  static serializeBinaryToWriter(message: WebsocketRoomInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketRoomInfo;
  static deserializeBinaryFromReader(message: WebsocketRoomInfo, reader: jspb.BinaryReader): WebsocketRoomInfo;
}

export namespace WebsocketRoomInfo {
  export type AsObject = {
    id: string,
    roomId: string,
    websocketId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class WebsocketEventInfo extends jspb.Message {
  getId(): string;
  setId(value: string): WebsocketEventInfo;

  getEventId(): string;
  setEventId(value: string): WebsocketEventInfo;

  getWebsocketId(): string;
  setWebsocketId(value: string): WebsocketEventInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): WebsocketEventInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): WebsocketEventInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketEventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketEventInfo): WebsocketEventInfo.AsObject;
  static serializeBinaryToWriter(message: WebsocketEventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketEventInfo;
  static deserializeBinaryFromReader(message: WebsocketEventInfo, reader: jspb.BinaryReader): WebsocketEventInfo;
}

export namespace WebsocketEventInfo {
  export type AsObject = {
    id: string,
    eventId: string,
    websocketId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class WebsocketSessionInfo extends jspb.Message {
  getId(): string;
  setId(value: string): WebsocketSessionInfo;

  getUserId(): string;
  setUserId(value: string): WebsocketSessionInfo;

  getRoomUserId(): string;
  setRoomUserId(value: string): WebsocketSessionInfo;

  getWebsocketId(): string;
  setWebsocketId(value: string): WebsocketSessionInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): WebsocketSessionInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): WebsocketSessionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketSessionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketSessionInfo): WebsocketSessionInfo.AsObject;
  static serializeBinaryToWriter(message: WebsocketSessionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketSessionInfo;
  static deserializeBinaryFromReader(message: WebsocketSessionInfo, reader: jspb.BinaryReader): WebsocketSessionInfo;
}

export namespace WebsocketSessionInfo {
  export type AsObject = {
    id: string,
    userId: string,
    roomUserId: string,
    websocketId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class WebsocketOfflineSessionInfo extends jspb.Message {
  getId(): string;
  setId(value: string): WebsocketOfflineSessionInfo;

  getUserId(): string;
  setUserId(value: string): WebsocketOfflineSessionInfo;

  getRoomUserId(): string;
  setRoomUserId(value: string): WebsocketOfflineSessionInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): WebsocketOfflineSessionInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): WebsocketOfflineSessionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsocketOfflineSessionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebsocketOfflineSessionInfo): WebsocketOfflineSessionInfo.AsObject;
  static serializeBinaryToWriter(message: WebsocketOfflineSessionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsocketOfflineSessionInfo;
  static deserializeBinaryFromReader(message: WebsocketOfflineSessionInfo, reader: jspb.BinaryReader): WebsocketOfflineSessionInfo;
}

export namespace WebsocketOfflineSessionInfo {
  export type AsObject = {
    id: string,
    userId: string,
    roomUserId: string,
    createdAt: number,
    updatedAt: number,
  }
}

