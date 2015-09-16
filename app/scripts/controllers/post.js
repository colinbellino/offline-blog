'use strict';

/**
 * @ngdoc function
 * @name offlineBlogApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the offlineBlogApp
 */
angular.module('offlineBlogApp')

  .controller('PostCtrl', function ($state, $stateParams, Posts) {
    // load the post
    Posts.one($stateParams.post_id).then(function(post) {
      this.post = post;
    }.bind(this))
    // or redirect to the posts
    .catch(function() {
      $state.go('posts');
    });
  });
