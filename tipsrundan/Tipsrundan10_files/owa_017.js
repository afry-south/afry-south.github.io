self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.33.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[33],{2300:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=n(0).__assign},2724:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(9),o={root:"ms-TeachingBubble",body:"ms-TeachingBubble-body",bodyContent:"ms-TeachingBubble-bodycontent",closeButton:"ms-TeachingBubble-closebutton",content:"ms-TeachingBubble-content",footer:"ms-TeachingBubble-footer",header:"ms-TeachingBubble-header",headerIsCondensed:"ms-TeachingBubble-header--condensed",headerIsSmall:"ms-TeachingBubble-header--small",headerIsLarge:"ms-TeachingBubble-header--large",headline:"ms-TeachingBubble-headline",image:"ms-TeachingBubble-image",primaryButton:"ms-TeachingBubble-primaryButton",secondaryButton:"ms-TeachingBubble-secondaryButton",subText:"ms-TeachingBubble-subText",button:"ms-Button",buttonLabel:"ms-Button-label"},r=Object(a.keyframes)({"0%":{opacity:0,animationTimingFunction:a.AnimationVariables.easeFunction1,transform:"scale3d(.90,.90,.90)"},"100%":{opacity:1,transform:"scale3d(1,1,1)"}}),i=function(e){return[{display:"block",maxWidth:364,border:0,outline:"transparent",width:"calc(100% + 1px)",animationName:""+r,animationDuration:"300ms",animationTimingFunction:"linear",animationFillMode:"both"},e&&{maxWidth:456}]},s=function(e,t,n){return t?[e.headerIsCondensed,{marginBottom:14}]:[n&&e.headerIsSmall,!n&&e.headerIsLarge,{selectors:{":not(:last-child)":{marginBottom:14}}}]},l=function(e){var t,n,r,l=e.calloutClassName,c=e.hasCondensedHeadline,u=e.hasSmallHeadline,d=e.hasCloseButton,m=e.isWide,h=e.primaryButtonClassName,p=e.secondaryButtonClassName,f=e.theme,g=!c&&!u,b=f.palette,v=f.semanticColors,y=f.fonts,x=Object(a.getGlobalClassNames)(o,f);return{root:[x.root,y.medium,l],body:[x.body,{selectors:{":not(:last-child)":{marginBottom:20}}}],bodyContent:[x.bodyContent,{padding:"20px 24px 20px 24px"}],closeButton:[x.closeButton,{position:"absolute",right:0,top:0,margin:"15px 15px 0 0",borderRadius:0,color:b.white,fontSize:y.small.fontSize,selectors:{":hover":{background:b.themeDarkAlt,color:b.white},":active":{background:b.themeDark,color:b.white},":focus":{border:"1px solid "+v.variantBorder}}}],content:[x.content].concat(i(m),[m&&{display:"flex"}]),footer:[x.footer,{display:"flex",flex:"auto",alignItems:"center",color:b.white,selectors:(t={},t["."+x.button+":not(:first-child)"]={marginLeft:10},t)}],header:[x.header].concat(s(x,c,u),[d&&{marginRight:24},(c||u)&&[y.medium,{fontWeight:a.FontWeights.semibold}]]),headline:[x.headline,{margin:0,color:b.white,fontWeight:a.FontWeights.semibold},g&&[{fontSize:y.xLarge.fontSize}]],imageContent:[x.header,x.image,m&&{display:"flex",alignItems:"center",maxWidth:154}],primaryButton:[x.primaryButton,h,{backgroundColor:b.white,borderColor:b.white,color:b.themePrimary,whiteSpace:"nowrap",selectors:(n={},n["."+x.buttonLabel]=y.medium,n[":hover"]={backgroundColor:b.themeLighter,borderColor:b.themeLighter,color:b.themePrimary},n[":focus"]={backgroundColor:b.themeLighter,borderColor:b.white},n[":active"]={backgroundColor:b.white,borderColor:b.white,color:b.themePrimary},n)}],secondaryButton:[x.secondaryButton,p,{backgroundColor:b.themePrimary,borderColor:b.white,whiteSpace:"nowrap",selectors:(r={},r["."+x.buttonLabel]=[y.medium,{color:b.white}],r["&:hover, &:focus"]={backgroundColor:b.themeDarkAlt,borderColor:b.white},r[":active"]={backgroundColor:b.themePrimary,borderColor:b.white},r)}],subText:[x.subText,{margin:0,fontSize:y.medium.fontSize,color:b.white,fontWeight:a.FontWeights.regular}],subComponentStyles:{callout:{root:i(m).concat([y.medium]),beak:[{background:b.themePrimary}],calloutMain:[{background:b.themePrimary}]}}}}},2829:function(e,t,n){"use strict";var a=n(1),o=n(2925),r=n(4436),i=n(9),s={root:"ms-StackItem"},l={start:"flex-start",end:"flex-end"};n.d(t,"a",(function(){return c}));var c=Object(r.a)((function(e){var t=e.children;if(a.Children.count(t)<1)return null;var n=Object(o.b)(e,{root:"div"});return Object(o.c)(n.root,null,t)}),{displayName:"StackItem",styles:function(e,t,n){var a=e.grow,o=e.shrink,r=e.disableShrink,c=e.align,u=e.verticalFill,d=e.order,m=e.className,h=Object(i.getGlobalClassNames)(s,t);return{root:[t.fonts.medium,h.root,{margin:n.margin,height:u?"100%":"auto",width:"auto"},a&&{flexGrow:!0===a?1:a},(r||!a&&!o)&&{flexShrink:0},o&&!r&&{flexShrink:1},c&&{alignSelf:l[c]||c},d&&{order:d},m]}}})},2925:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),o=n(1),r=n(9),i=n(152),s=n(2300);function l(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=e;return i.isSlot?0===o.Children.count(n)?i(t):(n=o.Children.toArray(n),i(a.__assign({},t,{children:n}))):o.createElement.apply(o,[e,t].concat(n))}function c(e,t){void 0===t&&(t={});var n=t.defaultProp,i=void 0===n?"children":n;return function(t,n,l,c){if(o.isValidElement(n))return n;var u=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var a={},o=[],i=0,l=t;i<l.length;i++){var c=l[i];o.push(c&&c.className),s.a.apply(void 0,[a].concat(c))}return a.className=Object(r.mergeStyles)(e,o),a}(c,t,function(e,t){var n,a;"string"==typeof t||"number"==typeof t||"boolean"==typeof t?((n={})[e]=t,a=n):a=t;return a}(i,n));if(l){if(l.component){var d=l.component;return o.createElement(d,a.__assign({},u))}if(l.render)return l.render(u,e)}return o.createElement(e,a.__assign({},u))}}var u=Object(i.b)((function(e){return c(e)}));function d(e,t){var n={},a=e,o=function(e){if(t.hasOwnProperty(e)){var o=function(n){for(var o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];if(o.length>0)throw new Error("Any module using getSlots must use withSlots. Please see withSlots javadoc for more info.");return m(t[e],n,a[e],a.slots&&a.slots[e],a._defaultStyles&&a._defaultStyles[e])};o.isSlot=!0,n[e]=o}};for(var r in t)o(r);return n}function m(e,t,n,a,o){return void 0!==e.create?e.create(t,n,a,o):u(e)(t,n,a,o)}},2946:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),o=n(1),r=n(164),i=n(151),s=n(2947),l=n(561),c=n(58),u=Object(r.a)(),d=function(e){function t(t){var n=e.call(this,t)||this;return n.rootElement=o.createRef(),n.state={},n._defaultCalloutProps={beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1,directionalHint:c.DirectionalHint.rightCenter},n}return a.__extends(t,e),t.prototype.focus=function(){this.rootElement.current&&this.rootElement.current.focus()},t.prototype.render=function(){var e=this.props,t=e.calloutProps,n=e.targetElement,r=e.onDismiss,i=e.hasCloseButton,c=void 0===i?this.props.hasCloseIcon:i,d=e.isWide,m=e.styles,h=e.theme,p=e.target,f=a.__assign({},this._defaultCalloutProps,t),g={theme:h,isWide:d,calloutClassName:f?f.className:void 0,hasCloseButton:c},b=u(m,g),v=b.subComponentStyles?b.subComponentStyles.callout:void 0;return o.createElement(l.a,a.__assign({target:p||n,onDismiss:r},f,{className:b.root,styles:v,hideOverflow:!0}),o.createElement("div",{ref:this.rootElement},o.createElement(s.a,a.__assign({},this.props))))},t.defaultProps={calloutProps:{beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1,directionalHint:c.DirectionalHint.rightCenter}},t}(i.a)},2947:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(291),o=n(2948),r=n(2724),i=Object(a.a)(o.a,r.a,void 0,{scope:"TeachingBubbleContent"})},2948:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),o=n(1),r=n(164),i=n(49),s=n(151),l=n(340),c=n(592),u=n(480),d=n(262),m=n(63),h=n(4049),p=n(775),f=Object(r.a)(),g=function(e){function t(t){var n=e.call(this,t)||this;return n.rootElement=o.createRef(),n._onKeyDown=function(e){n.props.onDismiss&&e.which===i.a.escape&&n.props.onDismiss()},n.state={},n}return a.__extends(t,e),t.prototype.componentDidMount=function(){this.props.onDismiss&&document.addEventListener("keydown",this._onKeyDown,!1)},t.prototype.componentWillUnmount=function(){this.props.onDismiss&&document.removeEventListener("keydown",this._onKeyDown)},t.prototype.focus=function(){this.rootElement.current&&this.rootElement.current.focus()},t.prototype.render=function(){var e,t,n,r,i,s=this.props,m=s.children,g=s.illustrationImage,b=s.primaryButtonProps,v=s.secondaryButtonProps,y=s.headline,x=s.hasCondensedHeadline,w=s.hasCloseButton,C=void 0===w?this.props.hasCloseIcon:w,B=s.onDismiss,_=s.closeButtonAriaLabel,k=s.hasSmallHeadline,S=s.isWide,N=s.styles,E=s.theme,j=s.ariaDescribedBy,W=s.ariaLabelledBy,O=s.footerContent,T=f(N,{theme:E,hasCondensedHeadline:x,hasSmallHeadline:k,hasCloseButton:C,isWide:S,primaryButtonClassName:b?b.className:void 0,secondaryButtonClassName:v?v.className:void 0});if(g&&g.src&&(e=o.createElement("div",{className:T.imageContent},o.createElement(d.a,a.__assign({},g)))),y){var I="string"==typeof y?"p":"div";t=o.createElement("div",{className:T.header},o.createElement(I,{role:"heading",className:T.headline,id:W},y))}if(m){var P="string"==typeof m?"p":"div";n=o.createElement("div",{className:T.body},o.createElement(P,{className:T.subText,id:j},m))}return(b||v||O)&&(r=o.createElement(h.a,{className:T.footer,horizontal:!0,horizontalAlign:O?"space-between":"end"},o.createElement(h.a.Item,{align:"center"},o.createElement("span",null,O)),o.createElement(h.a.Item,null,v&&o.createElement(l.a,a.__assign({},v,{className:T.secondaryButton})),b&&o.createElement(c.a,a.__assign({},b,{className:T.primaryButton}))))),C&&(i=o.createElement(u.a,{className:T.closeButton,iconProps:{iconName:"Cancel"},title:_,ariaLabel:_,onClick:B})),o.createElement("div",{className:T.content,ref:this.rootElement,role:"dialog",tabIndex:-1,"aria-labelledby":W,"aria-describedby":j,"data-is-focusable":!0},e,o.createElement(p.a,{isClickableOutsideFocusTrap:!0},o.createElement("div",{className:T.bodyContent},t,n,r,i)))},t.defaultProps={hasCondensedHeadline:!1,imageProps:{imageFit:m.b.cover,width:364,height:130}},t}(s.a)},3965:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(291),o=n(2946),r=n(2724),i=Object(a.a)(o.a,r.a,void 0,{scope:"TeachingBubble"})},4049:function(e,t,n){"use strict";var a=n(0),o=n(1),r=n(2925),i=n(4436),s=n(345),l=n(65),c=function(e,t){return t.spacing.hasOwnProperty(e)?t.spacing[e]:e},u=function(e){var t=parseFloat(e),n=isNaN(t)?0:t,a=isNaN(t)?"":t.toString();return{value:n,unit:e.substring(a.toString().length)||"px"}},d=function(e,t){if(void 0===e||"number"==typeof e||""===e)return e;var n=e.split(" ");return n.length<2?c(e,t):n.reduce((function(e,n){return c(e,t)+" "+c(n,t)}))},m=n(9),h={start:"flex-start",end:"flex-end"},p={root:"ms-Stack",inner:"ms-Stack-inner"},f=n(2829);n.d(t,"a",(function(){return b}));var g={Item:f.a},b=Object(i.a)((function(e){var t=e.as,n=void 0===t?"div":t,i=e.disableShrink,c=e.wrap,u=a.__rest(e,["as","disableShrink","wrap"]);Object(s.a)("Stack",e,{gap:"tokens.childrenGap",maxHeight:"tokens.maxHeight",maxWidth:"tokens.maxWidth",padding:"tokens.padding"});var d=o.Children.map(e.children,(function(e,t){if(!e)return null;if((r=e)&&"object"==typeof r&&r.type&&r.type.displayName===f.a.displayName){var n={shrink:!i};return o.cloneElement(e,a.__assign({},n,e.props))}var r;return e})),m=Object(l.j)(u,l.k),h=Object(r.b)(e,{root:n,inner:"div"});return c?Object(r.c)(h.root,a.__assign({},m),Object(r.c)(h.inner,null,d)):Object(r.c)(h.root,a.__assign({},m),d)}),{displayName:"Stack",styles:function(e,t,n){var o,r,i,s,l,f,g,b=e.verticalFill,v=e.horizontal,y=e.reversed,x=e.gap,w=e.grow,C=e.wrap,B=e.horizontalAlign,_=e.verticalAlign,k=e.disableShrink,S=e.className,N=Object(m.getGlobalClassNames)(p,t),E=n&&n.childrenGap?n.childrenGap:x,j=n&&n.maxHeight?n.maxHeight:e.maxHeight,W=n&&n.maxWidth?n.maxWidth:e.maxWidth,O=n&&n.padding?n.padding:e.padding,T=function(e,t){if(void 0===e||""===e)return{rowGap:{value:0,unit:"px"},columnGap:{value:0,unit:"px"}};if("number"==typeof e)return{rowGap:{value:e,unit:"px"},columnGap:{value:e,unit:"px"}};var n=e.split(" ");if(n.length>2)return{rowGap:{value:0,unit:"px"},columnGap:{value:0,unit:"px"}};if(2===n.length)return{rowGap:u(c(n[0],t)),columnGap:u(c(n[1],t))};var a=u(c(e,t));return{rowGap:a,columnGap:a}}(E,t),I=T.rowGap,P=T.columnGap,D=""+-.5*P.value+P.unit,G=""+-.5*I.value+I.unit,H={textOverflow:"ellipsis"},L={"> *:not(.ms-StackItem)":{flexShrink:k?0:1}};return C?{root:[N.root,{flexWrap:"wrap",maxWidth:W,maxHeight:j,width:"auto",overflow:"visible",height:"100%"},B&&(o={},o[v?"justifyContent":"alignItems"]=h[B]||B,o),_&&(r={},r[v?"alignItems":"justifyContent"]=h[_]||_,r),S,{display:"flex"},v&&{height:b?"100%":"auto"}],inner:[N.inner,{display:"flex",flexWrap:"wrap",marginLeft:D,marginRight:D,marginTop:G,marginBottom:G,overflow:"visible",boxSizing:"border-box",padding:d(O,t),width:0===P.value?"100%":"calc(100% + "+P.value+P.unit+")",maxWidth:"100vw",selectors:a.__assign({"> *":a.__assign({margin:""+.5*I.value+I.unit+" "+.5*P.value+P.unit},H)},L)},B&&(i={},i[v?"justifyContent":"alignItems"]=h[B]||B,i),_&&(s={},s[v?"alignItems":"justifyContent"]=h[_]||_,s),v&&{flexDirection:y?"row-reverse":"row",height:0===I.value?"100%":"calc(100% + "+I.value+I.unit+")",selectors:{"> *":{maxWidth:0===P.value?"100%":"calc(100% - "+P.value+P.unit+")"}}},!v&&{flexDirection:y?"column-reverse":"column",height:"calc(100% + "+I.value+I.unit+")",selectors:{"> *":{maxHeight:0===I.value?"100%":"calc(100% - "+I.value+I.unit+")"}}}]}:{root:[N.root,{display:"flex",flexDirection:v?y?"row-reverse":"row":y?"column-reverse":"column",flexWrap:"nowrap",width:"auto",height:b?"100%":"auto",maxWidth:W,maxHeight:j,padding:d(O,t),boxSizing:"border-box",selectors:a.__assign((l={"> *":H},l[y?"> *:not(:last-child)":"> *:not(:first-child)"]=[v&&{marginLeft:""+P.value+P.unit},!v&&{marginTop:""+I.value+I.unit}],l),L)},w&&{flexGrow:!0===w?1:w},B&&(f={},f[v?"justifyContent":"alignItems"]=h[B]||B,f),_&&(g={},g[v?"alignItems":"justifyContent"]=h[_]||_,g),S]}},statics:g})},4436:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),o=n(1),r=n(9),i=n(195),s=n(149),l=n(2925),c=n(2300);function u(e,t){void 0===t&&(t={});var n=t.factoryOptions,u=(void 0===n?{}:n).defaultProp,d=function(n){var l,u,d,m=(l=t.displayName,u=o.useContext(i.a),d=t.fields,s.a.getSettings(d||["theme","styles","tokens"],l,u.customizations)),h=t.state;h&&(n=a.__assign({},n,h(n)));var p=n.theme||m.theme,f=function e(t,n){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];for(var r={},i=0,s=a;i<s.length;i++){var l=s[i];l&&(l="function"==typeof l?l(t,n):l,Array.isArray(l)&&(l=e.apply(void 0,[t,n].concat(l))),c.a.apply(void 0,[r].concat(l)))}return r}(n,p,t.tokens,m.tokens,n.tokens),g=function(e,t,n){for(var a=[],o=3;o<arguments.length;o++)a[o-3]=arguments[o];return r.concatStyleSets.apply(void 0,a.map((function(a){return"function"==typeof a?a(e,t,n):a})))}(n,p,f,t.styles,m.styles,n.styles),b=a.__assign({},n,{styles:g,tokens:f,_defaultStyles:g});return e(b)};return d.displayName=t.displayName||e.name,u&&(d.create=Object(l.a)(d,{defaultProp:u})),Object(c.a)(d,t.statics),d}}}]);
//# sourceMappingURL=owa.33.js.map
self.scriptsLoaded['owa.33.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.33.js'] = (new Date()).getTime();