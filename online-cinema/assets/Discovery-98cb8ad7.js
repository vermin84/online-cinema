import{u as n,m as s,a as o,j as a,H as i,N as x}from"./index-cc644e96.js";import{u as d}from"./usePopularGenre-875499e3.js";import{G as p}from"./GridContainer-5335f2b8.js";function m(r){const{data:e,isloading:t}=n({queryKey:["genre_photo",r],queryFn:()=>s(r)});return{data:e,isloading:t}}const u=o(x)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease;
  transform: translateZ(0);
  border-radius: 0.8rem;
  text-align: center;
  box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
    5px 5px 5px rgba(241, 241, 237, 0.1), 2px 10px 10px rgba(241, 241, 237, 0.1);
  &:hover {
    transform: scale(1.05) translateZ(0);
    box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
      10px 10px 10px rgba(241, 241, 237, 0.1),
      15px 15px 30px rgba(241, 241, 237, 0.1);
  }

  img {
    width: 100%;
  }
`;function c({genre:r}){const{data:e}=m(r.id);return a.jsxs(u,{to:`/genre/${r.id}`,children:[a.jsx("img",{src:e}),a.jsx(i,{as:"h5",children:r.name})]})}function b(){const{data:r,isLoading:e}=d();return a.jsx("div",{children:e?"Loading":a.jsx(p,{children:r.map(t=>a.jsx(c,{genre:t},t.name))})})}export{b as default};
