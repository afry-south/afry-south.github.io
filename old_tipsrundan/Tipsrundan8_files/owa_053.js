self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.Protection.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[423],{10863:function(e,t,n){var r=n(10864),a=n(71);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)a.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},10864:function(e,t,n){(t=e.exports=n(70)(!1)).push([e.i,'._18HeWpqrGFWcx9ODRsZFz7{color:"[theme:neutralSecondary, default:#666666]"}html[dir=ltr] ._18HeWpqrGFWcx9ODRsZFz7{padding-left:12px;padding-right:8px}html[dir=rtl] ._18HeWpqrGFWcx9ODRsZFz7{padding-right:12px;padding-left:8px}.rIK8f2Qkq1y-ZjGX3xasV{font-size:12px}html[dir=ltr] ._1KtDpLcWQwZil_6WCYSYeL{margin-right:4px}html[dir=rtl] ._1KtDpLcWQwZil_6WCYSYeL{margin-left:4px}',""]),t.locals={subjectLabel:"_18HeWpqrGFWcx9ODRsZFz7",subjectLabelText:"rIK8f2Qkq1y-ZjGX3xasV",labelIcon:"_1KtDpLcWQwZil_6WCYSYeL"}},10865:function(e){e.exports=JSON.parse('{"g":"LAb","f":"MAb","e":"NAb","c":"OAb","d":"PAb","b":"QAb","a":"RAb"}')},1190:function(e,t,n){"use strict";var r=n(0),a=n(1711),i=n(103),o=Object(i.action)("addInfoBarMessage")((function(e,t,n){if(e){-1==e.infoBarIds.indexOf(t)?e.infoBarIds.push(t):e.infoBarIds=Object(r.__spread)(e.infoBarIds);var i=e.infoBarHostKey;n&&(a.b[i]||(a.b[i]={}),a.b[i][t]=n)}}));t.a=o},1301:function(e,t,n){"use strict";var r=n(0),a=n(1711),i=n(4);var o=Object(i.mutatorAction)("removeInfoBarMessages",(function(e,t){e&&(Array.isArray(t)?t:t?[t]:e.infoBarIds?Object(r.__spread)(e.infoBarIds):[]).forEach((function(t){return function(e,t){var n=e.infoBarIds&&e.infoBarIds.indexOf(t);n>=0&&e.infoBarIds.splice(n,1);var r=e.infoBarHostKey;a.b[r]&&(delete a.b[r][t],0===Object.keys(a.b[r]).length&&delete a.b[r])}(e,t)}))}));t.a=o},1711:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r={};function a(e,t){var n,a=e.infoBarHostKey;return null===(n=r[a])||void 0===n?void 0:n[t]}},1756:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),a=n(148),i=n(311),o=0;function c(e,t){var n=(t||window).document,c=n.createElement("div");c.id="owa-modal-"+o++,n.body.appendChild(c);var u,l=!1,s=function(){l||(l=!0,a.unmountComponentAtNode(c),n.body.removeChild(c))};return[new Promise((function(t,n){u=n,a.render(r.createElement(i.a,{type:i.b.None,onError:function(){s(),n()}},r.createElement(e,{onDismiss:function(e){s(),t(e)}})),c)})),function(){s(),u()}]}},188:function(e,t,n){"use strict";var r=n(460);n.d(t,"a",(function(){return r.a}))},1971:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(14),a=n(4),i={clpLabels:[],learnMoreUrl:"",rmsTemplates:new r.ObservableMap,messageClassifications:new r.ObservableMap},o=Object(a.createStore)("protection",i),c=o()},2066:function(e,t,n){"use strict";function r(e){if(!e)return e;var t=e.replace(/\+/g,"_");return t=t.replace(/\//g,"-")}function a(e){if(!e)return e;var t=e.replace(/_/g,"+");return t=t.replace(/-/g,"/")}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}))},2475:function(e,t,n){"use strict";function r(e,t,n,r){var i=a(e,t,n,r);return i?i.Value:null}function a(e,t,n,r){if(!e||!e.ExtendedProperty)return null;for(var a=0;a<e.ExtendedProperty.length;a++){var i=e.ExtendedProperty[a],o=null,c=null,u=null;if((null==i?void 0:i.ExtendedFieldURI)&&(o=i.ExtendedFieldURI.PropertyTag,c=i.ExtendedFieldURI.PropertyName,u=i.ExtendedFieldURI.PropertyId),t&&o==t)return i;if(n&&c==n)return i;if(r&&u==r)return i}return null}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}))},3479:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Manual="manual",e.Automatic="automatic",e.Default="default"}(r||(r={}))},3480:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"j",(function(){return L})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return g}));var r=n(0),a=n(191),i=n(5),o=n(19);function c(e,t){var n=v(e.selectedCLPLabel,"Change"),i=e.originalCLPLabel,o=e.selectedCLPLabel,c=Object(r.__assign)(Object(r.__assign)({},n),{IsLabelChanged:!0,LabelIdBefore:i?i.id:null,IsProtectionChanged:!(!i||!o)&&i.isEncryptingLabel!=o.isEncryptingLabel,ProtectedBefore:null==i?void 0:i.isEncryptingLabel,UserJustification:t});a.j.importAndExecute(c)}function u(e){var t=v(e,"Discover");a.j.importAndExecute(t)}function l(e){(null==e?void 0:e.value)&&e.value.length>0&&Object(a.o)("LoadCLPLabelOnBoot",{labelCount:e.value.length})}function s(e){e&&Object(a.o)("LoadCLPLabelComposeUsage",{isDefaultLabel:e.isDefault,isEncryptingLabel:e.isEncryptingLabel})}function d(e,t){t&&e?Object(a.o)("LoadCLPLabelChange",{isDowngrade:e.settingOrder>t.settingOrder,isOriginalLabelDefault:e.isDefault}):e&&Object(a.o)("LoadCLPLabelUnselect",{isOriginalLabelDefault:e.isDefault,isOriginalLabelEncrypting:e.isEncryptingLabel})}function b(e){401!=e.status&&Object(a.o)("CLPAutoLabelEnabled")}function f(){Object(a.o)("CLPAutoLabelAutomaticApplied")}function L(){Object(a.o)("CLPAutoLabelRecommendedShown")}function p(){Object(a.o)("CLPAutoLabelRecommendedApplied")}function g(){Object(a.o)("CLPAutoLabelRecommendedDismissed")}function v(e,t){var n=Object(o.a)().SessionSettings,r=n.ExternalDirectoryTenantGuid,a=n.UserEmailAddress;return{CreationTime:Object(i.tb)(Object(i.Pb)()),Version:"1.1",Operation:t,OrganizationId:r,UserId:a,ApplicationId:"00000002-0000-0ff1-ce00-000000000000",ApplicationName:"Outlook Web",DataState:"Use",LabelId:e?e.id:null,Protected:e?e.isEncryptingLabel:null}}},3961:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c}));var r="msip_labels",a="X-MS-Exchange-Organization-ModifySensitivityLabel",i="00000000-0000-0000-0000-000000000000",o="Standard",c="Privileged"},4258:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(1971),a=n(4516),i=n(81),o=/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g;function c(e){return Object(i.b)(e)?null:function e(t,n){if(!n)return null;for(var r=0;r<n.length;r++){var a=n[r];if(a.id==t)return a;var i=e(t,a.children);if(i)return i}return null}(e,Object(r.a)().clpLabels)}t.a=function(e){var t=Object(a.a)();if(!e)return t;for(var n=e.split(";"),r={},i=0;i<n.length;i++){var u=n[i];if(u){var l=u.match(o);if(l&&0!=l.length){var s=l[0];r[s]?r[s].push(u):r[s]=[u]}}}var d=Object.keys(r);for(i=0;i<d.length;i++){var b=c(d[i]);if(b){t.selectedLabel=b,delete r[d[i]];break}}return Object.values(r).forEach((function(e){t.nonTenantLabelString+=e.join(";")+";"})),t}},4516:function(e,t,n){"use strict";function r(){return{nonTenantLabelString:"",selectedLabel:null}}n.d(t,"a",(function(){return r}))},460:function(e,t,n){"use strict";function r(e){return e>=200&&e<300}n.d(t,"a",(function(){return r}))},4605:function(e,t,n){"use strict";n.r(t);var r=n(4),a=Object(r.action)("setSelectedCLPLabel",(function(e,t,n){return{labelToSet:e,infoBarViewState:t,clpViewState:n}})),i=n(6715),o=n(1190),c=n(1301),u=n(3479);Object(r.orchestrator)(a,(function(e){var t=e.infoBarViewState,n=e.clpViewState,r=e.labelToSet,a=t.infoBarIds;n.selectedCLPLabel&&r.id==n.selectedCLPLabel.id?(Object(i.a)(n,null,u.a.Default),a.indexOf("CLPLabel")>=0&&Object(c.a)(t,"CLPLabel")):r.isDefault?(Object(i.a)(n,r,u.a.Default),a.indexOf("CLPLabel")>=0&&Object(c.a)(t,"CLPLabel")):(Object(i.a)(n,r,u.a.Manual),a.indexOf("CLPLabel")<0&&Object(o.a)(t,"CLPLabel"))}));var l=n(1),s=n(216),d=n(29),b=n(775),f=n(10863),L=Object(d.a)((function(e){var t=e.subjectHeaderLabel;return t?l.createElement(b.a,{content:t.tooltip,hostClassName:f.subjectLabel},l.createElement("span",{tabIndex:0},l.createElement(s.a,{iconName:t.isEncryptingLabel?"Lock":"MarkAsProtected",className:f.labelIcon}),l.createElement("span",{className:f.subjectLabelText},t.infobarDisplayText))):null})),p=n(6443),g=n(0),v=n(207),O=n(1089),m=n(387),j=n(2475),P=n(838),h=n(4258),C=Object(r.mutatorAction)("updateItemCLPInfoInMailStore",(function(e,t){e&&(e.itemCLPInfo=t,(null==t?void 0:t.selectedLabel)&&(e.MSIPLabelGuid=t.selectedLabel.id))})),y=n(5954),A=n(54);function I(e,t){Object(A.f)("cmp-clp")&&(p.b?p.b.then((function(){_(e,t)})):_(e,t))}function _(e,t){if(e&&!e.itemCLPInfo){var n="";n=t?t.Value:Object(y.a)(e),C(e,Object(h.a)(n))}}var E=n(3961),S=n(4516);function x(e){return Object(g.__awaiter)(this,void 0,void 0,(function(){var t;return Object(g.__generator)(this,(function(n){return(t=P.a.items.get(e))?t.itemCLPInfo?[2,Promise.resolve(t.itemCLPInfo)]:[2,w(e).then((function(e){return I(t,e),t.itemCLPInfo}))]:[2,Promise.resolve(Object(S.a)())]}))}))}function w(e){return Object(g.__awaiter)(this,void 0,void 0,(function(){return Object(g.__generator)(this,(function(t){return[2,Object(O.a)([e],Object(m.a)({BaseShape:"IdOnly",AdditionalProperties:[Object(v.a)({PropertyName:E.c,DistinguishedPropertySetId:"InternetHeaders",PropertyType:"String"})]}),null).then((function(e){var t,n;return(null===(n=null===(t=null==e?void 0:e[0])||void 0===t?void 0:t.Items)||void 0===n?void 0:n[0])?Object(j.b)(e[0].Items[0],null,E.c):null}))]}))}))}var D=n(3480),R=n(10865),M=n(7),B=n(773),T=n(298),k=n(463),N=n(588),U=n(339),W=n(1497),q=n(784),F=Object(d.a)((function(e){var t=l.useRef(!0),n=Object(g.__read)(l.useState(""),2),r=n[0],a=n[1],i=function(){e.onDismiss({success:!1,downgradeJustification:null})},o=function(e,n){t.current||a(n||"")},c=[{key:"LABEL_NOT_APPLY",text:Object(M.a)(R.g),value:"Previous label no longer applies"},{key:"LABEL_NOT_CORRECT",text:Object(M.a)(R.f),value:"Previous label was incorrect"},{key:"OTHERS",text:Object(M.a)(R.e),onRenderField:function(e,t){return l.createElement("div",null,t(e),e.checked&&l.createElement(q.a,{multiline:!0,rows:3,onChange:o}))},styles:{choiceFieldWrapper:{width:"100%"},field:{marginBottom:"10px"}}}],u=!r;return l.createElement(B.a,{hidden:!1,onDismiss:i,dialogContentProps:{type:T.a.normal,title:Object(M.a)(R.c),subText:Object(M.a)(R.d)}},l.createElement(W.a,{options:c,onChange:function(e,n){if("OTHERS"!=n.key)return a(n.value||""),void(t.current=!0);t.current=!1}}),l.createElement(k.a,null,l.createElement(N.a,{onClick:function(){e.onDismiss({success:!0,downgradeJustification:r})},disabled:u,text:Object(M.a)(R.b)}),l.createElement(U.a,{onClick:i,text:Object(M.a)(R.a)})))})),V=n(1756),G=Object(r.mutatorAction)("setJustificationSent",(function(e,t){e.justificationSent=t}));function H(e,t,n,r,i){var o=n.originalCLPLabel;return r&&o&&e.settingOrder<=o.settingOrder&&!n.justificationSent?Object(g.__read)(Object(V.a)(F,i),1)[0].then((function(r){var i=r.success,o=r.downgradeJustification;return i&&o?(G(n,!0),a(e,t,n),Object(D.f)(n,o),Object(D.d)(n.selectedCLPLabel,e),Promise.resolve(!0)):Promise.resolve(!1)})):(a(e,t,n),Object(D.d)(n.selectedCLPLabel,e),Promise.resolve(!0))}var K=n(195),Z=n(19),z=n(445),J=n(2066),Y=n(188),Q="/ows/beta/CLPAutoLabeling";var X=n(48),$=Object(r.mutatorAction)("updateAutoLabelViewState",(function(e,t,n){e[t]=n}));var ee=n(1971);var te=["automatic","recommended"];function ne(e,t,n,r){if(a=function(e,t){var n=!1;return t.children&&t.children.length>0&&(n=t.children.reduce(a,!1)),e||t.isAutoLabelingOn||n},ee.b.clpLabels.reduce(a,!1)){var a,l=t.autoLabelViewState;if(!l.shouldKeepGettingAutoLabel)return $(l,"inProgressAutoLabelRequest",null),void $(l,"pendingAutoLabelRequest",null);var s=l.contentOfExistingAutoLabel;if(l.inProgressAutoLabelRequest)$(l,"pendingAutoLabelRequest",{itemId:n,content:r});else{if(!r||""==r)return;r!=s&&($(l,"inProgressAutoLabelRequest",{itemId:n,content:r}),function(e){return Object(g.__awaiter)(this,void 0,void 0,(function(){var t,n,r,a,i,o,c,u,l;return Object(g.__generator)(this,(function(s){switch(s.label){case 0:return t=Object(J.a)(e.Id),n=Object(Z.a)().SessionSettings,(r=n?n.ExternalDirectoryUserGuid:null)&&t?(a=Object(z.a)(),[4,Object(K.b)(Q+"/"+r+"/"+t,a,!0,null,!1,!0)]):[3,6];case 1:return i=s.sent(),o={status:i.status},Object(Y.a)(i.status)?[4,i.json()]:[3,3];case 2:return c=s.sent(),(u=c.result)&&(o.automatic=u.automatic,o.recommended=u.recommended),[3,5];case 3:return l=o,[4,i.text()];case 4:l.errorMessage=s.sent(),s.label=5;case 5:return[2,Promise.resolve(o)];case 6:return[2,Promise.resolve(null)]}}))}))}(n).then((function(n){!function(e,t,n){var r=t.autoLabelViewState;if(Object(D.b)(n),n)switch(n.status){case 200:!function(e,t,n){var r=t.autoLabelViewState,a=r.inProgressAutoLabelRequest;te.forEach((function(e){var t,a=null;(null===(t=n[e])||void 0===t?void 0:t.sensitivityLabel)&&(a=Object(h.b)(n[e].sensitivityLabel.id)),$(r,e,a)}));var l=r.automatic,s=r.recommended;(function(e,t){if(e.labelApplyMethod==u.a.Manual||!t)return!1;var n=e.selectedCLPLabel&&e.selectedCLPLabel.settingOrder<t.settingOrder;return!e.selectedCLPLabel||n})(t,l)&&(Object(D.a)(),function(e){var t=e.autoLabelViewState.automatic;Object(i.a)(e,t,u.a.Automatic)}(t),Object(o.a)(e,"CLPAutoLabelAutomatic"));(function(e,t){return!e.selectedCLPLabel||t&&e.selectedCLPLabel.settingOrder<t.settingOrder})(t,s)&&(Object(D.j)(),function(e,t){var n=t.automatic,r=t.recommended;n&&r&&n.id==r.id?Object(c.a)(e,"CLPAutoLabelRecommended"):r?Object(o.a)(e,"CLPAutoLabelRecommended"):Object(c.a)(e,"CLPAutoLabelRecommended")}(e,r));a&&$(r,"contentOfExistingAutoLabel",a.content)}(e,t,n);break;case 400:case 401:case 404:case 429:case 500:!function(e,t){t&&X.d.warn(Object(M.b)("GetAutoLabelRequest failed with code of: {0}; Error Message: {1}",t.status,t.errorMessage));$(e,"shouldKeepGettingAutoLabel",!1)}(r,n);break;default:return}$(r,"inProgressAutoLabelRequest",null);var a=r.pendingAutoLabelRequest;if(a){var l=a.itemId,s=a.content;ne(e,t,l,s)}}(e,t,n)})))}}}var re=ne;n.d(t,"CLPSubjectHeaderLabel",(function(){return L})),n.d(t,"loadCLPUserLabels",(function(){return p.a})),n.d(t,"loadItemCLPInfo",(function(){return x})),n.d(t,"logReadCLPLabel",(function(){return D.g})),n.d(t,"showJustificationModal",(function(){return H})),n.d(t,"updateItemCLPInfo",(function(){return I})),n.d(t,"triggerCLPAutoLabeling",(function(){return re}))},5954:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2475),a="msip_labels";function i(e){return e&&e.ExtendedProperty?Object(r.a)(e,null,a):null}},6443:function(e,t,n){"use strict";var r=n(6656),a=n(195),i=n(19),o=function(e){if(!e||!e.value)return{clpLabels:[],learnMoreUrl:""};var t=e.value,n=Object(i.a)().SessionSettings.UserLanguage,r={},a="";return t.forEach((function(e){!a&&e.PolicySetting_customurl&&(a=e.PolicySetting_customurl),r[e.Id]=function(e,t){var n=e["DisplayName_"+t]||e.DisplayName_Fallback;return{id:e.Id,parentId:e.ParentId,displayName:n,infobarDisplayText:n,tooltip:e.Setting_tooltip,settingOrder:parseInt(e.Setting_order),isDefault:"true"==e.PolicySetting_default,isEncryptingLabel:!!e.RightsProtectMessage_Disabled&&"false"==e.RightsProtectMessage_Disabled,isAutoLabelingOn:e.AutoLabeling_SensitiveTypeIds&&e.AutoLabeling_SensitiveTypeIds.length>0,children:[],isLabelEnabled:"true"==e.Setting_enabled&&!c(e)}}(e,n)})),Object.keys(r).forEach((function(e){var t=r[e];if(t.parentId){var n=r[t.parentId];n&&(t.infobarDisplayText=n.displayName+"\\"+t.displayName,n.children.push(t)),delete r[e]}})),{clpLabels:u(Object.values(r)),learnMoreUrl:a}};function c(e){return"userdefined"==e.RightsProtectMessage_ProtectionType&&"false"==e.RightsProtectMessage_donotforward}function u(e){return e?(e.sort(l),e.forEach((function(e){e.children&&e.children.sort(l)})),e):null}function l(e,t){return e.settingOrder-t.settingOrder}var s=n(3480);n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return f}));var d="/compliancepolicy/api/v1.0/user/label",b=null;function f(){b=Object(a.b)(d).then((function(e){Object(r.a)(o(e)),Object(s.e)(e),b=null}))}},6656:function(e,t,n){"use strict";var r=n(4),a=n(1971);t.a=Object(r.mutatorAction)("initializeCLPStore",(function(e){a.b.clpLabels=e.clpLabels,a.b.learnMoreUrl=e.learnMoreUrl}))},6715:function(e,t,n){"use strict";var r=n(4);t.a=Object(r.mutatorAction)("internalSetSelectedCLPLabel",(function(e,t,n){e.selectedCLPLabel=t,e.labelApplyMethod=n}))}}]);
//# sourceMappingURL=owa.Protection.js.map
self.scriptsLoaded['owa.Protection.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.Protection.js'] = (new Date()).getTime();