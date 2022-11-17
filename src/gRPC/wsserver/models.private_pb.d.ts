import * as jspb from 'google-protobuf'



export class UserToken extends jspb.Message {
  getId(): string;
  setId(value: string): UserToken;

  getName(): string;
  setName(value: string): UserToken;

  getRole(): number;
  setRole(value: number): UserToken;

  getRegion(): string;
  setRegion(value: string): UserToken;

  getAvatar(): string;
  setAvatar(value: string): UserToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserToken.AsObject;
  static toObject(includeInstance: boolean, msg: UserToken): UserToken.AsObject;
  static serializeBinaryToWriter(message: UserToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserToken;
  static deserializeBinaryFromReader(message: UserToken, reader: jspb.BinaryReader): UserToken;
}

export namespace UserToken {
  export type AsObject = {
    id: string,
    name: string,
    role: number,
    region: string,
    avatar: string,
  }
}

export class SessionToken extends jspb.Message {
  getId(): string;
  setId(value: string): SessionToken;

  getUserId(): string;
  setUserId(value: string): SessionToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionToken.AsObject;
  static toObject(includeInstance: boolean, msg: SessionToken): SessionToken.AsObject;
  static serializeBinaryToWriter(message: SessionToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionToken;
  static deserializeBinaryFromReader(message: SessionToken, reader: jspb.BinaryReader): SessionToken;
}

export namespace SessionToken {
  export type AsObject = {
    id: string,
    userId: string,
  }
}

export class RoomUserToken extends jspb.Message {
  getId(): string;
  setId(value: string): RoomUserToken;

  getRoomId(): string;
  setRoomId(value: string): RoomUserToken;

  getUserId(): string;
  setUserId(value: string): RoomUserToken;

  getRole(): number;
  setRole(value: number): RoomUserToken;

  getRegion(): string;
  setRegion(value: string): RoomUserToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserToken.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserToken): RoomUserToken.AsObject;
  static serializeBinaryToWriter(message: RoomUserToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserToken;
  static deserializeBinaryFromReader(message: RoomUserToken, reader: jspb.BinaryReader): RoomUserToken;
}

export namespace RoomUserToken {
  export type AsObject = {
    id: string,
    roomId: string,
    userId: string,
    role: number,
    region: string,
  }
}

export class AuthenticationToken extends jspb.Message {
  getUser(): UserToken | undefined;
  setUser(value?: UserToken): AuthenticationToken;
  hasUser(): boolean;
  clearUser(): AuthenticationToken;

  getSession(): SessionToken | undefined;
  setSession(value?: SessionToken): AuthenticationToken;
  hasSession(): boolean;
  clearSession(): AuthenticationToken;

  getRoomUser(): RoomUserToken | undefined;
  setRoomUser(value?: RoomUserToken): AuthenticationToken;
  hasRoomUser(): boolean;
  clearRoomUser(): AuthenticationToken;

  getTypeCase(): AuthenticationToken.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationToken.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationToken): AuthenticationToken.AsObject;
  static serializeBinaryToWriter(message: AuthenticationToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationToken;
  static deserializeBinaryFromReader(message: AuthenticationToken, reader: jspb.BinaryReader): AuthenticationToken;
}

export namespace AuthenticationToken {
  export type AsObject = {
    user?: UserToken.AsObject,
    session?: SessionToken.AsObject,
    roomUser?: RoomUserToken.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    USER = 1,
    SESSION = 2,
    ROOM_USER = 3,
  }
}

