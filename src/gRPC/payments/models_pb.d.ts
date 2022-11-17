import * as jspb from 'google-protobuf'

import * as payments_enums_pb from '../payments/enums_pb';


export class Price extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): Price;

  getCurrency(): payments_enums_pb.Currency;
  setCurrency(value: payments_enums_pb.Currency): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    amount: number,
    currency: payments_enums_pb.Currency,
  }
}

export class CustomerOrderTicket extends jspb.Message {
  getTicketid(): string;
  setTicketid(value: string): CustomerOrderTicket;

  getAmount(): number;
  setAmount(value: number): CustomerOrderTicket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderTicket.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderTicket): CustomerOrderTicket.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderTicket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderTicket;
  static deserializeBinaryFromReader(message: CustomerOrderTicket, reader: jspb.BinaryReader): CustomerOrderTicket;
}

export namespace CustomerOrderTicket {
  export type AsObject = {
    ticketid: string,
    amount: number,
  }
}

export class CustomerOrderProduct extends jspb.Message {
  getProductid(): string;
  setProductid(value: string): CustomerOrderProduct;

  getAmount(): number;
  setAmount(value: number): CustomerOrderProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderProduct.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderProduct): CustomerOrderProduct.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderProduct;
  static deserializeBinaryFromReader(message: CustomerOrderProduct, reader: jspb.BinaryReader): CustomerOrderProduct;
}

export namespace CustomerOrderProduct {
  export type AsObject = {
    productid: string,
    amount: number,
  }
}

export class CustomerOrderTicketDetails extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): CustomerOrderTicketDetails;

  getTicket(): EventTicketInfo | undefined;
  setTicket(value?: EventTicketInfo): CustomerOrderTicketDetails;
  hasTicket(): boolean;
  clearTicket(): CustomerOrderTicketDetails;

  getVoucher(): EventTicketVoucherInfo | undefined;
  setVoucher(value?: EventTicketVoucherInfo): CustomerOrderTicketDetails;
  hasVoucher(): boolean;
  clearVoucher(): CustomerOrderTicketDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderTicketDetails.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderTicketDetails): CustomerOrderTicketDetails.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderTicketDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderTicketDetails;
  static deserializeBinaryFromReader(message: CustomerOrderTicketDetails, reader: jspb.BinaryReader): CustomerOrderTicketDetails;
}

export namespace CustomerOrderTicketDetails {
  export type AsObject = {
    amount: number,
    ticket?: EventTicketInfo.AsObject,
    voucher?: EventTicketVoucherInfo.AsObject,
  }
}

export class CustomerOrderProductDetails extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): CustomerOrderProductDetails;

  getProduct(): EventProductInfo | undefined;
  setProduct(value?: EventProductInfo): CustomerOrderProductDetails;
  hasProduct(): boolean;
  clearProduct(): CustomerOrderProductDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderProductDetails.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderProductDetails): CustomerOrderProductDetails.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderProductDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderProductDetails;
  static deserializeBinaryFromReader(message: CustomerOrderProductDetails, reader: jspb.BinaryReader): CustomerOrderProductDetails;
}

export namespace CustomerOrderProductDetails {
  export type AsObject = {
    amount: number,
    product?: EventProductInfo.AsObject,
  }
}

export class EventTicketInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventTicketInfo;

  getEventId(): string;
  setEventId(value: string): EventTicketInfo;

  getPartnerId(): string;
  setPartnerId(value: string): EventTicketInfo;

  getType(): payments_enums_pb.EventTicketType;
  setType(value: payments_enums_pb.EventTicketType): EventTicketInfo;

  getStatus(): payments_enums_pb.EventTicketStatus;
  setStatus(value: payments_enums_pb.EventTicketStatus): EventTicketInfo;

  getUsages(): number;
  setUsages(value: number): EventTicketInfo;

  getLocalePrice(): Price | undefined;
  setLocalePrice(value?: Price): EventTicketInfo;
  hasLocalePrice(): boolean;
  clearLocalePrice(): EventTicketInfo;

  getMetadata(): EventTicketMetadata | undefined;
  setMetadata(value?: EventTicketMetadata): EventTicketInfo;
  hasMetadata(): boolean;
  clearMetadata(): EventTicketInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): EventTicketInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EventTicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketInfo): EventTicketInfo.AsObject;
  static serializeBinaryToWriter(message: EventTicketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketInfo;
  static deserializeBinaryFromReader(message: EventTicketInfo, reader: jspb.BinaryReader): EventTicketInfo;
}

export namespace EventTicketInfo {
  export type AsObject = {
    id: string,
    eventId: string,
    partnerId: string,
    type: payments_enums_pb.EventTicketType,
    status: payments_enums_pb.EventTicketStatus,
    usages: number,
    localePrice?: Price.AsObject,
    metadata?: EventTicketMetadata.AsObject,
    createdAt: number,
    updatedAt: number,
  }
}

export class CreatesEventTicketVoucher extends jspb.Message {
  getPid(): string;
  setPid(value: string): CreatesEventTicketVoucher;

  getUsages(): number;
  setUsages(value: number): CreatesEventTicketVoucher;

  getAmount(): number;
  setAmount(value: number): CreatesEventTicketVoucher;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatesEventTicketVoucher.AsObject;
  static toObject(includeInstance: boolean, msg: CreatesEventTicketVoucher): CreatesEventTicketVoucher.AsObject;
  static serializeBinaryToWriter(message: CreatesEventTicketVoucher, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatesEventTicketVoucher;
  static deserializeBinaryFromReader(message: CreatesEventTicketVoucher, reader: jspb.BinaryReader): CreatesEventTicketVoucher;
}

export namespace CreatesEventTicketVoucher {
  export type AsObject = {
    pid: string,
    usages: number,
    amount: number,
  }
}

export class EventTicketMetadata extends jspb.Message {
  getPrice(): EventTicketPriceMetadata | undefined;
  setPrice(value?: EventTicketPriceMetadata): EventTicketMetadata;
  hasPrice(): boolean;
  clearPrice(): EventTicketMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketMetadata): EventTicketMetadata.AsObject;
  static serializeBinaryToWriter(message: EventTicketMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketMetadata;
  static deserializeBinaryFromReader(message: EventTicketMetadata, reader: jspb.BinaryReader): EventTicketMetadata;
}

export namespace EventTicketMetadata {
  export type AsObject = {
    price?: EventTicketPriceMetadata.AsObject,
  }
}

export class EventTicketPriceMetadata extends jspb.Message {
  getItemsList(): Array<Price>;
  setItemsList(value: Array<Price>): EventTicketPriceMetadata;
  clearItemsList(): EventTicketPriceMetadata;
  addItems(value?: Price, index?: number): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketPriceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketPriceMetadata): EventTicketPriceMetadata.AsObject;
  static serializeBinaryToWriter(message: EventTicketPriceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketPriceMetadata;
  static deserializeBinaryFromReader(message: EventTicketPriceMetadata, reader: jspb.BinaryReader): EventTicketPriceMetadata;
}

export namespace EventTicketPriceMetadata {
  export type AsObject = {
    itemsList: Array<Price.AsObject>,
  }
}

export class EventTicketUsagesValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventTicketUsagesValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketUsagesValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketUsagesValue): EventTicketUsagesValue.AsObject;
  static serializeBinaryToWriter(message: EventTicketUsagesValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketUsagesValue;
  static deserializeBinaryFromReader(message: EventTicketUsagesValue, reader: jspb.BinaryReader): EventTicketUsagesValue;
}

export namespace EventTicketUsagesValue {
  export type AsObject = {
    value: number,
  }
}

export class EventTicketStatusValue extends jspb.Message {
  getValue(): payments_enums_pb.EventTicketStatus;
  setValue(value: payments_enums_pb.EventTicketStatus): EventTicketStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketStatusValue): EventTicketStatusValue.AsObject;
  static serializeBinaryToWriter(message: EventTicketStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketStatusValue;
  static deserializeBinaryFromReader(message: EventTicketStatusValue, reader: jspb.BinaryReader): EventTicketStatusValue;
}

export namespace EventTicketStatusValue {
  export type AsObject = {
    value: payments_enums_pb.EventTicketStatus,
  }
}

export class EventTicketMetadataValue extends jspb.Message {
  getValue(): EventTicketMetadata | undefined;
  setValue(value?: EventTicketMetadata): EventTicketMetadataValue;
  hasValue(): boolean;
  clearValue(): EventTicketMetadataValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketMetadataValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketMetadataValue): EventTicketMetadataValue.AsObject;
  static serializeBinaryToWriter(message: EventTicketMetadataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketMetadataValue;
  static deserializeBinaryFromReader(message: EventTicketMetadataValue, reader: jspb.BinaryReader): EventTicketMetadataValue;
}

export namespace EventTicketMetadataValue {
  export type AsObject = {
    value?: EventTicketMetadata.AsObject,
  }
}

export class EventProductInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventProductInfo;

  getEventId(): string;
  setEventId(value: string): EventProductInfo;

  getPartnerId(): string;
  setPartnerId(value: string): EventProductInfo;

  getName(): string;
  setName(value: string): EventProductInfo;

  getKind(): string;
  setKind(value: string): EventProductInfo;

  getDescription(): string;
  setDescription(value: string): EventProductInfo;

  getStock(): number;
  setStock(value: number): EventProductInfo;

  getImageUrlsList(): Array<string>;
  setImageUrlsList(value: Array<string>): EventProductInfo;
  clearImageUrlsList(): EventProductInfo;
  addImageUrls(value: string, index?: number): EventProductInfo;

  getLocalePrice(): Price | undefined;
  setLocalePrice(value?: Price): EventProductInfo;
  hasLocalePrice(): boolean;
  clearLocalePrice(): EventProductInfo;

  getStatus(): payments_enums_pb.EventProductStatus;
  setStatus(value: payments_enums_pb.EventProductStatus): EventProductInfo;

  getMetadata(): EventProductMetadata | undefined;
  setMetadata(value?: EventProductMetadata): EventProductInfo;
  hasMetadata(): boolean;
  clearMetadata(): EventProductInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): EventProductInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EventProductInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductInfo): EventProductInfo.AsObject;
  static serializeBinaryToWriter(message: EventProductInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductInfo;
  static deserializeBinaryFromReader(message: EventProductInfo, reader: jspb.BinaryReader): EventProductInfo;
}

export namespace EventProductInfo {
  export type AsObject = {
    id: string,
    eventId: string,
    partnerId: string,
    name: string,
    kind: string,
    description: string,
    stock: number,
    imageUrlsList: Array<string>,
    localePrice?: Price.AsObject,
    status: payments_enums_pb.EventProductStatus,
    metadata?: EventProductMetadata.AsObject,
    createdAt: number,
    updatedAt: number,
  }
}

export class EventProductMetadata extends jspb.Message {
  getPrice(): EventProductPriceMetadata | undefined;
  setPrice(value?: EventProductPriceMetadata): EventProductMetadata;
  hasPrice(): boolean;
  clearPrice(): EventProductMetadata;

  getDetails(): EventProductDetailsMetadata | undefined;
  setDetails(value?: EventProductDetailsMetadata): EventProductMetadata;
  hasDetails(): boolean;
  clearDetails(): EventProductMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductMetadata): EventProductMetadata.AsObject;
  static serializeBinaryToWriter(message: EventProductMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductMetadata;
  static deserializeBinaryFromReader(message: EventProductMetadata, reader: jspb.BinaryReader): EventProductMetadata;
}

export namespace EventProductMetadata {
  export type AsObject = {
    price?: EventProductPriceMetadata.AsObject,
    details?: EventProductDetailsMetadata.AsObject,
  }
}

export class EventProductDetailsMetadata extends jspb.Message {
  getSize(): string;
  setSize(value: string): EventProductDetailsMetadata;

  getColor(): string;
  setColor(value: string): EventProductDetailsMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductDetailsMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductDetailsMetadata): EventProductDetailsMetadata.AsObject;
  static serializeBinaryToWriter(message: EventProductDetailsMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductDetailsMetadata;
  static deserializeBinaryFromReader(message: EventProductDetailsMetadata, reader: jspb.BinaryReader): EventProductDetailsMetadata;
}

export namespace EventProductDetailsMetadata {
  export type AsObject = {
    size: string,
    color: string,
  }
}

export class EventProductPriceMetadata extends jspb.Message {
  getItemsList(): Array<Price>;
  setItemsList(value: Array<Price>): EventProductPriceMetadata;
  clearItemsList(): EventProductPriceMetadata;
  addItems(value?: Price, index?: number): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductPriceMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductPriceMetadata): EventProductPriceMetadata.AsObject;
  static serializeBinaryToWriter(message: EventProductPriceMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductPriceMetadata;
  static deserializeBinaryFromReader(message: EventProductPriceMetadata, reader: jspb.BinaryReader): EventProductPriceMetadata;
}

export namespace EventProductPriceMetadata {
  export type AsObject = {
    itemsList: Array<Price.AsObject>,
  }
}

export class EventProductKindValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventProductKindValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductKindValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductKindValue): EventProductKindValue.AsObject;
  static serializeBinaryToWriter(message: EventProductKindValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductKindValue;
  static deserializeBinaryFromReader(message: EventProductKindValue, reader: jspb.BinaryReader): EventProductKindValue;
}

export namespace EventProductKindValue {
  export type AsObject = {
    value: string,
  }
}

export class EventProductNameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventProductNameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductNameValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductNameValue): EventProductNameValue.AsObject;
  static serializeBinaryToWriter(message: EventProductNameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductNameValue;
  static deserializeBinaryFromReader(message: EventProductNameValue, reader: jspb.BinaryReader): EventProductNameValue;
}

export namespace EventProductNameValue {
  export type AsObject = {
    value: string,
  }
}

export class EventProductDescriptionValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventProductDescriptionValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductDescriptionValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductDescriptionValue): EventProductDescriptionValue.AsObject;
  static serializeBinaryToWriter(message: EventProductDescriptionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductDescriptionValue;
  static deserializeBinaryFromReader(message: EventProductDescriptionValue, reader: jspb.BinaryReader): EventProductDescriptionValue;
}

export namespace EventProductDescriptionValue {
  export type AsObject = {
    value: string,
  }
}

export class EventProductStockValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventProductStockValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductStockValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductStockValue): EventProductStockValue.AsObject;
  static serializeBinaryToWriter(message: EventProductStockValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductStockValue;
  static deserializeBinaryFromReader(message: EventProductStockValue, reader: jspb.BinaryReader): EventProductStockValue;
}

export namespace EventProductStockValue {
  export type AsObject = {
    value: number,
  }
}

export class EventProductStatusValue extends jspb.Message {
  getValue(): payments_enums_pb.EventProductStatus;
  setValue(value: payments_enums_pb.EventProductStatus): EventProductStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductStatusValue): EventProductStatusValue.AsObject;
  static serializeBinaryToWriter(message: EventProductStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductStatusValue;
  static deserializeBinaryFromReader(message: EventProductStatusValue, reader: jspb.BinaryReader): EventProductStatusValue;
}

export namespace EventProductStatusValue {
  export type AsObject = {
    value: payments_enums_pb.EventProductStatus,
  }
}

export class EventProductMetadataValue extends jspb.Message {
  getValue(): EventProductMetadata | undefined;
  setValue(value?: EventProductMetadata): EventProductMetadataValue;
  hasValue(): boolean;
  clearValue(): EventProductMetadataValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProductMetadataValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventProductMetadataValue): EventProductMetadataValue.AsObject;
  static serializeBinaryToWriter(message: EventProductMetadataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventProductMetadataValue;
  static deserializeBinaryFromReader(message: EventProductMetadataValue, reader: jspb.BinaryReader): EventProductMetadataValue;
}

export namespace EventProductMetadataValue {
  export type AsObject = {
    value?: EventProductMetadata.AsObject,
  }
}

export class EventTicketVoucherInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventTicketVoucherInfo;

  getPid(): string;
  setPid(value: string): EventTicketVoucherInfo;

  getTicketId(): string;
  setTicketId(value: string): EventTicketVoucherInfo;

  getAmount(): number;
  setAmount(value: number): EventTicketVoucherInfo;

  getUsages(): number;
  setUsages(value: number): EventTicketVoucherInfo;

  getStatus(): payments_enums_pb.EventTicketVoucherStatus;
  setStatus(value: payments_enums_pb.EventTicketVoucherStatus): EventTicketVoucherInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): EventTicketVoucherInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EventTicketVoucherInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketVoucherInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketVoucherInfo): EventTicketVoucherInfo.AsObject;
  static serializeBinaryToWriter(message: EventTicketVoucherInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketVoucherInfo;
  static deserializeBinaryFromReader(message: EventTicketVoucherInfo, reader: jspb.BinaryReader): EventTicketVoucherInfo;
}

export namespace EventTicketVoucherInfo {
  export type AsObject = {
    id: string,
    pid: string,
    ticketId: string,
    amount: number,
    usages: number,
    status: payments_enums_pb.EventTicketVoucherStatus,
    createdAt: number,
    updatedAt: number,
  }
}

export class EventTicketVoucherUsagesValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventTicketVoucherUsagesValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketVoucherUsagesValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketVoucherUsagesValue): EventTicketVoucherUsagesValue.AsObject;
  static serializeBinaryToWriter(message: EventTicketVoucherUsagesValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketVoucherUsagesValue;
  static deserializeBinaryFromReader(message: EventTicketVoucherUsagesValue, reader: jspb.BinaryReader): EventTicketVoucherUsagesValue;
}

export namespace EventTicketVoucherUsagesValue {
  export type AsObject = {
    value: number,
  }
}

export class EventTicketVoucherAmountValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventTicketVoucherAmountValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketVoucherAmountValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketVoucherAmountValue): EventTicketVoucherAmountValue.AsObject;
  static serializeBinaryToWriter(message: EventTicketVoucherAmountValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketVoucherAmountValue;
  static deserializeBinaryFromReader(message: EventTicketVoucherAmountValue, reader: jspb.BinaryReader): EventTicketVoucherAmountValue;
}

export namespace EventTicketVoucherAmountValue {
  export type AsObject = {
    value: number,
  }
}

export class EventTicketVoucherStatusValue extends jspb.Message {
  getValue(): payments_enums_pb.EventTicketVoucherStatus;
  setValue(value: payments_enums_pb.EventTicketVoucherStatus): EventTicketVoucherStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTicketVoucherStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventTicketVoucherStatusValue): EventTicketVoucherStatusValue.AsObject;
  static serializeBinaryToWriter(message: EventTicketVoucherStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTicketVoucherStatusValue;
  static deserializeBinaryFromReader(message: EventTicketVoucherStatusValue, reader: jspb.BinaryReader): EventTicketVoucherStatusValue;
}

export namespace EventTicketVoucherStatusValue {
  export type AsObject = {
    value: payments_enums_pb.EventTicketVoucherStatus,
  }
}

export class PartnerInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PartnerInfo;

  getUserId(): string;
  setUserId(value: string): PartnerInfo;

  getStatus(): payments_enums_pb.PartnerStatus;
  setStatus(value: payments_enums_pb.PartnerStatus): PartnerInfo;

  getCountry(): string;
  setCountry(value: string): PartnerInfo;

  getCurrency(): payments_enums_pb.Currency;
  setCurrency(value: payments_enums_pb.Currency): PartnerInfo;

  getMetadata(): PartnerMetadata | undefined;
  setMetadata(value?: PartnerMetadata): PartnerInfo;
  hasMetadata(): boolean;
  clearMetadata(): PartnerInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): PartnerInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): PartnerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PartnerInfo): PartnerInfo.AsObject;
  static serializeBinaryToWriter(message: PartnerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnerInfo;
  static deserializeBinaryFromReader(message: PartnerInfo, reader: jspb.BinaryReader): PartnerInfo;
}

export namespace PartnerInfo {
  export type AsObject = {
    id: string,
    userId: string,
    status: payments_enums_pb.PartnerStatus,
    country: string,
    currency: payments_enums_pb.Currency,
    metadata?: PartnerMetadata.AsObject,
    createdAt: number,
    updatedAt: number,
  }
}

export class PartnerMetadata extends jspb.Message {
  getStripe(): PartnerStripeMetadata | undefined;
  setStripe(value?: PartnerStripeMetadata): PartnerMetadata;
  hasStripe(): boolean;
  clearStripe(): PartnerMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnerMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PartnerMetadata): PartnerMetadata.AsObject;
  static serializeBinaryToWriter(message: PartnerMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnerMetadata;
  static deserializeBinaryFromReader(message: PartnerMetadata, reader: jspb.BinaryReader): PartnerMetadata;
}

export namespace PartnerMetadata {
  export type AsObject = {
    stripe?: PartnerStripeMetadata.AsObject,
  }
}

export class PartnerStripeMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): PartnerStripeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnerStripeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PartnerStripeMetadata): PartnerStripeMetadata.AsObject;
  static serializeBinaryToWriter(message: PartnerStripeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnerStripeMetadata;
  static deserializeBinaryFromReader(message: PartnerStripeMetadata, reader: jspb.BinaryReader): PartnerStripeMetadata;
}

export namespace PartnerStripeMetadata {
  export type AsObject = {
    id: string,
  }
}

export class CustomerInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerInfo;

  getUserId(): string;
  setUserId(value: string): CustomerInfo;

  getMetadata(): CustomerMetadata | undefined;
  setMetadata(value?: CustomerMetadata): CustomerInfo;
  hasMetadata(): boolean;
  clearMetadata(): CustomerInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): CustomerInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CustomerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerInfo): CustomerInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerInfo;
  static deserializeBinaryFromReader(message: CustomerInfo, reader: jspb.BinaryReader): CustomerInfo;
}

export namespace CustomerInfo {
  export type AsObject = {
    id: string,
    userId: string,
    metadata?: CustomerMetadata.AsObject,
    createdAt: number,
    updatedAt: number,
  }
}

export class CustomerMetadata extends jspb.Message {
  getStripe(): CustomerStripeMetadata | undefined;
  setStripe(value?: CustomerStripeMetadata): CustomerMetadata;
  hasStripe(): boolean;
  clearStripe(): CustomerMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerMetadata): CustomerMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerMetadata;
  static deserializeBinaryFromReader(message: CustomerMetadata, reader: jspb.BinaryReader): CustomerMetadata;
}

export namespace CustomerMetadata {
  export type AsObject = {
    stripe?: CustomerStripeMetadata.AsObject,
  }
}

export class CustomerStripeMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerStripeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerStripeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerStripeMetadata): CustomerStripeMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerStripeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerStripeMetadata;
  static deserializeBinaryFromReader(message: CustomerStripeMetadata, reader: jspb.BinaryReader): CustomerStripeMetadata;
}

export namespace CustomerStripeMetadata {
  export type AsObject = {
    id: string,
  }
}

export class CustomerOrderInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerOrderInfo;

  getPartnerId(): string;
  setPartnerId(value: string): CustomerOrderInfo;

  getCustomerId(): string;
  setCustomerId(value: string): CustomerOrderInfo;

  getTransactionId(): string;
  setTransactionId(value: string): CustomerOrderInfo;

  getType(): payments_enums_pb.CustomerOrderType;
  setType(value: payments_enums_pb.CustomerOrderType): CustomerOrderInfo;

  getAmount(): number;
  setAmount(value: number): CustomerOrderInfo;

  getStatus(): payments_enums_pb.CustomerOrderStatus;
  setStatus(value: payments_enums_pb.CustomerOrderStatus): CustomerOrderInfo;

  getCurrency(): payments_enums_pb.Currency;
  setCurrency(value: payments_enums_pb.Currency): CustomerOrderInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): CustomerOrderInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): CustomerOrderInfo;

  getMetadata(): CustomerOrderMetadata | undefined;
  setMetadata(value?: CustomerOrderMetadata): CustomerOrderInfo;
  hasMetadata(): boolean;
  clearMetadata(): CustomerOrderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderInfo): CustomerOrderInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderInfo;
  static deserializeBinaryFromReader(message: CustomerOrderInfo, reader: jspb.BinaryReader): CustomerOrderInfo;
}

export namespace CustomerOrderInfo {
  export type AsObject = {
    id: string,
    partnerId: string,
    customerId: string,
    transactionId: string,
    type: payments_enums_pb.CustomerOrderType,
    amount: number,
    status: payments_enums_pb.CustomerOrderStatus,
    currency: payments_enums_pb.Currency,
    createdAt: number,
    updatedAt: number,
    metadata?: CustomerOrderMetadata.AsObject,
  }
}

export class CustomerOrderMetadata extends jspb.Message {
  getTicket(): CustomerOrderTicketMetadata | undefined;
  setTicket(value?: CustomerOrderTicketMetadata): CustomerOrderMetadata;
  hasTicket(): boolean;
  clearTicket(): CustomerOrderMetadata;

  getProduct(): CustomerOrderProductMetadata | undefined;
  setProduct(value?: CustomerOrderProductMetadata): CustomerOrderMetadata;
  hasProduct(): boolean;
  clearProduct(): CustomerOrderMetadata;

  getAddress(): CustomerOrderAddressMetadata | undefined;
  setAddress(value?: CustomerOrderAddressMetadata): CustomerOrderMetadata;
  hasAddress(): boolean;
  clearAddress(): CustomerOrderMetadata;

  getDelivery(): CustomerOrderDeliveryMetadata | undefined;
  setDelivery(value?: CustomerOrderDeliveryMetadata): CustomerOrderMetadata;
  hasDelivery(): boolean;
  clearDelivery(): CustomerOrderMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderMetadata): CustomerOrderMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderMetadata;
  static deserializeBinaryFromReader(message: CustomerOrderMetadata, reader: jspb.BinaryReader): CustomerOrderMetadata;
}

export namespace CustomerOrderMetadata {
  export type AsObject = {
    ticket?: CustomerOrderTicketMetadata.AsObject,
    product?: CustomerOrderProductMetadata.AsObject,
    address?: CustomerOrderAddressMetadata.AsObject,
    delivery?: CustomerOrderDeliveryMetadata.AsObject,
  }
}

export class CustomerOrderTicketMetadata extends jspb.Message {
  getItemsList(): Array<CustomerOrderTicketDetails>;
  setItemsList(value: Array<CustomerOrderTicketDetails>): CustomerOrderTicketMetadata;
  clearItemsList(): CustomerOrderTicketMetadata;
  addItems(value?: CustomerOrderTicketDetails, index?: number): CustomerOrderTicketDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderTicketMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderTicketMetadata): CustomerOrderTicketMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderTicketMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderTicketMetadata;
  static deserializeBinaryFromReader(message: CustomerOrderTicketMetadata, reader: jspb.BinaryReader): CustomerOrderTicketMetadata;
}

export namespace CustomerOrderTicketMetadata {
  export type AsObject = {
    itemsList: Array<CustomerOrderTicketDetails.AsObject>,
  }
}

export class CustomerOrderProductMetadata extends jspb.Message {
  getItemsList(): Array<CustomerOrderProductDetails>;
  setItemsList(value: Array<CustomerOrderProductDetails>): CustomerOrderProductMetadata;
  clearItemsList(): CustomerOrderProductMetadata;
  addItems(value?: CustomerOrderProductDetails, index?: number): CustomerOrderProductDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderProductMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderProductMetadata): CustomerOrderProductMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderProductMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderProductMetadata;
  static deserializeBinaryFromReader(message: CustomerOrderProductMetadata, reader: jspb.BinaryReader): CustomerOrderProductMetadata;
}

export namespace CustomerOrderProductMetadata {
  export type AsObject = {
    itemsList: Array<CustomerOrderProductDetails.AsObject>,
  }
}

export class CustomerOrderAddressMetadata extends jspb.Message {
  getObject(): CustomerAddressInfo | undefined;
  setObject(value?: CustomerAddressInfo): CustomerOrderAddressMetadata;
  hasObject(): boolean;
  clearObject(): CustomerOrderAddressMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderAddressMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderAddressMetadata): CustomerOrderAddressMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderAddressMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderAddressMetadata;
  static deserializeBinaryFromReader(message: CustomerOrderAddressMetadata, reader: jspb.BinaryReader): CustomerOrderAddressMetadata;
}

export namespace CustomerOrderAddressMetadata {
  export type AsObject = {
    object?: CustomerAddressInfo.AsObject,
  }
}

export class CustomerOrderDeliveryMetadata extends jspb.Message {
  getTrackingUrl(): string;
  setTrackingUrl(value: string): CustomerOrderDeliveryMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderDeliveryMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderDeliveryMetadata): CustomerOrderDeliveryMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderDeliveryMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderDeliveryMetadata;
  static deserializeBinaryFromReader(message: CustomerOrderDeliveryMetadata, reader: jspb.BinaryReader): CustomerOrderDeliveryMetadata;
}

export namespace CustomerOrderDeliveryMetadata {
  export type AsObject = {
    trackingUrl: string,
  }
}

export class CustomerOrderStatusValue extends jspb.Message {
  getValue(): payments_enums_pb.CustomerOrderStatus;
  setValue(value: payments_enums_pb.CustomerOrderStatus): CustomerOrderStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderStatusValue): CustomerOrderStatusValue.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderStatusValue;
  static deserializeBinaryFromReader(message: CustomerOrderStatusValue, reader: jspb.BinaryReader): CustomerOrderStatusValue;
}

export namespace CustomerOrderStatusValue {
  export type AsObject = {
    value: payments_enums_pb.CustomerOrderStatus,
  }
}

export class CustomerOrderMetadataValue extends jspb.Message {
  getValue(): CustomerOrderMetadata | undefined;
  setValue(value?: CustomerOrderMetadata): CustomerOrderMetadataValue;
  hasValue(): boolean;
  clearValue(): CustomerOrderMetadataValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderMetadataValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderMetadataValue): CustomerOrderMetadataValue.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderMetadataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderMetadataValue;
  static deserializeBinaryFromReader(message: CustomerOrderMetadataValue, reader: jspb.BinaryReader): CustomerOrderMetadataValue;
}

export namespace CustomerOrderMetadataValue {
  export type AsObject = {
    value?: CustomerOrderMetadata.AsObject,
  }
}

export class CustomerAddressInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerAddressInfo;

  getCustomerId(): string;
  setCustomerId(value: string): CustomerAddressInfo;

  getFirstname(): string;
  setFirstname(value: string): CustomerAddressInfo;

  getLastname(): string;
  setLastname(value: string): CustomerAddressInfo;

  getAddress(): string;
  setAddress(value: string): CustomerAddressInfo;

  getPostcode(): string;
  setPostcode(value: string): CustomerAddressInfo;

  getCity(): string;
  setCity(value: string): CustomerAddressInfo;

  getCountry(): string;
  setCountry(value: string): CustomerAddressInfo;

  getPhoneNumber(): number;
  setPhoneNumber(value: number): CustomerAddressInfo;

  getPrimary(): boolean;
  setPrimary(value: boolean): CustomerAddressInfo;

  getExpires(): boolean;
  setExpires(value: boolean): CustomerAddressInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressInfo): CustomerAddressInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressInfo;
  static deserializeBinaryFromReader(message: CustomerAddressInfo, reader: jspb.BinaryReader): CustomerAddressInfo;
}

export namespace CustomerAddressInfo {
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
  }
}

export class CustomerAddressFirstnameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): CustomerAddressFirstnameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressFirstnameValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressFirstnameValue): CustomerAddressFirstnameValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressFirstnameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressFirstnameValue;
  static deserializeBinaryFromReader(message: CustomerAddressFirstnameValue, reader: jspb.BinaryReader): CustomerAddressFirstnameValue;
}

export namespace CustomerAddressFirstnameValue {
  export type AsObject = {
    value: string,
  }
}

export class CustomerAddressLastnameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): CustomerAddressLastnameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressLastnameValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressLastnameValue): CustomerAddressLastnameValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressLastnameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressLastnameValue;
  static deserializeBinaryFromReader(message: CustomerAddressLastnameValue, reader: jspb.BinaryReader): CustomerAddressLastnameValue;
}

export namespace CustomerAddressLastnameValue {
  export type AsObject = {
    value: string,
  }
}

export class CustomerAddressAddressValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): CustomerAddressAddressValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressAddressValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressAddressValue): CustomerAddressAddressValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressAddressValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressAddressValue;
  static deserializeBinaryFromReader(message: CustomerAddressAddressValue, reader: jspb.BinaryReader): CustomerAddressAddressValue;
}

export namespace CustomerAddressAddressValue {
  export type AsObject = {
    value: string,
  }
}

export class CustomerAddressPostcodeValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): CustomerAddressPostcodeValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressPostcodeValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressPostcodeValue): CustomerAddressPostcodeValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressPostcodeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressPostcodeValue;
  static deserializeBinaryFromReader(message: CustomerAddressPostcodeValue, reader: jspb.BinaryReader): CustomerAddressPostcodeValue;
}

export namespace CustomerAddressPostcodeValue {
  export type AsObject = {
    value: string,
  }
}

export class CustomerAddressCityValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): CustomerAddressCityValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressCityValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressCityValue): CustomerAddressCityValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressCityValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressCityValue;
  static deserializeBinaryFromReader(message: CustomerAddressCityValue, reader: jspb.BinaryReader): CustomerAddressCityValue;
}

export namespace CustomerAddressCityValue {
  export type AsObject = {
    value: string,
  }
}

export class CustomerAddressCountryValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): CustomerAddressCountryValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressCountryValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressCountryValue): CustomerAddressCountryValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressCountryValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressCountryValue;
  static deserializeBinaryFromReader(message: CustomerAddressCountryValue, reader: jspb.BinaryReader): CustomerAddressCountryValue;
}

export namespace CustomerAddressCountryValue {
  export type AsObject = {
    value: string,
  }
}

export class CustomerAddressPhoneNumberValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): CustomerAddressPhoneNumberValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressPhoneNumberValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressPhoneNumberValue): CustomerAddressPhoneNumberValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressPhoneNumberValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressPhoneNumberValue;
  static deserializeBinaryFromReader(message: CustomerAddressPhoneNumberValue, reader: jspb.BinaryReader): CustomerAddressPhoneNumberValue;
}

export namespace CustomerAddressPhoneNumberValue {
  export type AsObject = {
    value: number,
  }
}

export class CustomerAddressPrimaryValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): CustomerAddressPrimaryValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressPrimaryValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressPrimaryValue): CustomerAddressPrimaryValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressPrimaryValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressPrimaryValue;
  static deserializeBinaryFromReader(message: CustomerAddressPrimaryValue, reader: jspb.BinaryReader): CustomerAddressPrimaryValue;
}

export namespace CustomerAddressPrimaryValue {
  export type AsObject = {
    value: boolean,
  }
}

export class CustomerAddressExpiresValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): CustomerAddressExpiresValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAddressExpiresValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAddressExpiresValue): CustomerAddressExpiresValue.AsObject;
  static serializeBinaryToWriter(message: CustomerAddressExpiresValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAddressExpiresValue;
  static deserializeBinaryFromReader(message: CustomerAddressExpiresValue, reader: jspb.BinaryReader): CustomerAddressExpiresValue;
}

export namespace CustomerAddressExpiresValue {
  export type AsObject = {
    value: boolean,
  }
}

export class CustomerPaymentInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerPaymentInfo;

  getCustomerId(): string;
  setCustomerId(value: string): CustomerPaymentInfo;

  getType(): payments_enums_pb.CustomerPaymentType;
  setType(value: payments_enums_pb.CustomerPaymentType): CustomerPaymentInfo;

  getExpires(): boolean;
  setExpires(value: boolean): CustomerPaymentInfo;

  getPrimary(): boolean;
  setPrimary(value: boolean): CustomerPaymentInfo;

  getMetadata(): CustomerPaymentMetadata | undefined;
  setMetadata(value?: CustomerPaymentMetadata): CustomerPaymentInfo;
  hasMetadata(): boolean;
  clearMetadata(): CustomerPaymentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPaymentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPaymentInfo): CustomerPaymentInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerPaymentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPaymentInfo;
  static deserializeBinaryFromReader(message: CustomerPaymentInfo, reader: jspb.BinaryReader): CustomerPaymentInfo;
}

export namespace CustomerPaymentInfo {
  export type AsObject = {
    id: string,
    customerId: string,
    type: payments_enums_pb.CustomerPaymentType,
    expires: boolean,
    primary: boolean,
    metadata?: CustomerPaymentMetadata.AsObject,
  }
}

export class CustomerPaymentPrimaryValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): CustomerPaymentPrimaryValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPaymentPrimaryValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPaymentPrimaryValue): CustomerPaymentPrimaryValue.AsObject;
  static serializeBinaryToWriter(message: CustomerPaymentPrimaryValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPaymentPrimaryValue;
  static deserializeBinaryFromReader(message: CustomerPaymentPrimaryValue, reader: jspb.BinaryReader): CustomerPaymentPrimaryValue;
}

export namespace CustomerPaymentPrimaryValue {
  export type AsObject = {
    value: boolean,
  }
}

export class CustomerPaymentExpiresValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): CustomerPaymentExpiresValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPaymentExpiresValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPaymentExpiresValue): CustomerPaymentExpiresValue.AsObject;
  static serializeBinaryToWriter(message: CustomerPaymentExpiresValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPaymentExpiresValue;
  static deserializeBinaryFromReader(message: CustomerPaymentExpiresValue, reader: jspb.BinaryReader): CustomerPaymentExpiresValue;
}

export namespace CustomerPaymentExpiresValue {
  export type AsObject = {
    value: boolean,
  }
}

export class CustomerPaymentMetadata extends jspb.Message {
  getCard(): CustomerPaymentCardMetadata | undefined;
  setCard(value?: CustomerPaymentCardMetadata): CustomerPaymentMetadata;
  hasCard(): boolean;
  clearCard(): CustomerPaymentMetadata;

  getStripe(): CustomerPaymentStripeMetadata | undefined;
  setStripe(value?: CustomerPaymentStripeMetadata): CustomerPaymentMetadata;
  hasStripe(): boolean;
  clearStripe(): CustomerPaymentMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPaymentMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPaymentMetadata): CustomerPaymentMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerPaymentMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPaymentMetadata;
  static deserializeBinaryFromReader(message: CustomerPaymentMetadata, reader: jspb.BinaryReader): CustomerPaymentMetadata;
}

export namespace CustomerPaymentMetadata {
  export type AsObject = {
    card?: CustomerPaymentCardMetadata.AsObject,
    stripe?: CustomerPaymentStripeMetadata.AsObject,
  }
}

export class CustomerPaymentCardMetadata extends jspb.Message {
  getBrand(): string;
  setBrand(value: string): CustomerPaymentCardMetadata;

  getLast4(): number;
  setLast4(value: number): CustomerPaymentCardMetadata;

  getExpiresAt(): number;
  setExpiresAt(value: number): CustomerPaymentCardMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPaymentCardMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPaymentCardMetadata): CustomerPaymentCardMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerPaymentCardMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPaymentCardMetadata;
  static deserializeBinaryFromReader(message: CustomerPaymentCardMetadata, reader: jspb.BinaryReader): CustomerPaymentCardMetadata;
}

export namespace CustomerPaymentCardMetadata {
  export type AsObject = {
    brand: string,
    last4: number,
    expiresAt: number,
  }
}

export class CustomerPaymentStripeMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerPaymentStripeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPaymentStripeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPaymentStripeMetadata): CustomerPaymentStripeMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerPaymentStripeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPaymentStripeMetadata;
  static deserializeBinaryFromReader(message: CustomerPaymentStripeMetadata, reader: jspb.BinaryReader): CustomerPaymentStripeMetadata;
}

export namespace CustomerPaymentStripeMetadata {
  export type AsObject = {
    id: string,
  }
}

export class CustomerTransactionInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerTransactionInfo;

  getCustomerId(): string;
  setCustomerId(value: string): CustomerTransactionInfo;

  getAmount(): number;
  setAmount(value: number): CustomerTransactionInfo;

  getStatus(): payments_enums_pb.CustomerTransactionStatus;
  setStatus(value: payments_enums_pb.CustomerTransactionStatus): CustomerTransactionInfo;

  getProvider(): payments_enums_pb.CustomerTransactionProvider;
  setProvider(value: payments_enums_pb.CustomerTransactionProvider): CustomerTransactionInfo;

  getCurrency(): payments_enums_pb.Currency;
  setCurrency(value: payments_enums_pb.Currency): CustomerTransactionInfo;

  getMetadata(): CustomerTransactionMetadata | undefined;
  setMetadata(value?: CustomerTransactionMetadata): CustomerTransactionInfo;
  hasMetadata(): boolean;
  clearMetadata(): CustomerTransactionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTransactionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTransactionInfo): CustomerTransactionInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerTransactionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTransactionInfo;
  static deserializeBinaryFromReader(message: CustomerTransactionInfo, reader: jspb.BinaryReader): CustomerTransactionInfo;
}

export namespace CustomerTransactionInfo {
  export type AsObject = {
    id: string,
    customerId: string,
    amount: number,
    status: payments_enums_pb.CustomerTransactionStatus,
    provider: payments_enums_pb.CustomerTransactionProvider,
    currency: payments_enums_pb.Currency,
    metadata?: CustomerTransactionMetadata.AsObject,
  }
}

export class CustomerTransactionMetadata extends jspb.Message {
  getStripe(): CustomerTransactionStripeMetadata | undefined;
  setStripe(value?: CustomerTransactionStripeMetadata): CustomerTransactionMetadata;
  hasStripe(): boolean;
  clearStripe(): CustomerTransactionMetadata;

  getPayment(): CustomerTransactionPaymentMetadata | undefined;
  setPayment(value?: CustomerTransactionPaymentMetadata): CustomerTransactionMetadata;
  hasPayment(): boolean;
  clearPayment(): CustomerTransactionMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTransactionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTransactionMetadata): CustomerTransactionMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerTransactionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTransactionMetadata;
  static deserializeBinaryFromReader(message: CustomerTransactionMetadata, reader: jspb.BinaryReader): CustomerTransactionMetadata;
}

export namespace CustomerTransactionMetadata {
  export type AsObject = {
    stripe?: CustomerTransactionStripeMetadata.AsObject,
    payment?: CustomerTransactionPaymentMetadata.AsObject,
  }
}

export class CustomerTransactionStripeMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerTransactionStripeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTransactionStripeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTransactionStripeMetadata): CustomerTransactionStripeMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerTransactionStripeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTransactionStripeMetadata;
  static deserializeBinaryFromReader(message: CustomerTransactionStripeMetadata, reader: jspb.BinaryReader): CustomerTransactionStripeMetadata;
}

export namespace CustomerTransactionStripeMetadata {
  export type AsObject = {
    id: string,
  }
}

export class CustomerTransactionPaymentMetadata extends jspb.Message {
  getObject(): CustomerPaymentInfo | undefined;
  setObject(value?: CustomerPaymentInfo): CustomerTransactionPaymentMetadata;
  hasObject(): boolean;
  clearObject(): CustomerTransactionPaymentMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTransactionPaymentMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTransactionPaymentMetadata): CustomerTransactionPaymentMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerTransactionPaymentMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTransactionPaymentMetadata;
  static deserializeBinaryFromReader(message: CustomerTransactionPaymentMetadata, reader: jspb.BinaryReader): CustomerTransactionPaymentMetadata;
}

export namespace CustomerTransactionPaymentMetadata {
  export type AsObject = {
    object?: CustomerPaymentInfo.AsObject,
  }
}

export class CustomerTransactionStatusValue extends jspb.Message {
  getValue(): payments_enums_pb.CustomerTransactionStatus;
  setValue(value: payments_enums_pb.CustomerTransactionStatus): CustomerTransactionStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerTransactionStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerTransactionStatusValue): CustomerTransactionStatusValue.AsObject;
  static serializeBinaryToWriter(message: CustomerTransactionStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerTransactionStatusValue;
  static deserializeBinaryFromReader(message: CustomerTransactionStatusValue, reader: jspb.BinaryReader): CustomerTransactionStatusValue;
}

export namespace CustomerTransactionStatusValue {
  export type AsObject = {
    value: payments_enums_pb.CustomerTransactionStatus,
  }
}

export class CustomerOrderRefundInfo extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerOrderRefundInfo;

  getOrderId(): string;
  setOrderId(value: string): CustomerOrderRefundInfo;

  getReason(): string;
  setReason(value: string): CustomerOrderRefundInfo;

  getAmount(): number;
  setAmount(value: number): CustomerOrderRefundInfo;

  getStatus(): payments_enums_pb.CustomerOrderRefundStatus;
  setStatus(value: payments_enums_pb.CustomerOrderRefundStatus): CustomerOrderRefundInfo;

  getMetadata(): CustomerOrderRefundMetadata | undefined;
  setMetadata(value?: CustomerOrderRefundMetadata): CustomerOrderRefundInfo;
  hasMetadata(): boolean;
  clearMetadata(): CustomerOrderRefundInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderRefundInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderRefundInfo): CustomerOrderRefundInfo.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderRefundInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderRefundInfo;
  static deserializeBinaryFromReader(message: CustomerOrderRefundInfo, reader: jspb.BinaryReader): CustomerOrderRefundInfo;
}

export namespace CustomerOrderRefundInfo {
  export type AsObject = {
    id: string,
    orderId: string,
    reason: string,
    amount: number,
    status: payments_enums_pb.CustomerOrderRefundStatus,
    metadata?: CustomerOrderRefundMetadata.AsObject,
  }
}

export class CustomerOrderRefundMetadata extends jspb.Message {
  getStripe(): CustomerOrderRefundStripeMetadata | undefined;
  setStripe(value?: CustomerOrderRefundStripeMetadata): CustomerOrderRefundMetadata;
  hasStripe(): boolean;
  clearStripe(): CustomerOrderRefundMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderRefundMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderRefundMetadata): CustomerOrderRefundMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderRefundMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderRefundMetadata;
  static deserializeBinaryFromReader(message: CustomerOrderRefundMetadata, reader: jspb.BinaryReader): CustomerOrderRefundMetadata;
}

export namespace CustomerOrderRefundMetadata {
  export type AsObject = {
    stripe?: CustomerOrderRefundStripeMetadata.AsObject,
  }
}

export class CustomerOrderRefundStripeMetadata extends jspb.Message {
  getId(): string;
  setId(value: string): CustomerOrderRefundStripeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderRefundStripeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderRefundStripeMetadata): CustomerOrderRefundStripeMetadata.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderRefundStripeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderRefundStripeMetadata;
  static deserializeBinaryFromReader(message: CustomerOrderRefundStripeMetadata, reader: jspb.BinaryReader): CustomerOrderRefundStripeMetadata;
}

export namespace CustomerOrderRefundStripeMetadata {
  export type AsObject = {
    id: string,
  }
}

export class CustomerOrderRefundStatusValue extends jspb.Message {
  getValue(): payments_enums_pb.CustomerOrderRefundStatus;
  setValue(value: payments_enums_pb.CustomerOrderRefundStatus): CustomerOrderRefundStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOrderRefundStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOrderRefundStatusValue): CustomerOrderRefundStatusValue.AsObject;
  static serializeBinaryToWriter(message: CustomerOrderRefundStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOrderRefundStatusValue;
  static deserializeBinaryFromReader(message: CustomerOrderRefundStatusValue, reader: jspb.BinaryReader): CustomerOrderRefundStatusValue;
}

export namespace CustomerOrderRefundStatusValue {
  export type AsObject = {
    value: payments_enums_pb.CustomerOrderRefundStatus,
  }
}

