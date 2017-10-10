// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8246__auto__,writer__8247__auto__,opt__8248__auto__){
return cljs.core._write.call(null,writer__8247__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12462 = arguments.length;
var i__8761__auto___12463 = (0);
while(true){
if((i__8761__auto___12463 < len__8760__auto___12462)){
args__8767__auto__.push((arguments[i__8761__auto___12463]));

var G__12464 = (i__8761__auto___12463 + (1));
i__8761__auto___12463 = G__12464;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq12461){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12461));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12466 = arguments.length;
var i__8761__auto___12467 = (0);
while(true){
if((i__8761__auto___12467 < len__8760__auto___12466)){
args__8767__auto__.push((arguments[i__8761__auto___12467]));

var G__12468 = (i__8761__auto___12467 + (1));
i__8761__auto___12467 = G__12468;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq12465){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12465));
});

var g_QMARK__12469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_12470 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12469){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12469))
,null));
var mkg_12471 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12469,g_12470){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__12469,g_12470))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__12469,g_12470,mkg_12471){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12469).call(null,x);
});})(g_QMARK__12469,g_12470,mkg_12471))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__12469,g_12470,mkg_12471){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_12471).call(null,gfn);
});})(g_QMARK__12469,g_12470,mkg_12471))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__12469,g_12470,mkg_12471){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_12470).call(null,generator);
});})(g_QMARK__12469,g_12470,mkg_12471))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8854__auto___12491 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__8854__auto___12491){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12492 = arguments.length;
var i__8761__auto___12493 = (0);
while(true){
if((i__8761__auto___12493 < len__8760__auto___12492)){
args__8767__auto__.push((arguments[i__8761__auto___12493]));

var G__12494 = (i__8761__auto___12493 + (1));
i__8761__auto___12493 = G__12494;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12491))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12491),args);
});})(g__8854__auto___12491))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__8854__auto___12491){
return (function (seq12472){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12472));
});})(g__8854__auto___12491))
;


var g__8854__auto___12495 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__8854__auto___12495){
return (function cljs$spec$gen$alpha$list(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12496 = arguments.length;
var i__8761__auto___12497 = (0);
while(true){
if((i__8761__auto___12497 < len__8760__auto___12496)){
args__8767__auto__.push((arguments[i__8761__auto___12497]));

var G__12498 = (i__8761__auto___12497 + (1));
i__8761__auto___12497 = G__12498;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12495))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12495),args);
});})(g__8854__auto___12495))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__8854__auto___12495){
return (function (seq12473){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12473));
});})(g__8854__auto___12495))
;


var g__8854__auto___12499 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__8854__auto___12499){
return (function cljs$spec$gen$alpha$map(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12500 = arguments.length;
var i__8761__auto___12501 = (0);
while(true){
if((i__8761__auto___12501 < len__8760__auto___12500)){
args__8767__auto__.push((arguments[i__8761__auto___12501]));

var G__12502 = (i__8761__auto___12501 + (1));
i__8761__auto___12501 = G__12502;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12499))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12499){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12499),args);
});})(g__8854__auto___12499))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__8854__auto___12499){
return (function (seq12474){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12474));
});})(g__8854__auto___12499))
;


var g__8854__auto___12503 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__8854__auto___12503){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12504 = arguments.length;
var i__8761__auto___12505 = (0);
while(true){
if((i__8761__auto___12505 < len__8760__auto___12504)){
args__8767__auto__.push((arguments[i__8761__auto___12505]));

var G__12506 = (i__8761__auto___12505 + (1));
i__8761__auto___12505 = G__12506;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12503))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12503){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12503),args);
});})(g__8854__auto___12503))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__8854__auto___12503){
return (function (seq12475){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12475));
});})(g__8854__auto___12503))
;


var g__8854__auto___12507 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__8854__auto___12507){
return (function cljs$spec$gen$alpha$set(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12508 = arguments.length;
var i__8761__auto___12509 = (0);
while(true){
if((i__8761__auto___12509 < len__8760__auto___12508)){
args__8767__auto__.push((arguments[i__8761__auto___12509]));

var G__12510 = (i__8761__auto___12509 + (1));
i__8761__auto___12509 = G__12510;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12507))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12507){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12507),args);
});})(g__8854__auto___12507))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__8854__auto___12507){
return (function (seq12476){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12476));
});})(g__8854__auto___12507))
;


var g__8854__auto___12511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__8854__auto___12511){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12512 = arguments.length;
var i__8761__auto___12513 = (0);
while(true){
if((i__8761__auto___12513 < len__8760__auto___12512)){
args__8767__auto__.push((arguments[i__8761__auto___12513]));

var G__12514 = (i__8761__auto___12513 + (1));
i__8761__auto___12513 = G__12514;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12511))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12511){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12511),args);
});})(g__8854__auto___12511))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__8854__auto___12511){
return (function (seq12477){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12477));
});})(g__8854__auto___12511))
;


var g__8854__auto___12515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__8854__auto___12515){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12516 = arguments.length;
var i__8761__auto___12517 = (0);
while(true){
if((i__8761__auto___12517 < len__8760__auto___12516)){
args__8767__auto__.push((arguments[i__8761__auto___12517]));

var G__12518 = (i__8761__auto___12517 + (1));
i__8761__auto___12517 = G__12518;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12515))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12515),args);
});})(g__8854__auto___12515))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__8854__auto___12515){
return (function (seq12478){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12478));
});})(g__8854__auto___12515))
;


var g__8854__auto___12519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__8854__auto___12519){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12520 = arguments.length;
var i__8761__auto___12521 = (0);
while(true){
if((i__8761__auto___12521 < len__8760__auto___12520)){
args__8767__auto__.push((arguments[i__8761__auto___12521]));

var G__12522 = (i__8761__auto___12521 + (1));
i__8761__auto___12521 = G__12522;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12519))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12519),args);
});})(g__8854__auto___12519))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__8854__auto___12519){
return (function (seq12479){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12479));
});})(g__8854__auto___12519))
;


var g__8854__auto___12523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__8854__auto___12523){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12524 = arguments.length;
var i__8761__auto___12525 = (0);
while(true){
if((i__8761__auto___12525 < len__8760__auto___12524)){
args__8767__auto__.push((arguments[i__8761__auto___12525]));

var G__12526 = (i__8761__auto___12525 + (1));
i__8761__auto___12525 = G__12526;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12523))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12523),args);
});})(g__8854__auto___12523))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__8854__auto___12523){
return (function (seq12480){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12480));
});})(g__8854__auto___12523))
;


var g__8854__auto___12527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__8854__auto___12527){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12528 = arguments.length;
var i__8761__auto___12529 = (0);
while(true){
if((i__8761__auto___12529 < len__8760__auto___12528)){
args__8767__auto__.push((arguments[i__8761__auto___12529]));

var G__12530 = (i__8761__auto___12529 + (1));
i__8761__auto___12529 = G__12530;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12527))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12527),args);
});})(g__8854__auto___12527))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__8854__auto___12527){
return (function (seq12481){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12481));
});})(g__8854__auto___12527))
;


var g__8854__auto___12531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__8854__auto___12531){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12532 = arguments.length;
var i__8761__auto___12533 = (0);
while(true){
if((i__8761__auto___12533 < len__8760__auto___12532)){
args__8767__auto__.push((arguments[i__8761__auto___12533]));

var G__12534 = (i__8761__auto___12533 + (1));
i__8761__auto___12533 = G__12534;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12531))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12531){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12531),args);
});})(g__8854__auto___12531))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__8854__auto___12531){
return (function (seq12482){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12482));
});})(g__8854__auto___12531))
;


var g__8854__auto___12535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__8854__auto___12535){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12536 = arguments.length;
var i__8761__auto___12537 = (0);
while(true){
if((i__8761__auto___12537 < len__8760__auto___12536)){
args__8767__auto__.push((arguments[i__8761__auto___12537]));

var G__12538 = (i__8761__auto___12537 + (1));
i__8761__auto___12537 = G__12538;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12535))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12535){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12535),args);
});})(g__8854__auto___12535))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__8854__auto___12535){
return (function (seq12483){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12483));
});})(g__8854__auto___12535))
;


var g__8854__auto___12539 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__8854__auto___12539){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12540 = arguments.length;
var i__8761__auto___12541 = (0);
while(true){
if((i__8761__auto___12541 < len__8760__auto___12540)){
args__8767__auto__.push((arguments[i__8761__auto___12541]));

var G__12542 = (i__8761__auto___12541 + (1));
i__8761__auto___12541 = G__12542;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12539))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12539){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12539),args);
});})(g__8854__auto___12539))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__8854__auto___12539){
return (function (seq12484){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12484));
});})(g__8854__auto___12539))
;


var g__8854__auto___12543 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__8854__auto___12543){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12544 = arguments.length;
var i__8761__auto___12545 = (0);
while(true){
if((i__8761__auto___12545 < len__8760__auto___12544)){
args__8767__auto__.push((arguments[i__8761__auto___12545]));

var G__12546 = (i__8761__auto___12545 + (1));
i__8761__auto___12545 = G__12546;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12543))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12543){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12543),args);
});})(g__8854__auto___12543))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__8854__auto___12543){
return (function (seq12485){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12485));
});})(g__8854__auto___12543))
;


var g__8854__auto___12547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__8854__auto___12547){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12548 = arguments.length;
var i__8761__auto___12549 = (0);
while(true){
if((i__8761__auto___12549 < len__8760__auto___12548)){
args__8767__auto__.push((arguments[i__8761__auto___12549]));

var G__12550 = (i__8761__auto___12549 + (1));
i__8761__auto___12549 = G__12550;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12547))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12547){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12547),args);
});})(g__8854__auto___12547))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__8854__auto___12547){
return (function (seq12486){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12486));
});})(g__8854__auto___12547))
;


var g__8854__auto___12551 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__8854__auto___12551){
return (function cljs$spec$gen$alpha$return(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12552 = arguments.length;
var i__8761__auto___12553 = (0);
while(true){
if((i__8761__auto___12553 < len__8760__auto___12552)){
args__8767__auto__.push((arguments[i__8761__auto___12553]));

var G__12554 = (i__8761__auto___12553 + (1));
i__8761__auto___12553 = G__12554;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12551))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12551){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12551),args);
});})(g__8854__auto___12551))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__8854__auto___12551){
return (function (seq12487){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12487));
});})(g__8854__auto___12551))
;


var g__8854__auto___12555 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__8854__auto___12555){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12556 = arguments.length;
var i__8761__auto___12557 = (0);
while(true){
if((i__8761__auto___12557 < len__8760__auto___12556)){
args__8767__auto__.push((arguments[i__8761__auto___12557]));

var G__12558 = (i__8761__auto___12557 + (1));
i__8761__auto___12557 = G__12558;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12555))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12555){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12555),args);
});})(g__8854__auto___12555))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8854__auto___12555){
return (function (seq12488){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12488));
});})(g__8854__auto___12555))
;


var g__8854__auto___12559 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__8854__auto___12559){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12560 = arguments.length;
var i__8761__auto___12561 = (0);
while(true){
if((i__8761__auto___12561 < len__8760__auto___12560)){
args__8767__auto__.push((arguments[i__8761__auto___12561]));

var G__12562 = (i__8761__auto___12561 + (1));
i__8761__auto___12561 = G__12562;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12559))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12559){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12559),args);
});})(g__8854__auto___12559))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__8854__auto___12559){
return (function (seq12489){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12489));
});})(g__8854__auto___12559))
;


var g__8854__auto___12563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__8854__auto___12563){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12564 = arguments.length;
var i__8761__auto___12565 = (0);
while(true){
if((i__8761__auto___12565 < len__8760__auto___12564)){
args__8767__auto__.push((arguments[i__8761__auto___12565]));

var G__12566 = (i__8761__auto___12565 + (1));
i__8761__auto___12565 = G__12566;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8854__auto___12563))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8854__auto___12563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8854__auto___12563),args);
});})(g__8854__auto___12563))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__8854__auto___12563){
return (function (seq12490){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12490));
});})(g__8854__auto___12563))
;

var g__8867__auto___12588 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__8867__auto___12588){
return (function cljs$spec$gen$alpha$any(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12589 = arguments.length;
var i__8761__auto___12590 = (0);
while(true){
if((i__8761__auto___12590 < len__8760__auto___12589)){
args__8767__auto__.push((arguments[i__8761__auto___12590]));

var G__12591 = (i__8761__auto___12590 + (1));
i__8761__auto___12590 = G__12591;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12588))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12588){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12588);
});})(g__8867__auto___12588))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__8867__auto___12588){
return (function (seq12567){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12567));
});})(g__8867__auto___12588))
;


var g__8867__auto___12592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__8867__auto___12592){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12593 = arguments.length;
var i__8761__auto___12594 = (0);
while(true){
if((i__8761__auto___12594 < len__8760__auto___12593)){
args__8767__auto__.push((arguments[i__8761__auto___12594]));

var G__12595 = (i__8761__auto___12594 + (1));
i__8761__auto___12594 = G__12595;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12592))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12592){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12592);
});})(g__8867__auto___12592))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__8867__auto___12592){
return (function (seq12568){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12568));
});})(g__8867__auto___12592))
;


var g__8867__auto___12596 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__8867__auto___12596){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12597 = arguments.length;
var i__8761__auto___12598 = (0);
while(true){
if((i__8761__auto___12598 < len__8760__auto___12597)){
args__8767__auto__.push((arguments[i__8761__auto___12598]));

var G__12599 = (i__8761__auto___12598 + (1));
i__8761__auto___12598 = G__12599;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12596))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12596){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12596);
});})(g__8867__auto___12596))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__8867__auto___12596){
return (function (seq12569){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12569));
});})(g__8867__auto___12596))
;


var g__8867__auto___12600 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__8867__auto___12600){
return (function cljs$spec$gen$alpha$char(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12601 = arguments.length;
var i__8761__auto___12602 = (0);
while(true){
if((i__8761__auto___12602 < len__8760__auto___12601)){
args__8767__auto__.push((arguments[i__8761__auto___12602]));

var G__12603 = (i__8761__auto___12602 + (1));
i__8761__auto___12602 = G__12603;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12600))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12600){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12600);
});})(g__8867__auto___12600))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__8867__auto___12600){
return (function (seq12570){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12570));
});})(g__8867__auto___12600))
;


var g__8867__auto___12604 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__8867__auto___12604){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12605 = arguments.length;
var i__8761__auto___12606 = (0);
while(true){
if((i__8761__auto___12606 < len__8760__auto___12605)){
args__8767__auto__.push((arguments[i__8761__auto___12606]));

var G__12607 = (i__8761__auto___12606 + (1));
i__8761__auto___12606 = G__12607;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12604))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12604){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12604);
});})(g__8867__auto___12604))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__8867__auto___12604){
return (function (seq12571){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12571));
});})(g__8867__auto___12604))
;


var g__8867__auto___12608 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__8867__auto___12608){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12609 = arguments.length;
var i__8761__auto___12610 = (0);
while(true){
if((i__8761__auto___12610 < len__8760__auto___12609)){
args__8767__auto__.push((arguments[i__8761__auto___12610]));

var G__12611 = (i__8761__auto___12610 + (1));
i__8761__auto___12610 = G__12611;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12608))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12608){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12608);
});})(g__8867__auto___12608))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__8867__auto___12608){
return (function (seq12572){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12572));
});})(g__8867__auto___12608))
;


var g__8867__auto___12612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__8867__auto___12612){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12613 = arguments.length;
var i__8761__auto___12614 = (0);
while(true){
if((i__8761__auto___12614 < len__8760__auto___12613)){
args__8767__auto__.push((arguments[i__8761__auto___12614]));

var G__12615 = (i__8761__auto___12614 + (1));
i__8761__auto___12614 = G__12615;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12612))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12612){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12612);
});})(g__8867__auto___12612))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__8867__auto___12612){
return (function (seq12573){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12573));
});})(g__8867__auto___12612))
;


var g__8867__auto___12616 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__8867__auto___12616){
return (function cljs$spec$gen$alpha$double(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12617 = arguments.length;
var i__8761__auto___12618 = (0);
while(true){
if((i__8761__auto___12618 < len__8760__auto___12617)){
args__8767__auto__.push((arguments[i__8761__auto___12618]));

var G__12619 = (i__8761__auto___12618 + (1));
i__8761__auto___12618 = G__12619;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12616))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12616){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12616);
});})(g__8867__auto___12616))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__8867__auto___12616){
return (function (seq12574){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12574));
});})(g__8867__auto___12616))
;


var g__8867__auto___12620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__8867__auto___12620){
return (function cljs$spec$gen$alpha$int(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12621 = arguments.length;
var i__8761__auto___12622 = (0);
while(true){
if((i__8761__auto___12622 < len__8760__auto___12621)){
args__8767__auto__.push((arguments[i__8761__auto___12622]));

var G__12623 = (i__8761__auto___12622 + (1));
i__8761__auto___12622 = G__12623;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12620))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12620){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12620);
});})(g__8867__auto___12620))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__8867__auto___12620){
return (function (seq12575){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12575));
});})(g__8867__auto___12620))
;


var g__8867__auto___12624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__8867__auto___12624){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12625 = arguments.length;
var i__8761__auto___12626 = (0);
while(true){
if((i__8761__auto___12626 < len__8760__auto___12625)){
args__8767__auto__.push((arguments[i__8761__auto___12626]));

var G__12627 = (i__8761__auto___12626 + (1));
i__8761__auto___12626 = G__12627;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12624))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12624){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12624);
});})(g__8867__auto___12624))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__8867__auto___12624){
return (function (seq12576){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12576));
});})(g__8867__auto___12624))
;


var g__8867__auto___12628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__8867__auto___12628){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12629 = arguments.length;
var i__8761__auto___12630 = (0);
while(true){
if((i__8761__auto___12630 < len__8760__auto___12629)){
args__8767__auto__.push((arguments[i__8761__auto___12630]));

var G__12631 = (i__8761__auto___12630 + (1));
i__8761__auto___12630 = G__12631;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12628))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12628){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12628);
});})(g__8867__auto___12628))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__8867__auto___12628){
return (function (seq12577){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12577));
});})(g__8867__auto___12628))
;


var g__8867__auto___12632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__8867__auto___12632){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12633 = arguments.length;
var i__8761__auto___12634 = (0);
while(true){
if((i__8761__auto___12634 < len__8760__auto___12633)){
args__8767__auto__.push((arguments[i__8761__auto___12634]));

var G__12635 = (i__8761__auto___12634 + (1));
i__8761__auto___12634 = G__12635;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12632))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12632){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12632);
});})(g__8867__auto___12632))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__8867__auto___12632){
return (function (seq12578){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12578));
});})(g__8867__auto___12632))
;


var g__8867__auto___12636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__8867__auto___12636){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12637 = arguments.length;
var i__8761__auto___12638 = (0);
while(true){
if((i__8761__auto___12638 < len__8760__auto___12637)){
args__8767__auto__.push((arguments[i__8761__auto___12638]));

var G__12639 = (i__8761__auto___12638 + (1));
i__8761__auto___12638 = G__12639;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12636))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12636){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12636);
});})(g__8867__auto___12636))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__8867__auto___12636){
return (function (seq12579){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12579));
});})(g__8867__auto___12636))
;


var g__8867__auto___12640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__8867__auto___12640){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12641 = arguments.length;
var i__8761__auto___12642 = (0);
while(true){
if((i__8761__auto___12642 < len__8760__auto___12641)){
args__8767__auto__.push((arguments[i__8761__auto___12642]));

var G__12643 = (i__8761__auto___12642 + (1));
i__8761__auto___12642 = G__12643;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12640))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12640){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12640);
});})(g__8867__auto___12640))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__8867__auto___12640){
return (function (seq12580){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12580));
});})(g__8867__auto___12640))
;


var g__8867__auto___12644 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__8867__auto___12644){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12645 = arguments.length;
var i__8761__auto___12646 = (0);
while(true){
if((i__8761__auto___12646 < len__8760__auto___12645)){
args__8767__auto__.push((arguments[i__8761__auto___12646]));

var G__12647 = (i__8761__auto___12646 + (1));
i__8761__auto___12646 = G__12647;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12644))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12644){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12644);
});})(g__8867__auto___12644))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__8867__auto___12644){
return (function (seq12581){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12581));
});})(g__8867__auto___12644))
;


var g__8867__auto___12648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__8867__auto___12648){
return (function cljs$spec$gen$alpha$string(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12649 = arguments.length;
var i__8761__auto___12650 = (0);
while(true){
if((i__8761__auto___12650 < len__8760__auto___12649)){
args__8767__auto__.push((arguments[i__8761__auto___12650]));

var G__12651 = (i__8761__auto___12650 + (1));
i__8761__auto___12650 = G__12651;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12648))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12648){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12648);
});})(g__8867__auto___12648))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__8867__auto___12648){
return (function (seq12582){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12582));
});})(g__8867__auto___12648))
;


var g__8867__auto___12652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__8867__auto___12652){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12653 = arguments.length;
var i__8761__auto___12654 = (0);
while(true){
if((i__8761__auto___12654 < len__8760__auto___12653)){
args__8767__auto__.push((arguments[i__8761__auto___12654]));

var G__12655 = (i__8761__auto___12654 + (1));
i__8761__auto___12654 = G__12655;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12652))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12652){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12652);
});})(g__8867__auto___12652))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__8867__auto___12652){
return (function (seq12583){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12583));
});})(g__8867__auto___12652))
;


var g__8867__auto___12656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__8867__auto___12656){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12657 = arguments.length;
var i__8761__auto___12658 = (0);
while(true){
if((i__8761__auto___12658 < len__8760__auto___12657)){
args__8767__auto__.push((arguments[i__8761__auto___12658]));

var G__12659 = (i__8761__auto___12658 + (1));
i__8761__auto___12658 = G__12659;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12656))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12656){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12656);
});})(g__8867__auto___12656))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__8867__auto___12656){
return (function (seq12584){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12584));
});})(g__8867__auto___12656))
;


var g__8867__auto___12660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__8867__auto___12660){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12661 = arguments.length;
var i__8761__auto___12662 = (0);
while(true){
if((i__8761__auto___12662 < len__8760__auto___12661)){
args__8767__auto__.push((arguments[i__8761__auto___12662]));

var G__12663 = (i__8761__auto___12662 + (1));
i__8761__auto___12662 = G__12663;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12660))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12660){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12660);
});})(g__8867__auto___12660))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__8867__auto___12660){
return (function (seq12585){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12585));
});})(g__8867__auto___12660))
;


var g__8867__auto___12664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__8867__auto___12664){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12665 = arguments.length;
var i__8761__auto___12666 = (0);
while(true){
if((i__8761__auto___12666 < len__8760__auto___12665)){
args__8767__auto__.push((arguments[i__8761__auto___12666]));

var G__12667 = (i__8761__auto___12666 + (1));
i__8761__auto___12666 = G__12667;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12664))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12664){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12664);
});})(g__8867__auto___12664))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__8867__auto___12664){
return (function (seq12586){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12586));
});})(g__8867__auto___12664))
;


var g__8867__auto___12668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__8867__auto___12668){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12669 = arguments.length;
var i__8761__auto___12670 = (0);
while(true){
if((i__8761__auto___12670 < len__8760__auto___12669)){
args__8767__auto__.push((arguments[i__8761__auto___12670]));

var G__12671 = (i__8761__auto___12670 + (1));
i__8761__auto___12670 = G__12671;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});})(g__8867__auto___12668))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8867__auto___12668){
return (function (args){
return cljs.core.deref.call(null,g__8867__auto___12668);
});})(g__8867__auto___12668))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__8867__auto___12668){
return (function (seq12587){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12587));
});})(g__8867__auto___12668))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__8767__auto__ = [];
var len__8760__auto___12674 = arguments.length;
var i__8761__auto___12675 = (0);
while(true){
if((i__8761__auto___12675 < len__8760__auto___12674)){
args__8767__auto__.push((arguments[i__8761__auto___12675]));

var G__12676 = (i__8761__auto___12675 + (1));
i__8761__auto___12675 = G__12676;
continue;
} else {
}
break;
}

var argseq__8768__auto__ = ((((0) < args__8767__auto__.length))?(new cljs.core.IndexedSeq(args__8767__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8768__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__12672_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12672_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq12673){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12673));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__12677_SHARP_){
return (new Date(p1__12677_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});
