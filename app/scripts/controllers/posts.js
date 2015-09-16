'use strict';

/**
 * @ngdoc function
 * @name offlineBlogApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the offlineBlogApp
 */
angular.module('offlineBlogApp')

  .controller('PostsCtrl', function ($state, Posts) {

    // load the posts
    Posts.all().then(function(posts) {
      this.posts = posts;
    }.bind(this));

    // redirect to a specific post
    this.goToPost = function (post) {
      $state.go('post', { post_id: post.id });
    };
  });
