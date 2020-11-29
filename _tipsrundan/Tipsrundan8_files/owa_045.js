self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailStoreActions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[359],{1052:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e[e.OptionsNotLoaded=0]="OptionsNotLoaded",e[e.OptionsLoading=1]="OptionsLoading",e[e.OptionsLoaded=2]="OptionsLoaded"}(a||(a={}))},1056:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(4),o=t(877),i=Object(a.action)("APPLY_DEFAULT_OPTIONS_ON_LOAD_FAIL",(function(e){return void 0===e&&(e=Object(o.a)()),{defaultOptions:e}}))},1098:function(e,n,t){"use strict";t.d(n,"e",(function(){return"{id}"})),t.d(n,"f",(function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"})),t.d(n,"a",(function(){return"data-custom"})),t.d(n,"c",(function(){return"originalsrc"})),t.d(n,"b",(function(){return"data-loadstatus"})),t.d(n,"d",(function(){return"pending"}))},13381:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t(833),i=t(4260),r=t(103),s=function(e,n){var t=e,a=n;t.ToRecipients=a.ToRecipients,t.CcRecipients=a.CcRecipients,t.BccRecipients=a.BccRecipients};function d(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,t,r;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return(n=Object(i.a)()).MaximumRecipientsToReturn=0,[4,Object(o.h)([e.ItemId.Id],n,"ItemPart")];case 1:return t=a.sent(),Object(o.c)(t[0])&&(r=t[0],s(e,r.Items[0])),[2]}}))}))}s=Object(r.action)("updateItemRecipients")(s);var u=t(191),c=t(1905),l=Object(r.action)("getItemTailoredXpData")(Object(r.select)({items:function(){return o.x.items}})((function(e,n){var t=e.ItemId.Id,a=e.TailoredXpEntitiesChangeNumber;if(a&&a>0){var i=n.items.get(t),s=(null==i?void 0:i.TailoredXpEntitiesChangeNumber)?i.TailoredXpEntitiesChangeNumber:0;if((!i||s<a)&&!e.TailoredXpEntities){var d=new u.a("RPPerfGetTailoredXpData"),l=Object(c.a)("TXPLoadMail");Object(o.w)(t).then(Object(r.action)("updateTailoredXpEntities")((function(e){var a=n.items.get(t);a&&(a.TailoredXpEntities=e.TailoredXpEntities,a.TailoredXpCalendarEventIds=e.TailoredXpCalendarEventIds,a.TailoredXpEntitiesStatus=e.TailoredXpEntitiesStatus,a.EntityNamesMap=e.EntityNamesMap),d.end(),l.end()}))).catch((function(e){d.endWithError("ServerError",e),l.endWithError("ServerError",e)}))}}}))),f=t(7516);function m(e){return!!e.YammerNotification&&(Object(u.o)("Yammer_PrefetchHit"),f.a.import().then((function(e){return e()})),!0)}function g(e){return e&&"Success"!=e.ResponseClass?[e.ResponseCode,e.StackTrace]:[null,null]}var p=[{name:"ItemClass",shouldInitializeUndefinedToNull:!1},{name:"LastModifiedTime",shouldInitializeUndefinedToNull:!1},{name:"DateTimeReceived",shouldInitializeUndefinedToNull:!1},{name:"ParentFolderId",shouldInitializeUndefinedToNull:!1},{name:"SystemCategories",shouldInitializeUndefinedToNull:!1},{name:"Hashtags",shouldInitializeUndefinedToNull:!1},{name:"PredictedActionReasons",shouldInitializeUndefinedToNull:!1},{name:"Flag",shouldInitializeUndefinedToNull:!1},{name:"IsRead",shouldInitializeUndefinedToNull:!1},{name:"Size",shouldInitializeUndefinedToNull:!1},{name:"IsClutter",shouldInitializeUndefinedToNull:!1},{name:"IconIndex",shouldInitializeUndefinedToNull:!1},{name:"Categories",shouldInitializeUndefinedToNull:!0},{name:"Likers",shouldInitializeUndefinedToNull:!0},{name:"LikeCount",shouldInitializeUndefinedToNull:!0},{name:"AdjacentMeetings",shouldInitializeUndefinedToNull:!0},{name:"ConflictingMeetings",shouldInitializeUndefinedToNull:!0},{name:"DeferredSendTime",shouldInitializeUndefinedToNull:!0},{name:"IsSubmitted",shouldInitializeUndefinedToNull:!0}],v=function(e){p.forEach((function(n){n.shouldInitializeUndefinedToNull&&void 0===e[n.name]&&(e[n.name]=null)}))};function S(e){return["PrefetchFirstN","PrefetchSingleRow","PrefetchRowInCache","PrefetchAdjacentRowsOnDelay"].includes(e)}var I=function(e,n){Object.keys(n).forEach((function(t){void 0===e[t]&&(e[t]=n[t])}))},b=t(834);var h=t(3569);function O(e){Object(h.a)()&&function(e,n){var t;e&&n&&(e.AdditionalProperties||(e.AdditionalProperties=[]),(t=e.AdditionalProperties).push.apply(t,Object(a.__spread)(n)))}(e,[Object(b.a)({FieldURI:"AmpHtmlBody"})])}var T=t(4852),C=t(1657),A=t(2519),w=t(48),y=t(4843),j=t(2625),E=t(241),P="X-OWA-ActionSource";var x=Object(r.action)("parseItemResponse")((function(e,n){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,i,r;return Object(a.__generator)(this,(function(s){switch(s.label){case 0:return(t=o.x.items.get(n.Id))&&I(e,t),Object(T.a)()&&m(e),v(e),i=Object(a.__assign)(Object(a.__assign)({Smime:null,TranslationData:{isShowingTranslation:!1,isTranslatable:!1,isTranslating:!1,shouldGetFeedback:!1,isShowingSubjectTranslation:!1,isShowingForwardContentTranslation:!1,isForwardContentTranslatable:!1,manuallyTranslated:!1,userLanguage:null,isWrongLanguage:null},adaptiveCardDetails:null},e),{MailboxInfo:n.mailboxInfo,SmartReplyData:null,SmartTimeData:null,SmartTaskData:null,SmartTimeExtendedProperty:null,AttachmentSuggestions:null,ContextualAttachmentSuggestions:null,smartPillFeedbackSubmitted:!1,YammerThreadId:null,itemCLPInfo:null,SIGSData:{SmartPillData:null}}),o.x.items.set(n.Id,i),r=o.x.items.get(n.Id),l(r),Object(A.a)(t)?[4,C.l.importAndExecute(r,t)]:[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}}))}))}));function N(e,n,t,r){var s,d;t&&(d=t.addCheckmark("request_start"));var u={};E(u,null===(s=e.mailboxInfo)||void 0===s?void 0:s.requestOptions);var c=u.headers?new Headers(u.headers):new Headers;r&&c.set(j.c,j.d),(null==u?void 0:u.headers)&&c.set(P,n),u.headers=c,u.datapoint={customData:{actionSource:n}};var l=Object(i.a)();return O(l),Object(y.a)(l),Object(o.d)(l),Object(o.h)([e.Id],l,"ItemNormalizedBody","V2017_08_18",u).then((function(i){if(t){var r=t.addCheckmark("request_end");t.addCustomData({requestTime:r-d})}if(Object(o.c)(i[0])){var s=i[0];return x(s.Items[0],e).then((function(){return o.x.items.get(e.Id)}))}switch(n){case"PrefetchFirstN":case"PrefetchSingleRow":case"PrefetchRowInCache":case"PrefetchAdjacentRowsOnDelay":break;case"LoadItemReadingPane":case"LoadItemPreviewPane":default:w.d.warn(n+": "+i[0].MessageText)}var u=Object(a.__read)(g(i[0]),2),c=u[0],l=u[1];return c?Promise.reject(new Error("ErrorResponseCode="+c+", StackTrace="+l)):Promise.resolve(null)})).catch((function(e){return e.message+=", ActionSource="+n,S(n)?Promise.resolve():Promise.reject(e)}))}var R=t(1505),D=Object(r.action)("getConversationTailoredXpData")(Object(r.select)({items:function(){return o.x.items}})((function(e,n,t){Object(o.f)(e,n).Items.forEach((function(e){l(e,t)}))}))),L=t(1373);function M(e,n){return{conversationId:e,conversationNodeIds:[],conversationSortOrder:n,canLoadMore:!1,isLoadMoreInProgress:!1,maxItemsToReturn:L.a,loadingState:{isLoading:!1},syncState:"",isPendingDelete:!1,pendingRequestState:null,canDelete:null,subjectTranslationData:{isShowingTranslation:!1}}}var _=t(1684),k=t(2315),F="ChronologicalNewestOnBottom",U="PLACEHOLDER_NODE_INTERNET_MESSAGE_ID",z=function(e){return e.InternetMessageId},q=function(e){return e.ItemId.Id};function B(e,n,t){var o=function(e,n){var t=[];return e.forEach((function(e){t.push(n(e))})),t}(n,t);if(function(e,n){if(e.length!=n.length)return!0;for(var t=0;t<e.length;t++)if(e[t]!=n[t])return!0;return!1}(e,o)){var i=function(e,n){var t=[];return e.forEach((function(e){n.indexOf(e)<0&&t.push(e)})),t}(e,o),r=e.length;return e.splice.apply(e,Object(a.__spread)([0,r],o)),[!0,i]}return[!1,[]]}function V(e,n){Object(_.a)(e,1)}function G(e,n,t,i,r,s){!function(e,n,t,i,r){if(e.length>0){var s=r==F,d=s?e.length-1:0,u=t.get(e[d]);if(u.localLieState==o.a.Pending){var c=!0,l=function(e,n){return n.internetMessageId==U?n.itemIds&&n.itemIds.length>0?function(e,n){var t,o,i,r;try{for(var s=Object(a.__values)(e),d=s.next();!d.done;d=s.next()){var u=d.value;try{for(var c=(i=void 0,Object(a.__values)(u.Items)),l=c.next();!l.done;l=c.next()){if(l.value.ItemId.Id==n)return u}}catch(e){i={error:e}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(i)throw i.error}}}}catch(e){t={error:e}}finally{try{d&&!d.done&&(o=s.return)&&o.call(s)}finally{if(t)throw t.error}}return null}(e,n.itemIds[0]):null:function(e,n){var t,o;try{for(var i=Object(a.__values)(e),r=i.next();!r.done;r=i.next()){var s=r.value;if(z(s)==n)return s}}catch(e){t={error:e}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}return null}(e,n.internetMessageId)}(n,u);l&&(l.Items[0].IsDraft?n.splice(n.indexOf(l),1):(c=!1,function(e,n){e.localLieState=o.a.Complete,e.hasQuotedText=n.HasQuotedText,e.isQuotedTextChanged=n.IsQuotedTextChanged,e.quotedTextList=n.QuotedTextList}(u,l),function(e,n){var t=n.get(e.itemIds[0]);t&&delete t.localLieSentTime}(u,i))),c&&(l={InternetMessageId:u.internetMessageId,Items:[i.get(u.itemIds[0])]},s?n.push(l):n.unshift(l))}}}(e,n,t,i,r);var d=B(e,n,z)[1],u={added:[],removed:[],modified:[]},c={isReadChangedToUnread:[]};return n.forEach((function(e){var n,r=z(e),d=t.get(r);d?(e.ParentInternetMessageId&&(d.parentInternetMessageId=e.ParentInternetMessageId),e.QuotedTextList&&(d.quotedTextList=e.QuotedTextList),e.QuotedTextState&&(d.quotedTextState=e.QuotedTextState),e.HasQuotedText&&(d.hasQuotedText=!0),e.IsQuotedTextChanged&&(d.isQuotedTextChanged=!0),n=d):(t.set(r,{conversationId:s.Id,internetMessageId:r,itemIds:[],quotedTextList:e.QuotedTextList,hasQuotedText:e.HasQuotedText,isQuotedTextChanged:e.IsQuotedTextChanged,quotedTextState:e.QuotedTextState,localLieState:o.a.None,parentInternetMessageId:e.ParentInternetMessageId}),n=t.get(r),u.added.push(r));var l=n.itemIds,f=Object(a.__read)(B(l,e.Items,q),2),m=f[0],g=f[1];d&&m&&u.modified.push(r),d&&!m&&function(e,n,t,o){var i,r;try{for(var s=Object(a.__values)(n),d=s.next();!d.done;d=s.next()){var u=d.value,c=t.get(u.ItemId.Id);c&&c.IsRead&&!u.IsRead&&o.isReadChangedToUnread.push(e)}}catch(e){i={error:e}}finally{try{d&&!d.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}}(r,e.Items,i,c),function(e,n,t,o,i){n.forEach((function(n){var t=n.ItemId.Id,r=o.get(t);v(n),n.ContainsOnlyMandatoryProperties?r?p.forEach((function(e){void 0!==n[e.name]&&(r[e.name]=n[e.name])})):e.splice(e.indexOf(t),1):(r&&I(n,r),o.set(t,Object(a.__assign)(Object(a.__assign)({TranslationData:{isShowingTranslation:!1,isTranslatable:!1,isTranslating:!1,shouldGetFeedback:!1,isShowingForwardContentTranslation:!1,isForwardContentTranslatable:!1,isShowingSubjectTranslation:!1,manuallyTranslated:!1,userLanguage:null,isWrongLanguage:null},adaptiveCardDetails:null},n),{MailboxInfo:i,SmartReplyData:null,SmartTimeData:null,SmartTaskData:null,SmartTimeExtendedProperty:null,AttachmentSuggestions:null,ContextualAttachmentSuggestions:null,smartPillFeedbackSubmitted:!1,YammerThreadId:null,itemCLPInfo:null,SIGSData:{SmartPillData:null}})))})),t.forEach((function(e){V(e)}))}(l,e.Items,g,i,s.mailboxInfo)})),d.forEach((function(e){!function(e,n,t){n.get(e).itemIds.forEach((function(e){V(e)})),n.delete(e)}(e,t),u.removed.push(e)})),[u,c]}var H=Object(r.action)("parseConversationResponse")(Object(r.select)({conversations:function(){return o.e},conversationNodes:function(){return o.x.conversationNodes},items:function(){return o.x.items}})((function(e,n,t,i){var r=t.Id,s=i.conversations.get(r);s||(s=M(t,n)),i.conversations.add(r,s),s=i.conversations.get(r);var d,u=!(e&&"Success"==e.ResponseClass);if(void 0===s.loadingState.hasLoadFailed&&(s.loadingState.hasLoadFailed=u),s.loadingState.hasLoadFailed&&Object(k.a)(r),!u){var c=e.Conversation;if(!c.ConversationNodes)return w.d.warn("GCI response has no ConversationNodes, but TotalConversationNodesCount is "+c.TotalConversationNodesCount),s.loadingState.hasLoadFailed=!0,void Object(k.a)(r);if(c.ConversationNodes.length==c.TotalConversationNodesCount)s.syncState=c.SyncState;else{var l=c.ConversationNodes.length,f=c.TotalConversationNodesCount;w.d.warn("Count of conversationNodes ("+l+") returned from GetConversationItems doesn't match TotalConversationNodesCount ("+f+")")}s.canLoadMore=c.RemainingConversationNodesCount>0||s.maxItemsToReturn<W&&c.ConversationNodes&&!(c.ConversationNodes.length<s.maxItemsToReturn),s.isLoadMoreInProgress=!1,s.canDelete=c.CanDelete||null,function(e,n,t,a){for(var o={},i=n.length,r=t==F,s=r?0:i-1,d=r?1:-1,u=function(){var t=n[s],i=e.get(t.InternetMessageId);i&&i.conversationId!=a.Id||o[t.InternetMessageId]?(t.InternetMessageId+=t.Items[0].ItemId.Id,t.Items.forEach((function(e){return e.InternetMessageId=t.InternetMessageId}))):o[t.InternetMessageId]=!0,s+=d};s>=0&&s<i;)u()}(i.conversationNodes,c.ConversationNodes,n,t),D(c.ConversationNodes,n),Object(T.a)()&&function(e,n){Object(o.f)(e,n).Items.some((function(e){return m(e)}))}(c.ConversationNodes,n);var g=Object(a.__read)(G(s.conversationNodeIds,c.ConversationNodes,i.conversationNodes,i.items,n,t),2),p=g[0],v=g[1];((d=p).added.length>0||d.removed.length>0||d.modified.length>0)&&Object(k.a)(r,p),function(e){return e.isReadChangedToUnread.length>0}(v)&&Object(k.b)(r,v)}}))),Q=t(19);var X=t(241),W=100,Y={};var Z=Object(r.action)("processGetConversationItemsResponse")((function(e,n,t,a){H(t,e,n);var o=a.get(n.Id);o.loadingState.isLoading=!1,delete Y[n.Id],o.pendingRequestState&&K(n,o.pendingRequestState.actionSource)})),K=Object(r.action)("loadConversation")(Object(r.select)({conversations:function(){return o.e}})((function(e,n,t,r){var s,d,u=Promise.resolve(),c=Object(Q.a)().UserOptions.ConversationSortOrderReact,l=e.Id,f=r.conversations.get(l);if(f&&f.conversationSortOrder!=c&&(Object(R.a)(l),f=null),f&&!f.loadingState.hasLoadFailed||(f=M(e,c)),r.conversations.add(l,f),function(e,n){e.pendingRequestState?e.pendingRequestState.shouldUseEmptySyncState=e.pendingRequestState.shouldUseEmptySyncState||!e.syncState:e.pendingRequestState={shouldUseEmptySyncState:!e.syncState},e.pendingRequestState.actionSource=n}(f=r.conversations.get(l),n),t&&(s=t.addCheckmark("request_start")),f.loadingState.isLoading&&(S(n)||Y[l]))Y[l]&&(u=Y[l],t&&t.addCustomData({pendingRequest:!0}));else{var m=f.pendingRequestState.shouldUseEmptySyncState;f.loadingState.isLoading=!0,f.pendingRequestState=null;var p=f.conversationId.mailboxInfo,v={};if(X(v,null==p?void 0:p.requestOptions),null==v?void 0:v.headers){var I=new Headers(v.headers);I.set("X-OWA-ActionSource",n),v.headers=I,v.datapoint={customData:{actionSource:n}}}var b=((d=Object(i.a)()).ExcludeBindForInlineAttachments=!0,d.CalculateOnlyFirstBody=!0,d);O(b),u=Object(o.g)(f.conversationId,b,f.syncState,f.maxItemsToReturn,c,m,"ReturnRootNode",v).then((function(n){if(t){var o=t.addCheckmark("request_end");t.addCustomData({requestTime:o-s})}Z(c,e,n,r.conversations);var i=Object(a.__read)(g(n),2),d=i[0],u=i[1];return d?Promise.reject(new Error("ErrorResponseCode="+d+", StackTrace="+u)):Promise.resolve()})).catch((function(t){return Z(c,e,null,r.conversations),t.message+=", ActionSource="+n,S(n)?Promise.resolve():Promise.reject(t)})),S(n)||(Y[l]=u)}return u})));t.d(n,"loadAllRecipientsForItem",(function(){return d})),t.d(n,"loadItem",(function(){return N})),t.d(n,"loadConversation",(function(){return K}))},1651:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(840),o=t(74);function i(){var e=!0;if(Object(o.t)()){var n=Object(a.d)(a.a.ExternalImages);e=null===n.externalImagesSelectedOption||0===n.externalImagesSelectedOption}else{var t=Object(o.h)().PolicySettings;e=void 0===t.ExternalImageProxyEnabled||t.ExternalImageProxyEnabled}return e}},1657:function(e,n,t){"use strict";t.d(n,"m",(function(){return i})),t.d(n,"l",(function(){return r})),t.d(n,"o",(function(){return s})),t.d(n,"q",(function(){return d})),t.d(n,"p",(function(){return u})),t.d(n,"b",(function(){return c})),t.d(n,"e",(function(){return l})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return m})),t.d(n,"k",(function(){return g})),t.d(n,"n",(function(){return p})),t.d(n,"r",(function(){return v})),t.d(n,"c",(function(){return S})),t.d(n,"d",(function(){return I})),t.d(n,"j",(function(){return b})),t.d(n,"f",(function(){return h})),t.d(n,"i",(function(){return O})),t.d(n,"a",(function(){return T}));var a=t(86),o=(t(1658),new a.c((function(){return Promise.all([t.e(677),t.e(7),t.e(14),t.e(34),t.e(583)]).then(t.bind(null,3305))}))),i=new a.a(o,(function(e){return e.onSmimeItemAttachmentOpened})),r=new a.a(o,(function(e){return e.mergeSmimeDecodedMessageProperties})),s=(new a.b(o,(function(e){return e.fetchAndDecodeSmimeMessage})),new a.b(o,(function(e){return e.setSmimePropertiesInDraftMessage}))),d=new a.b(o,(function(e){return e.trySetSmimeProperties})),u=new a.b(o,(function(e){return e.tryAddSmimeProperties})),c=new a.b(o,(function(e){return e.createMailResponseBodyContent})),l=new a.b(o,(function(e){return e.downloadSmimeAttachment})),f=new a.b(o,(function(e){return e.getMergedSmimeViewState})),m=new a.b(o,(function(e){return e.getMergedSmimeViewStateForDraft})),g=new a.b(o,(function(e){return e.isSmimeItemDecoding})),p=new a.b(o,(function(e){return e.previewSmimeAttachment})),v=new a.b(o,(function(e){return e.updateSmimeAttachmentIds})),S=new a.b(o,(function(e){return e.createSmimeAttachmentsFromFiles})),I=new a.b(o,(function(e){return e.createSmimeAttachmentsViaSmimeQueueManager})),b=new a.b(o,(function(e){return e.initializeAttachmentStateForSmimeAttachments})),h=new a.b(o,(function(e){return e.getAttachmentsForSmimeResponse})),O=new a.b(o,(function(e){return e.getSmimeAttachmentsForRequest})),T=Object(a.d)(o,(function(e){return e.SignatureDetails}))},1658:function(e,n,t){"use strict";var a=t(4);n.a=Object(a.action)("saveSigningCertificate",(function(e,n){return{smimeViewState:e,signingCertRawData:n}}))},1905:function(e,n,t){"use strict";var a=t(191),o=t(231),i={tenantTokens:Object(a.e)(),isCore:!0};function r(e,n,t){var r=new o.a(e,n,i);t&&r.addCosmosOnlyData(t),a.k.importAndExecute(r)}function s(e){return new a.a(e,i)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return s}))},2315:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i}));var a=t(4),o=Object(a.action)("CONVERSATION_READY_TO_LOAD",(function(e,n){return{conversationId:e,nodeIdCollectionChange:n}})),i=Object(a.action)("UPDATE_ITEM_MANDATORY_PROPERTIES",(function(e,n){return{conversationId:e,nodeIdCollectionWithItemMandatoryPropertiesChanged:n}}))},2519:function(e,n,t){"use strict";n.a=function(e){var n;return null===(n=null==e?void 0:e.Smime)||void 0===n?void 0:n.isDecoded}},2625:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return s}));var a="X-OWA-SmimeInstalled",o="1",i="SmimeWithoutActiveX",r="message/rfc822",s="ErrorSmimeSendCancelled"},327:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return d}));var a=t(182),o=t(211),i=t(210),r=t(207);function s(e){return Object(a.a)({RequestServerVersion:"Exchange2015",TimeZoneContext:Object(o.a)({TimeZoneDefinition:Object(i.a)({Id:null!=e?e:"Pacific Standard Time"})})})}function d(e,n,t){return Object(r.a)({PropertySetId:e,PropertyName:n,PropertyType:t})}},3569:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(840),o=t(54),i=t(205);function r(){var e=Object(a.d)(a.a.AmpDeveloper);return Object(i.a)()&&Object(o.f)("rp-amp")&&e.enabled}},3771:function(e,n,t){"use strict";var a;!function(e){e.None="None",e.OwaProxy="OwaProxy",e.ConnectorsProxy="ConnectorsProxy",e.Compose="Compose",e.OwaAndConnectorsProxy="OwaAndConnectorsProxy",e.OwaConnectorsProxyAndCompose="OwaConnectorsProxyAndCompose"}(a||(a={})),n.a=a},4260:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var a,o,i=t(387),r=t(19),s=t(1098),d=t(1651),u=t(3771),c=t(834),l=t(207),f=t(327),m="rps_"+(a=1,o=65535,Math.ceil(Math.random()*(o-a)+a)).toString(16),g=2097152,p=20,v="ExplicitMessageCard",S="00062008-0000-0000-C000-000000000046";function I(){var e,n=Object(i.a)({BaseShape:"IdOnly",AddBlankTargetToLinks:!0,BlockContentFromUnknownSenders:(e=Object(r.a)(),!!e.SafetyUserOptions&&e.SafetyUserOptions.BlockContentFromUnknownSenders),BlockExternalImagesIfSenderUntrusted:!0,ClientSupportsIrm:!0,CssScopeClassName:m,FilterHtmlContent:!0,FilterInlineSafetyTips:!0,InlineImageCustomDataTemplate:s.e,InlineImageUrlTemplate:s.f,MaximumBodySize:g,MaximumRecipientsToReturn:p,ImageProxyCapability:Object(d.a)()?u.a.OwaAndConnectorsProxy:u.a.None,AdditionalProperties:[Object(c.a)({FieldURI:"CanDelete"}),Object(l.a)(Object(f.a)(S,v,"String"))]});return n.InlineImageUrlOnLoadTemplate="",n}},4843:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(54),o=t(207);function i(e){Object(a.f)("cmp-clp")&&e.AdditionalProperties.push(Object(o.a)({PropertyName:"msip_labels",DistinguishedPropertySetId:"InternetHeaders",PropertyType:"String"}))}},4852:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a,o=t(54),i=t(41),r=t(191),s=["office.com","office365.com"];function d(){return Object(o.f)("rp-yammer")&&function(){if(null!=a)return a;var e=Object(i.f)();e&&Object(r.o)("Yammer_UnsupportedBrowser");var n=s.some((function(e){return-1!=window.location.host.indexOf(e)}));n||Object(r.o)("Yammer_UnsupportedDomain");return a=!e&&n}()}},7516:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(86),o=new a.c((function(){return Promise.all([t.e(83),t.e(7),t.e(400)]).then(t.bind(null,8894))})),i=new a.b(o,(function(e){return e.bootstrapYammerIfNeeded}))},840:function(e,n,t){"use strict";var a=t(86),o=t(1056),i=t(922),r=t(14),s=t(4),d=t(842),u=[d.a.SurfaceActions];Object(s.mutator)(o.a,(function(e){var n=e.defaultOptions;u.forEach((function(e){n[e]&&Object(r.extendObservable)(Object(i.a)().options[e],n[e])}))}));var c,l=t(925),f=t(877);!function(e){e[e.Work=1]="Work",e[e.Life=2]="Life"}(c||(c={}));t.d(n,"e",(function(){return g})),t.d(n,"h",(function(){return p})),t.d(n,"f",(function(){return v})),t.d(n,"g",(function(){return S})),t.d(n,"d",(function(){return l.a})),t.d(n,"c",(function(){return f.a})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return d.a}));var m=new a.c((function(){return t.e(385).then(t.bind(null,13478))})),g=new a.a(m,(function(e){return e.createOrUpdateOptionsForFeature})),p=new a.a(m,(function(e){return e.updateAddinPinStatus})),v=new a.b(m,(function(e){return e.getServerOptionsForFeature})),S=new a.a(m,(function(e){return e.loadOptions}))},842:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e[e.TestFeature=1]="TestFeature",e[e.SmartSuggestions=2]="SmartSuggestions",e[e.DiverseEmojis=4]="DiverseEmojis",e[e.SurfaceActions=5]="SurfaceActions",e[e.SkypeNotifications=6]="SkypeNotifications",e[e.WebPushNotifications=7]="WebPushNotifications",e[e.Confetti=8]="Confetti",e[e.GdprAdsPrefs=9]="GdprAdsPrefs",e[e.CalendarSurfaceAddins=10]="CalendarSurfaceAddins",e[e.ExternalImages=11]="ExternalImages",e[e.EventCapture=12]="EventCapture",e[e.Translation=14]="Translation",e[e.CalendarSurfaceOptions=15]="CalendarSurfaceOptions",e[e.TxpEventNotifications=16]="TxpEventNotifications",e[e.MentionEventNotifications=17]="MentionEventNotifications",e[e.ComposeAssistance=18]="ComposeAssistance",e[e.ActivityFeed=19]="ActivityFeed",e[e.AmpDeveloper=20]="AmpDeveloper",e[e.CalendarHelp=21]="CalendarHelp",e[e.LinkedInViewProfile=22]="LinkedInViewProfile",e[e.Bohemia=23]="Bohemia",e[e.GdprAdsV2=24]="GdprAdsV2",e[e.Proofing=25]="Proofing"}(a||(a={}))},877:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(205),o=t(842),i=t(54);function r(){var e;return(e={})[o.a.SmartSuggestions]={smartSuggestionsEnabled:!0,browserLocationEnabled:!1},e[o.a.DiverseEmojis]={diverseEmojisSelectedSkinTone:""},e[o.a.SurfaceActions]={readSurfaceActions:["Reply","ReplyAll","Forward"].concat(Object(a.a)()?[]:["LikeUnlike"]),readSurfaceAddins:[],composeSurfaceActions:["AddAttachment","AddInlineImage","AddEmoji","ToggleDictation","ProofingOptions","ToggleRibbon"],composeSurfaceAddins:[]},e[o.a.SkypeNotifications]={skypeMessageNotification:1,skypeCallingNotification:1},e[o.a.Confetti]={confettiEnabled:!0},e[o.a.ComposeAssistance]={composeAssistanceEnabled:!0},e[o.a.GdprAdsPrefs]={feature:o.a.GdprAdsPrefs,consentString:null,allowStorageAndAccess:!1,allowPersonalization:!1,allowAdSelectionDeliveryReporting:!1,allowContentSelectionDeliveryReporting:!1,allowMeasurement:!1},e[o.a.CalendarSurfaceAddins]={calendarSurfaceAddins:[]},e[o.a.ExternalImages]={externalImagesSelectedOption:0},e[o.a.EventCapture]={autoCollectionEnabled:!1},e[o.a.Translation]={translationMode:0,targetLanguage:"",excludedLanguages:[]},e[o.a.CalendarSurfaceOptions]={agendaPaneIsClosed:!1,roamingTimeZoneTeachingMomentDisplayed:!1,bannedRoamingTimeZone:null,lastKnownRoamingTimeZone:null,roamingTimeZoneNotificationsIsDisabled:!1,allDayWellHeight:0,numDaysInDayRange:1,workLifeView:3},e[o.a.AmpDeveloper]={enabled:Object(i.f)("rp-ampDefault"),allowedSender:[]},e[o.a.CalendarHelp]={calendarHelpEnabled:!1},e[o.a.LinkedInViewProfile]={dismissed:!1},e[o.a.Bohemia]={bohemiaEnabled:Object(i.f)("rp-bohemiaDefaultOption")},e[o.a.GdprAdsV2]={feature:o.a.GdprAdsV2,consentString:null,allowStorageAndAccess:!0,allowPersonalization:!0,allowAdSelectionDeliveryReporting:!0,allowContentSelectionDeliveryReporting:!0,allowMeasurement:!0,disselectedVendorId:[],selectedVendorId:[]},e[o.a.Proofing]={feature:o.a.Proofing,spellCheckEnabled:!0,grammarEnabled:!0,writingRefinementsEnabled:!0,proofingLocale:void 0},e}},922:function(e,n,t){"use strict";var a,o=t(842),i=t(1052),r=t(4);n.a=Object(r.createStore)("owsOptionsStore",{options:(a={},a[o.a.SmartSuggestions]={feature:o.a.SmartSuggestions,smartSuggestionsEnabled:!1,browserLocationEnabled:!1},a[o.a.DiverseEmojis]={feature:o.a.DiverseEmojis,diverseEmojisSelectedSkinTone:""},a[o.a.SurfaceActions]={feature:o.a.SurfaceActions,readSurfaceActions:[],readSurfaceAddins:[],composeSurfaceActions:[],composeSurfaceAddins:[]},a[o.a.SkypeNotifications]={feature:o.a.SkypeNotifications,skypeMessageNotification:1,skypeCallingNotification:1},a[o.a.WebPushNotifications]={feature:o.a.WebPushNotifications,enabled:!1,applicationServerKey:null},a[o.a.Confetti]={feature:o.a.Confetti,confettiEnabled:!1},a[o.a.GdprAdsPrefs]={feature:o.a.GdprAdsPrefs,consentString:null,allowStorageAndAccess:!1,allowPersonalization:!1,allowAdSelectionDeliveryReporting:!1,allowContentSelectionDeliveryReporting:!1,allowMeasurement:!1},a[o.a.GdprAdsV2]={feature:o.a.GdprAdsV2,consentString:null,allowStorageAndAccess:!0,allowPersonalization:!0,allowAdSelectionDeliveryReporting:!0,allowContentSelectionDeliveryReporting:!0,allowMeasurement:!0,disselectedVendorId:[],selectedVendorId:[]},a[o.a.CalendarSurfaceAddins]={feature:o.a.CalendarSurfaceAddins,calendarSurfaceAddins:[]},a[o.a.ExternalImages]={feature:o.a.ExternalImages,externalImagesSelectedOption:null},a[o.a.EventCapture]={autoCollectionEnabled:!1},a[o.a.Translation]={feature:o.a.Translation,translationMode:0,targetLanguage:"",excludedLanguages:[]},a[o.a.CalendarSurfaceOptions]={feature:o.a.CalendarSurfaceOptions,agendaPaneIsClosed:!0,roamingTimeZoneTeachingMomentDisplayed:!0,bannedRoamingTimeZone:void 0,lastKnownRoamingTimeZone:void 0,roamingTimeZoneNotificationsIsDisabled:void 0,allDayWellHeight:0,numDaysInDayRange:1,workLifeView:3},a[o.a.MentionEventNotifications]={feature:o.a.MentionEventNotifications,enabled:!1},a[o.a.TxpEventNotifications]={feature:o.a.TxpEventNotifications,enabled:!1},a[o.a.ComposeAssistance]={feature:o.a.ComposeAssistance,composeAssistanceEnabled:!1},a[o.a.AmpDeveloper]={feature:o.a.AmpDeveloper,enabled:!0,allowedSender:[]},a[o.a.ActivityFeed]={feature:o.a.ActivityFeed,OWASurfaceOptions:{SupportedTypes:[],DisabledInFeedPanel:[]}},a[o.a.LinkedInViewProfile]={dismissed:!1},a[o.a.CalendarHelp]={feature:o.a.CalendarHelp,calendarHelpEnabled:!1},a[o.a.Bohemia]={feature:o.a.Bohemia,bohemiaEnabled:!1},a[o.a.Proofing]={feature:o.a.Proofing,spellCheckEnabled:!0,grammarEnabled:!0,writingRefinementsEnabled:!1,proofingLocale:void 0},a),loadState:i.a.OptionsNotLoaded})},925:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(922);function o(e){return Object(a.a)().options[e]}}}]);
//# sourceMappingURL=owa.MailStoreActions.js.map
self.scriptsLoaded['owa.MailStoreActions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailStoreActions.js'] = (new Date()).getTime();