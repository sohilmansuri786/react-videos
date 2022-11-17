import * as jspb from 'google-protobuf'



export enum ProtocolVersion { 
  PROTOCOLVERSION_UNKNOWN = 0,
  PROTOCOLVERSION_1_1_0 = 1,
}
export enum ClientType { 
  CLIENTTYPE_UNKNOWN = 0,
  CHROMIUM = 1,
  FIREFOX = 2,
  SAFARI = 3,
  WINDOWS = 4,
  MACOS = 5,
  IOS = 7,
  ANDROID = 8,
}
export enum SfuType { 
  STYPE_UNKNOWN = 0,
  STYPE_ROUTER = 1,
  STYPE_GATEWAY = 2,
}
export enum Action { 
  ACTION_UNKNOWN = 0,
  CONNECT = 1,
  DISCONNECT = 3,
  PONG = 4,
  MCU = 5,
  TOGGLE_STREAMS = 6,
  NEGOTIATE_STREAMS = 7,
}
export enum StreamType { 
  STREAMTYPE_UNKNOWN = 0,
  CAMERA = 1,
  AUDIO = 2,
  SCREEN = 3,
  SCREEN_AUDIO = 4,
  MCU_VIDEO = 5,
  MCU_VIDEO_IS = 6,
}
export enum ConferenceMode { 
  CONFERENCEMODEUNKNOWN = 0,
  SFU = 1,
  HYBRID = 2,
}
export enum Codec { 
  CODEC_UNKNOWN = 0,
  H264 = 1,
  VP8 = 2,
  VP9 = 3,
  H265 = 4,
  AV1 = 5,
  OPUS = 6,
}
