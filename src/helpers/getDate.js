const getDate = async( movieId ) => {

	const apiUrl = `https://api.themoviedb.org/3/movie/${ movieId }/release_dates?api_key=e1517d664064d580fa4b5eac2ce23f57`;


	const resp = await fetch ( apiUrl );
	if( resp.status === 404 ){
		return 'Date not found...'
	}
	const { results } = await resp.json();
	const date = results[0].release_dates[0].release_date;

	const idx = date.indexOf( "-" );
	const dateCut = date.substring( 0, idx )

	return dateCut;
}

export default getDate;