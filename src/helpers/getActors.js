const apiKey = 'api_key=e1517d664064d580fa4b5eac2ce23f57&language=en-US';
const baseUrl = 'https://api.themoviedb.org/3/person/';

const getActors = async( select ) => {

  const apiUrl = baseUrl + select + apiKey;

  if( apiUrl === 'https://api.themoviedb.org/3/person/api_key=e1517d664064d580fa4b5eac2ce23f57&language=en-US' ){
    return [];
  } else {
    const resp = await fetch ( apiUrl );
    const { results } = await resp.json();

    const personArr = results.map( person => {
        return {
          id: person.id,
          knownFor: person.known_for,
          rol:person.known_for_department,
          title: person.name,
          voteAverage: person.popularity,
          voteCount: '',
          posterImg: `https://image.tmdb.org/t/p/w500/${ person.profile_path }`,
        }
    });
    return personArr;
  }

}

export default getActors;