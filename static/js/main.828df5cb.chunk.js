(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(7),s=a.n(r),i=a(1),c=a(2),o=a(5),u=a(4),p=a(3),m=(a(13),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=h.map((function(e){return n.a.createElement("li",{key:e.skillName,className:"skill"},n.a.createElement("img",{className:"skill-image",id:e.skillName,alt:e.skillName,src:e.img}),n.a.createElement("ul",{className:"skill-text"},n.a.createElement("li",{className:"skill-name",align:"left"},e.skillName),n.a.createElement("li",{className:"skill-desc"},e.skillDesc)))}));return n.a.createElement("div",{id:"skill-list",align:"center"},n.a.createElement("ul",{id:"skill-list-ul"},e))}}]),a}(n.a.Component)),h=[{img:"/cpp.png",skillName:"C++",skillDesc:"\u7af6\u6280\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u30b2\u30fc\u30e0\u5236\u4f5c\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"},{img:"/kotlin.png",skillName:"Kotlin",skillDesc:"Android\u30a2\u30d7\u30ea\u958b\u767a\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"},{img:"/java.png",skillName:"Java",skillDesc:"\u6388\u696d\u3068Android\u30a2\u30d7\u30ea\u958b\u767a\u3067\u4f7f\u7528\u3057\u307e\u3057\u305f\u3002"},{img:"/jvsc.png",skillName:"JavaScript",skillDesc:"web\u5236\u4f5c\u306e\u969b\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"},{img:"/droid.png",skillName:"Android",skillDesc:"\u30a2\u30d7\u30ea\u30921\u3064\u30ea\u30ea\u30fc\u30b9\u3057\u3066\u3044\u307e\u3059"},{img:"/react.png",skillName:"React",skillDesc:"\u3053\u306e\u30b5\u30a4\u30c8\u306fReact\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u308a\u307e\u3057\u305f\u3002"}],d=(a(14),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.bios.map((function(t,a){var l={animationDuration:.3*(a+1)+"s"},r="bio-box bio-box-"+e.props.direction;return null!=t.url&&(r+=" valid-link"),n.a.createElement("div",{key:t.desc,className:r,style:l},n.a.createElement("p",{className:"bio-label"},n.a.createElement("label",{htmlFor:t.desc},t.desc)),n.a.createElement("p",{className:"bio-text"},n.a.createElement("a",{id:t.desc,href:t.url},t.text)))})),a="bio-list bio-list-"+this.props.direction;return n.a.createElement("div",{className:a,id:"bio-"+this.props.direction},t)}}]),a}(n.a.Component)),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=k.map((function(e){return n.a.createElement("li",{key:e.desc,className:"bio-otherlink-box"},n.a.createElement("a",{href:e.url,className:"bio-otherlink-text"},e.desc))}));return n.a.createElement("ul",{className:"bio-otherlinks"},e)}}]),a}(n.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=[[],[]];return f.forEach((function(t,a){e[a%2].push(t)})),n.a.createElement("div",{id:"bio",align:"center"},n.a.createElement("h1",{align:"center",className:"introduction"},"\u81ea\u5df1\u7d39\u4ecb"),n.a.createElement("div",{id:"bio-lists"},n.a.createElement(d,{bios:e[0],direction:"left"}),n.a.createElement(d,{bios:e[1],direction:"right"})),n.a.createElement("h1",{className:"bio-otherlink-desc"},"Other Link"),n.a.createElement(v,null))}}]),a}(n.a.Component),f=[{desc:"Name",text:"Koki Yamashita",url:null},{desc:"Univ",text:"Meiji Univ.",url:null},{desc:"BirthDay",text:"1999/08/08",url:null},{desc:"Mail",text:"oneky8080(a)gmail.com",url:null},{desc:"GitHub",text:"shopOne",url:"https://github.com/ShopOne"},{desc:"GooglePlay Account",text:"shop_one",url:"https://play.google.com/store/apps/developer?id=shop_one"},{desc:"Qiita",text:"shop_one",url:"https://qiita.com/shop_one"},{desc:"Twitter",text:"@_shop_one",url:"https://twitter.com/_shop_one"}],k=[{desc:"AtCoder Account",url:"https://atcoder.jp/users/shop_one"},{desc:"Codeforces Account",url:"https://codeforces.com/profile/shop_one"},{desc:"App(\u98a8\u6765\u306e\u30b7\u30ec\u30f3SFC\u30b5\u30dd\u30fc\u30bf\u30fc)",url:"https://play.google.com/store/apps/details?id=com.support.shirensupporter"},{desc:"Game(\u3086\u308b\u3075\u308fSTG)",url:"https://www.freem.ne.jp/win/game/19515"},{desc:"Game(hiyaya_ko)",url:"https://www.freem.ne.jp/win/game/22440"}],y=(a(15),a(16),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=g.map((function(t){return n.a.createElement("li",{key:t.value,className:"selector-box"},n.a.createElement("button",{value:t.value,id:t.id,align:"center",className:"selector-button",onClick:e.props.func},t.desc))}));return n.a.createElement("div",{id:"selector"},n.a.createElement("img",{src:"/logo.png",id:"selector-logo",alt:"logo"}),n.a.createElement("img",{src:"/tana.png",id:"selector-tana",className:"selector-button",alt:"logo"}),n.a.createElement("ul",{align:"center",id:"selector-list"},t))}}]),a}(n.a.Component)),g=[{value:"Biography",id:"selector-bio",desc:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3068\u30ea\u30f3\u30af"},{value:"Skill",id:"selector-skill",desc:"\u30b9\u30ad\u30eb"},{value:"Introduction",id:"selector-bio",desc:"\u81ea\u5df1\u7d39\u4ecb"},{value:"Game",id:"selector-game",desc:"\u30b2\u30fc\u30e0"}],E=(a(17),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"introduction"},n.a.createElement("h2",null,"\u6240\u5c5e"),n.a.createElement("p",null,"\u660e\u6cbb\u5927\u5b66\u7406\u5de5\u5b66\u90e8\u60c5\u5831\u79d1\u5b66\u79d1(B3)"),n.a.createElement("p",null,"Integrated Quality(\u60c5\u5831\u51e6\u7406\u30b5\u30fc\u30af\u30eb)\u5e79\u4e8b\u9577"),n.a.createElement("h2",null,"PR"),n.a.createElement("p",null,"\u7af6\u6280\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u30b9\u30de\u30db\u30a2\u30d7\u30ea\u958b\u767a\u3092\u4e2d\u5fc3\u306b\u6d3b\u52d5\u3092\u3057\u3066\u3044\u307e\u3059\u3002"),n.a.createElement("p",null,"\u307e\u305f\u3001\u4f4e\u30ec\u30a4\u30e4\u30fc\u306b\u3082\u8208\u5473\u304c\u3042\u308a\u307e\u3059\u3002\u5c11\u3057\u524d\u306f\u81ea\u4f5cOS\u3092\u8a66\u3057\u3066\u3044\u307e\u3057\u305f\u3002"),n.a.createElement("h2",null,"\u8da3\u5473"),n.a.createElement("p",null,"\u958b\u767a\u4ee5\u5916\u306e\u8da3\u5473\u3068\u3057\u3066\u306f\u30b2\u30fc\u30e0\u3001 \u7279\u306b\u30ed\u30fc\u30b0\u30e9\u30a4\u30af\u30b2\u30fc\u30e0\u3068\u7e26\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u304c\u597d\u304d\u3067\u3059\u3002"),n.a.createElement("p",null,"\u307e\u305f\u91ce\u7403\u89b3\u6226\u3092\u3057\u3066\u3044\u307e\u3059\u3001\u30d9\u30a4\u30b9\u30bf\u30fc\u30ba\u30d5\u30a1\u30f3\u3067\u3059\u3002"),n.a.createElement("h2",null,"\u5b9f\u7e3e"),n.a.createElement("p",null,"Comming soon..."))}}]),a}(n.a.Component));a(18);function x(e,t,a,l){return e*a+t*l}function j(e){return e*e}function O(e,t,a){return e<t?t:e>a?a:e}function N(e,t,a,l,n){var r=e.rad,s=e.posX+r,i=e.posY+r;if(r>=function(e,t,a,l){return Math.abs(e*l-t*a)}(l-t,n-a,s-t,i-a)/Math.sqrt(j(l-t)+j(n-a))){if(x(s-t,i-a,l-t,n-a)*x(s-l,i-n,l-t,n-a)<=0)return!0;if(j(r)>j(s-t)+j(i-a)||j(r)>j(s-l)+j(i-n))return!0}return!1}var w=function(){for(var e=[],t=0;t<4;t++)for(var a=0;a<7;a++)e.push({posX:110+71*a,posY:150+40*t,width:60,height:30,exist:!0,vx:0,vy:0});return e},B=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.bars.map((function(e){return n.a.createElement("div",{className:"Game-bar",key:e.key,style:{left:e.posX+"px",top:e.posY+"px",width:e.width+"px",height:e.height+"px"}})})),t=this.props.blocks.map((function(e,t){return n.a.createElement("div",{className:"Game-block",key:t,style:{left:e.posX+"px",top:e.posY+"px",width:e.width+"px",height:e.height+"px",display:e.exist?"block":"none"}})}));return n.a.createElement("div",{id:"Game-DrawHandler"},n.a.createElement("div",{className:"Game-ball",style:{left:this.props.ball.posX+"px",top:this.props.ball.posY+"px",width:40,height:40,rad:20}}),n.a.createElement("div",{id:"Game-bars"},e),n.a.createElement("div",{id:"Game-blocks"},t))}}]),a}(n.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).state={gameMode:"stop",ball:{posX:400,posY:400,vx:1,vy:3,rad:20},blocks:w(),blockNum:0,bars:[{posX:0,posY:0,width:200,height:20,vx:0,vy:0,key:"top"},{posX:500,posY:680,width:200,height:20,vx:0,vy:0,key:"bottom"},{posX:0,posY:0,width:20,height:200,vx:0,vy:0,key:"left"},{posX:680,posY:500,width:20,height:200,vx:0,vy:0,key:"right"}]},l.moveBall=l.moveBall.bind(Object(o.a)(l)),l.keyHandler=l.keyHandler.bind(Object(o.a)(l)),l.timeID=setInterval((function(){return l.moveObject()}),10),l}return Object(c.a)(a,[{key:"setBar",value:function(e){var t=e.vx,a=e.vy;e.posX=O(e.posX+t,0,700-e.width),e.posY=O(e.posY+a,0,700-e.height)}},{key:"formatBarSpd",value:function(e){e.vx=0,e.vy=0}},{key:"moveBar",value:function(){var e=this.state.bars[0],t=this.state.bars[1],a=this.state.bars[2],l=this.state.bars[3];this.formatBarSpd(e),this.formatBarSpd(t),this.formatBarSpd(a),this.formatBarSpd(l),this.state.upKey&&(a.vy=5,l.vy=-5),this.state.downKey&&(a.vy=-5,l.vy=5),this.state.leftKey&&(e.vx=5,t.vx=-5),this.state.rightKey&&(e.vx=-5,t.vx=5),this.setBar(e),this.setBar(t),this.setBar(l),this.setBar(a),this.setState({bars:[e,t,a,l]})}},{key:"keyHandler",value:function(e,t){var a=this.state.upKey,l=this.state.downKey,n=this.state.leftKey,r=this.state.rightKey,s=this.state.gameMode,i=this.state.blocks,c=this.state.ball,o=this.state.blockNum;switch(e.key){case"ArrowUp":a=t,e.preventDefault();break;case"ArrowDown":l=t,e.preventDefault();break;case"ArrowLeft":n=t,e.preventDefault();break;case"ArrowRight":r=t;break;case" ":"stop"===s?s="onGame":"end"===s&&(this.refleshblocks(i),this.refleshBall(c),o=0,s="stop"),e.preventDefault()}this.setState({upKey:a,downKey:l,leftKey:n,rightKey:r,gameMode:s,ball:c,blocks:i,blockNum:o})}},{key:"ballHitObject",value:function(e,t){var a=t.posX,l=t.posY,n=a+t.width,r=l+t.height,s=[];return N(e,a,l,n,l)&&s.push("top"),N(e,a,r,n,r)&&s.push("bottom"),N(e,a,l,a,r)&&s.push("left"),N(e,n,l,n,r)&&s.push("right"),s}},{key:"ballReflect",value:function(e,t,a,l,n){(l.includes("bottom")||l.includes("top"))&&(e.posY=a+n.vy,e.vy=-e.vy,e.vx+=n.vx/5,e.vy+=n.vy/5),(l.includes("left")||l.includes("right"))&&(e.posX=t+n.vx,e.vx=-e.vx,e.vx+=n.vx/5,e.vy+=n.vy/5)}},{key:"ballHitBars",value:function(e,t,a,l){var n=this;return t.forEach((function(t){var r=n.ballHitObject(e,t);if(n.ballReflect(e,a,l,r,t),0!==r.length)return!0})),!1}},{key:"ballHitBlocks",value:function(e,t,a,l){for(var n=0;n<t.length;n++)if(t[n].exist){var r=this.ballHitObject(e,t[n]);if(this.ballReflect(e,a,l,r,t[n]),0!==r.length)return t[n].exist=!1,!0}return!1}},{key:"refleshblocks",value:function(e){for(var t=0;t<e.length;t++)e[t].exist=!0}},{key:"refleshBall",value:function(e){e.posX=400,e.posY=400,e.vx=1,e.vy=3}},{key:"moveBall",value:function(){if("onGame"===this.state.gameMode){var e,t=this.state.ball.posX,a=this.state.ball.posY,l=this.state.ball.vx,n=this.state.ball.vy,r=t+l,s=a+n,i=this.state.blocks,c=this.state.ball,o=this.state.bars,u=this.state.gameMode,p=this.state.blockNum;c.posX=r,c.posY=s,(e=this.ballHitBlocks(c,i,t,a))&&p++,e||(e=this.ballHitBars(c,o,t,a)),e||((r<0||r+2*c.rad>700)&&(c.vx=-l,u="end"),(s<0||s+2*c.rad>700)&&(c.vy=-n,u="end")),c.posX=O(c.posX,0,700),c.posY=O(c.posY,0,700),this.setState({ball:c,blocks:i,gameMode:u,blockNum:p})}}},{key:"moveObject",value:function(){this.moveBall(),this.moveBar()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"Game-All"},n.a.createElement("div",{id:"Game",onKeyDown:function(t){return e.keyHandler(t,!0)},onKeyUp:function(t){return e.keyHandler(t,!1)},tabIndex:"0",style:{width:700,height:700,minWidth:700,maxHeight:700}},n.a.createElement(B,{ball:this.state.ball,bars:this.state.bars,blocks:this.state.blocks}),n.a.createElement("p",{id:"Game-clear",style:{display:28===this.state.blockNum?"block":"none"}},"\u3059\u3054\u3044\uff01")),n.a.createElement("div",{id:"Game-desc"},n.a.createElement("h2",null,"\u8aac\u660e"),n.a.createElement("p",null,"\u30d6\u30ed\u30c3\u30af\u5d29\u3057\u3067\u3059\u3002"),n.a.createElement("p",null,"\u30b9\u30da\u30fc\u30b9\u30ad\u30fc\u3067\u958b\u59cb\u3001\u77e2\u5370\u30ad\u30fc\u3067\u30d0\u30fc\u3092\u52d5\u304b\u3057\u307e\u3059\u3002"),n.a.createElement("p",null,"\u305f\u3060\u3057\u3001\u30dc\u30fc\u30eb\u304c\u3069\u306e\u5916\u67a0\u306b\u89e6\u308c\u3066\u3082\u3044\u3051\u307e\u305b\u3093\u3002"),n.a.createElement("p",null,"\uff14\u3064\u306e\u30d0\u30fc\u3092\u99c6\u4f7f\u3057\u3066\u9811\u5f35\u3063\u3066\u4e0b\u3055\u3044\u3002"),n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement("h2",null,"\u653b\u7565"),n.a.createElement("p",null,"\u30dc\u30fc\u30eb\u306e\u901f\u5ea6\u3092\u64cd\u308a\u307e\u3057\u3087\u3046\u3002"),n.a.createElement("p",null,"\u30dc\u30fc\u30eb\u3068\u30d0\u30fc\u304c\u63a5\u89e6\u3057\u305f\u969b\u3001 \u30d0\u30fc\u304c\u52d5\u3044\u3066\u3044\u305f\u3089\u305d\u306e\u65b9\u5411\u306b\u30dc\u30fc\u30eb\u306e\u901f\u5ea6\u304c\u52a0\u7b97\u3055\u308c\u307e\u3059\u3002"),n.a.createElement("p",null,"\u306a\u306e\u3067\u3001\u30dc\u30fc\u30eb\u304c\u52d5\u3044\u3066\u3044\u308b\u9006\u306e\u65b9\u5411\u306b\u30d0\u30fc\u3092\u52d5\u304b\u3057\u306a\u304c\u3089 \u5f53\u3066\u308b\u3068\u96e3\u6613\u5ea6\u304c\u4e0b\u304c\u308a\u307e\u3059\u3002"),n.a.createElement("p",null,"\u7279\u306b\u3001x\u8ef8\u65b9\u5411\u306e\u901f\u5ea6\u306f\u4e0a\u624b\u304f\u3084\u308b\u30680\u306b\u3067\u304d\u307e\u3059\u3002"),n.a.createElement("p",null,"\u5074\u9762\u306e\u30d0\u30fc\u3001\u7279\u306b\u5de6\u30d0\u30fc\u306f\u52d5\u304b\u3059\u306e\u304c\u96e3\u3057\u3044\u306e\u3067\u306a\u308b\u3079\u304f\u4f7f\u308f\u305a\u306b\u3084\u308b\u3068\u826f\u3044\u3067\u3059\u3002")))}}]),a}(n.a.Component),Y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).state={selected:""},l.onClickedHandler=l.onClickedHandler.bind(Object(o.a)(l)),l}return Object(c.a)(a,[{key:"onClickedHandler",value:function(e){var t=e.target.value;this.setState({selected:t})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Profile"},n.a.createElement(y,{func:this.onClickedHandler}),function(){switch(console.log(e.state.selected),e.state.selected){case"Skill":return n.a.createElement(m,null);case"Biography":return n.a.createElement(b,null);case"Introduction":return n.a.createElement(E,null);case"Game":return n.a.createElement(C,null);default:return n.a.createElement("div",null)}}())}}]),a}(n.a.Component),G=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(Y,null)}}]),a}(n.a.Component);a(19);s.a.render(n.a.createElement("div",{className:"body"},n.a.createElement(G,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.828df5cb.chunk.js.map