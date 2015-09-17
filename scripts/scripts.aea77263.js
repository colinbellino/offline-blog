"use strict";angular.module("offlineBlogApp",["ngAnimate","ngAria","ngMaterial","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("root",{"abstract":!0,templateUrl:"views/root.html"}).state("posts",{parent:"root",url:"/posts",templateUrl:"views/posts.html",controller:"PostsCtrl as postsCtrl"}).state("post",{parent:"root",url:"/posts/{post_id:int}",templateUrl:"views/post.html",controller:"PostCtrl as postCtrl"}),b.otherwise("/posts")}]).run(["$window",function(a){"serviceWorker"in navigator?navigator.serviceWorker.register("offline-support.js",{scope:a.location.pathname})["catch"](function(a){console.error("SW registration failed:",a)}):console.error("SW not supported")}]),angular.module("offlineBlogApp").controller("PostsCtrl",["$rootScope","$state","Posts",function(a,b,c){var d=function(b){this.posts=b,a.pageTitle="Posts"};this.goToPost=function(a){b.go("post",{post_id:a.id})},c.all().then(d.bind(this))}]),angular.module("offlineBlogApp").controller("PostCtrl",["$rootScope","$state","$stateParams","Posts",function(a,b,c,d){var e=function(b){this.post=b,a.pageTitle="Post by "+b.author_name};d.one(c.post_id).then(e.bind(this))["catch"](function(){b.go("posts")})}]),angular.module("offlineBlogApp").service("Posts",["$q","$http",function(a,b){var c="./",d=".json";this.all=function(){var e=a.defer(),f=c+"posts"+d;return b.get(f).then(function(a){e.resolve(a.data)})["catch"](function(a){e.reject(a)}),e.promise},this.one=function(b){var c=a.defer();return this.all().then(function(a){a.forEach(function(a){a.id===b&&c.resolve(a)})}),c.promise}}]),angular.module("offlineBlogApp").run(["$templateCache",function(a){a.put("views/post.html",'<img ng-src="{{ ::postCtrl.post.avatar }}" alt="{{ ::postCtrl.post.author_name }}"> <md-list ng-show="postCtrl.post"> <md-list-item class="md-3-line"> <div class="md-list-item-text"> <h3>{{ ::postCtrl.post.author_name }}</h3> <p>{{ ::postCtrl.post.title }}</p> </div> </md-list-item> </md-list> <md-content layout-padding>{{ ::postCtrl.post.content }}</md-content>'),a.put("views/posts.html",'<!-- TODO: make this work --><!-- <md-subheader class="md-primary">{{ ::\'September 2015\' }}</md-subheader> --> <md-list> <md-list-item ng-repeat="post in postsCtrl.posts" ng-click="postsCtrl.goToPost(post, $event)" class="md-3-line"> <img ng-src="{{ ::post.avatar }}" alt="{{ ::post.author_name }}" class="md-avatar"> <div class="md-list-item-text"> <h3>{{ ::post.author_name }}</h3> <p>{{ ::post.title }}</p> </div> </md-list-item> </md-list>'),a.put("views/root.html",'<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-sm\')"> <md-toolbar class="md-whiteframe-z1"> <div class="md-toolbar-tools"> <h2> <span>{{ ::\'Offline blog\' }}</span> </h2> </div> </md-toolbar> </md-sidenav> <div flex layout="column" tabindex="-1" role="main" class="md-whiteframe-z2"> <md-toolbar class="md-whiteframe-z1"> <div class="md-toolbar-tools"> <!-- TODO: i18n --> <md-button ui-sref="posts" class="md-icon-button" aria-label="{{ ::\'Settings\' }}"> <md-icon md-svg-icon="images/menu.svg"></md-icon> </md-button> <h2> <span ng-bind="pageTitle"></span> </h2> <span flex></span> </div> </md-toolbar> <md-content ui-view flex md-scroll-y style="height: 600px"></md-content> </div>')}]);