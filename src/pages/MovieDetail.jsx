import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByUrl } from '../app/actions/movieActions';
import { baseImgUrl } from '../components/Hero';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    //get detail data of the movie movie/{movie_id}
    fetchByUrl(`/movie/${movieId}`).then((res) => setMovieDetail(res));
  }, []);

  console.log(movieDetail);

  if (movieDetail === null) return 'Loading...';

  return (
    <div className="movie-detail row bg-black text-light p-5">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img
          className="img-fluid detail-img"
          src={`${baseImgUrl}${movieDetail.poster_path}`}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center gap-4">
        <h1 class="text-light bg-dark">{movieDetail.title}</h1>
        <h4>{movieDetail.overview}</h4>
        <div className="row row-cols-2 ">
          <div >
            <h5>Cost: {movieDetail.budget}</h5>
            <h5>Revenues: {movieDetail.revenue}</h5>
            <h5>Profit: {movieDetail.revenue - movieDetail.budget} </h5>
          </div>
          <div>
            <div className="d-flex gap-2">
             <h5> Categories:</h5>
              {movieDetail.genres.map((genre) => (
                <p className="badge bg-secondary">{genre.name}</p>
              ))}
            </div>
            <div className="d-flex gap-2">
             <h5> Languages:</h5>
              {movieDetail.spoken_languages.map((lang) => (
                <p className="badge bg-danger">{lang.name}</p>
              ))}
            </div>
            <div className="d-flex flex-wrap gap-2 ">
            <h5>Producer:</h5>
              {movieDetail.production_companies.map((comp) => (
                <p className="badge bg-warning">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;