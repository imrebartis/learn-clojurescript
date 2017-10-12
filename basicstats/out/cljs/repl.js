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
var seq__1009_1021 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1010_1022 = null;
var count__1011_1023 = (0);
var i__1012_1024 = (0);
while(true){
if((i__1012_1024 < count__1011_1023)){
var f_1025 = cljs.core._nth.call(null,chunk__1010_1022,i__1012_1024);
cljs.core.println.call(null,"  ",f_1025);

var G__1026 = seq__1009_1021;
var G__1027 = chunk__1010_1022;
var G__1028 = count__1011_1023;
var G__1029 = (i__1012_1024 + (1));
seq__1009_1021 = G__1026;
chunk__1010_1022 = G__1027;
count__1011_1023 = G__1028;
i__1012_1024 = G__1029;
continue;
} else {
var temp__4126__auto___1030 = cljs.core.seq.call(null,seq__1009_1021);
if(temp__4126__auto___1030){
var seq__1009_1031__$1 = temp__4126__auto___1030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1009_1031__$1)){
var c__4326__auto___1032 = cljs.core.chunk_first.call(null,seq__1009_1031__$1);
var G__1033 = cljs.core.chunk_rest.call(null,seq__1009_1031__$1);
var G__1034 = c__4326__auto___1032;
var G__1035 = cljs.core.count.call(null,c__4326__auto___1032);
var G__1036 = (0);
seq__1009_1021 = G__1033;
chunk__1010_1022 = G__1034;
count__1011_1023 = G__1035;
i__1012_1024 = G__1036;
continue;
} else {
var f_1037 = cljs.core.first.call(null,seq__1009_1031__$1);
cljs.core.println.call(null,"  ",f_1037);

var G__1038 = cljs.core.next.call(null,seq__1009_1031__$1);
var G__1039 = null;
var G__1040 = (0);
var G__1041 = (0);
seq__1009_1021 = G__1038;
chunk__1010_1022 = G__1039;
count__1011_1023 = G__1040;
i__1012_1024 = G__1041;
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
var seq__1013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1014 = null;
var count__1015 = (0);
var i__1016 = (0);
while(true){
if((i__1016 < count__1015)){
var vec__1017 = cljs.core._nth.call(null,chunk__1014,i__1016);
var name = cljs.core.nth.call(null,vec__1017,(0),null);
var map__1018 = cljs.core.nth.call(null,vec__1017,(1),null);
var map__1018__$1 = ((cljs.core.seq_QMARK_.call(null,map__1018))?cljs.core.apply.call(null,cljs.core.hash_map,map__1018):map__1018);
var arglists = cljs.core.get.call(null,map__1018__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__1018__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1042 = seq__1013;
var G__1043 = chunk__1014;
var G__1044 = count__1015;
var G__1045 = (i__1016 + (1));
seq__1013 = G__1042;
chunk__1014 = G__1043;
count__1015 = G__1044;
i__1016 = G__1045;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__1013);
if(temp__4126__auto__){
var seq__1013__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1013__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__1013__$1);
var G__1046 = cljs.core.chunk_rest.call(null,seq__1013__$1);
var G__1047 = c__4326__auto__;
var G__1048 = cljs.core.count.call(null,c__4326__auto__);
var G__1049 = (0);
seq__1013 = G__1046;
chunk__1014 = G__1047;
count__1015 = G__1048;
i__1016 = G__1049;
continue;
} else {
var vec__1019 = cljs.core.first.call(null,seq__1013__$1);
var name = cljs.core.nth.call(null,vec__1019,(0),null);
var map__1020 = cljs.core.nth.call(null,vec__1019,(1),null);
var map__1020__$1 = ((cljs.core.seq_QMARK_.call(null,map__1020))?cljs.core.apply.call(null,cljs.core.hash_map,map__1020):map__1020);
var arglists = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__1020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1050 = cljs.core.next.call(null,seq__1013__$1);
var G__1051 = null;
var G__1052 = (0);
var G__1053 = (0);
seq__1013 = G__1050;
chunk__1014 = G__1051;
count__1015 = G__1052;
i__1016 = G__1053;
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