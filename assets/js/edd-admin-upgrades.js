!function(e){var a={};function d(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,d),r.l=!0,r.exports}d.m=e,d.c=a,d.d=function(e,a,t){d.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,a){if(1&a&&(e=d(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)d.d(t,r,function(a){return e[a]}.bind(null,r));return t},d.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(a,"a",a),a},d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},d.p="",d(d.s=64)}({0:function(e,a){e.exports=jQuery},64:function(e,a,d){"use strict";d.r(a),d(65)},65:function(e,a,d){(function(e,a){var d={inProgress:!1,init:function(){e(".edd-v3-migration-confirmation").on("change",(function(a){var d=e(this).closest(".edd-v3-migration").find("button");a.target.checked?d.removeClass("disabled").prop("disabled",!1):d.addClass("disabled").prop("disabled",!0)})),e(".edd-v3-migration").on("submit",(function(a){if(a.preventDefault(),!d.inProgress){d.inProgress=!0;var t=e(this),r=t.find('input[name="upgrade_key"]'),n=!1;if(r.length&&r.val()&&(n=r.val()),t.find("button").removeClass("button-primary").addClass("button-secondary disabled updating-message").prop("disabled",!0),t.find("input").prop("disabled",!0),"edd-v3-migration"===t.attr("id")){e("#edd-migration-progress").removeClass("edd-hidden");var o=e("#edd-migration-progress li:not(.edd-upgrade-complete)");o.length&&!n&&(n=o.data("upgrade"))}d.processStep(n,1,t.find('input[name="_wpnonce"]').val())}}))},processStep:function(a,t,r){var n={action:"edd_process_v3_upgrade",_ajax_nonce:r,upgrade_key:a,step:t};d.clearErrors(),a&&d.markUpgradeInProgress(a),e.ajax({type:"POST",data:n,url:ajaxurl,success:function(e){if(e.success){if(e.data.upgrade_completed){if(d.markUpgradeComplete(e.data.upgrade_processed),"v30_legacy_data_removed"===e.data.upgrade_processed)return void d.legacyDataRemovalComplete()}else e.data.percentage&&d.updateUpgradePercentage(e.data.upgrade_processed,e.data.percentage);e.data.next_upgrade&&"v30_legacy_data_removed"===e.data.next_upgrade&&"v30_legacy_data_removed"!==e.data.upgrade_processed?(d.inProgress=!1,d.showLegacyDataRemoval()):e.data.next_upgrade?d.processStep(e.data.next_upgrade,e.data.next_step,e.data.nonce):(d.inProgress=!1,d.stopAllSpinners())}else d.showError(a,e.data)}}).fail((function(e){}))},clearErrors:function(){e(".edd-v3-migration-error").addClass("edd-hidden").html("")},showError:function(a,t){var r=e("#edd-v3-migration");"v30_legacy_data_removed"===a&&(r=e("#edd-v3-remove-legacy-data")),r.find(".edd-v3-migration-error").html("<p>"+t+"</p>").removeClass("edd-hidden"),d.inProgress=!1,r.find("input").prop("disabled",!1),r.find("button").prop("disabled",!1).addClass("button-primary").removeClass("button-secondary disabled updating-message")},markUpgradeInProgress:function(a){var d=e("#edd-v3-migration-"+a);if(d.length){var t=d.find(".dashicons");t.length&&t.removeClass("dashicons-minus").addClass("dashicons-update"),d.find(".edd-migration-percentage").removeClass("edd-hidden")}},updateUpgradePercentage:function(a,d){var t=e("#edd-v3-migration-"+a);t.length&&t.find(".edd-migration-percentage-value").text(d)},markUpgradeComplete:function(a){var d=e("#edd-v3-migration-"+a);if(d.length){d.addClass("edd-upgrade-complete");var t=d.find(".dashicons");t.length&&t.removeClass("dashicons-minus dashicons-update").addClass("dashicons-yes");var r=d.find(".edd-migration-status .screen-reader-text");r.length&&r.text(edd_admin_upgrade_vars.migration_complete),d.find(".edd-migration-percentage-value").text(100)}},showLegacyDataRemoval:function(){e("#edd-v3-migration-button").removeClass("updating-message"),e("#edd-v3-migration-complete").removeClass("edd-hidden");var a=e("#edd-v3-remove-legacy-data");a.length&&a.removeClass("edd-hidden")},legacyDataRemovalComplete:function(){var a=e("#edd-v3-remove-legacy-data");a.length&&(a.find("form").addClass("edd-hidden"),a.find("#edd-v3-legacy-data-removal-complete").removeClass("edd-hidden"))},stopAllSpinners:function(){}};a(document).ready((function(e){d.init()}))}).call(this,d(0),d(0))}});