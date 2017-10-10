// Compiled by ClojureScript 0.0-3169 {}
goog.provide('conditionals.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof conditionals.core.conn !== 'undefined'){
} else {
conditionals.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
conditionals.core.status = (function conditionals$core$status(age){
if((age < (18))){
return "Can't vote or drink.";
} else {
if((age < (21))){
return "Can vote; can't drink";
} else {
if((age < (65))){
return "Can vote and drink";
} else {
return "With age comes wisdom";

}
}
}
});

//# sourceMappingURL=core.js.map