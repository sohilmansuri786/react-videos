import * as jspb from 'google-protobuf'



export class ClientInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ClientInfo;

  getUserId(): string;
  setUserId(value: string): ClientInfo;

  getRoomId(): string;
  setRoomId(value: string): ClientInfo;

  getRoomUserId(): string;
  setRoomUserId(value: string): ClientInfo;

  getWebsocketId(): string;
  setWebsocketId(value: string): ClientInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ClientInfo): ClientInfo.AsObject;
  static serializeBinaryToWriter(message: ClientInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientInfo;
  static deserializeBinaryFromReader(message: ClientInfo, reader: jspb.BinaryReader): ClientInfo;
}

export namespace ClientInfo {
  export type AsObject = {
    id: string,
    userId: string,
    roomId: string,
    roomUserId: string,
    websocketId: string,
  }
}

