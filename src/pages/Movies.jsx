// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import MovieList from "components/MovieList/MovieList";
import { getMovies } from "services/api";
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from "react-router-dom";

const Movies = () => {

  // const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    };

    setIsLoading(true);

    getMovies(query)
      .then(data => {
        if (data.results.length === 0) {
           Notiflix.Notify.failure('There are no movies...');
        }
        
        setMovies(data.results)
      })
      .catch(error => setError(error))
      .finally(() => { setIsLoading(false) })
  }, [query]);

  const handleFormSubmit = (searchQuery) => {
    setSearchParams({query: searchQuery})
    // setSearchQuery(searchQuery);
    // setMovies([]);
  };

  return (
    <>
      <SearchForm
        onSubmit={handleFormSubmit} />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;