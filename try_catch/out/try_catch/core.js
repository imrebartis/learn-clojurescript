// Compiled by ClojureScript 0.0-3169 {}
goog.provide('try_catch.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof try_catch.core.conn !== 'undefined'){
} else {
try_catch.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
try{}catch (e6489){if((e6489 instanceof SyntaxError)){
var error_6490 = e6489;
cljs.core.println.call(null,"bad bad syntax");
} else {
if((e6489 instanceof RangeError)){
var error_6491 = e6489;
cljs.core.println.call(null,"You have a value out of range");
} else {
if((e6489 instanceof URIError)){
var error_6492 = e6489;
cljs.core.println.call(null,"URI not valid");
} else {
if((e6489 instanceof Error)){
var error_6493 = e6489;
cljs.core.println.call(null,new cljs.core.Symbol(null,"oops'","oops'",-1075078321,null),error_6493);
} else {
throw e6489;

}
}
}
}
}finally {cljs.core.println.call(null,"This shows up, error or not.");
}
//# sourceMappingURL=core.js.map