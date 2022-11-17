import * as jspb from 'google-protobuf'

import * as mcu_enums_pb from '../mcu/enums_pb';


export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Resolution extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): Resolution;

  getHeight(): number;
  setHeight(value: number): Resolution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resolution.AsObject;
  static toObject(includeInstance: boolean, msg: Resolution): Resolution.AsObject;
  static serializeBinaryToWriter(message: Resolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resolution;
  static deserializeBinaryFromReader(message: Resolution, reader: jspb.BinaryReader): Resolution;
}

export namespace Resolution {
  export type AsObject = {
    width: number,
    height: number,
  }
}

export class LayoutCell extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): LayoutCell;

  getPosition(): number;
  setPosition(value: number): LayoutCell;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LayoutCell.AsObject;
  static toObject(includeInstance: boolean, msg: LayoutCell): LayoutCell.AsObject;
  static serializeBinaryToWriter(message: LayoutCell, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LayoutCell;
  static deserializeBinaryFromReader(message: LayoutCell, reader: jspb.BinaryReader): LayoutCell;
}

export namespace LayoutCell {
  export type AsObject = {
    userId: string,
    position: number,
  }
}

export class CellConfig extends jspb.Message {
  getCount(): number;
  setCount(value: number): CellConfig;

  getCellResolution(): Resolution | undefined;
  setCellResolution(value?: Resolution): CellConfig;
  hasCellResolution(): boolean;
  clearCellResolution(): CellConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CellConfig): CellConfig.AsObject;
  static serializeBinaryToWriter(message: CellConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellConfig;
  static deserializeBinaryFromReader(message: CellConfig, reader: jspb.BinaryReader): CellConfig;
}

export namespace CellConfig {
  export type AsObject = {
    count: number,
    cellResolution?: Resolution.AsObject,
  }
}

export class RTPPacket extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): RTPPacket;

  getKeyFrame(): boolean;
  setKeyFrame(value: boolean): RTPPacket;

  getType(): mcu_enums_pb.SampleType;
  setType(value: mcu_enums_pb.SampleType): RTPPacket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RTPPacket.AsObject;
  static toObject(includeInstance: boolean, msg: RTPPacket): RTPPacket.AsObject;
  static serializeBinaryToWriter(message: RTPPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RTPPacket;
  static deserializeBinaryFromReader(message: RTPPacket, reader: jspb.BinaryReader): RTPPacket;
}

export namespace RTPPacket {
  export type AsObject = {
    data: Uint8Array | string,
    keyFrame: boolean,
    type: mcu_enums_pb.SampleType,
  }
}

export class Sample extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Sample;

  getTimestamp(): number;
  setTimestamp(value: number): Sample;

  getType(): mcu_enums_pb.SampleType;
  setType(value: mcu_enums_pb.SampleType): Sample;

  getIsKeyFrame(): boolean;
  setIsKeyFrame(value: boolean): Sample;

  getResolution(): VideoResolution | undefined;
  setResolution(value?: VideoResolution): Sample;
  hasResolution(): boolean;
  clearResolution(): Sample;

  getPictureId(): number;
  setPictureId(value: number): Sample;

  getDuration(): number;
  setDuration(value: number): Sample;

  getPrevDroppedPackets(): number;
  setPrevDroppedPackets(value: number): Sample;

  getSpatialLayerId(): number;
  setSpatialLayerId(value: number): Sample;

  getTemporalLayerId(): number;
  setTemporalLayerId(value: number): Sample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sample.AsObject;
  static toObject(includeInstance: boolean, msg: Sample): Sample.AsObject;
  static serializeBinaryToWriter(message: Sample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sample;
  static deserializeBinaryFromReader(message: Sample, reader: jspb.BinaryReader): Sample;
}

export namespace Sample {
  export type AsObject = {
    data: Uint8Array | string,
    timestamp: number,
    type: mcu_enums_pb.SampleType,
    isKeyFrame: boolean,
    resolution?: VideoResolution.AsObject,
    pictureId: number,
    duration: number,
    prevDroppedPackets: number,
    spatialLayerId: number,
    temporalLayerId: number,
  }
}

export class VideoResolution extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): VideoResolution;

  getHeight(): number;
  setHeight(value: number): VideoResolution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoResolution.AsObject;
  static toObject(includeInstance: boolean, msg: VideoResolution): VideoResolution.AsObject;
  static serializeBinaryToWriter(message: VideoResolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoResolution;
  static deserializeBinaryFromReader(message: VideoResolution, reader: jspb.BinaryReader): VideoResolution;
}

export namespace VideoResolution {
  export type AsObject = {
    width: number,
    height: number,
  }
}

export class KeyFrameRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): KeyFrameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyFrameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyFrameRequest): KeyFrameRequest.AsObject;
  static serializeBinaryToWriter(message: KeyFrameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyFrameRequest;
  static deserializeBinaryFromReader(message: KeyFrameRequest, reader: jspb.BinaryReader): KeyFrameRequest;
}

export namespace KeyFrameRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ManagementCommand extends jspb.Message {
  getResetencoder(): boolean;
  setResetencoder(value: boolean): ManagementCommand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagementCommand.AsObject;
  static toObject(includeInstance: boolean, msg: ManagementCommand): ManagementCommand.AsObject;
  static serializeBinaryToWriter(message: ManagementCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagementCommand;
  static deserializeBinaryFromReader(message: ManagementCommand, reader: jspb.BinaryReader): ManagementCommand;
}

export namespace ManagementCommand {
  export type AsObject = {
    resetencoder: boolean,
  }
}

export class Layout extends jspb.Message {
  getName(): string;
  setName(value: string): Layout;

  getResolution(): Resolution | undefined;
  setResolution(value?: Resolution): Layout;
  hasResolution(): boolean;
  clearResolution(): Layout;

  getConfigList(): Array<LayoutCell>;
  setConfigList(value: Array<LayoutCell>): Layout;
  clearConfigList(): Layout;
  addConfig(value?: LayoutCell, index?: number): LayoutCell;

  getCellConfig(): CellConfig | undefined;
  setCellConfig(value?: CellConfig): Layout;
  hasCellConfig(): boolean;
  clearCellConfig(): Layout;

  getVersion(): number;
  setVersion(value: number): Layout;

  getSeed(): number;
  setSeed(value: number): Layout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Layout.AsObject;
  static toObject(includeInstance: boolean, msg: Layout): Layout.AsObject;
  static serializeBinaryToWriter(message: Layout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Layout;
  static deserializeBinaryFromReader(message: Layout, reader: jspb.BinaryReader): Layout;
}

export namespace Layout {
  export type AsObject = {
    name: string,
    resolution?: Resolution.AsObject,
    configList: Array<LayoutCell.AsObject>,
    cellConfig?: CellConfig.AsObject,
    version: number,
    seed: number,
  }
}

export class Room extends jspb.Message {
  getId(): string;
  setId(value: string): Room;

  getSeed(): number;
  setSeed(value: number): Room;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): Room;
  clearUserIdsList(): Room;
  addUserIds(value: string, index?: number): Room;

  getLayout(): Layout | undefined;
  setLayout(value?: Layout): Room;
  hasLayout(): boolean;
  clearLayout(): Room;

  getIsstreaming(): boolean;
  setIsstreaming(value: boolean): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    id: string,
    seed: number,
    userIdsList: Array<string>,
    layout?: Layout.AsObject,
    isstreaming: boolean,
  }
}

