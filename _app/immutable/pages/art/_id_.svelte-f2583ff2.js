import{S as J,i as K,s as Q,e as m,t as U,c as g,a as _,h as q,d as r,b as o,g as x,H as h,j as C,k as z,m as A,O,E as P}from"../../chunks/index-23d67bfb.js";import{i as T}from"../../chunks/images-2b4b537c.js";import{t as W,c as Z,d as $}from"../../chunks/seo-406ddecf.js";import"../../chunks/index-cc486d72.js";function V(s){let e,t=s[1].title+"",i;return{c(){e=m("h1"),i=U(t),this.h()},l(l){e=g(l,"H1",{class:!0});var f=_(e);i=q(f,t),f.forEach(r),this.h()},h(){o(e,"class","svelte-wf4ecp")},m(l,f){x(l,e,f),h(e,i)},p(l,f){f&2&&t!==(t=l[1].title+"")&&C(i,t)},d(l){l&&r(e)}}}function X(s){let e,t=s[1].subtitle+"",i;return{c(){e=m("small"),i=U(t),this.h()},l(l){e=g(l,"SMALL",{class:!0});var f=_(e);i=q(f,t),f.forEach(r),this.h()},h(){o(e,"class","svelte-wf4ecp")},m(l,f){x(l,e,f),h(e,i)},p(l,f){f&2&&t!==(t=l[1].subtitle+"")&&C(i,t)},d(l){l&&r(e)}}}function Y(s){let e,t=s[1].description+"",i;return{c(){e=m("p"),i=U(t)},l(l){e=g(l,"P",{});var f=_(e);i=q(f,t),f.forEach(r)},m(l,f){x(l,e,f),h(e,i)},p(l,f){f&2&&t!==(t=l[1].description+"")&&C(i,t)},d(l){l&&r(e)}}}function B(s){let e,t;return{c(){e=m("a"),this.h()},l(i){e=g(i,"A",{class:!0,href:!0,title:!0}),_(e).forEach(r),this.h()},h(){o(e,"class","previous svelte-wf4ecp"),o(e,"href",t="/art/"+s[2]),o(e,"title","previous")},m(i,l){x(i,e,l)},p(i,l){l&4&&t!==(t="/art/"+i[2])&&o(e,"href",t)},d(i){i&&r(e)}}}function R(s){let e,t;return{c(){e=m("a"),this.h()},l(i){e=g(i,"A",{class:!0,href:!0,title:!0}),_(e).forEach(r),this.h()},h(){o(e,"class","next svelte-wf4ecp"),o(e,"href",t="/art/"+s[3]),o(e,"title","next")},m(i,l){x(i,e,l)},p(i,l){l&8&&t!==(t="/art/"+i[3])&&o(e,"href",t)},d(i){i&&r(e)}}}function ee(s){let e,t,i,l,f,b,w,L,M,E,k,y,S,I,n=s[1].title&&V(s),c=s[1].subtitle&&X(s),p=s[1].description&&Y(s),v=s[2]!==s[0]&&B(s),u=s[3]!==s[0]&&R(s);return{c(){e=m("figure"),t=m("figcaption"),n&&n.c(),i=z(),c&&c.c(),l=z(),p&&p.c(),f=z(),b=m("div"),w=m("img"),M=z(),E=m("nav"),k=m("ul"),y=m("li"),v&&v.c(),S=z(),I=m("li"),u&&u.c(),this.h()},l(a){e=g(a,"FIGURE",{class:!0});var d=_(e);t=g(d,"FIGCAPTION",{class:!0});var j=_(t);n&&n.l(j),i=A(j),c&&c.l(j),l=A(j),p&&p.l(j),j.forEach(r),f=A(d),b=g(d,"DIV",{class:!0});var D=_(b);w=g(D,"IMG",{class:!0,src:!0,alt:!0}),D.forEach(r),d.forEach(r),M=A(a),E=g(a,"NAV",{class:!0});var F=_(E);k=g(F,"UL",{class:!0});var G=_(k);y=g(G,"LI",{class:!0});var H=_(y);v&&v.l(H),H.forEach(r),S=A(G),I=g(G,"LI",{class:!0});var N=_(I);u&&u.l(N),N.forEach(r),G.forEach(r),F.forEach(r),this.h()},h(){o(t,"class","svelte-wf4ecp"),o(w,"class","art-page-content svelte-wf4ecp"),O(w.src,L=s[1].source)||o(w,"src",L),o(w,"alt",""),o(b,"class","image-wrapper svelte-wf4ecp"),o(e,"class","art-page svelte-wf4ecp"),o(y,"class","svelte-wf4ecp"),o(I,"class","svelte-wf4ecp"),o(k,"class","svelte-wf4ecp"),o(E,"class","svelte-wf4ecp")},m(a,d){x(a,e,d),h(e,t),n&&n.m(t,null),h(t,i),c&&c.m(t,null),h(t,l),p&&p.m(t,null),h(e,f),h(e,b),h(b,w),x(a,M,d),x(a,E,d),h(E,k),h(k,y),v&&v.m(y,null),h(k,S),h(k,I),u&&u.m(I,null)},p(a,[d]){a[1].title?n?n.p(a,d):(n=V(a),n.c(),n.m(t,i)):n&&(n.d(1),n=null),a[1].subtitle?c?c.p(a,d):(c=X(a),c.c(),c.m(t,l)):c&&(c.d(1),c=null),a[1].description?p?p.p(a,d):(p=Y(a),p.c(),p.m(t,null)):p&&(p.d(1),p=null),d&2&&!O(w.src,L=a[1].source)&&o(w,"src",L),a[2]!==a[0]?v?v.p(a,d):(v=B(a),v.c(),v.m(y,null)):v&&(v.d(1),v=null),a[3]!==a[0]?u?u.p(a,d):(u=R(a),u.c(),u.m(I,null)):u&&(u.d(1),u=null)},i:P,o:P,d(a){a&&r(e),n&&n.d(),c&&c.d(),p&&p.d(),a&&r(M),a&&r(E),v&&v.d(),u&&u.d()}}}function fe({params:s}){return{props:{id:parseInt(s.id)}}}function te(s,e,t){let{id:i=0}=e,l,f,b;return s.$$set=w=>{"id"in w&&t(0,i=w.id)},s.$$.update=()=>{s.$$.dirty&1&&(t(1,l=T[i]),t(2,f=Math.max(0,i-1)),t(3,b=Math.min(T.length-1,i+1))),s.$$.dirty&2&&l&&(W.set(`${Z.defaultTitle} | ${l.title}`),$.set([l.title,l.subtitle,l.description].filter(w=>w).join(" - ")))},[i,l,f,b]}class oe extends J{constructor(e){super(),K(this,e,te,ee,Q,{id:0})}}export{oe as default,fe as load};
