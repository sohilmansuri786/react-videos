/* eslint-disable */
// source: payments/enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.payments.api.v1.Currency', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderRefundStatus', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderStatus', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderType', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerPaymentType', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerTransactionProvider', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerTransactionStatus', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductStatus', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketStatus', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketType', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketVoucherStatus', null, global);
goog.exportSymbol('proto.payments.api.v1.PartnerStatus', null, global);
/**
 * @enum {number}
 */
proto.payments.api.v1.Currency = {
  CURRENCY_UNKNOWN: 0,
  CURRENCY_USD: 1,
  CURRENCY_INR: 2
};

/**
 * @enum {number}
 */
proto.payments.api.v1.EventTicketType = {
  ETTYPE_UNKNOWN: 0,
  ETTYPE_PREMIUM: 1,
  ETTYPE_STANDARD: 2,
  ETTYPE_COMPLIMENTARY: 3
};

/**
 * @enum {number}
 */
proto.payments.api.v1.EventTicketStatus = {
  ETSTATUS_UNKNOWN: 0,
  ETSTATUS_ACTIVE: 1,
  ETSTATUS_INACTIVE: 2,
  ETSTATUS_EXPIRED: 3
};

/**
 * @enum {number}
 */
proto.payments.api.v1.EventProductStatus = {
  EPSTATUS_UNKNOWN: 0,
  EPSTATUS_ACTIVE: 1,
  EPSTATUS_INACTIVE: 2,
  EPSTATUS_EXPIRED: 3
};

/**
 * @enum {number}
 */
proto.payments.api.v1.EventTicketVoucherStatus = {
  TVSTATUS_UNKNOWN: 0,
  TVSTATUS_ACTIVE: 1,
  TVSTATUS_INACTIVE: 2,
  TVSTATUS_EXPIRED: 3
};

/**
 * @enum {number}
 */
proto.payments.api.v1.PartnerStatus = {
  PSTATUS_UNKNOWN: 0,
  PSTATUS_ACTIVE: 1,
  PSTATUS_PENDING: 2,
  PSTATUS_INACTIVE: 3
};

/**
 * @enum {number}
 */
proto.payments.api.v1.CustomerOrderType = {
  COTYPE_UNKNOWN: 0,
  COTYPE_TICKET: 1,
  COTYPE_PRODUCT: 2
};

/**
 * @enum {number}
 */
proto.payments.api.v1.CustomerOrderStatus = {
  COSTATUS_UNKNOWN: 0,
  COSTATUS_FAILED: 1,
  COSTATUS_PENDING: 2,
  COSTATUS_CANCELED: 3,
  COSTATUS_COMPLETED: 4
};

/**
 * @enum {number}
 */
proto.payments.api.v1.CustomerPaymentType = {
  CPTYPE_UNKNOWN: 0,
  CPTYPE_CARD: 1
};

/**
 * @enum {number}
 */
proto.payments.api.v1.CustomerTransactionStatus = {
  CTSTATUS_UNKNOWN: 0,
  CTSTATUS_FAILED: 1,
  CTSTATUS_PENDING: 2,
  CTSTATUS_CANCELED: 3,
  CTSTATUS_REFUNDED: 4,
  CTSTATUS_SUCCEEDED: 5
};

/**
 * @enum {number}
 */
proto.payments.api.v1.CustomerTransactionProvider = {
  CTPROVIDER_UNKNOWN: 0,
  CTPROVIDER_STRIPE: 1,
  CTPROVIDER_INTERNAL: 2
};

/**
 * @enum {number}
 */
proto.payments.api.v1.CustomerOrderRefundStatus = {
  ORSTATUS_UNKNOWN: 0,
  ORSTATUS_FAILED: 1,
  ORSTATUS_PENDING: 2,
  ORSTATUS_CANCELED: 3,
  ORSTATUS_SUCCEEDED: 4
};

goog.object.extend(exports, proto.payments.api.v1);
