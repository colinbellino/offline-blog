'use strict';

/**
 * @ngdoc function
 * @name offlineBlogApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the offlineBlogApp
 */
angular.module('offlineBlogApp')

  .controller('PostsCtrl', function ($state) {
    let imagePath = 'http://placehold.it/48x48';

    this.posts = [
      {
        id: 1,
        avatar : imagePath,
        title: 'Post #1',
        author_name: 'Author 1'
      },
      {
        id: 2,
        avatar : imagePath,
        title: 'Post #1',
        author_name: 'Author 2'
      },
      {
        id: 3,
        avatar : imagePath,
        title: 'Post #1',
        author_name: 'Author 3'
      },
      {
        id: 4,
        avatar : imagePath,
        title: 'Post #1',
        author_name: 'Author 4'
      }
    ];

    this.goToPost = function (post) {
      $state.go('post', { post_id: post.id });
    };
  });
