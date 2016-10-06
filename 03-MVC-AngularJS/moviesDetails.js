app.component('moviesChanges', {
  templateUrl: 'moviesChanges.html',
  controller: 'moviesCtrl',
  bindings: {
    movies: '=',
    onDelete: '&',
    onUpdate: '&'
  }
});