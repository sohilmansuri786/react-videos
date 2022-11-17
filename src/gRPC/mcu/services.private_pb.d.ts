import * as jspb from 'google-protobuf'

import * as mcu_enums_pb from '../mcu/enums_pb';
import * as mcu_models_pb from '../mcu/models_pb';
import * as mcu_packets_pb from '../mcu/packets_pb';


export class UpdateRoomsRequest extends jspb.Message {
  getUpdateRoomsList(): Array<UpdateRoom>;
  setUpdateRoomsList(value: Array<UpdateRoom>): UpdateRoomsRequest;
  clearUpdateRoomsList(): UpdateRoomsRequest;
  addUpdateRooms(value?: UpdateRoom, index?: number): UpdateRoom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomsRequest): UpdateRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomsRequest;
  static deserializeBinaryFromReader(message: UpdateRoomsRequest, reader: jspb.BinaryReader): UpdateRoomsRequest;
}

export namespace UpdateRoomsRequest {
  export type AsObject = {
    updateRoomsList: Array<UpdateRoom.AsObject>,
  }
}

export class UpdateRoomsResponse extends jspb.Message {
  getSuccessfulRoomUpdatesList(): Array<mcu_models_pb.Room>;
  setSuccessfulRoomUpdatesList(value: Array<mcu_models_pb.Room>): UpdateRoomsResponse;
  clearSuccessfulRoomUpdatesList(): UpdateRoomsResponse;
  addSuccessfulRoomUpdates(value?: mcu_models_pb.Room, index?: number): mcu_models_pb.Room;

  getFailedRoomUpdatesList(): Array<mcu_models_pb.Room>;
  setFailedRoomUpdatesList(value: Array<mcu_models_pb.Room>): UpdateRoomsResponse;
  clearFailedRoomUpdatesList(): UpdateRoomsResponse;
  addFailedRoomUpdates(value?: mcu_models_pb.Room, index?: number): mcu_models_pb.Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomsResponse): UpdateRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomsResponse;
  static deserializeBinaryFromReader(message: UpdateRoomsResponse, reader: jspb.BinaryReader): UpdateRoomsResponse;
}

export namespace UpdateRoomsResponse {
  export type AsObject = {
    successfulRoomUpdatesList: Array<mcu_models_pb.Room.AsObject>,
    failedRoomUpdatesList: Array<mcu_models_pb.Room.AsObject>,
  }
}

export class UpdateRoom extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): UpdateRoom;

  getRoomBroadcast(): UpdateRoomBroadcast | undefined;
  setRoomBroadcast(value?: UpdateRoomBroadcast): UpdateRoom;
  hasRoomBroadcast(): boolean;
  clearRoomBroadcast(): UpdateRoom;

  getEventId(): StringValue | undefined;
  setEventId(value?: StringValue): UpdateRoom;
  hasEventId(): boolean;
  clearEventId(): UpdateRoom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoom.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoom): UpdateRoom.AsObject;
  static serializeBinaryToWriter(message: UpdateRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoom;
  static deserializeBinaryFromReader(message: UpdateRoom, reader: jspb.BinaryReader): UpdateRoom;
}

export namespace UpdateRoom {
  export type AsObject = {
    roomId: string,
    roomBroadcast?: UpdateRoomBroadcast.AsObject,
    eventId?: StringValue.AsObject,
  }
}

export class StringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringValue.AsObject;
  static toObject(includeInstance: boolean, msg: StringValue): StringValue.AsObject;
  static serializeBinaryToWriter(message: StringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringValue;
  static deserializeBinaryFromReader(message: StringValue, reader: jspb.BinaryReader): StringValue;
}

export namespace StringValue {
  export type AsObject = {
    value: string,
  }
}

export class UpdateRoomBroadcast extends jspb.Message {
  getUpdateBroadcastLayout(): UpdateBroadcastLayout | undefined;
  setUpdateBroadcastLayout(value?: UpdateBroadcastLayout): UpdateRoomBroadcast;
  hasUpdateBroadcastLayout(): boolean;
  clearUpdateBroadcastLayout(): UpdateRoomBroadcast;

  getUpdateBroadcastPerformers(): UpdateBroadcastPerformers | undefined;
  setUpdateBroadcastPerformers(value?: UpdateBroadcastPerformers): UpdateRoomBroadcast;
  hasUpdateBroadcastPerformers(): boolean;
  clearUpdateBroadcastPerformers(): UpdateRoomBroadcast;

  getUpdateMixerType(): UpdateMixerType | undefined;
  setUpdateMixerType(value?: UpdateMixerType): UpdateRoomBroadcast;
  hasUpdateMixerType(): boolean;
  clearUpdateMixerType(): UpdateRoomBroadcast;

  getUpdateRoomGridOrder(): UpdateRoomGridOrder | undefined;
  setUpdateRoomGridOrder(value?: UpdateRoomGridOrder): UpdateRoomBroadcast;
  hasUpdateRoomGridOrder(): boolean;
  clearUpdateRoomGridOrder(): UpdateRoomBroadcast;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomBroadcast.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomBroadcast): UpdateRoomBroadcast.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomBroadcast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomBroadcast;
  static deserializeBinaryFromReader(message: UpdateRoomBroadcast, reader: jspb.BinaryReader): UpdateRoomBroadcast;
}

export namespace UpdateRoomBroadcast {
  export type AsObject = {
    updateBroadcastLayout?: UpdateBroadcastLayout.AsObject,
    updateBroadcastPerformers?: UpdateBroadcastPerformers.AsObject,
    updateMixerType?: UpdateMixerType.AsObject,
    updateRoomGridOrder?: UpdateRoomGridOrder.AsObject,
  }
}

export class GetRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): GetRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomRequest): GetRoomRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomRequest;
  static deserializeBinaryFromReader(message: GetRoomRequest, reader: jspb.BinaryReader): GetRoomRequest;
}

export namespace GetRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class GetRoomResponse extends jspb.Message {
  getRoom(): mcu_models_pb.Room | undefined;
  setRoom(value?: mcu_models_pb.Room): GetRoomResponse;
  hasRoom(): boolean;
  clearRoom(): GetRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomResponse): GetRoomResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomResponse;
  static deserializeBinaryFromReader(message: GetRoomResponse, reader: jspb.BinaryReader): GetRoomResponse;
}

export namespace GetRoomResponse {
  export type AsObject = {
    room?: mcu_models_pb.Room.AsObject,
  }
}

export class ListRoomsRequest extends jspb.Message {
  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): ListRoomsRequest;
  clearRoomIdsList(): ListRoomsRequest;
  addRoomIds(value: string, index?: number): ListRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsRequest): ListRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: ListRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsRequest;
  static deserializeBinaryFromReader(message: ListRoomsRequest, reader: jspb.BinaryReader): ListRoomsRequest;
}

export namespace ListRoomsRequest {
  export type AsObject = {
    roomIdsList: Array<string>,
  }
}

export class ListRoomsResponse extends jspb.Message {
  getRoomsList(): Array<mcu_models_pb.Room>;
  setRoomsList(value: Array<mcu_models_pb.Room>): ListRoomsResponse;
  clearRoomsList(): ListRoomsResponse;
  addRooms(value?: mcu_models_pb.Room, index?: number): mcu_models_pb.Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsResponse): ListRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsResponse;
  static deserializeBinaryFromReader(message: ListRoomsResponse, reader: jspb.BinaryReader): ListRoomsResponse;
}

export namespace ListRoomsResponse {
  export type AsObject = {
    roomsList: Array<mcu_models_pb.Room.AsObject>,
  }
}

export class StopRoomEventsRequest extends jspb.Message {
  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): StopRoomEventsRequest;
  clearRoomIdsList(): StopRoomEventsRequest;
  addRoomIds(value: string, index?: number): StopRoomEventsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRoomEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopRoomEventsRequest): StopRoomEventsRequest.AsObject;
  static serializeBinaryToWriter(message: StopRoomEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRoomEventsRequest;
  static deserializeBinaryFromReader(message: StopRoomEventsRequest, reader: jspb.BinaryReader): StopRoomEventsRequest;
}

export namespace StopRoomEventsRequest {
  export type AsObject = {
    roomIdsList: Array<string>,
  }
}

export class StopRoomEventsResponse extends jspb.Message {
  getRoomsList(): Array<mcu_models_pb.Room>;
  setRoomsList(value: Array<mcu_models_pb.Room>): StopRoomEventsResponse;
  clearRoomsList(): StopRoomEventsResponse;
  addRooms(value?: mcu_models_pb.Room, index?: number): mcu_models_pb.Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRoomEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopRoomEventsResponse): StopRoomEventsResponse.AsObject;
  static serializeBinaryToWriter(message: StopRoomEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRoomEventsResponse;
  static deserializeBinaryFromReader(message: StopRoomEventsResponse, reader: jspb.BinaryReader): StopRoomEventsResponse;
}

export namespace StopRoomEventsResponse {
  export type AsObject = {
    roomsList: Array<mcu_models_pb.Room.AsObject>,
  }
}

export class StartRoomEventsRequest extends jspb.Message {
  getUpdateRoomsList(): Array<UpdateRoom>;
  setUpdateRoomsList(value: Array<UpdateRoom>): StartRoomEventsRequest;
  clearUpdateRoomsList(): StartRoomEventsRequest;
  addUpdateRooms(value?: UpdateRoom, index?: number): UpdateRoom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartRoomEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartRoomEventsRequest): StartRoomEventsRequest.AsObject;
  static serializeBinaryToWriter(message: StartRoomEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartRoomEventsRequest;
  static deserializeBinaryFromReader(message: StartRoomEventsRequest, reader: jspb.BinaryReader): StartRoomEventsRequest;
}

export namespace StartRoomEventsRequest {
  export type AsObject = {
    updateRoomsList: Array<UpdateRoom.AsObject>,
  }
}

export class StartRoomEventsResponse extends jspb.Message {
  getRoomsList(): Array<mcu_models_pb.Room>;
  setRoomsList(value: Array<mcu_models_pb.Room>): StartRoomEventsResponse;
  clearRoomsList(): StartRoomEventsResponse;
  addRooms(value?: mcu_models_pb.Room, index?: number): mcu_models_pb.Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartRoomEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartRoomEventsResponse): StartRoomEventsResponse.AsObject;
  static serializeBinaryToWriter(message: StartRoomEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartRoomEventsResponse;
  static deserializeBinaryFromReader(message: StartRoomEventsResponse, reader: jspb.BinaryReader): StartRoomEventsResponse;
}

export namespace StartRoomEventsResponse {
  export type AsObject = {
    roomsList: Array<mcu_models_pb.Room.AsObject>,
  }
}

export class AddRoomsRequest extends jspb.Message {
  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): AddRoomsRequest;
  clearRoomIdsList(): AddRoomsRequest;
  addRoomIds(value: string, index?: number): AddRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoomsRequest): AddRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: AddRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoomsRequest;
  static deserializeBinaryFromReader(message: AddRoomsRequest, reader: jspb.BinaryReader): AddRoomsRequest;
}

export namespace AddRoomsRequest {
  export type AsObject = {
    roomIdsList: Array<string>,
  }
}

export class AddRoomsResponse extends jspb.Message {
  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): AddRoomsResponse;
  clearRoomIdsList(): AddRoomsResponse;
  addRoomIds(value: string, index?: number): AddRoomsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoomsResponse): AddRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: AddRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoomsResponse;
  static deserializeBinaryFromReader(message: AddRoomsResponse, reader: jspb.BinaryReader): AddRoomsResponse;
}

export namespace AddRoomsResponse {
  export type AsObject = {
    roomIdsList: Array<string>,
  }
}

export class RemoveRoomsRequest extends jspb.Message {
  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): RemoveRoomsRequest;
  clearRoomIdsList(): RemoveRoomsRequest;
  addRoomIds(value: string, index?: number): RemoveRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoomsRequest): RemoveRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoomsRequest;
  static deserializeBinaryFromReader(message: RemoveRoomsRequest, reader: jspb.BinaryReader): RemoveRoomsRequest;
}

export namespace RemoveRoomsRequest {
  export type AsObject = {
    roomIdsList: Array<string>,
  }
}

export class RemoveRoomsResponse extends jspb.Message {
  getRoomIdsList(): Array<string>;
  setRoomIdsList(value: Array<string>): RemoveRoomsResponse;
  clearRoomIdsList(): RemoveRoomsResponse;
  addRoomIds(value: string, index?: number): RemoveRoomsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoomsResponse): RemoveRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoomsResponse;
  static deserializeBinaryFromReader(message: RemoveRoomsResponse, reader: jspb.BinaryReader): RemoveRoomsResponse;
}

export namespace RemoveRoomsResponse {
  export type AsObject = {
    roomIdsList: Array<string>,
  }
}

export class UpdateBroadcastRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): UpdateBroadcastRequest;

  getUpdateBroadcastLayout(): UpdateBroadcastLayout | undefined;
  setUpdateBroadcastLayout(value?: UpdateBroadcastLayout): UpdateBroadcastRequest;
  hasUpdateBroadcastLayout(): boolean;
  clearUpdateBroadcastLayout(): UpdateBroadcastRequest;

  getUpdateBroadcastPerformers(): UpdateBroadcastPerformers | undefined;
  setUpdateBroadcastPerformers(value?: UpdateBroadcastPerformers): UpdateBroadcastRequest;
  hasUpdateBroadcastPerformers(): boolean;
  clearUpdateBroadcastPerformers(): UpdateBroadcastRequest;

  getUpdateMixerType(): UpdateMixerType | undefined;
  setUpdateMixerType(value?: UpdateMixerType): UpdateBroadcastRequest;
  hasUpdateMixerType(): boolean;
  clearUpdateMixerType(): UpdateBroadcastRequest;

  getUpdateRoomGridOrder(): UpdateRoomGridOrder | undefined;
  setUpdateRoomGridOrder(value?: UpdateRoomGridOrder): UpdateBroadcastRequest;
  hasUpdateRoomGridOrder(): boolean;
  clearUpdateRoomGridOrder(): UpdateBroadcastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastRequest): UpdateBroadcastRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBroadcastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastRequest;
  static deserializeBinaryFromReader(message: UpdateBroadcastRequest, reader: jspb.BinaryReader): UpdateBroadcastRequest;
}

export namespace UpdateBroadcastRequest {
  export type AsObject = {
    roomId: string,
    updateBroadcastLayout?: UpdateBroadcastLayout.AsObject,
    updateBroadcastPerformers?: UpdateBroadcastPerformers.AsObject,
    updateMixerType?: UpdateMixerType.AsObject,
    updateRoomGridOrder?: UpdateRoomGridOrder.AsObject,
  }
}

export class UpdateMixerType extends jspb.Message {
  getMode(): mcu_enums_pb.MixerType;
  setMode(value: mcu_enums_pb.MixerType): UpdateMixerType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMixerType.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMixerType): UpdateMixerType.AsObject;
  static serializeBinaryToWriter(message: UpdateMixerType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMixerType;
  static deserializeBinaryFromReader(message: UpdateMixerType, reader: jspb.BinaryReader): UpdateMixerType;
}

export namespace UpdateMixerType {
  export type AsObject = {
    mode: mcu_enums_pb.MixerType,
  }
}

export class UpdateRoomGridOrder extends jspb.Message {
  getOrderList(): Array<string>;
  setOrderList(value: Array<string>): UpdateRoomGridOrder;
  clearOrderList(): UpdateRoomGridOrder;
  addOrder(value: string, index?: number): UpdateRoomGridOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomGridOrder.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomGridOrder): UpdateRoomGridOrder.AsObject;
  static serializeBinaryToWriter(message: UpdateRoomGridOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomGridOrder;
  static deserializeBinaryFromReader(message: UpdateRoomGridOrder, reader: jspb.BinaryReader): UpdateRoomGridOrder;
}

export namespace UpdateRoomGridOrder {
  export type AsObject = {
    orderList: Array<string>,
  }
}

export class UpdateBroadcastResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): UpdateBroadcastResponse;

  getUpdateBroadcastLayout(): UpdateBroadcastLayout | undefined;
  setUpdateBroadcastLayout(value?: UpdateBroadcastLayout): UpdateBroadcastResponse;
  hasUpdateBroadcastLayout(): boolean;
  clearUpdateBroadcastLayout(): UpdateBroadcastResponse;

  getUpdateBroadcastPerformers(): UpdateBroadcastPerformers | undefined;
  setUpdateBroadcastPerformers(value?: UpdateBroadcastPerformers): UpdateBroadcastResponse;
  hasUpdateBroadcastPerformers(): boolean;
  clearUpdateBroadcastPerformers(): UpdateBroadcastResponse;

  getUpdateMixerType(): UpdateMixerType | undefined;
  setUpdateMixerType(value?: UpdateMixerType): UpdateBroadcastResponse;
  hasUpdateMixerType(): boolean;
  clearUpdateMixerType(): UpdateBroadcastResponse;

  getUpdateRoomGridOrder(): UpdateRoomGridOrder | undefined;
  setUpdateRoomGridOrder(value?: UpdateRoomGridOrder): UpdateBroadcastResponse;
  hasUpdateRoomGridOrder(): boolean;
  clearUpdateRoomGridOrder(): UpdateBroadcastResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastResponse): UpdateBroadcastResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBroadcastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastResponse;
  static deserializeBinaryFromReader(message: UpdateBroadcastResponse, reader: jspb.BinaryReader): UpdateBroadcastResponse;
}

export namespace UpdateBroadcastResponse {
  export type AsObject = {
    roomId: string,
    updateBroadcastLayout?: UpdateBroadcastLayout.AsObject,
    updateBroadcastPerformers?: UpdateBroadcastPerformers.AsObject,
    updateMixerType?: UpdateMixerType.AsObject,
    updateRoomGridOrder?: UpdateRoomGridOrder.AsObject,
  }
}

export class UpdateBroadcastPerformers extends jspb.Message {
  getUpdatePerformersMap(): jspb.Map<number, string>;
  clearUpdatePerformersMap(): UpdateBroadcastPerformers;

  getDeletePerformersList(): Array<string>;
  setDeletePerformersList(value: Array<string>): UpdateBroadcastPerformers;
  clearDeletePerformersList(): UpdateBroadcastPerformers;
  addDeletePerformers(value: string, index?: number): UpdateBroadcastPerformers;

  getSwapPerformersList(): Array<UpdateBroadcastSwapPerformers>;
  setSwapPerformersList(value: Array<UpdateBroadcastSwapPerformers>): UpdateBroadcastPerformers;
  clearSwapPerformersList(): UpdateBroadcastPerformers;
  addSwapPerformers(value?: UpdateBroadcastSwapPerformers, index?: number): UpdateBroadcastSwapPerformers;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastPerformers.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastPerformers): UpdateBroadcastPerformers.AsObject;
  static serializeBinaryToWriter(message: UpdateBroadcastPerformers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastPerformers;
  static deserializeBinaryFromReader(message: UpdateBroadcastPerformers, reader: jspb.BinaryReader): UpdateBroadcastPerformers;
}

export namespace UpdateBroadcastPerformers {
  export type AsObject = {
    updatePerformersMap: Array<[number, string]>,
    deletePerformersList: Array<string>,
    swapPerformersList: Array<UpdateBroadcastSwapPerformers.AsObject>,
  }
}

export class UpdateBroadcastSwapPerformers extends jspb.Message {
  getUserA(): string;
  setUserA(value: string): UpdateBroadcastSwapPerformers;

  getUserB(): string;
  setUserB(value: string): UpdateBroadcastSwapPerformers;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastSwapPerformers.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastSwapPerformers): UpdateBroadcastSwapPerformers.AsObject;
  static serializeBinaryToWriter(message: UpdateBroadcastSwapPerformers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastSwapPerformers;
  static deserializeBinaryFromReader(message: UpdateBroadcastSwapPerformers, reader: jspb.BinaryReader): UpdateBroadcastSwapPerformers;
}

export namespace UpdateBroadcastSwapPerformers {
  export type AsObject = {
    userA: string,
    userB: string,
  }
}

export class UpdateBroadcastLayout extends jspb.Message {
  getLayout(): mcu_enums_pb.BroadcastLayout;
  setLayout(value: mcu_enums_pb.BroadcastLayout): UpdateBroadcastLayout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBroadcastLayout.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBroadcastLayout): UpdateBroadcastLayout.AsObject;
  static serializeBinaryToWriter(message: UpdateBroadcastLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBroadcastLayout;
  static deserializeBinaryFromReader(message: UpdateBroadcastLayout, reader: jspb.BinaryReader): UpdateBroadcastLayout;
}

export namespace UpdateBroadcastLayout {
  export type AsObject = {
    layout: mcu_enums_pb.BroadcastLayout,
  }
}

export class GetStreamersRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): GetStreamersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamersRequest): GetStreamersRequest.AsObject;
  static serializeBinaryToWriter(message: GetStreamersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamersRequest;
  static deserializeBinaryFromReader(message: GetStreamersRequest, reader: jspb.BinaryReader): GetStreamersRequest;
}

export namespace GetStreamersRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class GetStreamersResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): GetStreamersResponse;

  getUsersMap(): jspb.Map<number, string>;
  clearUsersMap(): GetStreamersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamersResponse): GetStreamersResponse.AsObject;
  static serializeBinaryToWriter(message: GetStreamersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamersResponse;
  static deserializeBinaryFromReader(message: GetStreamersResponse, reader: jspb.BinaryReader): GetStreamersResponse;
}

export namespace GetStreamersResponse {
  export type AsObject = {
    roomId: string,
    usersMap: Array<[number, string]>,
  }
}

export class GetStreamerRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): GetStreamerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamerRequest): GetStreamerRequest.AsObject;
  static serializeBinaryToWriter(message: GetStreamerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamerRequest;
  static deserializeBinaryFromReader(message: GetStreamerRequest, reader: jspb.BinaryReader): GetStreamerRequest;
}

export namespace GetStreamerRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class GetStreamerResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): GetStreamerResponse;

  getUserId(): string;
  setUserId(value: string): GetStreamerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStreamerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStreamerResponse): GetStreamerResponse.AsObject;
  static serializeBinaryToWriter(message: GetStreamerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStreamerResponse;
  static deserializeBinaryFromReader(message: GetStreamerResponse, reader: jspb.BinaryReader): GetStreamerResponse;
}

export namespace GetStreamerResponse {
  export type AsObject = {
    roomId: string,
    userId: string,
  }
}

export class SetStreamerRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): SetStreamerRequest;

  getUserId(): string;
  setUserId(value: string): SetStreamerRequest;

  getPosition(): number;
  setPosition(value: number): SetStreamerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStreamerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetStreamerRequest): SetStreamerRequest.AsObject;
  static serializeBinaryToWriter(message: SetStreamerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStreamerRequest;
  static deserializeBinaryFromReader(message: SetStreamerRequest, reader: jspb.BinaryReader): SetStreamerRequest;
}

export namespace SetStreamerRequest {
  export type AsObject = {
    roomId: string,
    userId: string,
    position: number,
  }
}

export class SetStreamerResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): SetStreamerResponse;

  getUserId(): string;
  setUserId(value: string): SetStreamerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStreamerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetStreamerResponse): SetStreamerResponse.AsObject;
  static serializeBinaryToWriter(message: SetStreamerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStreamerResponse;
  static deserializeBinaryFromReader(message: SetStreamerResponse, reader: jspb.BinaryReader): SetStreamerResponse;
}

export namespace SetStreamerResponse {
  export type AsObject = {
    roomId: string,
    userId: string,
  }
}

export class StartStreamingRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): StartStreamingRequest;

  getEventId(): string;
  setEventId(value: string): StartStreamingRequest;

  getLayout(): mcu_enums_pb.BroadcastLayout;
  setLayout(value: mcu_enums_pb.BroadcastLayout): StartStreamingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartStreamingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartStreamingRequest): StartStreamingRequest.AsObject;
  static serializeBinaryToWriter(message: StartStreamingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartStreamingRequest;
  static deserializeBinaryFromReader(message: StartStreamingRequest, reader: jspb.BinaryReader): StartStreamingRequest;
}

export namespace StartStreamingRequest {
  export type AsObject = {
    roomId: string,
    eventId: string,
    layout: mcu_enums_pb.BroadcastLayout,
  }
}

export class StartStreamingResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): StartStreamingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartStreamingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartStreamingResponse): StartStreamingResponse.AsObject;
  static serializeBinaryToWriter(message: StartStreamingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartStreamingResponse;
  static deserializeBinaryFromReader(message: StartStreamingResponse, reader: jspb.BinaryReader): StartStreamingResponse;
}

export namespace StartStreamingResponse {
  export type AsObject = {
    roomId: string,
  }
}

export class StopStreamingRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): StopStreamingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopStreamingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopStreamingRequest): StopStreamingRequest.AsObject;
  static serializeBinaryToWriter(message: StopStreamingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopStreamingRequest;
  static deserializeBinaryFromReader(message: StopStreamingRequest, reader: jspb.BinaryReader): StopStreamingRequest;
}

export namespace StopStreamingRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class StopStreamingResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): StopStreamingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopStreamingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopStreamingResponse): StopStreamingResponse.AsObject;
  static serializeBinaryToWriter(message: StopStreamingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopStreamingResponse;
  static deserializeBinaryFromReader(message: StopStreamingResponse, reader: jspb.BinaryReader): StopStreamingResponse;
}

export namespace StopStreamingResponse {
  export type AsObject = {
    roomId: string,
  }
}

export class AddRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): AddRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoomRequest): AddRoomRequest.AsObject;
  static serializeBinaryToWriter(message: AddRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoomRequest;
  static deserializeBinaryFromReader(message: AddRoomRequest, reader: jspb.BinaryReader): AddRoomRequest;
}

export namespace AddRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class AddRoomResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): AddRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoomResponse): AddRoomResponse.AsObject;
  static serializeBinaryToWriter(message: AddRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoomResponse;
  static deserializeBinaryFromReader(message: AddRoomResponse, reader: jspb.BinaryReader): AddRoomResponse;
}

export namespace AddRoomResponse {
  export type AsObject = {
    roomId: string,
  }
}

export class RemoveRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): RemoveRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoomRequest): RemoveRoomRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoomRequest;
  static deserializeBinaryFromReader(message: RemoveRoomRequest, reader: jspb.BinaryReader): RemoveRoomRequest;
}

export namespace RemoveRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class RemoveRoomResponse extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): RemoveRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoomResponse): RemoveRoomResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoomResponse;
  static deserializeBinaryFromReader(message: RemoveRoomResponse, reader: jspb.BinaryReader): RemoveRoomResponse;
}

export namespace RemoveRoomResponse {
  export type AsObject = {
    roomId: string,
  }
}

export class OutputStreamRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): OutputStreamRequest;

  getSfuId(): string;
  setSfuId(value: string): OutputStreamRequest;

  getControlOnly(): boolean;
  setControlOnly(value: boolean): OutputStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OutputStreamRequest): OutputStreamRequest.AsObject;
  static serializeBinaryToWriter(message: OutputStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputStreamRequest;
  static deserializeBinaryFromReader(message: OutputStreamRequest, reader: jspb.BinaryReader): OutputStreamRequest;
}

export namespace OutputStreamRequest {
  export type AsObject = {
    roomId: string,
    sfuId: string,
    controlOnly: boolean,
  }
}

