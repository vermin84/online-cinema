import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import AppLayout from './ui/AppLayout'
import { lazy, Suspense } from 'react'
import Loader from './ui/loader'
const Home = lazy(() => import('./pages/Home'))
const FreshMovies = lazy(() => import('./pages/FershMovies'))
const Movie = lazy(() => import('./pages/Movie'))
const Trending = lazy(() => import('./pages/Trending'))
const Discovery = lazy(() => import('./pages/Discovery'))
const MainProvider = lazy(() => import('./services/MainProvider'))
const SearchResults = lazy(() => import('./pages/SearchResults'))
const Actor = lazy(() => import('./pages/Actor'))
const Genre = lazy(() => import('./pages/Genre'))
const NotFound = lazy(() => import('./pages/NotFound'))

//import Home from './pages/Home'
//import FreshMovies from './pages/FershMovies'
//import Movie from './pages/Movie'

//import Trending from './pages/Trending'
//import Discovery from './pages/Discovery'
//import MainProvider from './services/MainProvider'
//import SearchResults from './pages/SearchResults'
//import Actor from './pages/Actor'
//import Genre from './pages/Genre'
//import NotFound from './pages/NotFound'

function App() {
  return (
    <MainProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/fresh_movies" element={<FreshMovies />} />
              <Route
                path="/search_results/:results"
                element={<SearchResults />}
              />
              <Route path="/trending" element={<Trending />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/genre/:genreId" element={<Genre />} />
              <Route path="/actor/:actorName" element={<Actor />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App
