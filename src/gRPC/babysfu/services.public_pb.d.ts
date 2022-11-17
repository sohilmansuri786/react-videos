import * as jspb from 'google-protobuf'

import * as error_models_pb from '../error/models_pb';


export class CreateConnectionRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): CreateConnectionRequest;

  getSdpOffer(): Uint8Array | string;
  getSdpOffer_asU8(): Uint8Array;
  getSdpOffer_asB64(): string;
  setSdpOffer(value: Uint8Array | string): CreateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
  static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
  export type AsObject = {
    token: string,
    sdpOffer: Uint8Array | string,
  }
}

export class CreateConnectionResponse extends jspb.Message {
  getSdpAnswer(): Uint8Array | string;
  getSdpAnswer_asU8(): Uint8Array;
  getSdpAnswer_asB64(): string;
  setSdpAnswer(value: Uint8Array | string): CreateConnectionResponse;

  getError(): error_models_pb.Error | undefined;
  setError(value?: error_models_pb.Error): CreateConnectionResponse;
  hasError(): boolean;
  clearError(): CreateConnectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionResponse): CreateConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionResponse;
  static deserializeBinaryFromReader(message: CreateConnectionResponse, reader: jspb.BinaryReader): CreateConnectionResponse;
}

export namespace CreateConnectionResponse {
  export type AsObject = {
    sdpAnswer: Uint8Array | string,
    error?: error_models_pb.Error.AsObject,
  }
}

