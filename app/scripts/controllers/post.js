'use strict';

/**
 * @ngdoc function
 * @name offlineBlogApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the offlineBlogApp
 */
angular.module('offlineBlogApp')

  .controller('PostCtrl', function () {
    let imagePath = 'http://placehold.it/48x48';

    this.post = {
      id: 1,
      avatar : imagePath,
      title: 'Post #1',
      author_name: 'Author 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eos ab quaerat at quia tempore unde nulla autem ea, aspernatur! Earum illo deserunt aperiam, repellendus libero dolore quae debitis delectus.'
    };
  });
