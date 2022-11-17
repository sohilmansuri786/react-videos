import * as jspb from 'google-protobuf'



export enum Action { 
  UNKNOWN = 0,
  HANDSHAKE = 1,
  AUTHENTICATE = 2,
  HEARTBEAT = 3,
  DISCONNECT = 4,
  SFU_CONNECT = 20,
  SFU_ICE_CANDIDATE = 21,
  USER_CHAT = 30,
  ROOM_CHAT = 40,
  ROOM_JOIN = 41,
  ROOM_LEAVE = 42,
  EVENT_CHAT = 50,
  ROOM_USER_FLAGS = 60,
}
export enum Protocol { 
  PROTOCOL_UNKNOWN = 0,
  PROTOCOL_TEXT = 1,
  PROTOCOL_BINARY = 2,
}
export enum Platform { 
  PLATFORM_UNKNOWN = 0,
  PLATFORM_MOBILE = 1,
  PLATFORM_DESKTOP = 2,
}
