(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(t,e,i){t.exports=i.p+"static/media/YuvaChangResume.79ef290e.pdf"},29:function(t,e,i){t.exports=i(49)},34:function(t,e,i){},45:function(t,e,i){},49:function(t,e,i){"use strict";i.r(e);var o=i(0),n=i.n(o),a=i(23),c=i.n(a),m=(i(34),i(5)),s=i(6),r=i(8),p=i(7),l=i(9),u=i(10),g=i(11),h=function(t){function e(){var t,i;Object(m.a)(this,e);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(i=Object(r.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).handleClickOutside=function(t){i.node.contains(t.target)||i.props.closeMenu(t)},i.handleClickMenu=function(t,e){i.props.setPathname(e),i.props.closeMenu(t)},i}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:this.props.visible?this.props.pathname.length>1?"menu fast":"menu":"menu hidden",ref:function(e){t.node=e}},n.a.createElement("img",{src:"../images/close.svg",alt:"image not found",id:"close",onClick:this.props.closeMenu}),n.a.createElement("ul",null,n.a.createElement(u.b,{to:"/",onClick:function(e){return t.handleClickMenu(e,"/")},className:"router-link"},n.a.createElement("li",{style:{marginBottom:"15px"}},"{","yuva chang","}")),n.a.createElement("li",null,"{","projects","}"),n.a.createElement(u.b,{to:"/pics",onClick:function(e){return t.handleClickMenu(e,"/pics")},className:"router-link"},n.a.createElement("li",null,"{","photography","}")),n.a.createElement(u.b,{to:"/about",onClick:function(e){return t.handleClickMenu(e,"/about")},className:"router-link"},n.a.createElement("li",null,"{","about:me","}")),n.a.createElement("li",null,"{","contact","}")))}}]),e}(o.Component),j=function(t){function e(){var t,i;Object(m.a)(this,e);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(i=Object(r.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).state={menu:!1,pathname:"/"},i.openMenu=function(t){i.state.menu||i.setState({menu:!0})},i.closeMenu=function(t){t.stopPropagation(),i.state.menu&&"headshot"!==t.target.id&&i.setState({menu:!1})},i.setPathname=function(t){console.log(t),i.setState({pathname:t})},i.componentDidUpdate=function(t){t.location!==i.props.location&&i.state.pathname!==i.props.location.pathname&&i.setState({pathname:i.props.location.pathname})},i}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){"/"!==window.location.pathname&&this.setState({pathname:window.location.pathname.slice(1)})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:this.state.menu||this.state.pathname.length>1?"/about"===window.location.pathname?"headshot-div aboutme":"headshot-div open-menu":"headshot-div"},n.a.createElement("img",{className:this.state.menu&&"/"===window.location.pathname?"open-menu":"closed-menu",id:"headshot",src:"favicon.ico",alt:"image not found",onClick:this.openMenu}),n.a.createElement("img",{id:"/about"===window.location.pathname?"show-nametag":"hide-nametag",src:"../images/neon.gif"})),n.a.createElement(h,{visible:this.state.menu,closeMenu:this.closeMenu,setPathname:this.setPathname,pathname:this.state.pathname}))}}]),e}(o.Component),d=Object(g.f)(j),f=i(14),v=i.n(f);function w(){return n.a.createElement("div",{className:"about-me"},n.a.createElement("div",{className:"about"},n.a.createElement("header",{className:"about header"},"who am i"),n.a.createElement("p",{className:"about p"},"I am a software engineer with a background in design and architecture. My skills include Javascript with experience in the MERN and PERN stacks. After a bachelors and masters degree in architecture, I spent a few years at a small but growing firm, contributing to many aspects of architectural design and helping shape their representational language. However, I decided to pursue my passion for software and enrolled in a software engineering immersive. I am excited about the possibilities of software engineering and the potentials of designing for practical solutions to real life experiences. My interests align with the act of making, and include furniture design and building, 3D modeling, sewing, fixing/modding cars and motorcycles, water cooling computers...")),n.a.createElement("div",{className:"about blurb"},n.a.createElement("header",{className:"about header"},"skills"),n.a.createElement("p",{className:"about p"},"html, css, javascript, react, redux, express, sequelize, node.js, psql, git, sql, nosql, mongodb, mongoose, socket.io, heroku, webpack, rhino, vray, photoshop, illustrator, indesign, autocad")))}var b=i(19),k=i.n(b),E=i(26),y=["https://i.imgur.com/D0YmgCCl.jpg","https://i.imgur.com/7o3ZA8El.jpg","https://i.imgur.com/ifgWeFGl.jpg","https://i.imgur.com/efS4knQl.jpg","https://i.imgur.com/PnJXx2al.jpg","https://i.imgur.com/kGBGuHPl.jpg","https://i.imgur.com/hZZfneYl.jpg","https://i.imgur.com/wt8KcX4l.jpg","https://i.imgur.com/zNDu5vbl.jpg","https://i.imgur.com/nyeRJUel.jpg","https://i.imgur.com/VyI9hUPl.jpg","https://i.imgur.com/HwqgPoZl.jpg","https://i.imgur.com/Ne6gQkyl.jpg","https://i.imgur.com/3lNFW6Hl.jpg","https://i.imgur.com/PawVSm6l.jpg","https://i.imgur.com/gjZwzAhl.jpg","https://i.imgur.com/6zNcViHl.jpg","https://i.imgur.com/mrAfxcpl.jpg","https://i.imgur.com/3K1IFIfl.jpg","https://i.imgur.com/imcaUHOl.jpg","https://i.imgur.com/tnSxPZBl.jpg","https://i.imgur.com/cKbRgEZl.jpg","https://i.imgur.com/V6iMoGMl.jpg","https://i.imgur.com/PhnTg7Nl.jpg","https://i.imgur.com/VMeGZaKl.jpg","https://i.imgur.com/esLGkT8l.jpg","https://i.imgur.com/xYffKUUl.jpg","https://i.imgur.com/C7z9N1wl.jpg","https://i.imgur.com/ETLYsDCl.jpg","https://i.imgur.com/gaKFYsYl.jpg","https://i.imgur.com/4yBEX74l.jpg","https://i.imgur.com/VSkTDTsl.jpg","https://i.imgur.com/nzsDaXll.jpg","https://i.imgur.com/gtKYVxwl.jpg","https://i.imgur.com/MFMyc3Hl.jpg","https://i.imgur.com/zakpw2Kl.jpg","https://i.imgur.com/TKTFABBl.jpg","https://i.imgur.com/Yk2TwDml.jpg","https://i.imgur.com/X7ep4Zul.jpg","https://i.imgur.com/mX5qF39l.jpg","https://i.imgur.com/6sZW0Nql.jpg","https://i.imgur.com/pICzdPPl.jpg","https://i.imgur.com/WofdjIBl.jpg","https://i.imgur.com/CRBlUbVl.jpg","https://i.imgur.com/iTUKPpWl.jpg","https://i.imgur.com/UKQklOTl.jpg","https://i.imgur.com/aLf2YqCl.jpg","https://i.imgur.com/aqWbpGrl.jpg","https://i.imgur.com/6a8ooYHl.jpg","https://i.imgur.com/OSPmoBrl.jpg","https://i.imgur.com/lQ8Mdc6l.jpg","https://i.imgur.com/EgF5ueTl.jpg","https://i.imgur.com/0IWCjFul.jpg","https://i.imgur.com/g09arACl.jpg","https://i.imgur.com/BFhsel5l.jpg","https://i.imgur.com/7D1ZOWXl.jpg","https://i.imgur.com/M6dLVGcl.jpg","https://i.imgur.com/aGARWXFl.jpg","https://i.imgur.com/TwNsBiWl.jpg","https://i.imgur.com/hynSVZal.jpg","https://i.imgur.com/oEK2xz8l.jpg","https://i.imgur.com/IFL7W2Dl.jpg","https://i.imgur.com/Z1Gmf8pl.jpg","https://i.imgur.com/398q4Rvl.jpg","https://i.imgur.com/wzpsLgxl.jpg","https://i.imgur.com/HGwKD3nl.jpg","https://i.imgur.com/nUmcPrhl.jpg","https://i.imgur.com/DIXX0a4l.jpg","https://i.imgur.com/Chi5DwGl.jpg","https://i.imgur.com/Lnu9P5Ol.jpg","https://i.imgur.com/cIilQzRl.jpg","https://i.imgur.com/w2fHjRcl.jpg","https://i.imgur.com/a6gNqQVl.jpg","https://i.imgur.com/vfDqggvl.jpg","https://i.imgur.com/AH9Fzy9l.jpg","https://i.imgur.com/MwiWlRfl.jpg","https://i.imgur.com/YitzyUHl.jpg","https://i.imgur.com/5GKyAQwl.jpg","https://i.imgur.com/qKv16OLl.jpg","https://i.imgur.com/4HwjM8Xl.jpg","https://i.imgur.com/x0GoyzTl.jpg","https://i.imgur.com/6fuwdvKl.jpg","https://i.imgur.com/LE26rKxl.jpg","https://i.imgur.com/bc52b5Sl.jpg","https://i.imgur.com/pn85vRQl.jpg","https://i.imgur.com/GkNDLsrl.jpg","https://i.imgur.com/a1i1bmnl.jpg","https://i.imgur.com/lMuk9lil.jpg","https://i.imgur.com/3ZFlKJTl.jpg","https://i.imgur.com/eVb0TM0l.jpg","https://i.imgur.com/9mprZvjl.jpg","https://i.imgur.com/UIQp5psl.jpg","https://i.imgur.com/DqiB4lfl.jpg","https://i.imgur.com/GVyVaXdl.jpg","https://i.imgur.com/eurlFdPl.jpg","https://i.imgur.com/4NzqsHUl.jpg","https://i.imgur.com/YKStEyWl.jpg","https://i.imgur.com/jlMBemPl.jpg","https://i.imgur.com/EW71I4Ml.jpg","https://i.imgur.com/Lyac6Dwl.jpg","https://i.imgur.com/u5crAswl.jpg","https://i.imgur.com/8tvj15ml.jpg","https://i.imgur.com/MZeoBGql.jpg","https://i.imgur.com/vRjpDDOl.jpg","https://i.imgur.com/mm6ZsKWl.jpg","https://i.imgur.com/LwdgnZcl.jpg","https://i.imgur.com/2TbgPY1l.jpg","https://i.imgur.com/dTNfS7fl.jpg","https://i.imgur.com/RJ3ytYel.jpg","https://i.imgur.com/4E1zdYKl.jpg","https://i.imgur.com/Hs8AD70l.jpg","https://i.imgur.com/h0OkHBal.jpg","https://i.imgur.com/w8H5YR7l.jpg","https://i.imgur.com/B0bLJEal.jpg","https://i.imgur.com/5ciQeV0l.jpg","https://i.imgur.com/re8cyjNl.jpg","https://i.imgur.com/3otAZ9Hl.jpg","https://i.imgur.com/HY5J91ll.jpg","https://i.imgur.com/JvNMv9Il.jpg","https://i.imgur.com/lERfBOgl.jpg","https://i.imgur.com/klLL0mcl.jpg","https://i.imgur.com/BVYjTISl.jpg","https://i.imgur.com/HrgJ5XDl.jpg","https://i.imgur.com/Z9QLEPLl.jpg","https://i.imgur.com/feT3htHl.jpg","https://i.imgur.com/7nxrenBl.jpg","https://i.imgur.com/qsiQAu8l.jpg"],O=function(t){function e(){var t,i;Object(m.a)(this,e);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(i=Object(r.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).handleClickOutside=function(t){"large-photo"!==t.target.id&&"arrow"!==t.target.className&&i.props.closePhoto()},i}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var t=this,e=this.props.photo.slice(0,-5).concat("h"+this.props.photo.slice(-4));return n.a.createElement("div",{className:this.props.isOpen?"single-photo-container":"no-show"},n.a.createElement("div",{className:"arrow",style:{left:"3vw"},onClick:function(){return t.props.openPhoto(null,t.props.idx-1)}},"<"),n.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"80%",width:"80%",alignContent:"center"}},n.a.createElement("img",{src:e,id:"large-photo",className:this.props.isOpen?"":"closed",ref:function(e){t.node=e}})),n.a.createElement("div",{className:"arrow",style:{right:"3vw"},onClick:function(){return t.props.openPhoto(null,t.props.idx+1)}},">"))}}]),e}(o.Component),N=function(t){function e(){var t,i;Object(m.a)(this,e);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(i=Object(r.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(n)))).state={photo:"",idx:0,isOpen:!1},i.openPhoto=function(){var t=Object(E.a)(k.a.mark(function t(e,o){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,i.setState({photo:e,idx:o,isOpen:!0,showBackToTop:!1});case 3:t.next=8;break;case 5:return o>y.length-1?o=0:o<0&&(o=y.length-1),t.next=8,i.setState({photo:y[o],idx:o});case 8:case"end":return t.stop()}},t)}));return function(e,i){return t.apply(this,arguments)}}(),i.closePhoto=function(){i.setState({isOpen:!1})},i.scrollFunc=function(t){window.scrollY>500&&!i.state.showBackToTop?i.setState({showBackToTop:!0}):window.scrollY<700&&i.state.showBackToTop&&i.setState({showBackToTop:!1})},i}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("scroll",function(e){return t.scrollFunc(e)})}},{key:"componentWillUnmount",value:function(){var t=this;document.removeEventListener("scroll",function(e){return t.scrollFunc(e)})}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"photos"},n.a.createElement(O,{photo:this.state.photo,isOpen:this.state.isOpen,openPhoto:this.openPhoto,closePhoto:this.closePhoto,idx:this.state.idx}),y.map(function(e,i){return n.a.createElement("div",{key:e,className:"photo-thumb-container"},n.a.createElement("img",{src:e,className:"photo-thumb",onClick:function(){return t.openPhoto(e,i)}}))}),n.a.createElement("div",{id:"backtotop",className:this.state.showBackToTop?"":"closed",onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},"^"))}}]),e}(o.Component),C=i(27),M=i.n(C);function P(){return n.a.createElement("div",{id:"resume"},n.a.createElement("img",{src:"./images/YuvaChangResume.svg",id:"resume-image"}),n.a.createElement("a",{href:M.a,target:"_blank",className:"router-link",style:{paddingBottom:"5em"}},"Download as PDF"))}i(45),v()();function x(t){return n.a.createElement(g.b,{render:function(t){t.location;return n.a.createElement(g.d,null,n.a.createElement(g.b,{exact:!0,path:"/",component:function(){return null}}),n.a.createElement(g.b,{path:"/pics",component:N}),n.a.createElement(g.b,{path:"/resume",component:P}),n.a.createElement(g.b,{path:"/about",component:w}),n.a.createElement(g.a,{from:"*",to:"/",component:function(){return null}}))}})}var T=v()(),B=function(t){function e(){return Object(m.a)(this,e),Object(r.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement(u.a,{history:T},n.a.createElement("div",{className:"app"},n.a.createElement(d,null),n.a.createElement(x,null)))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.c14d8297.chunk.js.map