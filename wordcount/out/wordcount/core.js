// Compiled by ClojureScript 0.0-3169 {}
goog.provide('wordcount.core');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('clojure.string');
goog.require('clojure.browser.repl');
if(typeof wordcount.core.conn !== 'undefined'){
} else {
wordcount.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
wordcount.core.add_word = (function wordcount$core$add_word(wordmap,word){
var n = wordmap.call(null,word);
return cljs.core.assoc.call(null,wordmap,word,(((n == null))?(1):((1) + n)));
});
wordcount.core.create_word_map = (function wordcount$core$create_word_map(wordlist){
return cljs.core.reduce.call(null,wordcount.core.add_word,cljs.core.PersistentArrayMap.EMPTY,wordlist);
});
wordcount.core.make_list = (function wordcount$core$make_list(input_map){
var the_keys = cljs.core.sort.call(null,cljs.core.keys.call(null,input_map));
return cljs.core.reduce.call(null,((function (the_keys){
return (function (acc,x){
return [cljs.core.str(acc),cljs.core.str("<li>"),cljs.core.str(x),cljs.core.str(": "),cljs.core.str(input_map.call(null,x)),cljs.core.str("</li>")].join('');
});})(the_keys))
,"",the_keys);
});
wordcount.core.update_page = (function wordcount$core$update_page(evt){
var the_text = domina.value.call(null,domina.by_id.call(null,"words"));
var wordlist = clojure.string.split.call(null,the_text,/[^a-zA-Z]+/);
var freq_map = wordcount.core.create_word_map.call(null,wordlist);
var result = domina.by_id.call(null,"result");
domina.destroy_children_BANG_.call(null,result);

return domina.append_BANG_.call(null,result,wordcount.core.make_list.call(null,freq_map));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"go"),"click",wordcount.core.update_page);

//# sourceMappingURL=core.js.map