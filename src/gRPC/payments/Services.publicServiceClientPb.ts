/**
 * @fileoverview gRPC-Web generated client stub for payments.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as payments_services_public_pb from '../payments/services.public_pb';


export class PublicServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetEventTicketInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetEventTicketInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetEventTicketInfoRequest,
    payments_services_public_pb.GetEventTicketInfoResponse,
    (request: payments_services_public_pb.GetEventTicketInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetEventTicketInfoResponse.deserializeBinary
  );

  getEventTicketInfo(
    request: payments_services_public_pb.GetEventTicketInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetEventTicketInfoResponse>;

  getEventTicketInfo(
    request: payments_services_public_pb.GetEventTicketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetEventTicketInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetEventTicketInfoResponse>;

  getEventTicketInfo(
    request: payments_services_public_pb.GetEventTicketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetEventTicketInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetEventTicketInfo',
        request,
        metadata || {},
        this.methodDescriptorGetEventTicketInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetEventTicketInfo',
    request,
    metadata || {},
    this.methodDescriptorGetEventTicketInfo);
  }

  methodDescriptorListEventTickets = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListEventTickets',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListEventTicketsRequest,
    payments_services_public_pb.ListEventTicketsResponse,
    (request: payments_services_public_pb.ListEventTicketsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListEventTicketsResponse.deserializeBinary
  );

  listEventTickets(
    request: payments_services_public_pb.ListEventTicketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListEventTicketsResponse>;

  listEventTickets(
    request: payments_services_public_pb.ListEventTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListEventTicketsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListEventTicketsResponse>;

  listEventTickets(
    request: payments_services_public_pb.ListEventTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListEventTicketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListEventTickets',
        request,
        metadata || {},
        this.methodDescriptorListEventTickets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListEventTickets',
    request,
    metadata || {},
    this.methodDescriptorListEventTickets);
  }

  methodDescriptorCountEventTickets = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountEventTickets',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountEventTicketsRequest,
    payments_services_public_pb.CountEventTicketsResponse,
    (request: payments_services_public_pb.CountEventTicketsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountEventTicketsResponse.deserializeBinary
  );

  countEventTickets(
    request: payments_services_public_pb.CountEventTicketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountEventTicketsResponse>;

  countEventTickets(
    request: payments_services_public_pb.CountEventTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountEventTicketsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountEventTicketsResponse>;

  countEventTickets(
    request: payments_services_public_pb.CountEventTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountEventTicketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountEventTickets',
        request,
        metadata || {},
        this.methodDescriptorCountEventTickets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountEventTickets',
    request,
    metadata || {},
    this.methodDescriptorCountEventTickets);
  }

  methodDescriptorCreateEventTicket = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CreateEventTicket',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CreateEventTicketRequest,
    payments_services_public_pb.CreateEventTicketResponse,
    (request: payments_services_public_pb.CreateEventTicketRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CreateEventTicketResponse.deserializeBinary
  );

  createEventTicket(
    request: payments_services_public_pb.CreateEventTicketRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CreateEventTicketResponse>;

  createEventTicket(
    request: payments_services_public_pb.CreateEventTicketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateEventTicketResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CreateEventTicketResponse>;

  createEventTicket(
    request: payments_services_public_pb.CreateEventTicketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateEventTicketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CreateEventTicket',
        request,
        metadata || {},
        this.methodDescriptorCreateEventTicket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CreateEventTicket',
    request,
    metadata || {},
    this.methodDescriptorCreateEventTicket);
  }

  methodDescriptorUpdateEventTicket = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/UpdateEventTicket',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.UpdateEventTicketRequest,
    payments_services_public_pb.UpdateEventTicketResponse,
    (request: payments_services_public_pb.UpdateEventTicketRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.UpdateEventTicketResponse.deserializeBinary
  );

  updateEventTicket(
    request: payments_services_public_pb.UpdateEventTicketRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.UpdateEventTicketResponse>;

  updateEventTicket(
    request: payments_services_public_pb.UpdateEventTicketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateEventTicketResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.UpdateEventTicketResponse>;

  updateEventTicket(
    request: payments_services_public_pb.UpdateEventTicketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateEventTicketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/UpdateEventTicket',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventTicket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/UpdateEventTicket',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventTicket);
  }

  methodDescriptorDeleteEventTicket = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/DeleteEventTicket',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.DeleteEventTicketRequest,
    payments_services_public_pb.DeleteEventTicketResponse,
    (request: payments_services_public_pb.DeleteEventTicketRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.DeleteEventTicketResponse.deserializeBinary
  );

  deleteEventTicket(
    request: payments_services_public_pb.DeleteEventTicketRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.DeleteEventTicketResponse>;

  deleteEventTicket(
    request: payments_services_public_pb.DeleteEventTicketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteEventTicketResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.DeleteEventTicketResponse>;

  deleteEventTicket(
    request: payments_services_public_pb.DeleteEventTicketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteEventTicketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/DeleteEventTicket',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventTicket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/DeleteEventTicket',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventTicket);
  }

  methodDescriptorPurchaseEventTickets = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/PurchaseEventTickets',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.PurchaseEventTicketsRequest,
    payments_services_public_pb.PurchaseEventTicketsResponse,
    (request: payments_services_public_pb.PurchaseEventTicketsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.PurchaseEventTicketsResponse.deserializeBinary
  );

  purchaseEventTickets(
    request: payments_services_public_pb.PurchaseEventTicketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.PurchaseEventTicketsResponse>;

  purchaseEventTickets(
    request: payments_services_public_pb.PurchaseEventTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.PurchaseEventTicketsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.PurchaseEventTicketsResponse>;

  purchaseEventTickets(
    request: payments_services_public_pb.PurchaseEventTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.PurchaseEventTicketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/PurchaseEventTickets',
        request,
        metadata || {},
        this.methodDescriptorPurchaseEventTickets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/PurchaseEventTickets',
    request,
    metadata || {},
    this.methodDescriptorPurchaseEventTickets);
  }

  methodDescriptorGetEventProductInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetEventProductInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetEventProductInfoRequest,
    payments_services_public_pb.GetEventProductInfoResponse,
    (request: payments_services_public_pb.GetEventProductInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetEventProductInfoResponse.deserializeBinary
  );

  getEventProductInfo(
    request: payments_services_public_pb.GetEventProductInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetEventProductInfoResponse>;

  getEventProductInfo(
    request: payments_services_public_pb.GetEventProductInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetEventProductInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetEventProductInfoResponse>;

  getEventProductInfo(
    request: payments_services_public_pb.GetEventProductInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetEventProductInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetEventProductInfo',
        request,
        metadata || {},
        this.methodDescriptorGetEventProductInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetEventProductInfo',
    request,
    metadata || {},
    this.methodDescriptorGetEventProductInfo);
  }

  methodDescriptorListEventProducts = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListEventProducts',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListEventProductsRequest,
    payments_services_public_pb.ListEventProductsResponse,
    (request: payments_services_public_pb.ListEventProductsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListEventProductsResponse.deserializeBinary
  );

  listEventProducts(
    request: payments_services_public_pb.ListEventProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListEventProductsResponse>;

  listEventProducts(
    request: payments_services_public_pb.ListEventProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListEventProductsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListEventProductsResponse>;

  listEventProducts(
    request: payments_services_public_pb.ListEventProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListEventProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListEventProducts',
        request,
        metadata || {},
        this.methodDescriptorListEventProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListEventProducts',
    request,
    metadata || {},
    this.methodDescriptorListEventProducts);
  }

  methodDescriptorCountEventProducts = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountEventProducts',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountEventProductsRequest,
    payments_services_public_pb.CountEventProductsResponse,
    (request: payments_services_public_pb.CountEventProductsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountEventProductsResponse.deserializeBinary
  );

  countEventProducts(
    request: payments_services_public_pb.CountEventProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountEventProductsResponse>;

  countEventProducts(
    request: payments_services_public_pb.CountEventProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountEventProductsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountEventProductsResponse>;

  countEventProducts(
    request: payments_services_public_pb.CountEventProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountEventProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountEventProducts',
        request,
        metadata || {},
        this.methodDescriptorCountEventProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountEventProducts',
    request,
    metadata || {},
    this.methodDescriptorCountEventProducts);
  }

  methodDescriptorCreateEventProduct = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CreateEventProduct',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CreateEventProductRequest,
    payments_services_public_pb.CreateEventProductResponse,
    (request: payments_services_public_pb.CreateEventProductRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CreateEventProductResponse.deserializeBinary
  );

  createEventProduct(
    request: payments_services_public_pb.CreateEventProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CreateEventProductResponse>;

  createEventProduct(
    request: payments_services_public_pb.CreateEventProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateEventProductResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CreateEventProductResponse>;

  createEventProduct(
    request: payments_services_public_pb.CreateEventProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateEventProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CreateEventProduct',
        request,
        metadata || {},
        this.methodDescriptorCreateEventProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CreateEventProduct',
    request,
    metadata || {},
    this.methodDescriptorCreateEventProduct);
  }

  methodDescriptorUpdateEventProduct = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/UpdateEventProduct',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.UpdateEventProductRequest,
    payments_services_public_pb.UpdateEventProductResponse,
    (request: payments_services_public_pb.UpdateEventProductRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.UpdateEventProductResponse.deserializeBinary
  );

  updateEventProduct(
    request: payments_services_public_pb.UpdateEventProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.UpdateEventProductResponse>;

  updateEventProduct(
    request: payments_services_public_pb.UpdateEventProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateEventProductResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.UpdateEventProductResponse>;

  updateEventProduct(
    request: payments_services_public_pb.UpdateEventProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateEventProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/UpdateEventProduct',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/UpdateEventProduct',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventProduct);
  }

  methodDescriptorDeleteEventProduct = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/DeleteEventProduct',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.DeleteEventProductRequest,
    payments_services_public_pb.DeleteEventProductResponse,
    (request: payments_services_public_pb.DeleteEventProductRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.DeleteEventProductResponse.deserializeBinary
  );

  deleteEventProduct(
    request: payments_services_public_pb.DeleteEventProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.DeleteEventProductResponse>;

  deleteEventProduct(
    request: payments_services_public_pb.DeleteEventProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteEventProductResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.DeleteEventProductResponse>;

  deleteEventProduct(
    request: payments_services_public_pb.DeleteEventProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteEventProductResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/DeleteEventProduct',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/DeleteEventProduct',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventProduct);
  }

  methodDescriptorPurchaseEventProducts = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/PurchaseEventProducts',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.PurchaseEventProductsRequest,
    payments_services_public_pb.PurchaseEventProductsResponse,
    (request: payments_services_public_pb.PurchaseEventProductsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.PurchaseEventProductsResponse.deserializeBinary
  );

  purchaseEventProducts(
    request: payments_services_public_pb.PurchaseEventProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.PurchaseEventProductsResponse>;

  purchaseEventProducts(
    request: payments_services_public_pb.PurchaseEventProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.PurchaseEventProductsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.PurchaseEventProductsResponse>;

  purchaseEventProducts(
    request: payments_services_public_pb.PurchaseEventProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.PurchaseEventProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/PurchaseEventProducts',
        request,
        metadata || {},
        this.methodDescriptorPurchaseEventProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/PurchaseEventProducts',
    request,
    metadata || {},
    this.methodDescriptorPurchaseEventProducts);
  }

  methodDescriptorGetEventTicketVoucherInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetEventTicketVoucherInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetEventTicketVoucherInfoRequest,
    payments_services_public_pb.GetEventTicketVoucherInfoResponse,
    (request: payments_services_public_pb.GetEventTicketVoucherInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetEventTicketVoucherInfoResponse.deserializeBinary
  );

  getEventTicketVoucherInfo(
    request: payments_services_public_pb.GetEventTicketVoucherInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetEventTicketVoucherInfoResponse>;

  getEventTicketVoucherInfo(
    request: payments_services_public_pb.GetEventTicketVoucherInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetEventTicketVoucherInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetEventTicketVoucherInfoResponse>;

  getEventTicketVoucherInfo(
    request: payments_services_public_pb.GetEventTicketVoucherInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetEventTicketVoucherInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetEventTicketVoucherInfo',
        request,
        metadata || {},
        this.methodDescriptorGetEventTicketVoucherInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetEventTicketVoucherInfo',
    request,
    metadata || {},
    this.methodDescriptorGetEventTicketVoucherInfo);
  }

  methodDescriptorListEventTicketVouchers = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListEventTicketVouchers',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListEventTicketVouchersRequest,
    payments_services_public_pb.ListEventTicketVouchersResponse,
    (request: payments_services_public_pb.ListEventTicketVouchersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListEventTicketVouchersResponse.deserializeBinary
  );

  listEventTicketVouchers(
    request: payments_services_public_pb.ListEventTicketVouchersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListEventTicketVouchersResponse>;

  listEventTicketVouchers(
    request: payments_services_public_pb.ListEventTicketVouchersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListEventTicketVouchersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListEventTicketVouchersResponse>;

  listEventTicketVouchers(
    request: payments_services_public_pb.ListEventTicketVouchersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListEventTicketVouchersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListEventTicketVouchers',
        request,
        metadata || {},
        this.methodDescriptorListEventTicketVouchers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListEventTicketVouchers',
    request,
    metadata || {},
    this.methodDescriptorListEventTicketVouchers);
  }

  methodDescriptorCountEventTicketVouchers = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountEventTicketVouchers',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountEventTicketVouchersRequest,
    payments_services_public_pb.CountEventTicketVouchersResponse,
    (request: payments_services_public_pb.CountEventTicketVouchersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountEventTicketVouchersResponse.deserializeBinary
  );

  countEventTicketVouchers(
    request: payments_services_public_pb.CountEventTicketVouchersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountEventTicketVouchersResponse>;

  countEventTicketVouchers(
    request: payments_services_public_pb.CountEventTicketVouchersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountEventTicketVouchersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountEventTicketVouchersResponse>;

  countEventTicketVouchers(
    request: payments_services_public_pb.CountEventTicketVouchersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountEventTicketVouchersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountEventTicketVouchers',
        request,
        metadata || {},
        this.methodDescriptorCountEventTicketVouchers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountEventTicketVouchers',
    request,
    metadata || {},
    this.methodDescriptorCountEventTicketVouchers);
  }

  methodDescriptorCreateEventTicketVoucher = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CreateEventTicketVoucher',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CreateEventTicketVoucherRequest,
    payments_services_public_pb.CreateEventTicketVoucherResponse,
    (request: payments_services_public_pb.CreateEventTicketVoucherRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CreateEventTicketVoucherResponse.deserializeBinary
  );

  createEventTicketVoucher(
    request: payments_services_public_pb.CreateEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CreateEventTicketVoucherResponse>;

  createEventTicketVoucher(
    request: payments_services_public_pb.CreateEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateEventTicketVoucherResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CreateEventTicketVoucherResponse>;

  createEventTicketVoucher(
    request: payments_services_public_pb.CreateEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateEventTicketVoucherResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CreateEventTicketVoucher',
        request,
        metadata || {},
        this.methodDescriptorCreateEventTicketVoucher,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CreateEventTicketVoucher',
    request,
    metadata || {},
    this.methodDescriptorCreateEventTicketVoucher);
  }

  methodDescriptorUpdateEventTicketVoucher = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/UpdateEventTicketVoucher',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.UpdateEventTicketVoucherRequest,
    payments_services_public_pb.UpdateEventTicketVoucherResponse,
    (request: payments_services_public_pb.UpdateEventTicketVoucherRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.UpdateEventTicketVoucherResponse.deserializeBinary
  );

  updateEventTicketVoucher(
    request: payments_services_public_pb.UpdateEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.UpdateEventTicketVoucherResponse>;

  updateEventTicketVoucher(
    request: payments_services_public_pb.UpdateEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateEventTicketVoucherResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.UpdateEventTicketVoucherResponse>;

  updateEventTicketVoucher(
    request: payments_services_public_pb.UpdateEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateEventTicketVoucherResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/UpdateEventTicketVoucher',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventTicketVoucher,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/UpdateEventTicketVoucher',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventTicketVoucher);
  }

  methodDescriptorDeleteEventTicketVoucher = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/DeleteEventTicketVoucher',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.DeleteEventTicketVoucherRequest,
    payments_services_public_pb.DeleteEventTicketVoucherResponse,
    (request: payments_services_public_pb.DeleteEventTicketVoucherRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.DeleteEventTicketVoucherResponse.deserializeBinary
  );

  deleteEventTicketVoucher(
    request: payments_services_public_pb.DeleteEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.DeleteEventTicketVoucherResponse>;

  deleteEventTicketVoucher(
    request: payments_services_public_pb.DeleteEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteEventTicketVoucherResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.DeleteEventTicketVoucherResponse>;

  deleteEventTicketVoucher(
    request: payments_services_public_pb.DeleteEventTicketVoucherRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteEventTicketVoucherResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/DeleteEventTicketVoucher',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventTicketVoucher,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/DeleteEventTicketVoucher',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventTicketVoucher);
  }

  methodDescriptorGetPartnerInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetPartnerInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetPartnerInfoRequest,
    payments_services_public_pb.GetPartnerInfoResponse,
    (request: payments_services_public_pb.GetPartnerInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetPartnerInfoResponse.deserializeBinary
  );

  getPartnerInfo(
    request: payments_services_public_pb.GetPartnerInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetPartnerInfoResponse>;

  getPartnerInfo(
    request: payments_services_public_pb.GetPartnerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetPartnerInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetPartnerInfoResponse>;

  getPartnerInfo(
    request: payments_services_public_pb.GetPartnerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetPartnerInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetPartnerInfo',
        request,
        metadata || {},
        this.methodDescriptorGetPartnerInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetPartnerInfo',
    request,
    metadata || {},
    this.methodDescriptorGetPartnerInfo);
  }

  methodDescriptorListPartners = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListPartners',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListPartnersRequest,
    payments_services_public_pb.ListPartnersResponse,
    (request: payments_services_public_pb.ListPartnersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListPartnersResponse.deserializeBinary
  );

  listPartners(
    request: payments_services_public_pb.ListPartnersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListPartnersResponse>;

  listPartners(
    request: payments_services_public_pb.ListPartnersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListPartnersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListPartnersResponse>;

  listPartners(
    request: payments_services_public_pb.ListPartnersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListPartnersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListPartners',
        request,
        metadata || {},
        this.methodDescriptorListPartners,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListPartners',
    request,
    metadata || {},
    this.methodDescriptorListPartners);
  }

  methodDescriptorCountPartners = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountPartners',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountPartnersRequest,
    payments_services_public_pb.CountPartnersResponse,
    (request: payments_services_public_pb.CountPartnersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountPartnersResponse.deserializeBinary
  );

  countPartners(
    request: payments_services_public_pb.CountPartnersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountPartnersResponse>;

  countPartners(
    request: payments_services_public_pb.CountPartnersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountPartnersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountPartnersResponse>;

  countPartners(
    request: payments_services_public_pb.CountPartnersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountPartnersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountPartners',
        request,
        metadata || {},
        this.methodDescriptorCountPartners,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountPartners',
    request,
    metadata || {},
    this.methodDescriptorCountPartners);
  }

  methodDescriptorDeletePartner = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/DeletePartner',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.DeletePartnerRequest,
    payments_services_public_pb.DeletePartnerResponse,
    (request: payments_services_public_pb.DeletePartnerRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.DeletePartnerResponse.deserializeBinary
  );

  deletePartner(
    request: payments_services_public_pb.DeletePartnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.DeletePartnerResponse>;

  deletePartner(
    request: payments_services_public_pb.DeletePartnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeletePartnerResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.DeletePartnerResponse>;

  deletePartner(
    request: payments_services_public_pb.DeletePartnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeletePartnerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/DeletePartner',
        request,
        metadata || {},
        this.methodDescriptorDeletePartner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/DeletePartner',
    request,
    metadata || {},
    this.methodDescriptorDeletePartner);
  }

  methodDescriptorActivatePartner = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ActivatePartner',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ActivatePartnerRequest,
    payments_services_public_pb.ActivatePartnerResponse,
    (request: payments_services_public_pb.ActivatePartnerRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ActivatePartnerResponse.deserializeBinary
  );

  activatePartner(
    request: payments_services_public_pb.ActivatePartnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ActivatePartnerResponse>;

  activatePartner(
    request: payments_services_public_pb.ActivatePartnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ActivatePartnerResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ActivatePartnerResponse>;

  activatePartner(
    request: payments_services_public_pb.ActivatePartnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ActivatePartnerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ActivatePartner',
        request,
        metadata || {},
        this.methodDescriptorActivatePartner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ActivatePartner',
    request,
    metadata || {},
    this.methodDescriptorActivatePartner);
  }

  methodDescriptorGetCustomerInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetCustomerInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetCustomerInfoRequest,
    payments_services_public_pb.GetCustomerInfoResponse,
    (request: payments_services_public_pb.GetCustomerInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetCustomerInfoResponse.deserializeBinary
  );

  getCustomerInfo(
    request: payments_services_public_pb.GetCustomerInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetCustomerInfoResponse>;

  getCustomerInfo(
    request: payments_services_public_pb.GetCustomerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetCustomerInfoResponse>;

  getCustomerInfo(
    request: payments_services_public_pb.GetCustomerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetCustomerInfo',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetCustomerInfo',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerInfo);
  }

  methodDescriptorListCustomers = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListCustomers',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListCustomersRequest,
    payments_services_public_pb.ListCustomersResponse,
    (request: payments_services_public_pb.ListCustomersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListCustomersResponse.deserializeBinary
  );

  listCustomers(
    request: payments_services_public_pb.ListCustomersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListCustomersResponse>;

  listCustomers(
    request: payments_services_public_pb.ListCustomersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListCustomersResponse>;

  listCustomers(
    request: payments_services_public_pb.ListCustomersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListCustomers',
        request,
        metadata || {},
        this.methodDescriptorListCustomers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListCustomers',
    request,
    metadata || {},
    this.methodDescriptorListCustomers);
  }

  methodDescriptorCountCustomers = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountCustomers',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountCustomersRequest,
    payments_services_public_pb.CountCustomersResponse,
    (request: payments_services_public_pb.CountCustomersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountCustomersResponse.deserializeBinary
  );

  countCustomers(
    request: payments_services_public_pb.CountCustomersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountCustomersResponse>;

  countCustomers(
    request: payments_services_public_pb.CountCustomersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountCustomersResponse>;

  countCustomers(
    request: payments_services_public_pb.CountCustomersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountCustomers',
        request,
        metadata || {},
        this.methodDescriptorCountCustomers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountCustomers',
    request,
    metadata || {},
    this.methodDescriptorCountCustomers);
  }

  methodDescriptorDeleteCustomer = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/DeleteCustomer',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.DeleteCustomerRequest,
    payments_services_public_pb.DeleteCustomerResponse,
    (request: payments_services_public_pb.DeleteCustomerRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.DeleteCustomerResponse.deserializeBinary
  );

  deleteCustomer(
    request: payments_services_public_pb.DeleteCustomerRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.DeleteCustomerResponse>;

  deleteCustomer(
    request: payments_services_public_pb.DeleteCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteCustomerResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.DeleteCustomerResponse>;

  deleteCustomer(
    request: payments_services_public_pb.DeleteCustomerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteCustomerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/DeleteCustomer',
        request,
        metadata || {},
        this.methodDescriptorDeleteCustomer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/DeleteCustomer',
    request,
    metadata || {},
    this.methodDescriptorDeleteCustomer);
  }

  methodDescriptorGetCustomerOrderInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetCustomerOrderInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetCustomerOrderInfoRequest,
    payments_services_public_pb.GetCustomerOrderInfoResponse,
    (request: payments_services_public_pb.GetCustomerOrderInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetCustomerOrderInfoResponse.deserializeBinary
  );

  getCustomerOrderInfo(
    request: payments_services_public_pb.GetCustomerOrderInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetCustomerOrderInfoResponse>;

  getCustomerOrderInfo(
    request: payments_services_public_pb.GetCustomerOrderInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerOrderInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetCustomerOrderInfoResponse>;

  getCustomerOrderInfo(
    request: payments_services_public_pb.GetCustomerOrderInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerOrderInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetCustomerOrderInfo',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerOrderInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetCustomerOrderInfo',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerOrderInfo);
  }

  methodDescriptorListCustomerOrders = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListCustomerOrders',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListCustomerOrdersRequest,
    payments_services_public_pb.ListCustomerOrdersResponse,
    (request: payments_services_public_pb.ListCustomerOrdersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListCustomerOrdersResponse.deserializeBinary
  );

  listCustomerOrders(
    request: payments_services_public_pb.ListCustomerOrdersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListCustomerOrdersResponse>;

  listCustomerOrders(
    request: payments_services_public_pb.ListCustomerOrdersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomerOrdersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListCustomerOrdersResponse>;

  listCustomerOrders(
    request: payments_services_public_pb.ListCustomerOrdersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomerOrdersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListCustomerOrders',
        request,
        metadata || {},
        this.methodDescriptorListCustomerOrders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListCustomerOrders',
    request,
    metadata || {},
    this.methodDescriptorListCustomerOrders);
  }

  methodDescriptorCountCustomerOrders = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountCustomerOrders',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountCustomerOrdersRequest,
    payments_services_public_pb.CountCustomerOrdersResponse,
    (request: payments_services_public_pb.CountCustomerOrdersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountCustomerOrdersResponse.deserializeBinary
  );

  countCustomerOrders(
    request: payments_services_public_pb.CountCustomerOrdersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountCustomerOrdersResponse>;

  countCustomerOrders(
    request: payments_services_public_pb.CountCustomerOrdersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomerOrdersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountCustomerOrdersResponse>;

  countCustomerOrders(
    request: payments_services_public_pb.CountCustomerOrdersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomerOrdersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountCustomerOrders',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerOrders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountCustomerOrders',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerOrders);
  }

  methodDescriptorListPartnerOrders = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListPartnerOrders',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListPartnerOrdersRequest,
    payments_services_public_pb.ListPartnerOrdersResponse,
    (request: payments_services_public_pb.ListPartnerOrdersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListPartnerOrdersResponse.deserializeBinary
  );

  listPartnerOrders(
    request: payments_services_public_pb.ListPartnerOrdersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListPartnerOrdersResponse>;

  listPartnerOrders(
    request: payments_services_public_pb.ListPartnerOrdersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListPartnerOrdersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListPartnerOrdersResponse>;

  listPartnerOrders(
    request: payments_services_public_pb.ListPartnerOrdersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListPartnerOrdersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListPartnerOrders',
        request,
        metadata || {},
        this.methodDescriptorListPartnerOrders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListPartnerOrders',
    request,
    metadata || {},
    this.methodDescriptorListPartnerOrders);
  }

  methodDescriptorCountPartnerOrders = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountPartnerOrders',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountPartnerOrdersRequest,
    payments_services_public_pb.CountPartnerOrdersResponse,
    (request: payments_services_public_pb.CountPartnerOrdersRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountPartnerOrdersResponse.deserializeBinary
  );

  countPartnerOrders(
    request: payments_services_public_pb.CountPartnerOrdersRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountPartnerOrdersResponse>;

  countPartnerOrders(
    request: payments_services_public_pb.CountPartnerOrdersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountPartnerOrdersResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountPartnerOrdersResponse>;

  countPartnerOrders(
    request: payments_services_public_pb.CountPartnerOrdersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountPartnerOrdersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountPartnerOrders',
        request,
        metadata || {},
        this.methodDescriptorCountPartnerOrders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountPartnerOrders',
    request,
    metadata || {},
    this.methodDescriptorCountPartnerOrders);
  }

  methodDescriptorAcceptPartnerOrder = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/AcceptPartnerOrder',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.AcceptPartnerOrderRequest,
    payments_services_public_pb.AcceptPartnerOrderResponse,
    (request: payments_services_public_pb.AcceptPartnerOrderRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.AcceptPartnerOrderResponse.deserializeBinary
  );

  acceptPartnerOrder(
    request: payments_services_public_pb.AcceptPartnerOrderRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.AcceptPartnerOrderResponse>;

  acceptPartnerOrder(
    request: payments_services_public_pb.AcceptPartnerOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.AcceptPartnerOrderResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.AcceptPartnerOrderResponse>;

  acceptPartnerOrder(
    request: payments_services_public_pb.AcceptPartnerOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.AcceptPartnerOrderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/AcceptPartnerOrder',
        request,
        metadata || {},
        this.methodDescriptorAcceptPartnerOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/AcceptPartnerOrder',
    request,
    metadata || {},
    this.methodDescriptorAcceptPartnerOrder);
  }

  methodDescriptorDeclinePartnerOrder = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/DeclinePartnerOrder',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.DeclinePartnerOrderRequest,
    payments_services_public_pb.DeclinePartnerOrderResponse,
    (request: payments_services_public_pb.DeclinePartnerOrderRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.DeclinePartnerOrderResponse.deserializeBinary
  );

  declinePartnerOrder(
    request: payments_services_public_pb.DeclinePartnerOrderRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.DeclinePartnerOrderResponse>;

  declinePartnerOrder(
    request: payments_services_public_pb.DeclinePartnerOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeclinePartnerOrderResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.DeclinePartnerOrderResponse>;

  declinePartnerOrder(
    request: payments_services_public_pb.DeclinePartnerOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeclinePartnerOrderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/DeclinePartnerOrder',
        request,
        metadata || {},
        this.methodDescriptorDeclinePartnerOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/DeclinePartnerOrder',
    request,
    metadata || {},
    this.methodDescriptorDeclinePartnerOrder);
  }

  methodDescriptorRefundPartnerOrder = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/RefundPartnerOrder',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.RefundPartnerOrderRequest,
    payments_services_public_pb.RefundPartnerOrderResponse,
    (request: payments_services_public_pb.RefundPartnerOrderRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.RefundPartnerOrderResponse.deserializeBinary
  );

  refundPartnerOrder(
    request: payments_services_public_pb.RefundPartnerOrderRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.RefundPartnerOrderResponse>;

  refundPartnerOrder(
    request: payments_services_public_pb.RefundPartnerOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.RefundPartnerOrderResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.RefundPartnerOrderResponse>;

  refundPartnerOrder(
    request: payments_services_public_pb.RefundPartnerOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.RefundPartnerOrderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/RefundPartnerOrder',
        request,
        metadata || {},
        this.methodDescriptorRefundPartnerOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/RefundPartnerOrder',
    request,
    metadata || {},
    this.methodDescriptorRefundPartnerOrder);
  }

  methodDescriptorGetCustomerAddressInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetCustomerAddressInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetCustomerAddressInfoRequest,
    payments_services_public_pb.GetCustomerAddressInfoResponse,
    (request: payments_services_public_pb.GetCustomerAddressInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetCustomerAddressInfoResponse.deserializeBinary
  );

  getCustomerAddressInfo(
    request: payments_services_public_pb.GetCustomerAddressInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetCustomerAddressInfoResponse>;

  getCustomerAddressInfo(
    request: payments_services_public_pb.GetCustomerAddressInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerAddressInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetCustomerAddressInfoResponse>;

  getCustomerAddressInfo(
    request: payments_services_public_pb.GetCustomerAddressInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerAddressInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetCustomerAddressInfo',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerAddressInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetCustomerAddressInfo',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerAddressInfo);
  }

  methodDescriptorListCustomerAddresses = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListCustomerAddresses',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListCustomerAddressesRequest,
    payments_services_public_pb.ListCustomerAddressesResponse,
    (request: payments_services_public_pb.ListCustomerAddressesRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListCustomerAddressesResponse.deserializeBinary
  );

  listCustomerAddresses(
    request: payments_services_public_pb.ListCustomerAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListCustomerAddressesResponse>;

  listCustomerAddresses(
    request: payments_services_public_pb.ListCustomerAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomerAddressesResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListCustomerAddressesResponse>;

  listCustomerAddresses(
    request: payments_services_public_pb.ListCustomerAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomerAddressesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListCustomerAddresses',
        request,
        metadata || {},
        this.methodDescriptorListCustomerAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListCustomerAddresses',
    request,
    metadata || {},
    this.methodDescriptorListCustomerAddresses);
  }

  methodDescriptorCountCustomerAddresses = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountCustomerAddresses',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountCustomerAddressesRequest,
    payments_services_public_pb.CountCustomerAddressesResponse,
    (request: payments_services_public_pb.CountCustomerAddressesRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountCustomerAddressesResponse.deserializeBinary
  );

  countCustomerAddresses(
    request: payments_services_public_pb.CountCustomerAddressesRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountCustomerAddressesResponse>;

  countCustomerAddresses(
    request: payments_services_public_pb.CountCustomerAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomerAddressesResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountCustomerAddressesResponse>;

  countCustomerAddresses(
    request: payments_services_public_pb.CountCustomerAddressesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomerAddressesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountCustomerAddresses',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerAddresses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountCustomerAddresses',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerAddresses);
  }

  methodDescriptorCreateCustomerAddress = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CreateCustomerAddress',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CreateCustomerAddressRequest,
    payments_services_public_pb.CreateCustomerAddressResponse,
    (request: payments_services_public_pb.CreateCustomerAddressRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CreateCustomerAddressResponse.deserializeBinary
  );

  createCustomerAddress(
    request: payments_services_public_pb.CreateCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CreateCustomerAddressResponse>;

  createCustomerAddress(
    request: payments_services_public_pb.CreateCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateCustomerAddressResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CreateCustomerAddressResponse>;

  createCustomerAddress(
    request: payments_services_public_pb.CreateCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateCustomerAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CreateCustomerAddress',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomerAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CreateCustomerAddress',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomerAddress);
  }

  methodDescriptorUpdateCustomerAddress = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/UpdateCustomerAddress',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.UpdateCustomerAddressRequest,
    payments_services_public_pb.UpdateCustomerAddressResponse,
    (request: payments_services_public_pb.UpdateCustomerAddressRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.UpdateCustomerAddressResponse.deserializeBinary
  );

  updateCustomerAddress(
    request: payments_services_public_pb.UpdateCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.UpdateCustomerAddressResponse>;

  updateCustomerAddress(
    request: payments_services_public_pb.UpdateCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateCustomerAddressResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.UpdateCustomerAddressResponse>;

  updateCustomerAddress(
    request: payments_services_public_pb.UpdateCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateCustomerAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/UpdateCustomerAddress',
        request,
        metadata || {},
        this.methodDescriptorUpdateCustomerAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/UpdateCustomerAddress',
    request,
    metadata || {},
    this.methodDescriptorUpdateCustomerAddress);
  }

  methodDescriptorDeleteCustomerAddress = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/DeleteCustomerAddress',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.DeleteCustomerAddressRequest,
    payments_services_public_pb.DeleteCustomerAddressResponse,
    (request: payments_services_public_pb.DeleteCustomerAddressRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.DeleteCustomerAddressResponse.deserializeBinary
  );

  deleteCustomerAddress(
    request: payments_services_public_pb.DeleteCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.DeleteCustomerAddressResponse>;

  deleteCustomerAddress(
    request: payments_services_public_pb.DeleteCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteCustomerAddressResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.DeleteCustomerAddressResponse>;

  deleteCustomerAddress(
    request: payments_services_public_pb.DeleteCustomerAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteCustomerAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/DeleteCustomerAddress',
        request,
        metadata || {},
        this.methodDescriptorDeleteCustomerAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/DeleteCustomerAddress',
    request,
    metadata || {},
    this.methodDescriptorDeleteCustomerAddress);
  }

  methodDescriptorGetCustomerPaymentInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetCustomerPaymentInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetCustomerPaymentInfoRequest,
    payments_services_public_pb.GetCustomerPaymentInfoResponse,
    (request: payments_services_public_pb.GetCustomerPaymentInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetCustomerPaymentInfoResponse.deserializeBinary
  );

  getCustomerPaymentInfo(
    request: payments_services_public_pb.GetCustomerPaymentInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetCustomerPaymentInfoResponse>;

  getCustomerPaymentInfo(
    request: payments_services_public_pb.GetCustomerPaymentInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerPaymentInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetCustomerPaymentInfoResponse>;

  getCustomerPaymentInfo(
    request: payments_services_public_pb.GetCustomerPaymentInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerPaymentInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetCustomerPaymentInfo',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerPaymentInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetCustomerPaymentInfo',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerPaymentInfo);
  }

  methodDescriptorListCustomerPayments = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListCustomerPayments',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListCustomerPaymentsRequest,
    payments_services_public_pb.ListCustomerPaymentsResponse,
    (request: payments_services_public_pb.ListCustomerPaymentsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListCustomerPaymentsResponse.deserializeBinary
  );

  listCustomerPayments(
    request: payments_services_public_pb.ListCustomerPaymentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListCustomerPaymentsResponse>;

  listCustomerPayments(
    request: payments_services_public_pb.ListCustomerPaymentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomerPaymentsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListCustomerPaymentsResponse>;

  listCustomerPayments(
    request: payments_services_public_pb.ListCustomerPaymentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomerPaymentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListCustomerPayments',
        request,
        metadata || {},
        this.methodDescriptorListCustomerPayments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListCustomerPayments',
    request,
    metadata || {},
    this.methodDescriptorListCustomerPayments);
  }

  methodDescriptorCountCustomerPayments = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountCustomerPayments',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountCustomerPaymentsRequest,
    payments_services_public_pb.CountCustomerPaymentsResponse,
    (request: payments_services_public_pb.CountCustomerPaymentsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountCustomerPaymentsResponse.deserializeBinary
  );

  countCustomerPayments(
    request: payments_services_public_pb.CountCustomerPaymentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountCustomerPaymentsResponse>;

  countCustomerPayments(
    request: payments_services_public_pb.CountCustomerPaymentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomerPaymentsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountCustomerPaymentsResponse>;

  countCustomerPayments(
    request: payments_services_public_pb.CountCustomerPaymentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomerPaymentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountCustomerPayments',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerPayments,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountCustomerPayments',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerPayments);
  }

  methodDescriptorCreateCustomerPayment = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CreateCustomerPayment',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CreateCustomerPaymentRequest,
    payments_services_public_pb.CreateCustomerPaymentResponse,
    (request: payments_services_public_pb.CreateCustomerPaymentRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CreateCustomerPaymentResponse.deserializeBinary
  );

  createCustomerPayment(
    request: payments_services_public_pb.CreateCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CreateCustomerPaymentResponse>;

  createCustomerPayment(
    request: payments_services_public_pb.CreateCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateCustomerPaymentResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CreateCustomerPaymentResponse>;

  createCustomerPayment(
    request: payments_services_public_pb.CreateCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CreateCustomerPaymentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CreateCustomerPayment',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomerPayment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CreateCustomerPayment',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomerPayment);
  }

  methodDescriptorUpdateCustomerPayment = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/UpdateCustomerPayment',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.UpdateCustomerPaymentRequest,
    payments_services_public_pb.UpdateCustomerPaymentResponse,
    (request: payments_services_public_pb.UpdateCustomerPaymentRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.UpdateCustomerPaymentResponse.deserializeBinary
  );

  updateCustomerPayment(
    request: payments_services_public_pb.UpdateCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.UpdateCustomerPaymentResponse>;

  updateCustomerPayment(
    request: payments_services_public_pb.UpdateCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateCustomerPaymentResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.UpdateCustomerPaymentResponse>;

  updateCustomerPayment(
    request: payments_services_public_pb.UpdateCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.UpdateCustomerPaymentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/UpdateCustomerPayment',
        request,
        metadata || {},
        this.methodDescriptorUpdateCustomerPayment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/UpdateCustomerPayment',
    request,
    metadata || {},
    this.methodDescriptorUpdateCustomerPayment);
  }

  methodDescriptorDeleteCustomerPayment = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/DeleteCustomerPayment',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.DeleteCustomerPaymentRequest,
    payments_services_public_pb.DeleteCustomerPaymentResponse,
    (request: payments_services_public_pb.DeleteCustomerPaymentRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.DeleteCustomerPaymentResponse.deserializeBinary
  );

  deleteCustomerPayment(
    request: payments_services_public_pb.DeleteCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.DeleteCustomerPaymentResponse>;

  deleteCustomerPayment(
    request: payments_services_public_pb.DeleteCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteCustomerPaymentResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.DeleteCustomerPaymentResponse>;

  deleteCustomerPayment(
    request: payments_services_public_pb.DeleteCustomerPaymentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.DeleteCustomerPaymentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/DeleteCustomerPayment',
        request,
        metadata || {},
        this.methodDescriptorDeleteCustomerPayment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/DeleteCustomerPayment',
    request,
    metadata || {},
    this.methodDescriptorDeleteCustomerPayment);
  }

  methodDescriptorGetCustomerTransactionInfo = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/GetCustomerTransactionInfo',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.GetCustomerTransactionInfoRequest,
    payments_services_public_pb.GetCustomerTransactionInfoResponse,
    (request: payments_services_public_pb.GetCustomerTransactionInfoRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.GetCustomerTransactionInfoResponse.deserializeBinary
  );

  getCustomerTransactionInfo(
    request: payments_services_public_pb.GetCustomerTransactionInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.GetCustomerTransactionInfoResponse>;

  getCustomerTransactionInfo(
    request: payments_services_public_pb.GetCustomerTransactionInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerTransactionInfoResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.GetCustomerTransactionInfoResponse>;

  getCustomerTransactionInfo(
    request: payments_services_public_pb.GetCustomerTransactionInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.GetCustomerTransactionInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/GetCustomerTransactionInfo',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerTransactionInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/GetCustomerTransactionInfo',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerTransactionInfo);
  }

  methodDescriptorListCustomerTransactions = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/ListCustomerTransactions',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.ListCustomerTransactionsRequest,
    payments_services_public_pb.ListCustomerTransactionsResponse,
    (request: payments_services_public_pb.ListCustomerTransactionsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.ListCustomerTransactionsResponse.deserializeBinary
  );

  listCustomerTransactions(
    request: payments_services_public_pb.ListCustomerTransactionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.ListCustomerTransactionsResponse>;

  listCustomerTransactions(
    request: payments_services_public_pb.ListCustomerTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomerTransactionsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.ListCustomerTransactionsResponse>;

  listCustomerTransactions(
    request: payments_services_public_pb.ListCustomerTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.ListCustomerTransactionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/ListCustomerTransactions',
        request,
        metadata || {},
        this.methodDescriptorListCustomerTransactions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/ListCustomerTransactions',
    request,
    metadata || {},
    this.methodDescriptorListCustomerTransactions);
  }

  methodDescriptorCountCustomerTransactions = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PublicService/CountCustomerTransactions',
    grpcWeb.MethodType.UNARY,
    payments_services_public_pb.CountCustomerTransactionsRequest,
    payments_services_public_pb.CountCustomerTransactionsResponse,
    (request: payments_services_public_pb.CountCustomerTransactionsRequest) => {
      return request.serializeBinary();
    },
    payments_services_public_pb.CountCustomerTransactionsResponse.deserializeBinary
  );

  countCustomerTransactions(
    request: payments_services_public_pb.CountCustomerTransactionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_public_pb.CountCustomerTransactionsResponse>;

  countCustomerTransactions(
    request: payments_services_public_pb.CountCustomerTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomerTransactionsResponse) => void): grpcWeb.ClientReadableStream<payments_services_public_pb.CountCustomerTransactionsResponse>;

  countCustomerTransactions(
    request: payments_services_public_pb.CountCustomerTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_public_pb.CountCustomerTransactionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PublicService/CountCustomerTransactions',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerTransactions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PublicService/CountCustomerTransactions',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerTransactions);
  }

}

