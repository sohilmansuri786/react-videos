/**
 * @fileoverview gRPC-Web generated client stub for mcu.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as mcu_services_private_pb from '../mcu/services.private_pb';
import * as mcu_packets_pb from '../mcu/packets_pb';


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

  methodDescriptorAddRoom = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/AddRoom',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.AddRoomRequest,
    mcu_services_private_pb.AddRoomResponse,
    (request: mcu_services_private_pb.AddRoomRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.AddRoomResponse.deserializeBinary
  );

  addRoom(
    request: mcu_services_private_pb.AddRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.AddRoomResponse>;

  addRoom(
    request: mcu_services_private_pb.AddRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.AddRoomResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.AddRoomResponse>;

  addRoom(
    request: mcu_services_private_pb.AddRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.AddRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/AddRoom',
        request,
        metadata || {},
        this.methodDescriptorAddRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/AddRoom',
    request,
    metadata || {},
    this.methodDescriptorAddRoom);
  }

  methodDescriptorRemoveRoom = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/RemoveRoom',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.RemoveRoomRequest,
    mcu_services_private_pb.RemoveRoomResponse,
    (request: mcu_services_private_pb.RemoveRoomRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.RemoveRoomResponse.deserializeBinary
  );

  removeRoom(
    request: mcu_services_private_pb.RemoveRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.RemoveRoomResponse>;

  removeRoom(
    request: mcu_services_private_pb.RemoveRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.RemoveRoomResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.RemoveRoomResponse>;

  removeRoom(
    request: mcu_services_private_pb.RemoveRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.RemoveRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/RemoveRoom',
        request,
        metadata || {},
        this.methodDescriptorRemoveRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/RemoveRoom',
    request,
    metadata || {},
    this.methodDescriptorRemoveRoom);
  }

  methodDescriptorStartStreaming = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/StartStreaming',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.StartStreamingRequest,
    mcu_services_private_pb.StartStreamingResponse,
    (request: mcu_services_private_pb.StartStreamingRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.StartStreamingResponse.deserializeBinary
  );

  startStreaming(
    request: mcu_services_private_pb.StartStreamingRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.StartStreamingResponse>;

  startStreaming(
    request: mcu_services_private_pb.StartStreamingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.StartStreamingResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.StartStreamingResponse>;

  startStreaming(
    request: mcu_services_private_pb.StartStreamingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.StartStreamingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/StartStreaming',
        request,
        metadata || {},
        this.methodDescriptorStartStreaming,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/StartStreaming',
    request,
    metadata || {},
    this.methodDescriptorStartStreaming);
  }

  methodDescriptorStopStreaming = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/StopStreaming',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.StopStreamingRequest,
    mcu_services_private_pb.StopStreamingResponse,
    (request: mcu_services_private_pb.StopStreamingRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.StopStreamingResponse.deserializeBinary
  );

  stopStreaming(
    request: mcu_services_private_pb.StopStreamingRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.StopStreamingResponse>;

  stopStreaming(
    request: mcu_services_private_pb.StopStreamingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.StopStreamingResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.StopStreamingResponse>;

  stopStreaming(
    request: mcu_services_private_pb.StopStreamingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.StopStreamingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/StopStreaming',
        request,
        metadata || {},
        this.methodDescriptorStopStreaming,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/StopStreaming',
    request,
    metadata || {},
    this.methodDescriptorStopStreaming);
  }

  methodDescriptorSetStreamer = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/SetStreamer',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.SetStreamerRequest,
    mcu_services_private_pb.SetStreamerResponse,
    (request: mcu_services_private_pb.SetStreamerRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.SetStreamerResponse.deserializeBinary
  );

  setStreamer(
    request: mcu_services_private_pb.SetStreamerRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.SetStreamerResponse>;

  setStreamer(
    request: mcu_services_private_pb.SetStreamerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.SetStreamerResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.SetStreamerResponse>;

  setStreamer(
    request: mcu_services_private_pb.SetStreamerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.SetStreamerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/SetStreamer',
        request,
        metadata || {},
        this.methodDescriptorSetStreamer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/SetStreamer',
    request,
    metadata || {},
    this.methodDescriptorSetStreamer);
  }

  methodDescriptorGetStreamer = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/GetStreamer',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.GetStreamerRequest,
    mcu_services_private_pb.GetStreamerResponse,
    (request: mcu_services_private_pb.GetStreamerRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.GetStreamerResponse.deserializeBinary
  );

  getStreamer(
    request: mcu_services_private_pb.GetStreamerRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.GetStreamerResponse>;

  getStreamer(
    request: mcu_services_private_pb.GetStreamerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.GetStreamerResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.GetStreamerResponse>;

  getStreamer(
    request: mcu_services_private_pb.GetStreamerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.GetStreamerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/GetStreamer',
        request,
        metadata || {},
        this.methodDescriptorGetStreamer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/GetStreamer',
    request,
    metadata || {},
    this.methodDescriptorGetStreamer);
  }

  methodDescriptorGetStreamers = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/GetStreamers',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.GetStreamersRequest,
    mcu_services_private_pb.GetStreamersResponse,
    (request: mcu_services_private_pb.GetStreamersRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.GetStreamersResponse.deserializeBinary
  );

  getStreamers(
    request: mcu_services_private_pb.GetStreamersRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.GetStreamersResponse>;

  getStreamers(
    request: mcu_services_private_pb.GetStreamersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.GetStreamersResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.GetStreamersResponse>;

  getStreamers(
    request: mcu_services_private_pb.GetStreamersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.GetStreamersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/GetStreamers',
        request,
        metadata || {},
        this.methodDescriptorGetStreamers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/GetStreamers',
    request,
    metadata || {},
    this.methodDescriptorGetStreamers);
  }

  methodDescriptorUpdateBroadcast = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/UpdateBroadcast',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.UpdateBroadcastRequest,
    mcu_services_private_pb.UpdateBroadcastResponse,
    (request: mcu_services_private_pb.UpdateBroadcastRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.UpdateBroadcastResponse.deserializeBinary
  );

  updateBroadcast(
    request: mcu_services_private_pb.UpdateBroadcastRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.UpdateBroadcastResponse>;

  updateBroadcast(
    request: mcu_services_private_pb.UpdateBroadcastRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.UpdateBroadcastResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.UpdateBroadcastResponse>;

  updateBroadcast(
    request: mcu_services_private_pb.UpdateBroadcastRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.UpdateBroadcastResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/UpdateBroadcast',
        request,
        metadata || {},
        this.methodDescriptorUpdateBroadcast,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/UpdateBroadcast',
    request,
    metadata || {},
    this.methodDescriptorUpdateBroadcast);
  }

  methodDescriptorAddRooms = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/AddRooms',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.AddRoomsRequest,
    mcu_services_private_pb.AddRoomsResponse,
    (request: mcu_services_private_pb.AddRoomsRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.AddRoomsResponse.deserializeBinary
  );

  addRooms(
    request: mcu_services_private_pb.AddRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.AddRoomsResponse>;

  addRooms(
    request: mcu_services_private_pb.AddRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.AddRoomsResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.AddRoomsResponse>;

  addRooms(
    request: mcu_services_private_pb.AddRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.AddRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/AddRooms',
        request,
        metadata || {},
        this.methodDescriptorAddRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/AddRooms',
    request,
    metadata || {},
    this.methodDescriptorAddRooms);
  }

  methodDescriptorRemoveRooms = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/RemoveRooms',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.RemoveRoomsRequest,
    mcu_services_private_pb.RemoveRoomsResponse,
    (request: mcu_services_private_pb.RemoveRoomsRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.RemoveRoomsResponse.deserializeBinary
  );

  removeRooms(
    request: mcu_services_private_pb.RemoveRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.RemoveRoomsResponse>;

  removeRooms(
    request: mcu_services_private_pb.RemoveRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.RemoveRoomsResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.RemoveRoomsResponse>;

  removeRooms(
    request: mcu_services_private_pb.RemoveRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.RemoveRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/RemoveRooms',
        request,
        metadata || {},
        this.methodDescriptorRemoveRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/RemoveRooms',
    request,
    metadata || {},
    this.methodDescriptorRemoveRooms);
  }

  methodDescriptorListRooms = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/ListRooms',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.ListRoomsRequest,
    mcu_services_private_pb.ListRoomsResponse,
    (request: mcu_services_private_pb.ListRoomsRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.ListRoomsResponse.deserializeBinary
  );

  listRooms(
    request: mcu_services_private_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.ListRoomsResponse>;

  listRooms(
    request: mcu_services_private_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.ListRoomsResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.ListRoomsResponse>;

  listRooms(
    request: mcu_services_private_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.ListRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/ListRooms',
        request,
        metadata || {},
        this.methodDescriptorListRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/ListRooms',
    request,
    metadata || {},
    this.methodDescriptorListRooms);
  }

  methodDescriptorGetRoom = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/GetRoom',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.GetRoomRequest,
    mcu_services_private_pb.GetRoomResponse,
    (request: mcu_services_private_pb.GetRoomRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.GetRoomResponse.deserializeBinary
  );

  getRoom(
    request: mcu_services_private_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.GetRoomResponse>;

  getRoom(
    request: mcu_services_private_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.GetRoomResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.GetRoomResponse>;

  getRoom(
    request: mcu_services_private_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.GetRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/GetRoom',
        request,
        metadata || {},
        this.methodDescriptorGetRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/GetRoom',
    request,
    metadata || {},
    this.methodDescriptorGetRoom);
  }

  methodDescriptorStartRoomEvents = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/StartRoomEvents',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.StartRoomEventsRequest,
    mcu_services_private_pb.StartRoomEventsResponse,
    (request: mcu_services_private_pb.StartRoomEventsRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.StartRoomEventsResponse.deserializeBinary
  );

  startRoomEvents(
    request: mcu_services_private_pb.StartRoomEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.StartRoomEventsResponse>;

  startRoomEvents(
    request: mcu_services_private_pb.StartRoomEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.StartRoomEventsResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.StartRoomEventsResponse>;

  startRoomEvents(
    request: mcu_services_private_pb.StartRoomEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.StartRoomEventsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/StartRoomEvents',
        request,
        metadata || {},
        this.methodDescriptorStartRoomEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/StartRoomEvents',
    request,
    metadata || {},
    this.methodDescriptorStartRoomEvents);
  }

  methodDescriptorStopRoomEvents = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/StopRoomEvents',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.StopRoomEventsRequest,
    mcu_services_private_pb.StopRoomEventsResponse,
    (request: mcu_services_private_pb.StopRoomEventsRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.StopRoomEventsResponse.deserializeBinary
  );

  stopRoomEvents(
    request: mcu_services_private_pb.StopRoomEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.StopRoomEventsResponse>;

  stopRoomEvents(
    request: mcu_services_private_pb.StopRoomEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.StopRoomEventsResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.StopRoomEventsResponse>;

  stopRoomEvents(
    request: mcu_services_private_pb.StopRoomEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.StopRoomEventsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/StopRoomEvents',
        request,
        metadata || {},
        this.methodDescriptorStopRoomEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/StopRoomEvents',
    request,
    metadata || {},
    this.methodDescriptorStopRoomEvents);
  }

  methodDescriptorUpdateRooms = new grpcWeb.MethodDescriptor(
    '/mcu.api.v1.PrivateService/UpdateRooms',
    grpcWeb.MethodType.UNARY,
    mcu_services_private_pb.UpdateRoomsRequest,
    mcu_services_private_pb.UpdateRoomsResponse,
    (request: mcu_services_private_pb.UpdateRoomsRequest) => {
      return request.serializeBinary();
    },
    mcu_services_private_pb.UpdateRoomsResponse.deserializeBinary
  );

  updateRooms(
    request: mcu_services_private_pb.UpdateRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<mcu_services_private_pb.UpdateRoomsResponse>;

  updateRooms(
    request: mcu_services_private_pb.UpdateRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.UpdateRoomsResponse) => void): grpcWeb.ClientReadableStream<mcu_services_private_pb.UpdateRoomsResponse>;

  updateRooms(
    request: mcu_services_private_pb.UpdateRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mcu_services_private_pb.UpdateRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mcu.api.v1.PrivateService/UpdateRooms',
        request,
        metadata || {},
        this.methodDescriptorUpdateRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mcu.api.v1.PrivateService/UpdateRooms',
    request,
    metadata || {},
    this.methodDescriptorUpdateRooms);
  }

}

