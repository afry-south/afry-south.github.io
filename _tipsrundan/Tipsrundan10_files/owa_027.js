self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailFocusManager.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[340],{13663:function(e,t,n){"use strict";n.r(t);var o=n(0),r=["MailCompose","MailList","ReadingPane"],i={MailCompose:[],MailList:[],ReadingPane:[]};function u(e,t){var n=i[e];return n.push(t),function(){for(var e=0;e<n.length;e++)n[e]===t&&n.splice(e,1)}}function c(){return new Promise((function(e){window.requestAnimationFrame((function(){var t,n;try{for(var i=Object(o.__values)(r),u=i.next();!u.done;u=i.next()){if(s(u.value))break}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return e()}))}))}function s(e){for(var t=i[e],n=t.length-1;n>=0;n--){var o=t[n],r=null==o?void 0:o();if(r)return r}return!1}var a=n(4),l=n(3072);Object(a.orchestrator)(l.d,(function(e){return Object(o.__awaiter)(void 0,void 0,void 0,(function(){return Object(o.__generator)(this,(function(e){return c(),[2]}))}))}));n.d(t,"registerComponent",(function(){return u})),n.d(t,"resetFocus",(function(){return c})),n.d(t,"setFocusToSynchronous",(function(){return s}))},3072:function(e,t,n){"use strict";var o=n(77),r=n(3921),i=n(58),u=n(1),c=n(4103);function s(e){var t=[];return t.push({key:"MoveToMenuItemDiv",onRender:function(){return u.createElement(v,{actionSource:e.actionSource,createNewFolder:e.createNewFolder,dismissMenu:e.dismissMenu,shouldShowSearchBox:e.shouldShowSearchBox,supportedMoveToMailboxContexts:e.supportedMoveToMailboxContexts,onFolderClick:e.onFolderClick,getMenuItemsToPrepend:e.getMenuItemsToPrepend,getCustomIcon:e.getCustomIcon,getCustomMenuItemsToAppend:e.getCustomMenuItemsToAppend,disableSelectedFolder:e.disableSelectedFolder,selectedFolderId:e.selectedFolderId})}}),{className:c.moveToMenu,styles:{title:{},container:{},root:{width:e.width?e.width+"px":null},header:{},list:{}},coverTarget:e.coverTarget,directionalHint:e.directionalHint?e.directionalHint:i.DirectionalHint.bottomLeftEdge,directionalHintFixed:e.directionalHintFixed,items:t,onMenuDismissed:a,shouldFocusOnMount:!e.shouldShowSearchBox,useTargetWidth:e.useTargetWidth,focusZoneProps:{shouldInputLoseFocusOnArrowKey:function(e){return!0}},calloutProps:{className:"customScrollBar"}}}function a(){Object(r.a)()}n(3106);var l=n(3107);n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return l.a}));var d=new o.c((function(){return Promise.all([n.e(8),n.e(372)]).then(n.bind(null,13437))})),f=new o.b(d,(function(e){return e.getFoldersForMoveTo})),v=Object(o.d)(d,(function(e){return e.MoveToFolder}))},3106:function(e,t,n){"use strict";function o(e){var t={};return e.map((function(e){var n=e.displayName.toLowerCase();t[n]?t[n]++:t[n]=1})),t}n.d(t,"a",(function(){return o}))},3107:function(e,t,n){"use strict";var o=n(4);t.a=Object(o.action)("ON_FOLDER_CLICKED_IN_MOVEIN_CONTROL",(function(e,t){return{context:e,folderId:t}}))},3921:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(4),r=Object(o.action)("RESET_MOVETO_STORE")},4103:function(e,t,n){var o=n(4104),r=n(73);"string"==typeof o&&(o=[[e.i,o]]);for(var i=0;i<o.length;i++)r.loadStyles(o[i][1],!1);o.locals&&(e.exports=o.locals)},4104:function(e,t,n){(t=e.exports=n(72)(!1)).push([e.i,"._1CABqguN_S33cCcV9s0slF{max-height:544px}",""]),t.locals={moveToMenu:"_1CABqguN_S33cCcV9s0slF"}}}]);
//# sourceMappingURL=owa.MailFocusManager.js.map
self.scriptsLoaded['owa.MailFocusManager.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailFocusManager.js'] = (new Date()).getTime();