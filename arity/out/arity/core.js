// Compiled by ClojureScript 0.0-3169 {}
goog.provide('arity.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.browser.repl');
if(typeof arity.core.conn !== 'undefined'){
} else {
arity.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Convert degrees to radians
 */
arity.core.radians = (function arity$core$radians(d){
return ((d * Math.PI) / (180));
});
arity.core.polar_example = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),(50),new cljs.core.Keyword(null,"theta","theta",-427510258),(45)], null);
/**
 * Convert polar coordinate (radius, degrees) to cartesian (x,y)
 */
arity.core.cartesian = (function arity$core$cartesian(p__115){
var map__117 = p__115;
var map__117__$1 = ((cljs.core.seq_QMARK_.call(null,map__117))?cljs.core.apply.call(null,cljs.core.hash_map,map__117):map__117);
var theta = cljs.core.get.call(null,map__117__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var r = cljs.core.get.call(null,map__117__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(Math.cos(arity.core.radians.call(null,theta)) * r),new cljs.core.Keyword(null,"y","y",-1757859776),(Math.sin(arity.core.radians.call(null,theta)) * r)], null);
});
/**
 * Reformat name, converting middle name to an initial.
 */
arity.core.name1 = (function arity$core$name1(surname,given,middle){
return [cljs.core.str(given),cljs.core.str(" "),cljs.core.str([cljs.core.str(cljs.core.first.call(null,middle)),cljs.core.str(".")].join('')),cljs.core.str(" "),cljs.core.str(surname)].join('');
});
arity.core.make_initials = (function arity$core$make_initials(names){
if(!(cljs.core.empty_QMARK_.call(null,names))){
return cljs.core.reduce.call(null,(function (acc,item){
return [cljs.core.str(acc),cljs.core.str(cljs.core.first.call(null,item)),cljs.core.str(". ")].join('');
}),"",names);
} else {
return "";
}
});
/**
 * Reformat name, converting middle names to initials.
 * @param {...*} var_args
 */
arity.core.name2 = (function() { 
var arity$core$name2__delegate = function (surname,given,others){
return [cljs.core.str(given),cljs.core.str(" "),cljs.core.str(arity.core.make_initials.call(null,others)),cljs.core.str(surname)].join('');
};
var arity$core$name2 = function (surname,given,var_args){
var others = null;
if (arguments.length > 2) {
var G__118__i = 0, G__118__a = new Array(arguments.length -  2);
while (G__118__i < G__118__a.length) {G__118__a[G__118__i] = arguments[G__118__i + 2]; ++G__118__i;}
  others = new cljs.core.IndexedSeq(G__118__a,0);
} 
return arity$core$name2__delegate.call(this,surname,given,others);};
arity$core$name2.cljs$lang$maxFixedArity = 2;
arity$core$name2.cljs$lang$applyTo = (function (arglist__119){
var surname = cljs.core.first(arglist__119);
arglist__119 = cljs.core.next(arglist__119);
var given = cljs.core.first(arglist__119);
var others = cljs.core.rest(arglist__119);
return arity$core$name2__delegate(surname,given,others);
});
arity$core$name2.cljs$core$IFn$_invoke$arity$variadic = arity$core$name2__delegate;
return arity$core$name2;
})()
;
/**
 * Area of square, rectangle, and trapezoid
 */
arity.core.area = (function() {
var arity$core$area = null;
var arity$core$area__1 = (function (s){
return (s * s);
});
var arity$core$area__2 = (function (w,h){
return (w * h);
});
var arity$core$area__3 = (function (b1,b2,h){
return (((b1 + b2) / (2)) * h);
});
arity$core$area = function(b1,b2,h){
switch(arguments.length){
case 1:
return arity$core$area__1.call(this,b1);
case 2:
return arity$core$area__2.call(this,b1,b2);
case 3:
return arity$core$area__3.call(this,b1,b2,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
arity$core$area.cljs$core$IFn$_invoke$arity$1 = arity$core$area__1;
arity$core$area.cljs$core$IFn$_invoke$arity$2 = arity$core$area__2;
arity$core$area.cljs$core$IFn$_invoke$arity$3 = arity$core$area__3;
return arity$core$area;
})()
;

//# sourceMappingURL=core.js.map