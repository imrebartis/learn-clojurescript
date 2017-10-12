// Compiled by ClojureScript 0.0-3169 {}
goog.provide('colors.core');
goog.require('cljs.core');
goog.require('goog.color');
goog.require('reagent.core');
goog.require('clojure.browser.repl');
if(typeof colors.core.conn !== 'undefined'){
} else {
colors.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
if(typeof colors.core.rgbh !== 'undefined'){
} else {
colors.core.rgbh = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(255),new cljs.core.Keyword(null,"g","g",1738089905),(255),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"hex","hex",41691346),"#ffff00"], null));
}
/**
 * This component is a rectangle whose background color
 * is controlled by the value of the :hex key in the rgbh atom
 */
colors.core.color_square = (function colors$core$color_square(){
var map__6442 = cljs.core.deref.call(null,colors.core.rgbh);
var map__6442__$1 = ((cljs.core.seq_QMARK_.call(null,map__6442))?cljs.core.apply.call(null,cljs.core.hash_map,map__6442):map__6442);
var hex = cljs.core.get.call(null,map__6442__$1,new cljs.core.Keyword(null,"hex","hex",41691346));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"150px",new cljs.core.Keyword(null,"background-color","background-color",570434026),hex,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null)," "], null);
});
colors.core.hex_change = (function colors$core$hex_change(event){
var hex = [cljs.core.str("#"),cljs.core.str(event.target.value)].join('');
if(cljs.core.truth_(goog.color.isValidColor(hex))){
var vec__6444 = goog.color.hexToRgb(hex);
var r = cljs.core.nth.call(null,vec__6444,(0),null);
var g = cljs.core.nth.call(null,vec__6444,(1),null);
var b = cljs.core.nth.call(null,vec__6444,(2),null);
return cljs.core.swap_BANG_.call(null,colors.core.rgbh,cljs.core.assoc,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"hex","hex",41691346),hex);
} else {
return cljs.core.swap_BANG_.call(null,colors.core.rgbh,cljs.core.assoc,new cljs.core.Keyword(null,"hex","hex",41691346),hex);
}
});
colors.core.hex_input = (function colors$core$hex_input(){
var map__6446 = cljs.core.deref.call(null,colors.core.rgbh);
var map__6446__$1 = ((cljs.core.seq_QMARK_.call(null,map__6446))?cljs.core.apply.call(null,cljs.core.hash_map,map__6446):map__6446);
var hex = cljs.core.get.call(null,map__6446__$1,new cljs.core.Keyword(null,"hex","hex",41691346));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),(9),new cljs.core.Keyword(null,"value","value",305978217),hex.substr((1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),colors.core.hex_change], null)], null);
});
/**
 * Restrict a value to a minimum and maximum; the empty string
 * remains unchanged
 */
colors.core.in_range = (function colors$core$in_range(value,minval,maxval){
if(!(cljs.core._EQ_.call(null,"",value))){
var v = window.parseInt(value,(10));
var x__4025__auto__ = minval;
var y__4026__auto__ = (function (){var x__4028__auto__ = v;
var y__4029__auto__ = maxval;
return ((x__4028__auto__ < y__4029__auto__) ? x__4028__auto__ : y__4029__auto__);
})();
return ((x__4025__auto__ > y__4026__auto__) ? x__4025__auto__ : y__4026__auto__);
} else {
return [cljs.core.str(value)].join('');
}
});
colors.core.rgb_change = (function colors$core$rgb_change(event,rgb_part){
var map__6448 = cljs.core.deref.call(null,colors.core.rgbh);
var map__6448__$1 = ((cljs.core.seq_QMARK_.call(null,map__6448))?cljs.core.apply.call(null,cljs.core.hash_map,map__6448):map__6448);
var hex = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"hex","hex",41691346));
var b = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var g = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var r = cljs.core.get.call(null,map__6448__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var v = colors.core.in_range.call(null,event.target.value,(0),(255));
cljs.core.swap_BANG_.call(null,colors.core.rgbh,cljs.core.assoc,rgb_part,v);

return cljs.core.swap_BANG_.call(null,colors.core.rgbh,cljs.core.assoc,new cljs.core.Keyword(null,"hex","hex",41691346),goog.color.rgbToHex(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,colors.core.rgbh)),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,colors.core.rgbh)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,colors.core.rgbh))));
});
colors.core.rgbfield = (function colors$core$rgbfield(rgb_part,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return colors.core.rgb_change.call(null,event,rgb_part);
})], null)], null);
});
colors.core.percent_change = (function colors$core$percent_change(event,rgb_part){
var map__6450 = cljs.core.deref.call(null,colors.core.rgbh);
var map__6450__$1 = ((cljs.core.seq_QMARK_.call(null,map__6450))?cljs.core.apply.call(null,cljs.core.hash_map,map__6450):map__6450);
var hex = cljs.core.get.call(null,map__6450__$1,new cljs.core.Keyword(null,"hex","hex",41691346));
var b = cljs.core.get.call(null,map__6450__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var g = cljs.core.get.call(null,map__6450__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var r = cljs.core.get.call(null,map__6450__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var v = colors.core.in_range.call(null,event.target.value,(0),(100));
cljs.core.swap_BANG_.call(null,colors.core.rgbh,cljs.core.assoc,rgb_part,((255) * (v / (100))).toFixed((0)));

return cljs.core.swap_BANG_.call(null,colors.core.rgbh,cljs.core.assoc,new cljs.core.Keyword(null,"hex","hex",41691346),goog.color.rgbToHex(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,colors.core.rgbh)),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,colors.core.rgbh)),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,colors.core.rgbh))));
});
colors.core.percentfield = (function colors$core$percentfield(rgb_part,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"value","value",305978217),((100) * (val / (255))).toFixed((0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return colors.core.percent_change.call(null,event,rgb_part);
})], null)], null);
});
colors.core.everything = (function colors$core$everything(){
var map__6452 = cljs.core.deref.call(null,colors.core.rgbh);
var map__6452__$1 = ((cljs.core.seq_QMARK_.call(null,map__6452))?cljs.core.apply.call(null,cljs.core.hash_map,map__6452):map__6452);
var b = cljs.core.get.call(null,map__6452__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var g = cljs.core.get.call(null,map__6452__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var r = cljs.core.get.call(null,map__6452__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.color_square], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Hex: #",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.hex_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"RGB: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.rgbfield,new cljs.core.Keyword(null,"r","r",-471384190),r], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.rgbfield,new cljs.core.Keyword(null,"g","g",1738089905),g], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.rgbfield,new cljs.core.Keyword(null,"b","b",1482224470),b], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"RGB Percent: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.percentfield,new cljs.core.Keyword(null,"r","r",-471384190),r], null),"%, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.percentfield,new cljs.core.Keyword(null,"g","g",1738089905),g], null),"%, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.percentfield,new cljs.core.Keyword(null,"b","b",1482224470),b], null),"%"], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors.core.everything], null),document.getElementById("dynamic"));

//# sourceMappingURL=core.js.map