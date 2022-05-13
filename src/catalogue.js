import { format } from 'date-fns';

const API_KEY = "e32f13651196ec17089277883e4ebede";


const curr_date = format(new Date(), 'yyyy-MM-dd');
// getting the current date formatted -> success
// primary_release_date.gte=${curr_date}

// list/5905?api_key=


const requests = {
  fetchComingSoon: `/movie/upcoming?api_key=${API_KEY}&primary_release_date.gte=${curr_date}&sort_by=popularity.desc`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&primary_release_date.gte=2022-02-15&primary_release_date.lte=2022-04-30`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&with_genres=80`,
  fetchOldies: `discover/movie?api_key=${API_KEY}&primary_release_date.gte=1930-01-01&primary_release_date.lte=1960-01-01&with_genres=9648&region=US`,
  fetchTubi: `company/153734/movies?api_key=${API_KEY}`,
  fetchCrime: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=80`,
  fetchThriller: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=53&vote_count.gte=11000`,
  fetchSci: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=878`,
  fetchComedy: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
  fetchWest: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=37`,
  fetchDrama: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=18`,
  fetchHorror: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=27`,
  fetchDoc: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&with_genres=99`,
  fetchDisney: `discover/movie?api_key=${API_KEY}&page=1&with_companies=2`,

  //series divide here
  fetchMixSeries: `/tv/top_rated?api_key=${API_KEY}&with_original_language=en`,
  fetchComedySeries: `/tv/popular?api_key=${API_KEY}&with_genres=35`,
  fetchPopularSeries: `/tv/popular?api_key=${API_KEY}&vote_count.gte=5000&vote_average.gte=8.0`,
  fetchCrimeSeries: `tv/popular?api_key=${API_KEY}&with_original_language=en&with_genres=80|10759`,
  fetchDramaSeries: `tv/popular?api_key=${API_KEY}&with_original_language=en&page=1&with_genres=18&page=2`,
  fetchMysterySeries: `tv/popular?api_key=${API_KEY}&with_original_language=en&page=1&with_genres=9648`,
  fetchSciSeries: `tv/popular?api_key=${API_KEY}&with_original_language=en&page=1&with_genres=10765`,
  fetchRealitySeries: `tv/popular?api_key=${API_KEY}&with_original_language=en&page=1&with_genres=10764`,
  fetchWesternSeries: `tv/popular?api_key=${API_KEY}&with_original_language=en&page=1&with_genres=37`,

  // layout divide here 

  fetchLayoutMovie1: `/movie/popular/?api_key=${API_KEY}&adult=false&language=en-US`,

  //image only
  fetchImage: `https://www.themoviedb.org/t/p/original`,

  // for the layout page
  fetchLayoutMovie: `/movie/popular/?api_key=${API_KEY}&adult=false&language=en-US`,
  fetchLayoutProduction:`discover/movie/?api_key=${API_KEY}&language=en-US`,
  fetchLayoutTV: `/tv/popular/?api_key=${API_KEY}&adult=false&language=en-US` ,
};


//fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&primary_release_date.gte=2022-02-15&primary_release_date.lte=2022-04-30`,
export default requests;
