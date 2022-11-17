import * as jspb from 'google-protobuf'

import * as sfu_enums_pb from '../sfu/enums_pb';
import * as sfu_models_pb from '../sfu/models_pb';


export class ServerPacket extends jspb.Message {
  getType(): string;
  setType(value: string): ServerPacket;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ServerPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerPacket.AsObject;
  static toObject(includeInstance: boolean, msg: ServerPacket): ServerPacket.AsObject;
  static serializeBinaryToWriter(message: ServerPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerPacket;
  static deserializeBinaryFromReader(message: ServerPacket, reader: jspb.BinaryReader): ServerPacket;
}

export namespace ServerPacket {
  export type AsObject = {
    type: string,
    data: Uint8Array | string,
  }
}

export class Packet extends jspb.Message {
  getAction(): sfu_enums_pb.Action;
  setAction(value: sfu_enums_pb.Action): Packet;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Packet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    action: sfu_enums_pb.Action,
    data: Uint8Array | string,
  }
}

export class StreamInfo extends jspb.Message {
  getType(): sfu_enums_pb.StreamType;
  setType(value: sfu_enums_pb.StreamType): StreamInfo;

  getUserId(): string;
  setUserId(value: string): StreamInfo;

  getMid(): string;
  setMid(value: string): StreamInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StreamInfo): StreamInfo.AsObject;
  static serializeBinaryToWriter(message: StreamInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamInfo;
  static deserializeBinaryFromReader(message: StreamInfo, reader: jspb.BinaryReader): StreamInfo;
}

export namespace StreamInfo {
  export type AsObject = {
    type: sfu_enums_pb.StreamType,
    userId: string,
    mid: string,
  }
}

export class StreamsTogglePacket extends jspb.Message {
  getEnableStreamsList(): Array<StreamInfo>;
  setEnableStreamsList(value: Array<StreamInfo>): StreamsTogglePacket;
  clearEnableStreamsList(): StreamsTogglePacket;
  addEnableStreams(value?: StreamInfo, index?: number): StreamInfo;

  getDisableStreamsList(): Array<StreamInfo>;
  setDisableStreamsList(value: Array<StreamInfo>): StreamsTogglePacket;
  clearDisableStreamsList(): StreamsTogglePacket;
  addDisableStreams(value?: StreamInfo, index?: number): StreamInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamsTogglePacket.AsObject;
  static toObject(includeInstance: boolean, msg: StreamsTogglePacket): StreamsTogglePacket.AsObject;
  static serializeBinaryToWriter(message: StreamsTogglePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamsTogglePacket;
  static deserializeBinaryFromReader(message: StreamsTogglePacket, reader: jspb.BinaryReader): StreamsTogglePacket;
}

export namespace StreamsTogglePacket {
  export type AsObject = {
    enableStreamsList: Array<StreamInfo.AsObject>,
    disableStreamsList: Array<StreamInfo.AsObject>,
  }
}

export class StreamsPacket extends jspb.Message {
  getAddRequestsList(): Array<StreamInfo>;
  setAddRequestsList(value: Array<StreamInfo>): StreamsPacket;
  clearAddRequestsList(): StreamsPacket;
  addAddRequests(value?: StreamInfo, index?: number): StreamInfo;

  getRemovalRequestsList(): Array<StreamInfo>;
  setRemovalRequestsList(value: Array<StreamInfo>): StreamsPacket;
  clearRemovalRequestsList(): StreamsPacket;
  addRemovalRequests(value?: StreamInfo, index?: number): StreamInfo;

  getSdpOffer(): Uint8Array | string;
  getSdpOffer_asU8(): Uint8Array;
  getSdpOffer_asB64(): string;
  setSdpOffer(value: Uint8Array | string): StreamsPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamsPacket.AsObject;
  static toObject(includeInstance: boolean, msg: StreamsPacket): StreamsPacket.AsObject;
  static serializeBinaryToWriter(message: StreamsPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamsPacket;
  static deserializeBinaryFromReader(message: StreamsPacket, reader: jspb.BinaryReader): StreamsPacket;
}

export namespace StreamsPacket {
  export type AsObject = {
    addRequestsList: Array<StreamInfo.AsObject>,
    removalRequestsList: Array<StreamInfo.AsObject>,
    sdpOffer: Uint8Array | string,
  }
}

export class StreamsAnswerPacket extends jspb.Message {
  getSdpAnswer(): Uint8Array | string;
  getSdpAnswer_asU8(): Uint8Array;
  getSdpAnswer_asB64(): string;
  setSdpAnswer(value: Uint8Array | string): StreamsAnswerPacket;

  getAddRequestsList(): Array<StreamInfo>;
  setAddRequestsList(value: Array<StreamInfo>): StreamsAnswerPacket;
  clearAddRequestsList(): StreamsAnswerPacket;
  addAddRequests(value?: StreamInfo, index?: number): StreamInfo;

  getRemovalRequestsList(): Array<StreamInfo>;
  setRemovalRequestsList(value: Array<StreamInfo>): StreamsAnswerPacket;
  clearRemovalRequestsList(): StreamsAnswerPacket;
  addRemovalRequests(value?: StreamInfo, index?: number): StreamInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamsAnswerPacket.AsObject;
  static toObject(includeInstance: boolean, msg: StreamsAnswerPacket): StreamsAnswerPacket.AsObject;
  static serializeBinaryToWriter(message: StreamsAnswerPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamsAnswerPacket;
  static deserializeBinaryFromReader(message: StreamsAnswerPacket, reader: jspb.BinaryReader): StreamsAnswerPacket;
}

export namespace StreamsAnswerPacket {
  export type AsObject = {
    sdpAnswer: Uint8Array | string,
    addRequestsList: Array<StreamInfo.AsObject>,
    removalRequestsList: Array<StreamInfo.AsObject>,
  }
}

export class OfferPacket extends jspb.Message {
  getSdpAnswer(): Uint8Array | string;
  getSdpAnswer_asU8(): Uint8Array;
  getSdpAnswer_asB64(): string;
  setSdpAnswer(value: Uint8Array | string): OfferPacket;

  getSfuType(): sfu_enums_pb.SfuType;
  setSfuType(value: sfu_enums_pb.SfuType): OfferPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfferPacket.AsObject;
  static toObject(includeInstance: boolean, msg: OfferPacket): OfferPacket.AsObject;
  static serializeBinaryToWriter(message: OfferPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfferPacket;
  static deserializeBinaryFromReader(message: OfferPacket, reader: jspb.BinaryReader): OfferPacket;
}

export namespace OfferPacket {
  export type AsObject = {
    sdpAnswer: Uint8Array | string,
    sfuType: sfu_enums_pb.SfuType,
  }
}

export class MigrationRequiredPacket extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MigrationRequiredPacket.AsObject;
  static toObject(includeInstance: boolean, msg: MigrationRequiredPacket): MigrationRequiredPacket.AsObject;
  static serializeBinaryToWriter(message: MigrationRequiredPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MigrationRequiredPacket;
  static deserializeBinaryFromReader(message: MigrationRequiredPacket, reader: jspb.BinaryReader): MigrationRequiredPacket;
}

export namespace MigrationRequiredPacket {
  export type AsObject = {
  }
}

export class VideoCodecChangeRequiredPacket extends jspb.Message {
  getNewCodec(): sfu_enums_pb.Codec;
  setNewCodec(value: sfu_enums_pb.Codec): VideoCodecChangeRequiredPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoCodecChangeRequiredPacket.AsObject;
  static toObject(includeInstance: boolean, msg: VideoCodecChangeRequiredPacket): VideoCodecChangeRequiredPacket.AsObject;
  static serializeBinaryToWriter(message: VideoCodecChangeRequiredPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoCodecChangeRequiredPacket;
  static deserializeBinaryFromReader(message: VideoCodecChangeRequiredPacket, reader: jspb.BinaryReader): VideoCodecChangeRequiredPacket;
}

export namespace VideoCodecChangeRequiredPacket {
  export type AsObject = {
    newCodec: sfu_enums_pb.Codec,
  }
}

export class UnsupportedActionPacket extends jspb.Message {
  getAction(): sfu_enums_pb.Action;
  setAction(value: sfu_enums_pb.Action): UnsupportedActionPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsupportedActionPacket.AsObject;
  static toObject(includeInstance: boolean, msg: UnsupportedActionPacket): UnsupportedActionPacket.AsObject;
  static serializeBinaryToWriter(message: UnsupportedActionPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsupportedActionPacket;
  static deserializeBinaryFromReader(message: UnsupportedActionPacket, reader: jspb.BinaryReader): UnsupportedActionPacket;
}

export namespace UnsupportedActionPacket {
  export type AsObject = {
    action: sfu_enums_pb.Action,
  }
}

export class DisconnectedPacket extends jspb.Message {
  getReason(): string;
  setReason(value: string): DisconnectedPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectedPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectedPacket): DisconnectedPacket.AsObject;
  static serializeBinaryToWriter(message: DisconnectedPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectedPacket;
  static deserializeBinaryFromReader(message: DisconnectedPacket, reader: jspb.BinaryReader): DisconnectedPacket;
}

export namespace DisconnectedPacket {
  export type AsObject = {
    reason: string,
  }
}

export class DisconnectPacket extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisconnectPacket.AsObject;
  static toObject(includeInstance: boolean, msg: DisconnectPacket): DisconnectPacket.AsObject;
  static serializeBinaryToWriter(message: DisconnectPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisconnectPacket;
  static deserializeBinaryFromReader(message: DisconnectPacket, reader: jspb.BinaryReader): DisconnectPacket;
}

export namespace DisconnectPacket {
  export type AsObject = {
  }
}

export class ConferenceModePacket extends jspb.Message {
  getMode(): sfu_enums_pb.ConferenceMode;
  setMode(value: sfu_enums_pb.ConferenceMode): ConferenceModePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConferenceModePacket.AsObject;
  static toObject(includeInstance: boolean, msg: ConferenceModePacket): ConferenceModePacket.AsObject;
  static serializeBinaryToWriter(message: ConferenceModePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConferenceModePacket;
  static deserializeBinaryFromReader(message: ConferenceModePacket, reader: jspb.BinaryReader): ConferenceModePacket;
}

export namespace ConferenceModePacket {
  export type AsObject = {
    mode: sfu_enums_pb.ConferenceMode,
  }
}

export class PingPacket extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): PingPacket;

  getRtt(): number;
  setRtt(value: number): PingPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingPacket.AsObject;
  static toObject(includeInstance: boolean, msg: PingPacket): PingPacket.AsObject;
  static serializeBinaryToWriter(message: PingPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingPacket;
  static deserializeBinaryFromReader(message: PingPacket, reader: jspb.BinaryReader): PingPacket;
}

export namespace PingPacket {
  export type AsObject = {
    timestamp: number,
    rtt: number,
  }
}

export class SubscriptionRTTPacket extends jspb.Message {
  getSubId(): string;
  setSubId(value: string): SubscriptionRTTPacket;

  getRtt(): number;
  setRtt(value: number): SubscriptionRTTPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionRTTPacket.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionRTTPacket): SubscriptionRTTPacket.AsObject;
  static serializeBinaryToWriter(message: SubscriptionRTTPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionRTTPacket;
  static deserializeBinaryFromReader(message: SubscriptionRTTPacket, reader: jspb.BinaryReader): SubscriptionRTTPacket;
}

export namespace SubscriptionRTTPacket {
  export type AsObject = {
    subId: string,
    rtt: number,
  }
}

export class PongPacket extends jspb.Message {
  getServerTimestamp(): number;
  setServerTimestamp(value: number): PongPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PongPacket.AsObject;
  static toObject(includeInstance: boolean, msg: PongPacket): PongPacket.AsObject;
  static serializeBinaryToWriter(message: PongPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PongPacket;
  static deserializeBinaryFromReader(message: PongPacket, reader: jspb.BinaryReader): PongPacket;
}

export namespace PongPacket {
  export type AsObject = {
    serverTimestamp: number,
  }
}

export class MCUTestPacket extends jspb.Message {
  getResetencoder(): boolean;
  setResetencoder(value: boolean): MCUTestPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MCUTestPacket.AsObject;
  static toObject(includeInstance: boolean, msg: MCUTestPacket): MCUTestPacket.AsObject;
  static serializeBinaryToWriter(message: MCUTestPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MCUTestPacket;
  static deserializeBinaryFromReader(message: MCUTestPacket, reader: jspb.BinaryReader): MCUTestPacket;
}

export namespace MCUTestPacket {
  export type AsObject = {
    resetencoder: boolean,
  }
}

export class LocalInputReadyPacket extends jspb.Message {
  getStreamtype(): sfu_enums_pb.StreamType;
  setStreamtype(value: sfu_enums_pb.StreamType): LocalInputReadyPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalInputReadyPacket.AsObject;
  static toObject(includeInstance: boolean, msg: LocalInputReadyPacket): LocalInputReadyPacket.AsObject;
  static serializeBinaryToWriter(message: LocalInputReadyPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalInputReadyPacket;
  static deserializeBinaryFromReader(message: LocalInputReadyPacket, reader: jspb.BinaryReader): LocalInputReadyPacket;
}

export namespace LocalInputReadyPacket {
  export type AsObject = {
    streamtype: sfu_enums_pb.StreamType,
  }
}

export class NoDataPacket extends jspb.Message {
  getStreamtype(): sfu_enums_pb.StreamType;
  setStreamtype(value: sfu_enums_pb.StreamType): NoDataPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoDataPacket.AsObject;
  static toObject(includeInstance: boolean, msg: NoDataPacket): NoDataPacket.AsObject;
  static serializeBinaryToWriter(message: NoDataPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoDataPacket;
  static deserializeBinaryFromReader(message: NoDataPacket, reader: jspb.BinaryReader): NoDataPacket;
}

export namespace NoDataPacket {
  export type AsObject = {
    streamtype: sfu_enums_pb.StreamType,
  }
}

export class IceCandidatePacket extends jspb.Message {
  getIceCandidate(): sfu_models_pb.IceCandidate | undefined;
  setIceCandidate(value?: sfu_models_pb.IceCandidate): IceCandidatePacket;
  hasIceCandidate(): boolean;
  clearIceCandidate(): IceCandidatePacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IceCandidatePacket.AsObject;
  static toObject(includeInstance: boolean, msg: IceCandidatePacket): IceCandidatePacket.AsObject;
  static serializeBinaryToWriter(message: IceCandidatePacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IceCandidatePacket;
  static deserializeBinaryFromReader(message: IceCandidatePacket, reader: jspb.BinaryReader): IceCandidatePacket;
}

export namespace IceCandidatePacket {
  export type AsObject = {
    iceCandidate?: sfu_models_pb.IceCandidate.AsObject,
  }
}

