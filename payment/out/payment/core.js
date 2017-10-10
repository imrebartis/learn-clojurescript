// Compiled by ClojureScript 0.0-3169 {}
goog.provide('payment.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('clojure.browser.repl');
if(typeof payment.core.conn !== 'undefined'){
} else {
payment.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
payment.core.payment = (function payment$core$payment(principal,years,apr){
var r = (apr / ((12) * (100)));
var n = (years * (12));
var rate_factor = Math.pow(((1) + r),n);
return (((principal * r) * rate_factor) / (rate_factor - (1)));
});
payment.core.principal_field = domina.by_id.call(null,"principal");
payment.core.apr_field = domina.by_id.call(null,"apr");
payment.core.years_field = domina.by_id.call(null,"years");
payment.core.float_value = (function payment$core$float_value(field){
return window.parseFloat(domina.value.call(null,field));
});
payment.core.show_payment = (function payment$core$show_payment(evt){
var apr = payment.core.float_value.call(null,payment.core.apr_field);
var principal = payment.core.float_value.call(null,payment.core.principal_field);
var years = payment.core.float_value.call(null,payment.core.years_field);
return domina.set_text_BANG_.call(null,domina.by_id.call(null,"payment"),payment.core.payment.call(null,principal,years,apr));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calculate"),"click",payment.core.show_payment);

//# sourceMappingURL=core.js.map