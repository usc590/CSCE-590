angular.module('starter.services', [])

.factory('Menus', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var menus = [{
    id: 0,
    name: 'Chocolate',
    lastText: '$2',
    face: 'img/icecreamChocolate.jpg',
    description: 'famous Cholocate'
  }, {
    id: 1,
    name: 'Strawberry',
    lastText: '$2',
    face: 'img/icecreamStrawberry.jpg',
    description: 'famous Cholocate'
    
  }, {
    id: 2,
    name: 'Vanilla',
    lastText: '$2',
    face: 'img/icecreamVanilla.jpg',
    description: 'famous Cholocate'
  }];

  return {
    all: function() {
      return menus;
    },
    remove: function(menu) {
      menus.splice(menus.indexOf(menu), 1);
    },
    get: function(menuId) {
      for (var i = 0; i < menus.length; i++) {
        if (menus[i].id === parseInt(menuId)) {
          return menus[i];
        }
      }
      return null;
    }
  };
});

