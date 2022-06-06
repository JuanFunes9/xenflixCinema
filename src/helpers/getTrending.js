


const getTrending = async( select ) => {

  const apiUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=e1517d664064d580fa4b5eac2ce23f57';

    const resp = await fetch ( apiUrl );
    const { results } = await resp.json();

  const trendingArr = results.map( movie => {
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
  return trendingArr;

  }

export default getTrending;