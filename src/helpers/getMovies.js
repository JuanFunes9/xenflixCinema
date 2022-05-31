const apiKey = 'api_key=e1517d664064d580fa4b5eac2ce23f57&language=en-US';
const baseUrl = 'https://api.themoviedb.org/3/movie/';

const getMovies = async( select ) => {

  const apiUrl = baseUrl + select + apiKey;

  if( apiUrl === 'https://api.themoviedb.org/3/movie/api_key=e1517d664064d580fa4b5eac2ce23f57&language=en-US' ){
    return [];
  } else {
    const resp = await fetch ( apiUrl );
    const { results } = await resp.json();

    const moviesArr = results.map( movie => {
        return {
          bannerImg: `https://image.tmdb.org/t/p/w500/${ movie.backdrop_path }`,
          genreId: movie.genre_ids,
          id: movie.id,
          title: movie.original_title,
          overview: movie.overview,
          posterImg: `https://image.tmdb.org/t/p/w500/${ movie.poster_path }`,
          voteAverage: movie.vote_average,
          voteCount: movie.vote_count
        }
    });
    return moviesArr;
  }

}

export default getMovies;