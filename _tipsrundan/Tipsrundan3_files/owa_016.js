self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.RetentionPolicies.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[453],{10946:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"DeleteFolderField:#Exchange"},e)}},10947:function(e){e.exports=JSON.parse('{"a":"I6b"}')},10948:function(e,t,n){(t=e.exports=n(63)(!1)).push([e.i,"._2Ij1xLT_HLp88M37zkVcqx{font-weight:600}html[dir] ._23f4dMU1_LGLt4GgPo3Lk9 .ms-ContextualMenu-header{padding:0 4px}._2XmjPcdNPHzJnErHgc7pg8{font-weight:700}",""]),t.locals={checkedItem:"_2Ij1xLT_HLp88M37zkVcqx",sectionHeader:"_23f4dMU1_LGLt4GgPo3Lk9",checkmark:"_2XmjPcdNPHzJnErHgc7pg8"}},10949:function(e){e.exports=JSON.parse('{"a":"J6b","b":"K6b","c":"L6b"}')},10950:function(e){e.exports=JSON.parse('{"a":"H6b"}')},1433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ItemChange:#Exchange"},e)}},1514:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"SetItemField:#Exchange"},e)}},1544:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(18);function i(){var e=Object(r.a)().PolicySettings;return e?{OutboundCharset:e.OutboundCharset,UseGB18030:e.UseGB18030,UseISO885915:e.UseISO885915}:{OutboundCharset:"AutoDetect"}}},1711:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"Message:#Exchange"},e)}},1958:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"DeleteItemField:#Exchange"},e)}},2138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),i=n(2394);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("UpdateItem",e,t)}},2195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"UpdateItemRequest:#Exchange"},e)}},2394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"UpdateItemJsonRequest:#Exchange"},e)}},2575:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"SetFolderField:#Exchange"},e)}},3251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ApplyConversationActionRequest:#Exchange"},e)}},3252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ConversationAction:#Exchange"},e)}},3253:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n(331),o=n(5009),a=n.n(o);function c(e,t,n){if(void 0===t&&(t=Object(i.getJsonRequestHeader)()),!e||!e.ConversationActions||0===e.ConversationActions.length)throw new Error("ApplyConversationAction requestBody is invalid!");n=n||{};var o=Object(r.__assign)({},n),c=o.headers?new Headers(o.headers):new Headers;return c.set("X-OWA-ActionSource","ApplyConversationAction_"+e.ConversationActions[0].Action),o.headers=c,a()({Header:t,Body:e},o).then((function(e){return e.Body.ResponseMessages.Items[0]})).catch((function(e){return Promise.reject(e)}))}},331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(292),i=n(293),o=n(291),a=n(287);t.getJsonRequestHeader=function(e){return r.default({RequestServerVersion:"Exchange2015",TimeZoneContext:i.default({TimeZoneDefinition:o.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return a.default({PropertySetId:e,PropertyName:t,PropertyType:n})}},5009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),i=n(5010);t.default=function(e,t){return void 0===e||e.__type||(e=i.default(e)),r.makeServiceRequest("ApplyConversationAction",e,t)}},5010:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"ApplyConversationActionJsonRequest:#Exchange"},e)}},7788:function(e,t,n){var r=n(10948),i=n(64);"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!1);r.locals&&(e.exports=r.locals)},9425:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(4),o=Object(i.action)("ON_ARCHIVE_TAG_FOR_FOLDER_CHANGED",(function(e,t,n){return{folder:e,tagValue:t,actionSource:n}})),a=Object(i.action)("ON_DELETE_TAG_FOR_FOLDER_CHANGED",(function(e,t,n){return{folder:e,tagValue:t,actionSource:n}})),c=Object(i.action)("ON_ARCHIVE_TAG_FOR_FOLDER_UPDATE_SUCCESS",(function(e,t){return{folder:e,archiveTag:t}})),s=Object(i.action)("ON_DELETE_TAG_FOR_FOLDER_UPDATE_SUCCESS",(function(e,t){return{folder:e,deleteTag:t}})),u=Object(i.action)("ON_RETENTION_TAG_FOR_ITEMS_UPDATE_SUCCESS",(function(e,t,n){return{tag:e,isArchiveTag:t,itemIds:n}})),l=Object(i.action)("ON_RETENTION_TAG_FOR_ITEMS_CHANGED",(function(e,t,n,r,i){return{isArchiveTag:e,tagValue:t,itemIds:n,actionSource:r,mailboxInfo:i}})),d=Object(i.action)("ON_RETENTION_TAG_FOR_CONVERSATIONS_CHANGED",(function(e,t,n,r,i,o,a){return{isArchiveTag:e,tagValue:t,folderId:n,conversationActionContexts:r,itemIds:i,actionSource:o,mailboxInfo:a}})),f=n(836),v=n(2575),p=n.n(v),g=n(10946),h=n.n(g),_=n(847),y=n.n(_),b=n(1425),I=n.n(b),O="ArchivePolicyParentRow",T="DeletePolicyParentRow",P="FolderArchiveTag";function C(e,t,n){var r={Path:y()({FieldURI:t}),Folder:n?t===P?I()({ArchiveTag:n}):I()({PolicyTag:n}):null},i=[n?p()(r):h()(r)];return Object(f.X)(e,i)}var m=n(44),A=n(193);function j(e){var t=e.isArchiveTag,n=e.actionSource,r=e.responseClass;Object(A.o)("TnS_RetentionPolicySelected",[t,n,r])}function S(e){var t=e.folder,n=e.retentionId,r=e.inheritSubMenuIdentifier,i=r===O?t.ArchiveTag:t.PolicyTag;return!!i&&n!=i.Value||!i&&n!=r}Object(i.orchestrator)(o,(function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var t,n,i,o,a,s;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:if(t=e.folder,n=e.tagValue,i=e.actionSource,!S({folder:t,retentionId:n,inheritSubMenuIdentifier:O}))return[2];r.label=1;case 1:return r.trys.push([1,3,,4]),o=n===O?null:{Value:n,IsExplicit:!0},[4,C(t.DistinguishedFolderId||t.FolderId.Id,P,o)];case 2:return"Success"===(a=r.sent()).ResponseClass&&c(t,o),j({isArchiveTag:!0,actionSource:i,responseClass:a.ResponseClass}),[3,4];case 3:return s=r.sent(),m.d.error("Error while updating folder archive tag"+s),[3,4];case 4:return[2]}}))}))})),Object(i.orchestrator)(a,(function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var t,n,i,o,a,c;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:if(t=e.folder,n=e.tagValue,i=e.actionSource,!S({folder:t,retentionId:n,inheritSubMenuIdentifier:T}))return[2];r.label=1;case 1:return r.trys.push([1,3,,4]),o=n===T?null:{Value:n,IsExplicit:!0},[4,C(t.DistinguishedFolderId||t.FolderId.Id,"FolderPolicyTag",o)];case 2:return"Success"===(a=r.sent()).ResponseClass&&s(t,o),j({isArchiveTag:!1,actionSource:i,responseClass:a.ResponseClass}),[3,4];case 3:return c=r.sent(),m.d.error("Error while updating folder delete tag"+c),[3,4];case 4:return[2]}}))}))}));var R=n(1433),k=n.n(R),E=n(454),x=n.n(E),M=n(2138),N=n.n(M),F=n(2195),w=n.n(F),D=n(155),V=n(1711),H=n.n(V),L=n(1514),U=n.n(L),G=n(1958),q=n.n(G),J=n(1544);function B(e,t,n,i){var o=function(e,t,n){var i,o=t?"ItemArchiveTag":"ItemPolicyTag",a=t?"ArchiveTag":"PolicyTag",c=[n?U()({Path:y()({FieldURI:o}),Item:H()((i={},i[a]=n,i))}):q()({Path:y()({FieldURI:o})})],s=[];return e.forEach((function(e){return s.push(k()({Updates:c,ItemId:x()({Id:e})}))})),w()(Object(r.__assign)({ItemChanges:s,ConflictResolution:"AlwaysOverwrite",MessageDisposition:"SaveOnly",SuppressReadReceipts:!1,ClientSupportsIrm:!0,SendCalendarInvitationsOrCancellations:"SendToNone"},Object(J.a)()))}(e,t,n);return N()({Header:Object(D.getJsonRequestHeader)(),Body:o},i).then((function(e){return e.Body.ResponseMessages.Items[0]}))}Object(i.orchestrator)(l,(function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var t,n,i,o,a,c,s,l;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=e.isArchiveTag,n=e.tagValue,i=e.itemIds,o=e.actionSource,a=e.mailboxInfo,[4,B(i,t,c=n===O||n===T?null:{Value:n,IsExplicit:!0},a.requestOptions)];case 1:return"Success"==(s=r.sent()).ResponseClass&&u(c,t,i),j({isArchiveTag:t,actionSource:o,responseClass:s.ResponseClass}),[3,3];case 2:return l=r.sent(),m.d.error("Error while updating item retention tag "+l),[3,3];case 3:return[2]}}))}))}));var Q=n(3251),z=n.n(Q),X=n(3252),K=n.n(X),Z=n(886),$=n.n(Z),W=n(209),Y=n.n(W),ee=n(340),te=n.n(ee),ne=n(3253),re=n(839);function ie(e,t,n,r,i){var o=function(e,t,n,r){var i=e.map((function(e){return function(e,t,n,r){var i=K()({Action:"SetRetentionPolicy",ConversationId:x()({Id:e.conversationId}),RetentionPolicyType:n});t&&(i.RetentionPolicyTagId=t);if(r){var o=$()({BaseFolderId:(a=r,Object(re.a)(a)?Y()({Id:a}):te()({Id:a}))});i.ContextFolderId=o}var a;return i}(e,t,n,r)}));return z()({ConversationActions:i,ReturnMovedItemIds:!1})}(e,t,n,r);return Object(ne.a)(o)}Object(i.orchestrator)(d,(function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var t,n,i,o,a,c,s,l,d,f;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=e.isArchiveTag,n=e.tagValue,i=e.folderId,o=e.conversationActionContexts,a=e.itemIds,c=e.actionSource,s=e.mailboxInfo,[4,ie(o,(l=n===O||n===T)?null:n,t?1:0,i,s.requestOptions)];case 1:return"Success"==(d=r.sent()).ResponseClass&&u(l?null:{Value:n,IsExplicit:!0},t,a),j({isArchiveTag:t,actionSource:c,responseClass:d.ResponseClass}),[3,3];case 2:return f=r.sent(),m.d.error("Error while updating conversation retention tag"+f),[3,3];case 3:return[2]}}))}))}));Object(i.mutator)(c,(function(e){var t=e.folder,n=e.archiveTag;t.ArchiveTag=n})),Object(i.mutator)(s,(function(e){var t=e.folder,n=e.deleteTag;t.PolicyTag=n}));var oe=n(846);Object(i.mutator)(u,(function(e){var t=e.itemIds,n=e.tag,r=e.isArchiveTag;t.forEach((function(e){var t=oe.x.items.get(e);t&&(r?t.ArchiveTag=n:t.PolicyTag=n)}))}));var ae=n(983),ce=n(833),se=n(842);var ue=n(10947),le=n(8),de=n(134),fe=n(7788);function ve(e){var t=e.retentionId,n=e.displayName,r=e.isChecked,i=e.subMenuProps;return{key:t,text:n,data:t,onClick:e.onClickCallback,checked:r,itemProps:r?{styles:{label:fe.checkedItem}}:null,iconProps:r?{iconName:"CheckMark",className:fe.checkmark}:null,subMenuProps:i}}var pe=n(10949);function ge(e){var t=e.retentionId,n=e.retentionPolicyTags,r=e.folderType,i=e.isArchive,o=e.isChecked,a=e.onClickCallback,c=function(e,t){return 12==e?t?Object(le.a)(pe.a):Object(le.a)(pe.b):Object(le.a)(pe.c)}(r,i);return ve({retentionId:t,displayName:17!=r?function(e){var t=e.retentionPolicyTags,n=e.folderType,r=e.isArchive,i=e.defaultName;return t.reduce((function(e,t){return t.Type===n&&t.IsArchive==r?t.DisplayName:e}),i)}({retentionPolicyTags:n,folderType:r,isArchive:i,defaultName:c}):c,isChecked:o,subMenuProps:null,onClickCallback:a})}var he=n(7788);function _e(e,t,n,r,i){var o=!1;return(12==r?[]:e.map((function(e){var r=e.RetentionId===n;return r&&(o=!0),ve({retentionId:e.RetentionId,displayName:e.DisplayName,isChecked:t&&r,subMenuProps:null,onClickCallback:i})}))).concat(ge({retentionId:O,retentionPolicyTags:e,folderType:r,isArchive:!0,isChecked:t&&!o,onClickCallback:i}))}var ye=n(10950);var be=n(7788);function Ie(e,t,n,r,i,o){var a=!1;return(17!=r||"archive"===i?[]:function(e){var t={},n=e.filter((function(e){return null==e.ParentLabelIdentity||e.ParentLabelIdentity.length<=0})).reduce((function(e,n){var r={parentPolicyTag:n,childrenPolicyTags:[]};return e.push(r),t[n.RetentionId]=r,e}),[]);return e.filter((function(e){return null!=e.ParentLabelIdentity&&e.ParentLabelIdentity.length>0&&e.ParentLabelIdentity in t})).forEach((function(e){t[e.ParentLabelIdentity].childrenPolicyTags.push(e)})),n}(e).map((function(e){var r=function(e,t,n,r){var i=e.parentPolicyTag,o=e.childrenPolicyTags,a=i.RetentionId===n;if(null==o||0==o.length)return{item:ve({retentionId:i.RetentionId,displayName:i.DisplayName,isChecked:t&&a,subMenuProps:null,onClickCallback:r}),policyFound:a};var c=!1,s=o.map((function(e){var i=e.RetentionId===n;return i&&(c=!0),ve({retentionId:e.RetentionId,displayName:e.DisplayName,isChecked:t&&i,subMenuProps:null,onClickCallback:r})}));return{item:ve({retentionId:i.RetentionId,displayName:i.DisplayName,isChecked:t&&a,subMenuProps:{items:s},onClickCallback:null}),policyFound:c}}(e,t,n,o);return r.policyFound&&(a=!0),r.item}))).concat(ge({retentionId:T,retentionPolicyTags:e,folderType:r,isArchive:!1,isChecked:t&&!a,onClickCallback:o}))}function Oe(e){var t=e.retentionPolicyTagList,n=e.showTagSelection,i=e.selectedArchiveTag,o=e.selectedDeleteTag,a=e.treeType,c=e.distinguishedFolderId,s=e.hasArchive,u=e.onArchivePolicyClickedCallback,l=e.onDeletePolicyClickedCallback,d=[],f=s&&a!=se.c,v=function(e){switch(e){case"msgfolderroot":case"archivemsgfolderroot":return 12;case"deleteditems":case"archivedeleteditems":return 3;case"recoverableitemsdeletions":case"archiverecoverableitemsdeletions":return 18;case"calendar":return 1;case"contacts":return 2;case"conversationhistory":return 16;case"drafts":return 4;case"inbox":return 5;case"junkemail":return 6;case"journal":return 7;case"notes":return 8;case"outbox":return 9;case"sentitems":return 10;case"syncissues":return 15;case"tasks":return 11;case"none":default:return 17}}(c),p=t.filter((function(e){return e.IsVisible&&e.IsArchive})).sort(Te),g=t.filter((function(e){return e.IsVisible&&!e.IsArchive})).sort(Te);return f&&d.push.apply(d,Object(r.__spread)(function(e,t,n,r,i){var o=(null==n?void 0:n.IsExplicit)?n.Value:null;return[{key:"archiveSection",className:he.sectionHeader,itemType:de.a.Section,sectionProps:{bottomDivider:!0,title:Object(le.a)(ue.a),items:_e(e,t,o,r,i)}}]}(p,n,i,v,u))),d.push.apply(d,Object(r.__spread)(function(e,t,n,r,i,o){var a=(null==n?void 0:n.IsExplicit)?n.Value:null;return[{key:"deleteSection",className:be.sectionHeader,itemType:de.a.Section,sectionProps:{title:Object(le.a)(ye.a),items:Ie(e,t,a,r,i,o)}}]}(g,n,o,v,c,l))),{items:d}}function Te(e,t){return e.RetentionPeriod&&t.RetentionPeriod?e.RetentionPeriod-t.RetentionPeriod:t.RetentionPeriod?1:-1}var Pe=n(18),Ce=n(1243);var me=n(989);function Ae(e,t,n){var i=ce.S.tableViews.get(e);if(!i)return null;var o=function(e){if(e&&Object(ae.e)(e.tableQuery)){var t=ae.i.tryImportForRender();return t?t(e.tableQuery):[]}return Object(Pe.a)().RetentionPolicyTags}(i);if(!o||!o.length)return null;var a=function(e){var t,n;if(e&&Object(ae.e)(e.tableQuery))t=null,n="groups";else{var r=Object(Ce.g)(e),i=r&&Object(f.p)().get(r);if(!i)return null;t=i.DistinguishedFolderId||i.FolderId.Id,n=i.treeType}return{folderId:t,treeType:n}}(i);if(!a)return null;var c,s,u,l=Object(r.__spread)(i.selectedRowKeys.keys());return n?(c=n.ArchiveTag,s=n.PolicyTag,u=!0):(c=1==l.length?ce.b.getArchiveTag(l[0],i):null,s=1==l.length?ce.b.getPolicyTag(l[0],i):null,u=1==l.length),Oe({retentionPolicyTagList:o,showTagSelection:u,selectedArchiveTag:c,selectedDeleteTag:s,treeType:a.treeType,distinguishedFolderId:"none",hasArchive:je(i),onArchivePolicyClickedCallback:Se({isArchivePolicyClicked:!0,tableView:i,selectedTag:c,folderId:a.folderId,clientItem:n,actionSource:t}),onDeletePolicyClickedCallback:Se({isArchivePolicyClicked:!1,tableView:i,selectedTag:s,folderId:a.folderId,clientItem:n,actionSource:t})})}function je(e){return(!e||!Object(ae.e)(e.tableQuery))&&!!Object(Pe.a)().SessionSettings.HasArchive}function Se(e){var t=e.isArchivePolicyClicked,n=e.tableView,i=e.selectedTag,o=e.folderId,a=e.clientItem,c=e.actionSource;return function(e,s){if(function(e){var t=e.retentionTag,n=e.retentionId,r=e.inheritSubMenuIdentifier;return!!t&&n!=t.Value||!t&&n!=r}({retentionTag:i,retentionId:s.data,inheritSubMenuIdentifier:t?O:T})){var u="RPCSAOverflow"==c||1===n.tableQuery.listViewType,f=Object(r.__spread)(n.selectedRowKeys.keys()),v=Object(me.b)(n);if(u){var p="RPCSAOverflow"==c?[a.ItemId.Id]:f.map((function(e){return Object(ce.H)(e,n.id).clientId.Id}));l(t,s.data,p,c,v)}else{var g=f.map((function(e){return Object(ce.h)(e,n.id)}));p=f.reduce((function(e,t){var i=Object(ce.G)(t,n.id);return i&&e.push.apply(e,Object(r.__spread)(i.itemIds)),e}),[]);d(t,s.data,o,g,p,c,v)}}}}var Re=n(3189),ke=n(208);function Ee(e){if(Object(ke.a)())return null;var t=Object(Pe.a)(),n=e.treeType,i=t.RetentionPolicyTags;return i&&0!==i.length&&n!==se.j?{key:"AssignPolicy",name:Object(le.a)(Re.a),disabled:!1,subMenuProps:Oe(Object(r.__assign)(Object(r.__assign)({},e),{showTagSelection:!0,retentionPolicyTagList:i,hasArchive:!!t.SessionSettings.HasArchive}))}:null}n.d(t,"getAssignPolicyPropertiesForMailContextMenu",(function(){return Ae})),n.d(t,"onArchiveTagForFolderChanged",(function(){return o})),n.d(t,"onDeleteTagForFolderChanged",(function(){return a})),n.d(t,"getRetentionPolicyMenuItem",(function(){return Ee}))}}]);
//# sourceMappingURL=owa.RetentionPolicies.js.map
self.scriptsLoaded['owa.RetentionPolicies.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.RetentionPolicies.js'] = (new Date()).getTime();