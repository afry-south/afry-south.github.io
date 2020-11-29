self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.RecipientCache.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[440],{1022:function(e,t,n){"use strict";var r=n(8),i=n(93),a=n(1472),c=n.n(a),o=n(1473),s=n.n(o),u=n(155),d=n(44);function l(e){var t=s()({EntityFeedbackEntries:e});return c()({Header:Object(u.getJsonRequestHeader)(),Body:t}).then((function(e){!function(e){if(null==e?void 0:e.Body){var t=e.Body;d.d.info(Object(r.b)("addEntityFeedback Error count: {0}",t.ErrorCount)),d.d.info(Object(r.b)("addEntityFeedback error details: {0}",t.ErrorDetails))}}(e)}))}t.a=Object(i.action)("attemptToSubmitAddEntityFeedback")((function(e,t,n){e&&t&&(e.entityFeedbackEntries.push(t),(n||e.entityFeedbackEntries.length>=e.maxActionBatchSize)&&(l(e.entityFeedbackEntries),d.d.info(Object(r.b)("{0} Submitted {1} entities.",e.entityScenarioName,e.entityFeedbackEntries.length)),e.entityFeedbackEntries=[]))}))},1051:function(e,t,n){"use strict";var r=n(4),i=Object(r.createStore)("recipientcache",{recipientCache:null,allKeys:{},usedFindPeopleFallback:!1})();t.a=i},1062:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(37);function i(){return Object(r.f)("rp-peopleSuggestionsTrie")&&Object(r.f)("rp-peopleSuggestionsCacheFirst")||Object(r.f)("rp-cacheFirstPeopleTrieSize300")||Object(r.f)("rp-cacheFirstPeopleTrieSize500")||Object(r.f)("rp-cacheFirstPeopleTrieSize700")||Object(r.f)("rp-peopleTrieOnTimeoutLow")||Object(r.f)("rp-peopleTrieOnTimeoutMed")||Object(r.f)("rp-peopleTrieOnTimeoutHigh")}},1100:function(e,t,n){"use strict";var r=n(8),i=n(93),a=Object(i.action)("increaseEntrySequenceNumber")((function(e){e&&e.entrySequenceNumber++})),c=n(70),o=n(44),s=n(5);function u(e,t,n,i,u,d,l,f){if(void 0===f&&(f=Object(s.Pb)()),!e)return o.d.warn("Attempting to create entity feedback entry with invalid feedbackManager"),null;if(Object(c.b)(e.clientSessionId))return o.d.warn(Object(r.b)("{0} - Attempting to create entity feedback entry with empty client session id",e.entityScenarioName)),null;var b={ClientEventTimeUtc:Object(s.tb)(f),ClientEventTimeLocal:Object(s.qb)(f),ClientSessionId:e.clientSessionId,ClientVersion:e.clientVersion,ClientId:e.clientId,EntityType:e.entityType,EntrySequenceNumber:e.entrySequenceNumber,TransactionId:t,EventType:n,TargetEntityList:i,EntityAddSource:u,JsonPropertyBag:d,ScenarioName:l||e.entityScenarioName};return a(e),b}n.d(t,"a",(function(){return u}))},1262:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(927);function i(e){var t,n="";e&&(Object(r.a)()?(t=e).Groups&&t.Instrumentation&&(n=t.Instrumentation.TraceId):"Success"==(t=e).ResponseClass&&t.ResultSet&&(n=t.TransactionId));return n}},1291:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(73),i=new r.c((function(){return Promise.all([n.e(23),n.e(89),n.e(95)]).then(n.bind(null,2507))})),a=new r.b(i,(function(e){return e.searchCacheTrie})),c=new r.b(i,(function(e){return e.compareFeatureData})),o=new r.a(i,(function(e){return e.initializeSuggestionTrie}))},1351:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(4),i=Object(r.createStore)("substratepeoplesuggestions",{sessionMaskedRecipients:[]}),a=i();t.a=a},1388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"FindPeopleJsonRequest:#Exchange"},e)}},1472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),i=n(1596);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("AddEntityFeedback",e,t)}},1473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"AddEntityFeedbackRequest:#Exchange"},e)}},1596:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"AddEntityFeedbackJsonRequest:#Exchange"},e)}},1635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"PersonaResponseShape:#Exchange"},e)}},1646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"FindPeopleRequest:#Exchange"},e)}},1647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),i=n(1388);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("FindPeople",e,t)}},1766:function(e,t,n){"use strict";var r=n(4),i=Object(r.createStore)("recipientcommon",{fallbackToFindPeople:!1})();t.a=i},1767:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1351);function i(e){return!!Object(r.b)().sessionMaskedRecipients[e]}},1768:function(e,t,n){"use strict";function r(e){var t,n;return e?(null===(t=e.EmailAddress)||void 0===t?void 0:t.EmailAddress)||(null===(n=e.PersonaId)||void 0===n?void 0:n.Id):null}n.d(t,"a",(function(){return r}))},1790:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(8),i=n(1767),a=function(e){return e?{Id:e,__type:"ItemId:#Exchange"}:void 0};function c(e,t,n){var c=e.EmailAddresses,d=e.DisplayName,l=e.Text,f=e.PDLItemId,b=e.ADObjectId,p=e.PersonaId,y=e.FeatureData,v=e.Id,O=e.ReferenceId,j=e.ImAddress,m=e.JobTitle,_=e.PeopleType,h=e.PeopleSubtype,P=e.GivenName,I=e.Alias,S=c?c[0]:void 0;if(!n&&S&&Object(i.a)(S))return null;var g={EmailAddress:S,Name:Object(r.f)(d)?l:d,MailboxType:u(h),RoutingType:o(h),ItemId:a(f)};return{DisplayName:d,ADObjectId:b,FeatureData:y,Id:v,ImAddress:j,EmailAddress:g,EmailAddresses:[g],PersonaTypeString:s(h),PersonaId:a(p),Title:m,ReferenceId:O,PeopleType:_,PeopleSubtype:h,GivenName:P,TransactionId:t,Alias:I}}function o(e){return"PersonalDistributionList"==e?"MAPIPDL":"SMTP"}function s(e){switch(e){case"PublicDistributionList":case"PersonalDistributionList":return"DistributionList";case"UnifiedGroup":return"ModernGroup";case"OrganizationUser":case"PersonalContact":case"ImplicitContact":case"OrganizationContact":return"Person";case"LinkedIn":return"LinkedIn";case"ImplicitGroup":return"ImplicitGroup";default:return"Unknown"}}function u(e){switch(e){case"PublicDistributionList":return"PublicDL";case"PersonalDistributionList":return"PrivateDL";case"UnifiedGroup":return"GroupMailbox";case"ImplicitGroup":return"RecommendedGroup";case"OrganizationUser":return"InternalMailbox";case"LinkedIn":return"LinkedIn";case"PersonalContact":case"OrganizationContact":case"ImplicitContact":case"Guest":case"Unknown":return"ExternalMailbox";default:return e}}},1971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ContextProperty:#Exchange"},e)}},2012:function(e,t,n){"use strict";var r=n(8),i=n(1022),a=n(1100),c=n(5),o=n(70),s=n(44),u=n(93);t.a=Object(u.action)("transactionFailed")((function(e,t,n,u,d,l){if(void 0===l&&(l=null),null==e?void 0:e.hasSessionStarted){var f={TransactionRequestTime:Object(c.qb)(u),TransactionRequestDuration:Object(c.w)(Object(c.Pb)(),u),QueryString:Object(r.f)(t)?"":t,QueryStringLength:Object(o.b)(t)?0:t.length,ImpressionId:n};l&&Object.keys(l).forEach((function(e){f[e]=l[e]})),d&&(f.Context=d);var b=JSON.stringify(f),p=Object(a.a)(e,n,"TransactionFailed",null,0,b);Object(i.a)(e,p,!1),s.d.info(Object(r.b)("{0} TransactionComplete. Session id: {1}",e.entityScenarioName,e.clientSessionId))}}))},3880:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1062),i=["Id","ADObjectId","DisplayName","EmailAddresses","PeopleSubtype","PeopleType","PDLItemId","PersonaId","ImAddress","JobTitle"],a=i.concat(["FeatureData","GivenName","Alias"]),c=i.concat(["FeatureData"]);function o(e){return Object(r.a)()?0==e?a:c:i}},4938:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(452);function i(){return{maxActionBatchSize:10,entityType:1,entityScenarioName:"FindPeople_react",hasSessionStarted:!1,isSessionPaused:!1,entityFeedbackEntries:[],clientSessionId:"",clientVersion:"1.0",clientId:1,entrySequenceNumber:0,conversationId:Object(r.a)()}}},5328:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1768),a=n(1971),c=n.n(a),o=n(1388),s=n.n(o),u=n(1646),d=n.n(u),l=n(924),f=n.n(l),b=n(1635),p=n.n(b),y=n(847),v=n.n(y),O=n(1647),j=n.n(O),m=n(155),_=500,h="owa.react.compose";function P(){var e,t=d()({IndexedPageItemView:f()({BasePoint:"Beginning",Offset:0,MaxEntriesReturned:_}),PersonaShape:(e=p()({BaseShape:"IdOnly",AdditionalProperties:[v()({FieldURI:"PersonaEmailAddress"}),v()({FieldURI:"EmailAddresses"}),v()({FieldURI:"PersonaDisplayName"}),v()({FieldURI:"PersonaDisplayNames"}),v()({FieldURI:"PersonaId"}),v()({FieldURI:"PersonaType"}),v()({FieldURI:"PersonaImAddress"}),v()({FieldURI:"PersonaTitle"})]}),e),QuerySources:["Mailbox"],QueryString:"",SearchPeopleSuggestionIndex:!0,ShouldResolveOneOffEmailAddress:!1,Context:[c()({Key:"AppName",Value:"OWA"}),c()({Key:"AppScenario",Value:h})]});return j()(s()({Header:Object(m.getJsonRequestHeader)(),Body:t})).then((function(e){return e.Body}))}var I=n(452),S=n(198),g=n(3880),E=n(37),T=300,F=500,A=700;var w="/search/api/v1/suggestions?",k="owa.react.recipientcache";function R(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,x()];case 1:return e=n.sent(),t=function(e){return{AppName:"OWA",Scenario:{Name:k},Cvid:Object(I.a)(),EntityRequests:[e]}}(e),[2,Object(S.d)(w,t,null,!1,null,!0,void 0,!1).then((function(e){return e}),(function(e){throw new Error(e.message)}))]}}))}))}function x(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,{Query:{QueryString:""},EntityType:"People",Provenances:["Mailbox"],Size:Object(E.f)("rp-cacheFirstPeopleTrieSize300")?T:Object(E.f)("rp-cacheFirstPeopleTrieSize700")?A:F,Fields:Object(g.a)(0)}]}))}))}var C=n(74),D=n(4938),M=n(2012),N=n(5),L=n(4),q=n(1766),z=Object(L.mutatorAction)("setFallbackToFindPeople",(function(e){q.a.fallbackToFindPeople=e})),U=n(1790),G=n(1262),B=n(44),J=n(1062),V=n(1291),Q={Action:"Type Down"},H=Object(C.d)("tryInitializeCacheWithSource",{name:"RecipientCacheInitialization",custonData:function(e,t){return[e,t]}})((function(e,t,n){return Object(r.__awaiter)(this,void 0,void 0,(function(){var a,c,o,s,u,d;return Object(r.__generator)(this,(function(l){switch(l.label){case 0:a=Object(N.Pb)(),c="",l.label=1;case 1:switch(l.trys.push([1,7,,8]),o=void 0,e){case 0:return[3,2];case 1:return[3,4]}return[3,6];case 2:return[4,R()];case 3:return s=l.sent(),o=function(e){var t,n,i,a=[];if(e&&e.Groups){var c=null===(i=e.Instrumentation)||void 0===i?void 0:i.TraceId;try{for(var o=Object(r.__values)(e.Groups),s=o.next();!s.done;s=o.next()){var u=s.value;if("People"===u.Type){a=u.Suggestions.map((function(e){return Object(U.a)(e,c)}));break}}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}}else B.d.warn("Response groups should not be null");return a}(s),c=Object(G.a)(s),[3,6];case 4:return[4,P()];case 5:return u=l.sent(),o=u.ResultSet,c=Object(G.a)(u),[3,6];case 6:return t&&z(!0),function(e,t,n,r){e&&e.length>0&&(e.forEach((function(e){var n=Object(i.a)(e);n&&(t.store.allKeys[n]=!0)})),t.store.recipientCache=e,Object(J.a)()&&0==n&&!r&&V.b.importAndExecute(e))}(o,n,e,t),[3,8];case 7:return d=l.sent(),B.d.warn(d.message),function(e,t){Object(M.a)(Object(D.a)(),"",t,e,Q)}(a,c),[3,8];case 8:return[2]}}))}))}));var K=n(1051),W=n(927),$=n(93),X=Object($.action)("initializeCache")(Object($.select)({store:function(){return K.a}})((function(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return e.store.recipientCache?[2]:(t=Object(W.a)(),[4,H(t?0:1,!1,e)]);case 1:return n.sent(),!t||e.store.recipientCache?[3,3]:[4,H(1,!0,e)];case 2:n.sent(),n.label=3;case 3:return e.store.recipientCache||(e.store.recipientCache=[]),[2]}}))}))})));n.d(t,"initializeCache",(function(){return X}))},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"PropertyUri:#Exchange"},e)}},924:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"IndexedPageView:#Exchange"},e)}},927:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(18),i=n(37),a=n(1766);function c(){var e=Object(r.a)(),t=null==e?void 0:e.SessionSettings,n=null==t?void 0:t.IsExplicitLogon,c=null==t?void 0:t.IsSubstrateSearchServiceAvailable;return!(a.a.fallbackToFindPeople||!Object(i.f)("rp-3SPeopleSuggestions")||n||!c)}}}]);
//# sourceMappingURL=owa.RecipientCache.js.map
self.scriptsLoaded['owa.RecipientCache.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.RecipientCache.js'] = (new Date()).getTime();