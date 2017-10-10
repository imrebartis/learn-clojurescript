// Compiled by ClojureScript 0.0-3169 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_275 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_276 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_277 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_277,opt_wrapper_275,table_section_wrapper_276,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_275,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_276,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_276,cell_wrapper_277,table_section_wrapper_276,table_section_wrapper_276]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3949__auto__ = div.firstChild;
if(cljs.core.truth_(and__3949__auto__)){
return div.firstChild.childNodes;
} else {
return and__3949__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__282 = cljs.core.seq.call(null,tbody);
var chunk__283 = null;
var count__284 = (0);
var i__285 = (0);
while(true){
if((i__285 < count__284)){
var child = cljs.core._nth.call(null,chunk__283,i__285);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__286 = seq__282;
var G__287 = chunk__283;
var G__288 = count__284;
var G__289 = (i__285 + (1));
seq__282 = G__286;
chunk__283 = G__287;
count__284 = G__288;
i__285 = G__289;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__282);
if(temp__4126__auto__){
var seq__282__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__282__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__282__$1);
var G__290 = cljs.core.chunk_rest.call(null,seq__282__$1);
var G__291 = c__4326__auto__;
var G__292 = cljs.core.count.call(null,c__4326__auto__);
var G__293 = (0);
seq__282 = G__290;
chunk__283 = G__291;
count__284 = G__292;
i__285 = G__293;
continue;
} else {
var child = cljs.core.first.call(null,seq__282__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__294 = cljs.core.next.call(null,seq__282__$1);
var G__295 = null;
var G__296 = (0);
var G__297 = (0);
seq__282 = G__294;
chunk__283 = G__295;
count__284 = G__296;
i__285 = G__297;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__299 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__299,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__299,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__299,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__300 = wrapper.lastChild;
var G__301 = (level - (1));
wrapper = G__300;
level = G__301;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3949__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3949__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3949__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj303 = {};
return obj303;
})();

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((function (){var and__3949__auto__ = content;
if(and__3949__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__3949__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4221__auto__ = (((content == null))?null:content);
return (function (){var or__3957__auto__ = (domina.nodes[goog.typeOf(x__4221__auto__)]);
if(or__3957__auto__){
return or__3957__auto__;
} else {
var or__3957__auto____$1 = (domina.nodes["_"]);
if(or__3957__auto____$1){
return or__3957__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((function (){var and__3949__auto__ = nodeseq;
if(and__3949__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__3949__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4221__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3957__auto__ = (domina.single_node[goog.typeOf(x__4221__auto__)]);
if(or__3957__auto__){
return or__3957__auto__;
} else {
var or__3957__auto____$1 = (domina.single_node["_"]);
if(or__3957__auto____$1){
return or__3957__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
 * @param {...*} var_args
 */
domina.log_debug = (function() { 
var domina$log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3949__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3949__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3949__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var domina$log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__304__i = 0, G__304__a = new Array(arguments.length -  0);
while (G__304__i < G__304__a.length) {G__304__a[G__304__i] = arguments[G__304__i + 0]; ++G__304__i;}
  mesg = new cljs.core.IndexedSeq(G__304__a,0);
} 
return domina$log_debug__delegate.call(this,mesg);};
domina$log_debug.cljs$lang$maxFixedArity = 0;
domina$log_debug.cljs$lang$applyTo = (function (arglist__305){
var mesg = cljs.core.seq(arglist__305);
return domina$log_debug__delegate(mesg);
});
domina$log_debug.cljs$core$IFn$_invoke$arity$variadic = domina$log_debug__delegate;
return domina$log_debug;
})()
;
/**
 * @param {...*} var_args
 */
domina.log = (function() { 
var domina$log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var domina$log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__306__i = 0, G__306__a = new Array(arguments.length -  0);
while (G__306__i < G__306__a.length) {G__306__a[G__306__i] = arguments[G__306__i + 0]; ++G__306__i;}
  mesg = new cljs.core.IndexedSeq(G__306__a,0);
} 
return domina$log__delegate.call(this,mesg);};
domina$log.cljs$lang$maxFixedArity = 0;
domina$log.cljs$lang$applyTo = (function (arglist__307){
var mesg = cljs.core.seq(arglist__307);
return domina$log__delegate(mesg);
});
domina$log.cljs$core$IFn$_invoke$arity$variadic = domina$log__delegate;
return domina$log;
})()
;
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 * @param {...*} var_args
 */
domina.common_ancestor = (function() { 
var domina$common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var domina$common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__308__i = 0, G__308__a = new Array(arguments.length -  0);
while (G__308__i < G__308__a.length) {G__308__a[G__308__i] = arguments[G__308__i + 0]; ++G__308__i;}
  contents = new cljs.core.IndexedSeq(G__308__a,0);
} 
return domina$common_ancestor__delegate.call(this,contents);};
domina$common_ancestor.cljs$lang$maxFixedArity = 0;
domina$common_ancestor.cljs$lang$applyTo = (function (arglist__309){
var contents = cljs.core.seq(arglist__309);
return domina$common_ancestor__delegate(contents);
});
domina$common_ancestor.cljs$core$IFn$_invoke$arity$variadic = domina$common_ancestor__delegate;
return domina$common_ancestor;
})()
;
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__310_SHARP_){
return p1__310_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__311_SHARP_,p2__312_SHARP_){
return goog.dom.insertChildAt(p1__311_SHARP_,p2__312_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__314_SHARP_,p2__313_SHARP_){
return goog.dom.insertSiblingBefore(p2__313_SHARP_,p1__314_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__316_SHARP_,p2__315_SHARP_){
return goog.dom.insertSiblingAfter(p2__315_SHARP_,p1__316_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__318_SHARP_,p2__317_SHARP_){
return goog.dom.replaceNode(p2__317_SHARP_,p1__318_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 * @param {...*} var_args
 */
domina.set_style_BANG_ = (function() { 
var domina$set_style_BANG___delegate = function (content,name,value){
var seq__323_327 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__324_328 = null;
var count__325_329 = (0);
var i__326_330 = (0);
while(true){
if((i__326_330 < count__325_329)){
var n_331 = cljs.core._nth.call(null,chunk__324_328,i__326_330);
goog.style.setStyle(n_331,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__332 = seq__323_327;
var G__333 = chunk__324_328;
var G__334 = count__325_329;
var G__335 = (i__326_330 + (1));
seq__323_327 = G__332;
chunk__324_328 = G__333;
count__325_329 = G__334;
i__326_330 = G__335;
continue;
} else {
var temp__4126__auto___336 = cljs.core.seq.call(null,seq__323_327);
if(temp__4126__auto___336){
var seq__323_337__$1 = temp__4126__auto___336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__323_337__$1)){
var c__4326__auto___338 = cljs.core.chunk_first.call(null,seq__323_337__$1);
var G__339 = cljs.core.chunk_rest.call(null,seq__323_337__$1);
var G__340 = c__4326__auto___338;
var G__341 = cljs.core.count.call(null,c__4326__auto___338);
var G__342 = (0);
seq__323_327 = G__339;
chunk__324_328 = G__340;
count__325_329 = G__341;
i__326_330 = G__342;
continue;
} else {
var n_343 = cljs.core.first.call(null,seq__323_337__$1);
goog.style.setStyle(n_343,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__344 = cljs.core.next.call(null,seq__323_337__$1);
var G__345 = null;
var G__346 = (0);
var G__347 = (0);
seq__323_327 = G__344;
chunk__324_328 = G__345;
count__325_329 = G__346;
i__326_330 = G__347;
continue;
}
} else {
}
}
break;
}

return content;
};
var domina$set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__348__i = 0, G__348__a = new Array(arguments.length -  2);
while (G__348__i < G__348__a.length) {G__348__a[G__348__i] = arguments[G__348__i + 2]; ++G__348__i;}
  value = new cljs.core.IndexedSeq(G__348__a,0);
} 
return domina$set_style_BANG___delegate.call(this,content,name,value);};
domina$set_style_BANG_.cljs$lang$maxFixedArity = 2;
domina$set_style_BANG_.cljs$lang$applyTo = (function (arglist__349){
var content = cljs.core.first(arglist__349);
arglist__349 = cljs.core.next(arglist__349);
var name = cljs.core.first(arglist__349);
var value = cljs.core.rest(arglist__349);
return domina$set_style_BANG___delegate(content,name,value);
});
domina$set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = domina$set_style_BANG___delegate;
return domina$set_style_BANG_;
})()
;
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 * @param {...*} var_args
 */
domina.set_attr_BANG_ = (function() { 
var domina$set_attr_BANG___delegate = function (content,name,value){
var seq__354_358 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__355_359 = null;
var count__356_360 = (0);
var i__357_361 = (0);
while(true){
if((i__357_361 < count__356_360)){
var n_362 = cljs.core._nth.call(null,chunk__355_359,i__357_361);
n_362.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__363 = seq__354_358;
var G__364 = chunk__355_359;
var G__365 = count__356_360;
var G__366 = (i__357_361 + (1));
seq__354_358 = G__363;
chunk__355_359 = G__364;
count__356_360 = G__365;
i__357_361 = G__366;
continue;
} else {
var temp__4126__auto___367 = cljs.core.seq.call(null,seq__354_358);
if(temp__4126__auto___367){
var seq__354_368__$1 = temp__4126__auto___367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__354_368__$1)){
var c__4326__auto___369 = cljs.core.chunk_first.call(null,seq__354_368__$1);
var G__370 = cljs.core.chunk_rest.call(null,seq__354_368__$1);
var G__371 = c__4326__auto___369;
var G__372 = cljs.core.count.call(null,c__4326__auto___369);
var G__373 = (0);
seq__354_358 = G__370;
chunk__355_359 = G__371;
count__356_360 = G__372;
i__357_361 = G__373;
continue;
} else {
var n_374 = cljs.core.first.call(null,seq__354_368__$1);
n_374.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__375 = cljs.core.next.call(null,seq__354_368__$1);
var G__376 = null;
var G__377 = (0);
var G__378 = (0);
seq__354_358 = G__375;
chunk__355_359 = G__376;
count__356_360 = G__377;
i__357_361 = G__378;
continue;
}
} else {
}
}
break;
}

return content;
};
var domina$set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__379__i = 0, G__379__a = new Array(arguments.length -  2);
while (G__379__i < G__379__a.length) {G__379__a[G__379__i] = arguments[G__379__i + 2]; ++G__379__i;}
  value = new cljs.core.IndexedSeq(G__379__a,0);
} 
return domina$set_attr_BANG___delegate.call(this,content,name,value);};
domina$set_attr_BANG_.cljs$lang$maxFixedArity = 2;
domina$set_attr_BANG_.cljs$lang$applyTo = (function (arglist__380){
var content = cljs.core.first(arglist__380);
arglist__380 = cljs.core.next(arglist__380);
var name = cljs.core.first(arglist__380);
var value = cljs.core.rest(arglist__380);
return domina$set_attr_BANG___delegate(content,name,value);
});
domina$set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = domina$set_attr_BANG___delegate;
return domina$set_attr_BANG_;
})()
;
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__385_389 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__386_390 = null;
var count__387_391 = (0);
var i__388_392 = (0);
while(true){
if((i__388_392 < count__387_391)){
var n_393 = cljs.core._nth.call(null,chunk__386_390,i__388_392);
n_393.removeAttribute(cljs.core.name.call(null,name));

var G__394 = seq__385_389;
var G__395 = chunk__386_390;
var G__396 = count__387_391;
var G__397 = (i__388_392 + (1));
seq__385_389 = G__394;
chunk__386_390 = G__395;
count__387_391 = G__396;
i__388_392 = G__397;
continue;
} else {
var temp__4126__auto___398 = cljs.core.seq.call(null,seq__385_389);
if(temp__4126__auto___398){
var seq__385_399__$1 = temp__4126__auto___398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__385_399__$1)){
var c__4326__auto___400 = cljs.core.chunk_first.call(null,seq__385_399__$1);
var G__401 = cljs.core.chunk_rest.call(null,seq__385_399__$1);
var G__402 = c__4326__auto___400;
var G__403 = cljs.core.count.call(null,c__4326__auto___400);
var G__404 = (0);
seq__385_389 = G__401;
chunk__386_390 = G__402;
count__387_391 = G__403;
i__388_392 = G__404;
continue;
} else {
var n_405 = cljs.core.first.call(null,seq__385_399__$1);
n_405.removeAttribute(cljs.core.name.call(null,name));

var G__406 = cljs.core.next.call(null,seq__385_399__$1);
var G__407 = null;
var G__408 = (0);
var G__409 = (0);
seq__385_389 = G__406;
chunk__386_390 = G__407;
count__387_391 = G__408;
i__388_392 = G__409;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__411 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__411,(0),null);
var v = cljs.core.nth.call(null,vec__411,(1),null);
if(cljs.core.truth_((function (){var and__3949__auto__ = k;
if(cljs.core.truth_(and__3949__auto__)){
return v;
} else {
return and__3949__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__412_SHARP_){
var attr = attrs__$1.item(p1__412_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__419_425 = cljs.core.seq.call(null,styles);
var chunk__420_426 = null;
var count__421_427 = (0);
var i__422_428 = (0);
while(true){
if((i__422_428 < count__421_427)){
var vec__423_429 = cljs.core._nth.call(null,chunk__420_426,i__422_428);
var name_430 = cljs.core.nth.call(null,vec__423_429,(0),null);
var value_431 = cljs.core.nth.call(null,vec__423_429,(1),null);
domina.set_style_BANG_.call(null,content,name_430,value_431);

var G__432 = seq__419_425;
var G__433 = chunk__420_426;
var G__434 = count__421_427;
var G__435 = (i__422_428 + (1));
seq__419_425 = G__432;
chunk__420_426 = G__433;
count__421_427 = G__434;
i__422_428 = G__435;
continue;
} else {
var temp__4126__auto___436 = cljs.core.seq.call(null,seq__419_425);
if(temp__4126__auto___436){
var seq__419_437__$1 = temp__4126__auto___436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__419_437__$1)){
var c__4326__auto___438 = cljs.core.chunk_first.call(null,seq__419_437__$1);
var G__439 = cljs.core.chunk_rest.call(null,seq__419_437__$1);
var G__440 = c__4326__auto___438;
var G__441 = cljs.core.count.call(null,c__4326__auto___438);
var G__442 = (0);
seq__419_425 = G__439;
chunk__420_426 = G__440;
count__421_427 = G__441;
i__422_428 = G__442;
continue;
} else {
var vec__424_443 = cljs.core.first.call(null,seq__419_437__$1);
var name_444 = cljs.core.nth.call(null,vec__424_443,(0),null);
var value_445 = cljs.core.nth.call(null,vec__424_443,(1),null);
domina.set_style_BANG_.call(null,content,name_444,value_445);

var G__446 = cljs.core.next.call(null,seq__419_437__$1);
var G__447 = null;
var G__448 = (0);
var G__449 = (0);
seq__419_425 = G__446;
chunk__420_426 = G__447;
count__421_427 = G__448;
i__422_428 = G__449;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__456_462 = cljs.core.seq.call(null,attrs);
var chunk__457_463 = null;
var count__458_464 = (0);
var i__459_465 = (0);
while(true){
if((i__459_465 < count__458_464)){
var vec__460_466 = cljs.core._nth.call(null,chunk__457_463,i__459_465);
var name_467 = cljs.core.nth.call(null,vec__460_466,(0),null);
var value_468 = cljs.core.nth.call(null,vec__460_466,(1),null);
domina.set_attr_BANG_.call(null,content,name_467,value_468);

var G__469 = seq__456_462;
var G__470 = chunk__457_463;
var G__471 = count__458_464;
var G__472 = (i__459_465 + (1));
seq__456_462 = G__469;
chunk__457_463 = G__470;
count__458_464 = G__471;
i__459_465 = G__472;
continue;
} else {
var temp__4126__auto___473 = cljs.core.seq.call(null,seq__456_462);
if(temp__4126__auto___473){
var seq__456_474__$1 = temp__4126__auto___473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__456_474__$1)){
var c__4326__auto___475 = cljs.core.chunk_first.call(null,seq__456_474__$1);
var G__476 = cljs.core.chunk_rest.call(null,seq__456_474__$1);
var G__477 = c__4326__auto___475;
var G__478 = cljs.core.count.call(null,c__4326__auto___475);
var G__479 = (0);
seq__456_462 = G__476;
chunk__457_463 = G__477;
count__458_464 = G__478;
i__459_465 = G__479;
continue;
} else {
var vec__461_480 = cljs.core.first.call(null,seq__456_474__$1);
var name_481 = cljs.core.nth.call(null,vec__461_480,(0),null);
var value_482 = cljs.core.nth.call(null,vec__461_480,(1),null);
domina.set_attr_BANG_.call(null,content,name_481,value_482);

var G__483 = cljs.core.next.call(null,seq__456_474__$1);
var G__484 = null;
var G__485 = (0);
var G__486 = (0);
seq__456_462 = G__483;
chunk__457_463 = G__484;
count__458_464 = G__485;
i__459_465 = G__486;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__491_495 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__492_496 = null;
var count__493_497 = (0);
var i__494_498 = (0);
while(true){
if((i__494_498 < count__493_497)){
var node_499 = cljs.core._nth.call(null,chunk__492_496,i__494_498);
goog.dom.classes.add(node_499,class$);

var G__500 = seq__491_495;
var G__501 = chunk__492_496;
var G__502 = count__493_497;
var G__503 = (i__494_498 + (1));
seq__491_495 = G__500;
chunk__492_496 = G__501;
count__493_497 = G__502;
i__494_498 = G__503;
continue;
} else {
var temp__4126__auto___504 = cljs.core.seq.call(null,seq__491_495);
if(temp__4126__auto___504){
var seq__491_505__$1 = temp__4126__auto___504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__491_505__$1)){
var c__4326__auto___506 = cljs.core.chunk_first.call(null,seq__491_505__$1);
var G__507 = cljs.core.chunk_rest.call(null,seq__491_505__$1);
var G__508 = c__4326__auto___506;
var G__509 = cljs.core.count.call(null,c__4326__auto___506);
var G__510 = (0);
seq__491_495 = G__507;
chunk__492_496 = G__508;
count__493_497 = G__509;
i__494_498 = G__510;
continue;
} else {
var node_511 = cljs.core.first.call(null,seq__491_505__$1);
goog.dom.classes.add(node_511,class$);

var G__512 = cljs.core.next.call(null,seq__491_505__$1);
var G__513 = null;
var G__514 = (0);
var G__515 = (0);
seq__491_495 = G__512;
chunk__492_496 = G__513;
count__493_497 = G__514;
i__494_498 = G__515;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__520_524 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__521_525 = null;
var count__522_526 = (0);
var i__523_527 = (0);
while(true){
if((i__523_527 < count__522_526)){
var node_528 = cljs.core._nth.call(null,chunk__521_525,i__523_527);
goog.dom.classes.remove(node_528,class$);

var G__529 = seq__520_524;
var G__530 = chunk__521_525;
var G__531 = count__522_526;
var G__532 = (i__523_527 + (1));
seq__520_524 = G__529;
chunk__521_525 = G__530;
count__522_526 = G__531;
i__523_527 = G__532;
continue;
} else {
var temp__4126__auto___533 = cljs.core.seq.call(null,seq__520_524);
if(temp__4126__auto___533){
var seq__520_534__$1 = temp__4126__auto___533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__520_534__$1)){
var c__4326__auto___535 = cljs.core.chunk_first.call(null,seq__520_534__$1);
var G__536 = cljs.core.chunk_rest.call(null,seq__520_534__$1);
var G__537 = c__4326__auto___535;
var G__538 = cljs.core.count.call(null,c__4326__auto___535);
var G__539 = (0);
seq__520_524 = G__536;
chunk__521_525 = G__537;
count__522_526 = G__538;
i__523_527 = G__539;
continue;
} else {
var node_540 = cljs.core.first.call(null,seq__520_534__$1);
goog.dom.classes.remove(node_540,class$);

var G__541 = cljs.core.next.call(null,seq__520_534__$1);
var G__542 = null;
var G__543 = (0);
var G__544 = (0);
seq__520_524 = G__541;
chunk__521_525 = G__542;
count__522_526 = G__543;
i__523_527 = G__544;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__549_553 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__550_554 = null;
var count__551_555 = (0);
var i__552_556 = (0);
while(true){
if((i__552_556 < count__551_555)){
var node_557 = cljs.core._nth.call(null,chunk__550_554,i__552_556);
goog.dom.classes.toggle(node_557,class$);

var G__558 = seq__549_553;
var G__559 = chunk__550_554;
var G__560 = count__551_555;
var G__561 = (i__552_556 + (1));
seq__549_553 = G__558;
chunk__550_554 = G__559;
count__551_555 = G__560;
i__552_556 = G__561;
continue;
} else {
var temp__4126__auto___562 = cljs.core.seq.call(null,seq__549_553);
if(temp__4126__auto___562){
var seq__549_563__$1 = temp__4126__auto___562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__549_563__$1)){
var c__4326__auto___564 = cljs.core.chunk_first.call(null,seq__549_563__$1);
var G__565 = cljs.core.chunk_rest.call(null,seq__549_563__$1);
var G__566 = c__4326__auto___564;
var G__567 = cljs.core.count.call(null,c__4326__auto___564);
var G__568 = (0);
seq__549_553 = G__565;
chunk__550_554 = G__566;
count__551_555 = G__567;
i__552_556 = G__568;
continue;
} else {
var node_569 = cljs.core.first.call(null,seq__549_563__$1);
goog.dom.classes.toggle(node_569,class$);

var G__570 = cljs.core.next.call(null,seq__549_563__$1);
var G__571 = null;
var G__572 = (0);
var G__573 = (0);
seq__549_553 = G__570;
chunk__550_554 = G__571;
count__551_555 = G__572;
i__552_556 = G__573;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 * be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_582__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__578_583 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__579_584 = null;
var count__580_585 = (0);
var i__581_586 = (0);
while(true){
if((i__581_586 < count__580_585)){
var node_587 = cljs.core._nth.call(null,chunk__579_584,i__581_586);
goog.dom.classes.set(node_587,classes_582__$1);

var G__588 = seq__578_583;
var G__589 = chunk__579_584;
var G__590 = count__580_585;
var G__591 = (i__581_586 + (1));
seq__578_583 = G__588;
chunk__579_584 = G__589;
count__580_585 = G__590;
i__581_586 = G__591;
continue;
} else {
var temp__4126__auto___592 = cljs.core.seq.call(null,seq__578_583);
if(temp__4126__auto___592){
var seq__578_593__$1 = temp__4126__auto___592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__578_593__$1)){
var c__4326__auto___594 = cljs.core.chunk_first.call(null,seq__578_593__$1);
var G__595 = cljs.core.chunk_rest.call(null,seq__578_593__$1);
var G__596 = c__4326__auto___594;
var G__597 = cljs.core.count.call(null,c__4326__auto___594);
var G__598 = (0);
seq__578_583 = G__595;
chunk__579_584 = G__596;
count__580_585 = G__597;
i__581_586 = G__598;
continue;
} else {
var node_599 = cljs.core.first.call(null,seq__578_593__$1);
goog.dom.classes.set(node_599,classes_582__$1);

var G__600 = cljs.core.next.call(null,seq__578_593__$1);
var G__601 = null;
var G__602 = (0);
var G__603 = (0);
seq__578_583 = G__600;
chunk__579_584 = G__601;
count__580_585 = G__602;
i__581_586 = G__603;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__608_612 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__609_613 = null;
var count__610_614 = (0);
var i__611_615 = (0);
while(true){
if((i__611_615 < count__610_614)){
var node_616 = cljs.core._nth.call(null,chunk__609_613,i__611_615);
goog.dom.setTextContent(node_616,value);

var G__617 = seq__608_612;
var G__618 = chunk__609_613;
var G__619 = count__610_614;
var G__620 = (i__611_615 + (1));
seq__608_612 = G__617;
chunk__609_613 = G__618;
count__610_614 = G__619;
i__611_615 = G__620;
continue;
} else {
var temp__4126__auto___621 = cljs.core.seq.call(null,seq__608_612);
if(temp__4126__auto___621){
var seq__608_622__$1 = temp__4126__auto___621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__608_622__$1)){
var c__4326__auto___623 = cljs.core.chunk_first.call(null,seq__608_622__$1);
var G__624 = cljs.core.chunk_rest.call(null,seq__608_622__$1);
var G__625 = c__4326__auto___623;
var G__626 = cljs.core.count.call(null,c__4326__auto___623);
var G__627 = (0);
seq__608_612 = G__624;
chunk__609_613 = G__625;
count__610_614 = G__626;
i__611_615 = G__627;
continue;
} else {
var node_628 = cljs.core.first.call(null,seq__608_622__$1);
goog.dom.setTextContent(node_628,value);

var G__629 = cljs.core.next.call(null,seq__608_622__$1);
var G__630 = null;
var G__631 = (0);
var G__632 = (0);
seq__608_612 = G__629;
chunk__609_613 = G__630;
count__610_614 = G__631;
i__611_615 = G__632;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__637_641 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__638_642 = null;
var count__639_643 = (0);
var i__640_644 = (0);
while(true){
if((i__640_644 < count__639_643)){
var node_645 = cljs.core._nth.call(null,chunk__638_642,i__640_644);
goog.dom.forms.setValue(node_645,value);

var G__646 = seq__637_641;
var G__647 = chunk__638_642;
var G__648 = count__639_643;
var G__649 = (i__640_644 + (1));
seq__637_641 = G__646;
chunk__638_642 = G__647;
count__639_643 = G__648;
i__640_644 = G__649;
continue;
} else {
var temp__4126__auto___650 = cljs.core.seq.call(null,seq__637_641);
if(temp__4126__auto___650){
var seq__637_651__$1 = temp__4126__auto___650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__637_651__$1)){
var c__4326__auto___652 = cljs.core.chunk_first.call(null,seq__637_651__$1);
var G__653 = cljs.core.chunk_rest.call(null,seq__637_651__$1);
var G__654 = c__4326__auto___652;
var G__655 = cljs.core.count.call(null,c__4326__auto___652);
var G__656 = (0);
seq__637_641 = G__653;
chunk__638_642 = G__654;
count__639_643 = G__655;
i__640_644 = G__656;
continue;
} else {
var node_657 = cljs.core.first.call(null,seq__637_651__$1);
goog.dom.forms.setValue(node_657,value);

var G__658 = cljs.core.next.call(null,seq__637_651__$1);
var G__659 = null;
var G__660 = (0);
var G__661 = (0);
seq__637_641 = G__658;
chunk__638_642 = G__659;
count__639_643 = G__660;
i__640_644 = G__661;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3949__auto__ = allows_inner_html_QMARK_;
if(and__3949__auto__){
var and__3949__auto____$1 = (function (){var or__3957__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3957__auto__)){
return or__3957__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3949__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__3949__auto____$1;
}
} else {
return and__3949__auto__;
}
})())){
var value_672 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__668_673 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__669_674 = null;
var count__670_675 = (0);
var i__671_676 = (0);
while(true){
if((i__671_676 < count__670_675)){
var node_677 = cljs.core._nth.call(null,chunk__669_674,i__671_676);
node_677.innerHTML = value_672;

var G__678 = seq__668_673;
var G__679 = chunk__669_674;
var G__680 = count__670_675;
var G__681 = (i__671_676 + (1));
seq__668_673 = G__678;
chunk__669_674 = G__679;
count__670_675 = G__680;
i__671_676 = G__681;
continue;
} else {
var temp__4126__auto___682 = cljs.core.seq.call(null,seq__668_673);
if(temp__4126__auto___682){
var seq__668_683__$1 = temp__4126__auto___682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__668_683__$1)){
var c__4326__auto___684 = cljs.core.chunk_first.call(null,seq__668_683__$1);
var G__685 = cljs.core.chunk_rest.call(null,seq__668_683__$1);
var G__686 = c__4326__auto___684;
var G__687 = cljs.core.count.call(null,c__4326__auto___684);
var G__688 = (0);
seq__668_673 = G__685;
chunk__669_674 = G__686;
count__670_675 = G__687;
i__671_676 = G__688;
continue;
} else {
var node_689 = cljs.core.first.call(null,seq__668_683__$1);
node_689.innerHTML = value_672;

var G__690 = cljs.core.next.call(null,seq__668_683__$1);
var G__691 = null;
var G__692 = (0);
var G__693 = (0);
seq__668_673 = G__690;
chunk__669_674 = G__691;
count__670_675 = G__692;
i__671_676 = G__693;
continue;
}
} else {
}
}
break;
}
}catch (e667){if((e667 instanceof Error)){
var e_694 = e667;
domina.replace_children_BANG_.call(null,content,value_672);
} else {
throw e667;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 * content is a single node. If the bubble parameter is set to true,
 * will search parent nodes if the key is not found.
 */
domina.get_data = (function() {
var domina$get_data = null;
var domina$get_data__2 = (function (node,key){
return domina$get_data.call(null,node,key,false);
});
var domina$get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3949__auto__ = bubble;
if(cljs.core.truth_(and__3949__auto__)){
return (value == null);
} else {
return and__3949__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return domina$get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
domina$get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return domina$get_data__2.call(this,node,key);
case 3:
return domina$get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$get_data.cljs$core$IFn$_invoke$arity$2 = domina$get_data__2;
domina$get_data.cljs$core$IFn$_invoke$arity$3 = domina$get_data__3;
return domina$get_data;
})()
;
/**
 * Sets a data on the node for a given key. Assumes content is a
 * single node. Data should be ClojureScript values and data structures
 * only; using other objects as data may result in memory leaks on some
 * browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__3957__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3957__auto__)){
return or__3957__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 * DomContent. Applies the function for each reference / content
 * combination. Uses clones of the new content for each additional
 * parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__701_705 = cljs.core.seq.call(null,children);
var chunk__702_706 = null;
var count__703_707 = (0);
var i__704_708 = (0);
while(true){
if((i__704_708 < count__703_707)){
var child_709 = cljs.core._nth.call(null,chunk__702_706,i__704_708);
frag.appendChild(child_709);

var G__710 = seq__701_705;
var G__711 = chunk__702_706;
var G__712 = count__703_707;
var G__713 = (i__704_708 + (1));
seq__701_705 = G__710;
chunk__702_706 = G__711;
count__703_707 = G__712;
i__704_708 = G__713;
continue;
} else {
var temp__4126__auto___714 = cljs.core.seq.call(null,seq__701_705);
if(temp__4126__auto___714){
var seq__701_715__$1 = temp__4126__auto___714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__701_715__$1)){
var c__4326__auto___716 = cljs.core.chunk_first.call(null,seq__701_715__$1);
var G__717 = cljs.core.chunk_rest.call(null,seq__701_715__$1);
var G__718 = c__4326__auto___716;
var G__719 = cljs.core.count.call(null,c__4326__auto___716);
var G__720 = (0);
seq__701_705 = G__717;
chunk__702_706 = G__718;
count__703_707 = G__719;
i__704_708 = G__720;
continue;
} else {
var child_721 = cljs.core.first.call(null,seq__701_715__$1);
frag.appendChild(child_721);

var G__722 = cljs.core.next.call(null,seq__701_715__$1);
var G__723 = null;
var G__724 = (0);
var G__725 = (0);
seq__701_705 = G__722;
chunk__702_706 = G__723;
count__703_707 = G__724;
i__704_708 = G__725;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__695_SHARP_,p2__696_SHARP_){
return f.call(null,p1__695_SHARP_,p2__696_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var domina$lazy_nl_via_item = null;
var domina$lazy_nl_via_item__1 = (function (nl){
return domina$lazy_nl_via_item.call(null,nl,(0));
});
var domina$lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina$lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
domina$lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return domina$lazy_nl_via_item__1.call(this,nl);
case 2:
return domina$lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = domina$lazy_nl_via_item__1;
domina$lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = domina$lazy_nl_via_item__2;
return domina$lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var domina$lazy_nl_via_array_ref = null;
var domina$lazy_nl_via_array_ref__1 = (function (nl){
return domina$lazy_nl_via_array_ref.call(null,nl,(0));
});
var domina$lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina$lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
domina$lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return domina$lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return domina$lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = domina$lazy_nl_via_array_ref__1;
domina$lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = domina$lazy_nl_via_array_ref__2;
return domina$lazy_nl_via_array_ref;
})()
;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__3949__auto__ = obj;
if(cljs.core.truth_(and__3949__auto__)){
var and__3949__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3949__auto____$1){
return obj.length;
} else {
return and__3949__auto____$1;
}
} else {
return and__3949__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 * respond to .length, but are not arrays nor NodeSets. This returns a
 * real sequence view of such objects. If passed an object that is not
 * a logical sequence at all, returns a single-item seq containing the
 * object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__727 = list_thing;
if(G__727){
var bit__4251__auto__ = (G__727.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__727.cljs$core$ISeqable$)){
return true;
} else {
if((!G__727.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__727);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__727);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__728 = content;
if(G__728){
var bit__4251__auto__ = (G__728.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__728.cljs$core$ISeqable$)){
return true;
} else {
if((!G__728.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__728);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__728);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__729 = content;
if(G__729){
var bit__4251__auto__ = (G__729.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__729.cljs$core$ISeqable$)){
return true;
} else {
if((!G__729.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__729);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__729);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}

//# sourceMappingURL=domina.js.map