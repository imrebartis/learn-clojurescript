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
var seq__1006_1018 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1007_1019 = null;
var count__1008_1020 = (0);
var i__1009_1021 = (0);
while(true){
if((i__1009_1021 < count__1008_1020)){
var f_1022 = cljs.core._nth.call(null,chunk__1007_1019,i__1009_1021);
cljs.core.println.call(null,"  ",f_1022);

var G__1023 = seq__1006_1018;
var G__1024 = chunk__1007_1019;
var G__1025 = count__1008_1020;
var G__1026 = (i__1009_1021 + (1));
seq__1006_1018 = G__1023;
chunk__1007_1019 = G__1024;
count__1008_1020 = G__1025;
i__1009_1021 = G__1026;
continue;
} else {
var temp__4126__auto___1027 = cljs.core.seq.call(null,seq__1006_1018);
if(temp__4126__auto___1027){
var seq__1006_1028__$1 = temp__4126__auto___1027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1006_1028__$1)){
var c__4326__auto___1029 = cljs.core.chunk_first.call(null,seq__1006_1028__$1);
var G__1030 = cljs.core.chunk_rest.call(null,seq__1006_1028__$1);
var G__1031 = c__4326__auto___1029;
var G__1032 = cljs.core.count.call(null,c__4326__auto___1029);
var G__1033 = (0);
seq__1006_1018 = G__1030;
chunk__1007_1019 = G__1031;
count__1008_1020 = G__1032;
i__1009_1021 = G__1033;
continue;
} else {
var f_1034 = cljs.core.first.call(null,seq__1006_1028__$1);
cljs.core.println.call(null,"  ",f_1034);

var G__1035 = cljs.core.next.call(null,seq__1006_1028__$1);
var G__1036 = null;
var G__1037 = (0);
var G__1038 = (0);
seq__1006_1018 = G__1035;
chunk__1007_1019 = G__1036;
count__1008_1020 = G__1037;
i__1009_1021 = G__1038;
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
var seq__1010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1011 = null;
var count__1012 = (0);
var i__1013 = (0);
while(true){
if((i__1013 < count__1012)){
var vec__1014 = cljs.core._nth.call(null,chunk__1011,i__1013);
var name = cljs.core.nth.call(null,vec__1014,(0),null);
var map__1015 = cljs.core.nth.call(null,vec__1014,(1),null);
var map__1015__$1 = ((cljs.core.seq_QMARK_.call(null,map__1015))?cljs.core.apply.call(null,cljs.core.hash_map,map__1015):map__1015);
var arglists = cljs.core.get.call(null,map__1015__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__1015__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1039 = seq__1010;
var G__1040 = chunk__1011;
var G__1041 = count__1012;
var G__1042 = (i__1013 + (1));
seq__1010 = G__1039;
chunk__1011 = G__1040;
count__1012 = G__1041;
i__1013 = G__1042;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__1010);
if(temp__4126__auto__){
var seq__1010__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1010__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__1010__$1);
var G__1043 = cljs.core.chunk_rest.call(null,seq__1010__$1);
var G__1044 = c__4326__auto__;
var G__1045 = cljs.core.count.call(null,c__4326__auto__);
var G__1046 = (0);
seq__1010 = G__1043;
chunk__1011 = G__1044;
count__1012 = G__1045;
i__1013 = G__1046;
continue;
} else {
var vec__1016 = cljs.core.first.call(null,seq__1010__$1);
var name = cljs.core.nth.call(null,vec__1016,(0),null);
var map__1017 = cljs.core.nth.call(null,vec__1016,(1),null);
var map__1017__$1 = ((cljs.core.seq_QMARK_.call(null,map__1017))?cljs.core.apply.call(null,cljs.core.hash_map,map__1017):map__1017);
var arglists = cljs.core.get.call(null,map__1017__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__1017__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1047 = cljs.core.next.call(null,seq__1010__$1);
var G__1048 = null;
var G__1049 = (0);
var G__1050 = (0);
seq__1010 = G__1047;
chunk__1011 = G__1048;
count__1012 = G__1049;
i__1013 = G__1050;
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