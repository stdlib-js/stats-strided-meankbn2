"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=n(function(l,u){
var b=require('@stdlib/blas-ext-base-gsumkbn2/dist').ndarray;function d(e,r,a,c){return e<=0?NaN:b(e,r,a,c)/e}u.exports=d
});var i=n(function(O,s){
var f=require('@stdlib/strided-base-stride2offset/dist'),k=t();function m(e,r,a){return k(e,r,a,f(e,a))}s.exports=m
});var v=n(function(R,q){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=i(),p=t();y(o,"ndarray",p);q.exports=o
});var x=v();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
