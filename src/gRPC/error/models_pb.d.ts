import * as jspb from 'google-protobuf'



export class Error extends jspb.Message {
  getType(): ErrorType;
  setType(value: ErrorType): Error;

  getCode(): number;
  setCode(value: number): Error;

  getMessage(): string;
  setMessage(value: string): Error;

  getValidationerrors(): ValidationErrors | undefined;
  setValidationerrors(value?: ValidationErrors): Error;
  hasValidationerrors(): boolean;
  clearValidationerrors(): Error;

  getCauseCase(): Error.CauseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    type: ErrorType,
    code: number,
    message: string,
    validationerrors?: ValidationErrors.AsObject,
  }

  export enum CauseCase { 
    CAUSE_NOT_SET = 0,
    MESSAGE = 3,
    VALIDATIONERRORS = 4,
  }
}

export class ValidationError extends jspb.Message {
  getFieldname(): string;
  setFieldname(value: string): ValidationError;

  getFieldtype(): string;
  setFieldtype(value: string): ValidationError;

  getFieldvalue(): string;
  setFieldvalue(value: string): ValidationError;

  getMessage(): string;
  setMessage(value: string): ValidationError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationError.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationError): ValidationError.AsObject;
  static serializeBinaryToWriter(message: ValidationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationError;
  static deserializeBinaryFromReader(message: ValidationError, reader: jspb.BinaryReader): ValidationError;
}

export namespace ValidationError {
  export type AsObject = {
    fieldname: string,
    fieldtype: string,
    fieldvalue: string,
    message: string,
  }
}

export class ValidationErrors extends jspb.Message {
  getErrorsList(): Array<ValidationError>;
  setErrorsList(value: Array<ValidationError>): ValidationErrors;
  clearErrorsList(): ValidationErrors;
  addErrors(value?: ValidationError, index?: number): ValidationError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationErrors.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationErrors): ValidationErrors.AsObject;
  static serializeBinaryToWriter(message: ValidationErrors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationErrors;
  static deserializeBinaryFromReader(message: ValidationErrors, reader: jspb.BinaryReader): ValidationErrors;
}

export namespace ValidationErrors {
  export type AsObject = {
    errorsList: Array<ValidationError.AsObject>,
  }
}

export enum ErrorType { 
  UNKNOWN = 0,
  GENERIC = 100,
  TIMEOUT = 101,
  VALIDATION = 102,
  BAD_REQUEST = 103,
  ALREADY_EXISTS = 104,
  CANNOT_BE_FOUND = 105,
  FORBIDDEN = 106,
  AUTHORIZATION = 107,
  AUTHENTICATION = 108,
  REAUTHENTICATION = 109,
  UNSUPPORTED = 110,
  INTERNAL = 500,
  CONFLICT = 501,
  UNAVAILABLE = 502,
  MAINTENANCE = 503,
}
