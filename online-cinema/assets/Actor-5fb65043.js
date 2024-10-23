import{a as i,h as v,j as e,H as b,r as S}from"./index-cc644e96.js";import{R as w}from"./react-paginate-e2da4a7f.js";import{u as C}from"./useFetchActorInfo-579ab26e.js";import{M as I}from"./MovieCard-b38f470e.js";const L=i.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,M=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
`,O=i.div`
  position: relative;
  padding-bottom: 40%;

  aspect-ratio: 1/1.5;
  flex: 1 0 25%;
  align-self: start;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1150px) {
    align-self: center;
    width: 70%;
  }
`,P=i.p`
  font-size: 1.2rem;
  line-height: 1.6;
`,R=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
`,A=i(w)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  & li {
    font-size: 1rem;
    cursor: pointer;
    &.selected {
      color: red;
    }
  }
`;function E(){const l="https://image.tmdb.org/t/p/",{actorName:a}=v(),{data:c,isLoading:d}=C(a),{actorDetails:o,actorMovies:r}=c||{actorDetails:null,actorMovies:null};if(console.log(r),d)return e.jsx("div",{children:"Loading..."});function p({currentItems:t}){return e.jsx(R,{children:t&&t.map(n=>e.jsx(I,{movie:n,children:n.title},n.title))})}const s=r.flat(0);function m({itemsPerPage:t}){const[n,f]=S.useState(0),g=n+t,x=s.slice(n,g),u=Math.ceil(s.length/t),h=j=>{const y=j.selected*t%s.length;f(y)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{currentItems:x}),e.jsx(A,{breakLabel:"...",nextLabel:"next >",onPageChange:h,pageRangeDisplayed:3,pageCount:u,previousLabel:"< previous",renderOnZeroPageCount:null})]})}return e.jsxs(L,{children:[e.jsx(b,{as:"h2",children:a}),e.jsxs(M,{children:[e.jsx(O,{children:e.jsx("img",{src:`${l}w400${o.profile_path}`})}),e.jsx(P,{children:o.biography})]}),e.jsx(m,{itemsPerPage:20})]})}export{E as default};
