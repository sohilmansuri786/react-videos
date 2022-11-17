import * as jspb from 'google-protobuf'

import * as users_enums_pb from '../users/enums_pb';
import * as users_models_pb from '../users/models_pb';
import * as error_models_pb from '../error/models_pb';


export class GetChatInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatInternallyRequest): GetChatInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatInternallyRequest;
  static deserializeBinaryFromReader(message: GetChatInternallyRequest, reader: jspb.BinaryReader): GetChatInternallyRequest;
}

export namespace GetChatInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetChatInternallyResponse extends jspb.Message {
  getInfo(): users_models_pb.ChatInfo | undefined;
  setInfo(value?: users_models_pb.ChatInfo): GetChatInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetChatInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetChatInternallyResponse;
  hasError(): boolean;
  clearError(): GetChatInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatInternallyResponse): GetChatInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetChatInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatInternallyResponse;
  static deserializeBinaryFromReader(message: GetChatInternallyResponse, reader: jspb.BinaryReader): GetChatInternallyResponse;
}

export namespace GetChatInternallyResponse {
  export type AsObject = {
    info?: users_models_pb.ChatInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListChatsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListChatsInternallyRequest;
  clearIdsList(): ListChatsInternallyRequest;
  addIds(value: string, index?: number): ListChatsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListChatsInternallyRequest;
  clearUserIdsList(): ListChatsInternallyRequest;
  addUserIds(value: string, index?: number): ListChatsInternallyRequest;

  getTypesList(): Array<users_enums_pb.ChatType>;
  setTypesList(value: Array<users_enums_pb.ChatType>): ListChatsInternallyRequest;
  clearTypesList(): ListChatsInternallyRequest;
  addTypes(value: users_enums_pb.ChatType, index?: number): ListChatsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListChatsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListChatsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListChatsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatsInternallyRequest): ListChatsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListChatsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatsInternallyRequest;
  static deserializeBinaryFromReader(message: ListChatsInternallyRequest, reader: jspb.BinaryReader): ListChatsInternallyRequest;
}

export namespace ListChatsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    typesList: Array<users_enums_pb.ChatType>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListChatsInternallyResponse extends jspb.Message {
  getChatsList(): Array<users_models_pb.ChatInfo>;
  setChatsList(value: Array<users_models_pb.ChatInfo>): ListChatsInternallyResponse;
  clearChatsList(): ListChatsInternallyResponse;
  addChats(value?: users_models_pb.ChatInfo, index?: number): users_models_pb.ChatInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListChatsInternallyResponse;
  hasError(): boolean;
  clearError(): ListChatsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatsInternallyResponse): ListChatsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListChatsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatsInternallyResponse;
  static deserializeBinaryFromReader(message: ListChatsInternallyResponse, reader: jspb.BinaryReader): ListChatsInternallyResponse;
}

export namespace ListChatsInternallyResponse {
  export type AsObject = {
    chatsList: Array<users_models_pb.ChatInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountChatsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountChatsInternallyRequest;
  clearIdsList(): CountChatsInternallyRequest;
  addIds(value: string, index?: number): CountChatsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountChatsInternallyRequest;
  clearUserIdsList(): CountChatsInternallyRequest;
  addUserIds(value: string, index?: number): CountChatsInternallyRequest;

  getTypesList(): Array<users_enums_pb.ChatType>;
  setTypesList(value: Array<users_enums_pb.ChatType>): CountChatsInternallyRequest;
  clearTypesList(): CountChatsInternallyRequest;
  addTypes(value: users_enums_pb.ChatType, index?: number): CountChatsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatsInternallyRequest): CountChatsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountChatsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatsInternallyRequest;
  static deserializeBinaryFromReader(message: CountChatsInternallyRequest, reader: jspb.BinaryReader): CountChatsInternallyRequest;
}

export namespace CountChatsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    typesList: Array<users_enums_pb.ChatType>,
  }
}

export class CountChatsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountChatsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountChatsInternallyResponse;
  hasError(): boolean;
  clearError(): CountChatsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatsInternallyResponse): CountChatsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountChatsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatsInternallyResponse;
  static deserializeBinaryFromReader(message: CountChatsInternallyResponse, reader: jspb.BinaryReader): CountChatsInternallyResponse;
}

export namespace CountChatsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateChatInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateChatInternallyRequest;

  getType(): users_enums_pb.ChatType;
  setType(value: users_enums_pb.ChatType): CreateChatInternallyRequest;

  getCreatedat(): number;
  setCreatedat(value: number): CreateChatInternallyRequest;

  getUpdatedat(): number;
  setUpdatedat(value: number): CreateChatInternallyRequest;

  getUsersList(): Array<CreateChatUserInternallyRequest>;
  setUsersList(value: Array<CreateChatUserInternallyRequest>): CreateChatInternallyRequest;
  clearUsersList(): CreateChatInternallyRequest;
  addUsers(value?: CreateChatUserInternallyRequest, index?: number): CreateChatUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatInternallyRequest): CreateChatInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChatInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatInternallyRequest;
  static deserializeBinaryFromReader(message: CreateChatInternallyRequest, reader: jspb.BinaryReader): CreateChatInternallyRequest;
}

export namespace CreateChatInternallyRequest {
  export type AsObject = {
    id: string,
    type: users_enums_pb.ChatType,
    createdat: number,
    updatedat: number,
    usersList: Array<CreateChatUserInternallyRequest.AsObject>,
  }
}

export class CreateChatsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateChatInternallyRequest>;
  setRequestsList(value: Array<CreateChatInternallyRequest>): CreateChatsInternallyRequest;
  clearRequestsList(): CreateChatsInternallyRequest;
  addRequests(value?: CreateChatInternallyRequest, index?: number): CreateChatInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatsInternallyRequest): CreateChatsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChatsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateChatsInternallyRequest, reader: jspb.BinaryReader): CreateChatsInternallyRequest;
}

export namespace CreateChatsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateChatInternallyRequest.AsObject>,
  }
}

export class CreateChatsInternallyResponse extends jspb.Message {
  getChatsList(): Array<users_models_pb.ChatInfo>;
  setChatsList(value: Array<users_models_pb.ChatInfo>): CreateChatsInternallyResponse;
  clearChatsList(): CreateChatsInternallyResponse;
  addChats(value?: users_models_pb.ChatInfo, index?: number): users_models_pb.ChatInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateChatsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateChatsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatsInternallyResponse): CreateChatsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateChatsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateChatsInternallyResponse, reader: jspb.BinaryReader): CreateChatsInternallyResponse;
}

export namespace CreateChatsInternallyResponse {
  export type AsObject = {
    chatsList: Array<users_models_pb.ChatInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteChatInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteChatInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatInternallyRequest): DeleteChatInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChatInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteChatInternallyRequest, reader: jspb.BinaryReader): DeleteChatInternallyRequest;
}

export namespace DeleteChatInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteChatsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteChatInternallyRequest>;
  setRequestsList(value: Array<DeleteChatInternallyRequest>): DeleteChatsInternallyRequest;
  clearRequestsList(): DeleteChatsInternallyRequest;
  addRequests(value?: DeleteChatInternallyRequest, index?: number): DeleteChatInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatsInternallyRequest): DeleteChatsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChatsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteChatsInternallyRequest, reader: jspb.BinaryReader): DeleteChatsInternallyRequest;
}

export namespace DeleteChatsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteChatInternallyRequest.AsObject>,
  }
}

export class DeleteChatsInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteChatsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteChatsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatsInternallyResponse): DeleteChatsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteChatsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteChatsInternallyResponse, reader: jspb.BinaryReader): DeleteChatsInternallyResponse;
}

export namespace DeleteChatsInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetChatUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatUserInternallyRequest;

  getChatId(): string;
  setChatId(value: string): GetChatUserInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetChatUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatUserInternallyRequest): GetChatUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatUserInternallyRequest;
  static deserializeBinaryFromReader(message: GetChatUserInternallyRequest, reader: jspb.BinaryReader): GetChatUserInternallyRequest;
}

export namespace GetChatUserInternallyRequest {
  export type AsObject = {
    id: string,
    chatId: string,
    userId: string,
  }
}

export class GetChatUserInternallyResponse extends jspb.Message {
  getInfo(): users_models_pb.ChatUserInfo | undefined;
  setInfo(value?: users_models_pb.ChatUserInfo): GetChatUserInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetChatUserInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetChatUserInternallyResponse;
  hasError(): boolean;
  clearError(): GetChatUserInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatUserInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatUserInternallyResponse): GetChatUserInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetChatUserInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatUserInternallyResponse;
  static deserializeBinaryFromReader(message: GetChatUserInternallyResponse, reader: jspb.BinaryReader): GetChatUserInternallyResponse;
}

export namespace GetChatUserInternallyResponse {
  export type AsObject = {
    info?: users_models_pb.ChatUserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListChatUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListChatUsersInternallyRequest;
  clearIdsList(): ListChatUsersInternallyRequest;
  addIds(value: string, index?: number): ListChatUsersInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): ListChatUsersInternallyRequest;
  clearChatIdsList(): ListChatUsersInternallyRequest;
  addChatIds(value: string, index?: number): ListChatUsersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListChatUsersInternallyRequest;
  clearUserIdsList(): ListChatUsersInternallyRequest;
  addUserIds(value: string, index?: number): ListChatUsersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListChatUsersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListChatUsersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListChatUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatUsersInternallyRequest): ListChatUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListChatUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatUsersInternallyRequest;
  static deserializeBinaryFromReader(message: ListChatUsersInternallyRequest, reader: jspb.BinaryReader): ListChatUsersInternallyRequest;
}

export namespace ListChatUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListChatUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<users_models_pb.ChatUserInfo>;
  setUsersList(value: Array<users_models_pb.ChatUserInfo>): ListChatUsersInternallyResponse;
  clearUsersList(): ListChatUsersInternallyResponse;
  addUsers(value?: users_models_pb.ChatUserInfo, index?: number): users_models_pb.ChatUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListChatUsersInternallyResponse;
  hasError(): boolean;
  clearError(): ListChatUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatUsersInternallyResponse): ListChatUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListChatUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatUsersInternallyResponse;
  static deserializeBinaryFromReader(message: ListChatUsersInternallyResponse, reader: jspb.BinaryReader): ListChatUsersInternallyResponse;
}

export namespace ListChatUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<users_models_pb.ChatUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountChatUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountChatUsersInternallyRequest;
  clearIdsList(): CountChatUsersInternallyRequest;
  addIds(value: string, index?: number): CountChatUsersInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): CountChatUsersInternallyRequest;
  clearChatIdsList(): CountChatUsersInternallyRequest;
  addChatIds(value: string, index?: number): CountChatUsersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountChatUsersInternallyRequest;
  clearUserIdsList(): CountChatUsersInternallyRequest;
  addUserIds(value: string, index?: number): CountChatUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatUsersInternallyRequest): CountChatUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountChatUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatUsersInternallyRequest;
  static deserializeBinaryFromReader(message: CountChatUsersInternallyRequest, reader: jspb.BinaryReader): CountChatUsersInternallyRequest;
}

export namespace CountChatUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
  }
}

export class CountChatUsersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountChatUsersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountChatUsersInternallyResponse;
  hasError(): boolean;
  clearError(): CountChatUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatUsersInternallyResponse): CountChatUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountChatUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatUsersInternallyResponse;
  static deserializeBinaryFromReader(message: CountChatUsersInternallyResponse, reader: jspb.BinaryReader): CountChatUsersInternallyResponse;
}

export namespace CountChatUsersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateChatUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateChatUserInternallyRequest;

  getChatId(): string;
  setChatId(value: string): CreateChatUserInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateChatUserInternallyRequest;

  getCreatedat(): number;
  setCreatedat(value: number): CreateChatUserInternallyRequest;

  getUpdatedat(): number;
  setUpdatedat(value: number): CreateChatUserInternallyRequest;

  getMessagesList(): Array<CreateChatMessageInternallyRequest>;
  setMessagesList(value: Array<CreateChatMessageInternallyRequest>): CreateChatUserInternallyRequest;
  clearMessagesList(): CreateChatUserInternallyRequest;
  addMessages(value?: CreateChatMessageInternallyRequest, index?: number): CreateChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatUserInternallyRequest): CreateChatUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChatUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatUserInternallyRequest;
  static deserializeBinaryFromReader(message: CreateChatUserInternallyRequest, reader: jspb.BinaryReader): CreateChatUserInternallyRequest;
}

export namespace CreateChatUserInternallyRequest {
  export type AsObject = {
    id: string,
    chatId: string,
    userId: string,
    createdat: number,
    updatedat: number,
    messagesList: Array<CreateChatMessageInternallyRequest.AsObject>,
  }
}

export class CreateChatUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateChatUserInternallyRequest>;
  setRequestsList(value: Array<CreateChatUserInternallyRequest>): CreateChatUsersInternallyRequest;
  clearRequestsList(): CreateChatUsersInternallyRequest;
  addRequests(value?: CreateChatUserInternallyRequest, index?: number): CreateChatUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatUsersInternallyRequest): CreateChatUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChatUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatUsersInternallyRequest;
  static deserializeBinaryFromReader(message: CreateChatUsersInternallyRequest, reader: jspb.BinaryReader): CreateChatUsersInternallyRequest;
}

export namespace CreateChatUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateChatUserInternallyRequest.AsObject>,
  }
}

export class CreateChatUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<users_models_pb.ChatUserInfo>;
  setUsersList(value: Array<users_models_pb.ChatUserInfo>): CreateChatUsersInternallyResponse;
  clearUsersList(): CreateChatUsersInternallyResponse;
  addUsers(value?: users_models_pb.ChatUserInfo, index?: number): users_models_pb.ChatUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateChatUsersInternallyResponse;
  hasError(): boolean;
  clearError(): CreateChatUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatUsersInternallyResponse): CreateChatUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateChatUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatUsersInternallyResponse;
  static deserializeBinaryFromReader(message: CreateChatUsersInternallyResponse, reader: jspb.BinaryReader): CreateChatUsersInternallyResponse;
}

export namespace CreateChatUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<users_models_pb.ChatUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteChatUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteChatUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatUserInternallyRequest): DeleteChatUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChatUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatUserInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteChatUserInternallyRequest, reader: jspb.BinaryReader): DeleteChatUserInternallyRequest;
}

export namespace DeleteChatUserInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteChatUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteChatUserInternallyRequest>;
  setRequestsList(value: Array<DeleteChatUserInternallyRequest>): DeleteChatUsersInternallyRequest;
  clearRequestsList(): DeleteChatUsersInternallyRequest;
  addRequests(value?: DeleteChatUserInternallyRequest, index?: number): DeleteChatUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatUsersInternallyRequest): DeleteChatUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChatUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatUsersInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteChatUsersInternallyRequest, reader: jspb.BinaryReader): DeleteChatUsersInternallyRequest;
}

export namespace DeleteChatUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteChatUserInternallyRequest.AsObject>,
  }
}

export class DeleteChatUsersInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteChatUsersInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteChatUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatUsersInternallyResponse): DeleteChatUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteChatUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatUsersInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteChatUsersInternallyResponse, reader: jspb.BinaryReader): DeleteChatUsersInternallyResponse;
}

export namespace DeleteChatUsersInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetChatMessageInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessageInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessageInternallyRequest): GetChatMessageInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatMessageInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessageInternallyRequest;
  static deserializeBinaryFromReader(message: GetChatMessageInternallyRequest, reader: jspb.BinaryReader): GetChatMessageInternallyRequest;
}

export namespace GetChatMessageInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetChatMessageInternallyResponse extends jspb.Message {
  getInfo(): users_models_pb.ChatMessageInfo | undefined;
  setInfo(value?: users_models_pb.ChatMessageInfo): GetChatMessageInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetChatMessageInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetChatMessageInternallyResponse;
  hasError(): boolean;
  clearError(): GetChatMessageInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessageInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessageInternallyResponse): GetChatMessageInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetChatMessageInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessageInternallyResponse;
  static deserializeBinaryFromReader(message: GetChatMessageInternallyResponse, reader: jspb.BinaryReader): GetChatMessageInternallyResponse;
}

export namespace GetChatMessageInternallyResponse {
  export type AsObject = {
    info?: users_models_pb.ChatMessageInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListChatMessagesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListChatMessagesInternallyRequest;
  clearIdsList(): ListChatMessagesInternallyRequest;
  addIds(value: string, index?: number): ListChatMessagesInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): ListChatMessagesInternallyRequest;
  clearChatIdsList(): ListChatMessagesInternallyRequest;
  addChatIds(value: string, index?: number): ListChatMessagesInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListChatMessagesInternallyRequest;
  clearUserIdsList(): ListChatMessagesInternallyRequest;
  addUserIds(value: string, index?: number): ListChatMessagesInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListChatMessagesInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListChatMessagesInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListChatMessagesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatMessagesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatMessagesInternallyRequest): ListChatMessagesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListChatMessagesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatMessagesInternallyRequest;
  static deserializeBinaryFromReader(message: ListChatMessagesInternallyRequest, reader: jspb.BinaryReader): ListChatMessagesInternallyRequest;
}

export namespace ListChatMessagesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListChatMessagesInternallyResponse extends jspb.Message {
  getMessagesList(): Array<users_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<users_models_pb.ChatMessageInfo>): ListChatMessagesInternallyResponse;
  clearMessagesList(): ListChatMessagesInternallyResponse;
  addMessages(value?: users_models_pb.ChatMessageInfo, index?: number): users_models_pb.ChatMessageInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListChatMessagesInternallyResponse;
  hasError(): boolean;
  clearError(): ListChatMessagesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatMessagesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatMessagesInternallyResponse): ListChatMessagesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListChatMessagesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatMessagesInternallyResponse;
  static deserializeBinaryFromReader(message: ListChatMessagesInternallyResponse, reader: jspb.BinaryReader): ListChatMessagesInternallyResponse;
}

export namespace ListChatMessagesInternallyResponse {
  export type AsObject = {
    messagesList: Array<users_models_pb.ChatMessageInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountChatMessagesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountChatMessagesInternallyRequest;
  clearIdsList(): CountChatMessagesInternallyRequest;
  addIds(value: string, index?: number): CountChatMessagesInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): CountChatMessagesInternallyRequest;
  clearChatIdsList(): CountChatMessagesInternallyRequest;
  addChatIds(value: string, index?: number): CountChatMessagesInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountChatMessagesInternallyRequest;
  clearUserIdsList(): CountChatMessagesInternallyRequest;
  addUserIds(value: string, index?: number): CountChatMessagesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatMessagesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatMessagesInternallyRequest): CountChatMessagesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountChatMessagesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatMessagesInternallyRequest;
  static deserializeBinaryFromReader(message: CountChatMessagesInternallyRequest, reader: jspb.BinaryReader): CountChatMessagesInternallyRequest;
}

export namespace CountChatMessagesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
  }
}

export class CountChatMessagesInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountChatMessagesInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountChatMessagesInternallyResponse;
  hasError(): boolean;
  clearError(): CountChatMessagesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatMessagesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatMessagesInternallyResponse): CountChatMessagesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountChatMessagesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatMessagesInternallyResponse;
  static deserializeBinaryFromReader(message: CountChatMessagesInternallyResponse, reader: jspb.BinaryReader): CountChatMessagesInternallyResponse;
}

export namespace CountChatMessagesInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateChatMessageInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateChatMessageInternallyRequest;

  getChatId(): string;
  setChatId(value: string): CreateChatMessageInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateChatMessageInternallyRequest;

  getName(): string;
  setName(value: string): CreateChatMessageInternallyRequest;

  getRole(): number;
  setRole(value: number): CreateChatMessageInternallyRequest;

  getContent(): string;
  setContent(value: string): CreateChatMessageInternallyRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): CreateChatMessageInternallyRequest;

  getCreatedat(): number;
  setCreatedat(value: number): CreateChatMessageInternallyRequest;

  getUpdatedat(): number;
  setUpdatedat(value: number): CreateChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatMessageInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatMessageInternallyRequest): CreateChatMessageInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChatMessageInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatMessageInternallyRequest;
  static deserializeBinaryFromReader(message: CreateChatMessageInternallyRequest, reader: jspb.BinaryReader): CreateChatMessageInternallyRequest;
}

export namespace CreateChatMessageInternallyRequest {
  export type AsObject = {
    id: string,
    chatId: string,
    userId: string,
    name: string,
    role: number,
    content: string,
    avatarUrl: string,
    createdat: number,
    updatedat: number,
  }
}

export class CreateChatMessagesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateChatMessageInternallyRequest>;
  setRequestsList(value: Array<CreateChatMessageInternallyRequest>): CreateChatMessagesInternallyRequest;
  clearRequestsList(): CreateChatMessagesInternallyRequest;
  addRequests(value?: CreateChatMessageInternallyRequest, index?: number): CreateChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatMessagesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatMessagesInternallyRequest): CreateChatMessagesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChatMessagesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatMessagesInternallyRequest;
  static deserializeBinaryFromReader(message: CreateChatMessagesInternallyRequest, reader: jspb.BinaryReader): CreateChatMessagesInternallyRequest;
}

export namespace CreateChatMessagesInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateChatMessageInternallyRequest.AsObject>,
  }
}

export class CreateChatMessagesInternallyResponse extends jspb.Message {
  getMessagesList(): Array<users_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<users_models_pb.ChatMessageInfo>): CreateChatMessagesInternallyResponse;
  clearMessagesList(): CreateChatMessagesInternallyResponse;
  addMessages(value?: users_models_pb.ChatMessageInfo, index?: number): users_models_pb.ChatMessageInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateChatMessagesInternallyResponse;
  hasError(): boolean;
  clearError(): CreateChatMessagesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatMessagesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatMessagesInternallyResponse): CreateChatMessagesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateChatMessagesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatMessagesInternallyResponse;
  static deserializeBinaryFromReader(message: CreateChatMessagesInternallyResponse, reader: jspb.BinaryReader): CreateChatMessagesInternallyResponse;
}

export namespace CreateChatMessagesInternallyResponse {
  export type AsObject = {
    messagesList: Array<users_models_pb.ChatMessageInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateChatMessageInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateChatMessageInternallyRequest;

  getContent(): users_models_pb.ChatMessageContentValue | undefined;
  setContent(value?: users_models_pb.ChatMessageContentValue): UpdateChatMessageInternallyRequest;
  hasContent(): boolean;
  clearContent(): UpdateChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatMessageInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatMessageInternallyRequest): UpdateChatMessageInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChatMessageInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatMessageInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateChatMessageInternallyRequest, reader: jspb.BinaryReader): UpdateChatMessageInternallyRequest;
}

export namespace UpdateChatMessageInternallyRequest {
  export type AsObject = {
    id: string,
    content?: users_models_pb.ChatMessageContentValue.AsObject,
  }
}

export class UpdateChatMessagesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateChatMessageInternallyRequest>;
  setRequestsList(value: Array<UpdateChatMessageInternallyRequest>): UpdateChatMessagesInternallyRequest;
  clearRequestsList(): UpdateChatMessagesInternallyRequest;
  addRequests(value?: UpdateChatMessageInternallyRequest, index?: number): UpdateChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatMessagesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatMessagesInternallyRequest): UpdateChatMessagesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChatMessagesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatMessagesInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateChatMessagesInternallyRequest, reader: jspb.BinaryReader): UpdateChatMessagesInternallyRequest;
}

export namespace UpdateChatMessagesInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateChatMessageInternallyRequest.AsObject>,
  }
}

export class UpdateChatMessagesInternallyResponse extends jspb.Message {
  getMessagesList(): Array<users_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<users_models_pb.ChatMessageInfo>): UpdateChatMessagesInternallyResponse;
  clearMessagesList(): UpdateChatMessagesInternallyResponse;
  addMessages(value?: users_models_pb.ChatMessageInfo, index?: number): users_models_pb.ChatMessageInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateChatMessagesInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateChatMessagesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatMessagesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatMessagesInternallyResponse): UpdateChatMessagesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateChatMessagesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatMessagesInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateChatMessagesInternallyResponse, reader: jspb.BinaryReader): UpdateChatMessagesInternallyResponse;
}

export namespace UpdateChatMessagesInternallyResponse {
  export type AsObject = {
    messagesList: Array<users_models_pb.ChatMessageInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteChatMessageInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatMessageInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatMessageInternallyRequest): DeleteChatMessageInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChatMessageInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatMessageInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteChatMessageInternallyRequest, reader: jspb.BinaryReader): DeleteChatMessageInternallyRequest;
}

export namespace DeleteChatMessageInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteChatMessagesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteChatMessageInternallyRequest>;
  setRequestsList(value: Array<DeleteChatMessageInternallyRequest>): DeleteChatMessagesInternallyRequest;
  clearRequestsList(): DeleteChatMessagesInternallyRequest;
  addRequests(value?: DeleteChatMessageInternallyRequest, index?: number): DeleteChatMessageInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatMessagesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatMessagesInternallyRequest): DeleteChatMessagesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChatMessagesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatMessagesInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteChatMessagesInternallyRequest, reader: jspb.BinaryReader): DeleteChatMessagesInternallyRequest;
}

export namespace DeleteChatMessagesInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteChatMessageInternallyRequest.AsObject>,
  }
}

export class DeleteChatMessagesInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteChatMessagesInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteChatMessagesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatMessagesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatMessagesInternallyResponse): DeleteChatMessagesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteChatMessagesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatMessagesInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteChatMessagesInternallyResponse, reader: jspb.BinaryReader): DeleteChatMessagesInternallyResponse;
}

export namespace DeleteChatMessagesInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetLocaleInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetLocaleInternallyRequest;

  getIp(): string;
  setIp(value: string): GetLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocaleInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocaleInternallyRequest): GetLocaleInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetLocaleInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocaleInternallyRequest;
  static deserializeBinaryFromReader(message: GetLocaleInternallyRequest, reader: jspb.BinaryReader): GetLocaleInternallyRequest;
}

export namespace GetLocaleInternallyRequest {
  export type AsObject = {
    id: string,
    ip: string,
  }
}

export class GetLocaleInternallyResponse extends jspb.Message {
  getInfo(): users_models_pb.LocaleInfo | undefined;
  setInfo(value?: users_models_pb.LocaleInfo): GetLocaleInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetLocaleInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetLocaleInternallyResponse;
  hasError(): boolean;
  clearError(): GetLocaleInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocaleInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocaleInternallyResponse): GetLocaleInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetLocaleInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocaleInternallyResponse;
  static deserializeBinaryFromReader(message: GetLocaleInternallyResponse, reader: jspb.BinaryReader): GetLocaleInternallyResponse;
}

export namespace GetLocaleInternallyResponse {
  export type AsObject = {
    info?: users_models_pb.LocaleInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListLocalesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListLocalesInternallyRequest;
  clearIdsList(): ListLocalesInternallyRequest;
  addIds(value: string, index?: number): ListLocalesInternallyRequest;

  getIpsList(): Array<string>;
  setIpsList(value: Array<string>): ListLocalesInternallyRequest;
  clearIpsList(): ListLocalesInternallyRequest;
  addIps(value: string, index?: number): ListLocalesInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListLocalesInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListLocalesInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListLocalesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocalesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocalesInternallyRequest): ListLocalesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListLocalesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocalesInternallyRequest;
  static deserializeBinaryFromReader(message: ListLocalesInternallyRequest, reader: jspb.BinaryReader): ListLocalesInternallyRequest;
}

export namespace ListLocalesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    ipsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListLocalesInternallyResponse extends jspb.Message {
  getLocalesList(): Array<users_models_pb.LocaleInfo>;
  setLocalesList(value: Array<users_models_pb.LocaleInfo>): ListLocalesInternallyResponse;
  clearLocalesList(): ListLocalesInternallyResponse;
  addLocales(value?: users_models_pb.LocaleInfo, index?: number): users_models_pb.LocaleInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListLocalesInternallyResponse;
  hasError(): boolean;
  clearError(): ListLocalesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocalesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocalesInternallyResponse): ListLocalesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListLocalesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocalesInternallyResponse;
  static deserializeBinaryFromReader(message: ListLocalesInternallyResponse, reader: jspb.BinaryReader): ListLocalesInternallyResponse;
}

export namespace ListLocalesInternallyResponse {
  export type AsObject = {
    localesList: Array<users_models_pb.LocaleInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountLocalesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountLocalesInternallyRequest;
  clearIdsList(): CountLocalesInternallyRequest;
  addIds(value: string, index?: number): CountLocalesInternallyRequest;

  getIpsList(): Array<string>;
  setIpsList(value: Array<string>): CountLocalesInternallyRequest;
  clearIpsList(): CountLocalesInternallyRequest;
  addIps(value: string, index?: number): CountLocalesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountLocalesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountLocalesInternallyRequest): CountLocalesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountLocalesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountLocalesInternallyRequest;
  static deserializeBinaryFromReader(message: CountLocalesInternallyRequest, reader: jspb.BinaryReader): CountLocalesInternallyRequest;
}

export namespace CountLocalesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    ipsList: Array<string>,
  }
}

export class CountLocalesInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountLocalesInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountLocalesInternallyResponse;
  hasError(): boolean;
  clearError(): CountLocalesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountLocalesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountLocalesInternallyResponse): CountLocalesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountLocalesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountLocalesInternallyResponse;
  static deserializeBinaryFromReader(message: CountLocalesInternallyResponse, reader: jspb.BinaryReader): CountLocalesInternallyResponse;
}

export namespace CountLocalesInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateLocaleInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateLocaleInternallyRequest;

  getIp(): string;
  setIp(value: string): CreateLocaleInternallyRequest;

  getContinent(): string;
  setContinent(value: string): CreateLocaleInternallyRequest;

  getCountry(): string;
  setCountry(value: string): CreateLocaleInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateLocaleInternallyRequest;

  getCity(): string;
  setCity(value: string): CreateLocaleInternallyRequest;

  getCurrency(): string;
  setCurrency(value: string): CreateLocaleInternallyRequest;

  getPostcode(): string;
  setPostcode(value: string): CreateLocaleInternallyRequest;

  getLatitude(): number;
  setLatitude(value: number): CreateLocaleInternallyRequest;

  getLongitude(): number;
  setLongitude(value: number): CreateLocaleInternallyRequest;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): CreateLocaleInternallyRequest;
  clearLanguagesList(): CreateLocaleInternallyRequest;
  addLanguages(value: string, index?: number): CreateLocaleInternallyRequest;

  getCreatedat(): number;
  setCreatedat(value: number): CreateLocaleInternallyRequest;

  getUpdatedat(): number;
  setUpdatedat(value: number): CreateLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocaleInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocaleInternallyRequest): CreateLocaleInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLocaleInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocaleInternallyRequest;
  static deserializeBinaryFromReader(message: CreateLocaleInternallyRequest, reader: jspb.BinaryReader): CreateLocaleInternallyRequest;
}

export namespace CreateLocaleInternallyRequest {
  export type AsObject = {
    id: string,
    ip: string,
    continent: string,
    country: string,
    region: string,
    city: string,
    currency: string,
    postcode: string,
    latitude: number,
    longitude: number,
    languagesList: Array<string>,
    createdat: number,
    updatedat: number,
  }
}

export class CreateLocalesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateLocaleInternallyRequest>;
  setRequestsList(value: Array<CreateLocaleInternallyRequest>): CreateLocalesInternallyRequest;
  clearRequestsList(): CreateLocalesInternallyRequest;
  addRequests(value?: CreateLocaleInternallyRequest, index?: number): CreateLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocalesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocalesInternallyRequest): CreateLocalesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLocalesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocalesInternallyRequest;
  static deserializeBinaryFromReader(message: CreateLocalesInternallyRequest, reader: jspb.BinaryReader): CreateLocalesInternallyRequest;
}

export namespace CreateLocalesInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateLocaleInternallyRequest.AsObject>,
  }
}

export class CreateLocalesInternallyResponse extends jspb.Message {
  getLocalesList(): Array<users_models_pb.LocaleInfo>;
  setLocalesList(value: Array<users_models_pb.LocaleInfo>): CreateLocalesInternallyResponse;
  clearLocalesList(): CreateLocalesInternallyResponse;
  addLocales(value?: users_models_pb.LocaleInfo, index?: number): users_models_pb.LocaleInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateLocalesInternallyResponse;
  hasError(): boolean;
  clearError(): CreateLocalesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocalesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocalesInternallyResponse): CreateLocalesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLocalesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocalesInternallyResponse;
  static deserializeBinaryFromReader(message: CreateLocalesInternallyResponse, reader: jspb.BinaryReader): CreateLocalesInternallyResponse;
}

export namespace CreateLocalesInternallyResponse {
  export type AsObject = {
    localesList: Array<users_models_pb.LocaleInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteLocaleInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocaleInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocaleInternallyRequest): DeleteLocaleInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLocaleInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocaleInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteLocaleInternallyRequest, reader: jspb.BinaryReader): DeleteLocaleInternallyRequest;
}

export namespace DeleteLocaleInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteLocalesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteLocaleInternallyRequest>;
  setRequestsList(value: Array<DeleteLocaleInternallyRequest>): DeleteLocalesInternallyRequest;
  clearRequestsList(): DeleteLocalesInternallyRequest;
  addRequests(value?: DeleteLocaleInternallyRequest, index?: number): DeleteLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocalesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocalesInternallyRequest): DeleteLocalesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLocalesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocalesInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteLocalesInternallyRequest, reader: jspb.BinaryReader): DeleteLocalesInternallyRequest;
}

export namespace DeleteLocalesInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteLocaleInternallyRequest.AsObject>,
  }
}

export class DeleteLocalesInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteLocalesInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteLocalesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocalesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocalesInternallyResponse): DeleteLocalesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLocalesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocalesInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteLocalesInternallyResponse, reader: jspb.BinaryReader): DeleteLocalesInternallyResponse;
}

export namespace DeleteLocalesInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserInternallyRequest;

  getPid(): string;
  setPid(value: string): GetUserInternallyRequest;

  getFid(): string;
  setFid(value: string): GetUserInternallyRequest;

  getEmail(): string;
  setEmail(value: string): GetUserInternallyRequest;

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
    pid: string,
    fid: string,
    email: string,
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

export class ListUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListUsersInternallyRequest;
  clearIdsList(): ListUsersInternallyRequest;
  addIds(value: string, index?: number): ListUsersInternallyRequest;

  getEmailsList(): Array<string>;
  setEmailsList(value: Array<string>): ListUsersInternallyRequest;
  clearEmailsList(): ListUsersInternallyRequest;
  addEmails(value: string, index?: number): ListUsersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListUsersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListUsersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersInternallyRequest): ListUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersInternallyRequest;
  static deserializeBinaryFromReader(message: ListUsersInternallyRequest, reader: jspb.BinaryReader): ListUsersInternallyRequest;
}

export namespace ListUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    emailsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<users_models_pb.UserInfo>;
  setUsersList(value: Array<users_models_pb.UserInfo>): ListUsersInternallyResponse;
  clearUsersList(): ListUsersInternallyResponse;
  addUsers(value?: users_models_pb.UserInfo, index?: number): users_models_pb.UserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListUsersInternallyResponse;
  hasError(): boolean;
  clearError(): ListUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersInternallyResponse): ListUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersInternallyResponse;
  static deserializeBinaryFromReader(message: ListUsersInternallyResponse, reader: jspb.BinaryReader): ListUsersInternallyResponse;
}

export namespace ListUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<users_models_pb.UserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountUsersInternallyRequest;
  clearIdsList(): CountUsersInternallyRequest;
  addIds(value: string, index?: number): CountUsersInternallyRequest;

  getEmailsList(): Array<string>;
  setEmailsList(value: Array<string>): CountUsersInternallyRequest;
  clearEmailsList(): CountUsersInternallyRequest;
  addEmails(value: string, index?: number): CountUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountUsersInternallyRequest): CountUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUsersInternallyRequest;
  static deserializeBinaryFromReader(message: CountUsersInternallyRequest, reader: jspb.BinaryReader): CountUsersInternallyRequest;
}

export namespace CountUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    emailsList: Array<string>,
  }
}

export class CountUsersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountUsersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountUsersInternallyResponse;
  hasError(): boolean;
  clearError(): CountUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountUsersInternallyResponse): CountUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUsersInternallyResponse;
  static deserializeBinaryFromReader(message: CountUsersInternallyResponse, reader: jspb.BinaryReader): CountUsersInternallyResponse;
}

export namespace CountUsersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateUserInternallyRequest;

  getFid(): string;
  setFid(value: string): CreateUserInternallyRequest;

  getPid(): string;
  setPid(value: string): CreateUserInternallyRequest;

  getName(): string;
  setName(value: string): CreateUserInternallyRequest;

  getType(): users_enums_pb.UserType;
  setType(value: users_enums_pb.UserType): CreateUserInternallyRequest;

  getRole(): number;
  setRole(value: number): CreateUserInternallyRequest;

  getEmail(): string;
  setEmail(value: string): CreateUserInternallyRequest;

  getAccess(): users_enums_pb.UserAccess;
  setAccess(value: users_enums_pb.UserAccess): CreateUserInternallyRequest;

  getStatus(): users_enums_pb.UserStatus;
  setStatus(value: users_enums_pb.UserStatus): CreateUserInternallyRequest;

  getOptionsList(): Array<users_enums_pb.UserOption>;
  setOptionsList(value: Array<users_enums_pb.UserOption>): CreateUserInternallyRequest;
  clearOptionsList(): CreateUserInternallyRequest;
  addOptions(value: users_enums_pb.UserOption, index?: number): CreateUserInternallyRequest;

  getFirstName(): string;
  setFirstName(value: string): CreateUserInternallyRequest;

  getLastName(): string;
  setLastName(value: string): CreateUserInternallyRequest;

  getTimezone(): string;
  setTimezone(value: string): CreateUserInternallyRequest;

  getBirthDate(): number;
  setBirthDate(value: number): CreateUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserInternallyRequest): CreateUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserInternallyRequest;
  static deserializeBinaryFromReader(message: CreateUserInternallyRequest, reader: jspb.BinaryReader): CreateUserInternallyRequest;
}

export namespace CreateUserInternallyRequest {
  export type AsObject = {
    id: string,
    fid: string,
    pid: string,
    name: string,
    type: users_enums_pb.UserType,
    role: number,
    email: string,
    access: users_enums_pb.UserAccess,
    status: users_enums_pb.UserStatus,
    optionsList: Array<users_enums_pb.UserOption>,
    firstName: string,
    lastName: string,
    timezone: string,
    birthDate: number,
  }
}

export class CreateUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateUserInternallyRequest>;
  setRequestsList(value: Array<CreateUserInternallyRequest>): CreateUsersInternallyRequest;
  clearRequestsList(): CreateUsersInternallyRequest;
  addRequests(value?: CreateUserInternallyRequest, index?: number): CreateUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUsersInternallyRequest): CreateUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUsersInternallyRequest;
  static deserializeBinaryFromReader(message: CreateUsersInternallyRequest, reader: jspb.BinaryReader): CreateUsersInternallyRequest;
}

export namespace CreateUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateUserInternallyRequest.AsObject>,
  }
}

export class CreateUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<users_models_pb.UserInfo>;
  setUsersList(value: Array<users_models_pb.UserInfo>): CreateUsersInternallyResponse;
  clearUsersList(): CreateUsersInternallyResponse;
  addUsers(value?: users_models_pb.UserInfo, index?: number): users_models_pb.UserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateUsersInternallyResponse;
  hasError(): boolean;
  clearError(): CreateUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUsersInternallyResponse): CreateUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUsersInternallyResponse;
  static deserializeBinaryFromReader(message: CreateUsersInternallyResponse, reader: jspb.BinaryReader): CreateUsersInternallyResponse;
}

export namespace CreateUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<users_models_pb.UserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUserInternallyRequest;

  getPid(): users_models_pb.UserPidValue | undefined;
  setPid(value?: users_models_pb.UserPidValue): UpdateUserInternallyRequest;
  hasPid(): boolean;
  clearPid(): UpdateUserInternallyRequest;

  getName(): users_models_pb.UserNameValue | undefined;
  setName(value?: users_models_pb.UserNameValue): UpdateUserInternallyRequest;
  hasName(): boolean;
  clearName(): UpdateUserInternallyRequest;

  getRole(): users_models_pb.UserRoleValue | undefined;
  setRole(value?: users_models_pb.UserRoleValue): UpdateUserInternallyRequest;
  hasRole(): boolean;
  clearRole(): UpdateUserInternallyRequest;

  getEmail(): users_models_pb.UserEmailValue | undefined;
  setEmail(value?: users_models_pb.UserEmailValue): UpdateUserInternallyRequest;
  hasEmail(): boolean;
  clearEmail(): UpdateUserInternallyRequest;

  getAccess(): users_models_pb.UserAccessValue | undefined;
  setAccess(value?: users_models_pb.UserAccessValue): UpdateUserInternallyRequest;
  hasAccess(): boolean;
  clearAccess(): UpdateUserInternallyRequest;

  getStatus(): users_models_pb.UserStatusValue | undefined;
  setStatus(value?: users_models_pb.UserStatusValue): UpdateUserInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateUserInternallyRequest;

  getOptions(): users_models_pb.UserOptionsValue | undefined;
  setOptions(value?: users_models_pb.UserOptionsValue): UpdateUserInternallyRequest;
  hasOptions(): boolean;
  clearOptions(): UpdateUserInternallyRequest;

  getPassword(): users_models_pb.UserPasswordValue | undefined;
  setPassword(value?: users_models_pb.UserPasswordValue): UpdateUserInternallyRequest;
  hasPassword(): boolean;
  clearPassword(): UpdateUserInternallyRequest;

  getFirstName(): users_models_pb.UserFirstNameValue | undefined;
  setFirstName(value?: users_models_pb.UserFirstNameValue): UpdateUserInternallyRequest;
  hasFirstName(): boolean;
  clearFirstName(): UpdateUserInternallyRequest;

  getLastName(): users_models_pb.UserLastNameValue | undefined;
  setLastName(value?: users_models_pb.UserLastNameValue): UpdateUserInternallyRequest;
  hasLastName(): boolean;
  clearLastName(): UpdateUserInternallyRequest;

  getAvatar(): users_models_pb.UserAvatarValue | undefined;
  setAvatar(value?: users_models_pb.UserAvatarValue): UpdateUserInternallyRequest;
  hasAvatar(): boolean;
  clearAvatar(): UpdateUserInternallyRequest;

  getBirthDate(): users_models_pb.UserBirthDateValue | undefined;
  setBirthDate(value?: users_models_pb.UserBirthDateValue): UpdateUserInternallyRequest;
  hasBirthDate(): boolean;
  clearBirthDate(): UpdateUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserInternallyRequest): UpdateUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateUserInternallyRequest, reader: jspb.BinaryReader): UpdateUserInternallyRequest;
}

export namespace UpdateUserInternallyRequest {
  export type AsObject = {
    id: string,
    pid?: users_models_pb.UserPidValue.AsObject,
    name?: users_models_pb.UserNameValue.AsObject,
    role?: users_models_pb.UserRoleValue.AsObject,
    email?: users_models_pb.UserEmailValue.AsObject,
    access?: users_models_pb.UserAccessValue.AsObject,
    status?: users_models_pb.UserStatusValue.AsObject,
    options?: users_models_pb.UserOptionsValue.AsObject,
    password?: users_models_pb.UserPasswordValue.AsObject,
    firstName?: users_models_pb.UserFirstNameValue.AsObject,
    lastName?: users_models_pb.UserLastNameValue.AsObject,
    avatar?: users_models_pb.UserAvatarValue.AsObject,
    birthDate?: users_models_pb.UserBirthDateValue.AsObject,
  }
}

export class UpdateUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateUserInternallyRequest>;
  setRequestsList(value: Array<UpdateUserInternallyRequest>): UpdateUsersInternallyRequest;
  clearRequestsList(): UpdateUsersInternallyRequest;
  addRequests(value?: UpdateUserInternallyRequest, index?: number): UpdateUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUsersInternallyRequest): UpdateUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUsersInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateUsersInternallyRequest, reader: jspb.BinaryReader): UpdateUsersInternallyRequest;
}

export namespace UpdateUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateUserInternallyRequest.AsObject>,
  }
}

export class UpdateUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<users_models_pb.UserInfo>;
  setUsersList(value: Array<users_models_pb.UserInfo>): UpdateUsersInternallyResponse;
  clearUsersList(): UpdateUsersInternallyResponse;
  addUsers(value?: users_models_pb.UserInfo, index?: number): users_models_pb.UserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateUsersInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUsersInternallyResponse): UpdateUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUsersInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateUsersInternallyResponse, reader: jspb.BinaryReader): UpdateUsersInternallyResponse;
}

export namespace UpdateUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<users_models_pb.UserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserInternallyRequest): DeleteUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteUserInternallyRequest, reader: jspb.BinaryReader): DeleteUserInternallyRequest;
}

export namespace DeleteUserInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteUserInternallyRequest>;
  setRequestsList(value: Array<DeleteUserInternallyRequest>): DeleteUsersInternallyRequest;
  clearRequestsList(): DeleteUsersInternallyRequest;
  addRequests(value?: DeleteUserInternallyRequest, index?: number): DeleteUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUsersInternallyRequest): DeleteUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUsersInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteUsersInternallyRequest, reader: jspb.BinaryReader): DeleteUsersInternallyRequest;
}

export namespace DeleteUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteUserInternallyRequest.AsObject>,
  }
}

export class DeleteUsersInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteUsersInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUsersInternallyResponse): DeleteUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUsersInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteUsersInternallyResponse, reader: jspb.BinaryReader): DeleteUsersInternallyResponse;
}

export namespace DeleteUsersInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetUserRelationInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserRelationInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetUserRelationInternallyRequest;

  getRelatedId(): string;
  setRelatedId(value: string): GetUserRelationInternallyRequest;

  getType(): users_enums_pb.UserRelationType;
  setType(value: users_enums_pb.UserRelationType): GetUserRelationInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRelationInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRelationInternallyRequest): GetUserRelationInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRelationInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRelationInternallyRequest;
  static deserializeBinaryFromReader(message: GetUserRelationInternallyRequest, reader: jspb.BinaryReader): GetUserRelationInternallyRequest;
}

export namespace GetUserRelationInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    relatedId: string,
    type: users_enums_pb.UserRelationType,
  }
}

export class GetUserRelationInternallyResponse extends jspb.Message {
  getInfo(): users_models_pb.UserRelationInfo | undefined;
  setInfo(value?: users_models_pb.UserRelationInfo): GetUserRelationInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetUserRelationInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetUserRelationInternallyResponse;
  hasError(): boolean;
  clearError(): GetUserRelationInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRelationInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRelationInternallyResponse): GetUserRelationInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserRelationInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRelationInternallyResponse;
  static deserializeBinaryFromReader(message: GetUserRelationInternallyResponse, reader: jspb.BinaryReader): GetUserRelationInternallyResponse;
}

export namespace GetUserRelationInternallyResponse {
  export type AsObject = {
    info?: users_models_pb.UserRelationInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListUserRelationsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListUserRelationsInternallyRequest;
  clearIdsList(): ListUserRelationsInternallyRequest;
  addIds(value: string, index?: number): ListUserRelationsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListUserRelationsInternallyRequest;
  clearUserIdsList(): ListUserRelationsInternallyRequest;
  addUserIds(value: string, index?: number): ListUserRelationsInternallyRequest;

  getRelatedIdsList(): Array<string>;
  setRelatedIdsList(value: Array<string>): ListUserRelationsInternallyRequest;
  clearRelatedIdsList(): ListUserRelationsInternallyRequest;
  addRelatedIds(value: string, index?: number): ListUserRelationsInternallyRequest;

  getTypesList(): Array<users_enums_pb.UserRelationType>;
  setTypesList(value: Array<users_enums_pb.UserRelationType>): ListUserRelationsInternallyRequest;
  clearTypesList(): ListUserRelationsInternallyRequest;
  addTypes(value: users_enums_pb.UserRelationType, index?: number): ListUserRelationsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListUserRelationsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListUserRelationsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListUserRelationsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRelationsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRelationsInternallyRequest): ListUserRelationsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserRelationsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRelationsInternallyRequest;
  static deserializeBinaryFromReader(message: ListUserRelationsInternallyRequest, reader: jspb.BinaryReader): ListUserRelationsInternallyRequest;
}

export namespace ListUserRelationsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    relatedIdsList: Array<string>,
    typesList: Array<users_enums_pb.UserRelationType>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListUserRelationsInternallyResponse extends jspb.Message {
  getRelationsList(): Array<users_models_pb.UserRelationInfo>;
  setRelationsList(value: Array<users_models_pb.UserRelationInfo>): ListUserRelationsInternallyResponse;
  clearRelationsList(): ListUserRelationsInternallyResponse;
  addRelations(value?: users_models_pb.UserRelationInfo, index?: number): users_models_pb.UserRelationInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListUserRelationsInternallyResponse;
  hasError(): boolean;
  clearError(): ListUserRelationsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRelationsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRelationsInternallyResponse): ListUserRelationsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserRelationsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRelationsInternallyResponse;
  static deserializeBinaryFromReader(message: ListUserRelationsInternallyResponse, reader: jspb.BinaryReader): ListUserRelationsInternallyResponse;
}

export namespace ListUserRelationsInternallyResponse {
  export type AsObject = {
    relationsList: Array<users_models_pb.UserRelationInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountUserRelationsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountUserRelationsInternallyRequest;
  clearIdsList(): CountUserRelationsInternallyRequest;
  addIds(value: string, index?: number): CountUserRelationsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountUserRelationsInternallyRequest;
  clearUserIdsList(): CountUserRelationsInternallyRequest;
  addUserIds(value: string, index?: number): CountUserRelationsInternallyRequest;

  getRelatedIdsList(): Array<string>;
  setRelatedIdsList(value: Array<string>): CountUserRelationsInternallyRequest;
  clearRelatedIdsList(): CountUserRelationsInternallyRequest;
  addRelatedIds(value: string, index?: number): CountUserRelationsInternallyRequest;

  getTypesList(): Array<users_enums_pb.UserRelationType>;
  setTypesList(value: Array<users_enums_pb.UserRelationType>): CountUserRelationsInternallyRequest;
  clearTypesList(): CountUserRelationsInternallyRequest;
  addTypes(value: users_enums_pb.UserRelationType, index?: number): CountUserRelationsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserRelationsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserRelationsInternallyRequest): CountUserRelationsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountUserRelationsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserRelationsInternallyRequest;
  static deserializeBinaryFromReader(message: CountUserRelationsInternallyRequest, reader: jspb.BinaryReader): CountUserRelationsInternallyRequest;
}

export namespace CountUserRelationsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    relatedIdsList: Array<string>,
    typesList: Array<users_enums_pb.UserRelationType>,
  }
}

export class CountUserRelationsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountUserRelationsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountUserRelationsInternallyResponse;
  hasError(): boolean;
  clearError(): CountUserRelationsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserRelationsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserRelationsInternallyResponse): CountUserRelationsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountUserRelationsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserRelationsInternallyResponse;
  static deserializeBinaryFromReader(message: CountUserRelationsInternallyResponse, reader: jspb.BinaryReader): CountUserRelationsInternallyResponse;
}

export namespace CountUserRelationsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateUserRelationInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateUserRelationInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateUserRelationInternallyRequest;

  getRelatedId(): string;
  setRelatedId(value: string): CreateUserRelationInternallyRequest;

  getType(): users_enums_pb.UserRelationType;
  setType(value: users_enums_pb.UserRelationType): CreateUserRelationInternallyRequest;

  getCreatedat(): number;
  setCreatedat(value: number): CreateUserRelationInternallyRequest;

  getUpdatedat(): number;
  setUpdatedat(value: number): CreateUserRelationInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRelationInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRelationInternallyRequest): CreateUserRelationInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRelationInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRelationInternallyRequest;
  static deserializeBinaryFromReader(message: CreateUserRelationInternallyRequest, reader: jspb.BinaryReader): CreateUserRelationInternallyRequest;
}

export namespace CreateUserRelationInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    relatedId: string,
    type: users_enums_pb.UserRelationType,
    createdat: number,
    updatedat: number,
  }
}

export class CreateUserRelationsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateUserRelationInternallyRequest>;
  setRequestsList(value: Array<CreateUserRelationInternallyRequest>): CreateUserRelationsInternallyRequest;
  clearRequestsList(): CreateUserRelationsInternallyRequest;
  addRequests(value?: CreateUserRelationInternallyRequest, index?: number): CreateUserRelationInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRelationsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRelationsInternallyRequest): CreateUserRelationsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRelationsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRelationsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateUserRelationsInternallyRequest, reader: jspb.BinaryReader): CreateUserRelationsInternallyRequest;
}

export namespace CreateUserRelationsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateUserRelationInternallyRequest.AsObject>,
  }
}

export class CreateUserRelationsInternallyResponse extends jspb.Message {
  getRelationsList(): Array<users_models_pb.UserRelationInfo>;
  setRelationsList(value: Array<users_models_pb.UserRelationInfo>): CreateUserRelationsInternallyResponse;
  clearRelationsList(): CreateUserRelationsInternallyResponse;
  addRelations(value?: users_models_pb.UserRelationInfo, index?: number): users_models_pb.UserRelationInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateUserRelationsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateUserRelationsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRelationsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRelationsInternallyResponse): CreateUserRelationsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserRelationsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRelationsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateUserRelationsInternallyResponse, reader: jspb.BinaryReader): CreateUserRelationsInternallyResponse;
}

export namespace CreateUserRelationsInternallyResponse {
  export type AsObject = {
    relationsList: Array<users_models_pb.UserRelationInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteUserRelationInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserRelationInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRelationInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRelationInternallyRequest): DeleteUserRelationInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRelationInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRelationInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteUserRelationInternallyRequest, reader: jspb.BinaryReader): DeleteUserRelationInternallyRequest;
}

export namespace DeleteUserRelationInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteUserRelationsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteUserRelationInternallyRequest>;
  setRequestsList(value: Array<DeleteUserRelationInternallyRequest>): DeleteUserRelationsInternallyRequest;
  clearRequestsList(): DeleteUserRelationsInternallyRequest;
  addRequests(value?: DeleteUserRelationInternallyRequest, index?: number): DeleteUserRelationInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRelationsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRelationsInternallyRequest): DeleteUserRelationsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRelationsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRelationsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteUserRelationsInternallyRequest, reader: jspb.BinaryReader): DeleteUserRelationsInternallyRequest;
}

export namespace DeleteUserRelationsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteUserRelationInternallyRequest.AsObject>,
  }
}

export class DeleteUserRelationsInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteUserRelationsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteUserRelationsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRelationsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRelationsInternallyResponse): DeleteUserRelationsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRelationsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRelationsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteUserRelationsInternallyResponse, reader: jspb.BinaryReader): DeleteUserRelationsInternallyResponse;
}

export namespace DeleteUserRelationsInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetUserLocaleInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserLocaleInternallyRequest;

  getUserid(): string;
  setUserid(value: string): GetUserLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLocaleInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLocaleInternallyRequest): GetUserLocaleInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserLocaleInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLocaleInternallyRequest;
  static deserializeBinaryFromReader(message: GetUserLocaleInternallyRequest, reader: jspb.BinaryReader): GetUserLocaleInternallyRequest;
}

export namespace GetUserLocaleInternallyRequest {
  export type AsObject = {
    id: string,
    userid: string,
  }
}

export class GetUserLocaleInternallyResponse extends jspb.Message {
  getInfo(): users_models_pb.UserLocaleInfo | undefined;
  setInfo(value?: users_models_pb.UserLocaleInfo): GetUserLocaleInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetUserLocaleInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetUserLocaleInternallyResponse;
  hasError(): boolean;
  clearError(): GetUserLocaleInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLocaleInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLocaleInternallyResponse): GetUserLocaleInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserLocaleInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLocaleInternallyResponse;
  static deserializeBinaryFromReader(message: GetUserLocaleInternallyResponse, reader: jspb.BinaryReader): GetUserLocaleInternallyResponse;
}

export namespace GetUserLocaleInternallyResponse {
  export type AsObject = {
    info?: users_models_pb.UserLocaleInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListUserLocalesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListUserLocalesInternallyRequest;
  clearIdsList(): ListUserLocalesInternallyRequest;
  addIds(value: string, index?: number): ListUserLocalesInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListUserLocalesInternallyRequest;
  clearUserIdsList(): ListUserLocalesInternallyRequest;
  addUserIds(value: string, index?: number): ListUserLocalesInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListUserLocalesInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListUserLocalesInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListUserLocalesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserLocalesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserLocalesInternallyRequest): ListUserLocalesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserLocalesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserLocalesInternallyRequest;
  static deserializeBinaryFromReader(message: ListUserLocalesInternallyRequest, reader: jspb.BinaryReader): ListUserLocalesInternallyRequest;
}

export namespace ListUserLocalesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListUserLocalesInternallyResponse extends jspb.Message {
  getLocalesList(): Array<users_models_pb.UserLocaleInfo>;
  setLocalesList(value: Array<users_models_pb.UserLocaleInfo>): ListUserLocalesInternallyResponse;
  clearLocalesList(): ListUserLocalesInternallyResponse;
  addLocales(value?: users_models_pb.UserLocaleInfo, index?: number): users_models_pb.UserLocaleInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListUserLocalesInternallyResponse;
  hasError(): boolean;
  clearError(): ListUserLocalesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserLocalesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserLocalesInternallyResponse): ListUserLocalesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserLocalesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserLocalesInternallyResponse;
  static deserializeBinaryFromReader(message: ListUserLocalesInternallyResponse, reader: jspb.BinaryReader): ListUserLocalesInternallyResponse;
}

export namespace ListUserLocalesInternallyResponse {
  export type AsObject = {
    localesList: Array<users_models_pb.UserLocaleInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountUserLocalesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountUserLocalesInternallyRequest;
  clearIdsList(): CountUserLocalesInternallyRequest;
  addIds(value: string, index?: number): CountUserLocalesInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountUserLocalesInternallyRequest;
  clearUserIdsList(): CountUserLocalesInternallyRequest;
  addUserIds(value: string, index?: number): CountUserLocalesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserLocalesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserLocalesInternallyRequest): CountUserLocalesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountUserLocalesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserLocalesInternallyRequest;
  static deserializeBinaryFromReader(message: CountUserLocalesInternallyRequest, reader: jspb.BinaryReader): CountUserLocalesInternallyRequest;
}

export namespace CountUserLocalesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
  }
}

export class CountUserLocalesInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountUserLocalesInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountUserLocalesInternallyResponse;
  hasError(): boolean;
  clearError(): CountUserLocalesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserLocalesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserLocalesInternallyResponse): CountUserLocalesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountUserLocalesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserLocalesInternallyResponse;
  static deserializeBinaryFromReader(message: CountUserLocalesInternallyResponse, reader: jspb.BinaryReader): CountUserLocalesInternallyResponse;
}

export namespace CountUserLocalesInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateUserLocaleInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateUserLocaleInternallyRequest;

  getIp(): string;
  setIp(value: string): CreateUserLocaleInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateUserLocaleInternallyRequest;

  getContinent(): string;
  setContinent(value: string): CreateUserLocaleInternallyRequest;

  getCountry(): string;
  setCountry(value: string): CreateUserLocaleInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateUserLocaleInternallyRequest;

  getCity(): string;
  setCity(value: string): CreateUserLocaleInternallyRequest;

  getCurrency(): string;
  setCurrency(value: string): CreateUserLocaleInternallyRequest;

  getPostcode(): string;
  setPostcode(value: string): CreateUserLocaleInternallyRequest;

  getLatitude(): number;
  setLatitude(value: number): CreateUserLocaleInternallyRequest;

  getLongitude(): number;
  setLongitude(value: number): CreateUserLocaleInternallyRequest;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): CreateUserLocaleInternallyRequest;
  clearLanguagesList(): CreateUserLocaleInternallyRequest;
  addLanguages(value: string, index?: number): CreateUserLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserLocaleInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserLocaleInternallyRequest): CreateUserLocaleInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserLocaleInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserLocaleInternallyRequest;
  static deserializeBinaryFromReader(message: CreateUserLocaleInternallyRequest, reader: jspb.BinaryReader): CreateUserLocaleInternallyRequest;
}

export namespace CreateUserLocaleInternallyRequest {
  export type AsObject = {
    id: string,
    ip: string,
    userId: string,
    continent: string,
    country: string,
    region: string,
    city: string,
    currency: string,
    postcode: string,
    latitude: number,
    longitude: number,
    languagesList: Array<string>,
  }
}

export class CreateUserLocalesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateUserLocaleInternallyRequest>;
  setRequestsList(value: Array<CreateUserLocaleInternallyRequest>): CreateUserLocalesInternallyRequest;
  clearRequestsList(): CreateUserLocalesInternallyRequest;
  addRequests(value?: CreateUserLocaleInternallyRequest, index?: number): CreateUserLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserLocalesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserLocalesInternallyRequest): CreateUserLocalesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserLocalesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserLocalesInternallyRequest;
  static deserializeBinaryFromReader(message: CreateUserLocalesInternallyRequest, reader: jspb.BinaryReader): CreateUserLocalesInternallyRequest;
}

export namespace CreateUserLocalesInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateUserLocaleInternallyRequest.AsObject>,
  }
}

export class CreateUserLocalesInternallyResponse extends jspb.Message {
  getLocalesList(): Array<users_models_pb.UserLocaleInfo>;
  setLocalesList(value: Array<users_models_pb.UserLocaleInfo>): CreateUserLocalesInternallyResponse;
  clearLocalesList(): CreateUserLocalesInternallyResponse;
  addLocales(value?: users_models_pb.UserLocaleInfo, index?: number): users_models_pb.UserLocaleInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateUserLocalesInternallyResponse;
  hasError(): boolean;
  clearError(): CreateUserLocalesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserLocalesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserLocalesInternallyResponse): CreateUserLocalesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserLocalesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserLocalesInternallyResponse;
  static deserializeBinaryFromReader(message: CreateUserLocalesInternallyResponse, reader: jspb.BinaryReader): CreateUserLocalesInternallyResponse;
}

export namespace CreateUserLocalesInternallyResponse {
  export type AsObject = {
    localesList: Array<users_models_pb.UserLocaleInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteUserLocaleInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserLocaleInternallyRequest;

  getUserid(): string;
  setUserid(value: string): DeleteUserLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserLocaleInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserLocaleInternallyRequest): DeleteUserLocaleInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserLocaleInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserLocaleInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteUserLocaleInternallyRequest, reader: jspb.BinaryReader): DeleteUserLocaleInternallyRequest;
}

export namespace DeleteUserLocaleInternallyRequest {
  export type AsObject = {
    id: string,
    userid: string,
  }
}

export class DeleteUserLocalesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteUserLocaleInternallyRequest>;
  setRequestsList(value: Array<DeleteUserLocaleInternallyRequest>): DeleteUserLocalesInternallyRequest;
  clearRequestsList(): DeleteUserLocalesInternallyRequest;
  addRequests(value?: DeleteUserLocaleInternallyRequest, index?: number): DeleteUserLocaleInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserLocalesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserLocalesInternallyRequest): DeleteUserLocalesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserLocalesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserLocalesInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteUserLocalesInternallyRequest, reader: jspb.BinaryReader): DeleteUserLocalesInternallyRequest;
}

export namespace DeleteUserLocalesInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteUserLocaleInternallyRequest.AsObject>,
  }
}

export class DeleteUserLocalesInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteUserLocalesInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteUserLocalesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserLocalesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserLocalesInternallyResponse): DeleteUserLocalesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserLocalesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserLocalesInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteUserLocalesInternallyResponse, reader: jspb.BinaryReader): DeleteUserLocalesInternallyResponse;
}

export namespace DeleteUserLocalesInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

