'use strict';

/**
 * @ngdoc service
 * @name offlineBlogApp.Posts
 * @description
 * # Posts
 * Service in the offlineBlogApp.
 */
angular.module('offlineBlogApp')

  .service('Posts', function ($q, $http) {
    var baseUrl = './';
    var extension = '.json';

    // fetch all the posts
    this.all = function() {
      var deferred = $q.defer();
      var allPostsUrl = baseUrl + "posts" + extension;

      $http.get(allPostsUrl).then(function(posts) {
        deferred.resolve(posts.data);
      })
      .catch(function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    };

    // fetch one post
    this.one = function(id) {
      var deferred = $q.defer();

      this.all().then(function(posts) {
        posts.forEach(function(post) {
          if (post.id === id) {
            deferred.resolve(post);
          }
        });
      });

      return deferred.promise;
    };
  });
