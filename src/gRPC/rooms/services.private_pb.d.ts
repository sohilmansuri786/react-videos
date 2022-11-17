import * as jspb from 'google-protobuf'

import * as rooms_enums_pb from '../rooms/enums_pb';
import * as rooms_models_pb from '../rooms/models_pb';
import * as error_models_pb from '../error/models_pb';


export class GetChatInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): GetChatInternallyRequest;

  getEventId(): string;
  setEventId(value: string): GetChatInternallyRequest;

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
    roomId: string,
    eventId: string,
  }
}

export class GetChatInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.ChatInfo | undefined;
  setInfo(value?: rooms_models_pb.ChatInfo): GetChatInternallyResponse;
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
    info?: rooms_models_pb.ChatInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListChatsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListChatsInternallyRequest;
  clearIdsList(): ListChatsInternallyRequest;
  addIds(value: string, index?: number): ListChatsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.ChatType>;
  setTypesList(value: Array<rooms_enums_pb.ChatType>): ListChatsInternallyRequest;
  clearTypesList(): ListChatsInternallyRequest;
  addTypes(value: rooms_enums_pb.ChatType, index?: number): ListChatsInternallyRequest;

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
    typesList: Array<rooms_enums_pb.ChatType>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListChatsInternallyResponse extends jspb.Message {
  getChatsList(): Array<rooms_models_pb.ChatInfo>;
  setChatsList(value: Array<rooms_models_pb.ChatInfo>): ListChatsInternallyResponse;
  clearChatsList(): ListChatsInternallyResponse;
  addChats(value?: rooms_models_pb.ChatInfo, index?: number): rooms_models_pb.ChatInfo;

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
    chatsList: Array<rooms_models_pb.ChatInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class StateChatsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): StateChatsInternallyRequest;
  clearIdsList(): StateChatsInternallyRequest;
  addIds(value: string, index?: number): StateChatsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): StateChatsInternallyRequest;
  clearRoomIdsList(): StateChatsInternallyRequest;
  addRoomIds(value: string, index?: number): StateChatsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): StateChatsInternallyRequest;
  clearEventIdsList(): StateChatsInternallyRequest;
  addEventIds(value: string, index?: number): StateChatsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateChatsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateChatsInternallyRequest): StateChatsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: StateChatsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateChatsInternallyRequest;
  static deserializeBinaryFromReader(message: StateChatsInternallyRequest, reader: jspb.BinaryReader): StateChatsInternallyRequest;
}

export namespace StateChatsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    eventIdsList: Array<string>,
  }
}

export class StateChatsInternallyResponse extends jspb.Message {
  getStatesList(): Array<rooms_models_pb.ChatState>;
  setStatesList(value: Array<rooms_models_pb.ChatState>): StateChatsInternallyResponse;
  clearStatesList(): StateChatsInternallyResponse;
  addStates(value?: rooms_models_pb.ChatState, index?: number): rooms_models_pb.ChatState;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): StateChatsInternallyResponse;
  hasError(): boolean;
  clearError(): StateChatsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateChatsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateChatsInternallyResponse): StateChatsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: StateChatsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateChatsInternallyResponse;
  static deserializeBinaryFromReader(message: StateChatsInternallyResponse, reader: jspb.BinaryReader): StateChatsInternallyResponse;
}

export namespace StateChatsInternallyResponse {
  export type AsObject = {
    statesList: Array<rooms_models_pb.ChatState.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountChatsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountChatsInternallyRequest;
  clearIdsList(): CountChatsInternallyRequest;
  addIds(value: string, index?: number): CountChatsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.ChatType>;
  setTypesList(value: Array<rooms_enums_pb.ChatType>): CountChatsInternallyRequest;
  clearTypesList(): CountChatsInternallyRequest;
  addTypes(value: rooms_enums_pb.ChatType, index?: number): CountChatsInternallyRequest;

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
    typesList: Array<rooms_enums_pb.ChatType>,
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

  getType(): rooms_enums_pb.ChatType;
  setType(value: rooms_enums_pb.ChatType): CreateChatInternallyRequest;

  getStatus(): rooms_enums_pb.ChatStatus;
  setStatus(value: rooms_enums_pb.ChatStatus): CreateChatInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateChatInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateChatInternallyRequest;

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
    type: rooms_enums_pb.ChatType,
    status: rooms_enums_pb.ChatStatus,
    createdAt: number,
    updatedAt: number,
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
  getChatsList(): Array<rooms_models_pb.ChatInfo>;
  setChatsList(value: Array<rooms_models_pb.ChatInfo>): CreateChatsInternallyResponse;
  clearChatsList(): CreateChatsInternallyResponse;
  addChats(value?: rooms_models_pb.ChatInfo, index?: number): rooms_models_pb.ChatInfo;

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
    chatsList: Array<rooms_models_pb.ChatInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateChatInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateChatInternallyRequest;

  getStatus(): rooms_models_pb.ChatStatusValue | undefined;
  setStatus(value?: rooms_models_pb.ChatStatusValue): UpdateChatInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateChatInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatInternallyRequest): UpdateChatInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChatInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateChatInternallyRequest, reader: jspb.BinaryReader): UpdateChatInternallyRequest;
}

export namespace UpdateChatInternallyRequest {
  export type AsObject = {
    id: string,
    status?: rooms_models_pb.ChatStatusValue.AsObject,
  }
}

export class UpdateChatsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateChatInternallyRequest>;
  setRequestsList(value: Array<UpdateChatInternallyRequest>): UpdateChatsInternallyRequest;
  clearRequestsList(): UpdateChatsInternallyRequest;
  addRequests(value?: UpdateChatInternallyRequest, index?: number): UpdateChatInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatsInternallyRequest): UpdateChatsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChatsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateChatsInternallyRequest, reader: jspb.BinaryReader): UpdateChatsInternallyRequest;
}

export namespace UpdateChatsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateChatInternallyRequest.AsObject>,
  }
}

export class UpdateChatsInternallyResponse extends jspb.Message {
  getChatsList(): Array<rooms_models_pb.ChatInfo>;
  setChatsList(value: Array<rooms_models_pb.ChatInfo>): UpdateChatsInternallyResponse;
  clearChatsList(): UpdateChatsInternallyResponse;
  addChats(value?: rooms_models_pb.ChatInfo, index?: number): rooms_models_pb.ChatInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateChatsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateChatsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatsInternallyResponse): UpdateChatsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateChatsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateChatsInternallyResponse, reader: jspb.BinaryReader): UpdateChatsInternallyResponse;
}

export namespace UpdateChatsInternallyResponse {
  export type AsObject = {
    chatsList: Array<rooms_models_pb.ChatInfo.AsObject>,
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
  getChatsList(): Array<rooms_models_pb.ChatInfo>;
  setChatsList(value: Array<rooms_models_pb.ChatInfo>): DeleteChatsInternallyResponse;
  clearChatsList(): DeleteChatsInternallyResponse;
  addChats(value?: rooms_models_pb.ChatInfo, index?: number): rooms_models_pb.ChatInfo;

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
    chatsList: Array<rooms_models_pb.ChatInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountChatsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountChatsInternallyRequest;
  clearIdsList(): ListAndCountChatsInternallyRequest;
  addIds(value: string, index?: number): ListAndCountChatsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.ChatType>;
  setTypesList(value: Array<rooms_enums_pb.ChatType>): ListAndCountChatsInternallyRequest;
  clearTypesList(): ListAndCountChatsInternallyRequest;
  addTypes(value: rooms_enums_pb.ChatType, index?: number): ListAndCountChatsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountChatsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountChatsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountChatsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountChatsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountChatsInternallyRequest): ListAndCountChatsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountChatsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountChatsInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountChatsInternallyRequest, reader: jspb.BinaryReader): ListAndCountChatsInternallyRequest;
}

export namespace ListAndCountChatsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    typesList: Array<rooms_enums_pb.ChatType>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountChatsInternallyResponse extends jspb.Message {
  getChatsList(): Array<rooms_models_pb.ChatInfo>;
  setChatsList(value: Array<rooms_models_pb.ChatInfo>): ListAndCountChatsInternallyResponse;
  clearChatsList(): ListAndCountChatsInternallyResponse;
  addChats(value?: rooms_models_pb.ChatInfo, index?: number): rooms_models_pb.ChatInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountChatsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountChatsInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountChatsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountChatsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountChatsInternallyResponse): ListAndCountChatsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountChatsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountChatsInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountChatsInternallyResponse, reader: jspb.BinaryReader): ListAndCountChatsInternallyResponse;
}

export namespace ListAndCountChatsInternallyResponse {
  export type AsObject = {
    chatsList: Array<rooms_models_pb.ChatInfo.AsObject>,
    total: number,
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
  getInfo(): rooms_models_pb.ChatMessageInfo | undefined;
  setInfo(value?: rooms_models_pb.ChatMessageInfo): GetChatMessageInternallyResponse;
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
    info?: rooms_models_pb.ChatMessageInfo.AsObject,
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
  getMessagesList(): Array<rooms_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<rooms_models_pb.ChatMessageInfo>): ListChatMessagesInternallyResponse;
  clearMessagesList(): ListChatMessagesInternallyResponse;
  addMessages(value?: rooms_models_pb.ChatMessageInfo, index?: number): rooms_models_pb.ChatMessageInfo;

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
    messagesList: Array<rooms_models_pb.ChatMessageInfo.AsObject>,
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

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateChatMessageInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateChatMessageInternallyRequest;

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
    createdAt: number,
    updatedAt: number,
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
  getMessagesList(): Array<rooms_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<rooms_models_pb.ChatMessageInfo>): CreateChatMessagesInternallyResponse;
  clearMessagesList(): CreateChatMessagesInternallyResponse;
  addMessages(value?: rooms_models_pb.ChatMessageInfo, index?: number): rooms_models_pb.ChatMessageInfo;

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
    messagesList: Array<rooms_models_pb.ChatMessageInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateChatMessageInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateChatMessageInternallyRequest;

  getContent(): rooms_models_pb.ChatMessageContentValue | undefined;
  setContent(value?: rooms_models_pb.ChatMessageContentValue): UpdateChatMessageInternallyRequest;
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
    content?: rooms_models_pb.ChatMessageContentValue.AsObject,
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
  getMessagesList(): Array<rooms_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<rooms_models_pb.ChatMessageInfo>): UpdateChatMessagesInternallyResponse;
  clearMessagesList(): UpdateChatMessagesInternallyResponse;
  addMessages(value?: rooms_models_pb.ChatMessageInfo, index?: number): rooms_models_pb.ChatMessageInfo;

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
    messagesList: Array<rooms_models_pb.ChatMessageInfo.AsObject>,
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
  getMessagesList(): Array<rooms_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<rooms_models_pb.ChatMessageInfo>): DeleteChatMessagesInternallyResponse;
  clearMessagesList(): DeleteChatMessagesInternallyResponse;
  addMessages(value?: rooms_models_pb.ChatMessageInfo, index?: number): rooms_models_pb.ChatMessageInfo;

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
    messagesList: Array<rooms_models_pb.ChatMessageInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountChatMessagesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountChatMessagesInternallyRequest;
  clearIdsList(): ListAndCountChatMessagesInternallyRequest;
  addIds(value: string, index?: number): ListAndCountChatMessagesInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): ListAndCountChatMessagesInternallyRequest;
  clearChatIdsList(): ListAndCountChatMessagesInternallyRequest;
  addChatIds(value: string, index?: number): ListAndCountChatMessagesInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListAndCountChatMessagesInternallyRequest;
  clearUserIdsList(): ListAndCountChatMessagesInternallyRequest;
  addUserIds(value: string, index?: number): ListAndCountChatMessagesInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountChatMessagesInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountChatMessagesInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountChatMessagesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountChatMessagesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountChatMessagesInternallyRequest): ListAndCountChatMessagesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountChatMessagesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountChatMessagesInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountChatMessagesInternallyRequest, reader: jspb.BinaryReader): ListAndCountChatMessagesInternallyRequest;
}

export namespace ListAndCountChatMessagesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountChatMessagesInternallyResponse extends jspb.Message {
  getMessagesList(): Array<rooms_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<rooms_models_pb.ChatMessageInfo>): ListAndCountChatMessagesInternallyResponse;
  clearMessagesList(): ListAndCountChatMessagesInternallyResponse;
  addMessages(value?: rooms_models_pb.ChatMessageInfo, index?: number): rooms_models_pb.ChatMessageInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountChatMessagesInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountChatMessagesInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountChatMessagesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountChatMessagesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountChatMessagesInternallyResponse): ListAndCountChatMessagesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountChatMessagesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountChatMessagesInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountChatMessagesInternallyResponse, reader: jspb.BinaryReader): ListAndCountChatMessagesInternallyResponse;
}

export namespace ListAndCountChatMessagesInternallyResponse {
  export type AsObject = {
    messagesList: Array<rooms_models_pb.ChatMessageInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetUserTicketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserTicketInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetUserTicketInternallyRequest;

  getEventId(): string;
  setEventId(value: string): GetUserTicketInternallyRequest;

  getOrderId(): string;
  setOrderId(value: string): GetUserTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTicketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTicketInternallyRequest): GetUserTicketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserTicketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTicketInternallyRequest;
  static deserializeBinaryFromReader(message: GetUserTicketInternallyRequest, reader: jspb.BinaryReader): GetUserTicketInternallyRequest;
}

export namespace GetUserTicketInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    eventId: string,
    orderId: string,
  }
}

export class GetUserTicketInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.UserTicketInfo | undefined;
  setInfo(value?: rooms_models_pb.UserTicketInfo): GetUserTicketInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetUserTicketInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetUserTicketInternallyResponse;
  hasError(): boolean;
  clearError(): GetUserTicketInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTicketInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTicketInternallyResponse): GetUserTicketInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserTicketInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTicketInternallyResponse;
  static deserializeBinaryFromReader(message: GetUserTicketInternallyResponse, reader: jspb.BinaryReader): GetUserTicketInternallyResponse;
}

export namespace GetUserTicketInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.UserTicketInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListUserTicketsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListUserTicketsInternallyRequest;
  clearIdsList(): ListUserTicketsInternallyRequest;
  addIds(value: string, index?: number): ListUserTicketsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListUserTicketsInternallyRequest;
  clearUserIdsList(): ListUserTicketsInternallyRequest;
  addUserIds(value: string, index?: number): ListUserTicketsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListUserTicketsInternallyRequest;
  clearEventIdsList(): ListUserTicketsInternallyRequest;
  addEventIds(value: string, index?: number): ListUserTicketsInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.UserTicketStatus>;
  setStatusesList(value: Array<rooms_enums_pb.UserTicketStatus>): ListUserTicketsInternallyRequest;
  clearStatusesList(): ListUserTicketsInternallyRequest;
  addStatuses(value: rooms_enums_pb.UserTicketStatus, index?: number): ListUserTicketsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListUserTicketsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListUserTicketsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListUserTicketsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserTicketsInternallyRequest): ListUserTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: ListUserTicketsInternallyRequest, reader: jspb.BinaryReader): ListUserTicketsInternallyRequest;
}

export namespace ListUserTicketsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    eventIdsList: Array<string>,
    statusesList: Array<rooms_enums_pb.UserTicketStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListUserTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<rooms_models_pb.UserTicketInfo>;
  setTicketsList(value: Array<rooms_models_pb.UserTicketInfo>): ListUserTicketsInternallyResponse;
  clearTicketsList(): ListUserTicketsInternallyResponse;
  addTickets(value?: rooms_models_pb.UserTicketInfo, index?: number): rooms_models_pb.UserTicketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListUserTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): ListUserTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserTicketsInternallyResponse): ListUserTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: ListUserTicketsInternallyResponse, reader: jspb.BinaryReader): ListUserTicketsInternallyResponse;
}

export namespace ListUserTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<rooms_models_pb.UserTicketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountUserTicketsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountUserTicketsInternallyRequest;
  clearIdsList(): CountUserTicketsInternallyRequest;
  addIds(value: string, index?: number): CountUserTicketsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountUserTicketsInternallyRequest;
  clearUserIdsList(): CountUserTicketsInternallyRequest;
  addUserIds(value: string, index?: number): CountUserTicketsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): CountUserTicketsInternallyRequest;
  clearEventIdsList(): CountUserTicketsInternallyRequest;
  addEventIds(value: string, index?: number): CountUserTicketsInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.UserTicketStatus>;
  setStatusesList(value: Array<rooms_enums_pb.UserTicketStatus>): CountUserTicketsInternallyRequest;
  clearStatusesList(): CountUserTicketsInternallyRequest;
  addStatuses(value: rooms_enums_pb.UserTicketStatus, index?: number): CountUserTicketsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserTicketsInternallyRequest): CountUserTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountUserTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: CountUserTicketsInternallyRequest, reader: jspb.BinaryReader): CountUserTicketsInternallyRequest;
}

export namespace CountUserTicketsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    eventIdsList: Array<string>,
    statusesList: Array<rooms_enums_pb.UserTicketStatus>,
  }
}

export class CountUserTicketsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountUserTicketsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountUserTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): CountUserTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserTicketsInternallyResponse): CountUserTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountUserTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: CountUserTicketsInternallyResponse, reader: jspb.BinaryReader): CountUserTicketsInternallyResponse;
}

export namespace CountUserTicketsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateUserTicketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateUserTicketInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateUserTicketInternallyRequest;

  getEventId(): string;
  setEventId(value: string): CreateUserTicketInternallyRequest;

  getOrderId(): string;
  setOrderId(value: string): CreateUserTicketInternallyRequest;

  getStatus(): rooms_enums_pb.UserTicketStatus;
  setStatus(value: rooms_enums_pb.UserTicketStatus): CreateUserTicketInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateUserTicketInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateUserTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserTicketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserTicketInternallyRequest): CreateUserTicketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserTicketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserTicketInternallyRequest;
  static deserializeBinaryFromReader(message: CreateUserTicketInternallyRequest, reader: jspb.BinaryReader): CreateUserTicketInternallyRequest;
}

export namespace CreateUserTicketInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    eventId: string,
    orderId: string,
    status: rooms_enums_pb.UserTicketStatus,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateUserTicketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateUserTicketInternallyRequest>;
  setRequestsList(value: Array<CreateUserTicketInternallyRequest>): CreateUserTicketsInternallyRequest;
  clearRequestsList(): CreateUserTicketsInternallyRequest;
  addRequests(value?: CreateUserTicketInternallyRequest, index?: number): CreateUserTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserTicketsInternallyRequest): CreateUserTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateUserTicketsInternallyRequest, reader: jspb.BinaryReader): CreateUserTicketsInternallyRequest;
}

export namespace CreateUserTicketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateUserTicketInternallyRequest.AsObject>,
  }
}

export class CreateUserTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<rooms_models_pb.UserTicketInfo>;
  setTicketsList(value: Array<rooms_models_pb.UserTicketInfo>): CreateUserTicketsInternallyResponse;
  clearTicketsList(): CreateUserTicketsInternallyResponse;
  addTickets(value?: rooms_models_pb.UserTicketInfo, index?: number): rooms_models_pb.UserTicketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateUserTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateUserTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserTicketsInternallyResponse): CreateUserTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateUserTicketsInternallyResponse, reader: jspb.BinaryReader): CreateUserTicketsInternallyResponse;
}

export namespace CreateUserTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<rooms_models_pb.UserTicketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateUserTicketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUserTicketInternallyRequest;

  getStatus(): rooms_models_pb.UserTicketStatusValue | undefined;
  setStatus(value?: rooms_models_pb.UserTicketStatusValue): UpdateUserTicketInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateUserTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserTicketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserTicketInternallyRequest): UpdateUserTicketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserTicketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserTicketInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateUserTicketInternallyRequest, reader: jspb.BinaryReader): UpdateUserTicketInternallyRequest;
}

export namespace UpdateUserTicketInternallyRequest {
  export type AsObject = {
    id: string,
    status?: rooms_models_pb.UserTicketStatusValue.AsObject,
  }
}

export class UpdateUserTicketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateUserTicketInternallyRequest>;
  setRequestsList(value: Array<UpdateUserTicketInternallyRequest>): UpdateUserTicketsInternallyRequest;
  clearRequestsList(): UpdateUserTicketsInternallyRequest;
  addRequests(value?: UpdateUserTicketInternallyRequest, index?: number): UpdateUserTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserTicketsInternallyRequest): UpdateUserTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateUserTicketsInternallyRequest, reader: jspb.BinaryReader): UpdateUserTicketsInternallyRequest;
}

export namespace UpdateUserTicketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateUserTicketInternallyRequest.AsObject>,
  }
}

export class UpdateUserTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<rooms_models_pb.UserTicketInfo>;
  setTicketsList(value: Array<rooms_models_pb.UserTicketInfo>): UpdateUserTicketsInternallyResponse;
  clearTicketsList(): UpdateUserTicketsInternallyResponse;
  addTickets(value?: rooms_models_pb.UserTicketInfo, index?: number): rooms_models_pb.UserTicketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateUserTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateUserTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserTicketsInternallyResponse): UpdateUserTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateUserTicketsInternallyResponse, reader: jspb.BinaryReader): UpdateUserTicketsInternallyResponse;
}

export namespace UpdateUserTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<rooms_models_pb.UserTicketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteUserTicketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserTicketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserTicketInternallyRequest): DeleteUserTicketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserTicketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserTicketInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteUserTicketInternallyRequest, reader: jspb.BinaryReader): DeleteUserTicketInternallyRequest;
}

export namespace DeleteUserTicketInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteUserTicketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteUserTicketInternallyRequest>;
  setRequestsList(value: Array<DeleteUserTicketInternallyRequest>): DeleteUserTicketsInternallyRequest;
  clearRequestsList(): DeleteUserTicketsInternallyRequest;
  addRequests(value?: DeleteUserTicketInternallyRequest, index?: number): DeleteUserTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserTicketsInternallyRequest): DeleteUserTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteUserTicketsInternallyRequest, reader: jspb.BinaryReader): DeleteUserTicketsInternallyRequest;
}

export namespace DeleteUserTicketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteUserTicketInternallyRequest.AsObject>,
  }
}

export class DeleteUserTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<rooms_models_pb.UserTicketInfo>;
  setTicketsList(value: Array<rooms_models_pb.UserTicketInfo>): DeleteUserTicketsInternallyResponse;
  clearTicketsList(): DeleteUserTicketsInternallyResponse;
  addTickets(value?: rooms_models_pb.UserTicketInfo, index?: number): rooms_models_pb.UserTicketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteUserTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteUserTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserTicketsInternallyResponse): DeleteUserTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteUserTicketsInternallyResponse, reader: jspb.BinaryReader): DeleteUserTicketsInternallyResponse;
}

export namespace DeleteUserTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<rooms_models_pb.UserTicketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountUserTicketsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountUserTicketsInternallyRequest;
  clearIdsList(): ListAndCountUserTicketsInternallyRequest;
  addIds(value: string, index?: number): ListAndCountUserTicketsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListAndCountUserTicketsInternallyRequest;
  clearUserIdsList(): ListAndCountUserTicketsInternallyRequest;
  addUserIds(value: string, index?: number): ListAndCountUserTicketsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListAndCountUserTicketsInternallyRequest;
  clearEventIdsList(): ListAndCountUserTicketsInternallyRequest;
  addEventIds(value: string, index?: number): ListAndCountUserTicketsInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.UserTicketStatus>;
  setStatusesList(value: Array<rooms_enums_pb.UserTicketStatus>): ListAndCountUserTicketsInternallyRequest;
  clearStatusesList(): ListAndCountUserTicketsInternallyRequest;
  addStatuses(value: rooms_enums_pb.UserTicketStatus, index?: number): ListAndCountUserTicketsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountUserTicketsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountUserTicketsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountUserTicketsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountUserTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountUserTicketsInternallyRequest): ListAndCountUserTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountUserTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountUserTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountUserTicketsInternallyRequest, reader: jspb.BinaryReader): ListAndCountUserTicketsInternallyRequest;
}

export namespace ListAndCountUserTicketsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    eventIdsList: Array<string>,
    statusesList: Array<rooms_enums_pb.UserTicketStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountUserTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<rooms_models_pb.UserTicketInfo>;
  setTicketsList(value: Array<rooms_models_pb.UserTicketInfo>): ListAndCountUserTicketsInternallyResponse;
  clearTicketsList(): ListAndCountUserTicketsInternallyResponse;
  addTickets(value?: rooms_models_pb.UserTicketInfo, index?: number): rooms_models_pb.UserTicketInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountUserTicketsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountUserTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountUserTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountUserTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountUserTicketsInternallyResponse): ListAndCountUserTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountUserTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountUserTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountUserTicketsInternallyResponse, reader: jspb.BinaryReader): ListAndCountUserTicketsInternallyResponse;
}

export namespace ListAndCountUserTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<rooms_models_pb.UserTicketInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoomInternallyRequest;

  getPid(): string;
  setPid(value: string): GetRoomInternallyRequest;

  getChatId(): string;
  setChatId(value: string): GetRoomInternallyRequest;

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
    pid: string,
    chatId: string,
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

export class ListRoomsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRoomsInternallyRequest;
  clearIdsList(): ListRoomsInternallyRequest;
  addIds(value: string, index?: number): ListRoomsInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): ListRoomsInternallyRequest;
  clearPidsList(): ListRoomsInternallyRequest;
  addPids(value: string, index?: number): ListRoomsInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): ListRoomsInternallyRequest;
  clearChatIdsList(): ListRoomsInternallyRequest;
  addChatIds(value: string, index?: number): ListRoomsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListRoomsInternallyRequest;
  clearUserIdsList(): ListRoomsInternallyRequest;
  addUserIds(value: string, index?: number): ListRoomsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.RoomType>;
  setTypesList(value: Array<rooms_enums_pb.RoomType>): ListRoomsInternallyRequest;
  clearTypesList(): ListRoomsInternallyRequest;
  addTypes(value: rooms_enums_pb.RoomType, index?: number): ListRoomsInternallyRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): ListRoomsInternallyRequest;
  clearRolesList(): ListRoomsInternallyRequest;
  addRoles(value: number, index?: number): ListRoomsInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.RoomUserStatus>;
  setStatusesList(value: Array<rooms_enums_pb.RoomUserStatus>): ListRoomsInternallyRequest;
  clearStatusesList(): ListRoomsInternallyRequest;
  addStatuses(value: rooms_enums_pb.RoomUserStatus, index?: number): ListRoomsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListRoomsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListRoomsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListRoomsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsInternallyRequest): ListRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: ListRoomsInternallyRequest, reader: jspb.BinaryReader): ListRoomsInternallyRequest;
}

export namespace ListRoomsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
    typesList: Array<rooms_enums_pb.RoomType>,
    rolesList: Array<number>,
    statusesList: Array<rooms_enums_pb.RoomUserStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRoomsInternallyResponse extends jspb.Message {
  getRoomsList(): Array<rooms_models_pb.RoomInfo>;
  setRoomsList(value: Array<rooms_models_pb.RoomInfo>): ListRoomsInternallyResponse;
  clearRoomsList(): ListRoomsInternallyResponse;
  addRooms(value?: rooms_models_pb.RoomInfo, index?: number): rooms_models_pb.RoomInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): ListRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsInternallyResponse): ListRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: ListRoomsInternallyResponse, reader: jspb.BinaryReader): ListRoomsInternallyResponse;
}

export namespace ListRoomsInternallyResponse {
  export type AsObject = {
    roomsList: Array<rooms_models_pb.RoomInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class StateRoomsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): StateRoomsInternallyRequest;
  clearIdsList(): StateRoomsInternallyRequest;
  addIds(value: string, index?: number): StateRoomsInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): StateRoomsInternallyRequest;
  clearPidsList(): StateRoomsInternallyRequest;
  addPids(value: string, index?: number): StateRoomsInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): StateRoomsInternallyRequest;
  clearChatIdsList(): StateRoomsInternallyRequest;
  addChatIds(value: string, index?: number): StateRoomsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): StateRoomsInternallyRequest;
  clearUserIdsList(): StateRoomsInternallyRequest;
  addUserIds(value: string, index?: number): StateRoomsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): StateRoomsInternallyRequest;
  clearEventIdsList(): StateRoomsInternallyRequest;
  addEventIds(value: string, index?: number): StateRoomsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateRoomsInternallyRequest): StateRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: StateRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: StateRoomsInternallyRequest, reader: jspb.BinaryReader): StateRoomsInternallyRequest;
}

export namespace StateRoomsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
    eventIdsList: Array<string>,
  }
}

export class StateRoomsInternallyResponse extends jspb.Message {
  getStatesList(): Array<rooms_models_pb.RoomState>;
  setStatesList(value: Array<rooms_models_pb.RoomState>): StateRoomsInternallyResponse;
  clearStatesList(): StateRoomsInternallyResponse;
  addStates(value?: rooms_models_pb.RoomState, index?: number): rooms_models_pb.RoomState;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): StateRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): StateRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateRoomsInternallyResponse): StateRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: StateRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: StateRoomsInternallyResponse, reader: jspb.BinaryReader): StateRoomsInternallyResponse;
}

export namespace StateRoomsInternallyResponse {
  export type AsObject = {
    statesList: Array<rooms_models_pb.RoomState.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRoomsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountRoomsInternallyRequest;
  clearIdsList(): CountRoomsInternallyRequest;
  addIds(value: string, index?: number): CountRoomsInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): CountRoomsInternallyRequest;
  clearPidsList(): CountRoomsInternallyRequest;
  addPids(value: string, index?: number): CountRoomsInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): CountRoomsInternallyRequest;
  clearChatIdsList(): CountRoomsInternallyRequest;
  addChatIds(value: string, index?: number): CountRoomsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountRoomsInternallyRequest;
  clearUserIdsList(): CountRoomsInternallyRequest;
  addUserIds(value: string, index?: number): CountRoomsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.RoomType>;
  setTypesList(value: Array<rooms_enums_pb.RoomType>): CountRoomsInternallyRequest;
  clearTypesList(): CountRoomsInternallyRequest;
  addTypes(value: rooms_enums_pb.RoomType, index?: number): CountRoomsInternallyRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): CountRoomsInternallyRequest;
  clearRolesList(): CountRoomsInternallyRequest;
  addRoles(value: number, index?: number): CountRoomsInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.RoomUserStatus>;
  setStatusesList(value: Array<rooms_enums_pb.RoomUserStatus>): CountRoomsInternallyRequest;
  clearStatusesList(): CountRoomsInternallyRequest;
  addStatuses(value: rooms_enums_pb.RoomUserStatus, index?: number): CountRoomsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomsInternallyRequest): CountRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: CountRoomsInternallyRequest, reader: jspb.BinaryReader): CountRoomsInternallyRequest;
}

export namespace CountRoomsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
    typesList: Array<rooms_enums_pb.RoomType>,
    rolesList: Array<number>,
    statusesList: Array<rooms_enums_pb.RoomUserStatus>,
  }
}

export class CountRoomsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRoomsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): CountRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomsInternallyResponse): CountRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: CountRoomsInternallyResponse, reader: jspb.BinaryReader): CountRoomsInternallyResponse;
}

export namespace CountRoomsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateRoomInternallyRequest;

  getPid(): string;
  setPid(value: string): CreateRoomInternallyRequest;

  getChatId(): string;
  setChatId(value: string): CreateRoomInternallyRequest;

  getName(): string;
  setName(value: string): CreateRoomInternallyRequest;

  getType(): rooms_enums_pb.RoomType;
  setType(value: rooms_enums_pb.RoomType): CreateRoomInternallyRequest;

  getLimit(): number;
  setLimit(value: number): CreateRoomInternallyRequest;

  getAccess(): rooms_enums_pb.RoomAccess;
  setAccess(value: rooms_enums_pb.RoomAccess): CreateRoomInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateRoomInternallyRequest;

  getPassword(): string;
  setPassword(value: string): CreateRoomInternallyRequest;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): CreateRoomInternallyRequest;

  getBackgroundUrl(): string;
  setBackgroundUrl(value: string): CreateRoomInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateRoomInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomInternallyRequest): CreateRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomInternallyRequest;
  static deserializeBinaryFromReader(message: CreateRoomInternallyRequest, reader: jspb.BinaryReader): CreateRoomInternallyRequest;
}

export namespace CreateRoomInternallyRequest {
  export type AsObject = {
    id: string,
    pid: string,
    chatId: string,
    name: string,
    type: rooms_enums_pb.RoomType,
    limit: number,
    access: rooms_enums_pb.RoomAccess,
    region: string,
    password: string,
    thumbnailUrl: string,
    backgroundUrl: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateRoomsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateRoomInternallyRequest>;
  setRequestsList(value: Array<CreateRoomInternallyRequest>): CreateRoomsInternallyRequest;
  clearRequestsList(): CreateRoomsInternallyRequest;
  addRequests(value?: CreateRoomInternallyRequest, index?: number): CreateRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomsInternallyRequest): CreateRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateRoomsInternallyRequest, reader: jspb.BinaryReader): CreateRoomsInternallyRequest;
}

export namespace CreateRoomsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateRoomInternallyRequest.AsObject>,
  }
}

export class CreateRoomsInternallyResponse extends jspb.Message {
  getRoomsList(): Array<rooms_models_pb.RoomInfo>;
  setRoomsList(value: Array<rooms_models_pb.RoomInfo>): CreateRoomsInternallyResponse;
  clearRoomsList(): CreateRoomsInternallyResponse;
  addRooms(value?: rooms_models_pb.RoomInfo, index?: number): rooms_models_pb.RoomInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomsInternallyResponse): CreateRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateRoomsInternallyResponse, reader: jspb.BinaryReader): CreateRoomsInternallyResponse;
}

export namespace CreateRoomsInternallyResponse {
  export type AsObject = {
    roomsList: Array<rooms_models_pb.RoomInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomInternallyRequest;

  getPid(): rooms_models_pb.RoomPidValue | undefined;
  setPid(value?: rooms_models_pb.RoomPidValue): UpdateRoomInternallyRequest;
  hasPid(): boolean;
  clearPid(): UpdateRoomInternallyRequest;

  getName(): rooms_models_pb.RoomNameValue | undefined;
  setName(value?: rooms_models_pb.RoomNameValue): UpdateRoomInternallyRequest;
  hasName(): boolean;
  clearName(): UpdateRoomInternallyRequest;

  getType(): rooms_models_pb.RoomTypeValue | undefined;
  setType(value?: rooms_models_pb.RoomTypeValue): UpdateRoomInternallyRequest;
  hasType(): boolean;
  clearType(): UpdateRoomInternallyRequest;

  getLimit(): rooms_models_pb.RoomLimitValue | undefined;
  setLimit(value?: rooms_models_pb.RoomLimitValue): UpdateRoomInternallyRequest;
  hasLimit(): boolean;
  clearLimit(): UpdateRoomInternallyRequest;

  getAccess(): rooms_models_pb.RoomAccessValue | undefined;
  setAccess(value?: rooms_models_pb.RoomAccessValue): UpdateRoomInternallyRequest;
  hasAccess(): boolean;
  clearAccess(): UpdateRoomInternallyRequest;

  getPassword(): rooms_models_pb.RoomPasswordValue | undefined;
  setPassword(value?: rooms_models_pb.RoomPasswordValue): UpdateRoomInternallyRequest;
  hasPassword(): boolean;
  clearPassword(): UpdateRoomInternallyRequest;

  getThumbnail(): rooms_models_pb.RoomBackgroundValue | undefined;
  setThumbnail(value?: rooms_models_pb.RoomBackgroundValue): UpdateRoomInternallyRequest;
  hasThumbnail(): boolean;
  clearThumbnail(): UpdateRoomInternallyRequest;

  getBackground(): rooms_models_pb.RoomBackgroundValue | undefined;
  setBackground(value?: rooms_models_pb.RoomBackgroundValue): UpdateRoomInternallyRequest;
  hasBackground(): boolean;
  clearBackground(): UpdateRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomInternallyRequest): UpdateRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateRoomInternallyRequest, reader: jspb.BinaryReader): UpdateRoomInternallyRequest;
}

export namespace UpdateRoomInternallyRequest {
  export type AsObject = {
    id: string,
    pid?: rooms_models_pb.RoomPidValue.AsObject,
    name?: rooms_models_pb.RoomNameValue.AsObject,
    type?: rooms_models_pb.RoomTypeValue.AsObject,
    limit?: rooms_models_pb.RoomLimitValue.AsObject,
    access?: rooms_models_pb.RoomAccessValue.AsObject,
    password?: rooms_models_pb.RoomPasswordValue.AsObject,
    thumbnail?: rooms_models_pb.RoomBackgroundValue.AsObject,
    background?: rooms_models_pb.RoomBackgroundValue.AsObject,
  }
}

export class UpdateRoomsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateRoomInternallyRequest>;
  setRequestsList(value: Array<UpdateRoomInternallyRequest>): UpdateRoomsInternallyRequest;
  clearRequestsList(): UpdateRoomsInternallyRequest;
  addRequests(value?: UpdateRoomInternallyRequest, index?: number): UpdateRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomsInternallyRequest): UpdateRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateRoomsInternallyRequest, reader: jspb.BinaryReader): UpdateRoomsInternallyRequest;
}

export namespace UpdateRoomsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateRoomInternallyRequest.AsObject>,
  }
}

export class UpdateRoomsInternallyResponse extends jspb.Message {
  getRoomsList(): Array<rooms_models_pb.RoomInfo>;
  setRoomsList(value: Array<rooms_models_pb.RoomInfo>): UpdateRoomsInternallyResponse;
  clearRoomsList(): UpdateRoomsInternallyResponse;
  addRooms(value?: rooms_models_pb.RoomInfo, index?: number): rooms_models_pb.RoomInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomsInternallyResponse): UpdateRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateRoomsInternallyResponse, reader: jspb.BinaryReader): UpdateRoomsInternallyResponse;
}

export namespace UpdateRoomsInternallyResponse {
  export type AsObject = {
    roomsList: Array<rooms_models_pb.RoomInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteRoomInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomInternallyRequest): DeleteRoomInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteRoomInternallyRequest, reader: jspb.BinaryReader): DeleteRoomInternallyRequest;
}

export namespace DeleteRoomInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRoomsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteRoomInternallyRequest>;
  setRequestsList(value: Array<DeleteRoomInternallyRequest>): DeleteRoomsInternallyRequest;
  clearRequestsList(): DeleteRoomsInternallyRequest;
  addRequests(value?: DeleteRoomInternallyRequest, index?: number): DeleteRoomInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomsInternallyRequest): DeleteRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteRoomsInternallyRequest, reader: jspb.BinaryReader): DeleteRoomsInternallyRequest;
}

export namespace DeleteRoomsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteRoomInternallyRequest.AsObject>,
  }
}

export class DeleteRoomsInternallyResponse extends jspb.Message {
  getRoomsList(): Array<rooms_models_pb.RoomInfo>;
  setRoomsList(value: Array<rooms_models_pb.RoomInfo>): DeleteRoomsInternallyResponse;
  clearRoomsList(): DeleteRoomsInternallyResponse;
  addRooms(value?: rooms_models_pb.RoomInfo, index?: number): rooms_models_pb.RoomInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomsInternallyResponse): DeleteRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteRoomsInternallyResponse, reader: jspb.BinaryReader): DeleteRoomsInternallyResponse;
}

export namespace DeleteRoomsInternallyResponse {
  export type AsObject = {
    roomsList: Array<rooms_models_pb.RoomInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountRoomsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountRoomsInternallyRequest;
  clearIdsList(): ListAndCountRoomsInternallyRequest;
  addIds(value: string, index?: number): ListAndCountRoomsInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): ListAndCountRoomsInternallyRequest;
  clearPidsList(): ListAndCountRoomsInternallyRequest;
  addPids(value: string, index?: number): ListAndCountRoomsInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): ListAndCountRoomsInternallyRequest;
  clearChatIdsList(): ListAndCountRoomsInternallyRequest;
  addChatIds(value: string, index?: number): ListAndCountRoomsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListAndCountRoomsInternallyRequest;
  clearUserIdsList(): ListAndCountRoomsInternallyRequest;
  addUserIds(value: string, index?: number): ListAndCountRoomsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.RoomType>;
  setTypesList(value: Array<rooms_enums_pb.RoomType>): ListAndCountRoomsInternallyRequest;
  clearTypesList(): ListAndCountRoomsInternallyRequest;
  addTypes(value: rooms_enums_pb.RoomType, index?: number): ListAndCountRoomsInternallyRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): ListAndCountRoomsInternallyRequest;
  clearRolesList(): ListAndCountRoomsInternallyRequest;
  addRoles(value: number, index?: number): ListAndCountRoomsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountRoomsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountRoomsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountRoomsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRoomsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRoomsInternallyRequest): ListAndCountRoomsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRoomsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRoomsInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountRoomsInternallyRequest, reader: jspb.BinaryReader): ListAndCountRoomsInternallyRequest;
}

export namespace ListAndCountRoomsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    chatIdsList: Array<string>,
    userIdsList: Array<string>,
    typesList: Array<rooms_enums_pb.RoomType>,
    rolesList: Array<number>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountRoomsInternallyResponse extends jspb.Message {
  getRoomsList(): Array<rooms_models_pb.RoomInfo>;
  setRoomsList(value: Array<rooms_models_pb.RoomInfo>): ListAndCountRoomsInternallyResponse;
  clearRoomsList(): ListAndCountRoomsInternallyResponse;
  addRooms(value?: rooms_models_pb.RoomInfo, index?: number): rooms_models_pb.RoomInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountRoomsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountRoomsInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountRoomsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRoomsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRoomsInternallyResponse): ListAndCountRoomsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRoomsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRoomsInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountRoomsInternallyResponse, reader: jspb.BinaryReader): ListAndCountRoomsInternallyResponse;
}

export namespace ListAndCountRoomsInternallyResponse {
  export type AsObject = {
    roomsList: Array<rooms_models_pb.RoomInfo.AsObject>,
    total: number,
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

export class ListRoomUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRoomUsersInternallyRequest;
  clearIdsList(): ListRoomUsersInternallyRequest;
  addIds(value: string, index?: number): ListRoomUsersInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListRoomUsersInternallyRequest;
  clearRoomIdsList(): ListRoomUsersInternallyRequest;
  addRoomIds(value: string, index?: number): ListRoomUsersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListRoomUsersInternallyRequest;
  clearUserIdsList(): ListRoomUsersInternallyRequest;
  addUserIds(value: string, index?: number): ListRoomUsersInternallyRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): ListRoomUsersInternallyRequest;
  clearRolesList(): ListRoomUsersInternallyRequest;
  addRoles(value: number, index?: number): ListRoomUsersInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.RoomUserStatus>;
  setStatusesList(value: Array<rooms_enums_pb.RoomUserStatus>): ListRoomUsersInternallyRequest;
  clearStatusesList(): ListRoomUsersInternallyRequest;
  addStatuses(value: rooms_enums_pb.RoomUserStatus, index?: number): ListRoomUsersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListRoomUsersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListRoomUsersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListRoomUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomUsersInternallyRequest): ListRoomUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomUsersInternallyRequest;
  static deserializeBinaryFromReader(message: ListRoomUsersInternallyRequest, reader: jspb.BinaryReader): ListRoomUsersInternallyRequest;
}

export namespace ListRoomUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    userIdsList: Array<string>,
    rolesList: Array<number>,
    statusesList: Array<rooms_enums_pb.RoomUserStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRoomUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<rooms_models_pb.RoomUserInfo>;
  setUsersList(value: Array<rooms_models_pb.RoomUserInfo>): ListRoomUsersInternallyResponse;
  clearUsersList(): ListRoomUsersInternallyResponse;
  addUsers(value?: rooms_models_pb.RoomUserInfo, index?: number): rooms_models_pb.RoomUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRoomUsersInternallyResponse;
  hasError(): boolean;
  clearError(): ListRoomUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomUsersInternallyResponse): ListRoomUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomUsersInternallyResponse;
  static deserializeBinaryFromReader(message: ListRoomUsersInternallyResponse, reader: jspb.BinaryReader): ListRoomUsersInternallyResponse;
}

export namespace ListRoomUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<rooms_models_pb.RoomUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRoomUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountRoomUsersInternallyRequest;
  clearIdsList(): CountRoomUsersInternallyRequest;
  addIds(value: string, index?: number): CountRoomUsersInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): CountRoomUsersInternallyRequest;
  clearRoomIdsList(): CountRoomUsersInternallyRequest;
  addRoomIds(value: string, index?: number): CountRoomUsersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountRoomUsersInternallyRequest;
  clearUserIdsList(): CountRoomUsersInternallyRequest;
  addUserIds(value: string, index?: number): CountRoomUsersInternallyRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): CountRoomUsersInternallyRequest;
  clearRolesList(): CountRoomUsersInternallyRequest;
  addRoles(value: number, index?: number): CountRoomUsersInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.RoomUserStatus>;
  setStatusesList(value: Array<rooms_enums_pb.RoomUserStatus>): CountRoomUsersInternallyRequest;
  clearStatusesList(): CountRoomUsersInternallyRequest;
  addStatuses(value: rooms_enums_pb.RoomUserStatus, index?: number): CountRoomUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomUsersInternallyRequest): CountRoomUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountRoomUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomUsersInternallyRequest;
  static deserializeBinaryFromReader(message: CountRoomUsersInternallyRequest, reader: jspb.BinaryReader): CountRoomUsersInternallyRequest;
}

export namespace CountRoomUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    userIdsList: Array<string>,
    rolesList: Array<number>,
    statusesList: Array<rooms_enums_pb.RoomUserStatus>,
  }
}

export class CountRoomUsersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRoomUsersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRoomUsersInternallyResponse;
  hasError(): boolean;
  clearError(): CountRoomUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomUsersInternallyResponse): CountRoomUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountRoomUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomUsersInternallyResponse;
  static deserializeBinaryFromReader(message: CountRoomUsersInternallyResponse, reader: jspb.BinaryReader): CountRoomUsersInternallyResponse;
}

export namespace CountRoomUsersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateRoomUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateRoomUserInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): CreateRoomUserInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateRoomUserInternallyRequest;

  getRole(): number;
  setRole(value: number): CreateRoomUserInternallyRequest;

  getFlagsList(): Array<rooms_enums_pb.RoomUserFlag>;
  setFlagsList(value: Array<rooms_enums_pb.RoomUserFlag>): CreateRoomUserInternallyRequest;
  clearFlagsList(): CreateRoomUserInternallyRequest;
  addFlags(value: rooms_enums_pb.RoomUserFlag, index?: number): CreateRoomUserInternallyRequest;

  getStatesList(): Array<rooms_enums_pb.RoomUserState>;
  setStatesList(value: Array<rooms_enums_pb.RoomUserState>): CreateRoomUserInternallyRequest;
  clearStatesList(): CreateRoomUserInternallyRequest;
  addStates(value: rooms_enums_pb.RoomUserState, index?: number): CreateRoomUserInternallyRequest;

  getStatus(): rooms_enums_pb.RoomUserStatus;
  setStatus(value: rooms_enums_pb.RoomUserStatus): CreateRoomUserInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateRoomUserInternallyRequest;

  getSenderConnectionStatus(): rooms_enums_pb.RoomUserSenderConnectionStatus;
  setSenderConnectionStatus(value: rooms_enums_pb.RoomUserSenderConnectionStatus): CreateRoomUserInternallyRequest;

  getReceiverConnectionStatus(): rooms_enums_pb.RoomUserReceiverConnectionStatus;
  setReceiverConnectionStatus(value: rooms_enums_pb.RoomUserReceiverConnectionStatus): CreateRoomUserInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateRoomUserInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomUserInternallyRequest): CreateRoomUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomUserInternallyRequest;
  static deserializeBinaryFromReader(message: CreateRoomUserInternallyRequest, reader: jspb.BinaryReader): CreateRoomUserInternallyRequest;
}

export namespace CreateRoomUserInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    userId: string,
    role: number,
    flagsList: Array<rooms_enums_pb.RoomUserFlag>,
    statesList: Array<rooms_enums_pb.RoomUserState>,
    status: rooms_enums_pb.RoomUserStatus,
    region: string,
    senderConnectionStatus: rooms_enums_pb.RoomUserSenderConnectionStatus,
    receiverConnectionStatus: rooms_enums_pb.RoomUserReceiverConnectionStatus,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateRoomUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateRoomUserInternallyRequest>;
  setRequestsList(value: Array<CreateRoomUserInternallyRequest>): CreateRoomUsersInternallyRequest;
  clearRequestsList(): CreateRoomUsersInternallyRequest;
  addRequests(value?: CreateRoomUserInternallyRequest, index?: number): CreateRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomUsersInternallyRequest): CreateRoomUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomUsersInternallyRequest;
  static deserializeBinaryFromReader(message: CreateRoomUsersInternallyRequest, reader: jspb.BinaryReader): CreateRoomUsersInternallyRequest;
}

export namespace CreateRoomUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateRoomUserInternallyRequest.AsObject>,
  }
}

export class CreateRoomUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<rooms_models_pb.RoomUserInfo>;
  setUsersList(value: Array<rooms_models_pb.RoomUserInfo>): CreateRoomUsersInternallyResponse;
  clearUsersList(): CreateRoomUsersInternallyResponse;
  addUsers(value?: rooms_models_pb.RoomUserInfo, index?: number): rooms_models_pb.RoomUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateRoomUsersInternallyResponse;
  hasError(): boolean;
  clearError(): CreateRoomUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomUsersInternallyResponse): CreateRoomUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRoomUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomUsersInternallyResponse;
  static deserializeBinaryFromReader(message: CreateRoomUsersInternallyResponse, reader: jspb.BinaryReader): CreateRoomUsersInternallyResponse;
}

export namespace CreateRoomUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<rooms_models_pb.RoomUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRoomUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomUserInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): UpdateRoomUserInternallyRequest;

  getUserId(): string;
  setUserId(value: string): UpdateRoomUserInternallyRequest;

  getRole(): rooms_models_pb.RoomUserRoleValue | undefined;
  setRole(value?: rooms_models_pb.RoomUserRoleValue): UpdateRoomUserInternallyRequest;
  hasRole(): boolean;
  clearRole(): UpdateRoomUserInternallyRequest;

  getFlags(): rooms_models_pb.RoomUserFlagsValue | undefined;
  setFlags(value?: rooms_models_pb.RoomUserFlagsValue): UpdateRoomUserInternallyRequest;
  hasFlags(): boolean;
  clearFlags(): UpdateRoomUserInternallyRequest;

  getStates(): rooms_models_pb.RoomUserStatesValue | undefined;
  setStates(value?: rooms_models_pb.RoomUserStatesValue): UpdateRoomUserInternallyRequest;
  hasStates(): boolean;
  clearStates(): UpdateRoomUserInternallyRequest;

  getStatus(): rooms_models_pb.RoomUserStatusValue | undefined;
  setStatus(value?: rooms_models_pb.RoomUserStatusValue): UpdateRoomUserInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateRoomUserInternallyRequest;

  getSenderConnectionStatus(): rooms_models_pb.RoomUserSenderConnectionStatusValue | undefined;
  setSenderConnectionStatus(value?: rooms_models_pb.RoomUserSenderConnectionStatusValue): UpdateRoomUserInternallyRequest;
  hasSenderConnectionStatus(): boolean;
  clearSenderConnectionStatus(): UpdateRoomUserInternallyRequest;

  getReceiverConnectionStatus(): rooms_models_pb.RoomUserReceiverConnectionStatusValue | undefined;
  setReceiverConnectionStatus(value?: rooms_models_pb.RoomUserReceiverConnectionStatusValue): UpdateRoomUserInternallyRequest;
  hasReceiverConnectionStatus(): boolean;
  clearReceiverConnectionStatus(): UpdateRoomUserInternallyRequest;

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
    id: string,
    roomId: string,
    userId: string,
    role?: rooms_models_pb.RoomUserRoleValue.AsObject,
    flags?: rooms_models_pb.RoomUserFlagsValue.AsObject,
    states?: rooms_models_pb.RoomUserStatesValue.AsObject,
    status?: rooms_models_pb.RoomUserStatusValue.AsObject,
    senderConnectionStatus?: rooms_models_pb.RoomUserSenderConnectionStatusValue.AsObject,
    receiverConnectionStatus?: rooms_models_pb.RoomUserReceiverConnectionStatusValue.AsObject,
    timestamp: number,
  }
}

export class UpdateRoomUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateRoomUserInternallyRequest>;
  setRequestsList(value: Array<UpdateRoomUserInternallyRequest>): UpdateRoomUsersInternallyRequest;
  clearRequestsList(): UpdateRoomUsersInternallyRequest;
  addRequests(value?: UpdateRoomUserInternallyRequest, index?: number): UpdateRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUsersInternallyRequest): UpdateRoomUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUsersInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateRoomUsersInternallyRequest, reader: jspb.BinaryReader): UpdateRoomUsersInternallyRequest;
}

export namespace UpdateRoomUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateRoomUserInternallyRequest.AsObject>,
  }
}

export class UpdateRoomUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<rooms_models_pb.RoomUserInfo>;
  setUsersList(value: Array<rooms_models_pb.RoomUserInfo>): UpdateRoomUsersInternallyResponse;
  clearUsersList(): UpdateRoomUsersInternallyResponse;
  addUsers(value?: rooms_models_pb.RoomUserInfo, index?: number): rooms_models_pb.RoomUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateRoomUsersInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateRoomUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUsersInternallyResponse): UpdateRoomUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUsersInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateRoomUsersInternallyResponse, reader: jspb.BinaryReader): UpdateRoomUsersInternallyResponse;
}

export namespace UpdateRoomUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<rooms_models_pb.RoomUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteRoomUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRoomUserInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): DeleteRoomUserInternallyRequest;

  getUserId(): string;
  setUserId(value: string): DeleteRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomUserInternallyRequest): DeleteRoomUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomUserInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteRoomUserInternallyRequest, reader: jspb.BinaryReader): DeleteRoomUserInternallyRequest;
}

export namespace DeleteRoomUserInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    userId: string,
  }
}

export class DeleteRoomUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteRoomUserInternallyRequest>;
  setRequestsList(value: Array<DeleteRoomUserInternallyRequest>): DeleteRoomUsersInternallyRequest;
  clearRequestsList(): DeleteRoomUsersInternallyRequest;
  addRequests(value?: DeleteRoomUserInternallyRequest, index?: number): DeleteRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomUsersInternallyRequest): DeleteRoomUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomUsersInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteRoomUsersInternallyRequest, reader: jspb.BinaryReader): DeleteRoomUsersInternallyRequest;
}

export namespace DeleteRoomUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteRoomUserInternallyRequest.AsObject>,
  }
}

export class DeleteRoomUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<rooms_models_pb.RoomUserInfo>;
  setUsersList(value: Array<rooms_models_pb.RoomUserInfo>): DeleteRoomUsersInternallyResponse;
  clearUsersList(): DeleteRoomUsersInternallyResponse;
  addUsers(value?: rooms_models_pb.RoomUserInfo, index?: number): rooms_models_pb.RoomUserInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteRoomUsersInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteRoomUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomUsersInternallyResponse): DeleteRoomUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomUsersInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteRoomUsersInternallyResponse, reader: jspb.BinaryReader): DeleteRoomUsersInternallyResponse;
}

export namespace DeleteRoomUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<rooms_models_pb.RoomUserInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DisconnectRoomUserInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DisconnectRoomUserInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): DisconnectRoomUserInternallyRequest;

  getUserId(): string;
  setUserId(value: string): DisconnectRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectRoomUserInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectRoomUserInternallyRequest): DisconnectRoomUserInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DisconnectRoomUserInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectRoomUserInternallyRequest;
  static deserializeBinaryFromReader(message: DisconnectRoomUserInternallyRequest, reader: jspb.BinaryReader): DisconnectRoomUserInternallyRequest;
}

export namespace DisconnectRoomUserInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    userId: string,
  }
}

export class DisconnectRoomUsersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DisconnectRoomUserInternallyRequest>;
  setRequestsList(value: Array<DisconnectRoomUserInternallyRequest>): DisconnectRoomUsersInternallyRequest;
  clearRequestsList(): DisconnectRoomUsersInternallyRequest;
  addRequests(value?: DisconnectRoomUserInternallyRequest, index?: number): DisconnectRoomUserInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectRoomUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectRoomUsersInternallyRequest): DisconnectRoomUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DisconnectRoomUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectRoomUsersInternallyRequest;
  static deserializeBinaryFromReader(message: DisconnectRoomUsersInternallyRequest, reader: jspb.BinaryReader): DisconnectRoomUsersInternallyRequest;
}

export namespace DisconnectRoomUsersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DisconnectRoomUserInternallyRequest.AsObject>,
  }
}

export class DisconnectRoomUsersInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DisconnectRoomUsersInternallyResponse;
  hasError(): boolean;
  clearError(): DisconnectRoomUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectRoomUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectRoomUsersInternallyResponse): DisconnectRoomUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DisconnectRoomUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectRoomUsersInternallyResponse;
  static deserializeBinaryFromReader(message: DisconnectRoomUsersInternallyResponse, reader: jspb.BinaryReader): DisconnectRoomUsersInternallyResponse;
}

export namespace DisconnectRoomUsersInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountRoomUsersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountRoomUsersInternallyRequest;
  clearIdsList(): ListAndCountRoomUsersInternallyRequest;
  addIds(value: string, index?: number): ListAndCountRoomUsersInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListAndCountRoomUsersInternallyRequest;
  clearRoomIdsList(): ListAndCountRoomUsersInternallyRequest;
  addRoomIds(value: string, index?: number): ListAndCountRoomUsersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListAndCountRoomUsersInternallyRequest;
  clearUserIdsList(): ListAndCountRoomUsersInternallyRequest;
  addUserIds(value: string, index?: number): ListAndCountRoomUsersInternallyRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): ListAndCountRoomUsersInternallyRequest;
  clearRolesList(): ListAndCountRoomUsersInternallyRequest;
  addRoles(value: number, index?: number): ListAndCountRoomUsersInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.RoomUserStatus>;
  setStatusesList(value: Array<rooms_enums_pb.RoomUserStatus>): ListAndCountRoomUsersInternallyRequest;
  clearStatusesList(): ListAndCountRoomUsersInternallyRequest;
  addStatuses(value: rooms_enums_pb.RoomUserStatus, index?: number): ListAndCountRoomUsersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountRoomUsersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountRoomUsersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountRoomUsersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRoomUsersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRoomUsersInternallyRequest): ListAndCountRoomUsersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRoomUsersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRoomUsersInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountRoomUsersInternallyRequest, reader: jspb.BinaryReader): ListAndCountRoomUsersInternallyRequest;
}

export namespace ListAndCountRoomUsersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    userIdsList: Array<string>,
    rolesList: Array<number>,
    statusesList: Array<rooms_enums_pb.RoomUserStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountRoomUsersInternallyResponse extends jspb.Message {
  getUsersList(): Array<rooms_models_pb.RoomUserInfo>;
  setUsersList(value: Array<rooms_models_pb.RoomUserInfo>): ListAndCountRoomUsersInternallyResponse;
  clearUsersList(): ListAndCountRoomUsersInternallyResponse;
  addUsers(value?: rooms_models_pb.RoomUserInfo, index?: number): rooms_models_pb.RoomUserInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountRoomUsersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountRoomUsersInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountRoomUsersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRoomUsersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRoomUsersInternallyResponse): ListAndCountRoomUsersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRoomUsersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRoomUsersInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountRoomUsersInternallyResponse, reader: jspb.BinaryReader): ListAndCountRoomUsersInternallyResponse;
}

export namespace ListAndCountRoomUsersInternallyResponse {
  export type AsObject = {
    usersList: Array<rooms_models_pb.RoomUserInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomInviteInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoomInviteInternallyRequest;

  getPid(): string;
  setPid(value: string): GetRoomInviteInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomInviteInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomInviteInternallyRequest): GetRoomInviteInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomInviteInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomInviteInternallyRequest;
  static deserializeBinaryFromReader(message: GetRoomInviteInternallyRequest, reader: jspb.BinaryReader): GetRoomInviteInternallyRequest;
}

export namespace GetRoomInviteInternallyRequest {
  export type AsObject = {
    id: string,
    pid: string,
  }
}

export class GetRoomInviteInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInviteInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInviteInfo): GetRoomInviteInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetRoomInviteInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomInviteInternallyResponse;
  hasError(): boolean;
  clearError(): GetRoomInviteInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomInviteInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomInviteInternallyResponse): GetRoomInviteInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomInviteInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomInviteInternallyResponse;
  static deserializeBinaryFromReader(message: GetRoomInviteInternallyResponse, reader: jspb.BinaryReader): GetRoomInviteInternallyResponse;
}

export namespace GetRoomInviteInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInviteInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRoomInvitesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRoomInvitesInternallyRequest;
  clearIdsList(): ListRoomInvitesInternallyRequest;
  addIds(value: string, index?: number): ListRoomInvitesInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): ListRoomInvitesInternallyRequest;
  clearPidsList(): ListRoomInvitesInternallyRequest;
  addPids(value: string, index?: number): ListRoomInvitesInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListRoomInvitesInternallyRequest;
  clearRoomIdsList(): ListRoomInvitesInternallyRequest;
  addRoomIds(value: string, index?: number): ListRoomInvitesInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListRoomInvitesInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListRoomInvitesInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListRoomInvitesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomInvitesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomInvitesInternallyRequest): ListRoomInvitesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomInvitesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomInvitesInternallyRequest;
  static deserializeBinaryFromReader(message: ListRoomInvitesInternallyRequest, reader: jspb.BinaryReader): ListRoomInvitesInternallyRequest;
}

export namespace ListRoomInvitesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    roomIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRoomInvitesInternallyResponse extends jspb.Message {
  getInvitesList(): Array<rooms_models_pb.RoomInviteInfo>;
  setInvitesList(value: Array<rooms_models_pb.RoomInviteInfo>): ListRoomInvitesInternallyResponse;
  clearInvitesList(): ListRoomInvitesInternallyResponse;
  addInvites(value?: rooms_models_pb.RoomInviteInfo, index?: number): rooms_models_pb.RoomInviteInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRoomInvitesInternallyResponse;
  hasError(): boolean;
  clearError(): ListRoomInvitesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomInvitesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomInvitesInternallyResponse): ListRoomInvitesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomInvitesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomInvitesInternallyResponse;
  static deserializeBinaryFromReader(message: ListRoomInvitesInternallyResponse, reader: jspb.BinaryReader): ListRoomInvitesInternallyResponse;
}

export namespace ListRoomInvitesInternallyResponse {
  export type AsObject = {
    invitesList: Array<rooms_models_pb.RoomInviteInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRoomInvitesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountRoomInvitesInternallyRequest;
  clearIdsList(): CountRoomInvitesInternallyRequest;
  addIds(value: string, index?: number): CountRoomInvitesInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): CountRoomInvitesInternallyRequest;
  clearPidsList(): CountRoomInvitesInternallyRequest;
  addPids(value: string, index?: number): CountRoomInvitesInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): CountRoomInvitesInternallyRequest;
  clearRoomIdsList(): CountRoomInvitesInternallyRequest;
  addRoomIds(value: string, index?: number): CountRoomInvitesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomInvitesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomInvitesInternallyRequest): CountRoomInvitesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountRoomInvitesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomInvitesInternallyRequest;
  static deserializeBinaryFromReader(message: CountRoomInvitesInternallyRequest, reader: jspb.BinaryReader): CountRoomInvitesInternallyRequest;
}

export namespace CountRoomInvitesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    roomIdsList: Array<string>,
  }
}

export class CountRoomInvitesInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRoomInvitesInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRoomInvitesInternallyResponse;
  hasError(): boolean;
  clearError(): CountRoomInvitesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomInvitesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomInvitesInternallyResponse): CountRoomInvitesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountRoomInvitesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomInvitesInternallyResponse;
  static deserializeBinaryFromReader(message: CountRoomInvitesInternallyResponse, reader: jspb.BinaryReader): CountRoomInvitesInternallyResponse;
}

export namespace CountRoomInvitesInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateRoomInviteInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateRoomInviteInternallyRequest;

  getPid(): string;
  setPid(value: string): CreateRoomInviteInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): CreateRoomInviteInternallyRequest;

  getUsages(): number;
  setUsages(value: number): CreateRoomInviteInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateRoomInviteInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateRoomInviteInternallyRequest;

  getExpiresAt(): number;
  setExpiresAt(value: number): CreateRoomInviteInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomInviteInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomInviteInternallyRequest): CreateRoomInviteInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomInviteInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomInviteInternallyRequest;
  static deserializeBinaryFromReader(message: CreateRoomInviteInternallyRequest, reader: jspb.BinaryReader): CreateRoomInviteInternallyRequest;
}

export namespace CreateRoomInviteInternallyRequest {
  export type AsObject = {
    id: string,
    pid: string,
    roomId: string,
    usages: number,
    createdAt: number,
    updatedAt: number,
    expiresAt: number,
  }
}

export class CreateRoomInvitesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateRoomInviteInternallyRequest>;
  setRequestsList(value: Array<CreateRoomInviteInternallyRequest>): CreateRoomInvitesInternallyRequest;
  clearRequestsList(): CreateRoomInvitesInternallyRequest;
  addRequests(value?: CreateRoomInviteInternallyRequest, index?: number): CreateRoomInviteInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomInvitesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomInvitesInternallyRequest): CreateRoomInvitesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomInvitesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomInvitesInternallyRequest;
  static deserializeBinaryFromReader(message: CreateRoomInvitesInternallyRequest, reader: jspb.BinaryReader): CreateRoomInvitesInternallyRequest;
}

export namespace CreateRoomInvitesInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateRoomInviteInternallyRequest.AsObject>,
  }
}

export class CreateRoomInvitesInternallyResponse extends jspb.Message {
  getInvitesList(): Array<rooms_models_pb.RoomInviteInfo>;
  setInvitesList(value: Array<rooms_models_pb.RoomInviteInfo>): CreateRoomInvitesInternallyResponse;
  clearInvitesList(): CreateRoomInvitesInternallyResponse;
  addInvites(value?: rooms_models_pb.RoomInviteInfo, index?: number): rooms_models_pb.RoomInviteInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateRoomInvitesInternallyResponse;
  hasError(): boolean;
  clearError(): CreateRoomInvitesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomInvitesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomInvitesInternallyResponse): CreateRoomInvitesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRoomInvitesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomInvitesInternallyResponse;
  static deserializeBinaryFromReader(message: CreateRoomInvitesInternallyResponse, reader: jspb.BinaryReader): CreateRoomInvitesInternallyResponse;
}

export namespace CreateRoomInvitesInternallyResponse {
  export type AsObject = {
    invitesList: Array<rooms_models_pb.RoomInviteInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRoomInviteInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomInviteInternallyRequest;

  getUsages(): rooms_models_pb.RoomInviteUsagesValue | undefined;
  setUsages(value?: rooms_models_pb.RoomInviteUsagesValue): UpdateRoomInviteInternallyRequest;
  hasUsages(): boolean;
  clearUsages(): UpdateRoomInviteInternallyRequest;

  getExpiresAt(): rooms_models_pb.RoomInviteExpiresAtValue | undefined;
  setExpiresAt(value?: rooms_models_pb.RoomInviteExpiresAtValue): UpdateRoomInviteInternallyRequest;
  hasExpiresAt(): boolean;
  clearExpiresAt(): UpdateRoomInviteInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomInviteInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomInviteInternallyRequest): UpdateRoomInviteInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomInviteInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomInviteInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateRoomInviteInternallyRequest, reader: jspb.BinaryReader): UpdateRoomInviteInternallyRequest;
}

export namespace UpdateRoomInviteInternallyRequest {
  export type AsObject = {
    id: string,
    usages?: rooms_models_pb.RoomInviteUsagesValue.AsObject,
    expiresAt?: rooms_models_pb.RoomInviteExpiresAtValue.AsObject,
  }
}

export class UpdateRoomInvitesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateRoomInviteInternallyRequest>;
  setRequestsList(value: Array<UpdateRoomInviteInternallyRequest>): UpdateRoomInvitesInternallyRequest;
  clearRequestsList(): UpdateRoomInvitesInternallyRequest;
  addRequests(value?: UpdateRoomInviteInternallyRequest, index?: number): UpdateRoomInviteInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomInvitesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomInvitesInternallyRequest): UpdateRoomInvitesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomInvitesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomInvitesInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateRoomInvitesInternallyRequest, reader: jspb.BinaryReader): UpdateRoomInvitesInternallyRequest;
}

export namespace UpdateRoomInvitesInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateRoomInviteInternallyRequest.AsObject>,
  }
}

export class UpdateRoomInvitesInternallyResponse extends jspb.Message {
  getInvitesList(): Array<rooms_models_pb.RoomInviteInfo>;
  setInvitesList(value: Array<rooms_models_pb.RoomInviteInfo>): UpdateRoomInvitesInternallyResponse;
  clearInvitesList(): UpdateRoomInvitesInternallyResponse;
  addInvites(value?: rooms_models_pb.RoomInviteInfo, index?: number): rooms_models_pb.RoomInviteInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateRoomInvitesInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateRoomInvitesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomInvitesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomInvitesInternallyResponse): UpdateRoomInvitesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomInvitesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomInvitesInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateRoomInvitesInternallyResponse, reader: jspb.BinaryReader): UpdateRoomInvitesInternallyResponse;
}

export namespace UpdateRoomInvitesInternallyResponse {
  export type AsObject = {
    invitesList: Array<rooms_models_pb.RoomInviteInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteRoomInviteInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRoomInviteInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomInviteInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomInviteInternallyRequest): DeleteRoomInviteInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomInviteInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomInviteInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteRoomInviteInternallyRequest, reader: jspb.BinaryReader): DeleteRoomInviteInternallyRequest;
}

export namespace DeleteRoomInviteInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRoomInvitesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteRoomInviteInternallyRequest>;
  setRequestsList(value: Array<DeleteRoomInviteInternallyRequest>): DeleteRoomInvitesInternallyRequest;
  clearRequestsList(): DeleteRoomInvitesInternallyRequest;
  addRequests(value?: DeleteRoomInviteInternallyRequest, index?: number): DeleteRoomInviteInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomInvitesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomInvitesInternallyRequest): DeleteRoomInvitesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomInvitesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomInvitesInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteRoomInvitesInternallyRequest, reader: jspb.BinaryReader): DeleteRoomInvitesInternallyRequest;
}

export namespace DeleteRoomInvitesInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteRoomInviteInternallyRequest.AsObject>,
  }
}

export class DeleteRoomInvitesInternallyResponse extends jspb.Message {
  getInvitesList(): Array<rooms_models_pb.RoomInviteInfo>;
  setInvitesList(value: Array<rooms_models_pb.RoomInviteInfo>): DeleteRoomInvitesInternallyResponse;
  clearInvitesList(): DeleteRoomInvitesInternallyResponse;
  addInvites(value?: rooms_models_pb.RoomInviteInfo, index?: number): rooms_models_pb.RoomInviteInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteRoomInvitesInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteRoomInvitesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomInvitesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomInvitesInternallyResponse): DeleteRoomInvitesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomInvitesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomInvitesInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteRoomInvitesInternallyResponse, reader: jspb.BinaryReader): DeleteRoomInvitesInternallyResponse;
}

export namespace DeleteRoomInvitesInternallyResponse {
  export type AsObject = {
    invitesList: Array<rooms_models_pb.RoomInviteInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountRoomInvitesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountRoomInvitesInternallyRequest;
  clearIdsList(): ListAndCountRoomInvitesInternallyRequest;
  addIds(value: string, index?: number): ListAndCountRoomInvitesInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): ListAndCountRoomInvitesInternallyRequest;
  clearPidsList(): ListAndCountRoomInvitesInternallyRequest;
  addPids(value: string, index?: number): ListAndCountRoomInvitesInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListAndCountRoomInvitesInternallyRequest;
  clearRoomIdsList(): ListAndCountRoomInvitesInternallyRequest;
  addRoomIds(value: string, index?: number): ListAndCountRoomInvitesInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountRoomInvitesInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountRoomInvitesInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountRoomInvitesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRoomInvitesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRoomInvitesInternallyRequest): ListAndCountRoomInvitesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRoomInvitesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRoomInvitesInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountRoomInvitesInternallyRequest, reader: jspb.BinaryReader): ListAndCountRoomInvitesInternallyRequest;
}

export namespace ListAndCountRoomInvitesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    roomIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountRoomInvitesInternallyResponse extends jspb.Message {
  getInvitesList(): Array<rooms_models_pb.RoomInviteInfo>;
  setInvitesList(value: Array<rooms_models_pb.RoomInviteInfo>): ListAndCountRoomInvitesInternallyResponse;
  clearInvitesList(): ListAndCountRoomInvitesInternallyResponse;
  addInvites(value?: rooms_models_pb.RoomInviteInfo, index?: number): rooms_models_pb.RoomInviteInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountRoomInvitesInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountRoomInvitesInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountRoomInvitesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRoomInvitesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRoomInvitesInternallyResponse): ListAndCountRoomInvitesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRoomInvitesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRoomInvitesInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountRoomInvitesInternallyResponse, reader: jspb.BinaryReader): ListAndCountRoomInvitesInternallyResponse;
}

export namespace ListAndCountRoomInvitesInternallyResponse {
  export type AsObject = {
    invitesList: Array<rooms_models_pb.RoomInviteInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomStreamInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoomStreamInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): GetRoomStreamInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomStreamInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomStreamInternallyRequest): GetRoomStreamInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomStreamInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomStreamInternallyRequest;
  static deserializeBinaryFromReader(message: GetRoomStreamInternallyRequest, reader: jspb.BinaryReader): GetRoomStreamInternallyRequest;
}

export namespace GetRoomStreamInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
  }
}

export class GetRoomStreamInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomStreamInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomStreamInfo): GetRoomStreamInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetRoomStreamInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomStreamInternallyResponse;
  hasError(): boolean;
  clearError(): GetRoomStreamInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomStreamInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomStreamInternallyResponse): GetRoomStreamInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomStreamInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomStreamInternallyResponse;
  static deserializeBinaryFromReader(message: GetRoomStreamInternallyResponse, reader: jspb.BinaryReader): GetRoomStreamInternallyResponse;
}

export namespace GetRoomStreamInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomStreamInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRoomStreamsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRoomStreamsInternallyRequest;
  clearIdsList(): ListRoomStreamsInternallyRequest;
  addIds(value: string, index?: number): ListRoomStreamsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListRoomStreamsInternallyRequest;
  clearRoomIdsList(): ListRoomStreamsInternallyRequest;
  addRoomIds(value: string, index?: number): ListRoomStreamsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListRoomStreamsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListRoomStreamsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListRoomStreamsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomStreamsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomStreamsInternallyRequest): ListRoomStreamsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomStreamsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomStreamsInternallyRequest;
  static deserializeBinaryFromReader(message: ListRoomStreamsInternallyRequest, reader: jspb.BinaryReader): ListRoomStreamsInternallyRequest;
}

export namespace ListRoomStreamsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRoomStreamsInternallyResponse extends jspb.Message {
  getStreamsList(): Array<rooms_models_pb.RoomStreamInfo>;
  setStreamsList(value: Array<rooms_models_pb.RoomStreamInfo>): ListRoomStreamsInternallyResponse;
  clearStreamsList(): ListRoomStreamsInternallyResponse;
  addStreams(value?: rooms_models_pb.RoomStreamInfo, index?: number): rooms_models_pb.RoomStreamInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRoomStreamsInternallyResponse;
  hasError(): boolean;
  clearError(): ListRoomStreamsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomStreamsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomStreamsInternallyResponse): ListRoomStreamsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomStreamsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomStreamsInternallyResponse;
  static deserializeBinaryFromReader(message: ListRoomStreamsInternallyResponse, reader: jspb.BinaryReader): ListRoomStreamsInternallyResponse;
}

export namespace ListRoomStreamsInternallyResponse {
  export type AsObject = {
    streamsList: Array<rooms_models_pb.RoomStreamInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRoomStreamsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountRoomStreamsInternallyRequest;
  clearIdsList(): CountRoomStreamsInternallyRequest;
  addIds(value: string, index?: number): CountRoomStreamsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): CountRoomStreamsInternallyRequest;
  clearRoomIdsList(): CountRoomStreamsInternallyRequest;
  addRoomIds(value: string, index?: number): CountRoomStreamsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomStreamsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomStreamsInternallyRequest): CountRoomStreamsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountRoomStreamsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomStreamsInternallyRequest;
  static deserializeBinaryFromReader(message: CountRoomStreamsInternallyRequest, reader: jspb.BinaryReader): CountRoomStreamsInternallyRequest;
}

export namespace CountRoomStreamsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
  }
}

export class CountRoomStreamsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRoomStreamsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRoomStreamsInternallyResponse;
  hasError(): boolean;
  clearError(): CountRoomStreamsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomStreamsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomStreamsInternallyResponse): CountRoomStreamsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountRoomStreamsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomStreamsInternallyResponse;
  static deserializeBinaryFromReader(message: CountRoomStreamsInternallyResponse, reader: jspb.BinaryReader): CountRoomStreamsInternallyResponse;
}

export namespace CountRoomStreamsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountRoomStreamsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountRoomStreamsInternallyRequest;
  clearIdsList(): ListAndCountRoomStreamsInternallyRequest;
  addIds(value: string, index?: number): ListAndCountRoomStreamsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListAndCountRoomStreamsInternallyRequest;
  clearRoomIdsList(): ListAndCountRoomStreamsInternallyRequest;
  addRoomIds(value: string, index?: number): ListAndCountRoomStreamsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountRoomStreamsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountRoomStreamsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountRoomStreamsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRoomStreamsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRoomStreamsInternallyRequest): ListAndCountRoomStreamsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRoomStreamsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRoomStreamsInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountRoomStreamsInternallyRequest, reader: jspb.BinaryReader): ListAndCountRoomStreamsInternallyRequest;
}

export namespace ListAndCountRoomStreamsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountRoomStreamsInternallyResponse extends jspb.Message {
  getStreamsList(): Array<rooms_models_pb.RoomStreamInfo>;
  setStreamsList(value: Array<rooms_models_pb.RoomStreamInfo>): ListAndCountRoomStreamsInternallyResponse;
  clearStreamsList(): ListAndCountRoomStreamsInternallyResponse;
  addStreams(value?: rooms_models_pb.RoomStreamInfo, index?: number): rooms_models_pb.RoomStreamInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountRoomStreamsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountRoomStreamsInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountRoomStreamsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRoomStreamsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRoomStreamsInternallyResponse): ListAndCountRoomStreamsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRoomStreamsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRoomStreamsInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountRoomStreamsInternallyResponse, reader: jspb.BinaryReader): ListAndCountRoomStreamsInternallyResponse;
}

export namespace ListAndCountRoomStreamsInternallyResponse {
  export type AsObject = {
    streamsList: Array<rooms_models_pb.RoomStreamInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventInternallyRequest;

  getPid(): string;
  setPid(value: string): GetEventInternallyRequest;

  getChatId(): string;
  setChatId(value: string): GetEventInternallyRequest;

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
    pid: string,
    chatId: string,
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

export class ListEventsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListEventsInternallyRequest;
  clearIdsList(): ListEventsInternallyRequest;
  addIds(value: string, index?: number): ListEventsInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): ListEventsInternallyRequest;
  clearPidsList(): ListEventsInternallyRequest;
  addPids(value: string, index?: number): ListEventsInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): ListEventsInternallyRequest;
  clearChatIdsList(): ListEventsInternallyRequest;
  addChatIds(value: string, index?: number): ListEventsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListEventsInternallyRequest;
  clearRoomIdsList(): ListEventsInternallyRequest;
  addRoomIds(value: string, index?: number): ListEventsInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.EventStatus>;
  setStatusesList(value: Array<rooms_enums_pb.EventStatus>): ListEventsInternallyRequest;
  clearStatusesList(): ListEventsInternallyRequest;
  addStatuses(value: rooms_enums_pb.EventStatus, index?: number): ListEventsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListEventsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListEventsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListEventsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsInternallyRequest): ListEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsInternallyRequest;
  static deserializeBinaryFromReader(message: ListEventsInternallyRequest, reader: jspb.BinaryReader): ListEventsInternallyRequest;
}

export namespace ListEventsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    chatIdsList: Array<string>,
    roomIdsList: Array<string>,
    statusesList: Array<rooms_enums_pb.EventStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventsInternallyResponse extends jspb.Message {
  getEventsList(): Array<rooms_models_pb.EventInfo>;
  setEventsList(value: Array<rooms_models_pb.EventInfo>): ListEventsInternallyResponse;
  clearEventsList(): ListEventsInternallyResponse;
  addEvents(value?: rooms_models_pb.EventInfo, index?: number): rooms_models_pb.EventInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventsInternallyResponse;
  hasError(): boolean;
  clearError(): ListEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsInternallyResponse): ListEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsInternallyResponse;
  static deserializeBinaryFromReader(message: ListEventsInternallyResponse, reader: jspb.BinaryReader): ListEventsInternallyResponse;
}

export namespace ListEventsInternallyResponse {
  export type AsObject = {
    eventsList: Array<rooms_models_pb.EventInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class StateEventsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): StateEventsInternallyRequest;
  clearIdsList(): StateEventsInternallyRequest;
  addIds(value: string, index?: number): StateEventsInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): StateEventsInternallyRequest;
  clearPidsList(): StateEventsInternallyRequest;
  addPids(value: string, index?: number): StateEventsInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): StateEventsInternallyRequest;
  clearChatIdsList(): StateEventsInternallyRequest;
  addChatIds(value: string, index?: number): StateEventsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): StateEventsInternallyRequest;
  clearRoomIdsList(): StateEventsInternallyRequest;
  addRoomIds(value: string, index?: number): StateEventsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): StateEventsInternallyRequest;
  clearUserIdsList(): StateEventsInternallyRequest;
  addUserIds(value: string, index?: number): StateEventsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateEventsInternallyRequest): StateEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: StateEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateEventsInternallyRequest;
  static deserializeBinaryFromReader(message: StateEventsInternallyRequest, reader: jspb.BinaryReader): StateEventsInternallyRequest;
}

export namespace StateEventsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    chatIdsList: Array<string>,
    roomIdsList: Array<string>,
    userIdsList: Array<string>,
  }
}

export class StateEventsInternallyResponse extends jspb.Message {
  getStatesList(): Array<rooms_models_pb.EventState>;
  setStatesList(value: Array<rooms_models_pb.EventState>): StateEventsInternallyResponse;
  clearStatesList(): StateEventsInternallyResponse;
  addStates(value?: rooms_models_pb.EventState, index?: number): rooms_models_pb.EventState;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): StateEventsInternallyResponse;
  hasError(): boolean;
  clearError(): StateEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateEventsInternallyResponse): StateEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: StateEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateEventsInternallyResponse;
  static deserializeBinaryFromReader(message: StateEventsInternallyResponse, reader: jspb.BinaryReader): StateEventsInternallyResponse;
}

export namespace StateEventsInternallyResponse {
  export type AsObject = {
    statesList: Array<rooms_models_pb.EventState.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountEventsInternallyRequest;
  clearIdsList(): CountEventsInternallyRequest;
  addIds(value: string, index?: number): CountEventsInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): CountEventsInternallyRequest;
  clearPidsList(): CountEventsInternallyRequest;
  addPids(value: string, index?: number): CountEventsInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): CountEventsInternallyRequest;
  clearChatIdsList(): CountEventsInternallyRequest;
  addChatIds(value: string, index?: number): CountEventsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): CountEventsInternallyRequest;
  clearRoomIdsList(): CountEventsInternallyRequest;
  addRoomIds(value: string, index?: number): CountEventsInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.EventStatus>;
  setStatusesList(value: Array<rooms_enums_pb.EventStatus>): CountEventsInternallyRequest;
  clearStatusesList(): CountEventsInternallyRequest;
  addStatuses(value: rooms_enums_pb.EventStatus, index?: number): CountEventsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventsInternallyRequest): CountEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventsInternallyRequest;
  static deserializeBinaryFromReader(message: CountEventsInternallyRequest, reader: jspb.BinaryReader): CountEventsInternallyRequest;
}

export namespace CountEventsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    chatIdsList: Array<string>,
    roomIdsList: Array<string>,
    statusesList: Array<rooms_enums_pb.EventStatus>,
  }
}

export class CountEventsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventsInternallyResponse;
  hasError(): boolean;
  clearError(): CountEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventsInternallyResponse): CountEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventsInternallyResponse;
  static deserializeBinaryFromReader(message: CountEventsInternallyResponse, reader: jspb.BinaryReader): CountEventsInternallyResponse;
}

export namespace CountEventsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateEventInternallyRequest;

  getPid(): string;
  setPid(value: string): CreateEventInternallyRequest;

  getChatId(): string;
  setChatId(value: string): CreateEventInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): CreateEventInternallyRequest;

  getPartnerId(): string;
  setPartnerId(value: string): CreateEventInternallyRequest;

  getName(): string;
  setName(value: string): CreateEventInternallyRequest;

  getType(): rooms_enums_pb.EventType;
  setType(value: rooms_enums_pb.EventType): CreateEventInternallyRequest;

  getAccess(): rooms_enums_pb.EventAccess;
  setAccess(value: rooms_enums_pb.EventAccess): CreateEventInternallyRequest;

  getStatus(): rooms_enums_pb.EventStatus;
  setStatus(value: rooms_enums_pb.EventStatus): CreateEventInternallyRequest;

  getSource(): rooms_enums_pb.EventSource;
  setSource(value: rooms_enums_pb.EventSource): CreateEventInternallyRequest;

  getLayout(): rooms_enums_pb.EventLayout;
  setLayout(value: rooms_enums_pb.EventLayout): CreateEventInternallyRequest;

  getGenresList(): Array<rooms_enums_pb.EventGenre>;
  setGenresList(value: Array<rooms_enums_pb.EventGenre>): CreateEventInternallyRequest;
  clearGenresList(): CreateEventInternallyRequest;
  addGenres(value: rooms_enums_pb.EventGenre, index?: number): CreateEventInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateEventInternallyRequest;

  getSummary(): string;
  setSummary(value: string): CreateEventInternallyRequest;

  getOverseer(): rooms_enums_pb.EventOverseer;
  setOverseer(value: rooms_enums_pb.EventOverseer): CreateEventInternallyRequest;

  getAudience(): number;
  setAudience(value: number): CreateEventInternallyRequest;

  getDescription(): string;
  setDescription(value: string): CreateEventInternallyRequest;

  getStartsAt(): number;
  setStartsAt(value: number): CreateEventInternallyRequest;

  getFinishesAt(): number;
  setFinishesAt(value: number): CreateEventInternallyRequest;

  getStartedAt(): number;
  setStartedAt(value: number): CreateEventInternallyRequest;

  getFinishedAt(): number;
  setFinishedAt(value: number): CreateEventInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateEventInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateEventInternallyRequest;

  getThumbnail(): string;
  setThumbnail(value: string): CreateEventInternallyRequest;

  getBackground(): string;
  setBackground(value: string): CreateEventInternallyRequest;

  getBroadcastUrl(): string;
  setBroadcastUrl(value: string): CreateEventInternallyRequest;

  getBroadcastOffset(): number;
  setBroadcastOffset(value: number): CreateEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventInternallyRequest): CreateEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventInternallyRequest, reader: jspb.BinaryReader): CreateEventInternallyRequest;
}

export namespace CreateEventInternallyRequest {
  export type AsObject = {
    id: string,
    pid: string,
    chatId: string,
    roomId: string,
    partnerId: string,
    name: string,
    type: rooms_enums_pb.EventType,
    access: rooms_enums_pb.EventAccess,
    status: rooms_enums_pb.EventStatus,
    source: rooms_enums_pb.EventSource,
    layout: rooms_enums_pb.EventLayout,
    genresList: Array<rooms_enums_pb.EventGenre>,
    region: string,
    summary: string,
    overseer: rooms_enums_pb.EventOverseer,
    audience: number,
    description: string,
    startsAt: number,
    finishesAt: number,
    startedAt: number,
    finishedAt: number,
    createdAt: number,
    updatedAt: number,
    thumbnail: string,
    background: string,
    broadcastUrl: string,
    broadcastOffset: number,
  }
}

export class CreateEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateEventInternallyRequest>;
  setRequestsList(value: Array<CreateEventInternallyRequest>): CreateEventsInternallyRequest;
  clearRequestsList(): CreateEventsInternallyRequest;
  addRequests(value?: CreateEventInternallyRequest, index?: number): CreateEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventsInternallyRequest): CreateEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventsInternallyRequest, reader: jspb.BinaryReader): CreateEventsInternallyRequest;
}

export namespace CreateEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateEventInternallyRequest.AsObject>,
  }
}

export class CreateEventsInternallyResponse extends jspb.Message {
  getEventsList(): Array<rooms_models_pb.EventInfo>;
  setEventsList(value: Array<rooms_models_pb.EventInfo>): CreateEventsInternallyResponse;
  clearEventsList(): CreateEventsInternallyResponse;
  addEvents(value?: rooms_models_pb.EventInfo, index?: number): rooms_models_pb.EventInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventsInternallyResponse): CreateEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateEventsInternallyResponse, reader: jspb.BinaryReader): CreateEventsInternallyResponse;
}

export namespace CreateEventsInternallyResponse {
  export type AsObject = {
    eventsList: Array<rooms_models_pb.EventInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventInternallyRequest;

  getPid(): rooms_models_pb.EventPidValue | undefined;
  setPid(value?: rooms_models_pb.EventPidValue): UpdateEventInternallyRequest;
  hasPid(): boolean;
  clearPid(): UpdateEventInternallyRequest;

  getName(): rooms_models_pb.EventNameValue | undefined;
  setName(value?: rooms_models_pb.EventNameValue): UpdateEventInternallyRequest;
  hasName(): boolean;
  clearName(): UpdateEventInternallyRequest;

  getAccess(): rooms_models_pb.EventAccessValue | undefined;
  setAccess(value?: rooms_models_pb.EventAccessValue): UpdateEventInternallyRequest;
  hasAccess(): boolean;
  clearAccess(): UpdateEventInternallyRequest;

  getStatus(): rooms_models_pb.EventStatusValue | undefined;
  setStatus(value?: rooms_models_pb.EventStatusValue): UpdateEventInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateEventInternallyRequest;

  getLayout(): rooms_models_pb.EventLayoutValue | undefined;
  setLayout(value?: rooms_models_pb.EventLayoutValue): UpdateEventInternallyRequest;
  hasLayout(): boolean;
  clearLayout(): UpdateEventInternallyRequest;

  getGenres(): rooms_models_pb.EventGenresValue | undefined;
  setGenres(value?: rooms_models_pb.EventGenresValue): UpdateEventInternallyRequest;
  hasGenres(): boolean;
  clearGenres(): UpdateEventInternallyRequest;

  getSummary(): rooms_models_pb.EventSummaryValue | undefined;
  setSummary(value?: rooms_models_pb.EventSummaryValue): UpdateEventInternallyRequest;
  hasSummary(): boolean;
  clearSummary(): UpdateEventInternallyRequest;

  getOverseer(): rooms_models_pb.EventOverseerValue | undefined;
  setOverseer(value?: rooms_models_pb.EventOverseerValue): UpdateEventInternallyRequest;
  hasOverseer(): boolean;
  clearOverseer(): UpdateEventInternallyRequest;

  getAudience(): rooms_models_pb.EventAudienceValue | undefined;
  setAudience(value?: rooms_models_pb.EventAudienceValue): UpdateEventInternallyRequest;
  hasAudience(): boolean;
  clearAudience(): UpdateEventInternallyRequest;

  getDescription(): rooms_models_pb.EventDescriptionValue | undefined;
  setDescription(value?: rooms_models_pb.EventDescriptionValue): UpdateEventInternallyRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateEventInternallyRequest;

  getStartsAt(): rooms_models_pb.EventStartsAtValue | undefined;
  setStartsAt(value?: rooms_models_pb.EventStartsAtValue): UpdateEventInternallyRequest;
  hasStartsAt(): boolean;
  clearStartsAt(): UpdateEventInternallyRequest;

  getFinishesAt(): rooms_models_pb.EventFinishesAtValue | undefined;
  setFinishesAt(value?: rooms_models_pb.EventFinishesAtValue): UpdateEventInternallyRequest;
  hasFinishesAt(): boolean;
  clearFinishesAt(): UpdateEventInternallyRequest;

  getStartedAt(): rooms_models_pb.EventStartedAtValue | undefined;
  setStartedAt(value?: rooms_models_pb.EventStartedAtValue): UpdateEventInternallyRequest;
  hasStartedAt(): boolean;
  clearStartedAt(): UpdateEventInternallyRequest;

  getFinishedAt(): rooms_models_pb.EventFinishedAtValue | undefined;
  setFinishedAt(value?: rooms_models_pb.EventFinishedAtValue): UpdateEventInternallyRequest;
  hasFinishedAt(): boolean;
  clearFinishedAt(): UpdateEventInternallyRequest;

  getThumbnail(): rooms_models_pb.EventThumbnailValue | undefined;
  setThumbnail(value?: rooms_models_pb.EventThumbnailValue): UpdateEventInternallyRequest;
  hasThumbnail(): boolean;
  clearThumbnail(): UpdateEventInternallyRequest;

  getBackground(): rooms_models_pb.EventBackgroundValue | undefined;
  setBackground(value?: rooms_models_pb.EventBackgroundValue): UpdateEventInternallyRequest;
  hasBackground(): boolean;
  clearBackground(): UpdateEventInternallyRequest;

  getBroadcastUrl(): rooms_models_pb.EventBroadcastUrlValue | undefined;
  setBroadcastUrl(value?: rooms_models_pb.EventBroadcastUrlValue): UpdateEventInternallyRequest;
  hasBroadcastUrl(): boolean;
  clearBroadcastUrl(): UpdateEventInternallyRequest;

  getBroadcastOffset(): rooms_models_pb.EventBroadcastOffsetValue | undefined;
  setBroadcastOffset(value?: rooms_models_pb.EventBroadcastOffsetValue): UpdateEventInternallyRequest;
  hasBroadcastOffset(): boolean;
  clearBroadcastOffset(): UpdateEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventInternallyRequest): UpdateEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventInternallyRequest, reader: jspb.BinaryReader): UpdateEventInternallyRequest;
}

export namespace UpdateEventInternallyRequest {
  export type AsObject = {
    id: string,
    pid?: rooms_models_pb.EventPidValue.AsObject,
    name?: rooms_models_pb.EventNameValue.AsObject,
    access?: rooms_models_pb.EventAccessValue.AsObject,
    status?: rooms_models_pb.EventStatusValue.AsObject,
    layout?: rooms_models_pb.EventLayoutValue.AsObject,
    genres?: rooms_models_pb.EventGenresValue.AsObject,
    summary?: rooms_models_pb.EventSummaryValue.AsObject,
    overseer?: rooms_models_pb.EventOverseerValue.AsObject,
    audience?: rooms_models_pb.EventAudienceValue.AsObject,
    description?: rooms_models_pb.EventDescriptionValue.AsObject,
    startsAt?: rooms_models_pb.EventStartsAtValue.AsObject,
    finishesAt?: rooms_models_pb.EventFinishesAtValue.AsObject,
    startedAt?: rooms_models_pb.EventStartedAtValue.AsObject,
    finishedAt?: rooms_models_pb.EventFinishedAtValue.AsObject,
    thumbnail?: rooms_models_pb.EventThumbnailValue.AsObject,
    background?: rooms_models_pb.EventBackgroundValue.AsObject,
    broadcastUrl?: rooms_models_pb.EventBroadcastUrlValue.AsObject,
    broadcastOffset?: rooms_models_pb.EventBroadcastOffsetValue.AsObject,
  }
}

export class UpdateEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateEventInternallyRequest>;
  setRequestsList(value: Array<UpdateEventInternallyRequest>): UpdateEventsInternallyRequest;
  clearRequestsList(): UpdateEventsInternallyRequest;
  addRequests(value?: UpdateEventInternallyRequest, index?: number): UpdateEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventsInternallyRequest): UpdateEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventsInternallyRequest, reader: jspb.BinaryReader): UpdateEventsInternallyRequest;
}

export namespace UpdateEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateEventInternallyRequest.AsObject>,
  }
}

export class UpdateEventsInternallyResponse extends jspb.Message {
  getEventsList(): Array<rooms_models_pb.EventInfo>;
  setEventsList(value: Array<rooms_models_pb.EventInfo>): UpdateEventsInternallyResponse;
  clearEventsList(): UpdateEventsInternallyResponse;
  addEvents(value?: rooms_models_pb.EventInfo, index?: number): rooms_models_pb.EventInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventsInternallyResponse): UpdateEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateEventsInternallyResponse, reader: jspb.BinaryReader): UpdateEventsInternallyResponse;
}

export namespace UpdateEventsInternallyResponse {
  export type AsObject = {
    eventsList: Array<rooms_models_pb.EventInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventInternallyRequest): DeleteEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventInternallyRequest, reader: jspb.BinaryReader): DeleteEventInternallyRequest;
}

export namespace DeleteEventInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteEventInternallyRequest>;
  setRequestsList(value: Array<DeleteEventInternallyRequest>): DeleteEventsInternallyRequest;
  clearRequestsList(): DeleteEventsInternallyRequest;
  addRequests(value?: DeleteEventInternallyRequest, index?: number): DeleteEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventsInternallyRequest): DeleteEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventsInternallyRequest, reader: jspb.BinaryReader): DeleteEventsInternallyRequest;
}

export namespace DeleteEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteEventInternallyRequest.AsObject>,
  }
}

export class DeleteEventsInternallyResponse extends jspb.Message {
  getEventsList(): Array<rooms_models_pb.EventInfo>;
  setEventsList(value: Array<rooms_models_pb.EventInfo>): DeleteEventsInternallyResponse;
  clearEventsList(): DeleteEventsInternallyResponse;
  addEvents(value?: rooms_models_pb.EventInfo, index?: number): rooms_models_pb.EventInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventsInternallyResponse): DeleteEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteEventsInternallyResponse, reader: jspb.BinaryReader): DeleteEventsInternallyResponse;
}

export namespace DeleteEventsInternallyResponse {
  export type AsObject = {
    eventsList: Array<rooms_models_pb.EventInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class StartEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): StartEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartEventInternallyRequest): StartEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: StartEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartEventInternallyRequest;
  static deserializeBinaryFromReader(message: StartEventInternallyRequest, reader: jspb.BinaryReader): StartEventInternallyRequest;
}

export namespace StartEventInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class StartEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<StartEventInternallyRequest>;
  setRequestsList(value: Array<StartEventInternallyRequest>): StartEventsInternallyRequest;
  clearRequestsList(): StartEventsInternallyRequest;
  addRequests(value?: StartEventInternallyRequest, index?: number): StartEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartEventsInternallyRequest): StartEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: StartEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartEventsInternallyRequest;
  static deserializeBinaryFromReader(message: StartEventsInternallyRequest, reader: jspb.BinaryReader): StartEventsInternallyRequest;
}

export namespace StartEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<StartEventInternallyRequest.AsObject>,
  }
}

export class StartEventsInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): StartEventsInternallyResponse;
  hasError(): boolean;
  clearError(): StartEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartEventsInternallyResponse): StartEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: StartEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartEventsInternallyResponse;
  static deserializeBinaryFromReader(message: StartEventsInternallyResponse, reader: jspb.BinaryReader): StartEventsInternallyResponse;
}

export namespace StartEventsInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class FinishEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): FinishEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishEventInternallyRequest): FinishEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: FinishEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishEventInternallyRequest;
  static deserializeBinaryFromReader(message: FinishEventInternallyRequest, reader: jspb.BinaryReader): FinishEventInternallyRequest;
}

export namespace FinishEventInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class FinishEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<FinishEventInternallyRequest>;
  setRequestsList(value: Array<FinishEventInternallyRequest>): FinishEventsInternallyRequest;
  clearRequestsList(): FinishEventsInternallyRequest;
  addRequests(value?: FinishEventInternallyRequest, index?: number): FinishEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishEventsInternallyRequest): FinishEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: FinishEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishEventsInternallyRequest;
  static deserializeBinaryFromReader(message: FinishEventsInternallyRequest, reader: jspb.BinaryReader): FinishEventsInternallyRequest;
}

export namespace FinishEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<FinishEventInternallyRequest.AsObject>,
  }
}

export class FinishEventsInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): FinishEventsInternallyResponse;
  hasError(): boolean;
  clearError(): FinishEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinishEventsInternallyResponse): FinishEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: FinishEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishEventsInternallyResponse;
  static deserializeBinaryFromReader(message: FinishEventsInternallyResponse, reader: jspb.BinaryReader): FinishEventsInternallyResponse;
}

export namespace FinishEventsInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class CancelEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CancelEventInternallyRequest;

  getReason(): string;
  setReason(value: string): CancelEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelEventInternallyRequest): CancelEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CancelEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelEventInternallyRequest;
  static deserializeBinaryFromReader(message: CancelEventInternallyRequest, reader: jspb.BinaryReader): CancelEventInternallyRequest;
}

export namespace CancelEventInternallyRequest {
  export type AsObject = {
    id: string,
    reason: string,
  }
}

export class CancelEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CancelEventInternallyRequest>;
  setRequestsList(value: Array<CancelEventInternallyRequest>): CancelEventsInternallyRequest;
  clearRequestsList(): CancelEventsInternallyRequest;
  addRequests(value?: CancelEventInternallyRequest, index?: number): CancelEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelEventsInternallyRequest): CancelEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CancelEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelEventsInternallyRequest;
  static deserializeBinaryFromReader(message: CancelEventsInternallyRequest, reader: jspb.BinaryReader): CancelEventsInternallyRequest;
}

export namespace CancelEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CancelEventInternallyRequest.AsObject>,
  }
}

export class CancelEventsInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CancelEventsInternallyResponse;
  hasError(): boolean;
  clearError(): CancelEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelEventsInternallyResponse): CancelEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CancelEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelEventsInternallyResponse;
  static deserializeBinaryFromReader(message: CancelEventsInternallyResponse, reader: jspb.BinaryReader): CancelEventsInternallyResponse;
}

export namespace CancelEventsInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class RestartEventInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RestartEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartEventInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestartEventInternallyRequest): RestartEventInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: RestartEventInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartEventInternallyRequest;
  static deserializeBinaryFromReader(message: RestartEventInternallyRequest, reader: jspb.BinaryReader): RestartEventInternallyRequest;
}

export namespace RestartEventInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class RestartEventsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<RestartEventInternallyRequest>;
  setRequestsList(value: Array<RestartEventInternallyRequest>): RestartEventsInternallyRequest;
  clearRequestsList(): RestartEventsInternallyRequest;
  addRequests(value?: RestartEventInternallyRequest, index?: number): RestartEventInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestartEventsInternallyRequest): RestartEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: RestartEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartEventsInternallyRequest;
  static deserializeBinaryFromReader(message: RestartEventsInternallyRequest, reader: jspb.BinaryReader): RestartEventsInternallyRequest;
}

export namespace RestartEventsInternallyRequest {
  export type AsObject = {
    requestsList: Array<RestartEventInternallyRequest.AsObject>,
  }
}

export class RestartEventsInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): RestartEventsInternallyResponse;
  hasError(): boolean;
  clearError(): RestartEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestartEventsInternallyResponse): RestartEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: RestartEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartEventsInternallyResponse;
  static deserializeBinaryFromReader(message: RestartEventsInternallyResponse, reader: jspb.BinaryReader): RestartEventsInternallyResponse;
}

export namespace RestartEventsInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountEventsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountEventsInternallyRequest;
  clearIdsList(): ListAndCountEventsInternallyRequest;
  addIds(value: string, index?: number): ListAndCountEventsInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): ListAndCountEventsInternallyRequest;
  clearPidsList(): ListAndCountEventsInternallyRequest;
  addPids(value: string, index?: number): ListAndCountEventsInternallyRequest;

  getChatIdsList(): Array<string>;
  setChatIdsList(value: Array<string>): ListAndCountEventsInternallyRequest;
  clearChatIdsList(): ListAndCountEventsInternallyRequest;
  addChatIds(value: string, index?: number): ListAndCountEventsInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListAndCountEventsInternallyRequest;
  clearRoomIdsList(): ListAndCountEventsInternallyRequest;
  addRoomIds(value: string, index?: number): ListAndCountEventsInternallyRequest;

  getStatusesList(): Array<rooms_enums_pb.EventStatus>;
  setStatusesList(value: Array<rooms_enums_pb.EventStatus>): ListAndCountEventsInternallyRequest;
  clearStatusesList(): ListAndCountEventsInternallyRequest;
  addStatuses(value: rooms_enums_pb.EventStatus, index?: number): ListAndCountEventsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountEventsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountEventsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountEventsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountEventsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountEventsInternallyRequest): ListAndCountEventsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountEventsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountEventsInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountEventsInternallyRequest, reader: jspb.BinaryReader): ListAndCountEventsInternallyRequest;
}

export namespace ListAndCountEventsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    chatIdsList: Array<string>,
    roomIdsList: Array<string>,
    statusesList: Array<rooms_enums_pb.EventStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountEventsInternallyResponse extends jspb.Message {
  getEventsList(): Array<rooms_models_pb.EventInfo>;
  setEventsList(value: Array<rooms_models_pb.EventInfo>): ListAndCountEventsInternallyResponse;
  clearEventsList(): ListAndCountEventsInternallyResponse;
  addEvents(value?: rooms_models_pb.EventInfo, index?: number): rooms_models_pb.EventInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountEventsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountEventsInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountEventsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountEventsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountEventsInternallyResponse): ListAndCountEventsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountEventsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountEventsInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountEventsInternallyResponse, reader: jspb.BinaryReader): ListAndCountEventsInternallyResponse;
}

export namespace ListAndCountEventsInternallyResponse {
  export type AsObject = {
    eventsList: Array<rooms_models_pb.EventInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CheckEventOwnershipInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CheckEventOwnershipInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEventOwnershipInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEventOwnershipInternallyRequest): CheckEventOwnershipInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CheckEventOwnershipInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEventOwnershipInternallyRequest;
  static deserializeBinaryFromReader(message: CheckEventOwnershipInternallyRequest, reader: jspb.BinaryReader): CheckEventOwnershipInternallyRequest;
}

export namespace CheckEventOwnershipInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class CheckEventOwnershipsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CheckEventOwnershipInternallyRequest>;
  setRequestsList(value: Array<CheckEventOwnershipInternallyRequest>): CheckEventOwnershipsInternallyRequest;
  clearRequestsList(): CheckEventOwnershipsInternallyRequest;
  addRequests(value?: CheckEventOwnershipInternallyRequest, index?: number): CheckEventOwnershipInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEventOwnershipsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEventOwnershipsInternallyRequest): CheckEventOwnershipsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CheckEventOwnershipsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEventOwnershipsInternallyRequest;
  static deserializeBinaryFromReader(message: CheckEventOwnershipsInternallyRequest, reader: jspb.BinaryReader): CheckEventOwnershipsInternallyRequest;
}

export namespace CheckEventOwnershipsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CheckEventOwnershipInternallyRequest.AsObject>,
  }
}

export class CheckEventOwnershipsInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CheckEventOwnershipsInternallyResponse;
  hasError(): boolean;
  clearError(): CheckEventOwnershipsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEventOwnershipsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEventOwnershipsInternallyResponse): CheckEventOwnershipsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CheckEventOwnershipsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEventOwnershipsInternallyResponse;
  static deserializeBinaryFromReader(message: CheckEventOwnershipsInternallyResponse, reader: jspb.BinaryReader): CheckEventOwnershipsInternallyResponse;
}

export namespace CheckEventOwnershipsInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventObserverInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventObserverInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): GetEventObserverInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventObserverInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventObserverInternallyRequest): GetEventObserverInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventObserverInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventObserverInternallyRequest;
  static deserializeBinaryFromReader(message: GetEventObserverInternallyRequest, reader: jspb.BinaryReader): GetEventObserverInternallyRequest;
}

export namespace GetEventObserverInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
  }
}

export class GetEventObserverInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventObserverInfo | undefined;
  setInfo(value?: rooms_models_pb.EventObserverInfo): GetEventObserverInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventObserverInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventObserverInternallyResponse;
  hasError(): boolean;
  clearError(): GetEventObserverInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventObserverInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventObserverInternallyResponse): GetEventObserverInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventObserverInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventObserverInternallyResponse;
  static deserializeBinaryFromReader(message: GetEventObserverInternallyResponse, reader: jspb.BinaryReader): GetEventObserverInternallyResponse;
}

export namespace GetEventObserverInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventObserverInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventObserversInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListEventObserversInternallyRequest;
  clearIdsList(): ListEventObserversInternallyRequest;
  addIds(value: string, index?: number): ListEventObserversInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListEventObserversInternallyRequest;
  clearRoomIdsList(): ListEventObserversInternallyRequest;
  addRoomIds(value: string, index?: number): ListEventObserversInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListEventObserversInternallyRequest;
  clearEventIdsList(): ListEventObserversInternallyRequest;
  addEventIds(value: string, index?: number): ListEventObserversInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListEventObserversInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListEventObserversInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListEventObserversInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventObserversInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventObserversInternallyRequest): ListEventObserversInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventObserversInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventObserversInternallyRequest;
  static deserializeBinaryFromReader(message: ListEventObserversInternallyRequest, reader: jspb.BinaryReader): ListEventObserversInternallyRequest;
}

export namespace ListEventObserversInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    eventIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventObserversInternallyResponse extends jspb.Message {
  getObserversList(): Array<rooms_models_pb.EventObserverInfo>;
  setObserversList(value: Array<rooms_models_pb.EventObserverInfo>): ListEventObserversInternallyResponse;
  clearObserversList(): ListEventObserversInternallyResponse;
  addObservers(value?: rooms_models_pb.EventObserverInfo, index?: number): rooms_models_pb.EventObserverInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventObserversInternallyResponse;
  hasError(): boolean;
  clearError(): ListEventObserversInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventObserversInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventObserversInternallyResponse): ListEventObserversInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventObserversInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventObserversInternallyResponse;
  static deserializeBinaryFromReader(message: ListEventObserversInternallyResponse, reader: jspb.BinaryReader): ListEventObserversInternallyResponse;
}

export namespace ListEventObserversInternallyResponse {
  export type AsObject = {
    observersList: Array<rooms_models_pb.EventObserverInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventObserversInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountEventObserversInternallyRequest;
  clearIdsList(): CountEventObserversInternallyRequest;
  addIds(value: string, index?: number): CountEventObserversInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): CountEventObserversInternallyRequest;
  clearRoomIdsList(): CountEventObserversInternallyRequest;
  addRoomIds(value: string, index?: number): CountEventObserversInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): CountEventObserversInternallyRequest;
  clearEventIdsList(): CountEventObserversInternallyRequest;
  addEventIds(value: string, index?: number): CountEventObserversInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventObserversInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventObserversInternallyRequest): CountEventObserversInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventObserversInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventObserversInternallyRequest;
  static deserializeBinaryFromReader(message: CountEventObserversInternallyRequest, reader: jspb.BinaryReader): CountEventObserversInternallyRequest;
}

export namespace CountEventObserversInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    eventIdsList: Array<string>,
  }
}

export class CountEventObserversInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventObserversInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventObserversInternallyResponse;
  hasError(): boolean;
  clearError(): CountEventObserversInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventObserversInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventObserversInternallyResponse): CountEventObserversInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventObserversInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventObserversInternallyResponse;
  static deserializeBinaryFromReader(message: CountEventObserversInternallyResponse, reader: jspb.BinaryReader): CountEventObserversInternallyResponse;
}

export namespace CountEventObserversInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventObserverInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateEventObserverInternallyRequest;

  getRoomId(): string;
  setRoomId(value: string): CreateEventObserverInternallyRequest;

  getEventId(): string;
  setEventId(value: string): CreateEventObserverInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateEventObserverInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateEventObserverInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventObserverInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventObserverInternallyRequest): CreateEventObserverInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventObserverInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventObserverInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventObserverInternallyRequest, reader: jspb.BinaryReader): CreateEventObserverInternallyRequest;
}

export namespace CreateEventObserverInternallyRequest {
  export type AsObject = {
    id: string,
    roomId: string,
    eventId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateEventObserversInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateEventObserverInternallyRequest>;
  setRequestsList(value: Array<CreateEventObserverInternallyRequest>): CreateEventObserversInternallyRequest;
  clearRequestsList(): CreateEventObserversInternallyRequest;
  addRequests(value?: CreateEventObserverInternallyRequest, index?: number): CreateEventObserverInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventObserversInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventObserversInternallyRequest): CreateEventObserversInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventObserversInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventObserversInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventObserversInternallyRequest, reader: jspb.BinaryReader): CreateEventObserversInternallyRequest;
}

export namespace CreateEventObserversInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateEventObserverInternallyRequest.AsObject>,
  }
}

export class CreateEventObserversInternallyResponse extends jspb.Message {
  getObserversList(): Array<rooms_models_pb.EventObserverInfo>;
  setObserversList(value: Array<rooms_models_pb.EventObserverInfo>): CreateEventObserversInternallyResponse;
  clearObserversList(): CreateEventObserversInternallyResponse;
  addObservers(value?: rooms_models_pb.EventObserverInfo, index?: number): rooms_models_pb.EventObserverInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventObserversInternallyResponse;
  hasError(): boolean;
  clearError(): CreateEventObserversInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventObserversInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventObserversInternallyResponse): CreateEventObserversInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventObserversInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventObserversInternallyResponse;
  static deserializeBinaryFromReader(message: CreateEventObserversInternallyResponse, reader: jspb.BinaryReader): CreateEventObserversInternallyResponse;
}

export namespace CreateEventObserversInternallyResponse {
  export type AsObject = {
    observersList: Array<rooms_models_pb.EventObserverInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventObserverInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventObserverInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventObserverInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventObserverInternallyRequest): DeleteEventObserverInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventObserverInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventObserverInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventObserverInternallyRequest, reader: jspb.BinaryReader): DeleteEventObserverInternallyRequest;
}

export namespace DeleteEventObserverInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventObserversInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteEventObserverInternallyRequest>;
  setRequestsList(value: Array<DeleteEventObserverInternallyRequest>): DeleteEventObserversInternallyRequest;
  clearRequestsList(): DeleteEventObserversInternallyRequest;
  addRequests(value?: DeleteEventObserverInternallyRequest, index?: number): DeleteEventObserverInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventObserversInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventObserversInternallyRequest): DeleteEventObserversInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventObserversInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventObserversInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventObserversInternallyRequest, reader: jspb.BinaryReader): DeleteEventObserversInternallyRequest;
}

export namespace DeleteEventObserversInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteEventObserverInternallyRequest.AsObject>,
  }
}

export class DeleteEventObserversInternallyResponse extends jspb.Message {
  getObserversList(): Array<rooms_models_pb.EventObserverInfo>;
  setObserversList(value: Array<rooms_models_pb.EventObserverInfo>): DeleteEventObserversInternallyResponse;
  clearObserversList(): DeleteEventObserversInternallyResponse;
  addObservers(value?: rooms_models_pb.EventObserverInfo, index?: number): rooms_models_pb.EventObserverInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventObserversInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteEventObserversInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventObserversInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventObserversInternallyResponse): DeleteEventObserversInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventObserversInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventObserversInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteEventObserversInternallyResponse, reader: jspb.BinaryReader): DeleteEventObserversInternallyResponse;
}

export namespace DeleteEventObserversInternallyResponse {
  export type AsObject = {
    observersList: Array<rooms_models_pb.EventObserverInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountEventObserversInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountEventObserversInternallyRequest;
  clearIdsList(): ListAndCountEventObserversInternallyRequest;
  addIds(value: string, index?: number): ListAndCountEventObserversInternallyRequest;

  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListAndCountEventObserversInternallyRequest;
  clearRoomIdsList(): ListAndCountEventObserversInternallyRequest;
  addRoomIds(value: string, index?: number): ListAndCountEventObserversInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListAndCountEventObserversInternallyRequest;
  clearEventIdsList(): ListAndCountEventObserversInternallyRequest;
  addEventIds(value: string, index?: number): ListAndCountEventObserversInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountEventObserversInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountEventObserversInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountEventObserversInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountEventObserversInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountEventObserversInternallyRequest): ListAndCountEventObserversInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountEventObserversInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountEventObserversInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountEventObserversInternallyRequest, reader: jspb.BinaryReader): ListAndCountEventObserversInternallyRequest;
}

export namespace ListAndCountEventObserversInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomIdsList: Array<string>,
    eventIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountEventObserversInternallyResponse extends jspb.Message {
  getObserversList(): Array<rooms_models_pb.EventObserverInfo>;
  setObserversList(value: Array<rooms_models_pb.EventObserverInfo>): ListAndCountEventObserversInternallyResponse;
  clearObserversList(): ListAndCountEventObserversInternallyResponse;
  addObservers(value?: rooms_models_pb.EventObserverInfo, index?: number): rooms_models_pb.EventObserverInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountEventObserversInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountEventObserversInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountEventObserversInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountEventObserversInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountEventObserversInternallyResponse): ListAndCountEventObserversInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountEventObserversInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountEventObserversInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountEventObserversInternallyResponse, reader: jspb.BinaryReader): ListAndCountEventObserversInternallyResponse;
}

export namespace ListAndCountEventObserversInternallyResponse {
  export type AsObject = {
    observersList: Array<rooms_models_pb.EventObserverInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventPerformerInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventPerformerInternallyRequest;

  getEventId(): string;
  setEventId(value: string): GetEventPerformerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventPerformerInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventPerformerInternallyRequest): GetEventPerformerInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventPerformerInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventPerformerInternallyRequest;
  static deserializeBinaryFromReader(message: GetEventPerformerInternallyRequest, reader: jspb.BinaryReader): GetEventPerformerInternallyRequest;
}

export namespace GetEventPerformerInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
  }
}

export class GetEventPerformerInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventPerformerInfo | undefined;
  setInfo(value?: rooms_models_pb.EventPerformerInfo): GetEventPerformerInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventPerformerInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventPerformerInternallyResponse;
  hasError(): boolean;
  clearError(): GetEventPerformerInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventPerformerInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventPerformerInternallyResponse): GetEventPerformerInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventPerformerInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventPerformerInternallyResponse;
  static deserializeBinaryFromReader(message: GetEventPerformerInternallyResponse, reader: jspb.BinaryReader): GetEventPerformerInternallyResponse;
}

export namespace GetEventPerformerInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventPerformerInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventPerformersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListEventPerformersInternallyRequest;
  clearIdsList(): ListEventPerformersInternallyRequest;
  addIds(value: string, index?: number): ListEventPerformersInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListEventPerformersInternallyRequest;
  clearEventIdsList(): ListEventPerformersInternallyRequest;
  addEventIds(value: string, index?: number): ListEventPerformersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListEventPerformersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListEventPerformersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListEventPerformersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventPerformersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventPerformersInternallyRequest): ListEventPerformersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventPerformersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventPerformersInternallyRequest;
  static deserializeBinaryFromReader(message: ListEventPerformersInternallyRequest, reader: jspb.BinaryReader): ListEventPerformersInternallyRequest;
}

export namespace ListEventPerformersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventPerformersInternallyResponse extends jspb.Message {
  getPerformersList(): Array<rooms_models_pb.EventPerformerInfo>;
  setPerformersList(value: Array<rooms_models_pb.EventPerformerInfo>): ListEventPerformersInternallyResponse;
  clearPerformersList(): ListEventPerformersInternallyResponse;
  addPerformers(value?: rooms_models_pb.EventPerformerInfo, index?: number): rooms_models_pb.EventPerformerInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventPerformersInternallyResponse;
  hasError(): boolean;
  clearError(): ListEventPerformersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventPerformersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventPerformersInternallyResponse): ListEventPerformersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventPerformersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventPerformersInternallyResponse;
  static deserializeBinaryFromReader(message: ListEventPerformersInternallyResponse, reader: jspb.BinaryReader): ListEventPerformersInternallyResponse;
}

export namespace ListEventPerformersInternallyResponse {
  export type AsObject = {
    performersList: Array<rooms_models_pb.EventPerformerInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventPerformersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountEventPerformersInternallyRequest;
  clearIdsList(): CountEventPerformersInternallyRequest;
  addIds(value: string, index?: number): CountEventPerformersInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): CountEventPerformersInternallyRequest;
  clearEventIdsList(): CountEventPerformersInternallyRequest;
  addEventIds(value: string, index?: number): CountEventPerformersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventPerformersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventPerformersInternallyRequest): CountEventPerformersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventPerformersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventPerformersInternallyRequest;
  static deserializeBinaryFromReader(message: CountEventPerformersInternallyRequest, reader: jspb.BinaryReader): CountEventPerformersInternallyRequest;
}

export namespace CountEventPerformersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
  }
}

export class CountEventPerformersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventPerformersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventPerformersInternallyResponse;
  hasError(): boolean;
  clearError(): CountEventPerformersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventPerformersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventPerformersInternallyResponse): CountEventPerformersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventPerformersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventPerformersInternallyResponse;
  static deserializeBinaryFromReader(message: CountEventPerformersInternallyResponse, reader: jspb.BinaryReader): CountEventPerformersInternallyResponse;
}

export namespace CountEventPerformersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountEventPerformersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountEventPerformersInternallyRequest;
  clearIdsList(): ListAndCountEventPerformersInternallyRequest;
  addIds(value: string, index?: number): ListAndCountEventPerformersInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListAndCountEventPerformersInternallyRequest;
  clearEventIdsList(): ListAndCountEventPerformersInternallyRequest;
  addEventIds(value: string, index?: number): ListAndCountEventPerformersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountEventPerformersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountEventPerformersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountEventPerformersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountEventPerformersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountEventPerformersInternallyRequest): ListAndCountEventPerformersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountEventPerformersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountEventPerformersInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountEventPerformersInternallyRequest, reader: jspb.BinaryReader): ListAndCountEventPerformersInternallyRequest;
}

export namespace ListAndCountEventPerformersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountEventPerformersInternallyResponse extends jspb.Message {
  getPerformersList(): Array<rooms_models_pb.EventPerformerInfo>;
  setPerformersList(value: Array<rooms_models_pb.EventPerformerInfo>): ListAndCountEventPerformersInternallyResponse;
  clearPerformersList(): ListAndCountEventPerformersInternallyResponse;
  addPerformers(value?: rooms_models_pb.EventPerformerInfo, index?: number): rooms_models_pb.EventPerformerInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountEventPerformersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountEventPerformersInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountEventPerformersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountEventPerformersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountEventPerformersInternallyResponse): ListAndCountEventPerformersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountEventPerformersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountEventPerformersInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountEventPerformersInternallyResponse, reader: jspb.BinaryReader): ListAndCountEventPerformersInternallyResponse;
}

export namespace ListAndCountEventPerformersInternallyResponse {
  export type AsObject = {
    performersList: Array<rooms_models_pb.EventPerformerInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventOwnerReportInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventOwnerReportInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetEventOwnerReportInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventOwnerReportInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventOwnerReportInternallyRequest): GetEventOwnerReportInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventOwnerReportInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventOwnerReportInternallyRequest;
  static deserializeBinaryFromReader(message: GetEventOwnerReportInternallyRequest, reader: jspb.BinaryReader): GetEventOwnerReportInternallyRequest;
}

export namespace GetEventOwnerReportInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
  }
}

export class GetEventOwnerReportInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventOwnerReportInfo | undefined;
  setInfo(value?: rooms_models_pb.EventOwnerReportInfo): GetEventOwnerReportInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventOwnerReportInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventOwnerReportInternallyResponse;
  hasError(): boolean;
  clearError(): GetEventOwnerReportInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventOwnerReportInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventOwnerReportInternallyResponse): GetEventOwnerReportInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventOwnerReportInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventOwnerReportInternallyResponse;
  static deserializeBinaryFromReader(message: GetEventOwnerReportInternallyResponse, reader: jspb.BinaryReader): GetEventOwnerReportInternallyResponse;
}

export namespace GetEventOwnerReportInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventOwnerReportInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventOwnerReportsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListEventOwnerReportsInternallyRequest;
  clearIdsList(): ListEventOwnerReportsInternallyRequest;
  addIds(value: string, index?: number): ListEventOwnerReportsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListEventOwnerReportsInternallyRequest;
  clearUserIdsList(): ListEventOwnerReportsInternallyRequest;
  addUserIds(value: string, index?: number): ListEventOwnerReportsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListEventOwnerReportsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListEventOwnerReportsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListEventOwnerReportsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventOwnerReportsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventOwnerReportsInternallyRequest): ListEventOwnerReportsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventOwnerReportsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventOwnerReportsInternallyRequest;
  static deserializeBinaryFromReader(message: ListEventOwnerReportsInternallyRequest, reader: jspb.BinaryReader): ListEventOwnerReportsInternallyRequest;
}

export namespace ListEventOwnerReportsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventOwnerReportsInternallyResponse extends jspb.Message {
  getReportsList(): Array<rooms_models_pb.EventOwnerReportInfo>;
  setReportsList(value: Array<rooms_models_pb.EventOwnerReportInfo>): ListEventOwnerReportsInternallyResponse;
  clearReportsList(): ListEventOwnerReportsInternallyResponse;
  addReports(value?: rooms_models_pb.EventOwnerReportInfo, index?: number): rooms_models_pb.EventOwnerReportInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventOwnerReportsInternallyResponse;
  hasError(): boolean;
  clearError(): ListEventOwnerReportsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventOwnerReportsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventOwnerReportsInternallyResponse): ListEventOwnerReportsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventOwnerReportsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventOwnerReportsInternallyResponse;
  static deserializeBinaryFromReader(message: ListEventOwnerReportsInternallyResponse, reader: jspb.BinaryReader): ListEventOwnerReportsInternallyResponse;
}

export namespace ListEventOwnerReportsInternallyResponse {
  export type AsObject = {
    reportsList: Array<rooms_models_pb.EventOwnerReportInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventOwnerReportsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountEventOwnerReportsInternallyRequest;
  clearIdsList(): CountEventOwnerReportsInternallyRequest;
  addIds(value: string, index?: number): CountEventOwnerReportsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountEventOwnerReportsInternallyRequest;
  clearUserIdsList(): CountEventOwnerReportsInternallyRequest;
  addUserIds(value: string, index?: number): CountEventOwnerReportsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventOwnerReportsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventOwnerReportsInternallyRequest): CountEventOwnerReportsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventOwnerReportsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventOwnerReportsInternallyRequest;
  static deserializeBinaryFromReader(message: CountEventOwnerReportsInternallyRequest, reader: jspb.BinaryReader): CountEventOwnerReportsInternallyRequest;
}

export namespace CountEventOwnerReportsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
  }
}

export class CountEventOwnerReportsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventOwnerReportsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventOwnerReportsInternallyResponse;
  hasError(): boolean;
  clearError(): CountEventOwnerReportsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventOwnerReportsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventOwnerReportsInternallyResponse): CountEventOwnerReportsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventOwnerReportsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventOwnerReportsInternallyResponse;
  static deserializeBinaryFromReader(message: CountEventOwnerReportsInternallyResponse, reader: jspb.BinaryReader): CountEventOwnerReportsInternallyResponse;
}

export namespace CountEventOwnerReportsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventOwnerReportInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateEventOwnerReportInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateEventOwnerReportInternallyRequest;

  getPeakAudience(): number;
  setPeakAudience(value: number): CreateEventOwnerReportInternallyRequest;

  getTotalAudience(): number;
  setTotalAudience(value: number): CreateEventOwnerReportInternallyRequest;

  getAverageAudience(): number;
  setAverageAudience(value: number): CreateEventOwnerReportInternallyRequest;

  getTotalStreamTime(): number;
  setTotalStreamTime(value: number): CreateEventOwnerReportInternallyRequest;

  getAverageEventTime(): number;
  setAverageEventTime(value: number): CreateEventOwnerReportInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateEventOwnerReportInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateEventOwnerReportInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventOwnerReportInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventOwnerReportInternallyRequest): CreateEventOwnerReportInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventOwnerReportInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventOwnerReportInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventOwnerReportInternallyRequest, reader: jspb.BinaryReader): CreateEventOwnerReportInternallyRequest;
}

export namespace CreateEventOwnerReportInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    peakAudience: number,
    totalAudience: number,
    averageAudience: number,
    totalStreamTime: number,
    averageEventTime: number,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateEventOwnerReportsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateEventOwnerReportInternallyRequest>;
  setRequestsList(value: Array<CreateEventOwnerReportInternallyRequest>): CreateEventOwnerReportsInternallyRequest;
  clearRequestsList(): CreateEventOwnerReportsInternallyRequest;
  addRequests(value?: CreateEventOwnerReportInternallyRequest, index?: number): CreateEventOwnerReportInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventOwnerReportsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventOwnerReportsInternallyRequest): CreateEventOwnerReportsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventOwnerReportsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventOwnerReportsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventOwnerReportsInternallyRequest, reader: jspb.BinaryReader): CreateEventOwnerReportsInternallyRequest;
}

export namespace CreateEventOwnerReportsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateEventOwnerReportInternallyRequest.AsObject>,
  }
}

export class CreateEventOwnerReportsInternallyResponse extends jspb.Message {
  getReportsList(): Array<rooms_models_pb.EventOwnerReportInfo>;
  setReportsList(value: Array<rooms_models_pb.EventOwnerReportInfo>): CreateEventOwnerReportsInternallyResponse;
  clearReportsList(): CreateEventOwnerReportsInternallyResponse;
  addReports(value?: rooms_models_pb.EventOwnerReportInfo, index?: number): rooms_models_pb.EventOwnerReportInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventOwnerReportsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateEventOwnerReportsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventOwnerReportsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventOwnerReportsInternallyResponse): CreateEventOwnerReportsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventOwnerReportsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventOwnerReportsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateEventOwnerReportsInternallyResponse, reader: jspb.BinaryReader): CreateEventOwnerReportsInternallyResponse;
}

export namespace CreateEventOwnerReportsInternallyResponse {
  export type AsObject = {
    reportsList: Array<rooms_models_pb.EventOwnerReportInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventOwnerReportInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventOwnerReportInternallyRequest;

  getPeakAudience(): rooms_models_pb.EventOwnerReportPeakAudienceValue | undefined;
  setPeakAudience(value?: rooms_models_pb.EventOwnerReportPeakAudienceValue): UpdateEventOwnerReportInternallyRequest;
  hasPeakAudience(): boolean;
  clearPeakAudience(): UpdateEventOwnerReportInternallyRequest;

  getTotalAudience(): rooms_models_pb.EventOwnerReportPeakAudienceValue | undefined;
  setTotalAudience(value?: rooms_models_pb.EventOwnerReportPeakAudienceValue): UpdateEventOwnerReportInternallyRequest;
  hasTotalAudience(): boolean;
  clearTotalAudience(): UpdateEventOwnerReportInternallyRequest;

  getAverageAudience(): rooms_models_pb.EventOwnerReportAverageAudienceValue | undefined;
  setAverageAudience(value?: rooms_models_pb.EventOwnerReportAverageAudienceValue): UpdateEventOwnerReportInternallyRequest;
  hasAverageAudience(): boolean;
  clearAverageAudience(): UpdateEventOwnerReportInternallyRequest;

  getTotalStreamTime(): rooms_models_pb.EventOwnerReportTotalStreamTimeValue | undefined;
  setTotalStreamTime(value?: rooms_models_pb.EventOwnerReportTotalStreamTimeValue): UpdateEventOwnerReportInternallyRequest;
  hasTotalStreamTime(): boolean;
  clearTotalStreamTime(): UpdateEventOwnerReportInternallyRequest;

  getAverageEventTime(): rooms_models_pb.EventOwnerReportAverageEventTimeValue | undefined;
  setAverageEventTime(value?: rooms_models_pb.EventOwnerReportAverageEventTimeValue): UpdateEventOwnerReportInternallyRequest;
  hasAverageEventTime(): boolean;
  clearAverageEventTime(): UpdateEventOwnerReportInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventOwnerReportInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventOwnerReportInternallyRequest): UpdateEventOwnerReportInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventOwnerReportInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventOwnerReportInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventOwnerReportInternallyRequest, reader: jspb.BinaryReader): UpdateEventOwnerReportInternallyRequest;
}

export namespace UpdateEventOwnerReportInternallyRequest {
  export type AsObject = {
    id: string,
    peakAudience?: rooms_models_pb.EventOwnerReportPeakAudienceValue.AsObject,
    totalAudience?: rooms_models_pb.EventOwnerReportPeakAudienceValue.AsObject,
    averageAudience?: rooms_models_pb.EventOwnerReportAverageAudienceValue.AsObject,
    totalStreamTime?: rooms_models_pb.EventOwnerReportTotalStreamTimeValue.AsObject,
    averageEventTime?: rooms_models_pb.EventOwnerReportAverageEventTimeValue.AsObject,
  }
}

export class UpdateEventOwnerReportsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateEventOwnerReportInternallyRequest>;
  setRequestsList(value: Array<UpdateEventOwnerReportInternallyRequest>): UpdateEventOwnerReportsInternallyRequest;
  clearRequestsList(): UpdateEventOwnerReportsInternallyRequest;
  addRequests(value?: UpdateEventOwnerReportInternallyRequest, index?: number): UpdateEventOwnerReportInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventOwnerReportsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventOwnerReportsInternallyRequest): UpdateEventOwnerReportsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventOwnerReportsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventOwnerReportsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventOwnerReportsInternallyRequest, reader: jspb.BinaryReader): UpdateEventOwnerReportsInternallyRequest;
}

export namespace UpdateEventOwnerReportsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateEventOwnerReportInternallyRequest.AsObject>,
  }
}

export class UpdateEventOwnerReportsInternallyResponse extends jspb.Message {
  getReportsList(): Array<rooms_models_pb.EventOwnerReportInfo>;
  setReportsList(value: Array<rooms_models_pb.EventOwnerReportInfo>): UpdateEventOwnerReportsInternallyResponse;
  clearReportsList(): UpdateEventOwnerReportsInternallyResponse;
  addReports(value?: rooms_models_pb.EventOwnerReportInfo, index?: number): rooms_models_pb.EventOwnerReportInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventOwnerReportsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateEventOwnerReportsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventOwnerReportsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventOwnerReportsInternallyResponse): UpdateEventOwnerReportsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventOwnerReportsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventOwnerReportsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateEventOwnerReportsInternallyResponse, reader: jspb.BinaryReader): UpdateEventOwnerReportsInternallyResponse;
}

export namespace UpdateEventOwnerReportsInternallyResponse {
  export type AsObject = {
    reportsList: Array<rooms_models_pb.EventOwnerReportInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventOwnerReportInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventOwnerReportInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventOwnerReportInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventOwnerReportInternallyRequest): DeleteEventOwnerReportInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventOwnerReportInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventOwnerReportInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventOwnerReportInternallyRequest, reader: jspb.BinaryReader): DeleteEventOwnerReportInternallyRequest;
}

export namespace DeleteEventOwnerReportInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventOwnerReportsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteEventOwnerReportInternallyRequest>;
  setRequestsList(value: Array<DeleteEventOwnerReportInternallyRequest>): DeleteEventOwnerReportsInternallyRequest;
  clearRequestsList(): DeleteEventOwnerReportsInternallyRequest;
  addRequests(value?: DeleteEventOwnerReportInternallyRequest, index?: number): DeleteEventOwnerReportInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventOwnerReportsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventOwnerReportsInternallyRequest): DeleteEventOwnerReportsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventOwnerReportsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventOwnerReportsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventOwnerReportsInternallyRequest, reader: jspb.BinaryReader): DeleteEventOwnerReportsInternallyRequest;
}

export namespace DeleteEventOwnerReportsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteEventOwnerReportInternallyRequest.AsObject>,
  }
}

export class DeleteEventOwnerReportsInternallyResponse extends jspb.Message {
  getReportsList(): Array<rooms_models_pb.EventOwnerReportInfo>;
  setReportsList(value: Array<rooms_models_pb.EventOwnerReportInfo>): DeleteEventOwnerReportsInternallyResponse;
  clearReportsList(): DeleteEventOwnerReportsInternallyResponse;
  addReports(value?: rooms_models_pb.EventOwnerReportInfo, index?: number): rooms_models_pb.EventOwnerReportInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventOwnerReportsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteEventOwnerReportsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventOwnerReportsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventOwnerReportsInternallyResponse): DeleteEventOwnerReportsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventOwnerReportsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventOwnerReportsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteEventOwnerReportsInternallyResponse, reader: jspb.BinaryReader): DeleteEventOwnerReportsInternallyResponse;
}

export namespace DeleteEventOwnerReportsInternallyResponse {
  export type AsObject = {
    reportsList: Array<rooms_models_pb.EventOwnerReportInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountEventOwnerReportsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountEventOwnerReportsInternallyRequest;
  clearIdsList(): ListAndCountEventOwnerReportsInternallyRequest;
  addIds(value: string, index?: number): ListAndCountEventOwnerReportsInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListAndCountEventOwnerReportsInternallyRequest;
  clearUserIdsList(): ListAndCountEventOwnerReportsInternallyRequest;
  addUserIds(value: string, index?: number): ListAndCountEventOwnerReportsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountEventOwnerReportsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountEventOwnerReportsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountEventOwnerReportsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountEventOwnerReportsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountEventOwnerReportsInternallyRequest): ListAndCountEventOwnerReportsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountEventOwnerReportsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountEventOwnerReportsInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountEventOwnerReportsInternallyRequest, reader: jspb.BinaryReader): ListAndCountEventOwnerReportsInternallyRequest;
}

export namespace ListAndCountEventOwnerReportsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountEventOwnerReportsInternallyResponse extends jspb.Message {
  getReportsList(): Array<rooms_models_pb.EventOwnerReportInfo>;
  setReportsList(value: Array<rooms_models_pb.EventOwnerReportInfo>): ListAndCountEventOwnerReportsInternallyResponse;
  clearReportsList(): ListAndCountEventOwnerReportsInternallyResponse;
  addReports(value?: rooms_models_pb.EventOwnerReportInfo, index?: number): rooms_models_pb.EventOwnerReportInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountEventOwnerReportsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountEventOwnerReportsInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountEventOwnerReportsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountEventOwnerReportsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountEventOwnerReportsInternallyResponse): ListAndCountEventOwnerReportsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountEventOwnerReportsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountEventOwnerReportsInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountEventOwnerReportsInternallyResponse, reader: jspb.BinaryReader): ListAndCountEventOwnerReportsInternallyResponse;
}

export namespace ListAndCountEventOwnerReportsInternallyResponse {
  export type AsObject = {
    reportsList: Array<rooms_models_pb.EventOwnerReportInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRecommendationInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRecommendationInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationInternallyRequest): GetRecommendationInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecommendationInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationInternallyRequest;
  static deserializeBinaryFromReader(message: GetRecommendationInternallyRequest, reader: jspb.BinaryReader): GetRecommendationInternallyRequest;
}

export namespace GetRecommendationInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRecommendationInternallyResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RecommendationInfo | undefined;
  setInfo(value?: rooms_models_pb.RecommendationInfo): GetRecommendationInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetRecommendationInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRecommendationInternallyResponse;
  hasError(): boolean;
  clearError(): GetRecommendationInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationInternallyResponse): GetRecommendationInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetRecommendationInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationInternallyResponse;
  static deserializeBinaryFromReader(message: GetRecommendationInternallyResponse, reader: jspb.BinaryReader): GetRecommendationInternallyResponse;
}

export namespace GetRecommendationInternallyResponse {
  export type AsObject = {
    info?: rooms_models_pb.RecommendationInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRecommendationsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRecommendationsInternallyRequest;
  clearIdsList(): ListRecommendationsInternallyRequest;
  addIds(value: string, index?: number): ListRecommendationsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.RecommendationType>;
  setTypesList(value: Array<rooms_enums_pb.RecommendationType>): ListRecommendationsInternallyRequest;
  clearTypesList(): ListRecommendationsInternallyRequest;
  addTypes(value: rooms_enums_pb.RecommendationType, index?: number): ListRecommendationsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListRecommendationsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListRecommendationsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListRecommendationsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecommendationsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecommendationsInternallyRequest): ListRecommendationsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecommendationsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecommendationsInternallyRequest;
  static deserializeBinaryFromReader(message: ListRecommendationsInternallyRequest, reader: jspb.BinaryReader): ListRecommendationsInternallyRequest;
}

export namespace ListRecommendationsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    typesList: Array<rooms_enums_pb.RecommendationType>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRecommendationsInternallyResponse extends jspb.Message {
  getRecommendationsList(): Array<rooms_models_pb.RecommendationInfo>;
  setRecommendationsList(value: Array<rooms_models_pb.RecommendationInfo>): ListRecommendationsInternallyResponse;
  clearRecommendationsList(): ListRecommendationsInternallyResponse;
  addRecommendations(value?: rooms_models_pb.RecommendationInfo, index?: number): rooms_models_pb.RecommendationInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRecommendationsInternallyResponse;
  hasError(): boolean;
  clearError(): ListRecommendationsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecommendationsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecommendationsInternallyResponse): ListRecommendationsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecommendationsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecommendationsInternallyResponse;
  static deserializeBinaryFromReader(message: ListRecommendationsInternallyResponse, reader: jspb.BinaryReader): ListRecommendationsInternallyResponse;
}

export namespace ListRecommendationsInternallyResponse {
  export type AsObject = {
    recommendationsList: Array<rooms_models_pb.RecommendationInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRecommendationsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountRecommendationsInternallyRequest;
  clearIdsList(): CountRecommendationsInternallyRequest;
  addIds(value: string, index?: number): CountRecommendationsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.RecommendationType>;
  setTypesList(value: Array<rooms_enums_pb.RecommendationType>): CountRecommendationsInternallyRequest;
  clearTypesList(): CountRecommendationsInternallyRequest;
  addTypes(value: rooms_enums_pb.RecommendationType, index?: number): CountRecommendationsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRecommendationsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRecommendationsInternallyRequest): CountRecommendationsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountRecommendationsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRecommendationsInternallyRequest;
  static deserializeBinaryFromReader(message: CountRecommendationsInternallyRequest, reader: jspb.BinaryReader): CountRecommendationsInternallyRequest;
}

export namespace CountRecommendationsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    typesList: Array<rooms_enums_pb.RecommendationType>,
  }
}

export class CountRecommendationsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRecommendationsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRecommendationsInternallyResponse;
  hasError(): boolean;
  clearError(): CountRecommendationsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRecommendationsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRecommendationsInternallyResponse): CountRecommendationsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountRecommendationsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRecommendationsInternallyResponse;
  static deserializeBinaryFromReader(message: CountRecommendationsInternallyResponse, reader: jspb.BinaryReader): CountRecommendationsInternallyResponse;
}

export namespace CountRecommendationsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListAndCountRecommendationsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListAndCountRecommendationsInternallyRequest;
  clearIdsList(): ListAndCountRecommendationsInternallyRequest;
  addIds(value: string, index?: number): ListAndCountRecommendationsInternallyRequest;

  getTypesList(): Array<rooms_enums_pb.RecommendationType>;
  setTypesList(value: Array<rooms_enums_pb.RecommendationType>): ListAndCountRecommendationsInternallyRequest;
  clearTypesList(): ListAndCountRecommendationsInternallyRequest;
  addTypes(value: rooms_enums_pb.RecommendationType, index?: number): ListAndCountRecommendationsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListAndCountRecommendationsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListAndCountRecommendationsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListAndCountRecommendationsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRecommendationsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRecommendationsInternallyRequest): ListAndCountRecommendationsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRecommendationsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRecommendationsInternallyRequest;
  static deserializeBinaryFromReader(message: ListAndCountRecommendationsInternallyRequest, reader: jspb.BinaryReader): ListAndCountRecommendationsInternallyRequest;
}

export namespace ListAndCountRecommendationsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    typesList: Array<rooms_enums_pb.RecommendationType>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListAndCountRecommendationsInternallyResponse extends jspb.Message {
  getRecommendationsList(): Array<rooms_models_pb.RecommendationInfo>;
  setRecommendationsList(value: Array<rooms_models_pb.RecommendationInfo>): ListAndCountRecommendationsInternallyResponse;
  clearRecommendationsList(): ListAndCountRecommendationsInternallyResponse;
  addRecommendations(value?: rooms_models_pb.RecommendationInfo, index?: number): rooms_models_pb.RecommendationInfo;

  getTotal(): number;
  setTotal(value: number): ListAndCountRecommendationsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListAndCountRecommendationsInternallyResponse;
  hasError(): boolean;
  clearError(): ListAndCountRecommendationsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAndCountRecommendationsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAndCountRecommendationsInternallyResponse): ListAndCountRecommendationsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListAndCountRecommendationsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAndCountRecommendationsInternallyResponse;
  static deserializeBinaryFromReader(message: ListAndCountRecommendationsInternallyResponse, reader: jspb.BinaryReader): ListAndCountRecommendationsInternallyResponse;
}

export namespace ListAndCountRecommendationsInternallyResponse {
  export type AsObject = {
    recommendationsList: Array<rooms_models_pb.RecommendationInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

