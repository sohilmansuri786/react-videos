import * as jspb from 'google-protobuf'



export enum Currency { 
  CURRENCY_UNKNOWN = 0,
  CURRENCY_USD = 1,
  CURRENCY_INR = 2,
}
export enum EventTicketType { 
  ETTYPE_UNKNOWN = 0,
  ETTYPE_PREMIUM = 1,
  ETTYPE_STANDARD = 2,
  ETTYPE_COMPLIMENTARY = 3,
}
export enum EventTicketStatus { 
  ETSTATUS_UNKNOWN = 0,
  ETSTATUS_ACTIVE = 1,
  ETSTATUS_INACTIVE = 2,
  ETSTATUS_EXPIRED = 3,
}
export enum EventProductStatus { 
  EPSTATUS_UNKNOWN = 0,
  EPSTATUS_ACTIVE = 1,
  EPSTATUS_INACTIVE = 2,
  EPSTATUS_EXPIRED = 3,
}
export enum EventTicketVoucherStatus { 
  TVSTATUS_UNKNOWN = 0,
  TVSTATUS_ACTIVE = 1,
  TVSTATUS_INACTIVE = 2,
  TVSTATUS_EXPIRED = 3,
}
export enum PartnerStatus { 
  PSTATUS_UNKNOWN = 0,
  PSTATUS_ACTIVE = 1,
  PSTATUS_PENDING = 2,
  PSTATUS_INACTIVE = 3,
}
export enum CustomerOrderType { 
  COTYPE_UNKNOWN = 0,
  COTYPE_TICKET = 1,
  COTYPE_PRODUCT = 2,
}
export enum CustomerOrderStatus { 
  COSTATUS_UNKNOWN = 0,
  COSTATUS_FAILED = 1,
  COSTATUS_PENDING = 2,
  COSTATUS_CANCELED = 3,
  COSTATUS_COMPLETED = 4,
}
export enum CustomerPaymentType { 
  CPTYPE_UNKNOWN = 0,
  CPTYPE_CARD = 1,
}
export enum CustomerTransactionStatus { 
  CTSTATUS_UNKNOWN = 0,
  CTSTATUS_FAILED = 1,
  CTSTATUS_PENDING = 2,
  CTSTATUS_CANCELED = 3,
  CTSTATUS_REFUNDED = 4,
  CTSTATUS_SUCCEEDED = 5,
}
export enum CustomerTransactionProvider { 
  CTPROVIDER_UNKNOWN = 0,
  CTPROVIDER_STRIPE = 1,
  CTPROVIDER_INTERNAL = 2,
}
export enum CustomerOrderRefundStatus { 
  ORSTATUS_UNKNOWN = 0,
  ORSTATUS_FAILED = 1,
  ORSTATUS_PENDING = 2,
  ORSTATUS_CANCELED = 3,
  ORSTATUS_SUCCEEDED = 4,
}
