import * as jspb from 'google-protobuf'

import * as rooms_enums_pb from '../rooms/enums_pb';
import * as rooms_models_pb from '../rooms/models_pb';
import * as error_models_pb from '../error/models_pb';


export class GetChatInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatInfoRequest;

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
  }
}

export class GetChatInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.ChatInfo | undefined;
  setInfo(value?: rooms_models_pb.ChatInfo): GetChatInfoResponse;
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
    info?: rooms_models_pb.ChatInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetChatStateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatStateRequest;

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
  }
}

export class GetChatStateResponse extends jspb.Message {
  getState(): rooms_models_pb.ChatState | undefined;
  setState(value?: rooms_models_pb.ChatState): GetChatStateResponse;
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
    state?: rooms_models_pb.ChatState.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateChatRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateChatRequest;

  getStatus(): rooms_models_pb.ChatStatusValue | undefined;
  setStatus(value?: rooms_models_pb.ChatStatusValue): UpdateChatRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatRequest): UpdateChatRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatRequest;
  static deserializeBinaryFromReader(message: UpdateChatRequest, reader: jspb.BinaryReader): UpdateChatRequest;
}

export namespace UpdateChatRequest {
  export type AsObject = {
    id: string,
    status?: rooms_models_pb.ChatStatusValue.AsObject,
  }
}

export class UpdateChatResponse extends jspb.Message {
  getInfo(): rooms_models_pb.ChatInfo | undefined;
  setInfo(value?: rooms_models_pb.ChatInfo): UpdateChatResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateChatResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateChatResponse;
  hasError(): boolean;
  clearError(): UpdateChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatResponse): UpdateChatResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatResponse;
  static deserializeBinaryFromReader(message: UpdateChatResponse, reader: jspb.BinaryReader): UpdateChatResponse;
}

export namespace UpdateChatResponse {
  export type AsObject = {
    info?: rooms_models_pb.ChatInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetChatMessageInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetChatMessageInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessageInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessageInfoRequest): GetChatMessageInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatMessageInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessageInfoRequest;
  static deserializeBinaryFromReader(message: GetChatMessageInfoRequest, reader: jspb.BinaryReader): GetChatMessageInfoRequest;
}

export namespace GetChatMessageInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetChatMessageInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.ChatMessageInfo | undefined;
  setInfo(value?: rooms_models_pb.ChatMessageInfo): GetChatMessageInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetChatMessageInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetChatMessageInfoResponse;
  hasError(): boolean;
  clearError(): GetChatMessageInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessageInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessageInfoResponse): GetChatMessageInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetChatMessageInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessageInfoResponse;
  static deserializeBinaryFromReader(message: GetChatMessageInfoResponse, reader: jspb.BinaryReader): GetChatMessageInfoResponse;
}

export namespace GetChatMessageInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.ChatMessageInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListChatMessagesRequest extends jspb.Message {
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
    chatId: string,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListChatMessagesResponse extends jspb.Message {
  getMessagesList(): Array<rooms_models_pb.ChatMessageInfo>;
  setMessagesList(value: Array<rooms_models_pb.ChatMessageInfo>): ListChatMessagesResponse;
  clearMessagesList(): ListChatMessagesResponse;
  addMessages(value?: rooms_models_pb.ChatMessageInfo, index?: number): rooms_models_pb.ChatMessageInfo;

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
    messagesList: Array<rooms_models_pb.ChatMessageInfo.AsObject>,
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

  getContent(): rooms_models_pb.ChatMessageContentValue | undefined;
  setContent(value?: rooms_models_pb.ChatMessageContentValue): UpdateChatMessageRequest;
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
    content?: rooms_models_pb.ChatMessageContentValue.AsObject,
  }
}

export class UpdateChatMessageResponse extends jspb.Message {
  getInfo(): rooms_models_pb.ChatMessageInfo | undefined;
  setInfo(value?: rooms_models_pb.ChatMessageInfo): UpdateChatMessageResponse;
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
    info?: rooms_models_pb.ChatMessageInfo.AsObject,
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

export class ClearChatMessagesRequest extends jspb.Message {
  getChatId(): string;
  setChatId(value: string): ClearChatMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearChatMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClearChatMessagesRequest): ClearChatMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: ClearChatMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearChatMessagesRequest;
  static deserializeBinaryFromReader(message: ClearChatMessagesRequest, reader: jspb.BinaryReader): ClearChatMessagesRequest;
}

export namespace ClearChatMessagesRequest {
  export type AsObject = {
    chatId: string,
  }
}

export class ClearChatMessagesResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ClearChatMessagesResponse;
  hasError(): boolean;
  clearError(): ClearChatMessagesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearChatMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClearChatMessagesResponse): ClearChatMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: ClearChatMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearChatMessagesResponse;
  static deserializeBinaryFromReader(message: ClearChatMessagesResponse, reader: jspb.BinaryReader): ClearChatMessagesResponse;
}

export namespace ClearChatMessagesResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetUserTicketInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserTicketInfoRequest;

  getEventId(): string;
  setEventId(value: string): GetUserTicketInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTicketInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTicketInfoRequest): GetUserTicketInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserTicketInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTicketInfoRequest;
  static deserializeBinaryFromReader(message: GetUserTicketInfoRequest, reader: jspb.BinaryReader): GetUserTicketInfoRequest;
}

export namespace GetUserTicketInfoRequest {
  export type AsObject = {
    id: string,
    eventId: string,
  }
}

export class GetUserTicketInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.UserTicketInfo | undefined;
  setInfo(value?: rooms_models_pb.UserTicketInfo): GetUserTicketInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetUserTicketInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetUserTicketInfoResponse;
  hasError(): boolean;
  clearError(): GetUserTicketInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTicketInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTicketInfoResponse): GetUserTicketInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserTicketInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTicketInfoResponse;
  static deserializeBinaryFromReader(message: GetUserTicketInfoResponse, reader: jspb.BinaryReader): GetUserTicketInfoResponse;
}

export namespace GetUserTicketInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.UserTicketInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListUserTicketsRequest extends jspb.Message {
  getStatusesList(): Array<rooms_enums_pb.UserTicketStatus>;
  setStatusesList(value: Array<rooms_enums_pb.UserTicketStatus>): ListUserTicketsRequest;
  clearStatusesList(): ListUserTicketsRequest;
  addStatuses(value: rooms_enums_pb.UserTicketStatus, index?: number): ListUserTicketsRequest;

  getOffset(): number;
  setOffset(value: number): ListUserTicketsRequest;

  getLimit(): number;
  setLimit(value: number): ListUserTicketsRequest;

  getOrder(): string;
  setOrder(value: string): ListUserTicketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserTicketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserTicketsRequest): ListUserTicketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserTicketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserTicketsRequest;
  static deserializeBinaryFromReader(message: ListUserTicketsRequest, reader: jspb.BinaryReader): ListUserTicketsRequest;
}

export namespace ListUserTicketsRequest {
  export type AsObject = {
    statusesList: Array<rooms_enums_pb.UserTicketStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListUserTicketsResponse extends jspb.Message {
  getTicketsList(): Array<rooms_models_pb.UserTicketInfo>;
  setTicketsList(value: Array<rooms_models_pb.UserTicketInfo>): ListUserTicketsResponse;
  clearTicketsList(): ListUserTicketsResponse;
  addTickets(value?: rooms_models_pb.UserTicketInfo, index?: number): rooms_models_pb.UserTicketInfo;

  getTotal(): number;
  setTotal(value: number): ListUserTicketsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListUserTicketsResponse;
  hasError(): boolean;
  clearError(): ListUserTicketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserTicketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserTicketsResponse): ListUserTicketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserTicketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserTicketsResponse;
  static deserializeBinaryFromReader(message: ListUserTicketsResponse, reader: jspb.BinaryReader): ListUserTicketsResponse;
}

export namespace ListUserTicketsResponse {
  export type AsObject = {
    ticketsList: Array<rooms_models_pb.UserTicketInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountUserTicketsRequest extends jspb.Message {
  getStatusesList(): Array<rooms_enums_pb.UserTicketStatus>;
  setStatusesList(value: Array<rooms_enums_pb.UserTicketStatus>): CountUserTicketsRequest;
  clearStatusesList(): CountUserTicketsRequest;
  addStatuses(value: rooms_enums_pb.UserTicketStatus, index?: number): CountUserTicketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserTicketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserTicketsRequest): CountUserTicketsRequest.AsObject;
  static serializeBinaryToWriter(message: CountUserTicketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserTicketsRequest;
  static deserializeBinaryFromReader(message: CountUserTicketsRequest, reader: jspb.BinaryReader): CountUserTicketsRequest;
}

export namespace CountUserTicketsRequest {
  export type AsObject = {
    statusesList: Array<rooms_enums_pb.UserTicketStatus>,
  }
}

export class CountUserTicketsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountUserTicketsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountUserTicketsResponse;
  hasError(): boolean;
  clearError(): CountUserTicketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountUserTicketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountUserTicketsResponse): CountUserTicketsResponse.AsObject;
  static serializeBinaryToWriter(message: CountUserTicketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountUserTicketsResponse;
  static deserializeBinaryFromReader(message: CountUserTicketsResponse, reader: jspb.BinaryReader): CountUserTicketsResponse;
}

export namespace CountUserTicketsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoomInfoRequest;

  getPid(): string;
  setPid(value: string): GetRoomInfoRequest;

  getBroadcast(): boolean;
  setBroadcast(value: boolean): GetRoomInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomInfoRequest): GetRoomInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomInfoRequest;
  static deserializeBinaryFromReader(message: GetRoomInfoRequest, reader: jspb.BinaryReader): GetRoomInfoRequest;
}

export namespace GetRoomInfoRequest {
  export type AsObject = {
    id: string,
    pid: string,
    broadcast: boolean,
  }
}

export class GetRoomInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInfo): GetRoomInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetRoomInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomInfoResponse;
  hasError(): boolean;
  clearError(): GetRoomInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomInfoResponse): GetRoomInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomInfoResponse;
  static deserializeBinaryFromReader(message: GetRoomInfoResponse, reader: jspb.BinaryReader): GetRoomInfoResponse;
}

export namespace GetRoomInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomStateRequest): GetRoomStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomStateRequest;
  static deserializeBinaryFromReader(message: GetRoomStateRequest, reader: jspb.BinaryReader): GetRoomStateRequest;
}

export namespace GetRoomStateRequest {
  export type AsObject = {
  }
}

export class GetRoomStateResponse extends jspb.Message {
  getState(): rooms_models_pb.RoomState | undefined;
  setState(value?: rooms_models_pb.RoomState): GetRoomStateResponse;
  hasState(): boolean;
  clearState(): GetRoomStateResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomStateResponse;
  hasError(): boolean;
  clearError(): GetRoomStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomStateResponse): GetRoomStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomStateResponse;
  static deserializeBinaryFromReader(message: GetRoomStateResponse, reader: jspb.BinaryReader): GetRoomStateResponse;
}

export namespace GetRoomStateResponse {
  export type AsObject = {
    state?: rooms_models_pb.RoomState.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class FindRoomRequest extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): FindRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindRoomRequest): FindRoomRequest.AsObject;
  static serializeBinaryToWriter(message: FindRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRoomRequest;
  static deserializeBinaryFromReader(message: FindRoomRequest, reader: jspb.BinaryReader): FindRoomRequest;
}

export namespace FindRoomRequest {
  export type AsObject = {
    eventId: string,
  }
}

export class FindRoomResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInfo): FindRoomResponse;
  hasInfo(): boolean;
  clearInfo(): FindRoomResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): FindRoomResponse;
  hasError(): boolean;
  clearError(): FindRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindRoomResponse): FindRoomResponse.AsObject;
  static serializeBinaryToWriter(message: FindRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRoomResponse;
  static deserializeBinaryFromReader(message: FindRoomResponse, reader: jspb.BinaryReader): FindRoomResponse;
}

export namespace FindRoomResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRoomsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRoomsRequest;
  clearIdsList(): ListRoomsRequest;
  addIds(value: string, index?: number): ListRoomsRequest;

  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): ListRoomsRequest;
  clearRolesList(): ListRoomsRequest;
  addRoles(value: number, index?: number): ListRoomsRequest;

  getOffset(): number;
  setOffset(value: number): ListRoomsRequest;

  getLimit(): number;
  setLimit(value: number): ListRoomsRequest;

  getOrder(): string;
  setOrder(value: string): ListRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsRequest): ListRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsRequest;
  static deserializeBinaryFromReader(message: ListRoomsRequest, reader: jspb.BinaryReader): ListRoomsRequest;
}

export namespace ListRoomsRequest {
  export type AsObject = {
    idsList: Array<string>,
    rolesList: Array<number>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRoomsResponse extends jspb.Message {
  getRoomsList(): Array<rooms_models_pb.RoomInfo>;
  setRoomsList(value: Array<rooms_models_pb.RoomInfo>): ListRoomsResponse;
  clearRoomsList(): ListRoomsResponse;
  addRooms(value?: rooms_models_pb.RoomInfo, index?: number): rooms_models_pb.RoomInfo;

  getTotal(): number;
  setTotal(value: number): ListRoomsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRoomsResponse;
  hasError(): boolean;
  clearError(): ListRoomsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsResponse): ListRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsResponse;
  static deserializeBinaryFromReader(message: ListRoomsResponse, reader: jspb.BinaryReader): ListRoomsResponse;
}

export namespace ListRoomsResponse {
  export type AsObject = {
    roomsList: Array<rooms_models_pb.RoomInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRoomsRequest extends jspb.Message {
  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): CountRoomsRequest;
  clearRolesList(): CountRoomsRequest;
  addRoles(value: number, index?: number): CountRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomsRequest): CountRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: CountRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomsRequest;
  static deserializeBinaryFromReader(message: CountRoomsRequest, reader: jspb.BinaryReader): CountRoomsRequest;
}

export namespace CountRoomsRequest {
  export type AsObject = {
    rolesList: Array<number>,
  }
}

export class CountRoomsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRoomsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRoomsResponse;
  hasError(): boolean;
  clearError(): CountRoomsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomsResponse): CountRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: CountRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomsResponse;
  static deserializeBinaryFromReader(message: CountRoomsResponse, reader: jspb.BinaryReader): CountRoomsResponse;
}

export namespace CountRoomsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SearchRoomsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchRoomsRequest;

  getOffset(): number;
  setOffset(value: number): SearchRoomsRequest;

  getLimit(): number;
  setLimit(value: number): SearchRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRoomsRequest): SearchRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRoomsRequest;
  static deserializeBinaryFromReader(message: SearchRoomsRequest, reader: jspb.BinaryReader): SearchRoomsRequest;
}

export namespace SearchRoomsRequest {
  export type AsObject = {
    query: string,
    offset: number,
    limit: number,
  }
}

export class SearchRoomsResponse extends jspb.Message {
  getRoomsList(): Array<rooms_models_pb.RoomInfo>;
  setRoomsList(value: Array<rooms_models_pb.RoomInfo>): SearchRoomsResponse;
  clearRoomsList(): SearchRoomsResponse;
  addRooms(value?: rooms_models_pb.RoomInfo, index?: number): rooms_models_pb.RoomInfo;

  getTotal(): number;
  setTotal(value: number): SearchRoomsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SearchRoomsResponse;
  hasError(): boolean;
  clearError(): SearchRoomsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRoomsResponse): SearchRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRoomsResponse;
  static deserializeBinaryFromReader(message: SearchRoomsResponse, reader: jspb.BinaryReader): SearchRoomsResponse;
}

export namespace SearchRoomsResponse {
  export type AsObject = {
    roomsList: Array<rooms_models_pb.RoomInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SuggestRoomsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SuggestRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestRoomsRequest): SuggestRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: SuggestRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestRoomsRequest;
  static deserializeBinaryFromReader(message: SuggestRoomsRequest, reader: jspb.BinaryReader): SuggestRoomsRequest;
}

export namespace SuggestRoomsRequest {
  export type AsObject = {
    query: string,
  }
}

export class SuggestRoomsResponse extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): SuggestRoomsResponse;
  clearNamesList(): SuggestRoomsResponse;
  addNames(value: string, index?: number): SuggestRoomsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SuggestRoomsResponse;
  hasError(): boolean;
  clearError(): SuggestRoomsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestRoomsResponse): SuggestRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: SuggestRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestRoomsResponse;
  static deserializeBinaryFromReader(message: SuggestRoomsResponse, reader: jspb.BinaryReader): SuggestRoomsResponse;
}

export namespace SuggestRoomsResponse {
  export type AsObject = {
    namesList: Array<string>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateRoomRequest extends jspb.Message {
  getPid(): string;
  setPid(value: string): CreateRoomRequest;

  getName(): string;
  setName(value: string): CreateRoomRequest;

  getLimit(): number;
  setLimit(value: number): CreateRoomRequest;

  getType(): rooms_enums_pb.RoomType;
  setType(value: rooms_enums_pb.RoomType): CreateRoomRequest;

  getAccess(): rooms_enums_pb.RoomAccess;
  setAccess(value: rooms_enums_pb.RoomAccess): CreateRoomRequest;

  getPassword(): string;
  setPassword(value: string): CreateRoomRequest;

  getThumbnail(): string;
  setThumbnail(value: string): CreateRoomRequest;

  getBackground(): string;
  setBackground(value: string): CreateRoomRequest;

  getStream(): CreatesRoomStream | undefined;
  setStream(value?: CreatesRoomStream): CreateRoomRequest;
  hasStream(): boolean;
  clearStream(): CreateRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    pid: string,
    name: string,
    limit: number,
    type: rooms_enums_pb.RoomType,
    access: rooms_enums_pb.RoomAccess,
    password: string,
    thumbnail: string,
    background: string,
    stream?: CreatesRoomStream.AsObject,
  }
}

export class CreateRoomResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInfo): CreateRoomResponse;
  hasInfo(): boolean;
  clearInfo(): CreateRoomResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateRoomResponse;
  hasError(): boolean;
  clearError(): CreateRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomResponse): CreateRoomResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomResponse;
  static deserializeBinaryFromReader(message: CreateRoomResponse, reader: jspb.BinaryReader): CreateRoomResponse;
}

export namespace CreateRoomResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreatesRoomStream extends jspb.Message {
  getSid(): string;
  setSid(value: string): CreatesRoomStream;

  getType(): rooms_enums_pb.RoomStreamType;
  setType(value: rooms_enums_pb.RoomStreamType): CreatesRoomStream;

  getMuted(): boolean;
  setMuted(value: boolean): CreatesRoomStream;

  getPaused(): boolean;
  setPaused(value: boolean): CreatesRoomStream;

  getOffset(): number;
  setOffset(value: number): CreatesRoomStream;

  getDuration(): number;
  setDuration(value: number): CreatesRoomStream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatesRoomStream.AsObject;
  static toObject(includeInstance: boolean, msg: CreatesRoomStream): CreatesRoomStream.AsObject;
  static serializeBinaryToWriter(message: CreatesRoomStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatesRoomStream;
  static deserializeBinaryFromReader(message: CreatesRoomStream, reader: jspb.BinaryReader): CreatesRoomStream;
}

export namespace CreatesRoomStream {
  export type AsObject = {
    sid: string,
    type: rooms_enums_pb.RoomStreamType,
    muted: boolean,
    paused: boolean,
    offset: number,
    duration: number,
  }
}

export class DeliversRoomInvite extends jspb.Message {
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): DeliversRoomInvite;
  clearUserIdsList(): DeliversRoomInvite;
  addUserIds(value: string, index?: number): DeliversRoomInvite;

  getUserEmailsList(): Array<string>;
  setUserEmailsList(value: Array<string>): DeliversRoomInvite;
  clearUserEmailsList(): DeliversRoomInvite;
  addUserEmails(value: string, index?: number): DeliversRoomInvite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliversRoomInvite.AsObject;
  static toObject(includeInstance: boolean, msg: DeliversRoomInvite): DeliversRoomInvite.AsObject;
  static serializeBinaryToWriter(message: DeliversRoomInvite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliversRoomInvite;
  static deserializeBinaryFromReader(message: DeliversRoomInvite, reader: jspb.BinaryReader): DeliversRoomInvite;
}

export namespace DeliversRoomInvite {
  export type AsObject = {
    userIdsList: Array<string>,
    userEmailsList: Array<string>,
  }
}

export class UpdateRoomRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomRequest;

  getPid(): rooms_models_pb.RoomPidValue | undefined;
  setPid(value?: rooms_models_pb.RoomPidValue): UpdateRoomRequest;
  hasPid(): boolean;
  clearPid(): UpdateRoomRequest;

  getName(): rooms_models_pb.RoomNameValue | undefined;
  setName(value?: rooms_models_pb.RoomNameValue): UpdateRoomRequest;
  hasName(): boolean;
  clearName(): UpdateRoomRequest;

  getLimit(): rooms_models_pb.RoomLimitValue | undefined;
  setLimit(value?: rooms_models_pb.RoomLimitValue): UpdateRoomRequest;
  hasLimit(): boolean;
  clearLimit(): UpdateRoomRequest;

  getAccess(): rooms_models_pb.RoomAccessValue | undefined;
  setAccess(value?: rooms_models_pb.RoomAccessValue): UpdateRoomRequest;
  hasAccess(): boolean;
  clearAccess(): UpdateRoomRequest;

  getPassword(): rooms_models_pb.RoomPasswordValue | undefined;
  setPassword(value?: rooms_models_pb.RoomPasswordValue): UpdateRoomRequest;
  hasPassword(): boolean;
  clearPassword(): UpdateRoomRequest;

  getThumbnail(): rooms_models_pb.RoomThumbnailValue | undefined;
  setThumbnail(value?: rooms_models_pb.RoomThumbnailValue): UpdateRoomRequest;
  hasThumbnail(): boolean;
  clearThumbnail(): UpdateRoomRequest;

  getBackground(): rooms_models_pb.RoomBackgroundValue | undefined;
  setBackground(value?: rooms_models_pb.RoomBackgroundValue): UpdateRoomRequest;
  hasBackground(): boolean;
  clearBackground(): UpdateRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomRequest): UpdateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomRequest;
  static deserializeBinaryFromReader(message: UpdateRoomRequest, reader: jspb.BinaryReader): UpdateRoomRequest;
}

export namespace UpdateRoomRequest {
  export type AsObject = {
    id: string,
    pid?: rooms_models_pb.RoomPidValue.AsObject,
    name?: rooms_models_pb.RoomNameValue.AsObject,
    limit?: rooms_models_pb.RoomLimitValue.AsObject,
    access?: rooms_models_pb.RoomAccessValue.AsObject,
    password?: rooms_models_pb.RoomPasswordValue.AsObject,
    thumbnail?: rooms_models_pb.RoomThumbnailValue.AsObject,
    background?: rooms_models_pb.RoomBackgroundValue.AsObject,
  }
}

export class UpdateRoomResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInfo): UpdateRoomResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateRoomResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateRoomResponse;
  hasError(): boolean;
  clearError(): UpdateRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomResponse): UpdateRoomResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomResponse;
  static deserializeBinaryFromReader(message: UpdateRoomResponse, reader: jspb.BinaryReader): UpdateRoomResponse;
}

export namespace UpdateRoomResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteRoomRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomRequest): DeleteRoomRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomRequest;
  static deserializeBinaryFromReader(message: DeleteRoomRequest, reader: jspb.BinaryReader): DeleteRoomRequest;
}

export namespace DeleteRoomRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRoomResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteRoomResponse;
  hasError(): boolean;
  clearError(): DeleteRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomResponse): DeleteRoomResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomResponse;
  static deserializeBinaryFromReader(message: DeleteRoomResponse, reader: jspb.BinaryReader): DeleteRoomResponse;
}

export namespace DeleteRoomResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class LeaveRoomRequest extends jspb.Message {
  getId(): string;
  setId(value: string): LeaveRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveRoomRequest): LeaveRoomRequest.AsObject;
  static serializeBinaryToWriter(message: LeaveRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveRoomRequest;
  static deserializeBinaryFromReader(message: LeaveRoomRequest, reader: jspb.BinaryReader): LeaveRoomRequest;
}

export namespace LeaveRoomRequest {
  export type AsObject = {
    id: string,
  }
}

export class LeaveRoomResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): LeaveRoomResponse;
  hasError(): boolean;
  clearError(): LeaveRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveRoomResponse): LeaveRoomResponse.AsObject;
  static serializeBinaryToWriter(message: LeaveRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveRoomResponse;
  static deserializeBinaryFromReader(message: LeaveRoomResponse, reader: jspb.BinaryReader): LeaveRoomResponse;
}

export namespace LeaveRoomResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ActivateRoomRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateRoomRequest): ActivateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: ActivateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateRoomRequest;
  static deserializeBinaryFromReader(message: ActivateRoomRequest, reader: jspb.BinaryReader): ActivateRoomRequest;
}

export namespace ActivateRoomRequest {
  export type AsObject = {
  }
}

export class ActivateRoomResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ActivateRoomResponse;
  hasError(): boolean;
  clearError(): ActivateRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateRoomResponse): ActivateRoomResponse.AsObject;
  static serializeBinaryToWriter(message: ActivateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateRoomResponse;
  static deserializeBinaryFromReader(message: ActivateRoomResponse, reader: jspb.BinaryReader): ActivateRoomResponse;
}

export namespace ActivateRoomResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomUserInfoRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetRoomUserInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomUserInfoRequest): GetRoomUserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomUserInfoRequest;
  static deserializeBinaryFromReader(message: GetRoomUserInfoRequest, reader: jspb.BinaryReader): GetRoomUserInfoRequest;
}

export namespace GetRoomUserInfoRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetRoomUserInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomUserInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomUserInfo): GetRoomUserInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetRoomUserInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomUserInfoResponse;
  hasError(): boolean;
  clearError(): GetRoomUserInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomUserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomUserInfoResponse): GetRoomUserInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomUserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomUserInfoResponse;
  static deserializeBinaryFromReader(message: GetRoomUserInfoResponse, reader: jspb.BinaryReader): GetRoomUserInfoResponse;
}

export namespace GetRoomUserInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomUserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRoomUsersRequest extends jspb.Message {
  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): ListRoomUsersRequest;
  clearRolesList(): ListRoomUsersRequest;
  addRoles(value: number, index?: number): ListRoomUsersRequest;

  getStatusesList(): Array<rooms_enums_pb.RoomUserStatus>;
  setStatusesList(value: Array<rooms_enums_pb.RoomUserStatus>): ListRoomUsersRequest;
  clearStatusesList(): ListRoomUsersRequest;
  addStatuses(value: rooms_enums_pb.RoomUserStatus, index?: number): ListRoomUsersRequest;

  getOffset(): number;
  setOffset(value: number): ListRoomUsersRequest;

  getLimit(): number;
  setLimit(value: number): ListRoomUsersRequest;

  getOrder(): string;
  setOrder(value: string): ListRoomUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomUsersRequest): ListRoomUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomUsersRequest;
  static deserializeBinaryFromReader(message: ListRoomUsersRequest, reader: jspb.BinaryReader): ListRoomUsersRequest;
}

export namespace ListRoomUsersRequest {
  export type AsObject = {
    rolesList: Array<number>,
    statusesList: Array<rooms_enums_pb.RoomUserStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRoomUsersResponse extends jspb.Message {
  getUsersList(): Array<rooms_models_pb.RoomUserInfo>;
  setUsersList(value: Array<rooms_models_pb.RoomUserInfo>): ListRoomUsersResponse;
  clearUsersList(): ListRoomUsersResponse;
  addUsers(value?: rooms_models_pb.RoomUserInfo, index?: number): rooms_models_pb.RoomUserInfo;

  getTotal(): number;
  setTotal(value: number): ListRoomUsersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRoomUsersResponse;
  hasError(): boolean;
  clearError(): ListRoomUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomUsersResponse): ListRoomUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomUsersResponse;
  static deserializeBinaryFromReader(message: ListRoomUsersResponse, reader: jspb.BinaryReader): ListRoomUsersResponse;
}

export namespace ListRoomUsersResponse {
  export type AsObject = {
    usersList: Array<rooms_models_pb.RoomUserInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRoomUsersRequest extends jspb.Message {
  getRolesList(): Array<number>;
  setRolesList(value: Array<number>): CountRoomUsersRequest;
  clearRolesList(): CountRoomUsersRequest;
  addRoles(value: number, index?: number): CountRoomUsersRequest;

  getStatusesList(): Array<rooms_enums_pb.RoomUserStatus>;
  setStatusesList(value: Array<rooms_enums_pb.RoomUserStatus>): CountRoomUsersRequest;
  clearStatusesList(): CountRoomUsersRequest;
  addStatuses(value: rooms_enums_pb.RoomUserStatus, index?: number): CountRoomUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomUsersRequest): CountRoomUsersRequest.AsObject;
  static serializeBinaryToWriter(message: CountRoomUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomUsersRequest;
  static deserializeBinaryFromReader(message: CountRoomUsersRequest, reader: jspb.BinaryReader): CountRoomUsersRequest;
}

export namespace CountRoomUsersRequest {
  export type AsObject = {
    rolesList: Array<number>,
    statusesList: Array<rooms_enums_pb.RoomUserStatus>,
  }
}

export class CountRoomUsersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRoomUsersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRoomUsersResponse;
  hasError(): boolean;
  clearError(): CountRoomUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomUsersResponse): CountRoomUsersResponse.AsObject;
  static serializeBinaryToWriter(message: CountRoomUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomUsersResponse;
  static deserializeBinaryFromReader(message: CountRoomUsersResponse, reader: jspb.BinaryReader): CountRoomUsersResponse;
}

export namespace CountRoomUsersResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRoomUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomUserRequest;

  getUserId(): string;
  setUserId(value: string): UpdateRoomUserRequest;

  getRole(): rooms_models_pb.RoomUserRoleValue | undefined;
  setRole(value?: rooms_models_pb.RoomUserRoleValue): UpdateRoomUserRequest;
  hasRole(): boolean;
  clearRole(): UpdateRoomUserRequest;

  getStates(): rooms_models_pb.RoomUserStatesValue | undefined;
  setStates(value?: rooms_models_pb.RoomUserStatesValue): UpdateRoomUserRequest;
  hasStates(): boolean;
  clearStates(): UpdateRoomUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserRequest): UpdateRoomUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserRequest;
  static deserializeBinaryFromReader(message: UpdateRoomUserRequest, reader: jspb.BinaryReader): UpdateRoomUserRequest;
}

export namespace UpdateRoomUserRequest {
  export type AsObject = {
    id: string,
    userId: string,
    role?: rooms_models_pb.RoomUserRoleValue.AsObject,
    states?: rooms_models_pb.RoomUserStatesValue.AsObject,
  }
}

export class UpdateRoomUserResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomUserInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomUserInfo): UpdateRoomUserResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateRoomUserResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateRoomUserResponse;
  hasError(): boolean;
  clearError(): UpdateRoomUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomUserResponse): UpdateRoomUserResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomUserResponse;
  static deserializeBinaryFromReader(message: UpdateRoomUserResponse, reader: jspb.BinaryReader): UpdateRoomUserResponse;
}

export namespace UpdateRoomUserResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomUserInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class TokenizeRoomUserRequest extends jspb.Message {
  getRoomPid(): string;
  setRoomPid(value: string): TokenizeRoomUserRequest;

  getInvitePid(): string;
  setInvitePid(value: string): TokenizeRoomUserRequest;

  getPassword(): string;
  setPassword(value: string): TokenizeRoomUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenizeRoomUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenizeRoomUserRequest): TokenizeRoomUserRequest.AsObject;
  static serializeBinaryToWriter(message: TokenizeRoomUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenizeRoomUserRequest;
  static deserializeBinaryFromReader(message: TokenizeRoomUserRequest, reader: jspb.BinaryReader): TokenizeRoomUserRequest;
}

export namespace TokenizeRoomUserRequest {
  export type AsObject = {
    roomPid: string,
    invitePid: string,
    password: string,
  }
}

export class TokenizeRoomUserResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokenizeRoomUserResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): TokenizeRoomUserResponse;
  hasError(): boolean;
  clearError(): TokenizeRoomUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenizeRoomUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenizeRoomUserResponse): TokenizeRoomUserResponse.AsObject;
  static serializeBinaryToWriter(message: TokenizeRoomUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenizeRoomUserResponse;
  static deserializeBinaryFromReader(message: TokenizeRoomUserResponse, reader: jspb.BinaryReader): TokenizeRoomUserResponse;
}

export namespace TokenizeRoomUserResponse {
  export type AsObject = {
    token: string,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DisconnectRoomUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): DisconnectRoomUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectRoomUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectRoomUserRequest): DisconnectRoomUserRequest.AsObject;
  static serializeBinaryToWriter(message: DisconnectRoomUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectRoomUserRequest;
  static deserializeBinaryFromReader(message: DisconnectRoomUserRequest, reader: jspb.BinaryReader): DisconnectRoomUserRequest;
}

export namespace DisconnectRoomUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class DisconnectRoomUserResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DisconnectRoomUserResponse;
  hasError(): boolean;
  clearError(): DisconnectRoomUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectRoomUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectRoomUserResponse): DisconnectRoomUserResponse.AsObject;
  static serializeBinaryToWriter(message: DisconnectRoomUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectRoomUserResponse;
  static deserializeBinaryFromReader(message: DisconnectRoomUserResponse, reader: jspb.BinaryReader): DisconnectRoomUserResponse;
}

export namespace DisconnectRoomUserResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomInviteInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoomInviteInfoRequest;

  getPid(): string;
  setPid(value: string): GetRoomInviteInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomInviteInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomInviteInfoRequest): GetRoomInviteInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomInviteInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomInviteInfoRequest;
  static deserializeBinaryFromReader(message: GetRoomInviteInfoRequest, reader: jspb.BinaryReader): GetRoomInviteInfoRequest;
}

export namespace GetRoomInviteInfoRequest {
  export type AsObject = {
    id: string,
    pid: string,
  }
}

export class GetRoomInviteInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInviteInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInviteInfo): GetRoomInviteInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetRoomInviteInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomInviteInfoResponse;
  hasError(): boolean;
  clearError(): GetRoomInviteInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomInviteInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomInviteInfoResponse): GetRoomInviteInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomInviteInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomInviteInfoResponse;
  static deserializeBinaryFromReader(message: GetRoomInviteInfoResponse, reader: jspb.BinaryReader): GetRoomInviteInfoResponse;
}

export namespace GetRoomInviteInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInviteInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRoomInvitesRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): ListRoomInvitesRequest;

  getOffset(): number;
  setOffset(value: number): ListRoomInvitesRequest;

  getLimit(): number;
  setLimit(value: number): ListRoomInvitesRequest;

  getOrder(): string;
  setOrder(value: string): ListRoomInvitesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomInvitesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomInvitesRequest): ListRoomInvitesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomInvitesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomInvitesRequest;
  static deserializeBinaryFromReader(message: ListRoomInvitesRequest, reader: jspb.BinaryReader): ListRoomInvitesRequest;
}

export namespace ListRoomInvitesRequest {
  export type AsObject = {
    roomId: string,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRoomInvitesResponse extends jspb.Message {
  getInvitesList(): Array<rooms_models_pb.RoomInviteInfo>;
  setInvitesList(value: Array<rooms_models_pb.RoomInviteInfo>): ListRoomInvitesResponse;
  clearInvitesList(): ListRoomInvitesResponse;
  addInvites(value?: rooms_models_pb.RoomInviteInfo, index?: number): rooms_models_pb.RoomInviteInfo;

  getTotal(): number;
  setTotal(value: number): ListRoomInvitesResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRoomInvitesResponse;
  hasError(): boolean;
  clearError(): ListRoomInvitesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomInvitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomInvitesResponse): ListRoomInvitesResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomInvitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomInvitesResponse;
  static deserializeBinaryFromReader(message: ListRoomInvitesResponse, reader: jspb.BinaryReader): ListRoomInvitesResponse;
}

export namespace ListRoomInvitesResponse {
  export type AsObject = {
    invitesList: Array<rooms_models_pb.RoomInviteInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRoomInvitesRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): CountRoomInvitesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomInvitesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomInvitesRequest): CountRoomInvitesRequest.AsObject;
  static serializeBinaryToWriter(message: CountRoomInvitesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomInvitesRequest;
  static deserializeBinaryFromReader(message: CountRoomInvitesRequest, reader: jspb.BinaryReader): CountRoomInvitesRequest;
}

export namespace CountRoomInvitesRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class CountRoomInvitesResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRoomInvitesResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRoomInvitesResponse;
  hasError(): boolean;
  clearError(): CountRoomInvitesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomInvitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomInvitesResponse): CountRoomInvitesResponse.AsObject;
  static serializeBinaryToWriter(message: CountRoomInvitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomInvitesResponse;
  static deserializeBinaryFromReader(message: CountRoomInvitesResponse, reader: jspb.BinaryReader): CountRoomInvitesResponse;
}

export namespace CountRoomInvitesResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateRoomInviteRequest extends jspb.Message {
  getPid(): string;
  setPid(value: string): CreateRoomInviteRequest;

  getRoomId(): string;
  setRoomId(value: string): CreateRoomInviteRequest;

  getUsages(): number;
  setUsages(value: number): CreateRoomInviteRequest;

  getExpiresAt(): number;
  setExpiresAt(value: number): CreateRoomInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomInviteRequest): CreateRoomInviteRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomInviteRequest;
  static deserializeBinaryFromReader(message: CreateRoomInviteRequest, reader: jspb.BinaryReader): CreateRoomInviteRequest;
}

export namespace CreateRoomInviteRequest {
  export type AsObject = {
    pid: string,
    roomId: string,
    usages: number,
    expiresAt: number,
  }
}

export class CreateRoomInviteResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInviteInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInviteInfo): CreateRoomInviteResponse;
  hasInfo(): boolean;
  clearInfo(): CreateRoomInviteResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateRoomInviteResponse;
  hasError(): boolean;
  clearError(): CreateRoomInviteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomInviteResponse): CreateRoomInviteResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRoomInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomInviteResponse;
  static deserializeBinaryFromReader(message: CreateRoomInviteResponse, reader: jspb.BinaryReader): CreateRoomInviteResponse;
}

export namespace CreateRoomInviteResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInviteInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRoomInviteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomInviteRequest;

  getUsages(): rooms_models_pb.RoomInviteUsagesValue | undefined;
  setUsages(value?: rooms_models_pb.RoomInviteUsagesValue): UpdateRoomInviteRequest;
  hasUsages(): boolean;
  clearUsages(): UpdateRoomInviteRequest;

  getExpiresAt(): rooms_models_pb.RoomInviteExpiresAtValue | undefined;
  setExpiresAt(value?: rooms_models_pb.RoomInviteExpiresAtValue): UpdateRoomInviteRequest;
  hasExpiresAt(): boolean;
  clearExpiresAt(): UpdateRoomInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomInviteRequest): UpdateRoomInviteRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomInviteRequest;
  static deserializeBinaryFromReader(message: UpdateRoomInviteRequest, reader: jspb.BinaryReader): UpdateRoomInviteRequest;
}

export namespace UpdateRoomInviteRequest {
  export type AsObject = {
    id: string,
    usages?: rooms_models_pb.RoomInviteUsagesValue.AsObject,
    expiresAt?: rooms_models_pb.RoomInviteExpiresAtValue.AsObject,
  }
}

export class UpdateRoomInviteResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomInviteInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomInviteInfo): UpdateRoomInviteResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateRoomInviteResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateRoomInviteResponse;
  hasError(): boolean;
  clearError(): UpdateRoomInviteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomInviteResponse): UpdateRoomInviteResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomInviteResponse;
  static deserializeBinaryFromReader(message: UpdateRoomInviteResponse, reader: jspb.BinaryReader): UpdateRoomInviteResponse;
}

export namespace UpdateRoomInviteResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomInviteInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteRoomInviteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRoomInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomInviteRequest): DeleteRoomInviteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomInviteRequest;
  static deserializeBinaryFromReader(message: DeleteRoomInviteRequest, reader: jspb.BinaryReader): DeleteRoomInviteRequest;
}

export namespace DeleteRoomInviteRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRoomInviteResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteRoomInviteResponse;
  hasError(): boolean;
  clearError(): DeleteRoomInviteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoomInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoomInviteResponse): DeleteRoomInviteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteRoomInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoomInviteResponse;
  static deserializeBinaryFromReader(message: DeleteRoomInviteResponse, reader: jspb.BinaryReader): DeleteRoomInviteResponse;
}

export namespace DeleteRoomInviteResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeliverRoomInviteRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): DeliverRoomInviteRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): DeliverRoomInviteRequest;
  clearUserIdsList(): DeliverRoomInviteRequest;
  addUserIds(value: string, index?: number): DeliverRoomInviteRequest;

  getUserEmailsList(): Array<string>;
  setUserEmailsList(value: Array<string>): DeliverRoomInviteRequest;
  clearUserEmailsList(): DeliverRoomInviteRequest;
  addUserEmails(value: string, index?: number): DeliverRoomInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverRoomInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverRoomInviteRequest): DeliverRoomInviteRequest.AsObject;
  static serializeBinaryToWriter(message: DeliverRoomInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverRoomInviteRequest;
  static deserializeBinaryFromReader(message: DeliverRoomInviteRequest, reader: jspb.BinaryReader): DeliverRoomInviteRequest;
}

export namespace DeliverRoomInviteRequest {
  export type AsObject = {
    roomId: string,
    userIdsList: Array<string>,
    userEmailsList: Array<string>,
  }
}

export class DeliverRoomInviteResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeliverRoomInviteResponse;
  hasError(): boolean;
  clearError(): DeliverRoomInviteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliverRoomInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeliverRoomInviteResponse): DeliverRoomInviteResponse.AsObject;
  static serializeBinaryToWriter(message: DeliverRoomInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliverRoomInviteResponse;
  static deserializeBinaryFromReader(message: DeliverRoomInviteResponse, reader: jspb.BinaryReader): DeliverRoomInviteResponse;
}

export namespace DeliverRoomInviteResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRoomStreamInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRoomStreamInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomStreamInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomStreamInfoRequest): GetRoomStreamInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomStreamInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomStreamInfoRequest;
  static deserializeBinaryFromReader(message: GetRoomStreamInfoRequest, reader: jspb.BinaryReader): GetRoomStreamInfoRequest;
}

export namespace GetRoomStreamInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRoomStreamInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomStreamInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomStreamInfo): GetRoomStreamInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetRoomStreamInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRoomStreamInfoResponse;
  hasError(): boolean;
  clearError(): GetRoomStreamInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomStreamInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomStreamInfoResponse): GetRoomStreamInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomStreamInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomStreamInfoResponse;
  static deserializeBinaryFromReader(message: GetRoomStreamInfoResponse, reader: jspb.BinaryReader): GetRoomStreamInfoResponse;
}

export namespace GetRoomStreamInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomStreamInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRoomStreamsRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListRoomStreamsRequest;

  getLimit(): number;
  setLimit(value: number): ListRoomStreamsRequest;

  getOrder(): string;
  setOrder(value: string): ListRoomStreamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomStreamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomStreamsRequest): ListRoomStreamsRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomStreamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomStreamsRequest;
  static deserializeBinaryFromReader(message: ListRoomStreamsRequest, reader: jspb.BinaryReader): ListRoomStreamsRequest;
}

export namespace ListRoomStreamsRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRoomStreamsResponse extends jspb.Message {
  getStreamsList(): Array<rooms_models_pb.RoomStreamInfo>;
  setStreamsList(value: Array<rooms_models_pb.RoomStreamInfo>): ListRoomStreamsResponse;
  clearStreamsList(): ListRoomStreamsResponse;
  addStreams(value?: rooms_models_pb.RoomStreamInfo, index?: number): rooms_models_pb.RoomStreamInfo;

  getTotal(): number;
  setTotal(value: number): ListRoomStreamsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRoomStreamsResponse;
  hasError(): boolean;
  clearError(): ListRoomStreamsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomStreamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomStreamsResponse): ListRoomStreamsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomStreamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomStreamsResponse;
  static deserializeBinaryFromReader(message: ListRoomStreamsResponse, reader: jspb.BinaryReader): ListRoomStreamsResponse;
}

export namespace ListRoomStreamsResponse {
  export type AsObject = {
    streamsList: Array<rooms_models_pb.RoomStreamInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRoomStreamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomStreamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomStreamsRequest): CountRoomStreamsRequest.AsObject;
  static serializeBinaryToWriter(message: CountRoomStreamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomStreamsRequest;
  static deserializeBinaryFromReader(message: CountRoomStreamsRequest, reader: jspb.BinaryReader): CountRoomStreamsRequest;
}

export namespace CountRoomStreamsRequest {
  export type AsObject = {
  }
}

export class CountRoomStreamsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRoomStreamsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRoomStreamsResponse;
  hasError(): boolean;
  clearError(): CountRoomStreamsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRoomStreamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRoomStreamsResponse): CountRoomStreamsResponse.AsObject;
  static serializeBinaryToWriter(message: CountRoomStreamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRoomStreamsResponse;
  static deserializeBinaryFromReader(message: CountRoomStreamsResponse, reader: jspb.BinaryReader): CountRoomStreamsResponse;
}

export namespace CountRoomStreamsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateRoomStreamRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateRoomStreamRequest;

  getMetadata(): rooms_models_pb.RoomStreamMetadataValue | undefined;
  setMetadata(value?: rooms_models_pb.RoomStreamMetadataValue): UpdateRoomStreamRequest;
  hasMetadata(): boolean;
  clearMetadata(): UpdateRoomStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamRequest): UpdateRoomStreamRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamRequest;
  static deserializeBinaryFromReader(message: UpdateRoomStreamRequest, reader: jspb.BinaryReader): UpdateRoomStreamRequest;
}

export namespace UpdateRoomStreamRequest {
  export type AsObject = {
    id: string,
    metadata?: rooms_models_pb.RoomStreamMetadataValue.AsObject,
  }
}

export class UpdateRoomStreamResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomStreamInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomStreamInfo): UpdateRoomStreamResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateRoomStreamResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateRoomStreamResponse;
  hasError(): boolean;
  clearError(): UpdateRoomStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomStreamResponse): UpdateRoomStreamResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomStreamResponse;
  static deserializeBinaryFromReader(message: UpdateRoomStreamResponse, reader: jspb.BinaryReader): UpdateRoomStreamResponse;
}

export namespace UpdateRoomStreamResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomStreamInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class InsertRoomStreamRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): InsertRoomStreamRequest;

  getSid(): string;
  setSid(value: string): InsertRoomStreamRequest;

  getType(): rooms_enums_pb.RoomStreamType;
  setType(value: rooms_enums_pb.RoomStreamType): InsertRoomStreamRequest;

  getMuted(): boolean;
  setMuted(value: boolean): InsertRoomStreamRequest;

  getPaused(): boolean;
  setPaused(value: boolean): InsertRoomStreamRequest;

  getOffset(): number;
  setOffset(value: number): InsertRoomStreamRequest;

  getRelated(): boolean;
  setRelated(value: boolean): InsertRoomStreamRequest;

  getSuggest(): boolean;
  setSuggest(value: boolean): InsertRoomStreamRequest;

  getDuration(): number;
  setDuration(value: number): InsertRoomStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertRoomStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InsertRoomStreamRequest): InsertRoomStreamRequest.AsObject;
  static serializeBinaryToWriter(message: InsertRoomStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertRoomStreamRequest;
  static deserializeBinaryFromReader(message: InsertRoomStreamRequest, reader: jspb.BinaryReader): InsertRoomStreamRequest;
}

export namespace InsertRoomStreamRequest {
  export type AsObject = {
    roomId: string,
    sid: string,
    type: rooms_enums_pb.RoomStreamType,
    muted: boolean,
    paused: boolean,
    offset: number,
    related: boolean,
    suggest: boolean,
    duration: number,
  }
}

export class InsertRoomStreamResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomStreamInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomStreamInfo): InsertRoomStreamResponse;
  hasInfo(): boolean;
  clearInfo(): InsertRoomStreamResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): InsertRoomStreamResponse;
  hasError(): boolean;
  clearError(): InsertRoomStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertRoomStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InsertRoomStreamResponse): InsertRoomStreamResponse.AsObject;
  static serializeBinaryToWriter(message: InsertRoomStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertRoomStreamResponse;
  static deserializeBinaryFromReader(message: InsertRoomStreamResponse, reader: jspb.BinaryReader): InsertRoomStreamResponse;
}

export namespace InsertRoomStreamResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomStreamInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ChangeRoomStreamRequest extends jspb.Message {
  getSourcePosition(): number;
  setSourcePosition(value: number): ChangeRoomStreamRequest;

  getTargetPosition(): number;
  setTargetPosition(value: number): ChangeRoomStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeRoomStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeRoomStreamRequest): ChangeRoomStreamRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeRoomStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeRoomStreamRequest;
  static deserializeBinaryFromReader(message: ChangeRoomStreamRequest, reader: jspb.BinaryReader): ChangeRoomStreamRequest;
}

export namespace ChangeRoomStreamRequest {
  export type AsObject = {
    sourcePosition: number,
    targetPosition: number,
  }
}

export class ChangeRoomStreamResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RoomStreamInfo | undefined;
  setInfo(value?: rooms_models_pb.RoomStreamInfo): ChangeRoomStreamResponse;
  hasInfo(): boolean;
  clearInfo(): ChangeRoomStreamResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ChangeRoomStreamResponse;
  hasError(): boolean;
  clearError(): ChangeRoomStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeRoomStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeRoomStreamResponse): ChangeRoomStreamResponse.AsObject;
  static serializeBinaryToWriter(message: ChangeRoomStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeRoomStreamResponse;
  static deserializeBinaryFromReader(message: ChangeRoomStreamResponse, reader: jspb.BinaryReader): ChangeRoomStreamResponse;
}

export namespace ChangeRoomStreamResponse {
  export type AsObject = {
    info?: rooms_models_pb.RoomStreamInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class RemoveRoomStreamRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RemoveRoomStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoomStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoomStreamRequest): RemoveRoomStreamRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveRoomStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoomStreamRequest;
  static deserializeBinaryFromReader(message: RemoveRoomStreamRequest, reader: jspb.BinaryReader): RemoveRoomStreamRequest;
}

export namespace RemoveRoomStreamRequest {
  export type AsObject = {
    id: string,
  }
}

export class RemoveRoomStreamResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): RemoveRoomStreamResponse;
  hasError(): boolean;
  clearError(): RemoveRoomStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoomStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoomStreamResponse): RemoveRoomStreamResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveRoomStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoomStreamResponse;
  static deserializeBinaryFromReader(message: RemoveRoomStreamResponse, reader: jspb.BinaryReader): RemoveRoomStreamResponse;
}

export namespace RemoveRoomStreamResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ClearRoomStreamsRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): ClearRoomStreamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearRoomStreamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClearRoomStreamsRequest): ClearRoomStreamsRequest.AsObject;
  static serializeBinaryToWriter(message: ClearRoomStreamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearRoomStreamsRequest;
  static deserializeBinaryFromReader(message: ClearRoomStreamsRequest, reader: jspb.BinaryReader): ClearRoomStreamsRequest;
}

export namespace ClearRoomStreamsRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class ClearRoomStreamsResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ClearRoomStreamsResponse;
  hasError(): boolean;
  clearError(): ClearRoomStreamsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearRoomStreamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClearRoomStreamsResponse): ClearRoomStreamsResponse.AsObject;
  static serializeBinaryToWriter(message: ClearRoomStreamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearRoomStreamsResponse;
  static deserializeBinaryFromReader(message: ClearRoomStreamsResponse, reader: jspb.BinaryReader): ClearRoomStreamsResponse;
}

export namespace ClearRoomStreamsResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventInfoRequest;

  getPid(): string;
  setPid(value: string): GetEventInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventInfoRequest): GetEventInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventInfoRequest;
  static deserializeBinaryFromReader(message: GetEventInfoRequest, reader: jspb.BinaryReader): GetEventInfoRequest;
}

export namespace GetEventInfoRequest {
  export type AsObject = {
    id: string,
    pid: string,
  }
}

export class GetEventInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventInfo | undefined;
  setInfo(value?: rooms_models_pb.EventInfo): GetEventInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventInfoResponse;
  hasError(): boolean;
  clearError(): GetEventInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventInfoResponse): GetEventInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventInfoResponse;
  static deserializeBinaryFromReader(message: GetEventInfoResponse, reader: jspb.BinaryReader): GetEventInfoResponse;
}

export namespace GetEventInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventStateRequest): GetEventStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventStateRequest;
  static deserializeBinaryFromReader(message: GetEventStateRequest, reader: jspb.BinaryReader): GetEventStateRequest;
}

export namespace GetEventStateRequest {
  export type AsObject = {
  }
}

export class GetEventStateResponse extends jspb.Message {
  getState(): rooms_models_pb.EventState | undefined;
  setState(value?: rooms_models_pb.EventState): GetEventStateResponse;
  hasState(): boolean;
  clearState(): GetEventStateResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventStateResponse;
  hasError(): boolean;
  clearError(): GetEventStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventStateResponse): GetEventStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventStateResponse;
  static deserializeBinaryFromReader(message: GetEventStateResponse, reader: jspb.BinaryReader): GetEventStateResponse;
}

export namespace GetEventStateResponse {
  export type AsObject = {
    state?: rooms_models_pb.EventState.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListEventsRequest;
  clearIdsList(): ListEventsRequest;
  addIds(value: string, index?: number): ListEventsRequest;

  getRoomId(): string;
  setRoomId(value: string): ListEventsRequest;

  getStatusesList(): Array<rooms_enums_pb.EventStatus>;
  setStatusesList(value: Array<rooms_enums_pb.EventStatus>): ListEventsRequest;
  clearStatusesList(): ListEventsRequest;
  addStatuses(value: rooms_enums_pb.EventStatus, index?: number): ListEventsRequest;

  getOffset(): number;
  setOffset(value: number): ListEventsRequest;

  getLimit(): number;
  setLimit(value: number): ListEventsRequest;

  getOrder(): string;
  setOrder(value: string): ListEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsRequest): ListEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsRequest;
  static deserializeBinaryFromReader(message: ListEventsRequest, reader: jspb.BinaryReader): ListEventsRequest;
}

export namespace ListEventsRequest {
  export type AsObject = {
    idsList: Array<string>,
    roomId: string,
    statusesList: Array<rooms_enums_pb.EventStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventsResponse extends jspb.Message {
  getEventsList(): Array<rooms_models_pb.EventInfo>;
  setEventsList(value: Array<rooms_models_pb.EventInfo>): ListEventsResponse;
  clearEventsList(): ListEventsResponse;
  addEvents(value?: rooms_models_pb.EventInfo, index?: number): rooms_models_pb.EventInfo;

  getTotal(): number;
  setTotal(value: number): ListEventsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventsResponse;
  hasError(): boolean;
  clearError(): ListEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsResponse): ListEventsResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsResponse;
  static deserializeBinaryFromReader(message: ListEventsResponse, reader: jspb.BinaryReader): ListEventsResponse;
}

export namespace ListEventsResponse {
  export type AsObject = {
    eventsList: Array<rooms_models_pb.EventInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventsRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): CountEventsRequest;

  getStatusesList(): Array<rooms_enums_pb.EventStatus>;
  setStatusesList(value: Array<rooms_enums_pb.EventStatus>): CountEventsRequest;
  clearStatusesList(): CountEventsRequest;
  addStatuses(value: rooms_enums_pb.EventStatus, index?: number): CountEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventsRequest): CountEventsRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventsRequest;
  static deserializeBinaryFromReader(message: CountEventsRequest, reader: jspb.BinaryReader): CountEventsRequest;
}

export namespace CountEventsRequest {
  export type AsObject = {
    roomId: string,
    statusesList: Array<rooms_enums_pb.EventStatus>,
  }
}

export class CountEventsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventsResponse;
  hasError(): boolean;
  clearError(): CountEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventsResponse): CountEventsResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventsResponse;
  static deserializeBinaryFromReader(message: CountEventsResponse, reader: jspb.BinaryReader): CountEventsResponse;
}

export namespace CountEventsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SearchEventsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchEventsRequest;

  getTypesList(): Array<rooms_enums_pb.EventType>;
  setTypesList(value: Array<rooms_enums_pb.EventType>): SearchEventsRequest;
  clearTypesList(): SearchEventsRequest;
  addTypes(value: rooms_enums_pb.EventType, index?: number): SearchEventsRequest;

  getGenresList(): Array<rooms_enums_pb.EventGenre>;
  setGenresList(value: Array<rooms_enums_pb.EventGenre>): SearchEventsRequest;
  clearGenresList(): SearchEventsRequest;
  addGenres(value: rooms_enums_pb.EventGenre, index?: number): SearchEventsRequest;

  getStatusesList(): Array<rooms_enums_pb.EventStatus>;
  setStatusesList(value: Array<rooms_enums_pb.EventStatus>): SearchEventsRequest;
  clearStatusesList(): SearchEventsRequest;
  addStatuses(value: rooms_enums_pb.EventStatus, index?: number): SearchEventsRequest;

  getStartsAt(): number;
  setStartsAt(value: number): SearchEventsRequest;

  getFinishesAt(): number;
  setFinishesAt(value: number): SearchEventsRequest;

  getOffset(): number;
  setOffset(value: number): SearchEventsRequest;

  getLimit(): number;
  setLimit(value: number): SearchEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEventsRequest): SearchEventsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEventsRequest;
  static deserializeBinaryFromReader(message: SearchEventsRequest, reader: jspb.BinaryReader): SearchEventsRequest;
}

export namespace SearchEventsRequest {
  export type AsObject = {
    query: string,
    typesList: Array<rooms_enums_pb.EventType>,
    genresList: Array<rooms_enums_pb.EventGenre>,
    statusesList: Array<rooms_enums_pb.EventStatus>,
    startsAt: number,
    finishesAt: number,
    offset: number,
    limit: number,
  }
}

export class SearchEventsResponse extends jspb.Message {
  getEventsList(): Array<rooms_models_pb.EventInfo>;
  setEventsList(value: Array<rooms_models_pb.EventInfo>): SearchEventsResponse;
  clearEventsList(): SearchEventsResponse;
  addEvents(value?: rooms_models_pb.EventInfo, index?: number): rooms_models_pb.EventInfo;

  getTotal(): number;
  setTotal(value: number): SearchEventsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SearchEventsResponse;
  hasError(): boolean;
  clearError(): SearchEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEventsResponse): SearchEventsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEventsResponse;
  static deserializeBinaryFromReader(message: SearchEventsResponse, reader: jspb.BinaryReader): SearchEventsResponse;
}

export namespace SearchEventsResponse {
  export type AsObject = {
    eventsList: Array<rooms_models_pb.EventInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SuggestEventsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SuggestEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestEventsRequest): SuggestEventsRequest.AsObject;
  static serializeBinaryToWriter(message: SuggestEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestEventsRequest;
  static deserializeBinaryFromReader(message: SuggestEventsRequest, reader: jspb.BinaryReader): SuggestEventsRequest;
}

export namespace SuggestEventsRequest {
  export type AsObject = {
    query: string,
  }
}

export class SuggestEventsResponse extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): SuggestEventsResponse;
  clearNamesList(): SuggestEventsResponse;
  addNames(value: string, index?: number): SuggestEventsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SuggestEventsResponse;
  hasError(): boolean;
  clearError(): SuggestEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuggestEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuggestEventsResponse): SuggestEventsResponse.AsObject;
  static serializeBinaryToWriter(message: SuggestEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuggestEventsResponse;
  static deserializeBinaryFromReader(message: SuggestEventsResponse, reader: jspb.BinaryReader): SuggestEventsResponse;
}

export namespace SuggestEventsResponse {
  export type AsObject = {
    namesList: Array<string>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventRequest extends jspb.Message {
  getPid(): string;
  setPid(value: string): CreateEventRequest;

  getName(): string;
  setName(value: string): CreateEventRequest;

  getType(): rooms_enums_pb.EventType;
  setType(value: rooms_enums_pb.EventType): CreateEventRequest;

  getAccess(): rooms_enums_pb.EventAccess;
  setAccess(value: rooms_enums_pb.EventAccess): CreateEventRequest;

  getSource(): rooms_enums_pb.EventSource;
  setSource(value: rooms_enums_pb.EventSource): CreateEventRequest;

  getGenresList(): Array<rooms_enums_pb.EventGenre>;
  setGenresList(value: Array<rooms_enums_pb.EventGenre>): CreateEventRequest;
  clearGenresList(): CreateEventRequest;
  addGenres(value: rooms_enums_pb.EventGenre, index?: number): CreateEventRequest;

  getSummary(): string;
  setSummary(value: string): CreateEventRequest;

  getOverseer(): rooms_enums_pb.EventOverseer;
  setOverseer(value: rooms_enums_pb.EventOverseer): CreateEventRequest;

  getDescription(): string;
  setDescription(value: string): CreateEventRequest;

  getStartsAt(): number;
  setStartsAt(value: number): CreateEventRequest;

  getFinishesAt(): number;
  setFinishesAt(value: number): CreateEventRequest;

  getThumbnail(): string;
  setThumbnail(value: string): CreateEventRequest;

  getBackground(): string;
  setBackground(value: string): CreateEventRequest;

  getBroadcastUrl(): string;
  setBroadcastUrl(value: string): CreateEventRequest;

  getBroadcastOffset(): number;
  setBroadcastOffset(value: number): CreateEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventRequest): CreateEventRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventRequest;
  static deserializeBinaryFromReader(message: CreateEventRequest, reader: jspb.BinaryReader): CreateEventRequest;
}

export namespace CreateEventRequest {
  export type AsObject = {
    pid: string,
    name: string,
    type: rooms_enums_pb.EventType,
    access: rooms_enums_pb.EventAccess,
    source: rooms_enums_pb.EventSource,
    genresList: Array<rooms_enums_pb.EventGenre>,
    summary: string,
    overseer: rooms_enums_pb.EventOverseer,
    description: string,
    startsAt: number,
    finishesAt: number,
    thumbnail: string,
    background: string,
    broadcastUrl: string,
    broadcastOffset: number,
  }
}

export class CreateEventResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventInfo | undefined;
  setInfo(value?: rooms_models_pb.EventInfo): CreateEventResponse;
  hasInfo(): boolean;
  clearInfo(): CreateEventResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventResponse;
  hasError(): boolean;
  clearError(): CreateEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventResponse): CreateEventResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventResponse;
  static deserializeBinaryFromReader(message: CreateEventResponse, reader: jspb.BinaryReader): CreateEventResponse;
}

export namespace CreateEventResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventRequest;

  getPid(): rooms_models_pb.EventPidValue | undefined;
  setPid(value?: rooms_models_pb.EventPidValue): UpdateEventRequest;
  hasPid(): boolean;
  clearPid(): UpdateEventRequest;

  getName(): rooms_models_pb.EventNameValue | undefined;
  setName(value?: rooms_models_pb.EventNameValue): UpdateEventRequest;
  hasName(): boolean;
  clearName(): UpdateEventRequest;

  getAccess(): rooms_models_pb.EventAccessValue | undefined;
  setAccess(value?: rooms_models_pb.EventAccessValue): UpdateEventRequest;
  hasAccess(): boolean;
  clearAccess(): UpdateEventRequest;

  getLayout(): rooms_models_pb.EventLayoutValue | undefined;
  setLayout(value?: rooms_models_pb.EventLayoutValue): UpdateEventRequest;
  hasLayout(): boolean;
  clearLayout(): UpdateEventRequest;

  getGenres(): rooms_models_pb.EventGenresValue | undefined;
  setGenres(value?: rooms_models_pb.EventGenresValue): UpdateEventRequest;
  hasGenres(): boolean;
  clearGenres(): UpdateEventRequest;

  getSummary(): rooms_models_pb.EventSummaryValue | undefined;
  setSummary(value?: rooms_models_pb.EventSummaryValue): UpdateEventRequest;
  hasSummary(): boolean;
  clearSummary(): UpdateEventRequest;

  getOverseer(): rooms_models_pb.EventOverseerValue | undefined;
  setOverseer(value?: rooms_models_pb.EventOverseerValue): UpdateEventRequest;
  hasOverseer(): boolean;
  clearOverseer(): UpdateEventRequest;

  getDescription(): rooms_models_pb.EventDescriptionValue | undefined;
  setDescription(value?: rooms_models_pb.EventDescriptionValue): UpdateEventRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateEventRequest;

  getStartsAt(): rooms_models_pb.EventStartsAtValue | undefined;
  setStartsAt(value?: rooms_models_pb.EventStartsAtValue): UpdateEventRequest;
  hasStartsAt(): boolean;
  clearStartsAt(): UpdateEventRequest;

  getFinishesAt(): rooms_models_pb.EventFinishesAtValue | undefined;
  setFinishesAt(value?: rooms_models_pb.EventFinishesAtValue): UpdateEventRequest;
  hasFinishesAt(): boolean;
  clearFinishesAt(): UpdateEventRequest;

  getThumbnail(): rooms_models_pb.EventThumbnailValue | undefined;
  setThumbnail(value?: rooms_models_pb.EventThumbnailValue): UpdateEventRequest;
  hasThumbnail(): boolean;
  clearThumbnail(): UpdateEventRequest;

  getBackground(): rooms_models_pb.EventBackgroundValue | undefined;
  setBackground(value?: rooms_models_pb.EventBackgroundValue): UpdateEventRequest;
  hasBackground(): boolean;
  clearBackground(): UpdateEventRequest;

  getBroadcastUrl(): rooms_models_pb.EventBroadcastUrlValue | undefined;
  setBroadcastUrl(value?: rooms_models_pb.EventBroadcastUrlValue): UpdateEventRequest;
  hasBroadcastUrl(): boolean;
  clearBroadcastUrl(): UpdateEventRequest;

  getBroadcastOffset(): rooms_models_pb.EventBroadcastOffsetValue | undefined;
  setBroadcastOffset(value?: rooms_models_pb.EventBroadcastOffsetValue): UpdateEventRequest;
  hasBroadcastOffset(): boolean;
  clearBroadcastOffset(): UpdateEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventRequest): UpdateEventRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventRequest;
  static deserializeBinaryFromReader(message: UpdateEventRequest, reader: jspb.BinaryReader): UpdateEventRequest;
}

export namespace UpdateEventRequest {
  export type AsObject = {
    id: string,
    pid?: rooms_models_pb.EventPidValue.AsObject,
    name?: rooms_models_pb.EventNameValue.AsObject,
    access?: rooms_models_pb.EventAccessValue.AsObject,
    layout?: rooms_models_pb.EventLayoutValue.AsObject,
    genres?: rooms_models_pb.EventGenresValue.AsObject,
    summary?: rooms_models_pb.EventSummaryValue.AsObject,
    overseer?: rooms_models_pb.EventOverseerValue.AsObject,
    description?: rooms_models_pb.EventDescriptionValue.AsObject,
    startsAt?: rooms_models_pb.EventStartsAtValue.AsObject,
    finishesAt?: rooms_models_pb.EventFinishesAtValue.AsObject,
    thumbnail?: rooms_models_pb.EventThumbnailValue.AsObject,
    background?: rooms_models_pb.EventBackgroundValue.AsObject,
    broadcastUrl?: rooms_models_pb.EventBroadcastUrlValue.AsObject,
    broadcastOffset?: rooms_models_pb.EventBroadcastOffsetValue.AsObject,
  }
}

export class UpdateEventResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventInfo | undefined;
  setInfo(value?: rooms_models_pb.EventInfo): UpdateEventResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateEventResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventResponse;
  hasError(): boolean;
  clearError(): UpdateEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventResponse): UpdateEventResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventResponse;
  static deserializeBinaryFromReader(message: UpdateEventResponse, reader: jspb.BinaryReader): UpdateEventResponse;
}

export namespace UpdateEventResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventRequest): DeleteEventRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventRequest;
  static deserializeBinaryFromReader(message: DeleteEventRequest, reader: jspb.BinaryReader): DeleteEventRequest;
}

export namespace DeleteEventRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventResponse;
  hasError(): boolean;
  clearError(): DeleteEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventResponse): DeleteEventResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventResponse;
  static deserializeBinaryFromReader(message: DeleteEventResponse, reader: jspb.BinaryReader): DeleteEventResponse;
}

export namespace DeleteEventResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class StartEventRequest extends jspb.Message {
  getId(): string;
  setId(value: string): StartEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartEventRequest): StartEventRequest.AsObject;
  static serializeBinaryToWriter(message: StartEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartEventRequest;
  static deserializeBinaryFromReader(message: StartEventRequest, reader: jspb.BinaryReader): StartEventRequest;
}

export namespace StartEventRequest {
  export type AsObject = {
    id: string,
  }
}

export class StartEventResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): StartEventResponse;
  hasError(): boolean;
  clearError(): StartEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartEventResponse): StartEventResponse.AsObject;
  static serializeBinaryToWriter(message: StartEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartEventResponse;
  static deserializeBinaryFromReader(message: StartEventResponse, reader: jspb.BinaryReader): StartEventResponse;
}

export namespace StartEventResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class FinishEventRequest extends jspb.Message {
  getId(): string;
  setId(value: string): FinishEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishEventRequest): FinishEventRequest.AsObject;
  static serializeBinaryToWriter(message: FinishEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishEventRequest;
  static deserializeBinaryFromReader(message: FinishEventRequest, reader: jspb.BinaryReader): FinishEventRequest;
}

export namespace FinishEventRequest {
  export type AsObject = {
    id: string,
  }
}

export class FinishEventResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): FinishEventResponse;
  hasError(): boolean;
  clearError(): FinishEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinishEventResponse): FinishEventResponse.AsObject;
  static serializeBinaryToWriter(message: FinishEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishEventResponse;
  static deserializeBinaryFromReader(message: FinishEventResponse, reader: jspb.BinaryReader): FinishEventResponse;
}

export namespace FinishEventResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class CancelEventRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CancelEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelEventRequest): CancelEventRequest.AsObject;
  static serializeBinaryToWriter(message: CancelEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelEventRequest;
  static deserializeBinaryFromReader(message: CancelEventRequest, reader: jspb.BinaryReader): CancelEventRequest;
}

export namespace CancelEventRequest {
  export type AsObject = {
    id: string,
  }
}

export class CancelEventResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CancelEventResponse;
  hasError(): boolean;
  clearError(): CancelEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelEventResponse): CancelEventResponse.AsObject;
  static serializeBinaryToWriter(message: CancelEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelEventResponse;
  static deserializeBinaryFromReader(message: CancelEventResponse, reader: jspb.BinaryReader): CancelEventResponse;
}

export namespace CancelEventResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class RestartEventRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RestartEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestartEventRequest): RestartEventRequest.AsObject;
  static serializeBinaryToWriter(message: RestartEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartEventRequest;
  static deserializeBinaryFromReader(message: RestartEventRequest, reader: jspb.BinaryReader): RestartEventRequest;
}

export namespace RestartEventRequest {
  export type AsObject = {
    id: string,
  }
}

export class RestartEventResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): RestartEventResponse;
  hasError(): boolean;
  clearError(): RestartEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestartEventResponse): RestartEventResponse.AsObject;
  static serializeBinaryToWriter(message: RestartEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartEventResponse;
  static deserializeBinaryFromReader(message: RestartEventResponse, reader: jspb.BinaryReader): RestartEventResponse;
}

export namespace RestartEventResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class TokenizeEventRequest extends jspb.Message {
  getId(): string;
  setId(value: string): TokenizeEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenizeEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenizeEventRequest): TokenizeEventRequest.AsObject;
  static serializeBinaryToWriter(message: TokenizeEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenizeEventRequest;
  static deserializeBinaryFromReader(message: TokenizeEventRequest, reader: jspb.BinaryReader): TokenizeEventRequest;
}

export namespace TokenizeEventRequest {
  export type AsObject = {
    id: string,
  }
}

export class TokenizeEventResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokenizeEventResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): TokenizeEventResponse;
  hasError(): boolean;
  clearError(): TokenizeEventResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenizeEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenizeEventResponse): TokenizeEventResponse.AsObject;
  static serializeBinaryToWriter(message: TokenizeEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenizeEventResponse;
  static deserializeBinaryFromReader(message: TokenizeEventResponse, reader: jspb.BinaryReader): TokenizeEventResponse;
}

export namespace TokenizeEventResponse {
  export type AsObject = {
    token: string,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventPerformerInfoRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetEventPerformerInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventPerformerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventPerformerInfoRequest): GetEventPerformerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventPerformerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventPerformerInfoRequest;
  static deserializeBinaryFromReader(message: GetEventPerformerInfoRequest, reader: jspb.BinaryReader): GetEventPerformerInfoRequest;
}

export namespace GetEventPerformerInfoRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetEventPerformerInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventPerformerInfo | undefined;
  setInfo(value?: rooms_models_pb.EventPerformerInfo): GetEventPerformerInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventPerformerInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventPerformerInfoResponse;
  hasError(): boolean;
  clearError(): GetEventPerformerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventPerformerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventPerformerInfoResponse): GetEventPerformerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventPerformerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventPerformerInfoResponse;
  static deserializeBinaryFromReader(message: GetEventPerformerInfoResponse, reader: jspb.BinaryReader): GetEventPerformerInfoResponse;
}

export namespace GetEventPerformerInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventPerformerInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventPerformersRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListEventPerformersRequest;

  getLimit(): number;
  setLimit(value: number): ListEventPerformersRequest;

  getOrder(): string;
  setOrder(value: string): ListEventPerformersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventPerformersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventPerformersRequest): ListEventPerformersRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventPerformersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventPerformersRequest;
  static deserializeBinaryFromReader(message: ListEventPerformersRequest, reader: jspb.BinaryReader): ListEventPerformersRequest;
}

export namespace ListEventPerformersRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventPerformersResponse extends jspb.Message {
  getPerformersList(): Array<rooms_models_pb.EventPerformerInfo>;
  setPerformersList(value: Array<rooms_models_pb.EventPerformerInfo>): ListEventPerformersResponse;
  clearPerformersList(): ListEventPerformersResponse;
  addPerformers(value?: rooms_models_pb.EventPerformerInfo, index?: number): rooms_models_pb.EventPerformerInfo;

  getTotal(): number;
  setTotal(value: number): ListEventPerformersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventPerformersResponse;
  hasError(): boolean;
  clearError(): ListEventPerformersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventPerformersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventPerformersResponse): ListEventPerformersResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventPerformersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventPerformersResponse;
  static deserializeBinaryFromReader(message: ListEventPerformersResponse, reader: jspb.BinaryReader): ListEventPerformersResponse;
}

export namespace ListEventPerformersResponse {
  export type AsObject = {
    performersList: Array<rooms_models_pb.EventPerformerInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventPerformersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventPerformersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventPerformersRequest): CountEventPerformersRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventPerformersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventPerformersRequest;
  static deserializeBinaryFromReader(message: CountEventPerformersRequest, reader: jspb.BinaryReader): CountEventPerformersRequest;
}

export namespace CountEventPerformersRequest {
  export type AsObject = {
  }
}

export class CountEventPerformersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventPerformersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventPerformersResponse;
  hasError(): boolean;
  clearError(): CountEventPerformersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventPerformersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventPerformersResponse): CountEventPerformersResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventPerformersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventPerformersResponse;
  static deserializeBinaryFromReader(message: CountEventPerformersResponse, reader: jspb.BinaryReader): CountEventPerformersResponse;
}

export namespace CountEventPerformersResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SwapEventPerformersRequest extends jspb.Message {
  getSourcePosition(): number;
  setSourcePosition(value: number): SwapEventPerformersRequest;

  getTargetPosition(): number;
  setTargetPosition(value: number): SwapEventPerformersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapEventPerformersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwapEventPerformersRequest): SwapEventPerformersRequest.AsObject;
  static serializeBinaryToWriter(message: SwapEventPerformersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapEventPerformersRequest;
  static deserializeBinaryFromReader(message: SwapEventPerformersRequest, reader: jspb.BinaryReader): SwapEventPerformersRequest;
}

export namespace SwapEventPerformersRequest {
  export type AsObject = {
    sourcePosition: number,
    targetPosition: number,
  }
}

export class SwapEventPerformersResponse extends jspb.Message {
  getPerformersList(): Array<rooms_models_pb.EventPerformerInfo>;
  setPerformersList(value: Array<rooms_models_pb.EventPerformerInfo>): SwapEventPerformersResponse;
  clearPerformersList(): SwapEventPerformersResponse;
  addPerformers(value?: rooms_models_pb.EventPerformerInfo, index?: number): rooms_models_pb.EventPerformerInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SwapEventPerformersResponse;
  hasError(): boolean;
  clearError(): SwapEventPerformersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapEventPerformersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwapEventPerformersResponse): SwapEventPerformersResponse.AsObject;
  static serializeBinaryToWriter(message: SwapEventPerformersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapEventPerformersResponse;
  static deserializeBinaryFromReader(message: SwapEventPerformersResponse, reader: jspb.BinaryReader): SwapEventPerformersResponse;
}

export namespace SwapEventPerformersResponse {
  export type AsObject = {
    performersList: Array<rooms_models_pb.EventPerformerInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SwitchEventPerformerRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): SwitchEventPerformerRequest;

  getPosition(): number;
  setPosition(value: number): SwitchEventPerformerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwitchEventPerformerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwitchEventPerformerRequest): SwitchEventPerformerRequest.AsObject;
  static serializeBinaryToWriter(message: SwitchEventPerformerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwitchEventPerformerRequest;
  static deserializeBinaryFromReader(message: SwitchEventPerformerRequest, reader: jspb.BinaryReader): SwitchEventPerformerRequest;
}

export namespace SwitchEventPerformerRequest {
  export type AsObject = {
    userId: string,
    position: number,
  }
}

export class SwitchEventPerformerResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventPerformerInfo | undefined;
  setInfo(value?: rooms_models_pb.EventPerformerInfo): SwitchEventPerformerResponse;
  hasInfo(): boolean;
  clearInfo(): SwitchEventPerformerResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SwitchEventPerformerResponse;
  hasError(): boolean;
  clearError(): SwitchEventPerformerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwitchEventPerformerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwitchEventPerformerResponse): SwitchEventPerformerResponse.AsObject;
  static serializeBinaryToWriter(message: SwitchEventPerformerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwitchEventPerformerResponse;
  static deserializeBinaryFromReader(message: SwitchEventPerformerResponse, reader: jspb.BinaryReader): SwitchEventPerformerResponse;
}

export namespace SwitchEventPerformerResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventPerformerInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventPerformerRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): DeleteEventPerformerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventPerformerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventPerformerRequest): DeleteEventPerformerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventPerformerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventPerformerRequest;
  static deserializeBinaryFromReader(message: DeleteEventPerformerRequest, reader: jspb.BinaryReader): DeleteEventPerformerRequest;
}

export namespace DeleteEventPerformerRequest {
  export type AsObject = {
    userId: string,
  }
}

export class DeleteEventPerformerResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventPerformerResponse;
  hasError(): boolean;
  clearError(): DeleteEventPerformerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventPerformerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventPerformerResponse): DeleteEventPerformerResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventPerformerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventPerformerResponse;
  static deserializeBinaryFromReader(message: DeleteEventPerformerResponse, reader: jspb.BinaryReader): DeleteEventPerformerResponse;
}

export namespace DeleteEventPerformerResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ConfirmEventPerformerRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmEventPerformerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmEventPerformerRequest): ConfirmEventPerformerRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmEventPerformerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmEventPerformerRequest;
  static deserializeBinaryFromReader(message: ConfirmEventPerformerRequest, reader: jspb.BinaryReader): ConfirmEventPerformerRequest;
}

export namespace ConfirmEventPerformerRequest {
  export type AsObject = {
  }
}

export class ConfirmEventPerformerResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventPerformerInfo | undefined;
  setInfo(value?: rooms_models_pb.EventPerformerInfo): ConfirmEventPerformerResponse;
  hasInfo(): boolean;
  clearInfo(): ConfirmEventPerformerResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ConfirmEventPerformerResponse;
  hasError(): boolean;
  clearError(): ConfirmEventPerformerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmEventPerformerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmEventPerformerResponse): ConfirmEventPerformerResponse.AsObject;
  static serializeBinaryToWriter(message: ConfirmEventPerformerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmEventPerformerResponse;
  static deserializeBinaryFromReader(message: ConfirmEventPerformerResponse, reader: jspb.BinaryReader): ConfirmEventPerformerResponse;
}

export namespace ConfirmEventPerformerResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventPerformerInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetTiktokObjectInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTiktokObjectInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTiktokObjectInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTiktokObjectInfoRequest): GetTiktokObjectInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTiktokObjectInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTiktokObjectInfoRequest;
  static deserializeBinaryFromReader(message: GetTiktokObjectInfoRequest, reader: jspb.BinaryReader): GetTiktokObjectInfoRequest;
}

export namespace GetTiktokObjectInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTiktokObjectInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.TiktokObjectInfo | undefined;
  setInfo(value?: rooms_models_pb.TiktokObjectInfo): GetTiktokObjectInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetTiktokObjectInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetTiktokObjectInfoResponse;
  hasError(): boolean;
  clearError(): GetTiktokObjectInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTiktokObjectInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTiktokObjectInfoResponse): GetTiktokObjectInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetTiktokObjectInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTiktokObjectInfoResponse;
  static deserializeBinaryFromReader(message: GetTiktokObjectInfoResponse, reader: jspb.BinaryReader): GetTiktokObjectInfoResponse;
}

export namespace GetTiktokObjectInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.TiktokObjectInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SearchTiktokObjectsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchTiktokObjectsRequest;

  getOffset(): number;
  setOffset(value: number): SearchTiktokObjectsRequest;

  getLimit(): number;
  setLimit(value: number): SearchTiktokObjectsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTiktokObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTiktokObjectsRequest): SearchTiktokObjectsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchTiktokObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTiktokObjectsRequest;
  static deserializeBinaryFromReader(message: SearchTiktokObjectsRequest, reader: jspb.BinaryReader): SearchTiktokObjectsRequest;
}

export namespace SearchTiktokObjectsRequest {
  export type AsObject = {
    query: string,
    offset: number,
    limit: number,
  }
}

export class SearchTiktokObjectsResponse extends jspb.Message {
  getObjectsList(): Array<rooms_models_pb.TiktokObjectInfo>;
  setObjectsList(value: Array<rooms_models_pb.TiktokObjectInfo>): SearchTiktokObjectsResponse;
  clearObjectsList(): SearchTiktokObjectsResponse;
  addObjects(value?: rooms_models_pb.TiktokObjectInfo, index?: number): rooms_models_pb.TiktokObjectInfo;

  getTotal(): number;
  setTotal(value: number): SearchTiktokObjectsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SearchTiktokObjectsResponse;
  hasError(): boolean;
  clearError(): SearchTiktokObjectsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTiktokObjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTiktokObjectsResponse): SearchTiktokObjectsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchTiktokObjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTiktokObjectsResponse;
  static deserializeBinaryFromReader(message: SearchTiktokObjectsResponse, reader: jspb.BinaryReader): SearchTiktokObjectsResponse;
}

export namespace SearchTiktokObjectsResponse {
  export type AsObject = {
    objectsList: Array<rooms_models_pb.TiktokObjectInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetYoutubeObjectInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetYoutubeObjectInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetYoutubeObjectInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetYoutubeObjectInfoRequest): GetYoutubeObjectInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetYoutubeObjectInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetYoutubeObjectInfoRequest;
  static deserializeBinaryFromReader(message: GetYoutubeObjectInfoRequest, reader: jspb.BinaryReader): GetYoutubeObjectInfoRequest;
}

export namespace GetYoutubeObjectInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetYoutubeObjectInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.YoutubeObjectInfo | undefined;
  setInfo(value?: rooms_models_pb.YoutubeObjectInfo): GetYoutubeObjectInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetYoutubeObjectInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetYoutubeObjectInfoResponse;
  hasError(): boolean;
  clearError(): GetYoutubeObjectInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetYoutubeObjectInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetYoutubeObjectInfoResponse): GetYoutubeObjectInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetYoutubeObjectInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetYoutubeObjectInfoResponse;
  static deserializeBinaryFromReader(message: GetYoutubeObjectInfoResponse, reader: jspb.BinaryReader): GetYoutubeObjectInfoResponse;
}

export namespace GetYoutubeObjectInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.YoutubeObjectInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class SearchYoutubeObjectsRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchYoutubeObjectsRequest;

  getToken(): string;
  setToken(value: string): SearchYoutubeObjectsRequest;

  getLimit(): number;
  setLimit(value: number): SearchYoutubeObjectsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchYoutubeObjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchYoutubeObjectsRequest): SearchYoutubeObjectsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchYoutubeObjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchYoutubeObjectsRequest;
  static deserializeBinaryFromReader(message: SearchYoutubeObjectsRequest, reader: jspb.BinaryReader): SearchYoutubeObjectsRequest;
}

export namespace SearchYoutubeObjectsRequest {
  export type AsObject = {
    query: string,
    token: string,
    limit: number,
  }
}

export class SearchYoutubeObjectsResponse extends jspb.Message {
  getObjectsList(): Array<rooms_models_pb.YoutubeObjectInfo>;
  setObjectsList(value: Array<rooms_models_pb.YoutubeObjectInfo>): SearchYoutubeObjectsResponse;
  clearObjectsList(): SearchYoutubeObjectsResponse;
  addObjects(value?: rooms_models_pb.YoutubeObjectInfo, index?: number): rooms_models_pb.YoutubeObjectInfo;

  getToken(): string;
  setToken(value: string): SearchYoutubeObjectsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): SearchYoutubeObjectsResponse;
  hasError(): boolean;
  clearError(): SearchYoutubeObjectsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchYoutubeObjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchYoutubeObjectsResponse): SearchYoutubeObjectsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchYoutubeObjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchYoutubeObjectsResponse;
  static deserializeBinaryFromReader(message: SearchYoutubeObjectsResponse, reader: jspb.BinaryReader): SearchYoutubeObjectsResponse;
}

export namespace SearchYoutubeObjectsResponse {
  export type AsObject = {
    objectsList: Array<rooms_models_pb.YoutubeObjectInfo.AsObject>,
    token: string,
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

export class GetEventReportInfoRequest extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): GetEventReportInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventReportInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventReportInfoRequest): GetEventReportInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventReportInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventReportInfoRequest;
  static deserializeBinaryFromReader(message: GetEventReportInfoRequest, reader: jspb.BinaryReader): GetEventReportInfoRequest;
}

export namespace GetEventReportInfoRequest {
  export type AsObject = {
    eventId: string,
  }
}

export class GetEventReportInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventReportInfo | undefined;
  setInfo(value?: rooms_models_pb.EventReportInfo): GetEventReportInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventReportInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventReportInfoResponse;
  hasError(): boolean;
  clearError(): GetEventReportInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventReportInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventReportInfoResponse): GetEventReportInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventReportInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventReportInfoResponse;
  static deserializeBinaryFromReader(message: GetEventReportInfoResponse, reader: jspb.BinaryReader): GetEventReportInfoResponse;
}

export namespace GetEventReportInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventReportInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventReportsRequest extends jspb.Message {
  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListEventReportsRequest;
  clearEventIdsList(): ListEventReportsRequest;
  addEventIds(value: string, index?: number): ListEventReportsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventReportsRequest): ListEventReportsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventReportsRequest;
  static deserializeBinaryFromReader(message: ListEventReportsRequest, reader: jspb.BinaryReader): ListEventReportsRequest;
}

export namespace ListEventReportsRequest {
  export type AsObject = {
    eventIdsList: Array<string>,
  }
}

export class ListEventReportsResponse extends jspb.Message {
  getReportsList(): Array<rooms_models_pb.EventReportInfo>;
  setReportsList(value: Array<rooms_models_pb.EventReportInfo>): ListEventReportsResponse;
  clearReportsList(): ListEventReportsResponse;
  addReports(value?: rooms_models_pb.EventReportInfo, index?: number): rooms_models_pb.EventReportInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventReportsResponse;
  hasError(): boolean;
  clearError(): ListEventReportsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventReportsResponse): ListEventReportsResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventReportsResponse;
  static deserializeBinaryFromReader(message: ListEventReportsResponse, reader: jspb.BinaryReader): ListEventReportsResponse;
}

export namespace ListEventReportsResponse {
  export type AsObject = {
    reportsList: Array<rooms_models_pb.EventReportInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventOwnerReportInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventOwnerReportInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventOwnerReportInfoRequest): GetEventOwnerReportInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventOwnerReportInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventOwnerReportInfoRequest;
  static deserializeBinaryFromReader(message: GetEventOwnerReportInfoRequest, reader: jspb.BinaryReader): GetEventOwnerReportInfoRequest;
}

export namespace GetEventOwnerReportInfoRequest {
  export type AsObject = {
  }
}

export class GetEventOwnerReportInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.EventOwnerReportInfo | undefined;
  setInfo(value?: rooms_models_pb.EventOwnerReportInfo): GetEventOwnerReportInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventOwnerReportInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventOwnerReportInfoResponse;
  hasError(): boolean;
  clearError(): GetEventOwnerReportInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventOwnerReportInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventOwnerReportInfoResponse): GetEventOwnerReportInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventOwnerReportInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventOwnerReportInfoResponse;
  static deserializeBinaryFromReader(message: GetEventOwnerReportInfoResponse, reader: jspb.BinaryReader): GetEventOwnerReportInfoResponse;
}

export namespace GetEventOwnerReportInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.EventOwnerReportInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetRecommendationInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetRecommendationInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationInfoRequest): GetRecommendationInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecommendationInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationInfoRequest;
  static deserializeBinaryFromReader(message: GetRecommendationInfoRequest, reader: jspb.BinaryReader): GetRecommendationInfoRequest;
}

export namespace GetRecommendationInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRecommendationInfoResponse extends jspb.Message {
  getInfo(): rooms_models_pb.RecommendationInfo | undefined;
  setInfo(value?: rooms_models_pb.RecommendationInfo): GetRecommendationInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetRecommendationInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetRecommendationInfoResponse;
  hasError(): boolean;
  clearError(): GetRecommendationInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecommendationInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecommendationInfoResponse): GetRecommendationInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetRecommendationInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecommendationInfoResponse;
  static deserializeBinaryFromReader(message: GetRecommendationInfoResponse, reader: jspb.BinaryReader): GetRecommendationInfoResponse;
}

export namespace GetRecommendationInfoResponse {
  export type AsObject = {
    info?: rooms_models_pb.RecommendationInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListRecommendationsRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListRecommendationsRequest;
  clearIdsList(): ListRecommendationsRequest;
  addIds(value: string, index?: number): ListRecommendationsRequest;

  getTypesList(): Array<rooms_enums_pb.RecommendationType>;
  setTypesList(value: Array<rooms_enums_pb.RecommendationType>): ListRecommendationsRequest;
  clearTypesList(): ListRecommendationsRequest;
  addTypes(value: rooms_enums_pb.RecommendationType, index?: number): ListRecommendationsRequest;

  getOffset(): number;
  setOffset(value: number): ListRecommendationsRequest;

  getLimit(): number;
  setLimit(value: number): ListRecommendationsRequest;

  getOrder(): string;
  setOrder(value: string): ListRecommendationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecommendationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecommendationsRequest): ListRecommendationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecommendationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecommendationsRequest;
  static deserializeBinaryFromReader(message: ListRecommendationsRequest, reader: jspb.BinaryReader): ListRecommendationsRequest;
}

export namespace ListRecommendationsRequest {
  export type AsObject = {
    idsList: Array<string>,
    typesList: Array<rooms_enums_pb.RecommendationType>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListRecommendationsResponse extends jspb.Message {
  getRecommendationsList(): Array<rooms_models_pb.RecommendationInfo>;
  setRecommendationsList(value: Array<rooms_models_pb.RecommendationInfo>): ListRecommendationsResponse;
  clearRecommendationsList(): ListRecommendationsResponse;
  addRecommendations(value?: rooms_models_pb.RecommendationInfo, index?: number): rooms_models_pb.RecommendationInfo;

  getTotal(): number;
  setTotal(value: number): ListRecommendationsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListRecommendationsResponse;
  hasError(): boolean;
  clearError(): ListRecommendationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecommendationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecommendationsResponse): ListRecommendationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecommendationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecommendationsResponse;
  static deserializeBinaryFromReader(message: ListRecommendationsResponse, reader: jspb.BinaryReader): ListRecommendationsResponse;
}

export namespace ListRecommendationsResponse {
  export type AsObject = {
    recommendationsList: Array<rooms_models_pb.RecommendationInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountRecommendationsRequest extends jspb.Message {
  getTypesList(): Array<rooms_enums_pb.RecommendationType>;
  setTypesList(value: Array<rooms_enums_pb.RecommendationType>): CountRecommendationsRequest;
  clearTypesList(): CountRecommendationsRequest;
  addTypes(value: rooms_enums_pb.RecommendationType, index?: number): CountRecommendationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRecommendationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRecommendationsRequest): CountRecommendationsRequest.AsObject;
  static serializeBinaryToWriter(message: CountRecommendationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRecommendationsRequest;
  static deserializeBinaryFromReader(message: CountRecommendationsRequest, reader: jspb.BinaryReader): CountRecommendationsRequest;
}

export namespace CountRecommendationsRequest {
  export type AsObject = {
    typesList: Array<rooms_enums_pb.RecommendationType>,
  }
}

export class CountRecommendationsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountRecommendationsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountRecommendationsResponse;
  hasError(): boolean;
  clearError(): CountRecommendationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRecommendationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountRecommendationsResponse): CountRecommendationsResponse.AsObject;
  static serializeBinaryToWriter(message: CountRecommendationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRecommendationsResponse;
  static deserializeBinaryFromReader(message: CountRecommendationsResponse, reader: jspb.BinaryReader): CountRecommendationsResponse;
}

export namespace CountRecommendationsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

