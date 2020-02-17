const request = require('request');
function calculateAverageScore(reviews, movie, director, toBeChecked, movies) {
    toBeChecked.count--;
    aggregatedScore = 0;
    count = 0;
    reviews.forEach(review => {
        aggregatedScore += review.rating;
        count++;
    });
  
    movie.averageRating = aggregatedScore / count;
    if (toBeChecked.count === 0) {
        movies.sort((m1, m2) => m2.averageRating - m1.averageRating);
        console.log(`The best movie by ${director} is... ${movies[0].title} !!!`);
    }   
 }
 function getReviews(movies, director) {
    let toBeChecked = {count: movies.length};
    movies.forEach(movie => {
        request(`https://maciejtreder.github.io/asynchronous-javascript/movies/${movie.id}/reviews`, {json: true}, (err, res, reviews) => calculateAverageScore(reviews, movie, director, toBeChecked, movies));
    });
 }
 function findDirector(directors, name) {
    let directorId = directors.find(director => director.name === name).id;
 request(`https://maciejtreder.github.io/asynchronous-javascript/directors/${directorId}/movies`, {json: true}, (err, res, movies) => getReviews(movies, name));
 }
 request(`https://maciejtreder.github.io/asynchronous-javascript/directors`, {json: true}, (err, res, directors) => findDirector(directors, 'Quentin Tarantino'));
