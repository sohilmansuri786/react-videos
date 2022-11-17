/* eslint-disable */
// source: payments/models.proto
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
goog.exportSymbol('proto.payments.api.v1.CreatesEventTicketVoucher', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressAddressValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressCityValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressCountryValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressExpiresValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressFirstnameValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressLastnameValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressPhoneNumberValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressPostcodeValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerAddressPrimaryValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderAddressMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderDeliveryMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderMetadataValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderProduct', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderProductDetails', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderProductMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderRefundInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderRefundMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderRefundStatusValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderRefundStripeMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderStatusValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderTicket', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderTicketDetails', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerOrderTicketMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerPaymentCardMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerPaymentExpiresValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerPaymentInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerPaymentMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerPaymentPrimaryValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerPaymentStripeMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerStripeMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerTransactionInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerTransactionMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerTransactionPaymentMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerTransactionStatusValue', null, global);
goog.exportSymbol('proto.payments.api.v1.CustomerTransactionStripeMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductDescriptionValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductDetailsMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductKindValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductMetadataValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductNameValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductPriceMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductStatusValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventProductStockValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketMetadataValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketPriceMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketStatusValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketUsagesValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketVoucherAmountValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketVoucherInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketVoucherStatusValue', null, global);
goog.exportSymbol('proto.payments.api.v1.EventTicketVoucherUsagesValue', null, global);
goog.exportSymbol('proto.payments.api.v1.PartnerInfo', null, global);
goog.exportSymbol('proto.payments.api.v1.PartnerMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.PartnerStripeMetadata', null, global);
goog.exportSymbol('proto.payments.api.v1.Price', null, global);
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
proto.payments.api.v1.Price = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.Price, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.Price.displayName = 'proto.payments.api.v1.Price';
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
proto.payments.api.v1.CustomerOrderTicket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderTicket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderTicket.displayName = 'proto.payments.api.v1.CustomerOrderTicket';
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
proto.payments.api.v1.CustomerOrderProduct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderProduct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderProduct.displayName = 'proto.payments.api.v1.CustomerOrderProduct';
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
proto.payments.api.v1.CustomerOrderTicketDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderTicketDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderTicketDetails.displayName = 'proto.payments.api.v1.CustomerOrderTicketDetails';
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
proto.payments.api.v1.CustomerOrderProductDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderProductDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderProductDetails.displayName = 'proto.payments.api.v1.CustomerOrderProductDetails';
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
proto.payments.api.v1.EventTicketInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketInfo.displayName = 'proto.payments.api.v1.EventTicketInfo';
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
proto.payments.api.v1.CreatesEventTicketVoucher = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CreatesEventTicketVoucher, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CreatesEventTicketVoucher.displayName = 'proto.payments.api.v1.CreatesEventTicketVoucher';
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
proto.payments.api.v1.EventTicketMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketMetadata.displayName = 'proto.payments.api.v1.EventTicketMetadata';
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
proto.payments.api.v1.EventTicketPriceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.EventTicketPriceMetadata.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.EventTicketPriceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketPriceMetadata.displayName = 'proto.payments.api.v1.EventTicketPriceMetadata';
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
proto.payments.api.v1.EventTicketUsagesValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketUsagesValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketUsagesValue.displayName = 'proto.payments.api.v1.EventTicketUsagesValue';
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
proto.payments.api.v1.EventTicketStatusValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketStatusValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketStatusValue.displayName = 'proto.payments.api.v1.EventTicketStatusValue';
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
proto.payments.api.v1.EventTicketMetadataValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketMetadataValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketMetadataValue.displayName = 'proto.payments.api.v1.EventTicketMetadataValue';
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
proto.payments.api.v1.EventProductInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.EventProductInfo.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.EventProductInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductInfo.displayName = 'proto.payments.api.v1.EventProductInfo';
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
proto.payments.api.v1.EventProductMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventProductMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductMetadata.displayName = 'proto.payments.api.v1.EventProductMetadata';
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
proto.payments.api.v1.EventProductDetailsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventProductDetailsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductDetailsMetadata.displayName = 'proto.payments.api.v1.EventProductDetailsMetadata';
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
proto.payments.api.v1.EventProductPriceMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.EventProductPriceMetadata.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.EventProductPriceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductPriceMetadata.displayName = 'proto.payments.api.v1.EventProductPriceMetadata';
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
proto.payments.api.v1.EventProductKindValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventProductKindValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductKindValue.displayName = 'proto.payments.api.v1.EventProductKindValue';
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
proto.payments.api.v1.EventProductNameValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventProductNameValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductNameValue.displayName = 'proto.payments.api.v1.EventProductNameValue';
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
proto.payments.api.v1.EventProductDescriptionValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventProductDescriptionValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductDescriptionValue.displayName = 'proto.payments.api.v1.EventProductDescriptionValue';
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
proto.payments.api.v1.EventProductStockValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventProductStockValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductStockValue.displayName = 'proto.payments.api.v1.EventProductStockValue';
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
proto.payments.api.v1.EventProductStatusValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventProductStatusValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductStatusValue.displayName = 'proto.payments.api.v1.EventProductStatusValue';
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
proto.payments.api.v1.EventProductMetadataValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventProductMetadataValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventProductMetadataValue.displayName = 'proto.payments.api.v1.EventProductMetadataValue';
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
proto.payments.api.v1.EventTicketVoucherInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketVoucherInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketVoucherInfo.displayName = 'proto.payments.api.v1.EventTicketVoucherInfo';
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
proto.payments.api.v1.EventTicketVoucherUsagesValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketVoucherUsagesValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketVoucherUsagesValue.displayName = 'proto.payments.api.v1.EventTicketVoucherUsagesValue';
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
proto.payments.api.v1.EventTicketVoucherAmountValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketVoucherAmountValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketVoucherAmountValue.displayName = 'proto.payments.api.v1.EventTicketVoucherAmountValue';
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
proto.payments.api.v1.EventTicketVoucherStatusValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.EventTicketVoucherStatusValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.EventTicketVoucherStatusValue.displayName = 'proto.payments.api.v1.EventTicketVoucherStatusValue';
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
proto.payments.api.v1.PartnerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.PartnerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.PartnerInfo.displayName = 'proto.payments.api.v1.PartnerInfo';
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
proto.payments.api.v1.PartnerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.PartnerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.PartnerMetadata.displayName = 'proto.payments.api.v1.PartnerMetadata';
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
proto.payments.api.v1.PartnerStripeMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.PartnerStripeMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.PartnerStripeMetadata.displayName = 'proto.payments.api.v1.PartnerStripeMetadata';
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
proto.payments.api.v1.CustomerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerInfo.displayName = 'proto.payments.api.v1.CustomerInfo';
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
proto.payments.api.v1.CustomerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerMetadata.displayName = 'proto.payments.api.v1.CustomerMetadata';
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
proto.payments.api.v1.CustomerStripeMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerStripeMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerStripeMetadata.displayName = 'proto.payments.api.v1.CustomerStripeMetadata';
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
proto.payments.api.v1.CustomerOrderInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderInfo.displayName = 'proto.payments.api.v1.CustomerOrderInfo';
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
proto.payments.api.v1.CustomerOrderMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderMetadata.displayName = 'proto.payments.api.v1.CustomerOrderMetadata';
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
proto.payments.api.v1.CustomerOrderTicketMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.CustomerOrderTicketMetadata.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderTicketMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderTicketMetadata.displayName = 'proto.payments.api.v1.CustomerOrderTicketMetadata';
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
proto.payments.api.v1.CustomerOrderProductMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.payments.api.v1.CustomerOrderProductMetadata.repeatedFields_, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderProductMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderProductMetadata.displayName = 'proto.payments.api.v1.CustomerOrderProductMetadata';
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
proto.payments.api.v1.CustomerOrderAddressMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderAddressMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderAddressMetadata.displayName = 'proto.payments.api.v1.CustomerOrderAddressMetadata';
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
proto.payments.api.v1.CustomerOrderDeliveryMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderDeliveryMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderDeliveryMetadata.displayName = 'proto.payments.api.v1.CustomerOrderDeliveryMetadata';
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
proto.payments.api.v1.CustomerOrderStatusValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderStatusValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderStatusValue.displayName = 'proto.payments.api.v1.CustomerOrderStatusValue';
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
proto.payments.api.v1.CustomerOrderMetadataValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderMetadataValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderMetadataValue.displayName = 'proto.payments.api.v1.CustomerOrderMetadataValue';
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
proto.payments.api.v1.CustomerAddressInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressInfo.displayName = 'proto.payments.api.v1.CustomerAddressInfo';
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
proto.payments.api.v1.CustomerAddressFirstnameValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressFirstnameValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressFirstnameValue.displayName = 'proto.payments.api.v1.CustomerAddressFirstnameValue';
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
proto.payments.api.v1.CustomerAddressLastnameValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressLastnameValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressLastnameValue.displayName = 'proto.payments.api.v1.CustomerAddressLastnameValue';
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
proto.payments.api.v1.CustomerAddressAddressValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressAddressValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressAddressValue.displayName = 'proto.payments.api.v1.CustomerAddressAddressValue';
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
proto.payments.api.v1.CustomerAddressPostcodeValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressPostcodeValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressPostcodeValue.displayName = 'proto.payments.api.v1.CustomerAddressPostcodeValue';
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
proto.payments.api.v1.CustomerAddressCityValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressCityValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressCityValue.displayName = 'proto.payments.api.v1.CustomerAddressCityValue';
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
proto.payments.api.v1.CustomerAddressCountryValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressCountryValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressCountryValue.displayName = 'proto.payments.api.v1.CustomerAddressCountryValue';
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
proto.payments.api.v1.CustomerAddressPhoneNumberValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressPhoneNumberValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressPhoneNumberValue.displayName = 'proto.payments.api.v1.CustomerAddressPhoneNumberValue';
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
proto.payments.api.v1.CustomerAddressPrimaryValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressPrimaryValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressPrimaryValue.displayName = 'proto.payments.api.v1.CustomerAddressPrimaryValue';
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
proto.payments.api.v1.CustomerAddressExpiresValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerAddressExpiresValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerAddressExpiresValue.displayName = 'proto.payments.api.v1.CustomerAddressExpiresValue';
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
proto.payments.api.v1.CustomerPaymentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerPaymentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerPaymentInfo.displayName = 'proto.payments.api.v1.CustomerPaymentInfo';
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
proto.payments.api.v1.CustomerPaymentPrimaryValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerPaymentPrimaryValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerPaymentPrimaryValue.displayName = 'proto.payments.api.v1.CustomerPaymentPrimaryValue';
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
proto.payments.api.v1.CustomerPaymentExpiresValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerPaymentExpiresValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerPaymentExpiresValue.displayName = 'proto.payments.api.v1.CustomerPaymentExpiresValue';
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
proto.payments.api.v1.CustomerPaymentMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerPaymentMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerPaymentMetadata.displayName = 'proto.payments.api.v1.CustomerPaymentMetadata';
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
proto.payments.api.v1.CustomerPaymentCardMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerPaymentCardMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerPaymentCardMetadata.displayName = 'proto.payments.api.v1.CustomerPaymentCardMetadata';
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
proto.payments.api.v1.CustomerPaymentStripeMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerPaymentStripeMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerPaymentStripeMetadata.displayName = 'proto.payments.api.v1.CustomerPaymentStripeMetadata';
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
proto.payments.api.v1.CustomerTransactionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerTransactionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerTransactionInfo.displayName = 'proto.payments.api.v1.CustomerTransactionInfo';
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
proto.payments.api.v1.CustomerTransactionMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerTransactionMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerTransactionMetadata.displayName = 'proto.payments.api.v1.CustomerTransactionMetadata';
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
proto.payments.api.v1.CustomerTransactionStripeMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerTransactionStripeMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerTransactionStripeMetadata.displayName = 'proto.payments.api.v1.CustomerTransactionStripeMetadata';
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
proto.payments.api.v1.CustomerTransactionPaymentMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerTransactionPaymentMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerTransactionPaymentMetadata.displayName = 'proto.payments.api.v1.CustomerTransactionPaymentMetadata';
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
proto.payments.api.v1.CustomerTransactionStatusValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerTransactionStatusValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerTransactionStatusValue.displayName = 'proto.payments.api.v1.CustomerTransactionStatusValue';
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
proto.payments.api.v1.CustomerOrderRefundInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderRefundInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderRefundInfo.displayName = 'proto.payments.api.v1.CustomerOrderRefundInfo';
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
proto.payments.api.v1.CustomerOrderRefundMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderRefundMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderRefundMetadata.displayName = 'proto.payments.api.v1.CustomerOrderRefundMetadata';
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
proto.payments.api.v1.CustomerOrderRefundStripeMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderRefundStripeMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderRefundStripeMetadata.displayName = 'proto.payments.api.v1.CustomerOrderRefundStripeMetadata';
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
proto.payments.api.v1.CustomerOrderRefundStatusValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.payments.api.v1.CustomerOrderRefundStatusValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.payments.api.v1.CustomerOrderRefundStatusValue.displayName = 'proto.payments.api.v1.CustomerOrderRefundStatusValue';
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
proto.payments.api.v1.Price.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.Price.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.Price} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.Price.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.payments.api.v1.Price}
 */
proto.payments.api.v1.Price.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.Price;
  return proto.payments.api.v1.Price.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.Price} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.Price}
 */
proto.payments.api.v1.Price.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {!proto.payments.api.v1.Currency} */ (reader.readEnum());
      msg.setCurrency(value);
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
proto.payments.api.v1.Price.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.Price.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.Price} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.Price.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCurrency();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 amount = 1;
 * @return {number}
 */
proto.payments.api.v1.Price.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.Price} returns this
 */
proto.payments.api.v1.Price.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Currency currency = 2;
 * @return {!proto.payments.api.v1.Currency}
 */
proto.payments.api.v1.Price.prototype.getCurrency = function() {
  return /** @type {!proto.payments.api.v1.Currency} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.payments.api.v1.Currency} value
 * @return {!proto.payments.api.v1.Price} returns this
 */
proto.payments.api.v1.Price.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.payments.api.v1.CustomerOrderTicket.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderTicket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderTicket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderTicket.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.payments.api.v1.CustomerOrderTicket}
 */
proto.payments.api.v1.CustomerOrderTicket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderTicket;
  return proto.payments.api.v1.CustomerOrderTicket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderTicket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderTicket}
 */
proto.payments.api.v1.CustomerOrderTicket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketid(value);
      break;
    case 2:
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
proto.payments.api.v1.CustomerOrderTicket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderTicket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderTicket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderTicket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string ticketId = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderTicket.prototype.getTicketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderTicket} returns this
 */
proto.payments.api.v1.CustomerOrderTicket.prototype.setTicketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.payments.api.v1.CustomerOrderTicket.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerOrderTicket} returns this
 */
proto.payments.api.v1.CustomerOrderTicket.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.payments.api.v1.CustomerOrderProduct.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderProduct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderProduct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderProduct.toObject = function(includeInstance, msg) {
  var f, obj = {
    productid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.payments.api.v1.CustomerOrderProduct}
 */
proto.payments.api.v1.CustomerOrderProduct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderProduct;
  return proto.payments.api.v1.CustomerOrderProduct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderProduct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderProduct}
 */
proto.payments.api.v1.CustomerOrderProduct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductid(value);
      break;
    case 2:
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
proto.payments.api.v1.CustomerOrderProduct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderProduct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderProduct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderProduct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string productId = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderProduct.prototype.getProductid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderProduct} returns this
 */
proto.payments.api.v1.CustomerOrderProduct.prototype.setProductid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.payments.api.v1.CustomerOrderProduct.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerOrderProduct} returns this
 */
proto.payments.api.v1.CustomerOrderProduct.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderTicketDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderTicketDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderTicketDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ticket: (f = msg.getTicket()) && proto.payments.api.v1.EventTicketInfo.toObject(includeInstance, f),
    voucher: (f = msg.getVoucher()) && proto.payments.api.v1.EventTicketVoucherInfo.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerOrderTicketDetails}
 */
proto.payments.api.v1.CustomerOrderTicketDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderTicketDetails;
  return proto.payments.api.v1.CustomerOrderTicketDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderTicketDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderTicketDetails}
 */
proto.payments.api.v1.CustomerOrderTicketDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 2:
      var value = new proto.payments.api.v1.EventTicketInfo;
      reader.readMessage(value,proto.payments.api.v1.EventTicketInfo.deserializeBinaryFromReader);
      msg.setTicket(value);
      break;
    case 3:
      var value = new proto.payments.api.v1.EventTicketVoucherInfo;
      reader.readMessage(value,proto.payments.api.v1.EventTicketVoucherInfo.deserializeBinaryFromReader);
      msg.setVoucher(value);
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
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderTicketDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderTicketDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderTicketDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payments.api.v1.EventTicketInfo.serializeBinaryToWriter
    );
  }
  f = message.getVoucher();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.payments.api.v1.EventTicketVoucherInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 amount = 1;
 * @return {number}
 */
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerOrderTicketDetails} returns this
 */
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional EventTicketInfo ticket = 2;
 * @return {?proto.payments.api.v1.EventTicketInfo}
 */
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.getTicket = function() {
  return /** @type{?proto.payments.api.v1.EventTicketInfo} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventTicketInfo, 2));
};


/**
 * @param {?proto.payments.api.v1.EventTicketInfo|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderTicketDetails} returns this
*/
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderTicketDetails} returns this
 */
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.hasTicket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EventTicketVoucherInfo voucher = 3;
 * @return {?proto.payments.api.v1.EventTicketVoucherInfo}
 */
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.getVoucher = function() {
  return /** @type{?proto.payments.api.v1.EventTicketVoucherInfo} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventTicketVoucherInfo, 3));
};


/**
 * @param {?proto.payments.api.v1.EventTicketVoucherInfo|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderTicketDetails} returns this
*/
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.setVoucher = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderTicketDetails} returns this
 */
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.clearVoucher = function() {
  return this.setVoucher(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderTicketDetails.prototype.hasVoucher = function() {
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
proto.payments.api.v1.CustomerOrderProductDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderProductDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderProductDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderProductDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    product: (f = msg.getProduct()) && proto.payments.api.v1.EventProductInfo.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerOrderProductDetails}
 */
proto.payments.api.v1.CustomerOrderProductDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderProductDetails;
  return proto.payments.api.v1.CustomerOrderProductDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderProductDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderProductDetails}
 */
proto.payments.api.v1.CustomerOrderProductDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 2:
      var value = new proto.payments.api.v1.EventProductInfo;
      reader.readMessage(value,proto.payments.api.v1.EventProductInfo.deserializeBinaryFromReader);
      msg.setProduct(value);
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
proto.payments.api.v1.CustomerOrderProductDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderProductDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderProductDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderProductDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payments.api.v1.EventProductInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 amount = 1;
 * @return {number}
 */
proto.payments.api.v1.CustomerOrderProductDetails.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerOrderProductDetails} returns this
 */
proto.payments.api.v1.CustomerOrderProductDetails.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional EventProductInfo product = 2;
 * @return {?proto.payments.api.v1.EventProductInfo}
 */
proto.payments.api.v1.CustomerOrderProductDetails.prototype.getProduct = function() {
  return /** @type{?proto.payments.api.v1.EventProductInfo} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventProductInfo, 2));
};


/**
 * @param {?proto.payments.api.v1.EventProductInfo|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderProductDetails} returns this
*/
proto.payments.api.v1.CustomerOrderProductDetails.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderProductDetails} returns this
 */
proto.payments.api.v1.CustomerOrderProductDetails.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderProductDetails.prototype.hasProduct = function() {
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
proto.payments.api.v1.EventTicketInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partnerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    usages: jspb.Message.getFieldWithDefault(msg, 6, 0),
    localePrice: (f = msg.getLocalePrice()) && proto.payments.api.v1.Price.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.payments.api.v1.EventTicketMetadata.toObject(includeInstance, f),
    createdAt: jspb.Message.getFieldWithDefault(msg, 9, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.payments.api.v1.EventTicketInfo}
 */
proto.payments.api.v1.EventTicketInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketInfo;
  return proto.payments.api.v1.EventTicketInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketInfo}
 */
proto.payments.api.v1.EventTicketInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEventId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerId(value);
      break;
    case 4:
      var value = /** @type {!proto.payments.api.v1.EventTicketType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {!proto.payments.api.v1.EventTicketStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsages(value);
      break;
    case 7:
      var value = new proto.payments.api.v1.Price;
      reader.readMessage(value,proto.payments.api.v1.Price.deserializeBinaryFromReader);
      msg.setLocalePrice(value);
      break;
    case 8:
      var value = new proto.payments.api.v1.EventTicketMetadata;
      reader.readMessage(value,proto.payments.api.v1.EventTicketMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
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
proto.payments.api.v1.EventTicketInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartnerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getUsages();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getLocalePrice();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.payments.api.v1.Price.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.payments.api.v1.EventTicketMetadata.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string event_id = 2;
 * @return {string}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string partner_id = 3;
 * @return {string}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getPartnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.setPartnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional EventTicketType type = 4;
 * @return {!proto.payments.api.v1.EventTicketType}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getType = function() {
  return /** @type {!proto.payments.api.v1.EventTicketType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.payments.api.v1.EventTicketType} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional EventTicketStatus status = 5;
 * @return {!proto.payments.api.v1.EventTicketStatus}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.EventTicketStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.payments.api.v1.EventTicketStatus} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int64 usages = 6;
 * @return {number}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getUsages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.setUsages = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Price locale_price = 7;
 * @return {?proto.payments.api.v1.Price}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getLocalePrice = function() {
  return /** @type{?proto.payments.api.v1.Price} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.Price, 7));
};


/**
 * @param {?proto.payments.api.v1.Price|undefined} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
*/
proto.payments.api.v1.EventTicketInfo.prototype.setLocalePrice = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.clearLocalePrice = function() {
  return this.setLocalePrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventTicketInfo.prototype.hasLocalePrice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional EventTicketMetadata metadata = 8;
 * @return {?proto.payments.api.v1.EventTicketMetadata}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.EventTicketMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventTicketMetadata, 8));
};


/**
 * @param {?proto.payments.api.v1.EventTicketMetadata|undefined} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
*/
proto.payments.api.v1.EventTicketInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventTicketInfo.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 created_at = 9;
 * @return {number}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 updated_at = 10;
 * @return {number}
 */
proto.payments.api.v1.EventTicketInfo.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketInfo} returns this
 */
proto.payments.api.v1.EventTicketInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
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
proto.payments.api.v1.CreatesEventTicketVoucher.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CreatesEventTicketVoucher.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CreatesEventTicketVoucher} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreatesEventTicketVoucher.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    usages: jspb.Message.getFieldWithDefault(msg, 3, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.payments.api.v1.CreatesEventTicketVoucher}
 */
proto.payments.api.v1.CreatesEventTicketVoucher.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CreatesEventTicketVoucher;
  return proto.payments.api.v1.CreatesEventTicketVoucher.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CreatesEventTicketVoucher} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CreatesEventTicketVoucher}
 */
proto.payments.api.v1.CreatesEventTicketVoucher.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsages(value);
      break;
    case 4:
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
proto.payments.api.v1.CreatesEventTicketVoucher.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CreatesEventTicketVoucher.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CreatesEventTicketVoucher} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CreatesEventTicketVoucher.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsages();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string pid = 1;
 * @return {string}
 */
proto.payments.api.v1.CreatesEventTicketVoucher.prototype.getPid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CreatesEventTicketVoucher} returns this
 */
proto.payments.api.v1.CreatesEventTicketVoucher.prototype.setPid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 usages = 3;
 * @return {number}
 */
proto.payments.api.v1.CreatesEventTicketVoucher.prototype.getUsages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CreatesEventTicketVoucher} returns this
 */
proto.payments.api.v1.CreatesEventTicketVoucher.prototype.setUsages = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 amount = 4;
 * @return {number}
 */
proto.payments.api.v1.CreatesEventTicketVoucher.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CreatesEventTicketVoucher} returns this
 */
proto.payments.api.v1.CreatesEventTicketVoucher.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.payments.api.v1.EventTicketMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: (f = msg.getPrice()) && proto.payments.api.v1.EventTicketPriceMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.EventTicketMetadata}
 */
proto.payments.api.v1.EventTicketMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketMetadata;
  return proto.payments.api.v1.EventTicketMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketMetadata}
 */
proto.payments.api.v1.EventTicketMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.EventTicketPriceMetadata;
      reader.readMessage(value,proto.payments.api.v1.EventTicketPriceMetadata.deserializeBinaryFromReader);
      msg.setPrice(value);
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
proto.payments.api.v1.EventTicketMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.EventTicketPriceMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventTicketPriceMetadata price = 1;
 * @return {?proto.payments.api.v1.EventTicketPriceMetadata}
 */
proto.payments.api.v1.EventTicketMetadata.prototype.getPrice = function() {
  return /** @type{?proto.payments.api.v1.EventTicketPriceMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventTicketPriceMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.EventTicketPriceMetadata|undefined} value
 * @return {!proto.payments.api.v1.EventTicketMetadata} returns this
*/
proto.payments.api.v1.EventTicketMetadata.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventTicketMetadata} returns this
 */
proto.payments.api.v1.EventTicketMetadata.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventTicketMetadata.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.EventTicketPriceMetadata.repeatedFields_ = [1];



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
proto.payments.api.v1.EventTicketPriceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketPriceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketPriceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketPriceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.payments.api.v1.Price.toObject, includeInstance)
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
 * @return {!proto.payments.api.v1.EventTicketPriceMetadata}
 */
proto.payments.api.v1.EventTicketPriceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketPriceMetadata;
  return proto.payments.api.v1.EventTicketPriceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketPriceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketPriceMetadata}
 */
proto.payments.api.v1.EventTicketPriceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.Price;
      reader.readMessage(value,proto.payments.api.v1.Price.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.payments.api.v1.EventTicketPriceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketPriceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketPriceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketPriceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payments.api.v1.Price.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Price items = 1;
 * @return {!Array<!proto.payments.api.v1.Price>}
 */
proto.payments.api.v1.EventTicketPriceMetadata.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.Price>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payments.api.v1.Price, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.Price>} value
 * @return {!proto.payments.api.v1.EventTicketPriceMetadata} returns this
*/
proto.payments.api.v1.EventTicketPriceMetadata.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.Price=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.Price}
 */
proto.payments.api.v1.EventTicketPriceMetadata.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.Price, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.EventTicketPriceMetadata} returns this
 */
proto.payments.api.v1.EventTicketPriceMetadata.prototype.clearItemsList = function() {
  return this.setItemsList([]);
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
proto.payments.api.v1.EventTicketUsagesValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketUsagesValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketUsagesValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketUsagesValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.EventTicketUsagesValue}
 */
proto.payments.api.v1.EventTicketUsagesValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketUsagesValue;
  return proto.payments.api.v1.EventTicketUsagesValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketUsagesValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketUsagesValue}
 */
proto.payments.api.v1.EventTicketUsagesValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
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
proto.payments.api.v1.EventTicketUsagesValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketUsagesValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketUsagesValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketUsagesValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.payments.api.v1.EventTicketUsagesValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketUsagesValue} returns this
 */
proto.payments.api.v1.EventTicketUsagesValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.payments.api.v1.EventTicketStatusValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketStatusValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketStatusValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketStatusValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.EventTicketStatusValue}
 */
proto.payments.api.v1.EventTicketStatusValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketStatusValue;
  return proto.payments.api.v1.EventTicketStatusValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketStatusValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketStatusValue}
 */
proto.payments.api.v1.EventTicketStatusValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.payments.api.v1.EventTicketStatus} */ (reader.readEnum());
      msg.setValue(value);
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
proto.payments.api.v1.EventTicketStatusValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketStatusValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketStatusValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketStatusValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional EventTicketStatus value = 1;
 * @return {!proto.payments.api.v1.EventTicketStatus}
 */
proto.payments.api.v1.EventTicketStatusValue.prototype.getValue = function() {
  return /** @type {!proto.payments.api.v1.EventTicketStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.payments.api.v1.EventTicketStatus} value
 * @return {!proto.payments.api.v1.EventTicketStatusValue} returns this
 */
proto.payments.api.v1.EventTicketStatusValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.payments.api.v1.EventTicketMetadataValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketMetadataValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketMetadataValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketMetadataValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && proto.payments.api.v1.EventTicketMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.EventTicketMetadataValue}
 */
proto.payments.api.v1.EventTicketMetadataValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketMetadataValue;
  return proto.payments.api.v1.EventTicketMetadataValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketMetadataValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketMetadataValue}
 */
proto.payments.api.v1.EventTicketMetadataValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.EventTicketMetadata;
      reader.readMessage(value,proto.payments.api.v1.EventTicketMetadata.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.payments.api.v1.EventTicketMetadataValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketMetadataValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketMetadataValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketMetadataValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.EventTicketMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventTicketMetadata value = 1;
 * @return {?proto.payments.api.v1.EventTicketMetadata}
 */
proto.payments.api.v1.EventTicketMetadataValue.prototype.getValue = function() {
  return /** @type{?proto.payments.api.v1.EventTicketMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventTicketMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.EventTicketMetadata|undefined} value
 * @return {!proto.payments.api.v1.EventTicketMetadataValue} returns this
*/
proto.payments.api.v1.EventTicketMetadataValue.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventTicketMetadataValue} returns this
 */
proto.payments.api.v1.EventTicketMetadataValue.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventTicketMetadataValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.EventProductInfo.repeatedFields_ = [8];



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
proto.payments.api.v1.EventProductInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partnerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    stock: jspb.Message.getFieldWithDefault(msg, 7, 0),
    imageUrlsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    localePrice: (f = msg.getLocalePrice()) && proto.payments.api.v1.Price.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 10, 0),
    metadata: (f = msg.getMetadata()) && proto.payments.api.v1.EventProductMetadata.toObject(includeInstance, f),
    createdAt: jspb.Message.getFieldWithDefault(msg, 12, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.payments.api.v1.EventProductInfo}
 */
proto.payments.api.v1.EventProductInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductInfo;
  return proto.payments.api.v1.EventProductInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductInfo}
 */
proto.payments.api.v1.EventProductInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEventId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartnerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStock(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addImageUrls(value);
      break;
    case 9:
      var value = new proto.payments.api.v1.Price;
      reader.readMessage(value,proto.payments.api.v1.Price.deserializeBinaryFromReader);
      msg.setLocalePrice(value);
      break;
    case 10:
      var value = /** @type {!proto.payments.api.v1.EventProductStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 11:
      var value = new proto.payments.api.v1.EventProductMetadata;
      reader.readMessage(value,proto.payments.api.v1.EventProductMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
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
proto.payments.api.v1.EventProductInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartnerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStock();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getImageUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getLocalePrice();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.payments.api.v1.Price.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.payments.api.v1.EventProductMetadata.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.EventProductInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string event_id = 2;
 * @return {string}
 */
proto.payments.api.v1.EventProductInfo.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string partner_id = 3;
 * @return {string}
 */
proto.payments.api.v1.EventProductInfo.prototype.getPartnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setPartnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.payments.api.v1.EventProductInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string kind = 5;
 * @return {string}
 */
proto.payments.api.v1.EventProductInfo.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.payments.api.v1.EventProductInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 stock = 7;
 * @return {number}
 */
proto.payments.api.v1.EventProductInfo.prototype.getStock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setStock = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated string image_urls = 8;
 * @return {!Array<string>}
 */
proto.payments.api.v1.EventProductInfo.prototype.getImageUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setImageUrlsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.addImageUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.clearImageUrlsList = function() {
  return this.setImageUrlsList([]);
};


/**
 * optional Price locale_price = 9;
 * @return {?proto.payments.api.v1.Price}
 */
proto.payments.api.v1.EventProductInfo.prototype.getLocalePrice = function() {
  return /** @type{?proto.payments.api.v1.Price} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.Price, 9));
};


/**
 * @param {?proto.payments.api.v1.Price|undefined} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
*/
proto.payments.api.v1.EventProductInfo.prototype.setLocalePrice = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.clearLocalePrice = function() {
  return this.setLocalePrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventProductInfo.prototype.hasLocalePrice = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional EventProductStatus status = 10;
 * @return {!proto.payments.api.v1.EventProductStatus}
 */
proto.payments.api.v1.EventProductInfo.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.EventProductStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.payments.api.v1.EventProductStatus} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional EventProductMetadata metadata = 11;
 * @return {?proto.payments.api.v1.EventProductMetadata}
 */
proto.payments.api.v1.EventProductInfo.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.EventProductMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventProductMetadata, 11));
};


/**
 * @param {?proto.payments.api.v1.EventProductMetadata|undefined} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
*/
proto.payments.api.v1.EventProductInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventProductInfo.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int64 created_at = 12;
 * @return {number}
 */
proto.payments.api.v1.EventProductInfo.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 updated_at = 13;
 * @return {number}
 */
proto.payments.api.v1.EventProductInfo.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventProductInfo} returns this
 */
proto.payments.api.v1.EventProductInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
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
proto.payments.api.v1.EventProductMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: (f = msg.getPrice()) && proto.payments.api.v1.EventProductPriceMetadata.toObject(includeInstance, f),
    details: (f = msg.getDetails()) && proto.payments.api.v1.EventProductDetailsMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.EventProductMetadata}
 */
proto.payments.api.v1.EventProductMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductMetadata;
  return proto.payments.api.v1.EventProductMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductMetadata}
 */
proto.payments.api.v1.EventProductMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.EventProductPriceMetadata;
      reader.readMessage(value,proto.payments.api.v1.EventProductPriceMetadata.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 2:
      var value = new proto.payments.api.v1.EventProductDetailsMetadata;
      reader.readMessage(value,proto.payments.api.v1.EventProductDetailsMetadata.deserializeBinaryFromReader);
      msg.setDetails(value);
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
proto.payments.api.v1.EventProductMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.EventProductPriceMetadata.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payments.api.v1.EventProductDetailsMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventProductPriceMetadata price = 1;
 * @return {?proto.payments.api.v1.EventProductPriceMetadata}
 */
proto.payments.api.v1.EventProductMetadata.prototype.getPrice = function() {
  return /** @type{?proto.payments.api.v1.EventProductPriceMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventProductPriceMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.EventProductPriceMetadata|undefined} value
 * @return {!proto.payments.api.v1.EventProductMetadata} returns this
*/
proto.payments.api.v1.EventProductMetadata.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventProductMetadata} returns this
 */
proto.payments.api.v1.EventProductMetadata.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventProductMetadata.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EventProductDetailsMetadata details = 2;
 * @return {?proto.payments.api.v1.EventProductDetailsMetadata}
 */
proto.payments.api.v1.EventProductMetadata.prototype.getDetails = function() {
  return /** @type{?proto.payments.api.v1.EventProductDetailsMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventProductDetailsMetadata, 2));
};


/**
 * @param {?proto.payments.api.v1.EventProductDetailsMetadata|undefined} value
 * @return {!proto.payments.api.v1.EventProductMetadata} returns this
*/
proto.payments.api.v1.EventProductMetadata.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventProductMetadata} returns this
 */
proto.payments.api.v1.EventProductMetadata.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventProductMetadata.prototype.hasDetails = function() {
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
proto.payments.api.v1.EventProductDetailsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductDetailsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductDetailsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductDetailsMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    size: jspb.Message.getFieldWithDefault(msg, 1, ""),
    color: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.payments.api.v1.EventProductDetailsMetadata}
 */
proto.payments.api.v1.EventProductDetailsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductDetailsMetadata;
  return proto.payments.api.v1.EventProductDetailsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductDetailsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductDetailsMetadata}
 */
proto.payments.api.v1.EventProductDetailsMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
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
proto.payments.api.v1.EventProductDetailsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductDetailsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductDetailsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductDetailsMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string size = 1;
 * @return {string}
 */
proto.payments.api.v1.EventProductDetailsMetadata.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductDetailsMetadata} returns this
 */
proto.payments.api.v1.EventProductDetailsMetadata.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string color = 2;
 * @return {string}
 */
proto.payments.api.v1.EventProductDetailsMetadata.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductDetailsMetadata} returns this
 */
proto.payments.api.v1.EventProductDetailsMetadata.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.EventProductPriceMetadata.repeatedFields_ = [1];



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
proto.payments.api.v1.EventProductPriceMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductPriceMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductPriceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductPriceMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.payments.api.v1.Price.toObject, includeInstance)
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
 * @return {!proto.payments.api.v1.EventProductPriceMetadata}
 */
proto.payments.api.v1.EventProductPriceMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductPriceMetadata;
  return proto.payments.api.v1.EventProductPriceMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductPriceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductPriceMetadata}
 */
proto.payments.api.v1.EventProductPriceMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.Price;
      reader.readMessage(value,proto.payments.api.v1.Price.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.payments.api.v1.EventProductPriceMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductPriceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductPriceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductPriceMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payments.api.v1.Price.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Price items = 1;
 * @return {!Array<!proto.payments.api.v1.Price>}
 */
proto.payments.api.v1.EventProductPriceMetadata.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.Price>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payments.api.v1.Price, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.Price>} value
 * @return {!proto.payments.api.v1.EventProductPriceMetadata} returns this
*/
proto.payments.api.v1.EventProductPriceMetadata.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.Price=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.Price}
 */
proto.payments.api.v1.EventProductPriceMetadata.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.Price, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.EventProductPriceMetadata} returns this
 */
proto.payments.api.v1.EventProductPriceMetadata.prototype.clearItemsList = function() {
  return this.setItemsList([]);
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
proto.payments.api.v1.EventProductKindValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductKindValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductKindValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductKindValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.EventProductKindValue}
 */
proto.payments.api.v1.EventProductKindValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductKindValue;
  return proto.payments.api.v1.EventProductKindValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductKindValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductKindValue}
 */
proto.payments.api.v1.EventProductKindValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.EventProductKindValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductKindValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductKindValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductKindValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.EventProductKindValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductKindValue} returns this
 */
proto.payments.api.v1.EventProductKindValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.EventProductNameValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductNameValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductNameValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductNameValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.EventProductNameValue}
 */
proto.payments.api.v1.EventProductNameValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductNameValue;
  return proto.payments.api.v1.EventProductNameValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductNameValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductNameValue}
 */
proto.payments.api.v1.EventProductNameValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.EventProductNameValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductNameValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductNameValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductNameValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.EventProductNameValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductNameValue} returns this
 */
proto.payments.api.v1.EventProductNameValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.EventProductDescriptionValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductDescriptionValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductDescriptionValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductDescriptionValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.EventProductDescriptionValue}
 */
proto.payments.api.v1.EventProductDescriptionValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductDescriptionValue;
  return proto.payments.api.v1.EventProductDescriptionValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductDescriptionValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductDescriptionValue}
 */
proto.payments.api.v1.EventProductDescriptionValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.EventProductDescriptionValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductDescriptionValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductDescriptionValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductDescriptionValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.EventProductDescriptionValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventProductDescriptionValue} returns this
 */
proto.payments.api.v1.EventProductDescriptionValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.EventProductStockValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductStockValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductStockValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductStockValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.EventProductStockValue}
 */
proto.payments.api.v1.EventProductStockValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductStockValue;
  return proto.payments.api.v1.EventProductStockValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductStockValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductStockValue}
 */
proto.payments.api.v1.EventProductStockValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
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
proto.payments.api.v1.EventProductStockValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductStockValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductStockValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductStockValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.payments.api.v1.EventProductStockValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventProductStockValue} returns this
 */
proto.payments.api.v1.EventProductStockValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.payments.api.v1.EventProductStatusValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductStatusValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductStatusValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductStatusValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.EventProductStatusValue}
 */
proto.payments.api.v1.EventProductStatusValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductStatusValue;
  return proto.payments.api.v1.EventProductStatusValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductStatusValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductStatusValue}
 */
proto.payments.api.v1.EventProductStatusValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.payments.api.v1.EventProductStatus} */ (reader.readEnum());
      msg.setValue(value);
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
proto.payments.api.v1.EventProductStatusValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductStatusValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductStatusValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductStatusValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional EventProductStatus value = 1;
 * @return {!proto.payments.api.v1.EventProductStatus}
 */
proto.payments.api.v1.EventProductStatusValue.prototype.getValue = function() {
  return /** @type {!proto.payments.api.v1.EventProductStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.payments.api.v1.EventProductStatus} value
 * @return {!proto.payments.api.v1.EventProductStatusValue} returns this
 */
proto.payments.api.v1.EventProductStatusValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.payments.api.v1.EventProductMetadataValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventProductMetadataValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventProductMetadataValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductMetadataValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && proto.payments.api.v1.EventProductMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.EventProductMetadataValue}
 */
proto.payments.api.v1.EventProductMetadataValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventProductMetadataValue;
  return proto.payments.api.v1.EventProductMetadataValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventProductMetadataValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventProductMetadataValue}
 */
proto.payments.api.v1.EventProductMetadataValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.EventProductMetadata;
      reader.readMessage(value,proto.payments.api.v1.EventProductMetadata.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.payments.api.v1.EventProductMetadataValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventProductMetadataValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventProductMetadataValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventProductMetadataValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.EventProductMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventProductMetadata value = 1;
 * @return {?proto.payments.api.v1.EventProductMetadata}
 */
proto.payments.api.v1.EventProductMetadataValue.prototype.getValue = function() {
  return /** @type{?proto.payments.api.v1.EventProductMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.EventProductMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.EventProductMetadata|undefined} value
 * @return {!proto.payments.api.v1.EventProductMetadataValue} returns this
*/
proto.payments.api.v1.EventProductMetadataValue.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.EventProductMetadataValue} returns this
 */
proto.payments.api.v1.EventProductMetadataValue.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.EventProductMetadataValue.prototype.hasValue = function() {
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
proto.payments.api.v1.EventTicketVoucherInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketVoucherInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketVoucherInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketVoucherInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ticketId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    usages: jspb.Message.getFieldWithDefault(msg, 5, 0),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 7, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo}
 */
proto.payments.api.v1.EventTicketVoucherInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketVoucherInfo;
  return proto.payments.api.v1.EventTicketVoucherInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketVoucherInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo}
 */
proto.payments.api.v1.EventTicketVoucherInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicketId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsages(value);
      break;
    case 6:
      var value = /** @type {!proto.payments.api.v1.EventTicketVoucherStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
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
proto.payments.api.v1.EventTicketVoucherInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketVoucherInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketVoucherInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketVoucherInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTicketId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUsages();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo} returns this
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pid = 2;
 * @return {string}
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.getPid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo} returns this
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.setPid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ticket_id = 3;
 * @return {string}
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.getTicketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo} returns this
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.setTicketId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 amount = 4;
 * @return {number}
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo} returns this
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 usages = 5;
 * @return {number}
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.getUsages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo} returns this
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.setUsages = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional EventTicketVoucherStatus status = 6;
 * @return {!proto.payments.api.v1.EventTicketVoucherStatus}
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.EventTicketVoucherStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.payments.api.v1.EventTicketVoucherStatus} value
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo} returns this
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int64 created_at = 7;
 * @return {number}
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo} returns this
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 updated_at = 8;
 * @return {number}
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketVoucherInfo} returns this
 */
proto.payments.api.v1.EventTicketVoucherInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
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
proto.payments.api.v1.EventTicketVoucherUsagesValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketVoucherUsagesValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketVoucherUsagesValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketVoucherUsagesValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.EventTicketVoucherUsagesValue}
 */
proto.payments.api.v1.EventTicketVoucherUsagesValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketVoucherUsagesValue;
  return proto.payments.api.v1.EventTicketVoucherUsagesValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketVoucherUsagesValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketVoucherUsagesValue}
 */
proto.payments.api.v1.EventTicketVoucherUsagesValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
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
proto.payments.api.v1.EventTicketVoucherUsagesValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketVoucherUsagesValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketVoucherUsagesValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketVoucherUsagesValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.payments.api.v1.EventTicketVoucherUsagesValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketVoucherUsagesValue} returns this
 */
proto.payments.api.v1.EventTicketVoucherUsagesValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.payments.api.v1.EventTicketVoucherAmountValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketVoucherAmountValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketVoucherAmountValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketVoucherAmountValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.EventTicketVoucherAmountValue}
 */
proto.payments.api.v1.EventTicketVoucherAmountValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketVoucherAmountValue;
  return proto.payments.api.v1.EventTicketVoucherAmountValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketVoucherAmountValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketVoucherAmountValue}
 */
proto.payments.api.v1.EventTicketVoucherAmountValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
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
proto.payments.api.v1.EventTicketVoucherAmountValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketVoucherAmountValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketVoucherAmountValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketVoucherAmountValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.payments.api.v1.EventTicketVoucherAmountValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.EventTicketVoucherAmountValue} returns this
 */
proto.payments.api.v1.EventTicketVoucherAmountValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.payments.api.v1.EventTicketVoucherStatusValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.EventTicketVoucherStatusValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.EventTicketVoucherStatusValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketVoucherStatusValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.EventTicketVoucherStatusValue}
 */
proto.payments.api.v1.EventTicketVoucherStatusValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.EventTicketVoucherStatusValue;
  return proto.payments.api.v1.EventTicketVoucherStatusValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.EventTicketVoucherStatusValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.EventTicketVoucherStatusValue}
 */
proto.payments.api.v1.EventTicketVoucherStatusValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.payments.api.v1.EventTicketVoucherStatus} */ (reader.readEnum());
      msg.setValue(value);
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
proto.payments.api.v1.EventTicketVoucherStatusValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.EventTicketVoucherStatusValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.EventTicketVoucherStatusValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.EventTicketVoucherStatusValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional EventTicketVoucherStatus value = 1;
 * @return {!proto.payments.api.v1.EventTicketVoucherStatus}
 */
proto.payments.api.v1.EventTicketVoucherStatusValue.prototype.getValue = function() {
  return /** @type {!proto.payments.api.v1.EventTicketVoucherStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.payments.api.v1.EventTicketVoucherStatus} value
 * @return {!proto.payments.api.v1.EventTicketVoucherStatusValue} returns this
 */
proto.payments.api.v1.EventTicketVoucherStatusValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.payments.api.v1.PartnerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.PartnerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.PartnerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PartnerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    country: jspb.Message.getFieldWithDefault(msg, 4, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 5, 0),
    metadata: (f = msg.getMetadata()) && proto.payments.api.v1.PartnerMetadata.toObject(includeInstance, f),
    createdAt: jspb.Message.getFieldWithDefault(msg, 7, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.payments.api.v1.PartnerInfo}
 */
proto.payments.api.v1.PartnerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.PartnerInfo;
  return proto.payments.api.v1.PartnerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.PartnerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.PartnerInfo}
 */
proto.payments.api.v1.PartnerInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {!proto.payments.api.v1.PartnerStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 5:
      var value = /** @type {!proto.payments.api.v1.Currency} */ (reader.readEnum());
      msg.setCurrency(value);
      break;
    case 6:
      var value = new proto.payments.api.v1.PartnerMetadata;
      reader.readMessage(value,proto.payments.api.v1.PartnerMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
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
proto.payments.api.v1.PartnerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.PartnerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.PartnerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PartnerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
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
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCurrency();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.payments.api.v1.PartnerMetadata.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.PartnerInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
 */
proto.payments.api.v1.PartnerInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.payments.api.v1.PartnerInfo.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
 */
proto.payments.api.v1.PartnerInfo.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PartnerStatus status = 3;
 * @return {!proto.payments.api.v1.PartnerStatus}
 */
proto.payments.api.v1.PartnerInfo.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.PartnerStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.payments.api.v1.PartnerStatus} value
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
 */
proto.payments.api.v1.PartnerInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string country = 4;
 * @return {string}
 */
proto.payments.api.v1.PartnerInfo.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
 */
proto.payments.api.v1.PartnerInfo.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Currency currency = 5;
 * @return {!proto.payments.api.v1.Currency}
 */
proto.payments.api.v1.PartnerInfo.prototype.getCurrency = function() {
  return /** @type {!proto.payments.api.v1.Currency} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.payments.api.v1.Currency} value
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
 */
proto.payments.api.v1.PartnerInfo.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional PartnerMetadata metadata = 6;
 * @return {?proto.payments.api.v1.PartnerMetadata}
 */
proto.payments.api.v1.PartnerInfo.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.PartnerMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.PartnerMetadata, 6));
};


/**
 * @param {?proto.payments.api.v1.PartnerMetadata|undefined} value
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
*/
proto.payments.api.v1.PartnerInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
 */
proto.payments.api.v1.PartnerInfo.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.PartnerInfo.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 created_at = 7;
 * @return {number}
 */
proto.payments.api.v1.PartnerInfo.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
 */
proto.payments.api.v1.PartnerInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 updated_at = 8;
 * @return {number}
 */
proto.payments.api.v1.PartnerInfo.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.PartnerInfo} returns this
 */
proto.payments.api.v1.PartnerInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
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
proto.payments.api.v1.PartnerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.PartnerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.PartnerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PartnerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    stripe: (f = msg.getStripe()) && proto.payments.api.v1.PartnerStripeMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.PartnerMetadata}
 */
proto.payments.api.v1.PartnerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.PartnerMetadata;
  return proto.payments.api.v1.PartnerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.PartnerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.PartnerMetadata}
 */
proto.payments.api.v1.PartnerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.PartnerStripeMetadata;
      reader.readMessage(value,proto.payments.api.v1.PartnerStripeMetadata.deserializeBinaryFromReader);
      msg.setStripe(value);
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
proto.payments.api.v1.PartnerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.PartnerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.PartnerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PartnerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStripe();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.PartnerStripeMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional PartnerStripeMetadata stripe = 1;
 * @return {?proto.payments.api.v1.PartnerStripeMetadata}
 */
proto.payments.api.v1.PartnerMetadata.prototype.getStripe = function() {
  return /** @type{?proto.payments.api.v1.PartnerStripeMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.PartnerStripeMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.PartnerStripeMetadata|undefined} value
 * @return {!proto.payments.api.v1.PartnerMetadata} returns this
*/
proto.payments.api.v1.PartnerMetadata.prototype.setStripe = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.PartnerMetadata} returns this
 */
proto.payments.api.v1.PartnerMetadata.prototype.clearStripe = function() {
  return this.setStripe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.PartnerMetadata.prototype.hasStripe = function() {
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
proto.payments.api.v1.PartnerStripeMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.PartnerStripeMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.PartnerStripeMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PartnerStripeMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payments.api.v1.PartnerStripeMetadata}
 */
proto.payments.api.v1.PartnerStripeMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.PartnerStripeMetadata;
  return proto.payments.api.v1.PartnerStripeMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.PartnerStripeMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.PartnerStripeMetadata}
 */
proto.payments.api.v1.PartnerStripeMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payments.api.v1.PartnerStripeMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.PartnerStripeMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.PartnerStripeMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.PartnerStripeMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.payments.api.v1.PartnerStripeMetadata.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.PartnerStripeMetadata} returns this
 */
proto.payments.api.v1.PartnerStripeMetadata.prototype.setId = function(value) {
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
proto.payments.api.v1.CustomerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    metadata: (f = msg.getMetadata()) && proto.payments.api.v1.CustomerMetadata.toObject(includeInstance, f),
    createdAt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.payments.api.v1.CustomerInfo}
 */
proto.payments.api.v1.CustomerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerInfo;
  return proto.payments.api.v1.CustomerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerInfo}
 */
proto.payments.api.v1.CustomerInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 3:
      var value = new proto.payments.api.v1.CustomerMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
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
proto.payments.api.v1.CustomerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.payments.api.v1.CustomerMetadata.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerInfo} returns this
 */
proto.payments.api.v1.CustomerInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.payments.api.v1.CustomerInfo.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerInfo} returns this
 */
proto.payments.api.v1.CustomerInfo.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CustomerMetadata metadata = 3;
 * @return {?proto.payments.api.v1.CustomerMetadata}
 */
proto.payments.api.v1.CustomerInfo.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.CustomerMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerMetadata, 3));
};


/**
 * @param {?proto.payments.api.v1.CustomerMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerInfo} returns this
*/
proto.payments.api.v1.CustomerInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerInfo} returns this
 */
proto.payments.api.v1.CustomerInfo.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerInfo.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 created_at = 4;
 * @return {number}
 */
proto.payments.api.v1.CustomerInfo.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerInfo} returns this
 */
proto.payments.api.v1.CustomerInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 updated_at = 5;
 * @return {number}
 */
proto.payments.api.v1.CustomerInfo.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerInfo} returns this
 */
proto.payments.api.v1.CustomerInfo.prototype.setUpdatedAt = function(value) {
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
proto.payments.api.v1.CustomerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    stripe: (f = msg.getStripe()) && proto.payments.api.v1.CustomerStripeMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerMetadata}
 */
proto.payments.api.v1.CustomerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerMetadata;
  return proto.payments.api.v1.CustomerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerMetadata}
 */
proto.payments.api.v1.CustomerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerStripeMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerStripeMetadata.deserializeBinaryFromReader);
      msg.setStripe(value);
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
proto.payments.api.v1.CustomerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStripe();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.CustomerStripeMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerStripeMetadata stripe = 1;
 * @return {?proto.payments.api.v1.CustomerStripeMetadata}
 */
proto.payments.api.v1.CustomerMetadata.prototype.getStripe = function() {
  return /** @type{?proto.payments.api.v1.CustomerStripeMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerStripeMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerStripeMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerMetadata} returns this
*/
proto.payments.api.v1.CustomerMetadata.prototype.setStripe = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerMetadata} returns this
 */
proto.payments.api.v1.CustomerMetadata.prototype.clearStripe = function() {
  return this.setStripe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerMetadata.prototype.hasStripe = function() {
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
proto.payments.api.v1.CustomerStripeMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerStripeMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerStripeMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerStripeMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payments.api.v1.CustomerStripeMetadata}
 */
proto.payments.api.v1.CustomerStripeMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerStripeMetadata;
  return proto.payments.api.v1.CustomerStripeMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerStripeMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerStripeMetadata}
 */
proto.payments.api.v1.CustomerStripeMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payments.api.v1.CustomerStripeMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerStripeMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerStripeMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerStripeMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.payments.api.v1.CustomerStripeMetadata.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerStripeMetadata} returns this
 */
proto.payments.api.v1.CustomerStripeMetadata.prototype.setId = function(value) {
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
proto.payments.api.v1.CustomerOrderInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partnerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 8, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 9, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 10, 0),
    metadata: (f = msg.getMetadata()) && proto.payments.api.v1.CustomerOrderMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.CustomerOrderInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderInfo;
  return proto.payments.api.v1.CustomerOrderInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderInfo}
 */
proto.payments.api.v1.CustomerOrderInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPartnerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 5:
      var value = /** @type {!proto.payments.api.v1.CustomerOrderType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {!proto.payments.api.v1.CustomerOrderStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {!proto.payments.api.v1.Currency} */ (reader.readEnum());
      msg.setCurrency(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    case 11:
      var value = new proto.payments.api.v1.CustomerOrderMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderMetadata.deserializeBinaryFromReader);
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
proto.payments.api.v1.CustomerOrderInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartnerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getCurrency();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.payments.api.v1.CustomerOrderMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partner_id = 2;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getPartnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setPartnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customer_id = 3;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transaction_id = 4;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional CustomerOrderType type = 5;
 * @return {!proto.payments.api.v1.CustomerOrderType}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getType = function() {
  return /** @type {!proto.payments.api.v1.CustomerOrderType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderType} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int64 amount = 6;
 * @return {number}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional CustomerOrderStatus status = 7;
 * @return {!proto.payments.api.v1.CustomerOrderStatus}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.CustomerOrderStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderStatus} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional Currency currency = 8;
 * @return {!proto.payments.api.v1.Currency}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getCurrency = function() {
  return /** @type {!proto.payments.api.v1.Currency} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.payments.api.v1.Currency} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional int64 created_at = 9;
 * @return {number}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 updated_at = 10;
 * @return {number}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional CustomerOrderMetadata metadata = 11;
 * @return {?proto.payments.api.v1.CustomerOrderMetadata}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerOrderMetadata, 11));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
*/
proto.payments.api.v1.CustomerOrderInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderInfo} returns this
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderInfo.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.payments.api.v1.CustomerOrderMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: (f = msg.getTicket()) && proto.payments.api.v1.CustomerOrderTicketMetadata.toObject(includeInstance, f),
    product: (f = msg.getProduct()) && proto.payments.api.v1.CustomerOrderProductMetadata.toObject(includeInstance, f),
    address: (f = msg.getAddress()) && proto.payments.api.v1.CustomerOrderAddressMetadata.toObject(includeInstance, f),
    delivery: (f = msg.getDelivery()) && proto.payments.api.v1.CustomerOrderDeliveryMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerOrderMetadata}
 */
proto.payments.api.v1.CustomerOrderMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderMetadata;
  return proto.payments.api.v1.CustomerOrderMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderMetadata}
 */
proto.payments.api.v1.CustomerOrderMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerOrderTicketMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderTicketMetadata.deserializeBinaryFromReader);
      msg.setTicket(value);
      break;
    case 2:
      var value = new proto.payments.api.v1.CustomerOrderProductMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderProductMetadata.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 3:
      var value = new proto.payments.api.v1.CustomerOrderAddressMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderAddressMetadata.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 4:
      var value = new proto.payments.api.v1.CustomerOrderDeliveryMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderDeliveryMetadata.deserializeBinaryFromReader);
      msg.setDelivery(value);
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
proto.payments.api.v1.CustomerOrderMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.CustomerOrderTicketMetadata.serializeBinaryToWriter
    );
  }
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payments.api.v1.CustomerOrderProductMetadata.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.payments.api.v1.CustomerOrderAddressMetadata.serializeBinaryToWriter
    );
  }
  f = message.getDelivery();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.payments.api.v1.CustomerOrderDeliveryMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerOrderTicketMetadata ticket = 1;
 * @return {?proto.payments.api.v1.CustomerOrderTicketMetadata}
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.getTicket = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderTicketMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerOrderTicketMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderTicketMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderMetadata} returns this
*/
proto.payments.api.v1.CustomerOrderMetadata.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.hasTicket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerOrderProductMetadata product = 2;
 * @return {?proto.payments.api.v1.CustomerOrderProductMetadata}
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.getProduct = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderProductMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerOrderProductMetadata, 2));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderProductMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderMetadata} returns this
*/
proto.payments.api.v1.CustomerOrderMetadata.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerOrderAddressMetadata address = 3;
 * @return {?proto.payments.api.v1.CustomerOrderAddressMetadata}
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.getAddress = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderAddressMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerOrderAddressMetadata, 3));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderAddressMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderMetadata} returns this
*/
proto.payments.api.v1.CustomerOrderMetadata.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomerOrderDeliveryMetadata delivery = 4;
 * @return {?proto.payments.api.v1.CustomerOrderDeliveryMetadata}
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.getDelivery = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderDeliveryMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerOrderDeliveryMetadata, 4));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderDeliveryMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderMetadata} returns this
*/
proto.payments.api.v1.CustomerOrderMetadata.prototype.setDelivery = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.clearDelivery = function() {
  return this.setDelivery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderMetadata.prototype.hasDelivery = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.CustomerOrderTicketMetadata.repeatedFields_ = [1];



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
proto.payments.api.v1.CustomerOrderTicketMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderTicketMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderTicketMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderTicketMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.payments.api.v1.CustomerOrderTicketDetails.toObject, includeInstance)
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
 * @return {!proto.payments.api.v1.CustomerOrderTicketMetadata}
 */
proto.payments.api.v1.CustomerOrderTicketMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderTicketMetadata;
  return proto.payments.api.v1.CustomerOrderTicketMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderTicketMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderTicketMetadata}
 */
proto.payments.api.v1.CustomerOrderTicketMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerOrderTicketDetails;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderTicketDetails.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.payments.api.v1.CustomerOrderTicketMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderTicketMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderTicketMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderTicketMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payments.api.v1.CustomerOrderTicketDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerOrderTicketDetails items = 1;
 * @return {!Array<!proto.payments.api.v1.CustomerOrderTicketDetails>}
 */
proto.payments.api.v1.CustomerOrderTicketMetadata.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerOrderTicketDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payments.api.v1.CustomerOrderTicketDetails, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerOrderTicketDetails>} value
 * @return {!proto.payments.api.v1.CustomerOrderTicketMetadata} returns this
*/
proto.payments.api.v1.CustomerOrderTicketMetadata.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderTicketDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerOrderTicketDetails}
 */
proto.payments.api.v1.CustomerOrderTicketMetadata.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.CustomerOrderTicketDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.CustomerOrderTicketMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderTicketMetadata.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.payments.api.v1.CustomerOrderProductMetadata.repeatedFields_ = [1];



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
proto.payments.api.v1.CustomerOrderProductMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderProductMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderProductMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderProductMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.payments.api.v1.CustomerOrderProductDetails.toObject, includeInstance)
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
 * @return {!proto.payments.api.v1.CustomerOrderProductMetadata}
 */
proto.payments.api.v1.CustomerOrderProductMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderProductMetadata;
  return proto.payments.api.v1.CustomerOrderProductMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderProductMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderProductMetadata}
 */
proto.payments.api.v1.CustomerOrderProductMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerOrderProductDetails;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderProductDetails.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.payments.api.v1.CustomerOrderProductMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderProductMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderProductMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderProductMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.payments.api.v1.CustomerOrderProductDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerOrderProductDetails items = 1;
 * @return {!Array<!proto.payments.api.v1.CustomerOrderProductDetails>}
 */
proto.payments.api.v1.CustomerOrderProductMetadata.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.payments.api.v1.CustomerOrderProductDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.payments.api.v1.CustomerOrderProductDetails, 1));
};


/**
 * @param {!Array<!proto.payments.api.v1.CustomerOrderProductDetails>} value
 * @return {!proto.payments.api.v1.CustomerOrderProductMetadata} returns this
*/
proto.payments.api.v1.CustomerOrderProductMetadata.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderProductDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.payments.api.v1.CustomerOrderProductDetails}
 */
proto.payments.api.v1.CustomerOrderProductMetadata.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.payments.api.v1.CustomerOrderProductDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.payments.api.v1.CustomerOrderProductMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderProductMetadata.prototype.clearItemsList = function() {
  return this.setItemsList([]);
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
proto.payments.api.v1.CustomerOrderAddressMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderAddressMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderAddressMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderAddressMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && proto.payments.api.v1.CustomerAddressInfo.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerOrderAddressMetadata}
 */
proto.payments.api.v1.CustomerOrderAddressMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderAddressMetadata;
  return proto.payments.api.v1.CustomerOrderAddressMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderAddressMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderAddressMetadata}
 */
proto.payments.api.v1.CustomerOrderAddressMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerAddressInfo;
      reader.readMessage(value,proto.payments.api.v1.CustomerAddressInfo.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.payments.api.v1.CustomerOrderAddressMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderAddressMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderAddressMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderAddressMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.CustomerAddressInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerAddressInfo object = 1;
 * @return {?proto.payments.api.v1.CustomerAddressInfo}
 */
proto.payments.api.v1.CustomerOrderAddressMetadata.prototype.getObject = function() {
  return /** @type{?proto.payments.api.v1.CustomerAddressInfo} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerAddressInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerAddressInfo|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderAddressMetadata} returns this
*/
proto.payments.api.v1.CustomerOrderAddressMetadata.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderAddressMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderAddressMetadata.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderAddressMetadata.prototype.hasObject = function() {
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
proto.payments.api.v1.CustomerOrderDeliveryMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderDeliveryMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderDeliveryMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderDeliveryMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackingUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.CustomerOrderDeliveryMetadata}
 */
proto.payments.api.v1.CustomerOrderDeliveryMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderDeliveryMetadata;
  return proto.payments.api.v1.CustomerOrderDeliveryMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderDeliveryMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderDeliveryMetadata}
 */
proto.payments.api.v1.CustomerOrderDeliveryMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.payments.api.v1.CustomerOrderDeliveryMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderDeliveryMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderDeliveryMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderDeliveryMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tracking_url = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderDeliveryMetadata.prototype.getTrackingUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderDeliveryMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderDeliveryMetadata.prototype.setTrackingUrl = function(value) {
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
proto.payments.api.v1.CustomerOrderStatusValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderStatusValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderStatusValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderStatusValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.CustomerOrderStatusValue}
 */
proto.payments.api.v1.CustomerOrderStatusValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderStatusValue;
  return proto.payments.api.v1.CustomerOrderStatusValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderStatusValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderStatusValue}
 */
proto.payments.api.v1.CustomerOrderStatusValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.payments.api.v1.CustomerOrderStatus} */ (reader.readEnum());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerOrderStatusValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderStatusValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderStatusValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderStatusValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CustomerOrderStatus value = 1;
 * @return {!proto.payments.api.v1.CustomerOrderStatus}
 */
proto.payments.api.v1.CustomerOrderStatusValue.prototype.getValue = function() {
  return /** @type {!proto.payments.api.v1.CustomerOrderStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderStatus} value
 * @return {!proto.payments.api.v1.CustomerOrderStatusValue} returns this
 */
proto.payments.api.v1.CustomerOrderStatusValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.payments.api.v1.CustomerOrderMetadataValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderMetadataValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderMetadataValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderMetadataValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && proto.payments.api.v1.CustomerOrderMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerOrderMetadataValue}
 */
proto.payments.api.v1.CustomerOrderMetadataValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderMetadataValue;
  return proto.payments.api.v1.CustomerOrderMetadataValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderMetadataValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderMetadataValue}
 */
proto.payments.api.v1.CustomerOrderMetadataValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerOrderMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderMetadata.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.payments.api.v1.CustomerOrderMetadataValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderMetadataValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderMetadataValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderMetadataValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.CustomerOrderMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerOrderMetadata value = 1;
 * @return {?proto.payments.api.v1.CustomerOrderMetadata}
 */
proto.payments.api.v1.CustomerOrderMetadataValue.prototype.getValue = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerOrderMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderMetadataValue} returns this
*/
proto.payments.api.v1.CustomerOrderMetadataValue.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderMetadataValue} returns this
 */
proto.payments.api.v1.CustomerOrderMetadataValue.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderMetadataValue.prototype.hasValue = function() {
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
proto.payments.api.v1.CustomerAddressInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    address: jspb.Message.getFieldWithDefault(msg, 5, ""),
    postcode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    city: jspb.Message.getFieldWithDefault(msg, 7, ""),
    country: jspb.Message.getFieldWithDefault(msg, 8, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 9, 0),
    primary: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    expires: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
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
 * @return {!proto.payments.api.v1.CustomerAddressInfo}
 */
proto.payments.api.v1.CustomerAddressInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressInfo;
  return proto.payments.api.v1.CustomerAddressInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressInfo}
 */
proto.payments.api.v1.CustomerAddressInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostcode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPhoneNumber(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimary(value);
      break;
    case 11:
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
proto.payments.api.v1.CustomerAddressInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPostcode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getPrimary();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getExpires();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string firstname = 3;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string lastname = 4;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string postcode = 6;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getPostcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setPostcode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string city = 7;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string country = 8;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 phone_number = 9;
 * @return {number}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getPhoneNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool primary = 10;
 * @return {boolean}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool expires = 11;
 * @return {boolean}
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.getExpires = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CustomerAddressInfo} returns this
 */
proto.payments.api.v1.CustomerAddressInfo.prototype.setExpires = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
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
proto.payments.api.v1.CustomerAddressFirstnameValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressFirstnameValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressFirstnameValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressFirstnameValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.CustomerAddressFirstnameValue}
 */
proto.payments.api.v1.CustomerAddressFirstnameValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressFirstnameValue;
  return proto.payments.api.v1.CustomerAddressFirstnameValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressFirstnameValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressFirstnameValue}
 */
proto.payments.api.v1.CustomerAddressFirstnameValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressFirstnameValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressFirstnameValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressFirstnameValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressFirstnameValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressFirstnameValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressFirstnameValue} returns this
 */
proto.payments.api.v1.CustomerAddressFirstnameValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.CustomerAddressLastnameValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressLastnameValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressLastnameValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressLastnameValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.CustomerAddressLastnameValue}
 */
proto.payments.api.v1.CustomerAddressLastnameValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressLastnameValue;
  return proto.payments.api.v1.CustomerAddressLastnameValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressLastnameValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressLastnameValue}
 */
proto.payments.api.v1.CustomerAddressLastnameValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressLastnameValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressLastnameValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressLastnameValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressLastnameValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressLastnameValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressLastnameValue} returns this
 */
proto.payments.api.v1.CustomerAddressLastnameValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.CustomerAddressAddressValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressAddressValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressAddressValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressAddressValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.CustomerAddressAddressValue}
 */
proto.payments.api.v1.CustomerAddressAddressValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressAddressValue;
  return proto.payments.api.v1.CustomerAddressAddressValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressAddressValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressAddressValue}
 */
proto.payments.api.v1.CustomerAddressAddressValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressAddressValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressAddressValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressAddressValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressAddressValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressAddressValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressAddressValue} returns this
 */
proto.payments.api.v1.CustomerAddressAddressValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.CustomerAddressPostcodeValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressPostcodeValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressPostcodeValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressPostcodeValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.CustomerAddressPostcodeValue}
 */
proto.payments.api.v1.CustomerAddressPostcodeValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressPostcodeValue;
  return proto.payments.api.v1.CustomerAddressPostcodeValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressPostcodeValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressPostcodeValue}
 */
proto.payments.api.v1.CustomerAddressPostcodeValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressPostcodeValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressPostcodeValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressPostcodeValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressPostcodeValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressPostcodeValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressPostcodeValue} returns this
 */
proto.payments.api.v1.CustomerAddressPostcodeValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.CustomerAddressCityValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressCityValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressCityValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressCityValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.CustomerAddressCityValue}
 */
proto.payments.api.v1.CustomerAddressCityValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressCityValue;
  return proto.payments.api.v1.CustomerAddressCityValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressCityValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressCityValue}
 */
proto.payments.api.v1.CustomerAddressCityValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressCityValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressCityValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressCityValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressCityValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressCityValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressCityValue} returns this
 */
proto.payments.api.v1.CustomerAddressCityValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.CustomerAddressCountryValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressCountryValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressCountryValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressCountryValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.payments.api.v1.CustomerAddressCountryValue}
 */
proto.payments.api.v1.CustomerAddressCountryValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressCountryValue;
  return proto.payments.api.v1.CustomerAddressCountryValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressCountryValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressCountryValue}
 */
proto.payments.api.v1.CustomerAddressCountryValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressCountryValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressCountryValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressCountryValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressCountryValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerAddressCountryValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerAddressCountryValue} returns this
 */
proto.payments.api.v1.CustomerAddressCountryValue.prototype.setValue = function(value) {
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
proto.payments.api.v1.CustomerAddressPhoneNumberValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressPhoneNumberValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressPhoneNumberValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressPhoneNumberValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.CustomerAddressPhoneNumberValue}
 */
proto.payments.api.v1.CustomerAddressPhoneNumberValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressPhoneNumberValue;
  return proto.payments.api.v1.CustomerAddressPhoneNumberValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressPhoneNumberValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressPhoneNumberValue}
 */
proto.payments.api.v1.CustomerAddressPhoneNumberValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressPhoneNumberValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressPhoneNumberValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressPhoneNumberValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressPhoneNumberValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.payments.api.v1.CustomerAddressPhoneNumberValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerAddressPhoneNumberValue} returns this
 */
proto.payments.api.v1.CustomerAddressPhoneNumberValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.payments.api.v1.CustomerAddressPrimaryValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressPrimaryValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressPrimaryValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressPrimaryValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.payments.api.v1.CustomerAddressPrimaryValue}
 */
proto.payments.api.v1.CustomerAddressPrimaryValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressPrimaryValue;
  return proto.payments.api.v1.CustomerAddressPrimaryValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressPrimaryValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressPrimaryValue}
 */
proto.payments.api.v1.CustomerAddressPrimaryValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressPrimaryValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressPrimaryValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressPrimaryValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressPrimaryValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.payments.api.v1.CustomerAddressPrimaryValue.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CustomerAddressPrimaryValue} returns this
 */
proto.payments.api.v1.CustomerAddressPrimaryValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.payments.api.v1.CustomerAddressExpiresValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerAddressExpiresValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerAddressExpiresValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressExpiresValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.payments.api.v1.CustomerAddressExpiresValue}
 */
proto.payments.api.v1.CustomerAddressExpiresValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerAddressExpiresValue;
  return proto.payments.api.v1.CustomerAddressExpiresValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerAddressExpiresValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerAddressExpiresValue}
 */
proto.payments.api.v1.CustomerAddressExpiresValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerAddressExpiresValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerAddressExpiresValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerAddressExpiresValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerAddressExpiresValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.payments.api.v1.CustomerAddressExpiresValue.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CustomerAddressExpiresValue} returns this
 */
proto.payments.api.v1.CustomerAddressExpiresValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.payments.api.v1.CustomerPaymentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerPaymentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerPaymentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    expires: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    primary: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    metadata: (f = msg.getMetadata()) && proto.payments.api.v1.CustomerPaymentMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerPaymentInfo}
 */
proto.payments.api.v1.CustomerPaymentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerPaymentInfo;
  return proto.payments.api.v1.CustomerPaymentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerPaymentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerPaymentInfo}
 */
proto.payments.api.v1.CustomerPaymentInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {!proto.payments.api.v1.CustomerPaymentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpires(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimary(value);
      break;
    case 6:
      var value = new proto.payments.api.v1.CustomerPaymentMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerPaymentMetadata.deserializeBinaryFromReader);
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
proto.payments.api.v1.CustomerPaymentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerPaymentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerPaymentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getExpires();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPrimary();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.payments.api.v1.CustomerPaymentMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerPaymentInfo} returns this
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerPaymentInfo} returns this
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CustomerPaymentType type = 3;
 * @return {!proto.payments.api.v1.CustomerPaymentType}
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.getType = function() {
  return /** @type {!proto.payments.api.v1.CustomerPaymentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerPaymentType} value
 * @return {!proto.payments.api.v1.CustomerPaymentInfo} returns this
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool expires = 4;
 * @return {boolean}
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.getExpires = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CustomerPaymentInfo} returns this
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.setExpires = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool primary = 5;
 * @return {boolean}
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.getPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CustomerPaymentInfo} returns this
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional CustomerPaymentMetadata metadata = 6;
 * @return {?proto.payments.api.v1.CustomerPaymentMetadata}
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerPaymentMetadata, 6));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerPaymentInfo} returns this
*/
proto.payments.api.v1.CustomerPaymentInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerPaymentInfo} returns this
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerPaymentInfo.prototype.hasMetadata = function() {
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
proto.payments.api.v1.CustomerPaymentPrimaryValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerPaymentPrimaryValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerPaymentPrimaryValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentPrimaryValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.payments.api.v1.CustomerPaymentPrimaryValue}
 */
proto.payments.api.v1.CustomerPaymentPrimaryValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerPaymentPrimaryValue;
  return proto.payments.api.v1.CustomerPaymentPrimaryValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerPaymentPrimaryValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerPaymentPrimaryValue}
 */
proto.payments.api.v1.CustomerPaymentPrimaryValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerPaymentPrimaryValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerPaymentPrimaryValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerPaymentPrimaryValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentPrimaryValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.payments.api.v1.CustomerPaymentPrimaryValue.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CustomerPaymentPrimaryValue} returns this
 */
proto.payments.api.v1.CustomerPaymentPrimaryValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.payments.api.v1.CustomerPaymentExpiresValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerPaymentExpiresValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerPaymentExpiresValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentExpiresValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.payments.api.v1.CustomerPaymentExpiresValue}
 */
proto.payments.api.v1.CustomerPaymentExpiresValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerPaymentExpiresValue;
  return proto.payments.api.v1.CustomerPaymentExpiresValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerPaymentExpiresValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerPaymentExpiresValue}
 */
proto.payments.api.v1.CustomerPaymentExpiresValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerPaymentExpiresValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerPaymentExpiresValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerPaymentExpiresValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentExpiresValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool value = 1;
 * @return {boolean}
 */
proto.payments.api.v1.CustomerPaymentExpiresValue.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.payments.api.v1.CustomerPaymentExpiresValue} returns this
 */
proto.payments.api.v1.CustomerPaymentExpiresValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.payments.api.v1.CustomerPaymentMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerPaymentMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerPaymentMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    card: (f = msg.getCard()) && proto.payments.api.v1.CustomerPaymentCardMetadata.toObject(includeInstance, f),
    stripe: (f = msg.getStripe()) && proto.payments.api.v1.CustomerPaymentStripeMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerPaymentMetadata}
 */
proto.payments.api.v1.CustomerPaymentMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerPaymentMetadata;
  return proto.payments.api.v1.CustomerPaymentMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerPaymentMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerPaymentMetadata}
 */
proto.payments.api.v1.CustomerPaymentMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerPaymentCardMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerPaymentCardMetadata.deserializeBinaryFromReader);
      msg.setCard(value);
      break;
    case 2:
      var value = new proto.payments.api.v1.CustomerPaymentStripeMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerPaymentStripeMetadata.deserializeBinaryFromReader);
      msg.setStripe(value);
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
proto.payments.api.v1.CustomerPaymentMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerPaymentMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerPaymentMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCard();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.CustomerPaymentCardMetadata.serializeBinaryToWriter
    );
  }
  f = message.getStripe();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payments.api.v1.CustomerPaymentStripeMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerPaymentCardMetadata card = 1;
 * @return {?proto.payments.api.v1.CustomerPaymentCardMetadata}
 */
proto.payments.api.v1.CustomerPaymentMetadata.prototype.getCard = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentCardMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerPaymentCardMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentCardMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerPaymentMetadata} returns this
*/
proto.payments.api.v1.CustomerPaymentMetadata.prototype.setCard = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerPaymentMetadata} returns this
 */
proto.payments.api.v1.CustomerPaymentMetadata.prototype.clearCard = function() {
  return this.setCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerPaymentMetadata.prototype.hasCard = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerPaymentStripeMetadata stripe = 2;
 * @return {?proto.payments.api.v1.CustomerPaymentStripeMetadata}
 */
proto.payments.api.v1.CustomerPaymentMetadata.prototype.getStripe = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentStripeMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerPaymentStripeMetadata, 2));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentStripeMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerPaymentMetadata} returns this
*/
proto.payments.api.v1.CustomerPaymentMetadata.prototype.setStripe = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerPaymentMetadata} returns this
 */
proto.payments.api.v1.CustomerPaymentMetadata.prototype.clearStripe = function() {
  return this.setStripe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerPaymentMetadata.prototype.hasStripe = function() {
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
proto.payments.api.v1.CustomerPaymentCardMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerPaymentCardMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerPaymentCardMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    brand: jspb.Message.getFieldWithDefault(msg, 1, ""),
    last4: jspb.Message.getFieldWithDefault(msg, 2, 0),
    expiresAt: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.payments.api.v1.CustomerPaymentCardMetadata}
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerPaymentCardMetadata;
  return proto.payments.api.v1.CustomerPaymentCardMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerPaymentCardMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerPaymentCardMetadata}
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLast4(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiresAt(value);
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
proto.payments.api.v1.CustomerPaymentCardMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerPaymentCardMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerPaymentCardMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLast4();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getExpiresAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string brand = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerPaymentCardMetadata} returns this
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 last4 = 2;
 * @return {number}
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.prototype.getLast4 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerPaymentCardMetadata} returns this
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.prototype.setLast4 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 expires_at = 3;
 * @return {number}
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.prototype.getExpiresAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerPaymentCardMetadata} returns this
 */
proto.payments.api.v1.CustomerPaymentCardMetadata.prototype.setExpiresAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.payments.api.v1.CustomerPaymentStripeMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerPaymentStripeMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerPaymentStripeMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentStripeMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payments.api.v1.CustomerPaymentStripeMetadata}
 */
proto.payments.api.v1.CustomerPaymentStripeMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerPaymentStripeMetadata;
  return proto.payments.api.v1.CustomerPaymentStripeMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerPaymentStripeMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerPaymentStripeMetadata}
 */
proto.payments.api.v1.CustomerPaymentStripeMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payments.api.v1.CustomerPaymentStripeMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerPaymentStripeMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerPaymentStripeMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerPaymentStripeMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.payments.api.v1.CustomerPaymentStripeMetadata.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerPaymentStripeMetadata} returns this
 */
proto.payments.api.v1.CustomerPaymentStripeMetadata.prototype.setId = function(value) {
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
proto.payments.api.v1.CustomerTransactionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerTransactionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerTransactionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    customerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    provider: jspb.Message.getFieldWithDefault(msg, 5, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 6, 0),
    metadata: (f = msg.getMetadata()) && proto.payments.api.v1.CustomerTransactionMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerTransactionInfo}
 */
proto.payments.api.v1.CustomerTransactionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerTransactionInfo;
  return proto.payments.api.v1.CustomerTransactionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerTransactionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerTransactionInfo}
 */
proto.payments.api.v1.CustomerTransactionInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCustomerId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {!proto.payments.api.v1.CustomerTransactionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {!proto.payments.api.v1.CustomerTransactionProvider} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 6:
      var value = /** @type {!proto.payments.api.v1.Currency} */ (reader.readEnum());
      msg.setCurrency(value);
      break;
    case 7:
      var value = new proto.payments.api.v1.CustomerTransactionMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerTransactionMetadata.deserializeBinaryFromReader);
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
proto.payments.api.v1.CustomerTransactionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerTransactionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerTransactionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCurrency();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.payments.api.v1.CustomerTransactionMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerTransactionInfo} returns this
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string customer_id = 2;
 * @return {string}
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerTransactionInfo} returns this
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 amount = 3;
 * @return {number}
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerTransactionInfo} returns this
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CustomerTransactionStatus status = 4;
 * @return {!proto.payments.api.v1.CustomerTransactionStatus}
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.CustomerTransactionStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerTransactionStatus} value
 * @return {!proto.payments.api.v1.CustomerTransactionInfo} returns this
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional CustomerTransactionProvider provider = 5;
 * @return {!proto.payments.api.v1.CustomerTransactionProvider}
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.getProvider = function() {
  return /** @type {!proto.payments.api.v1.CustomerTransactionProvider} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerTransactionProvider} value
 * @return {!proto.payments.api.v1.CustomerTransactionInfo} returns this
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Currency currency = 6;
 * @return {!proto.payments.api.v1.Currency}
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.getCurrency = function() {
  return /** @type {!proto.payments.api.v1.Currency} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.payments.api.v1.Currency} value
 * @return {!proto.payments.api.v1.CustomerTransactionInfo} returns this
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional CustomerTransactionMetadata metadata = 7;
 * @return {?proto.payments.api.v1.CustomerTransactionMetadata}
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.CustomerTransactionMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerTransactionMetadata, 7));
};


/**
 * @param {?proto.payments.api.v1.CustomerTransactionMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerTransactionInfo} returns this
*/
proto.payments.api.v1.CustomerTransactionInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerTransactionInfo} returns this
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerTransactionInfo.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.payments.api.v1.CustomerTransactionMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerTransactionMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerTransactionMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    stripe: (f = msg.getStripe()) && proto.payments.api.v1.CustomerTransactionStripeMetadata.toObject(includeInstance, f),
    payment: (f = msg.getPayment()) && proto.payments.api.v1.CustomerTransactionPaymentMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerTransactionMetadata}
 */
proto.payments.api.v1.CustomerTransactionMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerTransactionMetadata;
  return proto.payments.api.v1.CustomerTransactionMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerTransactionMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerTransactionMetadata}
 */
proto.payments.api.v1.CustomerTransactionMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerTransactionStripeMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerTransactionStripeMetadata.deserializeBinaryFromReader);
      msg.setStripe(value);
      break;
    case 2:
      var value = new proto.payments.api.v1.CustomerTransactionPaymentMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerTransactionPaymentMetadata.deserializeBinaryFromReader);
      msg.setPayment(value);
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
proto.payments.api.v1.CustomerTransactionMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerTransactionMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerTransactionMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStripe();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.CustomerTransactionStripeMetadata.serializeBinaryToWriter
    );
  }
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.payments.api.v1.CustomerTransactionPaymentMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerTransactionStripeMetadata stripe = 1;
 * @return {?proto.payments.api.v1.CustomerTransactionStripeMetadata}
 */
proto.payments.api.v1.CustomerTransactionMetadata.prototype.getStripe = function() {
  return /** @type{?proto.payments.api.v1.CustomerTransactionStripeMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerTransactionStripeMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerTransactionStripeMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerTransactionMetadata} returns this
*/
proto.payments.api.v1.CustomerTransactionMetadata.prototype.setStripe = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerTransactionMetadata} returns this
 */
proto.payments.api.v1.CustomerTransactionMetadata.prototype.clearStripe = function() {
  return this.setStripe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerTransactionMetadata.prototype.hasStripe = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomerTransactionPaymentMetadata payment = 2;
 * @return {?proto.payments.api.v1.CustomerTransactionPaymentMetadata}
 */
proto.payments.api.v1.CustomerTransactionMetadata.prototype.getPayment = function() {
  return /** @type{?proto.payments.api.v1.CustomerTransactionPaymentMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerTransactionPaymentMetadata, 2));
};


/**
 * @param {?proto.payments.api.v1.CustomerTransactionPaymentMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerTransactionMetadata} returns this
*/
proto.payments.api.v1.CustomerTransactionMetadata.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerTransactionMetadata} returns this
 */
proto.payments.api.v1.CustomerTransactionMetadata.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerTransactionMetadata.prototype.hasPayment = function() {
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
proto.payments.api.v1.CustomerTransactionStripeMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerTransactionStripeMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerTransactionStripeMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionStripeMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payments.api.v1.CustomerTransactionStripeMetadata}
 */
proto.payments.api.v1.CustomerTransactionStripeMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerTransactionStripeMetadata;
  return proto.payments.api.v1.CustomerTransactionStripeMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerTransactionStripeMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerTransactionStripeMetadata}
 */
proto.payments.api.v1.CustomerTransactionStripeMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payments.api.v1.CustomerTransactionStripeMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerTransactionStripeMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerTransactionStripeMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionStripeMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.payments.api.v1.CustomerTransactionStripeMetadata.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerTransactionStripeMetadata} returns this
 */
proto.payments.api.v1.CustomerTransactionStripeMetadata.prototype.setId = function(value) {
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
proto.payments.api.v1.CustomerTransactionPaymentMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerTransactionPaymentMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerTransactionPaymentMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionPaymentMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: (f = msg.getObject()) && proto.payments.api.v1.CustomerPaymentInfo.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerTransactionPaymentMetadata}
 */
proto.payments.api.v1.CustomerTransactionPaymentMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerTransactionPaymentMetadata;
  return proto.payments.api.v1.CustomerTransactionPaymentMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerTransactionPaymentMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerTransactionPaymentMetadata}
 */
proto.payments.api.v1.CustomerTransactionPaymentMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerPaymentInfo;
      reader.readMessage(value,proto.payments.api.v1.CustomerPaymentInfo.deserializeBinaryFromReader);
      msg.setObject(value);
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
proto.payments.api.v1.CustomerTransactionPaymentMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerTransactionPaymentMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerTransactionPaymentMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionPaymentMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.CustomerPaymentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerPaymentInfo object = 1;
 * @return {?proto.payments.api.v1.CustomerPaymentInfo}
 */
proto.payments.api.v1.CustomerTransactionPaymentMetadata.prototype.getObject = function() {
  return /** @type{?proto.payments.api.v1.CustomerPaymentInfo} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerPaymentInfo, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerPaymentInfo|undefined} value
 * @return {!proto.payments.api.v1.CustomerTransactionPaymentMetadata} returns this
*/
proto.payments.api.v1.CustomerTransactionPaymentMetadata.prototype.setObject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerTransactionPaymentMetadata} returns this
 */
proto.payments.api.v1.CustomerTransactionPaymentMetadata.prototype.clearObject = function() {
  return this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerTransactionPaymentMetadata.prototype.hasObject = function() {
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
proto.payments.api.v1.CustomerTransactionStatusValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerTransactionStatusValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerTransactionStatusValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionStatusValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.CustomerTransactionStatusValue}
 */
proto.payments.api.v1.CustomerTransactionStatusValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerTransactionStatusValue;
  return proto.payments.api.v1.CustomerTransactionStatusValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerTransactionStatusValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerTransactionStatusValue}
 */
proto.payments.api.v1.CustomerTransactionStatusValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.payments.api.v1.CustomerTransactionStatus} */ (reader.readEnum());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerTransactionStatusValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerTransactionStatusValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerTransactionStatusValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerTransactionStatusValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CustomerTransactionStatus value = 1;
 * @return {!proto.payments.api.v1.CustomerTransactionStatus}
 */
proto.payments.api.v1.CustomerTransactionStatusValue.prototype.getValue = function() {
  return /** @type {!proto.payments.api.v1.CustomerTransactionStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerTransactionStatus} value
 * @return {!proto.payments.api.v1.CustomerTransactionStatusValue} returns this
 */
proto.payments.api.v1.CustomerTransactionStatusValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderRefundInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderRefundInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderRefundInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    metadata: (f = msg.getMetadata()) && proto.payments.api.v1.CustomerOrderRefundMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderRefundInfo;
  return proto.payments.api.v1.CustomerOrderRefundInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderRefundInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOrderId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {!proto.payments.api.v1.CustomerOrderRefundStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new proto.payments.api.v1.CustomerOrderRefundMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderRefundMetadata.deserializeBinaryFromReader);
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
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderRefundInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderRefundInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderRefundInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.payments.api.v1.CustomerOrderRefundMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo} returns this
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string order_id = 2;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo} returns this
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo} returns this
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 amount = 4;
 * @return {number}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo} returns this
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional CustomerOrderRefundStatus status = 5;
 * @return {!proto.payments.api.v1.CustomerOrderRefundStatus}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.getStatus = function() {
  return /** @type {!proto.payments.api.v1.CustomerOrderRefundStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderRefundStatus} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo} returns this
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional CustomerOrderRefundMetadata metadata = 6;
 * @return {?proto.payments.api.v1.CustomerOrderRefundMetadata}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.getMetadata = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderRefundMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerOrderRefundMetadata, 6));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderRefundMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo} returns this
*/
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderRefundInfo} returns this
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderRefundInfo.prototype.hasMetadata = function() {
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
proto.payments.api.v1.CustomerOrderRefundMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderRefundMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderRefundMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderRefundMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    stripe: (f = msg.getStripe()) && proto.payments.api.v1.CustomerOrderRefundStripeMetadata.toObject(includeInstance, f)
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
 * @return {!proto.payments.api.v1.CustomerOrderRefundMetadata}
 */
proto.payments.api.v1.CustomerOrderRefundMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderRefundMetadata;
  return proto.payments.api.v1.CustomerOrderRefundMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderRefundMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderRefundMetadata}
 */
proto.payments.api.v1.CustomerOrderRefundMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.payments.api.v1.CustomerOrderRefundStripeMetadata;
      reader.readMessage(value,proto.payments.api.v1.CustomerOrderRefundStripeMetadata.deserializeBinaryFromReader);
      msg.setStripe(value);
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
proto.payments.api.v1.CustomerOrderRefundMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderRefundMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderRefundMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderRefundMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStripe();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.payments.api.v1.CustomerOrderRefundStripeMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerOrderRefundStripeMetadata stripe = 1;
 * @return {?proto.payments.api.v1.CustomerOrderRefundStripeMetadata}
 */
proto.payments.api.v1.CustomerOrderRefundMetadata.prototype.getStripe = function() {
  return /** @type{?proto.payments.api.v1.CustomerOrderRefundStripeMetadata} */ (
    jspb.Message.getWrapperField(this, proto.payments.api.v1.CustomerOrderRefundStripeMetadata, 1));
};


/**
 * @param {?proto.payments.api.v1.CustomerOrderRefundStripeMetadata|undefined} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundMetadata} returns this
*/
proto.payments.api.v1.CustomerOrderRefundMetadata.prototype.setStripe = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.payments.api.v1.CustomerOrderRefundMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderRefundMetadata.prototype.clearStripe = function() {
  return this.setStripe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.payments.api.v1.CustomerOrderRefundMetadata.prototype.hasStripe = function() {
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
proto.payments.api.v1.CustomerOrderRefundStripeMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderRefundStripeMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderRefundStripeMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderRefundStripeMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.payments.api.v1.CustomerOrderRefundStripeMetadata}
 */
proto.payments.api.v1.CustomerOrderRefundStripeMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderRefundStripeMetadata;
  return proto.payments.api.v1.CustomerOrderRefundStripeMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderRefundStripeMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderRefundStripeMetadata}
 */
proto.payments.api.v1.CustomerOrderRefundStripeMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
proto.payments.api.v1.CustomerOrderRefundStripeMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderRefundStripeMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderRefundStripeMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderRefundStripeMetadata.serializeBinaryToWriter = function(message, writer) {
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
proto.payments.api.v1.CustomerOrderRefundStripeMetadata.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundStripeMetadata} returns this
 */
proto.payments.api.v1.CustomerOrderRefundStripeMetadata.prototype.setId = function(value) {
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
proto.payments.api.v1.CustomerOrderRefundStatusValue.prototype.toObject = function(opt_includeInstance) {
  return proto.payments.api.v1.CustomerOrderRefundStatusValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.payments.api.v1.CustomerOrderRefundStatusValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderRefundStatusValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.payments.api.v1.CustomerOrderRefundStatusValue}
 */
proto.payments.api.v1.CustomerOrderRefundStatusValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.payments.api.v1.CustomerOrderRefundStatusValue;
  return proto.payments.api.v1.CustomerOrderRefundStatusValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.payments.api.v1.CustomerOrderRefundStatusValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.payments.api.v1.CustomerOrderRefundStatusValue}
 */
proto.payments.api.v1.CustomerOrderRefundStatusValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.payments.api.v1.CustomerOrderRefundStatus} */ (reader.readEnum());
      msg.setValue(value);
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
proto.payments.api.v1.CustomerOrderRefundStatusValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.payments.api.v1.CustomerOrderRefundStatusValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.payments.api.v1.CustomerOrderRefundStatusValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.payments.api.v1.CustomerOrderRefundStatusValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CustomerOrderRefundStatus value = 1;
 * @return {!proto.payments.api.v1.CustomerOrderRefundStatus}
 */
proto.payments.api.v1.CustomerOrderRefundStatusValue.prototype.getValue = function() {
  return /** @type {!proto.payments.api.v1.CustomerOrderRefundStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.payments.api.v1.CustomerOrderRefundStatus} value
 * @return {!proto.payments.api.v1.CustomerOrderRefundStatusValue} returns this
 */
proto.payments.api.v1.CustomerOrderRefundStatusValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


goog.object.extend(exports, proto.payments.api.v1);
