// Compiled by ClojureScript 0.0-3169 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');

domina.events.Event = (function (){var obj819 = {};
return obj819;
})();

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((function (){var and__3949__auto__ = evt;
if(and__3949__auto__){
return evt.domina$events$Event$prevent_default$arity$1;
} else {
return and__3949__auto__;
}
})()){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__4221__auto__ = (((evt == null))?null:evt);
return (function (){var or__3957__auto__ = (domina.events.prevent_default[goog.typeOf(x__4221__auto__)]);
if(or__3957__auto__){
return or__3957__auto__;
} else {
var or__3957__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3957__auto____$1){
return or__3957__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((function (){var and__3949__auto__ = evt;
if(and__3949__auto__){
return evt.domina$events$Event$stop_propagation$arity$1;
} else {
return and__3949__auto__;
}
})()){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__4221__auto__ = (((evt == null))?null:evt);
return (function (){var or__3957__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4221__auto__)]);
if(or__3957__auto__){
return or__3957__auto__;
} else {
var or__3957__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3957__auto____$1){
return or__3957__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((function (){var and__3949__auto__ = evt;
if(and__3949__auto__){
return evt.domina$events$Event$target$arity$1;
} else {
return and__3949__auto__;
}
})()){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__4221__auto__ = (((evt == null))?null:evt);
return (function (){var or__3957__auto__ = (domina.events.target[goog.typeOf(x__4221__auto__)]);
if(or__3957__auto__){
return or__3957__auto__;
} else {
var or__3957__auto____$1 = (domina.events.target["_"]);
if(or__3957__auto____$1){
return or__3957__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((function (){var and__3949__auto__ = evt;
if(and__3949__auto__){
return evt.domina$events$Event$current_target$arity$1;
} else {
return and__3949__auto__;
}
})()){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__4221__auto__ = (((evt == null))?null:evt);
return (function (){var or__3957__auto__ = (domina.events.current_target[goog.typeOf(x__4221__auto__)]);
if(or__3957__auto__){
return or__3957__auto__;
} else {
var or__3957__auto____$1 = (domina.events.current_target["_"]);
if(or__3957__auto____$1){
return or__3957__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((function (){var and__3949__auto__ = evt;
if(and__3949__auto__){
return evt.domina$events$Event$event_type$arity$1;
} else {
return and__3949__auto__;
}
})()){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__4221__auto__ = (((evt == null))?null:evt);
return (function (){var or__3957__auto__ = (domina.events.event_type[goog.typeOf(x__4221__auto__)]);
if(or__3957__auto__){
return or__3957__auto__;
} else {
var or__3957__auto____$1 = (domina.events.event_type["_"]);
if(or__3957__auto____$1){
return or__3957__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((function (){var and__3949__auto__ = evt;
if(and__3949__auto__){
return evt.domina$events$Event$raw_event$arity$1;
} else {
return and__3949__auto__;
}
})()){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__4221__auto__ = (((evt == null))?null:evt);
return (function (){var or__3957__auto__ = (domina.events.raw_event[goog.typeOf(x__4221__auto__)]);
if(or__3957__auto__){
return or__3957__auto__;
} else {
var or__3957__auto____$1 = (domina.events.raw_event["_"]);
if(or__3957__auto____$1){
return or__3957__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t823 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.events.t823 = (function (evt,f,create_listener_function,meta824){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta824 = meta824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t823.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4124__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4124__auto__)){
var val = temp__4124__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t823.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__3957__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__3957__auto__)){
return or__3957__auto__;
} else {
return not_found;
}
});

domina.events.t823.prototype.domina$events$Event$ = true;

domina.events.t823.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t823.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t823.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t823.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t823.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t823.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_825){
var self__ = this;
var _825__$1 = this;
return self__.meta824;
});

domina.events.t823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_825,meta824__$1){
var self__ = this;
var _825__$1 = this;
return (new domina.events.t823(self__.evt,self__.f,self__.create_listener_function,meta824__$1));
});

domina.events.t823.cljs$lang$type = true;

domina.events.t823.cljs$lang$ctorStr = "domina.events/t823";

domina.events.t823.cljs$lang$ctorPrWriter = (function (this__4172__auto__,writer__4173__auto__,opt__4174__auto__){
return cljs.core._write.call(null,writer__4173__auto__,"domina.events/t823");
});

domina.events.__GT_t823 = (function domina$events$create_listener_function_$___GT_t823(evt__$1,f__$1,create_listener_function__$1,meta824){
return (new domina.events.t823(evt__$1,f__$1,create_listener_function__$1,meta824));
});

}

return (new domina.events.t823(evt,f,domina$events$create_listener_function,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4299__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__830(s__831){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__831__$1 = s__831;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__831__$1);
if(temp__4126__auto__){
var s__831__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__831__$2)){
var c__4297__auto__ = cljs.core.chunk_first.call(null,s__831__$2);
var size__4298__auto__ = cljs.core.count.call(null,c__4297__auto__);
var b__833 = cljs.core.chunk_buffer.call(null,size__4298__auto__);
if((function (){var i__832 = (0);
while(true){
if((i__832 < size__4298__auto__)){
var node = cljs.core._nth.call(null,c__4297__auto__,i__832);
cljs.core.chunk_append.call(null,b__833,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__834 = (i__832 + (1));
i__832 = G__834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__833),domina$events$listen_internal_BANG__$_iter__830.call(null,cljs.core.chunk_rest.call(null,s__831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__833),null);
}
} else {
var node = cljs.core.first.call(null,s__831__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__830.call(null,cljs.core.rest.call(null,s__831__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__4299__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function() {
var domina$events$listen_BANG_ = null;
var domina$events$listen_BANG___2 = (function (type,listener){
return domina$events$listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var domina$events$listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
domina$events$listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return domina$events$listen_BANG___2.call(this,content,type);
case 3:
return domina$events$listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$events$listen_BANG_.cljs$core$IFn$_invoke$arity$2 = domina$events$listen_BANG___2;
domina$events$listen_BANG_.cljs$core$IFn$_invoke$arity$3 = domina$events$listen_BANG___3;
return domina$events$listen_BANG_;
})()
;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function() {
var domina$events$capture_BANG_ = null;
var domina$events$capture_BANG___2 = (function (type,listener){
return domina$events$capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var domina$events$capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
domina$events$capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return domina$events$capture_BANG___2.call(this,content,type);
case 3:
return domina$events$capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$events$capture_BANG_.cljs$core$IFn$_invoke$arity$2 = domina$events$capture_BANG___2;
domina$events$capture_BANG_.cljs$core$IFn$_invoke$arity$3 = domina$events$capture_BANG___3;
return domina$events$capture_BANG_;
})()
;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function() {
var domina$events$listen_once_BANG_ = null;
var domina$events$listen_once_BANG___2 = (function (type,listener){
return domina$events$listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var domina$events$listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
domina$events$listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return domina$events$listen_once_BANG___2.call(this,content,type);
case 3:
return domina$events$listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$events$listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = domina$events$listen_once_BANG___2;
domina$events$listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = domina$events$listen_once_BANG___3;
return domina$events$listen_once_BANG_;
})()
;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function() {
var domina$events$capture_once_BANG_ = null;
var domina$events$capture_once_BANG___2 = (function (type,listener){
return domina$events$capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var domina$events$capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
domina$events$capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return domina$events$capture_once_BANG___2.call(this,content,type);
case 3:
return domina$events$capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$events$capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = domina$events$capture_once_BANG___2;
domina$events$capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = domina$events$capture_once_BANG___3;
return domina$events$capture_once_BANG_;
})()
;
/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function() {
var domina$events$unlisten_BANG_ = null;
var domina$events$unlisten_BANG___0 = (function (){
return domina$events$unlisten_BANG_.call(null,domina.events.root_element);
});
var domina$events$unlisten_BANG___1 = (function (content){
var seq__843 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__844 = null;
var count__845 = (0);
var i__846 = (0);
while(true){
if((i__846 < count__845)){
var node = cljs.core._nth.call(null,chunk__844,i__846);
goog.events.removeAll(node);

var G__851 = seq__843;
var G__852 = chunk__844;
var G__853 = count__845;
var G__854 = (i__846 + (1));
seq__843 = G__851;
chunk__844 = G__852;
count__845 = G__853;
i__846 = G__854;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__843);
if(temp__4126__auto__){
var seq__843__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__843__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__843__$1);
var G__855 = cljs.core.chunk_rest.call(null,seq__843__$1);
var G__856 = c__4326__auto__;
var G__857 = cljs.core.count.call(null,c__4326__auto__);
var G__858 = (0);
seq__843 = G__855;
chunk__844 = G__856;
count__845 = G__857;
i__846 = G__858;
continue;
} else {
var node = cljs.core.first.call(null,seq__843__$1);
goog.events.removeAll(node);

var G__859 = cljs.core.next.call(null,seq__843__$1);
var G__860 = null;
var G__861 = (0);
var G__862 = (0);
seq__843 = G__859;
chunk__844 = G__860;
count__845 = G__861;
i__846 = G__862;
continue;
}
} else {
return null;
}
}
break;
}
});
var domina$events$unlisten_BANG___2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__847 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__848 = null;
var count__849 = (0);
var i__850 = (0);
while(true){
if((i__850 < count__849)){
var node = cljs.core._nth.call(null,chunk__848,i__850);
goog.events.removeAll(node,type__$1);

var G__863 = seq__847;
var G__864 = chunk__848;
var G__865 = count__849;
var G__866 = (i__850 + (1));
seq__847 = G__863;
chunk__848 = G__864;
count__849 = G__865;
i__850 = G__866;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__847);
if(temp__4126__auto__){
var seq__847__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__847__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__847__$1);
var G__867 = cljs.core.chunk_rest.call(null,seq__847__$1);
var G__868 = c__4326__auto__;
var G__869 = cljs.core.count.call(null,c__4326__auto__);
var G__870 = (0);
seq__847 = G__867;
chunk__848 = G__868;
count__849 = G__869;
i__850 = G__870;
continue;
} else {
var node = cljs.core.first.call(null,seq__847__$1);
goog.events.removeAll(node,type__$1);

var G__871 = cljs.core.next.call(null,seq__847__$1);
var G__872 = null;
var G__873 = (0);
var G__874 = (0);
seq__847 = G__871;
chunk__848 = G__872;
count__849 = G__873;
i__850 = G__874;
continue;
}
} else {
return null;
}
}
break;
}
});
domina$events$unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return domina$events$unlisten_BANG___0.call(this);
case 1:
return domina$events$unlisten_BANG___1.call(this,content);
case 2:
return domina$events$unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$events$unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = domina$events$unlisten_BANG___0;
domina$events$unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = domina$events$unlisten_BANG___1;
domina$events$unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = domina$events$unlisten_BANG___2;
return domina$events$unlisten_BANG_;
})()
;
/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function() {
var domina$events$ancestor_nodes = null;
var domina$events$ancestor_nodes__1 = (function (n){
return domina$events$ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var domina$events$ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4124__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4124__auto__)){
var parent = temp__4124__auto__;
var G__875 = parent;
var G__876 = cljs.core.cons.call(null,parent,so_far);
n = G__875;
so_far = G__876;
continue;
} else {
return so_far;
}
break;
}
});
domina$events$ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return domina$events$ancestor_nodes__1.call(this,n);
case 2:
return domina$events$ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$events$ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = domina$events$ancestor_nodes__1;
domina$events$ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = domina$events$ancestor_nodes__2;
return domina$events$ancestor_nodes;
})()
;
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__885_893 = cljs.core.seq.call(null,ancestors);
var chunk__886_894 = null;
var count__887_895 = (0);
var i__888_896 = (0);
while(true){
if((i__888_896 < count__887_895)){
var n_897 = cljs.core._nth.call(null,chunk__886_894,i__888_896);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_897;

goog.events.fireListeners(n_897,evt.type,true,evt);
}

var G__898 = seq__885_893;
var G__899 = chunk__886_894;
var G__900 = count__887_895;
var G__901 = (i__888_896 + (1));
seq__885_893 = G__898;
chunk__886_894 = G__899;
count__887_895 = G__900;
i__888_896 = G__901;
continue;
} else {
var temp__4126__auto___902 = cljs.core.seq.call(null,seq__885_893);
if(temp__4126__auto___902){
var seq__885_903__$1 = temp__4126__auto___902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__885_903__$1)){
var c__4326__auto___904 = cljs.core.chunk_first.call(null,seq__885_903__$1);
var G__905 = cljs.core.chunk_rest.call(null,seq__885_903__$1);
var G__906 = c__4326__auto___904;
var G__907 = cljs.core.count.call(null,c__4326__auto___904);
var G__908 = (0);
seq__885_893 = G__905;
chunk__886_894 = G__906;
count__887_895 = G__907;
i__888_896 = G__908;
continue;
} else {
var n_909 = cljs.core.first.call(null,seq__885_903__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_909;

goog.events.fireListeners(n_909,evt.type,true,evt);
}

var G__910 = cljs.core.next.call(null,seq__885_903__$1);
var G__911 = null;
var G__912 = (0);
var G__913 = (0);
seq__885_893 = G__910;
chunk__886_894 = G__911;
count__887_895 = G__912;
i__888_896 = G__913;
continue;
}
} else {
}
}
break;
}

var seq__889_914 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__890_915 = null;
var count__891_916 = (0);
var i__892_917 = (0);
while(true){
if((i__892_917 < count__891_916)){
var n_918 = cljs.core._nth.call(null,chunk__890_915,i__892_917);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_918;

goog.events.fireListeners(n_918,evt.type,false,evt);
}

var G__919 = seq__889_914;
var G__920 = chunk__890_915;
var G__921 = count__891_916;
var G__922 = (i__892_917 + (1));
seq__889_914 = G__919;
chunk__890_915 = G__920;
count__891_916 = G__921;
i__892_917 = G__922;
continue;
} else {
var temp__4126__auto___923 = cljs.core.seq.call(null,seq__889_914);
if(temp__4126__auto___923){
var seq__889_924__$1 = temp__4126__auto___923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__889_924__$1)){
var c__4326__auto___925 = cljs.core.chunk_first.call(null,seq__889_924__$1);
var G__926 = cljs.core.chunk_rest.call(null,seq__889_924__$1);
var G__927 = c__4326__auto___925;
var G__928 = cljs.core.count.call(null,c__4326__auto___925);
var G__929 = (0);
seq__889_914 = G__926;
chunk__890_915 = G__927;
count__891_916 = G__928;
i__892_917 = G__929;
continue;
} else {
var n_930 = cljs.core.first.call(null,seq__889_924__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_930;

goog.events.fireListeners(n_930,evt.type,false,evt);
}

var G__931 = cljs.core.next.call(null,seq__889_924__$1);
var G__932 = null;
var G__933 = (0);
var G__934 = (0);
seq__889_914 = G__931;
chunk__890_915 = G__932;
count__891_916 = G__933;
i__892_917 = G__934;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__3949__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3949__auto__)){
return o.dispatchEvent;
} else {
return and__3949__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function() {
var domina$events$dispatch_BANG_ = null;
var domina$events$dispatch_BANG___2 = (function (type,evt_map){
return domina$events$dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var domina$events$dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__941_947 = cljs.core.seq.call(null,evt_map);
var chunk__942_948 = null;
var count__943_949 = (0);
var i__944_950 = (0);
while(true){
if((i__944_950 < count__943_949)){
var vec__945_951 = cljs.core._nth.call(null,chunk__942_948,i__944_950);
var k_952 = cljs.core.nth.call(null,vec__945_951,(0),null);
var v_953 = cljs.core.nth.call(null,vec__945_951,(1),null);
(evt[k_952] = v_953);

var G__954 = seq__941_947;
var G__955 = chunk__942_948;
var G__956 = count__943_949;
var G__957 = (i__944_950 + (1));
seq__941_947 = G__954;
chunk__942_948 = G__955;
count__943_949 = G__956;
i__944_950 = G__957;
continue;
} else {
var temp__4126__auto___958 = cljs.core.seq.call(null,seq__941_947);
if(temp__4126__auto___958){
var seq__941_959__$1 = temp__4126__auto___958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__941_959__$1)){
var c__4326__auto___960 = cljs.core.chunk_first.call(null,seq__941_959__$1);
var G__961 = cljs.core.chunk_rest.call(null,seq__941_959__$1);
var G__962 = c__4326__auto___960;
var G__963 = cljs.core.count.call(null,c__4326__auto___960);
var G__964 = (0);
seq__941_947 = G__961;
chunk__942_948 = G__962;
count__943_949 = G__963;
i__944_950 = G__964;
continue;
} else {
var vec__946_965 = cljs.core.first.call(null,seq__941_959__$1);
var k_966 = cljs.core.nth.call(null,vec__946_965,(0),null);
var v_967 = cljs.core.nth.call(null,vec__946_965,(1),null);
(evt[k_966] = v_967);

var G__968 = cljs.core.next.call(null,seq__941_959__$1);
var G__969 = null;
var G__970 = (0);
var G__971 = (0);
seq__941_947 = G__968;
chunk__942_948 = G__969;
count__943_949 = G__970;
i__944_950 = G__971;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
domina$events$dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return domina$events$dispatch_BANG___2.call(this,source,type);
case 3:
return domina$events$dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
domina$events$dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = domina$events$dispatch_BANG___2;
domina$events$dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = domina$events$dispatch_BANG___3;
return domina$events$dispatch_BANG_;
})()
;
/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__972_SHARP_){
return goog.events.getListeners(p1__972_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map