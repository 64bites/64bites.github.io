/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/
var Base=function(){};Base.extend=function(e,a){"use strict";var t=Base.prototype.extend;Base._prototyping=!0;var n=new this;t.call(n,e),n.base=function(){},delete Base._prototyping;var i=n.constructor,r=n.constructor=function(){if(!Base._prototyping)if(this._constructing||this.constructor==r)this._constructing=!0,i.apply(this,arguments),delete this._constructing;else if(null!==arguments[0])return(arguments[0].extend||t).call(arguments[0],n)};return r.ancestor=this,r.extend=this.extend,r.forEach=this.forEach,r.implement=this.implement,r.prototype=n,r.toString=this.toString,r.valueOf=function(e){return"object"==e?r:i.valueOf()},t.call(r,a),"function"==typeof r.init&&r.init(),r},Base.prototype={extend:function(e,a){if(arguments.length>1){var t=this[e];if(t&&"function"==typeof a&&(!t.valueOf||t.valueOf()!=a.valueOf())&&/\bbase\b/.test(a)){var n=a.valueOf();a=function(){var e=this.base||Base.prototype.base;this.base=t;var a=n.apply(this,arguments);return this.base=e,a},a.valueOf=function(e){return"object"==e?a:n},a.toString=Base.toString}this[e]=a}else if(e){var i=Base.prototype.extend;Base._prototyping||"function"==typeof this||(i=this.extend||i);for(var r={toSource:null},s=["constructor","toString","valueOf"],o=Base._prototyping?0:1;d=s[o++];)e[d]!=r[d]&&i.call(this,d,e[d]);for(var d in e)r[d]||i.call(this,d,e[d])}return this}},Base=Base.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(e,a,t){for(var n in e)void 0===this.prototype[n]&&a.call(t,e[n],n,e)},implement:function(){for(var e=0;e<arguments.length;e++)"function"==typeof arguments[e]?arguments[e](this.prototype):this.prototype.extend(arguments[e]);return this},toString:function(){return String(this.valueOf())}});var FlipClock;/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
!function(e){"use strict";FlipClock=function(e,a,t){return a instanceof Object&&a instanceof Date==!1&&(t=a,a=0),new FlipClock.Factory(e,a,t)},FlipClock.Lang={},FlipClock.Base=Base.extend({buildDate:"2014-12-12",version:"0.7.7",constructor:function(a,t){"object"!=typeof a&&(a={}),"object"!=typeof t&&(t={}),this.setOptions(e.extend(!0,{},a,t))},callback:function(e){if("function"==typeof e){for(var a=[],t=1;t<=arguments.length;t++)arguments[t]&&a.push(arguments[t]);e.apply(this,a)}},log:function(e){window.console&&console.log&&console.log(e)},getOption:function(e){return this[e]?this[e]:!1},getOptions:function(){return this},setOption:function(e,a){this[e]=a},setOptions:function(e){for(var a in e)"undefined"!=typeof e[a]&&this.setOption(a,e[a])}})}(jQuery),/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(e){"use strict";FlipClock.Face=FlipClock.Base.extend({autoStart:!0,dividers:[],factory:!1,lists:[],constructor:function(e,a){this.dividers=[],this.lists=[],this.base(a),this.factory=e},build:function(){this.autoStart&&this.start()},createDivider:function(a,t,n){"boolean"!=typeof t&&t||(n=t,t=a);var i=['<span class="'+this.factory.classes.dot+' top"></span>','<span class="'+this.factory.classes.dot+' bottom"></span>'].join("");n&&(i=""),a=this.factory.localize(a);var r=['<span class="'+this.factory.classes.divider+" "+(t?t:"").toLowerCase()+'">','<span class="'+this.factory.classes.label+'">'+(a?a:"")+"</span>",i,"</span>"],s=e(r.join(""));return this.dividers.push(s),s},createList:function(e,a){"object"==typeof e&&(a=e,e=0);var t=new FlipClock.List(this.factory,e,a);return this.lists.push(t),t},reset:function(){this.factory.time=new FlipClock.Time(this.factory,this.factory.original?Math.round(this.factory.original):0,{minimumDigits:this.factory.minimumDigits}),this.flip(this.factory.original,!1)},appendDigitToClock:function(e){e.$el.append(!1)},addDigit:function(e){var a=this.createList(e,{classes:{active:this.factory.classes.active,before:this.factory.classes.before,flip:this.factory.classes.flip}});this.appendDigitToClock(a)},start:function(){},stop:function(){},autoIncrement:function(){this.factory.countdown?this.decrement():this.increment()},increment:function(){this.factory.time.addSecond()},decrement:function(){0==this.factory.time.getTimeSeconds()?this.factory.stop():this.factory.time.subSecond()},flip:function(a,t){var n=this;e.each(a,function(e,a){var i=n.lists[e];i?(t||a==i.digit||i.play(),i.select(a)):n.addDigit(a)})}})}(jQuery),/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(e){"use strict";FlipClock.Factory=FlipClock.Base.extend({animationRate:1e3,autoStart:!0,callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},classes:{active:"flip-clock-active",before:"flip-clock-before",divider:"flip-clock-divider",dot:"flip-clock-dot",label:"flip-clock-label",flip:"flip",play:"play",wrapper:"flip-clock-wrapper"},clockFace:"HourlyCounter",countdown:!1,defaultClockFace:"HourlyCounter",defaultLanguage:"english",$el:!1,face:!0,lang:!1,language:"english",minimumDigits:0,original:!1,running:!1,time:!1,timer:!1,$wrapper:!1,constructor:function(a,t,n){n||(n={}),this.lists=[],this.running=!1,this.base(n),this.$el=e(a).addClass(this.classes.wrapper),this.$wrapper=this.$el,this.original=t instanceof Date?t:t?Math.round(t):0,this.time=new FlipClock.Time(this,this.original,{minimumDigits:this.minimumDigits,animationRate:this.animationRate}),this.timer=new FlipClock.Timer(this,n),this.loadLanguage(this.language),this.loadClockFace(this.clockFace,n),this.autoStart&&this.start()},loadClockFace:function(e,a){var t,n="Face",i=!1;return e=e.ucfirst()+n,this.face.stop&&(this.stop(),i=!0),this.$el.html(""),this.time.minimumDigits=this.minimumDigits,t=FlipClock[e]?new FlipClock[e](this,a):new FlipClock[this.defaultClockFace+n](this,a),t.build(),this.face=t,i&&this.start(),this.face},loadLanguage:function(e){var a;return a=FlipClock.Lang[e.ucfirst()]?FlipClock.Lang[e.ucfirst()]:FlipClock.Lang[e]?FlipClock.Lang[e]:FlipClock.Lang[this.defaultLanguage],this.lang=a},localize:function(e,a){var t=this.lang;if(!e)return null;var n=e.toLowerCase();return"object"==typeof a&&(t=a),t&&t[n]?t[n]:e},start:function(e){var a=this;a.running||a.countdown&&!(a.countdown&&a.time.time>0)?a.log("Trying to start timer when countdown already at 0"):(a.face.start(a.time),a.timer.start(function(){a.flip(),"function"==typeof e&&e()}))},stop:function(e){this.face.stop(),this.timer.stop(e);for(var a in this.lists)this.lists.hasOwnProperty(a)&&this.lists[a].stop()},reset:function(e){this.timer.reset(e),this.face.reset()},setTime:function(e){this.time.time=e,this.flip(!0)},getTime:function(){return this.time},setCountdown:function(e){var a=this.running;this.countdown=e?!0:!1,a&&(this.stop(),this.start())},flip:function(e){this.face.flip(!1,e)}})}(jQuery),/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(e){"use strict";FlipClock.List=FlipClock.Base.extend({digit:0,classes:{active:"flip-clock-active",before:"flip-clock-before",flip:"flip"},factory:!1,$el:!1,$obj:!1,items:[],lastDigit:0,constructor:function(e,a){this.factory=e,this.digit=a,this.lastDigit=a,this.$el=this.createList(),this.$obj=this.$el,a>0&&this.select(a),this.factory.$el.append(this.$el)},select:function(e){if("undefined"==typeof e?e=this.digit:this.digit=e,this.digit!=this.lastDigit){var a=this.$el.find("."+this.classes.before).removeClass(this.classes.before);this.$el.find("."+this.classes.active).removeClass(this.classes.active).addClass(this.classes.before),this.appendListItem(this.classes.active,this.digit),a.remove(),this.lastDigit=this.digit}},play:function(){this.$el.addClass(this.factory.classes.play)},stop:function(){var e=this;setTimeout(function(){e.$el.removeClass(e.factory.classes.play)},this.factory.timer.interval)},createListItem:function(e,a){return['<li class="'+(e?e:"")+'">','<a href="#">','<div class="up">','<div class="shadow"></div>','<div class="inn">'+(a?a:"")+"</div>","</div>",'<div class="down">','<div class="shadow"></div>','<div class="inn">'+(a?a:"")+"</div>","</div>","</a>","</li>"].join("")},appendListItem:function(e,a){var t=this.createListItem(e,a);this.$el.append(t)},createList:function(){var a=this.getPrevDigit()?this.getPrevDigit():this.digit,t=e(['<ul class="'+this.classes.flip+" "+(this.factory.running?this.factory.classes.play:"")+'">',this.createListItem(this.classes.before,a),this.createListItem(this.classes.active,this.digit),"</ul>"].join(""));return t},getNextDigit:function(){return 9==this.digit?0:this.digit+1},getPrevDigit:function(){return 0==this.digit?9:this.digit-1}})}(jQuery),/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(e){"use strict";String.prototype.ucfirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1)},e.fn.FlipClock=function(a,t){return new FlipClock(e(this),a,t)},e.fn.flipClock=function(a,t){return e.fn.FlipClock(a,t)}}(jQuery),/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(e){"use strict";FlipClock.Time=FlipClock.Base.extend({time:0,factory:!1,minimumDigits:0,constructor:function(e,a,t){"object"!=typeof t&&(t={}),t.minimumDigits||(t.minimumDigits=e.minimumDigits),this.base(t),this.factory=e,a&&(this.time=a)},convertDigitsToArray:function(e){var a=[];e=e.toString();for(var t=0;t<e.length;t++)e[t].match(/^\d*$/g)&&a.push(e[t]);return a},digit:function(e){var a=this.toString(),t=a.length;return a[t-e]?a[t-e]:!1},digitize:function(a){var t=[];if(e.each(a,function(e,a){a=a.toString(),1==a.length&&(a="0"+a);for(var n=0;n<a.length;n++)t.push(a.charAt(n))}),t.length>this.minimumDigits&&(this.minimumDigits=t.length),this.minimumDigits>t.length)for(var n=t.length;n<this.minimumDigits;n++)t.unshift("0");return t},getDateObject:function(){return this.time instanceof Date?this.time:new Date((new Date).getTime()+1e3*this.getTimeSeconds())},getDayCounter:function(e){var a=[this.getDays(),this.getHours(!0),this.getMinutes(!0)];return e&&a.push(this.getSeconds(!0)),this.digitize(a)},getDays:function(e){var a=this.getTimeSeconds()/60/60/24;return e&&(a%=7),Math.floor(a)},getHourCounter:function(){var e=this.digitize([this.getHours(),this.getMinutes(!0),this.getSeconds(!0)]);return e},getHourly:function(){return this.getHourCounter()},getHours:function(e){var a=this.getTimeSeconds()/60/60;return e&&(a%=24),Math.floor(a)},getMilitaryTime:function(e,a){"undefined"==typeof a&&(a=!0),e||(e=this.getDateObject());var t=[e.getHours(),e.getMinutes()];return a===!0&&t.push(e.getSeconds()),this.digitize(t)},getMinutes:function(e){var a=this.getTimeSeconds()/60;return e&&(a%=60),Math.floor(a)},getMinuteCounter:function(){var e=this.digitize([this.getMinutes(),this.getSeconds(!0)]);return e},getTimeSeconds:function(e){return e||(e=new Date),this.time instanceof Date?this.factory.countdown?Math.max(this.time.getTime()/1e3-e.getTime()/1e3,0):e.getTime()/1e3-this.time.getTime()/1e3:this.time},getTime:function(e,a){"undefined"==typeof a&&(a=!0),e||(e=this.getDateObject()),console.log(e);var t=e.getHours(),n=[t>12?t-12:0===t?12:t,e.getMinutes()];return a===!0&&n.push(e.getSeconds()),this.digitize(n)},getSeconds:function(e){var a=this.getTimeSeconds();return e&&(60==a?a=0:a%=60),Math.ceil(a)},getWeeks:function(e){var a=this.getTimeSeconds()/60/60/24/7;return e&&(a%=52),Math.floor(a)},removeLeadingZeros:function(a,t){var n=0,i=[];return e.each(t,function(e){a>e?n+=parseInt(t[e],10):i.push(t[e])}),0===n?i:t},addSeconds:function(e){this.time instanceof Date?this.time.setSeconds(this.time.getSeconds()+e):this.time+=e},addSecond:function(){this.addSeconds(1)},subSeconds:function(e){this.time instanceof Date?this.time.setSeconds(this.time.getSeconds()-e):this.time-=e},subSecond:function(){this.subSeconds(1)},toString:function(){return this.getTimeSeconds().toString()}})}(jQuery),/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
function(){"use strict";FlipClock.Timer=FlipClock.Base.extend({callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},count:0,factory:!1,interval:1e3,animationRate:1e3,constructor:function(e,a){this.base(a),this.factory=e,this.callback(this.callbacks.init),this.callback(this.callbacks.create)},getElapsed:function(){return this.count*this.interval},getElapsedTime:function(){return new Date(this.time+this.getElapsed())},reset:function(e){clearInterval(this.timer),this.count=0,this._setInterval(e),this.callback(this.callbacks.reset)},start:function(e){this.factory.running=!0,this._createTimer(e),this.callback(this.callbacks.start)},stop:function(e){this.factory.running=!1,this._clearInterval(e),this.callback(this.callbacks.stop),this.callback(e)},_clearInterval:function(){clearInterval(this.timer)},_createTimer:function(e){this._setInterval(e)},_destroyTimer:function(e){this._clearInterval(),this.timer=!1,this.callback(e),this.callback(this.callbacks.destroy)},_interval:function(e){this.callback(this.callbacks.interval),this.callback(e),this.count++},_setInterval:function(e){var a=this;a._interval(e),a.timer=setInterval(function(){a._interval(e)},this.interval)}})}(jQuery),function(e){FlipClock.TwentyFourHourClockFace=FlipClock.Face.extend({constructor:function(e,a){this.base(e,a)},build:function(a){var t=this,n=this.factory.$el.find("ul");this.factory.time.time||(this.factory.original=new Date,this.factory.time=new FlipClock.Time(this.factory,this.factory.original));var a=a?a:this.factory.time.getMilitaryTime(!1,this.showSeconds);a.length>n.length&&e.each(a,function(e,a){t.createList(a)}),this.createDivider(),this.createDivider(),e(this.dividers[0]).insertBefore(this.lists[this.lists.length-2].$el),e(this.dividers[1]).insertBefore(this.lists[this.lists.length-4].$el),this.base()},flip:function(e,a){this.autoIncrement(),e=e?e:this.factory.time.getMilitaryTime(!1,this.showSeconds),this.base(e,a)}})}(jQuery),function(e){FlipClock.CounterFace=FlipClock.Face.extend({shouldAutoIncrement:!1,constructor:function(e,a){"object"!=typeof a&&(a={}),e.autoStart=a.autoStart?!0:!1,a.autoStart&&(this.shouldAutoIncrement=!0),e.increment=function(){e.countdown=!1,e.setTime(e.getTime().getTimeSeconds()+1)},e.decrement=function(){e.countdown=!0;var a=e.getTime().getTimeSeconds();a>0&&e.setTime(a-1)},e.setValue=function(a){e.setTime(a)},e.setCounter=function(a){e.setTime(a)},this.base(e,a)},build:function(){var a=this,t=this.factory.$el.find("ul"),n=this.factory.getTime().digitize([this.factory.getTime().time]);n.length>t.length&&e.each(n,function(e,t){var n=a.createList(t);n.select(t)}),e.each(this.lists,function(e,a){a.play()}),this.base()},flip:function(e,a){this.shouldAutoIncrement&&this.autoIncrement(),e||(e=this.factory.getTime().digitize([this.factory.getTime().time])),this.base(e,a)},reset:function(){this.factory.time=new FlipClock.Time(this.factory,this.factory.original?Math.round(this.factory.original):0),this.flip()}})}(jQuery),function(e){FlipClock.DailyCounterFace=FlipClock.Face.extend({showSeconds:!0,constructor:function(e,a){this.base(e,a)},build:function(a){var t=this,n=this.factory.$el.find("ul"),i=0;a=a?a:this.factory.time.getDayCounter(this.showSeconds),a.length>n.length&&e.each(a,function(e,a){t.createList(a)}),this.showSeconds?e(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length-2].$el):i=2,e(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length-4+i].$el),e(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length-6+i].$el),e(this.createDivider("Days",!0)).insertBefore(this.lists[0].$el),this.base()},flip:function(e,a){e||(e=this.factory.time.getDayCounter(this.showSeconds)),this.autoIncrement(),this.base(e,a)}})}(jQuery),function(e){FlipClock.HourlyCounterFace=FlipClock.Face.extend({constructor:function(e,a){this.base(e,a)},build:function(a,t){var n=this,i=this.factory.$el.find("ul");t=t?t:this.factory.time.getHourCounter(),t.length>i.length&&e.each(t,function(e,a){n.createList(a)}),e(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length-2].$el),e(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length-4].$el),a||e(this.createDivider("Hours",!0)).insertBefore(this.lists[0].$el),this.base()},flip:function(e,a){e||(e=this.factory.time.getHourCounter()),this.autoIncrement(),this.base(e,a)},appendDigitToClock:function(e){this.base(e),this.dividers[0].insertAfter(this.dividers[0].next())}})}(jQuery),function(){FlipClock.MinuteCounterFace=FlipClock.HourlyCounterFace.extend({clearExcessDigits:!1,constructor:function(e,a){this.base(e,a)},build:function(){this.base(!0,this.factory.time.getMinuteCounter())},flip:function(e,a){e||(e=this.factory.time.getMinuteCounter()),this.base(e,a)}})}(jQuery),function(e){FlipClock.TwelveHourClockFace=FlipClock.TwentyFourHourClockFace.extend({meridium:!1,meridiumText:"AM",build:function(){var a=this.factory.time.getTime(!1,this.showSeconds);this.base(a),this.meridiumText=this.getMeridium(),this.meridium=e(['<ul class="flip-clock-meridium">',"<li>",'<a href="#">'+this.meridiumText+"</a>","</li>","</ul>"].join("")),this.meridium.insertAfter(this.lists[this.lists.length-1].$el)},flip:function(e,a){this.meridiumText!=this.getMeridium()&&(this.meridiumText=this.getMeridium(),this.meridium.find("a").html(this.meridiumText)),this.base(this.factory.time.getTime(!1,this.showSeconds),a)},getMeridium:function(){return(new Date).getHours()>=12?"PM":"AM"},isPM:function(){return"PM"==this.getMeridium()?!0:!1},isAM:function(){return"AM"==this.getMeridium()?!0:!1}})}(jQuery),function(){FlipClock.Lang.Arabic={years:"\u0633\u0646\u0648\u0627\u062a",months:"\u0634\u0647\u0648\u0631",days:"\u0623\u064a\u0627\u0645",hours:"\u0633\u0627\u0639\u0627\u062a",minutes:"\u062f\u0642\u0627\u0626\u0642",seconds:"\u062b\u0648\u0627\u0646\u064a"},FlipClock.Lang.ar=FlipClock.Lang.Arabic,FlipClock.Lang["ar-ar"]=FlipClock.Lang.Arabic,FlipClock.Lang.arabic=FlipClock.Lang.Arabic}(jQuery),function(){FlipClock.Lang.Danish={years:"\xc5r",months:"M\xe5neder",days:"Dage",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},FlipClock.Lang.da=FlipClock.Lang.Danish,FlipClock.Lang["da-dk"]=FlipClock.Lang.Danish,FlipClock.Lang.danish=FlipClock.Lang.Danish}(jQuery),function(){FlipClock.Lang.German={years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},FlipClock.Lang.de=FlipClock.Lang.German,FlipClock.Lang["de-de"]=FlipClock.Lang.German,FlipClock.Lang.german=FlipClock.Lang.German}(jQuery),function(){FlipClock.Lang.English={years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},FlipClock.Lang.en=FlipClock.Lang.English,FlipClock.Lang["en-us"]=FlipClock.Lang.English,FlipClock.Lang.english=FlipClock.Lang.English}(jQuery),function(){FlipClock.Lang.Spanish={years:"A\xf1os",months:"Meses",days:"D\xedas",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},FlipClock.Lang.es=FlipClock.Lang.Spanish,FlipClock.Lang["es-es"]=FlipClock.Lang.Spanish,FlipClock.Lang.spanish=FlipClock.Lang.Spanish}(jQuery),function(){FlipClock.Lang.Finnish={years:"Vuotta",months:"Kuukautta",days:"P\xe4iv\xe4\xe4",hours:"Tuntia",minutes:"Minuuttia",seconds:"Sekuntia"},FlipClock.Lang.fi=FlipClock.Lang.Finnish,FlipClock.Lang["fi-fi"]=FlipClock.Lang.Finnish,FlipClock.Lang.finnish=FlipClock.Lang.Finnish}(jQuery),function(){FlipClock.Lang.French={years:"Ans",months:"Mois",days:"Jours",hours:"Heures",minutes:"Minutes",seconds:"Secondes"},FlipClock.Lang.fr=FlipClock.Lang.French,FlipClock.Lang["fr-ca"]=FlipClock.Lang.French,FlipClock.Lang.french=FlipClock.Lang.French}(jQuery),function(){FlipClock.Lang.Italian={years:"Anni",months:"Mesi",days:"Giorni",hours:"Ore",minutes:"Minuti",seconds:"Secondi"},FlipClock.Lang.it=FlipClock.Lang.Italian,FlipClock.Lang["it-it"]=FlipClock.Lang.Italian,FlipClock.Lang.italian=FlipClock.Lang.Italian}(jQuery),function(){FlipClock.Lang.Latvian={years:"Gadi",months:"M\u0113ne\u0161i",days:"Dienas",hours:"Stundas",minutes:"Min\u016btes",seconds:"Sekundes"},FlipClock.Lang.lv=FlipClock.Lang.Latvian,FlipClock.Lang["lv-lv"]=FlipClock.Lang.Latvian,FlipClock.Lang.latvian=FlipClock.Lang.Latvian}(jQuery),function(){FlipClock.Lang.Dutch={years:"Jaren",months:"Maanden",days:"Dagen",hours:"Uren",minutes:"Minuten",seconds:"Seconden"},FlipClock.Lang.nl=FlipClock.Lang.Dutch,FlipClock.Lang["nl-be"]=FlipClock.Lang.Dutch,FlipClock.Lang.dutch=FlipClock.Lang.Dutch}(jQuery),function(){FlipClock.Lang.Norwegian={years:"\xc5r",months:"M\xe5neder",days:"Dager",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},FlipClock.Lang.no=FlipClock.Lang.Norwegian,FlipClock.Lang.nb=FlipClock.Lang.Norwegian,FlipClock.Lang["no-nb"]=FlipClock.Lang.Norwegian,FlipClock.Lang.norwegian=FlipClock.Lang.Norwegian}(jQuery),function(){FlipClock.Lang.Portuguese={years:"Anos",months:"Meses",days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},FlipClock.Lang.pt=FlipClock.Lang.Portuguese,FlipClock.Lang["pt-br"]=FlipClock.Lang.Portuguese,FlipClock.Lang.portuguese=FlipClock.Lang.Portuguese}(jQuery),function(){FlipClock.Lang.Russian={years:"\u043b\u0435\u0442",months:"\u043c\u0435\u0441\u044f\u0446\u0435\u0432",days:"\u0434\u043d\u0435\u0439",hours:"\u0447\u0430\u0441\u043e\u0432",minutes:"\u043c\u0438\u043d\u0443\u0442",seconds:"\u0441\u0435\u043a\u0443\u043d\u0434"},FlipClock.Lang.ru=FlipClock.Lang.Russian,FlipClock.Lang["ru-ru"]=FlipClock.Lang.Russian,FlipClock.Lang.russian=FlipClock.Lang.Russian}(jQuery),function(){FlipClock.Lang.Swedish={years:"\xc5r",months:"M\xe5nader",days:"Dagar",hours:"Timmar",minutes:"Minuter",seconds:"Sekunder"},FlipClock.Lang.sv=FlipClock.Lang.Swedish,FlipClock.Lang["sv-se"]=FlipClock.Lang.Swedish,FlipClock.Lang.swedish=FlipClock.Lang.Swedish}(jQuery),function(){FlipClock.Lang.Chinese={years:"\u5e74",months:"\u6708",days:"\u65e5",hours:"\u65f6",minutes:"\u5206",seconds:"\u79d2"},FlipClock.Lang.zh=FlipClock.Lang.Chinese,FlipClock.Lang["zh-cn"]=FlipClock.Lang.Chinese,FlipClock.Lang.chinese=FlipClock.Lang.Chinese}(jQuery);