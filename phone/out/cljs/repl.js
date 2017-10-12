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
var seq__142_154 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__143_155 = null;
var count__144_156 = (0);
var i__145_157 = (0);
while(true){
if((i__145_157 < count__144_156)){
var f_158 = cljs.core._nth.call(null,chunk__143_155,i__145_157);
cljs.core.println.call(null,"  ",f_158);

var G__159 = seq__142_154;
var G__160 = chunk__143_155;
var G__161 = count__144_156;
var G__162 = (i__145_157 + (1));
seq__142_154 = G__159;
chunk__143_155 = G__160;
count__144_156 = G__161;
i__145_157 = G__162;
continue;
} else {
var temp__4126__auto___163 = cljs.core.seq.call(null,seq__142_154);
if(temp__4126__auto___163){
var seq__142_164__$1 = temp__4126__auto___163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__142_164__$1)){
var c__4326__auto___165 = cljs.core.chunk_first.call(null,seq__142_164__$1);
var G__166 = cljs.core.chunk_rest.call(null,seq__142_164__$1);
var G__167 = c__4326__auto___165;
var G__168 = cljs.core.count.call(null,c__4326__auto___165);
var G__169 = (0);
seq__142_154 = G__166;
chunk__143_155 = G__167;
count__144_156 = G__168;
i__145_157 = G__169;
continue;
} else {
var f_170 = cljs.core.first.call(null,seq__142_164__$1);
cljs.core.println.call(null,"  ",f_170);

var G__171 = cljs.core.next.call(null,seq__142_164__$1);
var G__172 = null;
var G__173 = (0);
var G__174 = (0);
seq__142_154 = G__171;
chunk__143_155 = G__172;
count__144_156 = G__173;
i__145_157 = G__174;
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
var seq__146 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__147 = null;
var count__148 = (0);
var i__149 = (0);
while(true){
if((i__149 < count__148)){
var vec__150 = cljs.core._nth.call(null,chunk__147,i__149);
var name = cljs.core.nth.call(null,vec__150,(0),null);
var map__151 = cljs.core.nth.call(null,vec__150,(1),null);
var map__151__$1 = ((cljs.core.seq_QMARK_.call(null,map__151))?cljs.core.apply.call(null,cljs.core.hash_map,map__151):map__151);
var arglists = cljs.core.get.call(null,map__151__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__151__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__175 = seq__146;
var G__176 = chunk__147;
var G__177 = count__148;
var G__178 = (i__149 + (1));
seq__146 = G__175;
chunk__147 = G__176;
count__148 = G__177;
i__149 = G__178;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__146);
if(temp__4126__auto__){
var seq__146__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__146__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__146__$1);
var G__179 = cljs.core.chunk_rest.call(null,seq__146__$1);
var G__180 = c__4326__auto__;
var G__181 = cljs.core.count.call(null,c__4326__auto__);
var G__182 = (0);
seq__146 = G__179;
chunk__147 = G__180;
count__148 = G__181;
i__149 = G__182;
continue;
} else {
var vec__152 = cljs.core.first.call(null,seq__146__$1);
var name = cljs.core.nth.call(null,vec__152,(0),null);
var map__153 = cljs.core.nth.call(null,vec__152,(1),null);
var map__153__$1 = ((cljs.core.seq_QMARK_.call(null,map__153))?cljs.core.apply.call(null,cljs.core.hash_map,map__153):map__153);
var arglists = cljs.core.get.call(null,map__153__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__153__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__183 = cljs.core.next.call(null,seq__146__$1);
var G__184 = null;
var G__185 = (0);
var G__186 = (0);
seq__146 = G__183;
chunk__147 = G__184;
count__148 = G__185;
i__149 = G__186;
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