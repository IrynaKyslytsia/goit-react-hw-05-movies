"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[368],{368:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,o,i,c,a,s,u,d,f,l=t(439),m=t(168),p=t(686),h=t(87),x=p.Z.div(r||(r=(0,m.Z)(["\n--min: 30ch;\ndisplay: grid;\ngrid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));\ngap: 1rem;\n    margin-top: 40px;\n    margin-bottom: 40px;\n"]))),g=p.Z.img(o||(o=(0,m.Z)(["\n    display: block;\n    max-width: 100%;\n"]))),j=p.Z.div(i||(i=(0,m.Z)(["\n    padding: 16px;\n"]))),v=p.Z.h2(c||(c=(0,m.Z)(["\n    font-size: 36px;\n    margin-bottom: 48px;\n"]))),w=p.Z.p(a||(a=(0,m.Z)(["\n    font-size: 20px;\n    margin-bottom: 24px;\n"]))),k=p.Z.h3(s||(s=(0,m.Z)(["\n    font-size: 24px;\n    margin-bottom: 16px;\n"]))),Z=(0,p.Z)(h.Link)(u||(u=(0,m.Z)(["\n    background-color: #002077;\n    color: #ffffff;\n    padding: 8px 24px;\n    border-radius: 8px;\n    margin-bottom: 40px;\n"]))),b=p.Z.ul(d||(d=(0,m.Z)(["\n    display: flex;\n    gap: 40px;\n    margin-bottom: 40px;\n"]))),_=(0,p.Z)(h.Link)(f||(f=(0,m.Z)(["\n    background-color: #002077;\n    color: #ffffff;\n    padding: 8px 24px;\n    border-radius: 8px;\n"]))),S=t(184),y=function(n){var e=n.movie,t=e.genres,r=e.title,o=e.overview,i=e.vote_average,c=e.poster_path,a=e.release_date;return(0,S.jsxs)(x,{children:[(0,S.jsx)(g,{src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:r}),(0,S.jsxs)(j,{children:[(0,S.jsx)(v,{children:"".concat(r," (").concat(a.slice(0,4),")")}),(0,S.jsx)(w,{children:(0,S.jsxs)("b",{children:["User Score: ",(10*i).toFixed(0)," %"]})}),(0,S.jsx)(k,{children:"Overview"}),(0,S.jsx)(w,{children:o}),(0,S.jsx)(k,{children:"Genres"}),(0,S.jsx)(w,{children:t.map((function(n){var e=n.id,t=n.name;return(0,S.jsx)("li",{children:t},e)}))})]})]})},O=t(791),E=t(689),P=t(390),L=function(){var n,e,t=(0,O.useState)(null),r=(0,l.Z)(t,2),o=r[0],i=r[1],c=(0,O.useState)(null),a=(0,l.Z)(c,2),s=a[0],u=a[1],d=(0,O.useState)(!1),f=(0,l.Z)(d,2),m=f[0],p=f[1],h=(0,E.UO)().movieId,x=(0,E.TH)(),g=(0,O.useRef)(null!==(n=null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,O.useEffect)((function(){p(!0),(0,P.t2)(h).then((function(n){i(n)})).catch((function(n){return u(n)})).finally((function(){p(!1)}))}),[h]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Z,{to:g.current,children:"Go back"}),m&&(0,S.jsx)("div",{children:"Loading..."}),s&&(0,S.jsx)("div",{children:s.message}),o&&(0,S.jsx)(y,{movie:o}),(0,S.jsxs)(b,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(_,{to:"cast",children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(_,{to:"reviews",children:"Reviews"})})]}),(0,S.jsx)(O.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading..."}),children:(0,S.jsx)(E.j3,{})})]})}},390:function(n,e,t){t.d(e,{Df:function(){return i},M1:function(){return s},XT:function(){return c},t2:function(){return a},tx:function(){return u}});var r="https://api.themoviedb.org/3/",o="1b503a470f760c92c3c57decdfe60ef0",i=function(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},c=function(n){return fetch("".concat(r,"search/movie?query=").concat(n,"&api_key=").concat(o,"&include_adult=false&language=en-US&page=1")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},s=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))}}}]);
//# sourceMappingURL=368.02242103.chunk.js.map