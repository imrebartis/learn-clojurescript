// Compiled by ClojureScript 0.0-3169 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6290_6302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6291_6303 = null;
var count__6292_6304 = (0);
var i__6293_6305 = (0);
while(true){
if((i__6293_6305 < count__6292_6304)){
var f_6306 = cljs.core._nth.call(null,chunk__6291_6303,i__6293_6305);
cljs.core.println.call(null,"  ",f_6306);

var G__6307 = seq__6290_6302;
var G__6308 = chunk__6291_6303;
var G__6309 = count__6292_6304;
var G__6310 = (i__6293_6305 + (1));
seq__6290_6302 = G__6307;
chunk__6291_6303 = G__6308;
count__6292_6304 = G__6309;
i__6293_6305 = G__6310;
continue;
} else {
var temp__4126__auto___6311 = cljs.core.seq.call(null,seq__6290_6302);
if(temp__4126__auto___6311){
var seq__6290_6312__$1 = temp__4126__auto___6311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6290_6312__$1)){
var c__4326__auto___6313 = cljs.core.chunk_first.call(null,seq__6290_6312__$1);
var G__6314 = cljs.core.chunk_rest.call(null,seq__6290_6312__$1);
var G__6315 = c__4326__auto___6313;
var G__6316 = cljs.core.count.call(null,c__4326__auto___6313);
var G__6317 = (0);
seq__6290_6302 = G__6314;
chunk__6291_6303 = G__6315;
count__6292_6304 = G__6316;
i__6293_6305 = G__6317;
continue;
} else {
var f_6318 = cljs.core.first.call(null,seq__6290_6312__$1);
cljs.core.println.call(null,"  ",f_6318);

var G__6319 = cljs.core.next.call(null,seq__6290_6312__$1);
var G__6320 = null;
var G__6321 = (0);
var G__6322 = (0);
seq__6290_6302 = G__6319;
chunk__6291_6303 = G__6320;
count__6292_6304 = G__6321;
i__6293_6305 = G__6322;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__3957__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3957__auto__)){
return or__3957__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6294 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6295 = null;
var count__6296 = (0);
var i__6297 = (0);
while(true){
if((i__6297 < count__6296)){
var vec__6298 = cljs.core._nth.call(null,chunk__6295,i__6297);
var name = cljs.core.nth.call(null,vec__6298,(0),null);
var map__6299 = cljs.core.nth.call(null,vec__6298,(1),null);
var map__6299__$1 = ((cljs.core.seq_QMARK_.call(null,map__6299))?cljs.core.apply.call(null,cljs.core.hash_map,map__6299):map__6299);
var arglists = cljs.core.get.call(null,map__6299__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__6299__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6323 = seq__6294;
var G__6324 = chunk__6295;
var G__6325 = count__6296;
var G__6326 = (i__6297 + (1));
seq__6294 = G__6323;
chunk__6295 = G__6324;
count__6296 = G__6325;
i__6297 = G__6326;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6294);
if(temp__4126__auto__){
var seq__6294__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6294__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__6294__$1);
var G__6327 = cljs.core.chunk_rest.call(null,seq__6294__$1);
var G__6328 = c__4326__auto__;
var G__6329 = cljs.core.count.call(null,c__4326__auto__);
var G__6330 = (0);
seq__6294 = G__6327;
chunk__6295 = G__6328;
count__6296 = G__6329;
i__6297 = G__6330;
continue;
} else {
var vec__6300 = cljs.core.first.call(null,seq__6294__$1);
var name = cljs.core.nth.call(null,vec__6300,(0),null);
var map__6301 = cljs.core.nth.call(null,vec__6300,(1),null);
var map__6301__$1 = ((cljs.core.seq_QMARK_.call(null,map__6301))?cljs.core.apply.call(null,cljs.core.hash_map,map__6301):map__6301);
var arglists = cljs.core.get.call(null,map__6301__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__6301__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6331 = cljs.core.next.call(null,seq__6294__$1);
var G__6332 = null;
var G__6333 = (0);
var G__6334 = (0);
seq__6294 = G__6331;
chunk__6295 = G__6332;
count__6296 = G__6333;
i__6297 = G__6334;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
