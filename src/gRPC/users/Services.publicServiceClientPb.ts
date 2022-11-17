/**
 * @fileoverview gRPC-Web generated client stub for users.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as users_services_public_pb from '../users/services.public_pb';


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

  methodDescriptorGetChatInfo = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/GetChatInfo',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.GetChatInfoRequest,
    users_services_public_pb.GetChatInfoResponse,
    (request: users_services_public_pb.GetChatInfoRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.GetChatInfoResponse.deserializeBinary
  );

  getChatInfo(
    request: users_services_public_pb.GetChatInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.GetChatInfoResponse>;

  getChatInfo(
    request: users_services_public_pb.GetChatInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.GetChatInfoResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.GetChatInfoResponse>;

  getChatInfo(
    request: users_services_public_pb.GetChatInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.GetChatInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/GetChatInfo',
        request,
        metadata || {},
        this.methodDescriptorGetChatInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/GetChatInfo',
    request,
    metadata || {},
    this.methodDescriptorGetChatInfo);
  }

  methodDescriptorGetChatState = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/GetChatState',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.GetChatStateRequest,
    users_services_public_pb.GetChatStateResponse,
    (request: users_services_public_pb.GetChatStateRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.GetChatStateResponse.deserializeBinary
  );

  getChatState(
    request: users_services_public_pb.GetChatStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.GetChatStateResponse>;

  getChatState(
    request: users_services_public_pb.GetChatStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.GetChatStateResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.GetChatStateResponse>;

  getChatState(
    request: users_services_public_pb.GetChatStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.GetChatStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/GetChatState',
        request,
        metadata || {},
        this.methodDescriptorGetChatState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/GetChatState',
    request,
    metadata || {},
    this.methodDescriptorGetChatState);
  }

  methodDescriptorListChats = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/ListChats',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.ListChatsRequest,
    users_services_public_pb.ListChatsResponse,
    (request: users_services_public_pb.ListChatsRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.ListChatsResponse.deserializeBinary
  );

  listChats(
    request: users_services_public_pb.ListChatsRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.ListChatsResponse>;

  listChats(
    request: users_services_public_pb.ListChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ListChatsResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.ListChatsResponse>;

  listChats(
    request: users_services_public_pb.ListChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ListChatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/ListChats',
        request,
        metadata || {},
        this.methodDescriptorListChats,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/ListChats',
    request,
    metadata || {},
    this.methodDescriptorListChats);
  }

  methodDescriptorCountChats = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/CountChats',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.CountChatsRequest,
    users_services_public_pb.CountChatsResponse,
    (request: users_services_public_pb.CountChatsRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.CountChatsResponse.deserializeBinary
  );

  countChats(
    request: users_services_public_pb.CountChatsRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.CountChatsResponse>;

  countChats(
    request: users_services_public_pb.CountChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CountChatsResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.CountChatsResponse>;

  countChats(
    request: users_services_public_pb.CountChatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CountChatsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/CountChats',
        request,
        metadata || {},
        this.methodDescriptorCountChats,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/CountChats',
    request,
    metadata || {},
    this.methodDescriptorCountChats);
  }

  methodDescriptorListChatMessages = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/ListChatMessages',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.ListChatMessagesRequest,
    users_services_public_pb.ListChatMessagesResponse,
    (request: users_services_public_pb.ListChatMessagesRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.ListChatMessagesResponse.deserializeBinary
  );

  listChatMessages(
    request: users_services_public_pb.ListChatMessagesRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.ListChatMessagesResponse>;

  listChatMessages(
    request: users_services_public_pb.ListChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ListChatMessagesResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.ListChatMessagesResponse>;

  listChatMessages(
    request: users_services_public_pb.ListChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ListChatMessagesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/ListChatMessages',
        request,
        metadata || {},
        this.methodDescriptorListChatMessages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/ListChatMessages',
    request,
    metadata || {},
    this.methodDescriptorListChatMessages);
  }

  methodDescriptorCountChatMessages = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/CountChatMessages',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.CountChatMessagesRequest,
    users_services_public_pb.CountChatMessagesResponse,
    (request: users_services_public_pb.CountChatMessagesRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.CountChatMessagesResponse.deserializeBinary
  );

  countChatMessages(
    request: users_services_public_pb.CountChatMessagesRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.CountChatMessagesResponse>;

  countChatMessages(
    request: users_services_public_pb.CountChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CountChatMessagesResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.CountChatMessagesResponse>;

  countChatMessages(
    request: users_services_public_pb.CountChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CountChatMessagesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/CountChatMessages',
        request,
        metadata || {},
        this.methodDescriptorCountChatMessages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/CountChatMessages',
    request,
    metadata || {},
    this.methodDescriptorCountChatMessages);
  }

  methodDescriptorUpdateChatMessage = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/UpdateChatMessage',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.UpdateChatMessageRequest,
    users_services_public_pb.UpdateChatMessageResponse,
    (request: users_services_public_pb.UpdateChatMessageRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.UpdateChatMessageResponse.deserializeBinary
  );

  updateChatMessage(
    request: users_services_public_pb.UpdateChatMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.UpdateChatMessageResponse>;

  updateChatMessage(
    request: users_services_public_pb.UpdateChatMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.UpdateChatMessageResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.UpdateChatMessageResponse>;

  updateChatMessage(
    request: users_services_public_pb.UpdateChatMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.UpdateChatMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/UpdateChatMessage',
        request,
        metadata || {},
        this.methodDescriptorUpdateChatMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/UpdateChatMessage',
    request,
    metadata || {},
    this.methodDescriptorUpdateChatMessage);
  }

  methodDescriptorDeleteChatMessage = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/DeleteChatMessage',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.DeleteChatMessageRequest,
    users_services_public_pb.DeleteChatMessageResponse,
    (request: users_services_public_pb.DeleteChatMessageRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.DeleteChatMessageResponse.deserializeBinary
  );

  deleteChatMessage(
    request: users_services_public_pb.DeleteChatMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.DeleteChatMessageResponse>;

  deleteChatMessage(
    request: users_services_public_pb.DeleteChatMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.DeleteChatMessageResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.DeleteChatMessageResponse>;

  deleteChatMessage(
    request: users_services_public_pb.DeleteChatMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.DeleteChatMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/DeleteChatMessage',
        request,
        metadata || {},
        this.methodDescriptorDeleteChatMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/DeleteChatMessage',
    request,
    metadata || {},
    this.methodDescriptorDeleteChatMessage);
  }

  methodDescriptorGetUserInfo = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/GetUserInfo',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.GetUserInfoRequest,
    users_services_public_pb.GetUserInfoResponse,
    (request: users_services_public_pb.GetUserInfoRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.GetUserInfoResponse.deserializeBinary
  );

  getUserInfo(
    request: users_services_public_pb.GetUserInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.GetUserInfoResponse>;

  getUserInfo(
    request: users_services_public_pb.GetUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.GetUserInfoResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.GetUserInfoResponse>;

  getUserInfo(
    request: users_services_public_pb.GetUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.GetUserInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/GetUserInfo',
        request,
        metadata || {},
        this.methodDescriptorGetUserInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/GetUserInfo',
    request,
    metadata || {},
    this.methodDescriptorGetUserInfo);
  }

  methodDescriptorListUsers = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/ListUsers',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.ListUsersRequest,
    users_services_public_pb.ListUsersResponse,
    (request: users_services_public_pb.ListUsersRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.ListUsersResponse.deserializeBinary
  );

  listUsers(
    request: users_services_public_pb.ListUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.ListUsersResponse>;

  listUsers(
    request: users_services_public_pb.ListUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ListUsersResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.ListUsersResponse>;

  listUsers(
    request: users_services_public_pb.ListUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ListUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/ListUsers',
        request,
        metadata || {},
        this.methodDescriptorListUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/ListUsers',
    request,
    metadata || {},
    this.methodDescriptorListUsers);
  }

  methodDescriptorCountUsers = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/CountUsers',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.CountUsersRequest,
    users_services_public_pb.CountUsersResponse,
    (request: users_services_public_pb.CountUsersRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.CountUsersResponse.deserializeBinary
  );

  countUsers(
    request: users_services_public_pb.CountUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.CountUsersResponse>;

  countUsers(
    request: users_services_public_pb.CountUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CountUsersResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.CountUsersResponse>;

  countUsers(
    request: users_services_public_pb.CountUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CountUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/CountUsers',
        request,
        metadata || {},
        this.methodDescriptorCountUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/CountUsers',
    request,
    metadata || {},
    this.methodDescriptorCountUsers);
  }

  methodDescriptorSearchUsers = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/SearchUsers',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.SearchUsersRequest,
    users_services_public_pb.SearchUsersResponse,
    (request: users_services_public_pb.SearchUsersRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.SearchUsersResponse.deserializeBinary
  );

  searchUsers(
    request: users_services_public_pb.SearchUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.SearchUsersResponse>;

  searchUsers(
    request: users_services_public_pb.SearchUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.SearchUsersResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.SearchUsersResponse>;

  searchUsers(
    request: users_services_public_pb.SearchUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.SearchUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/SearchUsers',
        request,
        metadata || {},
        this.methodDescriptorSearchUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/SearchUsers',
    request,
    metadata || {},
    this.methodDescriptorSearchUsers);
  }

  methodDescriptorSuggestUsers = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/SuggestUsers',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.SuggestUsersRequest,
    users_services_public_pb.SuggestUsersResponse,
    (request: users_services_public_pb.SuggestUsersRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.SuggestUsersResponse.deserializeBinary
  );

  suggestUsers(
    request: users_services_public_pb.SuggestUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.SuggestUsersResponse>;

  suggestUsers(
    request: users_services_public_pb.SuggestUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.SuggestUsersResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.SuggestUsersResponse>;

  suggestUsers(
    request: users_services_public_pb.SuggestUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.SuggestUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/SuggestUsers',
        request,
        metadata || {},
        this.methodDescriptorSuggestUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/SuggestUsers',
    request,
    metadata || {},
    this.methodDescriptorSuggestUsers);
  }

  methodDescriptorCreateUser = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/CreateUser',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.CreateUserRequest,
    users_services_public_pb.CreateUserResponse,
    (request: users_services_public_pb.CreateUserRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.CreateUserResponse.deserializeBinary
  );

  createUser(
    request: users_services_public_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.CreateUserResponse>;

  createUser(
    request: users_services_public_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CreateUserResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.CreateUserResponse>;

  createUser(
    request: users_services_public_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CreateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/CreateUser',
        request,
        metadata || {},
        this.methodDescriptorCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/CreateUser',
    request,
    metadata || {},
    this.methodDescriptorCreateUser);
  }

  methodDescriptorUpdateUser = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/UpdateUser',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.UpdateUserRequest,
    users_services_public_pb.UpdateUserResponse,
    (request: users_services_public_pb.UpdateUserRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.UpdateUserResponse.deserializeBinary
  );

  updateUser(
    request: users_services_public_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.UpdateUserResponse>;

  updateUser(
    request: users_services_public_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.UpdateUserResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.UpdateUserResponse>;

  updateUser(
    request: users_services_public_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.UpdateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/UpdateUser',
        request,
        metadata || {},
        this.methodDescriptorUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/UpdateUser',
    request,
    metadata || {},
    this.methodDescriptorUpdateUser);
  }

  methodDescriptorDeleteUser = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/DeleteUser',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.DeleteUserRequest,
    users_services_public_pb.DeleteUserResponse,
    (request: users_services_public_pb.DeleteUserRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.DeleteUserResponse.deserializeBinary
  );

  deleteUser(
    request: users_services_public_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.DeleteUserResponse>;

  deleteUser(
    request: users_services_public_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.DeleteUserResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.DeleteUserResponse>;

  deleteUser(
    request: users_services_public_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.DeleteUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/DeleteUser',
        request,
        metadata || {},
        this.methodDescriptorDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/DeleteUser',
    request,
    metadata || {},
    this.methodDescriptorDeleteUser);
  }

  methodDescriptorActivateUser = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/ActivateUser',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.ActivateUserRequest,
    users_services_public_pb.ActivateUserResponse,
    (request: users_services_public_pb.ActivateUserRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.ActivateUserResponse.deserializeBinary
  );

  activateUser(
    request: users_services_public_pb.ActivateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.ActivateUserResponse>;

  activateUser(
    request: users_services_public_pb.ActivateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ActivateUserResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.ActivateUserResponse>;

  activateUser(
    request: users_services_public_pb.ActivateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ActivateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/ActivateUser',
        request,
        metadata || {},
        this.methodDescriptorActivateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/ActivateUser',
    request,
    metadata || {},
    this.methodDescriptorActivateUser);
  }

  methodDescriptorTokenizeUser = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/TokenizeUser',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.TokenizeUserRequest,
    users_services_public_pb.TokenizeUserResponse,
    (request: users_services_public_pb.TokenizeUserRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.TokenizeUserResponse.deserializeBinary
  );

  tokenizeUser(
    request: users_services_public_pb.TokenizeUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.TokenizeUserResponse>;

  tokenizeUser(
    request: users_services_public_pb.TokenizeUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.TokenizeUserResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.TokenizeUserResponse>;

  tokenizeUser(
    request: users_services_public_pb.TokenizeUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.TokenizeUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/TokenizeUser',
        request,
        metadata || {},
        this.methodDescriptorTokenizeUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/TokenizeUser',
    request,
    metadata || {},
    this.methodDescriptorTokenizeUser);
  }

  methodDescriptorResetUserPassword = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/ResetUserPassword',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.ResetUserPasswordRequest,
    users_services_public_pb.ResetUserPasswordResponse,
    (request: users_services_public_pb.ResetUserPasswordRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.ResetUserPasswordResponse.deserializeBinary
  );

  resetUserPassword(
    request: users_services_public_pb.ResetUserPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.ResetUserPasswordResponse>;

  resetUserPassword(
    request: users_services_public_pb.ResetUserPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ResetUserPasswordResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.ResetUserPasswordResponse>;

  resetUserPassword(
    request: users_services_public_pb.ResetUserPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ResetUserPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/ResetUserPassword',
        request,
        metadata || {},
        this.methodDescriptorResetUserPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/ResetUserPassword',
    request,
    metadata || {},
    this.methodDescriptorResetUserPassword);
  }

  methodDescriptorRemindUserPassword = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/RemindUserPassword',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.RemindUserPasswordRequest,
    users_services_public_pb.RemindUserPasswordResponse,
    (request: users_services_public_pb.RemindUserPasswordRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.RemindUserPasswordResponse.deserializeBinary
  );

  remindUserPassword(
    request: users_services_public_pb.RemindUserPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.RemindUserPasswordResponse>;

  remindUserPassword(
    request: users_services_public_pb.RemindUserPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.RemindUserPasswordResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.RemindUserPasswordResponse>;

  remindUserPassword(
    request: users_services_public_pb.RemindUserPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.RemindUserPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/RemindUserPassword',
        request,
        metadata || {},
        this.methodDescriptorRemindUserPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/RemindUserPassword',
    request,
    metadata || {},
    this.methodDescriptorRemindUserPassword);
  }

  methodDescriptorListUserRelations = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/ListUserRelations',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.ListUserRelationsRequest,
    users_services_public_pb.ListUserRelationsResponse,
    (request: users_services_public_pb.ListUserRelationsRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.ListUserRelationsResponse.deserializeBinary
  );

  listUserRelations(
    request: users_services_public_pb.ListUserRelationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.ListUserRelationsResponse>;

  listUserRelations(
    request: users_services_public_pb.ListUserRelationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ListUserRelationsResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.ListUserRelationsResponse>;

  listUserRelations(
    request: users_services_public_pb.ListUserRelationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.ListUserRelationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/ListUserRelations',
        request,
        metadata || {},
        this.methodDescriptorListUserRelations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/ListUserRelations',
    request,
    metadata || {},
    this.methodDescriptorListUserRelations);
  }

  methodDescriptorCountUserRelations = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/CountUserRelations',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.CountUserRelationsRequest,
    users_services_public_pb.CountUserRelationsResponse,
    (request: users_services_public_pb.CountUserRelationsRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.CountUserRelationsResponse.deserializeBinary
  );

  countUserRelations(
    request: users_services_public_pb.CountUserRelationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.CountUserRelationsResponse>;

  countUserRelations(
    request: users_services_public_pb.CountUserRelationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CountUserRelationsResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.CountUserRelationsResponse>;

  countUserRelations(
    request: users_services_public_pb.CountUserRelationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CountUserRelationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/CountUserRelations',
        request,
        metadata || {},
        this.methodDescriptorCountUserRelations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/CountUserRelations',
    request,
    metadata || {},
    this.methodDescriptorCountUserRelations);
  }

  methodDescriptorCreateUserRelation = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/CreateUserRelation',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.CreateUserRelationRequest,
    users_services_public_pb.CreateUserRelationResponse,
    (request: users_services_public_pb.CreateUserRelationRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.CreateUserRelationResponse.deserializeBinary
  );

  createUserRelation(
    request: users_services_public_pb.CreateUserRelationRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.CreateUserRelationResponse>;

  createUserRelation(
    request: users_services_public_pb.CreateUserRelationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CreateUserRelationResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.CreateUserRelationResponse>;

  createUserRelation(
    request: users_services_public_pb.CreateUserRelationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.CreateUserRelationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/CreateUserRelation',
        request,
        metadata || {},
        this.methodDescriptorCreateUserRelation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/CreateUserRelation',
    request,
    metadata || {},
    this.methodDescriptorCreateUserRelation);
  }

  methodDescriptorDeleteUserRelation = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/DeleteUserRelation',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.DeleteUserRelationRequest,
    users_services_public_pb.DeleteUserRelationResponse,
    (request: users_services_public_pb.DeleteUserRelationRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.DeleteUserRelationResponse.deserializeBinary
  );

  deleteUserRelation(
    request: users_services_public_pb.DeleteUserRelationRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.DeleteUserRelationResponse>;

  deleteUserRelation(
    request: users_services_public_pb.DeleteUserRelationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.DeleteUserRelationResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.DeleteUserRelationResponse>;

  deleteUserRelation(
    request: users_services_public_pb.DeleteUserRelationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.DeleteUserRelationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/DeleteUserRelation',
        request,
        metadata || {},
        this.methodDescriptorDeleteUserRelation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/DeleteUserRelation',
    request,
    metadata || {},
    this.methodDescriptorDeleteUserRelation);
  }

  methodDescriptorAcceptUserRelation = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/AcceptUserRelation',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.AcceptUserRelationRequest,
    users_services_public_pb.AcceptUserRelationResponse,
    (request: users_services_public_pb.AcceptUserRelationRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.AcceptUserRelationResponse.deserializeBinary
  );

  acceptUserRelation(
    request: users_services_public_pb.AcceptUserRelationRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.AcceptUserRelationResponse>;

  acceptUserRelation(
    request: users_services_public_pb.AcceptUserRelationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.AcceptUserRelationResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.AcceptUserRelationResponse>;

  acceptUserRelation(
    request: users_services_public_pb.AcceptUserRelationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.AcceptUserRelationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/AcceptUserRelation',
        request,
        metadata || {},
        this.methodDescriptorAcceptUserRelation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/AcceptUserRelation',
    request,
    metadata || {},
    this.methodDescriptorAcceptUserRelation);
  }

  methodDescriptorDeclineUserRelation = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/DeclineUserRelation',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.DeclineUserRelationRequest,
    users_services_public_pb.DeclineUserRelationResponse,
    (request: users_services_public_pb.DeclineUserRelationRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.DeclineUserRelationResponse.deserializeBinary
  );

  declineUserRelation(
    request: users_services_public_pb.DeclineUserRelationRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.DeclineUserRelationResponse>;

  declineUserRelation(
    request: users_services_public_pb.DeclineUserRelationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.DeclineUserRelationResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.DeclineUserRelationResponse>;

  declineUserRelation(
    request: users_services_public_pb.DeclineUserRelationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.DeclineUserRelationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/DeclineUserRelation',
        request,
        metadata || {},
        this.methodDescriptorDeclineUserRelation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/DeclineUserRelation',
    request,
    metadata || {},
    this.methodDescriptorDeclineUserRelation);
  }

  methodDescriptorTokenizeStorageObject = new grpcWeb.MethodDescriptor(
    '/users.api.v1.PublicService/TokenizeStorageObject',
    grpcWeb.MethodType.UNARY,
    users_services_public_pb.TokenizeStorageObjectRequest,
    users_services_public_pb.TokenizeStorageObjectResponse,
    (request: users_services_public_pb.TokenizeStorageObjectRequest) => {
      return request.serializeBinary();
    },
    users_services_public_pb.TokenizeStorageObjectResponse.deserializeBinary
  );

  tokenizeStorageObject(
    request: users_services_public_pb.TokenizeStorageObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<users_services_public_pb.TokenizeStorageObjectResponse>;

  tokenizeStorageObject(
    request: users_services_public_pb.TokenizeStorageObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: users_services_public_pb.TokenizeStorageObjectResponse) => void): grpcWeb.ClientReadableStream<users_services_public_pb.TokenizeStorageObjectResponse>;

  tokenizeStorageObject(
    request: users_services_public_pb.TokenizeStorageObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: users_services_public_pb.TokenizeStorageObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/users.api.v1.PublicService/TokenizeStorageObject',
        request,
        metadata || {},
        this.methodDescriptorTokenizeStorageObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/users.api.v1.PublicService/TokenizeStorageObject',
    request,
    metadata || {},
    this.methodDescriptorTokenizeStorageObject);
  }

}

