const api_key= `354661bc062517d32ff672271f9fd9fe`

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&language=en-US&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
    imageFetch: `https://image.tmdb.org/t/p/original/`
}

export default requests