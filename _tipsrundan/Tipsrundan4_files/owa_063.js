self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailHotKeys.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[343],{1008:function(e,t,n){"use strict";var o=function(e){return e&&["IPM.Note","IPM.Schedule.Meeting","IPM.GroupMailbox.JoinRequest","IPM.Post"].includes(e)},r=n(8),i=n(883);function a(e){switch(e.__type){case i.e:return 0;case i.n:return e.IsLink?3:1;case i.i:return 3;case i.g:return 2;case i.h:var t=e;return o(e.EmbeddedItemClass)||Object(r.f)(t.AttachmentIdToAttach)?2:0;default:throw new Error("Invalid type of attachment "+e.__type)}}n.d(t,"a",(function(){return a}))},1009:function(e,t,n){"use strict";var o;!function(e){e[e.NoAction=0]="NoAction",e[e.Preview=1]="Preview",e[e.Download=2]="Download",e[e.OpenInNewTab=3]="OpenInNewTab"}(o||(o={})),t.a=o},1021:function(e,t,n){"use strict";function o(e){return(null==e?void 0:e.AttachmentId)&&r(e.AttachmentId.Id)}function r(e){return e&&-1!==e.indexOf("smime-")}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}))},1067:function(e,t,n){"use strict";var o=n(919),r=n(1031),i=n(1814),a=n(4),c=n(1178),u=n(1174),d={shouldShow:!1,viewState:Object(i.a)(),extendedViewState:{previewMode:o.b.Unsupported,attachmentId:null,selectionSource:c.a.MailList,isCloudy:!1,saveToCloudStatus:0,textPreviewReadMode:0},editState:{mode:u.a.View,editAllowed:!1,itemId:null,isDraft:!1},customPreviewState:null,eventManager:new r.a,pendingPreviewOperation:null,pendingNavigation:null,readingPaneState:null,composeId:null,customization:null,isInvisible:!1,shouldUseFakeRightHandSide:!1,isUsingFakeRightHandSide:!1,shouldHideReadingPaneOutsideSxS:!1,attachmentViewStateIdFromListView:null,sessionPreviewCount:0,sessionStartTime:0,meetingMessageAddToCalendarStatus:1};d.viewState.previewPane=null;var l=Object(a.createStore)("sxsstore",d);t.a=l()},1173:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(4),r=Object(o.action)("REFRESH_SHARING_TIPS_FOR_ATTACHMENT",(function(e){return{attachmentId:e}}))},1174:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e[e.View=0]="View",e[e.EnteringEdit=1]="EnteringEdit",e[e.Edit=2]="Edit",e[e.Saving=3]="Saving"}(o||(o={}))},1178:function(e,t,n){"use strict";var o;!function(e){e[e.MailList=0]="MailList",e[e.ReadingPane=1]="ReadingPane",e[e.FilesHub=2]="FilesHub",e[e.PhotoHub=3]="PhotoHub",e[e.GroupFilesHub=4]="GroupFilesHub",e[e.ConversationAttachmentWell=5]="ConversationAttachmentWell",e[e.Deeplink=6]="Deeplink",e[e.FileSuggestion=7]="FileSuggestion",e[e.LinkSuggestion=8]="LinkSuggestion",e[e.ComposeDocLink=9]="ComposeDocLink",e[e.ReadingPaneDocLink=10]="ReadingPaneDocLink",e[e.ConsumerGroupFilesHub=11]="ConsumerGroupFilesHub",e[e.FolderTree=12]="FolderTree"}(o||(o={})),t.a=o},1305:function(e,t,n){"use strict";var o=n(1442),r=n(73),i=n(1400);function a(){var e=Object(i.a)();return{isFullOptionsShown:e.isFullOptionsShown,areAllAllowedSubCategoriesLoaded:e.areAllAllowedSubCategoriesLoaded,currentCategoryKey:e.currentCategoryKey,currentSubCategoryKey:e.currentSubCategoryKey,currentOptionKey:e.currentOptionKey}}n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var c=new r.c((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(385)]).then(n.bind(null,13801))})),u=new r.a(c,(function(e){return e.mountAndShowFullOptions})),d=new r.b(c,(function(e){return e.hideFullOptions})),l=new r.b(c,(function(e){return e.confirmDirtyOptionsAndPerformAction})),s=Object(r.d)(c,(function(e){return e.QuickOptions}));Object(r.f)(o.a,c,(function(e){return e.mountFullOptionsOrchestrator}))},1347:function(e,t,n){"use strict";n.r(t),n.d(t,"EnteredEditModeEvent",(function(){return o})),n.d(t,"ExitedEditModeEvent",(function(){return r})),n.d(t,"PreviewLoadEvent",(function(){return i})),n.d(t,"PreviewErrorEvent",(function(){return a})),n.d(t,"PreviewLoadOrErrorEvent",(function(){return c})),n.d(t,"CloseEvent",(function(){return u})),n.d(t,"AnimationEndEvent",(function(){return d}));var o="EnteredEditMode",r="ExitedEditMode",i="PreviewLoad",a="PreviewError",c="PreviewLoadOrError",u="Close",d="AnimationEnd"},1362:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e[e.Initial=0]="Initial",e[e.Adaptive=1]="Adaptive",e[e.Show=2]="Show",e[e.Hide=3]="Hide",e[e.AlwaysHide=4]="AlwaysHide"}(o||(o={}))},1374:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e[e.Blank=0]="Blank",e[e.Loading=1]="Loading",e[e.Error=2]="Error",e[e.Custom=3]="Custom",e[e.Image=4]="Image",e[e.Wac=5]="Wac",e[e.Audio=6]="Audio",e[e.Video=7]="Video",e[e.Text=8]="Text",e[e.NativePdf=9]="NativePdf",e[e.PdfJs=10]="PdfJs",e[e.IFrame=11]="IFrame"}(o||(o={}))},1400:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(4),r=n(12),i=Object(o.createStore)("optionsViewState",{isFullOptionsShown:!1,areAllAllowedSubCategoriesLoaded:!1,isSaving:!1,currentCategoryKey:null,currentSubCategoryKey:null,subCategoryLoadState:new r.ObservableMap,currentOptionKey:null,allowedOptions:[]})},1406:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e[e.ConversationReadingPane=0]="ConversationReadingPane",e[e.ItemReadingPane=1]="ItemReadingPane"}(o||(o={}))},1428:function(e,t,n){"use strict";var o;!function(e){e[e.None=0]="None",e[e.Edit=1]="Edit",e[e.Selected=2]="Selected",e[e.SelectedAndPending=3]="SelectedAndPending",e[e.SelectedAndSaving=4]="SelectedAndSaving",e[e.NotSelectedAndSaving=5]="NotSelectedAndSaving",e[e.OtherSaving=6]="OtherSaving",e[e.PendingNavigation=7]="PendingNavigation"}(o||(o={})),t.a=o},1442:function(e,t,n){"use strict";var o=n(4);t.a=Object(o.action)("mountFullOptions",(function(e,t,n){return{category:e,subcategory:t,option:n}}))},1814:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(1031),r=n(1374),i=n(1362);function a(){return{previewPane:{downloadUrl:null,mode:r.a.Blank},didAutoHideRightPane:!1,hideRightPane:!1,rightPaneSize:0,leftPaneSizePixels:0,rightPaneSizePixels:0,rightPaneDisplay:i.a.Initial,eventManager:new o.a}}},2312:function(e){e.exports=JSON.parse('{"a":"kna"}')},2476:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var o=n(0),r=n(3197),i=n(3007),a=n(2312),c=n(8),u=n(37),d=n(1050),l=n(35),s="writeEmail",f="emailList",h="readEmail",p="goTo",b="emailActions";function m(){return[{category:s,displayName:Object(c.a)(i.V)},{category:f,displayName:Object(c.a)(i.i)},{category:h,displayName:Object(c.a)(i.L)},{category:p,displayName:Object(c.a)(i.s)},{category:b,displayName:Object(c.a)(i.h)}]}function g(){var e={};return Object(u.f)("cmp-quickSwitcher")&&(e.goToQuickSwitcher={category:p,description:Object(c.a)(i.w),hotmail:"ctrl+shift+k",yahoo:"ctrl+shift+k",gmail:"ctrl+shift+k",owa:"ctrl+shift+k"}),Object(o.__assign)({newMail:{category:s,description:Object(c.a)(i.F),hotmail:["n"],yahoo:"n",gmail:"c",owa:["n"]},sendMail:{category:s,description:Object(c.a)(i.Q),hotmail:Object(l.i)()?["ctrl+enter"]:["ctrl+enter","alt+s"],yahoo:"alt+s",gmail:"ctrl+enter",owa:Object(l.i)()?["ctrl+enter"]:["ctrl+enter","alt+s"]},reply:{category:s,description:Object(c.a)(i.N),hotmail:"r",yahoo:"r",gmail:"r",owa:["r","ctrl+r"]},replyAll:{category:s,description:Object(c.a)(i.M),hotmail:["a","shift+r"],yahoo:"a",gmail:"a",owa:["shift+r","ctrl+shift+r"]},forward:{category:s,description:Object(c.a)(i.p),hotmail:"shift+f",yahoo:"f",gmail:"f",owa:["shift+f","ctrl+shift+f"]},saveDraft:{category:s,description:Object(c.a)(i.O),hotmail:"ctrl+s",yahoo:"ctrl+s",gmail:"ctrl+s",owa:"ctrl+s"},discardDraft:{category:s,description:Object(c.a)(i.g),hotmail:"esc",owa:"esc"},gotoMail:{category:p,description:Object(c.a)(i.u),hotmail:"ctrl+shift+1",yahoo:"ctrl+shift+1",gmail:"ctrl+shift+1",owa:"ctrl+shift+1"},gotoCalendar:{category:p,description:Object(c.a)(i.q),hotmail:"ctrl+shift+2",yahoo:"ctrl+shift+2",gmail:"ctrl+shift+2",owa:"ctrl+shift+2"},gotoPeople:{category:p,description:Object(c.a)(i.v),hotmail:"ctrl+shift+3",yahoo:"ctrl+shift+3",gmail:"ctrl+shift+3",owa:"ctrl+shift+3"},goToToDo:{category:p,description:Object(d.a)()?Object(c.a)(i.z):Object(c.a)(i.y),hotmail:"ctrl+shift+4",yahoo:"ctrl+shift+4",gmail:"ctrl+shift+4",owa:"ctrl+shift+4"},gotoInbox:{category:p,description:Object(c.a)(i.t),hotmail:"g i",yahoo:"m",gmail:"g i",owa:"g i"},gotoDrafts:{category:p,description:Object(c.a)(i.r),hotmail:"g d",gmail:"g d",owa:"g d"},gotoSent:{category:p,description:Object(c.a)(i.x),hotmail:"g s",gmail:"g t",owa:"g s"},gotoSearch:{category:p,description:Object(c.a)(i.P),hotmail:"/",yahoo:"s",gmail:"/",owa:"alt+q"},undoAction:{category:b,description:Object(c.a)(i.U),hotmail:"ctrl+z",yahoo:"ctrl+z",gmail:"ctrl+z",owa:"ctrl+z"},selectUnselectMessage:{category:f,description:Object(c.a)(i.T),hotmail:"ctrl+space",yahoo:"ctrl+space",gmail:["x","ctrl+x"],owa:"ctrl+space"},selectAll:{category:f,description:Object(c.a)(r.a),hotmail:"ctrl+a",yahoo:"ctrl+a",gmail:"ctrl+a",owa:"ctrl+a"},deselectAll:{category:f,description:Object(c.a)(i.c),hotmail:"esc",yahoo:"esc",gmail:"esc",owa:"esc"},home:{category:f,description:Object(c.a)(i.A),hotmail:["home","ctrl+home"],yahoo:["home","ctrl+home"],gmail:["home","ctrl+home"],owa:["home","ctrl+home"]},end:{category:f,description:Object(c.a)(i.j),hotmail:["end","ctrl+end"],yahoo:["end","ctrl+end"],gmail:["end","ctrl+end"],owa:["end","ctrl+end"]},deleteMail:{category:b,description:Object(c.a)(i.f),hotmail:"del",yahoo:"del",gmail:"#",owa:"del"},openMail:{category:h,description:Object(c.a)(i.H),hotmail:["o","enter"],gmail:["o","enter"],owa:["o","enter"]},openMailInPopout:{category:h,description:Object(c.a)(i.I),hotmail:"shift+enter",gmail:"shift+enter",owa:"shift+enter",yahoo:"shift+enter"},closeMail:{category:h,description:Object(c.a)(i.d),hotmail:"esc",yahoo:"esc",gmail:"u",owa:"esc"},openNextItem:{category:h,description:Object(c.a)(i.J),hotmail:"ctrl+.",yahoo:"ctrl+.",gmail:"j",owa:"ctrl+."},openPrevItem:{category:h,description:Object(c.a)(i.K),hotmail:"ctrl+,",yahoo:"ctrl+,",gmail:"k",owa:"ctrl+,"},focusNextItemPart:{category:h,description:Object(c.a)(i.n),hotmail:".",gmail:"n",owa:"."},focusPrevItemPart:{category:h,description:Object(c.a)(i.o),hotmail:",",gmail:"p",owa:","},expandCollapseAll:{category:h,description:Object(c.a)(i.k),hotmail:"x",owa:"x"},expandAll:{category:h,description:Object(c.a)(i.l),gmail:";"},collapseAll:{category:h,description:Object(c.a)(i.e),gmail:":"},softDeleteMail:{category:b,description:Object(c.a)(i.S),hotmail:"shift+del",yahoo:"shift+del",gmail:"shift+del",owa:"shift+del"},newFolder:{category:b,description:Object(c.a)(i.G),hotmail:"shift+e",yahoo:"ctrl+shift+e",owa:"shift+e"},markAsRead:{category:b,description:Object(c.a)(i.D),hotmail:"q",yahoo:"k",gmail:"shift+i",owa:Object(l.i)()?"q":["q","ctrl+q"]},markAsUnread:{category:b,description:Object(c.a)(i.E),hotmail:"u",yahoo:"shift+k",gmail:"shift+u",owa:["u","ctrl+u"]},toggleFlag:{category:b,description:Object(c.a)(i.m),hotmail:"ins",yahoo:"l",gmail:"s",owa:"ins"},archiveMail:{category:b,description:Object(c.a)(i.a),hotmail:"e",gmail:"e",owa:"e"},markAsJunk:{category:b,description:Object(c.a)(i.C),hotmail:"j",gmail:"shift+1",owa:"j"},moveToFolder:{category:b,description:Object(c.a)(a.a),hotmail:"v",gmail:"v",owa:"v"},categorize:{category:b,description:Object(c.a)(i.b),hotmail:"c",gmail:"l",owa:"c"},insertHyperlink:{category:s,description:Object(c.a)(i.B),hotmail:"ctrl+k",gmail:"ctrl+k",owa:"ctrl+k"},keyboardShortcuts:{category:p,description:Object(c.a)(i.R),hotmail:"?",gmail:"?",owa:"?",yahoo:"?"}},e)}},3007:function(e){e.exports=JSON.parse('{"V":"yVb","i":"zVb","L":"AVb","s":"BVb","h":"CVb","w":"DVb","F":"EVb","Q":"FVb","N":"GVb","M":"HVb","p":"IVb","O":"JVb","g":"KVb","u":"LVb","q":"MVb","v":"NVb","y":"OVb","z":"PVb","t":"QVb","r":"RVb","x":"SVb","P":"TVb","U":"UVb","c":"VVb","A":"WVb","j":"XVb","f":"YVb","H":"ZVb","I":"_Vb","d":"$Vb","J":"aWb","K":"bWb","n":"cWb","o":"dWb","k":"eWb","l":"fWb","e":"gWb","S":"hWb","G":"iWb","D":"jWb","E":"kWb","m":"lWb","a":"mWb","C":"nWb","b":"oWb","B":"pWb","R":"qWb","T":"rWb"}')},3197:function(e){e.exports=JSON.parse('{"a":"sWb"}')},4821:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var o=n(73),r=new o.c((function(){return Promise.all([n.e(1),n.e(286)]).then(n.bind(null,7139))})),i=Object(o.d)(r,(function(e){return e.HotkeysMap})),a=new o.a(r,(function(e){return e.setIsHotkeysMapVisible}))},8692:function(e,t,n){"use strict";n.r(t);var o=n(2476),r=n(992),i=n(1418);function a(){return[{command:Object(o.b)().undoAction,handler:c}]}function c(){Object(r.h)()||i.e.importAndExecute("Keyboard")}var u=n(1),d=n(4821),l=n(1305);function s(){var e=Object(o.b)(),t=[];return Object.keys(e).map((function(n){t.push(e[n])})),u.createElement(d.a,{commandCategories:Object(o.a)(),goToOptions:f,hotkeyCommands:t})}function f(){l.e.importAndExecute("general","accessibility")}n.d(t,"setupUndoHotKeys",(function(){return a})),n.d(t,"MailHotkeysMap",(function(){return s}))},883:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return i})),n.d(t,"n",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return b})),n.d(t,"o",(function(){return m})),n.d(t,"p",(function(){return g})),n.d(t,"q",(function(){return w})),n.d(t,"a",(function(){return O}));var o="FileAttachment:#Exchange",r="ItemAttachment:#Exchange",i="ItemIdAttachment:#Exchange",a="ReferenceAttachment:#Exchange",c="LinkAttachment:#Exchange",u="Box",d="Dropbox",l="Facebook",s="GDrive",f="Mailbox",h="MailMessage",p="OneDriveConsumer",b="OneDrivePro",m="WopiBox",g="WopiDropbox",w="WopiEgnyte",O={providers:{BOX:u,DROPBOX:d,FACEBOOK:l,GDRIVE:s,MAILBOX:f,ONE_DRIVE_CONSUMER:p,ONE_DRIVE_PRO:b,RECENT_ATTACHMENTS:"RecentAttachments",WOPI:"Wopi",WOPI_BOX:m,WOPI_EGNYTE:w},attachmentTypes:{FILE_ATTACHMENT_TYPE:o,ITEM_ATTACHMENT_TYPE:r,ITEM_ID_ATTACHMENT_TYPE:i,REFERENCE_ATTACHMENT_TYPE:a,LINK_ATTACHMENT_TYPE:c}}},907:function(e,t,n){"use strict";var o;!function(e){e[e.Unsupported=0]="Unsupported",e[e.Image=1]="Image",e[e.MailItem=2]="MailItem",e[e.CalendarEvent=3]="CalendarEvent",e[e.Wac=4]="Wac",e[e.SuiteExtensions=5]="SuiteExtensions",e[e.Audio=6]="Audio",e[e.Text=7]="Text",e[e.NativeView=8]="NativeView",e[e.GoogleDoc=9]="GoogleDoc",e[e.PdfJs=10]="PdfJs",e[e.ItemAttachment=11]="ItemAttachment",e[e.Video=12]="Video"}(o||(o={})),t.a=o},914:function(e,t,n){"use strict";n.d(t,"f",(function(){return l})),n.d(t,"n",(function(){return s})),n.d(t,"j",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"m",(function(){return p})),n.d(t,"l",(function(){return b})),n.d(t,"k",(function(){return m})),n.d(t,"i",(function(){return g})),n.d(t,"g",(function(){return w})),n.d(t,"o",(function(){return O}));var o=n(73),r=n(1173);n.d(t,"p",(function(){return r.a}));var i=n(964);n.d(t,"b",(function(){return i.a}));var a=n(1008);n.d(t,"c",(function(){return a.a}));var c=n(1021);n.d(t,"e",(function(){return c.a})),n.d(t,"d",(function(){return c.b}));var u=n(883);n.d(t,"a",(function(){return u.a}));var d=new o.c((function(){return Promise.all([n.e(7),n.e(13),n.e(33),n.e(121)]).then(n.bind(null,2363))})),l=new o.a(d,(function(e){return e.addAndInitializeAttachments})),s=new o.a(d,(function(e){return e.setPreviewImageUrl})),f=new o.a(d,(function(e){return e.refreshDownloadUrl})),h=new o.a(d,(function(e){return e.createAttachmentInfo})),p=new o.a(d,(function(e){return e.setAttachmentInfo})),b=new o.a(d,(function(e){return e.refreshThumbnailImageUrl})),m=new o.a(d,(function(e){return e.refreshPreviewImageUrl})),g=new o.b(d,(function(e){return e.getAttachment})),w=new o.b(d,(function(e){return e.checkPendingAttachmentOperation})),O=new o.b(d,(function(e){return e.shouldShowImageView}))},919:function(e,t,n){"use strict";var o=n(1009),r=n(907),i=n(914),a=n(37);function c(e,t,n,c){if(Object(i.e)(n))return function(e){return 2===Object(i.c)(e)?l():u()}(n);if(3===Object(i.c)(n)&&!c)return d();var s;switch(t){case 2:s={allowEdit:!1,previewMethod:r.a.Image,supportedOpenActions:[o.a.Preview,o.a.Download]};break;case 3:s={allowEdit:!1,previewMethod:r.a.NativeView,supportedOpenActions:[o.a.Preview,o.a.Download]};break;case 6:s={allowEdit:!1,previewMethod:r.a.GoogleDoc,supportedOpenActions:[o.a.Preview]};break;case 4:s={allowEdit:e.wacEdit,previewMethod:r.a.Wac,supportedOpenActions:[o.a.Preview,o.a.Download]};break;case 5:s={allowEdit:!1,previewMethod:r.a.Audio,supportedOpenActions:[o.a.Preview,o.a.Download]};break;case 7:s={allowEdit:!1,previewMethod:r.a.PdfJs,supportedOpenActions:[o.a.Preview]};break;case 8:case 9:case 10:s=l();break;case 11:s={allowEdit:!1,previewMethod:r.a.Text,supportedOpenActions:[o.a.Preview,o.a.Download]};break;case 12:s={allowEdit:!1,previewMethod:r.a.Video,supportedOpenActions:[o.a.Preview,o.a.Download]};break;case 1:s={allowEdit:!1,previewMethod:r.a.Unsupported,supportedOpenActions:[]};break;case 13:s=Object(a.f)("cal-ics-preview")?{allowEdit:!1,previewMethod:r.a.CalendarEvent,supportedOpenActions:[o.a.Preview,o.a.Download]}:u();break;default:s=function(e){return e.__type===i.a.attachmentTypes.REFERENCE_ATTACHMENT_TYPE||e.__type===i.a.attachmentTypes.LINK_ATTACHMENT_TYPE}(n)?d():u()}return s}function u(){return{allowEdit:!1,previewMethod:r.a.Unsupported,supportedOpenActions:[o.a.Download]}}function d(){return{allowEdit:!1,previewMethod:r.a.Unsupported,supportedOpenActions:[o.a.OpenInNewTab]}}function l(){return{allowEdit:!1,previewMethod:r.a.ItemAttachment,supportedOpenActions:[o.a.Preview,o.a.Download]}}var s=n(93),f=(Object(s.action)("setPreviewLoaded")((function(e,t){e.previewLoaded=t})),Object(s.action)("setIsPlaceholderAttachment")((function(e,t){e.isPlaceholderAttachment=t}))),h=Object(s.action)("setThumbnailLoadState")((function(e,t){e.thumbnailLoadState=t}));function p(e,t,n,o,i,a){return void 0===a&&(a=null),{attachmentId:e,thumbnailLoadState:0,previewLoaded:!1,isCloudy:n,isReadOnly:t,isPlaceholderAttachment:o,strategy:{allowEdit:!1,previewMethod:r.a.Unsupported,supportedOpenActions:[]},parentItemId:a,fileType:i}}var b=n(18);function m(){return Object(b.a)().SessionSettings.CompanyName}function g(e){return e.supportedOpenActions.length&&e.supportedOpenActions[0]||o.a.NoAction}n.d(t,"d",(function(){return c})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return r.a})),n.d(t,"a",(function(){return o.a}))},964:function(e,t,n){"use strict";var o=n(12),r=n(4),i={attachments:new o.ObservableMap({})},a=Object(r.createStore)("attachment",i);t.a=a},969:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u}));var o=n(1067),r=n(78);function i(){return o.a.shouldShow}function a(){return o.a.shouldShow&&o.a.shouldHideReadingPaneOutsideSxS}function c(e){return i()&&Object(r.f)(e,o.a.extendedViewState.attachmentId)}function u(e){return i()&&(e&&e.composeId===o.a.composeId||!e&&o.a.composeId)}},978:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c}));var o=n(4),r=Object(o.action)("reloadReadingPaneAfterClosingSxS"),i=Object(o.action)("onSxSChangeOrClose",(function(e,t){return{selectedLinkId:e,isSelectedLinkReadOnly:t}})),a=Object(o.action)("showSxS",(function(e,t,n,o){return{customization:e,extendedViewState:t,editState:n,selectedLinkId:o}})),c=Object(o.action)("closeSxS")},992:function(e,t,n){"use strict";var o=n(1347),r=n(73),i=n(978);n(0);var a,c=n(1067),u=(n(919),n(969));function d(){return Object(u.a)()}!function(e){e[e.Mail=0]="Mail",e[e.FilesHub=1]="FilesHub",e[e.DeepLink=2]="DeepLink",e[e.GroupFilesHub=3]="GroupFilesHub"}(a||(a={}));var l=n(1406),s=n(1174),f=n(1178),h=n(1428);n.d(t,"C",(function(){return b})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return O})),n.d(t,"q",(function(){return v})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return S})),n.d(t,"t",(function(){return A})),n.d(t,"u",(function(){return E})),n.d(t,"y",(function(){return P})),n.d(t,"v",(function(){return j})),n.d(t,"w",(function(){return I})),n.d(t,"x",(function(){return M})),n.d(t,"z",(function(){return T})),n.d(t,"A",(function(){return C})),n.d(t,"B",(function(){return k})),n.d(t,"D",(function(){return x})),n.d(t,"F",(function(){return i.c})),n.d(t,"E",(function(){return i.b})),n.d(t,"G",(function(){return i.d})),n.d(t,"g",(function(){return i.a})),n.d(t,"H",(function(){return c.a})),n.d(t,"e",(function(){return o})),n.d(t,"i",(function(){return u.a})),n.d(t,"j",(function(){return u.b})),n.d(t,"k",(function(){return u.c})),n.d(t,"l",(function(){return u.d})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return l.a})),n.d(t,"b",(function(){return s.a})),n.d(t,"c",(function(){return f.a})),n.d(t,"a",(function(){return h.a}));var p=new r.c((function(){return Promise.all([n.e(1),n.e(76),n.e(658),n.e(7),n.e(494)]).then(n.bind(null,13828))})),b=new r.b(p,(function(e){return e})),m=new r.b(p,(function(e){return e.canCloseSxS})),g=new r.b(p,(function(e){return e.closeComposeInSxS})),w=new r.b(p,(function(e){return e.createImageGalleryFromAttachmentViewStateIds})),O=new r.b(p,(function(e){return e.editAndReply})),v=new r.b(p,(function(e){return e.editInDraft})),y=new r.b(p,(function(e){return e.forceCloseSxS})),S=new r.a(p,(function(e){return e.logUsageWithSxSCustomData})),A=new r.b(p,(function(e){return e.onBeforeImageGalleryItemSelected})),E=new r.b(p,(function(e){return e.onChangeByImageGallery})),P=new r.b(p,(function(e){return e.onSxSReadingPaneChange})),j=new r.b(p,(function(e){return e.onPendingNavigation})),I=new r.b(p,(function(e){return e.onPreviewOperationFinished})),M=new r.b(p,(function(e){return e.onPreviewOperationStart})),T=new r.b(p,(function(e){return e.openComposeInSxS})),C=new r.b(p,(function(e){return e.reloadTextPreview})),k=new r.b(p,(function(e){return e.showSxS})),x=new r.a(p,(function(e){return e.tryCloseSxS}));new r.b(p,(function(e){return e.tryExitSxSEditMode}))}}]);
//# sourceMappingURL=owa.MailHotKeys.js.map
self.scriptsLoaded['owa.MailHotKeys.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailHotKeys.js'] = (new Date()).getTime();