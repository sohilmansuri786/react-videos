import * as jspb from 'google-protobuf'

import * as rooms_enums_pb from '../rooms/enums_pb';
import * as payments_models_pb from '../payments/models_pb';

export class ChatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ChatInfo;

  getType(): rooms_enums_pb.ChatType;
  setType(value: rooms_enums_pb.ChatType): ChatInfo;

  getStatus(): rooms_enums_pb.ChatStatus;
  setStatus(value: rooms_enums_pb.ChatStatus): ChatInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ChatInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ChatInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChatInfo): ChatInfo.AsObject;
  static serializeBinaryToWriter(message: ChatInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatInfo;
  static deserializeBinaryFromReader(message: ChatInfo, reader: jspb.BinaryReader): ChatInfo;
}

export namespace ChatInfo {
  export type AsObject = {
    id: string,
    type: rooms_enums_pb.ChatType,
    status: rooms_enums_pb.ChatStatus,
    createdAt: number,
    updatedAt: number,
  }
}

export class ChatStatusValue extends jspb.Message {
  getValue(): rooms_enums_pb.ChatStatus;
  setValue(value: rooms_enums_pb.ChatStatus): ChatStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: ChatStatusValue): ChatStatusValue.AsObject;
  static serializeBinaryToWriter(message: ChatStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatStatusValue;
  static deserializeBinaryFromReader(message: ChatStatusValue, reader: jspb.BinaryReader): ChatStatusValue;
}

export namespace ChatStatusValue {
  export type AsObject = {
    value: rooms_enums_pb.ChatStatus,
  }
}

export class ChatState extends jspb.Message {
  getInfo(): ChatInfo | undefined;
  setInfo(value?: ChatInfo): ChatState;
  hasInfo(): boolean;
  clearInfo(): ChatState;

  getTotal(): number;
  setTotal(value: number): ChatState;

  getMessagesList(): Array<ChatMessageInfo>;
  setMessagesList(value: Array<ChatMessageInfo>): ChatState;
  clearMessagesList(): ChatState;
  addMessages(value?: ChatMessageInfo, index?: number): ChatMessageInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatState.AsObject;
  static toObject(includeInstance: boolean, msg: ChatState): ChatState.AsObject;
  static serializeBinaryToWriter(message: ChatState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatState;
  static deserializeBinaryFromReader(message: ChatState, reader: jspb.BinaryReader): ChatState;
}

export namespace ChatState {
  export type AsObject = {
    info?: ChatInfo.AsObject,
    total: number,
    messagesList: Array<ChatMessageInfo.AsObject>,
  }
}

export class ChatMessageInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ChatMessageInfo;

  getChatId(): string;
  setChatId(value: string): ChatMessageInfo;

  getUserId(): string;
  setUserId(value: string): ChatMessageInfo;

  getName(): string;
  setName(value: string): ChatMessageInfo;

  getRole(): number;
  setRole(value: number): ChatMessageInfo;

  getContent(): string;
  setContent(value: string): ChatMessageInfo;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): ChatMessageInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ChatMessageInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ChatMessageInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageInfo): ChatMessageInfo.AsObject;
  static serializeBinaryToWriter(message: ChatMessageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageInfo;
  static deserializeBinaryFromReader(message: ChatMessageInfo, reader: jspb.BinaryReader): ChatMessageInfo;
}

export namespace ChatMessageInfo {
  export type AsObject = {
    id: string,
    chatId: string,
    userId: string,
    name: string,
    role: number,
    content: string,
    avatarUrl: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class ChatMessageContentValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): ChatMessageContentValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageContentValue.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageContentValue): ChatMessageContentValue.AsObject;
  static serializeBinaryToWriter(message: ChatMessageContentValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageContentValue;
  static deserializeBinaryFromReader(message: ChatMessageContentValue, reader: jspb.BinaryReader): ChatMessageContentValue;
}

export namespace ChatMessageContentValue {
  export type AsObject = {
    value: string,
  }
}

export class UserTicketInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserTicketInfo;

  getUserId(): string;
  setUserId(value: string): UserTicketInfo;

  getEventId(): string;
  setEventId(value: string): UserTicketInfo;

  getOrderId(): string;
  setOrderId(value: string): UserTicketInfo;

  getStatus(): rooms_enums_pb.UserTicketStatus;
  setStatus(value: rooms_enums_pb.UserTicketStatus): UserTicketInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserTicketInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UserTicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTicketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserTicketInfo): UserTicketInfo.AsObject;
  static serializeBinaryToWriter(message: UserTicketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTicketInfo;
  static deserializeBinaryFromReader(message: UserTicketInfo, reader: jspb.BinaryReader): UserTicketInfo;
}

export namespace UserTicketInfo {
  export type AsObject = {
    id: string,
    userId: string,
    eventId: string,
    orderId: string,
    status: rooms_enums_pb.UserTicketStatus,
    createdAt: number,
    updatedAt: number,
  }
}

export class UserTicketStatusValue extends jspb.Message {
  getValue(): rooms_enums_pb.UserTicketStatus;
  setValue(value: rooms_enums_pb.UserTicketStatus): UserTicketStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTicketStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserTicketStatusValue): UserTicketStatusValue.AsObject;
  static serializeBinaryToWriter(message: UserTicketStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTicketStatusValue;
  static deserializeBinaryFromReader(message: UserTicketStatusValue, reader: jspb.BinaryReader): UserTicketStatusValue;
}

export namespace UserTicketStatusValue {
  export type AsObject = {
    value: rooms_enums_pb.UserTicketStatus,
  }
}

export class RoomInfo extends jspb.Message {
  getId(): string;
  setId(value: string): RoomInfo;

  getPid(): string;
  setPid(value: string): RoomInfo;

  getName(): string;
  setName(value: string): RoomInfo;

  getType(): rooms_enums_pb.RoomType;
  setType(value: rooms_enums_pb.RoomType): RoomInfo;

  getLimit(): number;
  setLimit(value: number): RoomInfo;

  getAccess(): rooms_enums_pb.RoomAccess;
  setAccess(value: rooms_enums_pb.RoomAccess): RoomInfo;

  getRegion(): string;
  setRegion(value: string): RoomInfo;

  getPassword(): boolean;
  setPassword(value: boolean): RoomInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): RoomInfo;

  getBackgroundUrl(): string;
  setBackgroundUrl(value: string): RoomInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): RoomInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RoomInfo;

  getUsers(): number;
  setUsers(value: number): RoomInfo;

  getUser(): RoomUserInfo | undefined;
  setUser(value?: RoomUserInfo): RoomInfo;
  hasUser(): boolean;
  clearUser(): RoomInfo;

  getEvent(): EventInfo | undefined;
  setEvent(value?: EventInfo): RoomInfo;
  hasEvent(): boolean;
  clearEvent(): RoomInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInfo): RoomInfo.AsObject;
  static serializeBinaryToWriter(message: RoomInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInfo;
  static deserializeBinaryFromReader(message: RoomInfo, reader: jspb.BinaryReader): RoomInfo;
}

export namespace RoomInfo {
  export type AsObject = {
    id: string,
    pid: string,
    name: string,
    type: rooms_enums_pb.RoomType,
    limit: number,
    access: rooms_enums_pb.RoomAccess,
    region: string,
    password: boolean,
    thumbnailUrl: string,
    backgroundUrl: string,
    createdAt: number,
    updatedAt: number,
    users: number,
    user?: RoomUserInfo.AsObject,
    event?: EventInfo.AsObject,
  }
}

export class RoomPidValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): RoomPidValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomPidValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomPidValue): RoomPidValue.AsObject;
  static serializeBinaryToWriter(message: RoomPidValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomPidValue;
  static deserializeBinaryFromReader(message: RoomPidValue, reader: jspb.BinaryReader): RoomPidValue;
}

export namespace RoomPidValue {
  export type AsObject = {
    value: string,
  }
}

export class RoomNameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): RoomNameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomNameValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomNameValue): RoomNameValue.AsObject;
  static serializeBinaryToWriter(message: RoomNameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomNameValue;
  static deserializeBinaryFromReader(message: RoomNameValue, reader: jspb.BinaryReader): RoomNameValue;
}

export namespace RoomNameValue {
  export type AsObject = {
    value: string,
  }
}

export class RoomTypeValue extends jspb.Message {
  getValue(): rooms_enums_pb.RoomType;
  setValue(value: rooms_enums_pb.RoomType): RoomTypeValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomTypeValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomTypeValue): RoomTypeValue.AsObject;
  static serializeBinaryToWriter(message: RoomTypeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomTypeValue;
  static deserializeBinaryFromReader(message: RoomTypeValue, reader: jspb.BinaryReader): RoomTypeValue;
}

export namespace RoomTypeValue {
  export type AsObject = {
    value: rooms_enums_pb.RoomType,
  }
}

export class RoomLimitValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): RoomLimitValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomLimitValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomLimitValue): RoomLimitValue.AsObject;
  static serializeBinaryToWriter(message: RoomLimitValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomLimitValue;
  static deserializeBinaryFromReader(message: RoomLimitValue, reader: jspb.BinaryReader): RoomLimitValue;
}

export namespace RoomLimitValue {
  export type AsObject = {
    value: number,
  }
}

export class RoomAccessValue extends jspb.Message {
  getValue(): rooms_enums_pb.RoomAccess;
  setValue(value: rooms_enums_pb.RoomAccess): RoomAccessValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomAccessValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomAccessValue): RoomAccessValue.AsObject;
  static serializeBinaryToWriter(message: RoomAccessValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomAccessValue;
  static deserializeBinaryFromReader(message: RoomAccessValue, reader: jspb.BinaryReader): RoomAccessValue;
}

export namespace RoomAccessValue {
  export type AsObject = {
    value: rooms_enums_pb.RoomAccess,
  }
}

export class RoomPasswordValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): RoomPasswordValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomPasswordValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomPasswordValue): RoomPasswordValue.AsObject;
  static serializeBinaryToWriter(message: RoomPasswordValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomPasswordValue;
  static deserializeBinaryFromReader(message: RoomPasswordValue, reader: jspb.BinaryReader): RoomPasswordValue;
}

export namespace RoomPasswordValue {
  export type AsObject = {
    value: string,
  }
}

export class RoomThumbnailValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): RoomThumbnailValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomThumbnailValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomThumbnailValue): RoomThumbnailValue.AsObject;
  static serializeBinaryToWriter(message: RoomThumbnailValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomThumbnailValue;
  static deserializeBinaryFromReader(message: RoomThumbnailValue, reader: jspb.BinaryReader): RoomThumbnailValue;
}

export namespace RoomThumbnailValue {
  export type AsObject = {
    value: string,
  }
}

export class RoomBackgroundValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): RoomBackgroundValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomBackgroundValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomBackgroundValue): RoomBackgroundValue.AsObject;
  static serializeBinaryToWriter(message: RoomBackgroundValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomBackgroundValue;
  static deserializeBinaryFromReader(message: RoomBackgroundValue, reader: jspb.BinaryReader): RoomBackgroundValue;
}

export namespace RoomBackgroundValue {
  export type AsObject = {
    value: string,
  }
}

export class RoomState extends jspb.Message {
  getInfo(): RoomInfo | undefined;
  setInfo(value?: RoomInfo): RoomState;
  hasInfo(): boolean;
  clearInfo(): RoomState;

  getChat(): ChatInfo | undefined;
  setChat(value?: ChatInfo): RoomState;
  hasChat(): boolean;
  clearChat(): RoomState;

  getEvent(): EventState | undefined;
  setEvent(value?: EventState): RoomState;
  hasEvent(): boolean;
  clearEvent(): RoomState;

  getUsersList(): Array<RoomUserInfo>;
  setUsersList(value: Array<RoomUserInfo>): RoomState;
  clearUsersList(): RoomState;
  addUsers(value?: RoomUserInfo, index?: number): RoomUserInfo;

  getStreamsList(): Array<RoomStreamInfo>;
  setStreamsList(value: Array<RoomStreamInfo>): RoomState;
  clearStreamsList(): RoomState;
  addStreams(value?: RoomStreamInfo, index?: number): RoomStreamInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomState.AsObject;
  static toObject(includeInstance: boolean, msg: RoomState): RoomState.AsObject;
  static serializeBinaryToWriter(message: RoomState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomState;
  static deserializeBinaryFromReader(message: RoomState, reader: jspb.BinaryReader): RoomState;
}

export namespace RoomState {
  export type AsObject = {
    info?: RoomInfo.AsObject,
    chat?: ChatInfo.AsObject,
    event?: EventState.AsObject,
    usersList: Array<RoomUserInfo.AsObject>,
    streamsList: Array<RoomStreamInfo.AsObject>,
  }
}

export class RoomUserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): RoomUserInfo;

  getRoomId(): string;
  setRoomId(value: string): RoomUserInfo;

  getUserId(): string;
  setUserId(value: string): RoomUserInfo;

  getRole(): number;
  setRole(value: number): RoomUserInfo;

  getFlagsList(): Array<rooms_enums_pb.RoomUserFlag>;
  setFlagsList(value: Array<rooms_enums_pb.RoomUserFlag>): RoomUserInfo;
  clearFlagsList(): RoomUserInfo;
  addFlags(value: rooms_enums_pb.RoomUserFlag, index?: number): RoomUserInfo;

  getStatesList(): Array<rooms_enums_pb.RoomUserState>;
  setStatesList(value: Array<rooms_enums_pb.RoomUserState>): RoomUserInfo;
  clearStatesList(): RoomUserInfo;
  addStates(value: rooms_enums_pb.RoomUserState, index?: number): RoomUserInfo;

  getStatus(): rooms_enums_pb.RoomUserStatus;
  setStatus(value: rooms_enums_pb.RoomUserStatus): RoomUserInfo;

  getRegion(): string;
  setRegion(value: string): RoomUserInfo;

  getSenderConnectionStatus(): rooms_enums_pb.RoomUserSenderConnectionStatus;
  setSenderConnectionStatus(value: rooms_enums_pb.RoomUserSenderConnectionStatus): RoomUserInfo;

  getReceiverConnectionStatus(): rooms_enums_pb.RoomUserReceiverConnectionStatus;
  setReceiverConnectionStatus(value: rooms_enums_pb.RoomUserReceiverConnectionStatus): RoomUserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): RoomUserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RoomUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserInfo): RoomUserInfo.AsObject;
  static serializeBinaryToWriter(message: RoomUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserInfo;
  static deserializeBinaryFromReader(message: RoomUserInfo, reader: jspb.BinaryReader): RoomUserInfo;
}

export namespace RoomUserInfo {
  export type AsObject = {
    id: string,
    roomId: string,
    userId: string,
    role: number,
    flagsList: Array<rooms_enums_pb.RoomUserFlag>,
    statesList: Array<rooms_enums_pb.RoomUserState>,
    status: rooms_enums_pb.RoomUserStatus,
    region: string,
    senderConnectionStatus: rooms_enums_pb.RoomUserSenderConnectionStatus,
    receiverConnectionStatus: rooms_enums_pb.RoomUserReceiverConnectionStatus,
    createdAt: number,
    updatedAt: number,
  }
}

export class RoomUserRoleValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): RoomUserRoleValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserRoleValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserRoleValue): RoomUserRoleValue.AsObject;
  static serializeBinaryToWriter(message: RoomUserRoleValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserRoleValue;
  static deserializeBinaryFromReader(message: RoomUserRoleValue, reader: jspb.BinaryReader): RoomUserRoleValue;
}

export namespace RoomUserRoleValue {
  export type AsObject = {
    value: number,
  }
}

export class RoomUserFlagsValue extends jspb.Message {
  getValueList(): Array<rooms_enums_pb.RoomUserFlag>;
  setValueList(value: Array<rooms_enums_pb.RoomUserFlag>): RoomUserFlagsValue;
  clearValueList(): RoomUserFlagsValue;
  addValue(value: rooms_enums_pb.RoomUserFlag, index?: number): RoomUserFlagsValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserFlagsValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserFlagsValue): RoomUserFlagsValue.AsObject;
  static serializeBinaryToWriter(message: RoomUserFlagsValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserFlagsValue;
  static deserializeBinaryFromReader(message: RoomUserFlagsValue, reader: jspb.BinaryReader): RoomUserFlagsValue;
}

export namespace RoomUserFlagsValue {
  export type AsObject = {
    valueList: Array<rooms_enums_pb.RoomUserFlag>,
  }
}

export class RoomUserStatesValue extends jspb.Message {
  getValueList(): Array<rooms_enums_pb.RoomUserState>;
  setValueList(value: Array<rooms_enums_pb.RoomUserState>): RoomUserStatesValue;
  clearValueList(): RoomUserStatesValue;
  addValue(value: rooms_enums_pb.RoomUserState, index?: number): RoomUserStatesValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserStatesValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserStatesValue): RoomUserStatesValue.AsObject;
  static serializeBinaryToWriter(message: RoomUserStatesValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserStatesValue;
  static deserializeBinaryFromReader(message: RoomUserStatesValue, reader: jspb.BinaryReader): RoomUserStatesValue;
}

export namespace RoomUserStatesValue {
  export type AsObject = {
    valueList: Array<rooms_enums_pb.RoomUserState>,
  }
}

export class RoomUserStatusValue extends jspb.Message {
  getValue(): rooms_enums_pb.RoomUserStatus;
  setValue(value: rooms_enums_pb.RoomUserStatus): RoomUserStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserStatusValue): RoomUserStatusValue.AsObject;
  static serializeBinaryToWriter(message: RoomUserStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserStatusValue;
  static deserializeBinaryFromReader(message: RoomUserStatusValue, reader: jspb.BinaryReader): RoomUserStatusValue;
}

export namespace RoomUserStatusValue {
  export type AsObject = {
    value: rooms_enums_pb.RoomUserStatus,
  }
}

export class RoomUserSenderConnectionStatusValue extends jspb.Message {
  getValue(): rooms_enums_pb.RoomUserSenderConnectionStatus;
  setValue(value: rooms_enums_pb.RoomUserSenderConnectionStatus): RoomUserSenderConnectionStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserSenderConnectionStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserSenderConnectionStatusValue): RoomUserSenderConnectionStatusValue.AsObject;
  static serializeBinaryToWriter(message: RoomUserSenderConnectionStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserSenderConnectionStatusValue;
  static deserializeBinaryFromReader(message: RoomUserSenderConnectionStatusValue, reader: jspb.BinaryReader): RoomUserSenderConnectionStatusValue;
}

export namespace RoomUserSenderConnectionStatusValue {
  export type AsObject = {
    value: rooms_enums_pb.RoomUserSenderConnectionStatus,
  }
}

export class RoomUserReceiverConnectionStatusValue extends jspb.Message {
  getValue(): rooms_enums_pb.RoomUserReceiverConnectionStatus;
  setValue(value: rooms_enums_pb.RoomUserReceiverConnectionStatus): RoomUserReceiverConnectionStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserReceiverConnectionStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserReceiverConnectionStatusValue): RoomUserReceiverConnectionStatusValue.AsObject;
  static serializeBinaryToWriter(message: RoomUserReceiverConnectionStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserReceiverConnectionStatusValue;
  static deserializeBinaryFromReader(message: RoomUserReceiverConnectionStatusValue, reader: jspb.BinaryReader): RoomUserReceiverConnectionStatusValue;
}

export namespace RoomUserReceiverConnectionStatusValue {
  export type AsObject = {
    value: rooms_enums_pb.RoomUserReceiverConnectionStatus,
  }
}

export class RoomInviteInfo extends jspb.Message {
  getId(): string;
  setId(value: string): RoomInviteInfo;

  getPid(): string;
  setPid(value: string): RoomInviteInfo;

  getRoomId(): string;
  setRoomId(value: string): RoomInviteInfo;

  getOwnerId(): string;
  setOwnerId(value: string): RoomInviteInfo;

  getUsages(): number;
  setUsages(value: number): RoomInviteInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): RoomInviteInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RoomInviteInfo;

  getExpiresAt(): number;
  setExpiresAt(value: number): RoomInviteInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInviteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInviteInfo): RoomInviteInfo.AsObject;
  static serializeBinaryToWriter(message: RoomInviteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInviteInfo;
  static deserializeBinaryFromReader(message: RoomInviteInfo, reader: jspb.BinaryReader): RoomInviteInfo;
}

export namespace RoomInviteInfo {
  export type AsObject = {
    id: string,
    pid: string,
    roomId: string,
    ownerId: string,
    usages: number,
    createdAt: number,
    updatedAt: number,
    expiresAt: number,
  }
}

export class RoomInviteUsagesValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): RoomInviteUsagesValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInviteUsagesValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInviteUsagesValue): RoomInviteUsagesValue.AsObject;
  static serializeBinaryToWriter(message: RoomInviteUsagesValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInviteUsagesValue;
  static deserializeBinaryFromReader(message: RoomInviteUsagesValue, reader: jspb.BinaryReader): RoomInviteUsagesValue;
}

export namespace RoomInviteUsagesValue {
  export type AsObject = {
    value: number,
  }
}

export class RoomInviteExpiresAtValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): RoomInviteExpiresAtValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInviteExpiresAtValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInviteExpiresAtValue): RoomInviteExpiresAtValue.AsObject;
  static serializeBinaryToWriter(message: RoomInviteExpiresAtValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInviteExpiresAtValue;
  static deserializeBinaryFromReader(message: RoomInviteExpiresAtValue, reader: jspb.BinaryReader): RoomInviteExpiresAtValue;
}

export namespace RoomInviteExpiresAtValue {
  export type AsObject = {
    value: number,
  }
}

export class RoomStreamInfo extends jspb.Message {
  getId(): string;
  setId(value: string): RoomStreamInfo;

  getRoomId(): string;
  setRoomId(value: string): RoomStreamInfo;

  getOwnerId(): string;
  setOwnerId(value: string): RoomStreamInfo;

  getType(): rooms_enums_pb.RoomStreamType;
  setType(value: rooms_enums_pb.RoomStreamType): RoomStreamInfo;

  getPosition(): number;
  setPosition(value: number): RoomStreamInfo;

  getMetadata(): RoomStreamMetadata | undefined;
  setMetadata(value?: RoomStreamMetadata): RoomStreamInfo;
  hasMetadata(): boolean;
  clearMetadata(): RoomStreamInfo;

  getTimedata(): RoomStreamTimedata | undefined;
  setTimedata(value?: RoomStreamTimedata): RoomStreamInfo;
  hasTimedata(): boolean;
  clearTimedata(): RoomStreamInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamInfo): RoomStreamInfo.AsObject;
  static serializeBinaryToWriter(message: RoomStreamInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamInfo;
  static deserializeBinaryFromReader(message: RoomStreamInfo, reader: jspb.BinaryReader): RoomStreamInfo;
}

export namespace RoomStreamInfo {
  export type AsObject = {
    id: string,
    roomId: string,
    ownerId: string,
    type: rooms_enums_pb.RoomStreamType,
    position: number,
    metadata?: RoomStreamMetadata.AsObject,
    timedata?: RoomStreamTimedata.AsObject,
  }
}

export class RoomStreamMetadata extends jspb.Message {
  getSid(): string;
  setSid(value: string): RoomStreamMetadata;

  getLive(): boolean;
  setLive(value: boolean): RoomStreamMetadata;

  getMuted(): boolean;
  setMuted(value: boolean): RoomStreamMetadata;

  getStack(): string;
  setStack(value: string): RoomStreamMetadata;

  getTitle(): string;
  setTitle(value: string): RoomStreamMetadata;

  getOffset(): number;
  setOffset(value: number): RoomStreamMetadata;

  getPaused(): boolean;
  setPaused(value: boolean): RoomStreamMetadata;

  getRelated(): boolean;
  setRelated(value: boolean): RoomStreamMetadata;

  getSuggest(): boolean;
  setSuggest(value: boolean): RoomStreamMetadata;

  getDuration(): number;
  setDuration(value: number): RoomStreamMetadata;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): RoomStreamMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamMetadata): RoomStreamMetadata.AsObject;
  static serializeBinaryToWriter(message: RoomStreamMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamMetadata;
  static deserializeBinaryFromReader(message: RoomStreamMetadata, reader: jspb.BinaryReader): RoomStreamMetadata;
}

export namespace RoomStreamMetadata {
  export type AsObject = {
    sid: string,
    live: boolean,
    muted: boolean,
    stack: string,
    title: string,
    offset: number,
    paused: boolean,
    related: boolean,
    suggest: boolean,
    duration: number,
    thumbnailUrl: string,
  }
}

export class RoomStreamTimedata extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): RoomStreamTimedata;

  getTimestamp(): number;
  setTimestamp(value: number): RoomStreamTimedata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamTimedata.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamTimedata): RoomStreamTimedata.AsObject;
  static serializeBinaryToWriter(message: RoomStreamTimedata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamTimedata;
  static deserializeBinaryFromReader(message: RoomStreamTimedata, reader: jspb.BinaryReader): RoomStreamTimedata;
}

export namespace RoomStreamTimedata {
  export type AsObject = {
    offset: number,
    timestamp: number,
  }
}

export class RoomStreamMetadataValue extends jspb.Message {
  getOffset(): RoomStreamMetadataOffsetValue | undefined;
  setOffset(value?: RoomStreamMetadataOffsetValue): RoomStreamMetadataValue;
  hasOffset(): boolean;
  clearOffset(): RoomStreamMetadataValue;

  getPaused(): RoomStreamMetadataPausedValue | undefined;
  setPaused(value?: RoomStreamMetadataPausedValue): RoomStreamMetadataValue;
  hasPaused(): boolean;
  clearPaused(): RoomStreamMetadataValue;

  getRelated(): RoomStreamMetadataRelatedValue | undefined;
  setRelated(value?: RoomStreamMetadataRelatedValue): RoomStreamMetadataValue;
  hasRelated(): boolean;
  clearRelated(): RoomStreamMetadataValue;

  getSuggest(): RoomStreamMetadataSuggestValue | undefined;
  setSuggest(value?: RoomStreamMetadataSuggestValue): RoomStreamMetadataValue;
  hasSuggest(): boolean;
  clearSuggest(): RoomStreamMetadataValue;

  getDuration(): RoomStreamMetadataDurationValue | undefined;
  setDuration(value?: RoomStreamMetadataDurationValue): RoomStreamMetadataValue;
  hasDuration(): boolean;
  clearDuration(): RoomStreamMetadataValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamMetadataValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamMetadataValue): RoomStreamMetadataValue.AsObject;
  static serializeBinaryToWriter(message: RoomStreamMetadataValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamMetadataValue;
  static deserializeBinaryFromReader(message: RoomStreamMetadataValue, reader: jspb.BinaryReader): RoomStreamMetadataValue;
}

export namespace RoomStreamMetadataValue {
  export type AsObject = {
    offset?: RoomStreamMetadataOffsetValue.AsObject,
    paused?: RoomStreamMetadataPausedValue.AsObject,
    related?: RoomStreamMetadataRelatedValue.AsObject,
    suggest?: RoomStreamMetadataSuggestValue.AsObject,
    duration?: RoomStreamMetadataDurationValue.AsObject,
  }
}

export class RoomStreamMetadataOffsetValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): RoomStreamMetadataOffsetValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamMetadataOffsetValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamMetadataOffsetValue): RoomStreamMetadataOffsetValue.AsObject;
  static serializeBinaryToWriter(message: RoomStreamMetadataOffsetValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamMetadataOffsetValue;
  static deserializeBinaryFromReader(message: RoomStreamMetadataOffsetValue, reader: jspb.BinaryReader): RoomStreamMetadataOffsetValue;
}

export namespace RoomStreamMetadataOffsetValue {
  export type AsObject = {
    value: number,
  }
}

export class RoomStreamMetadataPausedValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): RoomStreamMetadataPausedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamMetadataPausedValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamMetadataPausedValue): RoomStreamMetadataPausedValue.AsObject;
  static serializeBinaryToWriter(message: RoomStreamMetadataPausedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamMetadataPausedValue;
  static deserializeBinaryFromReader(message: RoomStreamMetadataPausedValue, reader: jspb.BinaryReader): RoomStreamMetadataPausedValue;
}

export namespace RoomStreamMetadataPausedValue {
  export type AsObject = {
    value: boolean,
  }
}

export class RoomStreamMetadataRelatedValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): RoomStreamMetadataRelatedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamMetadataRelatedValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamMetadataRelatedValue): RoomStreamMetadataRelatedValue.AsObject;
  static serializeBinaryToWriter(message: RoomStreamMetadataRelatedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamMetadataRelatedValue;
  static deserializeBinaryFromReader(message: RoomStreamMetadataRelatedValue, reader: jspb.BinaryReader): RoomStreamMetadataRelatedValue;
}

export namespace RoomStreamMetadataRelatedValue {
  export type AsObject = {
    value: boolean,
  }
}

export class RoomStreamMetadataSuggestValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): RoomStreamMetadataSuggestValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamMetadataSuggestValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamMetadataSuggestValue): RoomStreamMetadataSuggestValue.AsObject;
  static serializeBinaryToWriter(message: RoomStreamMetadataSuggestValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamMetadataSuggestValue;
  static deserializeBinaryFromReader(message: RoomStreamMetadataSuggestValue, reader: jspb.BinaryReader): RoomStreamMetadataSuggestValue;
}

export namespace RoomStreamMetadataSuggestValue {
  export type AsObject = {
    value: boolean,
  }
}

export class RoomStreamMetadataDurationValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): RoomStreamMetadataDurationValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomStreamMetadataDurationValue.AsObject;
  static toObject(includeInstance: boolean, msg: RoomStreamMetadataDurationValue): RoomStreamMetadataDurationValue.AsObject;
  static serializeBinaryToWriter(message: RoomStreamMetadataDurationValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomStreamMetadataDurationValue;
  static deserializeBinaryFromReader(message: RoomStreamMetadataDurationValue, reader: jspb.BinaryReader): RoomStreamMetadataDurationValue;
}

export namespace RoomStreamMetadataDurationValue {
  export type AsObject = {
    value: number,
  }
}

export class EventInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventInfo;

  getPid(): string;
  setPid(value: string): EventInfo;

  getName(): string;
  setName(value: string): EventInfo;

  getType(): rooms_enums_pb.EventType;
  setType(value: rooms_enums_pb.EventType): EventInfo;

  getAccess(): rooms_enums_pb.EventAccess;
  setAccess(value: rooms_enums_pb.EventAccess): EventInfo;

  getStatus(): rooms_enums_pb.EventStatus;
  setStatus(value: rooms_enums_pb.EventStatus): EventInfo;

  getSource(): rooms_enums_pb.EventSource;
  setSource(value: rooms_enums_pb.EventSource): EventInfo;

  getLayout(): rooms_enums_pb.EventLayout;
  setLayout(value: rooms_enums_pb.EventLayout): EventInfo;

  getRegion(): string;
  setRegion(value: string): EventInfo;

  getGenresList(): Array<rooms_enums_pb.EventGenre>;
  setGenresList(value: Array<rooms_enums_pb.EventGenre>): EventInfo;
  clearGenresList(): EventInfo;
  addGenres(value: rooms_enums_pb.EventGenre, index?: number): EventInfo;

  getSummary(): string;
  setSummary(value: string): EventInfo;

  getAudience(): number;
  setAudience(value: number): EventInfo;

  getOverseer(): rooms_enums_pb.EventOverseer;
  setOverseer(value: rooms_enums_pb.EventOverseer): EventInfo;

  getDescription(): string;
  setDescription(value: string): EventInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): EventInfo;

  getBackgroundUrl(): string;
  setBackgroundUrl(value: string): EventInfo;

  getStartsAt(): number;
  setStartsAt(value: number): EventInfo;

  getFinishesAt(): number;
  setFinishesAt(value: number): EventInfo;

  getStartedAt(): number;
  setStartedAt(value: number): EventInfo;

  getFinishedAt(): number;
  setFinishedAt(value: number): EventInfo;

  getBroadcastUrl(): string;
  setBroadcastUrl(value: string): EventInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): EventInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EventInfo;

  getTicketsList(): Array<payments_models_pb.EventTicketInfo>;
  setTicketsList(value: Array<payments_models_pb.EventTicketInfo>): EventInfo;
  clearTicketsList(): EventInfo;
  addTickets(value?: payments_models_pb.EventTicketInfo, index?: number): payments_models_pb.EventTicketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventInfo): EventInfo.AsObject;
  static serializeBinaryToWriter(message: EventInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventInfo;
  static deserializeBinaryFromReader(message: EventInfo, reader: jspb.BinaryReader): EventInfo;
}

export namespace EventInfo {
  export type AsObject = {
    id: string,
    pid: string,
    name: string,
    type: rooms_enums_pb.EventType,
    access: rooms_enums_pb.EventAccess,
    status: rooms_enums_pb.EventStatus,
    source: rooms_enums_pb.EventSource,
    layout: rooms_enums_pb.EventLayout,
    region: string,
    genresList: Array<rooms_enums_pb.EventGenre>,
    summary: string,
    audience: number,
    overseer: rooms_enums_pb.EventOverseer,
    description: string,
    thumbnailUrl: string,
    backgroundUrl: string,
    startsAt: number,
    finishesAt: number,
    startedAt: number,
    finishedAt: number,
    broadcastUrl: string,
    createdAt: number,
    updatedAt: number,
    ticketsList: Array<payments_models_pb.EventTicketInfo.AsObject>,
  }
}

export class EventPidValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventPidValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventPidValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventPidValue): EventPidValue.AsObject;
  static serializeBinaryToWriter(message: EventPidValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventPidValue;
  static deserializeBinaryFromReader(message: EventPidValue, reader: jspb.BinaryReader): EventPidValue;
}

export namespace EventPidValue {
  export type AsObject = {
    value: string,
  }
}

export class EventNameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventNameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventNameValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventNameValue): EventNameValue.AsObject;
  static serializeBinaryToWriter(message: EventNameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventNameValue;
  static deserializeBinaryFromReader(message: EventNameValue, reader: jspb.BinaryReader): EventNameValue;
}

export namespace EventNameValue {
  export type AsObject = {
    value: string,
  }
}

export class EventAccessValue extends jspb.Message {
  getValue(): rooms_enums_pb.EventAccess;
  setValue(value: rooms_enums_pb.EventAccess): EventAccessValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventAccessValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventAccessValue): EventAccessValue.AsObject;
  static serializeBinaryToWriter(message: EventAccessValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventAccessValue;
  static deserializeBinaryFromReader(message: EventAccessValue, reader: jspb.BinaryReader): EventAccessValue;
}

export namespace EventAccessValue {
  export type AsObject = {
    value: rooms_enums_pb.EventAccess,
  }
}

export class EventStatusValue extends jspb.Message {
  getValue(): rooms_enums_pb.EventStatus;
  setValue(value: rooms_enums_pb.EventStatus): EventStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventStatusValue): EventStatusValue.AsObject;
  static serializeBinaryToWriter(message: EventStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventStatusValue;
  static deserializeBinaryFromReader(message: EventStatusValue, reader: jspb.BinaryReader): EventStatusValue;
}

export namespace EventStatusValue {
  export type AsObject = {
    value: rooms_enums_pb.EventStatus,
  }
}

export class EventLayoutValue extends jspb.Message {
  getValue(): rooms_enums_pb.EventLayout;
  setValue(value: rooms_enums_pb.EventLayout): EventLayoutValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLayoutValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventLayoutValue): EventLayoutValue.AsObject;
  static serializeBinaryToWriter(message: EventLayoutValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLayoutValue;
  static deserializeBinaryFromReader(message: EventLayoutValue, reader: jspb.BinaryReader): EventLayoutValue;
}

export namespace EventLayoutValue {
  export type AsObject = {
    value: rooms_enums_pb.EventLayout,
  }
}

export class EventGenresValue extends jspb.Message {
  getValueList(): Array<rooms_enums_pb.EventGenre>;
  setValueList(value: Array<rooms_enums_pb.EventGenre>): EventGenresValue;
  clearValueList(): EventGenresValue;
  addValue(value: rooms_enums_pb.EventGenre, index?: number): EventGenresValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventGenresValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventGenresValue): EventGenresValue.AsObject;
  static serializeBinaryToWriter(message: EventGenresValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventGenresValue;
  static deserializeBinaryFromReader(message: EventGenresValue, reader: jspb.BinaryReader): EventGenresValue;
}

export namespace EventGenresValue {
  export type AsObject = {
    valueList: Array<rooms_enums_pb.EventGenre>,
  }
}

export class EventSummaryValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventSummaryValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSummaryValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventSummaryValue): EventSummaryValue.AsObject;
  static serializeBinaryToWriter(message: EventSummaryValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSummaryValue;
  static deserializeBinaryFromReader(message: EventSummaryValue, reader: jspb.BinaryReader): EventSummaryValue;
}

export namespace EventSummaryValue {
  export type AsObject = {
    value: string,
  }
}

export class EventAudienceValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventAudienceValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventAudienceValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventAudienceValue): EventAudienceValue.AsObject;
  static serializeBinaryToWriter(message: EventAudienceValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventAudienceValue;
  static deserializeBinaryFromReader(message: EventAudienceValue, reader: jspb.BinaryReader): EventAudienceValue;
}

export namespace EventAudienceValue {
  export type AsObject = {
    value: number,
  }
}

export class EventOverseerValue extends jspb.Message {
  getValue(): rooms_enums_pb.EventOverseer;
  setValue(value: rooms_enums_pb.EventOverseer): EventOverseerValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOverseerValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventOverseerValue): EventOverseerValue.AsObject;
  static serializeBinaryToWriter(message: EventOverseerValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOverseerValue;
  static deserializeBinaryFromReader(message: EventOverseerValue, reader: jspb.BinaryReader): EventOverseerValue;
}

export namespace EventOverseerValue {
  export type AsObject = {
    value: rooms_enums_pb.EventOverseer,
  }
}

export class EventDescriptionValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventDescriptionValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDescriptionValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventDescriptionValue): EventDescriptionValue.AsObject;
  static serializeBinaryToWriter(message: EventDescriptionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDescriptionValue;
  static deserializeBinaryFromReader(message: EventDescriptionValue, reader: jspb.BinaryReader): EventDescriptionValue;
}

export namespace EventDescriptionValue {
  export type AsObject = {
    value: string,
  }
}

export class EventStartsAtValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventStartsAtValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventStartsAtValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventStartsAtValue): EventStartsAtValue.AsObject;
  static serializeBinaryToWriter(message: EventStartsAtValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventStartsAtValue;
  static deserializeBinaryFromReader(message: EventStartsAtValue, reader: jspb.BinaryReader): EventStartsAtValue;
}

export namespace EventStartsAtValue {
  export type AsObject = {
    value: number,
  }
}

export class EventFinishesAtValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventFinishesAtValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventFinishesAtValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventFinishesAtValue): EventFinishesAtValue.AsObject;
  static serializeBinaryToWriter(message: EventFinishesAtValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventFinishesAtValue;
  static deserializeBinaryFromReader(message: EventFinishesAtValue, reader: jspb.BinaryReader): EventFinishesAtValue;
}

export namespace EventFinishesAtValue {
  export type AsObject = {
    value: number,
  }
}

export class EventStartedAtValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventStartedAtValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventStartedAtValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventStartedAtValue): EventStartedAtValue.AsObject;
  static serializeBinaryToWriter(message: EventStartedAtValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventStartedAtValue;
  static deserializeBinaryFromReader(message: EventStartedAtValue, reader: jspb.BinaryReader): EventStartedAtValue;
}

export namespace EventStartedAtValue {
  export type AsObject = {
    value: number,
  }
}

export class EventFinishedAtValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventFinishedAtValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventFinishedAtValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventFinishedAtValue): EventFinishedAtValue.AsObject;
  static serializeBinaryToWriter(message: EventFinishedAtValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventFinishedAtValue;
  static deserializeBinaryFromReader(message: EventFinishedAtValue, reader: jspb.BinaryReader): EventFinishedAtValue;
}

export namespace EventFinishedAtValue {
  export type AsObject = {
    value: number,
  }
}

export class EventThumbnailValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventThumbnailValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventThumbnailValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventThumbnailValue): EventThumbnailValue.AsObject;
  static serializeBinaryToWriter(message: EventThumbnailValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventThumbnailValue;
  static deserializeBinaryFromReader(message: EventThumbnailValue, reader: jspb.BinaryReader): EventThumbnailValue;
}

export namespace EventThumbnailValue {
  export type AsObject = {
    value: string,
  }
}

export class EventBackgroundValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventBackgroundValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBackgroundValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventBackgroundValue): EventBackgroundValue.AsObject;
  static serializeBinaryToWriter(message: EventBackgroundValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBackgroundValue;
  static deserializeBinaryFromReader(message: EventBackgroundValue, reader: jspb.BinaryReader): EventBackgroundValue;
}

export namespace EventBackgroundValue {
  export type AsObject = {
    value: string,
  }
}

export class EventBroadcastUrlValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): EventBroadcastUrlValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBroadcastUrlValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventBroadcastUrlValue): EventBroadcastUrlValue.AsObject;
  static serializeBinaryToWriter(message: EventBroadcastUrlValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBroadcastUrlValue;
  static deserializeBinaryFromReader(message: EventBroadcastUrlValue, reader: jspb.BinaryReader): EventBroadcastUrlValue;
}

export namespace EventBroadcastUrlValue {
  export type AsObject = {
    value: string,
  }
}

export class EventBroadcastOffsetValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventBroadcastOffsetValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBroadcastOffsetValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventBroadcastOffsetValue): EventBroadcastOffsetValue.AsObject;
  static serializeBinaryToWriter(message: EventBroadcastOffsetValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBroadcastOffsetValue;
  static deserializeBinaryFromReader(message: EventBroadcastOffsetValue, reader: jspb.BinaryReader): EventBroadcastOffsetValue;
}

export namespace EventBroadcastOffsetValue {
  export type AsObject = {
    value: number,
  }
}

export class EventBroadcastTimestampValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventBroadcastTimestampValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBroadcastTimestampValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventBroadcastTimestampValue): EventBroadcastTimestampValue.AsObject;
  static serializeBinaryToWriter(message: EventBroadcastTimestampValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBroadcastTimestampValue;
  static deserializeBinaryFromReader(message: EventBroadcastTimestampValue, reader: jspb.BinaryReader): EventBroadcastTimestampValue;
}

export namespace EventBroadcastTimestampValue {
  export type AsObject = {
    value: number,
  }
}

export class EventState extends jspb.Message {
  getInfo(): EventInfo | undefined;
  setInfo(value?: EventInfo): EventState;
  hasInfo(): boolean;
  clearInfo(): EventState;

  getChat(): ChatInfo | undefined;
  setChat(value?: ChatInfo): EventState;
  hasChat(): boolean;
  clearChat(): EventState;

  getPerformersList(): Array<EventPerformerInfo>;
  setPerformersList(value: Array<EventPerformerInfo>): EventState;
  clearPerformersList(): EventState;
  addPerformers(value?: EventPerformerInfo, index?: number): EventPerformerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventState.AsObject;
  static toObject(includeInstance: boolean, msg: EventState): EventState.AsObject;
  static serializeBinaryToWriter(message: EventState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventState;
  static deserializeBinaryFromReader(message: EventState, reader: jspb.BinaryReader): EventState;
}

export namespace EventState {
  export type AsObject = {
    info?: EventInfo.AsObject,
    chat?: ChatInfo.AsObject,
    performersList: Array<EventPerformerInfo.AsObject>,
  }
}

export class EventReportInfo extends jspb.Message {
  getInfo(): EventInfo | undefined;
  setInfo(value?: EventInfo): EventReportInfo;
  hasInfo(): boolean;
  clearInfo(): EventReportInfo;

  getMerchant(): EventReportMerchant | undefined;
  setMerchant(value?: EventReportMerchant): EventReportInfo;
  hasMerchant(): boolean;
  clearMerchant(): EventReportInfo;

  getAudience(): EventReportAudience | undefined;
  setAudience(value?: EventReportAudience): EventReportInfo;
  hasAudience(): boolean;
  clearAudience(): EventReportInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventReportInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventReportInfo): EventReportInfo.AsObject;
  static serializeBinaryToWriter(message: EventReportInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventReportInfo;
  static deserializeBinaryFromReader(message: EventReportInfo, reader: jspb.BinaryReader): EventReportInfo;
}

export namespace EventReportInfo {
  export type AsObject = {
    info?: EventInfo.AsObject,
    merchant?: EventReportMerchant.AsObject,
    audience?: EventReportAudience.AsObject,
  }
}

export class EventReportMerchant extends jspb.Message {
  getTickets(): number;
  setTickets(value: number): EventReportMerchant;

  getProducts(): number;
  setProducts(value: number): EventReportMerchant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventReportMerchant.AsObject;
  static toObject(includeInstance: boolean, msg: EventReportMerchant): EventReportMerchant.AsObject;
  static serializeBinaryToWriter(message: EventReportMerchant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventReportMerchant;
  static deserializeBinaryFromReader(message: EventReportMerchant, reader: jspb.BinaryReader): EventReportMerchant;
}

export namespace EventReportMerchant {
  export type AsObject = {
    tickets: number,
    products: number,
  }
}

export class EventReportAudience extends jspb.Message {
  getPeak(): number;
  setPeak(value: number): EventReportAudience;

  getTotal(): number;
  setTotal(value: number): EventReportAudience;

  getAverage(): number;
  setAverage(value: number): EventReportAudience;

  getTimelineMap(): jspb.Map<number, number>;
  clearTimelineMap(): EventReportAudience;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventReportAudience.AsObject;
  static toObject(includeInstance: boolean, msg: EventReportAudience): EventReportAudience.AsObject;
  static serializeBinaryToWriter(message: EventReportAudience, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventReportAudience;
  static deserializeBinaryFromReader(message: EventReportAudience, reader: jspb.BinaryReader): EventReportAudience;
}

export namespace EventReportAudience {
  export type AsObject = {
    peak: number,
    total: number,
    average: number,
    timelineMap: Array<[number, number]>,
  }
}

export class EventObserverInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventObserverInfo;

  getRoomId(): string;
  setRoomId(value: string): EventObserverInfo;

  getEventId(): string;
  setEventId(value: string): EventObserverInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): EventObserverInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EventObserverInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventObserverInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventObserverInfo): EventObserverInfo.AsObject;
  static serializeBinaryToWriter(message: EventObserverInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventObserverInfo;
  static deserializeBinaryFromReader(message: EventObserverInfo, reader: jspb.BinaryReader): EventObserverInfo;
}

export namespace EventObserverInfo {
  export type AsObject = {
    id: string,
    roomId: string,
    eventId: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class EventPerformerInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventPerformerInfo;

  getUserId(): string;
  setUserId(value: string): EventPerformerInfo;

  getEventId(): string;
  setEventId(value: string): EventPerformerInfo;

  getPosition(): number;
  setPosition(value: number): EventPerformerInfo;

  getStatus(): rooms_enums_pb.EventPerformerStatus;
  setStatus(value: rooms_enums_pb.EventPerformerStatus): EventPerformerInfo;

  getStartedAt(): number;
  setStartedAt(value: number): EventPerformerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventPerformerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventPerformerInfo): EventPerformerInfo.AsObject;
  static serializeBinaryToWriter(message: EventPerformerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventPerformerInfo;
  static deserializeBinaryFromReader(message: EventPerformerInfo, reader: jspb.BinaryReader): EventPerformerInfo;
}

export namespace EventPerformerInfo {
  export type AsObject = {
    id: string,
    userId: string,
    eventId: string,
    position: number,
    status: rooms_enums_pb.EventPerformerStatus,
    startedAt: number,
  }
}

export class EventPerformerStatusValue extends jspb.Message {
  getValue(): rooms_enums_pb.EventPerformerStatus;
  setValue(value: rooms_enums_pb.EventPerformerStatus): EventPerformerStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventPerformerStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventPerformerStatusValue): EventPerformerStatusValue.AsObject;
  static serializeBinaryToWriter(message: EventPerformerStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventPerformerStatusValue;
  static deserializeBinaryFromReader(message: EventPerformerStatusValue, reader: jspb.BinaryReader): EventPerformerStatusValue;
}

export namespace EventPerformerStatusValue {
  export type AsObject = {
    value: rooms_enums_pb.EventPerformerStatus,
  }
}

export class EventPerformerPositionValue extends jspb.Message {
  getPosition(): number;
  setPosition(value: number): EventPerformerPositionValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventPerformerPositionValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventPerformerPositionValue): EventPerformerPositionValue.AsObject;
  static serializeBinaryToWriter(message: EventPerformerPositionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventPerformerPositionValue;
  static deserializeBinaryFromReader(message: EventPerformerPositionValue, reader: jspb.BinaryReader): EventPerformerPositionValue;
}

export namespace EventPerformerPositionValue {
  export type AsObject = {
    position: number,
  }
}

export class EventOwnerReportInfo extends jspb.Message {
  getId(): string;
  setId(value: string): EventOwnerReportInfo;

  getUserId(): string;
  setUserId(value: string): EventOwnerReportInfo;

  getPeakAudience(): number;
  setPeakAudience(value: number): EventOwnerReportInfo;

  getTotalAudience(): number;
  setTotalAudience(value: number): EventOwnerReportInfo;

  getCreatedEvents(): number;
  setCreatedEvents(value: number): EventOwnerReportInfo;

  getAverageAudience(): number;
  setAverageAudience(value: number): EventOwnerReportInfo;

  getTotalStreamTime(): number;
  setTotalStreamTime(value: number): EventOwnerReportInfo;

  getAverageEventTime(): number;
  setAverageEventTime(value: number): EventOwnerReportInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): EventOwnerReportInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): EventOwnerReportInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOwnerReportInfo.AsObject;
  static toObject(includeInstance: boolean, msg: EventOwnerReportInfo): EventOwnerReportInfo.AsObject;
  static serializeBinaryToWriter(message: EventOwnerReportInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOwnerReportInfo;
  static deserializeBinaryFromReader(message: EventOwnerReportInfo, reader: jspb.BinaryReader): EventOwnerReportInfo;
}

export namespace EventOwnerReportInfo {
  export type AsObject = {
    id: string,
    userId: string,
    peakAudience: number,
    totalAudience: number,
    createdEvents: number,
    averageAudience: number,
    totalStreamTime: number,
    averageEventTime: number,
    createdAt: number,
    updatedAt: number,
  }
}

export class EventOwnerReportPeakAudienceValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventOwnerReportPeakAudienceValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOwnerReportPeakAudienceValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventOwnerReportPeakAudienceValue): EventOwnerReportPeakAudienceValue.AsObject;
  static serializeBinaryToWriter(message: EventOwnerReportPeakAudienceValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOwnerReportPeakAudienceValue;
  static deserializeBinaryFromReader(message: EventOwnerReportPeakAudienceValue, reader: jspb.BinaryReader): EventOwnerReportPeakAudienceValue;
}

export namespace EventOwnerReportPeakAudienceValue {
  export type AsObject = {
    value: number,
  }
}

export class EventOwnerReportTotalAudienceValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventOwnerReportTotalAudienceValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOwnerReportTotalAudienceValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventOwnerReportTotalAudienceValue): EventOwnerReportTotalAudienceValue.AsObject;
  static serializeBinaryToWriter(message: EventOwnerReportTotalAudienceValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOwnerReportTotalAudienceValue;
  static deserializeBinaryFromReader(message: EventOwnerReportTotalAudienceValue, reader: jspb.BinaryReader): EventOwnerReportTotalAudienceValue;
}

export namespace EventOwnerReportTotalAudienceValue {
  export type AsObject = {
    value: number,
  }
}

export class EventOwnerReportAverageAudienceValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventOwnerReportAverageAudienceValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOwnerReportAverageAudienceValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventOwnerReportAverageAudienceValue): EventOwnerReportAverageAudienceValue.AsObject;
  static serializeBinaryToWriter(message: EventOwnerReportAverageAudienceValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOwnerReportAverageAudienceValue;
  static deserializeBinaryFromReader(message: EventOwnerReportAverageAudienceValue, reader: jspb.BinaryReader): EventOwnerReportAverageAudienceValue;
}

export namespace EventOwnerReportAverageAudienceValue {
  export type AsObject = {
    value: number,
  }
}

export class EventOwnerReportTotalStreamTimeValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventOwnerReportTotalStreamTimeValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOwnerReportTotalStreamTimeValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventOwnerReportTotalStreamTimeValue): EventOwnerReportTotalStreamTimeValue.AsObject;
  static serializeBinaryToWriter(message: EventOwnerReportTotalStreamTimeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOwnerReportTotalStreamTimeValue;
  static deserializeBinaryFromReader(message: EventOwnerReportTotalStreamTimeValue, reader: jspb.BinaryReader): EventOwnerReportTotalStreamTimeValue;
}

export namespace EventOwnerReportTotalStreamTimeValue {
  export type AsObject = {
    value: number,
  }
}

export class EventOwnerReportAverageEventTimeValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): EventOwnerReportAverageEventTimeValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOwnerReportAverageEventTimeValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventOwnerReportAverageEventTimeValue): EventOwnerReportAverageEventTimeValue.AsObject;
  static serializeBinaryToWriter(message: EventOwnerReportAverageEventTimeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOwnerReportAverageEventTimeValue;
  static deserializeBinaryFromReader(message: EventOwnerReportAverageEventTimeValue, reader: jspb.BinaryReader): EventOwnerReportAverageEventTimeValue;
}

export namespace EventOwnerReportAverageEventTimeValue {
  export type AsObject = {
    value: number,
  }
}

export class TiktokObjectInfo extends jspb.Message {
  getId(): string;
  setId(value: string): TiktokObjectInfo;

  getLive(): boolean;
  setLive(value: boolean): TiktokObjectInfo;

  getTitle(): string;
  setTitle(value: string): TiktokObjectInfo;

  getWidth(): number;
  setWidth(value: number): TiktokObjectInfo;

  getHeight(): number;
  setHeight(value: number): TiktokObjectInfo;

  getFormat(): string;
  setFormat(value: string): TiktokObjectInfo;

  getBitrate(): number;
  setBitrate(value: number): TiktokObjectInfo;

  getDuration(): number;
  setDuration(value: number): TiktokObjectInfo;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): TiktokObjectInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): TiktokObjectInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TiktokObjectInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TiktokObjectInfo): TiktokObjectInfo.AsObject;
  static serializeBinaryToWriter(message: TiktokObjectInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TiktokObjectInfo;
  static deserializeBinaryFromReader(message: TiktokObjectInfo, reader: jspb.BinaryReader): TiktokObjectInfo;
}

export namespace TiktokObjectInfo {
  export type AsObject = {
    id: string,
    live: boolean,
    title: string,
    width: number,
    height: number,
    format: string,
    bitrate: number,
    duration: number,
    downloadUrl: string,
    thumbnailUrl: string,
  }
}

export class YoutubeObjectInfo extends jspb.Message {
  getId(): string;
  setId(value: string): YoutubeObjectInfo;

  getLive(): boolean;
  setLive(value: boolean): YoutubeObjectInfo;

  getTitle(): string;
  setTitle(value: string): YoutubeObjectInfo;

  getDuration(): number;
  setDuration(value: number): YoutubeObjectInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): YoutubeObjectInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YoutubeObjectInfo.AsObject;
  static toObject(includeInstance: boolean, msg: YoutubeObjectInfo): YoutubeObjectInfo.AsObject;
  static serializeBinaryToWriter(message: YoutubeObjectInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YoutubeObjectInfo;
  static deserializeBinaryFromReader(message: YoutubeObjectInfo, reader: jspb.BinaryReader): YoutubeObjectInfo;
}

export namespace YoutubeObjectInfo {
  export type AsObject = {
    id: string,
    live: boolean,
    title: string,
    duration: number,
    thumbnailUrl: string,
  }
}

export class RecommendationInfo extends jspb.Message {
  getId(): string;
  setId(value: string): RecommendationInfo;

  getType(): rooms_enums_pb.RecommendationType;
  setType(value: rooms_enums_pb.RecommendationType): RecommendationInfo;

  getPosition(): number;
  setPosition(value: number): RecommendationInfo;

  getMetadata(): RecommendationMetadata | undefined;
  setMetadata(value?: RecommendationMetadata): RecommendationInfo;
  hasMetadata(): boolean;
  clearMetadata(): RecommendationInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): RecommendationInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): RecommendationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationInfo): RecommendationInfo.AsObject;
  static serializeBinaryToWriter(message: RecommendationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationInfo;
  static deserializeBinaryFromReader(message: RecommendationInfo, reader: jspb.BinaryReader): RecommendationInfo;
}

export namespace RecommendationInfo {
  export type AsObject = {
    id: string,
    type: rooms_enums_pb.RecommendationType,
    position: number,
    metadata: RecommendationMetadata.AsObject,
    createdAt: number,
    updatedAt: number,
    played: boolean
  }
}

export class RecommendationMetadata extends jspb.Message {
  getSid(): string;
  setSid(value: string): RecommendationMetadata;

  getLive(): boolean;
  setLive(value: boolean): RecommendationMetadata;

  getTitle(): string;
  setTitle(value: string): RecommendationMetadata;

  getDuration(): number;
  setDuration(value: number): RecommendationMetadata;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): RecommendationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationMetadata): RecommendationMetadata.AsObject;
  static serializeBinaryToWriter(message: RecommendationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationMetadata;
  static deserializeBinaryFromReader(message: RecommendationMetadata, reader: jspb.BinaryReader): RecommendationMetadata;
}

export namespace RecommendationMetadata {
  export type AsObject = {
    sid: string,
    live: boolean,
    title: string,
    duration: number,
    thumbnailUrl: string,
  }
}
