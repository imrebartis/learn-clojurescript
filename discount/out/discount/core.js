// Compiled by ClojureScript 0.0-3169 {}
goog.provide('discount.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('clojure.browser.repl');
if(typeof discount.core.conn !== 'undefined'){
} else {
discount.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
discount.core.field_value = (function discount$core$field_value(field){
return window.parseFloat(domina.value.call(null,domina.by_id.call(null,field)));
});
discount.core.extra_discount = (function discount$core$extra_discount(){
if(cljs.core._EQ_.call(null,domina.value.call(null,domina.by_id.call(null,"dcode")),"EXTRA")){
return (1);
} else {
return (0);
}
});
discount.core.discount_percent = (function discount$core$discount_percent(qty){
if((qty <= (10))){
return (0);
} else {
if((qty <= (50))){
return (1);
} else {
if((qty <= (100))){
return (3);
} else {
if((qty <= (200))){
return (5);
} else {
return 7.5;

}
}
}
}
});
discount.core.discount_total = (function discount$core$discount_total(qty,price,percent){
return (qty * (((1) - (percent / (100))) * price));
});
discount.core.currency = (function discount$core$currency(amount){
return amount.toFixed((2));
});
discount.core.calculate = (function discount$core$calculate(){
var qty = discount.core.field_value.call(null,"qty");
var price = discount.core.field_value.call(null,"price");
var percent = (discount.core.discount_percent.call(null,qty) + discount.core.extra_discount.call(null));
var total = (qty * price);
var dtotal = discount.core.discount_total.call(null,qty,price,percent);
domina.set_text_BANG_.call(null,domina.by_id.call(null,"total"),discount.core.currency.call(null,total));

domina.set_text_BANG_.call(null,domina.by_id.call(null,"discount"),discount.core.currency.call(null,(total - dtotal)));

return domina.set_text_BANG_.call(null,domina.by_id.call(null,"discounted"),discount.core.currency.call(null,dtotal));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calculate"),"click",discount.core.calculate);

//# sourceMappingURL=core.js.map