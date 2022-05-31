const apiKey = 'api_key=e1517d664064d580fa4b5eac2ce23f57&language=en-US';
const baseUrl = 'https://api.themoviedb.org/3/tv/';

const getSeries = async( select ) => {

  const apiUrl = baseUrl + select + apiKey;

  if( apiUrl === 'https://api.themoviedb.org/3/tv/api_key=e1517d664064d580fa4b5eac2ce23f57&language=en-US' ){
    return [];
  } else {
    const resp = await fetch ( apiUrl );
    const { results } = await resp.json();

    const seriesArr = results.map( serie => {
        return {
          bannerImg: `https://image.tmdb.org/t/p/w500/${ serie.backdrop_path }`,
          genreId: serie.genre_ids,
          id: serie.id,
          title: serie.original_name,
          overview: serie.overview,
          posterImg: `https://image.tmdb.org/t/p/w500/${ serie.poster_path }`,
          voteAverage: serie.vote_average,
          voteCount: serie.vote_count
        }
    });
    return seriesArr;
  }

}

export default getSeries;