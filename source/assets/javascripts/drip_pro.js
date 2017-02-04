/*
## Third-Party Depedencies

If you're already using jStorage or jQuery BBQ, you can drop these includes.

*/
//(function($,r){var h,n=Array.prototype.slice,t=decodeURIComponent,a=$.param,j,c,m,y,b=$.bbq=$.bbq||{},s,x,k,e=$.event.special,d="hashchange",B="querystring",F="fragment",z="elemUrlAttr",l="href",w="src",p=/^.*\?|#.*$/g,u,H,g,i,C,E={};function G(I){return typeof I==="string"}function D(J){var I=n.call(arguments,1);return function(){return J.apply(this,I.concat(n.call(arguments)))}}function o(I){return I.replace(H,"$2")}function q(I){return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(K,P,I,L,J){var R,O,N,Q,M;if(L!==h){N=I.match(K?H:/^([^#?]*)\??([^#]*)(#?.*)/);M=N[3]||"";if(J===2&&G(L)){O=L.replace(K?u:p,"")}else{Q=m(N[2]);L=G(L)?m[K?F:B](L):L;O=J===2?L:J===1?$.extend({},L,Q):$.extend({},Q,L);O=j(O);if(K){O=O.replace(g,t)}}R=N[1]+(K?C:O||!N[1]?"?":"")+O+M}else{R=P(I!==h?I:location.href)}return R}a[B]=D(f,0,q);a[F]=c=D(f,1,o);a.sorted=j=function(J,K){var I=[],L={};$.each(a(J,K).split("&"),function(P,M){var O=M.replace(/(?:%5B|=).*$/,""),N=L[O];if(!N){N=L[O]=[];I.push(O)}N.push(M)});return $.map(I.sort(),function(M){return L[M]}).join("&")};c.noEscape=function(J){J=J||"";var I=$.map(J.split(""),encodeURIComponent);g=new RegExp(I.join("|"),"g")};c.noEscape(",/");c.ajaxCrawlable=function(I){if(I!==h){if(I){u=/^.*(?:#!|#)/;H=/^([^#]*)(?:#!|#)?(.*)$/;C="#!"}else{u=/^.*#/;H=/^([^#]*)#?(.*)$/;C="#"}i=!!I}return i};c.ajaxCrawlable(0);$.deparam=m=function(L,I){var K={},J={"true":!0,"false":!1,"null":null};$.each(L.replace(/\+/g," ").split("&"),function(O,T){var N=T.split("="),S=t(N[0]),M,R=K,P=0,U=S.split("]["),Q=U.length-1;if(/\[/.test(U[0])&&/\]$/.test(U[Q])){U[Q]=U[Q].replace(/\]$/,"");U=U.shift().split("[").concat(U);Q=U.length-1}else{Q=0}if(N.length===2){M=t(N[1]);if(I){M=M&&!isNaN(M)?+M:M==="undefined"?h:J[M]!==h?J[M]:M}if(Q){for(;P<=Q;P++){S=U[P]===""?R.length:U[P];R=R[S]=P<Q?R[S]||(U[P+1]&&isNaN(U[P+1])?{}:[]):M}}else{if($.isArray(K[S])){K[S].push(M)}else{if(K[S]!==h){K[S]=[K[S],M]}else{K[S]=M}}}}else{if(S){K[S]=I?h:""}}});return K};function A(K,I,J){if(I===h||typeof I==="boolean"){J=I;I=a[K?F:B]()}else{I=G(I)?I.replace(K?u:p,""):I}return m(I,J)}m[B]=D(A,0);m[F]=y=D(A,1);$[z]||($[z]=function(I){return $.extend(E,I)})({a:l,base:l,iframe:w,img:w,input:w,form:"action",link:l,script:w});k=$[z];function v(L,J,K,I){if(!G(K)&&typeof K!=="object"){I=K;K=J;J=h}return this.each(function(){var O=$(this),M=J||k()[(this.nodeName||"").toLowerCase()]||"",N=M&&O.attr(M)||"";O.attr(M,a[L](N,K,I))})}$.fn[B]=D(v,B);$.fn[F]=D(v,F);b.pushState=s=function(L,I){if(G(L)&&/^#/.test(L)&&I===h){I=2}var K=L!==h,J=c(location.href,K?L:{},K?I:2);location.href=J};b.getState=x=function(I,J){return I===h||typeof I==="boolean"?y(I):y(J)[I]};b.removeState=function(I){var J={};if(I!==h){J=x();$.each($.isArray(I)?I:arguments,function(L,K){delete J[K]})}s(J,2)};e[d]=$.extend(e[d],{add:function(I){var K;function J(M){var L=M[F]=c();M.getState=function(N,O){return N===h||typeof N==="boolean"?m(L,N):m(L,O)[N]};K.apply(this,arguments)}if($.isFunction(I)){K=I;return J}else{K=I.handler;I.handler=J}}})})(jQuery,this);

//(function(){function C(){var a="{}";if("userDataBehavior"==f){g.load("jStorage");try{a=g.getAttribute("jStorage")}catch(b){}try{r=g.getAttribute("jStorage_update")}catch(c){}h.jStorage=a}D();x();E()}function u(){var a;clearTimeout(F);F=setTimeout(function(){if("localStorage"==f||"globalStorage"==f)a=h.jStorage_update;else if("userDataBehavior"==f){g.load("jStorage");try{a=g.getAttribute("jStorage_update")}catch(b){}}if(a&&a!=r){r=a;var l=p.parse(p.stringify(c.__jstorage_meta.CRC32)),k;C();k=p.parse(p.stringify(c.__jstorage_meta.CRC32));
//var d,n=[],e=[];for(d in l)l.hasOwnProperty(d)&&(k[d]?l[d]!=k[d]&&"2."==String(l[d]).substr(0,2)&&n.push(d):e.push(d));for(d in k)k.hasOwnProperty(d)&&(l[d]||n.push(d));s(n,"updated");s(e,"deleted")}},25)}function s(a,b){a=[].concat(a||[]);var c,k,d,n;if("flushed"==b){a=[];for(c in m)m.hasOwnProperty(c)&&a.push(c);b="deleted"}c=0;for(d=a.length;c<d;c++){if(m[a[c]])for(k=0,n=m[a[c]].length;k<n;k++)m[a[c]][k](a[c],b);if(m["*"])for(k=0,n=m["*"].length;k<n;k++)m["*"][k](a[c],b)}}function v(){var a=(+new Date).toString();
//if("localStorage"==f||"globalStorage"==f)try{h.jStorage_update=a}catch(b){f=!1}else"userDataBehavior"==f&&(g.setAttribute("jStorage_update",a),g.save("jStorage"));u()}function D(){if(h.jStorage)try{c=p.parse(String(h.jStorage))}catch(a){h.jStorage="{}"}else h.jStorage="{}";z=h.jStorage?String(h.jStorage).length:0;c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.CRC32||(c.__jstorage_meta.CRC32={})}function w(){if(c.__jstorage_meta.PubSub){for(var a=+new Date-2E3,b=0,l=c.__jstorage_meta.PubSub.length;b<
//l;b++)if(c.__jstorage_meta.PubSub[b][0]<=a){c.__jstorage_meta.PubSub.splice(b,c.__jstorage_meta.PubSub.length-b);break}c.__jstorage_meta.PubSub.length||delete c.__jstorage_meta.PubSub}try{h.jStorage=p.stringify(c),g&&(g.setAttribute("jStorage",h.jStorage),g.save("jStorage")),z=h.jStorage?String(h.jStorage).length:0}catch(k){}}function q(a){if("string"!=typeof a&&"number"!=typeof a)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==a)throw new TypeError("Reserved key name");
//return!0}function x(){var a,b,l,k,d=Infinity,n=!1,e=[];clearTimeout(G);if(c.__jstorage_meta&&"object"==typeof c.__jstorage_meta.TTL){a=+new Date;l=c.__jstorage_meta.TTL;k=c.__jstorage_meta.CRC32;for(b in l)l.hasOwnProperty(b)&&(l[b]<=a?(delete l[b],delete k[b],delete c[b],n=!0,e.push(b)):l[b]<d&&(d=l[b]));Infinity!=d&&(G=setTimeout(x,Math.min(d-a,2147483647)));n&&(w(),v(),s(e,"deleted"))}}function E(){var a;if(c.__jstorage_meta.PubSub){var b,l=A,k=[];for(a=c.__jstorage_meta.PubSub.length-1;0<=a;a--)b=
//c.__jstorage_meta.PubSub[a],b[0]>A&&(l=b[0],k.unshift(b));for(a=k.length-1;0<=a;a--){b=k[a][1];var d=k[a][2];if(t[b])for(var n=0,e=t[b].length;n<e;n++)try{t[b][n](b,p.parse(p.stringify(d)))}catch(g){}}A=l}}var y=window.jQuery||window.$||(window.$={}),p={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(a){return String(a).evalJSON()}||y.parseJSON||y.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||y.toJSON};if("function"!==
//typeof p.parse||"function"!==typeof p.stringify)throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var c={__jstorage_meta:{CRC32:{}}},h={jStorage:"{}"},g=null,z=0,f=!1,m={},F=!1,r=0,t={},A=+new Date,G,B={isXML:function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1},encode:function(a){if(!this.isXML(a))return!1;try{return(new XMLSerializer).serializeToString(a)}catch(b){try{return a.xml}catch(c){}}return!1},
//decode:function(a){var b="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(a){var b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a);return b};if(!b)return!1;a=b.call("DOMParser"in window&&new DOMParser||window,a,"text/xml");return this.isXML(a)?a:!1}};y.jStorage={version:"0.4.12",set:function(a,b,l){q(a);l=l||{};if("undefined"==typeof b)return this.deleteKey(a),b;if(B.isXML(b))b={_is_xml:!0,xml:B.encode(b)};else{if("function"==typeof b)return;
//b&&"object"==typeof b&&(b=p.parse(p.stringify(b)))}c[a]=b;for(var k=c.__jstorage_meta.CRC32,d=p.stringify(b),g=d.length,e=2538058380^g,h=0,f;4<=g;)f=d.charCodeAt(h)&255|(d.charCodeAt(++h)&255)<<8|(d.charCodeAt(++h)&255)<<16|(d.charCodeAt(++h)&255)<<24,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16),f^=f>>>24,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16),e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16)^f,g-=4,++h;switch(g){case 3:e^=(d.charCodeAt(h+2)&255)<<16;case 2:e^=
//(d.charCodeAt(h+1)&255)<<8;case 1:e^=d.charCodeAt(h)&255,e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16)}e^=e>>>13;e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16);k[a]="2."+((e^e>>>15)>>>0);this.setTTL(a,l.TTL||0);s(a,"updated");return b},get:function(a,b){q(a);return a in c?c[a]&&"object"==typeof c[a]&&c[a]._is_xml?B.decode(c[a].xml):c[a]:"undefined"==typeof b?null:b},deleteKey:function(a){q(a);return a in c?(delete c[a],"object"==typeof c.__jstorage_meta.TTL&&a in c.__jstorage_meta.TTL&&
//delete c.__jstorage_meta.TTL[a],delete c.__jstorage_meta.CRC32[a],w(),v(),s(a,"deleted"),!0):!1},setTTL:function(a,b){var l=+new Date;q(a);b=Number(b)||0;return a in c?(c.__jstorage_meta.TTL||(c.__jstorage_meta.TTL={}),0<b?c.__jstorage_meta.TTL[a]=l+b:delete c.__jstorage_meta.TTL[a],w(),x(),v(),!0):!1},getTTL:function(a){var b=+new Date;q(a);return a in c&&c.__jstorage_meta.TTL&&c.__jstorage_meta.TTL[a]?(a=c.__jstorage_meta.TTL[a]-b)||0:0},flush:function(){c={__jstorage_meta:{CRC32:{}}};w();v();s(null,
//"flushed");return!0},storageObj:function(){function a(){}a.prototype=c;return new a},index:function(){var a=[],b;for(b in c)c.hasOwnProperty(b)&&"__jstorage_meta"!=b&&a.push(b);return a},storageSize:function(){return z},currentBackend:function(){return f},storageAvailable:function(){return!!f},listenKeyChange:function(a,b){q(a);m[a]||(m[a]=[]);m[a].push(b)},stopListening:function(a,b){q(a);if(m[a])if(b)for(var c=m[a].length-1;0<=c;c--)m[a][c]==b&&m[a].splice(c,1);else delete m[a]},subscribe:function(a,
//b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");t[a]||(t[a]=[]);t[a].push(b)},publish:function(a,b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.PubSub||(c.__jstorage_meta.PubSub=[]);c.__jstorage_meta.PubSub.unshift([+new Date,a,b]);w();v()},reInit:function(){C()},noConflict:function(a){delete window.$.jStorage;a&&(window.jStorage=this);return this}};(function(){var a=!1;if("localStorage"in
//window)try{window.localStorage.setItem("_tmptest","tmpval"),a=!0,window.localStorage.removeItem("_tmptest")}catch(b){}if(a)try{window.localStorage&&(h=window.localStorage,f="localStorage",r=h.jStorage_update)}catch(c){}else if("globalStorage"in window)try{window.globalStorage&&(h="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],f="globalStorage",r=h.jStorage_update)}catch(k){}else if(g=document.createElement("link"),
//g.addBehavior){g.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(g);try{g.load("jStorage")}catch(d){g.setAttribute("jStorage","{}"),g.save("jStorage"),g.load("jStorage")}a="{}";try{a=g.getAttribute("jStorage")}catch(m){}try{r=g.getAttribute("jStorage_update")}catch(e){}h.jStorage=a;f="userDataBehavior"}else{g=null;return}D();x();"localStorage"==f||"globalStorage"==f?"addEventListener"in window?window.addEventListener("storage",u,!1):document.attachEvent("onstorage",
//u):"userDataBehavior"==f&&setInterval(u,1E3);E();"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&u()},!1)})()})();

(function(){
  DripPro = (function(){
    function DripPro() {}

/*

## Settings

It's advised to pass in your own overrides in your initializer vs. overriding them here. DPT is subject to change and break any manual changes you may have added. To ensure forward compliancy, only make changes within the options / functions passed to the initializer.

- **debug**: Whether to output to console.log what's happening behind the scenes. (Should always be false in production)
- **cookie_prefix**: When we write to localStorage, what should the prefix of our keys be?
- **offer_fn_name**: The name of the function, which should be on the `window` object, that determines the current offer
- **survey_fn_name**: The name of the function, which should be on the `window` object, that determines the survey question to show
- **scoring_obj**: The name of the object, which should be on teh `window` object, that determines how to score the current content
- **template_path**: The path to load offer templates
- **template_ext**: The extension to append when loading offer template files
- **modal_delay**: The delay before showing the exit intent modal
- **modal_sensitivity**: How far out of the viewport the cursor needs to go before triggering an exit modal
- **can_display**: A function that returns a boolean (true/false) to determine if we should show offers on the current page
- **post_drip_response**: A function fired when we hear back from Drip with subscriber data
- **pre_init**: A function fired when initiating Drip Pro Tools
*/
    DripPro.prototype.settings = {
      debug: false,
      cookie_prefix: 'drippro_',
      offer_fn_name: 'drip_plinko',
      scoring_obj: 'scoring',
      template_path: '/wp-content/themes/dyf/ads/',
      template_ext: '.html',
      modal_delay: 1000,
      modal_sensitivity: 20,
      can_display: function() { return true },
      post_drip_response: function() {},
      pre_init: function() {}
    }

    DripPro.prototype.storage = {
      set: function(id, value, ttl) {
        ttl = ttl || 0
        return jQuery.jStorage.set(id, value, {TTL: ttl})
      },

      get: function(id) {
        return jQuery.jStorage.get(id)
      },

      delete: function(id) {
        return jQuery.jStorage.deleteKey(id)
      },

      index: function() {
        return jQuery.jStorage.index()
      },

      flush: function() {
        return jQuery.jStorage.flush()
      }
    }

    DripPro.prototype.renderers = {
      replacer: function(intent, content) {
        this.debug('Rendering HTML in placeholder: ' + intent)
        jQuery('[data-placeholder='+intent+']').html(content).addClass(intent)
      },
      facebook: function(intent, content) {
        if (this.fb_tracked) return
        if (typeof(fbq) === 'undefined') return
        arr = content.split(',')
        jQuery.each(arr, function(idx, c) {
          c = jQuery.trim(c)
          fbq('trackCustom', 'Segment', { list: c })
        })
        this.fb_tracked = true
      },
      /*
      Modify this function to determine how to inject offers in your articles (e.g. I use the `article-content` class, etc. on my blog articles.)
      */
      contentupgrade: function(intent, content) {
        var first_h2 = jQuery('.article-content h2:eq(1)').first()
        var offer_html = jQuery('<textarea/>').html(content.offer).text()
        var offer_cta = jQuery('<div class="inline-cta inline-cta-upgrade">').html(offer_html)
        offer_cta.prepend(jQuery('<div class="inline-cta-exclusive">').text('Limited Time'))
        first_h2.before(offer_cta.clone())

        if (jQuery('.article-content h2').length >= 6) {
          var last_h2 = jQuery('.article-content h2:eq(-2)').first()
          last_h2.before(offer_cta)
        }

        if (content.footer) {
          var footer_html = jQuery('<textarea/>').html(content.footer).text()
          jQuery('.related-articles').hide()
          jQuery('.article-content').append(footer_html)
        }
      },
      inline: function(intent, content) {
        if (this.block_inline) return
        if (jQuery('.article-category').length == 0) return
        var cta = jQuery('<div class="inline-cta inline-cta-offer">').html(content)
        var first_h2 = jQuery('.article-content h2').first()
        var last_p = jQuery('.article-content p:eq(-2)').first()
        first_h2.before(cta.clone())
        last_p.before(cta.clone())
      },
      slider: function(intent, content, o) {
        var os = jQuery.extend({
          threshold: 40
        }, o)
        if (this.dom_slider) this.dom_slider.remove()
        var dom = jQuery(content)
        this.dom_slider = dom
        jQuery('body').append(dom)
        var has_scrolled = false
        jQuery(window).scroll(function() {
          /*
          If you'd like to change anything about how we're triggering the pop-up slider, modify the `800` and `900` values below.
          */
          var scroll_speed = 800;

          var wintop = jQuery(window).scrollTop(), docheight = jQuery(document).height(), winheight = jQuery(window).height()

          scrolled = ((wintop / (docheight-winheight))*100)

          if ((docheight - wintop) < 900) {
            dom.removeClass('expanded')
          } else if (scrolled > os.threshold) {
            if (!has_scrolled) {
              this.debug('Displaying slider')
              if (typeof(mixpanel) !== 'undefined') mixpanel.track('Ad - Slider')
              has_scrolled = true
            }
            dom.addClass('expanded')
          }
        }.bind(this))
      },
      modal: function(intent, content, options) {
        if (this.modal_setup) return
        window._delayTimer = null
        sensitivity = this.settings.modal_sensitivity
        delay = options.delay ? options.delay : this.settings.modal_delay

        function handleMouseEnter(e) {
          if (_delayTimer) {
            clearTimeout(_delayTimer);
            _delayTimer = null;
          }
        }

        function handleMouseLeave(e) {
          var t = this
          var cookie_name = this.settings.cookie_prefix+'_ig_'+intent
          if (e.clientY > sensitivity) return
          if (options.force) {
          } else {
            if (this.storage.get(cookie_name)) return
          }

          _delayTimer = setTimeout(function(){
            if (jQuery.modal.isActive()) return

            this.debug('Displaying modal')
            jQuery('.notification-bar').hide()
            if (typeof(mixpanel) !== 'undefined') mixpanel.track('Ad - Modal', { instant: false })

            var modal = jQuery('<div class="modal">')
                          .data('placeholder', intent)
                          .html(content)
                          .appendTo('body')
                          .modal()
            t.modify_forms()
            modal.find('input[type=email]').focus()
            if (window.modal_fn) window.modal_fn()
            modal.on('modal:after-close', function(){
              jQuery('.notification-bar').show()
              if (typeof(mixpanel) !== 'undefined') mixpanel.track('Ad - Modal Close', { instant: false })
              t.storage.set(cookie_name, '1')
            })
          }.bind(this), delay);
        }
  
        jQuery('body').on('mouseenter', handleMouseEnter);
        jQuery('body').on('mouseleave', handleMouseLeave.bind(this));
        this.modal_setup = true
      },
      instamodal: function(intent, content) {
        var t = this
        if (this.modal_setup) { return }
        if (jQuery(window).width() < 1050) { return }
        m_delay = 10000
        window._delayTimer = setTimeout(function(){
          if (typeof(mixpanel) !== 'undefined') mixpanel.track('Ad - Modal', { instant: true })
          var modal = jQuery('<div class="modal">')
                        .data('placeholder', intent)
                        .html(content)
                        .appendTo('body')
                        .modal()
          modal.on('modal:after-close', function(){
            if (typeof(mixpanel) !== 'undefined') mixpanel.track('Ad - Modal Close', { instant: true })
            t.storage.set(cookie_name, '1')
          })
        }, m_delay)

        this.modal_setup = true
      }
    }

    DripPro.prototype.init = function(settings, renderers) {
      this.settings = jQuery.extend(this.settings, settings)
      this.renderers = jQuery.extend(this.renderers, renderers)

      this.settings.pre_init()
      _dcq.push(['identify', { success: this.drip_response_received.bind(this) }])
      this.extract_utms()
      return this
    }

    /*
    This will automatically extract any utm_* passed to any page on your site (that includes DPT), will store these variables, and then use them when/if the viewer opts in to a Drip form.
    */
    DripPro.prototype.extract_utms = function() {
      var utm_hash = ''
      p = jQuery.deparam.querystring()

      if (!jQuery.isEmptyObject(p)) {

        this.debug('UTM params:', p)
        
        res = {}
        for (var key in p) {
          if (key.indexOf('utm') === 0) {
            res[key] = p[key]
          }
        }
        if (typeof(mixpanel) !== 'undefined') mixpanel.register_once(res)
        if (typeof(mixpanel) !== 'undefined') mixpanel.register(p)

        this.storage.set(this.settings.cookie_prefix + '_utm', jQuery.param(res))
      }
    }

    DripPro.prototype.modify_forms = function() {
      var t = this
      jQuery('[data-drip-embedded-form] input[type=hidden]').remove()
      jQuery('[data-drip-embedded-form]').each(function(){
        var form = this
        var utms = t.storage.get(t.settings.cookie_prefix + '_utm')
        var affiliate_id = jQuery.cookie('appwp_ref')

        jQuery(this).append(jQuery('<input type="hidden">').attr('name', 'fields[optin_url]').val(window.location.origin + window.location.pathname))

        if (utms) {
          utms = jQuery.deparam(utms)
          for (var key in utms) {
            t.debug('Adding hidden UTM field to form: '+key)
            jQuery(this).append(jQuery('<input type="hidden">').attr('name', 'fields['+key+']').val(utms[key]))
          }
        }

        jQuery.each(t.storage.index(), function(idx, key) {
          if (key.indexOf(t.settings.cookie_prefix + 'cat_') === 0) {
            stripped_key = key.replace(t.settings.cookie_prefix + 'cat_', '')
            t.debug('Adding tracking fields to form: ' + stripped_key)
            jQuery(form).append(jQuery('<input type="hidden">').attr('name', 'fields['+stripped_key+']').val(t.storage.get(key)))
          }
        })

        if (affiliate_id) {
          jQuery(this).append(jQuery('<input type="hidden">').attr('name', 'fields[affiliate_id]').val(affiliate_id))
        }


      })
    }

    /*
    If you're using an affiliate plugin, you can keep the affiliate ID of the viewer in sync with Drip subscriber data. Just be sure to switch out `appwp_ref` with the cookie name your affiliate manager writes.
    */
    DripPro.prototype.set_affiliate = function() {
      if (jQuery.cookie('appwp_ref')) {
        if (!this.anon && this.drip_contact.custom_fields && !this.drip_contact.custom_fields.affiliate_id) {
          _dcq.push(['identify', { affiliate_id: jQuery.cookie('appwp_ref')} ])
        }
        return
      }

      if (!this.is_anon && this.drip_contact.custom_fields && this.drip_contact.custom_fields.affiliate_id) {
        jQuery.cookie('appwp_ref', this.drip_contact.custom_fields.affiliate_id, { expires: 365 })
        jQuery.cookie('affwp_ref_visit_id', this.drip_contact.custom_fields.affiliate_id, { expires: 365 })
      }
    }

    /*
    If you set `window.mp`, we'll pass this in to Mixpanel along with all subscriber data and tags. This will also track Gravity Forms and Drip form submissions.
    */
    DripPro.prototype.track = function() {
      if (window.mp) {

        options = {
          offer: this.offer.offer
        }
        if (this.is_anon) {
          options['anon'] = true
        } else {
          var people_options = {}
          people_options['$email'] = this.drip_contact.email
          people_options['$first_name'] = this.drip_contact.custom_fields['MS_FNAME']
          people_options['$last_name'] = this.drip_contact.custom_fields['MS_LNAME']
          people_options['$ip'] = window.v_ip

          mixpanel.identify(this.drip_contact.email)

          options['anon'] = false
          people_options = jQuery.extend(people_options, this.drip_contact.custom_fields)

          jQuery.each(this.drip_contact.tags, function(idx, c) {
            people_options[c] = true
          })

          if (typeof(mixpanel) !== 'undefined') mixpanel.people.set(people_options)
        }

        if (typeof(mixpanel) !== 'undefined') mixpanel.register(options)
        if (typeof(mixpanel) !== 'undefined') mixpanel.track(window.mp[0], window.mp[1])

        jQuery('[rel="modal:open"]').click(function(e){
          var popup = jQuery(this).attr('href')
          if (typeof(mixpanel) !== 'undefined') mixpanel.track('Optin - Modal', jQuery.extend(window.mp[1], { popup: popup }))
        })

        jQuery(document).on('submit.gf', '.gform_wrapper form', function(e){
          if (e.isDefaultPrevented()) { return }
          e.preventDefault()
          var email = jQuery(this).find('.ginput_container_email input').val()
          if (email) {
            fields = {
              form_id: jQuery('[name=gform_submit]').val()
            }
            jQuery.each(jQuery(this).serializeArray(), function(idx, obj) {
              if (obj.name.indexOf('input') === 0) {
                var label = jQuery('[name='+obj.name+']').closest('div').prev().text()
                fields[label] = obj.value
              }
            })


            if (typeof(mixpanel) !== 'undefined') mixpanel.alias(email)
            if (typeof(mixpanel) !== 'undefined') {
              mixpanel.people.set({
                '$email': email,
                '$ip': window.v_ip
              })
            }
            if (typeof(mixpanel) !== 'undefined') mixpanel.track('Gravity Form Submitted', fields)

            ga('send', {
              hitType: 'event',
              eventCategory: 'gravityform',
              eventAction: 'submit'
            })

            jQuery(document).unbind('submit.gf')
            jQuery(this).trigger('submit')
          }
        })

        jQuery(document).on('submit.drip', '[data-drip-embedded-form]', function(e){
          if (e.isDefaultPrevented()) { return }
          e.preventDefault()
          var email = jQuery(this).find('[type=email]').val()
          if (email) {
            fields = {
              form_id: jQuery(this).data('drip-embedded-form'),
              form_label: jQuery(this).data('form-label'),
              form_value: jQuery(this).data('form-value')
            }
            jQuery.each(jQuery(this).serializeArray(), function(idx, obj) {
              if (obj.name.indexOf('fields') === 0) {
                var n = obj.name.replace('fields[', '').replace(']', '')
                fields[n] = obj.value
              }
            })

            mixpanel.alias(email)
            mixpanel.people.set({
              '$email': email,
              '$ip': window.v_ip
            })
            if (typeof(mixpanel) !== 'undefined') mixpanel.track('Lead Form Submitted', fields)

            ga('send', {
              hitType: 'event',
              eventCategory: 'leadform',
              eventAction: 'submit',
              eventLabel: jQuery(this).data('form-label')
            })

            jQuery(document).unbind('submit.drip')
            jQuery(this).trigger('submit')
          }
        })

      }
    }

    DripPro.prototype.replace = function() {
      if (window.drip_replacements) {
        for (var selector in window.drip_replacements) {
          if (jQuery(selector).length) {
            // if string replace
            // if regex substitute
            var fn = window.drip_replacements[selector]
            var ret = fn(new this.fn_helper(this))
            if (jQuery.isArray(ret)) {
              var html = jQuery(selector).html()
              html = html.replace(ret[0], ret[1])
              jQuery(selector).html(html)
            } else {
              jQuery(selector).html(ret)
            }
          }
        }
      }
    }

    /*
    This helper will add the tag provided in the `scoring_obj` settings.

    Here's an example of `window.scoring` in WordPress:
    ```
    window.scoring = {
      category: "<?php echo get_the_category()[0]->name ?>",
      name: "<?php echo $post->post_title ?>",
      id: '<?php echo $post->ID ?>',
      posts_in_cat: <?php echo count(get_posts(array('posts_per_page' => -1, 'category' => get_the_category()[0]->term_id))) ?>
    }
    ```
    */
    DripPro.prototype.score_content = function(drip_contact) {
      if (this.already_scored) return

      var t = this
      var identify = { tags: ["Read - " + window.scoring.name] }

      jQuery.each(window.scoring.categories, function(cat, cat_count) {
        var category_downcase = cat.toLowerCase().replace(/ /g, '_')
        var cookie = t.settings.cookie_prefix + 'cat_' + category_downcase
        var posts = ((drip_contact.custom_fields ? drip_contact.custom_fields[category_downcase] : false) || t.storage.get(cookie) || '').split(',')
        posts.push(window.scoring.id)

        var f_posts = []
        posts.forEach(function(s, idx) {
          if (s != '') {
            f_posts.push(s)
          }
        })

        f_posts = Array.from(new Set(f_posts))

        var serialized = f_posts.join(',')
        var score = (f_posts.length / cat_count) * 100
        t.storage.set(cookie, serialized)
        t.storage.set(cookie + '_score', score)

        identify[category_downcase] = serialized
        identify[category_downcase + '_score'] = score
      })

      if (!this.is_anon) {
        _dcq.push(['identify', identify])
      }

      this.already_scored = true
    }

    DripPro.prototype.content_leaderboard = function() {
      var t = this
      var leaderboard = {}
      jQuery.each(this.storage.index(), function(idx, key) {
        if (key.indexOf(t.settings.cookie_prefix + 'cat_') === 0 && key.indexOf('score') === -1) {
          var posts = t.storage.get(key)
          leaderboard[key.replace(t.settings.cookie_prefix + 'cat_', '')] = posts.split(',').length
        }
      })
      return leaderboard
    }

    DripPro.prototype.content_leaderboard_first = function() {
      var leader = null
      var leader_count = 0
      jQuery.each(this.content_leaderboard(), function(cat, read_count) {
        if (read_count > leader_count) {
          leader = cat
          leader_count = read_count
        }
      })
      return leader
    }

    /*
    If the following function returns true AND there's a survey question we could ask the viewer. By default, if we have a question and the current page can show the survey, there's a random 1 in 3 chance of it triggering a survey.
    */
    DripPro.prototype.determine_needs_data = function() {
      var plinko = window.survey_plinko(new this.fn_helper(this))
      if (!plinko) return false
      return true
      if (!this.settings.can_display('survey')) return false
      //if (this.storage.get('survey_timer')) return false
      var rand = Math.floor(Math.random() * 3) + 1
      if (rand != 1) return false
      return true
    }

    /*
    The following function creates the HTML for the survey widget.
    */
    DripPro.prototype.push_survey = function() {
      var t = this
      var plinko = window.survey_plinko(new this.fn_helper(this))
      jQuery('.survey-question').text(plinko.question)
      jQuery.each(plinko.answers, function(key, value) {
        var li = jQuery('<li>').data('value', key).text(value)
        jQuery('.survey-answers').append(li)
      })
      var dom = jQuery('#survey-container')
      jQuery('#survey-container .survey-why span')
      jQuery('#survey-container').css('bottom', -1 * jQuery('#survey-container').outerHeight())

      jQuery('#survey-container li').click(function(e){
        var value = jQuery(this).data('value')
        var identify = {}
        identify[plinko.attr] = value
        _dcq.push(['identify', identify])
        _dcq.push(['track', "Completed a survey question", { question: plinko.question, answer: jQuery(this).text(), question_raw: plinko.attr, answer_raw: value }])
        if (typeof(mixpanel) !== 'undefined') mixpanel.people.set(identify)
        t.storage.set('survey_timer', 1, 259200) // 3 days
        if (typeof(mixpanel) !== 'undefined') mixpanel.track('Survey - Completed', { 'survey question': plinko.attr, 'survey answer': value })
        jQuery('#survey-container .survey-why, #survey-container .survey-answers').hide()
        jQuery('#survey-container .survey-question').text('Thanks!')
      })

      jQuery('#survey-container .close-survey').click(function(e){
        e.preventDefault()
        jQuery('#survey-container').remove()
        if (typeof(mixpanel) !== 'undefined') mixpanel.track('Survey - Closed', { 'survey question': plinko.attr })
      })

      var has_scrolled = false
      jQuery(window).scroll(function() {
        var scroll_speed = 800;

        var wintop = jQuery(window).scrollTop(), docheight = jQuery(document).height(), winheight = jQuery(window).height()

        scrolled = ((wintop / (docheight-winheight))*100)

        if ((docheight - wintop) < 900) {
          dom.removeClass('expanded')
        } else if (scrolled > 40) {
          if (!has_scrolled) {
            has_scrolled = true
            if (typeof(mixpanel) !== 'undefined') mixpanel.track('Survey - Shown', { 'survey question': plinko.attr })
          }
          dom.addClass('expanded')
        }
      }.bind(this))
    }

    DripPro.prototype.drip_response_received = function(payload) {
      this.drip_contact = payload
      this.is_anon = payload.anonymous
      if (this.is_anon) this.debug('Visitor is anonymous')
      if (!this.is_anon) {
        jQuery.cookie(this.settings.cookie_prefix + '_drip_id', payload.email, { expires: 365 })
      }
      if (window.scoring) this.score_content(payload)
      this.offer = this.determine_offer()
      this.debug('Offering: ' + this.offer.offer)
      window.drip_offer = this.offer.offer
      this.apply_offer_ctas()
      this.set_affiliate()
      this.track()
      this.replace()
      this.modify_forms()
      this.settings.post_drip_response(this.drip_contact, this)
    }

    DripPro.prototype.determine_offer = function() {
      try {
        return window[this.settings.offer_fn_name](new this.fn_helper(this), new this.page_fn_helper(this))
      } catch(err) {
        this.debug('Error firing the offer function: ' + this.settings.offer_fn_name + ', ' + err)
        return null
      }
    }

    DripPro.prototype.apply_offer_ctas = function() {
      var t = this
      var o = jQuery.extend({}, this.offer)
      offer_name = o.offer
      delete o.offer

      for (var intent in o) {

        var v = o[intent]
        var options = {}
        if (jQuery.isArray(v) && v.length == 3) {
          options = v[2]
        }

        if (this.settings.can_display(intent, options)) {
          var fn = (this.renderers[intent] || this.renderers.replacer).bind(this)
          var tmpl = o[intent]
          if (o[intent] instanceof Array) {
            fn = this.renderers[o[intent][1]].bind(this)
            tmpl = o[intent][0]
          }

          var d = jQuery.Deferred()
          d.intent = intent
          d.options = options
          d.fn = fn

          if (intent == 'facebook' || intent == 'contentupgrade' || options['inline']) {
            d.resolve({
              intent: intent,
              response: tmpl,
              options: options,
              fn: fn
            })
          } else {
            this.load_template(tmpl, d)
          }

          jQuery.when(d).done(function(ready){
            ready.fn(ready.intent, ready.response, ready.options)
            t.modify_forms()
          })
        }

      }
    }

    DripPro.prototype.fn_helper = function(context) {
      this.is_anon = context.is_anon
      this.has_tag = function(tag_name) {
        return context.drip_contact.tags.indexOf(tag_name) !== -1;
      }
      this.attr = function(attr) {
        return context.drip_contact.custom_fields[attr]
      }
      this.cn = context
    }

    DripPro.prototype.page_fn_helper = function(context) {
      jQuery.extend(this, window.page_data || {})
    }

    DripPro.prototype.load_template = function(file, def) {
      jQuery.ajax({
        type: 'GET',
        dataType: 'html',
        url: this.settings.template_path + file + this.settings.template_ext,
        success: function(response) {
          def.resolve({
            intent: def.intent,
            response: response,
            options: def.options,
            fn: def.fn
          })
        }
      })
    }

    DripPro.prototype.debug = function(message, obj) {
      if (this.settings.debug) {
        obj ? console.log(message, obj) : console.log(message)
      }
    }

    return DripPro
  })()

  window._drip_pro = new DripPro

  /*
  ## Determining the offer to show the user
  The following function should return an object that includes an `offer` key and keys for each promotional "slot". If it returns false or null, no offer will be displayed.

  So let's talk about this response object.

  The most basic example would be injecting an ad in the sidebar. Let's say within the sidebar you have `<div data-placeholder="sidebar_ad">`, you'd return the following object:
  ```
  {
    offer: 'emailcourse',
    sidebar_ad: 'emailcourse-300-200'
  }
  ```

  If `drip_plinko` returned this, it would attempt to load the endpoint "emailcourse-300-200" (with the template directory / extension that you supplied in the settings object.) Once it loads that file, it'll inject it into `div[data-placeholder="sidebar_ad"]`

  We can also supply something a bit more advanced as the value for a particular key.

  Let's say we want to keep the sidebar ad above, but we also want a slider to come up that isn't triggered by a scroll:

  ```
  {
    offer: 'emailcourse',
    sidebar_ad: 'emailcourse-300-200',
    footer: ['sixfigure-footer', 'slider', { threshold: 0 }]
  }
  ```

  When the value is supplied an array, we expect the first element to be the template name ('sixfigure-footer'), the second element to be the renderer (defaults to 'replacer', you can create your own and pass them in to the DPT initializer), and the third optional argument are any parameters you'd like to pass in to the renderer.

  **This function is passed a helper object**, which includes properties and functions that let you determine if the current user is anonymous (meaning: we don't know who they are) with `drip.is_anon`, has a particular tag with `drip.has_tag("Tag Name")`, or has a custom field with `drip.attr("field_name")`
  */
  window.drip_plinko = function(drip, page) {
    var is_mobile = false
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) is_mobile = true
    var needs_data = drip.cn.determine_needs_data()
    var response = { offer: 'none' }

    if (drip.is_anon) {
      if (!is_mobile) {
        response = {
          offer: 'sixfigure',
          footer: ['sixfigure-footer', 'slider', { threshold: 0 }],
          nav: ['nav-join', 'nav'],
          modal: 'cwyw-modal'
        }
      } else {
        response = {
          offer: 'cwyw',
          footer: !is_mobile ? ['cwyw-footer', 'slider'] : ['cwyw-inline', 'inline'],
          nav: ['nav-join', 'nav'],
          modal: 'cwyw-modal'
        }
      }
    } else {
      if (drip.has_tag('Bought DYFR')) {
        if (drip.has_tag('Bought DYFC') || drip.has_tag('Bought DYF Academy')) {
          response = {
            offer: 'dyfconf',
          }
        } else {
          response = {
            offer: 'academy',
            footer: ['academy-footer', 'slider'],
            facebook: 'dyfr, subscriber'
          }
        }
      } else {
        if (drip.has_tag('CWYW - Completed Course')) {
          response = {
            offer: 'dyfr',
            footer: ['dyfr-footer', 'slider'],
            facebook: 'cwywcompleted, subscriber'
          }
        } else if (drip.has_tag('CWYW - Began Course')) {
          response = {
            offer: 'dyfr',
            footer: ['dyfr-footer', 'slider'],
            facebook: 'cwywstarted, subscriber'
          }
        } else {
          response = {
            offer: 'cwyw',
            facebook: 'subscriber',
            footer: ['cwyw-calc-footer', 'slider']
          }
        }
      }
      response['nav'] = ['nav-academy', 'nav']
    }

    if (typeof(skip_exit) !== 'undefined') {
      if (typeof(dyf_of) !== 'undefined') {
        drip.cn.block_inline = true
        response['contentupgrade'] = dyf_of
      }
    }

    if (!drip.is_anon && !drip.attr('phone_number')) {
      if (window.modal_html) {
        response['modal'] = [modal_html, 'modal', { force: true, inline: true, delay: 500 }]
      }
    }

    if (!drip.is_anon && needs_data && !is_mobile) {
      delete response['footer']
      drip.cn.push_survey()
    }

    return response
  }

  /*
  ## Determine what survey question to show a user

  This is one of the best ways to progressively profile and segment your subscriber base. This unobtrusive survey popup will ask a user a question based on what they've already answered.

  Like with `drip_plinko`, if this function returns false no survey will show. You shouldn't show a survey to someone unless you know who they are in Drip.

  The response this function expects is an object that includes an `attr`, which is the custom field we'll set in Drip, a `question`, and then an `answers` object, which is a set of key / value pairs. The key is the value of the question's custom field in Drip, the value is what we show the user.
  */

  window.survey_plinko = function(drip) {
    if (drip.is_anon) return false
    if (drip.attr('team_size')) {
      if (!drip.attr('business_type')) {
        return {
          attr: 'business_type',
          question: 'What best describes what you do?',
          answers: {
            designer: 'Designer / UX',
            developer: 'Web / Software Developer',
            writer: 'Writer',
            marketer: 'Marketer / SEO / CRO',
            va: 'Virtual Assistant',
            consultant: 'Business Consultant / Coach',
            photographer: 'Photographer / Videographer',
            audio: 'Audio Engineer',
            translator: 'Translator',
            other: 'Other'
          }
        }
      }

      if (!drip.attr('agency_size') && (drip.attr('team_size') == 'agency_owner' || drip.attr('team_size') == 'agency_employee')) {
        return {
          attr: 'agency_size',
          question: 'How large is your agency?',
          answers: {
            '2-3': '2-3',
            '4-6': '4-6',
            '6-10': '6-10',
            '10-20': '10-20',
            '20+': '20+'
          }
        }
      }

      if (!drip.attr('not_freelancing_reason') && drip.attr('team_size') == 'na') {
        return {
          attr: 'not_freelancing_reason',
          question: "Why haven't you started freelancing yet?",
          answers: {
            considering: "Can't find the time - I'm still employed",
            skill: "Don't think my skills are good enough yet",
            nervous: "Honestly — I'm nervous about putting myself out there",
            no_clients: "I can't find clients",
            other: 'Other'
          }
        }
      }

    } else {
      return {
        attr: 'team_size',
        question: 'Do you work by yourself, or with a team?',
        answers: {
          solo: "I'm a solo freelancer",
          agency_owner: "I run an agency",
          agency_employee: "I work at an agency",
          na: "I'm not freelancing/consulting yet"
        }
      }
    }
  }

  jQuery(function(){
    /*
    ## Initializing DPT

    This waits for the page to load, and then initializes DPT.
    */
    window._drip_pro.init({
      modal_delay: 3000,
      /*
      The `can_display` function takes the "intent" (e.g. "sidebar_ad") and allows you to determine true/false if the current page should show the intent's offer.

      For example, I might not want the slider ad to show on any checkout page, but I might still want the nav offer to show. If I'm on the cart or checkout page, I could return `false` for the slider intent and `true` for the nav intent.
      */
      can_display: function(intent, options) {
        if (intent == 'pixel') return true

        if (jQuery('.woocommerce, .course-bg').length) return false

        if (intent == 'footer') {
          return jQuery('.article-category, .article-header, .category-featured-post').length >= 1
        }
        if (intent == 'modal') {
          if (options['force']) return true
          return (typeof(skip_exit) !== 'undefined' ? false : true)
        }
        if (intent == 'nav') {
          if (jQuery('.coursenav').length) return false
          return true
        }
        return true
      },
      /*
      Want to do something with what Drip sends back?

      Below I have any billing email fields or input's with the class 'prefillemail' getting the current user's email address pre-filled. Super helpful for webinar registration pages, etc.
      */
      post_drip_response: function(payload, drip) {
        jQuery('.checkout #billing_email, .prefillemail').val(payload.email)
        if (window.post_drip) window.post_drip(payload, drip)
        if (window.coupon) {
          jQuery('.purchaselink').each(function(){
            jQuery(this).attr('href', jQuery(this).attr('href') + "&coupon-code=" + window.coupon)
          })
        }
        //window._vwo_settings_timer = _vwo_code.init()
      }
    }, {
      /* Custom renderers go here */
      nav: function(intent, content) {
        if (this.nav_setup) return
        jQuery('.navbar-nav').append(content)
        jQuery('.mobile-nav').append(content)
        this.nav_setup = true
      }
    })
  })

}).call(this)


