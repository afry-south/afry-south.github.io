self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.InlineTranslation.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[306],{12421:function(t){t.exports=JSON.parse('{"i":"xMc","j":"yMc","h":"zMc","f":"AMc","e":"BMc","d":"CMc","c":"DMc","a":"EMc","b":"FMc","g":"GMc"}')},12422:function(t,n,a){var e=a(12423),r=a(71);"string"==typeof e&&(e=[[t.i,e]]);for(var o=0;o<e.length;o++)r.loadStyles(e[o][1],!1);e.locals&&(t.exports=e.locals)},12423:function(t,n,a){(n=t.exports=a(70)(!1)).push([t.i,"html[dir] ._1eN94FfatbCko5uUefAU47{padding-top:10px}html[dir=ltr] ._1eN94FfatbCko5uUefAU47{margin-left:52px}html[dir=rtl] ._1eN94FfatbCko5uUefAU47{margin-right:52px}",""]),n.locals={translationFeedback:"_1eN94FfatbCko5uUefAU47"}},13175:function(t,n,a){"use strict";a.r(n);var e=a(0),r=a(8189),o=a(54),i=a(2934),s=a(2475),l=a(48),u=15,c=40,d="Language",T="Languages",g="Locale",f="BestGuessLanguage";function b(t){return Object(e.__awaiter)(this,void 0,void 0,(function(){var n,a,b,m,D,j,O;return Object(e.__generator)(this,(function(e){switch(e.label){case 0:if(t.RightsManagementLicenseData)return[2,["",null]];n=null,e.label=1;case 1:return e.trys.push([1,4,,5]),[4,i.c.import()];case 2:return[4,e.sent()(t.ItemId.Id,r.d)];case 3:return n=e.sent(),[3,5];case 4:return e.sent(),l.d.info("getLocalePropertyForItem: Unable to get item property from GetItemManager."),[3,5];case 5:return a="",b=null,n&&(m=Object(s.b)(n,null,r.a),D=Object(s.b)(n,null,r.b),m?(O=JSON.parse(m.Value)[0],(j=O[d])&&(t.Preview.length<u||(t.Preview.length<c?Object(o.f)("tra-EnableShortMessage")&&j.hasOwnProperty(f)&&(a=j[f]):a=j.hasOwnProperty(f)?j[f]:j[g]))):l.d.info("getLocalePropertyForItem: No language property found for first body of item."),D&&(O=JSON.parse(D.Value)[0],b=O[T])),[2,[a||"",b]]}}))}))}var m={name:"InlineTranslationMessageTranslated",cosmosOnlyData:function(t,n){return t}},D={name:"InlineTranslationMessageUntranslated",cosmosOnlyData:function(t){return t}},j={name:"InlineTranslationStoreData",cosmosOnlyData:function(t,n){return t}},O={name:"InlineTranslationStoreStatus",cosmosOnlyData:function(t,n){return t}},h={name:"InlineTranslationLoadDataAndStatus",cosmosOnlyData:function(t){return t.ItemId.Id}},p=a(191),v=a(84),w=a(8190),x=Object(v.d)("storeTranslationData",h)((function(t){return Object(e.__awaiter)(this,void 0,void 0,(function(){var n,a,r,o;return Object(e.__generator)(this,(function(e){switch(e.label){case 0:n=null,e.label=1;case 1:return e.trys.push([1,4,,5]),[4,i.c.import()];case 2:return[4,e.sent()(t.ItemId.Id,w.d)];case 3:return n=e.sent(),[3,5];case 4:return a=e.sent(),Object(p.q)().endWithError("ServerError",new Error(a.responseMessage)),[3,5];case 5:return n?(r=Object(s.b)(n,null,w.a),o=Object(s.b)(n,null,w.b),[2,[r?r.Value:null,o?o.Value:null]]):[2,[null,null]]}}))}))})),I=a(833);function S(t,n){return n?t.UniqueBody.Value:t.NormalizedBody.Value}function y(t){var n=t.ConversationId.Id,a=I.x.conversations.get(n);if(null==a?void 0:a.conversationNodeIds){var e=t,r=I.x.conversationNodes.get(e.InternetMessageId);if(null==r?void 0:r.quotedTextList)return r.quotedTextList}}var L=4e5;var C=a(8177),_=a(8176),F=a(4255),E=a(207),M=a(1593),N=a(1428),P=a(447),A=a(2143);function U(t,n,a){var e=Object(E.a)({PropertyName:n,DistinguishedPropertySetId:"Common",PropertyType:"String"}),r=Object(M.a)({ExtendedFieldURI:e,Value:a}),o=Object(F.a)(r),i=Object(N.a)({Updates:[o],ItemId:Object(P.a)({Id:t})});return Object(A.a)({ItemChanges:[i],ConflictResolution:"AlwaysOverwrite",MessageDisposition:"SaveOnly"})}var k=a(2113),q=a(151),R=Object(v.d)("storeTranslationData",j)((function(t,n){return Object(e.__awaiter)(this,void 0,void 0,(function(){var a,r;return Object(e.__generator)(this,(function(e){return a=U(t,"TranslationData",JSON.stringify(n)),r=Object(p.q)(),[2,Object(k.a)({Header:Object(q.a)(),Body:a}).then((function(t){var n=Object(I.c)(t.Body.ResponseMessages.Items[0]);return n||r.endWithError("ServerError"),n})).catch((function(t){return r.endWithError("ServerError"),!1}))]}))}))})),V=Object(v.d)("storeTranslationData",O)((function(t,n){return Object(e.__awaiter)(this,void 0,void 0,(function(){var a,r;return Object(e.__generator)(this,(function(e){return a=U(t,"TranslationStatus",""+n),r=Object(p.q)(),[2,Object(k.a)({Header:Object(q.a)(),Body:a}).then((function(t){var n=Object(I.c)(t.Body.ResponseMessages.Items[0]);return n||r.endWithError("ServerError"),n})).catch((function(t){return r.endWithError("ServerError"),!1}))]}))}))})),B=a(445),J=a(4917),W=a(1732),G=Object(v.d)("translateItem",m)((function(t,n,a,r,i){return void 0===a&&(a=!1),void 0===r&&(r=!1),void 0===i&&(i=!1),Object(e.__awaiter)(this,void 0,void 0,(function(){var s,l,u,c,d,T,g,f,b,m,D,j,O,h,v,w,x,L,C,F;return Object(e.__generator)(this,(function(e){switch(e.label){case 0:return[4,J.f.import()];case 1:if(s=e.sent(),l=7e3,u=Object(p.q)(),c=I.x.items.get(t),d=!1,a&&(T=I.x.conversations.get(c.ConversationId.Id)),c.TranslationData.correlationId=Object(B.a)(),c.TranslationData.isTranslating=!0,c.TranslationData.targetLanguageTag=s(),c.TranslationData.translationFailed=!1,g=!1,f=!1,b=!1,m=[],D=function(t,n,a){return!(!a||!t.subjectTranslationData.translationText)||!(a||!n.TranslationData.subjectTranslationText)}(T,c,a),n&&!D&&(m.push(n),g=!0),null==c.TranslationData.translationText&&(c.TranslationData.isTranslatable||r)&&(Object(_.a)(c.TranslationData.itemOgmaLocale)&&!r||(j=S(c,a),m.push(j),f=!0)),a&&(O=y(c))&&(null===c.TranslationData.forwardContentTranslationText&&c.TranslationData.isForwardContentTranslatable&&!Object(_.a)(c.TranslationData.forwardContentLocale)||r)&&(O.forEach((function(t){m.push(t)})),b=!0),!(g||f||b))return[3,7];h=void 0,e.label=2;case 2:return e.trys.push([2,5,,6]),[4,J.j.import()];case 3:return[4,e.sent()(m,c.TranslationData.targetLanguageTag,c.TranslationData.correlationId)];case 4:return h=e.sent(),d=!0,[3,6];case 5:return v=e.sent(),function(t,n,a,e){if(t.TranslationData.isTranslating=!1,t.TranslationData.translationFailed=!0,a){var r=new Error("[InlineTranslation] TranslateText failed. Error:"+n+" | cid:"+e);a.endWithError("ServerError",r)}}(c,v,u,c.TranslationData.correlationId),[2];case 6:c.TranslationData.shouldGetFeedback=!0,g&&(w=h.shift(),a?T.subjectTranslationData.translationText=w:c.TranslationData.subjectTranslationText=w,D=!0),f&&(x=h.shift(),c.TranslationData.translationText=x),b&&(c.TranslationData.forwardContentTranslationText=h),e.label=7;case 7:return c.TranslationData.isTranslating=!1,L=!1,!c.TranslationData.translationText&&!c.TranslationData.forwardContentTranslationText||!D&&n||(!Object(o.f)("tra-cacheTranslation")||c.TranslationData.isShowingTranslation||c.TranslationData.isShowingForwardContentTranslation||(L=!0),null!==c.TranslationData.translationText&&(c.TranslationData.isShowingTranslation=!0),null!==c.TranslationData.forwardContentTranslationText&&(c.TranslationData.isShowingForwardContentTranslation=!0),null!==n&&(a?T.subjectTranslationData.isShowingTranslation=!0:c.TranslationData.isShowingSubjectTranslation=!0),a||u&&u.addCustomData({conversationViewOff:!0}),(c.TranslationData.manuallyTranslated||r&&!function(t){return t.TranslationData.isTranslatable&&!Object(_.a)(t.TranslationData.itemOgmaLocale)||t.TranslationData.isForwardContentTranslatable&&!Object(_.a)(t.TranslationData.forwardContentLocale)}(c))&&(u&&u.addCustomData({manual:!0}),c.TranslationData.manuallyTranslated=!0),i&&u&&u.addCustomData({auto:!0})),Object(o.f)("rp-inlineTranslation-floodgateSurvey")&&setTimeout((function(){W.a.import().then((function(t){t("TranslationCompleted")}))}),l),Object(o.f)("tra-cacheTranslation")&&d&&!c.RightsManagementLicenseData?(C=a?T.subjectTranslationData.translationText:c.TranslationData.subjectTranslationText,F={language:c.TranslationData.targetLanguageTag,subject:C,body:c.TranslationData.translationText,forward:c.TranslationData.forwardContentTranslationText,isConversation:a,dateTime:Date.now()},[4,R(c.ItemId.Id,F)]):[3,9];case 8:e.sent(),e.label=9;case 9:return L?[4,V(c.ItemId.Id,!0)]:[3,11];case 10:e.sent(),e.label=11;case 11:return[2]}}))}))}));var $=a(103);function z(t){try{var n=(new DOMParser).parseFromString(t,"text/html");n.querySelector('[id$="divRplyFwdMsg"]').remove();var a=n.querySelectorAll("style");if(a&&a.length>0)for(var e=0;e<a.length;e++)a[e]&&(a[e].innerText="");return n.body.textContent||""}catch(t){return""}}var H=a(81),Q=40;var Y=Object($.action)("setItemLocale")((function(t,n,a){return Object(e.__awaiter)(this,void 0,void 0,(function(){var r,i,s,l,u,c,d,T,g,f,m,D,j,O,h,p,v,w,_,F,E,M,N,P,A;return Object(e.__generator)(this,(function(e){switch(e.label){case 0:return[4,J.i.import()];case 1:return r=e.sent(),[4,J.d.import()];case 2:return i=e.sent(),[4,J.c.import()];case 3:return s=e.sent(),[4,J.e.import()];case 4:return l=e.sent(),[4,J.f.import()];case 5:return u=e.sent(),[4,J.b.import()];case 6:return c=e.sent(),[4,J.a.import()];case 7:return d=e.sent(),T=!n.TranslationData.userLanguage,null!=(g=n.TranslationData.itemLocale)?[3,9]:[4,b(n)];case 8:f=e.sent(),g=f[0],n.TranslationData.quotedTextLocales=null!=f[1]?JSON.parse(f[1]):[],e.label=9;case 9:return m=i(g),[4,r()];case 10:return D=e.sent(),j=!T&&(D||l()!=n.TranslationData.userLanguage),T||j?(t&&(O=I.x.conversations.get(n.ConversationId.Id)),c()&&function(t,n){void 0===n&&(n=!1);var a=0,e=I.x.items.get(t),r=S(e,n);if(r&&(a+=r.length),n){var o=y(e);o&&o.forEach((function(t){a+=t.length}))}return a<L}(n.ItemId.Id,t)?(n.TranslationData.userLanguage=l(),n.TranslationData.itemOgmaLocale=m,n.TranslationData.itemLocaleName=s(m),h=d(u(),g),Object(o.f)("rp-inlineTranslationForwardContent2")&&t?(p=[],n.TranslationData.quotedTextLocales.forEach((function(t){p.push(i(t))})),(v=function(t,n,a,e){var r=t,o=I.x.conversationNodes.get(r.InternetMessageId);if((null==o?void 0:o.hasQuotedText)&&o.quotedTextList){if(!n||n.length<=0||o.quotedTextList.length!=n.length)return"";for(var i=0;i<n.length;i++)if(!Object(H.b)(n[i])){var s=z(o.quotedTextList[i]);if(s&&s.length>=Q&&e(a,n[i]))return n[i]}}return null}(n,p,u(),d))?(n.TranslationData.forwardContentLocale=v,n.TranslationData.forwardContentLocaleName=s(v),n.TranslationData.isForwardContentTranslatable=!0,m||(n.TranslationData.itemOgmaLocale=v,n.TranslationData.itemLocaleName=n.TranslationData.forwardContentLocaleName)):""===v?n.TranslationData.isForwardContentTranslatable=h:(n.TranslationData.isForwardContentTranslatable=!1,n.TranslationData.forwardContentTranslationText=null)):!Object(o.f)("rp-inlineTranslationForwardContent2")&&t?n.TranslationData.isForwardContentTranslatable=h:Object(o.f)("rp-inlineTranslation-conversationViewOff")&&!t?n.TranslationData.isForwardContentTranslatable=h:n.TranslationData.isForwardContentTranslatable=!1,null==n.TranslationData.itemLocale&&(n.TranslationData.itemLocale=g),w=!0,T?Object(o.f)("tra-cacheTranslation")?[4,x(n)]:[3,12]:[3,14]):(n.TranslationData.isTranslatable=!1,n.TranslationData.isShowingTranslation=!1,n.TranslationData.translationText=null,n.TranslationData.isForwardContentTranslatable=!1,n.TranslationData.isShowingForwardContentTranslation=!1,n.TranslationData.forwardContentTranslationText=null,t?(O.subjectTranslationData.isShowingTranslation=!1,O.subjectTranslationData.translationText=null):(n.TranslationData.isShowingSubjectTranslation=!1,n.TranslationData.subjectTranslationText=null),[2])):[3,15];case 11:return F=e.sent(),[3,13];case 12:F=[null,null],e.label=13;case 13:E="true"===(_=F)[1],null!==_[1]&&(w=!1),M=JSON.parse(_[0]),N=u(),M&&M.language==N&&M.isConversation==t?(t?O.subjectTranslationData.translationText||(O.subjectTranslationData.translationText=M.subject):n.TranslationData.subjectTranslationText||(n.TranslationData.subjectTranslationText=M.subject),n.TranslationData.translationText=M.body,M.forward&&M.forward.length>0?n.TranslationData.forwardContentTranslationText=M.forward:n.TranslationData.forwardContentTranslationText=null):(E&&(w=!0,E=!1),n.TranslationData.translationText=null,n.TranslationData.forwardContentTranslationText=null),E&&(n.TranslationData.translationText&&(n.TranslationData.isShowingTranslation=!0),t?O.subjectTranslationData.translationText&&(O.subjectTranslationData.isShowingTranslation=!0):n.TranslationData.subjectTranslationText&&(n.TranslationData.isShowingSubjectTranslation=!0),Object(o.f)("rp-inlineTranslationForwardContent2")&&n.TranslationData.forwardContentTranslationText&&(n.TranslationData.isShowingForwardContentTranslation=!0),h||n.TranslationData.isForwardContentTranslatable||(n.TranslationData.manuallyTranslated=!0)),e.label=14;case 14:n.TranslationData.isTranslatable=h,j&&(n.TranslationData.isShowingTranslation=!1,n.TranslationData.translationText=null,n.TranslationData.isShowingForwardContentTranslation=!1,n.TranslationData.forwardContentTranslationText=null,t?(O.subjectTranslationData.isShowingTranslation=!1,O.subjectTranslationData.translationText=null):(n.TranslationData.isShowingSubjectTranslation=!1,n.TranslationData.subjectTranslationText=null)),Object(o.f)("rp-inlineTranslationAutomatic")&&w&&(P=n.TranslationData.isTranslatable&&Object(C.a)(n.TranslationData.itemOgmaLocale),A=!1,Object(o.f)("rp-inlineTranslationForwardContent2")&&(A=n.TranslationData.isForwardContentTranslatable&&Object(C.a)(n.TranslationData.forwardContentLocale)),(P||A)&&G(n.ItemId.Id,a,t,!1,!0)),e.label=15;case 15:return[2]}}))}))})),K=Object(v.d)("untranslateItem",D)((function(t,n){return void 0===n&&(n=!1),Object(e.__awaiter)(this,void 0,void 0,(function(){var a,r;return Object(e.__generator)(this,(function(e){switch(e.label){case 0:return a=I.x.items.get(t),n?(r=a.ConversationId.Id,I.x.conversations.get(r).subjectTranslationData.isShowingTranslation=!1):a.TranslationData.isShowingSubjectTranslation=!1,a.TranslationData.isShowingTranslation=!1,a.TranslationData.isShowingForwardContentTranslation=!1,Object(o.f)("tra-cacheTranslation")?[4,V(a.ItemId.Id,!1)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))})),X=a(3166),Z=a(4),tt=Object(Z.mutatorAction)("addExcludedLanguage",(function(t){var n=Object(X.a)(),a={feature:n.feature,targetLanguage:n.targetLanguage,translationMode:n.translationMode,excludedLanguages:Object(e.__spread)(n.excludedLanguages)};n.excludedLanguages.push(t),J.k.import().then((function(t){t(a,n)}))})),nt=Object(Z.mutatorAction)("setTranslationMode",(function(t){var n=Object(X.a)(),a={feature:n.feature,targetLanguage:n.targetLanguage,translationMode:n.translationMode,excludedLanguages:Object(e.__spread)(n.excludedLanguages)};n.translationMode=t,J.k.import().then((function(t){t(a,n)}))})),at=Object(Z.mutatorAction)("setWrongLanguage",(function(t){var n=I.x.items.get(t);n.TranslationData.isWrongLanguage=!0,Object(p.o)("InlineTranslationWrongLanguage",[],{cosmosOnlyData:JSON.stringify({id:n.ItemId.Id,language:n.TranslationData.itemLocaleName})})})),et=a(1),rt=a(2243),ot=a(12421),it=a(7),st=a(12422);function lt(){}function ut(){}function ct(t){var n={correlationId:t.translationData.correlationId,sourceLanguage:t.translationData.itemOgmaLocale,targetLanguage:t.translationData.targetLanguageTag,messageLength:t.messageContent.length};return JSON.stringify(n)}function dt(t){var n=[{logString:"Readability",uiString:Object(it.a)(ot.c)},{logString:"Formatting",uiString:Object(it.a)(ot.a)},{logString:"Other",uiString:Object(it.a)(ot.b)}],a=Object(e.__assign)({title:Object(it.a)(ot.f),subTitle:Object(it.a)(ot.e),ghostText:Object(it.a)(ot.d),categories:n},Object(o.f)("rp-inlineTranslation-DonateContent")&&{donationText:Object(it.a)(ot.g),donationJson:{messageContent:t.messageContent}});return et.createElement("div",{className:st.translationFeedback},et.createElement(rt.b,{ribbonMessage:Object(it.a)(ot.i),feature:"inlineTranslation",metadata:ct(t),thankYouMessage:Object(it.a)(ot.j),moreFeedbackRibbonMessage:Object(it.a)(ot.h),noFeedbackDialogParams:a,yesCallBack:lt,noCallBack:ut}))}a.d(n,"setItemLocale",(function(){return Y})),a.d(n,"translateItem",(function(){return G})),a.d(n,"untranslateItem",(function(){return K})),a.d(n,"addExcludedLanguage",(function(){return tt})),a.d(n,"setTranslationMode",(function(){return nt})),a.d(n,"setWrongLanguage",(function(){return at})),a.d(n,"TranslationFeedbackRibbon",(function(){return dt}))},1428:function(t,n,a){"use strict";a.d(n,"a",(function(){return r}));var e=a(0);function r(t){return Object(e.__assign)({__type:"ItemChange:#Exchange"},t)}},1530:function(t,n,a){"use strict";a.d(n,"a",(function(){return r}));var e=a(0);function r(t){return Object(e.__assign)({__type:"SetItemField:#Exchange"},t)}},1593:function(t,n,a){"use strict";a.d(n,"a",(function(){return r}));var e=a(0);function r(t){return Object(e.__assign)({__type:"ExtendedPropertyType:#Exchange"},t)}},1689:function(t,n,a){"use strict";a.d(n,"a",(function(){return r}));var e=a(0);function r(t){return Object(e.__assign)({__type:"Message:#Exchange"},t)}},1732:function(t,n,a){"use strict";a.d(n,"a",(function(){return o}));var e=a(86),r=new e.c((function(){return a.e(771).then(a.bind(null,2948))})),o=new e.b(r,(function(t){return t.logFloodgateActivity}))},2113:function(t,n,a){"use strict";var e=a(23),r=a(0);function o(t,n){var a;return void 0===t||t.__type||(a=t,t=Object(r.__assign)({__type:"UpdateItemJsonRequest:#Exchange"},a)),Object(e.a)("UpdateItem",t,n)}a.d(n,"a",(function(){return o}))},2143:function(t,n,a){"use strict";a.d(n,"a",(function(){return r}));var e=a(0);function r(t){return Object(e.__assign)({__type:"UpdateItemRequest:#Exchange"},t)}},2243:function(t,n,a){"use strict";a.d(n,"a",(function(){return o})),a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return s}));var e=a(86),r=new e.c((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(232)]).then(a.bind(null,3524))})),o=Object(e.d)(r,(function(t){return t.FeedbackForm})),i=Object(e.d)(r,(function(t){return t.FeedbackRibbon})),s=Object(e.d)(r,(function(t){return t.NewConsumerRecruitmentForm}))},3166:function(t,n,a){"use strict";a.d(n,"a",(function(){return r}));var e=a(840);function r(){return Object(e.d)(e.a.Translation)}},3978:function(t,n,a){"use strict";var e;a.d(n,"a",(function(){return e})),function(t){t[t.SuggestAutomatic=0]="SuggestAutomatic",t[t.Automatic=1]="Automatic",t[t.Never=2]="Never",t[t.Suggest=3]="Suggest"}(e||(e={}))},4255:function(t,n,a){"use strict";a.d(n,"a",(function(){return s}));var e=a(1593),r=a(207),o=a(1689),i=a(1530);function s(t){return Object(i.a)({Path:Object(r.a)(t.ExtendedFieldURI),Item:Object(o.a)({ExtendedProperty:[Object(e.a)(t)]})})}},4917:function(t,n,a){"use strict";a.d(n,"a",(function(){return o})),a.d(n,"i",(function(){return i})),a.d(n,"h",(function(){return s})),a.d(n,"d",(function(){return l})),a.d(n,"c",(function(){return u})),a.d(n,"g",(function(){return c})),a.d(n,"e",(function(){return d})),a.d(n,"f",(function(){return T})),a.d(n,"b",(function(){return g})),a.d(n,"j",(function(){return f})),a.d(n,"k",(function(){return b}));var e=a(86),r=new e.c((function(){return a.e(514).then(a.bind(null,9135))})),o=new e.b(r,(function(t){return t.checkCanTranslate})),i=new e.b(r,(function(t){return t.initSupportedLanguages})),s=new e.b(r,(function(t){return t.initAndGetSupportedLanguageMap})),l=(new e.b(r,(function(t){return t.getLocaleOfSupportedLanguageMap})),new e.b(r,(function(t){return t.getOgmaSupportedLanguageTag}))),u=(new e.b(r,(function(t){return t.getDetectedLanguage})),new e.b(r,(function(t){return t.getLanguageNameFromTag}))),c=(new e.b(r,(function(t){return t.getUserLanguageName})),new e.b(r,(function(t){return t.getUserLanguageTag}))),d=new e.b(r,(function(t){return t.getTargetLanguageName})),T=new e.b(r,(function(t){return t.getTargetLanguageTag})),g=new e.b(r,(function(t){return t.getIsUserLocaleSupported})),f=new e.b(r,(function(t){return t.translateText})),b=new e.b(r,(function(t){return t.updateTranslationOptions}))},8176:function(t,n,a){"use strict";a.d(n,"a",(function(){return o}));var e=a(3166),r=a(3978);function o(t){var n=Object(e.a)();return n.translationMode===r.a.Never||n.excludedLanguages.includes(t)}},8177:function(t,n,a){"use strict";a.d(n,"a",(function(){return o}));var e=a(3978),r=a(3166);function o(t){var n=Object(r.a)();return n.translationMode===e.a.Automatic&&!n.excludedLanguages.includes(t)}},8189:function(t,n,a){"use strict";a.d(n,"a",(function(){return i})),a.d(n,"b",(function(){return s})),a.d(n,"d",(function(){return l}));var e=a(54),r=a(838),o=a(207),i="EntityExtraction/ExtractLanguage1.0",s="EntityExtraction/ExtractQuotedTextLanguages1.0",l="InlineTranslationLocale",u=[Object(o.a)({PropertyName:i,DistinguishedPropertySetId:"Common",PropertyType:"String"}),Object(o.a)({PropertyName:s,DistinguishedPropertySetId:"Common",PropertyType:"String"})],c={featureId:l,propertyPaths:u,isPropertyExistedOnItem:function(t){var n=r.a.items.get(t);return(null==n?void 0:n.TranslationData)&&null!=n.TranslationData.itemLocale},shouldGetItemPropertiesFromServer:function(t,n){if(!(Object(e.f)("rp-inlineTranslation")&&0==n||Object(e.f)("rp-inlineTranslation-conversationViewOff")))return!1;var a=r.a.items.get(t);return!!a&&!a.RightsManagementLicenseData}};n.c=c},8190:function(t,n,a){"use strict";a.d(n,"a",(function(){return i})),a.d(n,"b",(function(){return s})),a.d(n,"d",(function(){return l}));var e=a(54),r=a(838),o=a(207),i="TranslationData",s="TranslationStatus",l="InlineTranslationDataAndStatus",u=[Object(o.a)({PropertyName:i,DistinguishedPropertySetId:"Common",PropertyType:"String"}),Object(o.a)({PropertyName:s,DistinguishedPropertySetId:"Common",PropertyType:"String"})],c={featureId:l,propertyPaths:u,isPropertyExistedOnItem:function(t){var n=r.a.items.get(t);return(null==n?void 0:n.TranslationData)&&null!=n.TranslationData.translationText},shouldGetItemPropertiesFromServer:function(t,n){return!!(Object(e.f)("rp-inlineTranslation")&&Object(e.f)("tra-cacheTranslation")&&0==n||Object(e.f)("rp-inlineTranslation-conversationViewOff")&&Object(e.f)("tra-cacheTranslation"))}};n.c=c}}]);
//# sourceMappingURL=owa.InlineTranslation.js.map
self.scriptsLoaded['owa.InlineTranslation.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.InlineTranslation.js'] = (new Date()).getTime();