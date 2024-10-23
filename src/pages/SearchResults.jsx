import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { getMovies } from '../services/GenreService'
import GridContainer from '../ui/GridContainer'
import Loader from '../ui/Loader'
import MovieCard from '../ui/MovieCard'

function SearchResults() {
  const { results } = useParams()
  const { data, isLoading } = useQuery(['search all movie list', results], () =>
    getMovies(results)
  )
  if (isLoading) return <Loader />
  return (
    <GridContainer>
      {data.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  )
}

export default SearchResults
