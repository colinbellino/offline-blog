'use strict';

/**
 * @ngdoc function
 * @name offlineBlogApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the offlineBlogApp
 */
angular.module('offlineBlogApp')

  .controller('PostCtrl', function ($rootScope, $state, $stateParams, Posts) {

    // attach the post and update the title
    var _initPost = function (post) {
      this.post = post;
      $rootScope.pageTitle = post.title;
    };

    // load the post
    Posts.one($stateParams.post_id).then(_initPost.bind(this))
    // or redirect to the posts
    .catch(function() {
      $state.go('posts');
    });
  });
