import * as jspb from 'google-protobuf'

import * as payments_enums_pb from '../payments/enums_pb';
import * as payments_models_pb from '../payments/models_pb';
import * as error_models_pb from '../error/models_pb';


export class GetEventTicketInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventTicketInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventTicketInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventTicketInfoRequest): GetEventTicketInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventTicketInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventTicketInfoRequest;
  static deserializeBinaryFromReader(message: GetEventTicketInfoRequest, reader: jspb.BinaryReader): GetEventTicketInfoRequest;
}

export namespace GetEventTicketInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetEventTicketInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventTicketInfo | undefined;
  setInfo(value?: payments_models_pb.EventTicketInfo): GetEventTicketInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventTicketInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventTicketInfoResponse;
  hasError(): boolean;
  clearError(): GetEventTicketInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventTicketInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventTicketInfoResponse): GetEventTicketInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventTicketInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventTicketInfoResponse;
  static deserializeBinaryFromReader(message: GetEventTicketInfoResponse, reader: jspb.BinaryReader): GetEventTicketInfoResponse;
}

export namespace GetEventTicketInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.EventTicketInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventTicketsRequest extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): ListEventTicketsRequest;

  getOffset(): number;
  setOffset(value: number): ListEventTicketsRequest;

  getLimit(): number;
  setLimit(value: number): ListEventTicketsRequest;

  getOrder(): string;
  setOrder(value: string): ListEventTicketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventTicketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventTicketsRequest): ListEventTicketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventTicketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventTicketsRequest;
  static deserializeBinaryFromReader(message: ListEventTicketsRequest, reader: jspb.BinaryReader): ListEventTicketsRequest;
}

export namespace ListEventTicketsRequest {
  export type AsObject = {
    eventId: string,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventTicketsResponse extends jspb.Message {
  getTicketsList(): Array<payments_models_pb.EventTicketInfo>;
  setTicketsList(value: Array<payments_models_pb.EventTicketInfo>): ListEventTicketsResponse;
  clearTicketsList(): ListEventTicketsResponse;
  addTickets(value?: payments_models_pb.EventTicketInfo, index?: number): payments_models_pb.EventTicketInfo;

  getTotal(): number;
  setTotal(value: number): ListEventTicketsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventTicketsResponse;
  hasError(): boolean;
  clearError(): ListEventTicketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventTicketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventTicketsResponse): ListEventTicketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventTicketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventTicketsResponse;
  static deserializeBinaryFromReader(message: ListEventTicketsResponse, reader: jspb.BinaryReader): ListEventTicketsResponse;
}

export namespace ListEventTicketsResponse {
  export type AsObject = {
    ticketsList: Array<payments_models_pb.EventTicketInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventTicketsRequest extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): CountEventTicketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventTicketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventTicketsRequest): CountEventTicketsRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventTicketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventTicketsRequest;
  static deserializeBinaryFromReader(message: CountEventTicketsRequest, reader: jspb.BinaryReader): CountEventTicketsRequest;
}

export namespace CountEventTicketsRequest {
  export type AsObject = {
    eventId: string,
  }
}

export class CountEventTicketsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventTicketsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventTicketsResponse;
  hasError(): boolean;
  clearError(): CountEventTicketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventTicketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventTicketsResponse): CountEventTicketsResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventTicketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventTicketsResponse;
  static deserializeBinaryFromReader(message: CountEventTicketsResponse, reader: jspb.BinaryReader): CountEventTicketsResponse;
}

export namespace CountEventTicketsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventTicketRequest extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): CreateEventTicketRequest;

  getUsages(): number;
  setUsages(value: number): CreateEventTicketRequest;

  getType(): payments_enums_pb.EventTicketType;
  setType(value: payments_enums_pb.EventTicketType): CreateEventTicketRequest;

  getStatus(): payments_enums_pb.EventTicketStatus;
  setStatus(value: payments_enums_pb.EventTicketStatus): CreateEventTicketRequest;

  getVouchersList(): Array<payments_models_pb.CreatesEventTicketVoucher>;
  setVouchersList(value: Array<payments_models_pb.CreatesEventTicketVoucher>): CreateEventTicketRequest;
  clearVouchersList(): CreateEventTicketRequest;
  addVouchers(value?: payments_models_pb.CreatesEventTicketVoucher, index?: number): payments_models_pb.CreatesEventTicketVoucher;

  getMetadata(): payments_models_pb.EventTicketMetadata | undefined;
  setMetadata(value?: payments_models_pb.EventTicketMetadata): CreateEventTicketRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateEventTicketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketRequest): CreateEventTicketRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketRequest;
  static deserializeBinaryFromReader(message: CreateEventTicketRequest, reader: jspb.BinaryReader): CreateEventTicketRequest;
}

export namespace CreateEventTicketRequest {
  export type AsObject = {
    eventId: string,
    usages: number,
    type: payments_enums_pb.EventTicketType,
    status: payments_enums_pb.EventTicketStatus,
    vouchersList: Array<payments_models_pb.CreatesEventTicketVoucher.AsObject>,
    metadata?: payments_models_pb.EventTicketMetadata.AsObject,
  }
}

export class CreateEventTicketResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventTicketInfo | undefined;
  setInfo(value?: payments_models_pb.EventTicketInfo): CreateEventTicketResponse;
  hasInfo(): boolean;
  clearInfo(): CreateEventTicketResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventTicketResponse;
  hasError(): boolean;
  clearError(): CreateEventTicketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketResponse): CreateEventTicketResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketResponse;
  static deserializeBinaryFromReader(message: CreateEventTicketResponse, reader: jspb.BinaryReader): CreateEventTicketResponse;
}

export namespace CreateEventTicketResponse {
  export type AsObject = {
    info?: payments_models_pb.EventTicketInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventTicketRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventTicketRequest;

  getUsages(): payments_models_pb.EventTicketUsagesValue | undefined;
  setUsages(value?: payments_models_pb.EventTicketUsagesValue): UpdateEventTicketRequest;
  hasUsages(): boolean;
  clearUsages(): UpdateEventTicketRequest;

  getStatus(): payments_models_pb.EventTicketStatusValue | undefined;
  setStatus(value?: payments_models_pb.EventTicketStatusValue): UpdateEventTicketRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateEventTicketRequest;

  getMetadata(): payments_models_pb.EventTicketMetadataValue | undefined;
  setMetadata(value?: payments_models_pb.EventTicketMetadataValue): UpdateEventTicketRequest;
  hasMetadata(): boolean;
  clearMetadata(): UpdateEventTicketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketRequest): UpdateEventTicketRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketRequest;
  static deserializeBinaryFromReader(message: UpdateEventTicketRequest, reader: jspb.BinaryReader): UpdateEventTicketRequest;
}

export namespace UpdateEventTicketRequest {
  export type AsObject = {
    id: string,
    usages?: payments_models_pb.EventTicketUsagesValue.AsObject,
    status?: payments_models_pb.EventTicketStatusValue.AsObject,
    metadata?: payments_models_pb.EventTicketMetadataValue.AsObject,
  }
}

export class UpdateEventTicketResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventTicketInfo | undefined;
  setInfo(value?: payments_models_pb.EventTicketInfo): UpdateEventTicketResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateEventTicketResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventTicketResponse;
  hasError(): boolean;
  clearError(): UpdateEventTicketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketResponse): UpdateEventTicketResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketResponse;
  static deserializeBinaryFromReader(message: UpdateEventTicketResponse, reader: jspb.BinaryReader): UpdateEventTicketResponse;
}

export namespace UpdateEventTicketResponse {
  export type AsObject = {
    info?: payments_models_pb.EventTicketInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventTicketRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventTicketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketRequest): DeleteEventTicketRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketRequest;
  static deserializeBinaryFromReader(message: DeleteEventTicketRequest, reader: jspb.BinaryReader): DeleteEventTicketRequest;
}

export namespace DeleteEventTicketRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventTicketResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventTicketResponse;
  hasError(): boolean;
  clearError(): DeleteEventTicketResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketResponse): DeleteEventTicketResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketResponse;
  static deserializeBinaryFromReader(message: DeleteEventTicketResponse, reader: jspb.BinaryReader): DeleteEventTicketResponse;
}

export namespace DeleteEventTicketResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class PurchaseEventTicketsRequest extends jspb.Message {
  getPaymentId(): string;
  setPaymentId(value: string): PurchaseEventTicketsRequest;

  getVoucherIdsList(): Array<string>;
  setVoucherIdsList(value: Array<string>): PurchaseEventTicketsRequest;
  clearVoucherIdsList(): PurchaseEventTicketsRequest;
  addVoucherIds(value: string, index?: number): PurchaseEventTicketsRequest;

  getTicketsList(): Array<payments_models_pb.CustomerOrderTicket>;
  setTicketsList(value: Array<payments_models_pb.CustomerOrderTicket>): PurchaseEventTicketsRequest;
  clearTicketsList(): PurchaseEventTicketsRequest;
  addTickets(value?: payments_models_pb.CustomerOrderTicket, index?: number): payments_models_pb.CustomerOrderTicket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseEventTicketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseEventTicketsRequest): PurchaseEventTicketsRequest.AsObject;
  static serializeBinaryToWriter(message: PurchaseEventTicketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseEventTicketsRequest;
  static deserializeBinaryFromReader(message: PurchaseEventTicketsRequest, reader: jspb.BinaryReader): PurchaseEventTicketsRequest;
}

export namespace PurchaseEventTicketsRequest {
  export type AsObject = {
    paymentId: string,
    voucherIdsList: Array<string>,
    ticketsList: Array<payments_models_pb.CustomerOrderTicket.AsObject>,
  }
}

export class PurchaseEventTicketsResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerOrderInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerOrderInfo): PurchaseEventTicketsResponse;
  hasInfo(): boolean;
  clearInfo(): PurchaseEventTicketsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): PurchaseEventTicketsResponse;
  hasError(): boolean;
  clearError(): PurchaseEventTicketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseEventTicketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseEventTicketsResponse): PurchaseEventTicketsResponse.AsObject;
  static serializeBinaryToWriter(message: PurchaseEventTicketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseEventTicketsResponse;
  static deserializeBinaryFromReader(message: PurchaseEventTicketsResponse, reader: jspb.BinaryReader): PurchaseEventTicketsResponse;
}

export namespace PurchaseEventTicketsResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerOrderInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventProductInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetEventProductInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventProductInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventProductInfoRequest): GetEventProductInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventProductInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventProductInfoRequest;
  static deserializeBinaryFromReader(message: GetEventProductInfoRequest, reader: jspb.BinaryReader): GetEventProductInfoRequest;
}

export namespace GetEventProductInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetEventProductInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventProductInfo | undefined;
  setInfo(value?: payments_models_pb.EventProductInfo): GetEventProductInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventProductInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventProductInfoResponse;
  hasError(): boolean;
  clearError(): GetEventProductInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventProductInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventProductInfoResponse): GetEventProductInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventProductInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventProductInfoResponse;
  static deserializeBinaryFromReader(message: GetEventProductInfoResponse, reader: jspb.BinaryReader): GetEventProductInfoResponse;
}

export namespace GetEventProductInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.EventProductInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventProductsRequest extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): ListEventProductsRequest;

  getOffset(): number;
  setOffset(value: number): ListEventProductsRequest;

  getLimit(): number;
  setLimit(value: number): ListEventProductsRequest;

  getOrder(): string;
  setOrder(value: string): ListEventProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventProductsRequest): ListEventProductsRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventProductsRequest;
  static deserializeBinaryFromReader(message: ListEventProductsRequest, reader: jspb.BinaryReader): ListEventProductsRequest;
}

export namespace ListEventProductsRequest {
  export type AsObject = {
    eventId: string,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventProductsResponse extends jspb.Message {
  getProductsList(): Array<payments_models_pb.EventProductInfo>;
  setProductsList(value: Array<payments_models_pb.EventProductInfo>): ListEventProductsResponse;
  clearProductsList(): ListEventProductsResponse;
  addProducts(value?: payments_models_pb.EventProductInfo, index?: number): payments_models_pb.EventProductInfo;

  getTotal(): number;
  setTotal(value: number): ListEventProductsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventProductsResponse;
  hasError(): boolean;
  clearError(): ListEventProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventProductsResponse): ListEventProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventProductsResponse;
  static deserializeBinaryFromReader(message: ListEventProductsResponse, reader: jspb.BinaryReader): ListEventProductsResponse;
}

export namespace ListEventProductsResponse {
  export type AsObject = {
    productsList: Array<payments_models_pb.EventProductInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventProductsRequest extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): CountEventProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventProductsRequest): CountEventProductsRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventProductsRequest;
  static deserializeBinaryFromReader(message: CountEventProductsRequest, reader: jspb.BinaryReader): CountEventProductsRequest;
}

export namespace CountEventProductsRequest {
  export type AsObject = {
    eventId: string,
  }
}

export class CountEventProductsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventProductsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventProductsResponse;
  hasError(): boolean;
  clearError(): CountEventProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventProductsResponse): CountEventProductsResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventProductsResponse;
  static deserializeBinaryFromReader(message: CountEventProductsResponse, reader: jspb.BinaryReader): CountEventProductsResponse;
}

export namespace CountEventProductsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventProductRequest extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): CreateEventProductRequest;

  getKind(): string;
  setKind(value: string): CreateEventProductRequest;

  getName(): string;
  setName(value: string): CreateEventProductRequest;

  getDescription(): string;
  setDescription(value: string): CreateEventProductRequest;

  getStock(): number;
  setStock(value: number): CreateEventProductRequest;

  getImageUrlsList(): Array<string>;
  setImageUrlsList(value: Array<string>): CreateEventProductRequest;
  clearImageUrlsList(): CreateEventProductRequest;
  addImageUrls(value: string, index?: number): CreateEventProductRequest;

  getStatus(): payments_enums_pb.EventProductStatus;
  setStatus(value: payments_enums_pb.EventProductStatus): CreateEventProductRequest;

  getMetadata(): payments_models_pb.EventProductMetadata | undefined;
  setMetadata(value?: payments_models_pb.EventProductMetadata): CreateEventProductRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateEventProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventProductRequest): CreateEventProductRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventProductRequest;
  static deserializeBinaryFromReader(message: CreateEventProductRequest, reader: jspb.BinaryReader): CreateEventProductRequest;
}

export namespace CreateEventProductRequest {
  export type AsObject = {
    eventId: string,
    kind: string,
    name: string,
    description: string,
    stock: number,
    imageUrlsList: Array<string>,
    status: payments_enums_pb.EventProductStatus,
    metadata?: payments_models_pb.EventProductMetadata.AsObject,
  }
}

export class CreateEventProductResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventProductInfo | undefined;
  setInfo(value?: payments_models_pb.EventProductInfo): CreateEventProductResponse;
  hasInfo(): boolean;
  clearInfo(): CreateEventProductResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventProductResponse;
  hasError(): boolean;
  clearError(): CreateEventProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventProductResponse): CreateEventProductResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventProductResponse;
  static deserializeBinaryFromReader(message: CreateEventProductResponse, reader: jspb.BinaryReader): CreateEventProductResponse;
}

export namespace CreateEventProductResponse {
  export type AsObject = {
    info?: payments_models_pb.EventProductInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventProductRequest;

  getKind(): payments_models_pb.EventProductKindValue | undefined;
  setKind(value?: payments_models_pb.EventProductKindValue): UpdateEventProductRequest;
  hasKind(): boolean;
  clearKind(): UpdateEventProductRequest;

  getName(): payments_models_pb.EventProductNameValue | undefined;
  setName(value?: payments_models_pb.EventProductNameValue): UpdateEventProductRequest;
  hasName(): boolean;
  clearName(): UpdateEventProductRequest;

  getDescription(): payments_models_pb.EventProductDescriptionValue | undefined;
  setDescription(value?: payments_models_pb.EventProductDescriptionValue): UpdateEventProductRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateEventProductRequest;

  getStock(): payments_models_pb.EventProductStockValue | undefined;
  setStock(value?: payments_models_pb.EventProductStockValue): UpdateEventProductRequest;
  hasStock(): boolean;
  clearStock(): UpdateEventProductRequest;

  getMetadata(): payments_models_pb.EventProductMetadataValue | undefined;
  setMetadata(value?: payments_models_pb.EventProductMetadataValue): UpdateEventProductRequest;
  hasMetadata(): boolean;
  clearMetadata(): UpdateEventProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventProductRequest): UpdateEventProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventProductRequest;
  static deserializeBinaryFromReader(message: UpdateEventProductRequest, reader: jspb.BinaryReader): UpdateEventProductRequest;
}

export namespace UpdateEventProductRequest {
  export type AsObject = {
    id: string,
    kind?: payments_models_pb.EventProductKindValue.AsObject,
    name?: payments_models_pb.EventProductNameValue.AsObject,
    description?: payments_models_pb.EventProductDescriptionValue.AsObject,
    stock?: payments_models_pb.EventProductStockValue.AsObject,
    metadata?: payments_models_pb.EventProductMetadataValue.AsObject,
  }
}

export class UpdateEventProductResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventProductInfo | undefined;
  setInfo(value?: payments_models_pb.EventProductInfo): UpdateEventProductResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateEventProductResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventProductResponse;
  hasError(): boolean;
  clearError(): UpdateEventProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventProductResponse): UpdateEventProductResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventProductResponse;
  static deserializeBinaryFromReader(message: UpdateEventProductResponse, reader: jspb.BinaryReader): UpdateEventProductResponse;
}

export namespace UpdateEventProductResponse {
  export type AsObject = {
    info?: payments_models_pb.EventProductInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventProductRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventProductRequest): DeleteEventProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventProductRequest;
  static deserializeBinaryFromReader(message: DeleteEventProductRequest, reader: jspb.BinaryReader): DeleteEventProductRequest;
}

export namespace DeleteEventProductRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventProductResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventProductResponse;
  hasError(): boolean;
  clearError(): DeleteEventProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventProductResponse): DeleteEventProductResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventProductResponse;
  static deserializeBinaryFromReader(message: DeleteEventProductResponse, reader: jspb.BinaryReader): DeleteEventProductResponse;
}

export namespace DeleteEventProductResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class PurchaseEventProductsRequest extends jspb.Message {
  getAddressId(): string;
  setAddressId(value: string): PurchaseEventProductsRequest;

  getPaymentId(): string;
  setPaymentId(value: string): PurchaseEventProductsRequest;

  getProductsList(): Array<payments_models_pb.CustomerOrderProduct>;
  setProductsList(value: Array<payments_models_pb.CustomerOrderProduct>): PurchaseEventProductsRequest;
  clearProductsList(): PurchaseEventProductsRequest;
  addProducts(value?: payments_models_pb.CustomerOrderProduct, index?: number): payments_models_pb.CustomerOrderProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseEventProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseEventProductsRequest): PurchaseEventProductsRequest.AsObject;
  static serializeBinaryToWriter(message: PurchaseEventProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseEventProductsRequest;
  static deserializeBinaryFromReader(message: PurchaseEventProductsRequest, reader: jspb.BinaryReader): PurchaseEventProductsRequest;
}

export namespace PurchaseEventProductsRequest {
  export type AsObject = {
    addressId: string,
    paymentId: string,
    productsList: Array<payments_models_pb.CustomerOrderProduct.AsObject>,
  }
}

export class PurchaseEventProductsResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerOrderInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerOrderInfo): PurchaseEventProductsResponse;
  hasInfo(): boolean;
  clearInfo(): PurchaseEventProductsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): PurchaseEventProductsResponse;
  hasError(): boolean;
  clearError(): PurchaseEventProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseEventProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseEventProductsResponse): PurchaseEventProductsResponse.AsObject;
  static serializeBinaryToWriter(message: PurchaseEventProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseEventProductsResponse;
  static deserializeBinaryFromReader(message: PurchaseEventProductsResponse, reader: jspb.BinaryReader): PurchaseEventProductsResponse;
}

export namespace PurchaseEventProductsResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerOrderInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetEventTicketVoucherInfoRequest extends jspb.Message {
  getPid(): string;
  setPid(value: string): GetEventTicketVoucherInfoRequest;

  getTicketId(): string;
  setTicketId(value: string): GetEventTicketVoucherInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventTicketVoucherInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventTicketVoucherInfoRequest): GetEventTicketVoucherInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetEventTicketVoucherInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventTicketVoucherInfoRequest;
  static deserializeBinaryFromReader(message: GetEventTicketVoucherInfoRequest, reader: jspb.BinaryReader): GetEventTicketVoucherInfoRequest;
}

export namespace GetEventTicketVoucherInfoRequest {
  export type AsObject = {
    pid: string,
    ticketId: string,
  }
}

export class GetEventTicketVoucherInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventTicketVoucherInfo | undefined;
  setInfo(value?: payments_models_pb.EventTicketVoucherInfo): GetEventTicketVoucherInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetEventTicketVoucherInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetEventTicketVoucherInfoResponse;
  hasError(): boolean;
  clearError(): GetEventTicketVoucherInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventTicketVoucherInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventTicketVoucherInfoResponse): GetEventTicketVoucherInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetEventTicketVoucherInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventTicketVoucherInfoResponse;
  static deserializeBinaryFromReader(message: GetEventTicketVoucherInfoResponse, reader: jspb.BinaryReader): GetEventTicketVoucherInfoResponse;
}

export namespace GetEventTicketVoucherInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.EventTicketVoucherInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListEventTicketVouchersRequest extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): ListEventTicketVouchersRequest;

  getOffset(): number;
  setOffset(value: number): ListEventTicketVouchersRequest;

  getLimit(): number;
  setLimit(value: number): ListEventTicketVouchersRequest;

  getOrder(): string;
  setOrder(value: string): ListEventTicketVouchersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventTicketVouchersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventTicketVouchersRequest): ListEventTicketVouchersRequest.AsObject;
  static serializeBinaryToWriter(message: ListEventTicketVouchersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventTicketVouchersRequest;
  static deserializeBinaryFromReader(message: ListEventTicketVouchersRequest, reader: jspb.BinaryReader): ListEventTicketVouchersRequest;
}

export namespace ListEventTicketVouchersRequest {
  export type AsObject = {
    ticketId: string,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListEventTicketVouchersResponse extends jspb.Message {
  getVouchersList(): Array<payments_models_pb.EventTicketVoucherInfo>;
  setVouchersList(value: Array<payments_models_pb.EventTicketVoucherInfo>): ListEventTicketVouchersResponse;
  clearVouchersList(): ListEventTicketVouchersResponse;
  addVouchers(value?: payments_models_pb.EventTicketVoucherInfo, index?: number): payments_models_pb.EventTicketVoucherInfo;

  getTotal(): number;
  setTotal(value: number): ListEventTicketVouchersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListEventTicketVouchersResponse;
  hasError(): boolean;
  clearError(): ListEventTicketVouchersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventTicketVouchersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventTicketVouchersResponse): ListEventTicketVouchersResponse.AsObject;
  static serializeBinaryToWriter(message: ListEventTicketVouchersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventTicketVouchersResponse;
  static deserializeBinaryFromReader(message: ListEventTicketVouchersResponse, reader: jspb.BinaryReader): ListEventTicketVouchersResponse;
}

export namespace ListEventTicketVouchersResponse {
  export type AsObject = {
    vouchersList: Array<payments_models_pb.EventTicketVoucherInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountEventTicketVouchersRequest extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): CountEventTicketVouchersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventTicketVouchersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventTicketVouchersRequest): CountEventTicketVouchersRequest.AsObject;
  static serializeBinaryToWriter(message: CountEventTicketVouchersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventTicketVouchersRequest;
  static deserializeBinaryFromReader(message: CountEventTicketVouchersRequest, reader: jspb.BinaryReader): CountEventTicketVouchersRequest;
}

export namespace CountEventTicketVouchersRequest {
  export type AsObject = {
    ticketId: string,
  }
}

export class CountEventTicketVouchersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountEventTicketVouchersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountEventTicketVouchersResponse;
  hasError(): boolean;
  clearError(): CountEventTicketVouchersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountEventTicketVouchersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountEventTicketVouchersResponse): CountEventTicketVouchersResponse.AsObject;
  static serializeBinaryToWriter(message: CountEventTicketVouchersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountEventTicketVouchersResponse;
  static deserializeBinaryFromReader(message: CountEventTicketVouchersResponse, reader: jspb.BinaryReader): CountEventTicketVouchersResponse;
}

export namespace CountEventTicketVouchersResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateEventTicketVoucherRequest extends jspb.Message {
  getPid(): string;
  setPid(value: string): CreateEventTicketVoucherRequest;

  getTicketId(): string;
  setTicketId(value: string): CreateEventTicketVoucherRequest;

  getStatus(): payments_enums_pb.EventTicketVoucherStatus;
  setStatus(value: payments_enums_pb.EventTicketVoucherStatus): CreateEventTicketVoucherRequest;

  getUsages(): number;
  setUsages(value: number): CreateEventTicketVoucherRequest;

  getAmount(): number;
  setAmount(value: number): CreateEventTicketVoucherRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketVoucherRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketVoucherRequest): CreateEventTicketVoucherRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketVoucherRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketVoucherRequest;
  static deserializeBinaryFromReader(message: CreateEventTicketVoucherRequest, reader: jspb.BinaryReader): CreateEventTicketVoucherRequest;
}

export namespace CreateEventTicketVoucherRequest {
  export type AsObject = {
    pid: string,
    ticketId: string,
    status: payments_enums_pb.EventTicketVoucherStatus,
    usages: number,
    amount: number,
  }
}

export class CreateEventTicketVoucherResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventTicketVoucherInfo | undefined;
  setInfo(value?: payments_models_pb.EventTicketVoucherInfo): CreateEventTicketVoucherResponse;
  hasInfo(): boolean;
  clearInfo(): CreateEventTicketVoucherResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateEventTicketVoucherResponse;
  hasError(): boolean;
  clearError(): CreateEventTicketVoucherResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventTicketVoucherResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventTicketVoucherResponse): CreateEventTicketVoucherResponse.AsObject;
  static serializeBinaryToWriter(message: CreateEventTicketVoucherResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventTicketVoucherResponse;
  static deserializeBinaryFromReader(message: CreateEventTicketVoucherResponse, reader: jspb.BinaryReader): CreateEventTicketVoucherResponse;
}

export namespace CreateEventTicketVoucherResponse {
  export type AsObject = {
    info?: payments_models_pb.EventTicketVoucherInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateEventTicketVoucherRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateEventTicketVoucherRequest;

  getStatus(): payments_models_pb.EventTicketVoucherStatusValue | undefined;
  setStatus(value?: payments_models_pb.EventTicketVoucherStatusValue): UpdateEventTicketVoucherRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateEventTicketVoucherRequest;

  getUsages(): payments_models_pb.EventTicketVoucherUsagesValue | undefined;
  setUsages(value?: payments_models_pb.EventTicketVoucherUsagesValue): UpdateEventTicketVoucherRequest;
  hasUsages(): boolean;
  clearUsages(): UpdateEventTicketVoucherRequest;

  getAmount(): payments_models_pb.EventTicketVoucherAmountValue | undefined;
  setAmount(value?: payments_models_pb.EventTicketVoucherAmountValue): UpdateEventTicketVoucherRequest;
  hasAmount(): boolean;
  clearAmount(): UpdateEventTicketVoucherRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketVoucherRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketVoucherRequest): UpdateEventTicketVoucherRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketVoucherRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketVoucherRequest;
  static deserializeBinaryFromReader(message: UpdateEventTicketVoucherRequest, reader: jspb.BinaryReader): UpdateEventTicketVoucherRequest;
}

export namespace UpdateEventTicketVoucherRequest {
  export type AsObject = {
    id: string,
    status?: payments_models_pb.EventTicketVoucherStatusValue.AsObject,
    usages?: payments_models_pb.EventTicketVoucherUsagesValue.AsObject,
    amount?: payments_models_pb.EventTicketVoucherAmountValue.AsObject,
  }
}

export class UpdateEventTicketVoucherResponse extends jspb.Message {
  getInfo(): payments_models_pb.EventTicketVoucherInfo | undefined;
  setInfo(value?: payments_models_pb.EventTicketVoucherInfo): UpdateEventTicketVoucherResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateEventTicketVoucherResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateEventTicketVoucherResponse;
  hasError(): boolean;
  clearError(): UpdateEventTicketVoucherResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEventTicketVoucherResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEventTicketVoucherResponse): UpdateEventTicketVoucherResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateEventTicketVoucherResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEventTicketVoucherResponse;
  static deserializeBinaryFromReader(message: UpdateEventTicketVoucherResponse, reader: jspb.BinaryReader): UpdateEventTicketVoucherResponse;
}

export namespace UpdateEventTicketVoucherResponse {
  export type AsObject = {
    info?: payments_models_pb.EventTicketVoucherInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteEventTicketVoucherRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteEventTicketVoucherRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketVoucherRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketVoucherRequest): DeleteEventTicketVoucherRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketVoucherRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketVoucherRequest;
  static deserializeBinaryFromReader(message: DeleteEventTicketVoucherRequest, reader: jspb.BinaryReader): DeleteEventTicketVoucherRequest;
}

export namespace DeleteEventTicketVoucherRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteEventTicketVoucherResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteEventTicketVoucherResponse;
  hasError(): boolean;
  clearError(): DeleteEventTicketVoucherResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventTicketVoucherResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventTicketVoucherResponse): DeleteEventTicketVoucherResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteEventTicketVoucherResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventTicketVoucherResponse;
  static deserializeBinaryFromReader(message: DeleteEventTicketVoucherResponse, reader: jspb.BinaryReader): DeleteEventTicketVoucherResponse;
}

export namespace DeleteEventTicketVoucherResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetPartnerInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPartnerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPartnerInfoRequest): GetPartnerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetPartnerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPartnerInfoRequest;
  static deserializeBinaryFromReader(message: GetPartnerInfoRequest, reader: jspb.BinaryReader): GetPartnerInfoRequest;
}

export namespace GetPartnerInfoRequest {
  export type AsObject = {
  }
}

export class GetPartnerInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.PartnerInfo | undefined;
  setInfo(value?: payments_models_pb.PartnerInfo): GetPartnerInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetPartnerInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetPartnerInfoResponse;
  hasError(): boolean;
  clearError(): GetPartnerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPartnerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPartnerInfoResponse): GetPartnerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetPartnerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPartnerInfoResponse;
  static deserializeBinaryFromReader(message: GetPartnerInfoResponse, reader: jspb.BinaryReader): GetPartnerInfoResponse;
}

export namespace GetPartnerInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.PartnerInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetPartnerDashboardRequest extends jspb.Message {
  getReturnUrl(): string;
  setReturnUrl(value: string): GetPartnerDashboardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPartnerDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPartnerDashboardRequest): GetPartnerDashboardRequest.AsObject;
  static serializeBinaryToWriter(message: GetPartnerDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPartnerDashboardRequest;
  static deserializeBinaryFromReader(message: GetPartnerDashboardRequest, reader: jspb.BinaryReader): GetPartnerDashboardRequest;
}

export namespace GetPartnerDashboardRequest {
  export type AsObject = {
    returnUrl: string,
  }
}

export class GetPartnerDashboardResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GetPartnerDashboardResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetPartnerDashboardResponse;
  hasError(): boolean;
  clearError(): GetPartnerDashboardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPartnerDashboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPartnerDashboardResponse): GetPartnerDashboardResponse.AsObject;
  static serializeBinaryToWriter(message: GetPartnerDashboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPartnerDashboardResponse;
  static deserializeBinaryFromReader(message: GetPartnerDashboardResponse, reader: jspb.BinaryReader): GetPartnerDashboardResponse;
}

export namespace GetPartnerDashboardResponse {
  export type AsObject = {
    url: string,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListPartnersRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListPartnersRequest;
  clearIdsList(): ListPartnersRequest;
  addIds(value: string, index?: number): ListPartnersRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListPartnersRequest;
  clearUserIdsList(): ListPartnersRequest;
  addUserIds(value: string, index?: number): ListPartnersRequest;

  getOffset(): number;
  setOffset(value: number): ListPartnersRequest;

  getLimit(): number;
  setLimit(value: number): ListPartnersRequest;

  getOrder(): string;
  setOrder(value: string): ListPartnersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnersRequest): ListPartnersRequest.AsObject;
  static serializeBinaryToWriter(message: ListPartnersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnersRequest;
  static deserializeBinaryFromReader(message: ListPartnersRequest, reader: jspb.BinaryReader): ListPartnersRequest;
}

export namespace ListPartnersRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListPartnersResponse extends jspb.Message {
  getPartnersList(): Array<payments_models_pb.PartnerInfo>;
  setPartnersList(value: Array<payments_models_pb.PartnerInfo>): ListPartnersResponse;
  clearPartnersList(): ListPartnersResponse;
  addPartners(value?: payments_models_pb.PartnerInfo, index?: number): payments_models_pb.PartnerInfo;

  getTotal(): number;
  setTotal(value: number): ListPartnersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListPartnersResponse;
  hasError(): boolean;
  clearError(): ListPartnersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnersResponse): ListPartnersResponse.AsObject;
  static serializeBinaryToWriter(message: ListPartnersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnersResponse;
  static deserializeBinaryFromReader(message: ListPartnersResponse, reader: jspb.BinaryReader): ListPartnersResponse;
}

export namespace ListPartnersResponse {
  export type AsObject = {
    partnersList: Array<payments_models_pb.PartnerInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountPartnersRequest extends jspb.Message {
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountPartnersRequest;
  clearUserIdsList(): CountPartnersRequest;
  addUserIds(value: string, index?: number): CountPartnersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountPartnersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountPartnersRequest): CountPartnersRequest.AsObject;
  static serializeBinaryToWriter(message: CountPartnersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountPartnersRequest;
  static deserializeBinaryFromReader(message: CountPartnersRequest, reader: jspb.BinaryReader): CountPartnersRequest;
}

export namespace CountPartnersRequest {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class CountPartnersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountPartnersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountPartnersResponse;
  hasError(): boolean;
  clearError(): CountPartnersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountPartnersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountPartnersResponse): CountPartnersResponse.AsObject;
  static serializeBinaryToWriter(message: CountPartnersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountPartnersResponse;
  static deserializeBinaryFromReader(message: CountPartnersResponse, reader: jspb.BinaryReader): CountPartnersResponse;
}

export namespace CountPartnersResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeletePartnerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeletePartnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePartnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePartnerRequest): DeletePartnerRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePartnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePartnerRequest;
  static deserializeBinaryFromReader(message: DeletePartnerRequest, reader: jspb.BinaryReader): DeletePartnerRequest;
}

export namespace DeletePartnerRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeletePartnerResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeletePartnerResponse;
  hasError(): boolean;
  clearError(): DeletePartnerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePartnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePartnerResponse): DeletePartnerResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePartnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePartnerResponse;
  static deserializeBinaryFromReader(message: DeletePartnerResponse, reader: jspb.BinaryReader): DeletePartnerResponse;
}

export namespace DeletePartnerResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class ActivatePartnerRequest extends jspb.Message {
  getReturnUrl(): string;
  setReturnUrl(value: string): ActivatePartnerRequest;

  getRefreshUrl(): string;
  setRefreshUrl(value: string): ActivatePartnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivatePartnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivatePartnerRequest): ActivatePartnerRequest.AsObject;
  static serializeBinaryToWriter(message: ActivatePartnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivatePartnerRequest;
  static deserializeBinaryFromReader(message: ActivatePartnerRequest, reader: jspb.BinaryReader): ActivatePartnerRequest;
}

export namespace ActivatePartnerRequest {
  export type AsObject = {
    returnUrl: string,
    refreshUrl: string,
  }
}

export class ActivatePartnerResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): ActivatePartnerResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ActivatePartnerResponse;
  hasError(): boolean;
  clearError(): ActivatePartnerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivatePartnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivatePartnerResponse): ActivatePartnerResponse.AsObject;
  static serializeBinaryToWriter(message: ActivatePartnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivatePartnerResponse;
  static deserializeBinaryFromReader(message: ActivatePartnerResponse, reader: jspb.BinaryReader): ActivatePartnerResponse;
}

export namespace ActivatePartnerResponse {
  export type AsObject = {
    url: string,
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerInfoRequest): GetCustomerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerInfoRequest;
  static deserializeBinaryFromReader(message: GetCustomerInfoRequest, reader: jspb.BinaryReader): GetCustomerInfoRequest;
}

export namespace GetCustomerInfoRequest {
  export type AsObject = {
  }
}

export class GetCustomerInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerInfo): GetCustomerInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerInfoResponse;
  hasError(): boolean;
  clearError(): GetCustomerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerInfoResponse): GetCustomerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerInfoResponse;
  static deserializeBinaryFromReader(message: GetCustomerInfoResponse, reader: jspb.BinaryReader): GetCustomerInfoResponse;
}

export namespace GetCustomerInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomersRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): ListCustomersRequest;
  clearIdsList(): ListCustomersRequest;
  addIds(value: string, index?: number): ListCustomersRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): ListCustomersRequest;
  clearUserIdsList(): ListCustomersRequest;
  addUserIds(value: string, index?: number): ListCustomersRequest;

  getOffset(): number;
  setOffset(value: number): ListCustomersRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomersRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomersRequest): ListCustomersRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomersRequest;
  static deserializeBinaryFromReader(message: ListCustomersRequest, reader: jspb.BinaryReader): ListCustomersRequest;
}

export namespace ListCustomersRequest {
  export type AsObject = {
    idsList: Array<string>,
    userIdsList: Array<string>,
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomersResponse extends jspb.Message {
  getCustomersList(): Array<payments_models_pb.CustomerInfo>;
  setCustomersList(value: Array<payments_models_pb.CustomerInfo>): ListCustomersResponse;
  clearCustomersList(): ListCustomersResponse;
  addCustomers(value?: payments_models_pb.CustomerInfo, index?: number): payments_models_pb.CustomerInfo;

  getTotal(): number;
  setTotal(value: number): ListCustomersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomersResponse;
  hasError(): boolean;
  clearError(): ListCustomersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomersResponse): ListCustomersResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomersResponse;
  static deserializeBinaryFromReader(message: ListCustomersResponse, reader: jspb.BinaryReader): ListCustomersResponse;
}

export namespace ListCustomersResponse {
  export type AsObject = {
    customersList: Array<payments_models_pb.CustomerInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomersRequest extends jspb.Message {
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CountCustomersRequest;
  clearUserIdsList(): CountCustomersRequest;
  addUserIds(value: string, index?: number): CountCustomersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomersRequest): CountCustomersRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomersRequest;
  static deserializeBinaryFromReader(message: CountCustomersRequest, reader: jspb.BinaryReader): CountCustomersRequest;
}

export namespace CountCustomersRequest {
  export type AsObject = {
    userIdsList: Array<string>,
  }
}

export class CountCustomersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomersResponse;
  hasError(): boolean;
  clearError(): CountCustomersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomersResponse): CountCustomersResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomersResponse;
  static deserializeBinaryFromReader(message: CountCustomersResponse, reader: jspb.BinaryReader): CountCustomersResponse;
}

export namespace CountCustomersResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteCustomerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerRequest): DeleteCustomerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerRequest, reader: jspb.BinaryReader): DeleteCustomerRequest;
}

export namespace DeleteCustomerRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteCustomerResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteCustomerResponse;
  hasError(): boolean;
  clearError(): DeleteCustomerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerResponse): DeleteCustomerResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerResponse;
  static deserializeBinaryFromReader(message: DeleteCustomerResponse, reader: jspb.BinaryReader): DeleteCustomerResponse;
}

export namespace DeleteCustomerResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerOrderInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerOrderInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerOrderInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerOrderInfoRequest): GetCustomerOrderInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerOrderInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerOrderInfoRequest;
  static deserializeBinaryFromReader(message: GetCustomerOrderInfoRequest, reader: jspb.BinaryReader): GetCustomerOrderInfoRequest;
}

export namespace GetCustomerOrderInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetCustomerOrderInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerOrderInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerOrderInfo): GetCustomerOrderInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerOrderInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerOrderInfoResponse;
  hasError(): boolean;
  clearError(): GetCustomerOrderInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerOrderInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerOrderInfoResponse): GetCustomerOrderInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerOrderInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerOrderInfoResponse;
  static deserializeBinaryFromReader(message: GetCustomerOrderInfoResponse, reader: jspb.BinaryReader): GetCustomerOrderInfoResponse;
}

export namespace GetCustomerOrderInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerOrderInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerOrdersRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListCustomerOrdersRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerOrdersRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerOrdersRequest): ListCustomerOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerOrdersRequest;
  static deserializeBinaryFromReader(message: ListCustomerOrdersRequest, reader: jspb.BinaryReader): ListCustomerOrdersRequest;
}

export namespace ListCustomerOrdersRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerOrdersResponse extends jspb.Message {
  getOrdersList(): Array<payments_models_pb.CustomerOrderInfo>;
  setOrdersList(value: Array<payments_models_pb.CustomerOrderInfo>): ListCustomerOrdersResponse;
  clearOrdersList(): ListCustomerOrdersResponse;
  addOrders(value?: payments_models_pb.CustomerOrderInfo, index?: number): payments_models_pb.CustomerOrderInfo;

  getTotal(): number;
  setTotal(value: number): ListCustomerOrdersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerOrdersResponse;
  hasError(): boolean;
  clearError(): ListCustomerOrdersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerOrdersResponse): ListCustomerOrdersResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerOrdersResponse;
  static deserializeBinaryFromReader(message: ListCustomerOrdersResponse, reader: jspb.BinaryReader): ListCustomerOrdersResponse;
}

export namespace ListCustomerOrdersResponse {
  export type AsObject = {
    ordersList: Array<payments_models_pb.CustomerOrderInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListPartnerOrdersRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListPartnerOrdersRequest;

  getLimit(): number;
  setLimit(value: number): ListPartnerOrdersRequest;

  getOrder(): string;
  setOrder(value: string): ListPartnerOrdersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnerOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnerOrdersRequest): ListPartnerOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: ListPartnerOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnerOrdersRequest;
  static deserializeBinaryFromReader(message: ListPartnerOrdersRequest, reader: jspb.BinaryReader): ListPartnerOrdersRequest;
}

export namespace ListPartnerOrdersRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListPartnerOrdersResponse extends jspb.Message {
  getOrdersList(): Array<payments_models_pb.CustomerOrderInfo>;
  setOrdersList(value: Array<payments_models_pb.CustomerOrderInfo>): ListPartnerOrdersResponse;
  clearOrdersList(): ListPartnerOrdersResponse;
  addOrders(value?: payments_models_pb.CustomerOrderInfo, index?: number): payments_models_pb.CustomerOrderInfo;

  getTotal(): number;
  setTotal(value: number): ListPartnerOrdersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListPartnerOrdersResponse;
  hasError(): boolean;
  clearError(): ListPartnerOrdersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPartnerOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPartnerOrdersResponse): ListPartnerOrdersResponse.AsObject;
  static serializeBinaryToWriter(message: ListPartnerOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPartnerOrdersResponse;
  static deserializeBinaryFromReader(message: ListPartnerOrdersResponse, reader: jspb.BinaryReader): ListPartnerOrdersResponse;
}

export namespace ListPartnerOrdersResponse {
  export type AsObject = {
    ordersList: Array<payments_models_pb.CustomerOrderInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerOrdersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerOrdersRequest): CountCustomerOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerOrdersRequest;
  static deserializeBinaryFromReader(message: CountCustomerOrdersRequest, reader: jspb.BinaryReader): CountCustomerOrdersRequest;
}

export namespace CountCustomerOrdersRequest {
  export type AsObject = {
  }
}

export class CountCustomerOrdersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerOrdersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerOrdersResponse;
  hasError(): boolean;
  clearError(): CountCustomerOrdersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerOrdersResponse): CountCustomerOrdersResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerOrdersResponse;
  static deserializeBinaryFromReader(message: CountCustomerOrdersResponse, reader: jspb.BinaryReader): CountCustomerOrdersResponse;
}

export namespace CountCustomerOrdersResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountPartnerOrdersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountPartnerOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountPartnerOrdersRequest): CountPartnerOrdersRequest.AsObject;
  static serializeBinaryToWriter(message: CountPartnerOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountPartnerOrdersRequest;
  static deserializeBinaryFromReader(message: CountPartnerOrdersRequest, reader: jspb.BinaryReader): CountPartnerOrdersRequest;
}

export namespace CountPartnerOrdersRequest {
  export type AsObject = {
  }
}

export class CountPartnerOrdersResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountPartnerOrdersResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountPartnerOrdersResponse;
  hasError(): boolean;
  clearError(): CountPartnerOrdersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountPartnerOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountPartnerOrdersResponse): CountPartnerOrdersResponse.AsObject;
  static serializeBinaryToWriter(message: CountPartnerOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountPartnerOrdersResponse;
  static deserializeBinaryFromReader(message: CountPartnerOrdersResponse, reader: jspb.BinaryReader): CountPartnerOrdersResponse;
}

export namespace CountPartnerOrdersResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class AcceptPartnerOrderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): AcceptPartnerOrderRequest;

  getTrackingUrl(): string;
  setTrackingUrl(value: string): AcceptPartnerOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptPartnerOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptPartnerOrderRequest): AcceptPartnerOrderRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptPartnerOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptPartnerOrderRequest;
  static deserializeBinaryFromReader(message: AcceptPartnerOrderRequest, reader: jspb.BinaryReader): AcceptPartnerOrderRequest;
}

export namespace AcceptPartnerOrderRequest {
  export type AsObject = {
    id: string,
    trackingUrl: string,
  }
}

export class AcceptPartnerOrderResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerOrderInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerOrderInfo): AcceptPartnerOrderResponse;
  hasInfo(): boolean;
  clearInfo(): AcceptPartnerOrderResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): AcceptPartnerOrderResponse;
  hasError(): boolean;
  clearError(): AcceptPartnerOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptPartnerOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptPartnerOrderResponse): AcceptPartnerOrderResponse.AsObject;
  static serializeBinaryToWriter(message: AcceptPartnerOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptPartnerOrderResponse;
  static deserializeBinaryFromReader(message: AcceptPartnerOrderResponse, reader: jspb.BinaryReader): AcceptPartnerOrderResponse;
}

export namespace AcceptPartnerOrderResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerOrderInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeclinePartnerOrderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeclinePartnerOrderRequest;

  getReason(): string;
  setReason(value: string): DeclinePartnerOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclinePartnerOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeclinePartnerOrderRequest): DeclinePartnerOrderRequest.AsObject;
  static serializeBinaryToWriter(message: DeclinePartnerOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclinePartnerOrderRequest;
  static deserializeBinaryFromReader(message: DeclinePartnerOrderRequest, reader: jspb.BinaryReader): DeclinePartnerOrderRequest;
}

export namespace DeclinePartnerOrderRequest {
  export type AsObject = {
    id: string,
    reason: string,
  }
}

export class DeclinePartnerOrderResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerOrderInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerOrderInfo): DeclinePartnerOrderResponse;
  hasInfo(): boolean;
  clearInfo(): DeclinePartnerOrderResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeclinePartnerOrderResponse;
  hasError(): boolean;
  clearError(): DeclinePartnerOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclinePartnerOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeclinePartnerOrderResponse): DeclinePartnerOrderResponse.AsObject;
  static serializeBinaryToWriter(message: DeclinePartnerOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclinePartnerOrderResponse;
  static deserializeBinaryFromReader(message: DeclinePartnerOrderResponse, reader: jspb.BinaryReader): DeclinePartnerOrderResponse;
}

export namespace DeclinePartnerOrderResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerOrderInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class RefundPartnerOrderRequest extends jspb.Message {
  getId(): string;
  setId(value: string): RefundPartnerOrderRequest;

  getReason(): string;
  setReason(value: string): RefundPartnerOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefundPartnerOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefundPartnerOrderRequest): RefundPartnerOrderRequest.AsObject;
  static serializeBinaryToWriter(message: RefundPartnerOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefundPartnerOrderRequest;
  static deserializeBinaryFromReader(message: RefundPartnerOrderRequest, reader: jspb.BinaryReader): RefundPartnerOrderRequest;
}

export namespace RefundPartnerOrderRequest {
  export type AsObject = {
    id: string,
    reason: string,
  }
}

export class RefundPartnerOrderResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): RefundPartnerOrderResponse;
  hasError(): boolean;
  clearError(): RefundPartnerOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefundPartnerOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefundPartnerOrderResponse): RefundPartnerOrderResponse.AsObject;
  static serializeBinaryToWriter(message: RefundPartnerOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefundPartnerOrderResponse;
  static deserializeBinaryFromReader(message: RefundPartnerOrderResponse, reader: jspb.BinaryReader): RefundPartnerOrderResponse;
}

export namespace RefundPartnerOrderResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerAddressInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerAddressInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerAddressInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerAddressInfoRequest): GetCustomerAddressInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerAddressInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerAddressInfoRequest;
  static deserializeBinaryFromReader(message: GetCustomerAddressInfoRequest, reader: jspb.BinaryReader): GetCustomerAddressInfoRequest;
}

export namespace GetCustomerAddressInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetCustomerAddressInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerAddressInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerAddressInfo): GetCustomerAddressInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerAddressInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerAddressInfoResponse;
  hasError(): boolean;
  clearError(): GetCustomerAddressInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerAddressInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerAddressInfoResponse): GetCustomerAddressInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerAddressInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerAddressInfoResponse;
  static deserializeBinaryFromReader(message: GetCustomerAddressInfoResponse, reader: jspb.BinaryReader): GetCustomerAddressInfoResponse;
}

export namespace GetCustomerAddressInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerAddressInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerAddressesRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListCustomerAddressesRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerAddressesRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerAddressesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerAddressesRequest): ListCustomerAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerAddressesRequest;
  static deserializeBinaryFromReader(message: ListCustomerAddressesRequest, reader: jspb.BinaryReader): ListCustomerAddressesRequest;
}

export namespace ListCustomerAddressesRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerAddressesResponse extends jspb.Message {
  getAddressesList(): Array<payments_models_pb.CustomerAddressInfo>;
  setAddressesList(value: Array<payments_models_pb.CustomerAddressInfo>): ListCustomerAddressesResponse;
  clearAddressesList(): ListCustomerAddressesResponse;
  addAddresses(value?: payments_models_pb.CustomerAddressInfo, index?: number): payments_models_pb.CustomerAddressInfo;

  getTotal(): number;
  setTotal(value: number): ListCustomerAddressesResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerAddressesResponse;
  hasError(): boolean;
  clearError(): ListCustomerAddressesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerAddressesResponse): ListCustomerAddressesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerAddressesResponse;
  static deserializeBinaryFromReader(message: ListCustomerAddressesResponse, reader: jspb.BinaryReader): ListCustomerAddressesResponse;
}

export namespace ListCustomerAddressesResponse {
  export type AsObject = {
    addressesList: Array<payments_models_pb.CustomerAddressInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerAddressesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerAddressesRequest): CountCustomerAddressesRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerAddressesRequest;
  static deserializeBinaryFromReader(message: CountCustomerAddressesRequest, reader: jspb.BinaryReader): CountCustomerAddressesRequest;
}

export namespace CountCustomerAddressesRequest {
  export type AsObject = {
  }
}

export class CountCustomerAddressesResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerAddressesResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerAddressesResponse;
  hasError(): boolean;
  clearError(): CountCustomerAddressesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerAddressesResponse): CountCustomerAddressesResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerAddressesResponse;
  static deserializeBinaryFromReader(message: CountCustomerAddressesResponse, reader: jspb.BinaryReader): CountCustomerAddressesResponse;
}

export namespace CountCustomerAddressesResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateCustomerAddressRequest extends jspb.Message {
  getFirstname(): string;
  setFirstname(value: string): CreateCustomerAddressRequest;

  getLastname(): string;
  setLastname(value: string): CreateCustomerAddressRequest;

  getAddress(): string;
  setAddress(value: string): CreateCustomerAddressRequest;

  getPostcode(): string;
  setPostcode(value: string): CreateCustomerAddressRequest;

  getCity(): string;
  setCity(value: string): CreateCustomerAddressRequest;

  getCountry(): string;
  setCountry(value: string): CreateCustomerAddressRequest;

  getPhoneNumber(): number;
  setPhoneNumber(value: number): CreateCustomerAddressRequest;

  getPrimary(): boolean;
  setPrimary(value: boolean): CreateCustomerAddressRequest;

  getExpires(): boolean;
  setExpires(value: boolean): CreateCustomerAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerAddressRequest): CreateCustomerAddressRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerAddressRequest;
  static deserializeBinaryFromReader(message: CreateCustomerAddressRequest, reader: jspb.BinaryReader): CreateCustomerAddressRequest;
}

export namespace CreateCustomerAddressRequest {
  export type AsObject = {
    firstname: string,
    lastname: string,
    address: string,
    postcode: string,
    city: string,
    country: string,
    phoneNumber: number,
    primary: boolean,
    expires: boolean,
  }
}

export class CreateCustomerAddressResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerAddressInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerAddressInfo): CreateCustomerAddressResponse;
  hasInfo(): boolean;
  clearInfo(): CreateCustomerAddressResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateCustomerAddressResponse;
  hasError(): boolean;
  clearError(): CreateCustomerAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerAddressResponse): CreateCustomerAddressResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerAddressResponse;
  static deserializeBinaryFromReader(message: CreateCustomerAddressResponse, reader: jspb.BinaryReader): CreateCustomerAddressResponse;
}

export namespace CreateCustomerAddressResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerAddressInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateCustomerAddressRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCustomerAddressRequest;

  getFirstname(): payments_models_pb.CustomerAddressFirstnameValue | undefined;
  setFirstname(value?: payments_models_pb.CustomerAddressFirstnameValue): UpdateCustomerAddressRequest;
  hasFirstname(): boolean;
  clearFirstname(): UpdateCustomerAddressRequest;

  getLastname(): payments_models_pb.CustomerAddressLastnameValue | undefined;
  setLastname(value?: payments_models_pb.CustomerAddressLastnameValue): UpdateCustomerAddressRequest;
  hasLastname(): boolean;
  clearLastname(): UpdateCustomerAddressRequest;

  getAddress(): payments_models_pb.CustomerAddressAddressValue | undefined;
  setAddress(value?: payments_models_pb.CustomerAddressAddressValue): UpdateCustomerAddressRequest;
  hasAddress(): boolean;
  clearAddress(): UpdateCustomerAddressRequest;

  getPostcode(): payments_models_pb.CustomerAddressPostcodeValue | undefined;
  setPostcode(value?: payments_models_pb.CustomerAddressPostcodeValue): UpdateCustomerAddressRequest;
  hasPostcode(): boolean;
  clearPostcode(): UpdateCustomerAddressRequest;

  getCity(): payments_models_pb.CustomerAddressCityValue | undefined;
  setCity(value?: payments_models_pb.CustomerAddressCityValue): UpdateCustomerAddressRequest;
  hasCity(): boolean;
  clearCity(): UpdateCustomerAddressRequest;

  getCountry(): payments_models_pb.CustomerAddressCountryValue | undefined;
  setCountry(value?: payments_models_pb.CustomerAddressCountryValue): UpdateCustomerAddressRequest;
  hasCountry(): boolean;
  clearCountry(): UpdateCustomerAddressRequest;

  getPhoneNumber(): payments_models_pb.CustomerAddressPhoneNumberValue | undefined;
  setPhoneNumber(value?: payments_models_pb.CustomerAddressPhoneNumberValue): UpdateCustomerAddressRequest;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): UpdateCustomerAddressRequest;

  getPrimary(): payments_models_pb.CustomerAddressPrimaryValue | undefined;
  setPrimary(value?: payments_models_pb.CustomerAddressPrimaryValue): UpdateCustomerAddressRequest;
  hasPrimary(): boolean;
  clearPrimary(): UpdateCustomerAddressRequest;

  getExpires(): payments_models_pb.CustomerAddressExpiresValue | undefined;
  setExpires(value?: payments_models_pb.CustomerAddressExpiresValue): UpdateCustomerAddressRequest;
  hasExpires(): boolean;
  clearExpires(): UpdateCustomerAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerAddressRequest): UpdateCustomerAddressRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerAddressRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerAddressRequest, reader: jspb.BinaryReader): UpdateCustomerAddressRequest;
}

export namespace UpdateCustomerAddressRequest {
  export type AsObject = {
    id: string,
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

export class UpdateCustomerAddressResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerAddressInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerAddressInfo): UpdateCustomerAddressResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateCustomerAddressResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateCustomerAddressResponse;
  hasError(): boolean;
  clearError(): UpdateCustomerAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerAddressResponse): UpdateCustomerAddressResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerAddressResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerAddressResponse, reader: jspb.BinaryReader): UpdateCustomerAddressResponse;
}

export namespace UpdateCustomerAddressResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerAddressInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteCustomerAddressRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCustomerAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerAddressRequest): DeleteCustomerAddressRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerAddressRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerAddressRequest, reader: jspb.BinaryReader): DeleteCustomerAddressRequest;
}

export namespace DeleteCustomerAddressRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteCustomerAddressResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteCustomerAddressResponse;
  hasError(): boolean;
  clearError(): DeleteCustomerAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerAddressResponse): DeleteCustomerAddressResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerAddressResponse;
  static deserializeBinaryFromReader(message: DeleteCustomerAddressResponse, reader: jspb.BinaryReader): DeleteCustomerAddressResponse;
}

export namespace DeleteCustomerAddressResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerPaymentInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerPaymentInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerPaymentInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerPaymentInfoRequest): GetCustomerPaymentInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerPaymentInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerPaymentInfoRequest;
  static deserializeBinaryFromReader(message: GetCustomerPaymentInfoRequest, reader: jspb.BinaryReader): GetCustomerPaymentInfoRequest;
}

export namespace GetCustomerPaymentInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetCustomerPaymentInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerPaymentInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerPaymentInfo): GetCustomerPaymentInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerPaymentInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerPaymentInfoResponse;
  hasError(): boolean;
  clearError(): GetCustomerPaymentInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerPaymentInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerPaymentInfoResponse): GetCustomerPaymentInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerPaymentInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerPaymentInfoResponse;
  static deserializeBinaryFromReader(message: GetCustomerPaymentInfoResponse, reader: jspb.BinaryReader): GetCustomerPaymentInfoResponse;
}

export namespace GetCustomerPaymentInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerPaymentInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerPaymentsRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListCustomerPaymentsRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerPaymentsRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerPaymentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerPaymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerPaymentsRequest): ListCustomerPaymentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerPaymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerPaymentsRequest;
  static deserializeBinaryFromReader(message: ListCustomerPaymentsRequest, reader: jspb.BinaryReader): ListCustomerPaymentsRequest;
}

export namespace ListCustomerPaymentsRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerPaymentsResponse extends jspb.Message {
  getPaymentsList(): Array<payments_models_pb.CustomerPaymentInfo>;
  setPaymentsList(value: Array<payments_models_pb.CustomerPaymentInfo>): ListCustomerPaymentsResponse;
  clearPaymentsList(): ListCustomerPaymentsResponse;
  addPayments(value?: payments_models_pb.CustomerPaymentInfo, index?: number): payments_models_pb.CustomerPaymentInfo;

  getTotal(): number;
  setTotal(value: number): ListCustomerPaymentsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerPaymentsResponse;
  hasError(): boolean;
  clearError(): ListCustomerPaymentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerPaymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerPaymentsResponse): ListCustomerPaymentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerPaymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerPaymentsResponse;
  static deserializeBinaryFromReader(message: ListCustomerPaymentsResponse, reader: jspb.BinaryReader): ListCustomerPaymentsResponse;
}

export namespace ListCustomerPaymentsResponse {
  export type AsObject = {
    paymentsList: Array<payments_models_pb.CustomerPaymentInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerPaymentsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerPaymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerPaymentsRequest): CountCustomerPaymentsRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerPaymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerPaymentsRequest;
  static deserializeBinaryFromReader(message: CountCustomerPaymentsRequest, reader: jspb.BinaryReader): CountCustomerPaymentsRequest;
}

export namespace CountCustomerPaymentsRequest {
  export type AsObject = {
  }
}

export class CountCustomerPaymentsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerPaymentsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerPaymentsResponse;
  hasError(): boolean;
  clearError(): CountCustomerPaymentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerPaymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerPaymentsResponse): CountCustomerPaymentsResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerPaymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerPaymentsResponse;
  static deserializeBinaryFromReader(message: CountCustomerPaymentsResponse, reader: jspb.BinaryReader): CountCustomerPaymentsResponse;
}

export namespace CountCustomerPaymentsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CreateCustomerPaymentRequest extends jspb.Message {
  getType(): payments_enums_pb.CustomerPaymentType;
  setType(value: payments_enums_pb.CustomerPaymentType): CreateCustomerPaymentRequest;

  getExpires(): boolean;
  setExpires(value: boolean): CreateCustomerPaymentRequest;

  getPrimary(): boolean;
  setPrimary(value: boolean): CreateCustomerPaymentRequest;

  getMetadata(): payments_models_pb.CustomerPaymentMetadata | undefined;
  setMetadata(value?: payments_models_pb.CustomerPaymentMetadata): CreateCustomerPaymentRequest;
  hasMetadata(): boolean;
  clearMetadata(): CreateCustomerPaymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerPaymentRequest): CreateCustomerPaymentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerPaymentRequest;
  static deserializeBinaryFromReader(message: CreateCustomerPaymentRequest, reader: jspb.BinaryReader): CreateCustomerPaymentRequest;
}

export namespace CreateCustomerPaymentRequest {
  export type AsObject = {
    type: payments_enums_pb.CustomerPaymentType,
    expires: boolean,
    primary: boolean,
    metadata?: payments_models_pb.CustomerPaymentMetadata.AsObject,
  }
}

export class CreateCustomerPaymentResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerPaymentInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerPaymentInfo): CreateCustomerPaymentResponse;
  hasInfo(): boolean;
  clearInfo(): CreateCustomerPaymentResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateCustomerPaymentResponse;
  hasError(): boolean;
  clearError(): CreateCustomerPaymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerPaymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerPaymentResponse): CreateCustomerPaymentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCustomerPaymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerPaymentResponse;
  static deserializeBinaryFromReader(message: CreateCustomerPaymentResponse, reader: jspb.BinaryReader): CreateCustomerPaymentResponse;
}

export namespace CreateCustomerPaymentResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerPaymentInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class UpdateCustomerPaymentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCustomerPaymentRequest;

  getPrimary(): payments_models_pb.CustomerPaymentPrimaryValue | undefined;
  setPrimary(value?: payments_models_pb.CustomerPaymentPrimaryValue): UpdateCustomerPaymentRequest;
  hasPrimary(): boolean;
  clearPrimary(): UpdateCustomerPaymentRequest;

  getExpires(): payments_models_pb.CustomerPaymentExpiresValue | undefined;
  setExpires(value?: payments_models_pb.CustomerPaymentExpiresValue): UpdateCustomerPaymentRequest;
  hasExpires(): boolean;
  clearExpires(): UpdateCustomerPaymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerPaymentRequest): UpdateCustomerPaymentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerPaymentRequest;
  static deserializeBinaryFromReader(message: UpdateCustomerPaymentRequest, reader: jspb.BinaryReader): UpdateCustomerPaymentRequest;
}

export namespace UpdateCustomerPaymentRequest {
  export type AsObject = {
    id: string,
    primary?: payments_models_pb.CustomerPaymentPrimaryValue.AsObject,
    expires?: payments_models_pb.CustomerPaymentExpiresValue.AsObject,
  }
}

export class UpdateCustomerPaymentResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerPaymentInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerPaymentInfo): UpdateCustomerPaymentResponse;
  hasInfo(): boolean;
  clearInfo(): UpdateCustomerPaymentResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): UpdateCustomerPaymentResponse;
  hasError(): boolean;
  clearError(): UpdateCustomerPaymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomerPaymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomerPaymentResponse): UpdateCustomerPaymentResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomerPaymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomerPaymentResponse;
  static deserializeBinaryFromReader(message: UpdateCustomerPaymentResponse, reader: jspb.BinaryReader): UpdateCustomerPaymentResponse;
}

export namespace UpdateCustomerPaymentResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerPaymentInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class DeleteCustomerPaymentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteCustomerPaymentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerPaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerPaymentRequest): DeleteCustomerPaymentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerPaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerPaymentRequest;
  static deserializeBinaryFromReader(message: DeleteCustomerPaymentRequest, reader: jspb.BinaryReader): DeleteCustomerPaymentRequest;
}

export namespace DeleteCustomerPaymentRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteCustomerPaymentResponse extends jspb.Message {
  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): DeleteCustomerPaymentResponse;
  hasError(): boolean;
  clearError(): DeleteCustomerPaymentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCustomerPaymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCustomerPaymentResponse): DeleteCustomerPaymentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCustomerPaymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCustomerPaymentResponse;
  static deserializeBinaryFromReader(message: DeleteCustomerPaymentResponse, reader: jspb.BinaryReader): DeleteCustomerPaymentResponse;
}

export namespace DeleteCustomerPaymentResponse {
  export type AsObject = {
    error?: error_models_pb.Error.AsObject,
  }
}

export class GetCustomerTransactionInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCustomerTransactionInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerTransactionInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerTransactionInfoRequest): GetCustomerTransactionInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerTransactionInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerTransactionInfoRequest;
  static deserializeBinaryFromReader(message: GetCustomerTransactionInfoRequest, reader: jspb.BinaryReader): GetCustomerTransactionInfoRequest;
}

export namespace GetCustomerTransactionInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetCustomerTransactionInfoResponse extends jspb.Message {
  getInfo(): payments_models_pb.CustomerTransactionInfo | undefined;
  setInfo(value?: payments_models_pb.CustomerTransactionInfo): GetCustomerTransactionInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetCustomerTransactionInfoResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): GetCustomerTransactionInfoResponse;
  hasError(): boolean;
  clearError(): GetCustomerTransactionInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerTransactionInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerTransactionInfoResponse): GetCustomerTransactionInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCustomerTransactionInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerTransactionInfoResponse;
  static deserializeBinaryFromReader(message: GetCustomerTransactionInfoResponse, reader: jspb.BinaryReader): GetCustomerTransactionInfoResponse;
}

export namespace GetCustomerTransactionInfoResponse {
  export type AsObject = {
    info?: payments_models_pb.CustomerTransactionInfo.AsObject,
    error?: error_models_pb.Error.AsObject,
  }
}

export class ListCustomerTransactionsRequest extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListCustomerTransactionsRequest;

  getLimit(): number;
  setLimit(value: number): ListCustomerTransactionsRequest;

  getOrder(): string;
  setOrder(value: string): ListCustomerTransactionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerTransactionsRequest): ListCustomerTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomerTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerTransactionsRequest;
  static deserializeBinaryFromReader(message: ListCustomerTransactionsRequest, reader: jspb.BinaryReader): ListCustomerTransactionsRequest;
}

export namespace ListCustomerTransactionsRequest {
  export type AsObject = {
    offset: number,
    limit: number,
    order: string,
  }
}

export class ListCustomerTransactionsResponse extends jspb.Message {
  getTransactionsList(): Array<payments_models_pb.CustomerTransactionInfo>;
  setTransactionsList(value: Array<payments_models_pb.CustomerTransactionInfo>): ListCustomerTransactionsResponse;
  clearTransactionsList(): ListCustomerTransactionsResponse;
  addTransactions(value?: payments_models_pb.CustomerTransactionInfo, index?: number): payments_models_pb.CustomerTransactionInfo;

  getTotal(): number;
  setTotal(value: number): ListCustomerTransactionsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): ListCustomerTransactionsResponse;
  hasError(): boolean;
  clearError(): ListCustomerTransactionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomerTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomerTransactionsResponse): ListCustomerTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomerTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomerTransactionsResponse;
  static deserializeBinaryFromReader(message: ListCustomerTransactionsResponse, reader: jspb.BinaryReader): ListCustomerTransactionsResponse;
}

export namespace ListCustomerTransactionsResponse {
  export type AsObject = {
    transactionsList: Array<payments_models_pb.CustomerTransactionInfo.AsObject>,
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

export class CountCustomerTransactionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerTransactionsRequest): CountCustomerTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: CountCustomerTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerTransactionsRequest;
  static deserializeBinaryFromReader(message: CountCustomerTransactionsRequest, reader: jspb.BinaryReader): CountCustomerTransactionsRequest;
}

export namespace CountCustomerTransactionsRequest {
  export type AsObject = {
  }
}

export class CountCustomerTransactionsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): CountCustomerTransactionsResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CountCustomerTransactionsResponse;
  hasError(): boolean;
  clearError(): CountCustomerTransactionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountCustomerTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountCustomerTransactionsResponse): CountCustomerTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: CountCustomerTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountCustomerTransactionsResponse;
  static deserializeBinaryFromReader(message: CountCustomerTransactionsResponse, reader: jspb.BinaryReader): CountCustomerTransactionsResponse;
}

export namespace CountCustomerTransactionsResponse {
  export type AsObject = {
    total: number,
    error?: error_models_pb.Error.AsObject,
  }
}

