---
toc: true
description: "(Originally from blog.londogard.com) What are PWAs? How do I create or transform my web app into one? How can I deploy them (freely) via GitHub Pages?"
categories:
  - Frontend
tags:
  - PWA
toc: true
title: "TIL: GitHub Pages + Progressive Web App (PWA) = ❤️"
comments: true
author: Hampus Londögård
---


⚠️ This post is originally available from [blog.londogard](https://blog.londogard.com/pwa/til/2021/04/11/til-pwa-github-pages).

### What
Progressive Web Apps (PWAs) are web applications that are deployed on the Web and available on essentially every platform directly (Android, iOS, Linux, Windows, ... you name it).  
They're created the same way regular Web Apps are, with minor modifications like a new separate `.js`-file that runs a `serviceWorker`. This `serviceWorker` is the core of the PWA and handle things like _caching_ & _installation_. 

PWAs allows you to:
- Share logic between all OS:s
- Not have a heavy runtime associated (it uses the bundled browser engine)
	- On Windows/MacOS/Android/iOS the browser is included as part of OS. On Linux not as much, but who has Linux without a browser?
- Use your existing knowledge AND technologies of regular webapps

The performance is good enough for most apps and you can easily cache content to make the app offline-first. Of course native apps are, and will always be, better but this is a good step in the right direction for simple developer to share their work on multiple platforms. 

> The best example of an PWA I know of is [twitter](http://mobile.twitter.com/), a PWA I prefer to the native app

You can test my PWA that's written in Kotlin (targeting JS) with fritz2 on [colorkidz.londogard.com](https://colorkidz.londogard.com/). ColorKidz is a simple app that creates colouring pages out of regular images and I believe it really showcases the possibilities of PWA. ColorKidz is a MVP that was fast & easy and now shared across ALL platforms!  

> **Bonus:** PWAs can be deployed to Android/Google & Windows App Store, just like a regular app

Please note that GitHub TOS prohibits deployment of commercial apps through GitHub pages. If you wish to do that take a look at the [alternative section](#alternatives) for better alternatives that are free/cheap.

### How
Building, or transforming, a Web App into a PWA is really easy and has few requirements (depending on browser). The requirements follows:
1. A _web manifest_ file
2. Serve app using HTTPS
3. A Service Worker with a `fetch event` handler
	- Allowing the app to work offline (!) 
4. (not for all browser) a `favicon`/icon

Adding more data makes your PWA even better, like safari/iOS specific icons to improve interoperability.

These requirements are pretty easy to achieve and I'll show the two most important, `serviceWorker` and `webmanifest`.

#### ServiceWorker.js
The `serviceWorker` handles the app caching, installation and
potentially some other things if you ask it too. From the docs:

> Service workers essentially act as proxy servers that sit between web applications, and the browser and network (when available). They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.

An example of this can be found on my [GitHub](https://github.com/londogard/colorkidz/blob/main/serviceWorker.js), find the code a little bit below.  
If you wish to deep dive into `serviceWorker`'s then head over to the (awesome) documentation at [Mozilla](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers) & [Google](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker).
```js
var CACHE_NAME = 'londogard-colorkidz';
var urlsToCache = [
  "/index.html",
  "/NEW.js",
  "/android-chrome-192x192.png",
  ...
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
    );
  });
self.addEventListener('fetch',() => console.log("fetch"));
```
#### Webmanifest

The next step is to create your `webmanifest` which is the "metadata" of the app. What name should it have once installed? Which icon? Is the orientation locked? There's a few knobs to tweak and turn.  
My `webmanifest` ended up something like this:
```json
{
  "short_name": "ColorKidz",
  "name": "ColorKidz",
  "description": "Turn your images into Colouring Pages",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    ...
  ],
  "start_url": "/",
  "orientation": "portrait",
  "background_color": "#FFFFFF",
  "display": "standalone",
  "scope": "/",
  "theme_color": "#FFFFFF"
}
```

#### Deploying to GitHub Pages
For the final step we're to deploy the PWA!

First off place all your files in root folder of your GitHub repo. Remember to also have a `index.html` which contains both your JS app & your `serviceWorker.js` and reference those scripts in `body`, e.g.
```html
<body>
...
<script src="NEW.js"></script>
<script src="serviceWorker.js"></script>
</body>
```

Then you need to activate GitHub Pages for the repository, whereas the [official documentation](https://pages.github.com/) is great!  
GitHub pages recently got their own tab in settings and all you need to do now is to head over there, `https://github.com/<USERNAME>/<REPO_NAME>/settings/pages` and activate GitHub pages. Make sure to also activate `https`-only if possible!

**And that's it**, simple as that. Now you've your PWA deployed through GitHub pages. The PWA should be available @ `<repo>.github.io`, but better check it in settings to be sure that it's set up that way.

### Alternatives
There exists a few alternatives that I'm aware off
- [Heroku](https://www.heroku.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Netlify](https://www.netlify.com/)

All which are supposed to be great and simple to use. The free versions of everyone is pretty darn good too!

**OBS** Please remember that it's not allowed to put up applications on GitHub Pages that are commercial according to the ToS.
