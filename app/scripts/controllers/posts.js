'use strict';

/**
 * @ngdoc function
 * @name offlineBlogApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the offlineBlogApp
 */
angular.module('offlineBlogApp')

  .controller('PostsCtrl', function ($rootScope, $state, Posts) {

    // attach the posts and update the title
    var _initPosts = function (posts) {
      this.posts = posts;
      $rootScope.pageTitle = 'Posts';
    };

    // redirect to a specific post
    this.goToPost = function (post) {
      $state.go('post', { post_id: post.id });
    };

    // load the posts
    Posts.all().then(_initPosts.bind(this));
  });
