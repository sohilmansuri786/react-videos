/* eslint-disable */
// source: payments/services.public.proto
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

var payments_enums_pb = require('../payments/enums_pb.js');
goog.object.extend(proto, payments_enums_pb);
var payments_models_pb = require('../payments/models_pb.js');
goog.object.extend(proto, payments_models_pb);
var error_models_pb = require('../error/models_pb.js');
goog.object.extend(proto, error_models_pb);
goog.exportSymbol('proto.payments.api.v1.AcceptPartnerOrderRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.AcceptPartnerOrderResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ActivatePartnerRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ActivatePartnerResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomerAddressesRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomerAddressesResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomerOrdersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomerOrdersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomerPaymentsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomerPaymentsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomerTransactionsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomerTransactionsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountCustomersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountEventProductsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountEventProductsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountEventTicketVouchersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountEventTicketVouchersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountEventTicketsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountEventTicketsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountPartnerOrdersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountPartnerOrdersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CountPartnersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CountPartnersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateCustomerAddressRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateCustomerAddressResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateCustomerPaymentRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateCustomerPaymentResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateEventProductRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateEventProductResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateEventTicketRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateEventTicketResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateEventTicketVoucherRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.CreateEventTicketVoucherResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.DeclinePartnerOrderRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.DeclinePartnerOrderResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteCustomerAddressRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteCustomerAddressResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteCustomerPaymentRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteCustomerPaymentResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteCustomerRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteCustomerResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteEventProductRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteEventProductResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteEventTicketRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteEventTicketResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteEventTicketVoucherRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.DeleteEventTicketVoucherResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.DeletePartnerRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.DeletePartnerResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerAddressInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerAddressInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerOrderInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerOrderInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerPaymentInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerPaymentInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerTransactionInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetCustomerTransactionInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetEventProductInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetEventProductInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetEventTicketInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetEventTicketInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetEventTicketVoucherInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetEventTicketVoucherInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetPartnerDashboardRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetPartnerDashboardResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.GetPartnerInfoRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.GetPartnerInfoResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomerAddressesRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomerAddressesResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomerOrdersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomerOrdersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomerPaymentsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomerPaymentsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomerTransactionsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomerTransactionsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListCustomersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListEventProductsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListEventProductsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListEventTicketVouchersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListEventTicketVouchersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListEventTicketsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListEventTicketsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListPartnerOrdersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListPartnerOrdersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.ListPartnersRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.ListPartnersResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.PurchaseEventProductsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.PurchaseEventProductsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.PurchaseEventTicketsRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.PurchaseEventTicketsResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.RefundPartnerOrderRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.RefundPartnerOrderResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateCustomerAddressRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateCustomerAddressResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateCustomerPaymentRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateCustomerPaymentResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateEventProductRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateEventProductResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateEventTicketRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateEventTicketResponse', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateEventTicketVoucherRequest', null, global);
goog.exportSymbol('proto.payments.api.v1.UpdateEventTicketVoucherResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetEventTicketInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetEventTicketInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetEventTicketInfoRequest.displayName = 'proto.payments.api.v1.GetEventTicketInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetEventTicketInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetEventTicketInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetEventTicketInfoResponse.displayName = 'proto.payments.api.v1.GetEventTicketInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListEventTicketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ListEventTicketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListEventTicketsRequest.displayName = 'proto.payments.api.v1.ListEventTicketsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListEventTicketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListEventTicketsResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListEventTicketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListEventTicketsResponse.displayName = 'proto.payments.api.v1.ListEventTicketsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountEventTicketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountEventTicketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountEventTicketsRequest.displayName = 'proto.payments.api.v1.CountEventTicketsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountEventTicketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountEventTicketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountEventTicketsResponse.displayName = 'proto.payments.api.v1.CountEventTicketsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateEventTicketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.CreateEventTicketRequest.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.CreateEventTicketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateEventTicketRequest.displayName = 'proto.payments.api.v1.CreateEventTicketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateEventTicketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreateEventTicketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateEventTicketResponse.displayName = 'proto.payments.api.v1.CreateEventTicketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateEventTicketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateEventTicketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateEventTicketRequest.displayName = 'proto.payments.api.v1.UpdateEventTicketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateEventTicketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateEventTicketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateEventTicketResponse.displayName = 'proto.payments.api.v1.UpdateEventTicketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteEventTicketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteEventTicketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteEventTicketRequest.displayName = 'proto.payments.api.v1.DeleteEventTicketRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteEventTicketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteEventTicketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteEventTicketResponse.displayName = 'proto.payments.api.v1.DeleteEventTicketResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.PurchaseEventTicketsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.PurchaseEventTicketsRequest.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.PurchaseEventTicketsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.PurchaseEventTicketsRequest.displayName = 'proto.payments.api.v1.PurchaseEventTicketsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.PurchaseEventTicketsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.PurchaseEventTicketsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.PurchaseEventTicketsResponse.displayName = 'proto.payments.api.v1.PurchaseEventTicketsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetEventProductInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetEventProductInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetEventProductInfoRequest.displayName = 'proto.payments.api.v1.GetEventProductInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetEventProductInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetEventProductInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetEventProductInfoResponse.displayName = 'proto.payments.api.v1.GetEventProductInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListEventProductsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ListEventProductsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListEventProductsRequest.displayName = 'proto.payments.api.v1.ListEventProductsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListEventProductsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListEventProductsResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListEventProductsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListEventProductsResponse.displayName = 'proto.payments.api.v1.ListEventProductsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountEventProductsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountEventProductsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountEventProductsRequest.displayName = 'proto.payments.api.v1.CountEventProductsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountEventProductsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountEventProductsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountEventProductsResponse.displayName = 'proto.payments.api.v1.CountEventProductsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateEventProductRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.CreateEventProductRequest.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.CreateEventProductRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateEventProductRequest.displayName = 'proto.payments.api.v1.CreateEventProductRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateEventProductResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreateEventProductResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateEventProductResponse.displayName = 'proto.payments.api.v1.CreateEventProductResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateEventProductRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateEventProductRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateEventProductRequest.displayName = 'proto.payments.api.v1.UpdateEventProductRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateEventProductResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateEventProductResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateEventProductResponse.displayName = 'proto.payments.api.v1.UpdateEventProductResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteEventProductRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteEventProductRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteEventProductRequest.displayName = 'proto.payments.api.v1.DeleteEventProductRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteEventProductResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteEventProductResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteEventProductResponse.displayName = 'proto.payments.api.v1.DeleteEventProductResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.PurchaseEventProductsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.PurchaseEventProductsRequest.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.PurchaseEventProductsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.PurchaseEventProductsRequest.displayName = 'proto.payments.api.v1.PurchaseEventProductsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.PurchaseEventProductsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.PurchaseEventProductsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.PurchaseEventProductsResponse.displayName = 'proto.payments.api.v1.PurchaseEventProductsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetEventTicketVoucherInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetEventTicketVoucherInfoRequest.displayName = 'proto.payments.api.v1.GetEventTicketVoucherInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetEventTicketVoucherInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetEventTicketVoucherInfoResponse.displayName = 'proto.payments.api.v1.GetEventTicketVoucherInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListEventTicketVouchersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ListEventTicketVouchersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListEventTicketVouchersRequest.displayName = 'proto.payments.api.v1.ListEventTicketVouchersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListEventTicketVouchersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListEventTicketVouchersResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListEventTicketVouchersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListEventTicketVouchersResponse.displayName = 'proto.payments.api.v1.ListEventTicketVouchersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountEventTicketVouchersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountEventTicketVouchersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountEventTicketVouchersRequest.displayName = 'proto.payments.api.v1.CountEventTicketVouchersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountEventTicketVouchersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountEventTicketVouchersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountEventTicketVouchersResponse.displayName = 'proto.payments.api.v1.CountEventTicketVouchersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreateEventTicketVoucherRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateEventTicketVoucherRequest.displayName = 'proto.payments.api.v1.CreateEventTicketVoucherRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreateEventTicketVoucherResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateEventTicketVoucherResponse.displayName = 'proto.payments.api.v1.CreateEventTicketVoucherResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateEventTicketVoucherRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateEventTicketVoucherRequest.displayName = 'proto.payments.api.v1.UpdateEventTicketVoucherRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateEventTicketVoucherResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateEventTicketVoucherResponse.displayName = 'proto.payments.api.v1.UpdateEventTicketVoucherResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteEventTicketVoucherRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteEventTicketVoucherRequest.displayName = 'proto.payments.api.v1.DeleteEventTicketVoucherRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteEventTicketVoucherResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteEventTicketVoucherResponse.displayName = 'proto.payments.api.v1.DeleteEventTicketVoucherResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetPartnerInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetPartnerInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetPartnerInfoRequest.displayName = 'proto.payments.api.v1.GetPartnerInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetPartnerInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetPartnerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetPartnerInfoResponse.displayName = 'proto.payments.api.v1.GetPartnerInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetPartnerDashboardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetPartnerDashboardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetPartnerDashboardRequest.displayName = 'proto.payments.api.v1.GetPartnerDashboardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetPartnerDashboardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetPartnerDashboardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetPartnerDashboardResponse.displayName = 'proto.payments.api.v1.GetPartnerDashboardResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListPartnersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListPartnersRequest.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListPartnersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListPartnersRequest.displayName = 'proto.payments.api.v1.ListPartnersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListPartnersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListPartnersResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListPartnersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListPartnersResponse.displayName = 'proto.payments.api.v1.ListPartnersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountPartnersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.CountPartnersRequest.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.CountPartnersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountPartnersRequest.displayName = 'proto.payments.api.v1.CountPartnersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountPartnersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountPartnersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountPartnersResponse.displayName = 'proto.payments.api.v1.CountPartnersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeletePartnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeletePartnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeletePartnerRequest.displayName = 'proto.payments.api.v1.DeletePartnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeletePartnerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeletePartnerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeletePartnerResponse.displayName = 'proto.payments.api.v1.DeletePartnerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ActivatePartnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ActivatePartnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ActivatePartnerRequest.displayName = 'proto.payments.api.v1.ActivatePartnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ActivatePartnerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ActivatePartnerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ActivatePartnerResponse.displayName = 'proto.payments.api.v1.ActivatePartnerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerInfoRequest.displayName = 'proto.payments.api.v1.GetCustomerInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerInfoResponse.displayName = 'proto.payments.api.v1.GetCustomerInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListCustomersRequest.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListCustomersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomersRequest.displayName = 'proto.payments.api.v1.ListCustomersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListCustomersResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListCustomersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomersResponse.displayName = 'proto.payments.api.v1.ListCustomersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.CountCustomersRequest.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.CountCustomersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomersRequest.displayName = 'proto.payments.api.v1.CountCustomersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomersResponse.displayName = 'proto.payments.api.v1.CountCustomersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteCustomerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteCustomerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteCustomerRequest.displayName = 'proto.payments.api.v1.DeleteCustomerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteCustomerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteCustomerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteCustomerResponse.displayName = 'proto.payments.api.v1.DeleteCustomerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerOrderInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerOrderInfoRequest.displayName = 'proto.payments.api.v1.GetCustomerOrderInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerOrderInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerOrderInfoResponse.displayName = 'proto.payments.api.v1.GetCustomerOrderInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomerOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ListCustomerOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomerOrdersRequest.displayName = 'proto.payments.api.v1.ListCustomerOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomerOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListCustomerOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListCustomerOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomerOrdersResponse.displayName = 'proto.payments.api.v1.ListCustomerOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListPartnerOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ListPartnerOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListPartnerOrdersRequest.displayName = 'proto.payments.api.v1.ListPartnerOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListPartnerOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListPartnerOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListPartnerOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListPartnerOrdersResponse.displayName = 'proto.payments.api.v1.ListPartnerOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomerOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomerOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomerOrdersRequest.displayName = 'proto.payments.api.v1.CountCustomerOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomerOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomerOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomerOrdersResponse.displayName = 'proto.payments.api.v1.CountCustomerOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountPartnerOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountPartnerOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountPartnerOrdersRequest.displayName = 'proto.payments.api.v1.CountPartnerOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountPartnerOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountPartnerOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountPartnerOrdersResponse.displayName = 'proto.payments.api.v1.CountPartnerOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.AcceptPartnerOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.AcceptPartnerOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.AcceptPartnerOrderRequest.displayName = 'proto.payments.api.v1.AcceptPartnerOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.AcceptPartnerOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.AcceptPartnerOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.AcceptPartnerOrderResponse.displayName = 'proto.payments.api.v1.AcceptPartnerOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeclinePartnerOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeclinePartnerOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeclinePartnerOrderRequest.displayName = 'proto.payments.api.v1.DeclinePartnerOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeclinePartnerOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeclinePartnerOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeclinePartnerOrderResponse.displayName = 'proto.payments.api.v1.DeclinePartnerOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.RefundPartnerOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.RefundPartnerOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.RefundPartnerOrderRequest.displayName = 'proto.payments.api.v1.RefundPartnerOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.RefundPartnerOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.RefundPartnerOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.RefundPartnerOrderResponse.displayName = 'proto.payments.api.v1.RefundPartnerOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerAddressInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerAddressInfoRequest.displayName = 'proto.payments.api.v1.GetCustomerAddressInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerAddressInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerAddressInfoResponse.displayName = 'proto.payments.api.v1.GetCustomerAddressInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomerAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ListCustomerAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomerAddressesRequest.displayName = 'proto.payments.api.v1.ListCustomerAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomerAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListCustomerAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListCustomerAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomerAddressesResponse.displayName = 'proto.payments.api.v1.ListCustomerAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomerAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomerAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomerAddressesRequest.displayName = 'proto.payments.api.v1.CountCustomerAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomerAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomerAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomerAddressesResponse.displayName = 'proto.payments.api.v1.CountCustomerAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateCustomerAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreateCustomerAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateCustomerAddressRequest.displayName = 'proto.payments.api.v1.CreateCustomerAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateCustomerAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreateCustomerAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateCustomerAddressResponse.displayName = 'proto.payments.api.v1.CreateCustomerAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateCustomerAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateCustomerAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateCustomerAddressRequest.displayName = 'proto.payments.api.v1.UpdateCustomerAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateCustomerAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateCustomerAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateCustomerAddressResponse.displayName = 'proto.payments.api.v1.UpdateCustomerAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteCustomerAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteCustomerAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteCustomerAddressRequest.displayName = 'proto.payments.api.v1.DeleteCustomerAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteCustomerAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteCustomerAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteCustomerAddressResponse.displayName = 'proto.payments.api.v1.DeleteCustomerAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerPaymentInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerPaymentInfoRequest.displayName = 'proto.payments.api.v1.GetCustomerPaymentInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerPaymentInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerPaymentInfoResponse.displayName = 'proto.payments.api.v1.GetCustomerPaymentInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomerPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ListCustomerPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomerPaymentsRequest.displayName = 'proto.payments.api.v1.ListCustomerPaymentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomerPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListCustomerPaymentsResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListCustomerPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomerPaymentsResponse.displayName = 'proto.payments.api.v1.ListCustomerPaymentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomerPaymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomerPaymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomerPaymentsRequest.displayName = 'proto.payments.api.v1.CountCustomerPaymentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomerPaymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomerPaymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomerPaymentsResponse.displayName = 'proto.payments.api.v1.CountCustomerPaymentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateCustomerPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreateCustomerPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateCustomerPaymentRequest.displayName = 'proto.payments.api.v1.CreateCustomerPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CreateCustomerPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreateCustomerPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreateCustomerPaymentResponse.displayName = 'proto.payments.api.v1.CreateCustomerPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateCustomerPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateCustomerPaymentRequest.displayName = 'proto.payments.api.v1.UpdateCustomerPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.UpdateCustomerPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.UpdateCustomerPaymentResponse.displayName = 'proto.payments.api.v1.UpdateCustomerPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteCustomerPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteCustomerPaymentRequest.displayName = 'proto.payments.api.v1.DeleteCustomerPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.DeleteCustomerPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.DeleteCustomerPaymentResponse.displayName = 'proto.payments.api.v1.DeleteCustomerPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerTransactionInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerTransactionInfoRequest.displayName = 'proto.payments.api.v1.GetCustomerTransactionInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.GetCustomerTransactionInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.GetCustomerTransactionInfoResponse.displayName = 'proto.payments.api.v1.GetCustomerTransactionInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomerTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.ListCustomerTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomerTransactionsRequest.displayName = 'proto.payments.api.v1.ListCustomerTransactionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.ListCustomerTransactionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.ListCustomerTransactionsResponse.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.ListCustomerTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.ListCustomerTransactionsResponse.displayName = 'proto.payments.api.v1.ListCustomerTransactionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomerTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomerTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomerTransactionsRequest.displayName = 'proto.payments.api.v1.CountCustomerTransactionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.payments.api.v1.CountCustomerTransactionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CountCustomerTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CountCustomerTransactionsResponse.displayName = 'proto.payments.api.v1.CountCustomerTransactionsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetEventTicketInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetEventTicketInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetEventTicketInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventTicketInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetEventTicketInfoRequest}
 */
proto.payments.api.v1.GetEventTicketInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetEventTicketInfoRequest;
  return proto.payments.api.v1.GetEventTicketInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetEventTicketInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetEventTicketInfoRequest}
 */
proto.payments.api.v1.GetEventTicketInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetEventTicketInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetEventTicketInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetEventTicketInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventTicketInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.GetEventTicketInfoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetEventTicketInfoRequest} returns this
 */
proto.payments.api.v1.GetEventTicketInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetEventTicketInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetEventTicketInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventTicketInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventTicketInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetEventTicketInfoResponse}
 */
proto.payments.api.v1.GetEventTicketInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetEventTicketInfoResponse;
  return proto.payments.api.v1.GetEventTicketInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetEventTicketInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetEventTicketInfoResponse}
 */
proto.payments.api.v1.GetEventTicketInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventTicketInfo;
      reader.readMessage(value,payments_models_pb.EventTicketInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetEventTicketInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetEventTicketInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventTicketInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventTicketInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventTicketInfo info = 1;
 * @return {?proto.payments.api.v1.EventTicketInfo}
 */
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventTicketInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventTicketInfo|undefined} value
 * @return {!proto.payments.api.v1.GetEventTicketInfoResponse} returns this
*/
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetEventTicketInfoResponse} returns this
 */
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetEventTicketInfoResponse} returns this
*/
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetEventTicketInfoResponse} returns this
 */
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetEventTicketInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListEventTicketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListEventTicketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventTicketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    order: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListEventTicketsRequest}
 */
proto.payments.api.v1.ListEventTicketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListEventTicketsRequest;
  return proto.payments.api.v1.ListEventTicketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListEventTicketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListEventTicketsRequest}
 */
proto.payments.api.v1.ListEventTicketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListEventTicketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListEventTicketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventTicketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string event_id = 1;
 * @return {string}
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListEventTicketsRequest} returns this
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventTicketsRequest} returns this
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventTicketsRequest} returns this
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string order = 4;
 * @return {string}
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListEventTicketsRequest} returns this
 */
proto.payments.api.v1.ListEventTicketsRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListEventTicketsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListEventTicketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListEventTicketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventTicketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketsList: jspb.Message.toObjectList(msg.getTicketsList(),
    payments_models_pb.EventTicketInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListEventTicketsResponse}
 */
proto.payments.api.v1.ListEventTicketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListEventTicketsResponse;
  return proto.payments.api.v1.ListEventTicketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListEventTicketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListEventTicketsResponse}
 */
proto.payments.api.v1.ListEventTicketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventTicketInfo;
      reader.readMessage(value,payments_models_pb.EventTicketInfo.deserializeBinaryFromReader);
      msg.addTickets(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListEventTicketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListEventTicketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventTicketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.EventTicketInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EventTicketInfo tickets = 1;
 * @return {!Array<!proto.payments.api.v1.EventTicketInfo>}
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.getTicketsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.EventTicketInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.EventTicketInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.EventTicketInfo>} value
 * @return {!proto.payments.api.v1.ListEventTicketsResponse} returns this
*/
proto.payments.api.v1.ListEventTicketsResponse.prototype.setTicketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.EventTicketInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.EventTicketInfo}
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.addTickets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.EventTicketInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListEventTicketsResponse} returns this
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.clearTicketsList = function() {
  return this.setTicketsList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventTicketsResponse} returns this
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListEventTicketsResponse} returns this
*/
proto.payments.api.v1.ListEventTicketsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListEventTicketsResponse} returns this
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListEventTicketsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountEventTicketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountEventTicketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountEventTicketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventTicketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountEventTicketsRequest}
 */
proto.payments.api.v1.CountEventTicketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountEventTicketsRequest;
  return proto.payments.api.v1.CountEventTicketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountEventTicketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountEventTicketsRequest}
 */
proto.payments.api.v1.CountEventTicketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountEventTicketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountEventTicketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountEventTicketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventTicketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string event_id = 1;
 * @return {string}
 */
proto.payments.api.v1.CountEventTicketsRequest.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CountEventTicketsRequest} returns this
 */
proto.payments.api.v1.CountEventTicketsRequest.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountEventTicketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountEventTicketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountEventTicketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventTicketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountEventTicketsResponse}
 */
proto.payments.api.v1.CountEventTicketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountEventTicketsResponse;
  return proto.payments.api.v1.CountEventTicketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountEventTicketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountEventTicketsResponse}
 */
proto.payments.api.v1.CountEventTicketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountEventTicketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountEventTicketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountEventTicketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventTicketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountEventTicketsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountEventTicketsResponse} returns this
 */
proto.payments.api.v1.CountEventTicketsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountEventTicketsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountEventTicketsResponse} returns this
*/
proto.payments.api.v1.CountEventTicketsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountEventTicketsResponse} returns this
 */
proto.payments.api.v1.CountEventTicketsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountEventTicketsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.CreateEventTicketRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateEventTicketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateEventTicketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventTicketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    usages: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    vouchersList: jspb.Message.toObjectList(msg.getVouchersList(),
    payments_models_pb.CreatesEventTicketVoucher.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && payments_models_pb.EventTicketMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateEventTicketRequest}
 */
proto.payments.api.v1.CreateEventTicketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateEventTicketRequest;
  return proto.payments.api.v1.CreateEventTicketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateEventTicketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateEventTicketRequest}
 */
proto.payments.api.v1.CreateEventTicketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsages(value);
      break;
    case 3:
      var value = /** @type {!proto.payments.api.v1.EventTicketType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {!proto.payments.api.v1.EventTicketStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new payments_models_pb.CreatesEventTicketVoucher;
      reader.readMessage(value,payments_models_pb.CreatesEventTicketVoucher.deserializeBinaryFromReader);
      msg.addVouchers(value);
      break;
    case 6:
      var value = new payments_models_pb.EventTicketMetadata;
      reader.readMessage(value,payments_models_pb.EventTicketMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateEventTicketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateEventTicketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventTicketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsages();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getVouchersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      payments_models_pb.CreatesEventTicketVoucher.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      payments_models_pb.EventTicketMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string event_id = 1;
 * @return {string}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateEventTicketRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 usages = 2;
 * @return {number}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.getUsages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CreateEventTicketRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.setUsages = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional EventTicketType type = 3;
 * @return {!proto.payments.api.v1.EventTicketType}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.getType = function() {
  return /** @type {!proto.payments.api.v1.EventTicketType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.payments.api.v1.EventTicketType} value
 * @return {!proto.payments.api.v1.CreateEventTicketRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional EventTicketStatus status = 4;
 * @return {!proto.payments.api.v1.EventTicketStatus}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.EventTicketStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.payments.api.v1.EventTicketStatus} value
 * @return {!proto.payments.api.v1.CreateEventTicketRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated CreatesEventTicketVoucher vouchers = 5;
 * @return {!Array<!proto.payments.api.v1.CreatesEventTicketVoucher>}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.getVouchersList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CreatesEventTicketVoucher>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CreatesEventTicketVoucher, 5));
};


/**
 * @param {!Array<!proto.payments.api.v1.CreatesEventTicketVoucher>} value
 * @return {!proto.payments.api.v1.CreateEventTicketRequest} returns this
*/
proto.payments.api.v1.CreateEventTicketRequest.prototype.setVouchersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.payments.api.v1.CreatesEventTicketVoucher=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CreatesEventTicketVoucher}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.addVouchers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.payments.api.v1.CreatesEventTicketVoucher, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.CreateEventTicketRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.clearVouchersList = function() {
  return this.setVouchersList([]);
};


/**
 * optional EventTicketMetadata metadata = 6;
 * @return {?proto.payments.api.v1.EventTicketMetadata}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.EventTicketMetadata} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketMetadata, 6));
};


/**
 * @param {?proto.payments.api.v1.EventTicketMetadata|undefined} value
 * @return {!proto.payments.api.v1.CreateEventTicketRequest} returns this
*/
proto.payments.api.v1.CreateEventTicketRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateEventTicketRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateEventTicketRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateEventTicketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateEventTicketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateEventTicketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventTicketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventTicketInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateEventTicketResponse}
 */
proto.payments.api.v1.CreateEventTicketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateEventTicketResponse;
  return proto.payments.api.v1.CreateEventTicketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateEventTicketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateEventTicketResponse}
 */
proto.payments.api.v1.CreateEventTicketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventTicketInfo;
      reader.readMessage(value,payments_models_pb.EventTicketInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateEventTicketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateEventTicketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateEventTicketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventTicketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventTicketInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventTicketInfo info = 1;
 * @return {?proto.payments.api.v1.EventTicketInfo}
 */
proto.payments.api.v1.CreateEventTicketResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventTicketInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventTicketInfo|undefined} value
 * @return {!proto.payments.api.v1.CreateEventTicketResponse} returns this
*/
proto.payments.api.v1.CreateEventTicketResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateEventTicketResponse} returns this
 */
proto.payments.api.v1.CreateEventTicketResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateEventTicketResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CreateEventTicketResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CreateEventTicketResponse} returns this
*/
proto.payments.api.v1.CreateEventTicketResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateEventTicketResponse} returns this
 */
proto.payments.api.v1.CreateEventTicketResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateEventTicketResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateEventTicketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateEventTicketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventTicketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    usages: (f = msg.getUsages()) && payments_models_pb.EventTicketUsagesValue.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && payments_models_pb.EventTicketStatusValue.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && payments_models_pb.EventTicketMetadataValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest}
 */
proto.payments.api.v1.UpdateEventTicketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateEventTicketRequest;
  return proto.payments.api.v1.UpdateEventTicketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateEventTicketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest}
 */
proto.payments.api.v1.UpdateEventTicketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new payments_models_pb.EventTicketUsagesValue;
      reader.readMessage(value,payments_models_pb.EventTicketUsagesValue.deserializeBinaryFromReader);
      msg.setUsages(value);
      break;
    case 3:
      var value = new payments_models_pb.EventTicketStatusValue;
      reader.readMessage(value,payments_models_pb.EventTicketStatusValue.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 4:
      var value = new payments_models_pb.EventTicketMetadataValue;
      reader.readMessage(value,payments_models_pb.EventTicketMetadataValue.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateEventTicketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateEventTicketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventTicketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsages();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payments_models_pb.EventTicketUsagesValue.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payments_models_pb.EventTicketStatusValue.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      payments_models_pb.EventTicketMetadataValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest} returns this
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EventTicketUsagesValue usages = 2;
 * @return {?proto.payments.api.v1.EventTicketUsagesValue}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.getUsages = function() {
  return /** @type{?proto.payments.api.v1.EventTicketUsagesValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketUsagesValue, 2));
};


/**
 * @param {?proto.payments.api.v1.EventTicketUsagesValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest} returns this
*/
proto.payments.api.v1.UpdateEventTicketRequest.prototype.setUsages = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest} returns this
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.clearUsages = function() {
  return this.setUsages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.hasUsages = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EventTicketStatusValue status = 3;
 * @return {?proto.payments.api.v1.EventTicketStatusValue}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.getStatus = function() {
  return /** @type{?proto.payments.api.v1.EventTicketStatusValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketStatusValue, 3));
};


/**
 * @param {?proto.payments.api.v1.EventTicketStatusValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest} returns this
*/
proto.payments.api.v1.UpdateEventTicketRequest.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest} returns this
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EventTicketMetadataValue metadata = 4;
 * @return {?proto.payments.api.v1.EventTicketMetadataValue}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.EventTicketMetadataValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketMetadataValue, 4));
};


/**
 * @param {?proto.payments.api.v1.EventTicketMetadataValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest} returns this
*/
proto.payments.api.v1.UpdateEventTicketRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketRequest} returns this
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateEventTicketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateEventTicketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateEventTicketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventTicketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventTicketInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateEventTicketResponse}
 */
proto.payments.api.v1.UpdateEventTicketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateEventTicketResponse;
  return proto.payments.api.v1.UpdateEventTicketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateEventTicketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateEventTicketResponse}
 */
proto.payments.api.v1.UpdateEventTicketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventTicketInfo;
      reader.readMessage(value,payments_models_pb.EventTicketInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateEventTicketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateEventTicketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateEventTicketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventTicketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventTicketInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventTicketInfo info = 1;
 * @return {?proto.payments.api.v1.EventTicketInfo}
 */
proto.payments.api.v1.UpdateEventTicketResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventTicketInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventTicketInfo|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketResponse} returns this
*/
proto.payments.api.v1.UpdateEventTicketResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketResponse} returns this
 */
proto.payments.api.v1.UpdateEventTicketResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.UpdateEventTicketResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketResponse} returns this
*/
proto.payments.api.v1.UpdateEventTicketResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketResponse} returns this
 */
proto.payments.api.v1.UpdateEventTicketResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteEventTicketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteEventTicketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteEventTicketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventTicketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteEventTicketRequest}
 */
proto.payments.api.v1.DeleteEventTicketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteEventTicketRequest;
  return proto.payments.api.v1.DeleteEventTicketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteEventTicketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteEventTicketRequest}
 */
proto.payments.api.v1.DeleteEventTicketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteEventTicketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteEventTicketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteEventTicketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventTicketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.DeleteEventTicketRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeleteEventTicketRequest} returns this
 */
proto.payments.api.v1.DeleteEventTicketRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteEventTicketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteEventTicketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteEventTicketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventTicketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteEventTicketResponse}
 */
proto.payments.api.v1.DeleteEventTicketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteEventTicketResponse;
  return proto.payments.api.v1.DeleteEventTicketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteEventTicketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteEventTicketResponse}
 */
proto.payments.api.v1.DeleteEventTicketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteEventTicketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteEventTicketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteEventTicketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventTicketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional error.api.v1.Error error = 1;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.DeleteEventTicketResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 1));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.DeleteEventTicketResponse} returns this
*/
proto.payments.api.v1.DeleteEventTicketResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeleteEventTicketResponse} returns this
 */
proto.payments.api.v1.DeleteEventTicketResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeleteEventTicketResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.PurchaseEventTicketsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.PurchaseEventTicketsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    voucherIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    ticketsList: jspb.Message.toObjectList(msg.getTicketsList(),
    payments_models_pb.CustomerOrderTicket.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.PurchaseEventTicketsRequest}
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.PurchaseEventTicketsRequest;
  return proto.payments.api.v1.PurchaseEventTicketsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.PurchaseEventTicketsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.PurchaseEventTicketsRequest}
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addVoucherIds(value);
      break;
    case 3:
      var value = new payments_models_pb.CustomerOrderTicket;
      reader.readMessage(value,payments_models_pb.CustomerOrderTicket.deserializeBinaryFromReader);
      msg.addTickets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.PurchaseEventTicketsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.PurchaseEventTicketsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVoucherIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getTicketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      payments_models_pb.CustomerOrderTicket.serializeBinaryToWriter
    );
  }
};


/**
 * optional string payment_id = 1;
 * @return {string}
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.getPaymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.PurchaseEventTicketsRequest} returns this
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.setPaymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string voucher_ids = 2;
 * @return {!Array<string>}
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.getVoucherIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.PurchaseEventTicketsRequest} returns this
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.setVoucherIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.PurchaseEventTicketsRequest} returns this
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.addVoucherIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.PurchaseEventTicketsRequest} returns this
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.clearVoucherIdsList = function() {
  return this.setVoucherIdsList([]);
};


/**
 * repeated CustomerOrderTicket tickets = 3;
 * @return {!Array<!proto.payments.api.v1.CustomerOrderTicket>}
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.getTicketsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerOrderTicket>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CustomerOrderTicket, 3));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerOrderTicket>} value
 * @return {!proto.payments.api.v1.PurchaseEventTicketsRequest} returns this
*/
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.setTicketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderTicket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerOrderTicket}
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.addTickets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.payments.api.v1.CustomerOrderTicket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.PurchaseEventTicketsRequest} returns this
 */
proto.payments.api.v1.PurchaseEventTicketsRequest.prototype.clearTicketsList = function() {
  return this.setTicketsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.PurchaseEventTicketsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.PurchaseEventTicketsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerOrderInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.PurchaseEventTicketsResponse}
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.PurchaseEventTicketsResponse;
  return proto.payments.api.v1.PurchaseEventTicketsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.PurchaseEventTicketsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.PurchaseEventTicketsResponse}
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerOrderInfo;
      reader.readMessage(value,payments_models_pb.CustomerOrderInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.PurchaseEventTicketsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.PurchaseEventTicketsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerOrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerOrderInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerOrderInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderInfo|undefined} value
 * @return {!proto.payments.api.v1.PurchaseEventTicketsResponse} returns this
*/
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.PurchaseEventTicketsResponse} returns this
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.PurchaseEventTicketsResponse} returns this
*/
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.PurchaseEventTicketsResponse} returns this
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.PurchaseEventTicketsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetEventProductInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetEventProductInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetEventProductInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventProductInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetEventProductInfoRequest}
 */
proto.payments.api.v1.GetEventProductInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetEventProductInfoRequest;
  return proto.payments.api.v1.GetEventProductInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetEventProductInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetEventProductInfoRequest}
 */
proto.payments.api.v1.GetEventProductInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetEventProductInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetEventProductInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetEventProductInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventProductInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.GetEventProductInfoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetEventProductInfoRequest} returns this
 */
proto.payments.api.v1.GetEventProductInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetEventProductInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetEventProductInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetEventProductInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventProductInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventProductInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetEventProductInfoResponse}
 */
proto.payments.api.v1.GetEventProductInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetEventProductInfoResponse;
  return proto.payments.api.v1.GetEventProductInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetEventProductInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetEventProductInfoResponse}
 */
proto.payments.api.v1.GetEventProductInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventProductInfo;
      reader.readMessage(value,payments_models_pb.EventProductInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetEventProductInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetEventProductInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetEventProductInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventProductInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventProductInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventProductInfo info = 1;
 * @return {?proto.payments.api.v1.EventProductInfo}
 */
proto.payments.api.v1.GetEventProductInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventProductInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventProductInfo|undefined} value
 * @return {!proto.payments.api.v1.GetEventProductInfoResponse} returns this
*/
proto.payments.api.v1.GetEventProductInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetEventProductInfoResponse} returns this
 */
proto.payments.api.v1.GetEventProductInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetEventProductInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetEventProductInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetEventProductInfoResponse} returns this
*/
proto.payments.api.v1.GetEventProductInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetEventProductInfoResponse} returns this
 */
proto.payments.api.v1.GetEventProductInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetEventProductInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListEventProductsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListEventProductsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventProductsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    order: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListEventProductsRequest}
 */
proto.payments.api.v1.ListEventProductsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListEventProductsRequest;
  return proto.payments.api.v1.ListEventProductsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListEventProductsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListEventProductsRequest}
 */
proto.payments.api.v1.ListEventProductsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListEventProductsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListEventProductsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventProductsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string event_id = 1;
 * @return {string}
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListEventProductsRequest} returns this
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventProductsRequest} returns this
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventProductsRequest} returns this
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string order = 4;
 * @return {string}
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListEventProductsRequest} returns this
 */
proto.payments.api.v1.ListEventProductsRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListEventProductsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListEventProductsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListEventProductsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventProductsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    payments_models_pb.EventProductInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListEventProductsResponse}
 */
proto.payments.api.v1.ListEventProductsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListEventProductsResponse;
  return proto.payments.api.v1.ListEventProductsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListEventProductsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListEventProductsResponse}
 */
proto.payments.api.v1.ListEventProductsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventProductInfo;
      reader.readMessage(value,payments_models_pb.EventProductInfo.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListEventProductsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListEventProductsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventProductsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.EventProductInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EventProductInfo products = 1;
 * @return {!Array<!proto.payments.api.v1.EventProductInfo>}
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.EventProductInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.EventProductInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.EventProductInfo>} value
 * @return {!proto.payments.api.v1.ListEventProductsResponse} returns this
*/
proto.payments.api.v1.ListEventProductsResponse.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.EventProductInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.EventProductInfo}
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.EventProductInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListEventProductsResponse} returns this
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventProductsResponse} returns this
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListEventProductsResponse} returns this
*/
proto.payments.api.v1.ListEventProductsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListEventProductsResponse} returns this
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListEventProductsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountEventProductsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountEventProductsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountEventProductsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventProductsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountEventProductsRequest}
 */
proto.payments.api.v1.CountEventProductsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountEventProductsRequest;
  return proto.payments.api.v1.CountEventProductsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountEventProductsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountEventProductsRequest}
 */
proto.payments.api.v1.CountEventProductsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountEventProductsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountEventProductsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountEventProductsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventProductsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string event_id = 1;
 * @return {string}
 */
proto.payments.api.v1.CountEventProductsRequest.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CountEventProductsRequest} returns this
 */
proto.payments.api.v1.CountEventProductsRequest.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountEventProductsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountEventProductsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountEventProductsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventProductsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountEventProductsResponse}
 */
proto.payments.api.v1.CountEventProductsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountEventProductsResponse;
  return proto.payments.api.v1.CountEventProductsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountEventProductsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountEventProductsResponse}
 */
proto.payments.api.v1.CountEventProductsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountEventProductsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountEventProductsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountEventProductsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventProductsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountEventProductsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountEventProductsResponse} returns this
 */
proto.payments.api.v1.CountEventProductsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountEventProductsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountEventProductsResponse} returns this
*/
proto.payments.api.v1.CountEventProductsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountEventProductsResponse} returns this
 */
proto.payments.api.v1.CountEventProductsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountEventProductsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.CreateEventProductRequest.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateEventProductRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateEventProductRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventProductRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    stock: jspb.Message.getFieldWithDefault(msg, 5, 0),
    imageUrlsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    metadata: (f = msg.getMetadata()) && payments_models_pb.EventProductMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateEventProductRequest}
 */
proto.payments.api.v1.CreateEventProductRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateEventProductRequest;
  return proto.payments.api.v1.CreateEventProductRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateEventProductRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateEventProductRequest}
 */
proto.payments.api.v1.CreateEventProductRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStock(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addImageUrls(value);
      break;
    case 7:
      var value = /** @type {!proto.payments.api.v1.EventProductStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = new payments_models_pb.EventProductMetadata;
      reader.readMessage(value,payments_models_pb.EventProductMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateEventProductRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateEventProductRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventProductRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStock();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getImageUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      payments_models_pb.EventProductMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string event_id = 1;
 * @return {string}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string kind = 2;
 * @return {string}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 stock = 5;
 * @return {number}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.getStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.setStock = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string image_urls = 6;
 * @return {!Array<string>}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.getImageUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.setImageUrlsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.addImageUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.clearImageUrlsList = function() {
  return this.setImageUrlsList([]);
};


/**
 * optional EventProductStatus status = 7;
 * @return {!proto.payments.api.v1.EventProductStatus}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.EventProductStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.payments.api.v1.EventProductStatus} value
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional EventProductMetadata metadata = 8;
 * @return {?proto.payments.api.v1.EventProductMetadata}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.EventProductMetadata} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductMetadata, 8));
};


/**
 * @param {?proto.payments.api.v1.EventProductMetadata|undefined} value
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
*/
proto.payments.api.v1.CreateEventProductRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateEventProductRequest} returns this
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateEventProductRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateEventProductResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateEventProductResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateEventProductResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventProductResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventProductInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateEventProductResponse}
 */
proto.payments.api.v1.CreateEventProductResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateEventProductResponse;
  return proto.payments.api.v1.CreateEventProductResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateEventProductResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateEventProductResponse}
 */
proto.payments.api.v1.CreateEventProductResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventProductInfo;
      reader.readMessage(value,payments_models_pb.EventProductInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateEventProductResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateEventProductResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateEventProductResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventProductResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventProductInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventProductInfo info = 1;
 * @return {?proto.payments.api.v1.EventProductInfo}
 */
proto.payments.api.v1.CreateEventProductResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventProductInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventProductInfo|undefined} value
 * @return {!proto.payments.api.v1.CreateEventProductResponse} returns this
*/
proto.payments.api.v1.CreateEventProductResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateEventProductResponse} returns this
 */
proto.payments.api.v1.CreateEventProductResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateEventProductResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CreateEventProductResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CreateEventProductResponse} returns this
*/
proto.payments.api.v1.CreateEventProductResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateEventProductResponse} returns this
 */
proto.payments.api.v1.CreateEventProductResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateEventProductResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateEventProductRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateEventProductRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventProductRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kind: (f = msg.getKind()) && payments_models_pb.EventProductKindValue.toObject(includeInstance, f),
    name: (f = msg.getName()) && payments_models_pb.EventProductNameValue.toObject(includeInstance, f),
    description: (f = msg.getDescription()) && payments_models_pb.EventProductDescriptionValue.toObject(includeInstance, f),
    stock: (f = msg.getStock()) && payments_models_pb.EventProductStockValue.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && payments_models_pb.EventProductMetadataValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateEventProductRequest}
 */
proto.payments.api.v1.UpdateEventProductRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateEventProductRequest;
  return proto.payments.api.v1.UpdateEventProductRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateEventProductRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateEventProductRequest}
 */
proto.payments.api.v1.UpdateEventProductRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new payments_models_pb.EventProductKindValue;
      reader.readMessage(value,payments_models_pb.EventProductKindValue.deserializeBinaryFromReader);
      msg.setKind(value);
      break;
    case 3:
      var value = new payments_models_pb.EventProductNameValue;
      reader.readMessage(value,payments_models_pb.EventProductNameValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 4:
      var value = new payments_models_pb.EventProductDescriptionValue;
      reader.readMessage(value,payments_models_pb.EventProductDescriptionValue.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 5:
      var value = new payments_models_pb.EventProductStockValue;
      reader.readMessage(value,payments_models_pb.EventProductStockValue.deserializeBinaryFromReader);
      msg.setStock(value);
      break;
    case 6:
      var value = new payments_models_pb.EventProductMetadataValue;
      reader.readMessage(value,payments_models_pb.EventProductMetadataValue.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateEventProductRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateEventProductRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventProductRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKind();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payments_models_pb.EventProductKindValue.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payments_models_pb.EventProductNameValue.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      payments_models_pb.EventProductDescriptionValue.serializeBinaryToWriter
    );
  }
  f = message.getStock();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      payments_models_pb.EventProductStockValue.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      payments_models_pb.EventProductMetadataValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EventProductKindValue kind = 2;
 * @return {?proto.payments.api.v1.EventProductKindValue}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.getKind = function() {
  return /** @type{?proto.payments.api.v1.EventProductKindValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductKindValue, 2));
};


/**
 * @param {?proto.payments.api.v1.EventProductKindValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
*/
proto.payments.api.v1.UpdateEventProductRequest.prototype.setKind = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.clearKind = function() {
  return this.setKind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.hasKind = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EventProductNameValue name = 3;
 * @return {?proto.payments.api.v1.EventProductNameValue}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.getName = function() {
  return /** @type{?proto.payments.api.v1.EventProductNameValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductNameValue, 3));
};


/**
 * @param {?proto.payments.api.v1.EventProductNameValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
*/
proto.payments.api.v1.UpdateEventProductRequest.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EventProductDescriptionValue description = 4;
 * @return {?proto.payments.api.v1.EventProductDescriptionValue}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.getDescription = function() {
  return /** @type{?proto.payments.api.v1.EventProductDescriptionValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductDescriptionValue, 4));
};


/**
 * @param {?proto.payments.api.v1.EventProductDescriptionValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
*/
proto.payments.api.v1.UpdateEventProductRequest.prototype.setDescription = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.clearDescription = function() {
  return this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EventProductStockValue stock = 5;
 * @return {?proto.payments.api.v1.EventProductStockValue}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.getStock = function() {
  return /** @type{?proto.payments.api.v1.EventProductStockValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductStockValue, 5));
};


/**
 * @param {?proto.payments.api.v1.EventProductStockValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
*/
proto.payments.api.v1.UpdateEventProductRequest.prototype.setStock = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.clearStock = function() {
  return this.setStock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.hasStock = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional EventProductMetadataValue metadata = 6;
 * @return {?proto.payments.api.v1.EventProductMetadataValue}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.EventProductMetadataValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductMetadataValue, 6));
};


/**
 * @param {?proto.payments.api.v1.EventProductMetadataValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
*/
proto.payments.api.v1.UpdateEventProductRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventProductRequest} returns this
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventProductRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateEventProductResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateEventProductResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateEventProductResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventProductResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventProductInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateEventProductResponse}
 */
proto.payments.api.v1.UpdateEventProductResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateEventProductResponse;
  return proto.payments.api.v1.UpdateEventProductResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateEventProductResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateEventProductResponse}
 */
proto.payments.api.v1.UpdateEventProductResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventProductInfo;
      reader.readMessage(value,payments_models_pb.EventProductInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateEventProductResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateEventProductResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateEventProductResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventProductResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventProductInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventProductInfo info = 1;
 * @return {?proto.payments.api.v1.EventProductInfo}
 */
proto.payments.api.v1.UpdateEventProductResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventProductInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventProductInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventProductInfo|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventProductResponse} returns this
*/
proto.payments.api.v1.UpdateEventProductResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventProductResponse} returns this
 */
proto.payments.api.v1.UpdateEventProductResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventProductResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.UpdateEventProductResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventProductResponse} returns this
*/
proto.payments.api.v1.UpdateEventProductResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventProductResponse} returns this
 */
proto.payments.api.v1.UpdateEventProductResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventProductResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteEventProductRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteEventProductRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteEventProductRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventProductRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteEventProductRequest}
 */
proto.payments.api.v1.DeleteEventProductRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteEventProductRequest;
  return proto.payments.api.v1.DeleteEventProductRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteEventProductRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteEventProductRequest}
 */
proto.payments.api.v1.DeleteEventProductRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteEventProductRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteEventProductRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteEventProductRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventProductRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.DeleteEventProductRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeleteEventProductRequest} returns this
 */
proto.payments.api.v1.DeleteEventProductRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteEventProductResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteEventProductResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteEventProductResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventProductResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteEventProductResponse}
 */
proto.payments.api.v1.DeleteEventProductResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteEventProductResponse;
  return proto.payments.api.v1.DeleteEventProductResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteEventProductResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteEventProductResponse}
 */
proto.payments.api.v1.DeleteEventProductResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteEventProductResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteEventProductResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteEventProductResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventProductResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional error.api.v1.Error error = 1;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.DeleteEventProductResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 1));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.DeleteEventProductResponse} returns this
*/
proto.payments.api.v1.DeleteEventProductResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeleteEventProductResponse} returns this
 */
proto.payments.api.v1.DeleteEventProductResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeleteEventProductResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.PurchaseEventProductsRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.PurchaseEventProductsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.PurchaseEventProductsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PurchaseEventProductsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paymentId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    payments_models_pb.CustomerOrderProduct.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.PurchaseEventProductsRequest}
 */
proto.payments.api.v1.PurchaseEventProductsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.PurchaseEventProductsRequest;
  return proto.payments.api.v1.PurchaseEventProductsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.PurchaseEventProductsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.PurchaseEventProductsRequest}
 */
proto.payments.api.v1.PurchaseEventProductsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentId(value);
      break;
    case 3:
      var value = new payments_models_pb.CustomerOrderProduct;
      reader.readMessage(value,payments_models_pb.CustomerOrderProduct.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.PurchaseEventProductsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.PurchaseEventProductsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PurchaseEventProductsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      payments_models_pb.CustomerOrderProduct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address_id = 1;
 * @return {string}
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.getAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.PurchaseEventProductsRequest} returns this
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.setAddressId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_id = 2;
 * @return {string}
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.getPaymentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.PurchaseEventProductsRequest} returns this
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.setPaymentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CustomerOrderProduct products = 3;
 * @return {!Array<!proto.payments.api.v1.CustomerOrderProduct>}
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerOrderProduct>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CustomerOrderProduct, 3));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerOrderProduct>} value
 * @return {!proto.payments.api.v1.PurchaseEventProductsRequest} returns this
*/
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderProduct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerOrderProduct}
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.payments.api.v1.CustomerOrderProduct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.PurchaseEventProductsRequest} returns this
 */
proto.payments.api.v1.PurchaseEventProductsRequest.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.PurchaseEventProductsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.PurchaseEventProductsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PurchaseEventProductsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerOrderInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.PurchaseEventProductsResponse}
 */
proto.payments.api.v1.PurchaseEventProductsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.PurchaseEventProductsResponse;
  return proto.payments.api.v1.PurchaseEventProductsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.PurchaseEventProductsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.PurchaseEventProductsResponse}
 */
proto.payments.api.v1.PurchaseEventProductsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerOrderInfo;
      reader.readMessage(value,payments_models_pb.CustomerOrderInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.PurchaseEventProductsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.PurchaseEventProductsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PurchaseEventProductsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerOrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerOrderInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerOrderInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderInfo|undefined} value
 * @return {!proto.payments.api.v1.PurchaseEventProductsResponse} returns this
*/
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.PurchaseEventProductsResponse} returns this
 */
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.PurchaseEventProductsResponse} returns this
*/
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.PurchaseEventProductsResponse} returns this
 */
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.PurchaseEventProductsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetEventTicketVoucherInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetEventTicketVoucherInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticketId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoRequest}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetEventTicketVoucherInfoRequest;
  return proto.payments.api.v1.GetEventTicketVoucherInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetEventTicketVoucherInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoRequest}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetEventTicketVoucherInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetEventTicketVoucherInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string pid = 1;
 * @return {string}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.prototype.getPid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoRequest} returns this
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.prototype.setPid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ticket_id = 2;
 * @return {string}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.prototype.getTicketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoRequest} returns this
 */
proto.payments.api.v1.GetEventTicketVoucherInfoRequest.prototype.setTicketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetEventTicketVoucherInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventTicketVoucherInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetEventTicketVoucherInfoResponse;
  return proto.payments.api.v1.GetEventTicketVoucherInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventTicketVoucherInfo;
      reader.readMessage(value,payments_models_pb.EventTicketVoucherInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetEventTicketVoucherInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventTicketVoucherInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventTicketVoucherInfo info = 1;
 * @return {?proto.payments.api.v1.EventTicketVoucherInfo}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventTicketVoucherInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketVoucherInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventTicketVoucherInfo|undefined} value
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse} returns this
*/
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse} returns this
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse} returns this
*/
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetEventTicketVoucherInfoResponse} returns this
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetEventTicketVoucherInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListEventTicketVouchersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListEventTicketVouchersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    order: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListEventTicketVouchersRequest}
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListEventTicketVouchersRequest;
  return proto.payments.api.v1.ListEventTicketVouchersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListEventTicketVouchersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListEventTicketVouchersRequest}
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListEventTicketVouchersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListEventTicketVouchersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string ticket_id = 1;
 * @return {string}
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.getTicketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListEventTicketVouchersRequest} returns this
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.setTicketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventTicketVouchersRequest} returns this
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 limit = 3;
 * @return {number}
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventTicketVouchersRequest} returns this
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string order = 4;
 * @return {string}
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListEventTicketVouchersRequest} returns this
 */
proto.payments.api.v1.ListEventTicketVouchersRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListEventTicketVouchersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListEventTicketVouchersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vouchersList: jspb.Message.toObjectList(msg.getVouchersList(),
    payments_models_pb.EventTicketVoucherInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListEventTicketVouchersResponse}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListEventTicketVouchersResponse;
  return proto.payments.api.v1.ListEventTicketVouchersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListEventTicketVouchersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListEventTicketVouchersResponse}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventTicketVoucherInfo;
      reader.readMessage(value,payments_models_pb.EventTicketVoucherInfo.deserializeBinaryFromReader);
      msg.addVouchers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListEventTicketVouchersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListEventTicketVouchersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVouchersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.EventTicketVoucherInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EventTicketVoucherInfo vouchers = 1;
 * @return {!Array<!proto.payments.api.v1.EventTicketVoucherInfo>}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.getVouchersList = function() {
  return /** @type{!Array<!proto.payments.api.v1.EventTicketVoucherInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.EventTicketVoucherInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.EventTicketVoucherInfo>} value
 * @return {!proto.payments.api.v1.ListEventTicketVouchersResponse} returns this
*/
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.setVouchersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.EventTicketVoucherInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.addVouchers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.EventTicketVoucherInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListEventTicketVouchersResponse} returns this
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.clearVouchersList = function() {
  return this.setVouchersList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListEventTicketVouchersResponse} returns this
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListEventTicketVouchersResponse} returns this
*/
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListEventTicketVouchersResponse} returns this
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListEventTicketVouchersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountEventTicketVouchersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountEventTicketVouchersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountEventTicketVouchersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventTicketVouchersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountEventTicketVouchersRequest}
 */
proto.payments.api.v1.CountEventTicketVouchersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountEventTicketVouchersRequest;
  return proto.payments.api.v1.CountEventTicketVouchersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountEventTicketVouchersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountEventTicketVouchersRequest}
 */
proto.payments.api.v1.CountEventTicketVouchersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountEventTicketVouchersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountEventTicketVouchersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountEventTicketVouchersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventTicketVouchersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ticket_id = 1;
 * @return {string}
 */
proto.payments.api.v1.CountEventTicketVouchersRequest.prototype.getTicketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CountEventTicketVouchersRequest} returns this
 */
proto.payments.api.v1.CountEventTicketVouchersRequest.prototype.setTicketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountEventTicketVouchersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountEventTicketVouchersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountEventTicketVouchersResponse}
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountEventTicketVouchersResponse;
  return proto.payments.api.v1.CountEventTicketVouchersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountEventTicketVouchersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountEventTicketVouchersResponse}
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountEventTicketVouchersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountEventTicketVouchersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountEventTicketVouchersResponse} returns this
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountEventTicketVouchersResponse} returns this
*/
proto.payments.api.v1.CountEventTicketVouchersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountEventTicketVouchersResponse} returns this
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountEventTicketVouchersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateEventTicketVoucherRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateEventTicketVoucherRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    usages: jspb.Message.getFieldWithDefault(msg, 4, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherRequest}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateEventTicketVoucherRequest;
  return proto.payments.api.v1.CreateEventTicketVoucherRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateEventTicketVoucherRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherRequest}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketId(value);
      break;
    case 3:
      var value = /** @type {!proto.payments.api.v1.EventTicketVoucherStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsages(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateEventTicketVoucherRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateEventTicketVoucherRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getUsages();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string pid = 1;
 * @return {string}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.getPid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.setPid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ticket_id = 2;
 * @return {string}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.getTicketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.setTicketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional EventTicketVoucherStatus status = 3;
 * @return {!proto.payments.api.v1.EventTicketVoucherStatus}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.EventTicketVoucherStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.payments.api.v1.EventTicketVoucherStatus} value
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 usages = 4;
 * @return {number}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.getUsages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.setUsages = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 amount = 5;
 * @return {number}
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.CreateEventTicketVoucherRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateEventTicketVoucherResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateEventTicketVoucherResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventTicketVoucherInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherResponse}
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateEventTicketVoucherResponse;
  return proto.payments.api.v1.CreateEventTicketVoucherResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateEventTicketVoucherResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherResponse}
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventTicketVoucherInfo;
      reader.readMessage(value,payments_models_pb.EventTicketVoucherInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateEventTicketVoucherResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateEventTicketVoucherResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventTicketVoucherInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventTicketVoucherInfo info = 1;
 * @return {?proto.payments.api.v1.EventTicketVoucherInfo}
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventTicketVoucherInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketVoucherInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventTicketVoucherInfo|undefined} value
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherResponse} returns this
*/
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherResponse} returns this
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherResponse} returns this
*/
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateEventTicketVoucherResponse} returns this
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateEventTicketVoucherResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateEventTicketVoucherRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && payments_models_pb.EventTicketVoucherStatusValue.toObject(includeInstance, f),
    usages: (f = msg.getUsages()) && payments_models_pb.EventTicketVoucherUsagesValue.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && payments_models_pb.EventTicketVoucherAmountValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateEventTicketVoucherRequest;
  return proto.payments.api.v1.UpdateEventTicketVoucherRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new payments_models_pb.EventTicketVoucherStatusValue;
      reader.readMessage(value,payments_models_pb.EventTicketVoucherStatusValue.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new payments_models_pb.EventTicketVoucherUsagesValue;
      reader.readMessage(value,payments_models_pb.EventTicketVoucherUsagesValue.deserializeBinaryFromReader);
      msg.setUsages(value);
      break;
    case 4:
      var value = new payments_models_pb.EventTicketVoucherAmountValue;
      reader.readMessage(value,payments_models_pb.EventTicketVoucherAmountValue.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateEventTicketVoucherRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payments_models_pb.EventTicketVoucherStatusValue.serializeBinaryToWriter
    );
  }
  f = message.getUsages();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payments_models_pb.EventTicketVoucherUsagesValue.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      payments_models_pb.EventTicketVoucherAmountValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EventTicketVoucherStatusValue status = 2;
 * @return {?proto.payments.api.v1.EventTicketVoucherStatusValue}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.getStatus = function() {
  return /** @type{?proto.payments.api.v1.EventTicketVoucherStatusValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketVoucherStatusValue, 2));
};


/**
 * @param {?proto.payments.api.v1.EventTicketVoucherStatusValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} returns this
*/
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EventTicketVoucherUsagesValue usages = 3;
 * @return {?proto.payments.api.v1.EventTicketVoucherUsagesValue}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.getUsages = function() {
  return /** @type{?proto.payments.api.v1.EventTicketVoucherUsagesValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketVoucherUsagesValue, 3));
};


/**
 * @param {?proto.payments.api.v1.EventTicketVoucherUsagesValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} returns this
*/
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.setUsages = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.clearUsages = function() {
  return this.setUsages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.hasUsages = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EventTicketVoucherAmountValue amount = 4;
 * @return {?proto.payments.api.v1.EventTicketVoucherAmountValue}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.getAmount = function() {
  return /** @type{?proto.payments.api.v1.EventTicketVoucherAmountValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketVoucherAmountValue, 4));
};


/**
 * @param {?proto.payments.api.v1.EventTicketVoucherAmountValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} returns this
*/
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketVoucherRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateEventTicketVoucherResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateEventTicketVoucherResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.EventTicketVoucherInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherResponse}
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateEventTicketVoucherResponse;
  return proto.payments.api.v1.UpdateEventTicketVoucherResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateEventTicketVoucherResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherResponse}
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.EventTicketVoucherInfo;
      reader.readMessage(value,payments_models_pb.EventTicketVoucherInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateEventTicketVoucherResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateEventTicketVoucherResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.EventTicketVoucherInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventTicketVoucherInfo info = 1;
 * @return {?proto.payments.api.v1.EventTicketVoucherInfo}
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.EventTicketVoucherInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.EventTicketVoucherInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.EventTicketVoucherInfo|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherResponse} returns this
*/
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherResponse} returns this
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherResponse} returns this
*/
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateEventTicketVoucherResponse} returns this
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateEventTicketVoucherResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteEventTicketVoucherRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteEventTicketVoucherRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteEventTicketVoucherRequest}
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteEventTicketVoucherRequest;
  return proto.payments.api.v1.DeleteEventTicketVoucherRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteEventTicketVoucherRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteEventTicketVoucherRequest}
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteEventTicketVoucherRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteEventTicketVoucherRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeleteEventTicketVoucherRequest} returns this
 */
proto.payments.api.v1.DeleteEventTicketVoucherRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteEventTicketVoucherResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteEventTicketVoucherResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteEventTicketVoucherResponse}
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteEventTicketVoucherResponse;
  return proto.payments.api.v1.DeleteEventTicketVoucherResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteEventTicketVoucherResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteEventTicketVoucherResponse}
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteEventTicketVoucherResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteEventTicketVoucherResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional error.api.v1.Error error = 1;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 1));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.DeleteEventTicketVoucherResponse} returns this
*/
proto.payments.api.v1.DeleteEventTicketVoucherResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeleteEventTicketVoucherResponse} returns this
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeleteEventTicketVoucherResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetPartnerInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetPartnerInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetPartnerInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetPartnerInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetPartnerInfoRequest}
 */
proto.payments.api.v1.GetPartnerInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetPartnerInfoRequest;
  return proto.payments.api.v1.GetPartnerInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetPartnerInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetPartnerInfoRequest}
 */
proto.payments.api.v1.GetPartnerInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetPartnerInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetPartnerInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetPartnerInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetPartnerInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetPartnerInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetPartnerInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetPartnerInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetPartnerInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.PartnerInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetPartnerInfoResponse}
 */
proto.payments.api.v1.GetPartnerInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetPartnerInfoResponse;
  return proto.payments.api.v1.GetPartnerInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetPartnerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetPartnerInfoResponse}
 */
proto.payments.api.v1.GetPartnerInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.PartnerInfo;
      reader.readMessage(value,payments_models_pb.PartnerInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetPartnerInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetPartnerInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetPartnerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetPartnerInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.PartnerInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional PartnerInfo info = 1;
 * @return {?proto.payments.api.v1.PartnerInfo}
 */
proto.payments.api.v1.GetPartnerInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.PartnerInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.PartnerInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.PartnerInfo|undefined} value
 * @return {!proto.payments.api.v1.GetPartnerInfoResponse} returns this
*/
proto.payments.api.v1.GetPartnerInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetPartnerInfoResponse} returns this
 */
proto.payments.api.v1.GetPartnerInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetPartnerInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetPartnerInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetPartnerInfoResponse} returns this
*/
proto.payments.api.v1.GetPartnerInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetPartnerInfoResponse} returns this
 */
proto.payments.api.v1.GetPartnerInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetPartnerInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetPartnerDashboardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetPartnerDashboardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetPartnerDashboardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetPartnerDashboardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetPartnerDashboardRequest}
 */
proto.payments.api.v1.GetPartnerDashboardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetPartnerDashboardRequest;
  return proto.payments.api.v1.GetPartnerDashboardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetPartnerDashboardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetPartnerDashboardRequest}
 */
proto.payments.api.v1.GetPartnerDashboardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReturnUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetPartnerDashboardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetPartnerDashboardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetPartnerDashboardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetPartnerDashboardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string return_url = 1;
 * @return {string}
 */
proto.payments.api.v1.GetPartnerDashboardRequest.prototype.getReturnUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetPartnerDashboardRequest} returns this
 */
proto.payments.api.v1.GetPartnerDashboardRequest.prototype.setReturnUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetPartnerDashboardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetPartnerDashboardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetPartnerDashboardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetPartnerDashboardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetPartnerDashboardResponse}
 */
proto.payments.api.v1.GetPartnerDashboardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetPartnerDashboardResponse;
  return proto.payments.api.v1.GetPartnerDashboardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetPartnerDashboardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetPartnerDashboardResponse}
 */
proto.payments.api.v1.GetPartnerDashboardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetPartnerDashboardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetPartnerDashboardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetPartnerDashboardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetPartnerDashboardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.payments.api.v1.GetPartnerDashboardResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetPartnerDashboardResponse} returns this
 */
proto.payments.api.v1.GetPartnerDashboardResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetPartnerDashboardResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetPartnerDashboardResponse} returns this
*/
proto.payments.api.v1.GetPartnerDashboardResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetPartnerDashboardResponse} returns this
 */
proto.payments.api.v1.GetPartnerDashboardResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetPartnerDashboardResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListPartnersRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListPartnersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListPartnersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListPartnersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListPartnersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    order: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListPartnersRequest}
 */
proto.payments.api.v1.ListPartnersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListPartnersRequest;
  return proto.payments.api.v1.ListPartnersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListPartnersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListPartnersRequest}
 */
proto.payments.api.v1.ListPartnersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListPartnersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListPartnersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListPartnersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListPartnersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.payments.api.v1.ListPartnersRequest.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * repeated string user_ids = 2;
 * @return {!Array<string>}
 */
proto.payments.api.v1.ListPartnersRequest.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.payments.api.v1.ListPartnersRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 limit = 4;
 * @return {number}
 */
proto.payments.api.v1.ListPartnersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string order = 5;
 * @return {string}
 */
proto.payments.api.v1.ListPartnersRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListPartnersRequest} returns this
 */
proto.payments.api.v1.ListPartnersRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListPartnersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListPartnersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListPartnersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListPartnersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListPartnersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partnersList: jspb.Message.toObjectList(msg.getPartnersList(),
    payments_models_pb.PartnerInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListPartnersResponse}
 */
proto.payments.api.v1.ListPartnersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListPartnersResponse;
  return proto.payments.api.v1.ListPartnersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListPartnersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListPartnersResponse}
 */
proto.payments.api.v1.ListPartnersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.PartnerInfo;
      reader.readMessage(value,payments_models_pb.PartnerInfo.deserializeBinaryFromReader);
      msg.addPartners(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListPartnersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListPartnersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListPartnersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListPartnersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartnersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.PartnerInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PartnerInfo partners = 1;
 * @return {!Array<!proto.payments.api.v1.PartnerInfo>}
 */
proto.payments.api.v1.ListPartnersResponse.prototype.getPartnersList = function() {
  return /** @type{!Array<!proto.payments.api.v1.PartnerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.PartnerInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.PartnerInfo>} value
 * @return {!proto.payments.api.v1.ListPartnersResponse} returns this
*/
proto.payments.api.v1.ListPartnersResponse.prototype.setPartnersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.PartnerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.PartnerInfo}
 */
proto.payments.api.v1.ListPartnersResponse.prototype.addPartners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.PartnerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListPartnersResponse} returns this
 */
proto.payments.api.v1.ListPartnersResponse.prototype.clearPartnersList = function() {
  return this.setPartnersList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListPartnersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListPartnersResponse} returns this
 */
proto.payments.api.v1.ListPartnersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListPartnersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListPartnersResponse} returns this
*/
proto.payments.api.v1.ListPartnersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListPartnersResponse} returns this
 */
proto.payments.api.v1.ListPartnersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListPartnersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.CountPartnersRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountPartnersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountPartnersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountPartnersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountPartnersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountPartnersRequest}
 */
proto.payments.api.v1.CountPartnersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountPartnersRequest;
  return proto.payments.api.v1.CountPartnersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountPartnersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountPartnersRequest}
 */
proto.payments.api.v1.CountPartnersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountPartnersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountPartnersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountPartnersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountPartnersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string user_ids = 1;
 * @return {!Array<string>}
 */
proto.payments.api.v1.CountPartnersRequest.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.CountPartnersRequest} returns this
 */
proto.payments.api.v1.CountPartnersRequest.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CountPartnersRequest} returns this
 */
proto.payments.api.v1.CountPartnersRequest.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.CountPartnersRequest} returns this
 */
proto.payments.api.v1.CountPartnersRequest.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountPartnersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountPartnersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountPartnersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountPartnersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountPartnersResponse}
 */
proto.payments.api.v1.CountPartnersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountPartnersResponse;
  return proto.payments.api.v1.CountPartnersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountPartnersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountPartnersResponse}
 */
proto.payments.api.v1.CountPartnersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountPartnersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountPartnersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountPartnersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountPartnersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountPartnersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountPartnersResponse} returns this
 */
proto.payments.api.v1.CountPartnersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountPartnersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountPartnersResponse} returns this
*/
proto.payments.api.v1.CountPartnersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountPartnersResponse} returns this
 */
proto.payments.api.v1.CountPartnersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountPartnersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeletePartnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeletePartnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeletePartnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeletePartnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeletePartnerRequest}
 */
proto.payments.api.v1.DeletePartnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeletePartnerRequest;
  return proto.payments.api.v1.DeletePartnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeletePartnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeletePartnerRequest}
 */
proto.payments.api.v1.DeletePartnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeletePartnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeletePartnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeletePartnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeletePartnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.DeletePartnerRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeletePartnerRequest} returns this
 */
proto.payments.api.v1.DeletePartnerRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeletePartnerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeletePartnerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeletePartnerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeletePartnerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeletePartnerResponse}
 */
proto.payments.api.v1.DeletePartnerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeletePartnerResponse;
  return proto.payments.api.v1.DeletePartnerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeletePartnerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeletePartnerResponse}
 */
proto.payments.api.v1.DeletePartnerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeletePartnerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeletePartnerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeletePartnerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeletePartnerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional error.api.v1.Error error = 1;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.DeletePartnerResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 1));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.DeletePartnerResponse} returns this
*/
proto.payments.api.v1.DeletePartnerResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeletePartnerResponse} returns this
 */
proto.payments.api.v1.DeletePartnerResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeletePartnerResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ActivatePartnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ActivatePartnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ActivatePartnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ActivatePartnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    returnUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refreshUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ActivatePartnerRequest}
 */
proto.payments.api.v1.ActivatePartnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ActivatePartnerRequest;
  return proto.payments.api.v1.ActivatePartnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ActivatePartnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ActivatePartnerRequest}
 */
proto.payments.api.v1.ActivatePartnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReturnUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ActivatePartnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ActivatePartnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ActivatePartnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ActivatePartnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReturnUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefreshUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string return_url = 1;
 * @return {string}
 */
proto.payments.api.v1.ActivatePartnerRequest.prototype.getReturnUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ActivatePartnerRequest} returns this
 */
proto.payments.api.v1.ActivatePartnerRequest.prototype.setReturnUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refresh_url = 2;
 * @return {string}
 */
proto.payments.api.v1.ActivatePartnerRequest.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ActivatePartnerRequest} returns this
 */
proto.payments.api.v1.ActivatePartnerRequest.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ActivatePartnerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ActivatePartnerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ActivatePartnerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ActivatePartnerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ActivatePartnerResponse}
 */
proto.payments.api.v1.ActivatePartnerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ActivatePartnerResponse;
  return proto.payments.api.v1.ActivatePartnerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ActivatePartnerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ActivatePartnerResponse}
 */
proto.payments.api.v1.ActivatePartnerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ActivatePartnerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ActivatePartnerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ActivatePartnerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ActivatePartnerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.payments.api.v1.ActivatePartnerResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ActivatePartnerResponse} returns this
 */
proto.payments.api.v1.ActivatePartnerResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ActivatePartnerResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ActivatePartnerResponse} returns this
*/
proto.payments.api.v1.ActivatePartnerResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ActivatePartnerResponse} returns this
 */
proto.payments.api.v1.ActivatePartnerResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ActivatePartnerResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerInfoRequest}
 */
proto.payments.api.v1.GetCustomerInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerInfoRequest;
  return proto.payments.api.v1.GetCustomerInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerInfoRequest}
 */
proto.payments.api.v1.GetCustomerInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerInfoResponse}
 */
proto.payments.api.v1.GetCustomerInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerInfoResponse;
  return proto.payments.api.v1.GetCustomerInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerInfoResponse}
 */
proto.payments.api.v1.GetCustomerInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerInfo;
      reader.readMessage(value,payments_models_pb.CustomerInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerInfo}
 */
proto.payments.api.v1.GetCustomerInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerInfo|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetCustomerInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListCustomersRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    order: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomersRequest}
 */
proto.payments.api.v1.ListCustomersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomersRequest;
  return proto.payments.api.v1.ListCustomersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomersRequest}
 */
proto.payments.api.v1.ListCustomersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.payments.api.v1.ListCustomersRequest.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * repeated string user_ids = 2;
 * @return {!Array<string>}
 */
proto.payments.api.v1.ListCustomersRequest.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.payments.api.v1.ListCustomersRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 limit = 4;
 * @return {number}
 */
proto.payments.api.v1.ListCustomersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string order = 5;
 * @return {string}
 */
proto.payments.api.v1.ListCustomersRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListCustomersRequest} returns this
 */
proto.payments.api.v1.ListCustomersRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListCustomersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    customersList: jspb.Message.toObjectList(msg.getCustomersList(),
    payments_models_pb.CustomerInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomersResponse}
 */
proto.payments.api.v1.ListCustomersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomersResponse;
  return proto.payments.api.v1.ListCustomersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomersResponse}
 */
proto.payments.api.v1.ListCustomersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerInfo;
      reader.readMessage(value,payments_models_pb.CustomerInfo.deserializeBinaryFromReader);
      msg.addCustomers(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.CustomerInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerInfo customers = 1;
 * @return {!Array<!proto.payments.api.v1.CustomerInfo>}
 */
proto.payments.api.v1.ListCustomersResponse.prototype.getCustomersList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CustomerInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerInfo>} value
 * @return {!proto.payments.api.v1.ListCustomersResponse} returns this
*/
proto.payments.api.v1.ListCustomersResponse.prototype.setCustomersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerInfo}
 */
proto.payments.api.v1.ListCustomersResponse.prototype.addCustomers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.CustomerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListCustomersResponse} returns this
 */
proto.payments.api.v1.ListCustomersResponse.prototype.clearCustomersList = function() {
  return this.setCustomersList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomersResponse} returns this
 */
proto.payments.api.v1.ListCustomersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListCustomersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListCustomersResponse} returns this
*/
proto.payments.api.v1.ListCustomersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListCustomersResponse} returns this
 */
proto.payments.api.v1.ListCustomersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListCustomersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.CountCustomersRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomersRequest}
 */
proto.payments.api.v1.CountCustomersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomersRequest;
  return proto.payments.api.v1.CountCustomersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomersRequest}
 */
proto.payments.api.v1.CountCustomersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string user_ids = 1;
 * @return {!Array<string>}
 */
proto.payments.api.v1.CountCustomersRequest.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.CountCustomersRequest} returns this
 */
proto.payments.api.v1.CountCustomersRequest.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CountCustomersRequest} returns this
 */
proto.payments.api.v1.CountCustomersRequest.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.CountCustomersRequest} returns this
 */
proto.payments.api.v1.CountCustomersRequest.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomersResponse}
 */
proto.payments.api.v1.CountCustomersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomersResponse;
  return proto.payments.api.v1.CountCustomersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomersResponse}
 */
proto.payments.api.v1.CountCustomersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountCustomersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountCustomersResponse} returns this
 */
proto.payments.api.v1.CountCustomersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountCustomersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountCustomersResponse} returns this
*/
proto.payments.api.v1.CountCustomersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountCustomersResponse} returns this
 */
proto.payments.api.v1.CountCustomersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountCustomersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteCustomerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteCustomerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteCustomerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteCustomerRequest}
 */
proto.payments.api.v1.DeleteCustomerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteCustomerRequest;
  return proto.payments.api.v1.DeleteCustomerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteCustomerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteCustomerRequest}
 */
proto.payments.api.v1.DeleteCustomerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteCustomerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteCustomerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteCustomerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.DeleteCustomerRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeleteCustomerRequest} returns this
 */
proto.payments.api.v1.DeleteCustomerRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteCustomerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteCustomerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteCustomerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteCustomerResponse}
 */
proto.payments.api.v1.DeleteCustomerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteCustomerResponse;
  return proto.payments.api.v1.DeleteCustomerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteCustomerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteCustomerResponse}
 */
proto.payments.api.v1.DeleteCustomerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteCustomerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteCustomerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteCustomerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional error.api.v1.Error error = 1;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.DeleteCustomerResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 1));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.DeleteCustomerResponse} returns this
*/
proto.payments.api.v1.DeleteCustomerResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeleteCustomerResponse} returns this
 */
proto.payments.api.v1.DeleteCustomerResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeleteCustomerResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerOrderInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerOrderInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoRequest}
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerOrderInfoRequest;
  return proto.payments.api.v1.GetCustomerOrderInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerOrderInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoRequest}
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerOrderInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerOrderInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoRequest} returns this
 */
proto.payments.api.v1.GetCustomerOrderInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerOrderInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerOrderInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerOrderInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoResponse}
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerOrderInfoResponse;
  return proto.payments.api.v1.GetCustomerOrderInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerOrderInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoResponse}
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerOrderInfo;
      reader.readMessage(value,payments_models_pb.CustomerOrderInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerOrderInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerOrderInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerOrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerOrderInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerOrderInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderInfo|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerOrderInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerOrderInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomerOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomerOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomerOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    order: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomerOrdersRequest}
 */
proto.payments.api.v1.ListCustomerOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomerOrdersRequest;
  return proto.payments.api.v1.ListCustomerOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomerOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomerOrdersRequest}
 */
proto.payments.api.v1.ListCustomerOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomerOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomerOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomerOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 offset = 1;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerOrdersRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerOrdersRequest} returns this
 */
proto.payments.api.v1.ListCustomerOrdersRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerOrdersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerOrdersRequest} returns this
 */
proto.payments.api.v1.ListCustomerOrdersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string order = 3;
 * @return {string}
 */
proto.payments.api.v1.ListCustomerOrdersRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListCustomerOrdersRequest} returns this
 */
proto.payments.api.v1.ListCustomerOrdersRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListCustomerOrdersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomerOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomerOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    payments_models_pb.CustomerOrderInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomerOrdersResponse}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomerOrdersResponse;
  return proto.payments.api.v1.ListCustomerOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomerOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomerOrdersResponse}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerOrderInfo;
      reader.readMessage(value,payments_models_pb.CustomerOrderInfo.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomerOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomerOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.CustomerOrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerOrderInfo orders = 1;
 * @return {!Array<!proto.payments.api.v1.CustomerOrderInfo>}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerOrderInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CustomerOrderInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerOrderInfo>} value
 * @return {!proto.payments.api.v1.ListCustomerOrdersResponse} returns this
*/
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.CustomerOrderInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListCustomerOrdersResponse} returns this
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerOrdersResponse} returns this
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListCustomerOrdersResponse} returns this
*/
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListCustomerOrdersResponse} returns this
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListCustomerOrdersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListPartnerOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListPartnerOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListPartnerOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListPartnerOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    order: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListPartnerOrdersRequest}
 */
proto.payments.api.v1.ListPartnerOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListPartnerOrdersRequest;
  return proto.payments.api.v1.ListPartnerOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListPartnerOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListPartnerOrdersRequest}
 */
proto.payments.api.v1.ListPartnerOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListPartnerOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListPartnerOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListPartnerOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListPartnerOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 offset = 1;
 * @return {number}
 */
proto.payments.api.v1.ListPartnerOrdersRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListPartnerOrdersRequest} returns this
 */
proto.payments.api.v1.ListPartnerOrdersRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.payments.api.v1.ListPartnerOrdersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListPartnerOrdersRequest} returns this
 */
proto.payments.api.v1.ListPartnerOrdersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string order = 3;
 * @return {string}
 */
proto.payments.api.v1.ListPartnerOrdersRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListPartnerOrdersRequest} returns this
 */
proto.payments.api.v1.ListPartnerOrdersRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListPartnerOrdersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListPartnerOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListPartnerOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListPartnerOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    payments_models_pb.CustomerOrderInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListPartnerOrdersResponse}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListPartnerOrdersResponse;
  return proto.payments.api.v1.ListPartnerOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListPartnerOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListPartnerOrdersResponse}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerOrderInfo;
      reader.readMessage(value,payments_models_pb.CustomerOrderInfo.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListPartnerOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListPartnerOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListPartnerOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.CustomerOrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerOrderInfo orders = 1;
 * @return {!Array<!proto.payments.api.v1.CustomerOrderInfo>}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerOrderInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CustomerOrderInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerOrderInfo>} value
 * @return {!proto.payments.api.v1.ListPartnerOrdersResponse} returns this
*/
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.CustomerOrderInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListPartnerOrdersResponse} returns this
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListPartnerOrdersResponse} returns this
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListPartnerOrdersResponse} returns this
*/
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListPartnerOrdersResponse} returns this
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListPartnerOrdersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomerOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomerOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomerOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomerOrdersRequest}
 */
proto.payments.api.v1.CountCustomerOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomerOrdersRequest;
  return proto.payments.api.v1.CountCustomerOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomerOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomerOrdersRequest}
 */
proto.payments.api.v1.CountCustomerOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomerOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomerOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomerOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomerOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomerOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomerOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomerOrdersResponse}
 */
proto.payments.api.v1.CountCustomerOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomerOrdersResponse;
  return proto.payments.api.v1.CountCustomerOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomerOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomerOrdersResponse}
 */
proto.payments.api.v1.CountCustomerOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomerOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomerOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomerOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountCustomerOrdersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountCustomerOrdersResponse} returns this
 */
proto.payments.api.v1.CountCustomerOrdersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountCustomerOrdersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountCustomerOrdersResponse} returns this
*/
proto.payments.api.v1.CountCustomerOrdersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountCustomerOrdersResponse} returns this
 */
proto.payments.api.v1.CountCustomerOrdersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountCustomerOrdersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountPartnerOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountPartnerOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountPartnerOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountPartnerOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountPartnerOrdersRequest}
 */
proto.payments.api.v1.CountPartnerOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountPartnerOrdersRequest;
  return proto.payments.api.v1.CountPartnerOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountPartnerOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountPartnerOrdersRequest}
 */
proto.payments.api.v1.CountPartnerOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountPartnerOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountPartnerOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountPartnerOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountPartnerOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountPartnerOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountPartnerOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountPartnerOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountPartnerOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountPartnerOrdersResponse}
 */
proto.payments.api.v1.CountPartnerOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountPartnerOrdersResponse;
  return proto.payments.api.v1.CountPartnerOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountPartnerOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountPartnerOrdersResponse}
 */
proto.payments.api.v1.CountPartnerOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountPartnerOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountPartnerOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountPartnerOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountPartnerOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountPartnerOrdersResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountPartnerOrdersResponse} returns this
 */
proto.payments.api.v1.CountPartnerOrdersResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountPartnerOrdersResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountPartnerOrdersResponse} returns this
*/
proto.payments.api.v1.CountPartnerOrdersResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountPartnerOrdersResponse} returns this
 */
proto.payments.api.v1.CountPartnerOrdersResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountPartnerOrdersResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.AcceptPartnerOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.AcceptPartnerOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    trackingUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.AcceptPartnerOrderRequest}
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.AcceptPartnerOrderRequest;
  return proto.payments.api.v1.AcceptPartnerOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.AcceptPartnerOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.AcceptPartnerOrderRequest}
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.AcceptPartnerOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.AcceptPartnerOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTrackingUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.AcceptPartnerOrderRequest} returns this
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tracking_url = 2;
 * @return {string}
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.prototype.getTrackingUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.AcceptPartnerOrderRequest} returns this
 */
proto.payments.api.v1.AcceptPartnerOrderRequest.prototype.setTrackingUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.AcceptPartnerOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.AcceptPartnerOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerOrderInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.AcceptPartnerOrderResponse}
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.AcceptPartnerOrderResponse;
  return proto.payments.api.v1.AcceptPartnerOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.AcceptPartnerOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.AcceptPartnerOrderResponse}
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerOrderInfo;
      reader.readMessage(value,payments_models_pb.CustomerOrderInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.AcceptPartnerOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.AcceptPartnerOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerOrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerOrderInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerOrderInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderInfo|undefined} value
 * @return {!proto.payments.api.v1.AcceptPartnerOrderResponse} returns this
*/
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.AcceptPartnerOrderResponse} returns this
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.AcceptPartnerOrderResponse} returns this
*/
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.AcceptPartnerOrderResponse} returns this
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.AcceptPartnerOrderResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeclinePartnerOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeclinePartnerOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeclinePartnerOrderRequest}
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeclinePartnerOrderRequest;
  return proto.payments.api.v1.DeclinePartnerOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeclinePartnerOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeclinePartnerOrderRequest}
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeclinePartnerOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeclinePartnerOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeclinePartnerOrderRequest} returns this
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeclinePartnerOrderRequest} returns this
 */
proto.payments.api.v1.DeclinePartnerOrderRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeclinePartnerOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeclinePartnerOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerOrderInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeclinePartnerOrderResponse}
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeclinePartnerOrderResponse;
  return proto.payments.api.v1.DeclinePartnerOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeclinePartnerOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeclinePartnerOrderResponse}
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerOrderInfo;
      reader.readMessage(value,payments_models_pb.CustomerOrderInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeclinePartnerOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeclinePartnerOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerOrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerOrderInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerOrderInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderInfo|undefined} value
 * @return {!proto.payments.api.v1.DeclinePartnerOrderResponse} returns this
*/
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeclinePartnerOrderResponse} returns this
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.DeclinePartnerOrderResponse} returns this
*/
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeclinePartnerOrderResponse} returns this
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeclinePartnerOrderResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.RefundPartnerOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.RefundPartnerOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.RefundPartnerOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.RefundPartnerOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.RefundPartnerOrderRequest}
 */
proto.payments.api.v1.RefundPartnerOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.RefundPartnerOrderRequest;
  return proto.payments.api.v1.RefundPartnerOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.RefundPartnerOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.RefundPartnerOrderRequest}
 */
proto.payments.api.v1.RefundPartnerOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.RefundPartnerOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.RefundPartnerOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.RefundPartnerOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.RefundPartnerOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.RefundPartnerOrderRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.RefundPartnerOrderRequest} returns this
 */
proto.payments.api.v1.RefundPartnerOrderRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.payments.api.v1.RefundPartnerOrderRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.RefundPartnerOrderRequest} returns this
 */
proto.payments.api.v1.RefundPartnerOrderRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.RefundPartnerOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.RefundPartnerOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.RefundPartnerOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.RefundPartnerOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.RefundPartnerOrderResponse}
 */
proto.payments.api.v1.RefundPartnerOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.RefundPartnerOrderResponse;
  return proto.payments.api.v1.RefundPartnerOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.RefundPartnerOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.RefundPartnerOrderResponse}
 */
proto.payments.api.v1.RefundPartnerOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.RefundPartnerOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.RefundPartnerOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.RefundPartnerOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.RefundPartnerOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.RefundPartnerOrderResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.RefundPartnerOrderResponse} returns this
*/
proto.payments.api.v1.RefundPartnerOrderResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.RefundPartnerOrderResponse} returns this
 */
proto.payments.api.v1.RefundPartnerOrderResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.RefundPartnerOrderResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerAddressInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerAddressInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoRequest}
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerAddressInfoRequest;
  return proto.payments.api.v1.GetCustomerAddressInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerAddressInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoRequest}
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerAddressInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerAddressInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoRequest} returns this
 */
proto.payments.api.v1.GetCustomerAddressInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerAddressInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerAddressInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerAddressInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoResponse}
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerAddressInfoResponse;
  return proto.payments.api.v1.GetCustomerAddressInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerAddressInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoResponse}
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerAddressInfo;
      reader.readMessage(value,payments_models_pb.CustomerAddressInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerAddressInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerAddressInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerAddressInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerAddressInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerAddressInfo}
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressInfo|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerAddressInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerAddressInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomerAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomerAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomerAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    order: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomerAddressesRequest}
 */
proto.payments.api.v1.ListCustomerAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomerAddressesRequest;
  return proto.payments.api.v1.ListCustomerAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomerAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomerAddressesRequest}
 */
proto.payments.api.v1.ListCustomerAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomerAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomerAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomerAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 offset = 1;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerAddressesRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerAddressesRequest} returns this
 */
proto.payments.api.v1.ListCustomerAddressesRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerAddressesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerAddressesRequest} returns this
 */
proto.payments.api.v1.ListCustomerAddressesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string order = 3;
 * @return {string}
 */
proto.payments.api.v1.ListCustomerAddressesRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListCustomerAddressesRequest} returns this
 */
proto.payments.api.v1.ListCustomerAddressesRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListCustomerAddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomerAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomerAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    payments_models_pb.CustomerAddressInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomerAddressesResponse}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomerAddressesResponse;
  return proto.payments.api.v1.ListCustomerAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomerAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomerAddressesResponse}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerAddressInfo;
      reader.readMessage(value,payments_models_pb.CustomerAddressInfo.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomerAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomerAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.CustomerAddressInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerAddressInfo addresses = 1;
 * @return {!Array<!proto.payments.api.v1.CustomerAddressInfo>}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerAddressInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CustomerAddressInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerAddressInfo>} value
 * @return {!proto.payments.api.v1.ListCustomerAddressesResponse} returns this
*/
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.setAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerAddressInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerAddressInfo}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.CustomerAddressInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListCustomerAddressesResponse} returns this
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerAddressesResponse} returns this
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListCustomerAddressesResponse} returns this
*/
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListCustomerAddressesResponse} returns this
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListCustomerAddressesResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomerAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomerAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomerAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomerAddressesRequest}
 */
proto.payments.api.v1.CountCustomerAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomerAddressesRequest;
  return proto.payments.api.v1.CountCustomerAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomerAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomerAddressesRequest}
 */
proto.payments.api.v1.CountCustomerAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomerAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomerAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomerAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomerAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomerAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomerAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomerAddressesResponse}
 */
proto.payments.api.v1.CountCustomerAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomerAddressesResponse;
  return proto.payments.api.v1.CountCustomerAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomerAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomerAddressesResponse}
 */
proto.payments.api.v1.CountCustomerAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomerAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomerAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomerAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountCustomerAddressesResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountCustomerAddressesResponse} returns this
 */
proto.payments.api.v1.CountCustomerAddressesResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountCustomerAddressesResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountCustomerAddressesResponse} returns this
*/
proto.payments.api.v1.CountCustomerAddressesResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountCustomerAddressesResponse} returns this
 */
proto.payments.api.v1.CountCustomerAddressesResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountCustomerAddressesResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateCustomerAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateCustomerAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateCustomerAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    postcode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    city: jspb.Message.getFieldWithDefault(msg, 5, ""),
    country: jspb.Message.getFieldWithDefault(msg, 6, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 7, 0),
    primary: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    expires: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateCustomerAddressRequest;
  return proto.payments.api.v1.CreateCustomerAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateCustomerAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostcode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPhoneNumber(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimary(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpires(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateCustomerAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateCustomerAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateCustomerAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPostcode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getPrimary();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getExpires();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string firstname = 1;
 * @return {string}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string lastname = 2;
 * @return {string}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string postcode = 4;
 * @return {string}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getPostcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setPostcode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string city = 5;
 * @return {string}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string country = 6;
 * @return {string}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 phone_number = 7;
 * @return {number}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getPhoneNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool primary = 8;
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool expires = 9;
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.getExpires = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.CreateCustomerAddressRequest.prototype.setExpires = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateCustomerAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateCustomerAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateCustomerAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerAddressInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateCustomerAddressResponse}
 */
proto.payments.api.v1.CreateCustomerAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateCustomerAddressResponse;
  return proto.payments.api.v1.CreateCustomerAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateCustomerAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateCustomerAddressResponse}
 */
proto.payments.api.v1.CreateCustomerAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerAddressInfo;
      reader.readMessage(value,payments_models_pb.CustomerAddressInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateCustomerAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateCustomerAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateCustomerAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerAddressInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerAddressInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerAddressInfo}
 */
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressInfo|undefined} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressResponse} returns this
*/
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateCustomerAddressResponse} returns this
 */
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CreateCustomerAddressResponse} returns this
*/
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateCustomerAddressResponse} returns this
 */
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerAddressResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateCustomerAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateCustomerAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstname: (f = msg.getFirstname()) && payments_models_pb.CustomerAddressFirstnameValue.toObject(includeInstance, f),
    lastname: (f = msg.getLastname()) && payments_models_pb.CustomerAddressLastnameValue.toObject(includeInstance, f),
    address: (f = msg.getAddress()) && payments_models_pb.CustomerAddressAddressValue.toObject(includeInstance, f),
    postcode: (f = msg.getPostcode()) && payments_models_pb.CustomerAddressPostcodeValue.toObject(includeInstance, f),
    city: (f = msg.getCity()) && payments_models_pb.CustomerAddressCityValue.toObject(includeInstance, f),
    country: (f = msg.getCountry()) && payments_models_pb.CustomerAddressCountryValue.toObject(includeInstance, f),
    phoneNumber: (f = msg.getPhoneNumber()) && payments_models_pb.CustomerAddressPhoneNumberValue.toObject(includeInstance, f),
    primary: (f = msg.getPrimary()) && payments_models_pb.CustomerAddressPrimaryValue.toObject(includeInstance, f),
    expires: (f = msg.getExpires()) && payments_models_pb.CustomerAddressExpiresValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateCustomerAddressRequest;
  return proto.payments.api.v1.UpdateCustomerAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateCustomerAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new payments_models_pb.CustomerAddressFirstnameValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressFirstnameValue.deserializeBinaryFromReader);
      msg.setFirstname(value);
      break;
    case 3:
      var value = new payments_models_pb.CustomerAddressLastnameValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressLastnameValue.deserializeBinaryFromReader);
      msg.setLastname(value);
      break;
    case 4:
      var value = new payments_models_pb.CustomerAddressAddressValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressAddressValue.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 5:
      var value = new payments_models_pb.CustomerAddressPostcodeValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressPostcodeValue.deserializeBinaryFromReader);
      msg.setPostcode(value);
      break;
    case 6:
      var value = new payments_models_pb.CustomerAddressCityValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressCityValue.deserializeBinaryFromReader);
      msg.setCity(value);
      break;
    case 7:
      var value = new payments_models_pb.CustomerAddressCountryValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressCountryValue.deserializeBinaryFromReader);
      msg.setCountry(value);
      break;
    case 8:
      var value = new payments_models_pb.CustomerAddressPhoneNumberValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressPhoneNumberValue.deserializeBinaryFromReader);
      msg.setPhoneNumber(value);
      break;
    case 9:
      var value = new payments_models_pb.CustomerAddressPrimaryValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressPrimaryValue.deserializeBinaryFromReader);
      msg.setPrimary(value);
      break;
    case 10:
      var value = new payments_models_pb.CustomerAddressExpiresValue;
      reader.readMessage(value,payments_models_pb.CustomerAddressExpiresValue.deserializeBinaryFromReader);
      msg.setExpires(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateCustomerAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateCustomerAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstname();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payments_models_pb.CustomerAddressFirstnameValue.serializeBinaryToWriter
    );
  }
  f = message.getLastname();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payments_models_pb.CustomerAddressLastnameValue.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      payments_models_pb.CustomerAddressAddressValue.serializeBinaryToWriter
    );
  }
  f = message.getPostcode();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      payments_models_pb.CustomerAddressPostcodeValue.serializeBinaryToWriter
    );
  }
  f = message.getCity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      payments_models_pb.CustomerAddressCityValue.serializeBinaryToWriter
    );
  }
  f = message.getCountry();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      payments_models_pb.CustomerAddressCountryValue.serializeBinaryToWriter
    );
  }
  f = message.getPhoneNumber();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      payments_models_pb.CustomerAddressPhoneNumberValue.serializeBinaryToWriter
    );
  }
  f = message.getPrimary();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      payments_models_pb.CustomerAddressPrimaryValue.serializeBinaryToWriter
    );
  }
  f = message.getExpires();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      payments_models_pb.CustomerAddressExpiresValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CustomerAddressFirstnameValue firstname = 2;
 * @return {?proto.payments.api.v1.CustomerAddressFirstnameValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getFirstname = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressFirstnameValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressFirstnameValue, 2));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressFirstnameValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setFirstname = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearFirstname = function() {
  return this.setFirstname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasFirstname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerAddressLastnameValue lastname = 3;
 * @return {?proto.payments.api.v1.CustomerAddressLastnameValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getLastname = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressLastnameValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressLastnameValue, 3));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressLastnameValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setLastname = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearLastname = function() {
  return this.setLastname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasLastname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerAddressAddressValue address = 4;
 * @return {?proto.payments.api.v1.CustomerAddressAddressValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getAddress = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressAddressValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressAddressValue, 4));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressAddressValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CustomerAddressPostcodeValue postcode = 5;
 * @return {?proto.payments.api.v1.CustomerAddressPostcodeValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getPostcode = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressPostcodeValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressPostcodeValue, 5));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressPostcodeValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setPostcode = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearPostcode = function() {
  return this.setPostcode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasPostcode = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CustomerAddressCityValue city = 6;
 * @return {?proto.payments.api.v1.CustomerAddressCityValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getCity = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressCityValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressCityValue, 6));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressCityValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setCity = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearCity = function() {
  return this.setCity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasCity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CustomerAddressCountryValue country = 7;
 * @return {?proto.payments.api.v1.CustomerAddressCountryValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getCountry = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressCountryValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressCountryValue, 7));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressCountryValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setCountry = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearCountry = function() {
  return this.setCountry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasCountry = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CustomerAddressPhoneNumberValue phone_number = 8;
 * @return {?proto.payments.api.v1.CustomerAddressPhoneNumberValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getPhoneNumber = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressPhoneNumberValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressPhoneNumberValue, 8));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressPhoneNumberValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearPhoneNumber = function() {
  return this.setPhoneNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasPhoneNumber = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CustomerAddressPrimaryValue primary = 9;
 * @return {?proto.payments.api.v1.CustomerAddressPrimaryValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getPrimary = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressPrimaryValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressPrimaryValue, 9));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressPrimaryValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setPrimary = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearPrimary = function() {
  return this.setPrimary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasPrimary = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CustomerAddressExpiresValue expires = 10;
 * @return {?proto.payments.api.v1.CustomerAddressExpiresValue}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.getExpires = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressExpiresValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressExpiresValue, 10));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressExpiresValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.setExpires = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.clearExpires = function() {
  return this.setExpires(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressRequest.prototype.hasExpires = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateCustomerAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateCustomerAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerAddressInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressResponse}
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateCustomerAddressResponse;
  return proto.payments.api.v1.UpdateCustomerAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateCustomerAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressResponse}
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerAddressInfo;
      reader.readMessage(value,payments_models_pb.CustomerAddressInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateCustomerAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateCustomerAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerAddressInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerAddressInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerAddressInfo}
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerAddressInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressInfo|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressResponse} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressResponse} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerAddressResponse} returns this
*/
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerAddressResponse} returns this
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerAddressResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteCustomerAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteCustomerAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteCustomerAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteCustomerAddressRequest}
 */
proto.payments.api.v1.DeleteCustomerAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteCustomerAddressRequest;
  return proto.payments.api.v1.DeleteCustomerAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteCustomerAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteCustomerAddressRequest}
 */
proto.payments.api.v1.DeleteCustomerAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteCustomerAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteCustomerAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteCustomerAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.DeleteCustomerAddressRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeleteCustomerAddressRequest} returns this
 */
proto.payments.api.v1.DeleteCustomerAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteCustomerAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteCustomerAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteCustomerAddressResponse}
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteCustomerAddressResponse;
  return proto.payments.api.v1.DeleteCustomerAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteCustomerAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteCustomerAddressResponse}
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteCustomerAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteCustomerAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional error.api.v1.Error error = 1;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 1));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.DeleteCustomerAddressResponse} returns this
*/
proto.payments.api.v1.DeleteCustomerAddressResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeleteCustomerAddressResponse} returns this
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeleteCustomerAddressResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerPaymentInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerPaymentInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoRequest}
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerPaymentInfoRequest;
  return proto.payments.api.v1.GetCustomerPaymentInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerPaymentInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoRequest}
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerPaymentInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerPaymentInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoRequest} returns this
 */
proto.payments.api.v1.GetCustomerPaymentInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerPaymentInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerPaymentInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerPaymentInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoResponse}
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerPaymentInfoResponse;
  return proto.payments.api.v1.GetCustomerPaymentInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerPaymentInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoResponse}
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerPaymentInfo;
      reader.readMessage(value,payments_models_pb.CustomerPaymentInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerPaymentInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerPaymentInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerPaymentInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerPaymentInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerPaymentInfo}
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerPaymentInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentInfo|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerPaymentInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerPaymentInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomerPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomerPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    order: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomerPaymentsRequest}
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomerPaymentsRequest;
  return proto.payments.api.v1.ListCustomerPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomerPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomerPaymentsRequest}
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomerPaymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomerPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 offset = 1;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerPaymentsRequest} returns this
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerPaymentsRequest} returns this
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string order = 3;
 * @return {string}
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListCustomerPaymentsRequest} returns this
 */
proto.payments.api.v1.ListCustomerPaymentsRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomerPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomerPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    paymentsList: jspb.Message.toObjectList(msg.getPaymentsList(),
    payments_models_pb.CustomerPaymentInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomerPaymentsResponse}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomerPaymentsResponse;
  return proto.payments.api.v1.ListCustomerPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomerPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomerPaymentsResponse}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerPaymentInfo;
      reader.readMessage(value,payments_models_pb.CustomerPaymentInfo.deserializeBinaryFromReader);
      msg.addPayments(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomerPaymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomerPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.CustomerPaymentInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerPaymentInfo payments = 1;
 * @return {!Array<!proto.payments.api.v1.CustomerPaymentInfo>}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.getPaymentsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerPaymentInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CustomerPaymentInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerPaymentInfo>} value
 * @return {!proto.payments.api.v1.ListCustomerPaymentsResponse} returns this
*/
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.setPaymentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerPaymentInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerPaymentInfo}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.addPayments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.CustomerPaymentInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListCustomerPaymentsResponse} returns this
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.clearPaymentsList = function() {
  return this.setPaymentsList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerPaymentsResponse} returns this
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListCustomerPaymentsResponse} returns this
*/
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListCustomerPaymentsResponse} returns this
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListCustomerPaymentsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomerPaymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomerPaymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomerPaymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerPaymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomerPaymentsRequest}
 */
proto.payments.api.v1.CountCustomerPaymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomerPaymentsRequest;
  return proto.payments.api.v1.CountCustomerPaymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomerPaymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomerPaymentsRequest}
 */
proto.payments.api.v1.CountCustomerPaymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomerPaymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomerPaymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomerPaymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerPaymentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomerPaymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomerPaymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomerPaymentsResponse}
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomerPaymentsResponse;
  return proto.payments.api.v1.CountCustomerPaymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomerPaymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomerPaymentsResponse}
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomerPaymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomerPaymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountCustomerPaymentsResponse} returns this
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountCustomerPaymentsResponse} returns this
*/
proto.payments.api.v1.CountCustomerPaymentsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountCustomerPaymentsResponse} returns this
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountCustomerPaymentsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateCustomerPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateCustomerPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    expires: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    primary: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    metadata: (f = msg.getMetadata()) && payments_models_pb.CustomerPaymentMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateCustomerPaymentRequest}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateCustomerPaymentRequest;
  return proto.payments.api.v1.CreateCustomerPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateCustomerPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateCustomerPaymentRequest}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.payments.api.v1.CustomerPaymentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpires(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimary(value);
      break;
    case 4:
      var value = new payments_models_pb.CustomerPaymentMetadata;
      reader.readMessage(value,payments_models_pb.CustomerPaymentMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateCustomerPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateCustomerPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getExpires();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPrimary();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      payments_models_pb.CustomerPaymentMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerPaymentType type = 1;
 * @return {!proto.payments.api.v1.CustomerPaymentType}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.getType = function() {
  return /** @type {!proto.payments.api.v1.CustomerPaymentType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerPaymentType} value
 * @return {!proto.payments.api.v1.CreateCustomerPaymentRequest} returns this
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool expires = 2;
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.getExpires = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CreateCustomerPaymentRequest} returns this
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.setExpires = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool primary = 3;
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.getPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CreateCustomerPaymentRequest} returns this
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional CustomerPaymentMetadata metadata = 4;
 * @return {?proto.payments.api.v1.CustomerPaymentMetadata}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentMetadata} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerPaymentMetadata, 4));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentMetadata|undefined} value
 * @return {!proto.payments.api.v1.CreateCustomerPaymentRequest} returns this
*/
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateCustomerPaymentRequest} returns this
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerPaymentRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreateCustomerPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreateCustomerPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerPaymentInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CreateCustomerPaymentResponse}
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreateCustomerPaymentResponse;
  return proto.payments.api.v1.CreateCustomerPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreateCustomerPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreateCustomerPaymentResponse}
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerPaymentInfo;
      reader.readMessage(value,payments_models_pb.CustomerPaymentInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreateCustomerPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreateCustomerPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerPaymentInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerPaymentInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerPaymentInfo}
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerPaymentInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentInfo|undefined} value
 * @return {!proto.payments.api.v1.CreateCustomerPaymentResponse} returns this
*/
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateCustomerPaymentResponse} returns this
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CreateCustomerPaymentResponse} returns this
*/
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CreateCustomerPaymentResponse} returns this
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CreateCustomerPaymentResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateCustomerPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateCustomerPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    primary: (f = msg.getPrimary()) && payments_models_pb.CustomerPaymentPrimaryValue.toObject(includeInstance, f),
    expires: (f = msg.getExpires()) && payments_models_pb.CustomerPaymentExpiresValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentRequest}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateCustomerPaymentRequest;
  return proto.payments.api.v1.UpdateCustomerPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateCustomerPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentRequest}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new payments_models_pb.CustomerPaymentPrimaryValue;
      reader.readMessage(value,payments_models_pb.CustomerPaymentPrimaryValue.deserializeBinaryFromReader);
      msg.setPrimary(value);
      break;
    case 3:
      var value = new payments_models_pb.CustomerPaymentExpiresValue;
      reader.readMessage(value,payments_models_pb.CustomerPaymentExpiresValue.deserializeBinaryFromReader);
      msg.setExpires(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateCustomerPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateCustomerPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrimary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      payments_models_pb.CustomerPaymentPrimaryValue.serializeBinaryToWriter
    );
  }
  f = message.getExpires();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      payments_models_pb.CustomerPaymentExpiresValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional CustomerPaymentPrimaryValue primary = 2;
 * @return {?proto.payments.api.v1.CustomerPaymentPrimaryValue}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.getPrimary = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentPrimaryValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerPaymentPrimaryValue, 2));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentPrimaryValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.setPrimary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.clearPrimary = function() {
  return this.setPrimary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.hasPrimary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerPaymentExpiresValue expires = 3;
 * @return {?proto.payments.api.v1.CustomerPaymentExpiresValue}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.getExpires = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentExpiresValue} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerPaymentExpiresValue, 3));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentExpiresValue|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentRequest} returns this
*/
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.setExpires = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentRequest} returns this
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.clearExpires = function() {
  return this.setExpires(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerPaymentRequest.prototype.hasExpires = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.UpdateCustomerPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.UpdateCustomerPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerPaymentInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentResponse}
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.UpdateCustomerPaymentResponse;
  return proto.payments.api.v1.UpdateCustomerPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.UpdateCustomerPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentResponse}
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerPaymentInfo;
      reader.readMessage(value,payments_models_pb.CustomerPaymentInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.UpdateCustomerPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.UpdateCustomerPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerPaymentInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerPaymentInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerPaymentInfo}
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerPaymentInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentInfo|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentResponse} returns this
*/
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentResponse} returns this
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentResponse} returns this
*/
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.UpdateCustomerPaymentResponse} returns this
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.UpdateCustomerPaymentResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteCustomerPaymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteCustomerPaymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteCustomerPaymentRequest}
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteCustomerPaymentRequest;
  return proto.payments.api.v1.DeleteCustomerPaymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteCustomerPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteCustomerPaymentRequest}
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteCustomerPaymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteCustomerPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.DeleteCustomerPaymentRequest} returns this
 */
proto.payments.api.v1.DeleteCustomerPaymentRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.DeleteCustomerPaymentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.DeleteCustomerPaymentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.DeleteCustomerPaymentResponse}
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.DeleteCustomerPaymentResponse;
  return proto.payments.api.v1.DeleteCustomerPaymentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.DeleteCustomerPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.DeleteCustomerPaymentResponse}
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.DeleteCustomerPaymentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.DeleteCustomerPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional error.api.v1.Error error = 1;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 1));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.DeleteCustomerPaymentResponse} returns this
*/
proto.payments.api.v1.DeleteCustomerPaymentResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.DeleteCustomerPaymentResponse} returns this
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.DeleteCustomerPaymentResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerTransactionInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerTransactionInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoRequest}
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerTransactionInfoRequest;
  return proto.payments.api.v1.GetCustomerTransactionInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerTransactionInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoRequest}
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerTransactionInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerTransactionInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoRequest} returns this
 */
proto.payments.api.v1.GetCustomerTransactionInfoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.GetCustomerTransactionInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.GetCustomerTransactionInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && payments_models_pb.CustomerTransactionInfo.toObject(includeInstance, f),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoResponse}
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.GetCustomerTransactionInfoResponse;
  return proto.payments.api.v1.GetCustomerTransactionInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.GetCustomerTransactionInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoResponse}
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerTransactionInfo;
      reader.readMessage(value,payments_models_pb.CustomerTransactionInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.GetCustomerTransactionInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.GetCustomerTransactionInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      payments_models_pb.CustomerTransactionInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerTransactionInfo info = 1;
 * @return {?proto.payments.api.v1.CustomerTransactionInfo}
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.getInfo = function() {
  return /** @type{?proto.payments.api.v1.CustomerTransactionInfo} */ (
    jspb.Message.getWrapperField(this, payments_models_pb.CustomerTransactionInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerTransactionInfo|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoResponse} returns this
*/
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.GetCustomerTransactionInfoResponse} returns this
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.GetCustomerTransactionInfoResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomerTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomerTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    order: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomerTransactionsRequest}
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomerTransactionsRequest;
  return proto.payments.api.v1.ListCustomerTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomerTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomerTransactionsRequest}
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomerTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomerTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOrder();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 offset = 1;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerTransactionsRequest} returns this
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerTransactionsRequest} returns this
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string order = 3;
 * @return {string}
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.prototype.getOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.ListCustomerTransactionsRequest} returns this
 */
proto.payments.api.v1.ListCustomerTransactionsRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.ListCustomerTransactionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.ListCustomerTransactionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    payments_models_pb.CustomerTransactionInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.ListCustomerTransactionsResponse}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.ListCustomerTransactionsResponse;
  return proto.payments.api.v1.ListCustomerTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.ListCustomerTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.ListCustomerTransactionsResponse}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new payments_models_pb.CustomerTransactionInfo;
      reader.readMessage(value,payments_models_pb.CustomerTransactionInfo.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.ListCustomerTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.ListCustomerTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      payments_models_pb.CustomerTransactionInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerTransactionInfo transactions = 1;
 * @return {!Array<!proto.payments.api.v1.CustomerTransactionInfo>}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerTransactionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, payments_models_pb.CustomerTransactionInfo, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerTransactionInfo>} value
 * @return {!proto.payments.api.v1.ListCustomerTransactionsResponse} returns this
*/
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerTransactionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerTransactionInfo}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.CustomerTransactionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.ListCustomerTransactionsResponse} returns this
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.ListCustomerTransactionsResponse} returns this
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional error.api.v1.Error error = 3;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 3));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.ListCustomerTransactionsResponse} returns this
*/
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.ListCustomerTransactionsResponse} returns this
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.ListCustomerTransactionsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomerTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomerTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomerTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomerTransactionsRequest}
 */
proto.payments.api.v1.CountCustomerTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomerTransactionsRequest;
  return proto.payments.api.v1.CountCustomerTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomerTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomerTransactionsRequest}
 */
proto.payments.api.v1.CountCustomerTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomerTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomerTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomerTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CountCustomerTransactionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CountCustomerTransactionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && error_models_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.payments.api.v1.CountCustomerTransactionsResponse}
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CountCustomerTransactionsResponse;
  return proto.payments.api.v1.CountCustomerTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CountCustomerTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CountCustomerTransactionsResponse}
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 2:
      var value = new error_models_pb.Error;
      reader.readMessage(value,error_models_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CountCustomerTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CountCustomerTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      error_models_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 total = 1;
 * @return {number}
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CountCustomerTransactionsResponse} returns this
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional error.api.v1.Error error = 2;
 * @return {?proto.error.api.v1.Error}
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.prototype.getError = function() {
  return /** @type{?proto.error.api.v1.Error} */ (
    jspb.Message.getWrapperField(this, error_models_pb.Error, 2));
};


/**
 * @param {?proto.error.api.v1.Error|undefined} value
 * @return {!proto.payments.api.v1.CountCustomerTransactionsResponse} returns this
*/
proto.payments.api.v1.CountCustomerTransactionsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CountCustomerTransactionsResponse} returns this
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CountCustomerTransactionsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.payments.api.v1);
