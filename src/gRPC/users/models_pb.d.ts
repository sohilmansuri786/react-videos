import * as jspb from 'google-protobuf'

import * as users_enums_pb from '../users/enums_pb';


export class ChatInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ChatInfo;

  getType(): users_enums_pb.ChatType;
  setType(value: users_enums_pb.ChatType): ChatInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ChatInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ChatInfo;

  getUsersList(): Array<ChatUserInfo>;
  setUsersList(value: Array<ChatUserInfo>): ChatInfo;
  clearUsersList(): ChatInfo;
  addUsers(value?: ChatUserInfo, index?: number): ChatUserInfo;

  getLastMessage(): ChatMessageInfo | undefined;
  setLastMessage(value?: ChatMessageInfo): ChatInfo;
  hasLastMessage(): boolean;
  clearLastMessage(): ChatInfo;

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
    type: users_enums_pb.ChatType,
    createdAt: number,
    updatedAt: number,
    usersList: Array<ChatUserInfo.AsObject>,
    lastMessage?: ChatMessageInfo.AsObject,
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

export class ChatUserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): ChatUserInfo;

  getChatId(): string;
  setChatId(value: string): ChatUserInfo;

  getUserId(): string;
  setUserId(value: string): ChatUserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): ChatUserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): ChatUserInfo;

  getUser(): UserInfo | undefined;
  setUser(value?: UserInfo): ChatUserInfo;
  hasUser(): boolean;
  clearUser(): ChatUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChatUserInfo): ChatUserInfo.AsObject;
  static serializeBinaryToWriter(message: ChatUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatUserInfo;
  static deserializeBinaryFromReader(message: ChatUserInfo, reader: jspb.BinaryReader): ChatUserInfo;
}

export namespace ChatUserInfo {
  export type AsObject = {
    id: string,
    chatId: string,
    userId: string,
    createdAt: number,
    updatedAt: number,
    user?: UserInfo.AsObject,
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

export class LocaleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): LocaleInfo;

  getIp(): string;
  setIp(value: string): LocaleInfo;

  getContinent(): string;
  setContinent(value: string): LocaleInfo;

  getCountry(): string;
  setCountry(value: string): LocaleInfo;

  getRegion(): string;
  setRegion(value: string): LocaleInfo;

  getCity(): string;
  setCity(value: string): LocaleInfo;

  getCurrency(): string;
  setCurrency(value: string): LocaleInfo;

  getPostcode(): string;
  setPostcode(value: string): LocaleInfo;

  getLatitude(): number;
  setLatitude(value: number): LocaleInfo;

  getLongitude(): number;
  setLongitude(value: number): LocaleInfo;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): LocaleInfo;
  clearLanguagesList(): LocaleInfo;
  addLanguages(value: string, index?: number): LocaleInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): LocaleInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): LocaleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocaleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocaleInfo): LocaleInfo.AsObject;
  static serializeBinaryToWriter(message: LocaleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocaleInfo;
  static deserializeBinaryFromReader(message: LocaleInfo, reader: jspb.BinaryReader): LocaleInfo;
}

export namespace LocaleInfo {
  export type AsObject = {
    id: string,
    ip: string,
    continent: string,
    country: string,
    region: string,
    city: string,
    currency: string,
    postcode: string,
    latitude: number,
    longitude: number,
    languagesList: Array<string>,
    createdAt: number,
    updatedAt: number,
  }
}

export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserInfo;

  getFid(): string;
  setFid(value: string): UserInfo;

  getPid(): string;
  setPid(value: string): UserInfo;

  getName(): string;
  setName(value: string): UserInfo;

  getType(): users_enums_pb.UserType;
  setType(value: users_enums_pb.UserType): UserInfo;

  getRole(): number;
  setRole(value: number): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getAccess(): users_enums_pb.UserAccess;
  setAccess(value: users_enums_pb.UserAccess): UserInfo;

  getStatus(): users_enums_pb.UserStatus;
  setStatus(value: users_enums_pb.UserStatus): UserInfo;

  getRegion(): string;
  setRegion(value: string): UserInfo;

  getOptionsList(): Array<users_enums_pb.UserOption>;
  setOptionsList(value: Array<users_enums_pb.UserOption>): UserInfo;
  clearOptionsList(): UserInfo;
  addOptions(value: users_enums_pb.UserOption, index?: number): UserInfo;

  getFirstName(): string;
  setFirstName(value: string): UserInfo;

  getLastName(): string;
  setLastName(value: string): UserInfo;

  getTimezone(): string;
  setTimezone(value: string): UserInfo;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): UserInfo;

  getBirthDate(): number;
  setBirthDate(value: number): UserInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    id: string,
    fid: string,
    pid: string,
    name: string,
    type: users_enums_pb.UserType,
    role: number,
    email: string,
    access: users_enums_pb.UserAccess,
    status: users_enums_pb.UserStatus,
    region: string,
    optionsList: Array<users_enums_pb.UserOption>,
    firstName: string,
    lastName: string,
    timezone: string,
    avatarUrl: string,
    birthDate: number,
    createdAt: number,
    updatedAt: number,
  }
}

export class UserPidValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): UserPidValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPidValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserPidValue): UserPidValue.AsObject;
  static serializeBinaryToWriter(message: UserPidValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPidValue;
  static deserializeBinaryFromReader(message: UserPidValue, reader: jspb.BinaryReader): UserPidValue;
}

export namespace UserPidValue {
  export type AsObject = {
    value: string,
  }
}

export class UserNameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): UserNameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserNameValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserNameValue): UserNameValue.AsObject;
  static serializeBinaryToWriter(message: UserNameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserNameValue;
  static deserializeBinaryFromReader(message: UserNameValue, reader: jspb.BinaryReader): UserNameValue;
}

export namespace UserNameValue {
  export type AsObject = {
    value: string,
  }
}

export class UserRoleValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): UserRoleValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleValue): UserRoleValue.AsObject;
  static serializeBinaryToWriter(message: UserRoleValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleValue;
  static deserializeBinaryFromReader(message: UserRoleValue, reader: jspb.BinaryReader): UserRoleValue;
}

export namespace UserRoleValue {
  export type AsObject = {
    value: number,
  }
}

export class UserEmailValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): UserEmailValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserEmailValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserEmailValue): UserEmailValue.AsObject;
  static serializeBinaryToWriter(message: UserEmailValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserEmailValue;
  static deserializeBinaryFromReader(message: UserEmailValue, reader: jspb.BinaryReader): UserEmailValue;
}

export namespace UserEmailValue {
  export type AsObject = {
    value: string,
  }
}

export class UserAccessValue extends jspb.Message {
  getValue(): users_enums_pb.UserAccess;
  setValue(value: users_enums_pb.UserAccess): UserAccessValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAccessValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserAccessValue): UserAccessValue.AsObject;
  static serializeBinaryToWriter(message: UserAccessValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAccessValue;
  static deserializeBinaryFromReader(message: UserAccessValue, reader: jspb.BinaryReader): UserAccessValue;
}

export namespace UserAccessValue {
  export type AsObject = {
    value: users_enums_pb.UserAccess,
  }
}

export class UserStatusValue extends jspb.Message {
  getValue(): users_enums_pb.UserStatus;
  setValue(value: users_enums_pb.UserStatus): UserStatusValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserStatusValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserStatusValue): UserStatusValue.AsObject;
  static serializeBinaryToWriter(message: UserStatusValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserStatusValue;
  static deserializeBinaryFromReader(message: UserStatusValue, reader: jspb.BinaryReader): UserStatusValue;
}

export namespace UserStatusValue {
  export type AsObject = {
    value: users_enums_pb.UserStatus,
  }
}

export class UserOptionsValue extends jspb.Message {
  getValueList(): Array<users_enums_pb.UserOption>;
  setValueList(value: Array<users_enums_pb.UserOption>): UserOptionsValue;
  clearValueList(): UserOptionsValue;
  addValue(value: users_enums_pb.UserOption, index?: number): UserOptionsValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOptionsValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserOptionsValue): UserOptionsValue.AsObject;
  static serializeBinaryToWriter(message: UserOptionsValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOptionsValue;
  static deserializeBinaryFromReader(message: UserOptionsValue, reader: jspb.BinaryReader): UserOptionsValue;
}

export namespace UserOptionsValue {
  export type AsObject = {
    valueList: Array<users_enums_pb.UserOption>,
  }
}

export class UserPasswordValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): UserPasswordValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPasswordValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserPasswordValue): UserPasswordValue.AsObject;
  static serializeBinaryToWriter(message: UserPasswordValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPasswordValue;
  static deserializeBinaryFromReader(message: UserPasswordValue, reader: jspb.BinaryReader): UserPasswordValue;
}

export namespace UserPasswordValue {
  export type AsObject = {
    value: string,
  }
}

export class UserFirstNameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): UserFirstNameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFirstNameValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserFirstNameValue): UserFirstNameValue.AsObject;
  static serializeBinaryToWriter(message: UserFirstNameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFirstNameValue;
  static deserializeBinaryFromReader(message: UserFirstNameValue, reader: jspb.BinaryReader): UserFirstNameValue;
}

export namespace UserFirstNameValue {
  export type AsObject = {
    value: string,
  }
}

export class UserLastNameValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): UserLastNameValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLastNameValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserLastNameValue): UserLastNameValue.AsObject;
  static serializeBinaryToWriter(message: UserLastNameValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLastNameValue;
  static deserializeBinaryFromReader(message: UserLastNameValue, reader: jspb.BinaryReader): UserLastNameValue;
}

export namespace UserLastNameValue {
  export type AsObject = {
    value: string,
  }
}

export class UserAvatarValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): UserAvatarValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAvatarValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserAvatarValue): UserAvatarValue.AsObject;
  static serializeBinaryToWriter(message: UserAvatarValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAvatarValue;
  static deserializeBinaryFromReader(message: UserAvatarValue, reader: jspb.BinaryReader): UserAvatarValue;
}

export namespace UserAvatarValue {
  export type AsObject = {
    value: string,
  }
}

export class UserBirthDateValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): UserBirthDateValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserBirthDateValue.AsObject;
  static toObject(includeInstance: boolean, msg: UserBirthDateValue): UserBirthDateValue.AsObject;
  static serializeBinaryToWriter(message: UserBirthDateValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserBirthDateValue;
  static deserializeBinaryFromReader(message: UserBirthDateValue, reader: jspb.BinaryReader): UserBirthDateValue;
}

export namespace UserBirthDateValue {
  export type AsObject = {
    value: number,
  }
}

export class UserRelationInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserRelationInfo;

  getUserId(): string;
  setUserId(value: string): UserRelationInfo;

  getRelatedId(): string;
  setRelatedId(value: string): UserRelationInfo;

  getType(): users_enums_pb.UserRelationType;
  setType(value: users_enums_pb.UserRelationType): UserRelationInfo;

  getCreatedAt(): number;
  setCreatedAt(value: number): UserRelationInfo;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): UserRelationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRelationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserRelationInfo): UserRelationInfo.AsObject;
  static serializeBinaryToWriter(message: UserRelationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRelationInfo;
  static deserializeBinaryFromReader(message: UserRelationInfo, reader: jspb.BinaryReader): UserRelationInfo;
}

export namespace UserRelationInfo {
  export type AsObject = {
    id: string,
    userId: string,
    relatedId: string,
    type: users_enums_pb.UserRelationType,
    createdAt: number,
    updatedAt: number,
  }
}

export class UserLocaleInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserLocaleInfo;

  getIp(): string;
  setIp(value: string): UserLocaleInfo;

  getUserId(): string;
  setUserId(value: string): UserLocaleInfo;

  getContinent(): string;
  setContinent(value: string): UserLocaleInfo;

  getCountry(): string;
  setCountry(value: string): UserLocaleInfo;

  getRegion(): string;
  setRegion(value: string): UserLocaleInfo;

  getCity(): string;
  setCity(value: string): UserLocaleInfo;

  getCurrency(): string;
  setCurrency(value: string): UserLocaleInfo;

  getPostcode(): string;
  setPostcode(value: string): UserLocaleInfo;

  getLatitude(): number;
  setLatitude(value: number): UserLocaleInfo;

  getLongitude(): number;
  setLongitude(value: number): UserLocaleInfo;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): UserLocaleInfo;
  clearLanguagesList(): UserLocaleInfo;
  addLanguages(value: string, index?: number): UserLocaleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLocaleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserLocaleInfo): UserLocaleInfo.AsObject;
  static serializeBinaryToWriter(message: UserLocaleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLocaleInfo;
  static deserializeBinaryFromReader(message: UserLocaleInfo, reader: jspb.BinaryReader): UserLocaleInfo;
}

export namespace UserLocaleInfo {
  export type AsObject = {
    id: string,
    ip: string,
    userId: string,
    continent: string,
    country: string,
    region: string,
    city: string,
    currency: string,
    postcode: string,
    latitude: number,
    longitude: number,
    languagesList: Array<string>,
  }
}

