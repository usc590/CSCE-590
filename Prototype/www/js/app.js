// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
      .state('tab.additem', {
      url: '/additem',
      views: {
        'tab-items': {
          templateUrl: 'templates/additem.html',
          controller: 'AddItempCtrl'
        }
      }
    })

  .state('tab.menus', {
      url: '/menus',
      views: {
        'tab-menus': {
          templateUrl: 'templates/tab-menus.html',
          controller: 'MenusCtrl'
        }
      }
    })
    .state('tab.menu-detail', {
      url: '/menus/:menuId',
      views: {
        'tab-menus': {
          templateUrl: 'templates/menu-detail.html',
          controller: 'MenuDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

      .state('tab.location', {
      url: '/location',
      views: {
        'tab-location': {
          templateUrl: 'templates/tab-location.html',
          controller: 'LocationCtrl'
        }
      }
    })

          .state('tab.order', {
      url: '/tab-order',
      views: {
        'tab-menus': {
          templateUrl: 'templates/tab-order.html',
          controller: 'OrderCtrl'
        }
      }
    })



;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/account');

});
