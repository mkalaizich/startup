var movies = angular.module('movies');
 
movies.service('serviceMovie', [function ($window, $rootScope) {
    var movie = { };
    movie = [{
        'id': '1',
        'title': 'Lord of the Rings',
        'year': '2002',
        'description': 'While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays their ...'
    },{
        'id': '2',
        'title': 'Matrix',
        'year': '1990',
        'description': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    },{    
        'id': '3',
        'title': 'Interstellar',
        'year': '2014',
        'description': 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.'
    }];
    localStorage.setItem('movies', JSON.stringify(movie));

    this.addMovie = function (Movie) {  
        movies = JSON.parse(localStorage.getItem('movies'));
        movies.push(Movie);
        localStorage.setItem('movies', JSON.stringify(movies));
    }

    this.getAll = function () {
        return JSON.parse(localStorage.getItem('movies'));
    }
}])