/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{328:function(t,e,n){(function(e){var n;t.exports=function t(e,o,r){function s(l,u){if(!o[l]){if(!e[l]){if(!u&&"function"==typeof n&&n)return n(l,!0);if(i)return i(l,!0);var h=new Error("Cannot find module '"+l+"'");throw h.code="MODULE_NOT_FOUND",h}var c=o[l]={exports:{}};e[l][0].call(c.exports,(function(t){var n=e[l][1][t];return s(n||t)}),c,c.exports,t,e,o,r)}return o[l].exports}for(var i="function"==typeof n&&n,l=0;l<r.length;l++)s(r[l]);return s}({1:[function(t,e,n){"use strict";var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function h(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,source){for(var e,n,c=h(t),s=1;s<arguments.length;s++){for(var d in e=Object(arguments[s]))r.call(e,d)&&(c[d]=e[d]);if(o){n=o(e);for(var i=0;i<n.length;i++)l.call(e,n[i])&&(c[n[i]]=e[n[i]])}}return c}},{}],2:[function(t,e,n){(function(t){(function(){var n,o,r,l,h,c;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-h)/1e6},o=t.hrtime,l=(n=function(){var hr;return 1e9*(hr=o())[0]+hr[1]})(),c=1e9*t.uptime(),h=l-c):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,n){var o,r,l=e.exports={};function h(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function d(t){if(o===setTimeout)return setTimeout(t,0);if((o===h||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:h}catch(t){o=h}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var m,f=[],v=!1,w=-1;function y(){v&&m&&(v=!1,m.length?f=m.concat(f):w=-1,f.length&&Y())}function Y(){if(!v){var t=d(y);v=!0;for(var e=f.length;e;){for(m=f,f=[];++w<e;)m&&m[w].run();w=-1,e=f.length}m=null,v=!1,function(marker){if(r===clearTimeout)return clearTimeout(marker);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(marker);try{r(marker)}catch(t){try{return r.call(null,marker)}catch(t){return r.call(this,marker)}}}(t)}}function X(t,e){this.fun=t,this.array=e}function k(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new X(t,e)),1!==f.length||v||d(Y)},X.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=k,l.addListener=k,l.once=k,l.off=k,l.removeListener=k,l.removeAllListeners=k,l.emit=k,l.prependListener=k,l.prependOnceListener=k,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},{}],4:[function(t,n,o){(function(e){for(var o=t("performance-now"),r="undefined"==typeof window?e:window,l=["moz","webkit"],h="AnimationFrame",c=r["request"+h],d=r["cancel"+h]||r["cancelRequest"+h],i=0;!c&&i<l.length;i++)c=r[l[i]+"Request"+h],d=r[l[i]+"Cancel"+h]||r[l[i]+"CancelRequest"+h];if(!c||!d){var m=0,f=0,v=[];c=function(t){if(0===v.length){var e=o(),n=Math.max(0,1e3/60-(e-m));m=n+e,setTimeout((function(){var t=v.slice(0);v.length=0;for(var i=0;i<t.length;i++)if(!t[i].cancelled)try{t[i].callback(m)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return v.push({handle:++f,callback:t,cancelled:!1}),f},d=function(t){for(var i=0;i<v.length;i++)v[i].handle===t&&(v[i].cancelled=!0)}}n.exports=function(t){return c.call(r,t)},n.exports.cancel=function(){d.apply(r,arguments)},n.exports.polyfill=function(){r.requestAnimationFrame=c,r.cancelAnimationFrame=d}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,n){"use strict";var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=t("raf"),l=t("object-assign"),h={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,n){return e<n?t<e?e:t>n?n:t:t<n?n:t>e?e:t},data:function(element,t){return h.deserialize(element.getAttribute("data-"+t))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))},accelerate:function(element){h.css(element,"transform","translate3d(0,0,0) rotate(0.0001deg)"),h.css(element,"transform-style","preserve-3d"),h.css(element,"backface-visibility","hidden")},transformSupport:function(t){for(var element=document.createElement("div"),e=!1,n=null,o=!1,r=null,l=null,i=0,c=h.vendors.length;i<c;i++)if(null!==h.vendors[i]?(r=h.vendors[i][0]+"transform",l=h.vendors[i][1]+"Transform"):(r="transform",l="transform"),void 0!==element.style[l]){e=!0;break}switch(t){case"2D":o=e;break;case"3D":if(e){var body=document.body||document.createElement("body"),d=document.documentElement,m=d.style.overflow,f=!1;document.body||(f=!0,d.style.overflow="hidden",d.appendChild(body),body.style.overflow="hidden",body.style.background=""),body.appendChild(element),element.style[l]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(element).getPropertyValue(r))&&n.length>0&&"none"!==n,d.style.overflow=m,body.removeChild(element),f&&(body.removeAttribute("style"),body.parentNode.removeChild(body))}}return o},css:function(element,t,e){var n=h.propertyCache[t];if(!n)for(var i=0,o=h.vendors.length;i<o;i++)if(n=null!==h.vendors[i]?h.camelCase(h.vendors[i][1]+"-"+t):t,void 0!==element.style[n]){h.propertyCache[t]=n;break}element.style[n]=e}},c={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},d=function(){function t(element,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=element;var data={calibrateX:h.data(this.element,"calibrate-x"),calibrateY:h.data(this.element,"calibrate-y"),invertX:h.data(this.element,"invert-x"),invertY:h.data(this.element,"invert-y"),limitX:h.data(this.element,"limit-x"),limitY:h.data(this.element,"limit-y"),scalarX:h.data(this.element,"scalar-x"),scalarY:h.data(this.element,"scalar-y"),frictionX:h.data(this.element,"friction-x"),frictionY:h.data(this.element,"friction-y"),originX:h.data(this.element,"origin-x"),originY:h.data(this.element,"origin-y"),pointerEvents:h.data(this.element,"pointer-events"),precision:h.data(this.element,"precision"),relativeInput:h.data(this.element,"relative-input"),clipRelativeInput:h.data(this.element,"clip-relative-input"),hoverOnly:h.data(this.element,"hover-only"),inputElement:document.querySelector(h.data(this.element,"input-element")),selector:h.data(this.element,"selector")};for(var n in data)null===data[n]&&delete data[n];l(this,c,data,e),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=h.transformSupport("2D"),this.transform3DSupport=h.transformSupport("3D")),this.transform3DSupport&&h.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&h.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var n=h.data(e,"depth")||0;this.depthsX.push(h.data(e,"depth-x")||n),this.depthsY.push(h.data(e,"depth-y")||n)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=r(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),r.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(element){this.inputElement=element,this.updateDimensions()}},{key:"setPosition",value:function(element,t,e){t=t.toFixed(this.precision)+"px",e=e.toFixed(this.precision)+"px",this.transform3DSupport?h.css(element,"transform","translate3d("+t+","+e+",0)"):this.transform2DSupport?h.css(element,"transform","translate("+t+","+e+")"):(element.style.left=t,element.style.top=e)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=h.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=h.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var n=0;n<this.layers.length;n++){var o=this.layers[n],l=this.depthsX[n],c=this.depthsY[n],d=this.velocityX*(l*(this.invertX?-1:1)),m=this.velocityY*(c*(this.invertY?-1:1));this.setPosition(o,d,m)}this.raf=r(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var n=(t||0)/30,o=(e||0)/30,r=this.windowHeight>this.windowWidth;this.portrait!==r&&(this.portrait=r,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=n,this.calibrationY=o),this.inputX=n,this.inputY=o}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,n=t.gamma;null!==e&&null!==n&&(this.orientationStatus=1,this.rotate(e,n))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,n=t.rotationRate.gamma;null!==e&&null!==n&&(this.motionStatus=1,this.rotate(e,n))}},{key:"onMouseMove",value:function(t){var e=t.clientX,n=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||n<this.elementPositionY||n>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),n=Math.max(n,this.elementPositionY),n=Math.min(n,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(n-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(n-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=d},{"object-assign":1,raf:4}]},{},[5])(5)}).call(this,n(30))}}]);