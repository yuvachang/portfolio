(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(30),i=a.n(o),c=a(2),s=a(3),l=a(5),m=a(4),u=a(6),p=a(14),g=a(10),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={open:!1},a.toggleMenu=function(e){"close"===e?a.setState({open:!1}):a.setState({open:!a.state.open})},a.handleResize=function(){window.innerWidth<600&&a.setState({open:!1})},a.clickListener=function(e){e.target.contains(a.menu)||e.target.className.includes("hamburger")||!a.state.open||a.toggleMenu("close")},a.componentDidMount=function(){window.addEventListener("resize",a.handleResize),document.addEventListener("click",a.clickListener),a.handleResize()},a.componentWillUnmount=function(){window.removeEventListener("resize",a.handleResize),document.removeEventListener("click",a.clickListener)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.open,a=this.props.location;return n.a.createElement("div",{className:"nav-menu"},n.a.createElement("div",{className:"nav-links-container ".concat(t?"":"closed"),ref:function(t){return e.menu=t}},n.a.createElement("div",{className:"nav-links"},n.a.createElement(g.b,{to:"/projects",onClick:function(){return e.toggleMenu("close")}},n.a.createElement("div",{className:"nav-link ".concat("/projects"===a.pathname?"selected":"")},"Projects")),n.a.createElement(g.b,{to:"/photography",onClick:function(){return e.toggleMenu("close")}},n.a.createElement("div",{className:"nav-link ".concat("/photography"===a.pathname?"selected":"")},"Photography")),n.a.createElement(g.b,{to:"/contact",onClick:function(){return e.toggleMenu("close")}},n.a.createElement("div",{className:"nav-link ".concat("/contact"===a.pathname?"selected":"")},"Contact")))),n.a.createElement("img",{src:t?"/images/icons/close.svg":"/images/icons/hamburger.svg",alt:"menu",className:"hamburger icon clickable",onClick:this.toggleMenu}))}}]),t}(r.Component),d=Object(p.g)(h),j=function(){return n.a.createElement("div",{id:"nav"},n.a.createElement(g.b,{to:"/"},n.a.createElement("div",{className:"title"},"Yuva Chang")),n.a.createElement(d,null))},f=function(){return n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"about-body"},"Hello!",n.a.createElement("br",null),n.a.createElement("br",null),"I am Yuva, a software engineer living in New York City.",n.a.createElement("br",null),n.a.createElement("br",null),"After my completing my masters at University of Michigan in 2015, I worked in design and architecture. I found myself working extensively with software and doing repetitive tasks that could be automated, and I often used scripts others had written. After a bit of research, I realized the potentional of coding and the excitement of writing your own working code.",n.a.createElement("br",null),n.a.createElement("br",null),"I decided to take the plunge and took a full-time coding bootcamp called Fullstack Academy. There's constantly new technology and new ways to solve a problem; there's always something new to learn."),n.a.createElement("div",{className:"about-header"},"Skills"),n.a.createElement("div",{className:"about-body"},"Javascript, Typescript, React, Redux, Node.js, HTML5, CSS3, SASS, Git, Firebase, Cloud Firestore, Express, Restful API, Mongoose, Sequelize, MongoDb, PostgreSQL,",n.a.createElement("br",null),"Expo, React Native, Heroku, Github Pages, Webpack, SPA",n.a.createElement("br",null),"GitHub Pages, Taggun OCR, Rhino, VRay, Photoshop, Illustrator, Indesign, AutoCAD, SketchUp"))},v=a(11),b=a.n(v),E=a(15),F=["https://i.imgur.com/D0YmgCCl.jpg","https://i.imgur.com/7o3ZA8El.jpg","https://i.imgur.com/ifgWeFGl.jpg","https://i.imgur.com/efS4knQl.jpg","https://i.imgur.com/PnJXx2al.jpg","https://i.imgur.com/kGBGuHPl.jpg","https://i.imgur.com/hZZfneYl.jpg","https://i.imgur.com/wt8KcX4l.jpg","https://i.imgur.com/zNDu5vbl.jpg","https://i.imgur.com/nyeRJUel.jpg","https://i.imgur.com/VyI9hUPl.jpg","https://i.imgur.com/HwqgPoZl.jpg","https://i.imgur.com/Ne6gQkyl.jpg","https://i.imgur.com/3lNFW6Hl.jpg","https://i.imgur.com/PawVSm6l.jpg","https://i.imgur.com/gjZwzAhl.jpg","https://i.imgur.com/6zNcViHl.jpg","https://i.imgur.com/mrAfxcpl.jpg","https://i.imgur.com/3K1IFIfl.jpg","https://i.imgur.com/imcaUHOl.jpg","https://i.imgur.com/tnSxPZBl.jpg","https://i.imgur.com/cKbRgEZl.jpg","https://i.imgur.com/V6iMoGMl.jpg","https://i.imgur.com/PhnTg7Nl.jpg","https://i.imgur.com/VMeGZaKl.jpg","https://i.imgur.com/esLGkT8l.jpg","https://i.imgur.com/xYffKUUl.jpg","https://i.imgur.com/C7z9N1wl.jpg","https://i.imgur.com/ETLYsDCl.jpg","https://i.imgur.com/gaKFYsYl.jpg","https://i.imgur.com/4yBEX74l.jpg","https://i.imgur.com/VSkTDTsl.jpg","https://i.imgur.com/nzsDaXll.jpg","https://i.imgur.com/gtKYVxwl.jpg","https://i.imgur.com/MFMyc3Hl.jpg","https://i.imgur.com/zakpw2Kl.jpg","https://i.imgur.com/TKTFABBl.jpg","https://i.imgur.com/Yk2TwDml.jpg","https://i.imgur.com/X7ep4Zul.jpg","https://i.imgur.com/mX5qF39l.jpg","https://i.imgur.com/6sZW0Nql.jpg","https://i.imgur.com/pICzdPPl.jpg","https://i.imgur.com/WofdjIBl.jpg","https://i.imgur.com/CRBlUbVl.jpg","https://i.imgur.com/iTUKPpWl.jpg","https://i.imgur.com/UKQklOTl.jpg","https://i.imgur.com/aLf2YqCl.jpg","https://i.imgur.com/aqWbpGrl.jpg","https://i.imgur.com/6a8ooYHl.jpg","https://i.imgur.com/OSPmoBrl.jpg","https://i.imgur.com/lQ8Mdc6l.jpg","https://i.imgur.com/EgF5ueTl.jpg","https://i.imgur.com/0IWCjFul.jpg","https://i.imgur.com/g09arACl.jpg","https://i.imgur.com/BFhsel5l.jpg","https://i.imgur.com/7D1ZOWXl.jpg","https://i.imgur.com/M6dLVGcl.jpg","https://i.imgur.com/aGARWXFl.jpg","https://i.imgur.com/TwNsBiWl.jpg","https://i.imgur.com/hynSVZal.jpg","https://i.imgur.com/oEK2xz8l.jpg","https://i.imgur.com/IFL7W2Dl.jpg","https://i.imgur.com/Z1Gmf8pl.jpg","https://i.imgur.com/398q4Rvl.jpg","https://i.imgur.com/wzpsLgxl.jpg","https://i.imgur.com/HGwKD3nl.jpg","https://i.imgur.com/nUmcPrhl.jpg","https://i.imgur.com/DIXX0a4l.jpg","https://i.imgur.com/Chi5DwGl.jpg","https://i.imgur.com/Lnu9P5Ol.jpg","https://i.imgur.com/cIilQzRl.jpg","https://i.imgur.com/w2fHjRcl.jpg","https://i.imgur.com/a6gNqQVl.jpg","https://i.imgur.com/vfDqggvl.jpg","https://i.imgur.com/AH9Fzy9l.jpg","https://i.imgur.com/MwiWlRfl.jpg","https://i.imgur.com/YitzyUHl.jpg","https://i.imgur.com/5GKyAQwl.jpg","https://i.imgur.com/qKv16OLl.jpg","https://i.imgur.com/4HwjM8Xl.jpg","https://i.imgur.com/x0GoyzTl.jpg","https://i.imgur.com/6fuwdvKl.jpg","https://i.imgur.com/LE26rKxl.jpg","https://i.imgur.com/bc52b5Sl.jpg","https://i.imgur.com/pn85vRQl.jpg","https://i.imgur.com/GkNDLsrl.jpg","https://i.imgur.com/a1i1bmnl.jpg","https://i.imgur.com/lMuk9lil.jpg","https://i.imgur.com/3ZFlKJTl.jpg","https://i.imgur.com/eVb0TM0l.jpg","https://i.imgur.com/9mprZvjl.jpg","https://i.imgur.com/UIQp5psl.jpg","https://i.imgur.com/DqiB4lfl.jpg","https://i.imgur.com/GVyVaXdl.jpg","https://i.imgur.com/eurlFdPl.jpg","https://i.imgur.com/4NzqsHUl.jpg","https://i.imgur.com/YKStEyWl.jpg","https://i.imgur.com/jlMBemPl.jpg","https://i.imgur.com/EW71I4Ml.jpg","https://i.imgur.com/Lyac6Dwl.jpg","https://i.imgur.com/u5crAswl.jpg","https://i.imgur.com/8tvj15ml.jpg","https://i.imgur.com/MZeoBGql.jpg","https://i.imgur.com/vRjpDDOl.jpg","https://i.imgur.com/mm6ZsKWl.jpg","https://i.imgur.com/LwdgnZcl.jpg","https://i.imgur.com/2TbgPY1l.jpg","https://i.imgur.com/dTNfS7fl.jpg","https://i.imgur.com/RJ3ytYel.jpg","https://i.imgur.com/4E1zdYKl.jpg","https://i.imgur.com/Hs8AD70l.jpg","https://i.imgur.com/h0OkHBal.jpg","https://i.imgur.com/w8H5YR7l.jpg","https://i.imgur.com/B0bLJEal.jpg","https://i.imgur.com/5ciQeV0l.jpg","https://i.imgur.com/re8cyjNl.jpg","https://i.imgur.com/3otAZ9Hl.jpg","https://i.imgur.com/HY5J91ll.jpg","https://i.imgur.com/JvNMv9Il.jpg","https://i.imgur.com/lERfBOgl.jpg","https://i.imgur.com/klLL0mcl.jpg","https://i.imgur.com/BVYjTISl.jpg","https://i.imgur.com/HrgJ5XDl.jpg","https://i.imgur.com/Z9QLEPLl.jpg","https://i.imgur.com/feT3htHl.jpg","https://i.imgur.com/7nxrenBl.jpg","https://i.imgur.com/qsiQAu8l.jpg"],N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).clickListener=function(e){"image-container"!==e.target.className&&"photos-preview"!==e.target.className||a.props.closePhoto()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.clickListener)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.clickListener)}},{key:"render",value:function(){var e=this,t=this.props,a=t.isOpen,r=t.photo,o="l"===r[r.length-5]?r.slice(0,-5).concat("l"+r.slice(-4)):r;return n.a.createElement("div",{className:"photos-preview".concat(a?"":" hidden")},n.a.createElement("div",{className:"image-container"},n.a.createElement("div",{className:"arrow prev",onClick:function(){return e.props.openPhoto(null,e.props.idx-1)}},n.a.createElement("img",{src:"/images/icons/right-arrow.svg",alt:"previous",className:"icon",style:{transform:"rotate(180deg)",filter:"invert(1)"}})),n.a.createElement("img",{alt:"previewing",src:o,className:"image",ref:function(t){e.node=t}}),n.a.createElement("div",{className:"arrow next",onClick:function(){return e.props.openPhoto(null,e.props.idx+1)}},n.a.createElement("img",{src:"/images/icons/right-arrow.svg",alt:"next",className:"icon",style:{filter:"invert(1)"}}))))}}]),t}(r.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={photo:"",idx:"0",isOpen:!1},a.openPhoto=function(){var e=Object(E.a)(b.a.mark(function e(t,r){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,a.setState({photo:t,idx:r,isOpen:!0});case 3:e.next=8;break;case 5:return r>F.length-1?r=0:r<0&&(r=F.length-1),e.next=8,a.setState({photo:F[r],idx:r});case 8:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.closePhoto=function(){a.setState({isOpen:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photo,r=t.idx,o=t.isOpen;return n.a.createElement("div",{className:"photos-container"},n.a.createElement("div",{className:"title"},"Photography"),n.a.createElement("div",{className:"photos"},n.a.createElement(N,{photo:a,isOpen:o,openPhoto:this.openPhoto,closePhoto:this.closePhoto,idx:r}),F.map(function(t,a){return n.a.createElement("div",{key:t,className:"photos-thumbnail-container"},n.a.createElement("img",{alt:"thumbnail",src:t,className:"photos-thumbnail",onClick:function(){return e.openPhoto(t,a)}}))}),n.a.createElement("div",{className:"thumbnail-filler"}),n.a.createElement("div",{className:"thumbnail-filler"}),n.a.createElement("div",{className:"thumbnail-filler"}),n.a.createElement("div",{className:"thumbnail-filler"}),n.a.createElement("div",{className:"thumbnail-filler"}),n.a.createElement("div",{className:"thumbnail-filler"}),n.a.createElement("div",{className:"thumbnail-filler"}),n.a.createElement("div",{className:"thumbnail-filler"})))}}]),t}(r.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"title"},"Projects"),n.a.createElement("div",{className:"proj-card"},n.a.createElement("div",{className:"proj-image-container"},n.a.createElement("img",{className:"proj-image",alt:"proj-screenshot",src:"/images/projs/divvi.png"})),n.a.createElement("div",{className:"proj-about"},n.a.createElement("div",{className:"proj-title"},"Divvi"),n.a.createElement("div",{className:"proj-techs"},"Typescript, React, Redux, Node.js"),n.a.createElement("div",{className:"proj-body"},"Web application for dividing a dinner bill and helping users know who and how much to pay for their portion."),n.a.createElement("div",{className:"proj-links"},n.a.createElement("a",{href:"https://div.yuvachang.com",rel:"noopener noreferrer",target:"_blank",className:"button"},"Visit"),n.a.createElement("a",{href:"https://github.com/yuvachang/div",rel:"noopener noreferrer",target:"_blank",className:"button"},"GitHub")))),n.a.createElement("div",{className:"proj-card"},n.a.createElement("div",{className:"proj-image-container"},n.a.createElement("img",{className:"proj-image",alt:"proj-screenshot",src:"/images/projs/minesweeper.png"})),n.a.createElement("div",{className:"proj-about"},n.a.createElement("div",{className:"proj-title"},"Minesweeper"),n.a.createElement("div",{className:"proj-techs"},"React, Firebase, Cloud Firestore, Node.js"),n.a.createElement("div",{className:"proj-body"},"Online Minesweeper game replicating the Microsoft original with 3 levels of difficulty and a live leaderboard database in Cloud Firestore.",n.a.createElement("br",null)),n.a.createElement("div",{className:"proj-links"},n.a.createElement("a",{href:"https://minesweeper.yuvachang.com",rel:"noopener noreferrer",target:"_blank",className:"button"},"Play!"),n.a.createElement("a",{href:"https://github.com/yuvachang/minesweeper",rel:"noopener noreferrer",target:"_blank",className:"button"},"GitHub")))),n.a.createElement("hr",null),n.a.createElement("div",{className:"proj-card"},n.a.createElement("div",{className:"proj-image-container"},n.a.createElement("img",{className:"proj-image",alt:"proj-screenshot",src:"/images/projs/split.png"})),n.a.createElement("div",{className:"proj-about"},n.a.createElement("div",{className:"proj-title"},"Split"),n.a.createElement("div",{className:"proj-techs"},"React.js, Redux, Firebase, Cloud Firestore, Node.js"),n.a.createElement("div",{className:"proj-body"},"Expense management app with Firebase BaaS and React. Users track individual or group spendings and itemize costs.",n.a.createElement("br",null),"\u2022 Used Firebase api and services for OAuth logins and database and project hosting.",n.a.createElement("br",null),"\u2022 Managed front end data with Redux and styled towards mobile responsiveness with SASS."),n.a.createElement("div",{className:"proj-links"},n.a.createElement("a",{href:"https://split.yuvachang.com",rel:"noopener noreferrer",target:"_blank",className:"button"},"Visit"),n.a.createElement("a",{href:"https://github.com/yuvachang/Split",rel:"noopener noreferrer",target:"_blank",className:"button"},"GitHub")))),n.a.createElement("hr",null),n.a.createElement("div",{className:"proj-card"},n.a.createElement("div",{className:"proj-image-container"},n.a.createElement("img",{className:"proj-image",alt:"proj-screenshot",src:"/images/projs/ezsplit.PNG"})),n.a.createElement("div",{className:"proj-about"},n.a.createElement("div",{className:"proj-title"},"EZ-Split"),n.a.createElement("div",{className:"proj-techs"},"React.js, Redux, Node.js, Express, Socket.IO, Sequelize, PSQL, Mongoose, MongoDB, Passport, Heroku"),n.a.createElement("div",{className:"proj-body"},"Full stack web app using sockets and OCR API to upload and itemize receipts. Users collaborate to split a shared bill.",n.a.createElement("br",null),"\u2022 Implemented websockets and coordinated front end components for multi-client collaboration on receipt items.",n.a.createElement("br",null),"\u2022 Headed the front end component-based execution of updating and handling client data.",n.a.createElement("br",null),"\u2022 Integrated (Taggun) OCR API and RESTful endpoints for uploading and retrieval of JSON data.",n.a.createElement("br",null),"\u2022 Planned and created database schemas and queries in the Express backend."),n.a.createElement("div",{className:"proj-links"},n.a.createElement("a",{href:"https://ezsplit.herokuapp.com",rel:"noopener noreferrer",target:"_blank",className:"button"},"Visit"),n.a.createElement("a",{href:"https://github.com/EZSplit/EZSplit",rel:"noopener noreferrer",target:"_blank",className:"button"},"GitHub")))),n.a.createElement("hr",null),n.a.createElement("div",{className:"proj-card"},n.a.createElement("div",{className:"proj-image-container"},n.a.createElement("img",{className:"proj-image",alt:"proj-screenshot",src:"/images/projs/ghb-c.jpg"})),n.a.createElement("div",{className:"proj-about"},n.a.createElement("div",{className:"proj-title"},"React Native GitHub Browser"),n.a.createElement("div",{className:"proj-techs"},"React Native, Redux, Node.js, Android Studio"),n.a.createElement("div",{className:"proj-body"},"Browse GitHub user repositories on Android. 4 day stackathon, basic email authentication and React Native Navigation for user flow."),n.a.createElement("div",{className:"proj-links"},n.a.createElement("a",{href:"https://youtu.be/GURAjh7Iw2A",rel:"noopener noreferrer",target:"_blank",className:"button"},"Video demo"),n.a.createElement("a",{href:"https://github.com/yuvachang/stackathon/tree/master/AnotherGitHubBrowser",rel:"noopener noreferrer",target:"_blank",className:"button"},"GitHub")))))}}]),t}(r.Component),y=a(33),x=a(13),D=a.n(x),O="entry.1769400634",S="entry.1790682624",C="https://docs.google.com/forms/d/e/1FAIpQLSfJWwgmhh2a1DrB1DO__NyzT6tKSSYNDVKMN-xvmMmtG9Kfrw/formResponse",A="https://cors-anywhere.herokuapp.com/",P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={emailAddress:"",name:"",message:"",errorMessage:!1,sent:!1,error:""},a.handleChange=function(e){a.textareaNode.contains(e.target)&&(a.textareaNode.style.height="1px",a.textareaNode.style.height="".concat(a.textareaNode.scrollHeight,"px")),a.setState(Object(y.a)({},e.target.name,e.target.value))},a.sendMessage=function(){var e=new FormData;e.append(O,a.state.name),e.append(S,a.state.message),e.append("emailAddress",a.state.emailAddress),D.a.post(A+C,e).then(function(){a.setState({emailAddress:"",name:"",message:""})}).catch(function(e){console.error(e),a.setState({errorMessage:!0})}),a.messageSent()},a.validate=function(e){return/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(String(e).toLowerCase())},a.messageSent=function(){a.setState({sent:!0})},a.handleSubmit=function(){var e=Object(E.a)(b.a.mark(function e(t){var r,n,o,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=a.state,n=r.emailAddress,o=r.name,i=r.message,n){e.next=7;break}return a.setState({error:"Please enter an email address"}),e.abrupt("return");case 7:if(o){e.next=12;break}return a.setState({error:"Please enter a name"}),e.abrupt("return");case 12:if(i){e.next=15;break}return a.setState({error:"Please enter a message"}),e.abrupt("return");case 15:if(!n){e.next=19;break}if(a.validate(n)){e.next=19;break}return a.setState({error:"Your email address doesn't seem valid"}),e.abrupt("return");case 19:return e.next=21,a.sendMessage();case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.sent,r=t.error;return n.a.createElement("div",{className:"contact-container"},n.a.createElement("div",{className:"contact-me ".concat(a?"hidden":"")},n.a.createElement("div",{className:"title"},"Contact"),r&&n.a.createElement("div",{className:"error-msg"},n.a.createElement("br",null),r),n.a.createElement("br",null),n.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},n.a.createElement("input",{type:"email",name:"emailAddress",value:this.state.emailAddress,placeholder:"Your email",onChange:this.handleChange}),n.a.createElement("input",{type:"text",name:"name",value:this.state.name,placeholder:"Name",onChange:this.handleChange}),n.a.createElement("textarea",{type:"text",name:"message",value:this.state.message,placeholder:"Message",onChange:this.handleChange,ref:function(t){e.textareaNode=t}}),n.a.createElement("input",{type:"submit",value:"Submit"}))),n.a.createElement("div",{className:"contact-me ".concat(a?"":"hidden"),onClick:function(){return e.setState({sent:!1})}},n.a.createElement("div",{className:"title"},"Thanks for the email!"),n.a.createElement("br",null),n.a.createElement("div",{className:"alink"},"Send another")))}}]),t}(r.Component);function T(){return n.a.createElement(p.b,{render:function(){return n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/",component:f}),n.a.createElement(p.b,{path:"/photography",component:w}),n.a.createElement(p.b,{path:"/projects",component:k}),n.a.createElement(p.b,{path:"/about",component:f}),n.a.createElement(p.b,{path:"/contact",component:P}),n.a.createElement(p.a,{from:"*",to:"/",component:function(){return null}}))}})}var L,R="entry.42553904",M="https://docs.google.com/forms/d/13aRw7XO7iDj0ij0pzkBe59iTWXrRR-t3QduARH9jPoc/formResponse",z="https://cors-anywhere.herokuapp.com/",H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={currentMedia:"View resume",href:"../images/YuvaChangResume.pdf"},a.selectMedia=function(e,t){a.setState({currentMedia:e,href:t})},a.resumeDLCounter=function(){var e=new FormData;e.append(R,"someone viewed your resume"),D.a.post(z+M,e).catch(function(e){console.error(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"links-and-files"},n.a.createElement("div",{className:"media-icons"},n.a.createElement("a",{href:"https://github.com/yuvachang",rel:"noopener noreferrer",target:"_blank",title:"Github"},n.a.createElement("img",{src:"../images/icons/ghlogo.svg",alt:"github",className:"icon"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/yuvachang/",rel:"noopener noreferrer",target:"_blank",title:"LinkedIn"},n.a.createElement("img",{src:"../images/icons/linkedin-logo.svg",alt:"linkedin",className:"icon"})),n.a.createElement("a",{href:"https://issuu.com/skwrl/docs/pportfolio",rel:"noopener noreferrer",target:"_blank",title:"ISSUU portfolio"},n.a.createElement("img",{src:"../images/icons/issuu-logo.png",alt:"issuu",className:"icon",style:{width:"21px",height:"21px"}})),n.a.createElement("a",{href:"https://www.instagram.com/mrskwrl/",rel:"noopener noreferrer",target:"_blank",title:"Instagram"},n.a.createElement("img",{src:"../images/icons/instagram-logo.svg",alt:"instagram",className:"icon"}))),n.a.createElement("a",{className:"button",href:"../images/YuvaChangResume.pdf",rel:"noopener noreferrer",target:"_blank",onClick:this.resumeDLCounter},"resume"))}}]),t}(r.Component),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={pathname:"/"},a.urlListener=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({pathname:window.location.pathname});case 2:case"end":return e.stop()}},e)})),a.componentDidMount=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return L=a.props.history.listen(a.urlListener),e.next=3,a.urlListener();case 3:case"end":return e.stop()}},e)})),a.componentWillUnmount=function(){L()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.pathname;return n.a.createElement("div",{id:"profile-pic-container",className:"/"!==e||this.props.hidePicture?"collapsed":""},n.a.createElement("div",{className:"profile-picture"}),n.a.createElement(H,null))}}]),t}(r.Component),I=Object(p.g)(B),G="entry.1760996027",W="https://docs.google.com/forms/d/e/1FAIpQLSfuKghlPk0EkEAbqLl-HJ14tgLNEyoMKzc1CWd7tp55-CjUhQ/formResponse",Y="https://cors-anywhere.herokuapp.com/",K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={showBackToTop:!1,hidePicture:!1},a.backToTop=function(e){var t=a.state,r=t.showBackToTop,n=t.hidePicture;"/"!==window.location.pathname&&(a.routes.scrollTop>150&&!a.state.showBackToTop?r=!0:a.routes.scrollTop<=150&&a.state.showBackToTop&&(r=!1),a.setState({showBackToTop:r,hidePicture:n}))},a.scrollToTop=function(){a.routes.scrollTo(0,0)},a.mouseWheel=function(e){if("/"===window.location.pathname){var t=e.deltaY,r=a.state.hidePicture;r&&t<0&&0===a.routes.scrollTop&&(r=!1),!r&&t>0&&a.routes.scrollTop>=5&&(r=!0),a.setState({hidePicture:r})}},a.touchstartf=function(e){a.touchstart=e.touches[0].clientY},a.touch=function(e){if(a.touchstart){var t=a.state.hidePicture,r=e.touches[0].clientY;r>a.touchstart&&t&&a.routes.scrollTop<=5?t=!1:r<a.touchstart&&!t&&(t=!0),a.setState({hidePicture:t})}},a.logVisit=function(){var e=new FormData;D.a.get("https://freegeoip.app/json/").then(function(t){var a=t.data,r=a.ip,n=a.city,o=a.region_name,i=a.zip_code,c=a.longitude,s=a.latitude;e.append(G,"visit from: \n ip: ".concat(r,", \n loc: ").concat(n,", ").concat(o,", ").concat(i," \n coor: ").concat(s,", ").concat(c)),D.a.post(Y+W,e).catch(function(e){})}).catch(function(t){console.error(t),e.append(G,"no ip data. error: ".concat(t)),D.a.post(Y+W,e).catch(function(e){})})},a.componentDidMount=function(){a.touchstart=!1,document.addEventListener("touchstart",function(e){return a.touchstartf(e)}),document.addEventListener("touchmove",function(e){return a.touch(e)}),window.addEventListener("wheel",function(e){return a.mouseWheel(e)}),a.routes.addEventListener("scroll",function(e){return a.backToTop(e)}),a.unlistenHistory=a.props.history.listen(function(e,t){a.scrollToTop()}),a.logVisit()},a.componentWillUnmount=function(){document.removeEventListener("touchstart",function(e){return a.touchstartf(e)}),document.removeEventListener("touchmove",function(e){return a.touch(e)}),window.removeEventListener("wheel",function(e){return a.mouseWheel(e)}),a.routes.removeEventListener("scroll",function(e){return a.backToTop(e)}),a.unlistenHistory()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.showBackToTop,r=t.hidePicture;return n.a.createElement("div",{className:"app"},n.a.createElement(j,null),n.a.createElement(I,{hidePicture:r}),n.a.createElement("div",{id:"routes",ref:function(t){return e.routes=t}},n.a.createElement(T,{className:"/"===window.location.pathname?"home":""})),n.a.createElement("div",{className:"back-to-top ".concat(a?"":"hidden")},n.a.createElement("div",{className:"alink",onClick:function(){e.routes.scroll({top:0,left:0,behavior:"smooth"})}},"Back to top")))}}]),t}(r.Component),U=Object(p.g)(K);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(7),Z=Object(V.a)();i.a.render(n.a.createElement(g.a,{history:Z},n.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.4a0b936b.chunk.js.map