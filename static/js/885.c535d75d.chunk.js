"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{885:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,c,i,u,a=t(439),s=t(791),f=t(390),h=t(168),l=t(686),d=l.Z.ul(r||(r=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n"]))),p=l.Z.li(o||(o=(0,h.Z)(["\n    padding: 10px;\n    background-color: #ebf0fe;  \n"]))),m=l.Z.p(c||(c=(0,h.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n    margin-bottom: 8px;\n"]))),g=l.Z.p(i||(i=(0,h.Z)(["\n    font-size: 16px;\n    line-height: 1.5;\n"]))),w=l.Z.div(u||(u=(0,h.Z)(["\n    font-size: 24px;\n    font-weight: 500;\n"]))),j=t(184),x=t(87).useParams,k=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,s.useState)(null),c=(0,a.Z)(o,2),i=c[0],u=c[1],h=(0,s.useState)(!1),l=(0,a.Z)(h,2),k=l[0],v=l[1],Z=x().movieId;return(0,s.useEffect)((function(){v(!0),(0,f.tx)(Z).then((function(n){r(n.results)})).catch((function(n){return u(n)})).finally((function(){v(!1)}))}),[Z]),(0,j.jsxs)(j.Fragment,{children:[k&&(0,j.jsx)("div",{children:"Loading..."}),i&&(0,j.jsx)("div",{children:i.message}),t.length>0?(0,j.jsx)(d,{children:t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,j.jsxs)(p,{children:[(0,j.jsxs)(m,{children:["Author: ",t]}),(0,j.jsx)(g,{children:r})]},e)}))}):(0,j.jsx)(w,{children:"Sorry, there is no information here..."})]})}},390:function(n,e,t){t.d(e,{Df:function(){return c},M1:function(){return a},XT:function(){return i},t2:function(){return u},tx:function(){return s}});var r="https://api.themoviedb.org/3/",o="1b503a470f760c92c3c57decdfe60ef0",c=function(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},i=function(n){return fetch("".concat(r,"search/movie?query=").concat(n,"&api_key=").concat(o,"&include_adult=false&language=en-US&page=1")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},s=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))}}}]);
//# sourceMappingURL=885.c535d75d.chunk.js.map