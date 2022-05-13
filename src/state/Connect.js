import Transfer from "./Transfer";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const Connect = {

    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return Transfer.get(url, params);
    },

    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return Transfer.get(url, params);
    },

    info: ( id, params) => {
        const url = '/' + id;
        console.log(url);
        return Transfer.get(url, params);
    },
}

export default Connect;