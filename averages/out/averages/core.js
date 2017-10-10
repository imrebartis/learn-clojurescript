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
cljs.core.println.call(null,"Hello world!");

//# sourceMappingURL=core.js.map