/**
 * @fileoverview gRPC-Web generated client stub for wsserver.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as wsserver_services_private_pb from '../wsserver/services.private_pb';


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

  methodDescriptorPingInternally = new grpcWeb.MethodDescriptor(
    '/wsserver.api.v1.PrivateService/PingInternally',
    grpcWeb.MethodType.UNARY,
    wsserver_services_private_pb.PingInternallyRequest,
    wsserver_services_private_pb.PingInternallyResponse,
    (request: wsserver_services_private_pb.PingInternallyRequest) => {
      return request.serializeBinary();
    },
    wsserver_services_private_pb.PingInternallyResponse.deserializeBinary
  );

  pingInternally(
    request: wsserver_services_private_pb.PingInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsserver_services_private_pb.PingInternallyResponse>;

  pingInternally(
    request: wsserver_services_private_pb.PingInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsserver_services_private_pb.PingInternallyResponse) => void): grpcWeb.ClientReadableStream<wsserver_services_private_pb.PingInternallyResponse>;

  pingInternally(
    request: wsserver_services_private_pb.PingInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsserver_services_private_pb.PingInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsserver.api.v1.PrivateService/PingInternally',
        request,
        metadata || {},
        this.methodDescriptorPingInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsserver.api.v1.PrivateService/PingInternally',
    request,
    metadata || {},
    this.methodDescriptorPingInternally);
  }

  methodDescriptorBroadcastInternally = new grpcWeb.MethodDescriptor(
    '/wsserver.api.v1.PrivateService/BroadcastInternally',
    grpcWeb.MethodType.UNARY,
    wsserver_services_private_pb.BroadcastInternallyRequest,
    wsserver_services_private_pb.BroadcastInternallyResponse,
    (request: wsserver_services_private_pb.BroadcastInternallyRequest) => {
      return request.serializeBinary();
    },
    wsserver_services_private_pb.BroadcastInternallyResponse.deserializeBinary
  );

  broadcastInternally(
    request: wsserver_services_private_pb.BroadcastInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsserver_services_private_pb.BroadcastInternallyResponse>;

  broadcastInternally(
    request: wsserver_services_private_pb.BroadcastInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsserver_services_private_pb.BroadcastInternallyResponse) => void): grpcWeb.ClientReadableStream<wsserver_services_private_pb.BroadcastInternallyResponse>;

  broadcastInternally(
    request: wsserver_services_private_pb.BroadcastInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsserver_services_private_pb.BroadcastInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsserver.api.v1.PrivateService/BroadcastInternally',
        request,
        metadata || {},
        this.methodDescriptorBroadcastInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsserver.api.v1.PrivateService/BroadcastInternally',
    request,
    metadata || {},
    this.methodDescriptorBroadcastInternally);
  }

  methodDescriptorDisconnectInternally = new grpcWeb.MethodDescriptor(
    '/wsserver.api.v1.PrivateService/DisconnectInternally',
    grpcWeb.MethodType.UNARY,
    wsserver_services_private_pb.DisconnectInternallyRequest,
    wsserver_services_private_pb.DisconnectInternallyResponse,
    (request: wsserver_services_private_pb.DisconnectInternallyRequest) => {
      return request.serializeBinary();
    },
    wsserver_services_private_pb.DisconnectInternallyResponse.deserializeBinary
  );

  disconnectInternally(
    request: wsserver_services_private_pb.DisconnectInternallyRequest,
    metadata: grpcWeb.Metadata | null): Promise<wsserver_services_private_pb.DisconnectInternallyResponse>;

  disconnectInternally(
    request: wsserver_services_private_pb.DisconnectInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wsserver_services_private_pb.DisconnectInternallyResponse) => void): grpcWeb.ClientReadableStream<wsserver_services_private_pb.DisconnectInternallyResponse>;

  disconnectInternally(
    request: wsserver_services_private_pb.DisconnectInternallyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wsserver_services_private_pb.DisconnectInternallyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/wsserver.api.v1.PrivateService/DisconnectInternally',
        request,
        metadata || {},
        this.methodDescriptorDisconnectInternally,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/wsserver.api.v1.PrivateService/DisconnectInternally',
    request,
    metadata || {},
    this.methodDescriptorDisconnectInternally);
  }

}

