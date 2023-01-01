const API_KEY = `********************************`;


//genres
/*
MOvies genres:
            "id": 28,
            "name": "Action"
            
            "id": 12,
            "name": "Adventure"

            "id": 16,
            "name": "Animation"

            "id": 35,
            "name": "Comedy"

            "id": 80,
            "name": "Crime"

            "id": 99,
            "name": "Documentary"

            "id": 18,
            "name": "Drama"

            "id": 10751,
            "name": "Family"

            "id": 14,
            "name": "Fantasy"

            "id": 36,
            "name": "History"

            "id": 27,
            "name": "Horror"

            "id": 10402,
            "name": "Music"

            "id": 9648,
            "name": "Mystery"

            "id": 10749,
            "name": "Romance"

            "id": 878,
            "name": "Science Fiction"

            "id": 10770,
            "name": "TV Movie"

            "id": 53,
            "name": "Thriller"

            "id": 10752,
            "name": "War"

            "id": 37,
            "name": "Western"
Tv Genres:
            "id": 10759,
            "name": "Action & Adventure"

            "id": 16,
            "name": "Animation"

            "id": 35,
            "name": "Comedy"

            "id": 80,
            "name": "Crime"

            "id": 99,
            "name": "Documentary"

            "id": 18,
            "name": "Drama"

            "id": 10751,
            "name": "Family"

            "id": 10762,
            "name": "Kids"

            "id": 9648,
            "name": "Mystery"

            "id": 10764,
            "name": "Reality"

            "id": 10765,
            "name": "Sci-Fi & Fantasy"
*/
const baseURL = `https://api.themoviedb.org/3`;
const base_img_URL = `https://image.tmdb.org/t/p/original`
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?with_genres=28&api_key=${API_KEY}`,
    fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${API_KEY}`,
    fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
    fetchDocumentaries: `/discover/movie?with_genres=99&api_key=${API_KEY}`,
    fetchAnimie: `/discover/movie?with_genres=16&api_key=${API_KEY}`,
}
export {requests, baseURL, base_img_URL};