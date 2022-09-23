
// version: 1

// ザガタ。六 /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function zAx(za,a,n) {
	/* Zagata.Ajax */

	this.za = (typeof(za)=='undefined')?false:za; // core
	var a = (typeof(a)=='undefined')?false:a; // attr
	this.n = (typeof(n)=='undefined')?'zAx':n; // name
	
	
	///////////////////////////////
	// funcs
	this.abrt = function() { 
		this.ax.abort(); this.updtng = false; return this;
	};
	this.upd = function(dt,mthd) {
		this.ax.onreadystatechange = this.rsch;
		this.updtng = new Date();
		
		var url = this.url+((this.url.indexOf('?')==-1)?'?':'&');
		if(/post/i.test(mthd)) {
			url+='timestamp='+(this.updtng.getTime());
			this.ax.open("POST", url, true);
			this.ax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			this.ax.send(dt);
		} else {
			url+=((typeof(dt)!='undefined')?dt+'&':'')+'timestamp='+(this.updtng.getTime());
			this.ax.open("GET", url, true);
			this.ax.send(null);
		}
		url=null;
	return this;
	};
	this.rsch = function() {
		this.parent.za.ee( this.parent.n+'_con' ); // ????
		if(this.readyState==4) {
			this.parent.upding = false; 
			if(this.parent.fn) {
				this.parent.fn(this.parent.ax.responseText,this.status,this.responseXML);
			} else {
				console.log(this.parent.ax.responseText);
			}
		} else {}
	};
	
	///////////////////////////////
	// ini
	// this.za.msg('dbg','zAx','i am '+this.n+'(zAx)');
	// console.log('i am '+this.n);
	this.ax = new XMLHttpRequest();
	this.ax.parent = this;
	this.updtng = false;
	// from var a
	this.url = false;
	this.fn = false;
	
};

////////////////////////////////////////////////////////////////
if(typeof(zlo)=='object') {
	zlo.da('zAx');
} else {
	console.log('zAx');
}
