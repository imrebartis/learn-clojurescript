// Compiled by ClojureScript 0.0-3169 {}
goog.provide('seq_averages.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('clojure.string');
goog.require('clojure.browser.repl');
if(typeof seq_averages.core.conn !== 'undefined'){
} else {
seq_averages.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
seq_averages.core.arithmetic = (function seq_averages$core$arithmetic(values){
return (cljs.core.reduce.call(null,cljs.core._PLUS_,values) / cljs.core.count.call(null,values));
});
seq_averages.core.geometric = (function seq_averages$core$geometric(values){
var nonzero = cljs.core.remove.call(null,cljs.core.zero_QMARK_,values);
var v = cljs.core.map.call(null,((function (nonzero){
return (function (x){
return Math.abs(x);
});})(nonzero))
,nonzero);
var n = cljs.core.count.call(null,v);
return Math.pow(cljs.core.reduce.call(null,cljs.core._STAR_,v),(1.0 / n));
});
seq_averages.core.harmonic = (function seq_averages$core$harmonic(values){
var v = cljs.core.remove.call(null,cljs.core.zero_QMARK_,values);
var recip = cljs.core.map.call(null,((function (v){
return (function (p1__62_SHARP_){
return ((1) / p1__62_SHARP_);
});})(v))
,v);
var n = cljs.core.count.call(null,v);
return (n / cljs.core.reduce.call(null,cljs.core._PLUS_,recip));
});
seq_averages.core.mean = (function seq_averages$core$mean(choice,values){
if(cljs.core._EQ_.call(null,choice,"arithmetic")){
return seq_averages.core.arithmetic.call(null,values);
} else {
if(cljs.core._EQ_.call(null,choice,"geometric")){
return seq_averages.core.geometric.call(null,values);
} else {
if(cljs.core._EQ_.call(null,choice,"harmonic")){
return seq_averages.core.harmonic.call(null,values);
} else {
return null;
}
}
}
});
seq_averages.core.calculate = (function seq_averages$core$calculate(evt){
var choice = domina.value.call(null,domina.by_id.call(null,"meanType"));
var number_string = domina.value.call(null,domina.by_id.call(null,"numbers"));
var numbers = clojure.string.split.call(null,number_string,/[ ,]+/);
var values = cljs.core.map.call(null,((function (choice,number_string,numbers){
return (function (x){
return window.parseFloat(x);
});})(choice,number_string,numbers))
,numbers);
return domina.set_text_BANG_.call(null,domina.by_id.call(null,"result"),seq_averages.core.mean.call(null,choice,values));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calculate"),"click",seq_averages.core.calculate);

//# sourceMappingURL=core.js.map