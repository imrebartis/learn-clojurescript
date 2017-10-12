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
var seq__644_656 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__645_657 = null;
var count__646_658 = (0);
var i__647_659 = (0);
while(true){
if((i__647_659 < count__646_658)){
var f_660 = cljs.core._nth.call(null,chunk__645_657,i__647_659);
cljs.core.println.call(null,"  ",f_660);

var G__661 = seq__644_656;
var G__662 = chunk__645_657;
var G__663 = count__646_658;
var G__664 = (i__647_659 + (1));
seq__644_656 = G__661;
chunk__645_657 = G__662;
count__646_658 = G__663;
i__647_659 = G__664;
continue;
} else {
var temp__4126__auto___665 = cljs.core.seq.call(null,seq__644_656);
if(temp__4126__auto___665){
var seq__644_666__$1 = temp__4126__auto___665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__644_666__$1)){
var c__4326__auto___667 = cljs.core.chunk_first.call(null,seq__644_666__$1);
var G__668 = cljs.core.chunk_rest.call(null,seq__644_666__$1);
var G__669 = c__4326__auto___667;
var G__670 = cljs.core.count.call(null,c__4326__auto___667);
var G__671 = (0);
seq__644_656 = G__668;
chunk__645_657 = G__669;
count__646_658 = G__670;
i__647_659 = G__671;
continue;
} else {
var f_672 = cljs.core.first.call(null,seq__644_666__$1);
cljs.core.println.call(null,"  ",f_672);

var G__673 = cljs.core.next.call(null,seq__644_666__$1);
var G__674 = null;
var G__675 = (0);
var G__676 = (0);
seq__644_656 = G__673;
chunk__645_657 = G__674;
count__646_658 = G__675;
i__647_659 = G__676;
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
var seq__648 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__649 = null;
var count__650 = (0);
var i__651 = (0);
while(true){
if((i__651 < count__650)){
var vec__652 = cljs.core._nth.call(null,chunk__649,i__651);
var name = cljs.core.nth.call(null,vec__652,(0),null);
var map__653 = cljs.core.nth.call(null,vec__652,(1),null);
var map__653__$1 = ((cljs.core.seq_QMARK_.call(null,map__653))?cljs.core.apply.call(null,cljs.core.hash_map,map__653):map__653);
var arglists = cljs.core.get.call(null,map__653__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__653__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__677 = seq__648;
var G__678 = chunk__649;
var G__679 = count__650;
var G__680 = (i__651 + (1));
seq__648 = G__677;
chunk__649 = G__678;
count__650 = G__679;
i__651 = G__680;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__648);
if(temp__4126__auto__){
var seq__648__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__648__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__648__$1);
var G__681 = cljs.core.chunk_rest.call(null,seq__648__$1);
var G__682 = c__4326__auto__;
var G__683 = cljs.core.count.call(null,c__4326__auto__);
var G__684 = (0);
seq__648 = G__681;
chunk__649 = G__682;
count__650 = G__683;
i__651 = G__684;
continue;
} else {
var vec__654 = cljs.core.first.call(null,seq__648__$1);
var name = cljs.core.nth.call(null,vec__654,(0),null);
var map__655 = cljs.core.nth.call(null,vec__654,(1),null);
var map__655__$1 = ((cljs.core.seq_QMARK_.call(null,map__655))?cljs.core.apply.call(null,cljs.core.hash_map,map__655):map__655);
var arglists = cljs.core.get.call(null,map__655__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__655__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__685 = cljs.core.next.call(null,seq__648__$1);
var G__686 = null;
var G__687 = (0);
var G__688 = (0);
seq__648 = G__685;
chunk__649 = G__686;
count__650 = G__687;
i__651 = G__688;
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