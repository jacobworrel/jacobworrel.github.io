(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t);a(32),a(152);var n=a(0),r=a.n(n),o=a(151),i=a(173),l=a.n(i),c=[{title:"What to Ask Yourself Before Adding an NPM Package to Your Project",link:"https://medium.freecodecamp.org/what-to-ask-yourself-before-adding-an-npm-package-to-your-project-6b92ba13070d"},{title:"How to Debug Your Point-Free Code with Ramda",link:"https://itnext.io/how-to-debug-your-point-free-code-with-ramda-5c46bd743781"},{title:"Advanced React/Redux Techniques | How to Use Refs on Connected Components",link:"https://itnext.io/advanced-react-redux-techniques-how-to-use-refs-on-connected-components-e27b55c06e34"},{title:"Babel’s Transform Class Properties Plugin: How it Works and What it Means for your React Apps",link:"https://medium.com/@jacobworrel/babels-transform-class-properties-plugin-how-it-works-and-what-it-means-for-your-react-apps-6983539ffc22"},{title:"ES6 Arrow Functions | What Not To Do",link:"https://medium.com/@jacobworrel/es6-arrow-functions-what-not-to-do-c28c96b4f396"}],s=function(e){var t=e.link,a=e.title;return r.a.createElement("li",{className:l.a.article},r.a.createElement("a",{href:t},a))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("ul",{className:"portfolio"},c.map(function(e){return r.a.createElement(s,Object.assign({key:e.title},e))})))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(143),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(145),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},146:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(51),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,a){e.exports={clipText:"logo-module--clipText--39wqv",clipTextCover:"logo-module--clipTextCover--smAql",clipTextTwelve:"logo-module--clipTextTwelve--QCka5"}},148:function(e,t,a){e.exports={navItem:"nav-module--navItem--1IW7H"}},149:function(e,t,a){e.exports={container:"social-module--container--2-FKh",listInline:"social-module--listInline--2_9aM",fab:"social-module--fab--1omII"}},150:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a.n(l),s=(a(32),a(144)),u=a(147),d=u.clipText+" "+u.clipTextCover+" "+u.clipTextTwelve,m=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.Link,{to:"/",className:"navbar-brand"},i.a.createElement("div",{className:d},"Jacob Worrel")),i.a.createElement("button",{className:"navbar-toggler mx-auto",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})))},p=a(148),f=a.n(p),b=[{id:"projects",label:"Projects"},{id:"writing",label:"Writing"},{id:"contact",label:"Contact"}],g=function(e){var t=e.id,a=e.label;return i.a.createElement("li",{className:f.a.navItem},i.a.createElement(s.Link,{to:"/"+t,id:t,className:"nav-link"},a))},h=function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement(m,null),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},b.map(function(e){return i.a.createElement(g,Object.assign({key:e.id},e))}))))},v=(a(152),a(149)),w=a.n(v),y=[{id:"github",link:"https://github.com/jacobworrel"},{id:"twitter",link:"https://twitter.com/jacob_worrel"},{id:"medium",link:"https://medium.com/@jacobworrel"},{id:"linkedin",link:"https://www.linkedin.com/in/jacobworrel"}],k=function(e){var t=e.id,a=e.link;return i.a.createElement("li",null,i.a.createElement("a",{href:a},i.a.createElement("i",{className:"fab fa-"+t+" fa-fw fa-2x "+w.a.fab})))};k.propTypes={id:c.a.string,link:c.a.string};var E=function(){return i.a.createElement("div",{className:w.a.container},i.a.createElement("ul",{className:w.a.listInline},y.map(function(e){return i.a.createElement(k,Object.assign({key:e.id},e))})))},x=(a(153),a(154),a(150),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){a(155)},n.render=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(h,null),i.a.createElement("div",{className:"jumbotron"},this.props.children),i.a.createElement(E,null))},t}(i.a.Component));x.propTypes={children:c.a.node.isRequired};t.a=x},173:function(e,t,a){e.exports={article:"writing-module--article--2yT4H"}}}]);
//# sourceMappingURL=component---src-pages-writing-js-66e846bdd013c45ea3f5.js.map