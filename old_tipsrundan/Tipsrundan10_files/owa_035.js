self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.UserActivityManager.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[530],{3211:function(t,e,n){"use strict";n.r(e);var i=n(231),r=n(20),o=n(51);function a(){return"performance"in self&&self.performance.now&&self.performance.now()}var c,u,s=-1,l={events:["mousedown","keydown","scroll","mousewheel"],inactivityThreshold:6e4,element:document,passive:!0,capture:!0},f=null,d=[],m=!1;function p(t){d.push(t)}function v(){return u}function h(t){if(c=Date.now(),m&&"mousedown"==t.type){u.totalClicks++;var e=a()-t.timeStamp,n=d.some((function(t){return e>t.threshold}));u.firstClick==s&&(u.firstClick=t.timeStamp,u.firstLag=e),n&&setTimeout((function(){d.forEach((function(n){e>n.threshold&&n.callback({lag:e,eventType:t.type,eventTime:t.timeStamp,totalEvents:u.totalClicks})}))}))}}function w(){return null===f&&y(),Date.now()-c>f.inactivityThreshold&&!(Object(i.a)()&&Object(o.f)("auth-sharedActivityBasedTimeout")&&Object(r.a)().PolicySettings.IsSharedActivityBasedTimeoutEnabled)}function y(){var t,e,n,i,r;null===f&&(f=l,c=Date.now(),m="number"==typeof a(),d=[],u={firstLag:-1,firstClick:-1,totalClicks:0},t=f.element,e=f.events,n=h,i=f.capture,r=f.passive,null!=t&&null!=e&&e.forEach((function(e){return t.addEventListener(e,n,{capture:i,passive:r})})))}n.d(e,"initializeActivityManager",(function(){return y})),n.d(e,"isUserIdle",(function(){return w})),n.d(e,"registerClickLagReport",(function(){return p})),n.d(e,"getClickReport",(function(){return v}))}}]);
//# sourceMappingURL=owa.UserActivityManager.js.map
self.scriptsLoaded['owa.UserActivityManager.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.UserActivityManager.js'] = (new Date()).getTime();