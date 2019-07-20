(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(48)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(15),c=n.n(i),u=(n(35),n(36),n(6)),o=n(7),s=n(9),l=n(8),m=n(10),d=(n(37),n(38),function(e){var t=e.artists;if(!t)return null;var n=t.images,r=t.name,i=t.followers,c=t.genres;return a.a.createElement("div",{className:"artist-container"},a.a.createElement("div",{className:"artist-profile-container"},a.a.createElement("img",{className:"artist-profile",src:n[0]&&n[0].url,alt:"artist-profile"}),a.a.createElement("p",null,r),a.a.createElement("p",null,c.join(",")),a.a.createElement("p",null,i.total)))}),p=(n(39),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).playAudio=function(e){var t=new Audio(e);n.state.playing?(n.state.audio.pause(),n.state.playing_previous_preview_url==e?n.setState({playing:!1}):(t.play(),n.setState({audio:t,playing_previous_preview_url:e}))):(t.play(),n.setState({playing:!0,audio:t,playing_previous_preview_url:e}))},n.state={playing:!1,audio:null,playing_previous_preview_url:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tracks;return a.a.createElement("div",{className:"track-contanier"},t.map(function(t){var n=t.id,r=t.album,i=t.name,c=t.preview_url;return a.a.createElement("div",{key:n,className:"track-info",onClick:function(){return e.playAudio(c)}},a.a.createElement("img",{className:"track-image",src:r.images[0]&&r.images[0].url,alt:"track-profile"}),a.a.createElement("p",null,i))}))}}]),t}(r.Component)),h=(n(40),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={searchQuery:""},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"changeQuerry",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"onHitEnter",value:function(e){"Enter"==e.key&&this.runQuerryFun()}},{key:"runQuerryFun",value:function(){this.props.runQuerry(this.state.searchQuery)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Header-container"},a.a.createElement("input",{type:"text",className:"search-input",placeholder:"Enter artist name",value:this.state.searchQuery,onChange:function(t){return e.changeQuerry(t)},onKeyPress:function(t){return e.onHitEnter(t)}}),a.a.createElement("button",{className:"submit-btn",onClick:function(){return e.runQuerryFun()}},"Search"))}}]),t}(r.Component)),f="https://spotify-api-wrapper.appspot.com/",E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={artists:null,tracks:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"runQuerry",value:function(e){var t=this;fetch("".concat(f,"/artist/").concat(e)).then(function(e){return e.json()}).then(function(e){if(console.log("artist",e),e.artists.items.length>0){var n=e.artists.items[0];t.setState({artists:n}),fetch("".concat(f,"/artist/").concat(n.id,"/top-tracks")).then(function(e){return e.json()}).then(function(e){t.setState({tracks:e.tracks})}).catch(function(e){return console.log(e)})}}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return a.a.createElement("div",{className:"main-container"},a.a.createElement(h,{runQuerry:this.runQuerry.bind(this)}),a.a.createElement(d,{artists:this.state.artists}),a.a.createElement(p,{tracks:this.state.tracks}))}}]),t}(r.Component),y=n(18),v=n(17),b=(n(45),function(e){function t(e){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"goToReminder",value:function(){this.props.history.push("/entry/reminder")}},{key:"goToMusic",value:function(){this.props.history.push("/entry/music")}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Entry-container"},a.a.createElement("button",{onClick:function(){return e.goToReminder()},className:"btn primary countdown"},"Reminder"),a.a.createElement("button",{onClick:function(){return e.goToMusic()},className:"btn primary music"},"Music"))}}]),t}(a.a.Component)),g=n(26),k=n(12),j=(n(46),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={reminderText:""},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({reminderText:e.target.value})}},{key:"addreminder",value:function(){this.props.addReminder(this.state.reminderText),this.setState({reminderText:""})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"reminder-container"},a.a.createElement("h4",null,"Your Reminder"),a.a.createElement("input",{className:"reminder-input",type:"text",value:this.state.reminderText,onChange:function(t){return e.handleChange(t)}}),a.a.createElement("button",{className:"btn success add-reminder-btn",type:"submit",onClick:function(){return e.addreminder()}},"Add reminder"),this.props.reminder.length>0?this.props.reminder.map(function(t){return a.a.createElement("div",{key:t.id},a.a.createElement("span",null,t.reminderText),a.a.createElement("button",{className:"btn danger delete-btn",onClick:function(){return e.props.deleteReminder(t.id)}},"Delete"))}):"",a.a.createElement("div",null,a.a.createElement("button",{className:"btn danger remove-all-btn",onClick:function(){return e.props.clearReminder()}},"Clear Reminder")))}}]),t}(a.a.Component)),O=Object(y.b)(function(e){return console.log("store data",e),{reminder:e}},function(e){return{addReminder:function(t){return e({type:"SET_REMINDER",reminderText:t})},deleteReminder:function(t){return e({type:"DELETE_ONE_REMINDER",id:t})},clearReminder:function(){return e({type:"CLEAR_REMINDER"})}}})(j),N=n(29),R=n(28),w=function(e){return{reminderText:e.reminderText,id:Math.random()}},_=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SET_REMINDER":return[].concat(Object(R.a)(n),[w(r)]);case"DELETE_ONE_REMINDER":return e=n,t=r.id,e.filter(function(e){return e.id!==t});case"CLEAR_REMINDER":return Object(N.a)({},n);default:return n}};var C=function(){var e=Object(v.b)(_);return a.a.createElement(y.a,{store:e},a.a.createElement("div",{className:"App"},a.a.createElement(g.a,{basename:"/"},a.a.createElement(k.b,{path:"/",exact:!0,render:function(){return a.a.createElement(k.a,{to:"/entry"})}}),a.a.createElement(k.b,{path:"/entry",component:b}),a.a.createElement(k.b,{path:"/entry/reminder",component:O}),a.a.createElement(k.b,{path:"/entry/music",component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.8a1ac315.chunk.js.map