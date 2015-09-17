'use strict';

/**
 * @ngdoc overview
 * @name offlineBlogApp
 * @description
 * # offlineBlogApp
 *
 * Main module of the application.
 */
angular
  .module('offlineBlogApp', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        templateUrl: "views/root.html"
      })
      .state('posts', {
        parent: 'root',
        url: "/posts",
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl as postsCtrl'
      })
      .state('post', {
        parent: 'root',
        url: "/posts/{post_id:int}",
        templateUrl: 'views/post.html',
        controller: 'PostCtrl as postCtrl'
      });

      $urlRouterProvider.otherwise('/posts');
  })

  .run(function offlineServiceWorker($window) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('offline-support.js', { scope: $window.location.pathname })
        .catch(function(e) {
          console.error('SW registration failed:', e);
        });
    } else {
      console.error('SW not supported');
    }
  });
