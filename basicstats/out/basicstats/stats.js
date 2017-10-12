// Compiled by ClojureScript 0.0-3169 {}
goog.provide('basicstats.stats');
goog.require('cljs.core');
basicstats.stats.mean = (function basicstats$stats$mean(data){
var n = cljs.core.count.call(null,data);
var sum = cljs.core.reduce.call(null,cljs.core._PLUS_,data);
if((n === (0))){
return (0);
} else {
return (sum / n);
}
});
basicstats.stats.median = (function basicstats$stats$median(data){
var n = cljs.core.count.call(null,data);
if((n === (0))){
return (0);
} else {
var half = cljs.core.drop.call(null,(((n / (2)) | (0)) - (1)),cljs.core.sort.call(null,data));
if(cljs.core.odd_QMARK_.call(null,n)){
return cljs.core.second.call(null,half);
} else {
return ((cljs.core.first.call(null,half) + cljs.core.second.call(null,half)) / (2));
}
}
});
basicstats.stats.standard_deviation = (function basicstats$stats$standard_deviation(data){
var n = cljs.core.count.call(null,data);
var vec__66 = cljs.core.reduce.call(null,((function (n){
return (function (acc,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.last.call(null,acc) + (x * x))),(cljs.core.first.call(null,acc) + x));
});})(n))
,cljs.core.list((0),(0)),data);
var sum = cljs.core.nth.call(null,vec__66,(0),null);
var sumsq = cljs.core.nth.call(null,vec__66,(1),null);
if((n === (0))){
return (0);
} else {
return Math.sqrt((((n * sumsq) - (sum * sum)) / (n * (n - (1)))));
}
});

//# sourceMappingURL=stats.js.map