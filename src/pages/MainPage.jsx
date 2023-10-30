import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getGenres } from '../app/actions/movieActions';
import Hero from '../components/Hero';
import ListMovie from '../components/ListMovie';

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  console.log(state);

  useEffect(() => {
    // capture popular movies and transfer them to the store
    dispatch(getMovies());
    // fetch category data and transfer it to the store
    dispatch(getGenres());
  }, []);

  return (
    <div>
      {/* Show popular movie */}
      <Hero />
      {/* list movies by categories */}
      {state.genres.map((genre) => (
        <ListMovie key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;