// Compiled by ClojureScript 0.0-3169 {}
goog.provide('averages.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('clojure.browser.repl');
if(typeof averages.core.conn !== 'undefined'){
} else {
averages.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
averages.core.arithmetic = (function averages$core$arithmetic(a,b){
return ((a + b) / 2.0);
});
averages.core.geometric = (function averages$core$geometric(a,b){
return Math.sqrt((a * b));
});
averages.core.harmonic = (function averages$core$harmonic(a,b){
return ((2) / (((1) / a) + ((1) / b)));
});
averages.core.float_value = (function averages$core$float_value(id){
return window.parseFloat(domina.value.call(null,domina.by_id.call(null,id)));
});
averages.core.calculate_means = (function averages$core$calculate_means(evt){
domina.set_text_BANG_.call(null,domina.by_id.call(null,"arithmetic"),averages.core.arithmetic.call(null,averages.core.float_value.call(null,"A"),averages.core.float_value.call(null,"B")));

domina.set_text_BANG_.call(null,domina.by_id.call(null,"geometric"),averages.core.geometric.call(null,averages.core.float_value.call(null,"A"),averages.core.float_value.call(null,"B")));

return domina.set_text_BANG_.call(null,domina.by_id.call(null,"harmonic"),averages.core.harmonic.call(null,averages.core.float_value.call(null,"A"),averages.core.float_value.call(null,"B")));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calculate"),"click",averages.core.calculate_means);

//# sourceMappingURL=core.js.map