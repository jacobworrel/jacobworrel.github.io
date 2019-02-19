(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(154),i=t(144),o=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 mr-auto"},r.a.createElement("p",null,"Howdy ho! My name is Jacob."),r.a.createElement("p",null,"I'm a software engineer specialized in full stack web development. I currently work on Conversion Logic's ",r.a.createElement("a",{href:"https://www.conversionlogic.com/platform/"},"marketing analytics platform"),"."),r.a.createElement("p",null,"Recent interests include ",r.a.createElement("a",{href:"https://medium.com/@dabit3/full-stack-development-in-the-era-of-serverless-computing-c1e49bba8580"},"Serverless Computing")," and ",r.a.createElement("a",{href:"https://elm-lang.org"},"Elm"),"."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"In my free time, I like to tinker on open source. I wrote a JavaScript library called ",r.a.createElement("a",{href:"http://ac-d3.com/"},"AC-D3")," that renders dynamic media visualizations inside of D3. The project was featured in ",r.a.createElement("a",{href:"http://javascriptweekly.com/issues/342"},"JavaScript Weekly"),"."),r.a.createElement("p",null,"I also love ",r.a.createElement(i.Link,{to:"/writing"},"writing"),". I'm a regular contributor to ",r.a.createElement("a",{href:"https://itnext.io/"},"ITNEXT"),"."),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"I watch ",r.a.createElement("a",{href:"https://letterboxd.com/jacobworrel/"},"a lot")," of movies and enjoy taking ",r.a.createElement("a",{href:"https://www.instagram.com/jacobworrel/"},"pictures")," of things.")))};t(165),t(166),t(167),a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o,null))}},144:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),l=t(4),i=t.n(l),o=t(143),c=t.n(o);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var s=t(145),u=t.n(s);t.d(a,"PageRenderer",function(){return u.a});var m=t(33);t.d(a,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,a,t){var n;e.exports=(n=t(149))&&n.default||n},149:function(e,a,t){"use strict";t.r(a);t(32);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),o=t(53),c=t(2),s=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},150:function(e,a,t){e.exports={clipText:"logo-module--clipText--39wqv",clipTextCover:"logo-module--clipTextCover--smAql",clipTextTwelve:"logo-module--clipTextTwelve--QCka5"}},151:function(e,a,t){e.exports={navItem:"nav-module--navItem--1IW7H"}},153:function(e,a,t){e.exports={container:"social-module--container--2-FKh",listInline:"social-module--listInline--2_9aM",fab:"social-module--fab--1omII"}},154:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),i=t.n(l),o=(t(32),t(144)),c=t(150),s=c.clipText+" "+c.clipTextCover+" "+c.clipTextTwelve,u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Link,{to:"/",className:"navbar-brand"},r.a.createElement("div",{className:s},"Jacob Worrel")),r.a.createElement("button",{className:"navbar-toggler mx-auto",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})))},m=t(151),d=t.n(m),p=[{id:"projects",label:"Projects"},{id:"writing",label:"Writing"},{id:"contact",label:"Contact"}],f=function(e){var a=e.id,t=e.label;return r.a.createElement("li",{className:d.a.navItem},r.a.createElement(o.Link,{to:"/"+a,id:a,className:"nav-link"},t))},v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(u,null),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},p.map(function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},g=(t(146),t(153)),h=t.n(g),b=[{id:"github",link:"https://github.com/jacobworrel"},{id:"twitter",link:"https://twitter.com/jacob_worrel"},{id:"medium",link:"https://medium.com/@jacobworrel"},{id:"linkedin",link:"https://www.linkedin.com/in/jacobworrel"}],E=function(e){var a=e.id,t=e.link;return r.a.createElement("li",null,r.a.createElement("a",{href:t},r.a.createElement("i",{className:"fab fa-"+a+" fa-fw fa-2x "+h.a.fab})))};E.propTypes={id:i.a.string,link:i.a.string};var w=function(){return r.a.createElement("div",{className:h.a.container},r.a.createElement("ul",{className:h.a.listInline},b.map(function(e){return r.a.createElement(E,Object.assign({key:e.id},e))})))},y=function(e){var a=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement("div",{className:"jumbotron"},a),r.a.createElement(w,null))};y.propTypes={children:i.a.node.isRequired};a.a=y},167:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-461b8be68236f2dfd8ac.js.map