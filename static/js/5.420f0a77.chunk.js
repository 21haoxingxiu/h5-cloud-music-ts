(this["webpackJsonph5-cloud-music-ts"]=this["webpackJsonph5-cloud-music-ts"]||[]).push([[5],{135:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return i}));var a=[{name:"\u534e\u8bed\u7537",key:"1001"},{name:"\u534e\u8bed\u5973",key:"1002"},{name:"\u534e\u8bed\u7ec4\u5408",key:"1003"},{name:"\u6b27\u7f8e\u7537",key:"2001"},{name:"\u6b27\u7f8e\u5973",key:"2002"},{name:"\u6b27\u7f8e\u7ec4\u5408",key:"2003"},{name:"\u65e5\u672c\u7537",key:"6001"},{name:"\u65e5\u672c\u5973",key:"6002"},{name:"\u65e5\u672c\u7ec4\u5408",key:"6003"},{name:"\u97e9\u56fd\u7537",key:"7001"},{name:"\u97e9\u56fd\u5973",key:"7002"},{name:"\u97e9\u56fd\u7ec4\u5408",key:"7003"},{name:"\u5176\u4ed6\u7537\u6b4c\u624b",key:"4001"},{name:"\u5176\u4ed6\u5973\u6b4c\u624b",key:"4002"},{name:"\u5176\u4ed6\u7ec4\u5408",key:"4003"}],r=[{key:"A",name:"A"},{key:"B",name:"B"},{key:"C",name:"C"},{key:"D",name:"D"},{key:"E",name:"E"},{key:"F",name:"F"},{key:"G",name:"G"},{key:"H",name:"H"},{key:"I",name:"I"},{key:"J",name:"J"},{key:"K",name:"K"},{key:"L",name:"L"},{key:"M",name:"M"},{key:"N",name:"N"},{key:"O",name:"O"},{key:"P",name:"P"},{key:"Q",name:"Q"},{key:"R",name:"R"},{key:"S",name:"S"},{key:"T",name:"T"},{key:"U",name:"U"},{key:"V",name:"V"},{key:"W",name:"W"},{key:"X",name:"X"},{key:"Y",name:"Y"},{key:"Z",name:"Z"}],i=45},137:function(n,e,t){"use strict";var a=t(3),r=t(0),i=t(2),o=t(1);function c(){var n=Object(a.a)(["\n  position: fixed;\n  padding: 5px 10px;\n  padding-top: 0;\n  height: 40px;\n  width: 100%;\n  z-index: 100;\n  display: flex;\n  line-height: 40px;\n  color: ",";\n  .back {\n    margin-right: 5px;\n    font-size: 20px;\n    width: 20px;\n  }\n  > h1 {\n    font-size: ",";\n    font-weight: 700;\n  }\n"]);return c=function(){return n},n}var l=i.b.div(c(),o.c["font-color-light"],o.c["font-size-l"]),s=r.forwardRef((function(n,e){var t=n.handleClick,a=void 0===t?function(){}:t,i=n.title,o=void 0===i?"\u6807\u9898":i,c=n.isMarquee,s=void 0!==c&&c;return r.createElement(l,{ref:e},r.createElement("i",{className:"iconfont back",onClick:a},"\ue6e5"),s?r.createElement("div",{className:"marquee"},r.createElement("h1",null,o)):r.createElement("h1",null,o))}));e.a=r.memo(s)},138:function(n,e,t){"use strict";var a=t(3),r=t(0),i=t.n(r),o=t(2),c=t(6),l=t(1);function s(){var n=Object(a.a)(["\n  .icon_wrapper {\n    position: fixed;\n    z-index: 1000;\n    margin-top: -10px;\n    margin-left: -10px;\n    color: ",";\n    font-size: 14px;\n    display: none;\n    transition: transform 1s cubic-bezier(0.62, -0.1, 0.86, 0.57);\n    transform: translate3d(0, 0, 0);\n    > div {\n      transition: transform 1s;\n    }\n  }\n"]);return s=function(){return n},n}var u=o.b.div(s(),l.c["theme-color"]),f=Object(r.forwardRef)((function(n,e){var t=Object(r.useRef)(),a=Object(c.f)("transform"),o=function(n){var e="<div class='icon_wrapper'>".concat(n,"</div>"),t=document.createElement("div");return t.innerHTML=e,t.firstChild};Object(r.useEffect)((function(){for(var n=t.current,e=0;e<1;e++){var r=o('<div class="iconfont">&#xe62d;</div>');n.appendChild(r)}[].slice.call(n.children).forEach((function(n){n.setAttribute("running","false"),n.addEventListener("transitionend",(function(){this.style.display="none",this.style[a]="translate3d(0, 0, 0)",this.setAttribute("running","false"),this.querySelector("div").style[a]="translate3d(0, 0, 0)"}),!1)}))}),[]);var l=function(n){for(var e=n.x,r=n.y,i=t.current,o=function(n){var t=[].slice.call(i.children)[n];if("false"===t.getAttribute("running"))return t.style.left=e+"px",t.style.top=r+"px",t.style.display="inline-block",setTimeout((function(){t.setAttribute("running","true"),t.style[a]="translate3d(-40px, 750px, 0)",t.querySelector("div").style[a]="translate3d(-40px, 0, 0)"}),20),"break"},c=0;c<1;c++){if("break"===o(c))break}};return Object(r.useImperativeHandle)(e,(function(){return{startAnimation:l}})),i.a.createElement(u,{ref:t})}));e.a=i.a.memo(f)},139:function(n,e,t){"use strict";var a=t(4),r=t(0),i=t.n(r),o=t(3),c=t(2),l=t(1);function s(){var n=Object(o.a)(["\n  > li {\n    display: flex;\n    height: 60px;\n    align-items: center;\n    .index {\n      flex-basis: 60px;\n      width: 60px;\n      height: 60px;\n      line-height: 60px;\n      text-align: center;\n    }\n    .info {\n      box-sizing: border-box;\n      flex: 1;\n      display: flex;\n      height: 100%;\n      padding: 5px 0;\n      flex-direction: column;\n      justify-content: space-around;\n      border-bottom: 1px solid ",";\n      ","\n      >span {\n        ","\n      }\n      > span:first-child {\n        color: ",";\n      }\n      > span:last-child {\n        font-size: ",";\n        color: #bba8a8;\n      }\n    }\n  }\n"]);return s=function(){return n},n}function u(){var n=Object(o.a)(["\n  border-radius: 10px;\n  opacity: 0.98;\n  ","\n  .first_line {\n    box-sizing: border-box;\n    padding: 10px 0;\n    margin-left: 10px;\n    position: relative;\n    justify-content: space-between;\n    border-bottom: 1px solid ",";\n    .play_all {\n      display: inline-block;\n      line-height: 24px;\n      color: ",";\n      .iconfont {\n        font-size: 24px;\n        margin-right: 10px;\n        vertical-align: top;\n      }\n      .sum {\n        font-size: ",";\n        color: ",";\n      }\n      > span {\n        vertical-align: top;\n      }\n    }\n    .add_list,\n    .isCollected {\n      display: flex;\n      align-items: center;\n      position: absolute;\n      right: 0;\n      top: 0px;\n      bottom: 0;\n      width: 130px;\n      line-height: 34px;\n      background: ",";\n      color: ",";\n      font-size: 0;\n      border-radius: 3px;\n      vertical-align: top;\n      .iconfont {\n        vertical-align: top;\n        font-size: 10px;\n        margin: 0 5px 0 10px;\n      }\n      span {\n        font-size: 14px;\n        line-height: 34px;\n      }\n    }\n    .isCollected {\n      display: flex;\n      background: ",";\n      color: ",";\n    }\n  }\n"]);return u=function(){return n},n}var f=c.b.div(u(),(function(n){return n.showBackground?"background: ".concat(l.c["highlight-background-color"]):""}),l.c["border-color"],l.c["font-color-desc"],l.c["font-size-s"],l.c["font-color-desc-v2"],l.c["theme-color"],l.c["font-color-light"],l.c["background-color"],l.c["font-color-desc"]),d=c.b.ul(s(),l.c["border-color"],l.c.noWrap(),l.c.noWrap(),l.c["font-color-desc"],l.c["font-size-s"]),p=t(6),m=t(17),b=t(18),g=t(9),h=i.a.forwardRef((function(n,e){var t=Object(r.useState)(0),o=Object(a.a)(t,2),c=o[0],l=o[1],s=n.songs,u=void 0===s?[]:s,b=n.collectCount,g=n.showCollect,h=void 0===g||g,y=n.loading,x=void 0!==y&&y,v=n.usePageSplit,k=void 0!==v&&v,E=n.showBackground,O=void 0!==E&&E,j=n.musicAnimation,z=n.changePlayListDispatch,w=n.changeCurrentIndexDispatch,S=n.changeSequencePlayListDispatch,C=u.length;Object(r.useEffect)((function(){x&&(c+1+m.b>=C||l(c+m.b))}),[x,c,C]);var N,L=function(n,e){z(u),S(u),w(e),j(n.nativeEvent.clientX,n.nativeEvent.clientY)};return i.a.createElement(f,{ref:e,showBackground:O},i.a.createElement("div",{className:"first_line"},i.a.createElement("div",{className:"play_all",onClick:function(n){return L(n,0)}},i.a.createElement("i",{className:"iconfont"},"\ue73d"),i.a.createElement("span",null,"\u64ad\u653e\u5168\u90e8 ",i.a.createElement("span",{className:"sum"},"(\u5171",C,"\u9996)"))),h?(N=b,i.a.createElement("div",{className:"add_list"},i.a.createElement("i",{className:"iconfont"},"\ue600"),i.a.createElement("span",null,"\u6536\u85cf(",Math.floor(N/1e3)/10,"\u4e07)"))):null),i.a.createElement(d,null,function(n){for(var e=[],t=k?c+m.b:n.length,a=function(t){if(t>=n.length)return"break";var a=n[t];e.push(i.a.createElement("li",{key:a.id,onClick:function(n){return L(n,t)}},i.a.createElement("span",{className:"index"},t+1),i.a.createElement("div",{className:"info"},i.a.createElement("span",null,a.name),i.a.createElement("span",null,a.ar?Object(p.d)(a.ar):Object(p.d)(a.artists)," -"," ",a.al?a.al.name:a.album.name))))},r=0;r<t;r++){if("break"===a(r))break}return e}(u)))}));e.a=Object(b.b)((function(n){return{fullScreen:n.player.fullScreen,playing:n.player.playing,currentSong:n.player.currentSong,scrollY:n.player.scrollY}}),(function(n){return{changePlayListDispatch:function(e){n(Object(g.c)(e))},changeCurrentIndexDispatch:function(e){n(Object(g.a)(e))},changeSequencePlayListDispatch:function(e){n(Object(g.f)(e))}}}))(i.a.memo(h))},146:function(n,e,t){"use strict";t.r(e);var a=t(4),r=t(0),i=t.n(r),o=t(3),c=t(2),l=t(1);function s(){var n=Object(o.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border-radius: 10px;\n  z-index: 50;\n"]);return s=function(){return n},n}function u(){var n=Object(o.a)(["\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  left: 0;\n  bottom: ",";\n  right: 0;\n  >div{\n    position: absolute;\n    left: 0;\n    width: 100%;\n    overflow: visible;\n  }\n"]);return u=function(){return n},n}function f(){var n=Object(o.a)(["\n  position: fixed;\n  left: 0; right: 0;\n  margin: auto;\n  box-sizing: border-box;\n  width: 120px;\n  height: 40px;\n  margin-top: -55px;\n  z-index:50;\n  background: ",";\n  color: ",";\n  border-radius: 20px;\n  text-align: center;\n  font-size: 0;\n  line-height: 40px;\n  .iconfont{\n    display: inline-block;\n    margin-right: 10px;\n    font-size: 12px;\n    vertical-align: 1px;\n  }\n  .text {\n    display: inline-block;\n    font-size:14px;\n    letter-spacing: 5px;\n  }\n"]);return f=function(){return n},n}function d(){var n=Object(o.a)(["\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 75%;\n  transform-origin: top;\n  background: url(",");\n  background-size: cover;\n  z-index: 50;\n  .filter {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    /* : blur(20px); */\n    background: rgba(7, 17, 27, 0.3);\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: ",";\n  width: 100%;\n  z-index: 100;\n  overflow: hidden;\n  background: #f2f3f4;\n  transform-origin: right bottom;\n  &.fly-enter,\n  &.fly-appear {\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n  &.fly-enter-active,\n  &.fly-appear-active {\n    transition: transform 0.3s;\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit {\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit-active {\n    transition: transform 0.3s;\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n"]);return p=function(){return n},n}var m=c.b.div(p(),(function(n){return n.play>0?"60px":0})),b=c.b.div(d(),(function(n){return n.bgUrl})),g=c.b.div(f(),l.c["theme-color"],l.c["font-color-light"]),h=c.b.div(u(),(function(n){return n.play?"60px":0})),y=c.b.div(s()),x=t(129),v=t(7),k=t(18),E=t(41),O=t(23),j=function(n){return function(e){(function(n){return O.a.get("/artists?id=".concat(n))})(n).then((function(n){var t;e((t=n,{type:E.b,data:t})),e(function(n){return{type:E.a,data:n}}(!1))})).catch((function(){console.log("\u83b7\u53d6\u4e2a\u4eba\u4fe1\u606f\u5931\u8d25")}))}},z=t(34),w=t(49),S=t(137),C=t(139),N=t(138),L=t(29),R=t(135);e.default=Object(k.b)((function(n){return{artist:n.singer.artist,hotSongList:n.singer.hotSongList,enterLoading:n.singer.enterLoading}}),(function(n){return{getSingerDisPatch:function(e){n(j(e))}}}))(i.a.memo(Object(v.g)((function(n){var e=n.getSingerDisPatch,t=n.artist,o=n.hotSongList,c=n.enterLoading,l=Object(r.useState)(!0),s=Object(a.a)(l,2),u=s[0],f=s[1],d=Object(r.useRef)(0),p=Object(r.useRef)(),v=Object(r.useRef)(),k=Object(r.useRef)(),E=Object(r.useRef)(),O=Object(r.useRef)(),j=Object(r.useRef)(),A=Object(r.useRef)(),D=Object(r.useCallback)((function(){f(!1)}),[]);return Object(r.useEffect)((function(){var t=n.match.params.id;e(t);var a=v.current.offsetHeight;d.current=a,O.current.style.top="".concat(a-5,"px"),E.current.style.top="".concat(a-5,"px"),j.current.refresh()}),[e,n.match.params.id]),i.a.createElement(x.a,{in:u,timeout:300,classNames:"fly",appear:!0,unmountOnExit:!0,onExited:function(){return n.history.goBack()}},i.a.createElement(m,null,i.a.createElement(S.a,{handleClick:D,title:t.name,ref:p,isMarquee:!1}),i.a.createElement(b,{ref:v,bgUrl:t.picUrl},i.a.createElement("div",{className:"filter"})),i.a.createElement(g,{ref:k},i.a.createElement("i",{className:"iconfont"},"\ue62d"),i.a.createElement("span",{className:"text"},"\u6536\u85cf")),i.a.createElement(y,{ref:E}),i.a.createElement(h,{ref:O,play:o.length},i.a.createElement(L.a,{onScroll:function(n){var e=d.current,t=n.y,a=v.current,r=k.current,i=p.current,o=E.current,c=-(e-5)+R.a,l=Math.abs(t/e);t>0?(a.style.transform="scale(".concat(1+l,")"),r.style.transform="translate3d(0, ".concat(t,"px, 0)"),o.style.top="".concat(e-5+t,"px")):t>=c?(o.style.top="".concat(e-5-Math.abs(t),"px"),o.style.zIndex="1",a.style.paddingTop="75%",a.style.height="0px",a.style.zIndex="-1",r.style.transform="translate3d(0, ".concat(t,"px, 0)"),r.style.opacity="".concat(1-2*l)):t<c&&(o.style.top="".concat(R.a-5,"px"),o.style.zIndex="1",i.style.zIndex="100",a.style.height="".concat(R.a,"px"),a.style.paddingTop="0px",a.style.zIndex="99")},ref:j},i.a.createElement(C.a,{collectCount:1,songs:o,showCollect:!1,usePageSplit:!1,musicAnimation:function(n,e){A.current.startAnimation({x:n,y:e})}}))),c?i.a.createElement(z.a,null,i.a.createElement(w.a,null)):null,i.a.createElement(N.a,{ref:A})))}))))}}]);
//# sourceMappingURL=5.420f0a77.chunk.js.map