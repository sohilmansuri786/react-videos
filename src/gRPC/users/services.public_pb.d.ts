import * as jspb from 'google-protobuf'

import * as users_enums_pb from '../users/enums_pb';
import * as users_models_pb from '../users/models_pb';
import * as error_models_pb from '../error/models_pb';


export class GetChatInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatInfoRequest;

  getUserId(): string;
  setUserId(value: string): GetChatInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatInfoRequest): GetChatInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatInfoRequest;
  static deserializeBinaryFromReader(message: GetChatInfoRequest, reader: jspb.BinaryReader): GetChatInfoRequest;
}

export namespace GetChatInfoRequest {
  export type AsObject = {
    id: string,
    userId: string,
  }
}

export class GetChatInfoResponse extends jspb.Message {
  getInfo(): users_models_pb.ChatInfo | undefined;
  setInfo(value?: users_models_pb.ChatInfo): GetChatInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetChatInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetChatInfoResponse;
  hasError(): boolean;
  clearError(): GetChatInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatInfoResponse): GetChatInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetChatInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatInfoResponse;
  static deserializeBinaryFromReader(message: GetChatInfoResponse, reader: jspb.BinaryReader): GetChatInfoResponse;
}

export namespace GetChatInfoResponse {
  export type AsObject = {
    info?: users_models_pb.ChatInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetChatStateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatStateRequest;

  getUserId(): string;
  setUserId(value: string): GetChatStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatStateRequest): GetChatStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatStateRequest;
  static deserializeBinaryFromReader(message: GetChatStateRequest, reader: jspb.BinaryReader): GetChatStateRequest;
}

export namespace GetChatStateRequest {
  export type AsObject = {
    id: string,
    userId: string,
  }
}

export class GetChatStateResponse extends jspb.Message {
  getState(): users_models_pb.ChatState | undefined;
  setState(value?: users_models_pb.ChatState): GetChatStateResponse;
  hasState(): boolean;
  clearState(): GetChatStateResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetChatStateResponse;
  hasError(): boolean;
  clearError(): GetChatStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatStateResponse): GetChatStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetChatStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatStateResponse;
  static deserializeBinaryFromReader(message: GetChatStateResponse, reader: jspb.BinaryReader): GetChatStateResponse;
}

export namespace GetChatStateResponse {
  export type AsObject = {
    state?: users_models_pb.ChatState.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListChatsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListChatsRequest;
  clearIdsList(): ListChatsRequest;
  addIds(value: string, index?: number): ListChatsRequest;

  getOffset(): number;
  setOffset(value: number): ListChatsRequest;

  getLimit(): number;
  setLimit(value: number): ListChatsRequest;

  getOrder(): string;
  setOrder(value: string): ListChatsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatsRequest): ListChatsRequest.AsObject;
  static serializeBinaryToWriter(message: ListChatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatsRequest;
  static deserializeBinaryFromReader(message: ListChatsRequest, reader: jspb.BinaryReader): ListChatsRequest;
}

export namespace ListChatsRequest {
  export type AsObject = {
    idsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListChatsResponse extends jspb.Message {
  getChatsList(): Array<users_models_pb.ChatInfo>;
  setChatsList(value: Array<users_models_pb.ChatInfo>): ListChatsResponse;
  clearChatsList(): ListChatsResponse;
  addChats(value?: users_models_pb.ChatInfo, index?: number): users_models_pb.ChatInfo;

  getTotal(): number;
  setTotal(value: number): ListChatsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListChatsResponse;
  hasError(): boolean;
  clearError(): ListChatsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatsResponse): ListChatsResponse.AsObject;
  static serializeBinaryToWriter(message: ListChatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatsResponse;
  static deserializeBinaryFromReader(message: ListChatsResponse, reader: jspb.BinaryReader): ListChatsResponse;
}

export namespace ListChatsResponse {
  export type AsObject = {
    chatsList: Array<users_models_pb.ChatInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountChatsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatsRequest): CountChatsRequest.AsObject;
  static serializeBinaryToWriter(message: CountChatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatsRequest;
  static deserializeBinaryFromReader(message: CountChatsRequest, reader: jspb.BinaryReader): CountChatsRequest;
}

export namespace CountChatsRequest {
  export type AsObject = {
  }
}

export class CountChatsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountChatsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountChatsResponse;
  hasError(): boolean;
  clearError(): CountChatsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatsResponse): CountChatsResponse.AsObject;
  static serializeBinaryToWriter(message: CountChatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatsResponse;
  static deserializeBinaryFromReader(message: CountChatsResponse, reader: jspb.BinaryReader): CountChatsResponse;
}

export namespace CountChatsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListChatMessagesRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListChatMessagesRequest;
  clearIdsList(): ListChatMessagesRequest;
  addIds(value: string, index?: number): ListChatMessagesRequest;

  getChatId(): string;
  setChatId(value: string): ListChatMessagesRequest;

  getOffset(): number;
  setOffset(value: number): ListChatMessagesRequest;

  getLimit(): number;
  setLimit(value: number): ListChatMessagesRequest;

  getOrder(): string;
  setOrder(value: string): ListChatMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatMessagesRequest): ListChatMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: ListChatMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatMessagesRequest;
  static deserializeBinaryFromReader(message: ListChatMessagesRequest, reader: jspb.BinaryReader): ListChatMessagesRequest;
}

export namespace ListChatMessagesRequest {
  export type AsObject = {
    idsList: Array<string>,
    chatId: string,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListChatMessagesResponse extends jspb.Message {
  getMessagesList(): Array<users_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<users_models_pb.ChatMessageInfo>): ListChatMessagesResponse;
  clearMessagesList(): ListChatMessagesResponse;
  addMessages(value?: users_models_pb.ChatMessageInfo, index?: number): users_models_pb.ChatMessageInfo;

  getTotal(): number;
  setTotal(value: number): ListChatMessagesResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListChatMessagesResponse;
  hasError(): boolean;
  clearError(): ListChatMessagesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChatMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListChatMessagesResponse): ListChatMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: ListChatMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChatMessagesResponse;
  static deserializeBinaryFromReader(message: ListChatMessagesResponse, reader: jspb.BinaryReader): ListChatMessagesResponse;
}

export namespace ListChatMessagesResponse {
  export type AsObject = {
    messagesList: Array<users_models_pb.ChatMessageInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountChatMessagesRequest extends jspb.Message {
  getChatId(): string;
  setChatId(value: string): CountChatMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatMessagesRequest): CountChatMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: CountChatMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatMessagesRequest;
  static deserializeBinaryFromReader(message: CountChatMessagesRequest, reader: jspb.BinaryReader): CountChatMessagesRequest;
}

export namespace CountChatMessagesRequest {
  export type AsObject = {
    chatId: string,
  }
}

export class CountChatMessagesResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountChatMessagesResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountChatMessagesResponse;
  hasError(): boolean;
  clearError(): CountChatMessagesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountChatMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountChatMessagesResponse): CountChatMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: CountChatMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountChatMessagesResponse;
  static deserializeBinaryFromReader(message: CountChatMessagesResponse, reader: jspb.BinaryReader): CountChatMessagesResponse;
}

export namespace CountChatMessagesResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateChatMessageRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateChatMessageRequest;

  getContent(): users_models_pb.ChatMessageContentValue | undefined;
  setContent(value?: users_models_pb.ChatMessageContentValue): UpdateChatMessageRequest;
  hasContent(): boolean;
  clearContent(): UpdateChatMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatMessageRequest): UpdateChatMessageRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatMessageRequest;
  static deserializeBinaryFromReader(message: UpdateChatMessageRequest, reader: jspb.BinaryReader): UpdateChatMessageRequest;
}

export namespace UpdateChatMessageRequest {
  export type AsObject = {
    id: string,
    content?: users_models_pb.ChatMessageContentValue.AsObject,
  }
}

export class UpdateChatMessageResponse extends jspb.Message {
  getInfo(): users_models_pb.ChatMessageInfo | undefined;
  setInfo(value?: users_models_pb.ChatMessageInfo): UpdateChatMessageResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateChatMessageResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateChatMessageResponse;
  hasError(): boolean;
  clearError(): UpdateChatMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatMessageResponse): UpdateChatMessageResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateChatMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatMessageResponse;
  static deserializeBinaryFromReader(message: UpdateChatMessageResponse, reader: jspb.BinaryReader): UpdateChatMessageResponse;
}

export namespace UpdateChatMessageResponse {
  export type AsObject = {
    info?: users_models_pb.ChatMessageInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteChatMessageRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteChatMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatMessageRequest): DeleteChatMessageRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatMessageRequest;
  static deserializeBinaryFromReader(message: DeleteChatMessageRequest, reader: jspb.BinaryReader): DeleteChatMessageRequest;
}

export namespace DeleteChatMessageRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteChatMessageResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteChatMessageResponse;
  hasError(): boolean;
  clearError(): DeleteChatMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChatMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChatMessageResponse): DeleteChatMessageResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteChatMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChatMessageResponse;
  static deserializeBinaryFromReader(message: DeleteChatMessageResponse, reader: jspb.BinaryReader): DeleteChatMessageResponse;
}

export namespace DeleteChatMessageResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetUserInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserInfoRequest;

  getPid(): string;
  setPid(value: string): GetUserInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoRequest): GetUserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoRequest;
  static deserializeBinaryFromReader(message: GetUserInfoRequest, reader: jspb.BinaryReader): GetUserInfoRequest;
}

export namespace GetUserInfoRequest {
  export type AsObject = {
    id: string,
    pid: string,
  }
}

export class GetUserInfoResponse extends jspb.Message {
  getInfo(): users_models_pb.UserInfo | undefined;
  setInfo(value?: users_models_pb.UserInfo): GetUserInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetUserInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetUserInfoResponse;
  hasError(): boolean;
  clearError(): GetUserInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoResponse): GetUserInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoResponse;
  static deserializeBinaryFromReader(message: GetUserInfoResponse, reader: jspb.BinaryReader): GetUserInfoResponse;
}

export namespace GetUserInfoResponse {
  export type AsObject = {
    info?: users_models_pb.UserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListUsersRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListUsersRequest;
  clearIdsList(): ListUsersRequest;
  addIds(value: string, index?: number): ListUsersRequest;

  getOffset(): number;
  setOffset(value: number): ListUsersRequest;

  getLimit(): number;
  setLimit(value: number): ListUsersRequest;

  getOrder(): string;
  setOrder(value: string): ListUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
    idsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListUsersResponse extends jspb.Message {
  getUsersList(): Array<users_models_pb.UserInfo>;
  setUsersList(value: Array<users_models_pb.UserInfo>): ListUsersResponse;
  clearUsersList(): ListUsersResponse;
  addUsers(value?: users_models_pb.UserInfo, index?: number): users_models_pb.UserInfo;

  getTotal(): number;
  setTotal(value: number): ListUsersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListUsersResponse;
  hasError(): boolean;
  clearError(): ListUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    usersList: Array<users_models_pb.UserInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountUsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountUsersRequest): CountUsersRequest.AsObject;
  static serializeBinaryToWriter(message: CountUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUsersRequest;
  static deserializeBinaryFromReader(message: CountUsersRequest, reader: jspb.BinaryReader): CountUsersRequest;
}

export namespace CountUsersRequest {
  export type AsObject = {
  }
}

export class CountUsersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountUsersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountUsersResponse;
  hasError(): boolean;
  clearError(): CountUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountUsersResponse): CountUsersResponse.AsObject;
  static serializeBinaryToWriter(message: CountUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUsersResponse;
  static deserializeBinaryFromReader(message: CountUsersResponse, reader: jspb.BinaryReader): CountUsersResponse;
}

export namespace CountUsersResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SearchUsersRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchUsersRequest;

  getOffset(): number;
  setOffset(value: number): SearchUsersRequest;

  getLimit(): number;
  setLimit(value: number): SearchUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUsersRequest): SearchUsersRequest.AsObject;
  static serializeBinaryToWriter(message: SearchUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUsersRequest;
  static deserializeBinaryFromReader(message: SearchUsersRequest, reader: jspb.BinaryReader): SearchUsersRequest;
}

export namespace SearchUsersRequest {
  export type AsObject = {
    query: string,
    offset: number,
    limit: number,
  }
}

export class SearchUsersResponse extends jspb.Message {
  getUsersList(): Array<users_models_pb.UserInfo>;
  setUsersList(value: Array<users_models_pb.UserInfo>): SearchUsersResponse;
  clearUsersList(): SearchUsersResponse;
  addUsers(value?: users_models_pb.UserInfo, index?: number): users_models_pb.UserInfo;

  getTotal(): number;
  setTotal(value: number): SearchUsersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SearchUsersResponse;
  hasError(): boolean;
  clearError(): SearchUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUsersResponse): SearchUsersResponse.AsObject;
  static serializeBinaryToWriter(message: SearchUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUsersResponse;
  static deserializeBinaryFromReader(message: SearchUsersResponse, reader: jspb.BinaryReader): SearchUsersResponse;
}

export namespace SearchUsersResponse {
  export type AsObject = {
    usersList: Array<users_models_pb.UserInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SuggestUsersRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SuggestUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestUsersRequest): SuggestUsersRequest.AsObject;
  static serializeBinaryToWriter(message: SuggestUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestUsersRequest;
  static deserializeBinaryFromReader(message: SuggestUsersRequest, reader: jspb.BinaryReader): SuggestUsersRequest;
}

export namespace SuggestUsersRequest {
  export type AsObject = {
    query: string,
  }
}

export class SuggestUsersResponse extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): SuggestUsersResponse;
  clearNamesList(): SuggestUsersResponse;
  addNames(value: string, index?: number): SuggestUsersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SuggestUsersResponse;
  hasError(): boolean;
  clearError(): SuggestUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestUsersResponse): SuggestUsersResponse.AsObject;
  static serializeBinaryToWriter(message: SuggestUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestUsersResponse;
  static deserializeBinaryFromReader(message: SuggestUsersResponse, reader: jspb.BinaryReader): SuggestUsersResponse;
}

export namespace SuggestUsersResponse {
  export type AsObject = {
    namesList: Array<string>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
  }
}

export class CreateUserResponse extends jspb.Message {
  getInfo(): users_models_pb.UserInfo | undefined;
  setInfo(value?: users_models_pb.UserInfo): CreateUserResponse;
  hasInfo(): boolean;
  clearInfo(): CreateUserResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateUserResponse;
  hasError(): boolean;
  clearError(): CreateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    info?: users_models_pb.UserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUserRequest;

  getPid(): users_models_pb.UserPidValue | undefined;
  setPid(value?: users_models_pb.UserPidValue): UpdateUserRequest;
  hasPid(): boolean;
  clearPid(): UpdateUserRequest;

  getName(): users_models_pb.UserNameValue | undefined;
  setName(value?: users_models_pb.UserNameValue): UpdateUserRequest;
  hasName(): boolean;
  clearName(): UpdateUserRequest;

  getRole(): users_models_pb.UserRoleValue | undefined;
  setRole(value?: users_models_pb.UserRoleValue): UpdateUserRequest;
  hasRole(): boolean;
  clearRole(): UpdateUserRequest;

  getEmail(): users_models_pb.UserEmailValue | undefined;
  setEmail(value?: users_models_pb.UserEmailValue): UpdateUserRequest;
  hasEmail(): boolean;
  clearEmail(): UpdateUserRequest;

  getAccess(): users_models_pb.UserAccessValue | undefined;
  setAccess(value?: users_models_pb.UserAccessValue): UpdateUserRequest;
  hasAccess(): boolean;
  clearAccess(): UpdateUserRequest;

  getOptions(): users_models_pb.UserOptionsValue | undefined;
  setOptions(value?: users_models_pb.UserOptionsValue): UpdateUserRequest;
  hasOptions(): boolean;
  clearOptions(): UpdateUserRequest;

  getPassword(): users_models_pb.UserPasswordValue | undefined;
  setPassword(value?: users_models_pb.UserPasswordValue): UpdateUserRequest;
  hasPassword(): boolean;
  clearPassword(): UpdateUserRequest;

  getFirstName(): users_models_pb.UserFirstNameValue | undefined;
  setFirstName(value?: users_models_pb.UserFirstNameValue): UpdateUserRequest;
  hasFirstName(): boolean;
  clearFirstName(): UpdateUserRequest;

  getLastName(): users_models_pb.UserLastNameValue | undefined;
  setLastName(value?: users_models_pb.UserLastNameValue): UpdateUserRequest;
  hasLastName(): boolean;
  clearLastName(): UpdateUserRequest;

  getAvatar(): users_models_pb.UserAvatarValue | undefined;
  setAvatar(value?: users_models_pb.UserAvatarValue): UpdateUserRequest;
  hasAvatar(): boolean;
  clearAvatar(): UpdateUserRequest;

  getBirthDate(): users_models_pb.UserBirthDateValue | undefined;
  setBirthDate(value?: users_models_pb.UserBirthDateValue): UpdateUserRequest;
  hasBirthDate(): boolean;
  clearBirthDate(): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    id: string,
    pid?: users_models_pb.UserPidValue.AsObject,
    name?: users_models_pb.UserNameValue.AsObject,
    role?: users_models_pb.UserRoleValue.AsObject,
    email?: users_models_pb.UserEmailValue.AsObject,
    access?: users_models_pb.UserAccessValue.AsObject,
    options?: users_models_pb.UserOptionsValue.AsObject,
    password?: users_models_pb.UserPasswordValue.AsObject,
    firstName?: users_models_pb.UserFirstNameValue.AsObject,
    lastName?: users_models_pb.UserLastNameValue.AsObject,
    avatar?: users_models_pb.UserAvatarValue.AsObject,
    birthDate?: users_models_pb.UserBirthDateValue.AsObject,
  }
}

export class UpdateUserResponse extends jspb.Message {
  getInfo(): users_models_pb.UserInfo | undefined;
  setInfo(value?: users_models_pb.UserInfo): UpdateUserResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateUserResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateUserResponse;
  hasError(): boolean;
  clearError(): UpdateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
    info?: users_models_pb.UserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteUserResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteUserResponse;
  hasError(): boolean;
  clearError(): DeleteUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ActivateUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ActivateUserRequest;

  getType(): users_enums_pb.UserType;
  setType(value: users_enums_pb.UserType): ActivateUserRequest;

  getEmail(): string;
  setEmail(value: string): ActivateUserRequest;

  getName(): string;
  setName(value: string): ActivateUserRequest;

  getFirstName(): string;
  setFirstName(value: string): ActivateUserRequest;

  getLastName(): string;
  setLastName(value: string): ActivateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateUserRequest): ActivateUserRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateUserRequest;
  static deserializeBinaryFromReader(message: ActivateUserRequest, reader: jspb.BinaryReader): ActivateUserRequest;
}

export namespace ActivateUserRequest {
  export type AsObject = {
    id: string,
    type: users_enums_pb.UserType,
    email: string,
    name: string,
    firstName: string,
    lastName: string,
  }
}

export class ActivateUserResponse extends jspb.Message {
  getInfo(): users_models_pb.UserInfo | undefined;
  setInfo(value?: users_models_pb.UserInfo): ActivateUserResponse;
  hasInfo(): boolean;
  clearInfo(): ActivateUserResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ActivateUserResponse;
  hasError(): boolean;
  clearError(): ActivateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateUserResponse): ActivateUserResponse.AsObject;
  static serializeBinaryToWriter(message: ActivateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateUserResponse;
  static deserializeBinaryFromReader(message: ActivateUserResponse, reader: jspb.BinaryReader): ActivateUserResponse;
}

export namespace ActivateUserResponse {
  export type AsObject = {
    info?: users_models_pb.UserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class TokenizeUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): TokenizeUserRequest;

  getTimezone(): string;
  setTimezone(value: string): TokenizeUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenizeUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenizeUserRequest): TokenizeUserRequest.AsObject;
  static serializeBinaryToWriter(message: TokenizeUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenizeUserRequest;
  static deserializeBinaryFromReader(message: TokenizeUserRequest, reader: jspb.BinaryReader): TokenizeUserRequest;
}

export namespace TokenizeUserRequest {
  export type AsObject = {
    id: string,
    timezone: string,
  }
}

export class TokenizeUserResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokenizeUserResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): TokenizeUserResponse;
  hasError(): boolean;
  clearError(): TokenizeUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenizeUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenizeUserResponse): TokenizeUserResponse.AsObject;
  static serializeBinaryToWriter(message: TokenizeUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenizeUserResponse;
  static deserializeBinaryFromReader(message: TokenizeUserResponse, reader: jspb.BinaryReader): TokenizeUserResponse;
}

export namespace TokenizeUserResponse {
  export type AsObject = {
    token: string,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ResetUserPasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ResetUserPasswordRequest;

  getSecret(): string;
  setSecret(value: string): ResetUserPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserPasswordRequest): ResetUserPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserPasswordRequest;
  static deserializeBinaryFromReader(message: ResetUserPasswordRequest, reader: jspb.BinaryReader): ResetUserPasswordRequest;
}

export namespace ResetUserPasswordRequest {
  export type AsObject = {
    token: string,
    secret: string,
  }
}

export class ResetUserPasswordResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ResetUserPasswordResponse;
  hasError(): boolean;
  clearError(): ResetUserPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetUserPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetUserPasswordResponse): ResetUserPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetUserPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetUserPasswordResponse;
  static deserializeBinaryFromReader(message: ResetUserPasswordResponse, reader: jspb.BinaryReader): ResetUserPasswordResponse;
}

export namespace ResetUserPasswordResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class RemindUserPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RemindUserPasswordRequest;

  getReturnUrl(): string;
  setReturnUrl(value: string): RemindUserPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemindUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemindUserPasswordRequest): RemindUserPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: RemindUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemindUserPasswordRequest;
  static deserializeBinaryFromReader(message: RemindUserPasswordRequest, reader: jspb.BinaryReader): RemindUserPasswordRequest;
}

export namespace RemindUserPasswordRequest {
  export type AsObject = {
    email: string,
    returnUrl: string,
  }
}

export class RemindUserPasswordResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): RemindUserPasswordResponse;
  hasError(): boolean;
  clearError(): RemindUserPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemindUserPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemindUserPasswordResponse): RemindUserPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: RemindUserPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemindUserPasswordResponse;
  static deserializeBinaryFromReader(message: RemindUserPasswordResponse, reader: jspb.BinaryReader): RemindUserPasswordResponse;
}

export namespace RemindUserPasswordResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListUserRelationsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListUserRelationsRequest;
  clearIdsList(): ListUserRelationsRequest;
  addIds(value: string, index?: number): ListUserRelationsRequest;

  getUserId(): string;
  setUserId(value: string): ListUserRelationsRequest;

  getRelatedId(): string;
  setRelatedId(value: string): ListUserRelationsRequest;

  getTypesList(): Array<users_enums_pb.UserRelationType>;
  setTypesList(value: Array<users_enums_pb.UserRelationType>): ListUserRelationsRequest;
  clearTypesList(): ListUserRelationsRequest;
  addTypes(value: users_enums_pb.UserRelationType, index?: number): ListUserRelationsRequest;

  getOffset(): number;
  setOffset(value: number): ListUserRelationsRequest;

  getLimit(): number;
  setLimit(value: number): ListUserRelationsRequest;

  getOrder(): string;
  setOrder(value: string): ListUserRelationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRelationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRelationsRequest): ListUserRelationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserRelationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRelationsRequest;
  static deserializeBinaryFromReader(message: ListUserRelationsRequest, reader: jspb.BinaryReader): ListUserRelationsRequest;
}

export namespace ListUserRelationsRequest {
  export type AsObject = {
    idsList: Array<string>,
    userId: string,
    relatedId: string,
    typesList: Array<users_enums_pb.UserRelationType>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListUserRelationsResponse extends jspb.Message {
  getRelationsList(): Array<users_models_pb.UserRelationInfo>;
  setRelationsList(value: Array<users_models_pb.UserRelationInfo>): ListUserRelationsResponse;
  clearRelationsList(): ListUserRelationsResponse;
  addRelations(value?: users_models_pb.UserRelationInfo, index?: number): users_models_pb.UserRelationInfo;

  getTotal(): number;
  setTotal(value: number): ListUserRelationsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListUserRelationsResponse;
  hasError(): boolean;
  clearError(): ListUserRelationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRelationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRelationsResponse): ListUserRelationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserRelationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRelationsResponse;
  static deserializeBinaryFromReader(message: ListUserRelationsResponse, reader: jspb.BinaryReader): ListUserRelationsResponse;
}

export namespace ListUserRelationsResponse {
  export type AsObject = {
    relationsList: Array<users_models_pb.UserRelationInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountUserRelationsRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CountUserRelationsRequest;

  getRelatedId(): string;
  setRelatedId(value: string): CountUserRelationsRequest;

  getTypesList(): Array<users_enums_pb.UserRelationType>;
  setTypesList(value: Array<users_enums_pb.UserRelationType>): CountUserRelationsRequest;
  clearTypesList(): CountUserRelationsRequest;
  addTypes(value: users_enums_pb.UserRelationType, index?: number): CountUserRelationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserRelationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserRelationsRequest): CountUserRelationsRequest.AsObject;
  static serializeBinaryToWriter(message: CountUserRelationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserRelationsRequest;
  static deserializeBinaryFromReader(message: CountUserRelationsRequest, reader: jspb.BinaryReader): CountUserRelationsRequest;
}

export namespace CountUserRelationsRequest {
  export type AsObject = {
    userId: string,
    relatedId: string,
    typesList: Array<users_enums_pb.UserRelationType>,
  }
}

export class CountUserRelationsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountUserRelationsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountUserRelationsResponse;
  hasError(): boolean;
  clearError(): CountUserRelationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserRelationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserRelationsResponse): CountUserRelationsResponse.AsObject;
  static serializeBinaryToWriter(message: CountUserRelationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserRelationsResponse;
  static deserializeBinaryFromReader(message: CountUserRelationsResponse, reader: jspb.BinaryReader): CountUserRelationsResponse;
}

export namespace CountUserRelationsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateUserRelationRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreateUserRelationRequest;

  getRelatedId(): string;
  setRelatedId(value: string): CreateUserRelationRequest;

  getType(): users_enums_pb.UserRelationType;
  setType(value: users_enums_pb.UserRelationType): CreateUserRelationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRelationRequest): CreateUserRelationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRelationRequest;
  static deserializeBinaryFromReader(message: CreateUserRelationRequest, reader: jspb.BinaryReader): CreateUserRelationRequest;
}

export namespace CreateUserRelationRequest {
  export type AsObject = {
    userId: string,
    relatedId: string,
    type: users_enums_pb.UserRelationType,
  }
}

export class CreateUserRelationResponse extends jspb.Message {
  getInfo(): users_models_pb.UserRelationInfo | undefined;
  setInfo(value?: users_models_pb.UserRelationInfo): CreateUserRelationResponse;
  hasInfo(): boolean;
  clearInfo(): CreateUserRelationResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateUserRelationResponse;
  hasError(): boolean;
  clearError(): CreateUserRelationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRelationResponse): CreateUserRelationResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRelationResponse;
  static deserializeBinaryFromReader(message: CreateUserRelationResponse, reader: jspb.BinaryReader): CreateUserRelationResponse;
}

export namespace CreateUserRelationResponse {
  export type AsObject = {
    info?: users_models_pb.UserRelationInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteUserRelationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserRelationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRelationRequest): DeleteUserRelationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRelationRequest;
  static deserializeBinaryFromReader(message: DeleteUserRelationRequest, reader: jspb.BinaryReader): DeleteUserRelationRequest;
}

export namespace DeleteUserRelationRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteUserRelationResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteUserRelationResponse;
  hasError(): boolean;
  clearError(): DeleteUserRelationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRelationResponse): DeleteUserRelationResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRelationResponse;
  static deserializeBinaryFromReader(message: DeleteUserRelationResponse, reader: jspb.BinaryReader): DeleteUserRelationResponse;
}

export namespace DeleteUserRelationResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class AcceptUserRelationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): AcceptUserRelationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptUserRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptUserRelationRequest): AcceptUserRelationRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptUserRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptUserRelationRequest;
  static deserializeBinaryFromReader(message: AcceptUserRelationRequest, reader: jspb.BinaryReader): AcceptUserRelationRequest;
}

export namespace AcceptUserRelationRequest {
  export type AsObject = {
    id: string,
  }
}

export class AcceptUserRelationResponse extends jspb.Message {
  getInfo(): users_models_pb.UserRelationInfo | undefined;
  setInfo(value?: users_models_pb.UserRelationInfo): AcceptUserRelationResponse;
  hasInfo(): boolean;
  clearInfo(): AcceptUserRelationResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): AcceptUserRelationResponse;
  hasError(): boolean;
  clearError(): AcceptUserRelationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptUserRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptUserRelationResponse): AcceptUserRelationResponse.AsObject;
  static serializeBinaryToWriter(message: AcceptUserRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptUserRelationResponse;
  static deserializeBinaryFromReader(message: AcceptUserRelationResponse, reader: jspb.BinaryReader): AcceptUserRelationResponse;
}

export namespace AcceptUserRelationResponse {
  export type AsObject = {
    info?: users_models_pb.UserRelationInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeclineUserRelationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeclineUserRelationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclineUserRelationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeclineUserRelationRequest): DeclineUserRelationRequest.AsObject;
  static serializeBinaryToWriter(message: DeclineUserRelationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclineUserRelationRequest;
  static deserializeBinaryFromReader(message: DeclineUserRelationRequest, reader: jspb.BinaryReader): DeclineUserRelationRequest;
}

export namespace DeclineUserRelationRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeclineUserRelationResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeclineUserRelationResponse;
  hasError(): boolean;
  clearError(): DeclineUserRelationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclineUserRelationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeclineUserRelationResponse): DeclineUserRelationResponse.AsObject;
  static serializeBinaryToWriter(message: DeclineUserRelationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclineUserRelationResponse;
  static deserializeBinaryFromReader(message: DeclineUserRelationResponse, reader: jspb.BinaryReader): DeclineUserRelationResponse;
}

export namespace DeclineUserRelationResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class TokenizeStorageObjectRequest extends jspb.Message {
  getType(): string;
  setType(value: string): TokenizeStorageObjectRequest;

  getSize(): number;
  setSize(value: number): TokenizeStorageObjectRequest;

  getHash(): string;
  setHash(value: string): TokenizeStorageObjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenizeStorageObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenizeStorageObjectRequest): TokenizeStorageObjectRequest.AsObject;
  static serializeBinaryToWriter(message: TokenizeStorageObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenizeStorageObjectRequest;
  static deserializeBinaryFromReader(message: TokenizeStorageObjectRequest, reader: jspb.BinaryReader): TokenizeStorageObjectRequest;
}

export namespace TokenizeStorageObjectRequest {
  export type AsObject = {
    type: string,
    size: number,
    hash: string,
  }
}

export class TokenizeStorageObjectResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokenizeStorageObjectResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): TokenizeStorageObjectResponse;
  hasError(): boolean;
  clearError(): TokenizeStorageObjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenizeStorageObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenizeStorageObjectResponse): TokenizeStorageObjectResponse.AsObject;
  static serializeBinaryToWriter(message: TokenizeStorageObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenizeStorageObjectResponse;
  static deserializeBinaryFromReader(message: TokenizeStorageObjectResponse, reader: jspb.BinaryReader): TokenizeStorageObjectResponse;
}

export namespace TokenizeStorageObjectResponse {
  export type AsObject = {
    token: string,
    error?: error_models_pb.Error.AsObject,
  }
}

