(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(26)},19:function(e,n,t){},20:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),r=t(8),l=t.n(r),o=(t(19),t(20),t(1)),d=t(2),s=t(3);function c(){var e=Object(d.a)(["\n  /* width: 100vw; */\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  place-content: center;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 30px;\n  margin: auto 0;\n\n  h3 {\n    margin: 0px 0px 5px 0px;\n  }\n  .item {\n    width: 310px;\n    height: 310px;\n    overflow: visible;\n    stroke: #000;\n    stroke-width: 2px;\n    stroke-linejoin: round;\n    stroke-linecap: round;\n    display: flex;\n  }\n\n  #drag {\n    margin-bottom: 1rem;\n  }\n  #links {\n    margin: 1rem;\n  }\n  #drew {\n    font-size: 18px;\n    font-weight: 400;\n    stroke: none;\n  }\n\n  #box-title {\n    font-size: 1.5rem;\n    font-weight: 600;\n    margin: 0 auto;\n    stroke: none;\n    fill: black;\n  }\n\n  #box-content {\n    font-size: 1rem;\n    font-weight: 200;\n    stroke: none;\n    fill: black;\n  }\n\n  #box-content-last {\n    font-size: 1rem;\n    font-weight: 200;\n    font: italic;\n    stroke: none;\n    fill: black;\n  }\n"]);return c=function(){return e},e}var u=s.a.div(c());function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var v=a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),h=a.a.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),p=function(e){var n=e.svgRef,t=m(e,["svgRef"]);return a.a.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",ref:n},t),v,h)};a.a.forwardRef(function(e,n){return a.a.createElement(p,f({svgRef:n},e))}),t.p;function b(){var e=Object(d.a)(["\n  text-align: center;\n  #arrow {\n    display: grid;\n  }\n"]);return b=function(){return e},e}s.a.div(b());function x(){var e=Object(d.a)(["\n  margin: 2px;\n  display: flex;\n  text-align: left;\n  a {\n    transition: 200ms ease;\n  }\n  a:link,\n  a:visited {\n    text-decoration: none;\n    color: #bd8e00;\n    font-size: 11px;\n  }\n  a:hover {\n    color: #404040;\n  }\n"]);return x=function(){return e},e}var g=s.a.div(x());function w(e){return a.a.createElement(g,null,a.a.createElement("a",{href:e.link},e.title))}var y={hidden:{opacity:0,pathLength:0,fill:"rgba(255, 255, 255, 0)"},visible:{opacity:1,pathLength:1,fill:"rgba(255, 255, 255, 0)"}},E={hidden:{opacity:0},visible:{opacity:1}},k=function(){return i.createElement(u,null,i.createElement(o.a.div,{id:"drag",drag:!0,dragConstraints:{top:-0,left:-0,right:0,bottom:0}},i.createElement(o.a.svg,{xmlns:"http://www.w3.org/2000/svg",className:"item"},i.createElement("text",{id:"drew",x:"10",y:"37"},"drew"),i.createElement(o.a.text,{id:"box-title",x:"10",y:"95",variants:y,initial:"hidden",animate:"visible",transition:{default:{delay:10,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}},"Full Stack Developer"),i.createElement(o.a.text,{id:"box-content",x:"10",y:"130",variants:y,initial:"hidden",animate:"visible",transition:{default:{delay:2,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}},"Proficient in React, Vue, Node, Express"),i.createElement(o.a.text,{id:"box-content",x:"10",y:"150",variants:y,initial:"hidden",animate:"visible",transition:{default:{delay:3,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}},"NoSQL and SQL"),i.createElement(o.a.text,{id:"box-content",x:"10",y:"170",variants:y,initial:"hidden",animate:"visible",transition:{default:{delay:4,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}},"AWS Services"),i.createElement(o.a.text,{id:"box-content",x:"10",y:"190",variants:y,initial:"hidden",animate:"visible",transition:{default:{delay:5,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}},"Docker, Kubernetes, Virtualization"),i.createElement(o.a.text,{id:"box-content",x:"10",y:"210",variants:y,initial:"hidden",animate:"visible",transition:{default:{delay:600,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}},"TDD with Jest"),i.createElement(o.a.text,{id:"box-content",x:"10",y:"230",variants:y,initial:"hidden",animate:"visible",transition:{default:{delay:70,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}},"UX, UI"),i.createElement(o.a.text,{id:"box-content-last",x:"10",y:"260",variants:y,initial:"hidden",animate:"visible",transition:{default:{delay:80,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}},"And more."),i.createElement(o.a.path,{d:"M0 30 L0 310 H200 310 L310 30 60 30",variants:y,initial:"hidden",animate:"visible",transition:{default:{delayChildren:2,duration:2,ease:"easeInOut"},fill:{duration:2,ease:[1,0,.8,1]}}}))),i.createElement(o.a.div,{id:"links",variants:E,initial:"hidden",animate:"visible",transition:{delay:2.2,default:{duration:2}}},i.createElement("h3",null,"drew nguyen"),i.createElement(w,{link:"https://www.linkedin.com/in/andrew-knguyen/",title:"LinkedIn"}),i.createElement(w,{link:"https://angel.co/drew-nguyen.co",title:"AngelList"}),i.createElement(w,{link:"https://github.com/drewngyen/",title:"GitHub"})),i.createElement(o.a.div,{variants:E,initial:"hidden",animate:"visible",transition:{delay:4.2,default:{duration:2}}}))};function O(){var e=Object(d.a)(["\n  border: 2px solid black;\n  height: 250px;\n  width: 150px;\n  background: black;\n  color: white;\n  margin: 1rem;\n"]);return O=function(){return e},e}s.a.div(O());function I(){var e=Object(d.a)(["\n  display: flex;\n  place-content: center;\n"]);return I=function(){return e},e}s.a.div(I());var j=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.59ed8745.chunk.js.map