import * as jspb from 'google-protobuf'

import * as payments_enums_pb from '../payments/enums_pb';
import * as payments_models_pb from '../payments/models_pb';
import * as error_models_pb from '../error/models_pb';


export class GetEventTicketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventTicketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventTicketInternallyRequest): GetEventTicketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventTicketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventTicketInternallyRequest;
  static deserializeBinaryFromReader(message: GetEventTicketInternallyRequest, reader: jspb.BinaryReader): GetEventTicketInternallyRequest;
}

export namespace GetEventTicketInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetEventTicketInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventTicketInfo | undefined;
  setInfo(value?: payments_models_pb.EventTicketInfo): GetEventTicketInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventTicketInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventTicketInternallyResponse;
  hasError(): boolean;
  clearError(): GetEventTicketInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventTicketInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventTicketInternallyResponse): GetEventTicketInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventTicketInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventTicketInternallyResponse;
  static deserializeBinaryFromReader(message: GetEventTicketInternallyResponse, reader: jspb.BinaryReader): GetEventTicketInternallyResponse;
}

export namespace GetEventTicketInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.EventTicketInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventTicketsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListEventTicketsInternallyRequest;
  clearIdsList(): ListEventTicketsInternallyRequest;
  addIds(value: string, index?: number): ListEventTicketsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListEventTicketsInternallyRequest;
  clearEventIdsList(): ListEventTicketsInternallyRequest;
  addEventIds(value: string, index?: number): ListEventTicketsInternallyRequest;

  getPartnerIdsList(): Array<string>;
  setPartnerIdsList(value: Array<string>): ListEventTicketsInternallyRequest;
  clearPartnerIdsList(): ListEventTicketsInternallyRequest;
  addPartnerIds(value: string, index?: number): ListEventTicketsInternallyRequest;

  getTypesList(): Array<payments_enums_pb.EventTicketType>;
  setTypesList(value: Array<payments_enums_pb.EventTicketType>): ListEventTicketsInternallyRequest;
  clearTypesList(): ListEventTicketsInternallyRequest;
  addTypes(value: payments_enums_pb.EventTicketType, index?: number): ListEventTicketsInternallyRequest;

  getStatusesList(): Array<payments_enums_pb.EventTicketStatus>;
  setStatusesList(value: Array<payments_enums_pb.EventTicketStatus>): ListEventTicketsInternallyRequest;
  clearStatusesList(): ListEventTicketsInternallyRequest;
  addStatuses(value: payments_enums_pb.EventTicketStatus, index?: number): ListEventTicketsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListEventTicketsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListEventTicketsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListEventTicketsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventTicketsInternallyRequest): ListEventTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: ListEventTicketsInternallyRequest, reader: jspb.BinaryReader): ListEventTicketsInternallyRequest;
}

export namespace ListEventTicketsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
    partnerIdsList: Array<string>,
    typesList: Array<payments_enums_pb.EventTicketType>,
    statusesList: Array<payments_enums_pb.EventTicketStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<payments_models_pb.EventTicketInfo>;
  setTicketsList(value: Array<payments_models_pb.EventTicketInfo>): ListEventTicketsInternallyResponse;
  clearTicketsList(): ListEventTicketsInternallyResponse;
  addTickets(value?: payments_models_pb.EventTicketInfo, index?: number): payments_models_pb.EventTicketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): ListEventTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventTicketsInternallyResponse): ListEventTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: ListEventTicketsInternallyResponse, reader: jspb.BinaryReader): ListEventTicketsInternallyResponse;
}

export namespace ListEventTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<payments_models_pb.EventTicketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventTicketsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountEventTicketsInternallyRequest;
  clearIdsList(): CountEventTicketsInternallyRequest;
  addIds(value: string, index?: number): CountEventTicketsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): CountEventTicketsInternallyRequest;
  clearEventIdsList(): CountEventTicketsInternallyRequest;
  addEventIds(value: string, index?: number): CountEventTicketsInternallyRequest;

  getPartnerIdsList(): Array<string>;
  setPartnerIdsList(value: Array<string>): CountEventTicketsInternallyRequest;
  clearPartnerIdsList(): CountEventTicketsInternallyRequest;
  addPartnerIds(value: string, index?: number): CountEventTicketsInternallyRequest;

  getTypesList(): Array<payments_enums_pb.EventTicketType>;
  setTypesList(value: Array<payments_enums_pb.EventTicketType>): CountEventTicketsInternallyRequest;
  clearTypesList(): CountEventTicketsInternallyRequest;
  addTypes(value: payments_enums_pb.EventTicketType, index?: number): CountEventTicketsInternallyRequest;

  getStatusesList(): Array<payments_enums_pb.EventTicketStatus>;
  setStatusesList(value: Array<payments_enums_pb.EventTicketStatus>): CountEventTicketsInternallyRequest;
  clearStatusesList(): CountEventTicketsInternallyRequest;
  addStatuses(value: payments_enums_pb.EventTicketStatus, index?: number): CountEventTicketsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventTicketsInternallyRequest): CountEventTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: CountEventTicketsInternallyRequest, reader: jspb.BinaryReader): CountEventTicketsInternallyRequest;
}

export namespace CountEventTicketsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
    partnerIdsList: Array<string>,
    typesList: Array<payments_enums_pb.EventTicketType>,
    statusesList: Array<payments_enums_pb.EventTicketStatus>,
  }
}

export class CountEventTicketsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventTicketsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): CountEventTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventTicketsInternallyResponse): CountEventTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: CountEventTicketsInternallyResponse, reader: jspb.BinaryReader): CountEventTicketsInternallyResponse;
}

export namespace CountEventTicketsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventTicketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateEventTicketInternallyRequest;

  getEventId(): string;
  setEventId(value: string): CreateEventTicketInternallyRequest;

  getPartnerId(): string;
  setPartnerId(value: string): CreateEventTicketInternallyRequest;

  getUsages(): number;
  setUsages(value: number): CreateEventTicketInternallyRequest;

  getType(): payments_enums_pb.EventTicketType;
  setType(value: payments_enums_pb.EventTicketType): CreateEventTicketInternallyRequest;

  getStatus(): payments_enums_pb.EventTicketStatus;
  setStatus(value: payments_enums_pb.EventTicketStatus): CreateEventTicketInternallyRequest;

  getMetadata(): payments_models_pb.EventTicketMetadata | undefined;
  setMetadata(value?: payments_models_pb.EventTicketMetadata): CreateEventTicketInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateEventTicketInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateEventTicketInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateEventTicketInternallyRequest;

  getVouchersList(): Array<payments_models_pb.CreatesEventTicketVoucher>;
  setVouchersList(value: Array<payments_models_pb.CreatesEventTicketVoucher>): CreateEventTicketInternallyRequest;
  clearVouchersList(): CreateEventTicketInternallyRequest;
  addVouchers(value?: payments_models_pb.CreatesEventTicketVoucher, index?: number): payments_models_pb.CreatesEventTicketVoucher;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketInternallyRequest): CreateEventTicketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventTicketInternallyRequest, reader: jspb.BinaryReader): CreateEventTicketInternallyRequest;
}

export namespace CreateEventTicketInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
    partnerId: string,
    usages: number,
    type: payments_enums_pb.EventTicketType,
    status: payments_enums_pb.EventTicketStatus,
    metadata?: payments_models_pb.EventTicketMetadata.AsObject,
    createdAt: number,
    updatedAt: number,
    vouchersList: Array<payments_models_pb.CreatesEventTicketVoucher.AsObject>,
  }
}

export class CreateEventTicketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateEventTicketInternallyRequest>;
  setRequestsList(value: Array<CreateEventTicketInternallyRequest>): CreateEventTicketsInternallyRequest;
  clearRequestsList(): CreateEventTicketsInternallyRequest;
  addRequests(value?: CreateEventTicketInternallyRequest, index?: number): CreateEventTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketsInternallyRequest): CreateEventTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventTicketsInternallyRequest, reader: jspb.BinaryReader): CreateEventTicketsInternallyRequest;
}

export namespace CreateEventTicketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateEventTicketInternallyRequest.AsObject>,
  }
}

export class CreateEventTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<payments_models_pb.EventTicketInfo>;
  setTicketsList(value: Array<payments_models_pb.EventTicketInfo>): CreateEventTicketsInternallyResponse;
  clearTicketsList(): CreateEventTicketsInternallyResponse;
  addTickets(value?: payments_models_pb.EventTicketInfo, index?: number): payments_models_pb.EventTicketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateEventTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketsInternallyResponse): CreateEventTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateEventTicketsInternallyResponse, reader: jspb.BinaryReader): CreateEventTicketsInternallyResponse;
}

export namespace CreateEventTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<payments_models_pb.EventTicketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventTicketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventTicketInternallyRequest;

  getUsages(): payments_models_pb.EventTicketUsagesValue | undefined;
  setUsages(value?: payments_models_pb.EventTicketUsagesValue): UpdateEventTicketInternallyRequest;
  hasUsages(): boolean;
  clearUsages(): UpdateEventTicketInternallyRequest;

  getStatus(): payments_models_pb.EventTicketStatusValue | undefined;
  setStatus(value?: payments_models_pb.EventTicketStatusValue): UpdateEventTicketInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateEventTicketInternallyRequest;

  getMetadata(): payments_models_pb.EventTicketMetadataValue | undefined;
  setMetadata(value?: payments_models_pb.EventTicketMetadataValue): UpdateEventTicketInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): UpdateEventTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketInternallyRequest): UpdateEventTicketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventTicketInternallyRequest, reader: jspb.BinaryReader): UpdateEventTicketInternallyRequest;
}

export namespace UpdateEventTicketInternallyRequest {
  export type AsObject = {
    id: string,
    usages?: payments_models_pb.EventTicketUsagesValue.AsObject,
    status?: payments_models_pb.EventTicketStatusValue.AsObject,
    metadata?: payments_models_pb.EventTicketMetadataValue.AsObject,
  }
}

export class UpdateEventTicketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateEventTicketInternallyRequest>;
  setRequestsList(value: Array<UpdateEventTicketInternallyRequest>): UpdateEventTicketsInternallyRequest;
  clearRequestsList(): UpdateEventTicketsInternallyRequest;
  addRequests(value?: UpdateEventTicketInternallyRequest, index?: number): UpdateEventTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketsInternallyRequest): UpdateEventTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventTicketsInternallyRequest, reader: jspb.BinaryReader): UpdateEventTicketsInternallyRequest;
}

export namespace UpdateEventTicketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateEventTicketInternallyRequest.AsObject>,
  }
}

export class UpdateEventTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<payments_models_pb.EventTicketInfo>;
  setTicketsList(value: Array<payments_models_pb.EventTicketInfo>): UpdateEventTicketsInternallyResponse;
  clearTicketsList(): UpdateEventTicketsInternallyResponse;
  addTickets(value?: payments_models_pb.EventTicketInfo, index?: number): payments_models_pb.EventTicketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateEventTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketsInternallyResponse): UpdateEventTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateEventTicketsInternallyResponse, reader: jspb.BinaryReader): UpdateEventTicketsInternallyResponse;
}

export namespace UpdateEventTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<payments_models_pb.EventTicketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventTicketInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketInternallyRequest): DeleteEventTicketInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventTicketInternallyRequest, reader: jspb.BinaryReader): DeleteEventTicketInternallyRequest;
}

export namespace DeleteEventTicketInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventTicketsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteEventTicketInternallyRequest>;
  setRequestsList(value: Array<DeleteEventTicketInternallyRequest>): DeleteEventTicketsInternallyRequest;
  clearRequestsList(): DeleteEventTicketsInternallyRequest;
  addRequests(value?: DeleteEventTicketInternallyRequest, index?: number): DeleteEventTicketInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketsInternallyRequest): DeleteEventTicketsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventTicketsInternallyRequest, reader: jspb.BinaryReader): DeleteEventTicketsInternallyRequest;
}

export namespace DeleteEventTicketsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteEventTicketInternallyRequest.AsObject>,
  }
}

export class DeleteEventTicketsInternallyResponse extends jspb.Message {
  getTicketsList(): Array<payments_models_pb.EventTicketInfo>;
  setTicketsList(value: Array<payments_models_pb.EventTicketInfo>): DeleteEventTicketsInternallyResponse;
  clearTicketsList(): DeleteEventTicketsInternallyResponse;
  addTickets(value?: payments_models_pb.EventTicketInfo, index?: number): payments_models_pb.EventTicketInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventTicketsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteEventTicketsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketsInternallyResponse): DeleteEventTicketsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteEventTicketsInternallyResponse, reader: jspb.BinaryReader): DeleteEventTicketsInternallyResponse;
}

export namespace DeleteEventTicketsInternallyResponse {
  export type AsObject = {
    ticketsList: Array<payments_models_pb.EventTicketInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventProductInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventProductInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventProductInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventProductInternallyRequest): GetEventProductInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventProductInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventProductInternallyRequest;
  static deserializeBinaryFromReader(message: GetEventProductInternallyRequest, reader: jspb.BinaryReader): GetEventProductInternallyRequest;
}

export namespace GetEventProductInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetEventProductInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventProductInfo | undefined;
  setInfo(value?: payments_models_pb.EventProductInfo): GetEventProductInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventProductInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventProductInternallyResponse;
  hasError(): boolean;
  clearError(): GetEventProductInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventProductInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventProductInternallyResponse): GetEventProductInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventProductInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventProductInternallyResponse;
  static deserializeBinaryFromReader(message: GetEventProductInternallyResponse, reader: jspb.BinaryReader): GetEventProductInternallyResponse;
}

export namespace GetEventProductInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.EventProductInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventProductsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListEventProductsInternallyRequest;
  clearIdsList(): ListEventProductsInternallyRequest;
  addIds(value: string, index?: number): ListEventProductsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): ListEventProductsInternallyRequest;
  clearEventIdsList(): ListEventProductsInternallyRequest;
  addEventIds(value: string, index?: number): ListEventProductsInternallyRequest;

  getPartnerIdsList(): Array<string>;
  setPartnerIdsList(value: Array<string>): ListEventProductsInternallyRequest;
  clearPartnerIdsList(): ListEventProductsInternallyRequest;
  addPartnerIds(value: string, index?: number): ListEventProductsInternallyRequest;

  getKindsList(): Array<string>;
  setKindsList(value: Array<string>): ListEventProductsInternallyRequest;
  clearKindsList(): ListEventProductsInternallyRequest;
  addKinds(value: string, index?: number): ListEventProductsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListEventProductsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListEventProductsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListEventProductsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventProductsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventProductsInternallyRequest): ListEventProductsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventProductsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventProductsInternallyRequest;
  static deserializeBinaryFromReader(message: ListEventProductsInternallyRequest, reader: jspb.BinaryReader): ListEventProductsInternallyRequest;
}

export namespace ListEventProductsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
    partnerIdsList: Array<string>,
    kindsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventProductsInternallyResponse extends jspb.Message {
  getProductsList(): Array<payments_models_pb.EventProductInfo>;
  setProductsList(value: Array<payments_models_pb.EventProductInfo>): ListEventProductsInternallyResponse;
  clearProductsList(): ListEventProductsInternallyResponse;
  addProducts(value?: payments_models_pb.EventProductInfo, index?: number): payments_models_pb.EventProductInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventProductsInternallyResponse;
  hasError(): boolean;
  clearError(): ListEventProductsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventProductsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventProductsInternallyResponse): ListEventProductsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventProductsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventProductsInternallyResponse;
  static deserializeBinaryFromReader(message: ListEventProductsInternallyResponse, reader: jspb.BinaryReader): ListEventProductsInternallyResponse;
}

export namespace ListEventProductsInternallyResponse {
  export type AsObject = {
    productsList: Array<payments_models_pb.EventProductInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventProductsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountEventProductsInternallyRequest;
  clearIdsList(): CountEventProductsInternallyRequest;
  addIds(value: string, index?: number): CountEventProductsInternallyRequest;

  getEventIdsList(): Array<string>;
  setEventIdsList(value: Array<string>): CountEventProductsInternallyRequest;
  clearEventIdsList(): CountEventProductsInternallyRequest;
  addEventIds(value: string, index?: number): CountEventProductsInternallyRequest;

  getPartnerIdsList(): Array<string>;
  setPartnerIdsList(value: Array<string>): CountEventProductsInternallyRequest;
  clearPartnerIdsList(): CountEventProductsInternallyRequest;
  addPartnerIds(value: string, index?: number): CountEventProductsInternallyRequest;

  getKindsList(): Array<string>;
  setKindsList(value: Array<string>): CountEventProductsInternallyRequest;
  clearKindsList(): CountEventProductsInternallyRequest;
  addKinds(value: string, index?: number): CountEventProductsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventProductsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventProductsInternallyRequest): CountEventProductsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventProductsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventProductsInternallyRequest;
  static deserializeBinaryFromReader(message: CountEventProductsInternallyRequest, reader: jspb.BinaryReader): CountEventProductsInternallyRequest;
}

export namespace CountEventProductsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    eventIdsList: Array<string>,
    partnerIdsList: Array<string>,
    kindsList: Array<string>,
  }
}

export class CountEventProductsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventProductsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventProductsInternallyResponse;
  hasError(): boolean;
  clearError(): CountEventProductsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventProductsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventProductsInternallyResponse): CountEventProductsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventProductsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventProductsInternallyResponse;
  static deserializeBinaryFromReader(message: CountEventProductsInternallyResponse, reader: jspb.BinaryReader): CountEventProductsInternallyResponse;
}

export namespace CountEventProductsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventProductInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateEventProductInternallyRequest;

  getEventId(): string;
  setEventId(value: string): CreateEventProductInternallyRequest;

  getPartnerId(): string;
  setPartnerId(value: string): CreateEventProductInternallyRequest;

  getKind(): string;
  setKind(value: string): CreateEventProductInternallyRequest;

  getName(): string;
  setName(value: string): CreateEventProductInternallyRequest;

  getDescription(): string;
  setDescription(value: string): CreateEventProductInternallyRequest;

  getStock(): number;
  setStock(value: number): CreateEventProductInternallyRequest;

  getImageurlsList(): Array<string>;
  setImageurlsList(value: Array<string>): CreateEventProductInternallyRequest;
  clearImageurlsList(): CreateEventProductInternallyRequest;
  addImageurls(value: string, index?: number): CreateEventProductInternallyRequest;

  getStatus(): payments_enums_pb.EventProductStatus;
  setStatus(value: payments_enums_pb.EventProductStatus): CreateEventProductInternallyRequest;

  getMetadata(): payments_models_pb.EventProductMetadata | undefined;
  setMetadata(value?: payments_models_pb.EventProductMetadata): CreateEventProductInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateEventProductInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateEventProductInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateEventProductInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventProductInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventProductInternallyRequest): CreateEventProductInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventProductInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventProductInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventProductInternallyRequest, reader: jspb.BinaryReader): CreateEventProductInternallyRequest;
}

export namespace CreateEventProductInternallyRequest {
  export type AsObject = {
    id: string,
    eventId: string,
    partnerId: string,
    kind: string,
    name: string,
    description: string,
    stock: number,
    imageurlsList: Array<string>,
    status: payments_enums_pb.EventProductStatus,
    metadata?: payments_models_pb.EventProductMetadata.AsObject,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateEventProductsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateEventProductInternallyRequest>;
  setRequestsList(value: Array<CreateEventProductInternallyRequest>): CreateEventProductsInternallyRequest;
  clearRequestsList(): CreateEventProductsInternallyRequest;
  addRequests(value?: CreateEventProductInternallyRequest, index?: number): CreateEventProductInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventProductsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventProductsInternallyRequest): CreateEventProductsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventProductsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventProductsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventProductsInternallyRequest, reader: jspb.BinaryReader): CreateEventProductsInternallyRequest;
}

export namespace CreateEventProductsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateEventProductInternallyRequest.AsObject>,
  }
}

export class CreateEventProductsInternallyResponse extends jspb.Message {
  getProductsList(): Array<payments_models_pb.EventProductInfo>;
  setProductsList(value: Array<payments_models_pb.EventProductInfo>): CreateEventProductsInternallyResponse;
  clearProductsList(): CreateEventProductsInternallyResponse;
  addProducts(value?: payments_models_pb.EventProductInfo, index?: number): payments_models_pb.EventProductInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventProductsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateEventProductsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventProductsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventProductsInternallyResponse): CreateEventProductsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventProductsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventProductsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateEventProductsInternallyResponse, reader: jspb.BinaryReader): CreateEventProductsInternallyResponse;
}

export namespace CreateEventProductsInternallyResponse {
  export type AsObject = {
    productsList: Array<payments_models_pb.EventProductInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventProductInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventProductInternallyRequest;

  getKind(): payments_models_pb.EventProductKindValue | undefined;
  setKind(value?: payments_models_pb.EventProductKindValue): UpdateEventProductInternallyRequest;
  hasKind(): boolean;
  clearKind(): UpdateEventProductInternallyRequest;

  getName(): payments_models_pb.EventProductNameValue | undefined;
  setName(value?: payments_models_pb.EventProductNameValue): UpdateEventProductInternallyRequest;
  hasName(): boolean;
  clearName(): UpdateEventProductInternallyRequest;

  getDescription(): payments_models_pb.EventProductDescriptionValue | undefined;
  setDescription(value?: payments_models_pb.EventProductDescriptionValue): UpdateEventProductInternallyRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateEventProductInternallyRequest;

  getStock(): payments_models_pb.EventProductStockValue | undefined;
  setStock(value?: payments_models_pb.EventProductStockValue): UpdateEventProductInternallyRequest;
  hasStock(): boolean;
  clearStock(): UpdateEventProductInternallyRequest;

  getStatus(): payments_models_pb.EventProductStatusValue | undefined;
  setStatus(value?: payments_models_pb.EventProductStatusValue): UpdateEventProductInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateEventProductInternallyRequest;

  getMetadata(): payments_models_pb.EventProductMetadataValue | undefined;
  setMetadata(value?: payments_models_pb.EventProductMetadataValue): UpdateEventProductInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): UpdateEventProductInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventProductInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventProductInternallyRequest): UpdateEventProductInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventProductInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventProductInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventProductInternallyRequest, reader: jspb.BinaryReader): UpdateEventProductInternallyRequest;
}

export namespace UpdateEventProductInternallyRequest {
  export type AsObject = {
    id: string,
    kind?: payments_models_pb.EventProductKindValue.AsObject,
    name?: payments_models_pb.EventProductNameValue.AsObject,
    description?: payments_models_pb.EventProductDescriptionValue.AsObject,
    stock?: payments_models_pb.EventProductStockValue.AsObject,
    status?: payments_models_pb.EventProductStatusValue.AsObject,
    metadata?: payments_models_pb.EventProductMetadataValue.AsObject,
  }
}

export class UpdateEventProductsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateEventProductInternallyRequest>;
  setRequestsList(value: Array<UpdateEventProductInternallyRequest>): UpdateEventProductsInternallyRequest;
  clearRequestsList(): UpdateEventProductsInternallyRequest;
  addRequests(value?: UpdateEventProductInternallyRequest, index?: number): UpdateEventProductInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventProductsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventProductsInternallyRequest): UpdateEventProductsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventProductsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventProductsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventProductsInternallyRequest, reader: jspb.BinaryReader): UpdateEventProductsInternallyRequest;
}

export namespace UpdateEventProductsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateEventProductInternallyRequest.AsObject>,
  }
}

export class UpdateEventProductsInternallyResponse extends jspb.Message {
  getProductsList(): Array<payments_models_pb.EventProductInfo>;
  setProductsList(value: Array<payments_models_pb.EventProductInfo>): UpdateEventProductsInternallyResponse;
  clearProductsList(): UpdateEventProductsInternallyResponse;
  addProducts(value?: payments_models_pb.EventProductInfo, index?: number): payments_models_pb.EventProductInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventProductsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateEventProductsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventProductsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventProductsInternallyResponse): UpdateEventProductsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventProductsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventProductsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateEventProductsInternallyResponse, reader: jspb.BinaryReader): UpdateEventProductsInternallyResponse;
}

export namespace UpdateEventProductsInternallyResponse {
  export type AsObject = {
    productsList: Array<payments_models_pb.EventProductInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventProductInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventProductInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventProductInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventProductInternallyRequest): DeleteEventProductInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventProductInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventProductInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventProductInternallyRequest, reader: jspb.BinaryReader): DeleteEventProductInternallyRequest;
}

export namespace DeleteEventProductInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventProductsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteEventProductInternallyRequest>;
  setRequestsList(value: Array<DeleteEventProductInternallyRequest>): DeleteEventProductsInternallyRequest;
  clearRequestsList(): DeleteEventProductsInternallyRequest;
  addRequests(value?: DeleteEventProductInternallyRequest, index?: number): DeleteEventProductInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventProductsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventProductsInternallyRequest): DeleteEventProductsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventProductsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventProductsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventProductsInternallyRequest, reader: jspb.BinaryReader): DeleteEventProductsInternallyRequest;
}

export namespace DeleteEventProductsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteEventProductInternallyRequest.AsObject>,
  }
}

export class DeleteEventProductsInternallyResponse extends jspb.Message {
  getProductsList(): Array<payments_models_pb.EventProductInfo>;
  setProductsList(value: Array<payments_models_pb.EventProductInfo>): DeleteEventProductsInternallyResponse;
  clearProductsList(): DeleteEventProductsInternallyResponse;
  addProducts(value?: payments_models_pb.EventProductInfo, index?: number): payments_models_pb.EventProductInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventProductsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteEventProductsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventProductsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventProductsInternallyResponse): DeleteEventProductsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventProductsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventProductsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteEventProductsInternallyResponse, reader: jspb.BinaryReader): DeleteEventProductsInternallyResponse;
}

export namespace DeleteEventProductsInternallyResponse {
  export type AsObject = {
    productsList: Array<payments_models_pb.EventProductInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventTicketVoucherInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventTicketVoucherInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventTicketVoucherInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventTicketVoucherInternallyRequest): GetEventTicketVoucherInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventTicketVoucherInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventTicketVoucherInternallyRequest;
  static deserializeBinaryFromReader(message: GetEventTicketVoucherInternallyRequest, reader: jspb.BinaryReader): GetEventTicketVoucherInternallyRequest;
}

export namespace GetEventTicketVoucherInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetEventTicketVoucherInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventTicketVoucherInfo | undefined;
  setInfo(value?: payments_models_pb.EventTicketVoucherInfo): GetEventTicketVoucherInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventTicketVoucherInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventTicketVoucherInternallyResponse;
  hasError(): boolean;
  clearError(): GetEventTicketVoucherInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventTicketVoucherInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventTicketVoucherInternallyResponse): GetEventTicketVoucherInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventTicketVoucherInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventTicketVoucherInternallyResponse;
  static deserializeBinaryFromReader(message: GetEventTicketVoucherInternallyResponse, reader: jspb.BinaryReader): GetEventTicketVoucherInternallyResponse;
}

export namespace GetEventTicketVoucherInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.EventTicketVoucherInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventTicketVouchersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListEventTicketVouchersInternallyRequest;
  clearIdsList(): ListEventTicketVouchersInternallyRequest;
  addIds(value: string, index?: number): ListEventTicketVouchersInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): ListEventTicketVouchersInternallyRequest;
  clearPidsList(): ListEventTicketVouchersInternallyRequest;
  addPids(value: string, index?: number): ListEventTicketVouchersInternallyRequest;

  getTicketIdsList(): Array<string>;
  setTicketIdsList(value: Array<string>): ListEventTicketVouchersInternallyRequest;
  clearTicketIdsList(): ListEventTicketVouchersInternallyRequest;
  addTicketIds(value: string, index?: number): ListEventTicketVouchersInternallyRequest;

  getStatusesList(): Array<payments_enums_pb.EventTicketVoucherStatus>;
  setStatusesList(value: Array<payments_enums_pb.EventTicketVoucherStatus>): ListEventTicketVouchersInternallyRequest;
  clearStatusesList(): ListEventTicketVouchersInternallyRequest;
  addStatuses(value: payments_enums_pb.EventTicketVoucherStatus, index?: number): ListEventTicketVouchersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListEventTicketVouchersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListEventTicketVouchersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListEventTicketVouchersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventTicketVouchersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventTicketVouchersInternallyRequest): ListEventTicketVouchersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventTicketVouchersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventTicketVouchersInternallyRequest;
  static deserializeBinaryFromReader(message: ListEventTicketVouchersInternallyRequest, reader: jspb.BinaryReader): ListEventTicketVouchersInternallyRequest;
}

export namespace ListEventTicketVouchersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    ticketIdsList: Array<string>,
    statusesList: Array<payments_enums_pb.EventTicketVoucherStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventTicketVouchersInternallyResponse extends jspb.Message {
  getVouchersList(): Array<payments_models_pb.EventTicketVoucherInfo>;
  setVouchersList(value: Array<payments_models_pb.EventTicketVoucherInfo>): ListEventTicketVouchersInternallyResponse;
  clearVouchersList(): ListEventTicketVouchersInternallyResponse;
  addVouchers(value?: payments_models_pb.EventTicketVoucherInfo, index?: number): payments_models_pb.EventTicketVoucherInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventTicketVouchersInternallyResponse;
  hasError(): boolean;
  clearError(): ListEventTicketVouchersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventTicketVouchersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventTicketVouchersInternallyResponse): ListEventTicketVouchersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventTicketVouchersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventTicketVouchersInternallyResponse;
  static deserializeBinaryFromReader(message: ListEventTicketVouchersInternallyResponse, reader: jspb.BinaryReader): ListEventTicketVouchersInternallyResponse;
}

export namespace ListEventTicketVouchersInternallyResponse {
  export type AsObject = {
    vouchersList: Array<payments_models_pb.EventTicketVoucherInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventTicketVouchersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountEventTicketVouchersInternallyRequest;
  clearIdsList(): CountEventTicketVouchersInternallyRequest;
  addIds(value: string, index?: number): CountEventTicketVouchersInternallyRequest;

  getPidsList(): Array<string>;
  setPidsList(value: Array<string>): CountEventTicketVouchersInternallyRequest;
  clearPidsList(): CountEventTicketVouchersInternallyRequest;
  addPids(value: string, index?: number): CountEventTicketVouchersInternallyRequest;

  getTicketIdsList(): Array<string>;
  setTicketIdsList(value: Array<string>): CountEventTicketVouchersInternallyRequest;
  clearTicketIdsList(): CountEventTicketVouchersInternallyRequest;
  addTicketIds(value: string, index?: number): CountEventTicketVouchersInternallyRequest;

  getStatusesList(): Array<payments_enums_pb.EventTicketVoucherStatus>;
  setStatusesList(value: Array<payments_enums_pb.EventTicketVoucherStatus>): CountEventTicketVouchersInternallyRequest;
  clearStatusesList(): CountEventTicketVouchersInternallyRequest;
  addStatuses(value: payments_enums_pb.EventTicketVoucherStatus, index?: number): CountEventTicketVouchersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventTicketVouchersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventTicketVouchersInternallyRequest): CountEventTicketVouchersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventTicketVouchersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventTicketVouchersInternallyRequest;
  static deserializeBinaryFromReader(message: CountEventTicketVouchersInternallyRequest, reader: jspb.BinaryReader): CountEventTicketVouchersInternallyRequest;
}

export namespace CountEventTicketVouchersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    pidsList: Array<string>,
    ticketIdsList: Array<string>,
    statusesList: Array<payments_enums_pb.EventTicketVoucherStatus>,
  }
}

export class CountEventTicketVouchersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventTicketVouchersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventTicketVouchersInternallyResponse;
  hasError(): boolean;
  clearError(): CountEventTicketVouchersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventTicketVouchersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventTicketVouchersInternallyResponse): CountEventTicketVouchersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventTicketVouchersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventTicketVouchersInternallyResponse;
  static deserializeBinaryFromReader(message: CountEventTicketVouchersInternallyResponse, reader: jspb.BinaryReader): CountEventTicketVouchersInternallyResponse;
}

export namespace CountEventTicketVouchersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventTicketVoucherInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateEventTicketVoucherInternallyRequest;

  getPid(): string;
  setPid(value: string): CreateEventTicketVoucherInternallyRequest;

  getTicketId(): string;
  setTicketId(value: string): CreateEventTicketVoucherInternallyRequest;

  getUsages(): number;
  setUsages(value: number): CreateEventTicketVoucherInternallyRequest;

  getAmount(): number;
  setAmount(value: number): CreateEventTicketVoucherInternallyRequest;

  getStatus(): payments_enums_pb.EventTicketVoucherStatus;
  setStatus(value: payments_enums_pb.EventTicketVoucherStatus): CreateEventTicketVoucherInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateEventTicketVoucherInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateEventTicketVoucherInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketVoucherInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketVoucherInternallyRequest): CreateEventTicketVoucherInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketVoucherInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketVoucherInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventTicketVoucherInternallyRequest, reader: jspb.BinaryReader): CreateEventTicketVoucherInternallyRequest;
}

export namespace CreateEventTicketVoucherInternallyRequest {
  export type AsObject = {
    id: string,
    pid: string,
    ticketId: string,
    usages: number,
    amount: number,
    status: payments_enums_pb.EventTicketVoucherStatus,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateEventTicketVouchersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateEventTicketVoucherInternallyRequest>;
  setRequestsList(value: Array<CreateEventTicketVoucherInternallyRequest>): CreateEventTicketVouchersInternallyRequest;
  clearRequestsList(): CreateEventTicketVouchersInternallyRequest;
  addRequests(value?: CreateEventTicketVoucherInternallyRequest, index?: number): CreateEventTicketVoucherInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketVouchersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketVouchersInternallyRequest): CreateEventTicketVouchersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketVouchersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketVouchersInternallyRequest;
  static deserializeBinaryFromReader(message: CreateEventTicketVouchersInternallyRequest, reader: jspb.BinaryReader): CreateEventTicketVouchersInternallyRequest;
}

export namespace CreateEventTicketVouchersInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateEventTicketVoucherInternallyRequest.AsObject>,
  }
}

export class CreateEventTicketVouchersInternallyResponse extends jspb.Message {
  getVouchersList(): Array<payments_models_pb.EventTicketVoucherInfo>;
  setVouchersList(value: Array<payments_models_pb.EventTicketVoucherInfo>): CreateEventTicketVouchersInternallyResponse;
  clearVouchersList(): CreateEventTicketVouchersInternallyResponse;
  addVouchers(value?: payments_models_pb.EventTicketVoucherInfo, index?: number): payments_models_pb.EventTicketVoucherInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventTicketVouchersInternallyResponse;
  hasError(): boolean;
  clearError(): CreateEventTicketVouchersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketVouchersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketVouchersInternallyResponse): CreateEventTicketVouchersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketVouchersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketVouchersInternallyResponse;
  static deserializeBinaryFromReader(message: CreateEventTicketVouchersInternallyResponse, reader: jspb.BinaryReader): CreateEventTicketVouchersInternallyResponse;
}

export namespace CreateEventTicketVouchersInternallyResponse {
  export type AsObject = {
    vouchersList: Array<payments_models_pb.EventTicketVoucherInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventTicketVoucherInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventTicketVoucherInternallyRequest;

  getUsages(): payments_models_pb.EventTicketVoucherUsagesValue | undefined;
  setUsages(value?: payments_models_pb.EventTicketVoucherUsagesValue): UpdateEventTicketVoucherInternallyRequest;
  hasUsages(): boolean;
  clearUsages(): UpdateEventTicketVoucherInternallyRequest;

  getAmount(): payments_models_pb.EventTicketVoucherAmountValue | undefined;
  setAmount(value?: payments_models_pb.EventTicketVoucherAmountValue): UpdateEventTicketVoucherInternallyRequest;
  hasAmount(): boolean;
  clearAmount(): UpdateEventTicketVoucherInternallyRequest;

  getStatus(): payments_models_pb.EventTicketVoucherStatusValue | undefined;
  setStatus(value?: payments_models_pb.EventTicketVoucherStatusValue): UpdateEventTicketVoucherInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateEventTicketVoucherInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketVoucherInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketVoucherInternallyRequest): UpdateEventTicketVoucherInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketVoucherInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketVoucherInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventTicketVoucherInternallyRequest, reader: jspb.BinaryReader): UpdateEventTicketVoucherInternallyRequest;
}

export namespace UpdateEventTicketVoucherInternallyRequest {
  export type AsObject = {
    id: string,
    usages?: payments_models_pb.EventTicketVoucherUsagesValue.AsObject,
    amount?: payments_models_pb.EventTicketVoucherAmountValue.AsObject,
    status?: payments_models_pb.EventTicketVoucherStatusValue.AsObject,
  }
}

export class UpdateEventTicketVouchersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateEventTicketVoucherInternallyRequest>;
  setRequestsList(value: Array<UpdateEventTicketVoucherInternallyRequest>): UpdateEventTicketVouchersInternallyRequest;
  clearRequestsList(): UpdateEventTicketVouchersInternallyRequest;
  addRequests(value?: UpdateEventTicketVoucherInternallyRequest, index?: number): UpdateEventTicketVoucherInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketVouchersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketVouchersInternallyRequest): UpdateEventTicketVouchersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketVouchersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketVouchersInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateEventTicketVouchersInternallyRequest, reader: jspb.BinaryReader): UpdateEventTicketVouchersInternallyRequest;
}

export namespace UpdateEventTicketVouchersInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateEventTicketVoucherInternallyRequest.AsObject>,
  }
}

export class UpdateEventTicketVouchersInternallyResponse extends jspb.Message {
  getVouchersList(): Array<payments_models_pb.EventTicketVoucherInfo>;
  setVouchersList(value: Array<payments_models_pb.EventTicketVoucherInfo>): UpdateEventTicketVouchersInternallyResponse;
  clearVouchersList(): UpdateEventTicketVouchersInternallyResponse;
  addVouchers(value?: payments_models_pb.EventTicketVoucherInfo, index?: number): payments_models_pb.EventTicketVoucherInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventTicketVouchersInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateEventTicketVouchersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketVouchersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketVouchersInternallyResponse): UpdateEventTicketVouchersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketVouchersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketVouchersInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateEventTicketVouchersInternallyResponse, reader: jspb.BinaryReader): UpdateEventTicketVouchersInternallyResponse;
}

export namespace UpdateEventTicketVouchersInternallyResponse {
  export type AsObject = {
    vouchersList: Array<payments_models_pb.EventTicketVoucherInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventTicketVoucherInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventTicketVoucherInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketVoucherInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketVoucherInternallyRequest): DeleteEventTicketVoucherInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketVoucherInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketVoucherInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventTicketVoucherInternallyRequest, reader: jspb.BinaryReader): DeleteEventTicketVoucherInternallyRequest;
}

export namespace DeleteEventTicketVoucherInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventTicketVouchersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteEventTicketVoucherInternallyRequest>;
  setRequestsList(value: Array<DeleteEventTicketVoucherInternallyRequest>): DeleteEventTicketVouchersInternallyRequest;
  clearRequestsList(): DeleteEventTicketVouchersInternallyRequest;
  addRequests(value?: DeleteEventTicketVoucherInternallyRequest, index?: number): DeleteEventTicketVoucherInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketVouchersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketVouchersInternallyRequest): DeleteEventTicketVouchersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketVouchersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketVouchersInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteEventTicketVouchersInternallyRequest, reader: jspb.BinaryReader): DeleteEventTicketVouchersInternallyRequest;
}

export namespace DeleteEventTicketVouchersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteEventTicketVoucherInternallyRequest.AsObject>,
  }
}

export class DeleteEventTicketVouchersInternallyResponse extends jspb.Message {
  getVouchersList(): Array<payments_models_pb.EventTicketVoucherInfo>;
  setVouchersList(value: Array<payments_models_pb.EventTicketVoucherInfo>): DeleteEventTicketVouchersInternallyResponse;
  clearVouchersList(): DeleteEventTicketVouchersInternallyResponse;
  addVouchers(value?: payments_models_pb.EventTicketVoucherInfo, index?: number): payments_models_pb.EventTicketVoucherInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventTicketVouchersInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteEventTicketVouchersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketVouchersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketVouchersInternallyResponse): DeleteEventTicketVouchersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketVouchersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketVouchersInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteEventTicketVouchersInternallyResponse, reader: jspb.BinaryReader): DeleteEventTicketVouchersInternallyResponse;
}

export namespace DeleteEventTicketVouchersInternallyResponse {
  export type AsObject = {
    vouchersList: Array<payments_models_pb.EventTicketVoucherInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetPartnerInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetPartnerInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetPartnerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPartnerInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPartnerInternallyRequest): GetPartnerInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetPartnerInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPartnerInternallyRequest;
  static deserializeBinaryFromReader(message: GetPartnerInternallyRequest, reader: jspb.BinaryReader): GetPartnerInternallyRequest;
}

export namespace GetPartnerInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
  }
}

export class GetPartnerInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.PartnerInfo | undefined;
  setInfo(value?: payments_models_pb.PartnerInfo): GetPartnerInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetPartnerInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetPartnerInternallyResponse;
  hasError(): boolean;
  clearError(): GetPartnerInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPartnerInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPartnerInternallyResponse): GetPartnerInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetPartnerInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPartnerInternallyResponse;
  static deserializeBinaryFromReader(message: GetPartnerInternallyResponse, reader: jspb.BinaryReader): GetPartnerInternallyResponse;
}

export namespace GetPartnerInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.PartnerInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListPartnersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListPartnersInternallyRequest;
  clearIdsList(): ListPartnersInternallyRequest;
  addIds(value: string, index?: number): ListPartnersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListPartnersInternallyRequest;
  clearUserIdsList(): ListPartnersInternallyRequest;
  addUserIds(value: string, index?: number): ListPartnersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListPartnersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListPartnersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListPartnersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnersInternallyRequest): ListPartnersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListPartnersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnersInternallyRequest;
  static deserializeBinaryFromReader(message: ListPartnersInternallyRequest, reader: jspb.BinaryReader): ListPartnersInternallyRequest;
}

export namespace ListPartnersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListPartnersInternallyResponse extends jspb.Message {
  getPartnersList(): Array<payments_models_pb.PartnerInfo>;
  setPartnersList(value: Array<payments_models_pb.PartnerInfo>): ListPartnersInternallyResponse;
  clearPartnersList(): ListPartnersInternallyResponse;
  addPartners(value?: payments_models_pb.PartnerInfo, index?: number): payments_models_pb.PartnerInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListPartnersInternallyResponse;
  hasError(): boolean;
  clearError(): ListPartnersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnersInternallyResponse): ListPartnersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListPartnersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnersInternallyResponse;
  static deserializeBinaryFromReader(message: ListPartnersInternallyResponse, reader: jspb.BinaryReader): ListPartnersInternallyResponse;
}

export namespace ListPartnersInternallyResponse {
  export type AsObject = {
    partnersList: Array<payments_models_pb.PartnerInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountPartnersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountPartnersInternallyRequest;
  clearIdsList(): CountPartnersInternallyRequest;
  addIds(value: string, index?: number): CountPartnersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountPartnersInternallyRequest;
  clearUserIdsList(): CountPartnersInternallyRequest;
  addUserIds(value: string, index?: number): CountPartnersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountPartnersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountPartnersInternallyRequest): CountPartnersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountPartnersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountPartnersInternallyRequest;
  static deserializeBinaryFromReader(message: CountPartnersInternallyRequest, reader: jspb.BinaryReader): CountPartnersInternallyRequest;
}

export namespace CountPartnersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
  }
}

export class CountPartnersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountPartnersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountPartnersInternallyResponse;
  hasError(): boolean;
  clearError(): CountPartnersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountPartnersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountPartnersInternallyResponse): CountPartnersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountPartnersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountPartnersInternallyResponse;
  static deserializeBinaryFromReader(message: CountPartnersInternallyResponse, reader: jspb.BinaryReader): CountPartnersInternallyResponse;
}

export namespace CountPartnersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreatePartnerInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreatePartnerInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreatePartnerInternallyRequest;

  getCountry(): string;
  setCountry(value: string): CreatePartnerInternallyRequest;

  getCurrency(): payments_enums_pb.Currency;
  setCurrency(value: payments_enums_pb.Currency): CreatePartnerInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreatePartnerInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreatePartnerInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreatePartnerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnerInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnerInternallyRequest): CreatePartnerInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePartnerInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnerInternallyRequest;
  static deserializeBinaryFromReader(message: CreatePartnerInternallyRequest, reader: jspb.BinaryReader): CreatePartnerInternallyRequest;
}

export namespace CreatePartnerInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    country: string,
    currency: payments_enums_pb.Currency,
    region: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreatePartnersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreatePartnerInternallyRequest>;
  setRequestsList(value: Array<CreatePartnerInternallyRequest>): CreatePartnersInternallyRequest;
  clearRequestsList(): CreatePartnersInternallyRequest;
  addRequests(value?: CreatePartnerInternallyRequest, index?: number): CreatePartnerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnersInternallyRequest): CreatePartnersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePartnersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnersInternallyRequest;
  static deserializeBinaryFromReader(message: CreatePartnersInternallyRequest, reader: jspb.BinaryReader): CreatePartnersInternallyRequest;
}

export namespace CreatePartnersInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreatePartnerInternallyRequest.AsObject>,
  }
}

export class CreatePartnersInternallyResponse extends jspb.Message {
  getPartnersList(): Array<payments_models_pb.PartnerInfo>;
  setPartnersList(value: Array<payments_models_pb.PartnerInfo>): CreatePartnersInternallyResponse;
  clearPartnersList(): CreatePartnersInternallyResponse;
  addPartners(value?: payments_models_pb.PartnerInfo, index?: number): payments_models_pb.PartnerInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreatePartnersInternallyResponse;
  hasError(): boolean;
  clearError(): CreatePartnersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePartnersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePartnersInternallyResponse): CreatePartnersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePartnersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePartnersInternallyResponse;
  static deserializeBinaryFromReader(message: CreatePartnersInternallyResponse, reader: jspb.BinaryReader): CreatePartnersInternallyResponse;
}

export namespace CreatePartnersInternallyResponse {
  export type AsObject = {
    partnersList: Array<payments_models_pb.PartnerInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeletePartnerInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeletePartnerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePartnerInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePartnerInternallyRequest): DeletePartnerInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePartnerInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePartnerInternallyRequest;
  static deserializeBinaryFromReader(message: DeletePartnerInternallyRequest, reader: jspb.BinaryReader): DeletePartnerInternallyRequest;
}

export namespace DeletePartnerInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeletePartnersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeletePartnerInternallyRequest>;
  setRequestsList(value: Array<DeletePartnerInternallyRequest>): DeletePartnersInternallyRequest;
  clearRequestsList(): DeletePartnersInternallyRequest;
  addRequests(value?: DeletePartnerInternallyRequest, index?: number): DeletePartnerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePartnersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePartnersInternallyRequest): DeletePartnersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePartnersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePartnersInternallyRequest;
  static deserializeBinaryFromReader(message: DeletePartnersInternallyRequest, reader: jspb.BinaryReader): DeletePartnersInternallyRequest;
}

export namespace DeletePartnersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeletePartnerInternallyRequest.AsObject>,
  }
}

export class DeletePartnersInternallyResponse extends jspb.Message {
  getPartnersList(): Array<payments_models_pb.PartnerInfo>;
  setPartnersList(value: Array<payments_models_pb.PartnerInfo>): DeletePartnersInternallyResponse;
  clearPartnersList(): DeletePartnersInternallyResponse;
  addPartners(value?: payments_models_pb.PartnerInfo, index?: number): payments_models_pb.PartnerInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeletePartnersInternallyResponse;
  hasError(): boolean;
  clearError(): DeletePartnersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePartnersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePartnersInternallyResponse): DeletePartnersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePartnersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePartnersInternallyResponse;
  static deserializeBinaryFromReader(message: DeletePartnersInternallyResponse, reader: jspb.BinaryReader): DeletePartnersInternallyResponse;
}

export namespace DeletePartnersInternallyResponse {
  export type AsObject = {
    partnersList: Array<payments_models_pb.PartnerInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerInternallyRequest;

  getUserId(): string;
  setUserId(value: string): GetCustomerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerInternallyRequest): GetCustomerInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerInternallyRequest;
  static deserializeBinaryFromReader(message: GetCustomerInternallyRequest, reader: jspb.BinaryReader): GetCustomerInternallyRequest;
}

export namespace GetCustomerInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
  }
}

export class GetCustomerInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerInfo): GetCustomerInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerInternallyResponse;
  hasError(): boolean;
  clearError(): GetCustomerInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerInternallyResponse): GetCustomerInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerInternallyResponse;
  static deserializeBinaryFromReader(message: GetCustomerInternallyResponse, reader: jspb.BinaryReader): GetCustomerInternallyResponse;
}

export namespace GetCustomerInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListCustomersInternallyRequest;
  clearIdsList(): ListCustomersInternallyRequest;
  addIds(value: string, index?: number): ListCustomersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListCustomersInternallyRequest;
  clearUserIdsList(): ListCustomersInternallyRequest;
  addUserIds(value: string, index?: number): ListCustomersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListCustomersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomersInternallyRequest): ListCustomersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomersInternallyRequest;
  static deserializeBinaryFromReader(message: ListCustomersInternallyRequest, reader: jspb.BinaryReader): ListCustomersInternallyRequest;
}

export namespace ListCustomersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomersInternallyResponse extends jspb.Message {
  getCustomersList(): Array<payments_models_pb.CustomerInfo>;
  setCustomersList(value: Array<payments_models_pb.CustomerInfo>): ListCustomersInternallyResponse;
  clearCustomersList(): ListCustomersInternallyResponse;
  addCustomers(value?: payments_models_pb.CustomerInfo, index?: number): payments_models_pb.CustomerInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomersInternallyResponse;
  hasError(): boolean;
  clearError(): ListCustomersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomersInternallyResponse): ListCustomersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomersInternallyResponse;
  static deserializeBinaryFromReader(message: ListCustomersInternallyResponse, reader: jspb.BinaryReader): ListCustomersInternallyResponse;
}

export namespace ListCustomersInternallyResponse {
  export type AsObject = {
    customersList: Array<payments_models_pb.CustomerInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountCustomersInternallyRequest;
  clearIdsList(): CountCustomersInternallyRequest;
  addIds(value: string, index?: number): CountCustomersInternallyRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountCustomersInternallyRequest;
  clearUserIdsList(): CountCustomersInternallyRequest;
  addUserIds(value: string, index?: number): CountCustomersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomersInternallyRequest): CountCustomersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomersInternallyRequest;
  static deserializeBinaryFromReader(message: CountCustomersInternallyRequest, reader: jspb.BinaryReader): CountCustomersInternallyRequest;
}

export namespace CountCustomersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
  }
}

export class CountCustomersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomersInternallyResponse;
  hasError(): boolean;
  clearError(): CountCustomersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomersInternallyResponse): CountCustomersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomersInternallyResponse;
  static deserializeBinaryFromReader(message: CountCustomersInternallyResponse, reader: jspb.BinaryReader): CountCustomersInternallyResponse;
}

export namespace CountCustomersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateCustomerInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateCustomerInternallyRequest;

  getUserId(): string;
  setUserId(value: string): CreateCustomerInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateCustomerInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateCustomerInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateCustomerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerInternallyRequest): CreateCustomerInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerInternallyRequest, reader: jspb.BinaryReader): CreateCustomerInternallyRequest;
}

export namespace CreateCustomerInternallyRequest {
  export type AsObject = {
    id: string,
    userId: string,
    region: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateCustomersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateCustomerInternallyRequest>;
  setRequestsList(value: Array<CreateCustomerInternallyRequest>): CreateCustomersInternallyRequest;
  clearRequestsList(): CreateCustomersInternallyRequest;
  addRequests(value?: CreateCustomerInternallyRequest, index?: number): CreateCustomerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomersInternallyRequest): CreateCustomersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomersInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomersInternallyRequest, reader: jspb.BinaryReader): CreateCustomersInternallyRequest;
}

export namespace CreateCustomersInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateCustomerInternallyRequest.AsObject>,
  }
}

export class CreateCustomersInternallyResponse extends jspb.Message {
  getCustomersList(): Array<payments_models_pb.CustomerInfo>;
  setCustomersList(value: Array<payments_models_pb.CustomerInfo>): CreateCustomersInternallyResponse;
  clearCustomersList(): CreateCustomersInternallyResponse;
  addCustomers(value?: payments_models_pb.CustomerInfo, index?: number): payments_models_pb.CustomerInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateCustomersInternallyResponse;
  hasError(): boolean;
  clearError(): CreateCustomersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomersInternallyResponse): CreateCustomersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCustomersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomersInternallyResponse;
  static deserializeBinaryFromReader(message: CreateCustomersInternallyResponse, reader: jspb.BinaryReader): CreateCustomersInternallyResponse;
}

export namespace CreateCustomersInternallyResponse {
  export type AsObject = {
    customersList: Array<payments_models_pb.CustomerInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteCustomerInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCustomerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerInternallyRequest): DeleteCustomerInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerInternallyRequest, reader: jspb.BinaryReader): DeleteCustomerInternallyRequest;
}

export namespace DeleteCustomerInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteCustomersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteCustomerInternallyRequest>;
  setRequestsList(value: Array<DeleteCustomerInternallyRequest>): DeleteCustomersInternallyRequest;
  clearRequestsList(): DeleteCustomersInternallyRequest;
  addRequests(value?: DeleteCustomerInternallyRequest, index?: number): DeleteCustomerInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomersInternallyRequest): DeleteCustomersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomersInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteCustomersInternallyRequest, reader: jspb.BinaryReader): DeleteCustomersInternallyRequest;
}

export namespace DeleteCustomersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteCustomerInternallyRequest.AsObject>,
  }
}

export class DeleteCustomersInternallyResponse extends jspb.Message {
  getCustomersList(): Array<payments_models_pb.CustomerInfo>;
  setCustomersList(value: Array<payments_models_pb.CustomerInfo>): DeleteCustomersInternallyResponse;
  clearCustomersList(): DeleteCustomersInternallyResponse;
  addCustomers(value?: payments_models_pb.CustomerInfo, index?: number): payments_models_pb.CustomerInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteCustomersInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteCustomersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomersInternallyResponse): DeleteCustomersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomersInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteCustomersInternallyResponse, reader: jspb.BinaryReader): DeleteCustomersInternallyResponse;
}

export namespace DeleteCustomersInternallyResponse {
  export type AsObject = {
    customersList: Array<payments_models_pb.CustomerInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerOrderInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerOrderInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerOrderInternallyRequest): GetCustomerOrderInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerOrderInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerOrderInternallyRequest;
  static deserializeBinaryFromReader(message: GetCustomerOrderInternallyRequest, reader: jspb.BinaryReader): GetCustomerOrderInternallyRequest;
}

export namespace GetCustomerOrderInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetCustomerOrderInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerOrderInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerOrderInfo): GetCustomerOrderInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerOrderInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerOrderInternallyResponse;
  hasError(): boolean;
  clearError(): GetCustomerOrderInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerOrderInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerOrderInternallyResponse): GetCustomerOrderInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerOrderInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerOrderInternallyResponse;
  static deserializeBinaryFromReader(message: GetCustomerOrderInternallyResponse, reader: jspb.BinaryReader): GetCustomerOrderInternallyResponse;
}

export namespace GetCustomerOrderInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerOrderInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerOrdersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListCustomerOrdersInternallyRequest;
  clearIdsList(): ListCustomerOrdersInternallyRequest;
  addIds(value: string, index?: number): ListCustomerOrdersInternallyRequest;

  getPartnerIdsList(): Array<string>;
  setPartnerIdsList(value: Array<string>): ListCustomerOrdersInternallyRequest;
  clearPartnerIdsList(): ListCustomerOrdersInternallyRequest;
  addPartnerIds(value: string, index?: number): ListCustomerOrdersInternallyRequest;

  getCustomerIdsList(): Array<string>;
  setCustomerIdsList(value: Array<string>): ListCustomerOrdersInternallyRequest;
  clearCustomerIdsList(): ListCustomerOrdersInternallyRequest;
  addCustomerIds(value: string, index?: number): ListCustomerOrdersInternallyRequest;

  getTransactionIdsList(): Array<string>;
  setTransactionIdsList(value: Array<string>): ListCustomerOrdersInternallyRequest;
  clearTransactionIdsList(): ListCustomerOrdersInternallyRequest;
  addTransactionIds(value: string, index?: number): ListCustomerOrdersInternallyRequest;

  getTypesList(): Array<payments_enums_pb.CustomerOrderType>;
  setTypesList(value: Array<payments_enums_pb.CustomerOrderType>): ListCustomerOrdersInternallyRequest;
  clearTypesList(): ListCustomerOrdersInternallyRequest;
  addTypes(value: payments_enums_pb.CustomerOrderType, index?: number): ListCustomerOrdersInternallyRequest;

  getStatusesList(): Array<payments_enums_pb.CustomerOrderStatus>;
  setStatusesList(value: Array<payments_enums_pb.CustomerOrderStatus>): ListCustomerOrdersInternallyRequest;
  clearStatusesList(): ListCustomerOrdersInternallyRequest;
  addStatuses(value: payments_enums_pb.CustomerOrderStatus, index?: number): ListCustomerOrdersInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListCustomerOrdersInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerOrdersInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerOrdersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerOrdersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerOrdersInternallyRequest): ListCustomerOrdersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerOrdersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerOrdersInternallyRequest;
  static deserializeBinaryFromReader(message: ListCustomerOrdersInternallyRequest, reader: jspb.BinaryReader): ListCustomerOrdersInternallyRequest;
}

export namespace ListCustomerOrdersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    partnerIdsList: Array<string>,
    customerIdsList: Array<string>,
    transactionIdsList: Array<string>,
    typesList: Array<payments_enums_pb.CustomerOrderType>,
    statusesList: Array<payments_enums_pb.CustomerOrderStatus>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerOrdersInternallyResponse extends jspb.Message {
  getOrdersList(): Array<payments_models_pb.CustomerOrderInfo>;
  setOrdersList(value: Array<payments_models_pb.CustomerOrderInfo>): ListCustomerOrdersInternallyResponse;
  clearOrdersList(): ListCustomerOrdersInternallyResponse;
  addOrders(value?: payments_models_pb.CustomerOrderInfo, index?: number): payments_models_pb.CustomerOrderInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerOrdersInternallyResponse;
  hasError(): boolean;
  clearError(): ListCustomerOrdersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerOrdersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerOrdersInternallyResponse): ListCustomerOrdersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerOrdersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerOrdersInternallyResponse;
  static deserializeBinaryFromReader(message: ListCustomerOrdersInternallyResponse, reader: jspb.BinaryReader): ListCustomerOrdersInternallyResponse;
}

export namespace ListCustomerOrdersInternallyResponse {
  export type AsObject = {
    ordersList: Array<payments_models_pb.CustomerOrderInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerOrdersInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountCustomerOrdersInternallyRequest;
  clearIdsList(): CountCustomerOrdersInternallyRequest;
  addIds(value: string, index?: number): CountCustomerOrdersInternallyRequest;

  getPartnerIdsList(): Array<string>;
  setPartnerIdsList(value: Array<string>): CountCustomerOrdersInternallyRequest;
  clearPartnerIdsList(): CountCustomerOrdersInternallyRequest;
  addPartnerIds(value: string, index?: number): CountCustomerOrdersInternallyRequest;

  getCustomerIdsList(): Array<string>;
  setCustomerIdsList(value: Array<string>): CountCustomerOrdersInternallyRequest;
  clearCustomerIdsList(): CountCustomerOrdersInternallyRequest;
  addCustomerIds(value: string, index?: number): CountCustomerOrdersInternallyRequest;

  getTransactionIdsList(): Array<string>;
  setTransactionIdsList(value: Array<string>): CountCustomerOrdersInternallyRequest;
  clearTransactionIdsList(): CountCustomerOrdersInternallyRequest;
  addTransactionIds(value: string, index?: number): CountCustomerOrdersInternallyRequest;

  getTypesList(): Array<payments_enums_pb.CustomerOrderType>;
  setTypesList(value: Array<payments_enums_pb.CustomerOrderType>): CountCustomerOrdersInternallyRequest;
  clearTypesList(): CountCustomerOrdersInternallyRequest;
  addTypes(value: payments_enums_pb.CustomerOrderType, index?: number): CountCustomerOrdersInternallyRequest;

  getStatusesList(): Array<payments_enums_pb.CustomerOrderStatus>;
  setStatusesList(value: Array<payments_enums_pb.CustomerOrderStatus>): CountCustomerOrdersInternallyRequest;
  clearStatusesList(): CountCustomerOrdersInternallyRequest;
  addStatuses(value: payments_enums_pb.CustomerOrderStatus, index?: number): CountCustomerOrdersInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerOrdersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerOrdersInternallyRequest): CountCustomerOrdersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerOrdersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerOrdersInternallyRequest;
  static deserializeBinaryFromReader(message: CountCustomerOrdersInternallyRequest, reader: jspb.BinaryReader): CountCustomerOrdersInternallyRequest;
}

export namespace CountCustomerOrdersInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    partnerIdsList: Array<string>,
    customerIdsList: Array<string>,
    transactionIdsList: Array<string>,
    typesList: Array<payments_enums_pb.CustomerOrderType>,
    statusesList: Array<payments_enums_pb.CustomerOrderStatus>,
  }
}

export class CountCustomerOrdersInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerOrdersInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerOrdersInternallyResponse;
  hasError(): boolean;
  clearError(): CountCustomerOrdersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerOrdersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerOrdersInternallyResponse): CountCustomerOrdersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerOrdersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerOrdersInternallyResponse;
  static deserializeBinaryFromReader(message: CountCustomerOrdersInternallyResponse, reader: jspb.BinaryReader): CountCustomerOrdersInternallyResponse;
}

export namespace CountCustomerOrdersInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateCustomerOrderInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateCustomerOrderInternallyRequest;

  getPartnerId(): string;
  setPartnerId(value: string): CreateCustomerOrderInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): CreateCustomerOrderInternallyRequest;

  getTransactionId(): string;
  setTransactionId(value: string): CreateCustomerOrderInternallyRequest;

  getCurrency(): payments_enums_pb.Currency;
  setCurrency(value: payments_enums_pb.Currency): CreateCustomerOrderInternallyRequest;

  getType(): payments_enums_pb.CustomerOrderType;
  setType(value: payments_enums_pb.CustomerOrderType): CreateCustomerOrderInternallyRequest;

  getStatus(): payments_enums_pb.CustomerOrderStatus;
  setStatus(value: payments_enums_pb.CustomerOrderStatus): CreateCustomerOrderInternallyRequest;

  getMetadata(): payments_models_pb.CustomerOrderMetadata | undefined;
  setMetadata(value?: payments_models_pb.CustomerOrderMetadata): CreateCustomerOrderInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateCustomerOrderInternallyRequest;

  getRegion(): string;
  setRegion(value: string): CreateCustomerOrderInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateCustomerOrderInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerOrderInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerOrderInternallyRequest): CreateCustomerOrderInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerOrderInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerOrderInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerOrderInternallyRequest, reader: jspb.BinaryReader): CreateCustomerOrderInternallyRequest;
}

export namespace CreateCustomerOrderInternallyRequest {
  export type AsObject = {
    id: string,
    partnerId: string,
    customerId: string,
    transactionId: string,
    currency: payments_enums_pb.Currency,
    type: payments_enums_pb.CustomerOrderType,
    status: payments_enums_pb.CustomerOrderStatus,
    metadata?: payments_models_pb.CustomerOrderMetadata.AsObject,
    region: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateCustomerOrdersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateCustomerOrderInternallyRequest>;
  setRequestsList(value: Array<CreateCustomerOrderInternallyRequest>): CreateCustomerOrdersInternallyRequest;
  clearRequestsList(): CreateCustomerOrdersInternallyRequest;
  addRequests(value?: CreateCustomerOrderInternallyRequest, index?: number): CreateCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerOrdersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerOrdersInternallyRequest): CreateCustomerOrdersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerOrdersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerOrdersInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerOrdersInternallyRequest, reader: jspb.BinaryReader): CreateCustomerOrdersInternallyRequest;
}

export namespace CreateCustomerOrdersInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateCustomerOrderInternallyRequest.AsObject>,
  }
}

export class CreateCustomerOrdersInternallyResponse extends jspb.Message {
  getOrdersList(): Array<payments_models_pb.CustomerOrderInfo>;
  setOrdersList(value: Array<payments_models_pb.CustomerOrderInfo>): CreateCustomerOrdersInternallyResponse;
  clearOrdersList(): CreateCustomerOrdersInternallyResponse;
  addOrders(value?: payments_models_pb.CustomerOrderInfo, index?: number): payments_models_pb.CustomerOrderInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateCustomerOrdersInternallyResponse;
  hasError(): boolean;
  clearError(): CreateCustomerOrdersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerOrdersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerOrdersInternallyResponse): CreateCustomerOrdersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerOrdersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerOrdersInternallyResponse;
  static deserializeBinaryFromReader(message: CreateCustomerOrdersInternallyResponse, reader: jspb.BinaryReader): CreateCustomerOrdersInternallyResponse;
}

export namespace CreateCustomerOrdersInternallyResponse {
  export type AsObject = {
    ordersList: Array<payments_models_pb.CustomerOrderInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateCustomerOrderInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCustomerOrderInternallyRequest;

  getStatus(): payments_models_pb.CustomerOrderStatusValue | undefined;
  setStatus(value?: payments_models_pb.CustomerOrderStatusValue): UpdateCustomerOrderInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateCustomerOrderInternallyRequest;

  getMetadata(): payments_models_pb.CustomerOrderMetadataValue | undefined;
  setMetadata(value?: payments_models_pb.CustomerOrderMetadataValue): UpdateCustomerOrderInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): UpdateCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerOrderInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerOrderInternallyRequest): UpdateCustomerOrderInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerOrderInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerOrderInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerOrderInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerOrderInternallyRequest;
}

export namespace UpdateCustomerOrderInternallyRequest {
  export type AsObject = {
    id: string,
    status?: payments_models_pb.CustomerOrderStatusValue.AsObject,
    metadata?: payments_models_pb.CustomerOrderMetadataValue.AsObject,
  }
}

export class UpdateCustomerOrdersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateCustomerOrderInternallyRequest>;
  setRequestsList(value: Array<UpdateCustomerOrderInternallyRequest>): UpdateCustomerOrdersInternallyRequest;
  clearRequestsList(): UpdateCustomerOrdersInternallyRequest;
  addRequests(value?: UpdateCustomerOrderInternallyRequest, index?: number): UpdateCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerOrdersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerOrdersInternallyRequest): UpdateCustomerOrdersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerOrdersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerOrdersInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerOrdersInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerOrdersInternallyRequest;
}

export namespace UpdateCustomerOrdersInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateCustomerOrderInternallyRequest.AsObject>,
  }
}

export class UpdateCustomerOrdersInternallyResponse extends jspb.Message {
  getOrdersList(): Array<payments_models_pb.CustomerOrderInfo>;
  setOrdersList(value: Array<payments_models_pb.CustomerOrderInfo>): UpdateCustomerOrdersInternallyResponse;
  clearOrdersList(): UpdateCustomerOrdersInternallyResponse;
  addOrders(value?: payments_models_pb.CustomerOrderInfo, index?: number): payments_models_pb.CustomerOrderInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateCustomerOrdersInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateCustomerOrdersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerOrdersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerOrdersInternallyResponse): UpdateCustomerOrdersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerOrdersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerOrdersInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerOrdersInternallyResponse, reader: jspb.BinaryReader): UpdateCustomerOrdersInternallyResponse;
}

export namespace UpdateCustomerOrdersInternallyResponse {
  export type AsObject = {
    ordersList: Array<payments_models_pb.CustomerOrderInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteCustomerOrderInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerOrderInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerOrderInternallyRequest): DeleteCustomerOrderInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerOrderInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerOrderInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerOrderInternallyRequest, reader: jspb.BinaryReader): DeleteCustomerOrderInternallyRequest;
}

export namespace DeleteCustomerOrderInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteCustomerOrdersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteCustomerOrderInternallyRequest>;
  setRequestsList(value: Array<DeleteCustomerOrderInternallyRequest>): DeleteCustomerOrdersInternallyRequest;
  clearRequestsList(): DeleteCustomerOrdersInternallyRequest;
  addRequests(value?: DeleteCustomerOrderInternallyRequest, index?: number): DeleteCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerOrdersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerOrdersInternallyRequest): DeleteCustomerOrdersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerOrdersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerOrdersInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerOrdersInternallyRequest, reader: jspb.BinaryReader): DeleteCustomerOrdersInternallyRequest;
}

export namespace DeleteCustomerOrdersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteCustomerOrderInternallyRequest.AsObject>,
  }
}

export class DeleteCustomerOrdersInternallyResponse extends jspb.Message {
  getOrdersList(): Array<payments_models_pb.CustomerOrderInfo>;
  setOrdersList(value: Array<payments_models_pb.CustomerOrderInfo>): DeleteCustomerOrdersInternallyResponse;
  clearOrdersList(): DeleteCustomerOrdersInternallyResponse;
  addOrders(value?: payments_models_pb.CustomerOrderInfo, index?: number): payments_models_pb.CustomerOrderInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteCustomerOrdersInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteCustomerOrdersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerOrdersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerOrdersInternallyResponse): DeleteCustomerOrdersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerOrdersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerOrdersInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteCustomerOrdersInternallyResponse, reader: jspb.BinaryReader): DeleteCustomerOrdersInternallyResponse;
}

export namespace DeleteCustomerOrdersInternallyResponse {
  export type AsObject = {
    ordersList: Array<payments_models_pb.CustomerOrderInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class AcceptCustomerOrderInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): AcceptCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptCustomerOrderInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptCustomerOrderInternallyRequest): AcceptCustomerOrderInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptCustomerOrderInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptCustomerOrderInternallyRequest;
  static deserializeBinaryFromReader(message: AcceptCustomerOrderInternallyRequest, reader: jspb.BinaryReader): AcceptCustomerOrderInternallyRequest;
}

export namespace AcceptCustomerOrderInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class AcceptCustomerOrdersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<AcceptCustomerOrderInternallyRequest>;
  setRequestsList(value: Array<AcceptCustomerOrderInternallyRequest>): AcceptCustomerOrdersInternallyRequest;
  clearRequestsList(): AcceptCustomerOrdersInternallyRequest;
  addRequests(value?: AcceptCustomerOrderInternallyRequest, index?: number): AcceptCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptCustomerOrdersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptCustomerOrdersInternallyRequest): AcceptCustomerOrdersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptCustomerOrdersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptCustomerOrdersInternallyRequest;
  static deserializeBinaryFromReader(message: AcceptCustomerOrdersInternallyRequest, reader: jspb.BinaryReader): AcceptCustomerOrdersInternallyRequest;
}

export namespace AcceptCustomerOrdersInternallyRequest {
  export type AsObject = {
    requestsList: Array<AcceptCustomerOrderInternallyRequest.AsObject>,
  }
}

export class AcceptCustomerOrdersInternallyResponse extends jspb.Message {
  getOrdersList(): Array<payments_models_pb.CustomerOrderInfo>;
  setOrdersList(value: Array<payments_models_pb.CustomerOrderInfo>): AcceptCustomerOrdersInternallyResponse;
  clearOrdersList(): AcceptCustomerOrdersInternallyResponse;
  addOrders(value?: payments_models_pb.CustomerOrderInfo, index?: number): payments_models_pb.CustomerOrderInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): AcceptCustomerOrdersInternallyResponse;
  hasError(): boolean;
  clearError(): AcceptCustomerOrdersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptCustomerOrdersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptCustomerOrdersInternallyResponse): AcceptCustomerOrdersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: AcceptCustomerOrdersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptCustomerOrdersInternallyResponse;
  static deserializeBinaryFromReader(message: AcceptCustomerOrdersInternallyResponse, reader: jspb.BinaryReader): AcceptCustomerOrdersInternallyResponse;
}

export namespace AcceptCustomerOrdersInternallyResponse {
  export type AsObject = {
    ordersList: Array<payments_models_pb.CustomerOrderInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeclineCustomerOrderInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeclineCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclineCustomerOrderInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeclineCustomerOrderInternallyRequest): DeclineCustomerOrderInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeclineCustomerOrderInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclineCustomerOrderInternallyRequest;
  static deserializeBinaryFromReader(message: DeclineCustomerOrderInternallyRequest, reader: jspb.BinaryReader): DeclineCustomerOrderInternallyRequest;
}

export namespace DeclineCustomerOrderInternallyRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeclineCustomerOrdersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeclineCustomerOrderInternallyRequest>;
  setRequestsList(value: Array<DeclineCustomerOrderInternallyRequest>): DeclineCustomerOrdersInternallyRequest;
  clearRequestsList(): DeclineCustomerOrdersInternallyRequest;
  addRequests(value?: DeclineCustomerOrderInternallyRequest, index?: number): DeclineCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclineCustomerOrdersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeclineCustomerOrdersInternallyRequest): DeclineCustomerOrdersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeclineCustomerOrdersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclineCustomerOrdersInternallyRequest;
  static deserializeBinaryFromReader(message: DeclineCustomerOrdersInternallyRequest, reader: jspb.BinaryReader): DeclineCustomerOrdersInternallyRequest;
}

export namespace DeclineCustomerOrdersInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeclineCustomerOrderInternallyRequest.AsObject>,
  }
}

export class DeclineCustomerOrdersInternallyResponse extends jspb.Message {
  getOrdersList(): Array<payments_models_pb.CustomerOrderInfo>;
  setOrdersList(value: Array<payments_models_pb.CustomerOrderInfo>): DeclineCustomerOrdersInternallyResponse;
  clearOrdersList(): DeclineCustomerOrdersInternallyResponse;
  addOrders(value?: payments_models_pb.CustomerOrderInfo, index?: number): payments_models_pb.CustomerOrderInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeclineCustomerOrdersInternallyResponse;
  hasError(): boolean;
  clearError(): DeclineCustomerOrdersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclineCustomerOrdersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeclineCustomerOrdersInternallyResponse): DeclineCustomerOrdersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeclineCustomerOrdersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclineCustomerOrdersInternallyResponse;
  static deserializeBinaryFromReader(message: DeclineCustomerOrdersInternallyResponse, reader: jspb.BinaryReader): DeclineCustomerOrdersInternallyResponse;
}

export namespace DeclineCustomerOrdersInternallyResponse {
  export type AsObject = {
    ordersList: Array<payments_models_pb.CustomerOrderInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class RefundCustomerOrderInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RefundCustomerOrderInternallyRequest;

  getReason(): string;
  setReason(value: string): RefundCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefundCustomerOrderInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefundCustomerOrderInternallyRequest): RefundCustomerOrderInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: RefundCustomerOrderInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefundCustomerOrderInternallyRequest;
  static deserializeBinaryFromReader(message: RefundCustomerOrderInternallyRequest, reader: jspb.BinaryReader): RefundCustomerOrderInternallyRequest;
}

export namespace RefundCustomerOrderInternallyRequest {
  export type AsObject = {
    id: string,
    reason: string,
  }
}

export class RefundCustomerOrdersInternallyRequest extends jspb.Message {
  getRequestsList(): Array<RefundCustomerOrderInternallyRequest>;
  setRequestsList(value: Array<RefundCustomerOrderInternallyRequest>): RefundCustomerOrdersInternallyRequest;
  clearRequestsList(): RefundCustomerOrdersInternallyRequest;
  addRequests(value?: RefundCustomerOrderInternallyRequest, index?: number): RefundCustomerOrderInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefundCustomerOrdersInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefundCustomerOrdersInternallyRequest): RefundCustomerOrdersInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: RefundCustomerOrdersInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefundCustomerOrdersInternallyRequest;
  static deserializeBinaryFromReader(message: RefundCustomerOrdersInternallyRequest, reader: jspb.BinaryReader): RefundCustomerOrdersInternallyRequest;
}

export namespace RefundCustomerOrdersInternallyRequest {
  export type AsObject = {
    requestsList: Array<RefundCustomerOrderInternallyRequest.AsObject>,
  }
}

export class RefundCustomerOrdersInternallyResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): RefundCustomerOrdersInternallyResponse;
  hasError(): boolean;
  clearError(): RefundCustomerOrdersInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefundCustomerOrdersInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefundCustomerOrdersInternallyResponse): RefundCustomerOrdersInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: RefundCustomerOrdersInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefundCustomerOrdersInternallyResponse;
  static deserializeBinaryFromReader(message: RefundCustomerOrdersInternallyResponse, reader: jspb.BinaryReader): RefundCustomerOrdersInternallyResponse;
}

export namespace RefundCustomerOrdersInternallyResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerAddressInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerAddressInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): GetCustomerAddressInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerAddressInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerAddressInternallyRequest): GetCustomerAddressInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerAddressInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerAddressInternallyRequest;
  static deserializeBinaryFromReader(message: GetCustomerAddressInternallyRequest, reader: jspb.BinaryReader): GetCustomerAddressInternallyRequest;
}

export namespace GetCustomerAddressInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
  }
}

export class GetCustomerAddressInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerAddressInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerAddressInfo): GetCustomerAddressInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerAddressInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerAddressInternallyResponse;
  hasError(): boolean;
  clearError(): GetCustomerAddressInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerAddressInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerAddressInternallyResponse): GetCustomerAddressInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerAddressInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerAddressInternallyResponse;
  static deserializeBinaryFromReader(message: GetCustomerAddressInternallyResponse, reader: jspb.BinaryReader): GetCustomerAddressInternallyResponse;
}

export namespace GetCustomerAddressInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerAddressInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerAddressesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListCustomerAddressesInternallyRequest;
  clearIdsList(): ListCustomerAddressesInternallyRequest;
  addIds(value: string, index?: number): ListCustomerAddressesInternallyRequest;

  getCustomerIdsList(): Array<string>;
  setCustomerIdsList(value: Array<string>): ListCustomerAddressesInternallyRequest;
  clearCustomerIdsList(): ListCustomerAddressesInternallyRequest;
  addCustomerIds(value: string, index?: number): ListCustomerAddressesInternallyRequest;

  getPrimaries(): boolean;
  setPrimaries(value: boolean): ListCustomerAddressesInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListCustomerAddressesInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerAddressesInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerAddressesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerAddressesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerAddressesInternallyRequest): ListCustomerAddressesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerAddressesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerAddressesInternallyRequest;
  static deserializeBinaryFromReader(message: ListCustomerAddressesInternallyRequest, reader: jspb.BinaryReader): ListCustomerAddressesInternallyRequest;
}

export namespace ListCustomerAddressesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    customerIdsList: Array<string>,
    primaries: boolean,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerAddressesInternallyResponse extends jspb.Message {
  getAddressesList(): Array<payments_models_pb.CustomerAddressInfo>;
  setAddressesList(value: Array<payments_models_pb.CustomerAddressInfo>): ListCustomerAddressesInternallyResponse;
  clearAddressesList(): ListCustomerAddressesInternallyResponse;
  addAddresses(value?: payments_models_pb.CustomerAddressInfo, index?: number): payments_models_pb.CustomerAddressInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerAddressesInternallyResponse;
  hasError(): boolean;
  clearError(): ListCustomerAddressesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerAddressesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerAddressesInternallyResponse): ListCustomerAddressesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerAddressesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerAddressesInternallyResponse;
  static deserializeBinaryFromReader(message: ListCustomerAddressesInternallyResponse, reader: jspb.BinaryReader): ListCustomerAddressesInternallyResponse;
}

export namespace ListCustomerAddressesInternallyResponse {
  export type AsObject = {
    addressesList: Array<payments_models_pb.CustomerAddressInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerAddressesInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountCustomerAddressesInternallyRequest;
  clearIdsList(): CountCustomerAddressesInternallyRequest;
  addIds(value: string, index?: number): CountCustomerAddressesInternallyRequest;

  getCustomerIdsList(): Array<string>;
  setCustomerIdsList(value: Array<string>): CountCustomerAddressesInternallyRequest;
  clearCustomerIdsList(): CountCustomerAddressesInternallyRequest;
  addCustomerIds(value: string, index?: number): CountCustomerAddressesInternallyRequest;

  getPrimaries(): boolean;
  setPrimaries(value: boolean): CountCustomerAddressesInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerAddressesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerAddressesInternallyRequest): CountCustomerAddressesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerAddressesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerAddressesInternallyRequest;
  static deserializeBinaryFromReader(message: CountCustomerAddressesInternallyRequest, reader: jspb.BinaryReader): CountCustomerAddressesInternallyRequest;
}

export namespace CountCustomerAddressesInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    customerIdsList: Array<string>,
    primaries: boolean,
  }
}

export class CountCustomerAddressesInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerAddressesInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerAddressesInternallyResponse;
  hasError(): boolean;
  clearError(): CountCustomerAddressesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerAddressesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerAddressesInternallyResponse): CountCustomerAddressesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerAddressesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerAddressesInternallyResponse;
  static deserializeBinaryFromReader(message: CountCustomerAddressesInternallyResponse, reader: jspb.BinaryReader): CountCustomerAddressesInternallyResponse;
}

export namespace CountCustomerAddressesInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateCustomerAddressInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateCustomerAddressInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): CreateCustomerAddressInternallyRequest;

  getFirstname(): string;
  setFirstname(value: string): CreateCustomerAddressInternallyRequest;

  getLastname(): string;
  setLastname(value: string): CreateCustomerAddressInternallyRequest;

  getAddress(): string;
  setAddress(value: string): CreateCustomerAddressInternallyRequest;

  getPostcode(): string;
  setPostcode(value: string): CreateCustomerAddressInternallyRequest;

  getCity(): string;
  setCity(value: string): CreateCustomerAddressInternallyRequest;

  getCountry(): string;
  setCountry(value: string): CreateCustomerAddressInternallyRequest;

  getPhoneNumber(): number;
  setPhoneNumber(value: number): CreateCustomerAddressInternallyRequest;

  getPrimary(): boolean;
  setPrimary(value: boolean): CreateCustomerAddressInternallyRequest;

  getExpires(): boolean;
  setExpires(value: boolean): CreateCustomerAddressInternallyRequest;

  getCreatedAt(): number;
  setCreatedAt(value: number): CreateCustomerAddressInternallyRequest;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CreateCustomerAddressInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerAddressInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerAddressInternallyRequest): CreateCustomerAddressInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerAddressInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerAddressInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerAddressInternallyRequest, reader: jspb.BinaryReader): CreateCustomerAddressInternallyRequest;
}

export namespace CreateCustomerAddressInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
    firstname: string,
    lastname: string,
    address: string,
    postcode: string,
    city: string,
    country: string,
    phoneNumber: number,
    primary: boolean,
    expires: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreateCustomerAddressesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateCustomerAddressInternallyRequest>;
  setRequestsList(value: Array<CreateCustomerAddressInternallyRequest>): CreateCustomerAddressesInternallyRequest;
  clearRequestsList(): CreateCustomerAddressesInternallyRequest;
  addRequests(value?: CreateCustomerAddressInternallyRequest, index?: number): CreateCustomerAddressInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerAddressesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerAddressesInternallyRequest): CreateCustomerAddressesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerAddressesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerAddressesInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerAddressesInternallyRequest, reader: jspb.BinaryReader): CreateCustomerAddressesInternallyRequest;
}

export namespace CreateCustomerAddressesInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateCustomerAddressInternallyRequest.AsObject>,
  }
}

export class CreateCustomerAddressesInternallyResponse extends jspb.Message {
  getAddressesList(): Array<payments_models_pb.CustomerAddressInfo>;
  setAddressesList(value: Array<payments_models_pb.CustomerAddressInfo>): CreateCustomerAddressesInternallyResponse;
  clearAddressesList(): CreateCustomerAddressesInternallyResponse;
  addAddresses(value?: payments_models_pb.CustomerAddressInfo, index?: number): payments_models_pb.CustomerAddressInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateCustomerAddressesInternallyResponse;
  hasError(): boolean;
  clearError(): CreateCustomerAddressesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerAddressesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerAddressesInternallyResponse): CreateCustomerAddressesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerAddressesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerAddressesInternallyResponse;
  static deserializeBinaryFromReader(message: CreateCustomerAddressesInternallyResponse, reader: jspb.BinaryReader): CreateCustomerAddressesInternallyResponse;
}

export namespace CreateCustomerAddressesInternallyResponse {
  export type AsObject = {
    addressesList: Array<payments_models_pb.CustomerAddressInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateCustomerAddressInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCustomerAddressInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): UpdateCustomerAddressInternallyRequest;

  getFirstname(): payments_models_pb.CustomerAddressFirstnameValue | undefined;
  setFirstname(value?: payments_models_pb.CustomerAddressFirstnameValue): UpdateCustomerAddressInternallyRequest;
  hasFirstname(): boolean;
  clearFirstname(): UpdateCustomerAddressInternallyRequest;

  getLastname(): payments_models_pb.CustomerAddressLastnameValue | undefined;
  setLastname(value?: payments_models_pb.CustomerAddressLastnameValue): UpdateCustomerAddressInternallyRequest;
  hasLastname(): boolean;
  clearLastname(): UpdateCustomerAddressInternallyRequest;

  getAddress(): payments_models_pb.CustomerAddressAddressValue | undefined;
  setAddress(value?: payments_models_pb.CustomerAddressAddressValue): UpdateCustomerAddressInternallyRequest;
  hasAddress(): boolean;
  clearAddress(): UpdateCustomerAddressInternallyRequest;

  getPostcode(): payments_models_pb.CustomerAddressPostcodeValue | undefined;
  setPostcode(value?: payments_models_pb.CustomerAddressPostcodeValue): UpdateCustomerAddressInternallyRequest;
  hasPostcode(): boolean;
  clearPostcode(): UpdateCustomerAddressInternallyRequest;

  getCity(): payments_models_pb.CustomerAddressCityValue | undefined;
  setCity(value?: payments_models_pb.CustomerAddressCityValue): UpdateCustomerAddressInternallyRequest;
  hasCity(): boolean;
  clearCity(): UpdateCustomerAddressInternallyRequest;

  getCountry(): payments_models_pb.CustomerAddressCountryValue | undefined;
  setCountry(value?: payments_models_pb.CustomerAddressCountryValue): UpdateCustomerAddressInternallyRequest;
  hasCountry(): boolean;
  clearCountry(): UpdateCustomerAddressInternallyRequest;

  getPhoneNumber(): payments_models_pb.CustomerAddressPhoneNumberValue | undefined;
  setPhoneNumber(value?: payments_models_pb.CustomerAddressPhoneNumberValue): UpdateCustomerAddressInternallyRequest;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): UpdateCustomerAddressInternallyRequest;

  getPrimary(): payments_models_pb.CustomerAddressPrimaryValue | undefined;
  setPrimary(value?: payments_models_pb.CustomerAddressPrimaryValue): UpdateCustomerAddressInternallyRequest;
  hasPrimary(): boolean;
  clearPrimary(): UpdateCustomerAddressInternallyRequest;

  getExpires(): payments_models_pb.CustomerAddressExpiresValue | undefined;
  setExpires(value?: payments_models_pb.CustomerAddressExpiresValue): UpdateCustomerAddressInternallyRequest;
  hasExpires(): boolean;
  clearExpires(): UpdateCustomerAddressInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerAddressInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerAddressInternallyRequest): UpdateCustomerAddressInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerAddressInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerAddressInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerAddressInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerAddressInternallyRequest;
}

export namespace UpdateCustomerAddressInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
    firstname?: payments_models_pb.CustomerAddressFirstnameValue.AsObject,
    lastname?: payments_models_pb.CustomerAddressLastnameValue.AsObject,
    address?: payments_models_pb.CustomerAddressAddressValue.AsObject,
    postcode?: payments_models_pb.CustomerAddressPostcodeValue.AsObject,
    city?: payments_models_pb.CustomerAddressCityValue.AsObject,
    country?: payments_models_pb.CustomerAddressCountryValue.AsObject,
    phoneNumber?: payments_models_pb.CustomerAddressPhoneNumberValue.AsObject,
    primary?: payments_models_pb.CustomerAddressPrimaryValue.AsObject,
    expires?: payments_models_pb.CustomerAddressExpiresValue.AsObject,
  }
}

export class UpdateCustomerAddressesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateCustomerAddressInternallyRequest>;
  setRequestsList(value: Array<UpdateCustomerAddressInternallyRequest>): UpdateCustomerAddressesInternallyRequest;
  clearRequestsList(): UpdateCustomerAddressesInternallyRequest;
  addRequests(value?: UpdateCustomerAddressInternallyRequest, index?: number): UpdateCustomerAddressInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerAddressesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerAddressesInternallyRequest): UpdateCustomerAddressesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerAddressesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerAddressesInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerAddressesInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerAddressesInternallyRequest;
}

export namespace UpdateCustomerAddressesInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateCustomerAddressInternallyRequest.AsObject>,
  }
}

export class UpdateCustomerAddressesInternallyResponse extends jspb.Message {
  getAddressesList(): Array<payments_models_pb.CustomerAddressInfo>;
  setAddressesList(value: Array<payments_models_pb.CustomerAddressInfo>): UpdateCustomerAddressesInternallyResponse;
  clearAddressesList(): UpdateCustomerAddressesInternallyResponse;
  addAddresses(value?: payments_models_pb.CustomerAddressInfo, index?: number): payments_models_pb.CustomerAddressInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateCustomerAddressesInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateCustomerAddressesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerAddressesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerAddressesInternallyResponse): UpdateCustomerAddressesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerAddressesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerAddressesInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerAddressesInternallyResponse, reader: jspb.BinaryReader): UpdateCustomerAddressesInternallyResponse;
}

export namespace UpdateCustomerAddressesInternallyResponse {
  export type AsObject = {
    addressesList: Array<payments_models_pb.CustomerAddressInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteCustomerAddressInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCustomerAddressInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): DeleteCustomerAddressInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerAddressInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerAddressInternallyRequest): DeleteCustomerAddressInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerAddressInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerAddressInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerAddressInternallyRequest, reader: jspb.BinaryReader): DeleteCustomerAddressInternallyRequest;
}

export namespace DeleteCustomerAddressInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
  }
}

export class DeleteCustomerAddressesInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteCustomerAddressInternallyRequest>;
  setRequestsList(value: Array<DeleteCustomerAddressInternallyRequest>): DeleteCustomerAddressesInternallyRequest;
  clearRequestsList(): DeleteCustomerAddressesInternallyRequest;
  addRequests(value?: DeleteCustomerAddressInternallyRequest, index?: number): DeleteCustomerAddressInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerAddressesInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerAddressesInternallyRequest): DeleteCustomerAddressesInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerAddressesInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerAddressesInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerAddressesInternallyRequest, reader: jspb.BinaryReader): DeleteCustomerAddressesInternallyRequest;
}

export namespace DeleteCustomerAddressesInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteCustomerAddressInternallyRequest.AsObject>,
  }
}

export class DeleteCustomerAddressesInternallyResponse extends jspb.Message {
  getAddressesList(): Array<payments_models_pb.CustomerAddressInfo>;
  setAddressesList(value: Array<payments_models_pb.CustomerAddressInfo>): DeleteCustomerAddressesInternallyResponse;
  clearAddressesList(): DeleteCustomerAddressesInternallyResponse;
  addAddresses(value?: payments_models_pb.CustomerAddressInfo, index?: number): payments_models_pb.CustomerAddressInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteCustomerAddressesInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteCustomerAddressesInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerAddressesInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerAddressesInternallyResponse): DeleteCustomerAddressesInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerAddressesInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerAddressesInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteCustomerAddressesInternallyResponse, reader: jspb.BinaryReader): DeleteCustomerAddressesInternallyResponse;
}

export namespace DeleteCustomerAddressesInternallyResponse {
  export type AsObject = {
    addressesList: Array<payments_models_pb.CustomerAddressInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerPaymentInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerPaymentInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): GetCustomerPaymentInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerPaymentInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerPaymentInternallyRequest): GetCustomerPaymentInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerPaymentInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerPaymentInternallyRequest;
  static deserializeBinaryFromReader(message: GetCustomerPaymentInternallyRequest, reader: jspb.BinaryReader): GetCustomerPaymentInternallyRequest;
}

export namespace GetCustomerPaymentInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
  }
}

export class GetCustomerPaymentInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerPaymentInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerPaymentInfo): GetCustomerPaymentInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerPaymentInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerPaymentInternallyResponse;
  hasError(): boolean;
  clearError(): GetCustomerPaymentInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerPaymentInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerPaymentInternallyResponse): GetCustomerPaymentInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerPaymentInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerPaymentInternallyResponse;
  static deserializeBinaryFromReader(message: GetCustomerPaymentInternallyResponse, reader: jspb.BinaryReader): GetCustomerPaymentInternallyResponse;
}

export namespace GetCustomerPaymentInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerPaymentInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerPaymentsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListCustomerPaymentsInternallyRequest;
  clearIdsList(): ListCustomerPaymentsInternallyRequest;
  addIds(value: string, index?: number): ListCustomerPaymentsInternallyRequest;

  getCustomerIdsList(): Array<string>;
  setCustomerIdsList(value: Array<string>): ListCustomerPaymentsInternallyRequest;
  clearCustomerIdsList(): ListCustomerPaymentsInternallyRequest;
  addCustomerIds(value: string, index?: number): ListCustomerPaymentsInternallyRequest;

  getTypesList(): Array<payments_enums_pb.CustomerPaymentType>;
  setTypesList(value: Array<payments_enums_pb.CustomerPaymentType>): ListCustomerPaymentsInternallyRequest;
  clearTypesList(): ListCustomerPaymentsInternallyRequest;
  addTypes(value: payments_enums_pb.CustomerPaymentType, index?: number): ListCustomerPaymentsInternallyRequest;

  getPrimaries(): boolean;
  setPrimaries(value: boolean): ListCustomerPaymentsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListCustomerPaymentsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerPaymentsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerPaymentsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerPaymentsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerPaymentsInternallyRequest): ListCustomerPaymentsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerPaymentsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerPaymentsInternallyRequest;
  static deserializeBinaryFromReader(message: ListCustomerPaymentsInternallyRequest, reader: jspb.BinaryReader): ListCustomerPaymentsInternallyRequest;
}

export namespace ListCustomerPaymentsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    customerIdsList: Array<string>,
    typesList: Array<payments_enums_pb.CustomerPaymentType>,
    primaries: boolean,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerPaymentsInternallyResponse extends jspb.Message {
  getPaymentsList(): Array<payments_models_pb.CustomerPaymentInfo>;
  setPaymentsList(value: Array<payments_models_pb.CustomerPaymentInfo>): ListCustomerPaymentsInternallyResponse;
  clearPaymentsList(): ListCustomerPaymentsInternallyResponse;
  addPayments(value?: payments_models_pb.CustomerPaymentInfo, index?: number): payments_models_pb.CustomerPaymentInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerPaymentsInternallyResponse;
  hasError(): boolean;
  clearError(): ListCustomerPaymentsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerPaymentsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerPaymentsInternallyResponse): ListCustomerPaymentsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerPaymentsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerPaymentsInternallyResponse;
  static deserializeBinaryFromReader(message: ListCustomerPaymentsInternallyResponse, reader: jspb.BinaryReader): ListCustomerPaymentsInternallyResponse;
}

export namespace ListCustomerPaymentsInternallyResponse {
  export type AsObject = {
    paymentsList: Array<payments_models_pb.CustomerPaymentInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerPaymentsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountCustomerPaymentsInternallyRequest;
  clearIdsList(): CountCustomerPaymentsInternallyRequest;
  addIds(value: string, index?: number): CountCustomerPaymentsInternallyRequest;

  getCustomerIdsList(): Array<string>;
  setCustomerIdsList(value: Array<string>): CountCustomerPaymentsInternallyRequest;
  clearCustomerIdsList(): CountCustomerPaymentsInternallyRequest;
  addCustomerIds(value: string, index?: number): CountCustomerPaymentsInternallyRequest;

  getTypesList(): Array<payments_enums_pb.CustomerPaymentType>;
  setTypesList(value: Array<payments_enums_pb.CustomerPaymentType>): CountCustomerPaymentsInternallyRequest;
  clearTypesList(): CountCustomerPaymentsInternallyRequest;
  addTypes(value: payments_enums_pb.CustomerPaymentType, index?: number): CountCustomerPaymentsInternallyRequest;

  getPrimaries(): boolean;
  setPrimaries(value: boolean): CountCustomerPaymentsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerPaymentsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerPaymentsInternallyRequest): CountCustomerPaymentsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerPaymentsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerPaymentsInternallyRequest;
  static deserializeBinaryFromReader(message: CountCustomerPaymentsInternallyRequest, reader: jspb.BinaryReader): CountCustomerPaymentsInternallyRequest;
}

export namespace CountCustomerPaymentsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    customerIdsList: Array<string>,
    typesList: Array<payments_enums_pb.CustomerPaymentType>,
    primaries: boolean,
  }
}

export class CountCustomerPaymentsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerPaymentsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerPaymentsInternallyResponse;
  hasError(): boolean;
  clearError(): CountCustomerPaymentsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerPaymentsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerPaymentsInternallyResponse): CountCustomerPaymentsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerPaymentsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerPaymentsInternallyResponse;
  static deserializeBinaryFromReader(message: CountCustomerPaymentsInternallyResponse, reader: jspb.BinaryReader): CountCustomerPaymentsInternallyResponse;
}

export namespace CountCustomerPaymentsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateCustomerPaymentInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateCustomerPaymentInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): CreateCustomerPaymentInternallyRequest;

  getType(): payments_enums_pb.CustomerPaymentType;
  setType(value: payments_enums_pb.CustomerPaymentType): CreateCustomerPaymentInternallyRequest;

  getExpires(): boolean;
  setExpires(value: boolean): CreateCustomerPaymentInternallyRequest;

  getPrimary(): boolean;
  setPrimary(value: boolean): CreateCustomerPaymentInternallyRequest;

  getMetadata(): payments_models_pb.CustomerPaymentMetadata | undefined;
  setMetadata(value?: payments_models_pb.CustomerPaymentMetadata): CreateCustomerPaymentInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateCustomerPaymentInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerPaymentInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerPaymentInternallyRequest): CreateCustomerPaymentInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerPaymentInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerPaymentInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerPaymentInternallyRequest, reader: jspb.BinaryReader): CreateCustomerPaymentInternallyRequest;
}

export namespace CreateCustomerPaymentInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
    type: payments_enums_pb.CustomerPaymentType,
    expires: boolean,
    primary: boolean,
    metadata?: payments_models_pb.CustomerPaymentMetadata.AsObject,
  }
}

export class CreateCustomerPaymentsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateCustomerPaymentInternallyRequest>;
  setRequestsList(value: Array<CreateCustomerPaymentInternallyRequest>): CreateCustomerPaymentsInternallyRequest;
  clearRequestsList(): CreateCustomerPaymentsInternallyRequest;
  addRequests(value?: CreateCustomerPaymentInternallyRequest, index?: number): CreateCustomerPaymentInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerPaymentsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerPaymentsInternallyRequest): CreateCustomerPaymentsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerPaymentsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerPaymentsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerPaymentsInternallyRequest, reader: jspb.BinaryReader): CreateCustomerPaymentsInternallyRequest;
}

export namespace CreateCustomerPaymentsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateCustomerPaymentInternallyRequest.AsObject>,
  }
}

export class CreateCustomerPaymentsInternallyResponse extends jspb.Message {
  getPaymentsList(): Array<payments_models_pb.CustomerPaymentInfo>;
  setPaymentsList(value: Array<payments_models_pb.CustomerPaymentInfo>): CreateCustomerPaymentsInternallyResponse;
  clearPaymentsList(): CreateCustomerPaymentsInternallyResponse;
  addPayments(value?: payments_models_pb.CustomerPaymentInfo, index?: number): payments_models_pb.CustomerPaymentInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateCustomerPaymentsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateCustomerPaymentsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerPaymentsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerPaymentsInternallyResponse): CreateCustomerPaymentsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerPaymentsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerPaymentsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateCustomerPaymentsInternallyResponse, reader: jspb.BinaryReader): CreateCustomerPaymentsInternallyResponse;
}

export namespace CreateCustomerPaymentsInternallyResponse {
  export type AsObject = {
    paymentsList: Array<payments_models_pb.CustomerPaymentInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateCustomerPaymentInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCustomerPaymentInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): UpdateCustomerPaymentInternallyRequest;

  getPrimary(): payments_models_pb.CustomerPaymentPrimaryValue | undefined;
  setPrimary(value?: payments_models_pb.CustomerPaymentPrimaryValue): UpdateCustomerPaymentInternallyRequest;
  hasPrimary(): boolean;
  clearPrimary(): UpdateCustomerPaymentInternallyRequest;

  getExpires(): payments_models_pb.CustomerPaymentExpiresValue | undefined;
  setExpires(value?: payments_models_pb.CustomerPaymentExpiresValue): UpdateCustomerPaymentInternallyRequest;
  hasExpires(): boolean;
  clearExpires(): UpdateCustomerPaymentInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerPaymentInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerPaymentInternallyRequest): UpdateCustomerPaymentInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerPaymentInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerPaymentInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerPaymentInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerPaymentInternallyRequest;
}

export namespace UpdateCustomerPaymentInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
    primary?: payments_models_pb.CustomerPaymentPrimaryValue.AsObject,
    expires?: payments_models_pb.CustomerPaymentExpiresValue.AsObject,
  }
}

export class UpdateCustomerPaymentsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateCustomerPaymentInternallyRequest>;
  setRequestsList(value: Array<UpdateCustomerPaymentInternallyRequest>): UpdateCustomerPaymentsInternallyRequest;
  clearRequestsList(): UpdateCustomerPaymentsInternallyRequest;
  addRequests(value?: UpdateCustomerPaymentInternallyRequest, index?: number): UpdateCustomerPaymentInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerPaymentsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerPaymentsInternallyRequest): UpdateCustomerPaymentsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerPaymentsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerPaymentsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerPaymentsInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerPaymentsInternallyRequest;
}

export namespace UpdateCustomerPaymentsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateCustomerPaymentInternallyRequest.AsObject>,
  }
}

export class UpdateCustomerPaymentsInternallyResponse extends jspb.Message {
  getPaymentsList(): Array<payments_models_pb.CustomerPaymentInfo>;
  setPaymentsList(value: Array<payments_models_pb.CustomerPaymentInfo>): UpdateCustomerPaymentsInternallyResponse;
  clearPaymentsList(): UpdateCustomerPaymentsInternallyResponse;
  addPayments(value?: payments_models_pb.CustomerPaymentInfo, index?: number): payments_models_pb.CustomerPaymentInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateCustomerPaymentsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateCustomerPaymentsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerPaymentsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerPaymentsInternallyResponse): UpdateCustomerPaymentsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerPaymentsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerPaymentsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerPaymentsInternallyResponse, reader: jspb.BinaryReader): UpdateCustomerPaymentsInternallyResponse;
}

export namespace UpdateCustomerPaymentsInternallyResponse {
  export type AsObject = {
    paymentsList: Array<payments_models_pb.CustomerPaymentInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteCustomerPaymentInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCustomerPaymentInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): DeleteCustomerPaymentInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerPaymentInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerPaymentInternallyRequest): DeleteCustomerPaymentInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerPaymentInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerPaymentInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerPaymentInternallyRequest, reader: jspb.BinaryReader): DeleteCustomerPaymentInternallyRequest;
}

export namespace DeleteCustomerPaymentInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
  }
}

export class DeleteCustomerPaymentsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<DeleteCustomerPaymentInternallyRequest>;
  setRequestsList(value: Array<DeleteCustomerPaymentInternallyRequest>): DeleteCustomerPaymentsInternallyRequest;
  clearRequestsList(): DeleteCustomerPaymentsInternallyRequest;
  addRequests(value?: DeleteCustomerPaymentInternallyRequest, index?: number): DeleteCustomerPaymentInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerPaymentsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerPaymentsInternallyRequest): DeleteCustomerPaymentsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerPaymentsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerPaymentsInternallyRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerPaymentsInternallyRequest, reader: jspb.BinaryReader): DeleteCustomerPaymentsInternallyRequest;
}

export namespace DeleteCustomerPaymentsInternallyRequest {
  export type AsObject = {
    requestsList: Array<DeleteCustomerPaymentInternallyRequest.AsObject>,
  }
}

export class DeleteCustomerPaymentsInternallyResponse extends jspb.Message {
  getPaymentsList(): Array<payments_models_pb.CustomerPaymentInfo>;
  setPaymentsList(value: Array<payments_models_pb.CustomerPaymentInfo>): DeleteCustomerPaymentsInternallyResponse;
  clearPaymentsList(): DeleteCustomerPaymentsInternallyResponse;
  addPayments(value?: payments_models_pb.CustomerPaymentInfo, index?: number): payments_models_pb.CustomerPaymentInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteCustomerPaymentsInternallyResponse;
  hasError(): boolean;
  clearError(): DeleteCustomerPaymentsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerPaymentsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerPaymentsInternallyResponse): DeleteCustomerPaymentsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerPaymentsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerPaymentsInternallyResponse;
  static deserializeBinaryFromReader(message: DeleteCustomerPaymentsInternallyResponse, reader: jspb.BinaryReader): DeleteCustomerPaymentsInternallyResponse;
}

export namespace DeleteCustomerPaymentsInternallyResponse {
  export type AsObject = {
    paymentsList: Array<payments_models_pb.CustomerPaymentInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerTransactionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerTransactionInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): GetCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerTransactionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerTransactionInternallyRequest): GetCustomerTransactionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerTransactionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerTransactionInternallyRequest;
  static deserializeBinaryFromReader(message: GetCustomerTransactionInternallyRequest, reader: jspb.BinaryReader): GetCustomerTransactionInternallyRequest;
}

export namespace GetCustomerTransactionInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
  }
}

export class GetCustomerTransactionInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerTransactionInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerTransactionInfo): GetCustomerTransactionInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerTransactionInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerTransactionInternallyResponse;
  hasError(): boolean;
  clearError(): GetCustomerTransactionInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerTransactionInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerTransactionInternallyResponse): GetCustomerTransactionInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerTransactionInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerTransactionInternallyResponse;
  static deserializeBinaryFromReader(message: GetCustomerTransactionInternallyResponse, reader: jspb.BinaryReader): GetCustomerTransactionInternallyResponse;
}

export namespace GetCustomerTransactionInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerTransactionInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerTransactionsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListCustomerTransactionsInternallyRequest;
  clearIdsList(): ListCustomerTransactionsInternallyRequest;
  addIds(value: string, index?: number): ListCustomerTransactionsInternallyRequest;

  getCustomerIdsList(): Array<string>;
  setCustomerIdsList(value: Array<string>): ListCustomerTransactionsInternallyRequest;
  clearCustomerIdsList(): ListCustomerTransactionsInternallyRequest;
  addCustomerIds(value: string, index?: number): ListCustomerTransactionsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListCustomerTransactionsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerTransactionsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerTransactionsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerTransactionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerTransactionsInternallyRequest): ListCustomerTransactionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerTransactionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerTransactionsInternallyRequest;
  static deserializeBinaryFromReader(message: ListCustomerTransactionsInternallyRequest, reader: jspb.BinaryReader): ListCustomerTransactionsInternallyRequest;
}

export namespace ListCustomerTransactionsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    customerIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerTransactionsInternallyResponse extends jspb.Message {
  getTransactionsList(): Array<payments_models_pb.CustomerTransactionInfo>;
  setTransactionsList(value: Array<payments_models_pb.CustomerTransactionInfo>): ListCustomerTransactionsInternallyResponse;
  clearTransactionsList(): ListCustomerTransactionsInternallyResponse;
  addTransactions(value?: payments_models_pb.CustomerTransactionInfo, index?: number): payments_models_pb.CustomerTransactionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerTransactionsInternallyResponse;
  hasError(): boolean;
  clearError(): ListCustomerTransactionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerTransactionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerTransactionsInternallyResponse): ListCustomerTransactionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerTransactionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerTransactionsInternallyResponse;
  static deserializeBinaryFromReader(message: ListCustomerTransactionsInternallyResponse, reader: jspb.BinaryReader): ListCustomerTransactionsInternallyResponse;
}

export namespace ListCustomerTransactionsInternallyResponse {
  export type AsObject = {
    transactionsList: Array<payments_models_pb.CustomerTransactionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerTransactionsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountCustomerTransactionsInternallyRequest;
  clearIdsList(): CountCustomerTransactionsInternallyRequest;
  addIds(value: string, index?: number): CountCustomerTransactionsInternallyRequest;

  getCustomerIdsList(): Array<string>;
  setCustomerIdsList(value: Array<string>): CountCustomerTransactionsInternallyRequest;
  clearCustomerIdsList(): CountCustomerTransactionsInternallyRequest;
  addCustomerIds(value: string, index?: number): CountCustomerTransactionsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerTransactionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerTransactionsInternallyRequest): CountCustomerTransactionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerTransactionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerTransactionsInternallyRequest;
  static deserializeBinaryFromReader(message: CountCustomerTransactionsInternallyRequest, reader: jspb.BinaryReader): CountCustomerTransactionsInternallyRequest;
}

export namespace CountCustomerTransactionsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    customerIdsList: Array<string>,
  }
}

export class CountCustomerTransactionsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerTransactionsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerTransactionsInternallyResponse;
  hasError(): boolean;
  clearError(): CountCustomerTransactionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerTransactionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerTransactionsInternallyResponse): CountCustomerTransactionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerTransactionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerTransactionsInternallyResponse;
  static deserializeBinaryFromReader(message: CountCustomerTransactionsInternallyResponse, reader: jspb.BinaryReader): CountCustomerTransactionsInternallyResponse;
}

export namespace CountCustomerTransactionsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateCustomerTransactionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateCustomerTransactionInternallyRequest;

  getPaymentId(): string;
  setPaymentId(value: string): CreateCustomerTransactionInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): CreateCustomerTransactionInternallyRequest;

  getAmount(): number;
  setAmount(value: number): CreateCustomerTransactionInternallyRequest;

  getStatus(): payments_enums_pb.CustomerTransactionStatus;
  setStatus(value: payments_enums_pb.CustomerTransactionStatus): CreateCustomerTransactionInternallyRequest;

  getProvider(): payments_enums_pb.CustomerTransactionProvider;
  setProvider(value: payments_enums_pb.CustomerTransactionProvider): CreateCustomerTransactionInternallyRequest;

  getCurrency(): payments_enums_pb.Currency;
  setCurrency(value: payments_enums_pb.Currency): CreateCustomerTransactionInternallyRequest;

  getMetadata(): payments_models_pb.CustomerTransactionMetadata | undefined;
  setMetadata(value?: payments_models_pb.CustomerTransactionMetadata): CreateCustomerTransactionInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerTransactionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerTransactionInternallyRequest): CreateCustomerTransactionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerTransactionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerTransactionInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerTransactionInternallyRequest, reader: jspb.BinaryReader): CreateCustomerTransactionInternallyRequest;
}

export namespace CreateCustomerTransactionInternallyRequest {
  export type AsObject = {
    id: string,
    paymentId: string,
    customerId: string,
    amount: number,
    status: payments_enums_pb.CustomerTransactionStatus,
    provider: payments_enums_pb.CustomerTransactionProvider,
    currency: payments_enums_pb.Currency,
    metadata?: payments_models_pb.CustomerTransactionMetadata.AsObject,
  }
}

export class CreateCustomerTransactionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateCustomerTransactionInternallyRequest>;
  setRequestsList(value: Array<CreateCustomerTransactionInternallyRequest>): CreateCustomerTransactionsInternallyRequest;
  clearRequestsList(): CreateCustomerTransactionsInternallyRequest;
  addRequests(value?: CreateCustomerTransactionInternallyRequest, index?: number): CreateCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerTransactionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerTransactionsInternallyRequest): CreateCustomerTransactionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerTransactionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerTransactionsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerTransactionsInternallyRequest, reader: jspb.BinaryReader): CreateCustomerTransactionsInternallyRequest;
}

export namespace CreateCustomerTransactionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateCustomerTransactionInternallyRequest.AsObject>,
  }
}

export class CreateCustomerTransactionsInternallyResponse extends jspb.Message {
  getTransactionsList(): Array<payments_models_pb.CustomerTransactionInfo>;
  setTransactionsList(value: Array<payments_models_pb.CustomerTransactionInfo>): CreateCustomerTransactionsInternallyResponse;
  clearTransactionsList(): CreateCustomerTransactionsInternallyResponse;
  addTransactions(value?: payments_models_pb.CustomerTransactionInfo, index?: number): payments_models_pb.CustomerTransactionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateCustomerTransactionsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateCustomerTransactionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerTransactionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerTransactionsInternallyResponse): CreateCustomerTransactionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerTransactionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerTransactionsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateCustomerTransactionsInternallyResponse, reader: jspb.BinaryReader): CreateCustomerTransactionsInternallyResponse;
}

export namespace CreateCustomerTransactionsInternallyResponse {
  export type AsObject = {
    transactionsList: Array<payments_models_pb.CustomerTransactionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateCustomerTransactionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCustomerTransactionInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): UpdateCustomerTransactionInternallyRequest;

  getStatus(): payments_models_pb.CustomerTransactionStatusValue | undefined;
  setStatus(value?: payments_models_pb.CustomerTransactionStatusValue): UpdateCustomerTransactionInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerTransactionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerTransactionInternallyRequest): UpdateCustomerTransactionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerTransactionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerTransactionInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerTransactionInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerTransactionInternallyRequest;
}

export namespace UpdateCustomerTransactionInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
    status?: payments_models_pb.CustomerTransactionStatusValue.AsObject,
  }
}

export class UpdateCustomerTransactionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateCustomerTransactionInternallyRequest>;
  setRequestsList(value: Array<UpdateCustomerTransactionInternallyRequest>): UpdateCustomerTransactionsInternallyRequest;
  clearRequestsList(): UpdateCustomerTransactionsInternallyRequest;
  addRequests(value?: UpdateCustomerTransactionInternallyRequest, index?: number): UpdateCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerTransactionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerTransactionsInternallyRequest): UpdateCustomerTransactionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerTransactionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerTransactionsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerTransactionsInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerTransactionsInternallyRequest;
}

export namespace UpdateCustomerTransactionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateCustomerTransactionInternallyRequest.AsObject>,
  }
}

export class UpdateCustomerTransactionsInternallyResponse extends jspb.Message {
  getTransactionsList(): Array<payments_models_pb.CustomerTransactionInfo>;
  setTransactionsList(value: Array<payments_models_pb.CustomerTransactionInfo>): UpdateCustomerTransactionsInternallyResponse;
  clearTransactionsList(): UpdateCustomerTransactionsInternallyResponse;
  addTransactions(value?: payments_models_pb.CustomerTransactionInfo, index?: number): payments_models_pb.CustomerTransactionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateCustomerTransactionsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateCustomerTransactionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerTransactionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerTransactionsInternallyResponse): UpdateCustomerTransactionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerTransactionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerTransactionsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerTransactionsInternallyResponse, reader: jspb.BinaryReader): UpdateCustomerTransactionsInternallyResponse;
}

export namespace UpdateCustomerTransactionsInternallyResponse {
  export type AsObject = {
    transactionsList: Array<payments_models_pb.CustomerTransactionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ConfirmCustomerTransactionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ConfirmCustomerTransactionInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): ConfirmCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmCustomerTransactionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmCustomerTransactionInternallyRequest): ConfirmCustomerTransactionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmCustomerTransactionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmCustomerTransactionInternallyRequest;
  static deserializeBinaryFromReader(message: ConfirmCustomerTransactionInternallyRequest, reader: jspb.BinaryReader): ConfirmCustomerTransactionInternallyRequest;
}

export namespace ConfirmCustomerTransactionInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
  }
}

export class ConfirmCustomerTransactionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<ConfirmCustomerTransactionInternallyRequest>;
  setRequestsList(value: Array<ConfirmCustomerTransactionInternallyRequest>): ConfirmCustomerTransactionsInternallyRequest;
  clearRequestsList(): ConfirmCustomerTransactionsInternallyRequest;
  addRequests(value?: ConfirmCustomerTransactionInternallyRequest, index?: number): ConfirmCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmCustomerTransactionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmCustomerTransactionsInternallyRequest): ConfirmCustomerTransactionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmCustomerTransactionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmCustomerTransactionsInternallyRequest;
  static deserializeBinaryFromReader(message: ConfirmCustomerTransactionsInternallyRequest, reader: jspb.BinaryReader): ConfirmCustomerTransactionsInternallyRequest;
}

export namespace ConfirmCustomerTransactionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<ConfirmCustomerTransactionInternallyRequest.AsObject>,
  }
}

export class ConfirmCustomerTransactionsInternallyResponse extends jspb.Message {
  getTransactionsList(): Array<payments_models_pb.CustomerTransactionInfo>;
  setTransactionsList(value: Array<payments_models_pb.CustomerTransactionInfo>): ConfirmCustomerTransactionsInternallyResponse;
  clearTransactionsList(): ConfirmCustomerTransactionsInternallyResponse;
  addTransactions(value?: payments_models_pb.CustomerTransactionInfo, index?: number): payments_models_pb.CustomerTransactionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ConfirmCustomerTransactionsInternallyResponse;
  hasError(): boolean;
  clearError(): ConfirmCustomerTransactionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmCustomerTransactionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmCustomerTransactionsInternallyResponse): ConfirmCustomerTransactionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ConfirmCustomerTransactionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmCustomerTransactionsInternallyResponse;
  static deserializeBinaryFromReader(message: ConfirmCustomerTransactionsInternallyResponse, reader: jspb.BinaryReader): ConfirmCustomerTransactionsInternallyResponse;
}

export namespace ConfirmCustomerTransactionsInternallyResponse {
  export type AsObject = {
    transactionsList: Array<payments_models_pb.CustomerTransactionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CancelCustomerTransactionInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CancelCustomerTransactionInternallyRequest;

  getCustomerId(): string;
  setCustomerId(value: string): CancelCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelCustomerTransactionInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelCustomerTransactionInternallyRequest): CancelCustomerTransactionInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CancelCustomerTransactionInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelCustomerTransactionInternallyRequest;
  static deserializeBinaryFromReader(message: CancelCustomerTransactionInternallyRequest, reader: jspb.BinaryReader): CancelCustomerTransactionInternallyRequest;
}

export namespace CancelCustomerTransactionInternallyRequest {
  export type AsObject = {
    id: string,
    customerId: string,
  }
}

export class CancelCustomerTransactionsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CancelCustomerTransactionInternallyRequest>;
  setRequestsList(value: Array<CancelCustomerTransactionInternallyRequest>): CancelCustomerTransactionsInternallyRequest;
  clearRequestsList(): CancelCustomerTransactionsInternallyRequest;
  addRequests(value?: CancelCustomerTransactionInternallyRequest, index?: number): CancelCustomerTransactionInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelCustomerTransactionsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelCustomerTransactionsInternallyRequest): CancelCustomerTransactionsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CancelCustomerTransactionsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelCustomerTransactionsInternallyRequest;
  static deserializeBinaryFromReader(message: CancelCustomerTransactionsInternallyRequest, reader: jspb.BinaryReader): CancelCustomerTransactionsInternallyRequest;
}

export namespace CancelCustomerTransactionsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CancelCustomerTransactionInternallyRequest.AsObject>,
  }
}

export class CancelCustomerTransactionsInternallyResponse extends jspb.Message {
  getTransactionsList(): Array<payments_models_pb.CustomerTransactionInfo>;
  setTransactionsList(value: Array<payments_models_pb.CustomerTransactionInfo>): CancelCustomerTransactionsInternallyResponse;
  clearTransactionsList(): CancelCustomerTransactionsInternallyResponse;
  addTransactions(value?: payments_models_pb.CustomerTransactionInfo, index?: number): payments_models_pb.CustomerTransactionInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CancelCustomerTransactionsInternallyResponse;
  hasError(): boolean;
  clearError(): CancelCustomerTransactionsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelCustomerTransactionsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelCustomerTransactionsInternallyResponse): CancelCustomerTransactionsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CancelCustomerTransactionsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelCustomerTransactionsInternallyResponse;
  static deserializeBinaryFromReader(message: CancelCustomerTransactionsInternallyResponse, reader: jspb.BinaryReader): CancelCustomerTransactionsInternallyResponse;
}

export namespace CancelCustomerTransactionsInternallyResponse {
  export type AsObject = {
    transactionsList: Array<payments_models_pb.CustomerTransactionInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerOrderRefundInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerOrderRefundInternallyRequest;

  getOrderId(): string;
  setOrderId(value: string): GetCustomerOrderRefundInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerOrderRefundInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerOrderRefundInternallyRequest): GetCustomerOrderRefundInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerOrderRefundInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerOrderRefundInternallyRequest;
  static deserializeBinaryFromReader(message: GetCustomerOrderRefundInternallyRequest, reader: jspb.BinaryReader): GetCustomerOrderRefundInternallyRequest;
}

export namespace GetCustomerOrderRefundInternallyRequest {
  export type AsObject = {
    id: string,
    orderId: string,
  }
}

export class GetCustomerOrderRefundInternallyResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerOrderRefundInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerOrderRefundInfo): GetCustomerOrderRefundInternallyResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerOrderRefundInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerOrderRefundInternallyResponse;
  hasError(): boolean;
  clearError(): GetCustomerOrderRefundInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerOrderRefundInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerOrderRefundInternallyResponse): GetCustomerOrderRefundInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerOrderRefundInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerOrderRefundInternallyResponse;
  static deserializeBinaryFromReader(message: GetCustomerOrderRefundInternallyResponse, reader: jspb.BinaryReader): GetCustomerOrderRefundInternallyResponse;
}

export namespace GetCustomerOrderRefundInternallyResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerOrderRefundInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerOrderRefundsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListCustomerOrderRefundsInternallyRequest;
  clearIdsList(): ListCustomerOrderRefundsInternallyRequest;
  addIds(value: string, index?: number): ListCustomerOrderRefundsInternallyRequest;

  getOrderIdsList(): Array<string>;
  setOrderIdsList(value: Array<string>): ListCustomerOrderRefundsInternallyRequest;
  clearOrderIdsList(): ListCustomerOrderRefundsInternallyRequest;
  addOrderIds(value: string, index?: number): ListCustomerOrderRefundsInternallyRequest;

  getOffset(): number;
  setOffset(value: number): ListCustomerOrderRefundsInternallyRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerOrderRefundsInternallyRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerOrderRefundsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerOrderRefundsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerOrderRefundsInternallyRequest): ListCustomerOrderRefundsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerOrderRefundsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerOrderRefundsInternallyRequest;
  static deserializeBinaryFromReader(message: ListCustomerOrderRefundsInternallyRequest, reader: jspb.BinaryReader): ListCustomerOrderRefundsInternallyRequest;
}

export namespace ListCustomerOrderRefundsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    orderIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerOrderRefundsInternallyResponse extends jspb.Message {
  getRefundsList(): Array<payments_models_pb.CustomerOrderRefundInfo>;
  setRefundsList(value: Array<payments_models_pb.CustomerOrderRefundInfo>): ListCustomerOrderRefundsInternallyResponse;
  clearRefundsList(): ListCustomerOrderRefundsInternallyResponse;
  addRefunds(value?: payments_models_pb.CustomerOrderRefundInfo, index?: number): payments_models_pb.CustomerOrderRefundInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerOrderRefundsInternallyResponse;
  hasError(): boolean;
  clearError(): ListCustomerOrderRefundsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerOrderRefundsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerOrderRefundsInternallyResponse): ListCustomerOrderRefundsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerOrderRefundsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerOrderRefundsInternallyResponse;
  static deserializeBinaryFromReader(message: ListCustomerOrderRefundsInternallyResponse, reader: jspb.BinaryReader): ListCustomerOrderRefundsInternallyResponse;
}

export namespace ListCustomerOrderRefundsInternallyResponse {
  export type AsObject = {
    refundsList: Array<payments_models_pb.CustomerOrderRefundInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerOrderRefundsInternallyRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): CountCustomerOrderRefundsInternallyRequest;
  clearIdsList(): CountCustomerOrderRefundsInternallyRequest;
  addIds(value: string, index?: number): CountCustomerOrderRefundsInternallyRequest;

  getOrderIdsList(): Array<string>;
  setOrderIdsList(value: Array<string>): CountCustomerOrderRefundsInternallyRequest;
  clearOrderIdsList(): CountCustomerOrderRefundsInternallyRequest;
  addOrderIds(value: string, index?: number): CountCustomerOrderRefundsInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerOrderRefundsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerOrderRefundsInternallyRequest): CountCustomerOrderRefundsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerOrderRefundsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerOrderRefundsInternallyRequest;
  static deserializeBinaryFromReader(message: CountCustomerOrderRefundsInternallyRequest, reader: jspb.BinaryReader): CountCustomerOrderRefundsInternallyRequest;
}

export namespace CountCustomerOrderRefundsInternallyRequest {
  export type AsObject = {
    idsList: Array<string>,
    orderIdsList: Array<string>,
  }
}

export class CountCustomerOrderRefundsInternallyResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerOrderRefundsInternallyResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerOrderRefundsInternallyResponse;
  hasError(): boolean;
  clearError(): CountCustomerOrderRefundsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerOrderRefundsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerOrderRefundsInternallyResponse): CountCustomerOrderRefundsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerOrderRefundsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerOrderRefundsInternallyResponse;
  static deserializeBinaryFromReader(message: CountCustomerOrderRefundsInternallyResponse, reader: jspb.BinaryReader): CountCustomerOrderRefundsInternallyResponse;
}

export namespace CountCustomerOrderRefundsInternallyResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateCustomerOrderRefundInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CreateCustomerOrderRefundInternallyRequest;

  getOrderId(): string;
  setOrderId(value: string): CreateCustomerOrderRefundInternallyRequest;

  getReason(): string;
  setReason(value: string): CreateCustomerOrderRefundInternallyRequest;

  getAmount(): number;
  setAmount(value: number): CreateCustomerOrderRefundInternallyRequest;

  getStatus(): payments_enums_pb.CustomerOrderRefundStatus;
  setStatus(value: payments_enums_pb.CustomerOrderRefundStatus): CreateCustomerOrderRefundInternallyRequest;

  getMetadata(): payments_models_pb.CustomerOrderRefundMetadata | undefined;
  setMetadata(value?: payments_models_pb.CustomerOrderRefundMetadata): CreateCustomerOrderRefundInternallyRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateCustomerOrderRefundInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerOrderRefundInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerOrderRefundInternallyRequest): CreateCustomerOrderRefundInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerOrderRefundInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerOrderRefundInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerOrderRefundInternallyRequest, reader: jspb.BinaryReader): CreateCustomerOrderRefundInternallyRequest;
}

export namespace CreateCustomerOrderRefundInternallyRequest {
  export type AsObject = {
    id: string,
    orderId: string,
    reason: string,
    amount: number,
    status: payments_enums_pb.CustomerOrderRefundStatus,
    metadata?: payments_models_pb.CustomerOrderRefundMetadata.AsObject,
  }
}

export class CreateCustomerOrderRefundsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<CreateCustomerOrderRefundInternallyRequest>;
  setRequestsList(value: Array<CreateCustomerOrderRefundInternallyRequest>): CreateCustomerOrderRefundsInternallyRequest;
  clearRequestsList(): CreateCustomerOrderRefundsInternallyRequest;
  addRequests(value?: CreateCustomerOrderRefundInternallyRequest, index?: number): CreateCustomerOrderRefundInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerOrderRefundsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerOrderRefundsInternallyRequest): CreateCustomerOrderRefundsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerOrderRefundsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerOrderRefundsInternallyRequest;
  static deserializeBinaryFromReader(message: CreateCustomerOrderRefundsInternallyRequest, reader: jspb.BinaryReader): CreateCustomerOrderRefundsInternallyRequest;
}

export namespace CreateCustomerOrderRefundsInternallyRequest {
  export type AsObject = {
    requestsList: Array<CreateCustomerOrderRefundInternallyRequest.AsObject>,
  }
}

export class CreateCustomerOrderRefundsInternallyResponse extends jspb.Message {
  getRefundsList(): Array<payments_models_pb.CustomerOrderRefundInfo>;
  setRefundsList(value: Array<payments_models_pb.CustomerOrderRefundInfo>): CreateCustomerOrderRefundsInternallyResponse;
  clearRefundsList(): CreateCustomerOrderRefundsInternallyResponse;
  addRefunds(value?: payments_models_pb.CustomerOrderRefundInfo, index?: number): payments_models_pb.CustomerOrderRefundInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateCustomerOrderRefundsInternallyResponse;
  hasError(): boolean;
  clearError(): CreateCustomerOrderRefundsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerOrderRefundsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerOrderRefundsInternallyResponse): CreateCustomerOrderRefundsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerOrderRefundsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerOrderRefundsInternallyResponse;
  static deserializeBinaryFromReader(message: CreateCustomerOrderRefundsInternallyResponse, reader: jspb.BinaryReader): CreateCustomerOrderRefundsInternallyResponse;
}

export namespace CreateCustomerOrderRefundsInternallyResponse {
  export type AsObject = {
    refundsList: Array<payments_models_pb.CustomerOrderRefundInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateCustomerOrderRefundInternallyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCustomerOrderRefundInternallyRequest;

  getOrderId(): string;
  setOrderId(value: string): UpdateCustomerOrderRefundInternallyRequest;

  getStatus(): payments_models_pb.CustomerOrderRefundStatusValue | undefined;
  setStatus(value?: payments_models_pb.CustomerOrderRefundStatusValue): UpdateCustomerOrderRefundInternallyRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateCustomerOrderRefundInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerOrderRefundInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerOrderRefundInternallyRequest): UpdateCustomerOrderRefundInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerOrderRefundInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerOrderRefundInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerOrderRefundInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerOrderRefundInternallyRequest;
}

export namespace UpdateCustomerOrderRefundInternallyRequest {
  export type AsObject = {
    id: string,
    orderId: string,
    status?: payments_models_pb.CustomerOrderRefundStatusValue.AsObject,
  }
}

export class UpdateCustomerOrderRefundsInternallyRequest extends jspb.Message {
  getRequestsList(): Array<UpdateCustomerOrderRefundInternallyRequest>;
  setRequestsList(value: Array<UpdateCustomerOrderRefundInternallyRequest>): UpdateCustomerOrderRefundsInternallyRequest;
  clearRequestsList(): UpdateCustomerOrderRefundsInternallyRequest;
  addRequests(value?: UpdateCustomerOrderRefundInternallyRequest, index?: number): UpdateCustomerOrderRefundInternallyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerOrderRefundsInternallyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerOrderRefundsInternallyRequest): UpdateCustomerOrderRefundsInternallyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerOrderRefundsInternallyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerOrderRefundsInternallyRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerOrderRefundsInternallyRequest, reader: jspb.BinaryReader): UpdateCustomerOrderRefundsInternallyRequest;
}

export namespace UpdateCustomerOrderRefundsInternallyRequest {
  export type AsObject = {
    requestsList: Array<UpdateCustomerOrderRefundInternallyRequest.AsObject>,
  }
}

export class UpdateCustomerOrderRefundsInternallyResponse extends jspb.Message {
  getRefundsList(): Array<payments_models_pb.CustomerOrderRefundInfo>;
  setRefundsList(value: Array<payments_models_pb.CustomerOrderRefundInfo>): UpdateCustomerOrderRefundsInternallyResponse;
  clearRefundsList(): UpdateCustomerOrderRefundsInternallyResponse;
  addRefunds(value?: payments_models_pb.CustomerOrderRefundInfo, index?: number): payments_models_pb.CustomerOrderRefundInfo;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateCustomerOrderRefundsInternallyResponse;
  hasError(): boolean;
  clearError(): UpdateCustomerOrderRefundsInternallyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerOrderRefundsInternallyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerOrderRefundsInternallyResponse): UpdateCustomerOrderRefundsInternallyResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerOrderRefundsInternallyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerOrderRefundsInternallyResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerOrderRefundsInternallyResponse, reader: jspb.BinaryReader): UpdateCustomerOrderRefundsInternallyResponse;
}

export namespace UpdateCustomerOrderRefundsInternallyResponse {
  export type AsObject = {
    refundsList: Array<payments_models_pb.CustomerOrderRefundInfo.AsObject>,
    error?: error_models_pb.Error.AsObject,
  }
}

