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
var opt_wrapper_340 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_341 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_342 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_342,opt_wrapper_340,table_section_wrapper_341,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_340,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_341,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_341,cell_wrapper_342,table_section_wrapper_341,table_section_wrapper_341]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3949__auto__ = div.firstChild;
if(cljs.core.truth_(and__3949__auto__)){
return div.firstChild.childNodes;
} else {
return and__3949__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__347 = cljs.core.seq.call(null,tbody);
var chunk__348 = null;
var count__349 = (0);
var i__350 = (0);
while(true){
if((i__350 < count__349)){
var child = cljs.core._nth.call(null,chunk__348,i__350);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__351 = seq__347;
var G__352 = chunk__348;
var G__353 = count__349;
var G__354 = (i__350 + (1));
seq__347 = G__351;
chunk__348 = G__352;
count__349 = G__353;
i__350 = G__354;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__347);
if(temp__4126__auto__){
var seq__347__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__347__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__347__$1);
var G__355 = cljs.core.chunk_rest.call(null,seq__347__$1);
var G__356 = c__4326__auto__;
var G__357 = cljs.core.count.call(null,c__4326__auto__);
var G__358 = (0);
seq__347 = G__355;
chunk__348 = G__356;
count__349 = G__357;
i__350 = G__358;
continue;
} else {
var child = cljs.core.first.call(null,seq__347__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__359 = cljs.core.next.call(null,seq__347__$1);
var G__360 = null;
var G__361 = (0);
var G__362 = (0);
seq__347 = G__359;
chunk__348 = G__360;
count__349 = G__361;
i__350 = G__362;
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
var vec__364 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__364,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__364,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__364,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__365 = wrapper.lastChild;
var G__366 = (level - (1));
wrapper = G__365;
level = G__366;
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

domina.DomContent = (function (){var obj368 = {};
return obj368;
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
var G__369__i = 0, G__369__a = new Array(arguments.length -  0);
while (G__369__i < G__369__a.length) {G__369__a[G__369__i] = arguments[G__369__i + 0]; ++G__369__i;}
  mesg = new cljs.core.IndexedSeq(G__369__a,0);
} 
return domina$log_debug__delegate.call(this,mesg);};
domina$log_debug.cljs$lang$maxFixedArity = 0;
domina$log_debug.cljs$lang$applyTo = (function (arglist__370){
var mesg = cljs.core.seq(arglist__370);
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
var G__371__i = 0, G__371__a = new Array(arguments.length -  0);
while (G__371__i < G__371__a.length) {G__371__a[G__371__i] = arguments[G__371__i + 0]; ++G__371__i;}
  mesg = new cljs.core.IndexedSeq(G__371__a,0);
} 
return domina$log__delegate.call(this,mesg);};
domina$log.cljs$lang$maxFixedArity = 0;
domina$log.cljs$lang$applyTo = (function (arglist__372){
var mesg = cljs.core.seq(arglist__372);
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
var G__373__i = 0, G__373__a = new Array(arguments.length -  0);
while (G__373__i < G__373__a.length) {G__373__a[G__373__i] = arguments[G__373__i + 0]; ++G__373__i;}
  contents = new cljs.core.IndexedSeq(G__373__a,0);
} 
return domina$common_ancestor__delegate.call(this,contents);};
domina$common_ancestor.cljs$lang$maxFixedArity = 0;
domina$common_ancestor.cljs$lang$applyTo = (function (arglist__374){
var contents = cljs.core.seq(arglist__374);
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
return cljs.core.map.call(null,(function (p1__375_SHARP_){
return p1__375_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__376_SHARP_,p2__377_SHARP_){
return goog.dom.insertChildAt(p1__376_SHARP_,p2__377_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__379_SHARP_,p2__378_SHARP_){
return goog.dom.insertSiblingBefore(p2__378_SHARP_,p1__379_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__381_SHARP_,p2__380_SHARP_){
return goog.dom.insertSiblingAfter(p2__380_SHARP_,p1__381_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__383_SHARP_,p2__382_SHARP_){
return goog.dom.replaceNode(p2__382_SHARP_,p1__383_SHARP_);
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
var seq__388_392 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__389_393 = null;
var count__390_394 = (0);
var i__391_395 = (0);
while(true){
if((i__391_395 < count__390_394)){
var n_396 = cljs.core._nth.call(null,chunk__389_393,i__391_395);
goog.style.setStyle(n_396,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__397 = seq__388_392;
var G__398 = chunk__389_393;
var G__399 = count__390_394;
var G__400 = (i__391_395 + (1));
seq__388_392 = G__397;
chunk__389_393 = G__398;
count__390_394 = G__399;
i__391_395 = G__400;
continue;
} else {
var temp__4126__auto___401 = cljs.core.seq.call(null,seq__388_392);
if(temp__4126__auto___401){
var seq__388_402__$1 = temp__4126__auto___401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__388_402__$1)){
var c__4326__auto___403 = cljs.core.chunk_first.call(null,seq__388_402__$1);
var G__404 = cljs.core.chunk_rest.call(null,seq__388_402__$1);
var G__405 = c__4326__auto___403;
var G__406 = cljs.core.count.call(null,c__4326__auto___403);
var G__407 = (0);
seq__388_392 = G__404;
chunk__389_393 = G__405;
count__390_394 = G__406;
i__391_395 = G__407;
continue;
} else {
var n_408 = cljs.core.first.call(null,seq__388_402__$1);
goog.style.setStyle(n_408,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__409 = cljs.core.next.call(null,seq__388_402__$1);
var G__410 = null;
var G__411 = (0);
var G__412 = (0);
seq__388_392 = G__409;
chunk__389_393 = G__410;
count__390_394 = G__411;
i__391_395 = G__412;
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
var G__413__i = 0, G__413__a = new Array(arguments.length -  2);
while (G__413__i < G__413__a.length) {G__413__a[G__413__i] = arguments[G__413__i + 2]; ++G__413__i;}
  value = new cljs.core.IndexedSeq(G__413__a,0);
} 
return domina$set_style_BANG___delegate.call(this,content,name,value);};
domina$set_style_BANG_.cljs$lang$maxFixedArity = 2;
domina$set_style_BANG_.cljs$lang$applyTo = (function (arglist__414){
var content = cljs.core.first(arglist__414);
arglist__414 = cljs.core.next(arglist__414);
var name = cljs.core.first(arglist__414);
var value = cljs.core.rest(arglist__414);
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
var seq__419_423 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__420_424 = null;
var count__421_425 = (0);
var i__422_426 = (0);
while(true){
if((i__422_426 < count__421_425)){
var n_427 = cljs.core._nth.call(null,chunk__420_424,i__422_426);
n_427.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__428 = seq__419_423;
var G__429 = chunk__420_424;
var G__430 = count__421_425;
var G__431 = (i__422_426 + (1));
seq__419_423 = G__428;
chunk__420_424 = G__429;
count__421_425 = G__430;
i__422_426 = G__431;
continue;
} else {
var temp__4126__auto___432 = cljs.core.seq.call(null,seq__419_423);
if(temp__4126__auto___432){
var seq__419_433__$1 = temp__4126__auto___432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__419_433__$1)){
var c__4326__auto___434 = cljs.core.chunk_first.call(null,seq__419_433__$1);
var G__435 = cljs.core.chunk_rest.call(null,seq__419_433__$1);
var G__436 = c__4326__auto___434;
var G__437 = cljs.core.count.call(null,c__4326__auto___434);
var G__438 = (0);
seq__419_423 = G__435;
chunk__420_424 = G__436;
count__421_425 = G__437;
i__422_426 = G__438;
continue;
} else {
var n_439 = cljs.core.first.call(null,seq__419_433__$1);
n_439.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__440 = cljs.core.next.call(null,seq__419_433__$1);
var G__441 = null;
var G__442 = (0);
var G__443 = (0);
seq__419_423 = G__440;
chunk__420_424 = G__441;
count__421_425 = G__442;
i__422_426 = G__443;
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
var G__444__i = 0, G__444__a = new Array(arguments.length -  2);
while (G__444__i < G__444__a.length) {G__444__a[G__444__i] = arguments[G__444__i + 2]; ++G__444__i;}
  value = new cljs.core.IndexedSeq(G__444__a,0);
} 
return domina$set_attr_BANG___delegate.call(this,content,name,value);};
domina$set_attr_BANG_.cljs$lang$maxFixedArity = 2;
domina$set_attr_BANG_.cljs$lang$applyTo = (function (arglist__445){
var content = cljs.core.first(arglist__445);
arglist__445 = cljs.core.next(arglist__445);
var name = cljs.core.first(arglist__445);
var value = cljs.core.rest(arglist__445);
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
var seq__450_454 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__451_455 = null;
var count__452_456 = (0);
var i__453_457 = (0);
while(true){
if((i__453_457 < count__452_456)){
var n_458 = cljs.core._nth.call(null,chunk__451_455,i__453_457);
n_458.removeAttribute(cljs.core.name.call(null,name));

var G__459 = seq__450_454;
var G__460 = chunk__451_455;
var G__461 = count__452_456;
var G__462 = (i__453_457 + (1));
seq__450_454 = G__459;
chunk__451_455 = G__460;
count__452_456 = G__461;
i__453_457 = G__462;
continue;
} else {
var temp__4126__auto___463 = cljs.core.seq.call(null,seq__450_454);
if(temp__4126__auto___463){
var seq__450_464__$1 = temp__4126__auto___463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__450_464__$1)){
var c__4326__auto___465 = cljs.core.chunk_first.call(null,seq__450_464__$1);
var G__466 = cljs.core.chunk_rest.call(null,seq__450_464__$1);
var G__467 = c__4326__auto___465;
var G__468 = cljs.core.count.call(null,c__4326__auto___465);
var G__469 = (0);
seq__450_454 = G__466;
chunk__451_455 = G__467;
count__452_456 = G__468;
i__453_457 = G__469;
continue;
} else {
var n_470 = cljs.core.first.call(null,seq__450_464__$1);
n_470.removeAttribute(cljs.core.name.call(null,name));

var G__471 = cljs.core.next.call(null,seq__450_464__$1);
var G__472 = null;
var G__473 = (0);
var G__474 = (0);
seq__450_454 = G__471;
chunk__451_455 = G__472;
count__452_456 = G__473;
i__453_457 = G__474;
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
var vec__476 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__476,(0),null);
var v = cljs.core.nth.call(null,vec__476,(1),null);
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
return (function (p1__477_SHARP_){
var attr = attrs__$1.item(p1__477_SHARP_);
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
var seq__484_490 = cljs.core.seq.call(null,styles);
var chunk__485_491 = null;
var count__486_492 = (0);
var i__487_493 = (0);
while(true){
if((i__487_493 < count__486_492)){
var vec__488_494 = cljs.core._nth.call(null,chunk__485_491,i__487_493);
var name_495 = cljs.core.nth.call(null,vec__488_494,(0),null);
var value_496 = cljs.core.nth.call(null,vec__488_494,(1),null);
domina.set_style_BANG_.call(null,content,name_495,value_496);

var G__497 = seq__484_490;
var G__498 = chunk__485_491;
var G__499 = count__486_492;
var G__500 = (i__487_493 + (1));
seq__484_490 = G__497;
chunk__485_491 = G__498;
count__486_492 = G__499;
i__487_493 = G__500;
continue;
} else {
var temp__4126__auto___501 = cljs.core.seq.call(null,seq__484_490);
if(temp__4126__auto___501){
var seq__484_502__$1 = temp__4126__auto___501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__484_502__$1)){
var c__4326__auto___503 = cljs.core.chunk_first.call(null,seq__484_502__$1);
var G__504 = cljs.core.chunk_rest.call(null,seq__484_502__$1);
var G__505 = c__4326__auto___503;
var G__506 = cljs.core.count.call(null,c__4326__auto___503);
var G__507 = (0);
seq__484_490 = G__504;
chunk__485_491 = G__505;
count__486_492 = G__506;
i__487_493 = G__507;
continue;
} else {
var vec__489_508 = cljs.core.first.call(null,seq__484_502__$1);
var name_509 = cljs.core.nth.call(null,vec__489_508,(0),null);
var value_510 = cljs.core.nth.call(null,vec__489_508,(1),null);
domina.set_style_BANG_.call(null,content,name_509,value_510);

var G__511 = cljs.core.next.call(null,seq__484_502__$1);
var G__512 = null;
var G__513 = (0);
var G__514 = (0);
seq__484_490 = G__511;
chunk__485_491 = G__512;
count__486_492 = G__513;
i__487_493 = G__514;
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
var seq__521_527 = cljs.core.seq.call(null,attrs);
var chunk__522_528 = null;
var count__523_529 = (0);
var i__524_530 = (0);
while(true){
if((i__524_530 < count__523_529)){
var vec__525_531 = cljs.core._nth.call(null,chunk__522_528,i__524_530);
var name_532 = cljs.core.nth.call(null,vec__525_531,(0),null);
var value_533 = cljs.core.nth.call(null,vec__525_531,(1),null);
domina.set_attr_BANG_.call(null,content,name_532,value_533);

var G__534 = seq__521_527;
var G__535 = chunk__522_528;
var G__536 = count__523_529;
var G__537 = (i__524_530 + (1));
seq__521_527 = G__534;
chunk__522_528 = G__535;
count__523_529 = G__536;
i__524_530 = G__537;
continue;
} else {
var temp__4126__auto___538 = cljs.core.seq.call(null,seq__521_527);
if(temp__4126__auto___538){
var seq__521_539__$1 = temp__4126__auto___538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__521_539__$1)){
var c__4326__auto___540 = cljs.core.chunk_first.call(null,seq__521_539__$1);
var G__541 = cljs.core.chunk_rest.call(null,seq__521_539__$1);
var G__542 = c__4326__auto___540;
var G__543 = cljs.core.count.call(null,c__4326__auto___540);
var G__544 = (0);
seq__521_527 = G__541;
chunk__522_528 = G__542;
count__523_529 = G__543;
i__524_530 = G__544;
continue;
} else {
var vec__526_545 = cljs.core.first.call(null,seq__521_539__$1);
var name_546 = cljs.core.nth.call(null,vec__526_545,(0),null);
var value_547 = cljs.core.nth.call(null,vec__526_545,(1),null);
domina.set_attr_BANG_.call(null,content,name_546,value_547);

var G__548 = cljs.core.next.call(null,seq__521_539__$1);
var G__549 = null;
var G__550 = (0);
var G__551 = (0);
seq__521_527 = G__548;
chunk__522_528 = G__549;
count__523_529 = G__550;
i__524_530 = G__551;
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
var seq__556_560 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__557_561 = null;
var count__558_562 = (0);
var i__559_563 = (0);
while(true){
if((i__559_563 < count__558_562)){
var node_564 = cljs.core._nth.call(null,chunk__557_561,i__559_563);
goog.dom.classes.add(node_564,class$);

var G__565 = seq__556_560;
var G__566 = chunk__557_561;
var G__567 = count__558_562;
var G__568 = (i__559_563 + (1));
seq__556_560 = G__565;
chunk__557_561 = G__566;
count__558_562 = G__567;
i__559_563 = G__568;
continue;
} else {
var temp__4126__auto___569 = cljs.core.seq.call(null,seq__556_560);
if(temp__4126__auto___569){
var seq__556_570__$1 = temp__4126__auto___569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__556_570__$1)){
var c__4326__auto___571 = cljs.core.chunk_first.call(null,seq__556_570__$1);
var G__572 = cljs.core.chunk_rest.call(null,seq__556_570__$1);
var G__573 = c__4326__auto___571;
var G__574 = cljs.core.count.call(null,c__4326__auto___571);
var G__575 = (0);
seq__556_560 = G__572;
chunk__557_561 = G__573;
count__558_562 = G__574;
i__559_563 = G__575;
continue;
} else {
var node_576 = cljs.core.first.call(null,seq__556_570__$1);
goog.dom.classes.add(node_576,class$);

var G__577 = cljs.core.next.call(null,seq__556_570__$1);
var G__578 = null;
var G__579 = (0);
var G__580 = (0);
seq__556_560 = G__577;
chunk__557_561 = G__578;
count__558_562 = G__579;
i__559_563 = G__580;
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
var seq__585_589 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__586_590 = null;
var count__587_591 = (0);
var i__588_592 = (0);
while(true){
if((i__588_592 < count__587_591)){
var node_593 = cljs.core._nth.call(null,chunk__586_590,i__588_592);
goog.dom.classes.remove(node_593,class$);

var G__594 = seq__585_589;
var G__595 = chunk__586_590;
var G__596 = count__587_591;
var G__597 = (i__588_592 + (1));
seq__585_589 = G__594;
chunk__586_590 = G__595;
count__587_591 = G__596;
i__588_592 = G__597;
continue;
} else {
var temp__4126__auto___598 = cljs.core.seq.call(null,seq__585_589);
if(temp__4126__auto___598){
var seq__585_599__$1 = temp__4126__auto___598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__585_599__$1)){
var c__4326__auto___600 = cljs.core.chunk_first.call(null,seq__585_599__$1);
var G__601 = cljs.core.chunk_rest.call(null,seq__585_599__$1);
var G__602 = c__4326__auto___600;
var G__603 = cljs.core.count.call(null,c__4326__auto___600);
var G__604 = (0);
seq__585_589 = G__601;
chunk__586_590 = G__602;
count__587_591 = G__603;
i__588_592 = G__604;
continue;
} else {
var node_605 = cljs.core.first.call(null,seq__585_599__$1);
goog.dom.classes.remove(node_605,class$);

var G__606 = cljs.core.next.call(null,seq__585_599__$1);
var G__607 = null;
var G__608 = (0);
var G__609 = (0);
seq__585_589 = G__606;
chunk__586_590 = G__607;
count__587_591 = G__608;
i__588_592 = G__609;
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
var seq__614_618 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__615_619 = null;
var count__616_620 = (0);
var i__617_621 = (0);
while(true){
if((i__617_621 < count__616_620)){
var node_622 = cljs.core._nth.call(null,chunk__615_619,i__617_621);
goog.dom.classes.toggle(node_622,class$);

var G__623 = seq__614_618;
var G__624 = chunk__615_619;
var G__625 = count__616_620;
var G__626 = (i__617_621 + (1));
seq__614_618 = G__623;
chunk__615_619 = G__624;
count__616_620 = G__625;
i__617_621 = G__626;
continue;
} else {
var temp__4126__auto___627 = cljs.core.seq.call(null,seq__614_618);
if(temp__4126__auto___627){
var seq__614_628__$1 = temp__4126__auto___627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__614_628__$1)){
var c__4326__auto___629 = cljs.core.chunk_first.call(null,seq__614_628__$1);
var G__630 = cljs.core.chunk_rest.call(null,seq__614_628__$1);
var G__631 = c__4326__auto___629;
var G__632 = cljs.core.count.call(null,c__4326__auto___629);
var G__633 = (0);
seq__614_618 = G__630;
chunk__615_619 = G__631;
count__616_620 = G__632;
i__617_621 = G__633;
continue;
} else {
var node_634 = cljs.core.first.call(null,seq__614_628__$1);
goog.dom.classes.toggle(node_634,class$);

var G__635 = cljs.core.next.call(null,seq__614_628__$1);
var G__636 = null;
var G__637 = (0);
var G__638 = (0);
seq__614_618 = G__635;
chunk__615_619 = G__636;
count__616_620 = G__637;
i__617_621 = G__638;
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
var classes_647__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__643_648 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__644_649 = null;
var count__645_650 = (0);
var i__646_651 = (0);
while(true){
if((i__646_651 < count__645_650)){
var node_652 = cljs.core._nth.call(null,chunk__644_649,i__646_651);
goog.dom.classes.set(node_652,classes_647__$1);

var G__653 = seq__643_648;
var G__654 = chunk__644_649;
var G__655 = count__645_650;
var G__656 = (i__646_651 + (1));
seq__643_648 = G__653;
chunk__644_649 = G__654;
count__645_650 = G__655;
i__646_651 = G__656;
continue;
} else {
var temp__4126__auto___657 = cljs.core.seq.call(null,seq__643_648);
if(temp__4126__auto___657){
var seq__643_658__$1 = temp__4126__auto___657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__643_658__$1)){
var c__4326__auto___659 = cljs.core.chunk_first.call(null,seq__643_658__$1);
var G__660 = cljs.core.chunk_rest.call(null,seq__643_658__$1);
var G__661 = c__4326__auto___659;
var G__662 = cljs.core.count.call(null,c__4326__auto___659);
var G__663 = (0);
seq__643_648 = G__660;
chunk__644_649 = G__661;
count__645_650 = G__662;
i__646_651 = G__663;
continue;
} else {
var node_664 = cljs.core.first.call(null,seq__643_658__$1);
goog.dom.classes.set(node_664,classes_647__$1);

var G__665 = cljs.core.next.call(null,seq__643_658__$1);
var G__666 = null;
var G__667 = (0);
var G__668 = (0);
seq__643_648 = G__665;
chunk__644_649 = G__666;
count__645_650 = G__667;
i__646_651 = G__668;
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
var seq__673_677 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__674_678 = null;
var count__675_679 = (0);
var i__676_680 = (0);
while(true){
if((i__676_680 < count__675_679)){
var node_681 = cljs.core._nth.call(null,chunk__674_678,i__676_680);
goog.dom.setTextContent(node_681,value);

var G__682 = seq__673_677;
var G__683 = chunk__674_678;
var G__684 = count__675_679;
var G__685 = (i__676_680 + (1));
seq__673_677 = G__682;
chunk__674_678 = G__683;
count__675_679 = G__684;
i__676_680 = G__685;
continue;
} else {
var temp__4126__auto___686 = cljs.core.seq.call(null,seq__673_677);
if(temp__4126__auto___686){
var seq__673_687__$1 = temp__4126__auto___686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__673_687__$1)){
var c__4326__auto___688 = cljs.core.chunk_first.call(null,seq__673_687__$1);
var G__689 = cljs.core.chunk_rest.call(null,seq__673_687__$1);
var G__690 = c__4326__auto___688;
var G__691 = cljs.core.count.call(null,c__4326__auto___688);
var G__692 = (0);
seq__673_677 = G__689;
chunk__674_678 = G__690;
count__675_679 = G__691;
i__676_680 = G__692;
continue;
} else {
var node_693 = cljs.core.first.call(null,seq__673_687__$1);
goog.dom.setTextContent(node_693,value);

var G__694 = cljs.core.next.call(null,seq__673_687__$1);
var G__695 = null;
var G__696 = (0);
var G__697 = (0);
seq__673_677 = G__694;
chunk__674_678 = G__695;
count__675_679 = G__696;
i__676_680 = G__697;
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
var seq__702_706 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__703_707 = null;
var count__704_708 = (0);
var i__705_709 = (0);
while(true){
if((i__705_709 < count__704_708)){
var node_710 = cljs.core._nth.call(null,chunk__703_707,i__705_709);
goog.dom.forms.setValue(node_710,value);

var G__711 = seq__702_706;
var G__712 = chunk__703_707;
var G__713 = count__704_708;
var G__714 = (i__705_709 + (1));
seq__702_706 = G__711;
chunk__703_707 = G__712;
count__704_708 = G__713;
i__705_709 = G__714;
continue;
} else {
var temp__4126__auto___715 = cljs.core.seq.call(null,seq__702_706);
if(temp__4126__auto___715){
var seq__702_716__$1 = temp__4126__auto___715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__702_716__$1)){
var c__4326__auto___717 = cljs.core.chunk_first.call(null,seq__702_716__$1);
var G__718 = cljs.core.chunk_rest.call(null,seq__702_716__$1);
var G__719 = c__4326__auto___717;
var G__720 = cljs.core.count.call(null,c__4326__auto___717);
var G__721 = (0);
seq__702_706 = G__718;
chunk__703_707 = G__719;
count__704_708 = G__720;
i__705_709 = G__721;
continue;
} else {
var node_722 = cljs.core.first.call(null,seq__702_716__$1);
goog.dom.forms.setValue(node_722,value);

var G__723 = cljs.core.next.call(null,seq__702_716__$1);
var G__724 = null;
var G__725 = (0);
var G__726 = (0);
seq__702_706 = G__723;
chunk__703_707 = G__724;
count__704_708 = G__725;
i__705_709 = G__726;
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
var value_737 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__733_738 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__734_739 = null;
var count__735_740 = (0);
var i__736_741 = (0);
while(true){
if((i__736_741 < count__735_740)){
var node_742 = cljs.core._nth.call(null,chunk__734_739,i__736_741);
node_742.innerHTML = value_737;

var G__743 = seq__733_738;
var G__744 = chunk__734_739;
var G__745 = count__735_740;
var G__746 = (i__736_741 + (1));
seq__733_738 = G__743;
chunk__734_739 = G__744;
count__735_740 = G__745;
i__736_741 = G__746;
continue;
} else {
var temp__4126__auto___747 = cljs.core.seq.call(null,seq__733_738);
if(temp__4126__auto___747){
var seq__733_748__$1 = temp__4126__auto___747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__733_748__$1)){
var c__4326__auto___749 = cljs.core.chunk_first.call(null,seq__733_748__$1);
var G__750 = cljs.core.chunk_rest.call(null,seq__733_748__$1);
var G__751 = c__4326__auto___749;
var G__752 = cljs.core.count.call(null,c__4326__auto___749);
var G__753 = (0);
seq__733_738 = G__750;
chunk__734_739 = G__751;
count__735_740 = G__752;
i__736_741 = G__753;
continue;
} else {
var node_754 = cljs.core.first.call(null,seq__733_748__$1);
node_754.innerHTML = value_737;

var G__755 = cljs.core.next.call(null,seq__733_748__$1);
var G__756 = null;
var G__757 = (0);
var G__758 = (0);
seq__733_738 = G__755;
chunk__734_739 = G__756;
count__735_740 = G__757;
i__736_741 = G__758;
continue;
}
} else {
}
}
break;
}
}catch (e732){if((e732 instanceof Error)){
var e_759 = e732;
domina.replace_children_BANG_.call(null,content,value_737);
} else {
throw e732;

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
var seq__766_770 = cljs.core.seq.call(null,children);
var chunk__767_771 = null;
var count__768_772 = (0);
var i__769_773 = (0);
while(true){
if((i__769_773 < count__768_772)){
var child_774 = cljs.core._nth.call(null,chunk__767_771,i__769_773);
frag.appendChild(child_774);

var G__775 = seq__766_770;
var G__776 = chunk__767_771;
var G__777 = count__768_772;
var G__778 = (i__769_773 + (1));
seq__766_770 = G__775;
chunk__767_771 = G__776;
count__768_772 = G__777;
i__769_773 = G__778;
continue;
} else {
var temp__4126__auto___779 = cljs.core.seq.call(null,seq__766_770);
if(temp__4126__auto___779){
var seq__766_780__$1 = temp__4126__auto___779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__766_780__$1)){
var c__4326__auto___781 = cljs.core.chunk_first.call(null,seq__766_780__$1);
var G__782 = cljs.core.chunk_rest.call(null,seq__766_780__$1);
var G__783 = c__4326__auto___781;
var G__784 = cljs.core.count.call(null,c__4326__auto___781);
var G__785 = (0);
seq__766_770 = G__782;
chunk__767_771 = G__783;
count__768_772 = G__784;
i__769_773 = G__785;
continue;
} else {
var child_786 = cljs.core.first.call(null,seq__766_780__$1);
frag.appendChild(child_786);

var G__787 = cljs.core.next.call(null,seq__766_780__$1);
var G__788 = null;
var G__789 = (0);
var G__790 = (0);
seq__766_770 = G__787;
chunk__767_771 = G__788;
count__768_772 = G__789;
i__769_773 = G__790;
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
return (function (p1__760_SHARP_,p2__761_SHARP_){
return f.call(null,p1__760_SHARP_,p2__761_SHARP_);
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
if((function (){var G__792 = list_thing;
if(G__792){
var bit__4251__auto__ = (G__792.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__792.cljs$core$ISeqable$)){
return true;
} else {
if((!G__792.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__792);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__792);
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
if((function (){var G__793 = content;
if(G__793){
var bit__4251__auto__ = (G__793.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__793.cljs$core$ISeqable$)){
return true;
} else {
if((!G__793.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__793);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__793);
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
if((function (){var G__794 = content;
if(G__794){
var bit__4251__auto__ = (G__794.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__794.cljs$core$ISeqable$)){
return true;
} else {
if((!G__794.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__794);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__794);
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