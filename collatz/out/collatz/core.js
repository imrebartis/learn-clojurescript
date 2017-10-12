// Compiled by ClojureScript 0.0-3169 {}
goog.provide('collatz.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof collatz.core.conn !== 'undefined'){
} else {
collatz.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
collatz.core.count_steps = (function collatz$core$count_steps(n,total){
while(true){
if(cljs.core._EQ_.call(null,n,(1))){
return total;
} else {
var next_n = ((cljs.core.even_QMARK_.call(null,n))?(n / (2)):(((3) * n) + (1)));
var G__109 = next_n;
var G__110 = (total + (1));
n = G__109;
total = G__110;
continue;
}
break;
}
});
/**
 * Use a multi-arity function to allow count-steps to need
 * only one parameter
 */
collatz.core.count_steps_arity = (function() {
var collatz$core$count_steps_arity = null;
var collatz$core$count_steps_arity__1 = (function (n){
return collatz.core.count_steps.call(null,n,(0));
});
var collatz$core$count_steps_arity__2 = (function (n,total){
while(true){
if(cljs.core._EQ_.call(null,n,(1))){
return total;
} else {
var next_n = ((cljs.core.even_QMARK_.call(null,n))?(n / (2)):(((3) * n) + (1)));
var G__111 = next_n;
var G__112 = (total + (1));
n = G__111;
total = G__112;
continue;
}
break;
}
});
collatz$core$count_steps_arity = function(n,total){
switch(arguments.length){
case 1:
return collatz$core$count_steps_arity__1.call(this,n);
case 2:
return collatz$core$count_steps_arity__2.call(this,n,total);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
collatz$core$count_steps_arity.cljs$core$IFn$_invoke$arity$1 = collatz$core$count_steps_arity__1;
collatz$core$count_steps_arity.cljs$core$IFn$_invoke$arity$2 = collatz$core$count_steps_arity__2;
return collatz$core$count_steps_arity;
})()
;
collatz.core.count_steps_loop = (function collatz$core$count_steps_loop(start){

var n = start;
var total = (0);
while(true){
if(cljs.core._EQ_.call(null,n,(1))){
return total;
} else {
var next_n = ((cljs.core.even_QMARK_.call(null,n))?(n / (2)):(((3) * n) + (1)));
var G__113 = next_n;
var G__114 = (total + (1));
n = G__113;
total = G__114;
continue;
}
break;
}
});
collatz.core.sum_up_to = (function collatz$core$sum_up_to(n,total){
while(true){
if(cljs.core._EQ_.call(null,n,(0))){
return total;
} else {
var G__115 = (n - (1));
var G__116 = (n + total);
n = G__115;
total = G__116;
continue;
}
break;
}
});
cljs.core.println.call(null,collatz.core.sum_up_to.call(null,(25000),(0)));

//# sourceMappingURL=core.js.map