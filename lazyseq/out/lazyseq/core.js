// Compiled by ClojureScript 0.0-3169 {}
goog.provide('lazyseq.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('clojure.browser.repl');
if(typeof lazyseq.core.conn !== 'undefined'){
} else {
lazyseq.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
lazyseq.core.square = (function lazyseq$core$square(x){
cljs.core.println.call(null,"Squaring",x);

return (x * x);
});
lazyseq.core.the_list = domina.by_id.call(null,"sampleList");
lazyseq.core.animals = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ant","bee","cat","dog","elk"], null);
lazyseq.core.list_item = (function lazyseq$core$list_item(text){
return [cljs.core.str("<li>"),cljs.core.str(text),cljs.core.str("</li>")].join('');
});
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (x){
return domina.append_BANG_.call(null,lazyseq.core.the_list,lazyseq.core.list_item.call(null,x));
}),lazyseq.core.animals));

//# sourceMappingURL=core.js.map