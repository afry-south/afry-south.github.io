self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailStoreActions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[362],{1062:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e[e.OptionsNotLoaded=0]="OptionsNotLoaded",e[e.OptionsLoading=1]="OptionsLoading",e[e.OptionsLoaded=2]="OptionsLoaded"}(a||(a={}))},1066:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(4),o=t(882),r=Object(a.action)("APPLY_DEFAULT_OPTIONS_ON_LOAD_FAIL",(function(e){return void 0===e&&(e=Object(o.a)()),{defaultOptions:e}}))},1110:function(e,n,t){"use strict";t.d(n,"e",(function(){return"{id}"})),t.d(n,"f",(function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"})),t.d(n,"a",(function(){return"data-custom"})),t.d(n,"c",(function(){return"originalsrc"})),t.d(n,"b",(function(){return"data-loadstatus"})),t.d(n,"d",(function(){return"pending"}))},13456:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t(838),r=t(4285),i=t(104),s=function(e,n){var t=e,a=n;t.ToRecipients=a.ToRecipients,t.CcRecipients=a.CcRecipients,t.BccRecipients=a.BccRecipients};function d(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,t,i;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return(n=Object(r.a)()).MaximumRecipientsToReturn=0,[4,Object(o.h)([e.ItemId.Id],n,"ItemPart")];case 1:return t=a.sent(),Object(o.c)(t[0])&&(i=t[0],s(e,i.Items[0])),[2]}}))}))}s=Object(i.action)("updateItemRecipients")(s);var c=t(165),u=t(1924),l=Object(i.action)("getItemTailoredXpData")(Object(i.select)({items:function(){return o.x.items}})((function(e,n){var t=e.ItemId.Id,a=e.TailoredXpEntitiesChangeNumber;if(a&&a>0){var r=n.items.get(t),s=(null==r?void 0:r.TailoredXpEntitiesChangeNumber)?r.TailoredXpEntitiesChangeNumber:0;if((!r||s<a)&&!e.TailoredXpEntities){var d=new c.a("RPPerfGetTailoredXpData"),l=Object(u.a)("TXPLoadMail");Object(o.w)(t).then(Object(i.action)("updateTailoredXpEntities")((function(e){var a=n.items.get(t);a&&(a.TailoredXpEntities=e.TailoredXpEntities,a.TailoredXpCalendarEventIds=e.TailoredXpCalendarEventIds,a.TailoredXpEntitiesStatus=e.TailoredXpEntitiesStatus,a.EntityNamesMap=e.EntityNamesMap),d.end(),l.end()}))).catch((function(e){d.endWithError("ServerError",e),l.endWithError("ServerError",e)}))}}}))),f=t(7557);function m(e){return!!e.YammerNotification&&(Object(c.o)("Yammer_PrefetchHit"),f.a.import().then((function(e){return e()})),!0)}function g(e){return e&&"Success"!=e.ResponseClass?[e.ResponseCode,e.StackTrace]:[null,null]}var p=[{name:"ItemClass",shouldInitializeUndefinedToNull:!1},{name:"LastModifiedTime",shouldInitializeUndefinedToNull:!1},{name:"DateTimeReceived",shouldInitializeUndefinedToNull:!1},{name:"ParentFolderId",shouldInitializeUndefinedToNull:!1},{name:"SystemCategories",shouldInitializeUndefinedToNull:!1},{name:"Hashtags",shouldInitializeUndefinedToNull:!1},{name:"PredictedActionReasons",shouldInitializeUndefinedToNull:!1},{name:"Flag",shouldInitializeUndefinedToNull:!1},{name:"IsRead",shouldInitializeUndefinedToNull:!1},{name:"Size",shouldInitializeUndefinedToNull:!1},{name:"IsClutter",shouldInitializeUndefinedToNull:!1},{name:"IconIndex",shouldInitializeUndefinedToNull:!1},{name:"Categories",shouldInitializeUndefinedToNull:!0},{name:"Likers",shouldInitializeUndefinedToNull:!0},{name:"LikeCount",shouldInitializeUndefinedToNull:!0},{name:"AdjacentMeetings",shouldInitializeUndefinedToNull:!0},{name:"ConflictingMeetings",shouldInitializeUndefinedToNull:!0},{name:"DeferredSendTime",shouldInitializeUndefinedToNull:!0},{name:"IsSubmitted",shouldInitializeUndefinedToNull:!0}],v=function(e){p.forEach((function(n){n.shouldInitializeUndefinedToNull&&void 0===e[n.name]&&(e[n.name]=null)}))};function S(e){return["PrefetchFirstN","PrefetchSingleRow","PrefetchRowInCache","PrefetchAdjacentRowsOnDelay"].includes(e)}var I=function(e,n){Object.keys(n).forEach((function(t){void 0===e[t]&&(e[t]=n[t])}))},b=t(839);var h=t(3593);function O(e){Object(h.a)()&&function(e,n){var t;e&&n&&(e.AdditionalProperties||(e.AdditionalProperties=[]),(t=e.AdditionalProperties).push.apply(t,Object(a.__spread)(n)))}(e,[Object(b.a)({FieldURI:"AmpHtmlBody"})])}var A=t(4885),T=t(1671),C=t(2538),w=t(52),y=t(4876),P=t(2647),j=t(242),E="X-OWA-ActionSource";var x=Object(i.action)("parseItemResponse")((function(e,n){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,r,i;return Object(a.__generator)(this,(function(s){switch(s.label){case 0:return(t=o.x.items.get(n.Id))&&I(e,t),Object(A.a)()&&m(e),v(e),r=Object(a.__assign)(Object(a.__assign)({Smime:null,TranslationData:{isShowingTranslation:!1,isTranslatable:!1,isTranslating:!1,shouldGetFeedback:!1,isShowingSubjectTranslation:!1,isShowingForwardContentTranslation:!1,isForwardContentTranslatable:!1,manuallyTranslated:!1,userLanguage:null,isWrongLanguage:null},adaptiveCardDetails:null},e),{MailboxInfo:n.mailboxInfo,SmartReplyData:null,SmartTimeData:null,SmartTaskData:null,SmartTimeExtendedProperty:null,AttachmentSuggestions:null,ContextualAttachmentSuggestions:null,smartPillFeedbackSubmitted:!1,YammerThreadId:null,itemCLPInfo:null,SIGSData:{SmartPillData:null}}),o.x.items.set(n.Id,r),i=o.x.items.get(n.Id),l(i),Object(C.a)(t)?[4,T.l.importAndExecute(i,t)]:[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}}))}))}));function N(e,n,t,i){var s,d;t&&(d=t.addCheckmark("request_start"));var c={};j(c,null===(s=e.mailboxInfo)||void 0===s?void 0:s.requestOptions);var u=c.headers?new Headers(c.headers):new Headers;i&&u.set(P.c,P.d),(null==c?void 0:c.headers)&&u.set(E,n),c.headers=u,c.datapoint={customData:{actionSource:n}};var l=Object(r.a)();return O(l),Object(y.a)(l),Object(o.d)(l),Object(o.h)([e.Id],l,"ItemNormalizedBody","V2017_08_18",c).then((function(r){if(t){var i=t.addCheckmark("request_end");t.addCustomData({requestTime:i-d})}if(Object(o.c)(r[0])){var s=r[0];return x(s.Items[0],e).then((function(){return o.x.items.get(e.Id)}))}switch(n){case"PrefetchFirstN":case"PrefetchSingleRow":case"PrefetchRowInCache":case"PrefetchAdjacentRowsOnDelay":break;case"LoadItemReadingPane":case"LoadItemPreviewPane":default:w.d.warn(n+": "+r[0].MessageText)}var c=Object(a.__read)(g(r[0]),2),u=c[0],l=c[1];return u?Promise.reject(new Error("ErrorResponseCode="+u+", StackTrace="+l)):Promise.resolve(null)})).catch((function(e){return e.message+=", ActionSource="+n,S(n)?Promise.resolve():Promise.reject(e)}))}var R=t(1522),D=Object(i.action)("getConversationTailoredXpData")(Object(i.select)({items:function(){return o.x.items}})((function(e,n,t){Object(o.f)(e,n).Items.forEach((function(e){l(e,t)}))}))),L=t(1382);function M(e,n){return{conversationId:e,conversationNodeIds:[],conversationSortOrder:n,canLoadMore:!1,isLoadMoreInProgress:!1,maxItemsToReturn:L.a,loadingState:{isLoading:!1},syncState:"",isPendingDelete:!1,pendingRequestState:null,canDelete:null,subjectTranslationData:{isShowingTranslation:!1}}}var _=t(1667),k=t(2339),F="ChronologicalNewestOnBottom",U="PLACEHOLDER_NODE_INTERNET_MESSAGE_ID",q=function(e){return e.InternetMessageId},z=function(e){return e.ItemId.Id};function B(e,n,t){var o=function(e,n){var t=[];return e.forEach((function(e){t.push(n(e))})),t}(n,t);if(function(e,n){if(e.length!=n.length)return!0;for(var t=0;t<e.length;t++)if(e[t]!=n[t])return!0;return!1}(e,o)){var r=function(e,n){var t=[];return e.forEach((function(e){n.indexOf(e)<0&&t.push(e)})),t}(e,o),i=e.length;return e.splice.apply(e,Object(a.__spread)([0,i],o)),[!0,r]}return[!1,[]]}function V(e,n){Object(_.a)(e,1)}function G(e,n,t,r,i,s){!function(e,n,t,r,i){if(e.length>0){var s=i==F,d=s?e.length-1:0,c=t.get(e[d]);if(c.localLieState==o.a.Pending){var u=!0,l=function(e,n){return n.internetMessageId==U?n.itemIds&&n.itemIds.length>0?function(e,n){var t,o,r,i;try{for(var s=Object(a.__values)(e),d=s.next();!d.done;d=s.next()){var c=d.value;try{for(var u=(r=void 0,Object(a.__values)(c.Items)),l=u.next();!l.done;l=u.next()){if(l.value.ItemId.Id==n)return c}}catch(e){r={error:e}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}}}catch(e){t={error:e}}finally{try{d&&!d.done&&(o=s.return)&&o.call(s)}finally{if(t)throw t.error}}return null}(e,n.itemIds[0]):null:function(e,n){var t,o;try{for(var r=Object(a.__values)(e),i=r.next();!i.done;i=r.next()){var s=i.value;if(q(s)==n)return s}}catch(e){t={error:e}}finally{try{i&&!i.done&&(o=r.return)&&o.call(r)}finally{if(t)throw t.error}}return null}(e,n.internetMessageId)}(n,c);l&&(l.Items[0].IsDraft?n.splice(n.indexOf(l),1):(u=!1,function(e,n){e.localLieState=o.a.Complete,e.hasQuotedText=n.HasQuotedText,e.isQuotedTextChanged=n.IsQuotedTextChanged,e.quotedTextList=n.QuotedTextList}(c,l),function(e,n){var t=n.get(e.itemIds[0]);t&&delete t.localLieSentTime}(c,r))),u&&(l={InternetMessageId:c.internetMessageId,Items:[r.get(c.itemIds[0])]},s?n.push(l):n.unshift(l))}}}(e,n,t,r,i);var d=B(e,n,q)[1],c={added:[],removed:[],modified:[]},u={isReadChangedToUnread:[]};return n.forEach((function(e){var n,i=q(e),d=t.get(i);d?(e.ParentInternetMessageId&&(d.parentInternetMessageId=e.ParentInternetMessageId),e.QuotedTextList&&(d.quotedTextList=e.QuotedTextList),e.QuotedTextState&&(d.quotedTextState=e.QuotedTextState),e.HasQuotedText&&(d.hasQuotedText=!0),e.IsQuotedTextChanged&&(d.isQuotedTextChanged=!0),n=d):(t.set(i,{conversationId:s.Id,internetMessageId:i,itemIds:[],quotedTextList:e.QuotedTextList,hasQuotedText:e.HasQuotedText,isQuotedTextChanged:e.IsQuotedTextChanged,quotedTextState:e.QuotedTextState,localLieState:o.a.None,parentInternetMessageId:e.ParentInternetMessageId}),n=t.get(i),c.added.push(i));var l=n.itemIds,f=Object(a.__read)(B(l,e.Items,z),2),m=f[0],g=f[1];d&&m&&c.modified.push(i),d&&!m&&function(e,n,t,o){var r,i;try{for(var s=Object(a.__values)(n),d=s.next();!d.done;d=s.next()){var c=d.value,u=t.get(c.ItemId.Id);u&&u.IsRead&&!c.IsRead&&o.isReadChangedToUnread.push(e)}}catch(e){r={error:e}}finally{try{d&&!d.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}}(i,e.Items,r,u),function(e,n,t,o,r){n.forEach((function(n){var t=n.ItemId.Id,i=o.get(t);v(n),n.ContainsOnlyMandatoryProperties?i?p.forEach((function(e){void 0!==n[e.name]&&(i[e.name]=n[e.name])})):e.splice(e.indexOf(t),1):(i&&I(n,i),o.set(t,Object(a.__assign)(Object(a.__assign)({TranslationData:{isShowingTranslation:!1,isTranslatable:!1,isTranslating:!1,shouldGetFeedback:!1,isShowingForwardContentTranslation:!1,isForwardContentTranslatable:!1,isShowingSubjectTranslation:!1,manuallyTranslated:!1,userLanguage:null,isWrongLanguage:null},adaptiveCardDetails:null},n),{MailboxInfo:r,SmartReplyData:null,SmartTimeData:null,SmartTaskData:null,SmartTimeExtendedProperty:null,AttachmentSuggestions:null,ContextualAttachmentSuggestions:null,smartPillFeedbackSubmitted:!1,YammerThreadId:null,itemCLPInfo:null,SIGSData:{SmartPillData:null}})))})),t.forEach((function(e){V(e)}))}(l,e.Items,g,r,s.mailboxInfo)})),d.forEach((function(e){!function(e,n,t){n.get(e).itemIds.forEach((function(e){V(e)})),n.delete(e)}(e,t),c.removed.push(e)})),[c,u]}var H=Object(i.action)("parseConversationResponse")(Object(i.select)({conversations:function(){return o.e},conversationNodes:function(){return o.x.conversationNodes},items:function(){return o.x.items}})((function(e,n,t,r){var i=t.Id,s=r.conversations.get(i);s||(s=M(t,n)),r.conversations.add(i,s),s=r.conversations.get(i);var d,c=!(e&&"Success"==e.ResponseClass);if(void 0===s.loadingState.hasLoadFailed&&(s.loadingState.hasLoadFailed=c),s.loadingState.hasLoadFailed&&Object(k.a)(i),!c){var u=e.Conversation;if(!u.ConversationNodes)return w.d.warn("GCI response has no ConversationNodes, but TotalConversationNodesCount is "+u.TotalConversationNodesCount),s.loadingState.hasLoadFailed=!0,void Object(k.a)(i);if(u.ConversationNodes.length==u.TotalConversationNodesCount)s.syncState=u.SyncState;else{var l=u.ConversationNodes.length,f=u.TotalConversationNodesCount;w.d.warn("Count of conversationNodes ("+l+") returned from GetConversationItems doesn't match TotalConversationNodesCount ("+f+")")}s.canLoadMore=u.RemainingConversationNodesCount>0||s.maxItemsToReturn<Y&&u.ConversationNodes&&!(u.ConversationNodes.length<s.maxItemsToReturn),s.isLoadMoreInProgress=!1,s.canDelete=u.CanDelete||null,function(e,n,t,a){for(var o={},r=n.length,i=t==F,s=i?0:r-1,d=i?1:-1,c=function(){var t=n[s],r=e.get(t.InternetMessageId);r&&r.conversationId!=a.Id||o[t.InternetMessageId]?(t.InternetMessageId+=t.Items[0].ItemId.Id,t.Items.forEach((function(e){return e.InternetMessageId=t.InternetMessageId}))):o[t.InternetMessageId]=!0,s+=d};s>=0&&s<r;)c()}(r.conversationNodes,u.ConversationNodes,n,t),D(u.ConversationNodes,n),Object(A.a)()&&function(e,n){Object(o.f)(e,n).Items.some((function(e){return m(e)}))}(u.ConversationNodes,n);var g=Object(a.__read)(G(s.conversationNodeIds,u.ConversationNodes,r.conversationNodes,r.items,n,t),2),p=g[0],v=g[1];((d=p).added.length>0||d.removed.length>0||d.modified.length>0)&&Object(k.a)(i,p),function(e){return e.isReadChangedToUnread.length>0}(v)&&Object(k.b)(i,v)}}))),Q=t(20),X=t(51);var W=t(242),Y=100,Z={};var K=Object(i.action)("processGetConversationItemsResponse")((function(e,n,t,a){H(t,e,n);var o=a.get(n.Id);o.loadingState.isLoading=!1,delete Z[n.Id],o.pendingRequestState&&$(n,o.pendingRequestState.actionSource)})),$=Object(i.action)("loadConversation")(Object(i.select)({conversations:function(){return o.e}})((function(e,n,t,i){var s,d,c=Promise.resolve(),u=Object(Q.a)().UserOptions.ConversationSortOrderReact,l=e.Id,f=i.conversations.get(l);if(f&&f.conversationSortOrder!=u&&(Object(R.a)(l),f=null),f&&!f.loadingState.hasLoadFailed||(f=M(e,u)),i.conversations.add(l,f),function(e,n){e.pendingRequestState?e.pendingRequestState.shouldUseEmptySyncState=e.pendingRequestState.shouldUseEmptySyncState||!e.syncState:e.pendingRequestState={shouldUseEmptySyncState:!e.syncState},e.pendingRequestState.actionSource=n}(f=i.conversations.get(l),n),t&&(s=t.addCheckmark("request_start")),f.loadingState.isLoading&&(S(n)||Z[l]))Z[l]&&(c=Z[l],t&&t.addCustomData({pendingRequest:!0}));else{var m=f.pendingRequestState.shouldUseEmptySyncState;f.loadingState.isLoading=!0,f.pendingRequestState=null;var p=f.conversationId.mailboxInfo,v={};if(W(v,null==p?void 0:p.requestOptions),null==v?void 0:v.headers){var I=new Headers(v.headers);I.set("X-OWA-ActionSource",n),v.headers=I,v.datapoint={customData:{actionSource:n}}}var b=((d=Object(r.a)()).ExcludeBindForInlineAttachments=!0,d.CalculateOnlyFirstBody=!0,Object(X.f)("rp-bodyDiffing")&&(d.BodyShape="UniqueFragment"),d);O(b),c=Object(o.g)(f.conversationId,b,f.syncState,f.maxItemsToReturn,u,m,"ReturnRootNode",v).then((function(n){if(t){var o=t.addCheckmark("request_end");t.addCustomData({requestTime:o-s})}K(u,e,n,i.conversations);var r=Object(a.__read)(g(n),2),d=r[0],c=r[1];return d?Promise.reject(new Error("ErrorResponseCode="+d+", StackTrace="+c)):Promise.resolve()})).catch((function(t){return K(u,e,null,i.conversations),t.message+=", ActionSource="+n,S(n)?Promise.resolve():Promise.reject(t)})),S(n)||(Z[l]=c)}return c})));t.d(n,"loadAllRecipientsForItem",(function(){return d})),t.d(n,"loadItem",(function(){return N})),t.d(n,"loadConversation",(function(){return $}))},1664:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(845),o=t(74);function r(){var e=!0;if(Object(o.t)()){var n=Object(a.d)(a.a.ExternalImages);e=null===n.externalImagesSelectedOption||0===n.externalImagesSelectedOption}else{var t=Object(o.h)().PolicySettings;e=void 0===t.ExternalImageProxyEnabled||t.ExternalImageProxyEnabled}return e}},1671:function(e,n,t){"use strict";t.d(n,"m",(function(){return r})),t.d(n,"l",(function(){return i})),t.d(n,"o",(function(){return s})),t.d(n,"q",(function(){return d})),t.d(n,"p",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"e",(function(){return l})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return m})),t.d(n,"k",(function(){return g})),t.d(n,"n",(function(){return p})),t.d(n,"r",(function(){return v})),t.d(n,"c",(function(){return S})),t.d(n,"d",(function(){return I})),t.d(n,"j",(function(){return b})),t.d(n,"f",(function(){return h})),t.d(n,"i",(function(){return O})),t.d(n,"a",(function(){return A}));var a=t(77),o=(t(1672),new a.c((function(){return Promise.all([t.e(684),t.e(6),t.e(14),t.e(35),t.e(589)]).then(t.bind(null,3330))}))),r=new a.a(o,(function(e){return e.onSmimeItemAttachmentOpened})),i=new a.a(o,(function(e){return e.mergeSmimeDecodedMessageProperties})),s=(new a.b(o,(function(e){return e.fetchAndDecodeSmimeMessage})),new a.b(o,(function(e){return e.setSmimePropertiesInDraftMessage}))),d=new a.b(o,(function(e){return e.trySetSmimeProperties})),c=new a.b(o,(function(e){return e.tryAddSmimeProperties})),u=new a.b(o,(function(e){return e.createMailResponseBodyContent})),l=new a.b(o,(function(e){return e.downloadSmimeAttachment})),f=new a.b(o,(function(e){return e.getMergedSmimeViewState})),m=new a.b(o,(function(e){return e.getMergedSmimeViewStateForDraft})),g=new a.b(o,(function(e){return e.isSmimeItemDecoding})),p=new a.b(o,(function(e){return e.previewSmimeAttachment})),v=new a.b(o,(function(e){return e.updateSmimeAttachmentIds})),S=new a.b(o,(function(e){return e.createSmimeAttachmentsFromFiles})),I=new a.b(o,(function(e){return e.createSmimeAttachmentsViaSmimeQueueManager})),b=new a.b(o,(function(e){return e.initializeAttachmentStateForSmimeAttachments})),h=new a.b(o,(function(e){return e.getAttachmentsForSmimeResponse})),O=new a.b(o,(function(e){return e.getSmimeAttachmentsForRequest})),A=Object(a.d)(o,(function(e){return e.SignatureDetails}))},1672:function(e,n,t){"use strict";var a=t(4);n.a=Object(a.action)("saveSigningCertificate",(function(e,n){return{smimeViewState:e,signingCertRawData:n}}))},1924:function(e,n,t){"use strict";var a=t(165),o=t(233),r={tenantTokens:Object(a.e)(),isCore:!0};function i(e,n,t){var i=new o.a(e,n,r);t&&i.addCosmosOnlyData(t),a.k.importAndExecute(i)}function s(e){return new a.a(e,r)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}))},2339:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}));var a=t(4),o=Object(a.action)("CONVERSATION_READY_TO_LOAD",(function(e,n){return{conversationId:e,nodeIdCollectionChange:n}})),r=Object(a.action)("UPDATE_ITEM_MANDATORY_PROPERTIES",(function(e,n){return{conversationId:e,nodeIdCollectionWithItemMandatoryPropertiesChanged:n}}))},2538:function(e,n,t){"use strict";n.a=function(e){var n;return null===(n=null==e?void 0:e.Smime)||void 0===n?void 0:n.isDecoded}},2647:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var a="X-OWA-SmimeInstalled",o="1",r="SmimeWithoutActiveX",i="message/rfc822",s="ErrorSmimeSendCancelled"},328:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return d}));var a=t(184),o=t(212),r=t(211),i=t(208);function s(e){return Object(a.a)({RequestServerVersion:"Exchange2015",TimeZoneContext:Object(o.a)({TimeZoneDefinition:Object(r.a)({Id:null!=e?e:"Pacific Standard Time"})})})}function d(e,n,t){return Object(i.a)({PropertySetId:e,PropertyName:n,PropertyType:t})}},3593:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(845),o=t(51),r=t(206);function i(){var e=Object(a.d)(a.a.AmpDeveloper);return Object(r.a)()&&Object(o.f)("rp-amp")&&e.enabled}},3794:function(e,n,t){"use strict";var a;!function(e){e.None="None",e.OwaProxy="OwaProxy",e.ConnectorsProxy="ConnectorsProxy",e.Compose="Compose",e.OwaAndConnectorsProxy="OwaAndConnectorsProxy",e.OwaConnectorsProxyAndCompose="OwaConnectorsProxyAndCompose"}(a||(a={})),n.a=a},4285:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var a,o,r=t(389),i=t(20),s=t(1110),d=t(1664),c=t(3794),u=t(839),l=t(208),f=t(328),m="rps_"+(a=1,o=65535,Math.ceil(Math.random()*(o-a)+a)).toString(16),g=2097152,p=20,v="ExplicitMessageCard",S="00062008-0000-0000-C000-000000000046";function I(){var e,n=Object(r.a)({BaseShape:"IdOnly",AddBlankTargetToLinks:!0,BlockContentFromUnknownSenders:(e=Object(i.a)(),!!e.SafetyUserOptions&&e.SafetyUserOptions.BlockContentFromUnknownSenders),BlockExternalImagesIfSenderUntrusted:!0,ClientSupportsIrm:!0,CssScopeClassName:m,FilterHtmlContent:!0,FilterInlineSafetyTips:!0,InlineImageCustomDataTemplate:s.e,InlineImageUrlTemplate:s.f,MaximumBodySize:g,MaximumRecipientsToReturn:p,ImageProxyCapability:Object(d.a)()?c.a.OwaAndConnectorsProxy:c.a.None,AdditionalProperties:[Object(u.a)({FieldURI:"CanDelete"}),Object(l.a)(Object(f.a)(S,v,"String"))]});return n.InlineImageUrlOnLoadTemplate="",n}},4876:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(51),o=t(208);function r(e){Object(a.f)("cmp-clp")&&e.AdditionalProperties.push(Object(o.a)({PropertyName:"msip_labels",DistinguishedPropertySetId:"InternetHeaders",PropertyType:"String"}))}},4885:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a,o=t(51),r=t(42),i=t(165),s=["office.com","office365.com"];function d(){return Object(o.f)("rp-yammer")&&function(){if(null!=a)return a;var e=Object(r.f)();e&&Object(i.o)("Yammer_UnsupportedBrowser");var n=s.some((function(e){return-1!=window.location.host.indexOf(e)}));n||Object(i.o)("Yammer_UnsupportedDomain");return a=!e&&n}()}},7557:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(77),o=new a.c((function(){return Promise.all([t.e(83),t.e(6),t.e(404)]).then(t.bind(null,8937))})),r=new a.b(o,(function(e){return e.bootstrapYammerIfNeeded}))},845:function(e,n,t){"use strict";var a=t(77),o=t(1066),r=t(932),i=t(13),s=t(4),d=t(847),c=[d.a.SurfaceActions];Object(s.mutator)(o.a,(function(e){var n=e.defaultOptions;c.forEach((function(e){n[e]&&Object(i.extendObservable)(Object(r.a)().options[e],n[e])}))}));var u,l=t(935),f=t(882);!function(e){e[e.Work=1]="Work",e[e.Life=2]="Life"}(u||(u={}));t.d(n,"e",(function(){return g})),t.d(n,"h",(function(){return p})),t.d(n,"f",(function(){return v})),t.d(n,"g",(function(){return S})),t.d(n,"d",(function(){return l.a})),t.d(n,"c",(function(){return f.a})),t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return d.a}));var m=new a.c((function(){return t.e(389).then(t.bind(null,13551))})),g=new a.a(m,(function(e){return e.createOrUpdateOptionsForFeature})),p=new a.a(m,(function(e){return e.updateAddinPinStatus})),v=new a.b(m,(function(e){return e.getServerOptionsForFeature})),S=new a.a(m,(function(e){return e.loadOptions}))},847:function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e[e.TestFeature=1]="TestFeature",e[e.SmartSuggestions=2]="SmartSuggestions",e[e.DiverseEmojis=4]="DiverseEmojis",e[e.SurfaceActions=5]="SurfaceActions",e[e.SkypeNotifications=6]="SkypeNotifications",e[e.WebPushNotifications=7]="WebPushNotifications",e[e.Confetti=8]="Confetti",e[e.GdprAdsPrefs=9]="GdprAdsPrefs",e[e.CalendarSurfaceAddins=10]="CalendarSurfaceAddins",e[e.ExternalImages=11]="ExternalImages",e[e.EventCapture=12]="EventCapture",e[e.Translation=14]="Translation",e[e.CalendarSurfaceOptions=15]="CalendarSurfaceOptions",e[e.TxpEventNotifications=16]="TxpEventNotifications",e[e.MentionEventNotifications=17]="MentionEventNotifications",e[e.ComposeAssistance=18]="ComposeAssistance",e[e.ActivityFeed=19]="ActivityFeed",e[e.AmpDeveloper=20]="AmpDeveloper",e[e.CalendarHelp=21]="CalendarHelp",e[e.LinkedInViewProfile=22]="LinkedInViewProfile",e[e.Bohemia=23]="Bohemia",e[e.GdprAdsV2=24]="GdprAdsV2",e[e.Proofing=25]="Proofing",e[e.ActiveProxyAddress=26]="ActiveProxyAddress"}(a||(a={}))},882:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(206),o=t(847),r=t(51);function i(){var e;return(e={})[o.a.SmartSuggestions]={smartSuggestionsEnabled:!0,browserLocationEnabled:!1},e[o.a.DiverseEmojis]={diverseEmojisSelectedSkinTone:""},e[o.a.SurfaceActions]={readSurfaceActions:["Reply","ReplyAll","Forward"].concat(Object(a.a)()?[]:["LikeUnlike"]),readSurfaceAddins:[],composeSurfaceActions:["AddAttachment","AddInlineImage","AddEmoji","ToggleDictation","ProofingOptions","ToggleRibbon"],composeSurfaceAddins:[]},e[o.a.SkypeNotifications]={skypeMessageNotification:1,skypeCallingNotification:1},e[o.a.Confetti]={confettiEnabled:!0},e[o.a.ComposeAssistance]={composeAssistanceEnabled:!0},e[o.a.GdprAdsPrefs]={feature:o.a.GdprAdsPrefs,consentString:null,allowStorageAndAccess:!1,allowPersonalization:!1,allowAdSelectionDeliveryReporting:!1,allowContentSelectionDeliveryReporting:!1,allowMeasurement:!1},e[o.a.CalendarSurfaceAddins]={calendarSurfaceAddins:[]},e[o.a.ExternalImages]={externalImagesSelectedOption:0},e[o.a.EventCapture]={autoCollectionEnabled:!1},e[o.a.Translation]={translationMode:0,targetLanguage:"",excludedLanguages:[]},e[o.a.CalendarSurfaceOptions]={agendaPaneIsClosed:!1,roamingTimeZoneTeachingMomentDisplayed:!1,bannedRoamingTimeZone:null,lastKnownRoamingTimeZone:null,roamingTimeZoneNotificationsIsDisabled:!1,allDayWellHeight:0,numDaysInDayRange:1,workLifeView:3},e[o.a.AmpDeveloper]={enabled:Object(r.f)("rp-ampDefault"),allowedSender:[]},e[o.a.CalendarHelp]={calendarHelpEnabled:!1},e[o.a.LinkedInViewProfile]={dismissed:!1},e[o.a.Bohemia]={bohemiaEnabled:Object(r.f)("rp-bohemiaDefaultOption")},e[o.a.GdprAdsV2]={feature:o.a.GdprAdsV2,consentString:null,allowStorageAndAccess:!0,allowPersonalization:!0,allowAdSelectionDeliveryReporting:!0,allowContentSelectionDeliveryReporting:!0,allowMeasurement:!0,disselectedVendorId:[],selectedVendorId:[]},e[o.a.Proofing]={feature:o.a.Proofing,spellCheckEnabled:!0,grammarEnabled:!0,writingRefinementsEnabled:!0,proofingLocale:void 0},e[o.a.ActiveProxyAddress]={feature:o.a.ActiveProxyAddress,activeProxyAddresses:[]},e}},932:function(e,n,t){"use strict";var a,o=t(847),r=t(1062),i=t(4);n.a=Object(i.createStore)("owsOptionsStore",{options:(a={},a[o.a.SmartSuggestions]={feature:o.a.SmartSuggestions,smartSuggestionsEnabled:!1,browserLocationEnabled:!1},a[o.a.DiverseEmojis]={feature:o.a.DiverseEmojis,diverseEmojisSelectedSkinTone:""},a[o.a.SurfaceActions]={feature:o.a.SurfaceActions,readSurfaceActions:[],readSurfaceAddins:[],composeSurfaceActions:[],composeSurfaceAddins:[]},a[o.a.SkypeNotifications]={feature:o.a.SkypeNotifications,skypeMessageNotification:1,skypeCallingNotification:1},a[o.a.WebPushNotifications]={feature:o.a.WebPushNotifications,enabled:!1,applicationServerKey:null},a[o.a.Confetti]={feature:o.a.Confetti,confettiEnabled:!1},a[o.a.GdprAdsPrefs]={feature:o.a.GdprAdsPrefs,consentString:null,allowStorageAndAccess:!1,allowPersonalization:!1,allowAdSelectionDeliveryReporting:!1,allowContentSelectionDeliveryReporting:!1,allowMeasurement:!1},a[o.a.GdprAdsV2]={feature:o.a.GdprAdsV2,consentString:null,allowStorageAndAccess:!0,allowPersonalization:!0,allowAdSelectionDeliveryReporting:!0,allowContentSelectionDeliveryReporting:!0,allowMeasurement:!0,disselectedVendorId:[],selectedVendorId:[]},a[o.a.CalendarSurfaceAddins]={feature:o.a.CalendarSurfaceAddins,calendarSurfaceAddins:[]},a[o.a.ExternalImages]={feature:o.a.ExternalImages,externalImagesSelectedOption:null},a[o.a.EventCapture]={autoCollectionEnabled:!1},a[o.a.Translation]={feature:o.a.Translation,translationMode:0,targetLanguage:"",excludedLanguages:[]},a[o.a.CalendarSurfaceOptions]={feature:o.a.CalendarSurfaceOptions,agendaPaneIsClosed:!0,roamingTimeZoneTeachingMomentDisplayed:!0,bannedRoamingTimeZone:void 0,lastKnownRoamingTimeZone:void 0,roamingTimeZoneNotificationsIsDisabled:void 0,allDayWellHeight:0,numDaysInDayRange:1,workLifeView:3},a[o.a.MentionEventNotifications]={feature:o.a.MentionEventNotifications,enabled:!1},a[o.a.TxpEventNotifications]={feature:o.a.TxpEventNotifications,enabled:!1},a[o.a.ComposeAssistance]={feature:o.a.ComposeAssistance,composeAssistanceEnabled:!1},a[o.a.AmpDeveloper]={feature:o.a.AmpDeveloper,enabled:!0,allowedSender:[]},a[o.a.ActivityFeed]={feature:o.a.ActivityFeed,OWASurfaceOptions:{SupportedTypes:[],DisabledInFeedPanel:[]}},a[o.a.LinkedInViewProfile]={dismissed:!1},a[o.a.CalendarHelp]={feature:o.a.CalendarHelp,calendarHelpEnabled:!1},a[o.a.Bohemia]={feature:o.a.Bohemia,bohemiaEnabled:!1},a[o.a.Proofing]={feature:o.a.Proofing,spellCheckEnabled:!0,grammarEnabled:!0,writingRefinementsEnabled:!1,proofingLocale:void 0},a[o.a.ActiveProxyAddress]={feature:o.a.ActiveProxyAddress,activeProxyAddresses:[]},a),loadState:r.a.OptionsNotLoaded})},935:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(932);function o(e){return Object(a.a)().options[e]}}}]);
//# sourceMappingURL=owa.MailStoreActions.js.map
self.scriptsLoaded['owa.MailStoreActions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailStoreActions.js'] = (new Date()).getTime();