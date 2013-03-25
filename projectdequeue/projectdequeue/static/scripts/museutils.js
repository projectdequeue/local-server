/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
if(typeof Muse=="undefined")window.Muse={};Muse.Assert={};Muse.Assert.fail=function(b){alert("MuseJSAssert: "+b)};$.extend($.browser,{SafariMobile:navigator.userAgent.toLowerCase().match(/iP(hone|ad)/i)});if(!Array.indexOf)Array.prototype.indexOf=function(b){for(var c=0;c<this.length;++c)if(this[c]==b)return c;return-1};Muse.Plugins={};Muse.Utils={};Muse.Utils.addLoadListener=function(b){$(document).ready(b)};
Muse.Utils.runLoadListeners=function(){if(Muse.Utils.loadListeners)for(var b=0;b<Muse.Utils.loadListeners.length;b++)try{Muse.Utils.loadListeners[b]()}catch(c){Muse.Assert.fail("LoadListener failed: "+c)}};Muse.Utils.selectorFns=[];Muse.Utils.addSelectorFn=function(b,c){Muse.Utils.selectorFns.push({selector:b,selFn:c})};
Muse.Utils.addLoadListener(function(){$(Muse.Utils.selectorFns).each(function(){var b=this.selFn,c;try{$(this.selector).each(function(){b(this)})}catch(a){Muse.Assert.fail("Error calling selector function:"+a)}})});
Muse.Utils.getCssVendorPrefix=function(){if(typeof Muse.Utils.getCssVendorPrefix.flag=="undefined")Muse.Utils.getCssVendorPrefix.flag=/webkit/i.test(navigator.appVersion)?"-webkit":/firefox/i.test(navigator.userAgent)?"-moz":/trident/i.test(navigator.userAgent)?"-ms":"opera"in window?"-o":"";return Muse.Utils.getCssVendorPrefix.flag};Muse.Utils.wrapElement=function(b,c){b.parentNode.replaceChild(c,b);c.appendChild(b)};
Muse.Utils.firstChild=function(b,c){for(var a=0;a<b.childNodes.length;a++){var d=b.childNodes[a];if(d.nodeType==1&&(!c||c.matches(d)))return d}return null};Muse.Utils.firstDescendant=function(b,c,a){for(var d=0;d<b.childNodes.length;d++){var f=b.childNodes[d];if(f.nodeType==1){if(!c||c.matches(f))return f;if(!a||!a.matches(f))if(f=Muse.Utils.firstDescendant(f,c,a))return f}}return null};
Muse.Utils.descendants=function(b,c,a,d){if(!d)d=[],d.forEach=function(a){for(var b=0;b<this.length;b++)if(a(this[b]))break},d.forEachTry=function(a){for(var b=0;b<this.length;b++)try{if(a(this[b]))break}catch(c){}};for(var f=0;f<b.childNodes.length;f++){var g=b.childNodes[f];g.nodeType==1&&((!c||c.matches(g))&&d.push(g),(!a||!a.matches(g))&&Muse.Utils.descendants(g,c,a,d))}return d};Muse.Utils.children=function(b,c){return Muse.Utils.descendants(b,c,Muse.Utils.Match.always)};Muse.Utils.Match={};
Muse.Utils.Match.ByClass=function(b){this.cl=b};Muse.Utils.Match.ByClass.prototype.matches=function(b){return $(b).hasClass(this.cl)};Muse.Utils.Match.ByNodeName=function(b){this.nm=b.toLowerCase()};Muse.Utils.Match.ByNodeName.prototype.matches=function(b){return this.nm==b.nodeName.toLowerCase()};Muse.Utils.Match.ByFixed=function(b){this.matchResult=b};Muse.Utils.Match.ByFixed.prototype.matches=function(){return this.matchResult};Muse.Utils.Match.byClass=function(b){return new Muse.Utils.Match.ByClass(b)};
Muse.Utils.Match.byNodeName=function(b){return new Muse.Utils.Match.ByNodeName(b)};Muse.Utils.Match.byFixed=function(b){return new Muse.Utils.Match.ByFixed(b)};Muse.Utils.Match.always=Muse.Utils.Match.byFixed(!0);Muse.Utils.Match.never=Muse.Utils.Match.byFixed(!1);Muse.Utils.moveChildren=function(b,c){for(;b.childNodes.length>0;)c.appendChild(b.childNodes[0])};Muse.Utils.copyChildren=function(b,c){for(var a=0;a<b.childNodes.length;a++)c.appendChild(b.childNodes[a].cloneNode(!0))};
Muse.Utils.copyChildrenBefore=function(b,c){for(var a=0;a<b.childNodes.length;a++)c.parentNode.insertBefore(b.childNodes[a].cloneNode(!0),c)};Muse.Utils.pixelRound=function(b){return Math.floor((b*100+0.5)/100)};Muse.Utils.getCurrentHTMLFileName=function(b){var c=document.location.href;c.charAt(c.length-1)=="/"?c="index":(c=c.substring(c.lastIndexOf("/")+1),c=c.indexOf("#")==0?"index":c.substring(0,c.lastIndexOf(".")));b&&(c+=".html");return c};
Muse.Utils.getPageStyleSheet=function(){for(var b=0;b<document.styleSheets.length;++b){var c=document.styleSheets[b],a=c.ownerNode?c.ownerNode:c.owningElement;if(a&&a.id=="pagesheet")return c}};Muse.Utils.getStyleSheetRuleById=function(b,c){var a=!1,d="#"+c.toLowerCase(),f=b.cssRules;if(!f)a=!0,f=b.rules;if(f)for(var g=0;g<f.length;++g){var h=f[g];if(a){if(h.selectorText.toLowerCase()==d)return h}else if(h.selectorText.toLowerCase().split(", ").indexOf(d)!=-1)return h}return null};
Muse.Utils.getRuleProperty=function(b,c){return b.style.getPropertyValue?b.style.getPropertyValue(c):b.style.getAttribute(c)};Muse.Utils.setRuleProperty=function(b,c,a){b.style.setProperty?b.style.setProperty(c,a,""):b.style.setAttribute(c,a,0)};Muse.Utils.removeRuleProperty=function(b,c){b.style.removeProperty?b.style.removeProperty(c):b.style.removeAttribute(c,0)};
Muse.Utils.cloneStyleSheetRule=function(b){if(typeof Muse.Utils.cloneStyleSheetRule.newNumber=="undefined")Muse.Utils.cloneStyleSheetRule.newNumber=1;var c=Muse.Utils.getPageStyleSheet(b),a=Muse.Utils.getStyleSheetRuleById(c,b),d="c"+Muse.Utils.cloneStyleSheetRule.newNumber++,f="#"+d;c.insertRule?c.insertRule(a.cssText.replace("#"+b,f),c.cssRules.length):c.addRule(f,a.style.cssText);return d};
Muse.Utils.toCamelCase=function(b){for(var c=Muse.Utils.toCamelCase.exp;c.test(b);b=b.replace(c,RegExp.$1.toUpperCase()));return b};Muse.Utils.toCamelCase.exp=/-([a-z])/;Muse.Utils.getStyleValue=function(b,c){var a=b.style[Muse.Utils.toCamelCase(c)];a||(document.defaultView?a=document.defaultView.getComputedStyle(b,"").getPropertyValue(c):b.currentStyle&&(a=b.currentStyle[Muse.Utils.toCamelCase(c)]));a&&a.match(/(\d+)px/)&&(a=parseInt(a.substring(0,a.length-2)));return a};
Muse.Utils.checkCSSFeature=function(b,c){var a=c||Muse.Utils.toCamelCase(b),d=document.createElement("div");if(a in d.style)return!0;for(var a=a.charAt(0).toUpperCase()+a.substr(1,a.length-1),f=0,g=Muse.Utils.checkCSSFeature.domPrefixes.length;f<g;f++)if(Muse.Utils.checkCSSFeature.domPrefixes[f]+a in d.style)return Muse.Utils.checkCSSFeature.domPrefixes[f];return!1};Muse.Utils.checkCSSFeature.domPrefixes="Webkit Moz O ms Khtml".split(" ");
Muse.Utils.urlParam=function(b,c){var a=RegExp("[\\?&]"+c+"=([^&#]*)").exec(b);return a?a[1]:null};
Muse.Utils.processHyperlink=function(b){var c=b.href,a=$(b).attr("target");if(!a||a=="_self"){var a=c.lastIndexOf("/"),d=c.lastIndexOf("#");if((b=$(b).attr("class").match(/anim_(\w+)/))&&d>a){var f=c.substring(d),c=b[1],b=(document.documentElement||document.body).scrollHeight-$(window).height(),a=(document.documentElement||document.body).scrollWidth-$(window).width(),g=Math.min(b,$(f).offset().top),h=Math.min(a,$(f).offset().left),b=function(){window.scrollTo(h,g);try{history.replaceState({})}catch(a){if(!jQuery.browser.msie||
jQuery.browser.version>7)window.location.hash=f}};try{history.pushState({},null,f)}catch(j){}if(window.scrollTo){var i=$(document).scrollLeft(),k=$(document).scrollTop(),m=i,l=k;$({scrollDistance:0}).animate({scrollDistance:1},{duration:1E3,easing:c,step:function(a){a!=0&&(l=a*(g-k),m=a*(h-i),window.scrollTo(i+m,k+l))},complete:b})}else $("html,body").animate({scrollTop:g,scrollLeft:h},1E3,c,b);return!1}}(c=Muse.Utils.urlParam(c,"devicelock"))&&Muse.Utils.createCookie("devicelock",c,0);return!0};
var actionStack=[];Muse.Utils.redirectCancelled=!1;Muse.Utils.redirectHyperlink=function(b){if(Muse.Utils.redirectCancelled)setTimeout(function(){Muse.Utils.redirectCancelled=!1},0);else if(actionStack=[],Muse.Utils.processHyperlink(b)){var c=$(b).attr("target");c||(c="_self");window.open(b.href,c)}};
Muse.Utils.redirectHyperlinkInNewTab=function(b,c){if(Muse.Utils.redirectCancelled)setTimeout(function(){Muse.Utils.redirectCancelled=!1},0);else{actionStack=[];thisWindow=window.self;var a=window.open(b);c?a.focus():thisWindow.focus()}};Muse.Utils.isMouseLeftClick=function(b){return b.which==1};Muse.Utils.isMouseMiddleClick=function(b){return b.which==2};Muse.Utils.isRedirectLinkKeyboardAction=function(b){return b.which==13};
Muse.Utils.addHyperlinkAnchor=function(b){b=$(b);b.bind("mousedown",function(b){(Muse.Utils.isMouseLeftClick(b)||Muse.Utils.isMouseMiddleClick(b))&&actionStack.push(this)});b.bind("mouseup keyup",function(b){if(Muse.Utils.isMouseLeftClick(b)&&actionStack.indexOf(this)!=-1)b.ctrlKey||b.metaKey?Muse.Utils.redirectHyperlinkInNewTab(this.href,b.shiftKey):Muse.Utils.redirectHyperlink(this);else if(Muse.Utils.isMouseMiddleClick(b)&&actionStack.indexOf(this)!=-1)if(jQuery.browser.webkit||!b.target.href&&
jQuery.browser.msie)Muse.Utils.redirectHyperlinkInNewTab(this.href,b.shiftKey);else return actionStack=[],!0;else Muse.Utils.isRedirectLinkKeyboardAction(b)&&Muse.Utils.redirectHyperlink(this);return!1});b.bind("click",function(){return!1})};
Muse.Utils.addHyperlinkBlock=function(b){var c=$(b.parentNode);c.bind("mousedown",function(a){(Muse.Utils.isMouseLeftClick(a)||Muse.Utils.isMouseMiddleClick(a))&&actionStack.push(this);return!1});c.bind("mouseup keyup",function(a){Muse.Utils.isMouseLeftClick(a)&&actionStack.indexOf(this)!=-1?a.ctrlKey||a.metaKey?Muse.Utils.redirectHyperlinkInNewTab(b.href,a.shiftKey):Muse.Utils.redirectHyperlink(b):Muse.Utils.isMouseMiddleClick(a)&&actionStack.indexOf(this)!=-1?Muse.Utils.redirectHyperlinkInNewTab(b.href,
a.shiftKey):Muse.Utils.isRedirectLinkKeyboardAction(a)&&Muse.Utils.redirectHyperlink(b);return!1});c.bind("click",function(){return!1})};
Muse.Utils.prepHyperlinks=function(){$("a.block").each(function(){var b=$(this.parentNode);Muse.Utils.addHyperlinkBlock(this);b.find("a.nonblock").each(function(){var b=$(this);if(b.data("registeredNonBlockLink")===!0)return!1;Muse.Utils.addHyperlinkAnchor(this);b.data("registeredNonBlockLink",!0)})});$("a.nonblock").each(function(){var b=$(this);b.data("registeredNonBlockLink")!==!0&&(b.parent('[class~="sbg"]').length>0?Muse.Utils.addHyperlinkAnchor(this):(b.attr("class").match(/anim_(\w+)/)||this.href.indexOf("devicelock=")!=
-1)&&$(this).bind("click",function(){return Muse.Utils.processHyperlink(this)}))})};
Muse.Utils.getNaturalWidth=function(b){var c=-1;b.naturalWidth!=null?c=b.naturalWidth:b.runtimeStyle?(b.runtimeStyle.width="auto",b.runtimeStyle.height="auto",b.runtimeStyle.borderWidth="0",b.runtimeStyle.padding="0",c=b.offsetWidth,b.runtimeStyle.width="",b.runtimeStyle.height="",b.runtimeStyle.borderWidth="",b.runtimeStyle.padding=""):(b=b.cloneNode(!0),b.className="",b.style.width="auto !important",b.style.height="auto !important",b.style.borderWidth="0 !important",b.style.padding="0 !important",
c=b.width);return c};
Muse.Utils.getNaturalHeight=function(b){var c=-1;b.naturalHeight!=null?c=b.naturalHeight:b.runtimeStyle?(b.runtimeStyle.width="auto",b.runtimeStyle.height="auto",b.runtimeStyle.borderWidth="0",b.runtimeStyle.padding="0",c=b.offsetHeight,b.runtimeStyle.width="",b.runtimeStyle.height="",b.runtimeStyle.borderWidth="",b.runtimeStyle.padding=""):(b=b.cloneNode(!0),b.className="",b.style.width="auto !important",b.style.height="auto !important",b.style.borderWidth="0 !important",b.style.padding="0 !important",
c=b.height);return c};Muse.Utils.needPIE=function(b){if(Muse.Utils.havePIE)b();else{var c="scripts/pie.js";c[0]=="/"&&(c=location.pathname.indexOf(".html")!=-1?location.pathname.substring(0,location.pathname.lastIndexOf("/"))+c:location.pathname+c,c=c.replace(/\/+/g,"/"));$.ajax({url:c,dataType:"script",complete:function(){if(typeof PIE!="undefined")Muse.Utils.havePIE=!0,b()}})}};
Muse.Utils.transformMarkupToFixBrowserProblemsPreInit=function(){jQuery.browser.msie?(jQuery("html").addClass("ie"),jQuery.browser.version<8&&Muse.Utils.changeLItoDIVs()):jQuery.browser.SafariMobile&&jQuery("body").css("-webkit-text-size-adjust","none")};
Muse.Utils.transformMarkupToFixBrowserProblems=function(){Muse.Utils.havePIE=!1;jQuery.browser.msie&&(jQuery.browser.version<=9&&(Muse.Utils.addGradientFill(),Muse.Utils.addShadows()),jQuery.browser.version<9&&(Muse.Utils.applyIEFilterToPNGImages(),Muse.Utils.addRoundedCorners(),Muse.Utils.addRGBA(),Muse.Utils.removeEdgeAnimationBorderForIE78()),jQuery.browser.version<8&&Muse.Utils.fixWidthsForClearingInIE7());(jQuery.browser.msie&&jQuery.browser.version<9||jQuery.browser.webkit)&&Muse.Utils.insertEmptyDivAfterPinnedColumnElements()};
Muse.Utils.applyIEFilterToPNGImages=function(){jQuery.browser.msie&&jQuery.browser.version<9&&$("body *").not(".museBgSizePolyfill img").each(function(){var b=$(this);if(b.css("background-image").match(/\b.png/i)||this.nodeName&&this.nodeName.toLowerCase()=="img"&&b.attr("src").match(/\b.png/i)){var c=b.css("filter");b.css("filter",c?c+" progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)":"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)")}})};
Muse.Utils.insertEmptyDivAfterPinnedColumnElements=function(){$(".pinned-colelem").each(function(){$("<div class='colelem'/>").insertAfter($(this))})};Muse.Utils.fixPNGImages=function(){$("body *").each(function(){var b=this,c=$(b);(c.css("background-image").match(/\b.png/i)||b.nodeName&&b.nodeName.toLowerCase()=="img"&&c.attr("src").match(/\b.png/i))&&Muse.Utils.needPIE(function(){c.css("-pie-png-fix","true");PIE.attach(b)})})};
Muse.Utils.addGradientFill=function(){$(".gradient").each(function(){var b=this;Muse.Utils.needPIE(function(){PIE.attach(b)})})};Muse.Utils.addShadows=function(){$(".shadow").each(function(){var b=this;Muse.Utils.needPIE(function(){PIE.attach(b)})})};
Muse.Utils.addRoundedCorners=function(){$(".rounded-corners").each(function(){var b=this;Muse.Utils.needPIE(function(){var c=$(b);if(jQuery.browser.msie&&jQuery.browser.version<8&&(c.css("border-left-width")==0||c.css("border-left-style")=="none")&&(c.css("border-right-width")==0||c.css("border-right-style")=="none")&&(c.css("border-top-width")==0||c.css("border-top-style")=="none")&&(c.css("border-bottom-width")==0||c.css("border-bottom-style")=="none"))c.css({"border-right-width":"1px","border-right-style":"solid",
"border-right-color":c.css("background-color")}),c.width(c.width()-1);PIE.attach(b)})})};Muse.Utils.addRGBA=function(){$(".rgba-background").each(function(){var b=this;Muse.Utils.needPIE(function(){PIE.attach(b)})})};Muse.Utils.fixWidthsForClearingInIE7=function(){$(".colelem").each(function(){var b=$(this).offset().left-$(this).parent().offset().left;if($(this).width()<1||$(this).width()+b<1)$(this).css("width",(b<0?1-b:1)+"px")})};
Muse.Utils.removeEdgeAnimationBorderForIE78=function(){$(".animationContainer").each(function(){$(this).parent().html(function(b,c){return c.replace(/><\/iframe>$/gi,' frameBorder="0"></iframe>')})})};Muse.Utils.fixAnimationsMarkup=function(){$(".animationContainer").each(function(){var b=$(this);b.load(function(){var c=b.contents();$("#report-abuse",c).remove();$("#report-abuse-spacer",c).remove()})})};
Muse.Utils.fullPage=function(b){var c=$(b+" .verticalspacer"),a=$(b),d=$(window),f=$("body"),g=c.height();f.bind("wp-page-height-change",function(a,b){p(b)});var h=Muse.Utils.getCSSIntValue(f,"padding-top")+Muse.Utils.getCSSIntValue(f,"margin-top"),j=Muse.Utils.getCSSIntValue(f,"padding-bottom")+Muse.Utils.getCSSIntValue(f,"margin-bottom"),i=0,k=!0,m=f.hasClass("always_vert_scroll"),l=0!=Muse.Utils.getCSSIntValue(c,"margin-bottom"),n=function(a){var a=i<a,b=!1;m||(a&&!f.hasClass("no_vert_scroll")?
(f.addClass("no_vert_scroll"),b=!0):!a&&f.hasClass("no_vert_scroll")&&(f.removeClass("no_vert_scroll"),b=!0));b&&c.css("height")},o=function(b){parseInt(b)||(b=0);l&&c.css("margin-bottom",-(c.offset().top-h));var f=a.outerHeight(!0),m=f-g,b=Math.max(i,d.height()-h-j-m-b);b!=g&&(k=!1,n(b),c.css("height",b),b<g&&f==a.outerHeight(!0)&&(b=g,n(b),c.css("height",b)),k=!0);return g=b},p=function(a){k&&o(a)};Muse.Browser.Bugs.CannotHandleZeroHeightDivs&&(i=1);Muse.Browser.Bugs.CannotHandleClearBoth&&0!=Muse.Utils.getCSSIntValue(c,
"margin-bottom")&&(c.css("margin-bottom",0),l=!1);(function(){for(var a=0,b=0;b++<20;){var c=o();if(c<=a)break;a=c}})();a.watch("height",p);d.resize(o)};Muse.Utils.getCSSIntValue=function(b,c){var a=parseInt(b.css(c));isNaN(a)&&(a=0);return a};Muse.Utils.changeLItoDIVs=function(){var b=function(){var b=$(this),a=$("<div/>");a.addClass(b.attr("class"));a.attr("id",b.attr("id"));a.append(b.contents());b.replaceWith(a)};$("ul").each(function(){$(this).find("li").each(b)});$("ul").each(b)};
Muse.Utils.showWidgetsWhenReady=function(){jQuery(".disn").removeClass("disn");jQuery(".invi").removeClass("invi");jQuery(".widget_invisible").removeClass("widget_invisible")};
Muse.Utils.detachIframesAndObjectsToPauseMedia=function(b){var c=[];$("iframe, object",b).each(function(){var a=$(this);if(!a.is("object")||!(jQuery.browser.msie&&jQuery.browser.version<9)){var b={};b.$next=a.next();b.$parent=a.parent();jQuery.browser.msie?(b.html=a.wrap("<div id='deleteMeWrapper'/>").parent().html(),a.remove(),b.$parent.children("div #deleteMeWrapper").remove()):b.$node=a.detach();c.push(b)}});c.length&&b.data("detached",c);$("video",b).each(function(){if(jQuery.browser.msie&&jQuery.browser.version==
9&&this.pause&&this.getAttribute("autoplay")&&this.readyState!=4)$(this).one("play",function(){this.pause()});else this.pause&&!this.paused&&this.pause()})};
Muse.Utils.attachIframesAndObjectsToResumeMedia=function(b){var c=b.data("detached");if(c){for(var a=c.length-1;a>=0;a--){var d=c[a];!d.$next||d.$next.length==0?d.$parent.append(d.$node?d.$node:d.html):d.$next.before(d.$node?d.$node:d.html);d.$next=d.$parent=d.$node=d.html=void 0}b.data("detached",null)}$("video",b).each(function(){if(this.play&&this.getAttribute("autoplay")&&this.paused)this.currentTime=0,this.play()})};
Muse.Utils.createCookie=function(b,c,a){if(a){var d=new Date;d.setTime(d.getTime()+a*864E5);a="; expires="+d.toGMTString()}else a="";document.cookie=b+"="+c+a+"; path=/"};Muse.Utils.readCookie=function(b){b+="=";for(var c=document.cookie.split(";"),a=0;a<c.length;a++){for(var d=c[a];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(b)==0)return d.substring(b.length,d.length)}return null};Muse.Utils.eraseCookie=function(b){createCookie(b,"",-1)};Muse.Browser={};
Muse.Browser.domPrefixes=["Webkit","Moz","O","ms","Khtml"];Muse.Browser.Features={};
Muse.Browser.Features.Touch=function(){if(navigator.maxTouchPoints>0)return{Start:"pointerDown",End:"pointerUp",Move:"pointerMove",Listener:function(a){return function(b){var c=b.originalEvent||b;if(c.pointerType!=c.POINTER_TYPE_MOUSE)return a.apply(this,arguments)}}};else for(var b=0,c=Muse.Browser.domPrefixes.length;b<c;b++){var a=Muse.Browser.domPrefixes[b];if(a+"MaxTouchPoints"in navigator&&navigator[a+"MaxTouchPoints"])return a=a.toUpperCase(),{Start:a+"PointerDown",End:a+"PointerUp",Move:a+
"PointerMove",Listener:function(b){return function(c){var d=c.originalEvent||c;if(d.pointerType!=d[a+"POINTER_TYPE_MOUSE"])return b.apply(this,arguments)}}}}try{return document.createEvent("TouchEvent"),{Start:"touchstart",End:"touchend",Move:"touchmove",Listener:function(a){return a}}}catch(d){}return!1}();
Muse.Browser.Features.checkCSSFeature=function(b,c){var a=Muse.Utils.toCamelCase(b),c=c||document.createElement("div");if(a in c.style)return!0;for(var a=a.charAt(0).toUpperCase()+a.substr(1,a.length-1),d=0,f=Muse.Browser.domPrefixes.length;d<f;d++)if(Muse.Browser.domPrefixes[d]+a in c.style)return Muse.Browser.domPrefixes[d];return!1};
Muse.Browser.Features.checkCSSValueCompatibility=function(b,c){var a=document.createElement("div"),b=Muse.Utils.toCamelCase(b),d=Muse.Browser.Features.checkCSSFeature(b);if(d)d!==!0&&(b=d+b.charAt(0).toUpperCase()+b.substr(1,b.length-1));else return!1;d=a.style[b];a.style[b]=c;if(a.style[b]!==d||c===d)return!0;for(var f=0;f<Muse.Browser.domPrefixes.length;f++){var g="-"+Muse.Browser.domPrefixes[f].toLowerCase()+"-"+c;a.style[b]=g;if(a.style[b]!==d)return Muse.Browser.domPrefixes[f]}return!1};
Muse.Browser.Bugs={};
Muse.Browser.Bugs.ClearNeedsOuterWidth=function(){var b=document.createElement("div");b.id="mbbcnow00";b.innerHTML='<div>a</div><style type="text/css">#mbbcnow00{position:absolute;top:-9999px;left:-9999px;visibility:hidden;} #mbbcnow01{width:1px;margin-right:-9999px;float:left} #mbbcnow02{clear:left;}</style>';var c=document.createElement("div"),a=document.createElement("div");document.body.appendChild(b);b.appendChild(c);b.appendChild(a);c.innerHTML="a";c.id="mbbcnow01";a.innerHTML="b";a.id="mbbcnow02";
c=a.getBoundingClientRect().top-c.getBoundingClientRect().top;document.body.removeChild(b);return c<1}();Muse.Browser.Bugs.CannotHandleZeroHeightDivs=function(){return jQuery.browser.msie&&8==jQuery.browser.version}();Muse.Browser.Bugs.CannotHandleClearBoth=function(){return jQuery.browser.msie&&7==jQuery.browser.version}();
Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder=function(){var b=!1,c=$("<div>").css({border:"1px solid #000000;",width:100,height:100,position:"absolute",top:-99999,left:-99999,padding:0,margin:0,overflow:"auto"}).appendTo(document.body)[0];c.scrollHeight!==c.clientHeight&&(b=!0);$(c).remove();return b}();
