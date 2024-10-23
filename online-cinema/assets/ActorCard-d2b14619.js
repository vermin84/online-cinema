import{a,j as e,H as n,N as o}from"./index-cc644e96.js";import{u as d}from"./useFetchActorInfo-579ab26e.js";const p=a(o)`
  text-align: center;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  transition: 0.3s all;

  box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
    5px 5px 5px rgba(241, 241, 237, 0.1), 2px 10px 10px rgba(241, 241, 237, 0.1);
  &:hover {
    box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
      10px 10px 10px rgba(241, 241, 237, 0.1),
      15px 15px 30px rgba(241, 241, 237, 0.1);
    img {
      transform: scale(1.1);
    }
  }
`,c=a.div`
  overflow: hidden;
  display: flex;

  align-items: center;
  justify-content: center;
  @media (max-width: 770px) {
    //flex: 1 1 60%;
  }
`,m=a.img`
  max-width: 100%;
  transition: 0.3s;
  @media (max-width: 770px) {
    //object-fit: cover;
  }
  //max-height: 100%;
  //aspect-ration: 1 / 2;
`,l=a.span`
  font-size: 0.8rem;
  @media (max-width: 770px) {
    font-size: 0.6rem;
  }
`,h=a.div`
  text-align: center;
  padding: 0 1rem 2rem 1rem;
  @media (max-width: 770px) {
    padding: 0.2rem;
  }
`;function j({actor:t}){const s="https://image.tmdb.org/t/p/",{data:x,isLoading:i}=d(t.name),{actorDetails:r}=x||{actorDetails:null};if(i)return e.jsx("div",{children:"Loading..."});if(r.profile_path)return e.jsxs(p,{to:`/actor/${t.name}`,children:[e.jsx(n,{as:"h5",children:t.name}),!i&&e.jsx(c,{children:e.jsx(m,{src:`${s}w300${r.profile_path} `})}),t.character&&e.jsxs(h,{children:[e.jsx(l,{children:"as"}),e.jsx(n,{as:"h5",children:t.character})]})]})}export{j as A};
