'use strict';
window.addEventListener('DOMContentLoaded', function(){
	preloader.init({
		id: 'preloader',
		imgUrls: ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg'],
		onInit: function(){
			console.log('onInit');
		},
		onRemove: function(){
			console.log('onRemove');
		}
	});
}, false);