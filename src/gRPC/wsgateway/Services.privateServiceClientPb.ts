/**
 * @fileoverview gRPC-Web generated client stub for wsgateway.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as wsgateway_services_private_pb from '../wsgateway/services.private_pb';


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

  methodDescriptorTransmitInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/TransmitInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.TransmitInternallyRequest,
    wsgateway_services_private_pb.TransmitInternallyResponse,
    (request: wsgateway_services_private_pb.TransmitInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.TransmitInternallyResponse.deserializeBinary
  );

  transmitInternally(
    request: wsgateway_services_private_pb.TransmitInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.TransmitInternallyResponse>;

  transmitInternally(
    request: wsgateway_services_private_pb.TransmitInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.TransmitInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.TransmitInternallyResponse>;

  transmitInternally(
    request: wsgateway_services_private_pb.TransmitInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.TransmitInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/TransmitInternally',
        request,
        metadata || {},
        this.methodDescriptorTransmitInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/TransmitInternally',
    request,
    metadata || {},
    this.methodDescriptorTransmitInternally);
  }

  methodDescriptorBroadcastInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/BroadcastInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.BroadcastInternallyRequest,
    wsgateway_services_private_pb.BroadcastInternallyResponse,
    (request: wsgateway_services_private_pb.BroadcastInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.BroadcastInternallyResponse.deserializeBinary
  );

  broadcastInternally(
    request: wsgateway_services_private_pb.BroadcastInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.BroadcastInternallyResponse>;

  broadcastInternally(
    request: wsgateway_services_private_pb.BroadcastInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.BroadcastInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.BroadcastInternallyResponse>;

  broadcastInternally(
    request: wsgateway_services_private_pb.BroadcastInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.BroadcastInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/BroadcastInternally',
        request,
        metadata || {},
        this.methodDescriptorBroadcastInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/BroadcastInternally',
    request,
    metadata || {},
    this.methodDescriptorBroadcastInternally);
  }

  methodDescriptorDeliverUserChatMessageInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeliverUserChatMessageInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeliverUserChatMessageInternallyRequest,
    wsgateway_services_private_pb.DeliverUserChatMessageInternallyResponse,
    (request: wsgateway_services_private_pb.DeliverUserChatMessageInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeliverUserChatMessageInternallyResponse.deserializeBinary
  );

  deliverUserChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverUserChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeliverUserChatMessageInternallyResponse>;

  deliverUserChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverUserChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeliverUserChatMessageInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeliverUserChatMessageInternallyResponse>;

  deliverUserChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverUserChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeliverUserChatMessageInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeliverUserChatMessageInternally',
        request,
        metadata || {},
        this.methodDescriptorDeliverUserChatMessageInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeliverUserChatMessageInternally',
    request,
    metadata || {},
    this.methodDescriptorDeliverUserChatMessageInternally);
  }

  methodDescriptorDeliverRoomChatMessageInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeliverRoomChatMessageInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeliverRoomChatMessageInternallyRequest,
    wsgateway_services_private_pb.DeliverRoomChatMessageInternallyResponse,
    (request: wsgateway_services_private_pb.DeliverRoomChatMessageInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeliverRoomChatMessageInternallyResponse.deserializeBinary
  );

  deliverRoomChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverRoomChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeliverRoomChatMessageInternallyResponse>;

  deliverRoomChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverRoomChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeliverRoomChatMessageInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeliverRoomChatMessageInternallyResponse>;

  deliverRoomChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverRoomChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeliverRoomChatMessageInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeliverRoomChatMessageInternally',
        request,
        metadata || {},
        this.methodDescriptorDeliverRoomChatMessageInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeliverRoomChatMessageInternally',
    request,
    metadata || {},
    this.methodDescriptorDeliverRoomChatMessageInternally);
  }

  methodDescriptorDeliverEventChatMessageInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeliverEventChatMessageInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeliverEventChatMessageInternallyRequest,
    wsgateway_services_private_pb.DeliverEventChatMessageInternallyResponse,
    (request: wsgateway_services_private_pb.DeliverEventChatMessageInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeliverEventChatMessageInternallyResponse.deserializeBinary
  );

  deliverEventChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverEventChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeliverEventChatMessageInternallyResponse>;

  deliverEventChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverEventChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeliverEventChatMessageInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeliverEventChatMessageInternallyResponse>;

  deliverEventChatMessageInternally(
    request: wsgateway_services_private_pb.DeliverEventChatMessageInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeliverEventChatMessageInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeliverEventChatMessageInternally',
        request,
        metadata || {},
        this.methodDescriptorDeliverEventChatMessageInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeliverEventChatMessageInternally',
    request,
    metadata || {},
    this.methodDescriptorDeliverEventChatMessageInternally);
  }

  methodDescriptorGetUserInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetUserInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetUserInternallyRequest,
    wsgateway_services_private_pb.GetUserInternallyResponse,
    (request: wsgateway_services_private_pb.GetUserInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetUserInternallyResponse.deserializeBinary
  );

  getUserInternally(
    request: wsgateway_services_private_pb.GetUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetUserInternallyResponse>;

  getUserInternally(
    request: wsgateway_services_private_pb.GetUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetUserInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetUserInternallyResponse>;

  getUserInternally(
    request: wsgateway_services_private_pb.GetUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetUserInternally',
        request,
        metadata || {},
        this.methodDescriptorGetUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetUserInternally',
    request,
    metadata || {},
    this.methodDescriptorGetUserInternally);
  }

  methodDescriptorGetRoomInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetRoomInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetRoomInternallyRequest,
    wsgateway_services_private_pb.GetRoomInternallyResponse,
    (request: wsgateway_services_private_pb.GetRoomInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetRoomInternallyResponse.deserializeBinary
  );

  getRoomInternally(
    request: wsgateway_services_private_pb.GetRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetRoomInternallyResponse>;

  getRoomInternally(
    request: wsgateway_services_private_pb.GetRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetRoomInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetRoomInternallyResponse>;

  getRoomInternally(
    request: wsgateway_services_private_pb.GetRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetRoomInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetRoomInternally',
        request,
        metadata || {},
        this.methodDescriptorGetRoomInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetRoomInternally',
    request,
    metadata || {},
    this.methodDescriptorGetRoomInternally);
  }

  methodDescriptorStateRoomInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/StateRoomInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.StateRoomInternallyRequest,
    wsgateway_services_private_pb.StateRoomInternallyResponse,
    (request: wsgateway_services_private_pb.StateRoomInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.StateRoomInternallyResponse.deserializeBinary
  );

  stateRoomInternally(
    request: wsgateway_services_private_pb.StateRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.StateRoomInternallyResponse>;

  stateRoomInternally(
    request: wsgateway_services_private_pb.StateRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.StateRoomInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.StateRoomInternallyResponse>;

  stateRoomInternally(
    request: wsgateway_services_private_pb.StateRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.StateRoomInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/StateRoomInternally',
        request,
        metadata || {},
        this.methodDescriptorStateRoomInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/StateRoomInternally',
    request,
    metadata || {},
    this.methodDescriptorStateRoomInternally);
  }

  methodDescriptorGetEventInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetEventInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetEventInternallyRequest,
    wsgateway_services_private_pb.GetEventInternallyResponse,
    (request: wsgateway_services_private_pb.GetEventInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetEventInternallyResponse.deserializeBinary
  );

  getEventInternally(
    request: wsgateway_services_private_pb.GetEventInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetEventInternallyResponse>;

  getEventInternally(
    request: wsgateway_services_private_pb.GetEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetEventInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetEventInternallyResponse>;

  getEventInternally(
    request: wsgateway_services_private_pb.GetEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetEventInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetEventInternally',
        request,
        metadata || {},
        this.methodDescriptorGetEventInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetEventInternally',
    request,
    metadata || {},
    this.methodDescriptorGetEventInternally);
  }

  methodDescriptorStateEventInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/StateEventInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.StateEventInternallyRequest,
    wsgateway_services_private_pb.StateEventInternallyResponse,
    (request: wsgateway_services_private_pb.StateEventInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.StateEventInternallyResponse.deserializeBinary
  );

  stateEventInternally(
    request: wsgateway_services_private_pb.StateEventInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.StateEventInternallyResponse>;

  stateEventInternally(
    request: wsgateway_services_private_pb.StateEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.StateEventInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.StateEventInternallyResponse>;

  stateEventInternally(
    request: wsgateway_services_private_pb.StateEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.StateEventInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/StateEventInternally',
        request,
        metadata || {},
        this.methodDescriptorStateEventInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/StateEventInternally',
    request,
    metadata || {},
    this.methodDescriptorStateEventInternally);
  }

  methodDescriptorGetRoomUserInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetRoomUserInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetRoomUserInternallyRequest,
    wsgateway_services_private_pb.GetRoomUserInternallyResponse,
    (request: wsgateway_services_private_pb.GetRoomUserInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetRoomUserInternallyResponse.deserializeBinary
  );

  getRoomUserInternally(
    request: wsgateway_services_private_pb.GetRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetRoomUserInternallyResponse>;

  getRoomUserInternally(
    request: wsgateway_services_private_pb.GetRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetRoomUserInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetRoomUserInternallyResponse>;

  getRoomUserInternally(
    request: wsgateway_services_private_pb.GetRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetRoomUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetRoomUserInternally',
        request,
        metadata || {},
        this.methodDescriptorGetRoomUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetRoomUserInternally',
    request,
    metadata || {},
    this.methodDescriptorGetRoomUserInternally);
  }

  methodDescriptorUpdateRoomUserInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/UpdateRoomUserInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.UpdateRoomUserInternallyRequest,
    wsgateway_services_private_pb.UpdateRoomUserInternallyResponse,
    (request: wsgateway_services_private_pb.UpdateRoomUserInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.UpdateRoomUserInternallyResponse.deserializeBinary
  );

  updateRoomUserInternally(
    request: wsgateway_services_private_pb.UpdateRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.UpdateRoomUserInternallyResponse>;

  updateRoomUserInternally(
    request: wsgateway_services_private_pb.UpdateRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateRoomUserInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.UpdateRoomUserInternallyResponse>;

  updateRoomUserInternally(
    request: wsgateway_services_private_pb.UpdateRoomUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateRoomUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/UpdateRoomUserInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoomUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/UpdateRoomUserInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoomUserInternally);
  }

  methodDescriptorGetSfuInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetSfuInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetSfuInternallyRequest,
    wsgateway_services_private_pb.GetSfuInternallyResponse,
    (request: wsgateway_services_private_pb.GetSfuInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetSfuInternallyResponse.deserializeBinary
  );

  getSfuInternally(
    request: wsgateway_services_private_pb.GetSfuInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetSfuInternallyResponse>;

  getSfuInternally(
    request: wsgateway_services_private_pb.GetSfuInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetSfuInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetSfuInternallyResponse>;

  getSfuInternally(
    request: wsgateway_services_private_pb.GetSfuInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetSfuInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetSfuInternally',
        request,
        metadata || {},
        this.methodDescriptorGetSfuInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetSfuInternally',
    request,
    metadata || {},
    this.methodDescriptorGetSfuInternally);
  }

  methodDescriptorListSfusInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/ListSfusInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.ListSfusInternallyRequest,
    wsgateway_services_private_pb.ListSfusInternallyResponse,
    (request: wsgateway_services_private_pb.ListSfusInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.ListSfusInternallyResponse.deserializeBinary
  );

  listSfusInternally(
    request: wsgateway_services_private_pb.ListSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.ListSfusInternallyResponse>;

  listSfusInternally(
    request: wsgateway_services_private_pb.ListSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListSfusInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.ListSfusInternallyResponse>;

  listSfusInternally(
    request: wsgateway_services_private_pb.ListSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListSfusInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/ListSfusInternally',
        request,
        metadata || {},
        this.methodDescriptorListSfusInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/ListSfusInternally',
    request,
    metadata || {},
    this.methodDescriptorListSfusInternally);
  }

  methodDescriptorCountSfusInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CountSfusInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CountSfusInternallyRequest,
    wsgateway_services_private_pb.CountSfusInternallyResponse,
    (request: wsgateway_services_private_pb.CountSfusInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CountSfusInternallyResponse.deserializeBinary
  );

  countSfusInternally(
    request: wsgateway_services_private_pb.CountSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CountSfusInternallyResponse>;

  countSfusInternally(
    request: wsgateway_services_private_pb.CountSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountSfusInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CountSfusInternallyResponse>;

  countSfusInternally(
    request: wsgateway_services_private_pb.CountSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountSfusInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CountSfusInternally',
        request,
        metadata || {},
        this.methodDescriptorCountSfusInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CountSfusInternally',
    request,
    metadata || {},
    this.methodDescriptorCountSfusInternally);
  }

  methodDescriptorCreateSfusInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CreateSfusInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CreateSfusInternallyRequest,
    wsgateway_services_private_pb.CreateSfusInternallyResponse,
    (request: wsgateway_services_private_pb.CreateSfusInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CreateSfusInternallyResponse.deserializeBinary
  );

  createSfusInternally(
    request: wsgateway_services_private_pb.CreateSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CreateSfusInternallyResponse>;

  createSfusInternally(
    request: wsgateway_services_private_pb.CreateSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateSfusInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CreateSfusInternallyResponse>;

  createSfusInternally(
    request: wsgateway_services_private_pb.CreateSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateSfusInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CreateSfusInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateSfusInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CreateSfusInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateSfusInternally);
  }

  methodDescriptorUpdateSfusInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/UpdateSfusInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.UpdateSfusInternallyRequest,
    wsgateway_services_private_pb.UpdateSfusInternallyResponse,
    (request: wsgateway_services_private_pb.UpdateSfusInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.UpdateSfusInternallyResponse.deserializeBinary
  );

  updateSfusInternally(
    request: wsgateway_services_private_pb.UpdateSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.UpdateSfusInternallyResponse>;

  updateSfusInternally(
    request: wsgateway_services_private_pb.UpdateSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateSfusInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.UpdateSfusInternallyResponse>;

  updateSfusInternally(
    request: wsgateway_services_private_pb.UpdateSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateSfusInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/UpdateSfusInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateSfusInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/UpdateSfusInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateSfusInternally);
  }

  methodDescriptorDeleteSfusInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeleteSfusInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeleteSfusInternallyRequest,
    wsgateway_services_private_pb.DeleteSfusInternallyResponse,
    (request: wsgateway_services_private_pb.DeleteSfusInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeleteSfusInternallyResponse.deserializeBinary
  );

  deleteSfusInternally(
    request: wsgateway_services_private_pb.DeleteSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeleteSfusInternallyResponse>;

  deleteSfusInternally(
    request: wsgateway_services_private_pb.DeleteSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteSfusInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeleteSfusInternallyResponse>;

  deleteSfusInternally(
    request: wsgateway_services_private_pb.DeleteSfusInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteSfusInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeleteSfusInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteSfusInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeleteSfusInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteSfusInternally);
  }

  methodDescriptorGetAndDeleteSfuInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetAndDeleteSfuInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetAndDeleteSfuInternallyRequest,
    wsgateway_services_private_pb.GetAndDeleteSfuInternallyResponse,
    (request: wsgateway_services_private_pb.GetAndDeleteSfuInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetAndDeleteSfuInternallyResponse.deserializeBinary
  );

  getAndDeleteSfuInternally(
    request: wsgateway_services_private_pb.GetAndDeleteSfuInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetAndDeleteSfuInternallyResponse>;

  getAndDeleteSfuInternally(
    request: wsgateway_services_private_pb.GetAndDeleteSfuInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteSfuInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetAndDeleteSfuInternallyResponse>;

  getAndDeleteSfuInternally(
    request: wsgateway_services_private_pb.GetAndDeleteSfuInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteSfuInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetAndDeleteSfuInternally',
        request,
        metadata || {},
        this.methodDescriptorGetAndDeleteSfuInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetAndDeleteSfuInternally',
    request,
    metadata || {},
    this.methodDescriptorGetAndDeleteSfuInternally);
  }

  methodDescriptorGetSfuUserInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetSfuUserInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetSfuUserInternallyRequest,
    wsgateway_services_private_pb.GetSfuUserInternallyResponse,
    (request: wsgateway_services_private_pb.GetSfuUserInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetSfuUserInternallyResponse.deserializeBinary
  );

  getSfuUserInternally(
    request: wsgateway_services_private_pb.GetSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetSfuUserInternallyResponse>;

  getSfuUserInternally(
    request: wsgateway_services_private_pb.GetSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetSfuUserInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetSfuUserInternallyResponse>;

  getSfuUserInternally(
    request: wsgateway_services_private_pb.GetSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetSfuUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetSfuUserInternally',
        request,
        metadata || {},
        this.methodDescriptorGetSfuUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetSfuUserInternally',
    request,
    metadata || {},
    this.methodDescriptorGetSfuUserInternally);
  }

  methodDescriptorListSfuUsersInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/ListSfuUsersInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.ListSfuUsersInternallyRequest,
    wsgateway_services_private_pb.ListSfuUsersInternallyResponse,
    (request: wsgateway_services_private_pb.ListSfuUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.ListSfuUsersInternallyResponse.deserializeBinary
  );

  listSfuUsersInternally(
    request: wsgateway_services_private_pb.ListSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.ListSfuUsersInternallyResponse>;

  listSfuUsersInternally(
    request: wsgateway_services_private_pb.ListSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListSfuUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.ListSfuUsersInternallyResponse>;

  listSfuUsersInternally(
    request: wsgateway_services_private_pb.ListSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListSfuUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/ListSfuUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorListSfuUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/ListSfuUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorListSfuUsersInternally);
  }

  methodDescriptorCountSfuUsersInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CountSfuUsersInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CountSfuUsersInternallyRequest,
    wsgateway_services_private_pb.CountSfuUsersInternallyResponse,
    (request: wsgateway_services_private_pb.CountSfuUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CountSfuUsersInternallyResponse.deserializeBinary
  );

  countSfuUsersInternally(
    request: wsgateway_services_private_pb.CountSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CountSfuUsersInternallyResponse>;

  countSfuUsersInternally(
    request: wsgateway_services_private_pb.CountSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountSfuUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CountSfuUsersInternallyResponse>;

  countSfuUsersInternally(
    request: wsgateway_services_private_pb.CountSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountSfuUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CountSfuUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorCountSfuUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CountSfuUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorCountSfuUsersInternally);
  }

  methodDescriptorCreateSfuUsersInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CreateSfuUsersInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CreateSfuUsersInternallyRequest,
    wsgateway_services_private_pb.CreateSfuUsersInternallyResponse,
    (request: wsgateway_services_private_pb.CreateSfuUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CreateSfuUsersInternallyResponse.deserializeBinary
  );

  createSfuUsersInternally(
    request: wsgateway_services_private_pb.CreateSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CreateSfuUsersInternallyResponse>;

  createSfuUsersInternally(
    request: wsgateway_services_private_pb.CreateSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateSfuUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CreateSfuUsersInternallyResponse>;

  createSfuUsersInternally(
    request: wsgateway_services_private_pb.CreateSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateSfuUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CreateSfuUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateSfuUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CreateSfuUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateSfuUsersInternally);
  }

  methodDescriptorUpdateSfuUsersInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/UpdateSfuUsersInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.UpdateSfuUsersInternallyRequest,
    wsgateway_services_private_pb.UpdateSfuUsersInternallyResponse,
    (request: wsgateway_services_private_pb.UpdateSfuUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.UpdateSfuUsersInternallyResponse.deserializeBinary
  );

  updateSfuUsersInternally(
    request: wsgateway_services_private_pb.UpdateSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.UpdateSfuUsersInternallyResponse>;

  updateSfuUsersInternally(
    request: wsgateway_services_private_pb.UpdateSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateSfuUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.UpdateSfuUsersInternallyResponse>;

  updateSfuUsersInternally(
    request: wsgateway_services_private_pb.UpdateSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateSfuUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/UpdateSfuUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateSfuUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/UpdateSfuUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateSfuUsersInternally);
  }

  methodDescriptorDeleteSfuUsersInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeleteSfuUsersInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeleteSfuUsersInternallyRequest,
    wsgateway_services_private_pb.DeleteSfuUsersInternallyResponse,
    (request: wsgateway_services_private_pb.DeleteSfuUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeleteSfuUsersInternallyResponse.deserializeBinary
  );

  deleteSfuUsersInternally(
    request: wsgateway_services_private_pb.DeleteSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeleteSfuUsersInternallyResponse>;

  deleteSfuUsersInternally(
    request: wsgateway_services_private_pb.DeleteSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteSfuUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeleteSfuUsersInternallyResponse>;

  deleteSfuUsersInternally(
    request: wsgateway_services_private_pb.DeleteSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteSfuUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeleteSfuUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteSfuUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeleteSfuUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteSfuUsersInternally);
  }

  methodDescriptorConnectSfuUserInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/ConnectSfuUserInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.ConnectSfuUserInternallyRequest,
    wsgateway_services_private_pb.ConnectSfuUserInternallyResponse,
    (request: wsgateway_services_private_pb.ConnectSfuUserInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.ConnectSfuUserInternallyResponse.deserializeBinary
  );

  connectSfuUserInternally(
    request: wsgateway_services_private_pb.ConnectSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.ConnectSfuUserInternallyResponse>;

  connectSfuUserInternally(
    request: wsgateway_services_private_pb.ConnectSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ConnectSfuUserInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.ConnectSfuUserInternallyResponse>;

  connectSfuUserInternally(
    request: wsgateway_services_private_pb.ConnectSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ConnectSfuUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/ConnectSfuUserInternally',
        request,
        metadata || {},
        this.methodDescriptorConnectSfuUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/ConnectSfuUserInternally',
    request,
    metadata || {},
    this.methodDescriptorConnectSfuUserInternally);
  }

  methodDescriptorIceCandidateSfuUserInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/IceCandidateSfuUserInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.IceCandidateSfuUserInternallyRequest,
    wsgateway_services_private_pb.IceCandidateSfuUserInternallyResponse,
    (request: wsgateway_services_private_pb.IceCandidateSfuUserInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.IceCandidateSfuUserInternallyResponse.deserializeBinary
  );

  iceCandidateSfuUserInternally(
    request: wsgateway_services_private_pb.IceCandidateSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.IceCandidateSfuUserInternallyResponse>;

  iceCandidateSfuUserInternally(
    request: wsgateway_services_private_pb.IceCandidateSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.IceCandidateSfuUserInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.IceCandidateSfuUserInternallyResponse>;

  iceCandidateSfuUserInternally(
    request: wsgateway_services_private_pb.IceCandidateSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.IceCandidateSfuUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/IceCandidateSfuUserInternally',
        request,
        metadata || {},
        this.methodDescriptorIceCandidateSfuUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/IceCandidateSfuUserInternally',
    request,
    metadata || {},
    this.methodDescriptorIceCandidateSfuUserInternally);
  }

  methodDescriptorDisconnectSfuUsersInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DisconnectSfuUsersInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DisconnectSfuUsersInternallyRequest,
    wsgateway_services_private_pb.DisconnectSfuUsersInternallyResponse,
    (request: wsgateway_services_private_pb.DisconnectSfuUsersInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DisconnectSfuUsersInternallyResponse.deserializeBinary
  );

  disconnectSfuUsersInternally(
    request: wsgateway_services_private_pb.DisconnectSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DisconnectSfuUsersInternallyResponse>;

  disconnectSfuUsersInternally(
    request: wsgateway_services_private_pb.DisconnectSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DisconnectSfuUsersInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DisconnectSfuUsersInternallyResponse>;

  disconnectSfuUsersInternally(
    request: wsgateway_services_private_pb.DisconnectSfuUsersInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DisconnectSfuUsersInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DisconnectSfuUsersInternally',
        request,
        metadata || {},
        this.methodDescriptorDisconnectSfuUsersInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DisconnectSfuUsersInternally',
    request,
    metadata || {},
    this.methodDescriptorDisconnectSfuUsersInternally);
  }

  methodDescriptorGetAndDeleteSfuUserInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetAndDeleteSfuUserInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyRequest,
    wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyResponse,
    (request: wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyResponse.deserializeBinary
  );

  getAndDeleteSfuUserInternally(
    request: wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyResponse>;

  getAndDeleteSfuUserInternally(
    request: wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyResponse>;

  getAndDeleteSfuUserInternally(
    request: wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteSfuUserInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetAndDeleteSfuUserInternally',
        request,
        metadata || {},
        this.methodDescriptorGetAndDeleteSfuUserInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetAndDeleteSfuUserInternally',
    request,
    metadata || {},
    this.methodDescriptorGetAndDeleteSfuUserInternally);
  }

  methodDescriptorGetWebsocketInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetWebsocketInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetWebsocketInternallyRequest,
    wsgateway_services_private_pb.GetWebsocketInternallyResponse,
    (request: wsgateway_services_private_pb.GetWebsocketInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetWebsocketInternallyResponse.deserializeBinary
  );

  getWebsocketInternally(
    request: wsgateway_services_private_pb.GetWebsocketInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetWebsocketInternallyResponse>;

  getWebsocketInternally(
    request: wsgateway_services_private_pb.GetWebsocketInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetWebsocketInternallyResponse>;

  getWebsocketInternally(
    request: wsgateway_services_private_pb.GetWebsocketInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetWebsocketInternally',
        request,
        metadata || {},
        this.methodDescriptorGetWebsocketInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetWebsocketInternally',
    request,
    metadata || {},
    this.methodDescriptorGetWebsocketInternally);
  }

  methodDescriptorListWebsocketsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/ListWebsocketsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.ListWebsocketsInternallyRequest,
    wsgateway_services_private_pb.ListWebsocketsInternallyResponse,
    (request: wsgateway_services_private_pb.ListWebsocketsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.ListWebsocketsInternallyResponse.deserializeBinary
  );

  listWebsocketsInternally(
    request: wsgateway_services_private_pb.ListWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.ListWebsocketsInternallyResponse>;

  listWebsocketsInternally(
    request: wsgateway_services_private_pb.ListWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.ListWebsocketsInternallyResponse>;

  listWebsocketsInternally(
    request: wsgateway_services_private_pb.ListWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/ListWebsocketsInternally',
        request,
        metadata || {},
        this.methodDescriptorListWebsocketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/ListWebsocketsInternally',
    request,
    metadata || {},
    this.methodDescriptorListWebsocketsInternally);
  }

  methodDescriptorCountWebsocketsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CountWebsocketsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CountWebsocketsInternallyRequest,
    wsgateway_services_private_pb.CountWebsocketsInternallyResponse,
    (request: wsgateway_services_private_pb.CountWebsocketsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CountWebsocketsInternallyResponse.deserializeBinary
  );

  countWebsocketsInternally(
    request: wsgateway_services_private_pb.CountWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CountWebsocketsInternallyResponse>;

  countWebsocketsInternally(
    request: wsgateway_services_private_pb.CountWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CountWebsocketsInternallyResponse>;

  countWebsocketsInternally(
    request: wsgateway_services_private_pb.CountWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CountWebsocketsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountWebsocketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CountWebsocketsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountWebsocketsInternally);
  }

  methodDescriptorCreateWebsocketsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CreateWebsocketsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CreateWebsocketsInternallyRequest,
    wsgateway_services_private_pb.CreateWebsocketsInternallyResponse,
    (request: wsgateway_services_private_pb.CreateWebsocketsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CreateWebsocketsInternallyResponse.deserializeBinary
  );

  createWebsocketsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CreateWebsocketsInternallyResponse>;

  createWebsocketsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CreateWebsocketsInternallyResponse>;

  createWebsocketsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CreateWebsocketsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateWebsocketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CreateWebsocketsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateWebsocketsInternally);
  }

  methodDescriptorUpdateWebsocketsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/UpdateWebsocketsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.UpdateWebsocketsInternallyRequest,
    wsgateway_services_private_pb.UpdateWebsocketsInternallyResponse,
    (request: wsgateway_services_private_pb.UpdateWebsocketsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.UpdateWebsocketsInternallyResponse.deserializeBinary
  );

  updateWebsocketsInternally(
    request: wsgateway_services_private_pb.UpdateWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.UpdateWebsocketsInternallyResponse>;

  updateWebsocketsInternally(
    request: wsgateway_services_private_pb.UpdateWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateWebsocketsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.UpdateWebsocketsInternallyResponse>;

  updateWebsocketsInternally(
    request: wsgateway_services_private_pb.UpdateWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateWebsocketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/UpdateWebsocketsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateWebsocketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/UpdateWebsocketsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateWebsocketsInternally);
  }

  methodDescriptorDeleteWebsocketsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeleteWebsocketsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeleteWebsocketsInternallyRequest,
    wsgateway_services_private_pb.DeleteWebsocketsInternallyResponse,
    (request: wsgateway_services_private_pb.DeleteWebsocketsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeleteWebsocketsInternallyResponse.deserializeBinary
  );

  deleteWebsocketsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeleteWebsocketsInternallyResponse>;

  deleteWebsocketsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeleteWebsocketsInternallyResponse>;

  deleteWebsocketsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeleteWebsocketsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteWebsocketsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeleteWebsocketsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteWebsocketsInternally);
  }

  methodDescriptorGetAndDeleteWebsocketInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyRequest,
    wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyResponse,
    (request: wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyResponse.deserializeBinary
  );

  getAndDeleteWebsocketInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyResponse>;

  getAndDeleteWebsocketInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyResponse>;

  getAndDeleteWebsocketInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketInternally',
        request,
        metadata || {},
        this.methodDescriptorGetAndDeleteWebsocketInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketInternally',
    request,
    metadata || {},
    this.methodDescriptorGetAndDeleteWebsocketInternally);
  }

  methodDescriptorGetWebsocketRoomInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetWebsocketRoomInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetWebsocketRoomInternallyRequest,
    wsgateway_services_private_pb.GetWebsocketRoomInternallyResponse,
    (request: wsgateway_services_private_pb.GetWebsocketRoomInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetWebsocketRoomInternallyResponse.deserializeBinary
  );

  getWebsocketRoomInternally(
    request: wsgateway_services_private_pb.GetWebsocketRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetWebsocketRoomInternallyResponse>;

  getWebsocketRoomInternally(
    request: wsgateway_services_private_pb.GetWebsocketRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketRoomInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetWebsocketRoomInternallyResponse>;

  getWebsocketRoomInternally(
    request: wsgateway_services_private_pb.GetWebsocketRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketRoomInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetWebsocketRoomInternally',
        request,
        metadata || {},
        this.methodDescriptorGetWebsocketRoomInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetWebsocketRoomInternally',
    request,
    metadata || {},
    this.methodDescriptorGetWebsocketRoomInternally);
  }

  methodDescriptorListWebsocketRoomsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/ListWebsocketRoomsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.ListWebsocketRoomsInternallyRequest,
    wsgateway_services_private_pb.ListWebsocketRoomsInternallyResponse,
    (request: wsgateway_services_private_pb.ListWebsocketRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.ListWebsocketRoomsInternallyResponse.deserializeBinary
  );

  listWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.ListWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.ListWebsocketRoomsInternallyResponse>;

  listWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.ListWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.ListWebsocketRoomsInternallyResponse>;

  listWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.ListWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/ListWebsocketRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorListWebsocketRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/ListWebsocketRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorListWebsocketRoomsInternally);
  }

  methodDescriptorCountWebsocketRoomsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CountWebsocketRoomsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CountWebsocketRoomsInternallyRequest,
    wsgateway_services_private_pb.CountWebsocketRoomsInternallyResponse,
    (request: wsgateway_services_private_pb.CountWebsocketRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CountWebsocketRoomsInternallyResponse.deserializeBinary
  );

  countWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.CountWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CountWebsocketRoomsInternallyResponse>;

  countWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.CountWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CountWebsocketRoomsInternallyResponse>;

  countWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.CountWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CountWebsocketRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountWebsocketRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CountWebsocketRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountWebsocketRoomsInternally);
  }

  methodDescriptorCreateWebsocketRoomsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CreateWebsocketRoomsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CreateWebsocketRoomsInternallyRequest,
    wsgateway_services_private_pb.CreateWebsocketRoomsInternallyResponse,
    (request: wsgateway_services_private_pb.CreateWebsocketRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CreateWebsocketRoomsInternallyResponse.deserializeBinary
  );

  createWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CreateWebsocketRoomsInternallyResponse>;

  createWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CreateWebsocketRoomsInternallyResponse>;

  createWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CreateWebsocketRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateWebsocketRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CreateWebsocketRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateWebsocketRoomsInternally);
  }

  methodDescriptorDeleteWebsocketRoomsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeleteWebsocketRoomsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyRequest,
    wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyResponse,
    (request: wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyResponse.deserializeBinary
  );

  deleteWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyResponse>;

  deleteWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyResponse>;

  deleteWebsocketRoomsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketRoomsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeleteWebsocketRoomsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteWebsocketRoomsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeleteWebsocketRoomsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteWebsocketRoomsInternally);
  }

  methodDescriptorGetAndDeleteWebsocketRoomInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketRoomInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyRequest,
    wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyResponse,
    (request: wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyResponse.deserializeBinary
  );

  getAndDeleteWebsocketRoomInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyResponse>;

  getAndDeleteWebsocketRoomInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyResponse>;

  getAndDeleteWebsocketRoomInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketRoomInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketRoomInternally',
        request,
        metadata || {},
        this.methodDescriptorGetAndDeleteWebsocketRoomInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketRoomInternally',
    request,
    metadata || {},
    this.methodDescriptorGetAndDeleteWebsocketRoomInternally);
  }

  methodDescriptorGetWebsocketEventInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetWebsocketEventInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetWebsocketEventInternallyRequest,
    wsgateway_services_private_pb.GetWebsocketEventInternallyResponse,
    (request: wsgateway_services_private_pb.GetWebsocketEventInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetWebsocketEventInternallyResponse.deserializeBinary
  );

  getWebsocketEventInternally(
    request: wsgateway_services_private_pb.GetWebsocketEventInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetWebsocketEventInternallyResponse>;

  getWebsocketEventInternally(
    request: wsgateway_services_private_pb.GetWebsocketEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketEventInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetWebsocketEventInternallyResponse>;

  getWebsocketEventInternally(
    request: wsgateway_services_private_pb.GetWebsocketEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketEventInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetWebsocketEventInternally',
        request,
        metadata || {},
        this.methodDescriptorGetWebsocketEventInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetWebsocketEventInternally',
    request,
    metadata || {},
    this.methodDescriptorGetWebsocketEventInternally);
  }

  methodDescriptorListWebsocketEventsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/ListWebsocketEventsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.ListWebsocketEventsInternallyRequest,
    wsgateway_services_private_pb.ListWebsocketEventsInternallyResponse,
    (request: wsgateway_services_private_pb.ListWebsocketEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.ListWebsocketEventsInternallyResponse.deserializeBinary
  );

  listWebsocketEventsInternally(
    request: wsgateway_services_private_pb.ListWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.ListWebsocketEventsInternallyResponse>;

  listWebsocketEventsInternally(
    request: wsgateway_services_private_pb.ListWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.ListWebsocketEventsInternallyResponse>;

  listWebsocketEventsInternally(
    request: wsgateway_services_private_pb.ListWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/ListWebsocketEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorListWebsocketEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/ListWebsocketEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorListWebsocketEventsInternally);
  }

  methodDescriptorCountWebsocketEventsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CountWebsocketEventsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CountWebsocketEventsInternallyRequest,
    wsgateway_services_private_pb.CountWebsocketEventsInternallyResponse,
    (request: wsgateway_services_private_pb.CountWebsocketEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CountWebsocketEventsInternallyResponse.deserializeBinary
  );

  countWebsocketEventsInternally(
    request: wsgateway_services_private_pb.CountWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CountWebsocketEventsInternallyResponse>;

  countWebsocketEventsInternally(
    request: wsgateway_services_private_pb.CountWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CountWebsocketEventsInternallyResponse>;

  countWebsocketEventsInternally(
    request: wsgateway_services_private_pb.CountWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CountWebsocketEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountWebsocketEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CountWebsocketEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountWebsocketEventsInternally);
  }

  methodDescriptorCreateWebsocketEventsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CreateWebsocketEventsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CreateWebsocketEventsInternallyRequest,
    wsgateway_services_private_pb.CreateWebsocketEventsInternallyResponse,
    (request: wsgateway_services_private_pb.CreateWebsocketEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CreateWebsocketEventsInternallyResponse.deserializeBinary
  );

  createWebsocketEventsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CreateWebsocketEventsInternallyResponse>;

  createWebsocketEventsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CreateWebsocketEventsInternallyResponse>;

  createWebsocketEventsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CreateWebsocketEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateWebsocketEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CreateWebsocketEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateWebsocketEventsInternally);
  }

  methodDescriptorDeleteWebsocketEventsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeleteWebsocketEventsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeleteWebsocketEventsInternallyRequest,
    wsgateway_services_private_pb.DeleteWebsocketEventsInternallyResponse,
    (request: wsgateway_services_private_pb.DeleteWebsocketEventsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeleteWebsocketEventsInternallyResponse.deserializeBinary
  );

  deleteWebsocketEventsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeleteWebsocketEventsInternallyResponse>;

  deleteWebsocketEventsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketEventsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeleteWebsocketEventsInternallyResponse>;

  deleteWebsocketEventsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketEventsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketEventsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeleteWebsocketEventsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteWebsocketEventsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeleteWebsocketEventsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteWebsocketEventsInternally);
  }

  methodDescriptorGetAndDeleteWebsocketEventInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketEventInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyRequest,
    wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyResponse,
    (request: wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyResponse.deserializeBinary
  );

  getAndDeleteWebsocketEventInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyResponse>;

  getAndDeleteWebsocketEventInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyResponse>;

  getAndDeleteWebsocketEventInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketEventInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketEventInternally',
        request,
        metadata || {},
        this.methodDescriptorGetAndDeleteWebsocketEventInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketEventInternally',
    request,
    metadata || {},
    this.methodDescriptorGetAndDeleteWebsocketEventInternally);
  }

  methodDescriptorGetWebsocketSessionInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetWebsocketSessionInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetWebsocketSessionInternallyRequest,
    wsgateway_services_private_pb.GetWebsocketSessionInternallyResponse,
    (request: wsgateway_services_private_pb.GetWebsocketSessionInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetWebsocketSessionInternallyResponse.deserializeBinary
  );

  getWebsocketSessionInternally(
    request: wsgateway_services_private_pb.GetWebsocketSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetWebsocketSessionInternallyResponse>;

  getWebsocketSessionInternally(
    request: wsgateway_services_private_pb.GetWebsocketSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketSessionInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetWebsocketSessionInternallyResponse>;

  getWebsocketSessionInternally(
    request: wsgateway_services_private_pb.GetWebsocketSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketSessionInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetWebsocketSessionInternally',
        request,
        metadata || {},
        this.methodDescriptorGetWebsocketSessionInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetWebsocketSessionInternally',
    request,
    metadata || {},
    this.methodDescriptorGetWebsocketSessionInternally);
  }

  methodDescriptorListWebsocketSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/ListWebsocketSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.ListWebsocketSessionsInternallyRequest,
    wsgateway_services_private_pb.ListWebsocketSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.ListWebsocketSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.ListWebsocketSessionsInternallyResponse.deserializeBinary
  );

  listWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.ListWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.ListWebsocketSessionsInternallyResponse>;

  listWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.ListWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.ListWebsocketSessionsInternallyResponse>;

  listWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.ListWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/ListWebsocketSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorListWebsocketSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/ListWebsocketSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorListWebsocketSessionsInternally);
  }

  methodDescriptorCountWebsocketSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CountWebsocketSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CountWebsocketSessionsInternallyRequest,
    wsgateway_services_private_pb.CountWebsocketSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.CountWebsocketSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CountWebsocketSessionsInternallyResponse.deserializeBinary
  );

  countWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.CountWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CountWebsocketSessionsInternallyResponse>;

  countWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.CountWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CountWebsocketSessionsInternallyResponse>;

  countWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.CountWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CountWebsocketSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountWebsocketSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CountWebsocketSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountWebsocketSessionsInternally);
  }

  methodDescriptorCreateWebsocketSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CreateWebsocketSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CreateWebsocketSessionsInternallyRequest,
    wsgateway_services_private_pb.CreateWebsocketSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.CreateWebsocketSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CreateWebsocketSessionsInternallyResponse.deserializeBinary
  );

  createWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CreateWebsocketSessionsInternallyResponse>;

  createWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CreateWebsocketSessionsInternallyResponse>;

  createWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CreateWebsocketSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateWebsocketSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CreateWebsocketSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateWebsocketSessionsInternally);
  }

  methodDescriptorUpdateWebsocketSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/UpdateWebsocketSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyRequest,
    wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyResponse.deserializeBinary
  );

  updateWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyResponse>;

  updateWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyResponse>;

  updateWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.UpdateWebsocketSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/UpdateWebsocketSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorUpdateWebsocketSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/UpdateWebsocketSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorUpdateWebsocketSessionsInternally);
  }

  methodDescriptorDeleteWebsocketSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeleteWebsocketSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyRequest,
    wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyResponse.deserializeBinary
  );

  deleteWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyResponse>;

  deleteWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyResponse>;

  deleteWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeleteWebsocketSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteWebsocketSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeleteWebsocketSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteWebsocketSessionsInternally);
  }

  methodDescriptorDisconnectWebsocketSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DisconnectWebsocketSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyRequest,
    wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyResponse.deserializeBinary
  );

  disconnectWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyResponse>;

  disconnectWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyResponse>;

  disconnectWebsocketSessionsInternally(
    request: wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DisconnectWebsocketSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DisconnectWebsocketSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorDisconnectWebsocketSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DisconnectWebsocketSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorDisconnectWebsocketSessionsInternally);
  }

  methodDescriptorGetAndDeleteWebsocketSessionInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketSessionInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyRequest,
    wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyResponse,
    (request: wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyResponse.deserializeBinary
  );

  getAndDeleteWebsocketSessionInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyResponse>;

  getAndDeleteWebsocketSessionInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyResponse>;

  getAndDeleteWebsocketSessionInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketSessionInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketSessionInternally',
        request,
        metadata || {},
        this.methodDescriptorGetAndDeleteWebsocketSessionInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketSessionInternally',
    request,
    metadata || {},
    this.methodDescriptorGetAndDeleteWebsocketSessionInternally);
  }

  methodDescriptorGetWebsocketOfflineSessionInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetWebsocketOfflineSessionInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyRequest,
    wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyResponse,
    (request: wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyResponse.deserializeBinary
  );

  getWebsocketOfflineSessionInternally(
    request: wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyResponse>;

  getWebsocketOfflineSessionInternally(
    request: wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyResponse>;

  getWebsocketOfflineSessionInternally(
    request: wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetWebsocketOfflineSessionInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetWebsocketOfflineSessionInternally',
        request,
        metadata || {},
        this.methodDescriptorGetWebsocketOfflineSessionInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetWebsocketOfflineSessionInternally',
    request,
    metadata || {},
    this.methodDescriptorGetWebsocketOfflineSessionInternally);
  }

  methodDescriptorListWebsocketOfflineSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/ListWebsocketOfflineSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyRequest,
    wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyResponse.deserializeBinary
  );

  listWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyResponse>;

  listWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyResponse>;

  listWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.ListWebsocketOfflineSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/ListWebsocketOfflineSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorListWebsocketOfflineSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/ListWebsocketOfflineSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorListWebsocketOfflineSessionsInternally);
  }

  methodDescriptorCountWebsocketOfflineSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CountWebsocketOfflineSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyRequest,
    wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyResponse.deserializeBinary
  );

  countWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyResponse>;

  countWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyResponse>;

  countWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CountWebsocketOfflineSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CountWebsocketOfflineSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorCountWebsocketOfflineSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CountWebsocketOfflineSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorCountWebsocketOfflineSessionsInternally);
  }

  methodDescriptorCreateWebsocketOfflineSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/CreateWebsocketOfflineSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyRequest,
    wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyResponse.deserializeBinary
  );

  createWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyResponse>;

  createWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyResponse>;

  createWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.CreateWebsocketOfflineSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/CreateWebsocketOfflineSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorCreateWebsocketOfflineSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/CreateWebsocketOfflineSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorCreateWebsocketOfflineSessionsInternally);
  }

  methodDescriptorDeleteWebsocketOfflineSessionsInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/DeleteWebsocketOfflineSessionsInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyRequest,
    wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyResponse,
    (request: wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyResponse.deserializeBinary
  );

  deleteWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyResponse>;

  deleteWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyResponse>;

  deleteWebsocketOfflineSessionsInternally(
    request: wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.DeleteWebsocketOfflineSessionsInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/DeleteWebsocketOfflineSessionsInternally',
        request,
        metadata || {},
        this.methodDescriptorDeleteWebsocketOfflineSessionsInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/DeleteWebsocketOfflineSessionsInternally',
    request,
    metadata || {},
    this.methodDescriptorDeleteWebsocketOfflineSessionsInternally);
  }

  methodDescriptorGetAndDeleteWebsocketOfflineSessionInternally = new grpcWeb.MethodDescriptor(
    '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketOfflineSessionInternally',
    grpcWeb.MethodType.UNARY,
    wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyRequest,
    wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyResponse,
    (request: wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyRequest) => {
      return request.serializeBinary();
    },
    wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyResponse.deserializeBinary
  );

  getAndDeleteWebsocketOfflineSessionInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyResponse>;

  getAndDeleteWebsocketOfflineSessionInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyResponse) => void): grpcWeb.ClientReadableStream<wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyResponse>;

  getAndDeleteWebsocketOfflineSessionInternally(
    request: wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsgateway_services_private_pb.GetAndDeleteWebsocketOfflineSessionInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketOfflineSessionInternally',
        request,
        metadata || {},
        this.methodDescriptorGetAndDeleteWebsocketOfflineSessionInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsgateway.api.v1.PrivateService/GetAndDeleteWebsocketOfflineSessionInternally',
    request,
    metadata || {},
    this.methodDescriptorGetAndDeleteWebsocketOfflineSessionInternally);
  }

}

