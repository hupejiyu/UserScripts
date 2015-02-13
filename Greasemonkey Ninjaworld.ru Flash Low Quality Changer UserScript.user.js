// ==UserScript==
// @name Ninjaworld.ru Flash Low Quality Changer
// @namespace *
// @description Ninjaworld.ru Flash Low Quality Changer
// @include http://testabc.fysco.ru/*
// @include https://testabc.fysco.ru/*
// @include testabc.fysco.ru/*
// @include *.testabc.fysco.ru/*
// @include testabc.fysco.ru
// @include http://ninjaworld.ru/*
// @include https://ninjaworld.ru/*
// @include http://*.ninjaworld.ru/*
// @include ninjaworld.ru/*
// @include *.ninjaworld.ru/*
// @include ninjaworld.ru
// @include http://ninjaworld.cdnvideo.ru/*
// @include https://ninjaworld.cdnvideo.ru/*
// @include http://*.ninjaworld.cdnvideo.ru/*
// @include *.ninjaworld.cdnvideo.ru/*
// @include ninjaworld.cdnvideo.ru
// ==/UserScript== 

(function(){
 //var quality = "high"; 
 //var quality = "medium"; 
 var quality = "low"; 
 var force = true; //Overrides existing settings

 addEventListener("DOMContentLoaded", function(){
         var embeds = document.evaluate("//embed[@type='application/x-shockwave-flash']", document, null, XPathResult.ANY_TYPE, null);

         var embed = embeds.iterateNext();
         while(embed){
                if(force || !embed.getAttribute("quality")){
                        newEmbed = embed.cloneNode(false);
                        newEmbed.setAttribute("quality", quality);
                        embed.outerHTML = newEmbed.outerHTML;
                }
                embed = embeds.iterateNext();
         }
        for (objs = document.getElementsByTagName('object'), i = objs.length - 1; i >= 0; i--) {
            for (var c = objs[i].childNodes, j = c.length - 1, set = false; j >= 0; j--) {
                if ((c[j].tagName == 'PARAM') && (c[j].getAttribute('name') == 'quality')) { c[j].setAttribute('value', quality); set = true; break; }
            }
            if (!set) with (objs[i].appendChild(document.createElement('param'))) setAttribute('name', 'quality'), setAttribute('value', quality);
            with (objs[i].parentNode) appendChild(removeChild(objs[i]));
        }
}, false);
})();
