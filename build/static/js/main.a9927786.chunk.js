(this.webpackJsonpdolcenadaa=this.webpackJsonpdolcenadaa||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.cdc73365.JPG"},,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/cookie2.18e12e7a.jpg"},,,,function(e,a,t){e.exports={title:"footer_title__piRrt",description:"footer_description__NPmPK",footerlink:"footer_footerlink__aH3y3"}},,function(e,a,t){},,,,,,,,,,,function(e,a,t){e.exports={skipLink:"navbar_skipLink__3TdC_"}},,,,function(e,a,t){e.exports=t.p+"static/media/cookieBox.fe5a60e6.png"},function(e,a,t){e.exports=t.p+"static/media/scones.084273cd.png"},function(e,a,t){e.exports=t.p+"static/media/biscotti.1c5d3f03.png"},function(e,a,t){e.exports=t.p+"static/media/cookie1.4c08163b.jpg"},function(e,a,t){e.exports=t.p+"static/media/cookie3.06a8e1ad.jpg"},,function(e,a,t){e.exports=t.p+"static/media/profile.adcbf3ad.jpg"},function(e,a,t){e.exports=t.p+"static/media/xoxo.bb30843c.png"},function(e,a,t){e.exports=t.p+"static/media/instagram.e01d8c49.png"},function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABe0lEQVR4nO2bvU7CYBhGHxpKBB2Mgz/EuJi4W6Ojg9fgz13Qa9BVF5m4BpjcHNwcGJq4k5i4OJAwkhosQ910gMQQv48T871n7PBwOFDaoUiGYYRMxcVI2Wp1JV242FqAbqXdvvrrSOTC5D9jAWgBmuADVH2M3r98KBtOnW4eb8dKk4bTTclTgGw41cPrp49p5wR/ClgAWoDGAtACNBaAFqCxALQAjQWgBWgsAC1AYwFoARoLQAvQWABagMYC0AI0FoAWoLEAtACNBaAFaCwALUBjAWgBGgtAC9BYAFqAxgLQAjTBB/DymFzrsKHzgxWnm81VP5+VlwAnO7GPWS8EfwogAUpJt1muZmekZmekuyxXSYgICtAbTHTTzzUuSo2LUtf9XL3BhFBhAjy+zT5HPO/YMkAC7K/P/vbOO7YMkABpUley+fOGj7ZipUmdUPFzGfyNtVqkp8sNPb8XkqTT3VjVyMn/txaG+d5JiiPpbK9Gvfw3wd8HGIYRNl9X5DeZZRqjtAAAAABJRU5ErkJggg=="},,,,,,function(e,a,t){e.exports=t(127)},,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(15),c=t.n(s),o=t(13),l=t(142),i=t(139),d=t(141),m=(t(65),t(138)),u=t(41),p=t.n(u),h=(t(30),t(14)),E=t.n(h),g=t(3),b=t(17),f=t.n(b);var v=e=>{e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},N=t(21),w=t.n(N);var y=f.a.create({baseURL:"https://dolcenadaa.herokuapp.com/api"});const k=e=>({type:"SET_CURRENT_USER",payload:e}),x=()=>e=>{localStorage.removeItem("jwtToken"),v(!1),e(k({}))},A=e=>({type:"SET_MESSAGE_STATUS",payload:e});t(89);const C={width:"140px",borderRadius:"3px",letterSpacing:"1.5px"};var O=Object(g.b)(e=>({auth:e.auth,errors:e.errors}),{logoutUser:x})(Object(d.a)(({showNav:e,fadeBackground:a,auth:{user:{name:t},isAuthenticated:s},logoutUser:c})=>{const l=Object(r.useState)(!1),i=Object(o.a)(l,2),d=i[0],m=i[1],u=d?"desktop-nav desktop-nav-show":"desktop-nav desktop-nav-hide";return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"welcome-container",onMouseEnter:()=>m(!d),onMouseLeave:()=>m(!d)}," ",n.a.createElement("div",{className:"seconday-font"},s?"Hi, "+t:"Login"),s?n.a.createElement("div",{className:u},n.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:e=>(e=>{e.preventDefault(),c()})(e),className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout")):n.a.createElement("div",{className:u},n.a.createElement("a",{href:"/dolcenadaa/login",id:"login",style:C,className:"btn btn-large  waves-effect waves-light hoverable "},"Log In"),n.a.createElement("a",{href:"/dolcenadaa/register",id:"register",style:C,className:"btn btn-large waves-effect waves-light hoverable accent-3"},"Register"))))}));t(91);var T=e=>n.a.createElement("div",{className:e.classes},n.a.createElement("img",{src:e.src,alt:e.alt,title:e.title}));const S=(e,a)=>new Intl.NumberFormat("en-CA",{style:"currency",currency:a}).format(e);class j extends r.Component{constructor(...e){super(...e),this.state={isMouseOver:!1},this.handleMouseOver=()=>{this.setState({isMouseOver:!0})},this.handleMouseOut=()=>{this.setState({isMouseOver:!1})}}render(){const e=this.props,a=e.product,t=e.removeProduct,r=e.currencySymbol,s=e.quantityTextLabel,c=["shelf-item"];return this.state.isMouseOver&&c.push("shelf-item--mouseover"),n.a.createElement("div",{className:c.join(" ")},n.a.createElement("div",{className:"shelf-item__del",onMouseOver:()=>this.handleMouseOver(),onMouseOut:()=>this.handleMouseOut(),onClick:()=>t(a)}),console.log(a),n.a.createElement(T,{classes:"shelf-item__thumb",src:a.image||"https://via.placeholder.com/150",alt:a.name}),n.a.createElement("div",{className:"shelf-item__details"},n.a.createElement("p",{className:"title"},a.name),n.a.createElement("p",{className:"desc"},s,": ",a.quantity)),n.a.createElement("div",{className:"shelf-item__price"},n.a.createElement("p",null,S(a.price,r))))}}var R=j;var _=()=>{const e="cartProducts";return{persist:a=>localStorage.setItem(e,a),get:()=>localStorage.getItem(e)}};const P=e=>({type:"ADD_PRODUCT",payload:e});class L extends r.Component{constructor(...e){super(...e),this.state={isOpen:!1},this.openFloatCart=()=>{this.setState({isOpen:!0})},this.closeFloatCart=()=>{this.setState({isOpen:!1})},this.addProduct=e=>{const a=this.props,t=a.cartProducts,r=a.updateCart;let n=!1;t&&t.forEach(a=>{a.id===e.id&&(a.quantity+=e.quantity,n=!0)}),n||t.push(e),r(t),this.openFloatCart()},this.removeProduct=e=>{const a=this.props,t=a.cartProducts,r=a.updateCart,n=t.findIndex(e=>e.id===e.id);n>=0&&(t.splice(n,1),r(t))},this.clickCheckout=()=>{const e=this.props,a=e.cartProducts,t=e.cartTotal;(0,e.handleCheckout)({products:a,total:t})}}componentWillMount(){this.props.loadCart(JSON.parse(_().get())||[])}componentDidMount(){setTimeout(()=>{this.props.updateCart(this.props.cartProducts)},0)}componentWillReceiveProps(e){e.productToAdd!==this.props.productToAdd&&this.addProduct(e.productToAdd),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove)}render(){const e=this.props,a=e.cartTotal,t=e.cartProducts,r=e.removeProduct,s=e.currencySymbol,c=e.checkoutTextLabel,o=e.cartTextLabel,l=e.subTotalTextLabel,i=e.quantityTextLabel,d=t&&t.map(e=>n.a.createElement(R,{product:e,removeProduct:r,currencySymbol:s,key:e.id,quantityTextLabel:i}));let m=["float"];return this.state.isOpen&&m.push("float-open"),n.a.createElement("div",{className:m.join(" ")},this.state.isOpen&&n.a.createElement("div",{onClick:()=>this.closeFloatCart(),className:"float-close-btn"},"X"),!this.state.isOpen&&n.a.createElement("span",{onClick:()=>this.openFloatCart(),className:"bag bag--float-cart-closed"},n.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),n.a.createElement("div",{className:"float-cart__content"},n.a.createElement("div",{className:"float-cart__header"},n.a.createElement("span",{className:"bag"},n.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),n.a.createElement("span",{className:"header-title"},o)),n.a.createElement("div",{className:"float-cart__shelf-container"},d,void 0===t||0==t.length&&n.a.createElement("p",{className:"shelf-empty"},"Add some products in the cart ",n.a.createElement("br",null),":)")),n.a.createElement("div",{className:"float-cart__footer"},n.a.createElement("div",{className:"sub"},l),n.a.createElement("div",{className:"sub-price"},n.a.createElement("p",{className:"sub-price__val"},"".concat(S(a.totalPrice,s)))),n.a.createElement("div",{onClick:this.clickCheckout,className:"continue-btn"},c))))}}L.defaultProps={currencySymbol:"USD",checkoutTextLabel:"Checkout",cartTextLabel:"Your Cart",subTotalTextLabel:"Sub Total",quantityTextLabel:"Quantity"};var F=Object(g.b)(e=>({cartProducts:e.cart.products,productToAdd:e.cart.productToAdd,productToRemove:e.cart.productToRemove,cartTotal:e.cart.data}),e=>({loadCart:a=>e((e=>({type:"LOAD_CART",payload:e}))(a)),updateCart:a=>e((e=>{let a={productQuantity:e.reduce((e,a)=>e+=a.quantity,0),totalPrice:e.reduce((e,a)=>e+=a.price*a.quantity,0)};return _().persist(JSON.stringify(e)),{type:"UPDATE_CART",payload:a}})(a)),removeProduct:a=>e((e=>({type:"REMOVE_PRODUCT",payload:e}))(a))}))(L);const B={width:"140px",borderRadius:"3px",letterSpacing:"1.5px"};var U=Object(g.b)(e=>({auth:e.auth,errors:e.errors}),{logoutUser:x,sendEmail:e=>a=>{y.post("/email",e).then(e=>{a(A("success"))}).catch(e=>{a({type:"GET_ERRORS",payload:e})})}})(Object(d.a)(e=>{const a=e.showNav,t=e.nav,r=e.fadeBackground,s=e.fade,c=(e.auth,e.auth),o=c.user.name,l=c.isAuthenticated,i=e.logoutUser,d=s?"navbar-toggler-expanded":"";return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:p.a.skipLink},n.a.createElement("a",{href:"#mainContent"},"Skip to Main Content")),n.a.createElement(F,Object.assign({},{currencySymbol:"CAD",checkoutTextLabel:"Confirm",subTotalTextLabel:"Total",cartTextLabel:"Cart",quantityTextLabel:"Quantity"},{handleCheckout:a=>{const t={name:o||"name",email:"jacob.benaim@icloud.com",message:"order-text",html:"component"};e.sendEmail(t)}})),n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light  ".concat(s," ")},t?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"nav-collapse left-nav fade-in-left"},n.a.createElement(m.a,{className:"col s5  center black-text home-link",to:"/dolcenadaa",style:B,onClick:()=>{a(!t),r("")}},"Home"),n.a.createElement(m.a,{className:"col s5  center black-text products-link",to:"/products",style:B,onClick:()=>{a(!t),r("")}},"Products"),l?n.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:e=>(e=>{e.preventDefault(),i()})(e),className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"):n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{to:"/login",style:B,onClick:()=>{a(!1),r("")},className:"btn btn-large btn-flat waves-effect white black-text"},"Log In"),n.a.createElement(m.a,{to:"/register",style:B,onClick:()=>{a(!1),r("")},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Register"))),n.a.createElement("div",{className:"expanded-logo"},n.a.createElement(m.a,{className:"expanded-navbar-brand",to:"/"},"fade-background"===s&&n.a.createElement("img",{src:E.a,alt:"logo cookie with a bite",height:180,width:180})))):n.a.createElement(O,e),n.a.createElement("div",{className:"logo"},n.a.createElement(m.a,{className:"navbar-brand",to:"/"},"fade-background"!==s&&n.a.createElement("img",{src:E.a,alt:"logo cookie with a bite",height:160,width:160}))),n.a.createElement("button",{className:"navbar-toggler ".concat(d),type:"button"},n.a.createElement("span",{className:"navbar-toggler-icon",onClick:()=>{a(!t),r(t?"":"fade-background")}}))))})),q=t(28),D=t.n(q);t(92);var M=()=>n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("h5",{className:D.a.title},"dolcenadaa"),n.a.createElement("ul",{className:D.a.description},n.a.createElement("li",null,"Info"),n.a.createElement("li",null,"Contact"),n.a.createElement("li",null,"Instagram")))),W=t(6),G=t.n(W);t(93);class I extends r.Component{constructor(...e){super(...e),this.state={name:"",email:"",password:"",password2:"",errors:{}},this.onChange=e=>{this.setState({[e.target.id]:e.target.value})},this.onSubmit=e=>{e.preventDefault();const a={name:this.state.name,email:this.state.email,password:this.state.password,password2:this.state.password2};this.props.registerUser(a,this.props.history)}}componentWillReceiveProps(e){e.errors&&this.setState({errors:e.errors})}render(){const e=this.state.errors,a=this.props,t=a.fade,r=a.auth.loading;return"fade-background"!==t&&n.a.createElement("div",{className:"container register-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s8 offset-s2"},n.a.createElement("a",{href:"/dolcenadaa",className:"btn-flat waves-effect"},n.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),n.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},n.a.createElement("h4",null,n.a.createElement("b",null,"Register")," below"),n.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account?"," ",n.a.createElement("a",{href:"/dolcenadaa/login"},"Log in"))),r&&n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))),n.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:G()("",{invalid:e.name})}),n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("span",{className:"red-text"},e.name)),n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:G()("",{invalid:e.email})}),n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("span",{className:"red-text"},e.email)),n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:G()("",{invalid:e.password})}),n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("span",{className:"red-text"},e.password)),n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:G()("",{invalid:e.password2})}),n.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),n.a.createElement("span",{className:"red-text"},e.password2)),n.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},n.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",id:"register",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}var H=Object(g.b)(e=>({auth:e.auth,errors:e.errors}),{registerUser:(e,a)=>t=>{y.post("/users/register",e).then(e=>a.push("/")).catch(e=>{t({type:"GET_ERRORS",payload:e})})}})(Object(d.a)(I));t(94);class Q extends r.Component{constructor(...e){super(...e),this.state={email:"",password:"",errors:{}},this.onChange=e=>{this.setState({[e.target.id]:e.target.value})},this.onSubmit=e=>{e.preventDefault();const a={email:this.state.email,password:this.state.password};this.props.loginUser(a)}}componentWillReceiveProps(e){e.auth.isAuthenticated&&this.props.history.push("/"),e.errors&&this.setState({errors:e.errors})}render(){const e=this.state.errors,a=this.props,t=a.fade,r=a.auth.loading;return"fade-background"!==t&&n.a.createElement("div",{className:"container login-container"},n.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},n.a.createElement("div",{className:"col s8 offset-s2"},n.a.createElement("a",{href:"/dolcenadaa",className:"btn-flat waves-effect"},n.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),n.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},n.a.createElement("h4",null,n.a.createElement("b",null,"Login")),n.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",n.a.createElement("a",{href:"/register"},"Register"))),r&&n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))),n.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:G()("",{invalid:e.email||e.emailnotfound})}),n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound))," ",n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,className:G()("",{invalid:e.password||e.passwordincorrect}),id:"password",type:"password"}),n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),n.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},n.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",id:"login",className:"btn btn-large waves-effect waves-light hoverable blue accent-3 "},"Login"))))))}}var V=Object(g.b)(e=>({auth:e.auth,errors:e.errors}),{loginUser:e=>a=>{y.post("/users/login",e).then(e=>{const t=e.data.token;localStorage.setItem("jwtToken",t),v(t);const r=w()(t);a(k(r))}).catch(e=>{a({type:"GET_ERRORS",payload:e})})}})(Q),Y=(t(95),t(45)),J=t.n(Y),z=t(46),X=t.n(z),K=t(47),Z=t.n(K);t(96);var $=({fade:e})=>{const a=[{cookies:{text:"cookies",src:J.a,alt:"cookies"},scones:{text:"scones",src:X.a,alt:"scones"},biscotti:{text:"biscotti",src:Z.a,alt:"biscotti"}}],t=Object(r.useState)(0),s=Object(o.a)(t,2),c=s[0],l=s[1],i=e=>{"next"===e&&(l(c+1),c>=2&&l(0)),"prev"===e&&(l(c-1),0===c&&l(2))},d=e=>a.map((a,t)=>{const r={0:"cookies",1:"scones",2:"biscotti"}[e];return n.a.createElement("div",{className:"card",key:t},n.a.createElement("img",{className:"card-img",src:a[r].src,alt:a[r].alt,height:220,width:120}),n.a.createElement("div",{className:"card-body primary-font"},n.a.createElement("h3",null,a[r].text),n.a.createElement("p",{className:"card-text secondary-font"},"From $33.00")))});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("div",{className:"show-for-mobile"},n.a.createElement("p",{className:"heading"},"What we sell"),(()=>{const e={0:"cookies",1:"scones",2:"biscotti"}[c],t=a[0][e],r=t.text,s=t.src,o=t.alt;return n.a.createElement("div",{className:"cards"},n.a.createElement("span",{className:"prev round",onClick:()=>i("prev")},"\u2039"),n.a.createElement("img",{className:"card-img",src:s,alt:o,height:420,width:"80%"}),n.a.createElement("span",{className:"next round",onClick:()=>i("next")},"\u203a"),n.a.createElement("div",{className:"card-body primary-font"},n.a.createElement("h3",null,r),n.a.createElement("p",{className:"card-text secondary-font"},"From $33.00")))})()),n.a.createElement("div",{className:"show-for-desktop"},n.a.createElement("p",{className:"heading"},"What we sell"),d(0),d(1),d(2))))},ee=t(48),ae=t.n(ee),te=t(24),re=t.n(te),ne=t(49),se=t.n(ne),ce=(t(97),t(98),t(99),t(50)),oe=t.n(ce);var le=({fade:e})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(oe.a,Object.assign({},{dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1,fade:!0,cssEase:"linear"},{id:"featured"}),n.a.createElement("div",{className:"featured-slide "},n.a.createElement("img",{src:ae.a,alt:"chocolate-cookie",height:50,width:50}),n.a.createElement("div",{className:"text-box secondary-font"},n.a.createElement("h3",null,"Chocolate love"),n.a.createElement("p",null,"Featuring our new choclate chip cookies with loads of chips ready for dipping in some milk"," "),n.a.createElement("button",{className:"featured-products-link"}," ","See Our Featured Items"," "))),n.a.createElement("div",{className:"featured-slide  "},n.a.createElement("img",{src:re.a,alt:"chocolate-cookie",height:40,width:40}),n.a.createElement("div",{className:"text-box secondary-font"},n.a.createElement("h3",null,"Boxes of 12 or more 50% off "),n.a.createElement("p",null,"Ready for mouth watering, take a look at our cookies by the dozen."," "),n.a.createElement("button",{className:"featured-products-link"}," By the dozen "))),n.a.createElement("div",{className:"featured-slide "},n.a.createElement("img",{src:se.a,alt:"chocolate-cookie",height:40,width:40}),n.a.createElement("div",{className:"text-box secondary-font"},n.a.createElement("h3",null,"Have you seen what's new?"),n.a.createElement("p",null,"New cookies weekly come back next week for the new cookie reveal."," "),n.a.createElement("button",{className:"featured-products-link"}," New Cookies "))))),ie=(t(115),t(51)),de=t.n(ie),me=t(52),ue=t.n(me);var pe=({fade:e})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"about-us-grid desktop-grid mobile-grid"},n.a.createElement("div",{className:"right-side top"},n.a.createElement("img",{src:de.a,alt:"profile",height:350,width:"100%"})),n.a.createElement("div",{className:"left-side bottom secondary-font"},n.a.createElement("h3",null,"Your favourite dolce girls ",n.a.createElement("br",null),"Nada + Ashley"),n.a.createElement("p",null,"Magna ut pariatur minim eu est incididunt. Excepteur labore et ex duis incididunt mollit et dolore deserunt culpa occaecat. Aliquip ipsum et minim exercitation. Qui laborum excepteur voluptate incididunt anim voluptate magna dolor consectetur et ea occaecat. Ad enim voluptate officia eu eu est reprehenderit. Laborum non consequat et consequat deserunt. Exercitation voluptate in veniam cupidatat officia."),n.a.createElement("img",{src:ue.a,alt:"slogan",height:80,width:"40%"})))),he=t(53),Ee=t.n(he),ge=t(54),be=t.n(ge);t(116);var fe=()=>n.a.createElement("div",{className:"business-info-grid"},n.a.createElement("div",{className:"info-content"},n.a.createElement("h3",{className:"primary-font"},"Business Info"),n.a.createElement("div",{className:"secondary-font"},n.a.createElement("p",null,"Based in Toronto, ON"),n.a.createElement("p",null,n.a.createElement("strong",null,"Please give at least 7 days notice for any order placed")),n.a.createElement("em",null,"Rushed orders available for additional charge"),n.a.createElement("div",null,n.a.createElement("strong",null,"Hours:"),n.a.createElement("p",null,"Monday - Friday ",n.a.createElement("br",null),"9am - 6pm"),n.a.createElement("a",{href:"tel:6476404714"},n.a.createElement("img",{src:be.a,alt:"phone",className:"phone-icon"})," 647 000 0000"))),n.a.createElement("div",{className:"social-icons"},n.a.createElement("a",{href:"https://www.instagram.com/dolcenadaa/"},n.a.createElement("img",{src:Ee.a,alt:"instagram-link"}),n.a.createElement("span",null,"Follow us on Instagram @dolcenadaa")," "))),n.a.createElement("img",{src:re.a,alt:"profile of owner",height:"100%",width:"100%"}));var ve=({fade:e,errors:a})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("main",{id:"mainContent"},n.a.createElement("div",{className:e},"fade-background"!==e&&n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"featured-slider"},n.a.createElement(le,null),n.a.createElement("br",null)),window.innerHeight>400&&n.a.createElement("hr",null),n.a.createElement("section",{className:"featured-products-slider"},n.a.createElement($,null)),window.innerHeight>400&&n.a.createElement("hr",null),n.a.createElement("section",{className:"about-us"},n.a.createElement(pe,null)),n.a.createElement("hr",null),n.a.createElement("section",{className:"info"},n.a.createElement(fe,null)))))),Ne=(t(117),t(8)),we=(t(118),t(55)),ye=t.n(we);class ke extends r.Component{constructor(...e){super(...e),this.addProductToCart=(e,a)=>{a.quantity=1,this.props.addProduct(a)}}render(){const e=this.props,a=e.product,t=e.styles,r=e.addLabel;return n.a.createElement("div",null,n.a.createElement("button",{style:Object(Ne.a)({},t),onClick:e=>this.addProductToCart(e,a)},n.a.createElement(ye.a,null)," ",r))}}ke.defaultProps={addLabel:"Add to Cart"};Object(g.b)(null,e=>({addProduct:a=>e(P(a))}))(ke),t(121);class xe extends r.Component{render(){const e=this.props,a=e.item,t=(e.id,e.name),r=(e.price,e.image),s=e.quantity,c=e.sku;return n.a.createElement("div",{className:" item--card"},n.a.createElement("img",{className:"item--card--img",src:r,alt:t,height:120,width:120}),n.a.createElement("div",{className:"item--card-body secondary-font"},n.a.createElement("h3",{className:"item--card-body--name"},t),n.a.createElement("p",{className:"item--card-body--description"},"Short Description"),n.a.createElement("span",{className:"item--card-body--add-to-cart-btn"},n.a.createElement(m.a,{to:{pathname:"/products/".concat(c),state:{item:a,quantity:s}},className:"show-product-btn",onClick:()=>this.forceUpdate()},"Add to cart"))))}}var Ae=Object(g.b)(e=>({auth:e.auth,errors:e.errors}),{})(Object(d.a)(xe));var Ce=[{id:"23daejd",name:"tedast",sku:"cookie-123de",price:39,image:"".concat(E.a)},{id:"23dae3s",name:"tedast",sku:"scone-123dde",price:99,image:"".concat(E.a)},{id:"23daeda",name:"tedast",sku:"biscuit-123deda",price:399,image:"".concat(E.a)}];var Oe=Object(g.b)(e=>({auth:e.auth,errors:e.errors,cart:e.cart}),{})(Object(d.a)(({cart:e})=>{const a=Ce.map((e,a)=>n.a.createElement(Ae,Object.assign({},e,{item:e,key:a})));return n.a.createElement("div",{className:"products-container"},n.a.createElement("div",{className:"products--nav"},n.a.createElement("a",{href:"/dolcenadaa/"},"Home")," /",n.a.createElement("a",{href:"/dolcenadaa/products"}," Products")),a)}));t(122);class Te extends r.Component{render(){const e=this.props.location.state,a=e.item,t=e.item,r=(t.id,t.name),s=t.price,c=t.image,o=(t.quantity,t.sku);return n.a.createElement("div",{className:"product-show-container"},n.a.createElement("div",{className:"products--nav"},n.a.createElement("a",{href:"/dolcenadaa/"},"Home")," /",n.a.createElement("a",{href:"/dolcenadaa/products"}," Products")," /"," ",n.a.createElement("a",{href:"/dolcenadaa/products/".concat(o)},r)),n.a.createElement("div",{className:" product-show--card"},n.a.createElement("img",{className:"product-show--card--img",src:c,alt:r,height:120,width:120}),n.a.createElement("div",{className:"product-show--card-body secondary-font"},n.a.createElement("h3",{className:"product-show--card-body--name"},r),n.a.createElement("p",{className:"product-show--card-body--price"},S(s,"CAD")),n.a.createElement("p",{className:"product-show--card-body--description"},"Nulla dolore laborum officia incididunt commodo ut velit aliqua ut aliquip. Sit do exercitation eu nisi commodo culpa laboris ipsum irure dolor velit qui duis deserunt."),n.a.createElement("p",{className:"product-show--card-body--add-to-cart-btn"},n.a.createElement("span",null,n.a.createElement(ke,{product:a,addLabel:"Add to Cart",addProduct:this.props.addProduct}))))))}}var Se=Object(g.b)(e=>({auth:e.auth,errors:e.errors}),{addProduct:P})(Object(d.a)(Te));t(123);var je=()=>n.a.createElement("div",{className:"error-page"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"heading"},"OOPS!"),n.a.createElement("div",{className:"text"},"Something went wrong!"),n.a.createElement("a",{href:"/"},"Return back to greatness"))),Re=t(12),_e=t(57);const Pe=t(124),Le={isAuthenticated:!1,user:{},loading:!1};const Fe={};const Be={products:[],productToAdd:null,data:{productQuantity:0,totalPrice:0}};const Ue={messageStatus:"pending"};var qe=(e=Ue,a)=>{switch(a.type){case"SET_MESSAGE_STATUS":const t=a.payload;return Object.assign({},e,{payload:t});default:return e}},De=Object(Re.c)({auth:function(e=Le,a){switch(a.type){case"SET_CURRENT_USER":return Object(Ne.a)({},e,{isAuthenticated:!Pe(a.payload),user:a.payload});case"USER_LOADING":return Object(Ne.a)({},e,{loading:!0});default:return e}},errors:function(e=Fe,a){switch(a.type){case"GET_ERRORS":return a.payload;default:return e}},cart:function(e=Be,a){switch(a.type){case"LOAD_CART":return Object(Ne.a)({},e,{products:a.payload});case"ADD_PRODUCT":return Object(Ne.a)({},e,{productToAdd:Object.assign({},a.payload)});case"UPDATE_CART":return Object(Ne.a)({},e,{data:a.payload});case"REMOVE_PRODUCT":return Object(Ne.a)({},e,{productToRemove:Object.assign({},a.payload)});default:return e}},checkout:qe}),Me=t(58);const We=Object(Me.createLogger)(),Ge=[_e.a,We];var Ie=Object(Re.d)(De,{},Object(Re.a)(...Ge));if(localStorage.jwtToken){const e=localStorage.jwtToken;v(e);const a=w()(e);Ie.dispatch(k(a));const t=Date.now()/1e3;a.exp<t&&(Ie.dispatch(x()),window.location.href="./login")}var He=Object(g.b)(e=>({auth:e.auth,errors:e.errors}),{})(Object(d.a)(({errors:e,history:a})=>{const t=Object(r.useState)(!1),s=Object(o.a)(t,2),c=s[0],d=s[1],m=Object(r.useState)(""),u=Object(o.a)(m,2),p=u[0],h=u[1];return e.response&&404===e.response.status&&a.push("/404"),console.log(e.length),n.a.createElement(n.a.Fragment,null,e.response&&404===e.response.status?"":n.a.createElement(U,{showNav:d,fadeBackground:h,nav:c,fade:p}),n.a.createElement(l.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{exact:!0,path:"/",render:e=>n.a.createElement(ve,Object.assign({},e,{nav:c,fade:p}))}),n.a.createElement(i.a,{exact:!0,path:"/register",render:e=>n.a.createElement(H,Object.assign({},e,{fade:p}))}),n.a.createElement(i.a,{exact:!0,path:"/login",render:e=>n.a.createElement(V,Object.assign({},e,{fade:p}))}),n.a.createElement(i.a,{exact:!0,path:"/products",render:e=>n.a.createElement(Oe,e)}),n.a.createElement(i.a,{exact:!0,path:"/products/:id",render:e=>n.a.createElement(Se,e)}),n.a.createElement(i.a,{exact:!0,path:"/404",render:e=>n.a.createElement(je,e)}))),n.a.createElement(M,null))})),Qe=t(140);const Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}t(125);c.a.render(n.a.createElement(g.a,{store:Ie},n.a.createElement(Qe.a,{basename:"/dolcenadaa"},n.a.createElement(He,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/dolcenadaa",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/dolcenadaa","/service-worker.js");Ve?function(e){fetch(e).then(a=>{404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):Ye(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):Ye(e)})}}()}],[[60,1,2]]]);
//# sourceMappingURL=main.a9927786.chunk.js.map