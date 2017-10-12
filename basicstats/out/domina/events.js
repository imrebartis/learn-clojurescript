// Compiled by ClojureScript 0.0-3169 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');

domina.events.Event = (function (){var obj822 = {};
return obj822;
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
if(typeof domina.events.t826 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.events.t826 = (function (evt,f,create_listener_function,meta827){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta827 = meta827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t826.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t826.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__3957__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__3957__auto__)){
return or__3957__auto__;
} else {
return not_found;
}
});

domina.events.t826.prototype.domina$events$Event$ = true;

domina.events.t826.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t826.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t826.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t826.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t826.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t826.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_828){
var self__ = this;
var _828__$1 = this;
return self__.meta827;
});

domina.events.t826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_828,meta827__$1){
var self__ = this;
var _828__$1 = this;
return (new domina.events.t826(self__.evt,self__.f,self__.create_listener_function,meta827__$1));
});

domina.events.t826.cljs$lang$type = true;

domina.events.t826.cljs$lang$ctorStr = "domina.events/t826";

domina.events.t826.cljs$lang$ctorPrWriter = (function (this__4172__auto__,writer__4173__auto__,opt__4174__auto__){
return cljs.core._write.call(null,writer__4173__auto__,"domina.events/t826");
});

domina.events.__GT_t826 = (function domina$events$create_listener_function_$___GT_t826(evt__$1,f__$1,create_listener_function__$1,meta827){
return (new domina.events.t826(evt__$1,f__$1,create_listener_function__$1,meta827));
});

}

return (new domina.events.t826(evt,f,domina$events$create_listener_function,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4299__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__833(s__834){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__834__$1 = s__834;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__834__$1);
if(temp__4126__auto__){
var s__834__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__834__$2)){
var c__4297__auto__ = cljs.core.chunk_first.call(null,s__834__$2);
var size__4298__auto__ = cljs.core.count.call(null,c__4297__auto__);
var b__836 = cljs.core.chunk_buffer.call(null,size__4298__auto__);
if((function (){var i__835 = (0);
while(true){
if((i__835 < size__4298__auto__)){
var node = cljs.core._nth.call(null,c__4297__auto__,i__835);
cljs.core.chunk_append.call(null,b__836,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__837 = (i__835 + (1));
i__835 = G__837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__836),domina$events$listen_internal_BANG__$_iter__833.call(null,cljs.core.chunk_rest.call(null,s__834__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__836),null);
}
} else {
var node = cljs.core.first.call(null,s__834__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__833.call(null,cljs.core.rest.call(null,s__834__$2)));
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
var seq__846 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__847 = null;
var count__848 = (0);
var i__849 = (0);
while(true){
if((i__849 < count__848)){
var node = cljs.core._nth.call(null,chunk__847,i__849);
goog.events.removeAll(node);

var G__854 = seq__846;
var G__855 = chunk__847;
var G__856 = count__848;
var G__857 = (i__849 + (1));
seq__846 = G__854;
chunk__847 = G__855;
count__848 = G__856;
i__849 = G__857;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__846);
if(temp__4126__auto__){
var seq__846__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__846__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__846__$1);
var G__858 = cljs.core.chunk_rest.call(null,seq__846__$1);
var G__859 = c__4326__auto__;
var G__860 = cljs.core.count.call(null,c__4326__auto__);
var G__861 = (0);
seq__846 = G__858;
chunk__847 = G__859;
count__848 = G__860;
i__849 = G__861;
continue;
} else {
var node = cljs.core.first.call(null,seq__846__$1);
goog.events.removeAll(node);

var G__862 = cljs.core.next.call(null,seq__846__$1);
var G__863 = null;
var G__864 = (0);
var G__865 = (0);
seq__846 = G__862;
chunk__847 = G__863;
count__848 = G__864;
i__849 = G__865;
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
var seq__850 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__851 = null;
var count__852 = (0);
var i__853 = (0);
while(true){
if((i__853 < count__852)){
var node = cljs.core._nth.call(null,chunk__851,i__853);
goog.events.removeAll(node,type__$1);

var G__866 = seq__850;
var G__867 = chunk__851;
var G__868 = count__852;
var G__869 = (i__853 + (1));
seq__850 = G__866;
chunk__851 = G__867;
count__852 = G__868;
i__853 = G__869;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__850);
if(temp__4126__auto__){
var seq__850__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__850__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__850__$1);
var G__870 = cljs.core.chunk_rest.call(null,seq__850__$1);
var G__871 = c__4326__auto__;
var G__872 = cljs.core.count.call(null,c__4326__auto__);
var G__873 = (0);
seq__850 = G__870;
chunk__851 = G__871;
count__852 = G__872;
i__853 = G__873;
continue;
} else {
var node = cljs.core.first.call(null,seq__850__$1);
goog.events.removeAll(node,type__$1);

var G__874 = cljs.core.next.call(null,seq__850__$1);
var G__875 = null;
var G__876 = (0);
var G__877 = (0);
seq__850 = G__874;
chunk__851 = G__875;
count__852 = G__876;
i__853 = G__877;
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
var G__878 = parent;
var G__879 = cljs.core.cons.call(null,parent,so_far);
n = G__878;
so_far = G__879;
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
var seq__888_896 = cljs.core.seq.call(null,ancestors);
var chunk__889_897 = null;
var count__890_898 = (0);
var i__891_899 = (0);
while(true){
if((i__891_899 < count__890_898)){
var n_900 = cljs.core._nth.call(null,chunk__889_897,i__891_899);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_900;

goog.events.fireListeners(n_900,evt.type,true,evt);
}

var G__901 = seq__888_896;
var G__902 = chunk__889_897;
var G__903 = count__890_898;
var G__904 = (i__891_899 + (1));
seq__888_896 = G__901;
chunk__889_897 = G__902;
count__890_898 = G__903;
i__891_899 = G__904;
continue;
} else {
var temp__4126__auto___905 = cljs.core.seq.call(null,seq__888_896);
if(temp__4126__auto___905){
var seq__888_906__$1 = temp__4126__auto___905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__888_906__$1)){
var c__4326__auto___907 = cljs.core.chunk_first.call(null,seq__888_906__$1);
var G__908 = cljs.core.chunk_rest.call(null,seq__888_906__$1);
var G__909 = c__4326__auto___907;
var G__910 = cljs.core.count.call(null,c__4326__auto___907);
var G__911 = (0);
seq__888_896 = G__908;
chunk__889_897 = G__909;
count__890_898 = G__910;
i__891_899 = G__911;
continue;
} else {
var n_912 = cljs.core.first.call(null,seq__888_906__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_912;

goog.events.fireListeners(n_912,evt.type,true,evt);
}

var G__913 = cljs.core.next.call(null,seq__888_906__$1);
var G__914 = null;
var G__915 = (0);
var G__916 = (0);
seq__888_896 = G__913;
chunk__889_897 = G__914;
count__890_898 = G__915;
i__891_899 = G__916;
continue;
}
} else {
}
}
break;
}

var seq__892_917 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__893_918 = null;
var count__894_919 = (0);
var i__895_920 = (0);
while(true){
if((i__895_920 < count__894_919)){
var n_921 = cljs.core._nth.call(null,chunk__893_918,i__895_920);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_921;

goog.events.fireListeners(n_921,evt.type,false,evt);
}

var G__922 = seq__892_917;
var G__923 = chunk__893_918;
var G__924 = count__894_919;
var G__925 = (i__895_920 + (1));
seq__892_917 = G__922;
chunk__893_918 = G__923;
count__894_919 = G__924;
i__895_920 = G__925;
continue;
} else {
var temp__4126__auto___926 = cljs.core.seq.call(null,seq__892_917);
if(temp__4126__auto___926){
var seq__892_927__$1 = temp__4126__auto___926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__892_927__$1)){
var c__4326__auto___928 = cljs.core.chunk_first.call(null,seq__892_927__$1);
var G__929 = cljs.core.chunk_rest.call(null,seq__892_927__$1);
var G__930 = c__4326__auto___928;
var G__931 = cljs.core.count.call(null,c__4326__auto___928);
var G__932 = (0);
seq__892_917 = G__929;
chunk__893_918 = G__930;
count__894_919 = G__931;
i__895_920 = G__932;
continue;
} else {
var n_933 = cljs.core.first.call(null,seq__892_927__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_933;

goog.events.fireListeners(n_933,evt.type,false,evt);
}

var G__934 = cljs.core.next.call(null,seq__892_927__$1);
var G__935 = null;
var G__936 = (0);
var G__937 = (0);
seq__892_917 = G__934;
chunk__893_918 = G__935;
count__894_919 = G__936;
i__895_920 = G__937;
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
var seq__944_950 = cljs.core.seq.call(null,evt_map);
var chunk__945_951 = null;
var count__946_952 = (0);
var i__947_953 = (0);
while(true){
if((i__947_953 < count__946_952)){
var vec__948_954 = cljs.core._nth.call(null,chunk__945_951,i__947_953);
var k_955 = cljs.core.nth.call(null,vec__948_954,(0),null);
var v_956 = cljs.core.nth.call(null,vec__948_954,(1),null);
(evt[k_955] = v_956);

var G__957 = seq__944_950;
var G__958 = chunk__945_951;
var G__959 = count__946_952;
var G__960 = (i__947_953 + (1));
seq__944_950 = G__957;
chunk__945_951 = G__958;
count__946_952 = G__959;
i__947_953 = G__960;
continue;
} else {
var temp__4126__auto___961 = cljs.core.seq.call(null,seq__944_950);
if(temp__4126__auto___961){
var seq__944_962__$1 = temp__4126__auto___961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__944_962__$1)){
var c__4326__auto___963 = cljs.core.chunk_first.call(null,seq__944_962__$1);
var G__964 = cljs.core.chunk_rest.call(null,seq__944_962__$1);
var G__965 = c__4326__auto___963;
var G__966 = cljs.core.count.call(null,c__4326__auto___963);
var G__967 = (0);
seq__944_950 = G__964;
chunk__945_951 = G__965;
count__946_952 = G__966;
i__947_953 = G__967;
continue;
} else {
var vec__949_968 = cljs.core.first.call(null,seq__944_962__$1);
var k_969 = cljs.core.nth.call(null,vec__949_968,(0),null);
var v_970 = cljs.core.nth.call(null,vec__949_968,(1),null);
(evt[k_969] = v_970);

var G__971 = cljs.core.next.call(null,seq__944_962__$1);
var G__972 = null;
var G__973 = (0);
var G__974 = (0);
seq__944_950 = G__971;
chunk__945_951 = G__972;
count__946_952 = G__973;
i__947_953 = G__974;
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
return (function (p1__975_SHARP_){
return goog.events.getListeners(p1__975_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map