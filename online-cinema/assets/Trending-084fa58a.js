import{u as c,i as m,l as g,a as l,j as r,H as e,L as n}from"./index-cc644e96.js";import{A as x}from"./ActorCard-d2b14619.js";import{G as t}from"./GridContainer-5335f2b8.js";import{M as j}from"./MovieCard-b38f470e.js";import"./useFetchActorInfo-579ab26e.js";function h(){const{data:a,isLoading:s}=c({queryKey:["popular_actors"],queryFn:m});return{data:a,isLoading:s}}function y(){const{data:a,isLoading:s}=c({queryKey:["popular_movies"],queryFn:g});return{data:a,isLoading:s}}const d=l.div`
  display: grid;
  gap: 3rem;
`,u=l.div`
  display: grid;
  gap: 2rem;
`;function q(){const{data:a,isLoading:s}=y(),{data:p,isLoading:o}=h();return s&&o?r.jsx(d,{children:"Loading..."}):r.jsxs(d,{children:[r.jsx(e,{as:"h2",children:"Trending"}),s?r.jsx(n,{}):r.jsxs(u,{children:[r.jsx(e,{as:"h3",children:"Popular movies"}),r.jsx(t,{children:a.map(i=>r.jsx(j,{movie:i},i.title))})]}),o?r.jsx(n,{}):r.jsxs(u,{children:[r.jsx(e,{as:"h3",children:"Popular actors"}),r.jsx(t,{children:p.map(i=>r.jsx(x,{actor:i},i.name))})]})]})}export{q as default};
