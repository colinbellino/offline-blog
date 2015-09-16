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
    var baseUrl = 'https://offline-blog.firebaseio.com';
    var extension = '.json';

    this.all = function() {
      let deferred = $q.defer();

      $http.get(`${baseUrl}/posts${extension}`).then(function(posts) {
        deferred.resolve(posts.data);
      })
      .catch(function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    };

    this.one = function(id) {
      let deferred = $q.defer();

      $http.get(`${baseUrl}/posts${extension}?id=${id}`).then(function(post) {
        deferred.resolve(post.data[0]);
      })
      .catch(function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    };
  });
