'use strict';

describe('Service: Posts', function () {

  // load the service's module
  beforeEach(module('offlineBlogApp'));

  // instantiate service
  var Posts;
  beforeEach(inject(function (_posts_) {
    Posts = _Posts_;
  }));

  it('should do something', function () {
    expect(!!Posts).toBe(true);
  });

});
