// Compiled by ClojureScript 0.0-3169 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');

domina.events.Event = (function (){var obj757 = {};
return obj757;
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
if(typeof domina.events.t761 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.events.t761 = (function (evt,f,create_listener_function,meta762){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta762 = meta762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t761.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t761.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__3957__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__3957__auto__)){
return or__3957__auto__;
} else {
return not_found;
}
});

domina.events.t761.prototype.domina$events$Event$ = true;

domina.events.t761.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t761.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t761.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t761.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t761.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t761.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_763){
var self__ = this;
var _763__$1 = this;
return self__.meta762;
});

domina.events.t761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_763,meta762__$1){
var self__ = this;
var _763__$1 = this;
return (new domina.events.t761(self__.evt,self__.f,self__.create_listener_function,meta762__$1));
});

domina.events.t761.cljs$lang$type = true;

domina.events.t761.cljs$lang$ctorStr = "domina.events/t761";

domina.events.t761.cljs$lang$ctorPrWriter = (function (this__4172__auto__,writer__4173__auto__,opt__4174__auto__){
return cljs.core._write.call(null,writer__4173__auto__,"domina.events/t761");
});

domina.events.__GT_t761 = (function domina$events$create_listener_function_$___GT_t761(evt__$1,f__$1,create_listener_function__$1,meta762){
return (new domina.events.t761(evt__$1,f__$1,create_listener_function__$1,meta762));
});

}

return (new domina.events.t761(evt,f,domina$events$create_listener_function,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4299__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__768(s__769){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__769__$1 = s__769;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__769__$1);
if(temp__4126__auto__){
var s__769__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__769__$2)){
var c__4297__auto__ = cljs.core.chunk_first.call(null,s__769__$2);
var size__4298__auto__ = cljs.core.count.call(null,c__4297__auto__);
var b__771 = cljs.core.chunk_buffer.call(null,size__4298__auto__);
if((function (){var i__770 = (0);
while(true){
if((i__770 < size__4298__auto__)){
var node = cljs.core._nth.call(null,c__4297__auto__,i__770);
cljs.core.chunk_append.call(null,b__771,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__772 = (i__770 + (1));
i__770 = G__772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__771),domina$events$listen_internal_BANG__$_iter__768.call(null,cljs.core.chunk_rest.call(null,s__769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__771),null);
}
} else {
var node = cljs.core.first.call(null,s__769__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__768.call(null,cljs.core.rest.call(null,s__769__$2)));
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
var seq__781 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__782 = null;
var count__783 = (0);
var i__784 = (0);
while(true){
if((i__784 < count__783)){
var node = cljs.core._nth.call(null,chunk__782,i__784);
goog.events.removeAll(node);

var G__789 = seq__781;
var G__790 = chunk__782;
var G__791 = count__783;
var G__792 = (i__784 + (1));
seq__781 = G__789;
chunk__782 = G__790;
count__783 = G__791;
i__784 = G__792;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__781);
if(temp__4126__auto__){
var seq__781__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__781__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__781__$1);
var G__793 = cljs.core.chunk_rest.call(null,seq__781__$1);
var G__794 = c__4326__auto__;
var G__795 = cljs.core.count.call(null,c__4326__auto__);
var G__796 = (0);
seq__781 = G__793;
chunk__782 = G__794;
count__783 = G__795;
i__784 = G__796;
continue;
} else {
var node = cljs.core.first.call(null,seq__781__$1);
goog.events.removeAll(node);

var G__797 = cljs.core.next.call(null,seq__781__$1);
var G__798 = null;
var G__799 = (0);
var G__800 = (0);
seq__781 = G__797;
chunk__782 = G__798;
count__783 = G__799;
i__784 = G__800;
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
var seq__785 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__786 = null;
var count__787 = (0);
var i__788 = (0);
while(true){
if((i__788 < count__787)){
var node = cljs.core._nth.call(null,chunk__786,i__788);
goog.events.removeAll(node,type__$1);

var G__801 = seq__785;
var G__802 = chunk__786;
var G__803 = count__787;
var G__804 = (i__788 + (1));
seq__785 = G__801;
chunk__786 = G__802;
count__787 = G__803;
i__788 = G__804;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__785);
if(temp__4126__auto__){
var seq__785__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__785__$1)){
var c__4326__auto__ = cljs.core.chunk_first.call(null,seq__785__$1);
var G__805 = cljs.core.chunk_rest.call(null,seq__785__$1);
var G__806 = c__4326__auto__;
var G__807 = cljs.core.count.call(null,c__4326__auto__);
var G__808 = (0);
seq__785 = G__805;
chunk__786 = G__806;
count__787 = G__807;
i__788 = G__808;
continue;
} else {
var node = cljs.core.first.call(null,seq__785__$1);
goog.events.removeAll(node,type__$1);

var G__809 = cljs.core.next.call(null,seq__785__$1);
var G__810 = null;
var G__811 = (0);
var G__812 = (0);
seq__785 = G__809;
chunk__786 = G__810;
count__787 = G__811;
i__788 = G__812;
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
var G__813 = parent;
var G__814 = cljs.core.cons.call(null,parent,so_far);
n = G__813;
so_far = G__814;
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
var seq__823_831 = cljs.core.seq.call(null,ancestors);
var chunk__824_832 = null;
var count__825_833 = (0);
var i__826_834 = (0);
while(true){
if((i__826_834 < count__825_833)){
var n_835 = cljs.core._nth.call(null,chunk__824_832,i__826_834);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_835;

goog.events.fireListeners(n_835,evt.type,true,evt);
}

var G__836 = seq__823_831;
var G__837 = chunk__824_832;
var G__838 = count__825_833;
var G__839 = (i__826_834 + (1));
seq__823_831 = G__836;
chunk__824_832 = G__837;
count__825_833 = G__838;
i__826_834 = G__839;
continue;
} else {
var temp__4126__auto___840 = cljs.core.seq.call(null,seq__823_831);
if(temp__4126__auto___840){
var seq__823_841__$1 = temp__4126__auto___840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__823_841__$1)){
var c__4326__auto___842 = cljs.core.chunk_first.call(null,seq__823_841__$1);
var G__843 = cljs.core.chunk_rest.call(null,seq__823_841__$1);
var G__844 = c__4326__auto___842;
var G__845 = cljs.core.count.call(null,c__4326__auto___842);
var G__846 = (0);
seq__823_831 = G__843;
chunk__824_832 = G__844;
count__825_833 = G__845;
i__826_834 = G__846;
continue;
} else {
var n_847 = cljs.core.first.call(null,seq__823_841__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_847;

goog.events.fireListeners(n_847,evt.type,true,evt);
}

var G__848 = cljs.core.next.call(null,seq__823_841__$1);
var G__849 = null;
var G__850 = (0);
var G__851 = (0);
seq__823_831 = G__848;
chunk__824_832 = G__849;
count__825_833 = G__850;
i__826_834 = G__851;
continue;
}
} else {
}
}
break;
}

var seq__827_852 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__828_853 = null;
var count__829_854 = (0);
var i__830_855 = (0);
while(true){
if((i__830_855 < count__829_854)){
var n_856 = cljs.core._nth.call(null,chunk__828_853,i__830_855);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_856;

goog.events.fireListeners(n_856,evt.type,false,evt);
}

var G__857 = seq__827_852;
var G__858 = chunk__828_853;
var G__859 = count__829_854;
var G__860 = (i__830_855 + (1));
seq__827_852 = G__857;
chunk__828_853 = G__858;
count__829_854 = G__859;
i__830_855 = G__860;
continue;
} else {
var temp__4126__auto___861 = cljs.core.seq.call(null,seq__827_852);
if(temp__4126__auto___861){
var seq__827_862__$1 = temp__4126__auto___861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__827_862__$1)){
var c__4326__auto___863 = cljs.core.chunk_first.call(null,seq__827_862__$1);
var G__864 = cljs.core.chunk_rest.call(null,seq__827_862__$1);
var G__865 = c__4326__auto___863;
var G__866 = cljs.core.count.call(null,c__4326__auto___863);
var G__867 = (0);
seq__827_852 = G__864;
chunk__828_853 = G__865;
count__829_854 = G__866;
i__830_855 = G__867;
continue;
} else {
var n_868 = cljs.core.first.call(null,seq__827_862__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_868;

goog.events.fireListeners(n_868,evt.type,false,evt);
}

var G__869 = cljs.core.next.call(null,seq__827_862__$1);
var G__870 = null;
var G__871 = (0);
var G__872 = (0);
seq__827_852 = G__869;
chunk__828_853 = G__870;
count__829_854 = G__871;
i__830_855 = G__872;
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
var seq__879_885 = cljs.core.seq.call(null,evt_map);
var chunk__880_886 = null;
var count__881_887 = (0);
var i__882_888 = (0);
while(true){
if((i__882_888 < count__881_887)){
var vec__883_889 = cljs.core._nth.call(null,chunk__880_886,i__882_888);
var k_890 = cljs.core.nth.call(null,vec__883_889,(0),null);
var v_891 = cljs.core.nth.call(null,vec__883_889,(1),null);
(evt[k_890] = v_891);

var G__892 = seq__879_885;
var G__893 = chunk__880_886;
var G__894 = count__881_887;
var G__895 = (i__882_888 + (1));
seq__879_885 = G__892;
chunk__880_886 = G__893;
count__881_887 = G__894;
i__882_888 = G__895;
continue;
} else {
var temp__4126__auto___896 = cljs.core.seq.call(null,seq__879_885);
if(temp__4126__auto___896){
var seq__879_897__$1 = temp__4126__auto___896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__879_897__$1)){
var c__4326__auto___898 = cljs.core.chunk_first.call(null,seq__879_897__$1);
var G__899 = cljs.core.chunk_rest.call(null,seq__879_897__$1);
var G__900 = c__4326__auto___898;
var G__901 = cljs.core.count.call(null,c__4326__auto___898);
var G__902 = (0);
seq__879_885 = G__899;
chunk__880_886 = G__900;
count__881_887 = G__901;
i__882_888 = G__902;
continue;
} else {
var vec__884_903 = cljs.core.first.call(null,seq__879_897__$1);
var k_904 = cljs.core.nth.call(null,vec__884_903,(0),null);
var v_905 = cljs.core.nth.call(null,vec__884_903,(1),null);
(evt[k_904] = v_905);

var G__906 = cljs.core.next.call(null,seq__879_897__$1);
var G__907 = null;
var G__908 = (0);
var G__909 = (0);
seq__879_885 = G__906;
chunk__880_886 = G__907;
count__881_887 = G__908;
i__882_888 = G__909;
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
return (function (p1__910_SHARP_){
return goog.events.getListeners(p1__910_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map