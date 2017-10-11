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
var seq__173_185 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__174_186 = null;
var count__175_187 = (0);
var i__176_188 = (0);
while(true){
if((i__176_188 < count__175_187)){
var f_189 = cljs.core._nth.call(null,chunk__174_186,i__176_188);
cljs.core.println.call(null,"  ",f_189);

var G__190 = seq__173_185;
var G__191 = chunk__174_186;
var G__192 = count__175_187;
var G__193 = (i__176_188 + (1));
seq__173_185 = G__190;
chunk__174_186 = G__191;
count__175_187 = G__192;
i__176_188 = G__193;
continue;
} else {
var temp__4126__auto___194 = cljs.core.seq.call(null,seq__173_185);
if(temp__4126__auto___194){
var seq__173_195__$1 = temp__4126__auto___194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__173_195__$1)){
var c__4326__auto___196 = cljs.core.chunk_first.call(null,seq__173_195__$1);
var G__197 = cljs.core.chunk_rest.call(null,seq__173_195__$1);
var G__198 = c__4326__auto___196;
var G__199 = cljs.core.count.call(null,c__4326__auto___196);
var G__200 = (0);
seq__173_185 = G__197;
chunk__174_186 = G__198;
count__175_187 = G__199;
i__176_188 = G__200;
continue;
} else {
var f_201 = cljs.core.first.call(null,seq__173_195__$1);
cljs.core.println.call(null,"  ",f_201);

var G__202 = cljs.core.next.call(null,seq__173_195__$1);
var G__203 = null;
var G__204 = (0);
var G__205 = (0);
seq__173_185 = G__202;
chunk__174_186 = G__203;
count__175_187 = G__204;
i__176_188 = G__205;
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
var seq__177 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__178 = null;
var count__179 = (0);
var i__180 = (0);
while(true){
if((i__180 < count__179)){
var vec__181 = cljs.core._nth.call(null,chunk__178,i__180);
var name = cljs.core.nth.call(null,vec__181,(0),null);
var map__182 = cljs.core.nth.call(null,vec__181,(1),null);
var map__182__$1 = ((cljs.core.seq_QMARK_.call(null,map__182))?cljs.core.apply.call(null,cljs.core.hash_map,map__182):map__182);
var arglists = cljs.core.get.call(null,map__182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__206 = seq__177;
var G__207 = chunk__178;
var G__208 = count__179;
var G__209 = (i__180 + (1));
seq__177 = G__206;
chunk__178 = G__207;
count__179 = G__208;
i__180 = G__209;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__177);
if(temp__4126__auto__){
var seq__177__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__177__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__177__$1);
var G__210 = cljs.core.chunk_rest.call(null,seq__177__$1);
var G__211 = c__4326__auto__;
var G__212 = cljs.core.count.call(null,c__4326__auto__);
var G__213 = (0);
seq__177 = G__210;
chunk__178 = G__211;
count__179 = G__212;
i__180 = G__213;
continue;
} else {
var vec__183 = cljs.core.first.call(null,seq__177__$1);
var name = cljs.core.nth.call(null,vec__183,(0),null);
var map__184 = cljs.core.nth.call(null,vec__183,(1),null);
var map__184__$1 = ((cljs.core.seq_QMARK_.call(null,map__184))?cljs.core.apply.call(null,cljs.core.hash_map,map__184):map__184);
var arglists = cljs.core.get.call(null,map__184__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__184__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__214 = cljs.core.next.call(null,seq__177__$1);
var G__215 = null;
var G__216 = (0);
var G__217 = (0);
seq__177 = G__214;
chunk__178 = G__215;
count__179 = G__216;
i__180 = G__217;
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

//# sourceMappingURL=repl.js.map