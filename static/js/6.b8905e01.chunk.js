(this["webpackJsonph5-cloud-music-ts"]=this["webpackJsonph5-cloud-music-ts"]||[]).push([[6],{137:function(n,e,t){"use strict";var i=t(3),a=t(0),o=t(2),r=t(1);function c(){var n=Object(i.a)(["\n  position: fixed;\n  padding: 5px 10px;\n  padding-top: 0;\n  height: 40px;\n  width: 100%;\n  z-index: 100;\n  display: flex;\n  line-height: 40px;\n  color: ",";\n  .back {\n    margin-right: 5px;\n    font-size: 20px;\n    width: 20px;\n  }\n  > h1 {\n    font-size: ",";\n    font-weight: 700;\n  }\n"]);return c=function(){return n},n}var l=o.b.div(c(),r.c["font-color-light"],r.c["font-size-l"]),s=a.forwardRef((function(n,e){var t=n.handleClick,i=void 0===t?function(){}:t,o=n.title,r=void 0===o?"\u6807\u9898":o,c=n.isMarquee,s=void 0!==c&&c;return a.createElement(l,{ref:e},a.createElement("i",{className:"iconfont back",onClick:i},"\ue6e5"),s?a.createElement("div",{className:"marquee"},a.createElement("h1",null,r)):a.createElement("h1",null,r))}));e.a=a.memo(s)},138:function(n,e,t){"use strict";var i=t(3),a=t(0),o=t.n(a),r=t(2),c=t(6),l=t(1);function s(){var n=Object(i.a)(["\n  .icon_wrapper {\n    position: fixed;\n    z-index: 1000;\n    margin-top: -10px;\n    margin-left: -10px;\n    color: ",";\n    font-size: 14px;\n    display: none;\n    transition: transform 1s cubic-bezier(0.62, -0.1, 0.86, 0.57);\n    transform: translate3d(0, 0, 0);\n    > div {\n      transition: transform 1s;\n    }\n  }\n"]);return s=function(){return n},n}var p=r.b.div(s(),l.c["theme-color"]),u=Object(a.forwardRef)((function(n,e){var t=Object(a.useRef)(),i=Object(c.f)("transform"),r=function(n){var e="<div class='icon_wrapper'>".concat(n,"</div>"),t=document.createElement("div");return t.innerHTML=e,t.firstChild};Object(a.useEffect)((function(){for(var n=t.current,e=0;e<1;e++){var a=r('<div class="iconfont">&#xe62d;</div>');n.appendChild(a)}[].slice.call(n.children).forEach((function(n){n.setAttribute("running","false"),n.addEventListener("transitionend",(function(){this.style.display="none",this.style[i]="translate3d(0, 0, 0)",this.setAttribute("running","false"),this.querySelector("div").style[i]="translate3d(0, 0, 0)"}),!1)}))}),[]);var l=function(n){for(var e=n.x,a=n.y,o=t.current,r=function(n){var t=[].slice.call(o.children)[n];if("false"===t.getAttribute("running"))return t.style.left=e+"px",t.style.top=a+"px",t.style.display="inline-block",setTimeout((function(){t.setAttribute("running","true"),t.style[i]="translate3d(-40px, 750px, 0)",t.querySelector("div").style[i]="translate3d(-40px, 0, 0)"}),20),"break"},c=0;c<1;c++){if("break"===r(c))break}};return Object(a.useImperativeHandle)(e,(function(){return{startAnimation:l}})),o.a.createElement(p,{ref:t})}));e.a=o.a.memo(u)},139:function(n,e,t){"use strict";var i=t(4),a=t(0),o=t.n(a),r=t(3),c=t(2),l=t(1);function s(){var n=Object(r.a)(["\n  > li {\n    display: flex;\n    height: 60px;\n    align-items: center;\n    .index {\n      flex-basis: 60px;\n      width: 60px;\n      height: 60px;\n      line-height: 60px;\n      text-align: center;\n    }\n    .info {\n      box-sizing: border-box;\n      flex: 1;\n      display: flex;\n      height: 100%;\n      padding: 5px 0;\n      flex-direction: column;\n      justify-content: space-around;\n      border-bottom: 1px solid ",";\n      ","\n      >span {\n        ","\n      }\n      > span:first-child {\n        color: ",";\n      }\n      > span:last-child {\n        font-size: ",";\n        color: #bba8a8;\n      }\n    }\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  border-radius: 10px;\n  opacity: 0.98;\n  ","\n  .first_line {\n    box-sizing: border-box;\n    padding: 10px 0;\n    margin-left: 10px;\n    position: relative;\n    justify-content: space-between;\n    border-bottom: 1px solid ",";\n    .play_all {\n      display: inline-block;\n      line-height: 24px;\n      color: ",";\n      .iconfont {\n        font-size: 24px;\n        margin-right: 10px;\n        vertical-align: top;\n      }\n      .sum {\n        font-size: ",";\n        color: ",";\n      }\n      > span {\n        vertical-align: top;\n      }\n    }\n    .add_list,\n    .isCollected {\n      display: flex;\n      align-items: center;\n      position: absolute;\n      right: 0;\n      top: 0px;\n      bottom: 0;\n      width: 130px;\n      line-height: 34px;\n      background: ",";\n      color: ",";\n      font-size: 0;\n      border-radius: 3px;\n      vertical-align: top;\n      .iconfont {\n        vertical-align: top;\n        font-size: 10px;\n        margin: 0 5px 0 10px;\n      }\n      span {\n        font-size: 14px;\n        line-height: 34px;\n      }\n    }\n    .isCollected {\n      display: flex;\n      background: ",";\n      color: ",";\n    }\n  }\n"]);return p=function(){return n},n}var u=c.b.div(p(),(function(n){return n.showBackground?"background: ".concat(l.c["highlight-background-color"]):""}),l.c["border-color"],l.c["font-color-desc"],l.c["font-size-s"],l.c["font-color-desc-v2"],l.c["theme-color"],l.c["font-color-light"],l.c["background-color"],l.c["font-color-desc"]),d=c.b.ul(s(),l.c["border-color"],l.c.noWrap(),l.c.noWrap(),l.c["font-color-desc"],l.c["font-size-s"]),f=t(6),m=t(17),g=t(18),h=t(9),x=o.a.forwardRef((function(n,e){var t=Object(a.useState)(0),r=Object(i.a)(t,2),c=r[0],l=r[1],s=n.songs,p=void 0===s?[]:s,g=n.collectCount,h=n.showCollect,x=void 0===h||h,b=n.loading,v=void 0!==b&&b,y=n.usePageSplit,E=void 0!==y&&y,z=n.showBackground,w=void 0!==z&&z,k=n.musicAnimation,j=n.changePlayListDispatch,O=n.changeCurrentIndexDispatch,N=n.changeSequencePlayListDispatch,_=p.length;Object(a.useEffect)((function(){v&&(c+1+m.b>=_||l(c+m.b))}),[v,c,_]);var C,A=function(n,e){j(p),N(p),O(e),k(n.nativeEvent.clientX,n.nativeEvent.clientY)};return o.a.createElement(u,{ref:e,showBackground:w},o.a.createElement("div",{className:"first_line"},o.a.createElement("div",{className:"play_all",onClick:function(n){return A(n,0)}},o.a.createElement("i",{className:"iconfont"},"\ue73d"),o.a.createElement("span",null,"\u64ad\u653e\u5168\u90e8 ",o.a.createElement("span",{className:"sum"},"(\u5171",_,"\u9996)"))),x?(C=g,o.a.createElement("div",{className:"add_list"},o.a.createElement("i",{className:"iconfont"},"\ue600"),o.a.createElement("span",null,"\u6536\u85cf(",Math.floor(C/1e3)/10,"\u4e07)"))):null),o.a.createElement(d,null,function(n){for(var e=[],t=E?c+m.b:n.length,i=function(t){if(t>=n.length)return"break";var i=n[t];e.push(o.a.createElement("li",{key:i.id,onClick:function(n){return A(n,t)}},o.a.createElement("span",{className:"index"},t+1),o.a.createElement("div",{className:"info"},o.a.createElement("span",null,i.name),o.a.createElement("span",null,i.ar?Object(f.d)(i.ar):Object(f.d)(i.artists)," -"," ",i.al?i.al.name:i.album.name))))},a=0;a<t;a++){if("break"===i(a))break}return e}(p)))}));e.a=Object(g.b)((function(n){return{fullScreen:n.player.fullScreen,playing:n.player.playing,currentSong:n.player.currentSong,scrollY:n.player.scrollY}}),(function(n){return{changePlayListDispatch:function(e){n(Object(h.c)(e))},changeCurrentIndexDispatch:function(e){n(Object(h.a)(e))},changeSequencePlayListDispatch:function(e){n(Object(h.f)(e))}}}))(o.a.memo(x))},144:function(n,e,t){"use strict";t.r(e);var i=t(4),a=t(0),o=t.n(a),r=t(7),c=t(129),l=t(18),s=t(3),p=t(2),u=t(1);function d(){var n=Object(s.a)(["\n  > li {\n    display: flex;\n    height: 60px;\n    align-items: center;\n    .index {\n      width: 60px;\n      height: 60px;\n      line-height: 60px;\n      text-align: center;\n    }\n    .info {\n      box-sizing: border-box;\n      flex: 1;\n      display: flex;\n      height: 100%;\n      padding: 5px 0;\n      flex-direction: column;\n      justify-content: space-around;\n      border-bottom: 1px solid ",";\n      > span:first-child {\n        color: ",";\n      }\n      > span:last-child {\n        font-size: ",";\n        color: #bba8a8;\n      }\n    }\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(s.a)(["\n  border-radius: 10px;\n  opacity: 0.98;\n  .first_line {\n    box-sizing: border-box;\n    padding: 10px 0;\n    margin-left: 10px;\n    position: relative;\n    justify-content: space-between;\n    border-bottom: 1px solid ",";\n    .play_all {\n      display: inline-block;\n      line-height: 24px;\n      color: ",";\n      .iconfont {\n        font-size: 24px;\n        margin-right: 10px;\n        vertical-align: top;\n      }\n      .sum {\n        font-size: ",";\n        color: ",";\n      }\n      > span {\n        vertical-align: top;\n      }\n    }\n    .add_list {\n      display: flex;\n      align-items: center;\n      position: absolute;\n      right: 0;\n      top: 0px;\n      bottom: 0;\n      width: 130px;\n      line-height: 34px;\n      background: ",";\n      color: ",";\n      font-size: 0;\n      border-radius: 3px;\n      vertical-align: top;\n      .iconfont {\n        vertical-align: top;\n        font-size: 10px;\n        margin: 0 5px 0 10px;\n      }\n      span {\n        font-size: 14px;\n        line-height: 34px;\n      }\n    }\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(s.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  margin: 0 30px;\n  margin-top: -20px;\n  margin-bottom: 10px;\n  >div {\n    display: flex;\n    flex-direction: column;\n    line-height: 20px;\n    text-align: center;\n    font-size: ",";\n    color: #3b1f1f;\n    color: ",";\n    z-index:1000;\n    font-weight: 500;\n    .iconfont {\n      font-size: 20px;\n    }\n  }\n"]);return m=function(){return n},n}function g(){var n=Object(s.a)(["\n  background-size: 100%;\n  padding: 5px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  box-sizing: border-box;\n  width: 100%;\n  height: 200px;\n  position: relative;\n  z-index: 100;\n  .background{\n    /* z-index: -1; */\n    background: url(",") left top no-repeat;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    filter: blur(20px);\n    transform: scale(1.5);\n  }\n  .img_wrapper{\n    width: 120px;\n    height: 120px;\n    position: relative;\n    .decorate {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 35px;\n      border-radius: 3px;\n      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));\n    }\n    .play_count {\n      position: absolute;\n      right: 2px;\n      top: 2px;\n      font-size: ",";\n      line-height: 15px;\n      color: ",";\n      .play{\n        vertical-align: top;\n      }\n    }\n    img{\n      width: 120px;\n      height: 120px;\n      border-radius:3px;\n    }\n  }\n  .desc_wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 120px;\n    padding: 0 10px;\n    .title{\n      max-height: 70px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: ",";\n      font-weight: 700;\n      line-height: 1.5;\n      font-size: ",";\n    }\n    .person{\n      display: flex;\n      .avatar{\n        width: 20px;\n        height: 20px;\n        margin-right: 5px;\n        img{\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n        }\n      }\n      .name {\n        line-height: 20px;\n        font-size: ",";\n        color: ",";\n      }\n    }\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: ",";\n  width: 100%;\n  z-index: 100;\n  overflow: hidden;\n  background: #f2f3f4;\n  transform-origin: right bottom;\n  &.fly-enter,\n  &.fly-appear {\n    // transform: rotateZ(30deg) translate3d(100%, 0, 0);\n    opacity: 0;\n    transform: scale(1.1);\n  }\n  &.fly-enter-active,\n  &.fly-appear-active {\n    // transition: transform .3s;\n    // transform: rotateZ(0deg) translate3d(0, 0, 0);\n    opacity: 1;\n    transform: scale(1);\n    transition: opacity 300ms, transform 300ms;\n  }\n  &.fly-exit {\n    // transform: rotateZ(0deg) translate3d(0, 0, 0);\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fly-exit-active {\n    // transition: transform .3s;\n    // transform: rotateZ(30deg) translate3d(100%, 0, 0);\n    opacity: 0;\n    transform: scale(0.9);\n    transition: opacity 300ms, transform 300ms;\n  }\n"]);return h=function(){return n},n}var x=p.b.div(h(),(function(n){return n.play>0?"60px":0})),b=(p.b.div(g(),(function(n){return n.background}),u.c["font-size-s"],u.c["font-color-light"],u.c["font-color-desc"],u.c["font-size-l"],u.c["font-size-m"],u.c["font-color-desc"]),p.b.div(m(),u.c["font-size-s"],u.c["font-color-desc"]),p.b.div(f(),u.c["border-color"],u.c["font-color-desc"],u.c["font-size-s"],u.c["font-color-desc-v2"],u.c["theme-color"],u.c["font-color-light"]),p.b.ul(d(),u.c["border-color"],u.c["font-color-desc"],u.c["font-size-s"]),t(137)),v=t(29),y=t(17);function E(){var n=Object(s.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 0 30px 20px 30px;\n  margin: -100px 0 0 0;\n  > div {\n    display: flex;\n    flex-direction: column;\n    line-height: 20px;\n    text-align: center;\n    font-size: ",";\n    color: #3b1f1f;\n    color: ",";\n    z-index: 1000;\n    font-weight: 500;\n    .iconfont {\n      font-size: 20px;\n    }\n  }\n"]);return E=function(){return n},n}function z(){var n=Object(s.a)(["\n  background-size: 100%;\n  padding: 5px 20px;\n  padding-bottom: 50px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 275px;\n  position: relative;\n  .background {\n    z-index: -1;\n    background: url(",") left top no-repeat;\n    background: contain;\n    background-position: 0 0;\n    background-size: 100% 100%;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    filter: blur(20px);\n    .filter {\n      position: absolute;\n      z-index: 10;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(7, 17, 27, 0.2);\n    }\n  }\n  .img_wrapper {\n    width: 120px;\n    height: 120px;\n    position: relative;\n    .decorate {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 35px;\n      border-radius: 3px;\n      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));\n    }\n    .play_count {\n      position: absolute;\n      right: 2px;\n      top: 2px;\n      font-size: ",";\n      line-height: 15px;\n      color: ",";\n      .play {\n        vertical-align: top;\n      }\n    }\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 3px;\n    }\n  }\n  .desc_wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 120px;\n    padding: 0 10px;\n    .title {\n      max-height: 70px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: ",";\n      font-weight: 700;\n      line-height: 1.5;\n      font-size: ",";\n    }\n    .person {\n      display: flex;\n      .avatar {\n        width: 20px;\n        height: 20px;\n        margin-right: 5px;\n        img {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n        }\n      }\n      .name {\n        line-height: 20px;\n        font-size: ",";\n        color: ",";\n      }\n    }\n  }\n"]);return z=function(){return n},n}var w=p.b.div(z(),(function(n){return n.background}),u.c["font-size-s"],u.c["font-color-light"],u.c["font-color-light"],u.c["font-size-l"],u.c["font-size-m"],u.c["font-color-desc-v2"]),k=p.b.div(E(),u.c["font-size-s"],u.c["font-color-light"]),j=t(139);var O=o.a.memo((function(n){var e=n.currentAlbum,t=n.pullUpLoading,i=n.musicAnimation;return o.a.createElement("div",null,o.a.createElement(w,{background:e.coverImgUrl},o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"filter"})),o.a.createElement("div",{className:"img_wrapper"},o.a.createElement("div",{className:"decorate"}),o.a.createElement("img",{src:e.coverImgUrl,alt:""}),o.a.createElement("div",{className:"play_count"},o.a.createElement("i",{className:"iconfont play"},"\ue61f"),o.a.createElement("span",{className:"count"},Math.floor(e.subscribedCount/1e3)/10,"\u4e07"))),o.a.createElement("div",{className:"desc_wrapper"},o.a.createElement("div",{className:"title"},e.name),o.a.createElement("div",{className:"person"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:e.creator.avatarUrl,alt:""})),o.a.createElement("div",{className:"name"},e.creator.nickname)))),o.a.createElement(k,null,o.a.createElement("div",null,o.a.createElement("i",{className:"iconfont"},"\ue655"),"\u8bc4\u8bba"),o.a.createElement("div",null,o.a.createElement("i",{className:"iconfont"},"\ue616"),"\u70b9\u8d5e"),o.a.createElement("div",null,o.a.createElement("i",{className:"iconfont"},"\ueaf8"),"\u6536\u85cf"),o.a.createElement("div",null,o.a.createElement("i",{className:"iconfont"},"\ue617"),"\u66f4\u591a")),o.a.createElement(j.a,{songs:e.tracks,collectCount:e.subscribedCount,showCollect:!0,loading:t,musicAnimation:i,showBackground:!0}))})),N=t(40),_=t(23),C=function(n){return{type:N.b,data:n}},A=function(n,e){return function(e){e(C(!0)),function(n){return _.a.get("/playlist/detail?id=".concat(n))}(n).then((function(n){e(C(!1));var t=n.playlist;e(function(n){return{type:N.a,data:n}}(t))})).catch((function(){console.log("\u83b7\u53d6album\u6570\u636e\u5931\u8d25!")}))}},S=t(49),D=t(138);e.default=Object(l.b)((function(n){return{currentAlbum:n.album.currentAlbum,loading:n.album.loading}}),(function(n){return{getAlbumDataDispatch:function(e,t){n(A(e))},changePullUpLoadingStateDispatch:function(e){var t;n((t=e,{type:N.c,data:t}))}}}))(o.a.memo(Object(r.g)((function(n){var e=n.history,t=n.match,r=n.currentAlbum,l=n.loading,s=n.pullUpLoading,p=n.getAlbumDataDispatch,d=n.changePullUpLoadingStateDispatch,f=Object(a.useState)("\u6b4c\u5355"),m=Object(i.a)(f,2),g=m[0],h=m[1],E=Object(a.useRef)(),z=function(){return e.goBack()},w=Object(a.useState)(!1),k=Object(i.a)(w,2),j=k[0],N=k[1],_=t.params.id,C=Object(a.useRef)(null);Object(a.useEffect)((function(){var n=e.location.pathname,t="";/recommend/.test(n)?t="/recommend":/rank/.test(n)&&(t="/rank"),p(_,t)}),[_,e.location.pathname,p]);return o.a.createElement(c.a,{in:!0,timeout:300,classNames:"fly",appear:!0,unmountOnExit:!0,onExited:z},o.a.createElement(x,null,o.a.createElement(b.a,{ref:E,title:g,handleClick:z,isMarquee:j}),0!==Object.keys(r).length?o.a.createElement(v.a,{onScroll:function(n){return function(n){var e=-y.a,t=Math.abs(n.y/e),i=E.current;n.y<e&&i?(i.style.backgroundColor=u.c["theme-color"],i.style.opacity=""+Math.min(1,(t-1)/2),h(r.name),N(!0)):(i.style.backgroundColor="",i.style.opacity="1",h("\u6b4c\u5355"),N(!1))}(n)},pullUp:function(){return d(!0),void d(!1)},pullUpLoading:s,bounceTop:!1},o.a.createElement(O,{currentAlbum:r,pullUpLoading:s,musicAnimation:function(n,e){C.current.startAnimation({x:n,y:e})}})):null,l?o.a.createElement(u.b,null,o.a.createElement(S.a,null)):null,o.a.createElement(D.a,{ref:C})))}))))}}]);
//# sourceMappingURL=6.b8905e01.chunk.js.map