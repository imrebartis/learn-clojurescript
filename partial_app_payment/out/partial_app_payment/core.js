// Compiled by ClojureScript 0.0-3169 {}
goog.provide('partial_app_payment.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('clojure.browser.repl');
if(typeof partial_app_payment.core.conn !== 'undefined'){
} else {
partial_app_payment.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
partial_app_payment.core.payment = (function partial_app_payment$core$payment(principal,apr,years){
var r = (apr / ((12) * (100)));
var n = (years * (12));
var rate_factor = Math.pow(((1) + r),n);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[years,(((principal * r) * rate_factor) / (rate_factor - (1)))],null));
});
partial_app_payment.core.float_value = (function partial_app_payment$core$float_value(field){
return window.parseFloat(domina.value.call(null,field));
});
partial_app_payment.core.make_row = (function partial_app_payment$core$make_row(p__62){
var vec__64 = p__62;
var years = cljs.core.nth.call(null,vec__64,(0),null);
var amount = cljs.core.nth.call(null,vec__64,(1),null);
return [cljs.core.str("<tr><td>"),cljs.core.str(years),cljs.core.str("</td><td>$"),cljs.core.str(amount.toFixed((2))),cljs.core.str("</td></tr>")].join('');
});
partial_app_payment.core.show_payments = (function partial_app_payment$core$show_payments(evt){
var apr = partial_app_payment.core.float_value.call(null,domina.by_id.call(null,"apr"));
var principal = partial_app_payment.core.float_value.call(null,domina.by_id.call(null,"principal"));
var tbody = domina.by_id.call(null,"paymentTable");
var years_vector = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(15),(20),(30)], null);
var part_pmt = cljs.core.partial.call(null,partial_app_payment.core.payment,principal,apr);
var results = cljs.core.map.call(null,part_pmt,years_vector);
console.log(results);

domina.destroy_children_BANG_.call(null,tbody);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (apr,principal,tbody,years_vector,part_pmt,results){
return (function (p1__65_SHARP_){
return domina.append_BANG_.call(null,tbody,partial_app_payment.core.make_row.call(null,p1__65_SHARP_));
});})(apr,principal,tbody,years_vector,part_pmt,results))
,results));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calculate"),"click",partial_app_payment.core.show_payments);

//# sourceMappingURL=core.js.map