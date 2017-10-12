// Compiled by ClojureScript 0.0-3169 {}
goog.provide('phone.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof phone.core.conn !== 'undefined'){
} else {
phone.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
phone.core.dial = (function phone$core$dial(area,prefix,number){
return [cljs.core.str("("),cljs.core.str(area),cljs.core.str(")"),cljs.core.str(prefix),cljs.core.str("-"),cljs.core.str(number)].join('');
});
phone.core.dial_area = (function phone$core$dial_area(area){
return cljs.core.partial.call(null,phone.core.dial,area);
});
phone.core.san_jose = phone.core.dial_area.call(null,"408");

//# sourceMappingURL=core.js.map