angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('Trips', function() {
  // Might use a resource here that returns a JSON array
  var gUser=null;
  // Some fake testing data
  var trips = [{
    id: 0,
    fromcity: 'AAA',
    tocity: 'BBB',
    date: '2016-5-15'
  }];

  var searchtrips=[];

  console.log("initializing app...");

var APPLICATION_ID = '2E94722A-9FAE-7491-FFDE-CCD2B6392800',
    SECRET_KEY = 'A258804C-1B72-CD8F-FFF6-FB842EFA9800',
    VERSION = 'v1'; //default application version;
 
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);



  return {
    all: function() {

      var triplist = Backendless.Persistence.of
  ( Trip ).find();
  console.log(Backendless);
  console.log(triplist.data.length+ "found");
    trips = triplist.data;
  

      return trips;
    },

    search:function(parameter){
       console.log("searching..."+parameter);
       var dataQuery = new Backendless.DataQuery();
      dataQuery.condition = sprintf("fromcity='%s'",parameter);
      mytrips = Backendless.Persistence.of(Trip).find(dataQuery);
      searchtrips = mytrips.data;
      console.log(searchtrips.length +" found");

    },
    remove: function(trip) {
      //trips.splice(trips.indexOf(trip), 1);
      console.log('"'+"fromcity='"+trip.fromcity+"'"+'"'+trip.objectId);
      // var contactStorage = Backendless.Persistence.of( Trip );
      var dataQuery = {
         // condition: "fromcity = '"+trip.fromcity+"'\""
         // condition:"fromcity='n'"
         // condition:sprintf("objectId='%s'",trip.objectId)
         condition:"fromcity='NYC'"
         // condition:'"'+"fromcity='"+trip.fromcity+"'"+'"'

      };
      // var myContact = contactStorage.find( dataQuery );
      // console.log(myContact.data.length);
      // contactStorage.remove( myContact.data[0] );

      var dataQuery = new Backendless.DataQuery();
      dataQuery.condition = sprintf("objectId='%s'",trip.objectId);
      mytrips = Backendless.Persistence.of(Trip).find(dataQuery);
      console.log(mytrips.data.length +" found");
      Backendless.Persistence.of(Trip).remove(mytrips.data[0]);

      var i = trips.indexOf(trip);
      if(i>-1){
        trips.splice(i, 1);
      }

    },
    addtrip:function(from,to,date){
      trips.push({
        id:trips.length,
        fromcity:from,
        tocity:to,
        date:date
      })
      //SAVE trips to localStorage

    },
    get: function(tripId) {
      console.log(tripId);
      for (var i = 0; i < trips.length; i++) {
        if (trips[i].objectId == tripId) {
          return trips[i];
        }
      }
      return null;
    }
  };
})
;


function sprintf() {
    var args = arguments,
    string = args[0],
    i = 1;
    return string.replace(/%((%)|s|d)/g, function (m) {
        // m is the matched format, e.g. %s, %d
        var val = null;
        if (m[2]) {
            val = m[2];
        } else {
            val = args[i];
            // A switch statement so that the formatter can be extended. Default is %s
            switch (m) {
                case '%d':
                    val = parseFloat(val);
                    if (isNaN(val)) {
                        val = 0;
                    }
                    break;
            }
            i++;
        }
        return val;
    });
}