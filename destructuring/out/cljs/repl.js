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
var seq__1026_1038 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1027_1039 = null;
var count__1028_1040 = (0);
var i__1029_1041 = (0);
while(true){
if((i__1029_1041 < count__1028_1040)){
var f_1042 = cljs.core._nth.call(null,chunk__1027_1039,i__1029_1041);
cljs.core.println.call(null,"  ",f_1042);

var G__1043 = seq__1026_1038;
var G__1044 = chunk__1027_1039;
var G__1045 = count__1028_1040;
var G__1046 = (i__1029_1041 + (1));
seq__1026_1038 = G__1043;
chunk__1027_1039 = G__1044;
count__1028_1040 = G__1045;
i__1029_1041 = G__1046;
continue;
} else {
var temp__4126__auto___1047 = cljs.core.seq.call(null,seq__1026_1038);
if(temp__4126__auto___1047){
var seq__1026_1048__$1 = temp__4126__auto___1047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1026_1048__$1)){
var c__4326__auto___1049 = cljs.core.chunk_first.call(null,seq__1026_1048__$1);
var G__1050 = cljs.core.chunk_rest.call(null,seq__1026_1048__$1);
var G__1051 = c__4326__auto___1049;
var G__1052 = cljs.core.count.call(null,c__4326__auto___1049);
var G__1053 = (0);
seq__1026_1038 = G__1050;
chunk__1027_1039 = G__1051;
count__1028_1040 = G__1052;
i__1029_1041 = G__1053;
continue;
} else {
var f_1054 = cljs.core.first.call(null,seq__1026_1048__$1);
cljs.core.println.call(null,"  ",f_1054);

var G__1055 = cljs.core.next.call(null,seq__1026_1048__$1);
var G__1056 = null;
var G__1057 = (0);
var G__1058 = (0);
seq__1026_1038 = G__1055;
chunk__1027_1039 = G__1056;
count__1028_1040 = G__1057;
i__1029_1041 = G__1058;
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
var seq__1030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1031 = null;
var count__1032 = (0);
var i__1033 = (0);
while(true){
if((i__1033 < count__1032)){
var vec__1034 = cljs.core._nth.call(null,chunk__1031,i__1033);
var name = cljs.core.nth.call(null,vec__1034,(0),null);
var map__1035 = cljs.core.nth.call(null,vec__1034,(1),null);
var map__1035__$1 = ((cljs.core.seq_QMARK_.call(null,map__1035))?cljs.core.apply.call(null,cljs.core.hash_map,map__1035):map__1035);
var arglists = cljs.core.get.call(null,map__1035__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__1035__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1059 = seq__1030;
var G__1060 = chunk__1031;
var G__1061 = count__1032;
var G__1062 = (i__1033 + (1));
seq__1030 = G__1059;
chunk__1031 = G__1060;
count__1032 = G__1061;
i__1033 = G__1062;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__1030);
if(temp__4126__auto__){
var seq__1030__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1030__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__1030__$1);
var G__1063 = cljs.core.chunk_rest.call(null,seq__1030__$1);
var G__1064 = c__4326__auto__;
var G__1065 = cljs.core.count.call(null,c__4326__auto__);
var G__1066 = (0);
seq__1030 = G__1063;
chunk__1031 = G__1064;
count__1032 = G__1065;
i__1033 = G__1066;
continue;
} else {
var vec__1036 = cljs.core.first.call(null,seq__1030__$1);
var name = cljs.core.nth.call(null,vec__1036,(0),null);
var map__1037 = cljs.core.nth.call(null,vec__1036,(1),null);
var map__1037__$1 = ((cljs.core.seq_QMARK_.call(null,map__1037))?cljs.core.apply.call(null,cljs.core.hash_map,map__1037):map__1037);
var arglists = cljs.core.get.call(null,map__1037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__1037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1067 = cljs.core.next.call(null,seq__1030__$1);
var G__1068 = null;
var G__1069 = (0);
var G__1070 = (0);
seq__1030 = G__1067;
chunk__1031 = G__1068;
count__1032 = G__1069;
i__1033 = G__1070;
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