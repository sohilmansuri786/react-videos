/**
 * @fileoverview gRPC-Web generated client stub for payments.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as payments_services_private_pb from '../payments/services.private_pb';


export class PrivateServiceClient {
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

  methodDescriptorGetEventTicketInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetEventTicketInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetEventTicketInternallyRequest,
    payments_services_private_pb.GetEventTicketInternallyResponse,
    (request: payments_services_private_pb.GetEventTicketInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetEventTicketInternallyResponse.deserializeBinary
  );

  getEventTicketInternally(
    request: payments_services_private_pb.GetEventTicketInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetEventTicketInternallyResponse>;

  getEventTicketInternally(
    request: payments_services_private_pb.GetEventTicketInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetEventTicketInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetEventTicketInternallyResponse>;

  getEventTicketInternally(
    request: payments_services_private_pb.GetEventTicketInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetEventTicketInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetEventTicketInternally',
        request,
        metadata || {},
        this.methodDescriptorGetEventTicketInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetEventTicketInternally',
    request,
    metadata || {},
    this.methodDescriptorGetEventTicketInternally);
  }

  methodDescriptorListEventTicketsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListEventTicketsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListEventTicketsInternallyRequest,
    payments_services_private_pb.ListEventTicketsInternallyResponse,
    (request: payments_services_private_pb.ListEventTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListEventTicketsInternallyResponse.deserializeBinary
  );

  listEventTicketsInternally(
    request: payments_services_private_pb.ListEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListEventTicketsInternallyResponse>;

  listEventTicketsInternally(
    request: payments_services_private_pb.ListEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListEventTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListEventTicketsInternallyResponse>;

  listEventTicketsInternally(
    request: payments_services_private_pb.ListEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListEventTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListEventTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorListEventTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListEventTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorListEventTicketsInternally);
  }

  methodDescriptorCountEventTicketsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountEventTicketsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountEventTicketsInternallyRequest,
    payments_services_private_pb.CountEventTicketsInternallyResponse,
    (request: payments_services_private_pb.CountEventTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountEventTicketsInternallyResponse.deserializeBinary
  );

  countEventTicketsInternally(
    request: payments_services_private_pb.CountEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountEventTicketsInternallyResponse>;

  countEventTicketsInternally(
    request: payments_services_private_pb.CountEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountEventTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountEventTicketsInternallyResponse>;

  countEventTicketsInternally(
    request: payments_services_private_pb.CountEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountEventTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountEventTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountEventTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountEventTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountEventTicketsInternally);
  }

  methodDescriptorCreateEventTicketsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateEventTicketsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateEventTicketsInternallyRequest,
    payments_services_private_pb.CreateEventTicketsInternallyResponse,
    (request: payments_services_private_pb.CreateEventTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateEventTicketsInternallyResponse.deserializeBinary
  );

  createEventTicketsInternally(
    request: payments_services_private_pb.CreateEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateEventTicketsInternallyResponse>;

  createEventTicketsInternally(
    request: payments_services_private_pb.CreateEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateEventTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateEventTicketsInternallyResponse>;

  createEventTicketsInternally(
    request: payments_services_private_pb.CreateEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateEventTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateEventTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateEventTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateEventTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateEventTicketsInternally);
  }

  methodDescriptorUpdateEventTicketsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/UpdateEventTicketsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.UpdateEventTicketsInternallyRequest,
    payments_services_private_pb.UpdateEventTicketsInternallyResponse,
    (request: payments_services_private_pb.UpdateEventTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.UpdateEventTicketsInternallyResponse.deserializeBinary
  );

  updateEventTicketsInternally(
    request: payments_services_private_pb.UpdateEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.UpdateEventTicketsInternallyResponse>;

  updateEventTicketsInternally(
    request: payments_services_private_pb.UpdateEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateEventTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.UpdateEventTicketsInternallyResponse>;

  updateEventTicketsInternally(
    request: payments_services_private_pb.UpdateEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateEventTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/UpdateEventTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/UpdateEventTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventTicketsInternally);
  }

  methodDescriptorDeleteEventTicketsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeleteEventTicketsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeleteEventTicketsInternallyRequest,
    payments_services_private_pb.DeleteEventTicketsInternallyResponse,
    (request: payments_services_private_pb.DeleteEventTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeleteEventTicketsInternallyResponse.deserializeBinary
  );

  deleteEventTicketsInternally(
    request: payments_services_private_pb.DeleteEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeleteEventTicketsInternallyResponse>;

  deleteEventTicketsInternally(
    request: payments_services_private_pb.DeleteEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteEventTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeleteEventTicketsInternallyResponse>;

  deleteEventTicketsInternally(
    request: payments_services_private_pb.DeleteEventTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteEventTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeleteEventTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeleteEventTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventTicketsInternally);
  }

  methodDescriptorGetEventProduct = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetEventProduct',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetEventProductInternallyRequest,
    payments_services_private_pb.GetEventProductInternallyResponse,
    (request: payments_services_private_pb.GetEventProductInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetEventProductInternallyResponse.deserializeBinary
  );

  getEventProduct(
    request: payments_services_private_pb.GetEventProductInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetEventProductInternallyResponse>;

  getEventProduct(
    request: payments_services_private_pb.GetEventProductInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetEventProductInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetEventProductInternallyResponse>;

  getEventProduct(
    request: payments_services_private_pb.GetEventProductInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetEventProductInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetEventProduct',
        request,
        metadata || {},
        this.methodDescriptorGetEventProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetEventProduct',
    request,
    metadata || {},
    this.methodDescriptorGetEventProduct);
  }

  methodDescriptorListEventProducts = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListEventProducts',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListEventProductsInternallyRequest,
    payments_services_private_pb.ListEventProductsInternallyResponse,
    (request: payments_services_private_pb.ListEventProductsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListEventProductsInternallyResponse.deserializeBinary
  );

  listEventProducts(
    request: payments_services_private_pb.ListEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListEventProductsInternallyResponse>;

  listEventProducts(
    request: payments_services_private_pb.ListEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListEventProductsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListEventProductsInternallyResponse>;

  listEventProducts(
    request: payments_services_private_pb.ListEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListEventProductsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListEventProducts',
        request,
        metadata || {},
        this.methodDescriptorListEventProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListEventProducts',
    request,
    metadata || {},
    this.methodDescriptorListEventProducts);
  }

  methodDescriptorCountEventProducts = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountEventProducts',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountEventProductsInternallyRequest,
    payments_services_private_pb.CountEventProductsInternallyResponse,
    (request: payments_services_private_pb.CountEventProductsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountEventProductsInternallyResponse.deserializeBinary
  );

  countEventProducts(
    request: payments_services_private_pb.CountEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountEventProductsInternallyResponse>;

  countEventProducts(
    request: payments_services_private_pb.CountEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountEventProductsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountEventProductsInternallyResponse>;

  countEventProducts(
    request: payments_services_private_pb.CountEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountEventProductsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountEventProducts',
        request,
        metadata || {},
        this.methodDescriptorCountEventProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountEventProducts',
    request,
    metadata || {},
    this.methodDescriptorCountEventProducts);
  }

  methodDescriptorCreateEventProducts = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateEventProducts',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateEventProductsInternallyRequest,
    payments_services_private_pb.CreateEventProductsInternallyResponse,
    (request: payments_services_private_pb.CreateEventProductsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateEventProductsInternallyResponse.deserializeBinary
  );

  createEventProducts(
    request: payments_services_private_pb.CreateEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateEventProductsInternallyResponse>;

  createEventProducts(
    request: payments_services_private_pb.CreateEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateEventProductsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateEventProductsInternallyResponse>;

  createEventProducts(
    request: payments_services_private_pb.CreateEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateEventProductsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateEventProducts',
        request,
        metadata || {},
        this.methodDescriptorCreateEventProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateEventProducts',
    request,
    metadata || {},
    this.methodDescriptorCreateEventProducts);
  }

  methodDescriptorUpdateEventProducts = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/UpdateEventProducts',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.UpdateEventProductsInternallyRequest,
    payments_services_private_pb.UpdateEventProductsInternallyResponse,
    (request: payments_services_private_pb.UpdateEventProductsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.UpdateEventProductsInternallyResponse.deserializeBinary
  );

  updateEventProducts(
    request: payments_services_private_pb.UpdateEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.UpdateEventProductsInternallyResponse>;

  updateEventProducts(
    request: payments_services_private_pb.UpdateEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateEventProductsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.UpdateEventProductsInternallyResponse>;

  updateEventProducts(
    request: payments_services_private_pb.UpdateEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateEventProductsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/UpdateEventProducts',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/UpdateEventProducts',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventProducts);
  }

  methodDescriptorDeleteEventProducts = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeleteEventProducts',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeleteEventProductsInternallyRequest,
    payments_services_private_pb.DeleteEventProductsInternallyResponse,
    (request: payments_services_private_pb.DeleteEventProductsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeleteEventProductsInternallyResponse.deserializeBinary
  );

  deleteEventProducts(
    request: payments_services_private_pb.DeleteEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeleteEventProductsInternallyResponse>;

  deleteEventProducts(
    request: payments_services_private_pb.DeleteEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteEventProductsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeleteEventProductsInternallyResponse>;

  deleteEventProducts(
    request: payments_services_private_pb.DeleteEventProductsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteEventProductsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeleteEventProducts',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeleteEventProducts',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventProducts);
  }

  methodDescriptorGetEventTicketVoucherInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetEventTicketVoucherInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetEventTicketVoucherInternallyRequest,
    payments_services_private_pb.GetEventTicketVoucherInternallyResponse,
    (request: payments_services_private_pb.GetEventTicketVoucherInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetEventTicketVoucherInternallyResponse.deserializeBinary
  );

  getEventTicketVoucherInternally(
    request: payments_services_private_pb.GetEventTicketVoucherInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetEventTicketVoucherInternallyResponse>;

  getEventTicketVoucherInternally(
    request: payments_services_private_pb.GetEventTicketVoucherInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetEventTicketVoucherInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetEventTicketVoucherInternallyResponse>;

  getEventTicketVoucherInternally(
    request: payments_services_private_pb.GetEventTicketVoucherInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetEventTicketVoucherInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetEventTicketVoucherInternally',
        request,
        metadata || {},
        this.methodDescriptorGetEventTicketVoucherInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetEventTicketVoucherInternally',
    request,
    metadata || {},
    this.methodDescriptorGetEventTicketVoucherInternally);
  }

  methodDescriptorListEventTicketVouchersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListEventTicketVouchersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListEventTicketVouchersInternallyRequest,
    payments_services_private_pb.ListEventTicketVouchersInternallyResponse,
    (request: payments_services_private_pb.ListEventTicketVouchersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListEventTicketVouchersInternallyResponse.deserializeBinary
  );

  listEventTicketVouchersInternally(
    request: payments_services_private_pb.ListEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListEventTicketVouchersInternallyResponse>;

  listEventTicketVouchersInternally(
    request: payments_services_private_pb.ListEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListEventTicketVouchersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListEventTicketVouchersInternallyResponse>;

  listEventTicketVouchersInternally(
    request: payments_services_private_pb.ListEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListEventTicketVouchersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListEventTicketVouchersInternally',
        request,
        metadata || {},
        this.methodDescriptorListEventTicketVouchersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListEventTicketVouchersInternally',
    request,
    metadata || {},
    this.methodDescriptorListEventTicketVouchersInternally);
  }

  methodDescriptorCountEventTicketVouchersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountEventTicketVouchersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountEventTicketVouchersInternallyRequest,
    payments_services_private_pb.CountEventTicketVouchersInternallyResponse,
    (request: payments_services_private_pb.CountEventTicketVouchersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountEventTicketVouchersInternallyResponse.deserializeBinary
  );

  countEventTicketVouchersInternally(
    request: payments_services_private_pb.CountEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountEventTicketVouchersInternallyResponse>;

  countEventTicketVouchersInternally(
    request: payments_services_private_pb.CountEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountEventTicketVouchersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountEventTicketVouchersInternallyResponse>;

  countEventTicketVouchersInternally(
    request: payments_services_private_pb.CountEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountEventTicketVouchersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountEventTicketVouchersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountEventTicketVouchersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountEventTicketVouchersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountEventTicketVouchersInternally);
  }

  methodDescriptorCreateEventTicketVouchersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateEventTicketVouchersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateEventTicketVouchersInternallyRequest,
    payments_services_private_pb.CreateEventTicketVouchersInternallyResponse,
    (request: payments_services_private_pb.CreateEventTicketVouchersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateEventTicketVouchersInternallyResponse.deserializeBinary
  );

  createEventTicketVouchersInternally(
    request: payments_services_private_pb.CreateEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateEventTicketVouchersInternallyResponse>;

  createEventTicketVouchersInternally(
    request: payments_services_private_pb.CreateEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateEventTicketVouchersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateEventTicketVouchersInternallyResponse>;

  createEventTicketVouchersInternally(
    request: payments_services_private_pb.CreateEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateEventTicketVouchersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateEventTicketVouchersInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateEventTicketVouchersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateEventTicketVouchersInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateEventTicketVouchersInternally);
  }

  methodDescriptorUpdateEventTicketVouchersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/UpdateEventTicketVouchersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.UpdateEventTicketVouchersInternallyRequest,
    payments_services_private_pb.UpdateEventTicketVouchersInternallyResponse,
    (request: payments_services_private_pb.UpdateEventTicketVouchersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.UpdateEventTicketVouchersInternallyResponse.deserializeBinary
  );

  updateEventTicketVouchersInternally(
    request: payments_services_private_pb.UpdateEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.UpdateEventTicketVouchersInternallyResponse>;

  updateEventTicketVouchersInternally(
    request: payments_services_private_pb.UpdateEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateEventTicketVouchersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.UpdateEventTicketVouchersInternallyResponse>;

  updateEventTicketVouchersInternally(
    request: payments_services_private_pb.UpdateEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateEventTicketVouchersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/UpdateEventTicketVouchersInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventTicketVouchersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/UpdateEventTicketVouchersInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventTicketVouchersInternally);
  }

  methodDescriptorDeleteEventTicketVouchersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeleteEventTicketVouchersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeleteEventTicketVouchersInternallyRequest,
    payments_services_private_pb.DeleteEventTicketVouchersInternallyResponse,
    (request: payments_services_private_pb.DeleteEventTicketVouchersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeleteEventTicketVouchersInternallyResponse.deserializeBinary
  );

  deleteEventTicketVouchersInternally(
    request: payments_services_private_pb.DeleteEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeleteEventTicketVouchersInternallyResponse>;

  deleteEventTicketVouchersInternally(
    request: payments_services_private_pb.DeleteEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteEventTicketVouchersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeleteEventTicketVouchersInternallyResponse>;

  deleteEventTicketVouchersInternally(
    request: payments_services_private_pb.DeleteEventTicketVouchersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteEventTicketVouchersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeleteEventTicketVouchersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventTicketVouchersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeleteEventTicketVouchersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventTicketVouchersInternally);
  }

  methodDescriptorGetPartnerInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetPartnerInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetPartnerInternallyRequest,
    payments_services_private_pb.GetPartnerInternallyResponse,
    (request: payments_services_private_pb.GetPartnerInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetPartnerInternallyResponse.deserializeBinary
  );

  getPartnerInternally(
    request: payments_services_private_pb.GetPartnerInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetPartnerInternallyResponse>;

  getPartnerInternally(
    request: payments_services_private_pb.GetPartnerInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetPartnerInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetPartnerInternallyResponse>;

  getPartnerInternally(
    request: payments_services_private_pb.GetPartnerInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetPartnerInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetPartnerInternally',
        request,
        metadata || {},
        this.methodDescriptorGetPartnerInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetPartnerInternally',
    request,
    metadata || {},
    this.methodDescriptorGetPartnerInternally);
  }

  methodDescriptorListPartnersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListPartnersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListPartnersInternallyRequest,
    payments_services_private_pb.ListPartnersInternallyResponse,
    (request: payments_services_private_pb.ListPartnersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListPartnersInternallyResponse.deserializeBinary
  );

  listPartnersInternally(
    request: payments_services_private_pb.ListPartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListPartnersInternallyResponse>;

  listPartnersInternally(
    request: payments_services_private_pb.ListPartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListPartnersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListPartnersInternallyResponse>;

  listPartnersInternally(
    request: payments_services_private_pb.ListPartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListPartnersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListPartnersInternally',
        request,
        metadata || {},
        this.methodDescriptorListPartnersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListPartnersInternally',
    request,
    metadata || {},
    this.methodDescriptorListPartnersInternally);
  }

  methodDescriptorCountPartnersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountPartnersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountPartnersInternallyRequest,
    payments_services_private_pb.CountPartnersInternallyResponse,
    (request: payments_services_private_pb.CountPartnersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountPartnersInternallyResponse.deserializeBinary
  );

  countPartnersInternally(
    request: payments_services_private_pb.CountPartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountPartnersInternallyResponse>;

  countPartnersInternally(
    request: payments_services_private_pb.CountPartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountPartnersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountPartnersInternallyResponse>;

  countPartnersInternally(
    request: payments_services_private_pb.CountPartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountPartnersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountPartnersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountPartnersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountPartnersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountPartnersInternally);
  }

  methodDescriptorCreatePartnersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreatePartnersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreatePartnersInternallyRequest,
    payments_services_private_pb.CreatePartnersInternallyResponse,
    (request: payments_services_private_pb.CreatePartnersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreatePartnersInternallyResponse.deserializeBinary
  );

  createPartnersInternally(
    request: payments_services_private_pb.CreatePartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreatePartnersInternallyResponse>;

  createPartnersInternally(
    request: payments_services_private_pb.CreatePartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreatePartnersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreatePartnersInternallyResponse>;

  createPartnersInternally(
    request: payments_services_private_pb.CreatePartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreatePartnersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreatePartnersInternally',
        request,
        metadata || {},
        this.methodDescriptorCreatePartnersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreatePartnersInternally',
    request,
    metadata || {},
    this.methodDescriptorCreatePartnersInternally);
  }

  methodDescriptorDeletePartnersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeletePartnersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeletePartnersInternallyRequest,
    payments_services_private_pb.DeletePartnersInternallyResponse,
    (request: payments_services_private_pb.DeletePartnersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeletePartnersInternallyResponse.deserializeBinary
  );

  deletePartnersInternally(
    request: payments_services_private_pb.DeletePartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeletePartnersInternallyResponse>;

  deletePartnersInternally(
    request: payments_services_private_pb.DeletePartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeletePartnersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeletePartnersInternallyResponse>;

  deletePartnersInternally(
    request: payments_services_private_pb.DeletePartnersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeletePartnersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeletePartnersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeletePartnersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeletePartnersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeletePartnersInternally);
  }

  methodDescriptorGetCustomerInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetCustomerInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetCustomerInternallyRequest,
    payments_services_private_pb.GetCustomerInternallyResponse,
    (request: payments_services_private_pb.GetCustomerInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetCustomerInternallyResponse.deserializeBinary
  );

  getCustomerInternally(
    request: payments_services_private_pb.GetCustomerInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetCustomerInternallyResponse>;

  getCustomerInternally(
    request: payments_services_private_pb.GetCustomerInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetCustomerInternallyResponse>;

  getCustomerInternally(
    request: payments_services_private_pb.GetCustomerInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetCustomerInternally',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetCustomerInternally',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerInternally);
  }

  methodDescriptorListCustomersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListCustomersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListCustomersInternallyRequest,
    payments_services_private_pb.ListCustomersInternallyResponse,
    (request: payments_services_private_pb.ListCustomersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListCustomersInternallyResponse.deserializeBinary
  );

  listCustomersInternally(
    request: payments_services_private_pb.ListCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListCustomersInternallyResponse>;

  listCustomersInternally(
    request: payments_services_private_pb.ListCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListCustomersInternallyResponse>;

  listCustomersInternally(
    request: payments_services_private_pb.ListCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListCustomersInternally',
        request,
        metadata || {},
        this.methodDescriptorListCustomersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListCustomersInternally',
    request,
    metadata || {},
    this.methodDescriptorListCustomersInternally);
  }

  methodDescriptorCountCustomersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountCustomersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountCustomersInternallyRequest,
    payments_services_private_pb.CountCustomersInternallyResponse,
    (request: payments_services_private_pb.CountCustomersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountCustomersInternallyResponse.deserializeBinary
  );

  countCustomersInternally(
    request: payments_services_private_pb.CountCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountCustomersInternallyResponse>;

  countCustomersInternally(
    request: payments_services_private_pb.CountCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountCustomersInternallyResponse>;

  countCustomersInternally(
    request: payments_services_private_pb.CountCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountCustomersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountCustomersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountCustomersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountCustomersInternally);
  }

  methodDescriptorCreateCustomersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateCustomersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateCustomersInternallyRequest,
    payments_services_private_pb.CreateCustomersInternallyResponse,
    (request: payments_services_private_pb.CreateCustomersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateCustomersInternallyResponse.deserializeBinary
  );

  createCustomersInternally(
    request: payments_services_private_pb.CreateCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateCustomersInternallyResponse>;

  createCustomersInternally(
    request: payments_services_private_pb.CreateCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateCustomersInternallyResponse>;

  createCustomersInternally(
    request: payments_services_private_pb.CreateCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateCustomersInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateCustomersInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomersInternally);
  }

  methodDescriptorDeleteCustomersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeleteCustomersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeleteCustomersInternallyRequest,
    payments_services_private_pb.DeleteCustomersInternallyResponse,
    (request: payments_services_private_pb.DeleteCustomersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeleteCustomersInternallyResponse.deserializeBinary
  );

  deleteCustomersInternally(
    request: payments_services_private_pb.DeleteCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeleteCustomersInternallyResponse>;

  deleteCustomersInternally(
    request: payments_services_private_pb.DeleteCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteCustomersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeleteCustomersInternallyResponse>;

  deleteCustomersInternally(
    request: payments_services_private_pb.DeleteCustomersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteCustomersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeleteCustomersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteCustomersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeleteCustomersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteCustomersInternally);
  }

  methodDescriptorGetCustomerOrderInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetCustomerOrderInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetCustomerOrderInternallyRequest,
    payments_services_private_pb.GetCustomerOrderInternallyResponse,
    (request: payments_services_private_pb.GetCustomerOrderInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetCustomerOrderInternallyResponse.deserializeBinary
  );

  getCustomerOrderInternally(
    request: payments_services_private_pb.GetCustomerOrderInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetCustomerOrderInternallyResponse>;

  getCustomerOrderInternally(
    request: payments_services_private_pb.GetCustomerOrderInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerOrderInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetCustomerOrderInternallyResponse>;

  getCustomerOrderInternally(
    request: payments_services_private_pb.GetCustomerOrderInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerOrderInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetCustomerOrderInternally',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerOrderInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetCustomerOrderInternally',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerOrderInternally);
  }

  methodDescriptorListCustomerOrdersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListCustomerOrdersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListCustomerOrdersInternallyRequest,
    payments_services_private_pb.ListCustomerOrdersInternallyResponse,
    (request: payments_services_private_pb.ListCustomerOrdersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListCustomerOrdersInternallyResponse.deserializeBinary
  );

  listCustomerOrdersInternally(
    request: payments_services_private_pb.ListCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListCustomerOrdersInternallyResponse>;

  listCustomerOrdersInternally(
    request: payments_services_private_pb.ListCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerOrdersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListCustomerOrdersInternallyResponse>;

  listCustomerOrdersInternally(
    request: payments_services_private_pb.ListCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerOrdersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListCustomerOrdersInternally',
        request,
        metadata || {},
        this.methodDescriptorListCustomerOrdersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListCustomerOrdersInternally',
    request,
    metadata || {},
    this.methodDescriptorListCustomerOrdersInternally);
  }

  methodDescriptorCountCustomerOrdersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountCustomerOrdersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountCustomerOrdersInternallyRequest,
    payments_services_private_pb.CountCustomerOrdersInternallyResponse,
    (request: payments_services_private_pb.CountCustomerOrdersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountCustomerOrdersInternallyResponse.deserializeBinary
  );

  countCustomerOrdersInternally(
    request: payments_services_private_pb.CountCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountCustomerOrdersInternallyResponse>;

  countCustomerOrdersInternally(
    request: payments_services_private_pb.CountCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerOrdersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountCustomerOrdersInternallyResponse>;

  countCustomerOrdersInternally(
    request: payments_services_private_pb.CountCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerOrdersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountCustomerOrdersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerOrdersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountCustomerOrdersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerOrdersInternally);
  }

  methodDescriptorCreateCustomerOrdersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateCustomerOrdersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateCustomerOrdersInternallyRequest,
    payments_services_private_pb.CreateCustomerOrdersInternallyResponse,
    (request: payments_services_private_pb.CreateCustomerOrdersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateCustomerOrdersInternallyResponse.deserializeBinary
  );

  createCustomerOrdersInternally(
    request: payments_services_private_pb.CreateCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateCustomerOrdersInternallyResponse>;

  createCustomerOrdersInternally(
    request: payments_services_private_pb.CreateCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerOrdersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateCustomerOrdersInternallyResponse>;

  createCustomerOrdersInternally(
    request: payments_services_private_pb.CreateCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerOrdersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateCustomerOrdersInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomerOrdersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateCustomerOrdersInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomerOrdersInternally);
  }

  methodDescriptorUpdateCustomerOrdersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/UpdateCustomerOrdersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.UpdateCustomerOrdersInternallyRequest,
    payments_services_private_pb.UpdateCustomerOrdersInternallyResponse,
    (request: payments_services_private_pb.UpdateCustomerOrdersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.UpdateCustomerOrdersInternallyResponse.deserializeBinary
  );

  updateCustomerOrdersInternally(
    request: payments_services_private_pb.UpdateCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.UpdateCustomerOrdersInternallyResponse>;

  updateCustomerOrdersInternally(
    request: payments_services_private_pb.UpdateCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerOrdersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.UpdateCustomerOrdersInternallyResponse>;

  updateCustomerOrdersInternally(
    request: payments_services_private_pb.UpdateCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerOrdersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/UpdateCustomerOrdersInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateCustomerOrdersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/UpdateCustomerOrdersInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateCustomerOrdersInternally);
  }

  methodDescriptorDeleteCustomerOrdersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeleteCustomerOrdersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeleteCustomerOrdersInternallyRequest,
    payments_services_private_pb.DeleteCustomerOrdersInternallyResponse,
    (request: payments_services_private_pb.DeleteCustomerOrdersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeleteCustomerOrdersInternallyResponse.deserializeBinary
  );

  deleteCustomerOrdersInternally(
    request: payments_services_private_pb.DeleteCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeleteCustomerOrdersInternallyResponse>;

  deleteCustomerOrdersInternally(
    request: payments_services_private_pb.DeleteCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteCustomerOrdersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeleteCustomerOrdersInternallyResponse>;

  deleteCustomerOrdersInternally(
    request: payments_services_private_pb.DeleteCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteCustomerOrdersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeleteCustomerOrdersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteCustomerOrdersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeleteCustomerOrdersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteCustomerOrdersInternally);
  }

  methodDescriptorAcceptCustomerOrdersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/AcceptCustomerOrdersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.AcceptCustomerOrdersInternallyRequest,
    payments_services_private_pb.AcceptCustomerOrdersInternallyResponse,
    (request: payments_services_private_pb.AcceptCustomerOrdersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.AcceptCustomerOrdersInternallyResponse.deserializeBinary
  );

  acceptCustomerOrdersInternally(
    request: payments_services_private_pb.AcceptCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.AcceptCustomerOrdersInternallyResponse>;

  acceptCustomerOrdersInternally(
    request: payments_services_private_pb.AcceptCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.AcceptCustomerOrdersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.AcceptCustomerOrdersInternallyResponse>;

  acceptCustomerOrdersInternally(
    request: payments_services_private_pb.AcceptCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.AcceptCustomerOrdersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/AcceptCustomerOrdersInternally',
        request,
        metadata || {},
        this.methodDescriptorAcceptCustomerOrdersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/AcceptCustomerOrdersInternally',
    request,
    metadata || {},
    this.methodDescriptorAcceptCustomerOrdersInternally);
  }

  methodDescriptorDeclineCustomerOrdersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeclineCustomerOrdersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeclineCustomerOrdersInternallyRequest,
    payments_services_private_pb.DeclineCustomerOrdersInternallyResponse,
    (request: payments_services_private_pb.DeclineCustomerOrdersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeclineCustomerOrdersInternallyResponse.deserializeBinary
  );

  declineCustomerOrdersInternally(
    request: payments_services_private_pb.DeclineCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeclineCustomerOrdersInternallyResponse>;

  declineCustomerOrdersInternally(
    request: payments_services_private_pb.DeclineCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeclineCustomerOrdersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeclineCustomerOrdersInternallyResponse>;

  declineCustomerOrdersInternally(
    request: payments_services_private_pb.DeclineCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeclineCustomerOrdersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeclineCustomerOrdersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeclineCustomerOrdersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeclineCustomerOrdersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeclineCustomerOrdersInternally);
  }

  methodDescriptorRefundCustomerOrdersInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/RefundCustomerOrdersInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.RefundCustomerOrdersInternallyRequest,
    payments_services_private_pb.RefundCustomerOrdersInternallyResponse,
    (request: payments_services_private_pb.RefundCustomerOrdersInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.RefundCustomerOrdersInternallyResponse.deserializeBinary
  );

  refundCustomerOrdersInternally(
    request: payments_services_private_pb.RefundCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.RefundCustomerOrdersInternallyResponse>;

  refundCustomerOrdersInternally(
    request: payments_services_private_pb.RefundCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.RefundCustomerOrdersInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.RefundCustomerOrdersInternallyResponse>;

  refundCustomerOrdersInternally(
    request: payments_services_private_pb.RefundCustomerOrdersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.RefundCustomerOrdersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/RefundCustomerOrdersInternally',
        request,
        metadata || {},
        this.methodDescriptorRefundCustomerOrdersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/RefundCustomerOrdersInternally',
    request,
    metadata || {},
    this.methodDescriptorRefundCustomerOrdersInternally);
  }

  methodDescriptorGetCustomerAddressInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetCustomerAddressInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetCustomerAddressInternallyRequest,
    payments_services_private_pb.GetCustomerAddressInternallyResponse,
    (request: payments_services_private_pb.GetCustomerAddressInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetCustomerAddressInternallyResponse.deserializeBinary
  );

  getCustomerAddressInternally(
    request: payments_services_private_pb.GetCustomerAddressInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetCustomerAddressInternallyResponse>;

  getCustomerAddressInternally(
    request: payments_services_private_pb.GetCustomerAddressInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerAddressInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetCustomerAddressInternallyResponse>;

  getCustomerAddressInternally(
    request: payments_services_private_pb.GetCustomerAddressInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerAddressInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetCustomerAddressInternally',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerAddressInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetCustomerAddressInternally',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerAddressInternally);
  }

  methodDescriptorListCustomerAddressesInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListCustomerAddressesInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListCustomerAddressesInternallyRequest,
    payments_services_private_pb.ListCustomerAddressesInternallyResponse,
    (request: payments_services_private_pb.ListCustomerAddressesInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListCustomerAddressesInternallyResponse.deserializeBinary
  );

  listCustomerAddressesInternally(
    request: payments_services_private_pb.ListCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListCustomerAddressesInternallyResponse>;

  listCustomerAddressesInternally(
    request: payments_services_private_pb.ListCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerAddressesInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListCustomerAddressesInternallyResponse>;

  listCustomerAddressesInternally(
    request: payments_services_private_pb.ListCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerAddressesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListCustomerAddressesInternally',
        request,
        metadata || {},
        this.methodDescriptorListCustomerAddressesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListCustomerAddressesInternally',
    request,
    metadata || {},
    this.methodDescriptorListCustomerAddressesInternally);
  }

  methodDescriptorCountCustomerAddressesInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountCustomerAddressesInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountCustomerAddressesInternallyRequest,
    payments_services_private_pb.CountCustomerAddressesInternallyResponse,
    (request: payments_services_private_pb.CountCustomerAddressesInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountCustomerAddressesInternallyResponse.deserializeBinary
  );

  countCustomerAddressesInternally(
    request: payments_services_private_pb.CountCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountCustomerAddressesInternallyResponse>;

  countCustomerAddressesInternally(
    request: payments_services_private_pb.CountCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerAddressesInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountCustomerAddressesInternallyResponse>;

  countCustomerAddressesInternally(
    request: payments_services_private_pb.CountCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerAddressesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountCustomerAddressesInternally',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerAddressesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountCustomerAddressesInternally',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerAddressesInternally);
  }

  methodDescriptorCreateCustomerAddressesInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateCustomerAddressesInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateCustomerAddressesInternallyRequest,
    payments_services_private_pb.CreateCustomerAddressesInternallyResponse,
    (request: payments_services_private_pb.CreateCustomerAddressesInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateCustomerAddressesInternallyResponse.deserializeBinary
  );

  createCustomerAddressesInternally(
    request: payments_services_private_pb.CreateCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateCustomerAddressesInternallyResponse>;

  createCustomerAddressesInternally(
    request: payments_services_private_pb.CreateCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerAddressesInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateCustomerAddressesInternallyResponse>;

  createCustomerAddressesInternally(
    request: payments_services_private_pb.CreateCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerAddressesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateCustomerAddressesInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomerAddressesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateCustomerAddressesInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomerAddressesInternally);
  }

  methodDescriptorUpdateCustomerAddressesInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/UpdateCustomerAddressesInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.UpdateCustomerAddressesInternallyRequest,
    payments_services_private_pb.UpdateCustomerAddressesInternallyResponse,
    (request: payments_services_private_pb.UpdateCustomerAddressesInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.UpdateCustomerAddressesInternallyResponse.deserializeBinary
  );

  updateCustomerAddressesInternally(
    request: payments_services_private_pb.UpdateCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.UpdateCustomerAddressesInternallyResponse>;

  updateCustomerAddressesInternally(
    request: payments_services_private_pb.UpdateCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerAddressesInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.UpdateCustomerAddressesInternallyResponse>;

  updateCustomerAddressesInternally(
    request: payments_services_private_pb.UpdateCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerAddressesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/UpdateCustomerAddressesInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateCustomerAddressesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/UpdateCustomerAddressesInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateCustomerAddressesInternally);
  }

  methodDescriptorDeleteCustomerAddressesInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeleteCustomerAddressesInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeleteCustomerAddressesInternallyRequest,
    payments_services_private_pb.DeleteCustomerAddressesInternallyResponse,
    (request: payments_services_private_pb.DeleteCustomerAddressesInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeleteCustomerAddressesInternallyResponse.deserializeBinary
  );

  deleteCustomerAddressesInternally(
    request: payments_services_private_pb.DeleteCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeleteCustomerAddressesInternallyResponse>;

  deleteCustomerAddressesInternally(
    request: payments_services_private_pb.DeleteCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteCustomerAddressesInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeleteCustomerAddressesInternallyResponse>;

  deleteCustomerAddressesInternally(
    request: payments_services_private_pb.DeleteCustomerAddressesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteCustomerAddressesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeleteCustomerAddressesInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteCustomerAddressesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeleteCustomerAddressesInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteCustomerAddressesInternally);
  }

  methodDescriptorGetCustomerPaymentInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetCustomerPaymentInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetCustomerPaymentInternallyRequest,
    payments_services_private_pb.GetCustomerPaymentInternallyResponse,
    (request: payments_services_private_pb.GetCustomerPaymentInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetCustomerPaymentInternallyResponse.deserializeBinary
  );

  getCustomerPaymentInternally(
    request: payments_services_private_pb.GetCustomerPaymentInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetCustomerPaymentInternallyResponse>;

  getCustomerPaymentInternally(
    request: payments_services_private_pb.GetCustomerPaymentInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerPaymentInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetCustomerPaymentInternallyResponse>;

  getCustomerPaymentInternally(
    request: payments_services_private_pb.GetCustomerPaymentInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerPaymentInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetCustomerPaymentInternally',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerPaymentInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetCustomerPaymentInternally',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerPaymentInternally);
  }

  methodDescriptorListCustomerPaymentsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListCustomerPaymentsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListCustomerPaymentsInternallyRequest,
    payments_services_private_pb.ListCustomerPaymentsInternallyResponse,
    (request: payments_services_private_pb.ListCustomerPaymentsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListCustomerPaymentsInternallyResponse.deserializeBinary
  );

  listCustomerPaymentsInternally(
    request: payments_services_private_pb.ListCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListCustomerPaymentsInternallyResponse>;

  listCustomerPaymentsInternally(
    request: payments_services_private_pb.ListCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerPaymentsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListCustomerPaymentsInternallyResponse>;

  listCustomerPaymentsInternally(
    request: payments_services_private_pb.ListCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerPaymentsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListCustomerPaymentsInternally',
        request,
        metadata || {},
        this.methodDescriptorListCustomerPaymentsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListCustomerPaymentsInternally',
    request,
    metadata || {},
    this.methodDescriptorListCustomerPaymentsInternally);
  }

  methodDescriptorCountCustomerPaymentsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountCustomerPaymentsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountCustomerPaymentsInternallyRequest,
    payments_services_private_pb.CountCustomerPaymentsInternallyResponse,
    (request: payments_services_private_pb.CountCustomerPaymentsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountCustomerPaymentsInternallyResponse.deserializeBinary
  );

  countCustomerPaymentsInternally(
    request: payments_services_private_pb.CountCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountCustomerPaymentsInternallyResponse>;

  countCustomerPaymentsInternally(
    request: payments_services_private_pb.CountCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerPaymentsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountCustomerPaymentsInternallyResponse>;

  countCustomerPaymentsInternally(
    request: payments_services_private_pb.CountCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerPaymentsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountCustomerPaymentsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerPaymentsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountCustomerPaymentsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerPaymentsInternally);
  }

  methodDescriptorCreateCustomerPaymentsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateCustomerPaymentsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateCustomerPaymentsInternallyRequest,
    payments_services_private_pb.CreateCustomerPaymentsInternallyResponse,
    (request: payments_services_private_pb.CreateCustomerPaymentsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateCustomerPaymentsInternallyResponse.deserializeBinary
  );

  createCustomerPaymentsInternally(
    request: payments_services_private_pb.CreateCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateCustomerPaymentsInternallyResponse>;

  createCustomerPaymentsInternally(
    request: payments_services_private_pb.CreateCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerPaymentsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateCustomerPaymentsInternallyResponse>;

  createCustomerPaymentsInternally(
    request: payments_services_private_pb.CreateCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerPaymentsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateCustomerPaymentsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomerPaymentsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateCustomerPaymentsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomerPaymentsInternally);
  }

  methodDescriptorUpdateCustomerPaymentsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/UpdateCustomerPaymentsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.UpdateCustomerPaymentsInternallyRequest,
    payments_services_private_pb.UpdateCustomerPaymentsInternallyResponse,
    (request: payments_services_private_pb.UpdateCustomerPaymentsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.UpdateCustomerPaymentsInternallyResponse.deserializeBinary
  );

  updateCustomerPaymentsInternally(
    request: payments_services_private_pb.UpdateCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.UpdateCustomerPaymentsInternallyResponse>;

  updateCustomerPaymentsInternally(
    request: payments_services_private_pb.UpdateCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerPaymentsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.UpdateCustomerPaymentsInternallyResponse>;

  updateCustomerPaymentsInternally(
    request: payments_services_private_pb.UpdateCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerPaymentsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/UpdateCustomerPaymentsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateCustomerPaymentsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/UpdateCustomerPaymentsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateCustomerPaymentsInternally);
  }

  methodDescriptorDeleteCustomerPaymentsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/DeleteCustomerPaymentsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.DeleteCustomerPaymentsInternallyRequest,
    payments_services_private_pb.DeleteCustomerPaymentsInternallyResponse,
    (request: payments_services_private_pb.DeleteCustomerPaymentsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.DeleteCustomerPaymentsInternallyResponse.deserializeBinary
  );

  deleteCustomerPaymentsInternally(
    request: payments_services_private_pb.DeleteCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.DeleteCustomerPaymentsInternallyResponse>;

  deleteCustomerPaymentsInternally(
    request: payments_services_private_pb.DeleteCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteCustomerPaymentsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.DeleteCustomerPaymentsInternallyResponse>;

  deleteCustomerPaymentsInternally(
    request: payments_services_private_pb.DeleteCustomerPaymentsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.DeleteCustomerPaymentsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/DeleteCustomerPaymentsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteCustomerPaymentsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/DeleteCustomerPaymentsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteCustomerPaymentsInternally);
  }

  methodDescriptorGetCustomerTransactionInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetCustomerTransactionInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetCustomerTransactionInternallyRequest,
    payments_services_private_pb.GetCustomerTransactionInternallyResponse,
    (request: payments_services_private_pb.GetCustomerTransactionInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetCustomerTransactionInternallyResponse.deserializeBinary
  );

  getCustomerTransactionInternally(
    request: payments_services_private_pb.GetCustomerTransactionInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetCustomerTransactionInternallyResponse>;

  getCustomerTransactionInternally(
    request: payments_services_private_pb.GetCustomerTransactionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerTransactionInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetCustomerTransactionInternallyResponse>;

  getCustomerTransactionInternally(
    request: payments_services_private_pb.GetCustomerTransactionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerTransactionInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetCustomerTransactionInternally',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerTransactionInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetCustomerTransactionInternally',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerTransactionInternally);
  }

  methodDescriptorListCustomerTransactionsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListCustomerTransactionsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListCustomerTransactionsInternallyRequest,
    payments_services_private_pb.ListCustomerTransactionsInternallyResponse,
    (request: payments_services_private_pb.ListCustomerTransactionsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListCustomerTransactionsInternallyResponse.deserializeBinary
  );

  listCustomerTransactionsInternally(
    request: payments_services_private_pb.ListCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListCustomerTransactionsInternallyResponse>;

  listCustomerTransactionsInternally(
    request: payments_services_private_pb.ListCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerTransactionsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListCustomerTransactionsInternallyResponse>;

  listCustomerTransactionsInternally(
    request: payments_services_private_pb.ListCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerTransactionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListCustomerTransactionsInternally',
        request,
        metadata || {},
        this.methodDescriptorListCustomerTransactionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListCustomerTransactionsInternally',
    request,
    metadata || {},
    this.methodDescriptorListCustomerTransactionsInternally);
  }

  methodDescriptorCountCustomerTransactionsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountCustomerTransactionsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountCustomerTransactionsInternallyRequest,
    payments_services_private_pb.CountCustomerTransactionsInternallyResponse,
    (request: payments_services_private_pb.CountCustomerTransactionsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountCustomerTransactionsInternallyResponse.deserializeBinary
  );

  countCustomerTransactionsInternally(
    request: payments_services_private_pb.CountCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountCustomerTransactionsInternallyResponse>;

  countCustomerTransactionsInternally(
    request: payments_services_private_pb.CountCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerTransactionsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountCustomerTransactionsInternallyResponse>;

  countCustomerTransactionsInternally(
    request: payments_services_private_pb.CountCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerTransactionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountCustomerTransactionsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerTransactionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountCustomerTransactionsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerTransactionsInternally);
  }

  methodDescriptorCreateCustomerTransactionsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateCustomerTransactionsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateCustomerTransactionsInternallyRequest,
    payments_services_private_pb.CreateCustomerTransactionsInternallyResponse,
    (request: payments_services_private_pb.CreateCustomerTransactionsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateCustomerTransactionsInternallyResponse.deserializeBinary
  );

  createCustomerTransactionsInternally(
    request: payments_services_private_pb.CreateCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateCustomerTransactionsInternallyResponse>;

  createCustomerTransactionsInternally(
    request: payments_services_private_pb.CreateCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerTransactionsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateCustomerTransactionsInternallyResponse>;

  createCustomerTransactionsInternally(
    request: payments_services_private_pb.CreateCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerTransactionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateCustomerTransactionsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomerTransactionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateCustomerTransactionsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomerTransactionsInternally);
  }

  methodDescriptorUpdateCustomerTransactionsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/UpdateCustomerTransactionsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.UpdateCustomerTransactionsInternallyRequest,
    payments_services_private_pb.UpdateCustomerTransactionsInternallyResponse,
    (request: payments_services_private_pb.UpdateCustomerTransactionsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.UpdateCustomerTransactionsInternallyResponse.deserializeBinary
  );

  updateCustomerTransactionsInternally(
    request: payments_services_private_pb.UpdateCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.UpdateCustomerTransactionsInternallyResponse>;

  updateCustomerTransactionsInternally(
    request: payments_services_private_pb.UpdateCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerTransactionsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.UpdateCustomerTransactionsInternallyResponse>;

  updateCustomerTransactionsInternally(
    request: payments_services_private_pb.UpdateCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerTransactionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/UpdateCustomerTransactionsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateCustomerTransactionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/UpdateCustomerTransactionsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateCustomerTransactionsInternally);
  }

  methodDescriptorConfirmCustomerTransactionsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ConfirmCustomerTransactionsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ConfirmCustomerTransactionsInternallyRequest,
    payments_services_private_pb.ConfirmCustomerTransactionsInternallyResponse,
    (request: payments_services_private_pb.ConfirmCustomerTransactionsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ConfirmCustomerTransactionsInternallyResponse.deserializeBinary
  );

  confirmCustomerTransactionsInternally(
    request: payments_services_private_pb.ConfirmCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ConfirmCustomerTransactionsInternallyResponse>;

  confirmCustomerTransactionsInternally(
    request: payments_services_private_pb.ConfirmCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ConfirmCustomerTransactionsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ConfirmCustomerTransactionsInternallyResponse>;

  confirmCustomerTransactionsInternally(
    request: payments_services_private_pb.ConfirmCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ConfirmCustomerTransactionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ConfirmCustomerTransactionsInternally',
        request,
        metadata || {},
        this.methodDescriptorConfirmCustomerTransactionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ConfirmCustomerTransactionsInternally',
    request,
    metadata || {},
    this.methodDescriptorConfirmCustomerTransactionsInternally);
  }

  methodDescriptorCancelCustomerTransactionsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CancelCustomerTransactionsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CancelCustomerTransactionsInternallyRequest,
    payments_services_private_pb.CancelCustomerTransactionsInternallyResponse,
    (request: payments_services_private_pb.CancelCustomerTransactionsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CancelCustomerTransactionsInternallyResponse.deserializeBinary
  );

  cancelCustomerTransactionsInternally(
    request: payments_services_private_pb.CancelCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CancelCustomerTransactionsInternallyResponse>;

  cancelCustomerTransactionsInternally(
    request: payments_services_private_pb.CancelCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CancelCustomerTransactionsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CancelCustomerTransactionsInternallyResponse>;

  cancelCustomerTransactionsInternally(
    request: payments_services_private_pb.CancelCustomerTransactionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CancelCustomerTransactionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CancelCustomerTransactionsInternally',
        request,
        metadata || {},
        this.methodDescriptorCancelCustomerTransactionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CancelCustomerTransactionsInternally',
    request,
    metadata || {},
    this.methodDescriptorCancelCustomerTransactionsInternally);
  }

  methodDescriptorGetCustomerOrderRefundInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/GetCustomerOrderRefundInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.GetCustomerOrderRefundInternallyRequest,
    payments_services_private_pb.GetCustomerOrderRefundInternallyResponse,
    (request: payments_services_private_pb.GetCustomerOrderRefundInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.GetCustomerOrderRefundInternallyResponse.deserializeBinary
  );

  getCustomerOrderRefundInternally(
    request: payments_services_private_pb.GetCustomerOrderRefundInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.GetCustomerOrderRefundInternallyResponse>;

  getCustomerOrderRefundInternally(
    request: payments_services_private_pb.GetCustomerOrderRefundInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerOrderRefundInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.GetCustomerOrderRefundInternallyResponse>;

  getCustomerOrderRefundInternally(
    request: payments_services_private_pb.GetCustomerOrderRefundInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.GetCustomerOrderRefundInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/GetCustomerOrderRefundInternally',
        request,
        metadata || {},
        this.methodDescriptorGetCustomerOrderRefundInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/GetCustomerOrderRefundInternally',
    request,
    metadata || {},
    this.methodDescriptorGetCustomerOrderRefundInternally);
  }

  methodDescriptorListCustomerOrderRefundsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/ListCustomerOrderRefundsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.ListCustomerOrderRefundsInternallyRequest,
    payments_services_private_pb.ListCustomerOrderRefundsInternallyResponse,
    (request: payments_services_private_pb.ListCustomerOrderRefundsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.ListCustomerOrderRefundsInternallyResponse.deserializeBinary
  );

  listCustomerOrderRefundsInternally(
    request: payments_services_private_pb.ListCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.ListCustomerOrderRefundsInternallyResponse>;

  listCustomerOrderRefundsInternally(
    request: payments_services_private_pb.ListCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerOrderRefundsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.ListCustomerOrderRefundsInternallyResponse>;

  listCustomerOrderRefundsInternally(
    request: payments_services_private_pb.ListCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.ListCustomerOrderRefundsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/ListCustomerOrderRefundsInternally',
        request,
        metadata || {},
        this.methodDescriptorListCustomerOrderRefundsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/ListCustomerOrderRefundsInternally',
    request,
    metadata || {},
    this.methodDescriptorListCustomerOrderRefundsInternally);
  }

  methodDescriptorCountCustomerOrderRefundsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CountCustomerOrderRefundsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CountCustomerOrderRefundsInternallyRequest,
    payments_services_private_pb.CountCustomerOrderRefundsInternallyResponse,
    (request: payments_services_private_pb.CountCustomerOrderRefundsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CountCustomerOrderRefundsInternallyResponse.deserializeBinary
  );

  countCustomerOrderRefundsInternally(
    request: payments_services_private_pb.CountCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CountCustomerOrderRefundsInternallyResponse>;

  countCustomerOrderRefundsInternally(
    request: payments_services_private_pb.CountCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerOrderRefundsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CountCustomerOrderRefundsInternallyResponse>;

  countCustomerOrderRefundsInternally(
    request: payments_services_private_pb.CountCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CountCustomerOrderRefundsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CountCustomerOrderRefundsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountCustomerOrderRefundsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CountCustomerOrderRefundsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountCustomerOrderRefundsInternally);
  }

  methodDescriptorCreateCustomerOrderRefundsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/CreateCustomerOrderRefundsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.CreateCustomerOrderRefundsInternallyRequest,
    payments_services_private_pb.CreateCustomerOrderRefundsInternallyResponse,
    (request: payments_services_private_pb.CreateCustomerOrderRefundsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.CreateCustomerOrderRefundsInternallyResponse.deserializeBinary
  );

  createCustomerOrderRefundsInternally(
    request: payments_services_private_pb.CreateCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.CreateCustomerOrderRefundsInternallyResponse>;

  createCustomerOrderRefundsInternally(
    request: payments_services_private_pb.CreateCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerOrderRefundsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.CreateCustomerOrderRefundsInternallyResponse>;

  createCustomerOrderRefundsInternally(
    request: payments_services_private_pb.CreateCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.CreateCustomerOrderRefundsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/CreateCustomerOrderRefundsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateCustomerOrderRefundsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/CreateCustomerOrderRefundsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateCustomerOrderRefundsInternally);
  }

  methodDescriptorUpdateCustomerOrderRefundsInternally = new grpcWeb.MethodDescriptor(
    '/payments.api.v1.PrivateService/UpdateCustomerOrderRefundsInternally',
    grpcWeb.MethodType.UNARY,
    payments_services_private_pb.UpdateCustomerOrderRefundsInternallyRequest,
    payments_services_private_pb.UpdateCustomerOrderRefundsInternallyResponse,
    (request: payments_services_private_pb.UpdateCustomerOrderRefundsInternallyRequest) => {
      return request.serializeBinary();
    },
    payments_services_private_pb.UpdateCustomerOrderRefundsInternallyResponse.deserializeBinary
  );

  updateCustomerOrderRefundsInternally(
    request: payments_services_private_pb.UpdateCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<payments_services_private_pb.UpdateCustomerOrderRefundsInternallyResponse>;

  updateCustomerOrderRefundsInternally(
    request: payments_services_private_pb.UpdateCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerOrderRefundsInternallyResponse) => void): grpcWeb.ClientReadableStream<payments_services_private_pb.UpdateCustomerOrderRefundsInternallyResponse>;

  updateCustomerOrderRefundsInternally(
    request: payments_services_private_pb.UpdateCustomerOrderRefundsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: payments_services_private_pb.UpdateCustomerOrderRefundsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/payments.api.v1.PrivateService/UpdateCustomerOrderRefundsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateCustomerOrderRefundsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/payments.api.v1.PrivateService/UpdateCustomerOrderRefundsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateCustomerOrderRefundsInternally);
  }

}

