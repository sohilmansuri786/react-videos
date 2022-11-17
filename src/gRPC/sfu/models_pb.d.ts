import * as jspb from 'google-protobuf'

import * as sfu_enums_pb from '../sfu/enums_pb';


export class SfuConnectionOptions extends jspb.Message {
  getUseProto(): boolean;
  setUseProto(value: boolean): SfuConnectionOptions;

  getUseCompression(): boolean;
  setUseCompression(value: boolean): SfuConnectionOptions;

  getUseTcp(): boolean;
  setUseTcp(value: boolean): SfuConnectionOptions;

  getIceRestart(): boolean;
  setIceRestart(value: boolean): SfuConnectionOptions;

  getMcuEmbedLayoutInFrames(): boolean;
  setMcuEmbedLayoutInFrames(value: boolean): SfuConnectionOptions;

  getExchangeCandidatesAsync(): boolean;
  setExchangeCandidatesAsync(value: boolean): SfuConnectionOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SfuConnectionOptions.AsObject;
  static toObject(includeInstance: boolean, msg: SfuConnectionOptions): SfuConnectionOptions.AsObject;
  static serializeBinaryToWriter(message: SfuConnectionOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SfuConnectionOptions;
  static deserializeBinaryFromReader(message: SfuConnectionOptions, reader: jspb.BinaryReader): SfuConnectionOptions;
}

export namespace SfuConnectionOptions {
  export type AsObject = {
    useProto: boolean,
    useCompression: boolean,
    useTcp: boolean,
    iceRestart: boolean,
    mcuEmbedLayoutInFrames: boolean,
    exchangeCandidatesAsync: boolean,
  }
}

export class IceCandidate extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): IceCandidate;

  getCandidate(): Uint8Array | string;
  getCandidate_asU8(): Uint8Array;
  getCandidate_asB64(): string;
  setCandidate(value: Uint8Array | string): IceCandidate;

  getSfuType(): sfu_enums_pb.SfuType;
  setSfuType(value: sfu_enums_pb.SfuType): IceCandidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IceCandidate.AsObject;
  static toObject(includeInstance: boolean, msg: IceCandidate): IceCandidate.AsObject;
  static serializeBinaryToWriter(message: IceCandidate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IceCandidate;
  static deserializeBinaryFromReader(message: IceCandidate, reader: jspb.BinaryReader): IceCandidate;
}

export namespace IceCandidate {
  export type AsObject = {
    roomId: string,
    candidate: Uint8Array | string,
    sfuType: sfu_enums_pb.SfuType,
  }
}

