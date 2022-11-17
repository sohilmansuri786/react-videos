import * as jspb from 'google-protobuf'

import * as mcu_models_pb from '../mcu/models_pb';


export class LayoutPacket extends jspb.Message {
  getLayout(): mcu_models_pb.Layout | undefined;
  setLayout(value?: mcu_models_pb.Layout): LayoutPacket;
  hasLayout(): boolean;
  clearLayout(): LayoutPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LayoutPacket.AsObject;
  static toObject(includeInstance: boolean, msg: LayoutPacket): LayoutPacket.AsObject;
  static serializeBinaryToWriter(message: LayoutPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LayoutPacket;
  static deserializeBinaryFromReader(message: LayoutPacket, reader: jspb.BinaryReader): LayoutPacket;
}

export namespace LayoutPacket {
  export type AsObject = {
    layout?: mcu_models_pb.Layout.AsObject,
  }
}

export class OutputPacket extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): OutputPacket;

  getSample(): mcu_models_pb.Sample | undefined;
  setSample(value?: mcu_models_pb.Sample): OutputPacket;
  hasSample(): boolean;
  clearSample(): OutputPacket;

  getLayoutPacket(): LayoutPacket | undefined;
  setLayoutPacket(value?: LayoutPacket): OutputPacket;
  hasLayoutPacket(): boolean;
  clearLayoutPacket(): OutputPacket;

  getKeyframeRequest(): mcu_models_pb.KeyFrameRequest | undefined;
  setKeyframeRequest(value?: mcu_models_pb.KeyFrameRequest): OutputPacket;
  hasKeyframeRequest(): boolean;
  clearKeyframeRequest(): OutputPacket;

  getHasMediaPlayer(): boolean;
  setHasMediaPlayer(value: boolean): OutputPacket;

  getEnd(): boolean;
  setEnd(value: boolean): OutputPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputPacket.AsObject;
  static toObject(includeInstance: boolean, msg: OutputPacket): OutputPacket.AsObject;
  static serializeBinaryToWriter(message: OutputPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputPacket;
  static deserializeBinaryFromReader(message: OutputPacket, reader: jspb.BinaryReader): OutputPacket;
}

export namespace OutputPacket {
  export type AsObject = {
    roomId: string,
    sample?: mcu_models_pb.Sample.AsObject,
    layoutPacket?: LayoutPacket.AsObject,
    keyframeRequest?: mcu_models_pb.KeyFrameRequest.AsObject,
    hasMediaPlayer: boolean,
    end: boolean,
  }
}

export class InputPacket extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): InputPacket;

  getRoomId(): string;
  setRoomId(value: string): InputPacket;

  getSample(): mcu_models_pb.Sample | undefined;
  setSample(value?: mcu_models_pb.Sample): InputPacket;
  hasSample(): boolean;
  clearSample(): InputPacket;

  getManagementcommand(): mcu_models_pb.ManagementCommand | undefined;
  setManagementcommand(value?: mcu_models_pb.ManagementCommand): InputPacket;
  hasManagementcommand(): boolean;
  clearManagementcommand(): InputPacket;

  getRtppacket(): mcu_models_pb.RTPPacket | undefined;
  setRtppacket(value?: mcu_models_pb.RTPPacket): InputPacket;
  hasRtppacket(): boolean;
  clearRtppacket(): InputPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputPacket.AsObject;
  static toObject(includeInstance: boolean, msg: InputPacket): InputPacket.AsObject;
  static serializeBinaryToWriter(message: InputPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputPacket;
  static deserializeBinaryFromReader(message: InputPacket, reader: jspb.BinaryReader): InputPacket;
}

export namespace InputPacket {
  export type AsObject = {
    userId: string,
    roomId: string,
    sample?: mcu_models_pb.Sample.AsObject,
    managementcommand?: mcu_models_pb.ManagementCommand.AsObject,
    rtppacket?: mcu_models_pb.RTPPacket.AsObject,
  }
}

export class OutputControlPacket extends jspb.Message {
  getKeyFrame(): boolean;
  setKeyFrame(value: boolean): OutputControlPacket;

  getRequestCase(): OutputControlPacket.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputControlPacket.AsObject;
  static toObject(includeInstance: boolean, msg: OutputControlPacket): OutputControlPacket.AsObject;
  static serializeBinaryToWriter(message: OutputControlPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputControlPacket;
  static deserializeBinaryFromReader(message: OutputControlPacket, reader: jspb.BinaryReader): OutputControlPacket;
}

export namespace OutputControlPacket {
  export type AsObject = {
    keyFrame: boolean,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    KEY_FRAME = 1,
  }
}

