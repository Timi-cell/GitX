(this.webpackJsonpGitX=this.webpackJsonpGitX||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(14),i=a.n(c),l=(a(36),a(37),a(58),a(7)),r=a(8),o=a(11),d=a(10),j=(a(59),a(69)),b=a(66),h=a(70),u=a(1),m=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(j.a,{bg:"dark",expand:"lg",children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)(j.a.Brand,{href:"#",className:"text-white",children:Object(u.jsx)("h1",{children:"Git-X"})}),Object(u.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"text-white"}),Object(u.jsx)(j.a.Collapse,{id:"basic-navbar-nav",className:"text-end text-white",children:Object(u.jsx)(h.a,{className:"ms-auto",children:Object(u.jsx)(h.a.Link,{className:"text-white",href:"#","data-bs-target":"#exampleModal","data-bs-toggle":"modal",children:"About Git-X"})})})]}),Object(u.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content bg-dark",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"About Git-X"}),Object(u.jsx)("button",{type:"button",className:"btn-close bg-light","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsx)("p",{children:"Git-X is a web application that gives users the opportunity and interface to search an existing github user and get more details on the github user\u2019s account like full-name, github username, number of repositories, number of followers etc."}),Object(u.jsx)("p",{children:"Developed by Aluko Oluwatimilehin."})]}),Object(u.jsx)("div",{className:"modal-footer",children:Object(u.jsx)("button",{type:"button",className:"btn btn-danger","data-bs-dismiss":"modal",children:"Close"})})]})})})]})}}]),a}(s.Component),x=a(67),p=a(71),O=a(68),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onSubmit,a=e.handleInput,s=e.username;return Object(u.jsxs)(x.a,{className:"mt-5 input",children:[Object(u.jsx)(p.a,{placeholder:"Search Username...",value:s,onChange:function(e){return a(e.target)}}),Object(u.jsx)(O.a,{as:"input",value:"Submit",variant:"outline-primary",type:"submit",className:"ms-2 text-white",onClick:t})]})}}]),a}(s.Component),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.username,s=e.picture,n=e.date_joined,c=e.bio,i=e.repos,l=e.followers,r=e.following,o=e.location,d=e.twitter_username,j=e.blog,b=e.account_address;return Object(u.jsxs)("section",{className:"bodyContainer mt-3 d-md-flex w-100  justify-content-between align-items-start",children:[Object(u.jsx)("img",{src:s||"./images/github-dark.png",alt:"profile pic",className:"image mb-5"}),Object(u.jsxs)("div",{className:"contents p-1",children:[Object(u.jsxs)("div",{className:"top d-md-flex justify-content-between align-items-center",children:[Object(u.jsx)("h3",{children:t||"This user does not exist."}),Object(u.jsxs)("p",{children:["Joined ",n||"---"]})]}),Object(u.jsx)("p",{className:"mt-2",children:a||"---"}),Object(u.jsx)("p",{children:c||"This profile has no bio."}),Object(u.jsxs)("div",{className:"cutout d-sm-flex justify-content-between mt-5 p-4",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Repos"}),Object(u.jsx)("h4",{children:i||"---"})," "]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Followers"}),Object(u.jsx)("h4",{children:l||"---"})," "]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Following"}),Object(u.jsx)("h4",{children:r||"---"})," "]})]}),Object(u.jsxs)("div",{className:"social d-lg-flex mt-4  justify-content-between align-items-center  p-1",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"d-flex  align-items-center",children:[Object(u.jsx)("i",{className:"fas fa-map-marker-alt"})," ",Object(u.jsx)("span",{children:o||"---"})]}),Object(u.jsxs)("p",{className:"d-flex  align-items-center",children:[Object(u.jsx)("i",{className:"fas fa-paperclip"})," ",Object(u.jsx)("span",{children:Object(u.jsx)(h.a.Link,{href:j||"#",className:"text-white p-0 m-0",children:"Visit Blog"})})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"d-flex  align-items-center",children:[Object(u.jsx)("i",{className:"fab fa-twitter"})," ",Object(u.jsx)("span",{children:d||"---"})]}),Object(u.jsxs)("p",{className:"d-flex  align-items-center",children:[Object(u.jsx)("i",{className:"fab fa-github"}),Object(u.jsx)("span",{children:Object(u.jsx)(h.a.Link,{href:b||"#",className:"text-white p-0 m-0",children:"Go to GitHub Page"})})]})]})]})]})]})}}]),a}(s.Component),v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={name:"---",username:"",picture:"./images/github-dark.png",date_joined:"---",bio:"---",repos:0,followers:0,following:0,location:"---",twitter_username:"---",blog:"---",account_address:""},e.handleSubmit=function(){e.connectGithub(e.state.username)},e.handleInput=function(t){var a=t.value;e.setState({username:a})},e}return Object(r.a)(a,[{key:"connectGithub",value:function(e){var t=this;fetch("".concat("https://api.github.com/users","/").concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){var a=e.name,s=e.login,n=e.avatar_url,c=e.created_at,i=e.bio,l=e.public_repos,r=e.followers,o=e.following,d=e.location,j=e.twitter_username,b=e.blog,h=e.html_url,u=new Date(c);t.setState({name:a,username:s,picture:n,date_joined:u.toLocaleString(),bio:i,repos:l,followers:r,following:o,location:d,twitter_username:j,blog:b,account_address:h})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsxs)(b.a,{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(u.jsx)(f,{onSubmit:this.handleSubmit,handleInput:this.handleInput,username:this.state.username}),Object(u.jsx)(g,{data:this.state})]})]})}}]),a}(s.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.393fc9de.chunk.js.map