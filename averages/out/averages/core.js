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

//# sourceMappingURL=core.js.map