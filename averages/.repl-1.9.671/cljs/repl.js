// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13357){
var map__13358 = p__13357;
var map__13358__$1 = ((((!((map__13358 == null)))?((((map__13358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13358):map__13358);
var m = map__13358__$1;
var n = cljs.core.get.call(null,map__13358__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__13358__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13360_13382 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13361_13383 = null;
var count__13362_13384 = (0);
var i__13363_13385 = (0);
while(true){
if((i__13363_13385 < count__13362_13384)){
var f_13386 = cljs.core._nth.call(null,chunk__13361_13383,i__13363_13385);
cljs.core.println.call(null,"  ",f_13386);

var G__13387 = seq__13360_13382;
var G__13388 = chunk__13361_13383;
var G__13389 = count__13362_13384;
var G__13390 = (i__13363_13385 + (1));
seq__13360_13382 = G__13387;
chunk__13361_13383 = G__13388;
count__13362_13384 = G__13389;
i__13363_13385 = G__13390;
continue;
} else {
var temp__4657__auto___13391 = cljs.core.seq.call(null,seq__13360_13382);
if(temp__4657__auto___13391){
var seq__13360_13392__$1 = temp__4657__auto___13391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13360_13392__$1)){
var c__8455__auto___13393 = cljs.core.chunk_first.call(null,seq__13360_13392__$1);
var G__13394 = cljs.core.chunk_rest.call(null,seq__13360_13392__$1);
var G__13395 = c__8455__auto___13393;
var G__13396 = cljs.core.count.call(null,c__8455__auto___13393);
var G__13397 = (0);
seq__13360_13382 = G__13394;
chunk__13361_13383 = G__13395;
count__13362_13384 = G__13396;
i__13363_13385 = G__13397;
continue;
} else {
var f_13398 = cljs.core.first.call(null,seq__13360_13392__$1);
cljs.core.println.call(null,"  ",f_13398);

var G__13399 = cljs.core.next.call(null,seq__13360_13392__$1);
var G__13400 = null;
var G__13401 = (0);
var G__13402 = (0);
seq__13360_13382 = G__13399;
chunk__13361_13383 = G__13400;
count__13362_13384 = G__13401;
i__13363_13385 = G__13402;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13403 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7635__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7635__auto__)){
return or__7635__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13403);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13403)))?cljs.core.second.call(null,arglists_13403):arglists_13403));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__13364_13404 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13365_13405 = null;
var count__13366_13406 = (0);
var i__13367_13407 = (0);
while(true){
if((i__13367_13407 < count__13366_13406)){
var vec__13368_13408 = cljs.core._nth.call(null,chunk__13365_13405,i__13367_13407);
var name_13409 = cljs.core.nth.call(null,vec__13368_13408,(0),null);
var map__13371_13410 = cljs.core.nth.call(null,vec__13368_13408,(1),null);
var map__13371_13411__$1 = ((((!((map__13371_13410 == null)))?((((map__13371_13410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13371_13410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13371_13410):map__13371_13410);
var doc_13412 = cljs.core.get.call(null,map__13371_13411__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13413 = cljs.core.get.call(null,map__13371_13411__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13409);

cljs.core.println.call(null," ",arglists_13413);

if(cljs.core.truth_(doc_13412)){
cljs.core.println.call(null," ",doc_13412);
} else {
}

var G__13414 = seq__13364_13404;
var G__13415 = chunk__13365_13405;
var G__13416 = count__13366_13406;
var G__13417 = (i__13367_13407 + (1));
seq__13364_13404 = G__13414;
chunk__13365_13405 = G__13415;
count__13366_13406 = G__13416;
i__13367_13407 = G__13417;
continue;
} else {
var temp__4657__auto___13418 = cljs.core.seq.call(null,seq__13364_13404);
if(temp__4657__auto___13418){
var seq__13364_13419__$1 = temp__4657__auto___13418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13364_13419__$1)){
var c__8455__auto___13420 = cljs.core.chunk_first.call(null,seq__13364_13419__$1);
var G__13421 = cljs.core.chunk_rest.call(null,seq__13364_13419__$1);
var G__13422 = c__8455__auto___13420;
var G__13423 = cljs.core.count.call(null,c__8455__auto___13420);
var G__13424 = (0);
seq__13364_13404 = G__13421;
chunk__13365_13405 = G__13422;
count__13366_13406 = G__13423;
i__13367_13407 = G__13424;
continue;
} else {
var vec__13373_13425 = cljs.core.first.call(null,seq__13364_13419__$1);
var name_13426 = cljs.core.nth.call(null,vec__13373_13425,(0),null);
var map__13376_13427 = cljs.core.nth.call(null,vec__13373_13425,(1),null);
var map__13376_13428__$1 = ((((!((map__13376_13427 == null)))?((((map__13376_13427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13376_13427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13376_13427):map__13376_13427);
var doc_13429 = cljs.core.get.call(null,map__13376_13428__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13430 = cljs.core.get.call(null,map__13376_13428__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_13426);

cljs.core.println.call(null," ",arglists_13430);

if(cljs.core.truth_(doc_13429)){
cljs.core.println.call(null," ",doc_13429);
} else {
}

var G__13431 = cljs.core.next.call(null,seq__13364_13419__$1);
var G__13432 = null;
var G__13433 = (0);
var G__13434 = (0);
seq__13364_13404 = G__13431;
chunk__13365_13405 = G__13432;
count__13366_13406 = G__13433;
i__13367_13407 = G__13434;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__13378 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13379 = null;
var count__13380 = (0);
var i__13381 = (0);
while(true){
if((i__13381 < count__13380)){
var role = cljs.core._nth.call(null,chunk__13379,i__13381);
var temp__4657__auto___13435__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13435__$1)){
var spec_13436 = temp__4657__auto___13435__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_13436));
} else {
}

var G__13437 = seq__13378;
var G__13438 = chunk__13379;
var G__13439 = count__13380;
var G__13440 = (i__13381 + (1));
seq__13378 = G__13437;
chunk__13379 = G__13438;
count__13380 = G__13439;
i__13381 = G__13440;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__13378);
if(temp__4657__auto____$1){
var seq__13378__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13378__$1)){
var c__8455__auto__ = cljs.core.chunk_first.call(null,seq__13378__$1);
var G__13441 = cljs.core.chunk_rest.call(null,seq__13378__$1);
var G__13442 = c__8455__auto__;
var G__13443 = cljs.core.count.call(null,c__8455__auto__);
var G__13444 = (0);
seq__13378 = G__13441;
chunk__13379 = G__13442;
count__13380 = G__13443;
i__13381 = G__13444;
continue;
} else {
var role = cljs.core.first.call(null,seq__13378__$1);
var temp__4657__auto___13445__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___13445__$2)){
var spec_13446 = temp__4657__auto___13445__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_13446));
} else {
}

var G__13447 = cljs.core.next.call(null,seq__13378__$1);
var G__13448 = null;
var G__13449 = (0);
var G__13450 = (0);
seq__13378 = G__13447;
chunk__13379 = G__13448;
count__13380 = G__13449;
i__13381 = G__13450;
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
} else {
return null;
}
}
});
