let aplic = angular.module('aplic', []);

aplic.controller('moviesCtrl', function($scope, $http) {

    let newMovie;
    let myFavMovies = ['Gladiator',  'The Lion King', 'The Terminator'];
    
    $scope.movies = [];
    
    for (let i = 0; i < myFavMovies.length ; i++) {
            
        let url = 'http://www.omdbapi.com/?t=' + myFavMovies[i].replace(/ /g, "+") + '&y=&plot=short&r=json';

        $http.get(url).then(function(response) {
                
            newMovie = {
                title: response.data.Title,
                year: response.data.Year,
                plot: response.data.Plot,
            };
            $scope.movies.push({ title: newMovie.title, year: newMovie.year, plot: newMovie.plot });
            localStorage.setItem(newMovie.title, JSON.stringify({ title: newMovie.title, year: newMovie.year, plot: newMovie.plot }));
        });
    }
})