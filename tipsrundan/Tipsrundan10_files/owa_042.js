self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.Signature.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[483],{3713:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(77),i=new r.c((function(){return e.e(370).then(e.bind(null,5511))})),u=new r.a(i,(function(t){return t.loadSignatureInUserOptions}))},6694:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(4),i=Object(r.createStore)("signature",{roamingHtmlSignature:null,roamingTxtSignature:null});i()},9217:function(t,n,e){"use strict";e.r(n);var r=e(0),i=e(196),u=e(4),a=e(6694),o=Object(u.mutatorAction)("setSignatureInStore",(function(t,n){"html"==t?Object(a.a)().roamingHtmlSignature=n:"txt"==t&&(Object(a.a)().roamingTxtSignature=n)})),l="/ows/beta/OutlookCloudSettings/settings/account?settingname=signaturehtml",c="/ows/beta/OutlookCloudSettings/settings/account?settingname=signaturetxt";var s=e(3713),g=e(51),m=e(20);function d(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(r.__generator)(this,(function(e){if(Object(g.f)("cmp-roaming-signature")){if(null===(t=Object(a.a)()).roamingHtmlSignature||null===t.roamingTxtSignature)return[2,(u=Object(i.b)(l),d=Object(i.b)(c),Promise.all([u,d]).then((function(t){var n,e,i=Object(r.__read)(t,2),u=i[0],a=i[1],l="",c="";u&&(null===(n=u[0])||void 0===n?void 0:n.value)&&(l=u[0].value),a&&(null===(e=a[0])||void 0===e?void 0:e.value)&&(c=u[0].value),o("html",l),o("txt",c)})))]}else if(null===(n=Object(m.a)().UserOptions).SignatureHtml||null===n.SignatureText)return[2,s.a.importAndExecute()];var u,d;return[2,Promise.resolve()]}))}))}e.d(n,"loadSignature",(function(){return d}))}}]);
//# sourceMappingURL=owa.Signature.js.map
self.scriptsLoaded['owa.Signature.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.Signature.js'] = (new Date()).getTime();