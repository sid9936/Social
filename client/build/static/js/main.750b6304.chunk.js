(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{67:function(e,a,t){e.exports=t.p+"static/media/memories.53639ed7.png"},75:function(e,a,t){e.exports=t(94)},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),r=t.n(c),o=t(17),i=t(25),s=t(68),m=t(135),d=t(136),p=t(130),u=t(140),g=t(134),E=t(133),y=t(127),b=t(129),h=t(139),f=t(131),v=t(132),x=t(64),C=t.n(x),w=t(65),j=t.n(w),O=t(63),N=t.n(O),I=t(56),k=t.n(I);var S=t(137);const T="http://localhost:5000/posts",_=()=>async e=>{try{const{data:t}=await S.a.get(T);e({type:"FETCH_ALL",payload:t})}catch(a){console.log(a.message)}},A=e=>async a=>{try{const{data:n}=await(e=>S.a.post(T,e))(e);a({type:"CREATE",payload:n})}catch(t){console.log(t.message)}},D=(e,a)=>async t=>{try{const{data:l}=await((e,a)=>S.a.patch("".concat(T,"/").concat(e),a))(e,a);t({type:"UPDATE",payload:l})}catch(n){console.log(n.message)}},L=e=>async a=>{try{const{data:n}=await(e=>S.a.patch("".concat(T,"/").concat(e,"/likePost")))(e);a({type:"LIKE",payload:n})}catch(t){console.log(t.message)}},z=e=>async a=>{try{await(e=>S.a.delete("".concat(T,"/").concat(e)))(e),a({type:"DELETE",payload:e})}catch(t){console.log(t.message)}};var W=t(124),F=Object(W.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}});var B=e=>{let{post:a,setCurrentId:t}=e;const n=Object(o.b)(),c=F();return l.a.createElement(y.a,{className:c.card},l.a.createElement(b.a,{className:c.media,image:a.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:a.title}),l.a.createElement("div",{className:c.overlay},l.a.createElement(p.a,{variant:"h6"},a.creator),l.a.createElement(p.a,{variant:"body2"},k()(a.createdAt).fromNow())),l.a.createElement("div",{className:c.overlay2},l.a.createElement(h.a,{style:{color:"white"},size:"small",onClick:()=>t(a._id)},l.a.createElement(N.a,{fontSize:"default"}))),l.a.createElement("div",{className:c.details},l.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"h2"},a.tags.map(e=>"#".concat(e," ")))),l.a.createElement(p.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},a.title),l.a.createElement(f.a,null,l.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},a.message)),l.a.createElement(v.a,{className:c.cardActions},l.a.createElement(h.a,{size:"small",color:"primary",onClick:()=>n(L(a._id))},l.a.createElement(C.a,{fontSize:"small"})," Like ",a.likeCount," "),l.a.createElement(h.a,{size:"small",color:"primary",onClick:()=>n(z(a._id))},l.a.createElement(j.a,{fontSize:"small"})," Delete")))},P=Object(W.a)(e=>({mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}));var M=()=>{const e=P(),a=Object(o.c)(e=>e.posts);return console.log(a),a.length?l.a.createElement(g.a,{className:e.container,container:!0,alignItems:"stretch",spacing:3},a.map(e=>l.a.createElement(g.a,{key:e._id,item:!0,xs:12,sm:6},l.a.createElement(B,{post:e})))):l.a.createElement(E.a,null)},R=t(70),H=t(138),J=t(66),K=t.n(J),U=Object(W.a)(e=>({root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}));var V=e=>{let{currentId:a,setCurrentId:t}=e;const[c,r]=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(o.c)(e=>a?e.posts.find(e=>e._id===a):null),s=Object(o.b)(),m=U();Object(n.useEffect)(()=>{i&&r(i)},[i]);const d=()=>{t(0),r({creator:"",title:"",message:"",tags:"",selectedFile:""})};return l.a.createElement(R.a,{className:m.paper},l.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(m.root," ").concat(m.form),onSubmit:async e=>{e.preventDefault(),0===a?(s(A(c)),d()):(s(D(a,c)),d())}},l.a.createElement(p.a,{variant:"h6"},a?'Editing "'.concat(i.title,'"'):"Share your Post here!"),l.a.createElement(H.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:c.creator,onChange:e=>r({...c,creator:e.target.value})}),l.a.createElement(H.a,{name:"title",variant:"outlined",label:"Post Title",fullWidth:!0,value:c.title,onChange:e=>r({...c,title:e.target.value})}),l.a.createElement(H.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:c.message,onChange:e=>r({...c,message:e.target.value})}),l.a.createElement(H.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:c.tags,onChange:e=>r({...c,tags:e.target.value.split(",")})}),l.a.createElement("div",{className:m.fileInput},l.a.createElement(K.a,{type:"file",multiple:!1,onDone:e=>{let{base64:a}=e;return r({...c,selectedFile:a})}})),l.a.createElement(h.a,{className:m.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),l.a.createElement(h.a,{variant:"contained",color:"secondary",size:"small",onClick:d,fullWidth:!0},"Clear")))},q=Object(W.a)(()=>({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}})),G=t(67),Q=t.n(G);var X=()=>{const[e,a]=Object(n.useState)(0),t=Object(o.b)(),c=q();return Object(n.useEffect)(()=>{t(_())},[e,t]),l.a.createElement(m.a,{maxWidth:"lg"},l.a.createElement(d.a,{className:c.appBar,position:"static",color:"inherit"},l.a.createElement(p.a,{className:c.heading,variant:"h1",align:"left"},"JSocial"),l.a.createElement("img",{className:c.image,src:Q.a,alt:"icon",height:"120"})),l.a.createElement(u.a,{in:!0},l.a.createElement(m.a,null,l.a.createElement(g.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},l.a.createElement(g.a,{item:!0,xs:12,sm:7},l.a.createElement(M,{setCurrentId:a})),l.a.createElement(g.a,{item:!0,xs:12,sm:4},l.a.createElement(V,{currentId:e,setCurrentId:a}))))))},Y=Object(i.b)({posts:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_ALL":return a.payload;case"LIKE":return e.map(e=>e._id===a.payload._id?a.payload:e);case"CREATE":return[...e,a.payload];case"UPDATE":return e.map(e=>e._id===a.payload._id?a.payload:e);case"DELETE":return e.filter(e=>e._id!==a.payload);default:return e}}});t(93);const Z=Object(i.d)(Y,Object(i.c)(Object(i.a)(s.a)));r.a.render(l.a.createElement(o.a,{store:Z},l.a.createElement(X,null)),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.750b6304.chunk.js.map