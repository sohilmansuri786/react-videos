/**
 * @fileoverview gRPC-Web generated client stub for rooms.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as rooms_services_public_pb from '../rooms/services.public_pb';


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
    '/rooms.api.v1.PublicService/GetChatInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetChatInfoRequest,
    rooms_services_public_pb.GetChatInfoResponse,
    (request: rooms_services_public_pb.GetChatInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetChatInfoResponse.deserializeBinary
  );

  getChatInfo(
    request: rooms_services_public_pb.GetChatInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetChatInfoResponse>;

  getChatInfo(
    request: rooms_services_public_pb.GetChatInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetChatInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetChatInfoResponse>;

  getChatInfo(
    request: rooms_services_public_pb.GetChatInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetChatInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetChatInfo',
        request,
        metadata || {},
        this.methodDescriptorGetChatInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetChatInfo',
    request,
    metadata || {},
    this.methodDescriptorGetChatInfo);
  }

  methodDescriptorGetChatState = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetChatState',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetChatStateRequest,
    rooms_services_public_pb.GetChatStateResponse,
    (request: rooms_services_public_pb.GetChatStateRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetChatStateResponse.deserializeBinary
  );

  getChatState(
    request: rooms_services_public_pb.GetChatStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetChatStateResponse>;

  getChatState(
    request: rooms_services_public_pb.GetChatStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetChatStateResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetChatStateResponse>;

  getChatState(
    request: rooms_services_public_pb.GetChatStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetChatStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetChatState',
        request,
        metadata || {},
        this.methodDescriptorGetChatState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetChatState',
    request,
    metadata || {},
    this.methodDescriptorGetChatState);
  }

  methodDescriptorUpdateChat = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/UpdateChat',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.UpdateChatRequest,
    rooms_services_public_pb.UpdateChatResponse,
    (request: rooms_services_public_pb.UpdateChatRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.UpdateChatResponse.deserializeBinary
  );

  updateChat(
    request: rooms_services_public_pb.UpdateChatRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.UpdateChatResponse>;

  updateChat(
    request: rooms_services_public_pb.UpdateChatRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateChatResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.UpdateChatResponse>;

  updateChat(
    request: rooms_services_public_pb.UpdateChatRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateChatResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/UpdateChat',
        request,
        metadata || {},
        this.methodDescriptorUpdateChat,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/UpdateChat',
    request,
    metadata || {},
    this.methodDescriptorUpdateChat);
  }

  methodDescriptorGetChatMessageInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetChatMessageInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetChatMessageInfoRequest,
    rooms_services_public_pb.GetChatMessageInfoResponse,
    (request: rooms_services_public_pb.GetChatMessageInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetChatMessageInfoResponse.deserializeBinary
  );

  getChatMessageInfo(
    request: rooms_services_public_pb.GetChatMessageInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetChatMessageInfoResponse>;

  getChatMessageInfo(
    request: rooms_services_public_pb.GetChatMessageInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetChatMessageInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetChatMessageInfoResponse>;

  getChatMessageInfo(
    request: rooms_services_public_pb.GetChatMessageInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetChatMessageInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetChatMessageInfo',
        request,
        metadata || {},
        this.methodDescriptorGetChatMessageInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetChatMessageInfo',
    request,
    metadata || {},
    this.methodDescriptorGetChatMessageInfo);
  }

  methodDescriptorListChatMessages = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListChatMessages',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListChatMessagesRequest,
    rooms_services_public_pb.ListChatMessagesResponse,
    (request: rooms_services_public_pb.ListChatMessagesRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListChatMessagesResponse.deserializeBinary
  );

  listChatMessages(
    request: rooms_services_public_pb.ListChatMessagesRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListChatMessagesResponse>;

  listChatMessages(
    request: rooms_services_public_pb.ListChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListChatMessagesResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListChatMessagesResponse>;

  listChatMessages(
    request: rooms_services_public_pb.ListChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListChatMessagesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListChatMessages',
        request,
        metadata || {},
        this.methodDescriptorListChatMessages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListChatMessages',
    request,
    metadata || {},
    this.methodDescriptorListChatMessages);
  }

  methodDescriptorCountChatMessages = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountChatMessages',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountChatMessagesRequest,
    rooms_services_public_pb.CountChatMessagesResponse,
    (request: rooms_services_public_pb.CountChatMessagesRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountChatMessagesResponse.deserializeBinary
  );

  countChatMessages(
    request: rooms_services_public_pb.CountChatMessagesRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountChatMessagesResponse>;

  countChatMessages(
    request: rooms_services_public_pb.CountChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountChatMessagesResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountChatMessagesResponse>;

  countChatMessages(
    request: rooms_services_public_pb.CountChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountChatMessagesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountChatMessages',
        request,
        metadata || {},
        this.methodDescriptorCountChatMessages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountChatMessages',
    request,
    metadata || {},
    this.methodDescriptorCountChatMessages);
  }

  methodDescriptorUpdateChatMessage = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/UpdateChatMessage',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.UpdateChatMessageRequest,
    rooms_services_public_pb.UpdateChatMessageResponse,
    (request: rooms_services_public_pb.UpdateChatMessageRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.UpdateChatMessageResponse.deserializeBinary
  );

  updateChatMessage(
    request: rooms_services_public_pb.UpdateChatMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.UpdateChatMessageResponse>;

  updateChatMessage(
    request: rooms_services_public_pb.UpdateChatMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateChatMessageResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.UpdateChatMessageResponse>;

  updateChatMessage(
    request: rooms_services_public_pb.UpdateChatMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateChatMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/UpdateChatMessage',
        request,
        metadata || {},
        this.methodDescriptorUpdateChatMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/UpdateChatMessage',
    request,
    metadata || {},
    this.methodDescriptorUpdateChatMessage);
  }

  methodDescriptorDeleteChatMessage = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/DeleteChatMessage',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.DeleteChatMessageRequest,
    rooms_services_public_pb.DeleteChatMessageResponse,
    (request: rooms_services_public_pb.DeleteChatMessageRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.DeleteChatMessageResponse.deserializeBinary
  );

  deleteChatMessage(
    request: rooms_services_public_pb.DeleteChatMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.DeleteChatMessageResponse>;

  deleteChatMessage(
    request: rooms_services_public_pb.DeleteChatMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteChatMessageResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.DeleteChatMessageResponse>;

  deleteChatMessage(
    request: rooms_services_public_pb.DeleteChatMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteChatMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/DeleteChatMessage',
        request,
        metadata || {},
        this.methodDescriptorDeleteChatMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/DeleteChatMessage',
    request,
    metadata || {},
    this.methodDescriptorDeleteChatMessage);
  }

  methodDescriptorClearChatMessages = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ClearChatMessages',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ClearChatMessagesRequest,
    rooms_services_public_pb.ClearChatMessagesResponse,
    (request: rooms_services_public_pb.ClearChatMessagesRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ClearChatMessagesResponse.deserializeBinary
  );

  clearChatMessages(
    request: rooms_services_public_pb.ClearChatMessagesRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ClearChatMessagesResponse>;

  clearChatMessages(
    request: rooms_services_public_pb.ClearChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ClearChatMessagesResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ClearChatMessagesResponse>;

  clearChatMessages(
    request: rooms_services_public_pb.ClearChatMessagesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ClearChatMessagesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ClearChatMessages',
        request,
        metadata || {},
        this.methodDescriptorClearChatMessages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ClearChatMessages',
    request,
    metadata || {},
    this.methodDescriptorClearChatMessages);
  }

  methodDescriptorGetUserTicketInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetUserTicketInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetUserTicketInfoRequest,
    rooms_services_public_pb.GetUserTicketInfoResponse,
    (request: rooms_services_public_pb.GetUserTicketInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetUserTicketInfoResponse.deserializeBinary
  );

  getUserTicketInfo(
    request: rooms_services_public_pb.GetUserTicketInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetUserTicketInfoResponse>;

  getUserTicketInfo(
    request: rooms_services_public_pb.GetUserTicketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetUserTicketInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetUserTicketInfoResponse>;

  getUserTicketInfo(
    request: rooms_services_public_pb.GetUserTicketInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetUserTicketInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetUserTicketInfo',
        request,
        metadata || {},
        this.methodDescriptorGetUserTicketInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetUserTicketInfo',
    request,
    metadata || {},
    this.methodDescriptorGetUserTicketInfo);
  }

  methodDescriptorListUserTickets = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListUserTickets',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListUserTicketsRequest,
    rooms_services_public_pb.ListUserTicketsResponse,
    (request: rooms_services_public_pb.ListUserTicketsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListUserTicketsResponse.deserializeBinary
  );

  listUserTickets(
    request: rooms_services_public_pb.ListUserTicketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListUserTicketsResponse>;

  listUserTickets(
    request: rooms_services_public_pb.ListUserTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListUserTicketsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListUserTicketsResponse>;

  listUserTickets(
    request: rooms_services_public_pb.ListUserTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListUserTicketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListUserTickets',
        request,
        metadata || {},
        this.methodDescriptorListUserTickets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListUserTickets',
    request,
    metadata || {},
    this.methodDescriptorListUserTickets);
  }

  methodDescriptorCountUserTickets = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountUserTickets',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountUserTicketsRequest,
    rooms_services_public_pb.CountUserTicketsResponse,
    (request: rooms_services_public_pb.CountUserTicketsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountUserTicketsResponse.deserializeBinary
  );

  countUserTickets(
    request: rooms_services_public_pb.CountUserTicketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountUserTicketsResponse>;

  countUserTickets(
    request: rooms_services_public_pb.CountUserTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountUserTicketsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountUserTicketsResponse>;

  countUserTickets(
    request: rooms_services_public_pb.CountUserTicketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountUserTicketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountUserTickets',
        request,
        metadata || {},
        this.methodDescriptorCountUserTickets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountUserTickets',
    request,
    metadata || {},
    this.methodDescriptorCountUserTickets);
  }

  methodDescriptorGetRoomInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetRoomInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetRoomInfoRequest,
    rooms_services_public_pb.GetRoomInfoResponse,
    (request: rooms_services_public_pb.GetRoomInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetRoomInfoResponse.deserializeBinary
  );

  getRoomInfo(
    request: rooms_services_public_pb.GetRoomInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetRoomInfoResponse>;

  getRoomInfo(
    request: rooms_services_public_pb.GetRoomInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetRoomInfoResponse>;

  getRoomInfo(
    request: rooms_services_public_pb.GetRoomInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetRoomInfo',
        request,
        metadata || {},
        this.methodDescriptorGetRoomInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetRoomInfo',
    request,
    metadata || {},
    this.methodDescriptorGetRoomInfo);
  }

  methodDescriptorGetRoomState = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetRoomState',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetRoomStateRequest,
    rooms_services_public_pb.GetRoomStateResponse,
    (request: rooms_services_public_pb.GetRoomStateRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetRoomStateResponse.deserializeBinary
  );

  getRoomState(
    request: rooms_services_public_pb.GetRoomStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetRoomStateResponse>;

  getRoomState(
    request: rooms_services_public_pb.GetRoomStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomStateResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetRoomStateResponse>;

  getRoomState(
    request: rooms_services_public_pb.GetRoomStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetRoomState',
        request,
        metadata || {},
        this.methodDescriptorGetRoomState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetRoomState',
    request,
    metadata || {},
    this.methodDescriptorGetRoomState);
  }

  methodDescriptorFindRoom = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/FindRoom',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.FindRoomRequest,
    rooms_services_public_pb.FindRoomResponse,
    (request: rooms_services_public_pb.FindRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.FindRoomResponse.deserializeBinary
  );

  findRoom(
    request: rooms_services_public_pb.FindRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.FindRoomResponse>;

  findRoom(
    request: rooms_services_public_pb.FindRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.FindRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.FindRoomResponse>;

  findRoom(
    request: rooms_services_public_pb.FindRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.FindRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/FindRoom',
        request,
        metadata || {},
        this.methodDescriptorFindRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/FindRoom',
    request,
    metadata || {},
    this.methodDescriptorFindRoom);
  }

  methodDescriptorListRooms = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListRooms',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListRoomsRequest,
    rooms_services_public_pb.ListRoomsResponse,
    (request: rooms_services_public_pb.ListRoomsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListRoomsResponse.deserializeBinary
  );

  listRooms(
    request: rooms_services_public_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListRoomsResponse>;

  listRooms(
    request: rooms_services_public_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRoomsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListRoomsResponse>;

  listRooms(
    request: rooms_services_public_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListRooms',
        request,
        metadata || {},
        this.methodDescriptorListRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListRooms',
    request,
    metadata || {},
    this.methodDescriptorListRooms);
  }

  methodDescriptorCountRooms = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountRooms',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountRoomsRequest,
    rooms_services_public_pb.CountRoomsResponse,
    (request: rooms_services_public_pb.CountRoomsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountRoomsResponse.deserializeBinary
  );

  countRooms(
    request: rooms_services_public_pb.CountRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountRoomsResponse>;

  countRooms(
    request: rooms_services_public_pb.CountRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRoomsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountRoomsResponse>;

  countRooms(
    request: rooms_services_public_pb.CountRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountRooms',
        request,
        metadata || {},
        this.methodDescriptorCountRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountRooms',
    request,
    metadata || {},
    this.methodDescriptorCountRooms);
  }

  methodDescriptorSearchRooms = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/SearchRooms',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.SearchRoomsRequest,
    rooms_services_public_pb.SearchRoomsResponse,
    (request: rooms_services_public_pb.SearchRoomsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.SearchRoomsResponse.deserializeBinary
  );

  searchRooms(
    request: rooms_services_public_pb.SearchRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.SearchRoomsResponse>;

  searchRooms(
    request: rooms_services_public_pb.SearchRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SearchRoomsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.SearchRoomsResponse>;

  searchRooms(
    request: rooms_services_public_pb.SearchRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SearchRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/SearchRooms',
        request,
        metadata || {},
        this.methodDescriptorSearchRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/SearchRooms',
    request,
    metadata || {},
    this.methodDescriptorSearchRooms);
  }

  methodDescriptorSuggestRooms = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/SuggestRooms',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.SuggestRoomsRequest,
    rooms_services_public_pb.SuggestRoomsResponse,
    (request: rooms_services_public_pb.SuggestRoomsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.SuggestRoomsResponse.deserializeBinary
  );

  suggestRooms(
    request: rooms_services_public_pb.SuggestRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.SuggestRoomsResponse>;

  suggestRooms(
    request: rooms_services_public_pb.SuggestRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SuggestRoomsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.SuggestRoomsResponse>;

  suggestRooms(
    request: rooms_services_public_pb.SuggestRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SuggestRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/SuggestRooms',
        request,
        metadata || {},
        this.methodDescriptorSuggestRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/SuggestRooms',
    request,
    metadata || {},
    this.methodDescriptorSuggestRooms);
  }

  methodDescriptorCreateRoom = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CreateRoom',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CreateRoomRequest,
    rooms_services_public_pb.CreateRoomResponse,
    (request: rooms_services_public_pb.CreateRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CreateRoomResponse.deserializeBinary
  );

  createRoom(
    request: rooms_services_public_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CreateRoomResponse>;

  createRoom(
    request: rooms_services_public_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CreateRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CreateRoomResponse>;

  createRoom(
    request: rooms_services_public_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CreateRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CreateRoom',
        request,
        metadata || {},
        this.methodDescriptorCreateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CreateRoom',
    request,
    metadata || {},
    this.methodDescriptorCreateRoom);
  }

  methodDescriptorUpdateRoom = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/UpdateRoom',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.UpdateRoomRequest,
    rooms_services_public_pb.UpdateRoomResponse,
    (request: rooms_services_public_pb.UpdateRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.UpdateRoomResponse.deserializeBinary
  );

  updateRoom(
    request: rooms_services_public_pb.UpdateRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.UpdateRoomResponse>;

  updateRoom(
    request: rooms_services_public_pb.UpdateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.UpdateRoomResponse>;

  updateRoom(
    request: rooms_services_public_pb.UpdateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/UpdateRoom',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/UpdateRoom',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoom);
  }

  methodDescriptorDeleteRoom = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/DeleteRoom',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.DeleteRoomRequest,
    rooms_services_public_pb.DeleteRoomResponse,
    (request: rooms_services_public_pb.DeleteRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.DeleteRoomResponse.deserializeBinary
  );

  deleteRoom(
    request: rooms_services_public_pb.DeleteRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.DeleteRoomResponse>;

  deleteRoom(
    request: rooms_services_public_pb.DeleteRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.DeleteRoomResponse>;

  deleteRoom(
    request: rooms_services_public_pb.DeleteRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/DeleteRoom',
        request,
        metadata || {},
        this.methodDescriptorDeleteRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/DeleteRoom',
    request,
    metadata || {},
    this.methodDescriptorDeleteRoom);
  }

  methodDescriptorLeaveRoom = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/LeaveRoom',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.LeaveRoomRequest,
    rooms_services_public_pb.LeaveRoomResponse,
    (request: rooms_services_public_pb.LeaveRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.LeaveRoomResponse.deserializeBinary
  );

  leaveRoom(
    request: rooms_services_public_pb.LeaveRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.LeaveRoomResponse>;

  leaveRoom(
    request: rooms_services_public_pb.LeaveRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.LeaveRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.LeaveRoomResponse>;

  leaveRoom(
    request: rooms_services_public_pb.LeaveRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.LeaveRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/LeaveRoom',
        request,
        metadata || {},
        this.methodDescriptorLeaveRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/LeaveRoom',
    request,
    metadata || {},
    this.methodDescriptorLeaveRoom);
  }

  methodDescriptorActivateRoom = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ActivateRoom',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ActivateRoomRequest,
    rooms_services_public_pb.ActivateRoomResponse,
    (request: rooms_services_public_pb.ActivateRoomRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ActivateRoomResponse.deserializeBinary
  );

  activateRoom(
    request: rooms_services_public_pb.ActivateRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ActivateRoomResponse>;

  activateRoom(
    request: rooms_services_public_pb.ActivateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ActivateRoomResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ActivateRoomResponse>;

  activateRoom(
    request: rooms_services_public_pb.ActivateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ActivateRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ActivateRoom',
        request,
        metadata || {},
        this.methodDescriptorActivateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ActivateRoom',
    request,
    metadata || {},
    this.methodDescriptorActivateRoom);
  }

  methodDescriptorGetRoomUserInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetRoomUserInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetRoomUserInfoRequest,
    rooms_services_public_pb.GetRoomUserInfoResponse,
    (request: rooms_services_public_pb.GetRoomUserInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetRoomUserInfoResponse.deserializeBinary
  );

  getRoomUserInfo(
    request: rooms_services_public_pb.GetRoomUserInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetRoomUserInfoResponse>;

  getRoomUserInfo(
    request: rooms_services_public_pb.GetRoomUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomUserInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetRoomUserInfoResponse>;

  getRoomUserInfo(
    request: rooms_services_public_pb.GetRoomUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomUserInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetRoomUserInfo',
        request,
        metadata || {},
        this.methodDescriptorGetRoomUserInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetRoomUserInfo',
    request,
    metadata || {},
    this.methodDescriptorGetRoomUserInfo);
  }

  methodDescriptorListRoomUsers = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListRoomUsers',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListRoomUsersRequest,
    rooms_services_public_pb.ListRoomUsersResponse,
    (request: rooms_services_public_pb.ListRoomUsersRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListRoomUsersResponse.deserializeBinary
  );

  listRoomUsers(
    request: rooms_services_public_pb.ListRoomUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListRoomUsersResponse>;

  listRoomUsers(
    request: rooms_services_public_pb.ListRoomUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRoomUsersResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListRoomUsersResponse>;

  listRoomUsers(
    request: rooms_services_public_pb.ListRoomUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRoomUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListRoomUsers',
        request,
        metadata || {},
        this.methodDescriptorListRoomUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListRoomUsers',
    request,
    metadata || {},
    this.methodDescriptorListRoomUsers);
  }

  methodDescriptorCountRoomUsers = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountRoomUsers',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountRoomUsersRequest,
    rooms_services_public_pb.CountRoomUsersResponse,
    (request: rooms_services_public_pb.CountRoomUsersRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountRoomUsersResponse.deserializeBinary
  );

  countRoomUsers(
    request: rooms_services_public_pb.CountRoomUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountRoomUsersResponse>;

  countRoomUsers(
    request: rooms_services_public_pb.CountRoomUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRoomUsersResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountRoomUsersResponse>;

  countRoomUsers(
    request: rooms_services_public_pb.CountRoomUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRoomUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountRoomUsers',
        request,
        metadata || {},
        this.methodDescriptorCountRoomUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountRoomUsers',
    request,
    metadata || {},
    this.methodDescriptorCountRoomUsers);
  }

  methodDescriptorUpdateRoomUser = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/UpdateRoomUser',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.UpdateRoomUserRequest,
    rooms_services_public_pb.UpdateRoomUserResponse,
    (request: rooms_services_public_pb.UpdateRoomUserRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.UpdateRoomUserResponse.deserializeBinary
  );

  updateRoomUser(
    request: rooms_services_public_pb.UpdateRoomUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.UpdateRoomUserResponse>;

  updateRoomUser(
    request: rooms_services_public_pb.UpdateRoomUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateRoomUserResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.UpdateRoomUserResponse>;

  updateRoomUser(
    request: rooms_services_public_pb.UpdateRoomUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateRoomUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/UpdateRoomUser',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoomUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/UpdateRoomUser',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoomUser);
  }

  methodDescriptorTokenizeRoomUser = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/TokenizeRoomUser',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.TokenizeRoomUserRequest,
    rooms_services_public_pb.TokenizeRoomUserResponse,
    (request: rooms_services_public_pb.TokenizeRoomUserRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.TokenizeRoomUserResponse.deserializeBinary
  );

  tokenizeRoomUser(
    request: rooms_services_public_pb.TokenizeRoomUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.TokenizeRoomUserResponse>;

  tokenizeRoomUser(
    request: rooms_services_public_pb.TokenizeRoomUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.TokenizeRoomUserResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.TokenizeRoomUserResponse>;

  tokenizeRoomUser(
    request: rooms_services_public_pb.TokenizeRoomUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.TokenizeRoomUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/TokenizeRoomUser',
        request,
        metadata || {},
        this.methodDescriptorTokenizeRoomUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/TokenizeRoomUser',
    request,
    metadata || {},
    this.methodDescriptorTokenizeRoomUser);
  }

  methodDescriptorDisconnectRoomUser = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/DisconnectRoomUser',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.DisconnectRoomUserRequest,
    rooms_services_public_pb.DisconnectRoomUserResponse,
    (request: rooms_services_public_pb.DisconnectRoomUserRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.DisconnectRoomUserResponse.deserializeBinary
  );

  disconnectRoomUser(
    request: rooms_services_public_pb.DisconnectRoomUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.DisconnectRoomUserResponse>;

  disconnectRoomUser(
    request: rooms_services_public_pb.DisconnectRoomUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DisconnectRoomUserResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.DisconnectRoomUserResponse>;

  disconnectRoomUser(
    request: rooms_services_public_pb.DisconnectRoomUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DisconnectRoomUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/DisconnectRoomUser',
        request,
        metadata || {},
        this.methodDescriptorDisconnectRoomUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/DisconnectRoomUser',
    request,
    metadata || {},
    this.methodDescriptorDisconnectRoomUser);
  }

  methodDescriptorGetRoomInviteInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetRoomInviteInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetRoomInviteInfoRequest,
    rooms_services_public_pb.GetRoomInviteInfoResponse,
    (request: rooms_services_public_pb.GetRoomInviteInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetRoomInviteInfoResponse.deserializeBinary
  );

  getRoomInviteInfo(
    request: rooms_services_public_pb.GetRoomInviteInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetRoomInviteInfoResponse>;

  getRoomInviteInfo(
    request: rooms_services_public_pb.GetRoomInviteInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomInviteInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetRoomInviteInfoResponse>;

  getRoomInviteInfo(
    request: rooms_services_public_pb.GetRoomInviteInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomInviteInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetRoomInviteInfo',
        request,
        metadata || {},
        this.methodDescriptorGetRoomInviteInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetRoomInviteInfo',
    request,
    metadata || {},
    this.methodDescriptorGetRoomInviteInfo);
  }

  methodDescriptorListRoomInvites = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListRoomInvites',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListRoomInvitesRequest,
    rooms_services_public_pb.ListRoomInvitesResponse,
    (request: rooms_services_public_pb.ListRoomInvitesRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListRoomInvitesResponse.deserializeBinary
  );

  listRoomInvites(
    request: rooms_services_public_pb.ListRoomInvitesRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListRoomInvitesResponse>;

  listRoomInvites(
    request: rooms_services_public_pb.ListRoomInvitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRoomInvitesResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListRoomInvitesResponse>;

  listRoomInvites(
    request: rooms_services_public_pb.ListRoomInvitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRoomInvitesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListRoomInvites',
        request,
        metadata || {},
        this.methodDescriptorListRoomInvites,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListRoomInvites',
    request,
    metadata || {},
    this.methodDescriptorListRoomInvites);
  }

  methodDescriptorCountRoomInvites = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountRoomInvites',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountRoomInvitesRequest,
    rooms_services_public_pb.CountRoomInvitesResponse,
    (request: rooms_services_public_pb.CountRoomInvitesRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountRoomInvitesResponse.deserializeBinary
  );

  countRoomInvites(
    request: rooms_services_public_pb.CountRoomInvitesRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountRoomInvitesResponse>;

  countRoomInvites(
    request: rooms_services_public_pb.CountRoomInvitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRoomInvitesResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountRoomInvitesResponse>;

  countRoomInvites(
    request: rooms_services_public_pb.CountRoomInvitesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRoomInvitesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountRoomInvites',
        request,
        metadata || {},
        this.methodDescriptorCountRoomInvites,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountRoomInvites',
    request,
    metadata || {},
    this.methodDescriptorCountRoomInvites);
  }

  methodDescriptorCreateRoomInvite = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CreateRoomInvite',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CreateRoomInviteRequest,
    rooms_services_public_pb.CreateRoomInviteResponse,
    (request: rooms_services_public_pb.CreateRoomInviteRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CreateRoomInviteResponse.deserializeBinary
  );

  createRoomInvite(
    request: rooms_services_public_pb.CreateRoomInviteRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CreateRoomInviteResponse>;

  createRoomInvite(
    request: rooms_services_public_pb.CreateRoomInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CreateRoomInviteResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CreateRoomInviteResponse>;

  createRoomInvite(
    request: rooms_services_public_pb.CreateRoomInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CreateRoomInviteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CreateRoomInvite',
        request,
        metadata || {},
        this.methodDescriptorCreateRoomInvite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CreateRoomInvite',
    request,
    metadata || {},
    this.methodDescriptorCreateRoomInvite);
  }

  methodDescriptorUpdateRoomInvite = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/UpdateRoomInvite',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.UpdateRoomInviteRequest,
    rooms_services_public_pb.UpdateRoomInviteResponse,
    (request: rooms_services_public_pb.UpdateRoomInviteRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.UpdateRoomInviteResponse.deserializeBinary
  );

  updateRoomInvite(
    request: rooms_services_public_pb.UpdateRoomInviteRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.UpdateRoomInviteResponse>;

  updateRoomInvite(
    request: rooms_services_public_pb.UpdateRoomInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateRoomInviteResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.UpdateRoomInviteResponse>;

  updateRoomInvite(
    request: rooms_services_public_pb.UpdateRoomInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateRoomInviteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/UpdateRoomInvite',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoomInvite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/UpdateRoomInvite',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoomInvite);
  }

  methodDescriptorDeleteRoomInvite = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/DeleteRoomInvite',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.DeleteRoomInviteRequest,
    rooms_services_public_pb.DeleteRoomInviteResponse,
    (request: rooms_services_public_pb.DeleteRoomInviteRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.DeleteRoomInviteResponse.deserializeBinary
  );

  deleteRoomInvite(
    request: rooms_services_public_pb.DeleteRoomInviteRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.DeleteRoomInviteResponse>;

  deleteRoomInvite(
    request: rooms_services_public_pb.DeleteRoomInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteRoomInviteResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.DeleteRoomInviteResponse>;

  deleteRoomInvite(
    request: rooms_services_public_pb.DeleteRoomInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteRoomInviteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/DeleteRoomInvite',
        request,
        metadata || {},
        this.methodDescriptorDeleteRoomInvite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/DeleteRoomInvite',
    request,
    metadata || {},
    this.methodDescriptorDeleteRoomInvite);
  }

  methodDescriptorDeliverRoomInvite = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/DeliverRoomInvite',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.DeliverRoomInviteRequest,
    rooms_services_public_pb.DeliverRoomInviteResponse,
    (request: rooms_services_public_pb.DeliverRoomInviteRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.DeliverRoomInviteResponse.deserializeBinary
  );

  deliverRoomInvite(
    request: rooms_services_public_pb.DeliverRoomInviteRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.DeliverRoomInviteResponse>;

  deliverRoomInvite(
    request: rooms_services_public_pb.DeliverRoomInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeliverRoomInviteResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.DeliverRoomInviteResponse>;

  deliverRoomInvite(
    request: rooms_services_public_pb.DeliverRoomInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeliverRoomInviteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/DeliverRoomInvite',
        request,
        metadata || {},
        this.methodDescriptorDeliverRoomInvite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/DeliverRoomInvite',
    request,
    metadata || {},
    this.methodDescriptorDeliverRoomInvite);
  }

  methodDescriptorGetRoomStreamInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetRoomStreamInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetRoomStreamInfoRequest,
    rooms_services_public_pb.GetRoomStreamInfoResponse,
    (request: rooms_services_public_pb.GetRoomStreamInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetRoomStreamInfoResponse.deserializeBinary
  );

  getRoomStreamInfo(
    request: rooms_services_public_pb.GetRoomStreamInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetRoomStreamInfoResponse>;

  getRoomStreamInfo(
    request: rooms_services_public_pb.GetRoomStreamInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomStreamInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetRoomStreamInfoResponse>;

  getRoomStreamInfo(
    request: rooms_services_public_pb.GetRoomStreamInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRoomStreamInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetRoomStreamInfo',
        request,
        metadata || {},
        this.methodDescriptorGetRoomStreamInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetRoomStreamInfo',
    request,
    metadata || {},
    this.methodDescriptorGetRoomStreamInfo);
  }

  methodDescriptorListRoomStreams = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListRoomStreams',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListRoomStreamsRequest,
    rooms_services_public_pb.ListRoomStreamsResponse,
    (request: rooms_services_public_pb.ListRoomStreamsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListRoomStreamsResponse.deserializeBinary
  );

  listRoomStreams(
    request: rooms_services_public_pb.ListRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListRoomStreamsResponse>;

  listRoomStreams(
    request: rooms_services_public_pb.ListRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRoomStreamsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListRoomStreamsResponse>;

  listRoomStreams(
    request: rooms_services_public_pb.ListRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRoomStreamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListRoomStreams',
        request,
        metadata || {},
        this.methodDescriptorListRoomStreams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListRoomStreams',
    request,
    metadata || {},
    this.methodDescriptorListRoomStreams);
  }

  methodDescriptorCountRoomStreams = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountRoomStreams',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountRoomStreamsRequest,
    rooms_services_public_pb.CountRoomStreamsResponse,
    (request: rooms_services_public_pb.CountRoomStreamsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountRoomStreamsResponse.deserializeBinary
  );

  countRoomStreams(
    request: rooms_services_public_pb.CountRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountRoomStreamsResponse>;

  countRoomStreams(
    request: rooms_services_public_pb.CountRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRoomStreamsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountRoomStreamsResponse>;

  countRoomStreams(
    request: rooms_services_public_pb.CountRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRoomStreamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountRoomStreams',
        request,
        metadata || {},
        this.methodDescriptorCountRoomStreams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountRoomStreams',
    request,
    metadata || {},
    this.methodDescriptorCountRoomStreams);
  }

  methodDescriptorUpdateRoomStream = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/UpdateRoomStream',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.UpdateRoomStreamRequest,
    rooms_services_public_pb.UpdateRoomStreamResponse,
    (request: rooms_services_public_pb.UpdateRoomStreamRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.UpdateRoomStreamResponse.deserializeBinary
  );

  updateRoomStream(
    request: rooms_services_public_pb.UpdateRoomStreamRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.UpdateRoomStreamResponse>;

  updateRoomStream(
    request: rooms_services_public_pb.UpdateRoomStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateRoomStreamResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.UpdateRoomStreamResponse>;

  updateRoomStream(
    request: rooms_services_public_pb.UpdateRoomStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateRoomStreamResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/UpdateRoomStream',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoomStream,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/UpdateRoomStream',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoomStream);
  }

  methodDescriptorInsertRoomStream = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/InsertRoomStream',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.InsertRoomStreamRequest,
    rooms_services_public_pb.InsertRoomStreamResponse,
    (request: rooms_services_public_pb.InsertRoomStreamRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.InsertRoomStreamResponse.deserializeBinary
  );

  insertRoomStream(
    request: rooms_services_public_pb.InsertRoomStreamRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.InsertRoomStreamResponse>;

  insertRoomStream(
    request: rooms_services_public_pb.InsertRoomStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.InsertRoomStreamResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.InsertRoomStreamResponse>;

  insertRoomStream(
    request: rooms_services_public_pb.InsertRoomStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.InsertRoomStreamResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/InsertRoomStream',
        request,
        metadata || {},
        this.methodDescriptorInsertRoomStream,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/InsertRoomStream',
    request,
    metadata || {},
    this.methodDescriptorInsertRoomStream);
  }

  methodDescriptorChangeRoomStream = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ChangeRoomStream',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ChangeRoomStreamRequest,
    rooms_services_public_pb.ChangeRoomStreamResponse,
    (request: rooms_services_public_pb.ChangeRoomStreamRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ChangeRoomStreamResponse.deserializeBinary
  );

  changeRoomStream(
    request: rooms_services_public_pb.ChangeRoomStreamRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ChangeRoomStreamResponse>;

  changeRoomStream(
    request: rooms_services_public_pb.ChangeRoomStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ChangeRoomStreamResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ChangeRoomStreamResponse>;

  changeRoomStream(
    request: rooms_services_public_pb.ChangeRoomStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ChangeRoomStreamResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ChangeRoomStream',
        request,
        metadata || {},
        this.methodDescriptorChangeRoomStream,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ChangeRoomStream',
    request,
    metadata || {},
    this.methodDescriptorChangeRoomStream);
  }

  methodDescriptorRemoveRoomStream = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/RemoveRoomStream',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.RemoveRoomStreamRequest,
    rooms_services_public_pb.RemoveRoomStreamResponse,
    (request: rooms_services_public_pb.RemoveRoomStreamRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.RemoveRoomStreamResponse.deserializeBinary
  );

  removeRoomStream(
    request: rooms_services_public_pb.RemoveRoomStreamRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.RemoveRoomStreamResponse>;

  removeRoomStream(
    request: rooms_services_public_pb.RemoveRoomStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.RemoveRoomStreamResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.RemoveRoomStreamResponse>;

  removeRoomStream(
    request: rooms_services_public_pb.RemoveRoomStreamRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.RemoveRoomStreamResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/RemoveRoomStream',
        request,
        metadata || {},
        this.methodDescriptorRemoveRoomStream,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/RemoveRoomStream',
    request,
    metadata || {},
    this.methodDescriptorRemoveRoomStream);
  }

  methodDescriptorClearRoomStreams = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ClearRoomStreams',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ClearRoomStreamsRequest,
    rooms_services_public_pb.ClearRoomStreamsResponse,
    (request: rooms_services_public_pb.ClearRoomStreamsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ClearRoomStreamsResponse.deserializeBinary
  );

  clearRoomStreams(
    request: rooms_services_public_pb.ClearRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ClearRoomStreamsResponse>;

  clearRoomStreams(
    request: rooms_services_public_pb.ClearRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ClearRoomStreamsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ClearRoomStreamsResponse>;

  clearRoomStreams(
    request: rooms_services_public_pb.ClearRoomStreamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ClearRoomStreamsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ClearRoomStreams',
        request,
        metadata || {},
        this.methodDescriptorClearRoomStreams,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ClearRoomStreams',
    request,
    metadata || {},
    this.methodDescriptorClearRoomStreams);
  }

  methodDescriptorGetEventInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetEventInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetEventInfoRequest,
    rooms_services_public_pb.GetEventInfoResponse,
    (request: rooms_services_public_pb.GetEventInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetEventInfoResponse.deserializeBinary
  );

  getEventInfo(
    request: rooms_services_public_pb.GetEventInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetEventInfoResponse>;

  getEventInfo(
    request: rooms_services_public_pb.GetEventInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetEventInfoResponse>;

  getEventInfo(
    request: rooms_services_public_pb.GetEventInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetEventInfo',
        request,
        metadata || {},
        this.methodDescriptorGetEventInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetEventInfo',
    request,
    metadata || {},
    this.methodDescriptorGetEventInfo);
  }

  methodDescriptorGetEventState = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetEventState',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetEventStateRequest,
    rooms_services_public_pb.GetEventStateResponse,
    (request: rooms_services_public_pb.GetEventStateRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetEventStateResponse.deserializeBinary
  );

  getEventState(
    request: rooms_services_public_pb.GetEventStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetEventStateResponse>;

  getEventState(
    request: rooms_services_public_pb.GetEventStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventStateResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetEventStateResponse>;

  getEventState(
    request: rooms_services_public_pb.GetEventStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetEventState',
        request,
        metadata || {},
        this.methodDescriptorGetEventState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetEventState',
    request,
    metadata || {},
    this.methodDescriptorGetEventState);
  }

  methodDescriptorListEvents = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListEvents',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListEventsRequest,
    rooms_services_public_pb.ListEventsResponse,
    (request: rooms_services_public_pb.ListEventsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListEventsResponse.deserializeBinary
  );

  listEvents(
    request: rooms_services_public_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListEventsResponse>;

  listEvents(
    request: rooms_services_public_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListEventsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListEventsResponse>;

  listEvents(
    request: rooms_services_public_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListEventsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListEvents',
        request,
        metadata || {},
        this.methodDescriptorListEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListEvents',
    request,
    metadata || {},
    this.methodDescriptorListEvents);
  }

  methodDescriptorCountEvents = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountEvents',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountEventsRequest,
    rooms_services_public_pb.CountEventsResponse,
    (request: rooms_services_public_pb.CountEventsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountEventsResponse.deserializeBinary
  );

  countEvents(
    request: rooms_services_public_pb.CountEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountEventsResponse>;

  countEvents(
    request: rooms_services_public_pb.CountEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountEventsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountEventsResponse>;

  countEvents(
    request: rooms_services_public_pb.CountEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountEventsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountEvents',
        request,
        metadata || {},
        this.methodDescriptorCountEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountEvents',
    request,
    metadata || {},
    this.methodDescriptorCountEvents);
  }

  methodDescriptorSearchEvents = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/SearchEvents',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.SearchEventsRequest,
    rooms_services_public_pb.SearchEventsResponse,
    (request: rooms_services_public_pb.SearchEventsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.SearchEventsResponse.deserializeBinary
  );

  searchEvents(
    request: rooms_services_public_pb.SearchEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.SearchEventsResponse>;

  searchEvents(
    request: rooms_services_public_pb.SearchEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SearchEventsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.SearchEventsResponse>;

  searchEvents(
    request: rooms_services_public_pb.SearchEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SearchEventsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/SearchEvents',
        request,
        metadata || {},
        this.methodDescriptorSearchEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/SearchEvents',
    request,
    metadata || {},
    this.methodDescriptorSearchEvents);
  }

  methodDescriptorSuggestEvents = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/SuggestEvents',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.SuggestEventsRequest,
    rooms_services_public_pb.SuggestEventsResponse,
    (request: rooms_services_public_pb.SuggestEventsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.SuggestEventsResponse.deserializeBinary
  );

  suggestEvents(
    request: rooms_services_public_pb.SuggestEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.SuggestEventsResponse>;

  suggestEvents(
    request: rooms_services_public_pb.SuggestEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SuggestEventsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.SuggestEventsResponse>;

  suggestEvents(
    request: rooms_services_public_pb.SuggestEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SuggestEventsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/SuggestEvents',
        request,
        metadata || {},
        this.methodDescriptorSuggestEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/SuggestEvents',
    request,
    metadata || {},
    this.methodDescriptorSuggestEvents);
  }

  methodDescriptorCreateEvent = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CreateEvent',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CreateEventRequest,
    rooms_services_public_pb.CreateEventResponse,
    (request: rooms_services_public_pb.CreateEventRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CreateEventResponse.deserializeBinary
  );

  createEvent(
    request: rooms_services_public_pb.CreateEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CreateEventResponse>;

  createEvent(
    request: rooms_services_public_pb.CreateEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CreateEventResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CreateEventResponse>;

  createEvent(
    request: rooms_services_public_pb.CreateEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CreateEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CreateEvent',
        request,
        metadata || {},
        this.methodDescriptorCreateEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CreateEvent',
    request,
    metadata || {},
    this.methodDescriptorCreateEvent);
  }

  methodDescriptorUpdateEvent = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/UpdateEvent',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.UpdateEventRequest,
    rooms_services_public_pb.UpdateEventResponse,
    (request: rooms_services_public_pb.UpdateEventRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.UpdateEventResponse.deserializeBinary
  );

  updateEvent(
    request: rooms_services_public_pb.UpdateEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.UpdateEventResponse>;

  updateEvent(
    request: rooms_services_public_pb.UpdateEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateEventResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.UpdateEventResponse>;

  updateEvent(
    request: rooms_services_public_pb.UpdateEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.UpdateEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/UpdateEvent',
        request,
        metadata || {},
        this.methodDescriptorUpdateEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/UpdateEvent',
    request,
    metadata || {},
    this.methodDescriptorUpdateEvent);
  }

  methodDescriptorDeleteEvent = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/DeleteEvent',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.DeleteEventRequest,
    rooms_services_public_pb.DeleteEventResponse,
    (request: rooms_services_public_pb.DeleteEventRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.DeleteEventResponse.deserializeBinary
  );

  deleteEvent(
    request: rooms_services_public_pb.DeleteEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.DeleteEventResponse>;

  deleteEvent(
    request: rooms_services_public_pb.DeleteEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteEventResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.DeleteEventResponse>;

  deleteEvent(
    request: rooms_services_public_pb.DeleteEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/DeleteEvent',
        request,
        metadata || {},
        this.methodDescriptorDeleteEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/DeleteEvent',
    request,
    metadata || {},
    this.methodDescriptorDeleteEvent);
  }

  methodDescriptorStartEvent = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/StartEvent',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.StartEventRequest,
    rooms_services_public_pb.StartEventResponse,
    (request: rooms_services_public_pb.StartEventRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.StartEventResponse.deserializeBinary
  );

  startEvent(
    request: rooms_services_public_pb.StartEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.StartEventResponse>;

  startEvent(
    request: rooms_services_public_pb.StartEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.StartEventResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.StartEventResponse>;

  startEvent(
    request: rooms_services_public_pb.StartEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.StartEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/StartEvent',
        request,
        metadata || {},
        this.methodDescriptorStartEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/StartEvent',
    request,
    metadata || {},
    this.methodDescriptorStartEvent);
  }

  methodDescriptorFinishEvent = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/FinishEvent',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.FinishEventRequest,
    rooms_services_public_pb.FinishEventResponse,
    (request: rooms_services_public_pb.FinishEventRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.FinishEventResponse.deserializeBinary
  );

  finishEvent(
    request: rooms_services_public_pb.FinishEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.FinishEventResponse>;

  finishEvent(
    request: rooms_services_public_pb.FinishEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.FinishEventResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.FinishEventResponse>;

  finishEvent(
    request: rooms_services_public_pb.FinishEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.FinishEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/FinishEvent',
        request,
        metadata || {},
        this.methodDescriptorFinishEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/FinishEvent',
    request,
    metadata || {},
    this.methodDescriptorFinishEvent);
  }

  methodDescriptorCancelEvent = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CancelEvent',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CancelEventRequest,
    rooms_services_public_pb.CancelEventResponse,
    (request: rooms_services_public_pb.CancelEventRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CancelEventResponse.deserializeBinary
  );

  cancelEvent(
    request: rooms_services_public_pb.CancelEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CancelEventResponse>;

  cancelEvent(
    request: rooms_services_public_pb.CancelEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CancelEventResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CancelEventResponse>;

  cancelEvent(
    request: rooms_services_public_pb.CancelEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CancelEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CancelEvent',
        request,
        metadata || {},
        this.methodDescriptorCancelEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CancelEvent',
    request,
    metadata || {},
    this.methodDescriptorCancelEvent);
  }

  methodDescriptorRestartEvent = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/RestartEvent',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.RestartEventRequest,
    rooms_services_public_pb.RestartEventResponse,
    (request: rooms_services_public_pb.RestartEventRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.RestartEventResponse.deserializeBinary
  );

  restartEvent(
    request: rooms_services_public_pb.RestartEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.RestartEventResponse>;

  restartEvent(
    request: rooms_services_public_pb.RestartEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.RestartEventResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.RestartEventResponse>;

  restartEvent(
    request: rooms_services_public_pb.RestartEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.RestartEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/RestartEvent',
        request,
        metadata || {},
        this.methodDescriptorRestartEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/RestartEvent',
    request,
    metadata || {},
    this.methodDescriptorRestartEvent);
  }

  methodDescriptorTokenizeEvent = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/TokenizeEvent',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.TokenizeEventRequest,
    rooms_services_public_pb.TokenizeEventResponse,
    (request: rooms_services_public_pb.TokenizeEventRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.TokenizeEventResponse.deserializeBinary
  );

  tokenizeEvent(
    request: rooms_services_public_pb.TokenizeEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.TokenizeEventResponse>;

  tokenizeEvent(
    request: rooms_services_public_pb.TokenizeEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.TokenizeEventResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.TokenizeEventResponse>;

  tokenizeEvent(
    request: rooms_services_public_pb.TokenizeEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.TokenizeEventResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/TokenizeEvent',
        request,
        metadata || {},
        this.methodDescriptorTokenizeEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/TokenizeEvent',
    request,
    metadata || {},
    this.methodDescriptorTokenizeEvent);
  }

  methodDescriptorGetEventReportInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetEventReportInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetEventReportInfoRequest,
    rooms_services_public_pb.GetEventReportInfoResponse,
    (request: rooms_services_public_pb.GetEventReportInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetEventReportInfoResponse.deserializeBinary
  );

  getEventReportInfo(
    request: rooms_services_public_pb.GetEventReportInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetEventReportInfoResponse>;

  getEventReportInfo(
    request: rooms_services_public_pb.GetEventReportInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventReportInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetEventReportInfoResponse>;

  getEventReportInfo(
    request: rooms_services_public_pb.GetEventReportInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventReportInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetEventReportInfo',
        request,
        metadata || {},
        this.methodDescriptorGetEventReportInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetEventReportInfo',
    request,
    metadata || {},
    this.methodDescriptorGetEventReportInfo);
  }

  methodDescriptorListEventReports = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListEventReports',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListEventReportsRequest,
    rooms_services_public_pb.ListEventReportsResponse,
    (request: rooms_services_public_pb.ListEventReportsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListEventReportsResponse.deserializeBinary
  );

  listEventReports(
    request: rooms_services_public_pb.ListEventReportsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListEventReportsResponse>;

  listEventReports(
    request: rooms_services_public_pb.ListEventReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListEventReportsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListEventReportsResponse>;

  listEventReports(
    request: rooms_services_public_pb.ListEventReportsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListEventReportsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListEventReports',
        request,
        metadata || {},
        this.methodDescriptorListEventReports,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListEventReports',
    request,
    metadata || {},
    this.methodDescriptorListEventReports);
  }

  methodDescriptorGetEventOwnerReportInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetEventOwnerReportInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetEventOwnerReportInfoRequest,
    rooms_services_public_pb.GetEventOwnerReportInfoResponse,
    (request: rooms_services_public_pb.GetEventOwnerReportInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetEventOwnerReportInfoResponse.deserializeBinary
  );

  getEventOwnerReportInfo(
    request: rooms_services_public_pb.GetEventOwnerReportInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetEventOwnerReportInfoResponse>;

  getEventOwnerReportInfo(
    request: rooms_services_public_pb.GetEventOwnerReportInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventOwnerReportInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetEventOwnerReportInfoResponse>;

  getEventOwnerReportInfo(
    request: rooms_services_public_pb.GetEventOwnerReportInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventOwnerReportInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetEventOwnerReportInfo',
        request,
        metadata || {},
        this.methodDescriptorGetEventOwnerReportInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetEventOwnerReportInfo',
    request,
    metadata || {},
    this.methodDescriptorGetEventOwnerReportInfo);
  }

  methodDescriptorGetEventPerformerInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetEventPerformerInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetEventPerformerInfoRequest,
    rooms_services_public_pb.GetEventPerformerInfoResponse,
    (request: rooms_services_public_pb.GetEventPerformerInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetEventPerformerInfoResponse.deserializeBinary
  );

  getEventPerformerInfo(
    request: rooms_services_public_pb.GetEventPerformerInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetEventPerformerInfoResponse>;

  getEventPerformerInfo(
    request: rooms_services_public_pb.GetEventPerformerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventPerformerInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetEventPerformerInfoResponse>;

  getEventPerformerInfo(
    request: rooms_services_public_pb.GetEventPerformerInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetEventPerformerInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetEventPerformerInfo',
        request,
        metadata || {},
        this.methodDescriptorGetEventPerformerInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetEventPerformerInfo',
    request,
    metadata || {},
    this.methodDescriptorGetEventPerformerInfo);
  }

  methodDescriptorListEventPerformers = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListEventPerformers',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListEventPerformersRequest,
    rooms_services_public_pb.ListEventPerformersResponse,
    (request: rooms_services_public_pb.ListEventPerformersRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListEventPerformersResponse.deserializeBinary
  );

  listEventPerformers(
    request: rooms_services_public_pb.ListEventPerformersRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListEventPerformersResponse>;

  listEventPerformers(
    request: rooms_services_public_pb.ListEventPerformersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListEventPerformersResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListEventPerformersResponse>;

  listEventPerformers(
    request: rooms_services_public_pb.ListEventPerformersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListEventPerformersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListEventPerformers',
        request,
        metadata || {},
        this.methodDescriptorListEventPerformers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListEventPerformers',
    request,
    metadata || {},
    this.methodDescriptorListEventPerformers);
  }

  methodDescriptorCountEventPerformers = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountEventPerformers',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountEventPerformersRequest,
    rooms_services_public_pb.CountEventPerformersResponse,
    (request: rooms_services_public_pb.CountEventPerformersRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountEventPerformersResponse.deserializeBinary
  );

  countEventPerformers(
    request: rooms_services_public_pb.CountEventPerformersRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountEventPerformersResponse>;

  countEventPerformers(
    request: rooms_services_public_pb.CountEventPerformersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountEventPerformersResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountEventPerformersResponse>;

  countEventPerformers(
    request: rooms_services_public_pb.CountEventPerformersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountEventPerformersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountEventPerformers',
        request,
        metadata || {},
        this.methodDescriptorCountEventPerformers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountEventPerformers',
    request,
    metadata || {},
    this.methodDescriptorCountEventPerformers);
  }

  methodDescriptorSwapEventPerformers = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/SwapEventPerformers',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.SwapEventPerformersRequest,
    rooms_services_public_pb.SwapEventPerformersResponse,
    (request: rooms_services_public_pb.SwapEventPerformersRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.SwapEventPerformersResponse.deserializeBinary
  );

  swapEventPerformers(
    request: rooms_services_public_pb.SwapEventPerformersRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.SwapEventPerformersResponse>;

  swapEventPerformers(
    request: rooms_services_public_pb.SwapEventPerformersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SwapEventPerformersResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.SwapEventPerformersResponse>;

  swapEventPerformers(
    request: rooms_services_public_pb.SwapEventPerformersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SwapEventPerformersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/SwapEventPerformers',
        request,
        metadata || {},
        this.methodDescriptorSwapEventPerformers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/SwapEventPerformers',
    request,
    metadata || {},
    this.methodDescriptorSwapEventPerformers);
  }

  methodDescriptorSwitchEventPerformer = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/SwitchEventPerformer',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.SwitchEventPerformerRequest,
    rooms_services_public_pb.SwitchEventPerformerResponse,
    (request: rooms_services_public_pb.SwitchEventPerformerRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.SwitchEventPerformerResponse.deserializeBinary
  );

  switchEventPerformer(
    request: rooms_services_public_pb.SwitchEventPerformerRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.SwitchEventPerformerResponse>;

  switchEventPerformer(
    request: rooms_services_public_pb.SwitchEventPerformerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SwitchEventPerformerResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.SwitchEventPerformerResponse>;

  switchEventPerformer(
    request: rooms_services_public_pb.SwitchEventPerformerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SwitchEventPerformerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/SwitchEventPerformer',
        request,
        metadata || {},
        this.methodDescriptorSwitchEventPerformer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/SwitchEventPerformer',
    request,
    metadata || {},
    this.methodDescriptorSwitchEventPerformer);
  }

  methodDescriptorDeleteEventPerformer = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/DeleteEventPerformer',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.DeleteEventPerformerRequest,
    rooms_services_public_pb.DeleteEventPerformerResponse,
    (request: rooms_services_public_pb.DeleteEventPerformerRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.DeleteEventPerformerResponse.deserializeBinary
  );

  deleteEventPerformer(
    request: rooms_services_public_pb.DeleteEventPerformerRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.DeleteEventPerformerResponse>;

  deleteEventPerformer(
    request: rooms_services_public_pb.DeleteEventPerformerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteEventPerformerResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.DeleteEventPerformerResponse>;

  deleteEventPerformer(
    request: rooms_services_public_pb.DeleteEventPerformerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.DeleteEventPerformerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/DeleteEventPerformer',
        request,
        metadata || {},
        this.methodDescriptorDeleteEventPerformer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/DeleteEventPerformer',
    request,
    metadata || {},
    this.methodDescriptorDeleteEventPerformer);
  }

  methodDescriptorConfirmEventPerformer = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ConfirmEventPerformer',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ConfirmEventPerformerRequest,
    rooms_services_public_pb.ConfirmEventPerformerResponse,
    (request: rooms_services_public_pb.ConfirmEventPerformerRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ConfirmEventPerformerResponse.deserializeBinary
  );

  confirmEventPerformer(
    request: rooms_services_public_pb.ConfirmEventPerformerRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ConfirmEventPerformerResponse>;

  confirmEventPerformer(
    request: rooms_services_public_pb.ConfirmEventPerformerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ConfirmEventPerformerResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ConfirmEventPerformerResponse>;

  confirmEventPerformer(
    request: rooms_services_public_pb.ConfirmEventPerformerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ConfirmEventPerformerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ConfirmEventPerformer',
        request,
        metadata || {},
        this.methodDescriptorConfirmEventPerformer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ConfirmEventPerformer',
    request,
    metadata || {},
    this.methodDescriptorConfirmEventPerformer);
  }

  methodDescriptorGetTiktokObjectInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetTiktokObjectInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetTiktokObjectInfoRequest,
    rooms_services_public_pb.GetTiktokObjectInfoResponse,
    (request: rooms_services_public_pb.GetTiktokObjectInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetTiktokObjectInfoResponse.deserializeBinary
  );

  getTiktokObjectInfo(
    request: rooms_services_public_pb.GetTiktokObjectInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetTiktokObjectInfoResponse>;

  getTiktokObjectInfo(
    request: rooms_services_public_pb.GetTiktokObjectInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetTiktokObjectInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetTiktokObjectInfoResponse>;

  getTiktokObjectInfo(
    request: rooms_services_public_pb.GetTiktokObjectInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetTiktokObjectInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetTiktokObjectInfo',
        request,
        metadata || {},
        this.methodDescriptorGetTiktokObjectInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetTiktokObjectInfo',
    request,
    metadata || {},
    this.methodDescriptorGetTiktokObjectInfo);
  }

  methodDescriptorSearchTiktokObjects = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/SearchTiktokObjects',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.SearchTiktokObjectsRequest,
    rooms_services_public_pb.SearchTiktokObjectsResponse,
    (request: rooms_services_public_pb.SearchTiktokObjectsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.SearchTiktokObjectsResponse.deserializeBinary
  );

  searchTiktokObjects(
    request: rooms_services_public_pb.SearchTiktokObjectsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.SearchTiktokObjectsResponse>;

  searchTiktokObjects(
    request: rooms_services_public_pb.SearchTiktokObjectsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SearchTiktokObjectsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.SearchTiktokObjectsResponse>;

  searchTiktokObjects(
    request: rooms_services_public_pb.SearchTiktokObjectsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SearchTiktokObjectsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/SearchTiktokObjects',
        request,
        metadata || {},
        this.methodDescriptorSearchTiktokObjects,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/SearchTiktokObjects',
    request,
    metadata || {},
    this.methodDescriptorSearchTiktokObjects);
  }

  methodDescriptorGetYoutubeObjectInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetYoutubeObjectInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetYoutubeObjectInfoRequest,
    rooms_services_public_pb.GetYoutubeObjectInfoResponse,
    (request: rooms_services_public_pb.GetYoutubeObjectInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetYoutubeObjectInfoResponse.deserializeBinary
  );

  getYoutubeObjectInfo(
    request: rooms_services_public_pb.GetYoutubeObjectInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetYoutubeObjectInfoResponse>;

  getYoutubeObjectInfo(
    request: rooms_services_public_pb.GetYoutubeObjectInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetYoutubeObjectInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetYoutubeObjectInfoResponse>;

  getYoutubeObjectInfo(
    request: rooms_services_public_pb.GetYoutubeObjectInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetYoutubeObjectInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetYoutubeObjectInfo',
        request,
        metadata || {},
        this.methodDescriptorGetYoutubeObjectInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetYoutubeObjectInfo',
    request,
    metadata || {},
    this.methodDescriptorGetYoutubeObjectInfo);
  }

  methodDescriptorSearchYoutubeObjects = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/SearchYoutubeObjects',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.SearchYoutubeObjectsRequest,
    rooms_services_public_pb.SearchYoutubeObjectsResponse,
    (request: rooms_services_public_pb.SearchYoutubeObjectsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.SearchYoutubeObjectsResponse.deserializeBinary
  );

  searchYoutubeObjects(
    request: rooms_services_public_pb.SearchYoutubeObjectsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.SearchYoutubeObjectsResponse>;

  searchYoutubeObjects(
    request: rooms_services_public_pb.SearchYoutubeObjectsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SearchYoutubeObjectsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.SearchYoutubeObjectsResponse>;

  searchYoutubeObjects(
    request: rooms_services_public_pb.SearchYoutubeObjectsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.SearchYoutubeObjectsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/SearchYoutubeObjects',
        request,
        metadata || {},
        this.methodDescriptorSearchYoutubeObjects,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/SearchYoutubeObjects',
    request,
    metadata || {},
    this.methodDescriptorSearchYoutubeObjects);
  }

  methodDescriptorTokenizeStorageObject = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/TokenizeStorageObject',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.TokenizeStorageObjectRequest,
    rooms_services_public_pb.TokenizeStorageObjectResponse,
    (request: rooms_services_public_pb.TokenizeStorageObjectRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.TokenizeStorageObjectResponse.deserializeBinary
  );

  tokenizeStorageObject(
    request: rooms_services_public_pb.TokenizeStorageObjectRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.TokenizeStorageObjectResponse>;

  tokenizeStorageObject(
    request: rooms_services_public_pb.TokenizeStorageObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.TokenizeStorageObjectResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.TokenizeStorageObjectResponse>;

  tokenizeStorageObject(
    request: rooms_services_public_pb.TokenizeStorageObjectRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.TokenizeStorageObjectResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/TokenizeStorageObject',
        request,
        metadata || {},
        this.methodDescriptorTokenizeStorageObject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/TokenizeStorageObject',
    request,
    metadata || {},
    this.methodDescriptorTokenizeStorageObject);
  }

  methodDescriptorGetRecommendationInfo = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/GetRecommendationInfo',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.GetRecommendationInfoRequest,
    rooms_services_public_pb.GetRecommendationInfoResponse,
    (request: rooms_services_public_pb.GetRecommendationInfoRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.GetRecommendationInfoResponse.deserializeBinary
  );

  getRecommendationInfo(
    request: rooms_services_public_pb.GetRecommendationInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.GetRecommendationInfoResponse>;

  getRecommendationInfo(
    request: rooms_services_public_pb.GetRecommendationInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRecommendationInfoResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.GetRecommendationInfoResponse>;

  getRecommendationInfo(
    request: rooms_services_public_pb.GetRecommendationInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.GetRecommendationInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/GetRecommendationInfo',
        request,
        metadata || {},
        this.methodDescriptorGetRecommendationInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/GetRecommendationInfo',
    request,
    metadata || {},
    this.methodDescriptorGetRecommendationInfo);
  }

  methodDescriptorListRecommendations = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/ListRecommendations',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.ListRecommendationsRequest,
    rooms_services_public_pb.ListRecommendationsResponse,
    (request: rooms_services_public_pb.ListRecommendationsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.ListRecommendationsResponse.deserializeBinary
  );

  listRecommendations(
    request: rooms_services_public_pb.ListRecommendationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.ListRecommendationsResponse>;

  listRecommendations(
    request: rooms_services_public_pb.ListRecommendationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRecommendationsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.ListRecommendationsResponse>;

  listRecommendations(
    request: rooms_services_public_pb.ListRecommendationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.ListRecommendationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/ListRecommendations',
        request,
        metadata || {},
        this.methodDescriptorListRecommendations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/ListRecommendations',
    request,
    metadata || {},
    this.methodDescriptorListRecommendations);
  }

  methodDescriptorCountRecommendations = new grpcWeb.MethodDescriptor(
    '/rooms.api.v1.PublicService/CountRecommendations',
    grpcWeb.MethodType.UNARY,
    rooms_services_public_pb.CountRecommendationsRequest,
    rooms_services_public_pb.CountRecommendationsResponse,
    (request: rooms_services_public_pb.CountRecommendationsRequest) => {
      return request.serializeBinary();
    },
    rooms_services_public_pb.CountRecommendationsResponse.deserializeBinary
  );

  countRecommendations(
    request: rooms_services_public_pb.CountRecommendationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<rooms_services_public_pb.CountRecommendationsResponse>;

  countRecommendations(
    request: rooms_services_public_pb.CountRecommendationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRecommendationsResponse) => void): grpcWeb.ClientReadableStream<rooms_services_public_pb.CountRecommendationsResponse>;

  countRecommendations(
    request: rooms_services_public_pb.CountRecommendationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: rooms_services_public_pb.CountRecommendationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/rooms.api.v1.PublicService/CountRecommendations',
        request,
        metadata || {},
        this.methodDescriptorCountRecommendations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/rooms.api.v1.PublicService/CountRecommendations',
    request,
    metadata || {},
    this.methodDescriptorCountRecommendations);
  }

}

