!function(e){var d={};function t(a){if(d[a])return d[a].exports;var n=d[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=d,t.d=function(e,d,a){t.o(e,d)||Object.defineProperty(e,d,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,d){if(1&d&&(e=t(e)),8&d)return e;if(4&d&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&d&&"string"!=typeof e)for(var n in e)t.d(a,n,function(d){return e[d]}.bind(null,n));return a},t.n=function(e){var d=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(d,"a",d),d},t.o=function(e,d){return Object.prototype.hasOwnProperty.call(e,d)},t.p="",t(t.s=81)}({0:function(e,d){e.exports=jQuery},2:function(e,d,t){"use strict";(function(e){t.d(d,"a",(function(){return a}));var a=function(d){e(d)}}).call(this,t(0))},8:function(e,d,t){"use strict";(function(e){t.d(d,"a",(function(){return a})),t.d(d,"b",(function(){return o}));var a=function(e){var d,t=e;switch(e){case"amex":t="americanexpress",d=32;break;default:d=50}return"\n    <svg\n      width=".concat(d,"\n      height=",32,'\n      class="payment-icon icon-').concat(t,'"\n      role="img"\n    >\n      <use\n        href="#icon-').concat(t,'"\n        xlink:href="#icon-').concat(t,'">\n      </use>\n    </svg>')},n=0;function o(d){if("1"==edd_global_vars.taxes_enabled){var t=e("#edd_cc_address"),a=t.find("#billing_country").val(),o=t.find("#card_address").val(),r=t.find("#card_address_2").val(),i=t.find("#card_city").val(),c=t.find("#card_state").val();d||(d=c);var l={action:"edd_recalculate_taxes",card_address:o,card_address_2:r,card_city:i,card_zip:t.find("#card_zip").val(),state:d,billing_country:a,nonce:e("#edd-checkout-address-fields-nonce").val()};e("#edd_purchase_submit [type=submit]").after('<span class="edd-loading-ajax edd-recalculate-taxes-loading edd-loading"></span>');var s=++n;return e.ajax({type:"POST",data:l,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(d){if(s===n){d.html&&e("#edd_checkout_cart_form").replaceWith(d.html),e(".edd_cart_amount").html(d.total);var t=new Object;t.postdata=l,t.response=d,e("body").trigger("edd_taxes_recalculated",[t])}e(".edd-recalculate-taxes-loading").remove()}}).fail((function(d){window.console&&window.console.log&&(console.log(d),s===n&&e("body").trigger("edd_taxes_recalculated",[tax_data]))}))}}}).call(this,t(0))},81:function(e,d,t){"use strict";t.r(d),t(82);var a=t(8);window.recalculate_taxes=a.b,window.EDD_Checkout=function(e){var d,t,n;function o(t){t.preventDefault();var o=e("#edd-discount").val(),r=e("#edd-discount-loader"),i=e("#edd_cc_address .edd-input, #edd_cc_address .edd-select").filter("[required]");if(""==o||o==edd_global_vars.enter_discount)return!1;var c={action:"edd_apply_discount",code:o,form:e("#edd_purchase_form").serialize()};return e("#edd-discount-error-wrap").html("").hide(),r.show(),e.ajax({type:"POST",data:c,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){t?"valid"==t.msg?(e(".edd_cart_discount").html(t.html),e(".edd_cart_discount_row").show(),e(".edd_cart_amount").each((function(){e(this).text(t.total),e(this).data("total",t.total_plain)})),e("#edd-discount",n).val(""),Object(a.b)(),"0.00"==t.total_plain?(e("#edd_cc_fields,#edd_cc_address,#edd_payment_mode_select").slideUp(),i.prop("required",!1),e('input[name="edd-gateway"]').val("manual")):(i.prop("required",!0),e("#edd_cc_fields,#edd_cc_address").slideDown()),d.trigger("edd_discount_applied",[t])):(e("#edd-discount-error-wrap").html('<span class="edd_error">'+t.msg+"</span>"),e("#edd-discount-error-wrap").show(),d.trigger("edd_discount_invalid",[t])):(window.console&&window.console.log&&console.log(t),d.trigger("edd_discount_failed",[t])),r.hide()}}).fail((function(e){window.console&&window.console.log&&console.log(e)})),!1}function r(t){var n={action:"edd_remove_discount",code:e(this).data("code")};return e.ajax({type:"POST",data:n,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){var n="0"+edd_global_vars.decimal_separator+"00";e(".edd_cart_amount").each((function(){edd_global_vars.currency_sign+n!=e(this).text()&&n+edd_global_vars.currency_sign!=e(this).text()||window.location.reload(),e(this).text(t.total),e(this).data("total",t.total_plain)})),e(".edd_cart_discount").html(t.html),t.discounts&&0===t.discounts.length&&e(".edd_cart_discount_row").hide(),Object(a.b)(),e("#edd_cc_fields,#edd_cc_address").slideDown(),d.trigger("edd_discount_removed",[t])}}).fail((function(e){window.console&&window.console.log&&console.log(e)})),!1}function i(t){var a=e(this),n=a.val(),o=a.data("key"),r=a.closest(".edd_cart_item").data("download-id"),i=a.parent().find('input[name="edd-cart-download-'+o+'-options"]').val(),c=e("#edd_cc_address"),l={action:"edd_update_quantity",quantity:n,download_id:r,options:i,billing_country:c.find("#billing_country").val(),card_state:c.find("#card_state").val()};return e.ajax({type:"POST",data:l,dataType:"json",url:edd_global_vars.ajaxurl,xhrFields:{withCredentials:!0},success:function(t){e(".edd_cart_subtotal_amount").each((function(){e(this).text(t.subtotal)})),e(".edd_cart_tax_amount").each((function(){e(this).text(t.taxes)})),e(".edd_cart_amount").each((function(){e(this).text(t.total),d.trigger("edd_quantity_updated",[t])}))}}).fail((function(e){window.console&&window.console.log&&console.log(e)})),!1}return{init:function(){d=e(document.body),t=e("#edd_purchase_form"),e(".edd_cart_amount").text(),n=e("#edd_checkout_form_wrap"),d.on("edd_gateway_loaded",(function(e){var d,a,n,o;a=(d=t).find(".card-number"),n=d.find(".card-cvc"),o=d.find(".card-expiry"),a.length&&"function"==typeof a.payment&&(a.payment("formatCardNumber"),n.payment("formatCardCVC"),o.payment("formatCardExpiry"))})),d.on("keyup change",".edd-do-validate .card-number",(function(){var d,t;d=e(this),(t=d).validateCreditCard((function(d){var n=e(".card-type");null==d.card_type?(n.removeClass().addClass("off card-type"),t.removeClass("valid"),t.addClass("error")):(n.removeClass("off"),n.html(Object(a.a)(d.card_type.name)),n.addClass(d.card_type.name),d.length_valid&&d.luhn_valid?(t.addClass("valid"),t.removeClass("error")):(t.removeClass("valid"),t.addClass("error")))}))})),d.on("blur change",".card-name",(function(){var d=e(this);d.validateCreditCard((function(t){null!=t.card_type?(d.removeClass("valid").addClass("error"),e("#edd-purchase-button").attr("disabled","disabled")):(d.removeClass("error").addClass("valid"),e("#edd-purchase-button").removeAttr("disabled"))}))})),d.on("submit","#edd_payment_mode",(function(){if(0==e("#edd-gateway option:selected").val())return alert(edd_global_vars.no_gateway),!1})),d.on("click","#edd_payment_mode_select input",(function(){e("#edd_payment_mode_select label.edd-gateway-option-selected").removeClass("edd-gateway-option-selected"),e("#edd_payment_mode_select input:checked").parent().addClass("edd-gateway-option-selected")})),n.on("click",".edd-apply-discount",o),n.on("keypress","#edd-discount",(function(e){if("13"==e.keyCode)return!1})),n.on("keyup","#edd-discount",(function(e){"13"==e.keyCode&&n.find(".edd-apply-discount").trigger("click")})),d.on("click",".edd_discount_remove",r),d.on("click",".edd_discount_link",(function(d){d.preventDefault(),e(".edd_discount_link").parent().hide(),e("#edd-discount-code-wrap").show().find("#edd-discount").focus()})),d.find("#edd-discount-code-wrap").hide(),d.find("#edd_show_discount").show(),d.on("change",".edd-item-quantity",i),d.on("click",".edd-amazon-logout #Logout",(function(e){e.preventDefault(),amazon.Login.logout(),window.location=edd_amazon.checkoutUri}))},recalculate_taxes:a.b}}(window.jQuery),window.jQuery(document).ready(EDD_Checkout.init)},82:function(e,d,t){"use strict";(function(e){var d=t(2);Object(d.a)((function(){e(document.body).on("click",".edd_terms_links",(function(d){d.preventDefault();var t=e(this).parent();t.prev(".edd-terms").slideToggle(),t.find(".edd_terms_links").toggle()}))}))}).call(this,t(0))}});