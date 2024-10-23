import{u as x,b as f,a as i,j as e,H as h,L as j,r as v}from"./index-cc644e96.js";import{R as y}from"./react-paginate-e2da4a7f.js";import{G as L}from"./GridContainer-5335f2b8.js";import{M as C}from"./MovieCard-b38f470e.js";function M(){const{data:s,isLoading:t}=x({queryKey:["movie_latest"],queryFn:f});return{data:s,isLoading:t}}const b=i.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 1rem;
  @media (max-width: 770px) {
    gap: 1rem;
    padding: 1rem;
  }
`,O=i(y)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 770px) {
    gap: 0.6rem;
  }
  & li {
    font-size: 1rem;
    cursor: pointer;
    &.selected {
      color: red;
    }
    @media (max-width: 770px) {
      font-size: 0.6rem;
    }
  }
`;function R({currentItems:s}){return e.jsx(L,{children:s&&s.map(t=>e.jsx(C,{movie:t,children:t.title},t.title))})}function S(){const{data:s,isLoading:t}=M(),a=s;function o({itemsPerPage:n}){const[r,d]=v.useState(0),c=r+n,m=a.slice(r,c),l=Math.ceil(a.length/n),p=u=>{const g=u.selected*n%a.length;d(g)};return e.jsxs(e.Fragment,{children:[e.jsx(R,{currentItems:m}),e.jsx(O,{breakLabel:"...",nextLabel:"next >",onPageChange:p,pageRangeDisplayed:3,pageCount:l,previousLabel:"< previous",renderOnZeroPageCount:null})]})}return e.jsxs(b,{children:[e.jsx(h,{as:"h2",children:"Fresh movies"}),t?e.jsx(j,{}):e.jsx(o,{itemsPerPage:15})]})}export{S as default};
