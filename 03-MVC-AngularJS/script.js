let app = angular.module('app', []);

app.service('services', function(){

    this.getIndex = function (title, target) {
        for (let i = 0; i < target.length; i++){

            if (target[i].title == title){

                return index = i;
                break;
            }
        }
    }

    this.store = function (newMovie) {

        localStorage.setItem(newMovie.title, JSON.stringify({ title: newMovie.title, year: newMovie.year, plot: newMovie.plot }));
    }

    this.saveMovie = function (response) {

        return newMovie = {
                    title: response.data.Title,
                    year: response.data.Year,
                    plot: response.data.Plot,
                };
    }
});

app.controller('moviesController', function($scope, $http, services) {

    let newMovie;
    let myFavMovies = ['Gladiator', 'The Lion King', 'The Terminator'];
    $scope.movies = [];
    
    if (localStorage.length == 0) {
        for (let i = 0; i < myFavMovies.length ; i++) {
            
            let url = 'http://www.omdbapi.com/?t=' + myFavMovies[i].replace(/ /g, "+") + '&y=&plot=short&r=json';

            $http.get(url).then(function(response) {
                
                newMovie = services.saveMovie(response);
                $scope.movies.push({ title: newMovie.title, year: newMovie.year, plot: newMovie.plot });
                services.store(newMovie);
            });
        }
    } else {

        for (let i = 0; i < localStorage.length; i++) {

            let storedMovie = JSON.parse(localStorage.getItem(localStorage.key( i )));
            $scope.movies.push({ title: storedMovie.title, year: storedMovie.year, plot: storedMovie.plot });
        }
    }
});

app.controller('changesController', function($scope, $http, services) {
  
    $scope.add = function () {

        if ($scope.title != ''){

            let newMovie = {};
            let url = 'http://www.omdbapi.com/?t=' + $scope.title.replace(/ /g, "+") + '&y=' + $scope.year + '&plot=short&r=json';
            
            $http.get(url).then(function(response) {
                
                if (response.data.Response == 'True') {
                    
                    newMovie = services.saveMovie(response);
                    $scope.movies.push({ title: newMovie.title, year: newMovie.year, plot: newMovie.plot });
                    services.store(newMovie);
                }
            });

            $scope.title='';
            $scope.year='';
        }
    }

    $scope.remove = function () {

        let index = -1;

        index = services.getIndex($scope.toremove, $scope.movies);
        
        if(index >= 0) {

            $scope.movies.splice(index, 1);
            localStorage.removeItem($scope.toremove);
        }

        $scope.toremove = null;
    }

    $scope.editmovie = function () {

        let index = -1;

        index = services.getIndex($scope.toremove, $scope.movies);
        $scope.movies[index].plot = $scope.editplot;
        services.store($scope.movies[index]);
        $scope.toremove = null;
        $scope.editplot = '';
    }
});