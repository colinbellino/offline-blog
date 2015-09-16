'use strict';

/**
 * @ngdoc service
 * @name offlineBlogApp.Posts
 * @description
 * # Posts
 * Service in the offlineBlogApp.
 */
angular.module('offlineBlogApp')
  .service('Posts', function ($q) {

    var posts = [
      {
        id: 1,
        avatar : 'http://placehold.it/48x48',
        title: 'Post #1',
        author_name: 'Author 1',
        content: '1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur soluta iure, veritatis debitis vel explicabo, nobis, quas possimus a ab veniam repellendus tenetur odio dolorum! Ipsam nemo enim veritatis voluptate!'
      },
      {
        id: 2,
        avatar : 'http://placehold.it/48x48',
        title: 'Post #2',
        author_name: 'Author 2',
        content: '2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates corrupti et magni sequi quam nulla, temporibus, eligendi tenetur, cum ipsam, porro consectetur rem officia laboriosam. Quis nam possimus magnam voluptates.'
      },
      {
        id: 3,
        avatar : 'http://placehold.it/48x48',
        title: 'Post #3',
        author_name: 'Author 3',
        content: '3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores itaque non in cumque quidem quod magni, ab tempora deleniti ipsa molestiae quibusdam eligendi magnam et quae, impedit esse excepturi beatae.'
      },
      {
        id: 4,
        avatar : 'http://placehold.it/48x48',
        title: 'Post #4',
        author_name: 'Author 4',
        content: '4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem expedita dolorem quisquam fuga, natus? Obcaecati, culpa ab iure maiores repellat incidunt dolorem vel quaerat? Culpa vero fugit ipsum, ad dolore.'
      }
    ];

    this.all = function() {
      return $q.when(posts);
    };

    this.one = function(id) {
      let deferred = $q.defer();

      posts.forEach(function(post) {
        if (post.id === id) {
          deferred.resolve(post);
        }
      });

      deferred.reject('Post not found');

      return deferred.promise;
    };
  });
