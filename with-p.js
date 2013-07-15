var __withMap= new WeakMap()
function with(n){
	var have= __withMap.get(n)
	if(have) return have
	var fn= new Function("val","if(!val) throw 'no val, no "+n+"'; var rv= val."+n+"; if(!rv) throw 'no "+n+"'; return rv")
	__withMap.set(n,fn)
	return fn
}
