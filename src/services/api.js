const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1b503a470f760c92c3c57decdfe60ef0';

//список найпопулярніших фільмів на сьогодні

export const getTrendingMovies = () => {
    return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }

                return Promise.reject(new Error('Oops... Something went wrong'))
            })
};

//пошук фільму за ключовим словом

export const getMovies = (searchQuery) => {
    return fetch(`${BASE_URL}search/movie?query=${searchQuery}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }

            return Promise.reject(new Error('Oops... Something went wrong'))
        })
};

//запит повної інформації про фільм

//запит інформації про акторський склад

//запит оглядів