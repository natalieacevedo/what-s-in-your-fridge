(this["webpackJsonp2021-09-lisbon-webdev-project2-group2"]=this["webpackJsonp2021-09-lisbon-webdev-project2-group2"]||[]).push([[0],{121:function(e,t,c){},124:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(22),a=c.n(s),i=c(10),r=c(7),o=c(36),l=c.n(o),d=c(134),j=c(28),b=c.n(j),u=(c(85),c(46),c(86),c(1)),h=["onions","spinach","cucumbers","alfalfa","celery","carrots","split beans","soy beans","cabbage","eggplant","kale","baby carrots","soy sprout","boychok","green onion"],O=["chicken","goat","meat","fish","shrimp","turkey","bacon","ham","hot dogs","Prosciutto","salami","sausages","chorizo","duck","saitan"],m=["apples","pears","citrus","oranges","grapefruits","mandarin","limes","lemon","stone fruit","nectarines","apricots","peaches","plums","bananas","mangoes","strawberries","raspberries","blueberries","kiwifruit","passionfruit","mamon"],x=["teff","wheat","oats","rice","corn","barley","sorghum","rye","millet","triticale","amaranth","buckwheat","quinoa","arroz","flour"],g=["halibut","mahi","monkfish","mullet","parrotfish","seabass"," perch","salmon","sardine","sturgeon","shark","tilapia","halibut","mahi","monkfish"];var f=function(e){var t=e.selectIngredient,c=e.removeIngredient,n=e.selectedIngredients;function s(e){return e.map((function(e){var s=-1!==n.indexOf(e);return Object(u.jsx)("ul",{className:b.a.wrapper,children:Object(u.jsx)("li",{className:"".concat(b.a.ingredientItem," ").concat(s?b.a.selected:b.a.notSelected),onClick:function(e){e.preventDefault(),s?c(e.target.textContent):t(e.target.textContent)},children:e})})}))}return Object(u.jsx)("div",{children:Object(u.jsxs)(d.a,{flush:!0,children:[Object(u.jsxs)(d.a.Item,{eventKey:"0",className:"accordion-item",style:{backgroundColor:"aliceblue"},children:[Object(u.jsx)(d.a.Header,{children:"Vegetables"}),Object(u.jsx)(d.a.Body,{className:"Accordion-body",style:{backgroundColor:"#ddefff"},children:s(h)})]}),Object(u.jsxs)(d.a.Item,{eventKey:"1",style:{backgroundColor:"aliceblue"},children:[Object(u.jsx)(d.a.Header,{children:"Meat"}),Object(u.jsx)(d.a.Body,{style:{backgroundColor:"#ddefff"},children:s(O)})]}),Object(u.jsxs)(d.a.Item,{eventKey:"2",style:{backgroundColor:"aliceblue"},children:[Object(u.jsx)(d.a.Header,{children:"Fruits"}),Object(u.jsx)(d.a.Body,{style:{backgroundColor:"#ddefff"},children:s(m)})]}),Object(u.jsxs)(d.a.Item,{eventKey:"3",style:{backgroundColor:"aliceblue"},children:[Object(u.jsx)(d.a.Header,{children:"Grains"}),Object(u.jsx)(d.a.Body,{style:{backgroundColor:"#ddefff"},children:s(x)})]}),Object(u.jsxs)(d.a.Item,{eventKey:"4",style:{backgroundColor:"aliceblue"},children:[Object(u.jsx)(d.a.Header,{children:"SeaFood"}),Object(u.jsx)(d.a.Body,{style:{backgroundColor:"#ddefff"},children:s(g)})]})]})})},p=c(45),v=c(19);c(74),c(87);function w(e){var t=e.name,c=e.selected,n=e.onClick;return Object(u.jsx)("div",{id:"container",children:Object(u.jsx)("ul",{id:"first-swiper",children:Object(u.jsxs)("li",{onClick:n,children:[Object(u.jsx)("label",{children:t}),Object(u.jsx)("input",{className:"checkbox-input",type:"checkbox",checked:c}),Object(u.jsx)("span",{className:"checkbox-checkmark-box",children:Object(u.jsx)("span",{className:"checkbox-checkmark",children:" "})})]},t)})})}v.b.use([v.a]);var k=function(e){var t=e.ingredients,c=e.selectedIngredients,n=e.selectIngredient,s=e.removeIngredient,a=t.map((function(e){var t=-1!==c.indexOf(e.name);return Object(u.jsx)(p.b,{children:Object(u.jsx)(w,{name:e.name,selected:t,onClick:function(){return t?s(e.name):n(e.name)}})})}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Choose Ingredients Please"}),Object(u.jsx)("ul",{className:"search-ul",children:Object(u.jsx)(p.a,{spaceBetween:1,className:"swiper-search",navigation:!0,breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},480:{slidesPerView:3},768:{slidesPerView:3},1024:{slidesPerView:5}},children:Object(u.jsx)("div",{className:"swiper-items",children:a})})}),Object(u.jsx)(f,{selectIngredient:n,removeIngredient:s,selectedIngredients:c})]})},y=c.p+"static/media/finallogobig1newsize.ab8f1790.png";var N=function(e){var t=e.searchIngredients,c=Object(n.useState)(""),s=Object(r.a)(c,2),a=s[0],i=s[1];return Object(u.jsxs)("div",{className:"search-div",children:[Object(u.jsx)("img",{src:y,width:"50%",height:"50%",alt:"so...what's in your fridge ?",id:"desktop-img"}),Object(u.jsx)("input",{placeholder:"Please type your ingredients",className:"search-input",type:"text",onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("div",{className:"center-buttons-middle",children:Object(u.jsxs)("a",{className:"btn-search",href:"#",children:[Object(u.jsx)("span",{className:"wave"}),Object(u.jsx)("span",{className:"text btn-search",id:"button-text-color",onClick:function(){return t(a)},children:"Search Ingredients"})]})})]})},A=c(71);v.b.use([v.a]),A.a.configure();var C=function(e){var t=e.ingredients,c=e.removeIngredient,n=Object(i.f)();return console.log(t),Object(u.jsxs)("div",{style:{backgroundColor:"aliceblue"},children:[Object(u.jsx)("h3",{className:b.a.ingredients_h3,children:"Selected Ingredients"}),Object(u.jsx)("ul",{className:b.a.selected_container,children:Object(u.jsx)(p.a,{className:"swiper-test",navigation:!0,spaceBetween:1,breakpoints:{320:{slidesPerView:2},375:{slidesPerView:3},480:{slidesPerView:4},768:{slidesPerView:3},1024:{slidesPerView:5}},children:t.map((function(e){return Object(u.jsx)(p.b,{children:Object(u.jsx)("li",{className:b.a.ingredient_selected,onClick:function(e){console.log(e.target.textContent),c(e.target.textContent)},children:e})})}))})}),Object(u.jsx)("div",{className:"center-buttons-middle",children:Object(u.jsxs)("a",{className:"btn-search",children:[Object(u.jsx)("span",{className:"wave"}),Object(u.jsx)("span",{className:"text btn-search btn",id:"button-text-color",onClick:function(){return t.length<=0?void A.a.error("Please choose some ingredients",{position:A.a.POSITION.TOP_CENTER}):n.push("/recipes/".concat(t.join(",")))},children:"Get your delicious Recipes"})]})})]})},I=c(26),B=c(133),P=c(128),F=c(132),_=(c(121),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"center-buttons-middle",children:Object(u.jsxs)("a",{className:"btn-nav",href:"#",children:[Object(u.jsx)("span",{className:"wave2"}),Object(u.jsx)("span",{className:"text",children:Object(u.jsx)(B.a,{variant:"dark",expand:"sm",children:Object(u.jsxs)(P.a,{fluid:!0,children:[Object(u.jsx)(B.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(B.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(F.a,{justify:!0,variant:"pills",className:"m-auto",children:[Object(u.jsx)(F.a.Link,{className:"my-navbar",as:I.b,activeClassName:"active",to:"/ingredients/",children:Object(u.jsx)("h3",{children:"Ingredients"})}),Object(u.jsx)(F.a.Link,{as:I.b,activeClassName:"active",to:"/recipes/",disabled:!0,children:Object(u.jsx)("h3",{children:"Recipes"})}),Object(u.jsx)(F.a.Link,{as:I.b,activeClassName:"active",to:"/favorites/",children:Object(u.jsx)("h3",{children:"Favourites"})})]})})]})})})]})})})}),K=(c(124),function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("section",{id:"lab_social_icon_footer",children:[Object(u.jsx)("link",{href:"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css",rel:"stylesheet"}),Object(u.jsx)("div",{className:"footerContainer",children:Object(u.jsxs)("div",{className:"text-center center-block",children:[Object(u.jsx)("a",{href:"https://www.facebook.com/",children:Object(u.jsx)("i",{id:"social-fb",className:"fa fa-facebook-square fa-3x social"})}),Object(u.jsx)("a",{href:"https://twitter.com/",children:Object(u.jsx)("i",{id:"social-tw",className:"fa fa-twitter-square fa-3x social"})}),Object(u.jsx)("a",{href:"https://plus.google.com/",children:Object(u.jsx)("i",{id:"social-gp",className:"fa fa-google-plus-square fa-3x social"})}),Object(u.jsx)("a",{href:"mailto:#",children:Object(u.jsx)("i",{id:"social-em",className:"fa fa-envelope-square fa-3x social"})})]})})]})})}),R=c(2),V=Object(n.createContext)({}),S=V,T=function(e){var t=e.children,c=Object(n.useState)({}),s=Object(r.a)(c,2),a=s[0],i=s[1];return Object(u.jsx)(V.Provider,{value:{favorites:a,isFavorite:function(e){return a.hasOwnProperty(e)},addFavorite:function(e,t){i((function(c){var n=Object(R.a)({},c);return n[e]=t,n}))},removeFavorite:function(e){i((function(t){var c=Object(R.a)({},t);return delete c[e],c}))},key:"9a80ca7559ae40028969f263ebab42a0"},children:t})};var E=function(){var e=Object(n.useContext)(S).key;console.log(e);var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),d=o[0],j=o[1];function b(e){j((function(t){return t.filter((function(t){return t!==e}))}))}return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{}),Object(u.jsx)(N,{searchIngredients:function(t){l.a.get("https://api.spoonacular.com/food/ingredients/search?apiKey=".concat(e,"&query=").concat(t,"&number=10")).then((function(e){return console.log(e.data),e.data})).then((function(e){console.log(e.results),a(e.results)}))}}),Object(u.jsx)(k,{ingredients:s,selectedIngredients:d,selectIngredient:function(e){j((function(t){return-1===t.indexOf(e)?t.concat([e]):t}))},removeIngredient:b}),Object(u.jsx)(C,{ingredients:d,removeIngredient:b}),Object(u.jsx)(K,{})]})},L=function(){return Object(u.jsxs)("div",{className:"total-container",children:[Object(u.jsx)("div",{className:"img-container",children:Object(u.jsx)("img",{src:y,alt:"What's in your fridge?",id:"fridge-img"})}),Object(u.jsx)("div",{className:"home-button-container",children:Object(u.jsx)("div",{className:"center-buttons-middle",children:Object(u.jsxs)("a",{className:"btn",href:"#",children:[Object(u.jsx)("span",{className:"wave"}),Object(u.jsx)("span",{className:"text",children:Object(u.jsx)(I.b,{className:"home-button-text-color",activeClassName:"active",to:"/ingredients/",children:Object(u.jsx)("h2",{children:"Check Ingredients"})})})]})})})]})},W=c(131),D=c(136),H=c(129),G=c(135),M=c(130),z=c(137),J=c.p+"static/media/facefoodcolor.1b97a9f8.png",U=c(47),Q=c.n(U),Y=c.p+"static/media/continente.logo.716b9461.png",X=c.p+"static/media/auchangelogo.7970db2d.png",q=c.p+"static/media/pingodocelogo.d0aba61d.png";var Z=function(e){var t=e.recipe,c=e.missedIngredients,s=Object(n.useState)(!1),a=Object(r.a)(s,2),i=a[0],o=a[1],d=Object(n.useState)([]),j=Object(r.a)(d,2),b=j[0],h=j[1],O=Object(n.useState)([]),m=Object(r.a)(O,2),x=m[0],g=m[1],f=Object(n.useContext)(S).key;console.log(c);var p=Object(n.useContext)(S),v=p.isFavorite,w=p.addFavorite,k=p.removeFavorite,y=v(t.id);return Object(n.useEffect)((function(){return e=t.id,void l.a.get("https://api.spoonacular.com/recipes/".concat(e,"/information?includeNutrition=false&apiKey=").concat(f)).then((function(e){var t=e.data.summary.replace(/<\/?[^>]+(>|$)/g,""),c=t.indexOf("It is brought to you"),n=t.slice(0,c);h(n),g(e.data)}));var e}),[t.id]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(H.a,{variant:"danger",onClick:function(){return o(!0)},children:"Recipe"}),Object(u.jsxs)(G.a,{show:i,onHide:function(){return o(!1)},size:"lg",centered:!0,children:[Object(u.jsxs)(G.a.Header,{closeButton:!0,children:[Object(u.jsx)(G.a.Title,{children:x.title}),Object(u.jsx)("img",{className:"positioningFace smile",height:"60px",width:"60px",src:y?J:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE70lEQVRoge2aXWwVVRDHfxdL70WE9tLa1keEqKipmmiiEgQfwGKjlsSPRDE+8BVjCASMDyagRhOMwcSoJfiAz/pgjDGKaAIKrbYWvyBaWpWEqGjVhoTY2iuU68PM6TnFu+fu7t27bQz/ZLO3O3NmZ/bMzJkzp3AB0wuZBGXNA24DFgNXAwuAJmC20keAIeA48B3QBRwETiWoQ2zkgIeBD4FxoBjxOgvsA1YD2ZR1B2AWsBU46Sg1BuwHtgEdwCIgD8zUK6/POoDtwAEdY8b/AmxBPk4qaAd+dBToA9YCdTFk1QPrgMOOvB+AlYloGoAcsNt54RfAigTltwFfOfI7qcLstCCKF5Gg3QhclPRLVOYmYBQ7281JCZ+PTHcR6AeuTUqwB63AgL7ze9WhIlzqCPwcaKxUYATkkRRdRGKyJa6gHNadPsWuB2liNtCDdbNYMWMCux9Z7KYKDViv6Iw6uB0b2GnERDm0YhNAW9hBs7DrxMbq6BULm7HBH8rFHseuE9VIsXFRA3yN6La5HHMWKRWKwPLq6hULdyK6naTMrKzGZojpiAw2kz7oY/xImdamoFRcbEB03BvEMA8pq8fwF4ALgBeBb5GsNqK/dwKXR1Aorpw8UADOBOnZgVi6P0DAXOA1/PuOcWT9meNRJAk5Hyvf3aWIO5W4LWBwn9ILwB5gGVKyNOrv14F/sOVMEKLI6Q2Q8bTSXyhFfE+J9wQM7kLK7Os9St6ApMhDHp4ocg4G0Fepru+WIg4qcZHnBdMF1yC6HitFHFbiVNZVYdGI6Pp7KWJBibVpahQTWWyfAIAZU6dLRTCl00Q7yzXkL71fkpo68WE2eCPmgWvIsN4T2yNXESaOJ2LENWRQ71ekpk58mJX/uHngGmJS2XUeAd16VTMh1CLb2y4Pz616P1KKaEqUAx4BR5TnyRgKhsV2fcffSF1VCt14Fu88tmisDxCwDDiHlBA3V6BsEJZgyxPzUWeex9OkPAU8xe0+FbDO87IdyjMEXBlb5f/iKuA3lb3L+b3jPL6t+vwDn7CHlOmwh6cGeFv5fkLqokrRilX8LSR2lyJV8Dhwk/JlkFK/CDzgE5jDbnXv8PBlkY2N6bQ8QryzlgywBjitst5nciJ5VZ+bIvRebOe+bMLZosxf4m8+1AAvY/25G7glghFLkb2Puw85isSAQT3WyMVIByV0dyeH7fVuCsF/P+JiRpkB4FngdqTNmUU6hgv12XPIRzL8vyKzcjTAGDMr5ixmkAiHQit10Cjiv+VwMfAU8AeTv7Dv+hNJ43NVRlOAMcudMeeIcZTRif3CDSHHZIG7kK/YjWS2Mb2GkB5yr8o9jbR3XLjGmF1ms2PIK1GNAHExsy3tIbkmdi3wJvYM8Qkmx2ITkjU/07/rsN4R++CnGRtgPYSfmXLIAM8grmK6mjcG8CbWa5uPNWYAfy0WFe3YIB5H1qcO5FxmDtKEO0X5RTo0mrFuNor0XmuSEIyU5C9hu+2lrjdIcBOYwyaAItLlSOr0dQbwGJN7XWOIy60n2X9smEAb1tWMf28guFL1oQUxoN+R9w1SnKaCHOJePzsKFIBPkPVkFdKyaUCyVA64TJ/dBzyP9KzcGTgBPMoUHWVkkYDci6TSsIuhuc4A7yBBX5EBSfpeHfJPNUuQJt9CbPY5i/QEhpGCrw/ZAfZimx4X8L/Cv6WzpNDjj3uOAAAAAElFTkSuQmCC",alt:"carita",onClick:function(){console.log(y),y?k(t.id):w(t.id,t)}})]}),Object(u.jsxs)(G.a.Body,{className:Q.a.modalBody,children:[Object(u.jsx)("div",{className:"center-image",children:Object(u.jsx)(M.a,{src:x.image,fluid:!0})}),Object(u.jsxs)("p",{className:"detailsParagraph",children:[b,Object(u.jsx)("br",{}),x.serving,Object(u.jsx)("p",{children:"For two servings you are missing these ingredients:"})]}),Object(u.jsx)("ul",{className:"listStyling ",children:c&&c.map((function(e){return Object(u.jsx)("li",{className:"bulletPoints",children:e})}))}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{target:"_blank",className:"centerLink",href:x.sourceUrl,children:"Let's make it!"})})]}),Object(u.jsx)(P.a,{className:"modal-body",children:Object(u.jsxs)(z.a,{direction:"horizontal",gap:5,className:"justify-content-center",children:[Object(u.jsx)(H.a,{variant:"white",onClick:function(){return window.open("https://www.auchan.pt/","_blank")},children:Object(u.jsx)("img",{src:X,alt:"Auchan",width:"40%"})}),Object(u.jsx)(H.a,{variant:"white",onClick:function(){return window.open("https://www.continente.pt/","_blank")},children:Object(u.jsx)("img",{src:Y,alt:"Continente",width:"40%"})}),Object(u.jsx)(H.a,{variant:"white",onClick:function(){return window.open("https://www.pingodoce.pt/","_blank")},children:Object(u.jsx)("img",{src:q,alt:"Pingo Doce",width:"80%"})})]})})]})]})},$=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useContext)(S).key,o=e.match.params.ingredients;Object(n.useEffect)((function(){l.a.get("https://api.spoonacular.com/recipes/findByIngredients?ingredients=".concat(o,"&number=10&apiKey=").concat(i)).then((function(e){return console.log(e.data),e.data})).then((function(e){a(e)}))}),[o]);var d=s.map((function(e){return e.missedIngredients.map((function(e){return e.original}))})).flat();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(_,{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(P.a,{className:"favourite-container",children:Object(u.jsx)(W.a,{children:s.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(D.a,{children:[Object(u.jsx)("div",{className:"new-overflow",children:Object(u.jsx)(D.a.Img,{className:"custom-overflow ",src:e.image})}),Object(u.jsxs)(D.a.Body,{className:"text-center",children:[Object(u.jsx)(D.a.Title,{children:e.title}),Object(u.jsx)(D.a.Text,{children:"Discover how to cook ".concat(e.title,", a meal all the family will love")}),Object(u.jsx)(Z,{missedIngredients:d,recipe:e,recipeId:e.id})]})]})})}))})}),Object(u.jsx)(K,{})]})};var ee=function(){var e=Object(n.useContext)(S).favorites;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(_,{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(P.a,{className:"favourite-container",children:Object.values(e).length>0?Object(u.jsx)(W.a,{children:Object.values(e).map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(D.a,{children:[Object(u.jsx)("div",{className:"new-overflow",children:Object(u.jsx)(D.a.Img,{className:"custom-overflow",src:e.image})}),Object(u.jsxs)(D.a.Body,{className:"text-center",children:[Object(u.jsx)(D.a.Title,{children:e.title}),Object(u.jsx)(D.a.Text,{children:e.description}),Object(u.jsx)(Z,{recipe:e})]})]})})}))}):Object(u.jsx)("h1",{children:"You don't have any favourites yet :("})}),Object(u.jsx)(K,{})]})};c(125);var te=function(){return Object(u.jsx)(T,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:L}),Object(u.jsx)(i.a,{path:"/ingredients/",component:E}),Object(u.jsx)(i.a,{path:"/recipes/:ingredients",component:$}),Object(u.jsx)(i.a,{path:"/favorites",component:ee})]})})};a.a.render(Object(u.jsx)(I.a,{children:Object(u.jsx)(te,{})}),document.getElementById("root"))},28:function(e,t,c){e.exports={wrapper:"ingredient_wrapper__AHQS5",ingredientItem:"ingredient_ingredientItem__3woJ1",backgroundSelected:"ingredient_backgroundSelected__2HTKU",selected:"ingredient_selected__UZ-j6",notSelected:"ingredient_notSelected__3waRA",ingredients_h3:"ingredient_ingredients_h3__EVO_e",selected_container:"ingredient_selected_container__2OhnR",ingredient_selected:"ingredient_ingredient_selected__m8zCO",a:"ingredient_a__3IWz3"}},46:function(e,t,c){},47:function(e,t,c){},85:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.f055d841.chunk.js.map