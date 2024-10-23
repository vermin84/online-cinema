import{a,j as r,N as o}from"./index-cc644e96.js";const n=a(o)`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  transform: translateZ(0);
  border-radius: 0.8rem;
  box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
    5px 5px 5px rgba(241, 241, 237, 0.1), 2px 10px 10px rgba(241, 241, 237, 0.1);
  &:hover {
    transform: scale(1.05) translateZ(0);
    box-shadow: 0px 0px 0px rgba(241, 241, 237, 0),
      10px 10px 10px rgba(241, 241, 237, 0.1),
      15px 15px 30px rgba(241, 241, 237, 0.1);
  }
`,p=a.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  object-fit: cover;
  /*transition: transform 0.3s ease;*/
  will-change: transform;
  transform: translateZ(0);
  &:hover {
    transform: translateZ(0);
  }
`;function i({movie:t}){const s="https://image.tmdb.org/t/p/",e="w300";return r.jsx(n,{to:`/movie/${t.id}`,children:t.poster_path?r.jsx(p,{src:t.poster_path&&`${s}${e}${t.poster_path}`,alt:"poster"}):t.title})}export{i as M};
