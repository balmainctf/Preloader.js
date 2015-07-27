;(function(exports, undefined){
	'use strict';
	var document = exports.document;
    var preloader = {
        id: '',
        imgUrls: [],
        onInit: null,
        onRemove: null
    }
    exports.preloader = preloader;
    preloader.init = function(args){
        for(var p in args){
            this[p] = args[p];
        }
        this.preload.call(this, this.imgUrls);
        if(this.onInit && typeof this.onInit === 'function'){
            this.onInit();
        }
    }
    preloader.remove = function(){
        var pre = document.querySelector('#' + this.id);
        document.body.removeChild(pre);
        if(this.onRemove && typeof this.onRemove === 'function'){
            this.onRemove();
        }
    }
    preloader.preload = function(imgUrls){
        var _this = this,
        	cnt = 0,
        	imgs = {};
        imgUrls.forEach(function(item, index){
        	imgs[index] = new Image()
        	imgs[index].onload = function(){
        		if(++cnt === imgUrls.length){
        			_this.remove.call(_this);
        		}
        	}
        	imgs[index].src = item;
        });
    }
})(window);