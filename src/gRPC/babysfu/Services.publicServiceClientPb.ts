/**
 * @fileoverview gRPC-Web generated client stub for babysfu.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as babysfu_services_public_pb from '../babysfu/services.public_pb';


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

  methodDescriptorCreateConnection = new grpcWeb.MethodDescriptor(
    '/babysfu.api.v1.PublicService/CreateConnection',
    grpcWeb.MethodType.UNARY,
    babysfu_services_public_pb.CreateConnectionRequest,
    babysfu_services_public_pb.CreateConnectionResponse,
    (request: babysfu_services_public_pb.CreateConnectionRequest) => {
      return request.serializeBinary();
    },
    babysfu_services_public_pb.CreateConnectionResponse.deserializeBinary
  );

  createConnection(
    request: babysfu_services_public_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null): Promise<babysfu_services_public_pb.CreateConnectionResponse>;

  createConnection(
    request: babysfu_services_public_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: babysfu_services_public_pb.CreateConnectionResponse) => void): grpcWeb.ClientReadableStream<babysfu_services_public_pb.CreateConnectionResponse>;

  createConnection(
    request: babysfu_services_public_pb.CreateConnectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: babysfu_services_public_pb.CreateConnectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/babysfu.api.v1.PublicService/CreateConnection',
        request,
        metadata || {},
        this.methodDescriptorCreateConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/babysfu.api.v1.PublicService/CreateConnection',
    request,
    metadata || {},
    this.methodDescriptorCreateConnection);
  }

}

