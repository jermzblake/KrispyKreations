(this.webpackJsonpkrispykreations=this.webpackJsonpkrispykreations||[]).push([[0],{83:function(e,t,n){},84:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),i=n(11),s=n.n(i),o=(n(83),n(18)),l=n(7),u=(n.p,n(84),n(15)),j=n(13),b=n.n(j),d=n(20),h=n(12),p=n(143),O=n(101),x={setToken:function(e){localStorage.setItem("token",e)},getToken:f,getUserFromToken:function(){var e=f();return e?JSON.parse(atob(e.split(".")[1])).user:null},removeToken:function(){localStorage.removeItem("token")}};function f(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var g={signup:function(e){return fetch(v+"signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("There was an error - possibly Email already taken!")})).then((function(e){var t=e.token;x.setToken(t)}))},getUser:function(){return x.getUserFromToken()},logout:function(){x.removeToken()},login:function(e){return fetch(v+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return x.setToken(t)}))}},v="/api/users/";var m=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),o=Object(l.a)(s,2),u=o[0],j=o[1],x=Object(a.useState)(""),f=Object(l.a)(x,2),v=f[0],m=f[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),C=k[0],S=k[1],T=function(){var t=Object(d.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,console.log("Email:",u,"Password: ",v),t.next=5,g.signup({name:c,email:u,password:v,passwordConf:C});case 5:e.handleSignup(),e.history.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message),e.updateMessage(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Signup"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("form",{autoComplete:"off",onSubmit:T,children:[Object(r.jsx)(p.a,{variant:"filled",label:"Name",onChange:function(e){return i(e.target.value)}}),Object(r.jsx)(p.a,{variant:"filled",type:"email",label:"Email",placeholder:"example@email.com",onChange:function(e){return j(e.target.value)}}),Object(r.jsx)(p.a,{type:"password",variant:"filled",label:"Password",onChange:function(e){return m(e.target.value)}}),Object(r.jsx)(p.a,{type:"password",variant:"filled",label:"Confirm Password",onChange:function(e){return S(e.target.value)}}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",disabled:!(c&&u&&v===C),children:"Submit"}),Object(r.jsx)(h.b,{to:"/",children:"Cancel"})]})]})]})};var y=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,Object(o.a)(Object(o.a)({},e),{},{updateMessage:function(e){i(e)}})),Object(r.jsx)("p",{children:c})]})};var k=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)(""),o=Object(l.a)(s,2),u=o[0],j=o[1],x=function(){var t=Object(d.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,g.login({email:c,password:u});case 4:e.handleLogin(),e.history.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert("Invalid Credentials!");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("form",{autoComplete:"off",onSubmit:x,children:[Object(r.jsx)(p.a,{variant:"filled",type:"email",label:"Email",placeholder:"example@email.com",onChange:function(e){return i(e.target.value)}}),Object(r.jsx)(p.a,{type:"password",variant:"filled",label:"Password",onChange:function(e){return j(e.target.value)}}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",children:"Login"}),Object(r.jsx)(h.b,{to:"/",children:"Cancel"})]})]})]})},C=n(52),S=(n(91),"/api/recipeBooks/"),T="/api/entries/",E={index:function(){return fetch(S,{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer "+x.getToken()}}).then((function(e){return e.json()}))},createRecipeBook:function(e){var t={method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer "+x.getToken()},body:JSON.stringify(e)};return fetch(S,t).then((function(e){return e.json()}))},createEntry:function(e){var t={method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer "+x.getToken()},body:JSON.stringify(e)};return fetch(T,t).then((function(e){return e.json()}))},getEntry:function(e){return fetch("".concat(T).concat(e),{method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer "+x.getToken()}}).then((function(e){return e.json()}))},deleteEntry:function(e){console.log("recipe service entry: "+e),console.log("recipe service entry id: "+e._id);var t={method:"DELETE",headers:{"Content-type":"application/json",Authorization:"Bearer "+x.getToken()},body:JSON.stringify(e)};return fetch("".concat(T).concat(e._id),t).then((function(e){return e.json()}))},updateEntry:function(e){console.log("recipe service entry: "+e),console.log("recipe service entry id: "+e.entryId);var t={method:"PUT",headers:{"Content-type":"application/json",Authorization:"Bearer "+x.getToken()},body:JSON.stringify(e)};return fetch("".concat(T).concat(e.entryId),t).then((function(e){return e.json()}))}};n(92);var w=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(h.b,{to:"/recipebook/".concat(e.recipeEntry._id),children:Object(r.jsxs)("div",{className:"entry-container",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.recipeEntry.name}),Object(r.jsx)("span",{className:"category",children:e.recipeEntry.category})]}),Object(r.jsx)("img",{src:e.recipeEntry.image||"https://cdn1.vectorstock.com/i/thumb-large/49/10/cartoon-dachshund-chef-with-a-spoon-vector-19784910.jpg",alt:"food"})]})})})},N=n(140),R=n(104),B=n(139),L=n(14),F=n(67),I=n.n(F),A=Object(B.a)((function(e){return{root:{flexGrow:1},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(L.b)(e.palette.success.light,.15),"&:hover":{backgroundColor:Object(L.b)(e.palette.success.light,.25)},margin:"0 auto",width:"50%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var D=function(e){var t=A(),n=Object(a.useState)(""),c=Object(l.a)(n,2),i=c[0],s=c[1];Object(a.useEffect)((function(){if(!i)return j()}));var u=function(e){s({updatedBook:e})},j=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,a,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.index().then((function(e){return e.recipeEntries}));case 2:if(n=e.sent,"BREAKFAST"!==t){e.next=13;break}if(r=n.filter((function(e){return"Breakfast"===e.category})),console.log(r),!(r.length>0)){e.next=10;break}return e.abrupt("return",s(r));case 10:alert("no Breakfast recipes");case 11:e.next=38;break;case 13:if("LUNCH"!==t){e.next=22;break}if(!((a=n.filter((function(e){return"Lunch"===e.category}))).length>0)){e.next=19;break}return e.abrupt("return",s(a));case 19:alert("no Lunch recipes");case 20:e.next=38;break;case 22:if("DINNER"!==t){e.next=31;break}if(!((c=n.filter((function(e){return"Dinner"===e.category}))).length>0)){e.next=28;break}return e.abrupt("return",s(c));case 28:alert("no Dinner recipes");case 29:e.next=38;break;case 31:if("TREAT"!==t){e.next=38;break}if(!((i=n.filter((function(e){return"Treat"===e.category}))).length>0)){e.next=37;break}return e.abrupt("return",s(i));case 37:alert("no Treat recipes");case 38:s(n);case 39:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){j(e.target.id||e.target.innerHTML)};return i&&i.length>0?Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{children:[e.user.name,"'s Recipe Book"]}),Object(r.jsx)(h.b,{to:"/recipeform",children:"Create New Recipe"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"page-container",children:[Object(r.jsx)("div",{children:Object(r.jsxs)(N.a,{"aria-label":"recipe filter button group",children:[Object(r.jsx)(O.a,{id:"ALLRECIPES",onClick:p,children:"ALL RECIPES"}),Object(r.jsx)(O.a,{id:"BREAKFAST",onClick:p,children:"BREAKFAST"}),Object(r.jsx)(O.a,{id:"LUNCH",onClick:p,children:"LUNCH"}),Object(r.jsx)(O.a,{id:"DINNER",onClick:p,children:"DINNER"}),Object(r.jsx)(O.a,{id:"TREAT",onClick:p,children:"TREAT"})]})}),Object(r.jsxs)("div",{className:t.search,children:[Object(r.jsx)("div",{className:t.searchIcon,children:Object(r.jsx)(I.a,{})}),Object(r.jsx)(R.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){var t=new RegExp(e.target.value,"gi"),n=i.filter((function(e){return e.name.match(t)}));n.length>0?s(n):j()}})]}),i.map((function(t,n){return Object(a.createElement)(w,Object(o.a)(Object(o.a)({recipeEntry:t,updateRecipeBook:u},e),{},{key:n}))}))]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h1",{children:[e.user.name,"'s Recipe Book"]}),Object(r.jsx)(h.b,{to:"/recipeform",children:"You have no recipes. Add one!"})]})};var P=function(e){var t=e.user?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Krispy Kreations"}),Object(r.jsx)(h.b,{to:"/recipebook",children:"Recipe Book"})]}):Object(r.jsx)("h1",{children:"Krispy Kreations"});return Object(r.jsx)("div",{children:t})},M=n(141),U=n(136),z=n(138),H=n(132),J=n(145),K=[{value:"Easy",label:"Easy"},{value:"Medium",label:"Medium"},{value:"Hard",label:"Hard"}],G=[{value:"Breakfast",label:"Breakfast"},{value:"Lunch",label:"Lunch"},{value:"Dinner",label:"Dinner"},{value:"Treat",label:"Treat"}],_=Object(B.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));var W=function(e){var t=_(),n=Object(a.useState)(""),c=Object(l.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),j=u[0],x=u[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),v=g[0],m=g[1],y=Object(a.useState)("Treat"),k=Object(l.a)(y,2),C=k[0],S=k[1],T=Object(a.useState)("Medium"),w=Object(l.a)(T,2),N=w[0],R=w[1],B=Object(a.useState)(null),L=Object(l.a)(B,2),F=L[0],I=L[1],A=Object(a.useState)(null),D=Object(l.a)(A,2),P=D[0],W=D[1],V=Object(a.useState)(null),Y=Object(l.a)(V,2),q=Y[0],Q=Y[1],X=Object(a.useState)(""),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),ne=Object(l.a)(te,2),re=ne[0],ae=ne[1],ce=function(){var t=Object(d.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,E.createEntry({name:i,ingredients:j,directions:v,category:C,difficulty:N,prepTime:F,cookTime:P,servings:q,cuisineType:$,image:re});case 4:e.history.push("/recipebook"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),e.updateMessage(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Recipe Form"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("form",{className:t.root,autoComplete:"off",onSubmit:ce,children:[Object(r.jsx)(p.a,{label:"Name",onChange:function(e){return s(e.target.value)}}),Object(r.jsx)(p.a,{label:"Cuisine",onChange:function(e){return ee(e.target.value)},helperText:"Optional",placeholder:"Caribbean"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(p.a,{select:!0,label:"Category",value:C,onChange:function(e){return S(e.target.value)},helperText:"Please select the category",children:G.map((function(e){return Object(r.jsx)(M.a,{value:e.value,children:e.label},e.value)}))}),Object(r.jsx)(p.a,{select:!0,label:"Difficulty",value:N,onChange:function(e){return R(e.target.value)},helperText:"Please select the difficulty",children:K.map((function(e){return Object(r.jsx)(M.a,{value:e.value,children:e.label},e.value)}))}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(p.a,{variant:"outlined",label:"Ingredients",multiline:!0,rows:4,placeholder:"1 cup of LOVE",helperText:"Add a new ingredient on a new line (press enter to add line)",onChange:function(e){return x(e.target.value.split("\n"))}}),Object(r.jsx)(p.a,{variant:"outlined",label:"Directions",multiline:!0,rows:4,onChange:function(e){return m(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(J.a,{htmlFor:"prep-time",children:"Prep Time"}),Object(r.jsx)(H.a,{id:"prep-time",type:"number",onChange:function(e){return I(e.target.value)},"aria-describedby":"prep-helper-text"}),Object(r.jsx)(z.a,{id:"prep-helper-text",children:"Enter prep time in minutes"})]}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(J.a,{htmlFor:"cook-time",children:"Cook Time"}),Object(r.jsx)(H.a,{id:"cook-time",type:"number",onChange:function(e){return W(e.target.value)},"aria-describedby":"cook-helper-text"}),Object(r.jsx)(z.a,{id:"cook-helper-text",children:"Enter cook time in minutes"})]}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(J.a,{htmlFor:"serving-size",children:"Serving Size"}),Object(r.jsx)(H.a,{id:"serving-size",type:"number",onChange:function(e){return Q(e.target.value)},"aria-describedby":"serving-helper-text"}),Object(r.jsx)(z.a,{id:"serving-helper-text",children:"Enter serving size"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(J.a,{htmlFor:"image-url",children:"Image"}),Object(r.jsx)(H.a,{id:"image-url",type:"text",onChange:function(e){return ae(e.target.value)},"aria-describedby":"image-helper-text"}),Object(r.jsx)(z.a,{id:"image-helper-text",children:"Enter URL of image location"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",disabled:!(i&&j&&v&&C),children:"Submit"}),Object(r.jsx)(h.b,{to:"/recipebook",children:"Cancel"})]})]})]})};var V=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(W,Object(o.a)(Object(o.a)({},e),{},{updateMessage:function(e){i(e)}})),Object(r.jsx)("p",{children:c})]})},Y=(n(97),n(68)),q=n(137),Q=n(102),X=n(142),Z=n(146),$=n(144),ee=Object(B.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function te(e){var t=e.ingredients,n=ee(),a=c.a.useState([0]),i=Object(l.a)(a,2),s=i[0],o=i[1],u=function(e){return function(){var t=s.indexOf(e),n=Object(Y.a)(s);-1===t?n.push(e):n.splice(t,1),o(n)}};return Object(r.jsx)(q.a,{className:n.root,children:t.map((function(e){var t="checkbox-list-label-".concat(e);return Object(r.jsxs)(Q.a,{role:void 0,dense:!0,button:!0,onClick:u(e),children:[Object(r.jsx)(X.a,{children:Object(r.jsx)($.a,{edge:"start",checked:-1!==s.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(r.jsx)(Z.a,{id:t,primary:e})]},e)}))})}function ne(e){var t=e.match,n=e.history,c=e.user,i=Object(a.useState)(""),s=Object(l.a)(i,2),o=s[0],u=s[1],j=Object(a.useState)([]),p=Object(l.a)(j,2),x=p[0],f=p[1];Object(a.useEffect)((function(){if(!o)return g(t.params.id)}));var g=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.getEntry(t);case 3:n=e.sent,u(n),f(n.ingredients),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("ERROR: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteEntry(o);case 2:n.push("/recipebook");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=o.image?Object(r.jsx)("img",{src:o.image,alt:"food"}):Object(r.jsx)("br",{});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h1",{children:[c.name,"'s Recipe Book"]}),Object(r.jsx)(h.b,{to:"/recipeform",children:"Create New Recipe"}),Object(r.jsxs)("div",{className:"page-container",children:[Object(r.jsx)("h1",{children:"Detail Page"}),Object(r.jsx)(h.b,{to:"/recipebook",children:"Back"}),Object(r.jsx)("h2",{children:o.name}),Object(r.jsx)("h4",{children:o.category}),Object(r.jsx)("p",{children:o.cuisineType}),Object(r.jsx)("br",{}),m,Object(r.jsx)(te,{ingredients:x}),Object(r.jsxs)("p",{children:["Prep Time: ",o.prepTime||"N/A"," Cook Time:",o.cookTime||"N/A"," "]}),Object(r.jsxs)("p",{children:["Serving Size: ",o.servings]}),Object(r.jsxs)("p",{children:["Difficulty: ",o.difficulty]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Directions"}),Object(r.jsx)("p",{children:o.directions}),Object(r.jsx)(O.a,{variant:"contained",color:"secondary",onClick:v,children:"DELETE"}),Object(r.jsx)(O.a,{variant:"contained",href:"/recipe/edit/".concat(o._id),children:"Update"})]})]})}var re=[{value:"Easy",label:"Easy"},{value:"Medium",label:"Medium"},{value:"Hard",label:"Hard"}],ae=[{value:"Breakfast",label:"Breakfast"},{value:"Lunch",label:"Lunch"},{value:"Dinner",label:"Dinner"},{value:"Treat",label:"Treat"}],ce=Object(B.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function ie(e){var t=e.match,n=e.history,c=e.updateMessage,i=ce(),s=Object(a.useState)(""),o=Object(l.a)(s,2),u=o[0],j=o[1],x=Object(a.useState)(""),f=Object(l.a)(x,2),g=f[0],v=f[1],m=Object(a.useState)(""),y=Object(l.a)(m,2),k=y[0],C=y[1],S=Object(a.useState)("Treat"),T=Object(l.a)(S,2),w=T[0],N=T[1],R=Object(a.useState)("Medium"),B=Object(l.a)(R,2),L=B[0],F=B[1],I=Object(a.useState)(null),A=Object(l.a)(I,2),D=A[0],P=A[1],K=Object(a.useState)(null),G=Object(l.a)(K,2),_=G[0],W=G[1],V=Object(a.useState)(null),Y=Object(l.a)(V,2),q=Y[0],Q=Y[1],X=Object(a.useState)(""),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),ne=Object(l.a)(te,2),ie=ne[0],se=ne[1],oe=t.params.id,le=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.getEntry(t.params.id).then((function(e){j(e.name),v(e.ingredients.join("\n")),C(e.directions),N(e.category),F(e.difficulty),P(e.prepTime),W(e.cookTime),Q(e.servings),ee(e.cuisineType),se(e.image)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){return le()}),[]);var ue=function(){var e=Object(d.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=g.split("\n"),e.prev=2,e.next=5,E.updateEntry({name:u,ingredients:r,directions:k,category:w,difficulty:L,prepTime:D,cookTime:_,servings:q,cuisineType:$,image:ie,entryId:oe});case 5:n.push("/recipebook/".concat(oe)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("Error: ".concat(e.t0.message)),c(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Update Form"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("form",{className:i.root,autoComplete:"off",onSubmit:ue,children:[Object(r.jsx)(p.a,{label:"Name",value:u,onChange:function(e){return j(e.target.value)}}),Object(r.jsx)(p.a,{label:"Cuisine",onChange:function(e){return ee(e.target.value)},helperText:"Optional",placeholder:"Caribbean",value:$||""}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(p.a,{select:!0,label:"Category",value:w,onChange:function(e){return N(e.target.value)},helperText:"Please select the category",children:ae.map((function(e){return Object(r.jsx)(M.a,{value:e.value,children:e.label},e.value)}))}),Object(r.jsx)(p.a,{select:!0,label:"Difficulty",value:L,onChange:function(e){return F(e.target.value)},helperText:"Please select the difficulty",children:re.map((function(e){return Object(r.jsx)(M.a,{value:e.value,children:e.label},e.value)}))}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(p.a,{variant:"outlined",label:"Ingredients",multiline:!0,rows:4,value:g,helperText:"Add a new ingredient on a new line (press enter to add line)",onChange:function(e){return v(e.target.value)}}),Object(r.jsx)(p.a,{variant:"outlined",label:"Directions",multiline:!0,rows:4,onChange:function(e){return C(e.target.value)},value:k}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(J.a,{htmlFor:"prep-time",shrink:!0,children:"Prep Time"}),Object(r.jsx)(H.a,{id:"prep-time",type:"number",onChange:function(e){return P(e.target.value)},value:D||"","aria-describedby":"prep-helper-text"}),Object(r.jsx)(z.a,{id:"prep-helper-text",children:"Enter prep time in minutes"})]}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(J.a,{htmlFor:"cook-time",shrink:!0,children:"Cook Time"}),Object(r.jsx)(H.a,{id:"cook-time",type:"number",onChange:function(e){return W(e.target.value)},value:_||"","aria-describedby":"cook-helper-text"}),Object(r.jsx)(z.a,{id:"cook-helper-text",children:"Enter cook time in minutes"})]}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(J.a,{htmlFor:"serving-size",shrink:!0,children:"Serving Size"}),Object(r.jsx)(H.a,{id:"serving-size",type:"number",onChange:function(e){return Q(e.target.value)},value:q||"","aria-describedby":"serving-helper-text"}),Object(r.jsx)(z.a,{id:"serving-helper-text",children:"Enter serving size"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)(U.a,{children:[Object(r.jsx)(J.a,{htmlFor:"image-url",shrin:!0,children:"Image"}),Object(r.jsx)(H.a,{id:"image-url",type:"text",onChange:function(e){return se(e.target.value)},value:ie||"","aria-describedby":"image-helper-text"}),Object(r.jsx)(z.a,{id:"image-helper-text",children:"Enter URL of image location"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",disabled:!(u&&g&&k&&w),children:"Submit"}),Object(r.jsx)(h.b,{to:"/recipebook/".concat(oe),children:"Cancel"})]})]})]})}function se(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Update Recipe"}),Object(r.jsx)(ie,Object(o.a)(Object(o.a)({},e),{},{updateMessage:function(e){i(e)}})),Object(r.jsx)("p",{children:c})]})}n(98);var oe=function(e){var t=e.user?Object(r.jsxs)("div",{children:[Object(r.jsx)(h.b,{to:"/login",className:"NavBar-link",onClick:e.handleLogout,children:"LOG OUT"}),"\xa0\xa0|\xa0\xa0\xa0",Object(r.jsxs)("span",{className:"NavBar-welcome",children:["WELCOME, ",e.user.name]})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)(h.c,{to:"/login",className:"NavBar-link",activeClassName:"selected",children:"LOG IN"}),"\xa0\xa0|\xa0\xa0",Object(r.jsx)(h.c,{to:"/signup",className:"NavBar-link",activeClassName:"selected",children:"SIGN UP"})]});return Object(r.jsx)(r.Fragment,{children:t})};var le=function(){var e=Object(a.useState)(g.getUser()),t=Object(l.a)(e,2),n=t[0],c=t[1],i=function(){c(g.getUser())};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(oe,{user:n,handleLogout:function(){g.logout(),c(null)}})}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",render:function(e){var t=e.history;return Object(r.jsx)(P,{history:t,user:n})}}),Object(r.jsx)(u.a,{exact:!0,path:"/signup",render:function(e){var t=e.history;return Object(r.jsx)(y,{history:t,handleSignup:i,user:n})}}),Object(r.jsx)(u.a,{exact:!0,path:"/login",render:function(e){var t=e.history;return Object(r.jsx)(k,{history:t,handleLogin:i})}}),Object(r.jsx)(u.a,{exact:!0,path:"/recipebook",render:function(e){var t=e.history;return Object(r.jsx)(D,{history:t,user:n})}}),Object(r.jsx)(u.a,{path:"/recipebook/:id",render:function(e){return Object(r.jsx)(ne,Object(o.a)(Object(o.a)({},e),{},{user:n}))}}),Object(r.jsx)(u.a,{exact:!0,path:"/recipeform",render:function(e){var t=e.history;return Object(r.jsx)(V,{history:t,user:n})}}),Object(r.jsx)(u.a,{exact:!0,path:"/recipe/edit/:id",render:function(e){return Object(r.jsx)(se,Object(o.a)(Object(o.a)({},e),{},{user:n}))}})]})]})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h.a,{children:Object(r.jsx)(le,{})})}),document.getElementById("root")),ue()}},[[99,1,2]]]);
//# sourceMappingURL=main.942df717.chunk.js.map