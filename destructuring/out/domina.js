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
var opt_wrapper_357 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_359,opt_wrapper_357,table_section_wrapper_358,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_357,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_358,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_358,cell_wrapper_359,table_section_wrapper_358,table_section_wrapper_358]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3949__auto__ = div.firstChild;
if(cljs.core.truth_(and__3949__auto__)){
return div.firstChild.childNodes;
} else {
return and__3949__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__364 = cljs.core.seq.call(null,tbody);
var chunk__365 = null;
var count__366 = (0);
var i__367 = (0);
while(true){
if((i__367 < count__366)){
var child = cljs.core._nth.call(null,chunk__365,i__367);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__368 = seq__364;
var G__369 = chunk__365;
var G__370 = count__366;
var G__371 = (i__367 + (1));
seq__364 = G__368;
chunk__365 = G__369;
count__366 = G__370;
i__367 = G__371;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__364);
if(temp__4126__auto__){
var seq__364__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__364__$1);
var G__372 = cljs.core.chunk_rest.call(null,seq__364__$1);
var G__373 = c__4326__auto__;
var G__374 = cljs.core.count.call(null,c__4326__auto__);
var G__375 = (0);
seq__364 = G__372;
chunk__365 = G__373;
count__366 = G__374;
i__367 = G__375;
continue;
} else {
var child = cljs.core.first.call(null,seq__364__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__376 = cljs.core.next.call(null,seq__364__$1);
var G__377 = null;
var G__378 = (0);
var G__379 = (0);
seq__364 = G__376;
chunk__365 = G__377;
count__366 = G__378;
i__367 = G__379;
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
var vec__381 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__381,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__381,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__381,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__382 = wrapper.lastChild;
var G__383 = (level - (1));
wrapper = G__382;
level = G__383;
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

domina.DomContent = (function (){var obj385 = {};
return obj385;
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
var G__386__i = 0, G__386__a = new Array(arguments.length -  0);
while (G__386__i < G__386__a.length) {G__386__a[G__386__i] = arguments[G__386__i + 0]; ++G__386__i;}
  mesg = new cljs.core.IndexedSeq(G__386__a,0);
} 
return domina$log_debug__delegate.call(this,mesg);};
domina$log_debug.cljs$lang$maxFixedArity = 0;
domina$log_debug.cljs$lang$applyTo = (function (arglist__387){
var mesg = cljs.core.seq(arglist__387);
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
var G__388__i = 0, G__388__a = new Array(arguments.length -  0);
while (G__388__i < G__388__a.length) {G__388__a[G__388__i] = arguments[G__388__i + 0]; ++G__388__i;}
  mesg = new cljs.core.IndexedSeq(G__388__a,0);
} 
return domina$log__delegate.call(this,mesg);};
domina$log.cljs$lang$maxFixedArity = 0;
domina$log.cljs$lang$applyTo = (function (arglist__389){
var mesg = cljs.core.seq(arglist__389);
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
var G__390__i = 0, G__390__a = new Array(arguments.length -  0);
while (G__390__i < G__390__a.length) {G__390__a[G__390__i] = arguments[G__390__i + 0]; ++G__390__i;}
  contents = new cljs.core.IndexedSeq(G__390__a,0);
} 
return domina$common_ancestor__delegate.call(this,contents);};
domina$common_ancestor.cljs$lang$maxFixedArity = 0;
domina$common_ancestor.cljs$lang$applyTo = (function (arglist__391){
var contents = cljs.core.seq(arglist__391);
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
return cljs.core.map.call(null,(function (p1__392_SHARP_){
return p1__392_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__393_SHARP_,p2__394_SHARP_){
return goog.dom.insertChildAt(p1__393_SHARP_,p2__394_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__396_SHARP_,p2__395_SHARP_){
return goog.dom.insertSiblingBefore(p2__395_SHARP_,p1__396_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__398_SHARP_,p2__397_SHARP_){
return goog.dom.insertSiblingAfter(p2__397_SHARP_,p1__398_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__400_SHARP_,p2__399_SHARP_){
return goog.dom.replaceNode(p2__399_SHARP_,p1__400_SHARP_);
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
var seq__405_409 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__406_410 = null;
var count__407_411 = (0);
var i__408_412 = (0);
while(true){
if((i__408_412 < count__407_411)){
var n_413 = cljs.core._nth.call(null,chunk__406_410,i__408_412);
goog.style.setStyle(n_413,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__414 = seq__405_409;
var G__415 = chunk__406_410;
var G__416 = count__407_411;
var G__417 = (i__408_412 + (1));
seq__405_409 = G__414;
chunk__406_410 = G__415;
count__407_411 = G__416;
i__408_412 = G__417;
continue;
} else {
var temp__4126__auto___418 = cljs.core.seq.call(null,seq__405_409);
if(temp__4126__auto___418){
var seq__405_419__$1 = temp__4126__auto___418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__405_419__$1)){
var c__4326__auto___420 = cljs.core.chunk_first.call(null,seq__405_419__$1);
var G__421 = cljs.core.chunk_rest.call(null,seq__405_419__$1);
var G__422 = c__4326__auto___420;
var G__423 = cljs.core.count.call(null,c__4326__auto___420);
var G__424 = (0);
seq__405_409 = G__421;
chunk__406_410 = G__422;
count__407_411 = G__423;
i__408_412 = G__424;
continue;
} else {
var n_425 = cljs.core.first.call(null,seq__405_419__$1);
goog.style.setStyle(n_425,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__426 = cljs.core.next.call(null,seq__405_419__$1);
var G__427 = null;
var G__428 = (0);
var G__429 = (0);
seq__405_409 = G__426;
chunk__406_410 = G__427;
count__407_411 = G__428;
i__408_412 = G__429;
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
var G__430__i = 0, G__430__a = new Array(arguments.length -  2);
while (G__430__i < G__430__a.length) {G__430__a[G__430__i] = arguments[G__430__i + 2]; ++G__430__i;}
  value = new cljs.core.IndexedSeq(G__430__a,0);
} 
return domina$set_style_BANG___delegate.call(this,content,name,value);};
domina$set_style_BANG_.cljs$lang$maxFixedArity = 2;
domina$set_style_BANG_.cljs$lang$applyTo = (function (arglist__431){
var content = cljs.core.first(arglist__431);
arglist__431 = cljs.core.next(arglist__431);
var name = cljs.core.first(arglist__431);
var value = cljs.core.rest(arglist__431);
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
var seq__436_440 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__437_441 = null;
var count__438_442 = (0);
var i__439_443 = (0);
while(true){
if((i__439_443 < count__438_442)){
var n_444 = cljs.core._nth.call(null,chunk__437_441,i__439_443);
n_444.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__445 = seq__436_440;
var G__446 = chunk__437_441;
var G__447 = count__438_442;
var G__448 = (i__439_443 + (1));
seq__436_440 = G__445;
chunk__437_441 = G__446;
count__438_442 = G__447;
i__439_443 = G__448;
continue;
} else {
var temp__4126__auto___449 = cljs.core.seq.call(null,seq__436_440);
if(temp__4126__auto___449){
var seq__436_450__$1 = temp__4126__auto___449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__436_450__$1)){
var c__4326__auto___451 = cljs.core.chunk_first.call(null,seq__436_450__$1);
var G__452 = cljs.core.chunk_rest.call(null,seq__436_450__$1);
var G__453 = c__4326__auto___451;
var G__454 = cljs.core.count.call(null,c__4326__auto___451);
var G__455 = (0);
seq__436_440 = G__452;
chunk__437_441 = G__453;
count__438_442 = G__454;
i__439_443 = G__455;
continue;
} else {
var n_456 = cljs.core.first.call(null,seq__436_450__$1);
n_456.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__457 = cljs.core.next.call(null,seq__436_450__$1);
var G__458 = null;
var G__459 = (0);
var G__460 = (0);
seq__436_440 = G__457;
chunk__437_441 = G__458;
count__438_442 = G__459;
i__439_443 = G__460;
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
var G__461__i = 0, G__461__a = new Array(arguments.length -  2);
while (G__461__i < G__461__a.length) {G__461__a[G__461__i] = arguments[G__461__i + 2]; ++G__461__i;}
  value = new cljs.core.IndexedSeq(G__461__a,0);
} 
return domina$set_attr_BANG___delegate.call(this,content,name,value);};
domina$set_attr_BANG_.cljs$lang$maxFixedArity = 2;
domina$set_attr_BANG_.cljs$lang$applyTo = (function (arglist__462){
var content = cljs.core.first(arglist__462);
arglist__462 = cljs.core.next(arglist__462);
var name = cljs.core.first(arglist__462);
var value = cljs.core.rest(arglist__462);
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
var seq__467_471 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__468_472 = null;
var count__469_473 = (0);
var i__470_474 = (0);
while(true){
if((i__470_474 < count__469_473)){
var n_475 = cljs.core._nth.call(null,chunk__468_472,i__470_474);
n_475.removeAttribute(cljs.core.name.call(null,name));

var G__476 = seq__467_471;
var G__477 = chunk__468_472;
var G__478 = count__469_473;
var G__479 = (i__470_474 + (1));
seq__467_471 = G__476;
chunk__468_472 = G__477;
count__469_473 = G__478;
i__470_474 = G__479;
continue;
} else {
var temp__4126__auto___480 = cljs.core.seq.call(null,seq__467_471);
if(temp__4126__auto___480){
var seq__467_481__$1 = temp__4126__auto___480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__467_481__$1)){
var c__4326__auto___482 = cljs.core.chunk_first.call(null,seq__467_481__$1);
var G__483 = cljs.core.chunk_rest.call(null,seq__467_481__$1);
var G__484 = c__4326__auto___482;
var G__485 = cljs.core.count.call(null,c__4326__auto___482);
var G__486 = (0);
seq__467_471 = G__483;
chunk__468_472 = G__484;
count__469_473 = G__485;
i__470_474 = G__486;
continue;
} else {
var n_487 = cljs.core.first.call(null,seq__467_481__$1);
n_487.removeAttribute(cljs.core.name.call(null,name));

var G__488 = cljs.core.next.call(null,seq__467_481__$1);
var G__489 = null;
var G__490 = (0);
var G__491 = (0);
seq__467_471 = G__488;
chunk__468_472 = G__489;
count__469_473 = G__490;
i__470_474 = G__491;
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
var vec__493 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__493,(0),null);
var v = cljs.core.nth.call(null,vec__493,(1),null);
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
return (function (p1__494_SHARP_){
var attr = attrs__$1.item(p1__494_SHARP_);
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
var seq__501_507 = cljs.core.seq.call(null,styles);
var chunk__502_508 = null;
var count__503_509 = (0);
var i__504_510 = (0);
while(true){
if((i__504_510 < count__503_509)){
var vec__505_511 = cljs.core._nth.call(null,chunk__502_508,i__504_510);
var name_512 = cljs.core.nth.call(null,vec__505_511,(0),null);
var value_513 = cljs.core.nth.call(null,vec__505_511,(1),null);
domina.set_style_BANG_.call(null,content,name_512,value_513);

var G__514 = seq__501_507;
var G__515 = chunk__502_508;
var G__516 = count__503_509;
var G__517 = (i__504_510 + (1));
seq__501_507 = G__514;
chunk__502_508 = G__515;
count__503_509 = G__516;
i__504_510 = G__517;
continue;
} else {
var temp__4126__auto___518 = cljs.core.seq.call(null,seq__501_507);
if(temp__4126__auto___518){
var seq__501_519__$1 = temp__4126__auto___518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__501_519__$1)){
var c__4326__auto___520 = cljs.core.chunk_first.call(null,seq__501_519__$1);
var G__521 = cljs.core.chunk_rest.call(null,seq__501_519__$1);
var G__522 = c__4326__auto___520;
var G__523 = cljs.core.count.call(null,c__4326__auto___520);
var G__524 = (0);
seq__501_507 = G__521;
chunk__502_508 = G__522;
count__503_509 = G__523;
i__504_510 = G__524;
continue;
} else {
var vec__506_525 = cljs.core.first.call(null,seq__501_519__$1);
var name_526 = cljs.core.nth.call(null,vec__506_525,(0),null);
var value_527 = cljs.core.nth.call(null,vec__506_525,(1),null);
domina.set_style_BANG_.call(null,content,name_526,value_527);

var G__528 = cljs.core.next.call(null,seq__501_519__$1);
var G__529 = null;
var G__530 = (0);
var G__531 = (0);
seq__501_507 = G__528;
chunk__502_508 = G__529;
count__503_509 = G__530;
i__504_510 = G__531;
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
var seq__538_544 = cljs.core.seq.call(null,attrs);
var chunk__539_545 = null;
var count__540_546 = (0);
var i__541_547 = (0);
while(true){
if((i__541_547 < count__540_546)){
var vec__542_548 = cljs.core._nth.call(null,chunk__539_545,i__541_547);
var name_549 = cljs.core.nth.call(null,vec__542_548,(0),null);
var value_550 = cljs.core.nth.call(null,vec__542_548,(1),null);
domina.set_attr_BANG_.call(null,content,name_549,value_550);

var G__551 = seq__538_544;
var G__552 = chunk__539_545;
var G__553 = count__540_546;
var G__554 = (i__541_547 + (1));
seq__538_544 = G__551;
chunk__539_545 = G__552;
count__540_546 = G__553;
i__541_547 = G__554;
continue;
} else {
var temp__4126__auto___555 = cljs.core.seq.call(null,seq__538_544);
if(temp__4126__auto___555){
var seq__538_556__$1 = temp__4126__auto___555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__538_556__$1)){
var c__4326__auto___557 = cljs.core.chunk_first.call(null,seq__538_556__$1);
var G__558 = cljs.core.chunk_rest.call(null,seq__538_556__$1);
var G__559 = c__4326__auto___557;
var G__560 = cljs.core.count.call(null,c__4326__auto___557);
var G__561 = (0);
seq__538_544 = G__558;
chunk__539_545 = G__559;
count__540_546 = G__560;
i__541_547 = G__561;
continue;
} else {
var vec__543_562 = cljs.core.first.call(null,seq__538_556__$1);
var name_563 = cljs.core.nth.call(null,vec__543_562,(0),null);
var value_564 = cljs.core.nth.call(null,vec__543_562,(1),null);
domina.set_attr_BANG_.call(null,content,name_563,value_564);

var G__565 = cljs.core.next.call(null,seq__538_556__$1);
var G__566 = null;
var G__567 = (0);
var G__568 = (0);
seq__538_544 = G__565;
chunk__539_545 = G__566;
count__540_546 = G__567;
i__541_547 = G__568;
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
var seq__573_577 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__574_578 = null;
var count__575_579 = (0);
var i__576_580 = (0);
while(true){
if((i__576_580 < count__575_579)){
var node_581 = cljs.core._nth.call(null,chunk__574_578,i__576_580);
goog.dom.classes.add(node_581,class$);

var G__582 = seq__573_577;
var G__583 = chunk__574_578;
var G__584 = count__575_579;
var G__585 = (i__576_580 + (1));
seq__573_577 = G__582;
chunk__574_578 = G__583;
count__575_579 = G__584;
i__576_580 = G__585;
continue;
} else {
var temp__4126__auto___586 = cljs.core.seq.call(null,seq__573_577);
if(temp__4126__auto___586){
var seq__573_587__$1 = temp__4126__auto___586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__573_587__$1)){
var c__4326__auto___588 = cljs.core.chunk_first.call(null,seq__573_587__$1);
var G__589 = cljs.core.chunk_rest.call(null,seq__573_587__$1);
var G__590 = c__4326__auto___588;
var G__591 = cljs.core.count.call(null,c__4326__auto___588);
var G__592 = (0);
seq__573_577 = G__589;
chunk__574_578 = G__590;
count__575_579 = G__591;
i__576_580 = G__592;
continue;
} else {
var node_593 = cljs.core.first.call(null,seq__573_587__$1);
goog.dom.classes.add(node_593,class$);

var G__594 = cljs.core.next.call(null,seq__573_587__$1);
var G__595 = null;
var G__596 = (0);
var G__597 = (0);
seq__573_577 = G__594;
chunk__574_578 = G__595;
count__575_579 = G__596;
i__576_580 = G__597;
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
var seq__602_606 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__603_607 = null;
var count__604_608 = (0);
var i__605_609 = (0);
while(true){
if((i__605_609 < count__604_608)){
var node_610 = cljs.core._nth.call(null,chunk__603_607,i__605_609);
goog.dom.classes.remove(node_610,class$);

var G__611 = seq__602_606;
var G__612 = chunk__603_607;
var G__613 = count__604_608;
var G__614 = (i__605_609 + (1));
seq__602_606 = G__611;
chunk__603_607 = G__612;
count__604_608 = G__613;
i__605_609 = G__614;
continue;
} else {
var temp__4126__auto___615 = cljs.core.seq.call(null,seq__602_606);
if(temp__4126__auto___615){
var seq__602_616__$1 = temp__4126__auto___615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__602_616__$1)){
var c__4326__auto___617 = cljs.core.chunk_first.call(null,seq__602_616__$1);
var G__618 = cljs.core.chunk_rest.call(null,seq__602_616__$1);
var G__619 = c__4326__auto___617;
var G__620 = cljs.core.count.call(null,c__4326__auto___617);
var G__621 = (0);
seq__602_606 = G__618;
chunk__603_607 = G__619;
count__604_608 = G__620;
i__605_609 = G__621;
continue;
} else {
var node_622 = cljs.core.first.call(null,seq__602_616__$1);
goog.dom.classes.remove(node_622,class$);

var G__623 = cljs.core.next.call(null,seq__602_616__$1);
var G__624 = null;
var G__625 = (0);
var G__626 = (0);
seq__602_606 = G__623;
chunk__603_607 = G__624;
count__604_608 = G__625;
i__605_609 = G__626;
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
var seq__631_635 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__632_636 = null;
var count__633_637 = (0);
var i__634_638 = (0);
while(true){
if((i__634_638 < count__633_637)){
var node_639 = cljs.core._nth.call(null,chunk__632_636,i__634_638);
goog.dom.classes.toggle(node_639,class$);

var G__640 = seq__631_635;
var G__641 = chunk__632_636;
var G__642 = count__633_637;
var G__643 = (i__634_638 + (1));
seq__631_635 = G__640;
chunk__632_636 = G__641;
count__633_637 = G__642;
i__634_638 = G__643;
continue;
} else {
var temp__4126__auto___644 = cljs.core.seq.call(null,seq__631_635);
if(temp__4126__auto___644){
var seq__631_645__$1 = temp__4126__auto___644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__631_645__$1)){
var c__4326__auto___646 = cljs.core.chunk_first.call(null,seq__631_645__$1);
var G__647 = cljs.core.chunk_rest.call(null,seq__631_645__$1);
var G__648 = c__4326__auto___646;
var G__649 = cljs.core.count.call(null,c__4326__auto___646);
var G__650 = (0);
seq__631_635 = G__647;
chunk__632_636 = G__648;
count__633_637 = G__649;
i__634_638 = G__650;
continue;
} else {
var node_651 = cljs.core.first.call(null,seq__631_645__$1);
goog.dom.classes.toggle(node_651,class$);

var G__652 = cljs.core.next.call(null,seq__631_645__$1);
var G__653 = null;
var G__654 = (0);
var G__655 = (0);
seq__631_635 = G__652;
chunk__632_636 = G__653;
count__633_637 = G__654;
i__634_638 = G__655;
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
var classes_664__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__660_665 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__661_666 = null;
var count__662_667 = (0);
var i__663_668 = (0);
while(true){
if((i__663_668 < count__662_667)){
var node_669 = cljs.core._nth.call(null,chunk__661_666,i__663_668);
goog.dom.classes.set(node_669,classes_664__$1);

var G__670 = seq__660_665;
var G__671 = chunk__661_666;
var G__672 = count__662_667;
var G__673 = (i__663_668 + (1));
seq__660_665 = G__670;
chunk__661_666 = G__671;
count__662_667 = G__672;
i__663_668 = G__673;
continue;
} else {
var temp__4126__auto___674 = cljs.core.seq.call(null,seq__660_665);
if(temp__4126__auto___674){
var seq__660_675__$1 = temp__4126__auto___674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__660_675__$1)){
var c__4326__auto___676 = cljs.core.chunk_first.call(null,seq__660_675__$1);
var G__677 = cljs.core.chunk_rest.call(null,seq__660_675__$1);
var G__678 = c__4326__auto___676;
var G__679 = cljs.core.count.call(null,c__4326__auto___676);
var G__680 = (0);
seq__660_665 = G__677;
chunk__661_666 = G__678;
count__662_667 = G__679;
i__663_668 = G__680;
continue;
} else {
var node_681 = cljs.core.first.call(null,seq__660_675__$1);
goog.dom.classes.set(node_681,classes_664__$1);

var G__682 = cljs.core.next.call(null,seq__660_675__$1);
var G__683 = null;
var G__684 = (0);
var G__685 = (0);
seq__660_665 = G__682;
chunk__661_666 = G__683;
count__662_667 = G__684;
i__663_668 = G__685;
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
var seq__690_694 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__691_695 = null;
var count__692_696 = (0);
var i__693_697 = (0);
while(true){
if((i__693_697 < count__692_696)){
var node_698 = cljs.core._nth.call(null,chunk__691_695,i__693_697);
goog.dom.setTextContent(node_698,value);

var G__699 = seq__690_694;
var G__700 = chunk__691_695;
var G__701 = count__692_696;
var G__702 = (i__693_697 + (1));
seq__690_694 = G__699;
chunk__691_695 = G__700;
count__692_696 = G__701;
i__693_697 = G__702;
continue;
} else {
var temp__4126__auto___703 = cljs.core.seq.call(null,seq__690_694);
if(temp__4126__auto___703){
var seq__690_704__$1 = temp__4126__auto___703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__690_704__$1)){
var c__4326__auto___705 = cljs.core.chunk_first.call(null,seq__690_704__$1);
var G__706 = cljs.core.chunk_rest.call(null,seq__690_704__$1);
var G__707 = c__4326__auto___705;
var G__708 = cljs.core.count.call(null,c__4326__auto___705);
var G__709 = (0);
seq__690_694 = G__706;
chunk__691_695 = G__707;
count__692_696 = G__708;
i__693_697 = G__709;
continue;
} else {
var node_710 = cljs.core.first.call(null,seq__690_704__$1);
goog.dom.setTextContent(node_710,value);

var G__711 = cljs.core.next.call(null,seq__690_704__$1);
var G__712 = null;
var G__713 = (0);
var G__714 = (0);
seq__690_694 = G__711;
chunk__691_695 = G__712;
count__692_696 = G__713;
i__693_697 = G__714;
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
var seq__719_723 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__720_724 = null;
var count__721_725 = (0);
var i__722_726 = (0);
while(true){
if((i__722_726 < count__721_725)){
var node_727 = cljs.core._nth.call(null,chunk__720_724,i__722_726);
goog.dom.forms.setValue(node_727,value);

var G__728 = seq__719_723;
var G__729 = chunk__720_724;
var G__730 = count__721_725;
var G__731 = (i__722_726 + (1));
seq__719_723 = G__728;
chunk__720_724 = G__729;
count__721_725 = G__730;
i__722_726 = G__731;
continue;
} else {
var temp__4126__auto___732 = cljs.core.seq.call(null,seq__719_723);
if(temp__4126__auto___732){
var seq__719_733__$1 = temp__4126__auto___732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__719_733__$1)){
var c__4326__auto___734 = cljs.core.chunk_first.call(null,seq__719_733__$1);
var G__735 = cljs.core.chunk_rest.call(null,seq__719_733__$1);
var G__736 = c__4326__auto___734;
var G__737 = cljs.core.count.call(null,c__4326__auto___734);
var G__738 = (0);
seq__719_723 = G__735;
chunk__720_724 = G__736;
count__721_725 = G__737;
i__722_726 = G__738;
continue;
} else {
var node_739 = cljs.core.first.call(null,seq__719_733__$1);
goog.dom.forms.setValue(node_739,value);

var G__740 = cljs.core.next.call(null,seq__719_733__$1);
var G__741 = null;
var G__742 = (0);
var G__743 = (0);
seq__719_723 = G__740;
chunk__720_724 = G__741;
count__721_725 = G__742;
i__722_726 = G__743;
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
var value_754 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__750_755 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__751_756 = null;
var count__752_757 = (0);
var i__753_758 = (0);
while(true){
if((i__753_758 < count__752_757)){
var node_759 = cljs.core._nth.call(null,chunk__751_756,i__753_758);
node_759.innerHTML = value_754;

var G__760 = seq__750_755;
var G__761 = chunk__751_756;
var G__762 = count__752_757;
var G__763 = (i__753_758 + (1));
seq__750_755 = G__760;
chunk__751_756 = G__761;
count__752_757 = G__762;
i__753_758 = G__763;
continue;
} else {
var temp__4126__auto___764 = cljs.core.seq.call(null,seq__750_755);
if(temp__4126__auto___764){
var seq__750_765__$1 = temp__4126__auto___764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__750_765__$1)){
var c__4326__auto___766 = cljs.core.chunk_first.call(null,seq__750_765__$1);
var G__767 = cljs.core.chunk_rest.call(null,seq__750_765__$1);
var G__768 = c__4326__auto___766;
var G__769 = cljs.core.count.call(null,c__4326__auto___766);
var G__770 = (0);
seq__750_755 = G__767;
chunk__751_756 = G__768;
count__752_757 = G__769;
i__753_758 = G__770;
continue;
} else {
var node_771 = cljs.core.first.call(null,seq__750_765__$1);
node_771.innerHTML = value_754;

var G__772 = cljs.core.next.call(null,seq__750_765__$1);
var G__773 = null;
var G__774 = (0);
var G__775 = (0);
seq__750_755 = G__772;
chunk__751_756 = G__773;
count__752_757 = G__774;
i__753_758 = G__775;
continue;
}
} else {
}
}
break;
}
}catch (e749){if((e749 instanceof Error)){
var e_776 = e749;
domina.replace_children_BANG_.call(null,content,value_754);
} else {
throw e749;

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
var seq__783_787 = cljs.core.seq.call(null,children);
var chunk__784_788 = null;
var count__785_789 = (0);
var i__786_790 = (0);
while(true){
if((i__786_790 < count__785_789)){
var child_791 = cljs.core._nth.call(null,chunk__784_788,i__786_790);
frag.appendChild(child_791);

var G__792 = seq__783_787;
var G__793 = chunk__784_788;
var G__794 = count__785_789;
var G__795 = (i__786_790 + (1));
seq__783_787 = G__792;
chunk__784_788 = G__793;
count__785_789 = G__794;
i__786_790 = G__795;
continue;
} else {
var temp__4126__auto___796 = cljs.core.seq.call(null,seq__783_787);
if(temp__4126__auto___796){
var seq__783_797__$1 = temp__4126__auto___796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__783_797__$1)){
var c__4326__auto___798 = cljs.core.chunk_first.call(null,seq__783_797__$1);
var G__799 = cljs.core.chunk_rest.call(null,seq__783_797__$1);
var G__800 = c__4326__auto___798;
var G__801 = cljs.core.count.call(null,c__4326__auto___798);
var G__802 = (0);
seq__783_787 = G__799;
chunk__784_788 = G__800;
count__785_789 = G__801;
i__786_790 = G__802;
continue;
} else {
var child_803 = cljs.core.first.call(null,seq__783_797__$1);
frag.appendChild(child_803);

var G__804 = cljs.core.next.call(null,seq__783_797__$1);
var G__805 = null;
var G__806 = (0);
var G__807 = (0);
seq__783_787 = G__804;
chunk__784_788 = G__805;
count__785_789 = G__806;
i__786_790 = G__807;
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
return (function (p1__777_SHARP_,p2__778_SHARP_){
return f.call(null,p1__777_SHARP_,p2__778_SHARP_);
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
if((function (){var G__809 = list_thing;
if(G__809){
var bit__4251__auto__ = (G__809.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__809.cljs$core$ISeqable$)){
return true;
} else {
if((!G__809.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__809);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__809);
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
if((function (){var G__810 = content;
if(G__810){
var bit__4251__auto__ = (G__810.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__810.cljs$core$ISeqable$)){
return true;
} else {
if((!G__810.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__810);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__810);
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
if((function (){var G__811 = content;
if(G__811){
var bit__4251__auto__ = (G__811.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4251__auto__) || (G__811.cljs$core$ISeqable$)){
return true;
} else {
if((!G__811.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__811);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__811);
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