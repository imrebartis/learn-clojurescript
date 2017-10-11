// Compiled by ClojureScript 0.0-3169 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');

domina.events.Event = (function (){var obj839 = {};
return obj839;
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
if(typeof domina.events.t843 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.events.t843 = (function (evt,f,create_listener_function,meta844){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta844 = meta844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t843.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t843.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__3957__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__3957__auto__)){
return or__3957__auto__;
} else {
return not_found;
}
});

domina.events.t843.prototype.domina$events$Event$ = true;

domina.events.t843.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t843.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t843.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t843.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t843.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t843.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_845){
var self__ = this;
var _845__$1 = this;
return self__.meta844;
});

domina.events.t843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_845,meta844__$1){
var self__ = this;
var _845__$1 = this;
return (new domina.events.t843(self__.evt,self__.f,self__.create_listener_function,meta844__$1));
});

domina.events.t843.cljs$lang$type = true;

domina.events.t843.cljs$lang$ctorStr = "domina.events/t843";

domina.events.t843.cljs$lang$ctorPrWriter = (function (this__4172__auto__,writer__4173__auto__,opt__4174__auto__){
return cljs.core._write.call(null,writer__4173__auto__,"domina.events/t843");
});

domina.events.__GT_t843 = (function domina$events$create_listener_function_$___GT_t843(evt__$1,f__$1,create_listener_function__$1,meta844){
return (new domina.events.t843(evt__$1,f__$1,create_listener_function__$1,meta844));
});

}

return (new domina.events.t843(evt,f,domina$events$create_listener_function,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4299__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__850(s__851){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__851__$1 = s__851;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__851__$1);
if(temp__4126__auto__){
var s__851__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__851__$2)){
var c__4297__auto__ = cljs.core.chunk_first.call(null,s__851__$2);
var size__4298__auto__ = cljs.core.count.call(null,c__4297__auto__);
var b__853 = cljs.core.chunk_buffer.call(null,size__4298__auto__);
if((function (){var i__852 = (0);
while(true){
if((i__852 < size__4298__auto__)){
var node = cljs.core._nth.call(null,c__4297__auto__,i__852);
cljs.core.chunk_append.call(null,b__853,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__854 = (i__852 + (1));
i__852 = G__854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__853),domina$events$listen_internal_BANG__$_iter__850.call(null,cljs.core.chunk_rest.call(null,s__851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__853),null);
}
} else {
var node = cljs.core.first.call(null,s__851__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__850.call(null,cljs.core.rest.call(null,s__851__$2)));
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
var seq__863 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__864 = null;
var count__865 = (0);
var i__866 = (0);
while(true){
if((i__866 < count__865)){
var node = cljs.core._nth.call(null,chunk__864,i__866);
goog.events.removeAll(node);

var G__871 = seq__863;
var G__872 = chunk__864;
var G__873 = count__865;
var G__874 = (i__866 + (1));
seq__863 = G__871;
chunk__864 = G__872;
count__865 = G__873;
i__866 = G__874;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__863);
if(temp__4126__auto__){
var seq__863__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__863__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__863__$1);
var G__875 = cljs.core.chunk_rest.call(null,seq__863__$1);
var G__876 = c__4326__auto__;
var G__877 = cljs.core.count.call(null,c__4326__auto__);
var G__878 = (0);
seq__863 = G__875;
chunk__864 = G__876;
count__865 = G__877;
i__866 = G__878;
continue;
} else {
var node = cljs.core.first.call(null,seq__863__$1);
goog.events.removeAll(node);

var G__879 = cljs.core.next.call(null,seq__863__$1);
var G__880 = null;
var G__881 = (0);
var G__882 = (0);
seq__863 = G__879;
chunk__864 = G__880;
count__865 = G__881;
i__866 = G__882;
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
var seq__867 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__868 = null;
var count__869 = (0);
var i__870 = (0);
while(true){
if((i__870 < count__869)){
var node = cljs.core._nth.call(null,chunk__868,i__870);
goog.events.removeAll(node,type__$1);

var G__883 = seq__867;
var G__884 = chunk__868;
var G__885 = count__869;
var G__886 = (i__870 + (1));
seq__867 = G__883;
chunk__868 = G__884;
count__869 = G__885;
i__870 = G__886;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__867);
if(temp__4126__auto__){
var seq__867__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__867__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__867__$1);
var G__887 = cljs.core.chunk_rest.call(null,seq__867__$1);
var G__888 = c__4326__auto__;
var G__889 = cljs.core.count.call(null,c__4326__auto__);
var G__890 = (0);
seq__867 = G__887;
chunk__868 = G__888;
count__869 = G__889;
i__870 = G__890;
continue;
} else {
var node = cljs.core.first.call(null,seq__867__$1);
goog.events.removeAll(node,type__$1);

var G__891 = cljs.core.next.call(null,seq__867__$1);
var G__892 = null;
var G__893 = (0);
var G__894 = (0);
seq__867 = G__891;
chunk__868 = G__892;
count__869 = G__893;
i__870 = G__894;
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
var G__895 = parent;
var G__896 = cljs.core.cons.call(null,parent,so_far);
n = G__895;
so_far = G__896;
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
var seq__905_913 = cljs.core.seq.call(null,ancestors);
var chunk__906_914 = null;
var count__907_915 = (0);
var i__908_916 = (0);
while(true){
if((i__908_916 < count__907_915)){
var n_917 = cljs.core._nth.call(null,chunk__906_914,i__908_916);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_917;

goog.events.fireListeners(n_917,evt.type,true,evt);
}

var G__918 = seq__905_913;
var G__919 = chunk__906_914;
var G__920 = count__907_915;
var G__921 = (i__908_916 + (1));
seq__905_913 = G__918;
chunk__906_914 = G__919;
count__907_915 = G__920;
i__908_916 = G__921;
continue;
} else {
var temp__4126__auto___922 = cljs.core.seq.call(null,seq__905_913);
if(temp__4126__auto___922){
var seq__905_923__$1 = temp__4126__auto___922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__905_923__$1)){
var c__4326__auto___924 = cljs.core.chunk_first.call(null,seq__905_923__$1);
var G__925 = cljs.core.chunk_rest.call(null,seq__905_923__$1);
var G__926 = c__4326__auto___924;
var G__927 = cljs.core.count.call(null,c__4326__auto___924);
var G__928 = (0);
seq__905_913 = G__925;
chunk__906_914 = G__926;
count__907_915 = G__927;
i__908_916 = G__928;
continue;
} else {
var n_929 = cljs.core.first.call(null,seq__905_923__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_929;

goog.events.fireListeners(n_929,evt.type,true,evt);
}

var G__930 = cljs.core.next.call(null,seq__905_923__$1);
var G__931 = null;
var G__932 = (0);
var G__933 = (0);
seq__905_913 = G__930;
chunk__906_914 = G__931;
count__907_915 = G__932;
i__908_916 = G__933;
continue;
}
} else {
}
}
break;
}

var seq__909_934 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__910_935 = null;
var count__911_936 = (0);
var i__912_937 = (0);
while(true){
if((i__912_937 < count__911_936)){
var n_938 = cljs.core._nth.call(null,chunk__910_935,i__912_937);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_938;

goog.events.fireListeners(n_938,evt.type,false,evt);
}

var G__939 = seq__909_934;
var G__940 = chunk__910_935;
var G__941 = count__911_936;
var G__942 = (i__912_937 + (1));
seq__909_934 = G__939;
chunk__910_935 = G__940;
count__911_936 = G__941;
i__912_937 = G__942;
continue;
} else {
var temp__4126__auto___943 = cljs.core.seq.call(null,seq__909_934);
if(temp__4126__auto___943){
var seq__909_944__$1 = temp__4126__auto___943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__909_944__$1)){
var c__4326__auto___945 = cljs.core.chunk_first.call(null,seq__909_944__$1);
var G__946 = cljs.core.chunk_rest.call(null,seq__909_944__$1);
var G__947 = c__4326__auto___945;
var G__948 = cljs.core.count.call(null,c__4326__auto___945);
var G__949 = (0);
seq__909_934 = G__946;
chunk__910_935 = G__947;
count__911_936 = G__948;
i__912_937 = G__949;
continue;
} else {
var n_950 = cljs.core.first.call(null,seq__909_944__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_950;

goog.events.fireListeners(n_950,evt.type,false,evt);
}

var G__951 = cljs.core.next.call(null,seq__909_944__$1);
var G__952 = null;
var G__953 = (0);
var G__954 = (0);
seq__909_934 = G__951;
chunk__910_935 = G__952;
count__911_936 = G__953;
i__912_937 = G__954;
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
var seq__961_967 = cljs.core.seq.call(null,evt_map);
var chunk__962_968 = null;
var count__963_969 = (0);
var i__964_970 = (0);
while(true){
if((i__964_970 < count__963_969)){
var vec__965_971 = cljs.core._nth.call(null,chunk__962_968,i__964_970);
var k_972 = cljs.core.nth.call(null,vec__965_971,(0),null);
var v_973 = cljs.core.nth.call(null,vec__965_971,(1),null);
(evt[k_972] = v_973);

var G__974 = seq__961_967;
var G__975 = chunk__962_968;
var G__976 = count__963_969;
var G__977 = (i__964_970 + (1));
seq__961_967 = G__974;
chunk__962_968 = G__975;
count__963_969 = G__976;
i__964_970 = G__977;
continue;
} else {
var temp__4126__auto___978 = cljs.core.seq.call(null,seq__961_967);
if(temp__4126__auto___978){
var seq__961_979__$1 = temp__4126__auto___978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__961_979__$1)){
var c__4326__auto___980 = cljs.core.chunk_first.call(null,seq__961_979__$1);
var G__981 = cljs.core.chunk_rest.call(null,seq__961_979__$1);
var G__982 = c__4326__auto___980;
var G__983 = cljs.core.count.call(null,c__4326__auto___980);
var G__984 = (0);
seq__961_967 = G__981;
chunk__962_968 = G__982;
count__963_969 = G__983;
i__964_970 = G__984;
continue;
} else {
var vec__966_985 = cljs.core.first.call(null,seq__961_979__$1);
var k_986 = cljs.core.nth.call(null,vec__966_985,(0),null);
var v_987 = cljs.core.nth.call(null,vec__966_985,(1),null);
(evt[k_986] = v_987);

var G__988 = cljs.core.next.call(null,seq__961_979__$1);
var G__989 = null;
var G__990 = (0);
var G__991 = (0);
seq__961_967 = G__988;
chunk__962_968 = G__989;
count__963_969 = G__990;
i__964_970 = G__991;
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
return (function (p1__992_SHARP_){
return goog.events.getListeners(p1__992_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map