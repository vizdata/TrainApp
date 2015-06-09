var app = angular.module('chirpApp',['ngRoute', 'ngResource']);

app.factory('postService', function($resource){
  return $resource('/api/posts/:id');
});

app.controller('mainController', function($scope, $rootScope, postService){
  $scope.posts = postService.query();
  $scope.newPost = {created_by: '', text: '', created_at: ''};
/*
//used for basic read from json
  postService.getAll().success(function(data){
    $scope.posts = data;
  });
*/
  $scope.post = function() {
    $scope.newPost.created_by = $rootScope.current_user;
    $scope.newPost.created_at = Date.now();
    postService.save($scope.newPost, function(){
      $scope.posts = postService.query();
      $scope.newPost = {created_by: '', text: '', created_at: ''};
    });
  };
  $scope.delete = function(post)  {
    postService.delete({id: post._id});
    $scope.posts = postService.query();
  };
});

app.controller('authController', function($scope){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'login request for ' + $scope.user.username;
  };

  $scope.register = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'registeration request for ' + $scope.user.username;
  };
});