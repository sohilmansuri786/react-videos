/**
 * @fileoverview gRPC-Web generated client stub for rooms.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as rooms_services_private_pb from '../rooms/services.private_pb';


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

  methodDescriptorGetChatInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetChatInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetChatInternallyRequest,
    rooms_services_private_pb.GetChatInternallyResponse,
    (request: rooms_services_private_pb.GetChatInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetChatInternallyResponse.deserializeBinary
  );

  getChatInternally(
    request: rooms_services_private_pb.GetChatInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetChatInternallyResponse>;

  getChatInternally(
    request: rooms_services_private_pb.GetChatInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetChatInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetChatInternallyResponse>;

  getChatInternally(
    request: rooms_services_private_pb.GetChatInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetChatInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetChatInternally',
        request,
        metadata || {},
        this.methodDescriptorGetChatInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetChatInternally',
    request,
    metadata || {},
    this.methodDescriptorGetChatInternally);
  }

  methodDescriptorListChatsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListChatsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListChatsInternallyRequest,
    rooms_services_private_pb.ListChatsInternallyResponse,
    (request: rooms_services_private_pb.ListChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListChatsInternallyResponse.deserializeBinary
  );

  listChatsInternally(
    request: rooms_services_private_pb.ListChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListChatsInternallyResponse>;

  listChatsInternally(
    request: rooms_services_private_pb.ListChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListChatsInternallyResponse>;

  listChatsInternally(
    request: rooms_services_private_pb.ListChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorListChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorListChatsInternally);
  }

  methodDescriptorStateChatsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/StateChatsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.StateChatsInternallyRequest,
    rooms_services_private_pb.StateChatsInternallyResponse,
    (request: rooms_services_private_pb.StateChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.StateChatsInternallyResponse.deserializeBinary
  );

  stateChatsInternally(
    request: rooms_services_private_pb.StateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.StateChatsInternallyResponse>;

  stateChatsInternally(
    request: rooms_services_private_pb.StateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.StateChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.StateChatsInternallyResponse>;

  stateChatsInternally(
    request: rooms_services_private_pb.StateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.StateChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/StateChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorStateChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/StateChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorStateChatsInternally);
  }

  methodDescriptorCountChatsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountChatsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountChatsInternallyRequest,
    rooms_services_private_pb.CountChatsInternallyResponse,
    (request: rooms_services_private_pb.CountChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountChatsInternallyResponse.deserializeBinary
  );

  countChatsInternally(
    request: rooms_services_private_pb.CountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountChatsInternallyResponse>;

  countChatsInternally(
    request: rooms_services_private_pb.CountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountChatsInternallyResponse>;

  countChatsInternally(
    request: rooms_services_private_pb.CountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountChatsInternally);
  }

  methodDescriptorCreateChatsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateChatsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateChatsInternallyRequest,
    rooms_services_private_pb.CreateChatsInternallyResponse,
    (request: rooms_services_private_pb.CreateChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateChatsInternallyResponse.deserializeBinary
  );

  createChatsInternally(
    request: rooms_services_private_pb.CreateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateChatsInternallyResponse>;

  createChatsInternally(
    request: rooms_services_private_pb.CreateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateChatsInternallyResponse>;

  createChatsInternally(
    request: rooms_services_private_pb.CreateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateChatsInternally);
  }

  methodDescriptorUpdateChatsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/UpdateChatsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.UpdateChatsInternallyRequest,
    rooms_services_private_pb.UpdateChatsInternallyResponse,
    (request: rooms_services_private_pb.UpdateChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.UpdateChatsInternallyResponse.deserializeBinary
  );

  updateChatsInternally(
    request: rooms_services_private_pb.UpdateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.UpdateChatsInternallyResponse>;

  updateChatsInternally(
    request: rooms_services_private_pb.UpdateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.UpdateChatsInternallyResponse>;

  updateChatsInternally(
    request: rooms_services_private_pb.UpdateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/UpdateChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/UpdateChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateChatsInternally);
  }

  methodDescriptorDeleteChatsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteChatsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteChatsInternallyRequest,
    rooms_services_private_pb.DeleteChatsInternallyResponse,
    (request: rooms_services_private_pb.DeleteChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteChatsInternallyResponse.deserializeBinary
  );

  deleteChatsInternally(
    request: rooms_services_private_pb.DeleteChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteChatsInternallyResponse>;

  deleteChatsInternally(
    request: rooms_services_private_pb.DeleteChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteChatsInternallyResponse>;

  deleteChatsInternally(
    request: rooms_services_private_pb.DeleteChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteChatsInternally);
  }

  methodDescriptorListAndCountChatsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountChatsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountChatsInternallyRequest,
    rooms_services_private_pb.ListAndCountChatsInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountChatsInternallyResponse.deserializeBinary
  );

  listAndCountChatsInternally(
    request: rooms_services_private_pb.ListAndCountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountChatsInternallyResponse>;

  listAndCountChatsInternally(
    request: rooms_services_private_pb.ListAndCountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountChatsInternallyResponse>;

  listAndCountChatsInternally(
    request: rooms_services_private_pb.ListAndCountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountChatsInternally);
  }

  methodDescriptorGetChatMessageInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetChatMessageInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetChatMessageInternallyRequest,
    rooms_services_private_pb.GetChatMessageInternallyResponse,
    (request: rooms_services_private_pb.GetChatMessageInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetChatMessageInternallyResponse.deserializeBinary
  );

  getChatMessageInternally(
    request: rooms_services_private_pb.GetChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetChatMessageInternallyResponse>;

  getChatMessageInternally(
    request: rooms_services_private_pb.GetChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetChatMessageInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetChatMessageInternallyResponse>;

  getChatMessageInternally(
    request: rooms_services_private_pb.GetChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetChatMessageInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetChatMessageInternally',
        request,
        metadata || {},
        this.methodDescriptorGetChatMessageInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetChatMessageInternally',
    request,
    metadata || {},
    this.methodDescriptorGetChatMessageInternally);
  }

  methodDescriptorListChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListChatMessagesInternallyRequest,
    rooms_services_private_pb.ListChatMessagesInternallyResponse,
    (request: rooms_services_private_pb.ListChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListChatMessagesInternallyResponse.deserializeBinary
  );

  listChatMessagesInternally(
    request: rooms_services_private_pb.ListChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListChatMessagesInternallyResponse>;

  listChatMessagesInternally(
    request: rooms_services_private_pb.ListChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListChatMessagesInternallyResponse>;

  listChatMessagesInternally(
    request: rooms_services_private_pb.ListChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorListChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorListChatMessagesInternally);
  }

  methodDescriptorCountChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountChatMessagesInternallyRequest,
    rooms_services_private_pb.CountChatMessagesInternallyResponse,
    (request: rooms_services_private_pb.CountChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountChatMessagesInternallyResponse.deserializeBinary
  );

  countChatMessagesInternally(
    request: rooms_services_private_pb.CountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountChatMessagesInternallyResponse>;

  countChatMessagesInternally(
    request: rooms_services_private_pb.CountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountChatMessagesInternallyResponse>;

  countChatMessagesInternally(
    request: rooms_services_private_pb.CountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorCountChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorCountChatMessagesInternally);
  }

  methodDescriptorCreateChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateChatMessagesInternallyRequest,
    rooms_services_private_pb.CreateChatMessagesInternallyResponse,
    (request: rooms_services_private_pb.CreateChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateChatMessagesInternallyResponse.deserializeBinary
  );

  createChatMessagesInternally(
    request: rooms_services_private_pb.CreateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateChatMessagesInternallyResponse>;

  createChatMessagesInternally(
    request: rooms_services_private_pb.CreateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateChatMessagesInternallyResponse>;

  createChatMessagesInternally(
    request: rooms_services_private_pb.CreateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateChatMessagesInternally);
  }

  methodDescriptorUpdateChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/UpdateChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.UpdateChatMessagesInternallyRequest,
    rooms_services_private_pb.UpdateChatMessagesInternallyResponse,
    (request: rooms_services_private_pb.UpdateChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.UpdateChatMessagesInternallyResponse.deserializeBinary
  );

  updateChatMessagesInternally(
    request: rooms_services_private_pb.UpdateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.UpdateChatMessagesInternallyResponse>;

  updateChatMessagesInternally(
    request: rooms_services_private_pb.UpdateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.UpdateChatMessagesInternallyResponse>;

  updateChatMessagesInternally(
    request: rooms_services_private_pb.UpdateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/UpdateChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/UpdateChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateChatMessagesInternally);
  }

  methodDescriptorDeleteChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteChatMessagesInternallyRequest,
    rooms_services_private_pb.DeleteChatMessagesInternallyResponse,
    (request: rooms_services_private_pb.DeleteChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteChatMessagesInternallyResponse.deserializeBinary
  );

  deleteChatMessagesInternally(
    request: rooms_services_private_pb.DeleteChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteChatMessagesInternallyResponse>;

  deleteChatMessagesInternally(
    request: rooms_services_private_pb.DeleteChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteChatMessagesInternallyResponse>;

  deleteChatMessagesInternally(
    request: rooms_services_private_pb.DeleteChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteChatMessagesInternally);
  }

  methodDescriptorListAndCountChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountChatMessagesInternallyRequest,
    rooms_services_private_pb.ListAndCountChatMessagesInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountChatMessagesInternallyResponse.deserializeBinary
  );

  listAndCountChatMessagesInternally(
    request: rooms_services_private_pb.ListAndCountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountChatMessagesInternallyResponse>;

  listAndCountChatMessagesInternally(
    request: rooms_services_private_pb.ListAndCountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountChatMessagesInternallyResponse>;

  listAndCountChatMessagesInternally(
    request: rooms_services_private_pb.ListAndCountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountChatMessagesInternally);
  }

  methodDescriptorGetUserTicketInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetUserTicketInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetUserTicketInternallyRequest,
    rooms_services_private_pb.GetUserTicketInternallyResponse,
    (request: rooms_services_private_pb.GetUserTicketInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetUserTicketInternallyResponse.deserializeBinary
  );

  getUserTicketInternally(
    request: rooms_services_private_pb.GetUserTicketInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetUserTicketInternallyResponse>;

  getUserTicketInternally(
    request: rooms_services_private_pb.GetUserTicketInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetUserTicketInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetUserTicketInternallyResponse>;

  getUserTicketInternally(
    request: rooms_services_private_pb.GetUserTicketInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetUserTicketInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetUserTicketInternally',
        request,
        metadata || {},
        this.methodDescriptorGetUserTicketInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetUserTicketInternally',
    request,
    metadata || {},
    this.methodDescriptorGetUserTicketInternally);
  }

  methodDescriptorListUserTicketsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListUserTicketsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListUserTicketsInternallyRequest,
    rooms_services_private_pb.ListUserTicketsInternallyResponse,
    (request: rooms_services_private_pb.ListUserTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListUserTicketsInternallyResponse.deserializeBinary
  );

  listUserTicketsInternally(
    request: rooms_services_private_pb.ListUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListUserTicketsInternallyResponse>;

  listUserTicketsInternally(
    request: rooms_services_private_pb.ListUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListUserTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListUserTicketsInternallyResponse>;

  listUserTicketsInternally(
    request: rooms_services_private_pb.ListUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListUserTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListUserTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorListUserTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListUserTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorListUserTicketsInternally);
  }

  methodDescriptorCountUserTicketsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountUserTicketsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountUserTicketsInternallyRequest,
    rooms_services_private_pb.CountUserTicketsInternallyResponse,
    (request: rooms_services_private_pb.CountUserTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountUserTicketsInternallyResponse.deserializeBinary
  );

  countUserTicketsInternally(
    request: rooms_services_private_pb.CountUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountUserTicketsInternallyResponse>;

  countUserTicketsInternally(
    request: rooms_services_private_pb.CountUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountUserTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountUserTicketsInternallyResponse>;

  countUserTicketsInternally(
    request: rooms_services_private_pb.CountUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountUserTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountUserTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountUserTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountUserTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountUserTicketsInternally);
  }

  methodDescriptorCreateUserTicketsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateUserTicketsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateUserTicketsInternallyRequest,
    rooms_services_private_pb.CreateUserTicketsInternallyResponse,
    (request: rooms_services_private_pb.CreateUserTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateUserTicketsInternallyResponse.deserializeBinary
  );

  createUserTicketsInternally(
    request: rooms_services_private_pb.CreateUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateUserTicketsInternallyResponse>;

  createUserTicketsInternally(
    request: rooms_services_private_pb.CreateUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateUserTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateUserTicketsInternallyResponse>;

  createUserTicketsInternally(
    request: rooms_services_private_pb.CreateUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateUserTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateUserTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateUserTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateUserTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateUserTicketsInternally);
  }

  methodDescriptorUpdateUserTicketsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/UpdateUserTicketsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.UpdateUserTicketsInternallyRequest,
    rooms_services_private_pb.UpdateUserTicketsInternallyResponse,
    (request: rooms_services_private_pb.UpdateUserTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.UpdateUserTicketsInternallyResponse.deserializeBinary
  );

  updateUserTicketsInternally(
    request: rooms_services_private_pb.UpdateUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.UpdateUserTicketsInternallyResponse>;

  updateUserTicketsInternally(
    request: rooms_services_private_pb.UpdateUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateUserTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.UpdateUserTicketsInternallyResponse>;

  updateUserTicketsInternally(
    request: rooms_services_private_pb.UpdateUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateUserTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/UpdateUserTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateUserTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/UpdateUserTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateUserTicketsInternally);
  }

  methodDescriptorDeleteUserTicketsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteUserTicketsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteUserTicketsInternallyRequest,
    rooms_services_private_pb.DeleteUserTicketsInternallyResponse,
    (request: rooms_services_private_pb.DeleteUserTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteUserTicketsInternallyResponse.deserializeBinary
  );

  deleteUserTicketsInternally(
    request: rooms_services_private_pb.DeleteUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteUserTicketsInternallyResponse>;

  deleteUserTicketsInternally(
    request: rooms_services_private_pb.DeleteUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteUserTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteUserTicketsInternallyResponse>;

  deleteUserTicketsInternally(
    request: rooms_services_private_pb.DeleteUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteUserTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteUserTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteUserTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteUserTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteUserTicketsInternally);
  }

  methodDescriptorListAndCountUserTicketsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountUserTicketsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountUserTicketsInternallyRequest,
    rooms_services_private_pb.ListAndCountUserTicketsInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountUserTicketsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountUserTicketsInternallyResponse.deserializeBinary
  );

  listAndCountUserTicketsInternally(
    request: rooms_services_private_pb.ListAndCountUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountUserTicketsInternallyResponse>;

  listAndCountUserTicketsInternally(
    request: rooms_services_private_pb.ListAndCountUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountUserTicketsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountUserTicketsInternallyResponse>;

  listAndCountUserTicketsInternally(
    request: rooms_services_private_pb.ListAndCountUserTicketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountUserTicketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountUserTicketsInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountUserTicketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountUserTicketsInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountUserTicketsInternally);
  }

  methodDescriptorGetRoomInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetRoomInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetRoomInternallyRequest,
    rooms_services_private_pb.GetRoomInternallyResponse,
    (request: rooms_services_private_pb.GetRoomInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetRoomInternallyResponse.deserializeBinary
  );

  getRoomInternally(
    request: rooms_services_private_pb.GetRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetRoomInternallyResponse>;

  getRoomInternally(
    request: rooms_services_private_pb.GetRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRoomInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetRoomInternallyResponse>;

  getRoomInternally(
    request: rooms_services_private_pb.GetRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRoomInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetRoomInternally',
        request,
        metadata || {},
        this.methodDescriptorGetRoomInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetRoomInternally',
    request,
    metadata || {},
    this.methodDescriptorGetRoomInternally);
  }

  methodDescriptorListRoomsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListRoomsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListRoomsInternallyRequest,
    rooms_services_private_pb.ListRoomsInternallyResponse,
    (request: rooms_services_private_pb.ListRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListRoomsInternallyResponse.deserializeBinary
  );

  listRoomsInternally(
    request: rooms_services_private_pb.ListRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListRoomsInternallyResponse>;

  listRoomsInternally(
    request: rooms_services_private_pb.ListRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListRoomsInternallyResponse>;

  listRoomsInternally(
    request: rooms_services_private_pb.ListRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorListRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorListRoomsInternally);
  }

  methodDescriptorStateRoomsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/StateRoomsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.StateRoomsInternallyRequest,
    rooms_services_private_pb.StateRoomsInternallyResponse,
    (request: rooms_services_private_pb.StateRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.StateRoomsInternallyResponse.deserializeBinary
  );

  stateRoomsInternally(
    request: rooms_services_private_pb.StateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.StateRoomsInternallyResponse>;

  stateRoomsInternally(
    request: rooms_services_private_pb.StateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.StateRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.StateRoomsInternallyResponse>;

  stateRoomsInternally(
    request: rooms_services_private_pb.StateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.StateRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/StateRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorStateRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/StateRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorStateRoomsInternally);
  }

  methodDescriptorCountRoomsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountRoomsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountRoomsInternallyRequest,
    rooms_services_private_pb.CountRoomsInternallyResponse,
    (request: rooms_services_private_pb.CountRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountRoomsInternallyResponse.deserializeBinary
  );

  countRoomsInternally(
    request: rooms_services_private_pb.CountRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountRoomsInternallyResponse>;

  countRoomsInternally(
    request: rooms_services_private_pb.CountRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountRoomsInternallyResponse>;

  countRoomsInternally(
    request: rooms_services_private_pb.CountRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountRoomsInternally);
  }

  methodDescriptorCreateRoomsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateRoomsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateRoomsInternallyRequest,
    rooms_services_private_pb.CreateRoomsInternallyResponse,
    (request: rooms_services_private_pb.CreateRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateRoomsInternallyResponse.deserializeBinary
  );

  createRoomsInternally(
    request: rooms_services_private_pb.CreateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateRoomsInternallyResponse>;

  createRoomsInternally(
    request: rooms_services_private_pb.CreateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateRoomsInternallyResponse>;

  createRoomsInternally(
    request: rooms_services_private_pb.CreateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateRoomsInternally);
  }

  methodDescriptorUpdateRoomsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/UpdateRoomsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.UpdateRoomsInternallyRequest,
    rooms_services_private_pb.UpdateRoomsInternallyResponse,
    (request: rooms_services_private_pb.UpdateRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.UpdateRoomsInternallyResponse.deserializeBinary
  );

  updateRoomsInternally(
    request: rooms_services_private_pb.UpdateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.UpdateRoomsInternallyResponse>;

  updateRoomsInternally(
    request: rooms_services_private_pb.UpdateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.UpdateRoomsInternallyResponse>;

  updateRoomsInternally(
    request: rooms_services_private_pb.UpdateRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/UpdateRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/UpdateRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoomsInternally);
  }

  methodDescriptorDeleteRoomsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteRoomsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteRoomsInternallyRequest,
    rooms_services_private_pb.DeleteRoomsInternallyResponse,
    (request: rooms_services_private_pb.DeleteRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteRoomsInternallyResponse.deserializeBinary
  );

  deleteRoomsInternally(
    request: rooms_services_private_pb.DeleteRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteRoomsInternallyResponse>;

  deleteRoomsInternally(
    request: rooms_services_private_pb.DeleteRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteRoomsInternallyResponse>;

  deleteRoomsInternally(
    request: rooms_services_private_pb.DeleteRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteRoomsInternally);
  }

  methodDescriptorListAndCountRoomsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountRoomsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountRoomsInternallyRequest,
    rooms_services_private_pb.ListAndCountRoomsInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountRoomsInternallyResponse.deserializeBinary
  );

  listAndCountRoomsInternally(
    request: rooms_services_private_pb.ListAndCountRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountRoomsInternallyResponse>;

  listAndCountRoomsInternally(
    request: rooms_services_private_pb.ListAndCountRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountRoomsInternallyResponse>;

  listAndCountRoomsInternally(
    request: rooms_services_private_pb.ListAndCountRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountRoomsInternally);
  }

  methodDescriptorGetRoomUserInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetRoomUserInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetRoomUserInternallyRequest,
    rooms_services_private_pb.GetRoomUserInternallyResponse,
    (request: rooms_services_private_pb.GetRoomUserInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetRoomUserInternallyResponse.deserializeBinary
  );

  getRoomUserInternally(
    request: rooms_services_private_pb.GetRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetRoomUserInternallyResponse>;

  getRoomUserInternally(
    request: rooms_services_private_pb.GetRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRoomUserInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetRoomUserInternallyResponse>;

  getRoomUserInternally(
    request: rooms_services_private_pb.GetRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRoomUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetRoomUserInternally',
        request,
        metadata || {},
        this.methodDescriptorGetRoomUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetRoomUserInternally',
    request,
    metadata || {},
    this.methodDescriptorGetRoomUserInternally);
  }

  methodDescriptorListRoomUsersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListRoomUsersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListRoomUsersInternallyRequest,
    rooms_services_private_pb.ListRoomUsersInternallyResponse,
    (request: rooms_services_private_pb.ListRoomUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListRoomUsersInternallyResponse.deserializeBinary
  );

  listRoomUsersInternally(
    request: rooms_services_private_pb.ListRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListRoomUsersInternallyResponse>;

  listRoomUsersInternally(
    request: rooms_services_private_pb.ListRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRoomUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListRoomUsersInternallyResponse>;

  listRoomUsersInternally(
    request: rooms_services_private_pb.ListRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRoomUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListRoomUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorListRoomUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListRoomUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorListRoomUsersInternally);
  }

  methodDescriptorCountRoomUsersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountRoomUsersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountRoomUsersInternallyRequest,
    rooms_services_private_pb.CountRoomUsersInternallyResponse,
    (request: rooms_services_private_pb.CountRoomUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountRoomUsersInternallyResponse.deserializeBinary
  );

  countRoomUsersInternally(
    request: rooms_services_private_pb.CountRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountRoomUsersInternallyResponse>;

  countRoomUsersInternally(
    request: rooms_services_private_pb.CountRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRoomUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountRoomUsersInternallyResponse>;

  countRoomUsersInternally(
    request: rooms_services_private_pb.CountRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRoomUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountRoomUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountRoomUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountRoomUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountRoomUsersInternally);
  }

  methodDescriptorCreateRoomUsersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateRoomUsersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateRoomUsersInternallyRequest,
    rooms_services_private_pb.CreateRoomUsersInternallyResponse,
    (request: rooms_services_private_pb.CreateRoomUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateRoomUsersInternallyResponse.deserializeBinary
  );

  createRoomUsersInternally(
    request: rooms_services_private_pb.CreateRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateRoomUsersInternallyResponse>;

  createRoomUsersInternally(
    request: rooms_services_private_pb.CreateRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateRoomUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateRoomUsersInternallyResponse>;

  createRoomUsersInternally(
    request: rooms_services_private_pb.CreateRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateRoomUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateRoomUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateRoomUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateRoomUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateRoomUsersInternally);
  }

  methodDescriptorUpdateRoomUsersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/UpdateRoomUsersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.UpdateRoomUsersInternallyRequest,
    rooms_services_private_pb.UpdateRoomUsersInternallyResponse,
    (request: rooms_services_private_pb.UpdateRoomUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.UpdateRoomUsersInternallyResponse.deserializeBinary
  );

  updateRoomUsersInternally(
    request: rooms_services_private_pb.UpdateRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.UpdateRoomUsersInternallyResponse>;

  updateRoomUsersInternally(
    request: rooms_services_private_pb.UpdateRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateRoomUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.UpdateRoomUsersInternallyResponse>;

  updateRoomUsersInternally(
    request: rooms_services_private_pb.UpdateRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateRoomUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/UpdateRoomUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoomUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/UpdateRoomUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoomUsersInternally);
  }

  methodDescriptorDeleteRoomUsersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteRoomUsersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteRoomUsersInternallyRequest,
    rooms_services_private_pb.DeleteRoomUsersInternallyResponse,
    (request: rooms_services_private_pb.DeleteRoomUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteRoomUsersInternallyResponse.deserializeBinary
  );

  deleteRoomUsersInternally(
    request: rooms_services_private_pb.DeleteRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteRoomUsersInternallyResponse>;

  deleteRoomUsersInternally(
    request: rooms_services_private_pb.DeleteRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteRoomUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteRoomUsersInternallyResponse>;

  deleteRoomUsersInternally(
    request: rooms_services_private_pb.DeleteRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteRoomUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteRoomUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteRoomUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteRoomUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteRoomUsersInternally);
  }

  methodDescriptorDisconnectRoomUsersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DisconnectRoomUsersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DisconnectRoomUsersInternallyRequest,
    rooms_services_private_pb.DisconnectRoomUsersInternallyResponse,
    (request: rooms_services_private_pb.DisconnectRoomUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DisconnectRoomUsersInternallyResponse.deserializeBinary
  );

  disconnectRoomUsersInternally(
    request: rooms_services_private_pb.DisconnectRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DisconnectRoomUsersInternallyResponse>;

  disconnectRoomUsersInternally(
    request: rooms_services_private_pb.DisconnectRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DisconnectRoomUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DisconnectRoomUsersInternallyResponse>;

  disconnectRoomUsersInternally(
    request: rooms_services_private_pb.DisconnectRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DisconnectRoomUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DisconnectRoomUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorDisconnectRoomUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DisconnectRoomUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorDisconnectRoomUsersInternally);
  }

  methodDescriptorListAndCountRoomUsersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountRoomUsersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountRoomUsersInternallyRequest,
    rooms_services_private_pb.ListAndCountRoomUsersInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountRoomUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountRoomUsersInternallyResponse.deserializeBinary
  );

  listAndCountRoomUsersInternally(
    request: rooms_services_private_pb.ListAndCountRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountRoomUsersInternallyResponse>;

  listAndCountRoomUsersInternally(
    request: rooms_services_private_pb.ListAndCountRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRoomUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountRoomUsersInternallyResponse>;

  listAndCountRoomUsersInternally(
    request: rooms_services_private_pb.ListAndCountRoomUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRoomUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountRoomUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountRoomUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountRoomUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountRoomUsersInternally);
  }

  methodDescriptorGetRoomInviteInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetRoomInviteInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetRoomInviteInternallyRequest,
    rooms_services_private_pb.GetRoomInviteInternallyResponse,
    (request: rooms_services_private_pb.GetRoomInviteInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetRoomInviteInternallyResponse.deserializeBinary
  );

  getRoomInviteInternally(
    request: rooms_services_private_pb.GetRoomInviteInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetRoomInviteInternallyResponse>;

  getRoomInviteInternally(
    request: rooms_services_private_pb.GetRoomInviteInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRoomInviteInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetRoomInviteInternallyResponse>;

  getRoomInviteInternally(
    request: rooms_services_private_pb.GetRoomInviteInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRoomInviteInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetRoomInviteInternally',
        request,
        metadata || {},
        this.methodDescriptorGetRoomInviteInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetRoomInviteInternally',
    request,
    metadata || {},
    this.methodDescriptorGetRoomInviteInternally);
  }

  methodDescriptorListRoomInvitesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListRoomInvitesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListRoomInvitesInternallyRequest,
    rooms_services_private_pb.ListRoomInvitesInternallyResponse,
    (request: rooms_services_private_pb.ListRoomInvitesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListRoomInvitesInternallyResponse.deserializeBinary
  );

  listRoomInvitesInternally(
    request: rooms_services_private_pb.ListRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListRoomInvitesInternallyResponse>;

  listRoomInvitesInternally(
    request: rooms_services_private_pb.ListRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRoomInvitesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListRoomInvitesInternallyResponse>;

  listRoomInvitesInternally(
    request: rooms_services_private_pb.ListRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRoomInvitesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListRoomInvitesInternally',
        request,
        metadata || {},
        this.methodDescriptorListRoomInvitesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListRoomInvitesInternally',
    request,
    metadata || {},
    this.methodDescriptorListRoomInvitesInternally);
  }

  methodDescriptorCountRoomInvitesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountRoomInvitesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountRoomInvitesInternallyRequest,
    rooms_services_private_pb.CountRoomInvitesInternallyResponse,
    (request: rooms_services_private_pb.CountRoomInvitesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountRoomInvitesInternallyResponse.deserializeBinary
  );

  countRoomInvitesInternally(
    request: rooms_services_private_pb.CountRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountRoomInvitesInternallyResponse>;

  countRoomInvitesInternally(
    request: rooms_services_private_pb.CountRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRoomInvitesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountRoomInvitesInternallyResponse>;

  countRoomInvitesInternally(
    request: rooms_services_private_pb.CountRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRoomInvitesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountRoomInvitesInternally',
        request,
        metadata || {},
        this.methodDescriptorCountRoomInvitesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountRoomInvitesInternally',
    request,
    metadata || {},
    this.methodDescriptorCountRoomInvitesInternally);
  }

  methodDescriptorCreateRoomInvitesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateRoomInvitesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateRoomInvitesInternallyRequest,
    rooms_services_private_pb.CreateRoomInvitesInternallyResponse,
    (request: rooms_services_private_pb.CreateRoomInvitesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateRoomInvitesInternallyResponse.deserializeBinary
  );

  createRoomInvitesInternally(
    request: rooms_services_private_pb.CreateRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateRoomInvitesInternallyResponse>;

  createRoomInvitesInternally(
    request: rooms_services_private_pb.CreateRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateRoomInvitesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateRoomInvitesInternallyResponse>;

  createRoomInvitesInternally(
    request: rooms_services_private_pb.CreateRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateRoomInvitesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateRoomInvitesInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateRoomInvitesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateRoomInvitesInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateRoomInvitesInternally);
  }

  methodDescriptorUpdateRoomInvitesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/UpdateRoomInvitesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.UpdateRoomInvitesInternallyRequest,
    rooms_services_private_pb.UpdateRoomInvitesInternallyResponse,
    (request: rooms_services_private_pb.UpdateRoomInvitesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.UpdateRoomInvitesInternallyResponse.deserializeBinary
  );

  updateRoomInvitesInternally(
    request: rooms_services_private_pb.UpdateRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.UpdateRoomInvitesInternallyResponse>;

  updateRoomInvitesInternally(
    request: rooms_services_private_pb.UpdateRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateRoomInvitesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.UpdateRoomInvitesInternallyResponse>;

  updateRoomInvitesInternally(
    request: rooms_services_private_pb.UpdateRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateRoomInvitesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/UpdateRoomInvitesInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoomInvitesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/UpdateRoomInvitesInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoomInvitesInternally);
  }

  methodDescriptorDeleteRoomInvitesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteRoomInvitesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteRoomInvitesInternallyRequest,
    rooms_services_private_pb.DeleteRoomInvitesInternallyResponse,
    (request: rooms_services_private_pb.DeleteRoomInvitesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteRoomInvitesInternallyResponse.deserializeBinary
  );

  deleteRoomInvitesInternally(
    request: rooms_services_private_pb.DeleteRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteRoomInvitesInternallyResponse>;

  deleteRoomInvitesInternally(
    request: rooms_services_private_pb.DeleteRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteRoomInvitesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteRoomInvitesInternallyResponse>;

  deleteRoomInvitesInternally(
    request: rooms_services_private_pb.DeleteRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteRoomInvitesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteRoomInvitesInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteRoomInvitesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteRoomInvitesInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteRoomInvitesInternally);
  }

  methodDescriptorListAndCountRoomInvitesInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountRoomInvitesInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountRoomInvitesInternallyRequest,
    rooms_services_private_pb.ListAndCountRoomInvitesInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountRoomInvitesInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountRoomInvitesInternallyResponse.deserializeBinary
  );

  listAndCountRoomInvitesInternally(
    request: rooms_services_private_pb.ListAndCountRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountRoomInvitesInternallyResponse>;

  listAndCountRoomInvitesInternally(
    request: rooms_services_private_pb.ListAndCountRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRoomInvitesInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountRoomInvitesInternallyResponse>;

  listAndCountRoomInvitesInternally(
    request: rooms_services_private_pb.ListAndCountRoomInvitesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRoomInvitesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountRoomInvitesInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountRoomInvitesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountRoomInvitesInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountRoomInvitesInternally);
  }

  methodDescriptorGetRoomStreamInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetRoomStreamInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetRoomStreamInternallyRequest,
    rooms_services_private_pb.GetRoomStreamInternallyResponse,
    (request: rooms_services_private_pb.GetRoomStreamInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetRoomStreamInternallyResponse.deserializeBinary
  );

  getRoomStreamInternally(
    request: rooms_services_private_pb.GetRoomStreamInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetRoomStreamInternallyResponse>;

  getRoomStreamInternally(
    request: rooms_services_private_pb.GetRoomStreamInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRoomStreamInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetRoomStreamInternallyResponse>;

  getRoomStreamInternally(
    request: rooms_services_private_pb.GetRoomStreamInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRoomStreamInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetRoomStreamInternally',
        request,
        metadata || {},
        this.methodDescriptorGetRoomStreamInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetRoomStreamInternally',
    request,
    metadata || {},
    this.methodDescriptorGetRoomStreamInternally);
  }

  methodDescriptorListRoomStreamsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListRoomStreamsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListRoomStreamsInternallyRequest,
    rooms_services_private_pb.ListRoomStreamsInternallyResponse,
    (request: rooms_services_private_pb.ListRoomStreamsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListRoomStreamsInternallyResponse.deserializeBinary
  );

  listRoomStreamsInternally(
    request: rooms_services_private_pb.ListRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListRoomStreamsInternallyResponse>;

  listRoomStreamsInternally(
    request: rooms_services_private_pb.ListRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRoomStreamsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListRoomStreamsInternallyResponse>;

  listRoomStreamsInternally(
    request: rooms_services_private_pb.ListRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRoomStreamsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListRoomStreamsInternally',
        request,
        metadata || {},
        this.methodDescriptorListRoomStreamsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListRoomStreamsInternally',
    request,
    metadata || {},
    this.methodDescriptorListRoomStreamsInternally);
  }

  methodDescriptorCountRoomStreamsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountRoomStreamsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountRoomStreamsInternallyRequest,
    rooms_services_private_pb.CountRoomStreamsInternallyResponse,
    (request: rooms_services_private_pb.CountRoomStreamsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountRoomStreamsInternallyResponse.deserializeBinary
  );

  countRoomStreamsInternally(
    request: rooms_services_private_pb.CountRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountRoomStreamsInternallyResponse>;

  countRoomStreamsInternally(
    request: rooms_services_private_pb.CountRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRoomStreamsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountRoomStreamsInternallyResponse>;

  countRoomStreamsInternally(
    request: rooms_services_private_pb.CountRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRoomStreamsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountRoomStreamsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountRoomStreamsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountRoomStreamsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountRoomStreamsInternally);
  }

  methodDescriptorListAndCountRoomStreamsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountRoomStreamsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountRoomStreamsInternallyRequest,
    rooms_services_private_pb.ListAndCountRoomStreamsInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountRoomStreamsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountRoomStreamsInternallyResponse.deserializeBinary
  );

  listAndCountRoomStreamsInternally(
    request: rooms_services_private_pb.ListAndCountRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountRoomStreamsInternallyResponse>;

  listAndCountRoomStreamsInternally(
    request: rooms_services_private_pb.ListAndCountRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRoomStreamsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountRoomStreamsInternallyResponse>;

  listAndCountRoomStreamsInternally(
    request: rooms_services_private_pb.ListAndCountRoomStreamsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRoomStreamsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountRoomStreamsInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountRoomStreamsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountRoomStreamsInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountRoomStreamsInternally);
  }

  methodDescriptorGetEventInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetEventInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetEventInternallyRequest,
    rooms_services_private_pb.GetEventInternallyResponse,
    (request: rooms_services_private_pb.GetEventInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetEventInternallyResponse.deserializeBinary
  );

  getEventInternally(
    request: rooms_services_private_pb.GetEventInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetEventInternallyResponse>;

  getEventInternally(
    request: rooms_services_private_pb.GetEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetEventInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetEventInternallyResponse>;

  getEventInternally(
    request: rooms_services_private_pb.GetEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetEventInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetEventInternally',
        request,
        metadata || {},
        this.methodDescriptorGetEventInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetEventInternally',
    request,
    metadata || {},
    this.methodDescriptorGetEventInternally);
  }

  methodDescriptorListEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListEventsInternallyRequest,
    rooms_services_private_pb.ListEventsInternallyResponse,
    (request: rooms_services_private_pb.ListEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListEventsInternallyResponse.deserializeBinary
  );

  listEventsInternally(
    request: rooms_services_private_pb.ListEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListEventsInternallyResponse>;

  listEventsInternally(
    request: rooms_services_private_pb.ListEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListEventsInternallyResponse>;

  listEventsInternally(
    request: rooms_services_private_pb.ListEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorListEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorListEventsInternally);
  }

  methodDescriptorStateEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/StateEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.StateEventsInternallyRequest,
    rooms_services_private_pb.StateEventsInternallyResponse,
    (request: rooms_services_private_pb.StateEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.StateEventsInternallyResponse.deserializeBinary
  );

  stateEventsInternally(
    request: rooms_services_private_pb.StateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.StateEventsInternallyResponse>;

  stateEventsInternally(
    request: rooms_services_private_pb.StateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.StateEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.StateEventsInternallyResponse>;

  stateEventsInternally(
    request: rooms_services_private_pb.StateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.StateEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/StateEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorStateEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/StateEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorStateEventsInternally);
  }

  methodDescriptorCountEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountEventsInternallyRequest,
    rooms_services_private_pb.CountEventsInternallyResponse,
    (request: rooms_services_private_pb.CountEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountEventsInternallyResponse.deserializeBinary
  );

  countEventsInternally(
    request: rooms_services_private_pb.CountEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountEventsInternallyResponse>;

  countEventsInternally(
    request: rooms_services_private_pb.CountEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountEventsInternallyResponse>;

  countEventsInternally(
    request: rooms_services_private_pb.CountEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountEventsInternally);
  }

  methodDescriptorCreateEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateEventsInternallyRequest,
    rooms_services_private_pb.CreateEventsInternallyResponse,
    (request: rooms_services_private_pb.CreateEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateEventsInternallyResponse.deserializeBinary
  );

  createEventsInternally(
    request: rooms_services_private_pb.CreateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateEventsInternallyResponse>;

  createEventsInternally(
    request: rooms_services_private_pb.CreateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateEventsInternallyResponse>;

  createEventsInternally(
    request: rooms_services_private_pb.CreateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateEventsInternally);
  }

  methodDescriptorUpdateEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/UpdateEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.UpdateEventsInternallyRequest,
    rooms_services_private_pb.UpdateEventsInternallyResponse,
    (request: rooms_services_private_pb.UpdateEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.UpdateEventsInternallyResponse.deserializeBinary
  );

  updateEventsInternally(
    request: rooms_services_private_pb.UpdateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.UpdateEventsInternallyResponse>;

  updateEventsInternally(
    request: rooms_services_private_pb.UpdateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.UpdateEventsInternallyResponse>;

  updateEventsInternally(
    request: rooms_services_private_pb.UpdateEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/UpdateEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/UpdateEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventsInternally);
  }

  methodDescriptorDeleteEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteEventsInternallyRequest,
    rooms_services_private_pb.DeleteEventsInternallyResponse,
    (request: rooms_services_private_pb.DeleteEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteEventsInternallyResponse.deserializeBinary
  );

  deleteEventsInternally(
    request: rooms_services_private_pb.DeleteEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteEventsInternallyResponse>;

  deleteEventsInternally(
    request: rooms_services_private_pb.DeleteEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteEventsInternallyResponse>;

  deleteEventsInternally(
    request: rooms_services_private_pb.DeleteEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventsInternally);
  }

  methodDescriptorStartEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/StartEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.StartEventsInternallyRequest,
    rooms_services_private_pb.StartEventsInternallyResponse,
    (request: rooms_services_private_pb.StartEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.StartEventsInternallyResponse.deserializeBinary
  );

  startEventsInternally(
    request: rooms_services_private_pb.StartEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.StartEventsInternallyResponse>;

  startEventsInternally(
    request: rooms_services_private_pb.StartEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.StartEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.StartEventsInternallyResponse>;

  startEventsInternally(
    request: rooms_services_private_pb.StartEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.StartEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/StartEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorStartEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/StartEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorStartEventsInternally);
  }

  methodDescriptorFinishEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/FinishEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.FinishEventsInternallyRequest,
    rooms_services_private_pb.FinishEventsInternallyResponse,
    (request: rooms_services_private_pb.FinishEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.FinishEventsInternallyResponse.deserializeBinary
  );

  finishEventsInternally(
    request: rooms_services_private_pb.FinishEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.FinishEventsInternallyResponse>;

  finishEventsInternally(
    request: rooms_services_private_pb.FinishEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.FinishEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.FinishEventsInternallyResponse>;

  finishEventsInternally(
    request: rooms_services_private_pb.FinishEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.FinishEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/FinishEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorFinishEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/FinishEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorFinishEventsInternally);
  }

  methodDescriptorCancelEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CancelEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CancelEventsInternallyRequest,
    rooms_services_private_pb.CancelEventsInternallyResponse,
    (request: rooms_services_private_pb.CancelEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CancelEventsInternallyResponse.deserializeBinary
  );

  cancelEventsInternally(
    request: rooms_services_private_pb.CancelEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CancelEventsInternallyResponse>;

  cancelEventsInternally(
    request: rooms_services_private_pb.CancelEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CancelEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CancelEventsInternallyResponse>;

  cancelEventsInternally(
    request: rooms_services_private_pb.CancelEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CancelEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CancelEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorCancelEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CancelEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorCancelEventsInternally);
  }

  methodDescriptorRestartEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/RestartEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.RestartEventsInternallyRequest,
    rooms_services_private_pb.RestartEventsInternallyResponse,
    (request: rooms_services_private_pb.RestartEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.RestartEventsInternallyResponse.deserializeBinary
  );

  restartEventsInternally(
    request: rooms_services_private_pb.RestartEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.RestartEventsInternallyResponse>;

  restartEventsInternally(
    request: rooms_services_private_pb.RestartEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.RestartEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.RestartEventsInternallyResponse>;

  restartEventsInternally(
    request: rooms_services_private_pb.RestartEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.RestartEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/RestartEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorRestartEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/RestartEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorRestartEventsInternally);
  }

  methodDescriptorListAndCountEventsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountEventsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountEventsInternallyRequest,
    rooms_services_private_pb.ListAndCountEventsInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountEventsInternallyResponse.deserializeBinary
  );

  listAndCountEventsInternally(
    request: rooms_services_private_pb.ListAndCountEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountEventsInternallyResponse>;

  listAndCountEventsInternally(
    request: rooms_services_private_pb.ListAndCountEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountEventsInternallyResponse>;

  listAndCountEventsInternally(
    request: rooms_services_private_pb.ListAndCountEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountEventsInternally);
  }

  methodDescriptorCheckEventOwnershipsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CheckEventOwnershipsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CheckEventOwnershipsInternallyRequest,
    rooms_services_private_pb.CheckEventOwnershipsInternallyResponse,
    (request: rooms_services_private_pb.CheckEventOwnershipsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CheckEventOwnershipsInternallyResponse.deserializeBinary
  );

  checkEventOwnershipsInternally(
    request: rooms_services_private_pb.CheckEventOwnershipsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CheckEventOwnershipsInternallyResponse>;

  checkEventOwnershipsInternally(
    request: rooms_services_private_pb.CheckEventOwnershipsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CheckEventOwnershipsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CheckEventOwnershipsInternallyResponse>;

  checkEventOwnershipsInternally(
    request: rooms_services_private_pb.CheckEventOwnershipsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CheckEventOwnershipsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CheckEventOwnershipsInternally',
        request,
        metadata || {},
        this.methodDescriptorCheckEventOwnershipsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CheckEventOwnershipsInternally',
    request,
    metadata || {},
    this.methodDescriptorCheckEventOwnershipsInternally);
  }

  methodDescriptorGetEventObserverInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetEventObserverInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetEventObserverInternallyRequest,
    rooms_services_private_pb.GetEventObserverInternallyResponse,
    (request: rooms_services_private_pb.GetEventObserverInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetEventObserverInternallyResponse.deserializeBinary
  );

  getEventObserverInternally(
    request: rooms_services_private_pb.GetEventObserverInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetEventObserverInternallyResponse>;

  getEventObserverInternally(
    request: rooms_services_private_pb.GetEventObserverInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetEventObserverInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetEventObserverInternallyResponse>;

  getEventObserverInternally(
    request: rooms_services_private_pb.GetEventObserverInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetEventObserverInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetEventObserverInternally',
        request,
        metadata || {},
        this.methodDescriptorGetEventObserverInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetEventObserverInternally',
    request,
    metadata || {},
    this.methodDescriptorGetEventObserverInternally);
  }

  methodDescriptorListEventObserversInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListEventObserversInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListEventObserversInternallyRequest,
    rooms_services_private_pb.ListEventObserversInternallyResponse,
    (request: rooms_services_private_pb.ListEventObserversInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListEventObserversInternallyResponse.deserializeBinary
  );

  listEventObserversInternally(
    request: rooms_services_private_pb.ListEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListEventObserversInternallyResponse>;

  listEventObserversInternally(
    request: rooms_services_private_pb.ListEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListEventObserversInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListEventObserversInternallyResponse>;

  listEventObserversInternally(
    request: rooms_services_private_pb.ListEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListEventObserversInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListEventObserversInternally',
        request,
        metadata || {},
        this.methodDescriptorListEventObserversInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListEventObserversInternally',
    request,
    metadata || {},
    this.methodDescriptorListEventObserversInternally);
  }

  methodDescriptorCountEventObserversInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountEventObserversInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountEventObserversInternallyRequest,
    rooms_services_private_pb.CountEventObserversInternallyResponse,
    (request: rooms_services_private_pb.CountEventObserversInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountEventObserversInternallyResponse.deserializeBinary
  );

  countEventObserversInternally(
    request: rooms_services_private_pb.CountEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountEventObserversInternallyResponse>;

  countEventObserversInternally(
    request: rooms_services_private_pb.CountEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountEventObserversInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountEventObserversInternallyResponse>;

  countEventObserversInternally(
    request: rooms_services_private_pb.CountEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountEventObserversInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountEventObserversInternally',
        request,
        metadata || {},
        this.methodDescriptorCountEventObserversInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountEventObserversInternally',
    request,
    metadata || {},
    this.methodDescriptorCountEventObserversInternally);
  }

  methodDescriptorCreateEventObserversInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateEventObserversInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateEventObserversInternallyRequest,
    rooms_services_private_pb.CreateEventObserversInternallyResponse,
    (request: rooms_services_private_pb.CreateEventObserversInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateEventObserversInternallyResponse.deserializeBinary
  );

  createEventObserversInternally(
    request: rooms_services_private_pb.CreateEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateEventObserversInternallyResponse>;

  createEventObserversInternally(
    request: rooms_services_private_pb.CreateEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateEventObserversInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateEventObserversInternallyResponse>;

  createEventObserversInternally(
    request: rooms_services_private_pb.CreateEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateEventObserversInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateEventObserversInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateEventObserversInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateEventObserversInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateEventObserversInternally);
  }

  methodDescriptorDeleteEventObserversInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteEventObserversInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteEventObserversInternallyRequest,
    rooms_services_private_pb.DeleteEventObserversInternallyResponse,
    (request: rooms_services_private_pb.DeleteEventObserversInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteEventObserversInternallyResponse.deserializeBinary
  );

  deleteEventObserversInternally(
    request: rooms_services_private_pb.DeleteEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteEventObserversInternallyResponse>;

  deleteEventObserversInternally(
    request: rooms_services_private_pb.DeleteEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteEventObserversInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteEventObserversInternallyResponse>;

  deleteEventObserversInternally(
    request: rooms_services_private_pb.DeleteEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteEventObserversInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteEventObserversInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventObserversInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteEventObserversInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventObserversInternally);
  }

  methodDescriptorListAndCountEventObserversInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountEventObserversInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountEventObserversInternallyRequest,
    rooms_services_private_pb.ListAndCountEventObserversInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountEventObserversInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountEventObserversInternallyResponse.deserializeBinary
  );

  listAndCountEventObserversInternally(
    request: rooms_services_private_pb.ListAndCountEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountEventObserversInternallyResponse>;

  listAndCountEventObserversInternally(
    request: rooms_services_private_pb.ListAndCountEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountEventObserversInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountEventObserversInternallyResponse>;

  listAndCountEventObserversInternally(
    request: rooms_services_private_pb.ListAndCountEventObserversInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountEventObserversInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountEventObserversInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountEventObserversInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountEventObserversInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountEventObserversInternally);
  }

  methodDescriptorGetEventPerformerInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetEventPerformerInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetEventPerformerInternallyRequest,
    rooms_services_private_pb.GetEventPerformerInternallyResponse,
    (request: rooms_services_private_pb.GetEventPerformerInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetEventPerformerInternallyResponse.deserializeBinary
  );

  getEventPerformerInternally(
    request: rooms_services_private_pb.GetEventPerformerInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetEventPerformerInternallyResponse>;

  getEventPerformerInternally(
    request: rooms_services_private_pb.GetEventPerformerInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetEventPerformerInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetEventPerformerInternallyResponse>;

  getEventPerformerInternally(
    request: rooms_services_private_pb.GetEventPerformerInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetEventPerformerInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetEventPerformerInternally',
        request,
        metadata || {},
        this.methodDescriptorGetEventPerformerInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetEventPerformerInternally',
    request,
    metadata || {},
    this.methodDescriptorGetEventPerformerInternally);
  }

  methodDescriptorListEventPerformersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListEventPerformersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListEventPerformersInternallyRequest,
    rooms_services_private_pb.ListEventPerformersInternallyResponse,
    (request: rooms_services_private_pb.ListEventPerformersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListEventPerformersInternallyResponse.deserializeBinary
  );

  listEventPerformersInternally(
    request: rooms_services_private_pb.ListEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListEventPerformersInternallyResponse>;

  listEventPerformersInternally(
    request: rooms_services_private_pb.ListEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListEventPerformersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListEventPerformersInternallyResponse>;

  listEventPerformersInternally(
    request: rooms_services_private_pb.ListEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListEventPerformersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListEventPerformersInternally',
        request,
        metadata || {},
        this.methodDescriptorListEventPerformersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListEventPerformersInternally',
    request,
    metadata || {},
    this.methodDescriptorListEventPerformersInternally);
  }

  methodDescriptorCountEventPerformersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountEventPerformersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountEventPerformersInternallyRequest,
    rooms_services_private_pb.CountEventPerformersInternallyResponse,
    (request: rooms_services_private_pb.CountEventPerformersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountEventPerformersInternallyResponse.deserializeBinary
  );

  countEventPerformersInternally(
    request: rooms_services_private_pb.CountEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountEventPerformersInternallyResponse>;

  countEventPerformersInternally(
    request: rooms_services_private_pb.CountEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountEventPerformersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountEventPerformersInternallyResponse>;

  countEventPerformersInternally(
    request: rooms_services_private_pb.CountEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountEventPerformersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountEventPerformersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountEventPerformersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountEventPerformersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountEventPerformersInternally);
  }

  methodDescriptorListAndCountEventPerformersInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountEventPerformersInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountEventPerformersInternallyRequest,
    rooms_services_private_pb.ListAndCountEventPerformersInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountEventPerformersInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountEventPerformersInternallyResponse.deserializeBinary
  );

  listAndCountEventPerformersInternally(
    request: rooms_services_private_pb.ListAndCountEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountEventPerformersInternallyResponse>;

  listAndCountEventPerformersInternally(
    request: rooms_services_private_pb.ListAndCountEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountEventPerformersInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountEventPerformersInternallyResponse>;

  listAndCountEventPerformersInternally(
    request: rooms_services_private_pb.ListAndCountEventPerformersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountEventPerformersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountEventPerformersInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountEventPerformersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountEventPerformersInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountEventPerformersInternally);
  }

  methodDescriptorGetEventOwnerReportInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetEventOwnerReportInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetEventOwnerReportInternallyRequest,
    rooms_services_private_pb.GetEventOwnerReportInternallyResponse,
    (request: rooms_services_private_pb.GetEventOwnerReportInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetEventOwnerReportInternallyResponse.deserializeBinary
  );

  getEventOwnerReportInternally(
    request: rooms_services_private_pb.GetEventOwnerReportInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetEventOwnerReportInternallyResponse>;

  getEventOwnerReportInternally(
    request: rooms_services_private_pb.GetEventOwnerReportInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetEventOwnerReportInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetEventOwnerReportInternallyResponse>;

  getEventOwnerReportInternally(
    request: rooms_services_private_pb.GetEventOwnerReportInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetEventOwnerReportInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetEventOwnerReportInternally',
        request,
        metadata || {},
        this.methodDescriptorGetEventOwnerReportInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetEventOwnerReportInternally',
    request,
    metadata || {},
    this.methodDescriptorGetEventOwnerReportInternally);
  }

  methodDescriptorListEventOwnerReportsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListEventOwnerReportsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListEventOwnerReportsInternallyRequest,
    rooms_services_private_pb.ListEventOwnerReportsInternallyResponse,
    (request: rooms_services_private_pb.ListEventOwnerReportsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListEventOwnerReportsInternallyResponse.deserializeBinary
  );

  listEventOwnerReportsInternally(
    request: rooms_services_private_pb.ListEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListEventOwnerReportsInternallyResponse>;

  listEventOwnerReportsInternally(
    request: rooms_services_private_pb.ListEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListEventOwnerReportsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListEventOwnerReportsInternallyResponse>;

  listEventOwnerReportsInternally(
    request: rooms_services_private_pb.ListEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListEventOwnerReportsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListEventOwnerReportsInternally',
        request,
        metadata || {},
        this.methodDescriptorListEventOwnerReportsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListEventOwnerReportsInternally',
    request,
    metadata || {},
    this.methodDescriptorListEventOwnerReportsInternally);
  }

  methodDescriptorCountEventOwnerReportsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountEventOwnerReportsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountEventOwnerReportsInternallyRequest,
    rooms_services_private_pb.CountEventOwnerReportsInternallyResponse,
    (request: rooms_services_private_pb.CountEventOwnerReportsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountEventOwnerReportsInternallyResponse.deserializeBinary
  );

  countEventOwnerReportsInternally(
    request: rooms_services_private_pb.CountEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountEventOwnerReportsInternallyResponse>;

  countEventOwnerReportsInternally(
    request: rooms_services_private_pb.CountEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountEventOwnerReportsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountEventOwnerReportsInternallyResponse>;

  countEventOwnerReportsInternally(
    request: rooms_services_private_pb.CountEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountEventOwnerReportsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountEventOwnerReportsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountEventOwnerReportsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountEventOwnerReportsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountEventOwnerReportsInternally);
  }

  methodDescriptorCreateEventOwnerReportsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CreateEventOwnerReportsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CreateEventOwnerReportsInternallyRequest,
    rooms_services_private_pb.CreateEventOwnerReportsInternallyResponse,
    (request: rooms_services_private_pb.CreateEventOwnerReportsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CreateEventOwnerReportsInternallyResponse.deserializeBinary
  );

  createEventOwnerReportsInternally(
    request: rooms_services_private_pb.CreateEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CreateEventOwnerReportsInternallyResponse>;

  createEventOwnerReportsInternally(
    request: rooms_services_private_pb.CreateEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateEventOwnerReportsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CreateEventOwnerReportsInternallyResponse>;

  createEventOwnerReportsInternally(
    request: rooms_services_private_pb.CreateEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CreateEventOwnerReportsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CreateEventOwnerReportsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateEventOwnerReportsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CreateEventOwnerReportsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateEventOwnerReportsInternally);
  }

  methodDescriptorUpdateEventOwnerReportsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/UpdateEventOwnerReportsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.UpdateEventOwnerReportsInternallyRequest,
    rooms_services_private_pb.UpdateEventOwnerReportsInternallyResponse,
    (request: rooms_services_private_pb.UpdateEventOwnerReportsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.UpdateEventOwnerReportsInternallyResponse.deserializeBinary
  );

  updateEventOwnerReportsInternally(
    request: rooms_services_private_pb.UpdateEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.UpdateEventOwnerReportsInternallyResponse>;

  updateEventOwnerReportsInternally(
    request: rooms_services_private_pb.UpdateEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateEventOwnerReportsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.UpdateEventOwnerReportsInternallyResponse>;

  updateEventOwnerReportsInternally(
    request: rooms_services_private_pb.UpdateEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.UpdateEventOwnerReportsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/UpdateEventOwnerReportsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventOwnerReportsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/UpdateEventOwnerReportsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventOwnerReportsInternally);
  }

  methodDescriptorDeleteEventOwnerReportsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/DeleteEventOwnerReportsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.DeleteEventOwnerReportsInternallyRequest,
    rooms_services_private_pb.DeleteEventOwnerReportsInternallyResponse,
    (request: rooms_services_private_pb.DeleteEventOwnerReportsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.DeleteEventOwnerReportsInternallyResponse.deserializeBinary
  );

  deleteEventOwnerReportsInternally(
    request: rooms_services_private_pb.DeleteEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.DeleteEventOwnerReportsInternallyResponse>;

  deleteEventOwnerReportsInternally(
    request: rooms_services_private_pb.DeleteEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteEventOwnerReportsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.DeleteEventOwnerReportsInternallyResponse>;

  deleteEventOwnerReportsInternally(
    request: rooms_services_private_pb.DeleteEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.DeleteEventOwnerReportsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/DeleteEventOwnerReportsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventOwnerReportsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/DeleteEventOwnerReportsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventOwnerReportsInternally);
  }

  methodDescriptorListAndCountEventOwnerReportsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountEventOwnerReportsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyRequest,
    rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyResponse.deserializeBinary
  );

  listAndCountEventOwnerReportsInternally(
    request: rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyResponse>;

  listAndCountEventOwnerReportsInternally(
    request: rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyResponse>;

  listAndCountEventOwnerReportsInternally(
    request: rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountEventOwnerReportsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountEventOwnerReportsInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountEventOwnerReportsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountEventOwnerReportsInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountEventOwnerReportsInternally);
  }

  methodDescriptorGetRecommendationInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/GetRecommendationInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.GetRecommendationInternallyRequest,
    rooms_services_private_pb.GetRecommendationInternallyResponse,
    (request: rooms_services_private_pb.GetRecommendationInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.GetRecommendationInternallyResponse.deserializeBinary
  );

  getRecommendationInternally(
    request: rooms_services_private_pb.GetRecommendationInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.GetRecommendationInternallyResponse>;

  getRecommendationInternally(
    request: rooms_services_private_pb.GetRecommendationInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRecommendationInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.GetRecommendationInternallyResponse>;

  getRecommendationInternally(
    request: rooms_services_private_pb.GetRecommendationInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.GetRecommendationInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/GetRecommendationInternally',
        request,
        metadata || {},
        this.methodDescriptorGetRecommendationInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/GetRecommendationInternally',
    request,
    metadata || {},
    this.methodDescriptorGetRecommendationInternally);
  }

  methodDescriptorListRecommendationsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListRecommendationsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListRecommendationsInternallyRequest,
    rooms_services_private_pb.ListRecommendationsInternallyResponse,
    (request: rooms_services_private_pb.ListRecommendationsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListRecommendationsInternallyResponse.deserializeBinary
  );

  listRecommendationsInternally(
    request: rooms_services_private_pb.ListRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListRecommendationsInternallyResponse>;

  listRecommendationsInternally(
    request: rooms_services_private_pb.ListRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRecommendationsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListRecommendationsInternallyResponse>;

  listRecommendationsInternally(
    request: rooms_services_private_pb.ListRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListRecommendationsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListRecommendationsInternally',
        request,
        metadata || {},
        this.methodDescriptorListRecommendationsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListRecommendationsInternally',
    request,
    metadata || {},
    this.methodDescriptorListRecommendationsInternally);
  }

  methodDescriptorCountRecommendationsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/CountRecommendationsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.CountRecommendationsInternallyRequest,
    rooms_services_private_pb.CountRecommendationsInternallyResponse,
    (request: rooms_services_private_pb.CountRecommendationsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.CountRecommendationsInternallyResponse.deserializeBinary
  );

  countRecommendationsInternally(
    request: rooms_services_private_pb.CountRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.CountRecommendationsInternallyResponse>;

  countRecommendationsInternally(
    request: rooms_services_private_pb.CountRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRecommendationsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.CountRecommendationsInternallyResponse>;

  countRecommendationsInternally(
    request: rooms_services_private_pb.CountRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.CountRecommendationsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/CountRecommendationsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountRecommendationsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/CountRecommendationsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountRecommendationsInternally);
  }

  methodDescriptorListAndCountRecommendationsInternally = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PrivateService/ListAndCountRecommendationsInternally',
    grpcWeb.MethodType.UNARY,
    rooms_services_private_pb.ListAndCountRecommendationsInternallyRequest,
    rooms_services_private_pb.ListAndCountRecommendationsInternallyResponse,
    (request: rooms_services_private_pb.ListAndCountRecommendationsInternallyRequest) => {
      return request.serializeBinary();
    },
    rooms_services_private_pb.ListAndCountRecommendationsInternallyResponse.deserializeBinary
  );

  listAndCountRecommendationsInternally(
    request: rooms_services_private_pb.ListAndCountRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_private_pb.ListAndCountRecommendationsInternallyResponse>;

  listAndCountRecommendationsInternally(
    request: rooms_services_private_pb.ListAndCountRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRecommendationsInternallyResponse) => void): grpcWeb.ClientReadableStream<rooms_services_private_pb.ListAndCountRecommendationsInternallyResponse>;

  listAndCountRecommendationsInternally(
    request: rooms_services_private_pb.ListAndCountRecommendationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_private_pb.ListAndCountRecommendationsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PrivateService/ListAndCountRecommendationsInternally',
        request,
        metadata || {},
        this.methodDescriptorListAndCountRecommendationsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PrivateService/ListAndCountRecommendationsInternally',
    request,
    metadata || {},
    this.methodDescriptorListAndCountRecommendationsInternally);
  }

}

