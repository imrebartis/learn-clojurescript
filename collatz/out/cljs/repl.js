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
var seq__150_162 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__151_163 = null;
var count__152_164 = (0);
var i__153_165 = (0);
while(true){
if((i__153_165 < count__152_164)){
var f_166 = cljs.core._nth.call(null,chunk__151_163,i__153_165);
cljs.core.println.call(null,"  ",f_166);

var G__167 = seq__150_162;
var G__168 = chunk__151_163;
var G__169 = count__152_164;
var G__170 = (i__153_165 + (1));
seq__150_162 = G__167;
chunk__151_163 = G__168;
count__152_164 = G__169;
i__153_165 = G__170;
continue;
} else {
var temp__4126__auto___171 = cljs.core.seq.call(null,seq__150_162);
if(temp__4126__auto___171){
var seq__150_172__$1 = temp__4126__auto___171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__150_172__$1)){
var c__4326__auto___173 = cljs.core.chunk_first.call(null,seq__150_172__$1);
var G__174 = cljs.core.chunk_rest.call(null,seq__150_172__$1);
var G__175 = c__4326__auto___173;
var G__176 = cljs.core.count.call(null,c__4326__auto___173);
var G__177 = (0);
seq__150_162 = G__174;
chunk__151_163 = G__175;
count__152_164 = G__176;
i__153_165 = G__177;
continue;
} else {
var f_178 = cljs.core.first.call(null,seq__150_172__$1);
cljs.core.println.call(null,"  ",f_178);

var G__179 = cljs.core.next.call(null,seq__150_172__$1);
var G__180 = null;
var G__181 = (0);
var G__182 = (0);
seq__150_162 = G__179;
chunk__151_163 = G__180;
count__152_164 = G__181;
i__153_165 = G__182;
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
var seq__154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__155 = null;
var count__156 = (0);
var i__157 = (0);
while(true){
if((i__157 < count__156)){
var vec__158 = cljs.core._nth.call(null,chunk__155,i__157);
var name = cljs.core.nth.call(null,vec__158,(0),null);
var map__159 = cljs.core.nth.call(null,vec__158,(1),null);
var map__159__$1 = ((cljs.core.seq_QMARK_.call(null,map__159))?cljs.core.apply.call(null,cljs.core.hash_map,map__159):map__159);
var arglists = cljs.core.get.call(null,map__159__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__159__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__183 = seq__154;
var G__184 = chunk__155;
var G__185 = count__156;
var G__186 = (i__157 + (1));
seq__154 = G__183;
chunk__155 = G__184;
count__156 = G__185;
i__157 = G__186;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__154);
if(temp__4126__auto__){
var seq__154__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__154__$1);
var G__187 = cljs.core.chunk_rest.call(null,seq__154__$1);
var G__188 = c__4326__auto__;
var G__189 = cljs.core.count.call(null,c__4326__auto__);
var G__190 = (0);
seq__154 = G__187;
chunk__155 = G__188;
count__156 = G__189;
i__157 = G__190;
continue;
} else {
var vec__160 = cljs.core.first.call(null,seq__154__$1);
var name = cljs.core.nth.call(null,vec__160,(0),null);
var map__161 = cljs.core.nth.call(null,vec__160,(1),null);
var map__161__$1 = ((cljs.core.seq_QMARK_.call(null,map__161))?cljs.core.apply.call(null,cljs.core.hash_map,map__161):map__161);
var arglists = cljs.core.get.call(null,map__161__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__161__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__191 = cljs.core.next.call(null,seq__154__$1);
var G__192 = null;
var G__193 = (0);
var G__194 = (0);
seq__154 = G__191;
chunk__155 = G__192;
count__156 = G__193;
i__157 = G__194;
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