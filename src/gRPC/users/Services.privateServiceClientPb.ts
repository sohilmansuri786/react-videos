/**
 * @fileoverview gRPC-Web generated client stub for users.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as users_services_private_pb from '../users/services.private_pb';


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
    '/users.api.v1.PrivateService/GetChatInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.GetChatInternallyRequest,
    users_services_private_pb.GetChatInternallyResponse,
    (request: users_services_private_pb.GetChatInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.GetChatInternallyResponse.deserializeBinary
  );

  getChatInternally(
    request: users_services_private_pb.GetChatInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.GetChatInternallyResponse>;

  getChatInternally(
    request: users_services_private_pb.GetChatInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetChatInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.GetChatInternallyResponse>;

  getChatInternally(
    request: users_services_private_pb.GetChatInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetChatInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/GetChatInternally',
        request,
        metadata || {},
        this.methodDescriptorGetChatInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/GetChatInternally',
    request,
    metadata || {},
    this.methodDescriptorGetChatInternally);
  }

  methodDescriptorListChatsInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/ListChatsInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.ListChatsInternallyRequest,
    users_services_private_pb.ListChatsInternallyResponse,
    (request: users_services_private_pb.ListChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.ListChatsInternallyResponse.deserializeBinary
  );

  listChatsInternally(
    request: users_services_private_pb.ListChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.ListChatsInternallyResponse>;

  listChatsInternally(
    request: users_services_private_pb.ListChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.ListChatsInternallyResponse>;

  listChatsInternally(
    request: users_services_private_pb.ListChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/ListChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorListChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/ListChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorListChatsInternally);
  }

  methodDescriptorCountChatsInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CountChatsInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CountChatsInternallyRequest,
    users_services_private_pb.CountChatsInternallyResponse,
    (request: users_services_private_pb.CountChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CountChatsInternallyResponse.deserializeBinary
  );

  countChatsInternally(
    request: users_services_private_pb.CountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CountChatsInternallyResponse>;

  countChatsInternally(
    request: users_services_private_pb.CountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CountChatsInternallyResponse>;

  countChatsInternally(
    request: users_services_private_pb.CountChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CountChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CountChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountChatsInternally);
  }

  methodDescriptorCreateChatsInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CreateChatsInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CreateChatsInternallyRequest,
    users_services_private_pb.CreateChatsInternallyResponse,
    (request: users_services_private_pb.CreateChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CreateChatsInternallyResponse.deserializeBinary
  );

  createChatsInternally(
    request: users_services_private_pb.CreateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CreateChatsInternallyResponse>;

  createChatsInternally(
    request: users_services_private_pb.CreateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CreateChatsInternallyResponse>;

  createChatsInternally(
    request: users_services_private_pb.CreateChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CreateChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CreateChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateChatsInternally);
  }

  methodDescriptorDeleteChatsInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/DeleteChatsInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.DeleteChatsInternallyRequest,
    users_services_private_pb.DeleteChatsInternallyResponse,
    (request: users_services_private_pb.DeleteChatsInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.DeleteChatsInternallyResponse.deserializeBinary
  );

  deleteChatsInternally(
    request: users_services_private_pb.DeleteChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.DeleteChatsInternallyResponse>;

  deleteChatsInternally(
    request: users_services_private_pb.DeleteChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteChatsInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.DeleteChatsInternallyResponse>;

  deleteChatsInternally(
    request: users_services_private_pb.DeleteChatsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteChatsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/DeleteChatsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteChatsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/DeleteChatsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteChatsInternally);
  }

  methodDescriptorGetChatUserInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/GetChatUserInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.GetChatUserInternallyRequest,
    users_services_private_pb.GetChatUserInternallyResponse,
    (request: users_services_private_pb.GetChatUserInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.GetChatUserInternallyResponse.deserializeBinary
  );

  getChatUserInternally(
    request: users_services_private_pb.GetChatUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.GetChatUserInternallyResponse>;

  getChatUserInternally(
    request: users_services_private_pb.GetChatUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetChatUserInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.GetChatUserInternallyResponse>;

  getChatUserInternally(
    request: users_services_private_pb.GetChatUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetChatUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/GetChatUserInternally',
        request,
        metadata || {},
        this.methodDescriptorGetChatUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/GetChatUserInternally',
    request,
    metadata || {},
    this.methodDescriptorGetChatUserInternally);
  }

  methodDescriptorListChatUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/ListChatUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.ListChatUsersInternallyRequest,
    users_services_private_pb.ListChatUsersInternallyResponse,
    (request: users_services_private_pb.ListChatUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.ListChatUsersInternallyResponse.deserializeBinary
  );

  listChatUsersInternally(
    request: users_services_private_pb.ListChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.ListChatUsersInternallyResponse>;

  listChatUsersInternally(
    request: users_services_private_pb.ListChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListChatUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.ListChatUsersInternallyResponse>;

  listChatUsersInternally(
    request: users_services_private_pb.ListChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListChatUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/ListChatUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorListChatUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/ListChatUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorListChatUsersInternally);
  }

  methodDescriptorCountChatUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CountChatUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CountChatUsersInternallyRequest,
    users_services_private_pb.CountChatUsersInternallyResponse,
    (request: users_services_private_pb.CountChatUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CountChatUsersInternallyResponse.deserializeBinary
  );

  countChatUsersInternally(
    request: users_services_private_pb.CountChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CountChatUsersInternallyResponse>;

  countChatUsersInternally(
    request: users_services_private_pb.CountChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountChatUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CountChatUsersInternallyResponse>;

  countChatUsersInternally(
    request: users_services_private_pb.CountChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountChatUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CountChatUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountChatUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CountChatUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountChatUsersInternally);
  }

  methodDescriptorCreateChatUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CreateChatUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CreateChatUsersInternallyRequest,
    users_services_private_pb.CreateChatUsersInternallyResponse,
    (request: users_services_private_pb.CreateChatUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CreateChatUsersInternallyResponse.deserializeBinary
  );

  createChatUsersInternally(
    request: users_services_private_pb.CreateChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CreateChatUsersInternallyResponse>;

  createChatUsersInternally(
    request: users_services_private_pb.CreateChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateChatUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CreateChatUsersInternallyResponse>;

  createChatUsersInternally(
    request: users_services_private_pb.CreateChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateChatUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CreateChatUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateChatUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CreateChatUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateChatUsersInternally);
  }

  methodDescriptorDeleteChatUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/DeleteChatUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.DeleteChatUsersInternallyRequest,
    users_services_private_pb.DeleteChatUsersInternallyResponse,
    (request: users_services_private_pb.DeleteChatUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.DeleteChatUsersInternallyResponse.deserializeBinary
  );

  deleteChatUsersInternally(
    request: users_services_private_pb.DeleteChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.DeleteChatUsersInternallyResponse>;

  deleteChatUsersInternally(
    request: users_services_private_pb.DeleteChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteChatUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.DeleteChatUsersInternallyResponse>;

  deleteChatUsersInternally(
    request: users_services_private_pb.DeleteChatUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteChatUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/DeleteChatUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteChatUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/DeleteChatUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteChatUsersInternally);
  }

  methodDescriptorGetChatMessageInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/GetChatMessageInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.GetChatMessageInternallyRequest,
    users_services_private_pb.GetChatMessageInternallyResponse,
    (request: users_services_private_pb.GetChatMessageInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.GetChatMessageInternallyResponse.deserializeBinary
  );

  getChatMessageInternally(
    request: users_services_private_pb.GetChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.GetChatMessageInternallyResponse>;

  getChatMessageInternally(
    request: users_services_private_pb.GetChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetChatMessageInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.GetChatMessageInternallyResponse>;

  getChatMessageInternally(
    request: users_services_private_pb.GetChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetChatMessageInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/GetChatMessageInternally',
        request,
        metadata || {},
        this.methodDescriptorGetChatMessageInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/GetChatMessageInternally',
    request,
    metadata || {},
    this.methodDescriptorGetChatMessageInternally);
  }

  methodDescriptorListChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/ListChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.ListChatMessagesInternallyRequest,
    users_services_private_pb.ListChatMessagesInternallyResponse,
    (request: users_services_private_pb.ListChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.ListChatMessagesInternallyResponse.deserializeBinary
  );

  listChatMessagesInternally(
    request: users_services_private_pb.ListChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.ListChatMessagesInternallyResponse>;

  listChatMessagesInternally(
    request: users_services_private_pb.ListChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.ListChatMessagesInternallyResponse>;

  listChatMessagesInternally(
    request: users_services_private_pb.ListChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/ListChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorListChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/ListChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorListChatMessagesInternally);
  }

  methodDescriptorCountChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CountChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CountChatMessagesInternallyRequest,
    users_services_private_pb.CountChatMessagesInternallyResponse,
    (request: users_services_private_pb.CountChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CountChatMessagesInternallyResponse.deserializeBinary
  );

  countChatMessagesInternally(
    request: users_services_private_pb.CountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CountChatMessagesInternallyResponse>;

  countChatMessagesInternally(
    request: users_services_private_pb.CountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CountChatMessagesInternallyResponse>;

  countChatMessagesInternally(
    request: users_services_private_pb.CountChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CountChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorCountChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CountChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorCountChatMessagesInternally);
  }

  methodDescriptorCreateChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CreateChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CreateChatMessagesInternallyRequest,
    users_services_private_pb.CreateChatMessagesInternallyResponse,
    (request: users_services_private_pb.CreateChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CreateChatMessagesInternallyResponse.deserializeBinary
  );

  createChatMessagesInternally(
    request: users_services_private_pb.CreateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CreateChatMessagesInternallyResponse>;

  createChatMessagesInternally(
    request: users_services_private_pb.CreateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CreateChatMessagesInternallyResponse>;

  createChatMessagesInternally(
    request: users_services_private_pb.CreateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CreateChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CreateChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateChatMessagesInternally);
  }

  methodDescriptorUpdateChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/UpdateChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.UpdateChatMessagesInternallyRequest,
    users_services_private_pb.UpdateChatMessagesInternallyResponse,
    (request: users_services_private_pb.UpdateChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.UpdateChatMessagesInternallyResponse.deserializeBinary
  );

  updateChatMessagesInternally(
    request: users_services_private_pb.UpdateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.UpdateChatMessagesInternallyResponse>;

  updateChatMessagesInternally(
    request: users_services_private_pb.UpdateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.UpdateChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.UpdateChatMessagesInternallyResponse>;

  updateChatMessagesInternally(
    request: users_services_private_pb.UpdateChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.UpdateChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/UpdateChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/UpdateChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateChatMessagesInternally);
  }

  methodDescriptorDeleteChatMessagesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/DeleteChatMessagesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.DeleteChatMessagesInternallyRequest,
    users_services_private_pb.DeleteChatMessagesInternallyResponse,
    (request: users_services_private_pb.DeleteChatMessagesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.DeleteChatMessagesInternallyResponse.deserializeBinary
  );

  deleteChatMessagesInternally(
    request: users_services_private_pb.DeleteChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.DeleteChatMessagesInternallyResponse>;

  deleteChatMessagesInternally(
    request: users_services_private_pb.DeleteChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteChatMessagesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.DeleteChatMessagesInternallyResponse>;

  deleteChatMessagesInternally(
    request: users_services_private_pb.DeleteChatMessagesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteChatMessagesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/DeleteChatMessagesInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteChatMessagesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/DeleteChatMessagesInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteChatMessagesInternally);
  }

  methodDescriptorGetLocaleInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/GetLocaleInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.GetLocaleInternallyRequest,
    users_services_private_pb.GetLocaleInternallyResponse,
    (request: users_services_private_pb.GetLocaleInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.GetLocaleInternallyResponse.deserializeBinary
  );

  getLocaleInternally(
    request: users_services_private_pb.GetLocaleInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.GetLocaleInternallyResponse>;

  getLocaleInternally(
    request: users_services_private_pb.GetLocaleInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetLocaleInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.GetLocaleInternallyResponse>;

  getLocaleInternally(
    request: users_services_private_pb.GetLocaleInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetLocaleInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/GetLocaleInternally',
        request,
        metadata || {},
        this.methodDescriptorGetLocaleInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/GetLocaleInternally',
    request,
    metadata || {},
    this.methodDescriptorGetLocaleInternally);
  }

  methodDescriptorListLocalesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/ListLocalesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.ListLocalesInternallyRequest,
    users_services_private_pb.ListLocalesInternallyResponse,
    (request: users_services_private_pb.ListLocalesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.ListLocalesInternallyResponse.deserializeBinary
  );

  listLocalesInternally(
    request: users_services_private_pb.ListLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.ListLocalesInternallyResponse>;

  listLocalesInternally(
    request: users_services_private_pb.ListLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListLocalesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.ListLocalesInternallyResponse>;

  listLocalesInternally(
    request: users_services_private_pb.ListLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListLocalesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/ListLocalesInternally',
        request,
        metadata || {},
        this.methodDescriptorListLocalesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/ListLocalesInternally',
    request,
    metadata || {},
    this.methodDescriptorListLocalesInternally);
  }

  methodDescriptorCountLocalesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CountLocalesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CountLocalesInternallyRequest,
    users_services_private_pb.CountLocalesInternallyResponse,
    (request: users_services_private_pb.CountLocalesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CountLocalesInternallyResponse.deserializeBinary
  );

  countLocalesInternally(
    request: users_services_private_pb.CountLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CountLocalesInternallyResponse>;

  countLocalesInternally(
    request: users_services_private_pb.CountLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountLocalesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CountLocalesInternallyResponse>;

  countLocalesInternally(
    request: users_services_private_pb.CountLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountLocalesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CountLocalesInternally',
        request,
        metadata || {},
        this.methodDescriptorCountLocalesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CountLocalesInternally',
    request,
    metadata || {},
    this.methodDescriptorCountLocalesInternally);
  }

  methodDescriptorCreateLocalesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CreateLocalesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CreateLocalesInternallyRequest,
    users_services_private_pb.CreateLocalesInternallyResponse,
    (request: users_services_private_pb.CreateLocalesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CreateLocalesInternallyResponse.deserializeBinary
  );

  createLocalesInternally(
    request: users_services_private_pb.CreateLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CreateLocalesInternallyResponse>;

  createLocalesInternally(
    request: users_services_private_pb.CreateLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateLocalesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CreateLocalesInternallyResponse>;

  createLocalesInternally(
    request: users_services_private_pb.CreateLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateLocalesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CreateLocalesInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateLocalesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CreateLocalesInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateLocalesInternally);
  }

  methodDescriptorDeleteLocalesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/DeleteLocalesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.DeleteLocalesInternallyRequest,
    users_services_private_pb.DeleteLocalesInternallyResponse,
    (request: users_services_private_pb.DeleteLocalesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.DeleteLocalesInternallyResponse.deserializeBinary
  );

  deleteLocalesInternally(
    request: users_services_private_pb.DeleteLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.DeleteLocalesInternallyResponse>;

  deleteLocalesInternally(
    request: users_services_private_pb.DeleteLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteLocalesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.DeleteLocalesInternallyResponse>;

  deleteLocalesInternally(
    request: users_services_private_pb.DeleteLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteLocalesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/DeleteLocalesInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteLocalesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/DeleteLocalesInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteLocalesInternally);
  }

  methodDescriptorGetUserInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/GetUserInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.GetUserInternallyRequest,
    users_services_private_pb.GetUserInternallyResponse,
    (request: users_services_private_pb.GetUserInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.GetUserInternallyResponse.deserializeBinary
  );

  getUserInternally(
    request: users_services_private_pb.GetUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.GetUserInternallyResponse>;

  getUserInternally(
    request: users_services_private_pb.GetUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetUserInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.GetUserInternallyResponse>;

  getUserInternally(
    request: users_services_private_pb.GetUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/GetUserInternally',
        request,
        metadata || {},
        this.methodDescriptorGetUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/GetUserInternally',
    request,
    metadata || {},
    this.methodDescriptorGetUserInternally);
  }

  methodDescriptorListUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/ListUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.ListUsersInternallyRequest,
    users_services_private_pb.ListUsersInternallyResponse,
    (request: users_services_private_pb.ListUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.ListUsersInternallyResponse.deserializeBinary
  );

  listUsersInternally(
    request: users_services_private_pb.ListUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.ListUsersInternallyResponse>;

  listUsersInternally(
    request: users_services_private_pb.ListUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.ListUsersInternallyResponse>;

  listUsersInternally(
    request: users_services_private_pb.ListUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/ListUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorListUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/ListUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorListUsersInternally);
  }

  methodDescriptorCountUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CountUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CountUsersInternallyRequest,
    users_services_private_pb.CountUsersInternallyResponse,
    (request: users_services_private_pb.CountUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CountUsersInternallyResponse.deserializeBinary
  );

  countUsersInternally(
    request: users_services_private_pb.CountUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CountUsersInternallyResponse>;

  countUsersInternally(
    request: users_services_private_pb.CountUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CountUsersInternallyResponse>;

  countUsersInternally(
    request: users_services_private_pb.CountUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CountUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CountUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountUsersInternally);
  }

  methodDescriptorCreateUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CreateUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CreateUsersInternallyRequest,
    users_services_private_pb.CreateUsersInternallyResponse,
    (request: users_services_private_pb.CreateUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CreateUsersInternallyResponse.deserializeBinary
  );

  createUsersInternally(
    request: users_services_private_pb.CreateUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CreateUsersInternallyResponse>;

  createUsersInternally(
    request: users_services_private_pb.CreateUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CreateUsersInternallyResponse>;

  createUsersInternally(
    request: users_services_private_pb.CreateUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CreateUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CreateUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateUsersInternally);
  }

  methodDescriptorUpdateUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/UpdateUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.UpdateUsersInternallyRequest,
    users_services_private_pb.UpdateUsersInternallyResponse,
    (request: users_services_private_pb.UpdateUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.UpdateUsersInternallyResponse.deserializeBinary
  );

  updateUsersInternally(
    request: users_services_private_pb.UpdateUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.UpdateUsersInternallyResponse>;

  updateUsersInternally(
    request: users_services_private_pb.UpdateUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.UpdateUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.UpdateUsersInternallyResponse>;

  updateUsersInternally(
    request: users_services_private_pb.UpdateUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.UpdateUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/UpdateUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/UpdateUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateUsersInternally);
  }

  methodDescriptorDeleteUsersInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/DeleteUsersInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.DeleteUsersInternallyRequest,
    users_services_private_pb.DeleteUsersInternallyResponse,
    (request: users_services_private_pb.DeleteUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.DeleteUsersInternallyResponse.deserializeBinary
  );

  deleteUsersInternally(
    request: users_services_private_pb.DeleteUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.DeleteUsersInternallyResponse>;

  deleteUsersInternally(
    request: users_services_private_pb.DeleteUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.DeleteUsersInternallyResponse>;

  deleteUsersInternally(
    request: users_services_private_pb.DeleteUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/DeleteUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/DeleteUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteUsersInternally);
  }

  methodDescriptorGetUserRelationInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/GetUserRelationInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.GetUserRelationInternallyRequest,
    users_services_private_pb.GetUserRelationInternallyResponse,
    (request: users_services_private_pb.GetUserRelationInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.GetUserRelationInternallyResponse.deserializeBinary
  );

  getUserRelationInternally(
    request: users_services_private_pb.GetUserRelationInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.GetUserRelationInternallyResponse>;

  getUserRelationInternally(
    request: users_services_private_pb.GetUserRelationInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetUserRelationInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.GetUserRelationInternallyResponse>;

  getUserRelationInternally(
    request: users_services_private_pb.GetUserRelationInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetUserRelationInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/GetUserRelationInternally',
        request,
        metadata || {},
        this.methodDescriptorGetUserRelationInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/GetUserRelationInternally',
    request,
    metadata || {},
    this.methodDescriptorGetUserRelationInternally);
  }

  methodDescriptorListUserRelationsInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/ListUserRelationsInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.ListUserRelationsInternallyRequest,
    users_services_private_pb.ListUserRelationsInternallyResponse,
    (request: users_services_private_pb.ListUserRelationsInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.ListUserRelationsInternallyResponse.deserializeBinary
  );

  listUserRelationsInternally(
    request: users_services_private_pb.ListUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.ListUserRelationsInternallyResponse>;

  listUserRelationsInternally(
    request: users_services_private_pb.ListUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListUserRelationsInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.ListUserRelationsInternallyResponse>;

  listUserRelationsInternally(
    request: users_services_private_pb.ListUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListUserRelationsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/ListUserRelationsInternally',
        request,
        metadata || {},
        this.methodDescriptorListUserRelationsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/ListUserRelationsInternally',
    request,
    metadata || {},
    this.methodDescriptorListUserRelationsInternally);
  }

  methodDescriptorCountUserRelationsInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CountUserRelationsInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CountUserRelationsInternallyRequest,
    users_services_private_pb.CountUserRelationsInternallyResponse,
    (request: users_services_private_pb.CountUserRelationsInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CountUserRelationsInternallyResponse.deserializeBinary
  );

  countUserRelationsInternally(
    request: users_services_private_pb.CountUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CountUserRelationsInternallyResponse>;

  countUserRelationsInternally(
    request: users_services_private_pb.CountUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountUserRelationsInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CountUserRelationsInternallyResponse>;

  countUserRelationsInternally(
    request: users_services_private_pb.CountUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountUserRelationsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CountUserRelationsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountUserRelationsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CountUserRelationsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountUserRelationsInternally);
  }

  methodDescriptorCreateUserRelationsInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CreateUserRelationsInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CreateUserRelationsInternallyRequest,
    users_services_private_pb.CreateUserRelationsInternallyResponse,
    (request: users_services_private_pb.CreateUserRelationsInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CreateUserRelationsInternallyResponse.deserializeBinary
  );

  createUserRelationsInternally(
    request: users_services_private_pb.CreateUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CreateUserRelationsInternallyResponse>;

  createUserRelationsInternally(
    request: users_services_private_pb.CreateUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateUserRelationsInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CreateUserRelationsInternallyResponse>;

  createUserRelationsInternally(
    request: users_services_private_pb.CreateUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateUserRelationsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CreateUserRelationsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateUserRelationsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CreateUserRelationsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateUserRelationsInternally);
  }

  methodDescriptorDeleteUserRelationsInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/DeleteUserRelationsInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.DeleteUserRelationsInternallyRequest,
    users_services_private_pb.DeleteUserRelationsInternallyResponse,
    (request: users_services_private_pb.DeleteUserRelationsInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.DeleteUserRelationsInternallyResponse.deserializeBinary
  );

  deleteUserRelationsInternally(
    request: users_services_private_pb.DeleteUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.DeleteUserRelationsInternallyResponse>;

  deleteUserRelationsInternally(
    request: users_services_private_pb.DeleteUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteUserRelationsInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.DeleteUserRelationsInternallyResponse>;

  deleteUserRelationsInternally(
    request: users_services_private_pb.DeleteUserRelationsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteUserRelationsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/DeleteUserRelationsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteUserRelationsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/DeleteUserRelationsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteUserRelationsInternally);
  }

  methodDescriptorGetUserLocaleInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/GetUserLocaleInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.GetUserLocaleInternallyRequest,
    users_services_private_pb.GetUserLocaleInternallyResponse,
    (request: users_services_private_pb.GetUserLocaleInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.GetUserLocaleInternallyResponse.deserializeBinary
  );

  getUserLocaleInternally(
    request: users_services_private_pb.GetUserLocaleInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.GetUserLocaleInternallyResponse>;

  getUserLocaleInternally(
    request: users_services_private_pb.GetUserLocaleInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetUserLocaleInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.GetUserLocaleInternallyResponse>;

  getUserLocaleInternally(
    request: users_services_private_pb.GetUserLocaleInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.GetUserLocaleInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/GetUserLocaleInternally',
        request,
        metadata || {},
        this.methodDescriptorGetUserLocaleInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/GetUserLocaleInternally',
    request,
    metadata || {},
    this.methodDescriptorGetUserLocaleInternally);
  }

  methodDescriptorListUserLocalesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/ListUserLocalesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.ListUserLocalesInternallyRequest,
    users_services_private_pb.ListUserLocalesInternallyResponse,
    (request: users_services_private_pb.ListUserLocalesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.ListUserLocalesInternallyResponse.deserializeBinary
  );

  listUserLocalesInternally(
    request: users_services_private_pb.ListUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.ListUserLocalesInternallyResponse>;

  listUserLocalesInternally(
    request: users_services_private_pb.ListUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListUserLocalesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.ListUserLocalesInternallyResponse>;

  listUserLocalesInternally(
    request: users_services_private_pb.ListUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.ListUserLocalesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/ListUserLocalesInternally',
        request,
        metadata || {},
        this.methodDescriptorListUserLocalesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/ListUserLocalesInternally',
    request,
    metadata || {},
    this.methodDescriptorListUserLocalesInternally);
  }

  methodDescriptorCountUserLocalesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CountUserLocalesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CountUserLocalesInternallyRequest,
    users_services_private_pb.CountUserLocalesInternallyResponse,
    (request: users_services_private_pb.CountUserLocalesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CountUserLocalesInternallyResponse.deserializeBinary
  );

  countUserLocalesInternally(
    request: users_services_private_pb.CountUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CountUserLocalesInternallyResponse>;

  countUserLocalesInternally(
    request: users_services_private_pb.CountUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountUserLocalesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CountUserLocalesInternallyResponse>;

  countUserLocalesInternally(
    request: users_services_private_pb.CountUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CountUserLocalesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CountUserLocalesInternally',
        request,
        metadata || {},
        this.methodDescriptorCountUserLocalesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CountUserLocalesInternally',
    request,
    metadata || {},
    this.methodDescriptorCountUserLocalesInternally);
  }

  methodDescriptorCreateUserLocalesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/CreateUserLocalesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.CreateUserLocalesInternallyRequest,
    users_services_private_pb.CreateUserLocalesInternallyResponse,
    (request: users_services_private_pb.CreateUserLocalesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.CreateUserLocalesInternallyResponse.deserializeBinary
  );

  createUserLocalesInternally(
    request: users_services_private_pb.CreateUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.CreateUserLocalesInternallyResponse>;

  createUserLocalesInternally(
    request: users_services_private_pb.CreateUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateUserLocalesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.CreateUserLocalesInternallyResponse>;

  createUserLocalesInternally(
    request: users_services_private_pb.CreateUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.CreateUserLocalesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/CreateUserLocalesInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateUserLocalesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/CreateUserLocalesInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateUserLocalesInternally);
  }

  methodDescriptorDeleteUserLocalesInternally = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PrivateService/DeleteUserLocalesInternally',
    grpcWeb.MethodType.UNARY,
    users_services_private_pb.DeleteUserLocalesInternallyRequest,
    users_services_private_pb.DeleteUserLocalesInternallyResponse,
    (request: users_services_private_pb.DeleteUserLocalesInternallyRequest) => {
      return request.serializeBinary();
    },
    users_services_private_pb.DeleteUserLocalesInternallyResponse.deserializeBinary
  );

  deleteUserLocalesInternally(
    request: users_services_private_pb.DeleteUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_private_pb.DeleteUserLocalesInternallyResponse>;

  deleteUserLocalesInternally(
    request: users_services_private_pb.DeleteUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteUserLocalesInternallyResponse) => void): grpcWeb.ClientReadableStream<users_services_private_pb.DeleteUserLocalesInternallyResponse>;

  deleteUserLocalesInternally(
    request: users_services_private_pb.DeleteUserLocalesInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_private_pb.DeleteUserLocalesInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PrivateService/DeleteUserLocalesInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteUserLocalesInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PrivateService/DeleteUserLocalesInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteUserLocalesInternally);
  }

}

