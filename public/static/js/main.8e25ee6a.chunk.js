(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,n){},141:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(33),l=n.n(c),o=(n(104),n(94)),i=n(34),u=n(54),m=n(27),s=n(79),h=n.n(s),d=n(93),p=n(164),g=n(165),f=n(166),E=n(163),b=n(142),_=n(80),v=n(35),y=n(96),k=n(81),w=n(95),x=n(46),L=n(32),O=n.n(L),j=n(159),S=n(143),B=n(158),C=n(167),I=n(82),F=n.n(I),N=Object(b.a)(function(e){return{paper:{borderBottom:"2px solid transparent",marginBottom:e.spacing(3),padding:e.spacing(2)},failed:{borderColor:"red"},success:{borderColor:"green"}}}),q=r.a.forwardRef(function(e,a){return r.a.createElement(u.b,Object.assign({innerRef:a,to:"/getting-started/installation/"},e))}),D=function(e){var a=N(),n=e.launch,t=n.flight_number,c=n.mission_name,l=n.launch_date_local,o=n.launch_success;return r.a.createElement(S.a,{className:"".concat(a.paper," ").concat(o&&a.success," ").concat(!o&&a.failed),elevation:1},r.a.createElement(B.a,{container:!0},r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(j.a,{variant:"h5",component:"h6"},c),r.a.createElement(j.a,{variant:"body1",component:"p"},r.a.createElement(F.a,{format:"YYYY-MM-DD HH:mm"},l)),r.a.createElement(j.a,{variant:"body1",component:"span"},"Flight Number: ",t)),r.a.createElement(B.a,{item:!0,xs:3},r.a.createElement(C.a,{color:"primary",variant:"contained",component:q,to:"/launch/".concat(t)},"Open Launch"))))},Y=Object(b.a)(function(e){return{detailInfo:{display:"inline-block",padding:"3px 10px",verticalAlign:"middle"},success:{backgroundColor:"green"},failed:{backgroundColor:"red"}}}),A=function(){var e=Y();return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("span",{className:"".concat(e.detailInfo," ").concat(e.success)})," SUCCESS"),r.a.createElement("p",null,r.a.createElement("span",{className:"".concat(e.detailInfo," ").concat(e.failed)})," FAIL"))};function M(){var e=Object(x.a)(["\n    query LaunchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }"]);return M=function(){return e},e}var R=O()(M()),$=function(e){function a(){return Object(_.a)(this,a),Object(y.a)(this,Object(k.a)(a).apply(this,arguments))}return Object(w.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{variant:"h3",component:"h3"},"Past Launches"),r.a.createElement(A,null),r.a.createElement(i.b,{query:R},function(e){var a=e.loading,n=e.error,t=e.data;return a?r.a.createElement(j.a,{variant:"h4",component:"h4"},"Loading..."):(n&&console.log(n),r.a.createElement(r.a.Fragment,null,t.launches.map(function(e){return r.a.createElement(D,{key:e.flight_number,launch:e})})))}))}}]),a}(t.Component),z=n(160),H=n(161),J=n(162),Q=n(92),T=n.n(Q)()({card:{width:400},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),U=function(e){var a=T(),n=e.data,t=n.flight_number,c=n.launch_success,l=n.launch_date_local,o=n.links;return r.a.createElement("div",null,r.a.createElement(z.a,{className:a.card,elevation:2},r.a.createElement(H.a,null,r.a.createElement(j.a,{color:"textSecondary",gutterBottom:!0},"Launched: ",l),r.a.createElement(j.a,{variant:"h5",component:"h2",gutterBottom:!0},"Technical Data"),r.a.createElement(j.a,{color:"textSecondary"},"Launch: ",c?"SUCCESS":"FAILED"),r.a.createElement(j.a,{variant:"body2",component:"p"},"Flight Number: ",t)),r.a.createElement(J.a,null,r.a.createElement(C.a,{size:"small",href:o.article_link,target:"_blank",rel:"noopener"},"Learn More"))))};function W(){var e=Object(x.a)(["\n    query LaunchQuery($flight_number: Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_date_local\n            launch_success\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n            links {\n                article_link\n            }\n        }\n    }\n"]);return W=function(){return e},e}var P=O()(W()),X=function(e){var a=parseInt(e.match.params.flight_number);return r.a.createElement(i.b,{query:P,variables:{flight_number:a}},function(e){var a=e.loading,n=e.error,t=e.data;if(a)return r.a.createElement(j.a,{variant:"h4",component:"h4"},"Loading...");n&&console.log(n);var c=t.launch,l=c.flight_number,o=c.mission_name,i=c.launch_year,u=c.launch_date_local,m=c.launch_success,s=c.links;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h4",component:"h1",gutterBottom:!0},o),r.a.createElement(U,{data:{flight_number:l,mission_name:o,launch_year:i,launch_success:m,launch_date_local:u,links:s}}))})},G=new o.a({uri:"/graphql"}),K=Object(d.a)({palette:{primary:{main:E.a[100]},type:"dark"}}),V=Object(b.a)(function(e){return{logo:{alignItems:"center",display:"flex",flexDirection:"column",marginBottom:e.spacing(4),marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(8),width:"100%"}}});var Z=function(){var e=V();return r.a.createElement(p.a,{theme:K},r.a.createElement(i.a,{client:G},r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null),r.a.createElement(f.a,null,r.a.createElement("img",{src:h.a,alt:"SpaceX Logo",className:e.logo}),r.a.createElement(u.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:$}),r.a.createElement(m.a,{exact:!0,path:"/launch/:flight_number",component:X}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,a,n){e.exports=n.p+"static/media/spacex-logo-black-and-white.f751c040.png"},99:function(e,a,n){e.exports=n(141)}},[[99,1,2]]]);
//# sourceMappingURL=main.8e25ee6a.chunk.js.map