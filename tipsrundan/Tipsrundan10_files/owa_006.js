self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.3.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[3],{128:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"a",(function(){return n}));var n,r={none:0,all:1,inputOnly:2};!function(t){t[t.vertical=0]="vertical",t[t.horizontal=1]="horizontal",t[t.bidirectional=2]="bidirectional",t[t.domOrder=3]="domOrder"}(n||(n={}))},441:function(t,e,o){"use strict";function n(t){var e=function(t){var e;"function"==typeof Event?e=new Event(t):(e=document.createEvent("Event")).initEvent(t,!0,!0);return e}("MouseEvents");e.initEvent("click",!0,!0),t.dispatchEvent(e)}o.d(e,"a",(function(){return n}))},580:function(t,e,o){"use strict";o.d(e,"a",(function(){return k}));var n,r=o(0),i=o(1),s=o(128),a=o(70),c=o(129),u=o(49),l=o(158),h=o(310),_=o(142),f=o(62),p=o(188),d=o(65),b=o(194),m=o(178),v=o(441),g=o(332),E=o(107),F=o(272),y="data-no-horizontal-wrap",O="ms-FocusZone";var j,A={},w=new Set,x=["text","number","password","email","tel","url","search"],I=!1,k=function(t){function e(e){var o=t.call(this,e)||this;return o._disposables=[],o._root=i.createRef(),o._onFocus=function(t){if(!o._portalContainsElement(t.target)){var e,n=o.props,r=n.onActiveElementChanged,i=n.doNotAllowFocusEventToPropagate,s=n.onFocusNotification,u=o._isImmediateDescendantOfZone(t.target);if(s&&s(),u)e=t.target;else for(var l=t.target;l&&l!==o._root.current;){if(Object(a.n)(l)&&o._isImmediateDescendantOfZone(l)){e=l;break}l=Object(c.a)(l,I)}var h=!o._activeElement;e&&e!==o._activeElement&&((u||h)&&o._setFocusAlignment(e,!0,!0),o._activeElement=e,h&&o._updateTabIndexes()),r&&r(o._activeElement,t),i&&t.stopPropagation()}},o._onBlur=function(){o._setParkedFocus(!1)},o._onKeyDownCapture=function(t){t.which===u.a.tab&&w.forEach((function(t){return t._updateTabIndexes()}))},o._onMouseDown=function(t){if(!o._portalContainsElement(t.target)&&!o.props.disabled){for(var e=t.target,n=[];e&&e!==o._root.current;)n.push(e),e=Object(c.a)(e,I);for(;n.length&&((e=n.pop())&&Object(a.n)(e)&&o._setActiveElement(e,!0),!Object(a.m)(e)););}},o._onKeyDown=function(t){if(!o._portalContainsElement(t.target)){var e=o.props,n=e.direction,r=e.disabled,i=e.isInnerZoneKeystroke;if(!(r||(o.props.onKeyDown&&o.props.onKeyDown(t),t.isDefaultPrevented()||o._getDocument().activeElement===o._root.current&&o._isInnerZone))){if(i&&i(t)&&o._isImmediateDescendantOfZone(t.target)){var c=o._getFirstInnerZone();if(c){if(!c.focus(!0))return}else{if(!Object(a.l)(t.target))return;if(!o.focusElement(Object(a.j)(t.target,t.target.firstChild,!0)))return}}else{if(t.altKey)return;switch(t.which){case u.a.space:if(o._tryInvokeClickForFocusable(t.target))break;return;case u.a.left:if(n!==s.a.vertical&&o._moveFocusLeft())break;return;case u.a.right:if(n!==s.a.vertical&&o._moveFocusRight())break;return;case u.a.up:if(n!==s.a.horizontal&&o._moveFocusUp())break;return;case u.a.down:if(n!==s.a.horizontal&&o._moveFocusDown())break;return;case u.a.tab:if(o.props.allowTabKey||o.props.handleTabKey===s.b.all||o.props.handleTabKey===s.b.inputOnly&&o._isElementInput(t.target)){var h=!1;if(o._processingTabKey=!0,n!==s.a.vertical&&o._shouldWrapFocus(o._activeElement,y))h=(Object(l.a)()?!t.shiftKey:t.shiftKey)?o._moveFocusLeft():o._moveFocusRight();else h=t.shiftKey?o._moveFocusUp():o._moveFocusDown();if(o._processingTabKey=!1,h)break}return;case u.a.home:if(o._isElementInput(t.target)&&!o._shouldInputLoseFocus(t.target,!1))return!1;var _=o._root.current&&o._root.current.firstChild;if(o._root.current&&_&&o.focusElement(Object(a.j)(o._root.current,_,!0)))break;return;case u.a.end:if(o._isElementInput(t.target)&&!o._shouldInputLoseFocus(t.target,!0))return!1;var f=o._root.current&&o._root.current.lastChild;if(o._root.current&&o.focusElement(Object(a.k)(o._root.current,f,!0,!0,!0)))break;return;case u.a.enter:if(o._tryInvokeClickForFocusable(t.target))break;return;default:return}}t.preventDefault(),t.stopPropagation()}}},Object(h.a)(o),o._id=Object(_.a)("FocusZone"),o._focusAlignment={x:0,y:0},o._processingTabKey=!1,o}return r.__extends(e,t),e.getOuterZones=function(){return w.size},e.prototype.componentDidMount=function(){var t=this._root.current;if(A[this._id]=this,t){for(var e=Object(f.a)(t),o=Object(c.a)(t,I);o&&o!==this._getDocument().body&&1===o.nodeType;){if(Object(a.m)(o)){this._isInnerZone=!0;break}o=Object(c.a)(o,I)}this._isInnerZone||w.add(this),e&&1===w.size&&(j=Object(p.a)(e,"keydown",this._onKeyDownCapture,!0)),this._disposables.push(Object(p.a)(t,"blur",this._onBlur,!0)),this._updateTabIndexes(),this.props.defaultActiveElement&&(this._activeElement=this._getDocument().querySelector(this.props.defaultActiveElement),this.focus())}},e.prototype.componentDidUpdate=function(){var t=this._root.current,e=this._getDocument();if(e&&this._lastIndexPath&&(e.activeElement===e.body||e.activeElement===t)){var o=Object(a.g)(t,this._lastIndexPath);o?(this._setActiveElement(o,!0),o.focus(),this._setParkedFocus(!1)):this._setParkedFocus(!0)}},e.prototype.componentWillUnmount=function(){delete A[this._id],this._isInnerZone||w.delete(this),this._disposables.forEach((function(t){return t()})),delete this._disposables,0===w.size&&j&&j()},e.prototype.render=function(){var t=this.props,e=t.rootProps,o=t.ariaDescribedBy,s=t.ariaLabelledBy,a=t.className,c=Object(d.j)(this.props,d.k),u=this.props.as||this.props.elementType||"div";return this._evaluateFocusBeforeRender(),i.createElement(u,r.__assign({"aria-labelledby":s,"aria-describedby":o},c,e,{className:Object(b.css)((n||(n=Object(F.b)({selectors:{":focus":{outline:"none"}}},O)),n),a),ref:this._root,"data-focuszone-id":this._id,onKeyDown:this._onKeyDown,onFocus:this._onFocus,onMouseDownCapture:this._onMouseDown}),this.props.children)},e.prototype.focus=function(t){if(void 0===t&&(t=!1),this._root.current){if(!t&&"true"===this._root.current.getAttribute("data-is-focusable")&&this._isInnerZone){var e=this._getOwnerZone(this._root.current);if(e!==this._root.current){var o=A[e.getAttribute("data-focuszone-id")];return!!o&&o.focusElement(this._root.current)}return!1}if(!t&&this._activeElement&&Object(m.a)(this._root.current,this._activeElement)&&Object(a.n)(this._activeElement))return this._activeElement.focus(),!0;var n=this._root.current.firstChild;return this.focusElement(Object(a.j)(this._root.current,n,!0))}return!1},e.prototype.focusElement=function(t){var e=this.props.onBeforeFocus;return!(e&&!e(t))&&(!!t&&(this._setActiveElement(t),this._activeElement&&this._activeElement.focus(),!0))},e.prototype.setFocusAlignment=function(t){this._focusAlignment=t},e.prototype._evaluateFocusBeforeRender=function(){var t=this._root.current,e=this._getDocument();if(e){var o=e.activeElement;if(o!==t){var n=Object(m.a)(t,o,!1);this._lastIndexPath=n?Object(a.d)(t,o):void 0}}},e.prototype._setParkedFocus=function(t){var e=this._root.current;e&&this._isParked!==t&&(this._isParked=t,t?(this.props.allowFocusRoot||(this._parkedTabIndex=e.getAttribute("tabindex"),e.setAttribute("tabindex","-1")),e.focus()):this.props.allowFocusRoot||(this._parkedTabIndex?(e.setAttribute("tabindex",this._parkedTabIndex),this._parkedTabIndex=void 0):e.removeAttribute("tabindex")))},e.prototype._setActiveElement=function(t,e){var o=this._activeElement;this._activeElement=t,o&&(Object(a.m)(o)&&this._updateTabIndexes(o),o.tabIndex=-1),this._activeElement&&(this._focusAlignment&&!e||this._setFocusAlignment(t,!0,!0),this._activeElement.tabIndex=0)},e.prototype._tryInvokeClickForFocusable=function(t){if(t===this._root.current)return!1;do{if("BUTTON"===t.tagName||"A"===t.tagName||"INPUT"===t.tagName||"TEXTAREA"===t.tagName)return!1;if(this._isImmediateDescendantOfZone(t)&&"true"===t.getAttribute("data-is-focusable")&&"true"!==t.getAttribute("data-disable-click-on-enter"))return Object(v.a)(t),!0;t=Object(c.a)(t,I)}while(t!==this._root.current);return!1},e.prototype._getFirstInnerZone=function(t){if(!(t=t||this._activeElement||this._root.current))return null;if(Object(a.m)(t))return A[t.getAttribute("data-focuszone-id")];for(var e=t.firstElementChild;e;){if(Object(a.m)(e))return A[e.getAttribute("data-focuszone-id")];var o=this._getFirstInnerZone(e);if(o)return o;e=e.nextElementSibling}return null},e.prototype._moveFocus=function(t,e,o,n){void 0===n&&(n=!0);var r=this._activeElement,i=-1,c=void 0,u=!1,l=this.props.direction===s.a.bidirectional;if(!r||!this._root.current)return!1;if(this._isElementInput(r)&&!this._shouldInputLoseFocus(r,t))return!1;var h=l?r.getBoundingClientRect():null;do{if(r=t?Object(a.j)(this._root.current,r):Object(a.k)(this._root.current,r),!l){c=r;break}if(r){var _=e(h,r.getBoundingClientRect());if(-1===_&&-1===i){c=r;break}if(_>-1&&(-1===i||_<i)&&(i=_,c=r),i>=0&&_<0)break}}while(r);if(c&&c!==this._activeElement)u=!0,this.focusElement(c);else if(this.props.isCircularNavigation&&n)return t?this.focusElement(Object(a.j)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement(Object(a.k)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return u},e.prototype._moveFocusDown=function(){var t=this,e=-1,o=this._focusAlignment.x;return!!this._moveFocus(!0,(function(n,r){var i=-1,s=Math.floor(r.top),a=Math.floor(n.bottom);return s<a?t._shouldWrapFocus(t._activeElement,"data-no-vertical-wrap")?999999999:-999999999:((-1===e&&s>=a||s===e)&&(e=s,i=o>=r.left&&o<=r.left+r.width?0:Math.abs(r.left+r.width/2-o)),i)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)},e.prototype._moveFocusUp=function(){var t=this,e=-1,o=this._focusAlignment.x;return!!this._moveFocus(!1,(function(n,r){var i=-1,s=Math.floor(r.bottom),a=Math.floor(r.top),c=Math.floor(n.top);return s>c?t._shouldWrapFocus(t._activeElement,"data-no-vertical-wrap")?999999999:-999999999:((-1===e&&s<=c||a===e)&&(e=a,i=o>=r.left&&o<=r.left+r.width?0:Math.abs(r.left+r.width/2-o)),i)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)},e.prototype._moveFocusLeft=function(){var t=this,e=this._shouldWrapFocus(this._activeElement,y);return!!this._moveFocus(Object(l.a)(),(function(o,n){var r=-1;return(Object(l.a)()?parseFloat(n.top.toFixed(3))<parseFloat(o.bottom.toFixed(3)):parseFloat(n.bottom.toFixed(3))>parseFloat(o.top.toFixed(3)))&&n.right<=o.right&&t.props.direction!==s.a.vertical?r=o.right-n.right:e||(r=-999999999),r}),void 0,e)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)},e.prototype._moveFocusRight=function(){var t=this,e=this._shouldWrapFocus(this._activeElement,y);return!!this._moveFocus(!Object(l.a)(),(function(o,n){var r=-1;return(Object(l.a)()?parseFloat(n.bottom.toFixed(3))>parseFloat(o.top.toFixed(3)):parseFloat(n.top.toFixed(3))<parseFloat(o.bottom.toFixed(3)))&&n.left>=o.left&&t.props.direction!==s.a.vertical?r=n.left-o.left:e||(r=-999999999),r}),void 0,e)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)},e.prototype._setFocusAlignment=function(t,e,o){if(this.props.direction===s.a.bidirectional&&(!this._focusAlignment||e||o)){var n=t.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2;this._focusAlignment||(this._focusAlignment={x:r,y:i}),e&&(this._focusAlignment.x=r),o&&(this._focusAlignment.y=i)}},e.prototype._isImmediateDescendantOfZone=function(t){return this._getOwnerZone(t)===this._root.current},e.prototype._getOwnerZone=function(t){for(var e=Object(c.a)(t,I);e&&e!==this._root.current&&e!==this._getDocument().body;){if(Object(a.m)(e))return e;e=Object(c.a)(e,I)}return e},e.prototype._updateTabIndexes=function(t){!t&&this._root.current&&(this._defaultFocusElement=null,t=this._root.current,this._activeElement&&!Object(m.a)(t,this._activeElement)&&(this._activeElement=null)),this._activeElement&&!Object(a.n)(this._activeElement)&&(this._activeElement=null);for(var e=t&&t.children,o=0;e&&o<e.length;o++){var n=e[o];Object(a.m)(n)?"true"===n.getAttribute("data-is-focusable")&&(this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==n?"-1"!==n.getAttribute("tabindex")&&n.setAttribute("tabindex","-1"):(this._defaultFocusElement=n,"0"!==n.getAttribute("tabindex")&&n.setAttribute("tabindex","0"))):(n.getAttribute&&"false"===n.getAttribute("data-is-focusable")&&n.setAttribute("tabindex","-1"),Object(a.n)(n)?this.props.disabled?n.setAttribute("tabindex","-1"):this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==n?"-1"!==n.getAttribute("tabindex")&&n.setAttribute("tabindex","-1"):(this._defaultFocusElement=n,"0"!==n.getAttribute("tabindex")&&n.setAttribute("tabindex","0")):"svg"===n.tagName&&"false"!==n.getAttribute("focusable")&&n.setAttribute("focusable","false")),this._updateTabIndexes(n)}},e.prototype._isElementInput=function(t){return!(!t||!t.tagName||"input"!==t.tagName.toLowerCase()&&"textarea"!==t.tagName.toLowerCase())},e.prototype._shouldInputLoseFocus=function(t,e){if(!this._processingTabKey&&t&&t.type&&x.indexOf(t.type.toLowerCase())>-1){var o=t.selectionStart,n=o!==t.selectionEnd,r=t.value,i=t.readOnly;if(n||o>0&&!e&&!i||o!==r.length&&e&&!i||this.props.handleTabKey&&(!this.props.shouldInputLoseFocusOnArrowKey||!this.props.shouldInputLoseFocusOnArrowKey(t)))return!1}return!0},e.prototype._shouldWrapFocus=function(t,e){return!this.props.checkForNoWrap||Object(a.p)(t,e)},e.prototype._portalContainsElement=function(t){return t&&!!this._root.current&&Object(g.a)(t,this._root.current)},e.prototype._getDocument=function(){return Object(E.a)(this._root.current)},e.defaultProps={isCircularNavigation:!1,direction:s.a.bidirectional},e}(i.Component)}}]);
//# sourceMappingURL=owa.3.js.map
self.scriptsLoaded['owa.3.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.3.js'] = (new Date()).getTime();