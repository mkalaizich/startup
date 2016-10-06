app.component('moviesView', {
  templateUrl: 'moviesView.html',
  controller: 'moviesCtrl',
  bindings: {
    movies: '=',
    onDelete: '&',
    onUpdate: '&'
  }
});