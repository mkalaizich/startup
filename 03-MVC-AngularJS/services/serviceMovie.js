var movies = angular.module('movies');
 
movies.service('serviceMovie', [ function () {
    var moviesList = { };
    
    if (localStorage.getItem('movies') === null) {        
        moviesList = [{
            'id': 1,
            'title': 'Lord of the Rings',
            'year': 2002,
            'description': 'While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays their ...'
        },{
            'id': 2,
            'title': 'Matrix',
            'year': 1990,
            'description': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
        },{    
            'id': 3,
            'title': 'Interstellar',
            'year': 2014,
            'description': 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.'
        }];

        localStorage.setItem('movies', JSON.stringify(moviesList));
    }

    this.addMovie = function (Movie) {
        let moviesList = this.getAll();

        if (Movie.id === undefined) {
            Movie.id = moviesList.length + 1;

            moviesList.push(Movie);
            localStorage.setItem('movies', JSON.stringify(moviesList));
        } else {
            for (let i in moviesList) {
                if (moviesList[i].id == Movie.id) {                    
                    moviesList[i] = Movie;

                    localStorage.setItem('movies', JSON.stringify(moviesList));                   
                }
            }
        }        
    }

    this.deleteMovie = function (movieId) {
        let moviesList = this.getAll();

        for (let i in moviesList) {
            if (moviesList[i].id == movieId) {                
                moviesList.splice(i,1);
            }
        }

        localStorage.setItem('movies', JSON.stringify(moviesList));
    }

    this.getMovie = function (movieId) {
        let moviesList = this.getAll();

        for (let i in moviesList) {
            if (moviesList[i].id == movieId) {
                return moviesList[i];
            }
        }
    }

    this.getAll = function () {
        return JSON.parse(localStorage.getItem('movies'));
    }

}]);