// Compiled by ClojureScript 0.0-3169 {}
goog.provide('destructuring.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('clojure.string');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof destructuring.core.conn !== 'undefined'){
} else {
destructuring.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
destructuring.core.cities = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Tokyo","Tokyo",1029867052),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Japan",(9071577),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [35.69,139.69], null)], null),new cljs.core.Keyword(null,"Paris","Paris",96650199),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["France",(2273305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [48.86,2.35], null)], null),new cljs.core.Keyword(null,"Toronto","Toronto",567503835),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Canada",(2615060),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [43.65,-79.38], null)], null),new cljs.core.Keyword(null,"Lima","Lima",-1531299293),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Per\u00FA",(8693387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-12.05,-77.04], null)], null)], null);
destructuring.core.create_row = (function destructuring$core$create_row(item){
var vec__6386 = item;
var city = cljs.core.nth.call(null,vec__6386,(0),null);
var vec__6387 = cljs.core.nth.call(null,vec__6386,(1),null);
var country = cljs.core.nth.call(null,vec__6387,(0),null);
var population = cljs.core.nth.call(null,vec__6387,(1),null);
var vec__6388 = cljs.core.nth.call(null,vec__6387,(2),null);
var lat = cljs.core.nth.call(null,vec__6388,(0),null);
var lon = cljs.core.nth.call(null,vec__6388,(1),null);
return [cljs.core.str("<tr><td>"),cljs.core.str(clojure.string.join.call(null,"</td><td>",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,city),country,population,[cljs.core.str(lat),cljs.core.str("\u00B0")].join(''),[cljs.core.str(lon),cljs.core.str("\u00B0")].join('')], null))),cljs.core.str("</td></tr>")].join('');
});
destructuring.core.make_table = (function destructuring$core$make_table(node,city_map){
var seq__6393 = cljs.core.seq.call(null,cljs.core.sort.call(null,city_map));
var chunk__6394 = null;
var count__6395 = (0);
var i__6396 = (0);
while(true){
if((i__6396 < count__6395)){
var item = cljs.core._nth.call(null,chunk__6394,i__6396);
domina.append_BANG_.call(null,node,destructuring.core.create_row.call(null,item));

var G__6397 = seq__6393;
var G__6398 = chunk__6394;
var G__6399 = count__6395;
var G__6400 = (i__6396 + (1));
seq__6393 = G__6397;
chunk__6394 = G__6398;
count__6395 = G__6399;
i__6396 = G__6400;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6393);
if(temp__4126__auto__){
var seq__6393__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6393__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__6393__$1);
var G__6401 = cljs.core.chunk_rest.call(null,seq__6393__$1);
var G__6402 = c__4326__auto__;
var G__6403 = cljs.core.count.call(null,c__4326__auto__);
var G__6404 = (0);
seq__6393 = G__6401;
chunk__6394 = G__6402;
count__6395 = G__6403;
i__6396 = G__6404;
continue;
} else {
var item = cljs.core.first.call(null,seq__6393__$1);
domina.append_BANG_.call(null,node,destructuring.core.create_row.call(null,item));

var G__6405 = cljs.core.next.call(null,seq__6393__$1);
var G__6406 = null;
var G__6407 = (0);
var G__6408 = (0);
seq__6393 = G__6405;
chunk__6394 = G__6406;
count__6395 = G__6407;
i__6396 = G__6408;
continue;
}
} else {
return null;
}
}
break;
}
});
destructuring.core.make_table.call(null,domina.by_id.call(null,"cityBody"),destructuring.core.cities);

//# sourceMappingURL=core.js.map