"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,o,c,i,a=e(439),u=e(791),s=e(390),f=e(168),p=e(686),h=p.Z.ul(r||(r=(0,f.Z)(["\n    display: grid;\n    /* max-width: calc(100vw - 48px); */\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    padding-left: 32px;\n    padding-right: 32px;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),m=p.Z.img(o||(o=(0,f.Z)(["\n    width: 100%;\n"]))),g=p.Z.p(c||(c=(0,f.Z)(["\n    margin-top: 8px;\n    font-size: 16px;\n    font-weight: 500;\n"]))),d=p.Z.p(i||(i=(0,f.Z)(["\n    margin-top: 8px;\n"]))),l=e(184),w=e(87).useParams,x=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],o=(0,u.useState)(null),c=(0,a.Z)(o,2),i=c[0],f=c[1],p=(0,u.useState)(!1),x=(0,a.Z)(p,2),j=x[0],k=x[1],v=w().movieId;return(0,u.useEffect)((function(){k(!0),(0,s.M1)(v).then((function(n){r(n.cast)})).catch((function(n){return f(n)})).finally((function(){k(!1)}))}),[v]),(0,l.jsxs)(l.Fragment,{children:[j&&(0,l.jsx)("div",{children:"Loading..."}),i&&(0,l.jsx)("div",{children:i.message}),(0,l.jsx)(h,{children:e&&e.map((function(n){var t=n.name,e=n.id,r=n.profile_path,o=n.character;return(0,l.jsxs)("li",{children:[(0,l.jsx)(m,{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:t,width:"160"}),(0,l.jsx)(g,{children:t}),(0,l.jsxs)(d,{children:["Character: ",o]})]},e)}))})]})}},390:function(n,t,e){e.d(t,{Df:function(){return c},M1:function(){return u},XT:function(){return i},t2:function(){return a},tx:function(){return s}});var r="https://api.themoviedb.org/3/",o="1b503a470f760c92c3c57decdfe60ef0",c=function(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},i=function(n){return fetch("".concat(r,"search/movie?query=").concat(n,"&api_key=").concat(o,"&include_adult=false&language=en-US&page=1")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},s=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))}}}]);
//# sourceMappingURL=736.b1063ada.chunk.js.map