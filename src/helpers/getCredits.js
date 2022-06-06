
const getCredits = async( movieId ) => {

	const apiUrl = `https://api.themoviedb.org/3/movie/${ movieId }/credits?api_key=e1517d664064d580fa4b5eac2ce23f57&language=en-US`;

	try{
		const resp = await fetch ( apiUrl );
		if( resp.status === 404 ){
			return 'Cast not found...'
		}
		const { cast } = await resp.json();
		cast.splice( 9 );
		const castArr = cast.map( actor => actor.name );
		const castStr = castArr.toString().replace(/,/g, ", ");
		return castStr;
	}
	catch( error ) {
		console.log( 'Error: ' + error )
	}
}

export default getCredits;