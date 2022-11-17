import * as jspb from 'google-protobuf'

import * as users_enums_pb from '../users/enums_pb';
import * as users_models_pb from '../users/models_pb';


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

export class UpdateUserNamePacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUserNamePacket;

  getName(): string;
  setName(value: string): UpdateUserNamePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateUserNamePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserNamePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserNamePacket): UpdateUserNamePacket.AsObject;
  static serializeBinaryToWriter(message: UpdateUserNamePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserNamePacket;
  static deserializeBinaryFromReader(message: UpdateUserNamePacket, reader: jspb.BinaryReader): UpdateUserNamePacket;
}

export namespace UpdateUserNamePacket {
  export type AsObject = {
    id: string,
    name: string,
    timestamp: number,
  }
}

export class UpdateUserRolePacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUserRolePacket;

  getRole(): number;
  setRole(value: number): UpdateUserRolePacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateUserRolePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRolePacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRolePacket): UpdateUserRolePacket.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRolePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRolePacket;
  static deserializeBinaryFromReader(message: UpdateUserRolePacket, reader: jspb.BinaryReader): UpdateUserRolePacket;
}

export namespace UpdateUserRolePacket {
  export type AsObject = {
    id: string,
    role: number,
    timestamp: number,
  }
}

export class UpdateUserStatusPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUserStatusPacket;

  getStatus(): users_enums_pb.UserStatus;
  setStatus(value: users_enums_pb.UserStatus): UpdateUserStatusPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateUserStatusPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserStatusPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserStatusPacket): UpdateUserStatusPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateUserStatusPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserStatusPacket;
  static deserializeBinaryFromReader(message: UpdateUserStatusPacket, reader: jspb.BinaryReader): UpdateUserStatusPacket;
}

export namespace UpdateUserStatusPacket {
  export type AsObject = {
    id: string,
    status: users_enums_pb.UserStatus,
    timestamp: number,
  }
}

export class UpdateUserAvatarPacket extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUserAvatarPacket;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): UpdateUserAvatarPacket;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateUserAvatarPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserAvatarPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserAvatarPacket): UpdateUserAvatarPacket.AsObject;
  static serializeBinaryToWriter(message: UpdateUserAvatarPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserAvatarPacket;
  static deserializeBinaryFromReader(message: UpdateUserAvatarPacket, reader: jspb.BinaryReader): UpdateUserAvatarPacket;
}

export namespace UpdateUserAvatarPacket {
  export type AsObject = {
    id: string,
    avatarUrl: string,
    timestamp: number,
  }
}

export class DeleteUserPacket extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserPacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeleteUserPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserPacket): DeleteUserPacket.AsObject;
  static serializeBinaryToWriter(message: DeleteUserPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserPacket;
  static deserializeBinaryFromReader(message: DeleteUserPacket, reader: jspb.BinaryReader): DeleteUserPacket;
}

export namespace DeleteUserPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

export class RefreshUserTokenPacket extends jspb.Message {
  getId(): string;
  setId(value: string): RefreshUserTokenPacket;

  getTimestamp(): number;
  setTimestamp(value: number): RefreshUserTokenPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshUserTokenPacket.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshUserTokenPacket): RefreshUserTokenPacket.AsObject;
  static serializeBinaryToWriter(message: RefreshUserTokenPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshUserTokenPacket;
  static deserializeBinaryFromReader(message: RefreshUserTokenPacket, reader: jspb.BinaryReader): RefreshUserTokenPacket;
}

export namespace RefreshUserTokenPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

export class CreateUserRelationPacket extends jspb.Message {
  getRelation(): users_models_pb.UserRelationInfo | undefined;
  setRelation(value?: users_models_pb.UserRelationInfo): CreateUserRelationPacket;
  hasRelation(): boolean;
  clearRelation(): CreateUserRelationPacket;

  getTimestamp(): number;
  setTimestamp(value: number): CreateUserRelationPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRelationPacket.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRelationPacket): CreateUserRelationPacket.AsObject;
  static serializeBinaryToWriter(message: CreateUserRelationPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRelationPacket;
  static deserializeBinaryFromReader(message: CreateUserRelationPacket, reader: jspb.BinaryReader): CreateUserRelationPacket;
}

export namespace CreateUserRelationPacket {
  export type AsObject = {
    relation?: users_models_pb.UserRelationInfo.AsObject,
    timestamp: number,
  }
}

export class DeleteUserRelationPacket extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserRelationPacket;

  getTimestamp(): number;
  setTimestamp(value: number): DeleteUserRelationPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRelationPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRelationPacket): DeleteUserRelationPacket.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRelationPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRelationPacket;
  static deserializeBinaryFromReader(message: DeleteUserRelationPacket, reader: jspb.BinaryReader): DeleteUserRelationPacket;
}

export namespace DeleteUserRelationPacket {
  export type AsObject = {
    id: string,
    timestamp: number,
  }
}

