import{S as J,i as K,s as Q,e as h,t as U,c as m,a as _,h as q,d as r,b as o,g as x,G as w,j as C,k as z,m as A,M as V,n as X}from"../../chunks/index-e548be16.js";import{i as Y}from"../../chunks/images-02b07a79.js";function B(s){let e,t=s[1].title+"",l;return{c(){e=h("h1"),l=U(t),this.h()},l(i){e=m(i,"H1",{class:!0});var f=_(e);l=q(f,t),f.forEach(r),this.h()},h(){o(e,"class","svelte-wf4ecp")},m(i,f){x(i,e,f),w(e,l)},p(i,f){f&2&&t!==(t=i[1].title+"")&&C(l,t)},d(i){i&&r(e)}}}function H(s){let e,t=s[1].subtitle+"",l;return{c(){e=h("small"),l=U(t),this.h()},l(i){e=m(i,"SMALL",{class:!0});var f=_(e);l=q(f,t),f.forEach(r),this.h()},h(){o(e,"class","svelte-wf4ecp")},m(i,f){x(i,e,f),w(e,l)},p(i,f){f&2&&t!==(t=i[1].subtitle+"")&&C(l,t)},d(i){i&&r(e)}}}function O(s){let e,t=s[1].description+"",l;return{c(){e=h("p"),l=U(t)},l(i){e=m(i,"P",{});var f=_(e);l=q(f,t),f.forEach(r)},m(i,f){x(i,e,f),w(e,l)},p(i,f){f&2&&t!==(t=i[1].description+"")&&C(l,t)},d(i){i&&r(e)}}}function R(s){let e,t;return{c(){e=h("a"),this.h()},l(l){e=m(l,"A",{class:!0,href:!0,title:!0}),_(e).forEach(r),this.h()},h(){o(e,"class","previous svelte-wf4ecp"),o(e,"href",t="/art/"+s[2]),o(e,"title","previous")},m(l,i){x(l,e,i)},p(l,i){i&4&&t!==(t="/art/"+l[2])&&o(e,"href",t)},d(l){l&&r(e)}}}function T(s){let e,t;return{c(){e=h("a"),this.h()},l(l){e=m(l,"A",{class:!0,href:!0,title:!0}),_(e).forEach(r),this.h()},h(){o(e,"class","next svelte-wf4ecp"),o(e,"href",t="/art/"+s[3]),o(e,"title","next")},m(l,i){x(l,e,i)},p(l,i){i&8&&t!==(t="/art/"+l[3])&&o(e,"href",t)},d(l){l&&r(e)}}}function W(s){let e,t,l,i,f,b,g,L,M,E,k,y,S,I,n=s[1].title&&B(s),c=s[1].subtitle&&H(s),p=s[1].description&&O(s),v=s[2]!==s[0]&&R(s),u=s[3]!==s[0]&&T(s);return{c(){e=h("figure"),t=h("figcaption"),n&&n.c(),l=z(),c&&c.c(),i=z(),p&&p.c(),f=z(),b=h("div"),g=h("img"),M=z(),E=h("nav"),k=h("ul"),y=h("li"),v&&v.c(),S=z(),I=h("li"),u&&u.c(),this.h()},l(a){e=m(a,"FIGURE",{class:!0});var d=_(e);t=m(d,"FIGCAPTION",{class:!0});var j=_(t);n&&n.l(j),l=A(j),c&&c.l(j),i=A(j),p&&p.l(j),j.forEach(r),f=A(d),b=m(d,"DIV",{class:!0});var D=_(b);g=m(D,"IMG",{class:!0,src:!0,alt:!0}),D.forEach(r),d.forEach(r),M=A(a),E=m(a,"NAV",{class:!0});var F=_(E);k=m(F,"UL",{class:!0});var G=_(k);y=m(G,"LI",{class:!0});var N=_(y);v&&v.l(N),N.forEach(r),S=A(G),I=m(G,"LI",{class:!0});var P=_(I);u&&u.l(P),P.forEach(r),G.forEach(r),F.forEach(r),this.h()},h(){o(t,"class","svelte-wf4ecp"),o(g,"class","art-page-content svelte-wf4ecp"),V(g.src,L=s[1].source)||o(g,"src",L),o(g,"alt",""),o(b,"class","image-wrapper svelte-wf4ecp"),o(e,"class","art-page svelte-wf4ecp"),o(y,"class","svelte-wf4ecp"),o(I,"class","svelte-wf4ecp"),o(k,"class","svelte-wf4ecp"),o(E,"class","svelte-wf4ecp")},m(a,d){x(a,e,d),w(e,t),n&&n.m(t,null),w(t,l),c&&c.m(t,null),w(t,i),p&&p.m(t,null),w(e,f),w(e,b),w(b,g),x(a,M,d),x(a,E,d),w(E,k),w(k,y),v&&v.m(y,null),w(k,S),w(k,I),u&&u.m(I,null)},p(a,[d]){a[1].title?n?n.p(a,d):(n=B(a),n.c(),n.m(t,l)):n&&(n.d(1),n=null),a[1].subtitle?c?c.p(a,d):(c=H(a),c.c(),c.m(t,i)):c&&(c.d(1),c=null),a[1].description?p?p.p(a,d):(p=O(a),p.c(),p.m(t,null)):p&&(p.d(1),p=null),d&2&&!V(g.src,L=a[1].source)&&o(g,"src",L),a[2]!==a[0]?v?v.p(a,d):(v=R(a),v.c(),v.m(y,null)):v&&(v.d(1),v=null),a[3]!==a[0]?u?u.p(a,d):(u=T(a),u.c(),u.m(I,null)):u&&(u.d(1),u=null)},i:X,o:X,d(a){a&&r(e),n&&n.d(),c&&c.d(),p&&p.d(),a&&r(M),a&&r(E),v&&v.d(),u&&u.d()}}}function te({params:s}){return{props:{id:parseInt(s.id)}}}function Z(s,e,t){let{id:l=0}=e,i,f,b;return s.$$set=g=>{"id"in g&&t(0,l=g.id)},s.$$.update=()=>{s.$$.dirty&1&&(t(1,i=Y[l]),t(2,f=Math.max(0,l-1)),t(3,b=Math.min(Y.length-1,l+1)))},[l,i,f,b]}class le extends J{constructor(e){super(),K(this,e,Z,W,Q,{id:0})}}export{le as default,te as load};
