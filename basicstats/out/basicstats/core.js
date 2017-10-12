// Compiled by ClojureScript 0.0-3169 {}
goog.provide('basicstats.core');
goog.require('cljs.core');
goog.require('basicstats.stats');
goog.require('domina');
goog.require('clojure.browser.repl');
goog.require('domina.events');
goog.require('clojure.string');
if(typeof basicstats.core.conn !== 'undefined'){
} else {
basicstats.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
basicstats.core.calculate = (function basicstats$core$calculate(evt){
var numbers = domina.value.call(null,domina.by_id.call(null,"numbers"));
var values = cljs.core.map.call(null,((function (numbers){
return (function (p1__62_SHARP_){
return window.parseFloat(p1__62_SHARP_);
});})(numbers))
,clojure.string.split.call(null,numbers,/[ ,]+/));
domina.set_text_BANG_.call(null,domina.by_id.call(null,"mean"),basicstats.stats.mean.call(null,values));

domina.set_text_BANG_.call(null,domina.by_id.call(null,"median"),basicstats.stats.median.call(null,values));

return domina.set_text_BANG_.call(null,domina.by_id.call(null,"stdv"),basicstats.stats.standard_deviation.call(null,values));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"calculate"),"click",basicstats.core.calculate);

//# sourceMappingURL=core.js.map