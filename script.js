const numberOfFlims = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFlims,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};