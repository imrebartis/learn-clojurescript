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
var opt_wrapper_337 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_338 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_339 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_339,opt_wrapper_337,table_section_wrapper_338,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_338,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_338,cell_wrapper_339,table_section_wrapper_338,table_section_wrapper_338]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3949__auto__ = div.firstChild;
if(cljs.core.truth_(and__3949__auto__)){
return div.firstChild.childNodes;
} else {
return and__3949__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__344 = cljs.core.seq.call(null,tbody);
var chunk__345 = null;
var count__346 = (0);
var i__347 = (0);
while(true){
if((i__347 < count__346)){
var child = cljs.core._nth.call(null,chunk__345,i__347);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__348 = seq__344;
var G__349 = chunk__345;
var G__350 = count__346;
var G__351 = (i__347 + (1));
seq__344 = G__348;
chunk__345 = G__349;
count__346 = G__350;
i__347 = G__351;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__344);
if(temp__4126__auto__){
var seq__344__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__344__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__344__$1);
var G__352 = cljs.core.chunk_rest.call(null,seq__344__$1);
var G__353 = c__4326__auto__;
var G__354 = cljs.core.count.call(null,c__4326__auto__);
var G__355 = (0);
seq__344 = G__352;
chunk__345 = G__353;
count__346 = G__354;
i__347 = G__355;
continue;
} else {
var child = cljs.core.first.call(null,seq__344__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__356 = cljs.core.next.call(null,seq__344__$1);
var G__357 = null;
var G__358 = (0);
var G__359 = (0);
seq__344 = G__356;
chunk__345 = G__357;
count__346 = G__358;
i__347 = G__359;
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
var vec__361 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__361,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__361,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__361,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__362 = wrapper.lastChild;
var G__363 = (level - (1));
wrapper = G__362;
level = G__363;
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

domina.DomContent = (function (){var obj365 = {};
return obj365;
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
var G__366__i = 0, G__366__a = new Array(arguments.length -  0);
while (G__366__i < G__366__a.length) {G__366__a[G__366__i] = arguments[G__366__i + 0]; ++G__366__i;}
  mesg = new cljs.core.IndexedSeq(G__366__a,0);
} 
return domina$log_debug__delegate.call(this,mesg);};
domina$log_debug.cljs$lang$maxFixedArity = 0;
domina$log_debug.cljs$lang$applyTo = (function (arglist__367){
var mesg = cljs.core.seq(arglist__367);
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
var G__368__i = 0, G__368__a = new Array(arguments.length -  0);
while (G__368__i < G__368__a.length) {G__368__a[G__368__i] = arguments[G__368__i + 0]; ++G__368__i;}
  mesg = new cljs.core.IndexedSeq(G__368__a,0);
} 
return domina$log__delegate.call(this,mesg);};
domina$log.cljs$lang$maxFixedArity = 0;
domina$log.cljs$lang$applyTo = (function (arglist__369){
var mesg = cljs.core.seq(arglist__369);
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
var G__370__i = 0, G__370__a = new Array(arguments.length -  0);
while (G__370__i < G__370__a.length) {G__370__a[G__370__i] = arguments[G__370__i + 0]; ++G__370__i;}
  contents = new cljs.core.IndexedSeq(G__370__a,0);
} 
return domina$common_ancestor__delegate.call(this,contents);};
domina$common_ancestor.cljs$lang$maxFixedArity = 0;
domina$common_ancestor.cljs$lang$applyTo = (function (arglist__371){
var contents = cljs.core.seq(arglist__371);
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
return cljs.core.map.call(null,(function (p1__372_SHARP_){
return p1__372_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__373_SHARP_,p2__374_SHARP_){
return goog.dom.insertChildAt(p1__373_SHARP_,p2__374_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__376_SHARP_,p2__375_SHARP_){
return goog.dom.insertSiblingBefore(p2__375_SHARP_,p1__376_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__378_SHARP_,p2__377_SHARP_){
return goog.dom.insertSiblingAfter(p2__377_SHARP_,p1__378_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__380_SHARP_,p2__379_SHARP_){
return goog.dom.replaceNode(p2__379_SHARP_,p1__380_SHARP_);
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
var seq__385_389 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__386_390 = null;
var count__387_391 = (0);
var i__388_392 = (0);
while(true){
if((i__388_392 < count__387_391)){
var n_393 = cljs.core._nth.call(null,chunk__386_390,i__388_392);
goog.style.setStyle(n_393,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

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
goog.style.setStyle(n_405,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

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
};
var domina$set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__410__i = 0, G__410__a = new Array(arguments.length -  2);
while (G__410__i < G__410__a.length) {G__410__a[G__410__i] = arguments[G__410__i + 2]; ++G__410__i;}
  value = new cljs.core.IndexedSeq(G__410__a,0);
} 
return domina$set_style_BANG___delegate.call(this,content,name,value);};
domina$set_style_BANG_.cljs$lang$maxFixedArity = 2;
domina$set_style_BANG_.cljs$lang$applyTo = (function (arglist__411){
var content = cljs.core.first(arglist__411);
arglist__411 = cljs.core.next(arglist__411);
var name = cljs.core.first(arglist__411);
var value = cljs.core.rest(arglist__411);
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
var seq__416_420 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__417_421 = null;
var count__418_422 = (0);
var i__419_423 = (0);
while(true){
if((i__419_423 < count__418_422)){
var n_424 = cljs.core._nth.call(null,chunk__417_421,i__419_423);
n_424.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__425 = seq__416_420;
var G__426 = chunk__417_421;
var G__427 = count__418_422;
var G__428 = (i__419_423 + (1));
seq__416_420 = G__425;
chunk__417_421 = G__426;
count__418_422 = G__427;
i__419_423 = G__428;
continue;
} else {
var temp__4126__auto___429 = cljs.core.seq.call(null,seq__416_420);
if(temp__4126__auto___429){
var seq__416_430__$1 = temp__4126__auto___429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__416_430__$1)){
var c__4326__auto___431 = cljs.core.chunk_first.call(null,seq__416_430__$1);
var G__432 = cljs.core.chunk_rest.call(null,seq__416_430__$1);
var G__433 = c__4326__auto___431;
var G__434 = cljs.core.count.call(null,c__4326__auto___431);
var G__435 = (0);
seq__416_420 = G__432;
chunk__417_421 = G__433;
count__418_422 = G__434;
i__419_423 = G__435;
continue;
} else {
var n_436 = cljs.core.first.call(null,seq__416_430__$1);
n_436.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__437 = cljs.core.next.call(null,seq__416_430__$1);
var G__438 = null;
var G__439 = (0);
var G__440 = (0);
seq__416_420 = G__437;
chunk__417_421 = G__438;
count__418_422 = G__439;
i__419_423 = G__440;
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
var G__441__i = 0, G__441__a = new Array(arguments.length -  2);
while (G__441__i < G__441__a.length) {G__441__a[G__441__i] = arguments[G__441__i + 2]; ++G__441__i;}
  value = new cljs.core.IndexedSeq(G__441__a,0);
} 
return domina$set_attr_BANG___delegate.call(this,content,name,value);};
domina$set_attr_BANG_.cljs$lang$maxFixedArity = 2;
domina$set_attr_BANG_.cljs$lang$applyTo = (function (arglist__442){
var content = cljs.core.first(arglist__442);
arglist__442 = cljs.core.next(arglist__442);
var name = cljs.core.first(arglist__442);
var value = cljs.core.rest(arglist__442);
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
var seq__447_451 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__448_452 = null;
var count__449_453 = (0);
var i__450_454 = (0);
while(true){
if((i__450_454 < count__449_453)){
var n_455 = cljs.core._nth.call(null,chunk__448_452,i__450_454);
n_455.removeAttribute(cljs.core.name.call(null,name));

var G__456 = seq__447_451;
var G__457 = chunk__448_452;
var G__458 = count__449_453;
var G__459 = (i__450_454 + (1));
seq__447_451 = G__456;
chunk__448_452 = G__457;
count__449_453 = G__458;
i__450_454 = G__459;
continue;
} else {
var temp__4126__auto___460 = cljs.core.seq.call(null,seq__447_451);
if(temp__4126__auto___460){
var seq__447_461__$1 = temp__4126__auto___460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__447_461__$1)){
var c__4326__auto___462 = cljs.core.chunk_first.call(null,seq__447_461__$1);
var G__463 = cljs.core.chunk_rest.call(null,seq__447_461__$1);
var G__464 = c__4326__auto___462;
var G__465 = cljs.core.count.call(null,c__4326__auto___462);
var G__466 = (0);
seq__447_451 = G__463;
chunk__448_452 = G__464;
count__449_453 = G__465;
i__450_454 = G__466;
continue;
} else {
var n_467 = cljs.core.first.call(null,seq__447_461__$1);
n_467.removeAttribute(cljs.core.name.call(null,name));

var G__468 = cljs.core.next.call(null,seq__447_461__$1);
var G__469 = null;
var G__470 = (0);
var G__471 = (0);
seq__447_451 = G__468;
chunk__448_452 = G__469;
count__449_453 = G__470;
i__450_454 = G__471;
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
var vec__473 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__473,(0),null);
var v = cljs.core.nth.call(null,vec__473,(1),null);
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
return (function (p1__474_SHARP_){
var attr = attrs__$1.item(p1__474_SHARP_);
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
var seq__481_487 = cljs.core.seq.call(null,styles);
var chunk__482_488 = null;
var count__483_489 = (0);
var i__484_490 = (0);
while(true){
if((i__484_490 < count__483_489)){
var vec__485_491 = cljs.core._nth.call(null,chunk__482_488,i__484_490);
var name_492 = cljs.core.nth.call(null,vec__485_491,(0),null);
var value_493 = cljs.core.nth.call(null,vec__485_491,(1),null);
domina.set_style_BANG_.call(null,content,name_492,value_493);

var G__494 = seq__481_487;
var G__495 = chunk__482_488;
var G__496 = count__483_489;
var G__497 = (i__484_490 + (1));
seq__481_487 = G__494;
chunk__482_488 = G__495;
count__483_489 = G__496;
i__484_490 = G__497;
continue;
} else {
var temp__4126__auto___498 = cljs.core.seq.call(null,seq__481_487);
if(temp__4126__auto___498){
var seq__481_499__$1 = temp__4126__auto___498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__481_499__$1)){
var c__4326__auto___500 = cljs.core.chunk_first.call(null,seq__481_499__$1);
var G__501 = cljs.core.chunk_rest.call(null,seq__481_499__$1);
var G__502 = c__4326__auto___500;
var G__503 = cljs.core.count.call(null,c__4326__auto___500);
var G__504 = (0);
seq__481_487 = G__501;
chunk__482_488 = G__502;
count__483_489 = G__503;
i__484_490 = G__504;
continue;
} else {
var vec__486_505 = cljs.core.first.call(null,seq__481_499__$1);
var name_506 = cljs.core.nth.call(null,vec__486_505,(0),null);
var value_507 = cljs.core.nth.call(null,vec__486_505,(1),null);
domina.set_style_BANG_.call(null,content,name_506,value_507);

var G__508 = cljs.core.next.call(null,seq__481_499__$1);
var G__509 = null;
var G__510 = (0);
var G__511 = (0);
seq__481_487 = G__508;
chunk__482_488 = G__509;
count__483_489 = G__510;
i__484_490 = G__511;
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
var seq__518_524 = cljs.core.seq.call(null,attrs);
var chunk__519_525 = null;
var count__520_526 = (0);
var i__521_527 = (0);
while(true){
if((i__521_527 < count__520_526)){
var vec__522_528 = cljs.core._nth.call(null,chunk__519_525,i__521_527);
var name_529 = cljs.core.nth.call(null,vec__522_528,(0),null);
var value_530 = cljs.core.nth.call(null,vec__522_528,(1),null);
domina.set_attr_BANG_.call(null,content,name_529,value_530);

var G__531 = seq__518_524;
var G__532 = chunk__519_525;
var G__533 = count__520_526;
var G__534 = (i__521_527 + (1));
seq__518_524 = G__531;
chunk__519_525 = G__532;
count__520_526 = G__533;
i__521_527 = G__534;
continue;
} else {
var temp__4126__auto___535 = cljs.core.seq.call(null,seq__518_524);
if(temp__4126__auto___535){
var seq__518_536__$1 = temp__4126__auto___535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__518_536__$1)){
var c__4326__auto___537 = cljs.core.chunk_first.call(null,seq__518_536__$1);
var G__538 = cljs.core.chunk_rest.call(null,seq__518_536__$1);
var G__539 = c__4326__auto___537;
var G__540 = cljs.core.count.call(null,c__4326__auto___537);
var G__541 = (0);
seq__518_524 = G__538;
chunk__519_525 = G__539;
count__520_526 = G__540;
i__521_527 = G__541;
continue;
} else {
var vec__523_542 = cljs.core.first.call(null,seq__518_536__$1);
var name_543 = cljs.core.nth.call(null,vec__523_542,(0),null);
var value_544 = cljs.core.nth.call(null,vec__523_542,(1),null);
domina.set_attr_BANG_.call(null,content,name_543,value_544);

var G__545 = cljs.core.next.call(null,seq__518_536__$1);
var G__546 = null;
var G__547 = (0);
var G__548 = (0);
seq__518_524 = G__545;
chunk__519_525 = G__546;
count__520_526 = G__547;
i__521_527 = G__548;
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
var seq__553_557 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__554_558 = null;
var count__555_559 = (0);
var i__556_560 = (0);
while(true){
if((i__556_560 < count__555_559)){
var node_561 = cljs.core._nth.call(null,chunk__554_558,i__556_560);
goog.dom.classes.add(node_561,class$);

var G__562 = seq__553_557;
var G__563 = chunk__554_558;
var G__564 = count__555_559;
var G__565 = (i__556_560 + (1));
seq__553_557 = G__562;
chunk__554_558 = G__563;
count__555_559 = G__564;
i__556_560 = G__565;
continue;
} else {
var temp__4126__auto___566 = cljs.core.seq.call(null,seq__553_557);
if(temp__4126__auto___566){
var seq__553_567__$1 = temp__4126__auto___566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__553_567__$1)){
var c__4326__auto___568 = cljs.core.chunk_first.call(null,seq__553_567__$1);
var G__569 = cljs.core.chunk_rest.call(null,seq__553_567__$1);
var G__570 = c__4326__auto___568;
var G__571 = cljs.core.count.call(null,c__4326__auto___568);
var G__572 = (0);
seq__553_557 = G__569;
chunk__554_558 = G__570;
count__555_559 = G__571;
i__556_560 = G__572;
continue;
} else {
var node_573 = cljs.core.first.call(null,seq__553_567__$1);
goog.dom.classes.add(node_573,class$);

var G__574 = cljs.core.next.call(null,seq__553_567__$1);
var G__575 = null;
var G__576 = (0);
var G__577 = (0);
seq__553_557 = G__574;
chunk__554_558 = G__575;
count__555_559 = G__576;
i__556_560 = G__577;
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
var seq__582_586 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__583_587 = null;
var count__584_588 = (0);
var i__585_589 = (0);
while(true){
if((i__585_589 < count__584_588)){
var node_590 = cljs.core._nth.call(null,chunk__583_587,i__585_589);
goog.dom.classes.remove(node_590,class$);

var G__591 = seq__582_586;
var G__592 = chunk__583_587;
var G__593 = count__584_588;
var G__594 = (i__585_589 + (1));
seq__582_586 = G__591;
chunk__583_587 = G__592;
count__584_588 = G__593;
i__585_589 = G__594;
continue;
} else {
var temp__4126__auto___595 = cljs.core.seq.call(null,seq__582_586);
if(temp__4126__auto___595){
var seq__582_596__$1 = temp__4126__auto___595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__582_596__$1)){
var c__4326__auto___597 = cljs.core.chunk_first.call(null,seq__582_596__$1);
var G__598 = cljs.core.chunk_rest.call(null,seq__582_596__$1);
var G__599 = c__4326__auto___597;
var G__600 = cljs.core.count.call(null,c__4326__auto___597);
var G__601 = (0);
seq__582_586 = G__598;
chunk__583_587 = G__599;
count__584_588 = G__600;
i__585_589 = G__601;
continue;
} else {
var node_602 = cljs.core.first.call(null,seq__582_596__$1);
goog.dom.classes.remove(node_602,class$);

var G__603 = cljs.core.next.call(null,seq__582_596__$1);
var G__604 = null;
var G__605 = (0);
var G__606 = (0);
seq__582_586 = G__603;
chunk__583_587 = G__604;
count__584_588 = G__605;
i__585_589 = G__606;
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
var seq__611_615 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__612_616 = null;
var count__613_617 = (0);
var i__614_618 = (0);
while(true){
if((i__614_618 < count__613_617)){
var node_619 = cljs.core._nth.call(null,chunk__612_616,i__614_618);
goog.dom.classes.toggle(node_619,class$);

var G__620 = seq__611_615;
var G__621 = chunk__612_616;
var G__622 = count__613_617;
var G__623 = (i__614_618 + (1));
seq__611_615 = G__620;
chunk__612_616 = G__621;
count__613_617 = G__622;
i__614_618 = G__623;
continue;
} else {
var temp__4126__auto___624 = cljs.core.seq.call(null,seq__611_615);
if(temp__4126__auto___624){
var seq__611_625__$1 = temp__4126__auto___624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__611_625__$1)){
var c__4326__auto___626 = cljs.core.chunk_first.call(null,seq__611_625__$1);
var G__627 = cljs.core.chunk_rest.call(null,seq__611_625__$1);
var G__628 = c__4326__auto___626;
var G__629 = cljs.core.count.call(null,c__4326__auto___626);
var G__630 = (0);
seq__611_615 = G__627;
chunk__612_616 = G__628;
count__613_617 = G__629;
i__614_618 = G__630;
continue;
} else {
var node_631 = cljs.core.first.call(null,seq__611_625__$1);
goog.dom.classes.toggle(node_631,class$);

var G__632 = cljs.core.next.call(null,seq__611_625__$1);
var G__633 = null;
var G__634 = (0);
var G__635 = (0);
seq__611_615 = G__632;
chunk__612_616 = G__633;
count__613_617 = G__634;
i__614_618 = G__635;
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
var classes_644__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__640_645 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__641_646 = null;
var count__642_647 = (0);
var i__643_648 = (0);
while(true){
if((i__643_648 < count__642_647)){
var node_649 = cljs.core._nth.call(null,chunk__641_646,i__643_648);
goog.dom.classes.set(node_649,classes_644__$1);

var G__650 = seq__640_645;
var G__651 = chunk__641_646;
var G__652 = count__642_647;
var G__653 = (i__643_648 + (1));
seq__640_645 = G__650;
chunk__641_646 = G__651;
count__642_647 = G__652;
i__643_648 = G__653;
continue;
} else {
var temp__4126__auto___654 = cljs.core.seq.call(null,seq__640_645);
if(temp__4126__auto___654){
var seq__640_655__$1 = temp__4126__auto___654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__640_655__$1)){
var c__4326__auto___656 = cljs.core.chunk_first.call(null,seq__640_655__$1);
var G__657 = cljs.core.chunk_rest.call(null,seq__640_655__$1);
var G__658 = c__4326__auto___656;
var G__659 = cljs.core.count.call(null,c__4326__auto___656);
var G__660 = (0);
seq__640_645 = G__657;
chunk__641_646 = G__658;
count__642_647 = G__659;
i__643_648 = G__660;
continue;
} else {
var node_661 = cljs.core.first.call(null,seq__640_655__$1);
goog.dom.classes.set(node_661,classes_644__$1);

var G__662 = cljs.core.next.call(null,seq__640_655__$1);
var G__663 = null;
var G__664 = (0);
var G__665 = (0);
seq__640_645 = G__662;
chunk__641_646 = G__663;
count__642_647 = G__664;
i__643_648 = G__665;
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
var seq__670_674 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__671_675 = null;
var count__672_676 = (0);
var i__673_677 = (0);
while(true){
if((i__673_677 < count__672_676)){
var node_678 = cljs.core._nth.call(null,chunk__671_675,i__673_677);
goog.dom.setTextContent(node_678,value);

var G__679 = seq__670_674;
var G__680 = chunk__671_675;
var G__681 = count__672_676;
var G__682 = (i__673_677 + (1));
seq__670_674 = G__679;
chunk__671_675 = G__680;
count__672_676 = G__681;
i__673_677 = G__682;
continue;
} else {
var temp__4126__auto___683 = cljs.core.seq.call(null,seq__670_674);
if(temp__4126__auto___683){
var seq__670_684__$1 = temp__4126__auto___683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__670_684__$1)){
var c__4326__auto___685 = cljs.core.chunk_first.call(null,seq__670_684__$1);
var G__686 = cljs.core.chunk_rest.call(null,seq__670_684__$1);
var G__687 = c__4326__auto___685;
var G__688 = cljs.core.count.call(null,c__4326__auto___685);
var G__689 = (0);
seq__670_674 = G__686;
chunk__671_675 = G__687;
count__672_676 = G__688;
i__673_677 = G__689;
continue;
} else {
var node_690 = cljs.core.first.call(null,seq__670_684__$1);
goog.dom.setTextContent(node_690,value);

var G__691 = cljs.core.next.call(null,seq__670_684__$1);
var G__692 = null;
var G__693 = (0);
var G__694 = (0);
seq__670_674 = G__691;
chunk__671_675 = G__692;
count__672_676 = G__693;
i__673_677 = G__694;
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
var seq__699_703 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__700_704 = null;
var count__701_705 = (0);
var i__702_706 = (0);
while(true){
if((i__702_706 < count__701_705)){
var node_707 = cljs.core._nth.call(null,chunk__700_704,i__702_706);
goog.dom.forms.setValue(node_707,value);

var G__708 = seq__699_703;
var G__709 = chunk__700_704;
var G__710 = count__701_705;
var G__711 = (i__702_706 + (1));
seq__699_703 = G__708;
chunk__700_704 = G__709;
count__701_705 = G__710;
i__702_706 = G__711;
continue;
} else {
var temp__4126__auto___712 = cljs.core.seq.call(null,seq__699_703);
if(temp__4126__auto___712){
var seq__699_713__$1 = temp__4126__auto___712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__699_713__$1)){
var c__4326__auto___714 = cljs.core.chunk_first.call(null,seq__699_713__$1);
var G__715 = cljs.core.chunk_rest.call(null,seq__699_713__$1);
var G__716 = c__4326__auto___714;
var G__717 = cljs.core.count.call(null,c__4326__auto___714);
var G__718 = (0);
seq__699_703 = G__715;
chunk__700_704 = G__716;
count__701_705 = G__717;
i__702_706 = G__718;
continue;
} else {
var node_719 = cljs.core.first.call(null,seq__699_713__$1);
goog.dom.forms.setValue(node_719,value);

var G__720 = cljs.core.next.call(null,seq__699_713__$1);
var G__721 = null;
var G__722 = (0);
var G__723 = (0);
seq__699_703 = G__720;
chunk__700_704 = G__721;
count__701_705 = G__722;
i__702_706 = G__723;
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
var value_734 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__730_735 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__731_736 = null;
var count__732_737 = (0);
var i__733_738 = (0);
while(true){
if((i__733_738 < count__732_737)){
var node_739 = cljs.core._nth.call(null,chunk__731_736,i__733_738);
node_739.innerHTML = value_734;

var G__740 = seq__730_735;
var G__741 = chunk__731_736;
var G__742 = count__732_737;
var G__743 = (i__733_738 + (1));
seq__730_735 = G__740;
chunk__731_736 = G__741;
count__732_737 = G__742;
i__733_738 = G__743;
continue;
} else {
var temp__4126__auto___744 = cljs.core.seq.call(null,seq__730_735);
if(temp__4126__auto___744){
var seq__730_745__$1 = temp__4126__auto___744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__730_745__$1)){
var c__4326__auto___746 = cljs.core.chunk_first.call(null,seq__730_745__$1);
var G__747 = cljs.core.chunk_rest.call(null,seq__730_745__$1);
var G__748 = c__4326__auto___746;
var G__749 = cljs.core.count.call(null,c__4326__auto___746);
var G__750 = (0);
seq__730_735 = G__747;
chunk__731_736 = G__748;
count__732_737 = G__749;
i__733_738 = G__750;
continue;
} else {
var node_751 = cljs.core.first.call(null,seq__730_745__$1);
node_751.innerHTML = value_734;

var G__752 = cljs.core.next.call(null,seq__730_745__$1);
var G__753 = null;
var G__754 = (0);
var G__755 = (0);
seq__730_735 = G__752;
chunk__731_736 = G__753;
count__732_737 = G__754;
i__733_738 = G__755;
continue;
}
} else {
}
}
break;
}
}catch (e729){if((e729 instanceof Error)){
var e_756 = e729;
domina.replace_children_BANG_.call(null,content,value_734);
} else {
throw e729;

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
var seq__763_767 = cljs.core.seq.call(null,children);
var chunk__764_768 = null;
var count__765_769 = (0);
var i__766_770 = (0);
while(true){
if((i__766_770 < count__765_769)){
var child_771 = cljs.core._nth.call(null,chunk__764_768,i__766_770);
frag.appendChild(child_771);

var G__772 = seq__763_767;
var G__773 = chunk__764_768;
var G__774 = count__765_769;
var G__775 = (i__766_770 + (1));
seq__763_767 = G__772;
chunk__764_768 = G__773;
count__765_769 = G__774;
i__766_770 = G__775;
continue;
} else {
var temp__4126__auto___776 = cljs.core.seq.call(null,seq__763_767);
if(temp__4126__auto___776){
var seq__763_777__$1 = temp__4126__auto___776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__763_777__$1)){
var c__4326__auto___778 = cljs.core.chunk_first.call(null,seq__763_777__$1);
var G__779 = cljs.core.chunk_rest.call(null,seq__763_777__$1);
var G__780 = c__4326__auto___778;
var G__781 = cljs.core.count.call(null,c__4326__auto___778);
var G__782 = (0);
seq__763_767 = G__779;
chunk__764_768 = G__780;
count__765_769 = G__781;
i__766_770 = G__782;
continue;
} else {
var child_783 = cljs.core.first.call(null,seq__763_777__$1);
frag.appendChild(child_783);

var G__784 = cljs.core.next.call(null,seq__763_777__$1);
var G__785 = null;
var G__786 = (0);
var G__787 = (0);
seq__763_767 = G__784;
chunk__764_768 = G__785;
count__765_769 = G__786;
i__766_770 = G__787;
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
return (function (p1__757_SHARP_,p2__758_SHARP_){
return f.call(null,p1__757_SHARP_,p2__758_SHARP_);
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
if((function (){var G__789 = list_thing;
if(G__789){
var bit__4251__auto__ = (G__789.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__789.cljs$core$ISeqable$)){
return true;
} else {
if((!G__789.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__789);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__789);
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
if((function (){var G__790 = content;
if(G__790){
var bit__4251__auto__ = (G__790.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__790.cljs$core$ISeqable$)){
return true;
} else {
if((!G__790.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__790);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__790);
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
if((function (){var G__791 = content;
if(G__791){
var bit__4251__auto__ = (G__791.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__791.cljs$core$ISeqable$)){
return true;
} else {
if((!G__791.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__791);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__791);
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