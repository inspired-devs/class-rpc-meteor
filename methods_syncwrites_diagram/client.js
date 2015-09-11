if (Meteor.isClient) {
  // subscribe to the items collection so
  // we get notified of adds, changes and
  // removes.
  Meteor.subscribe('items');

  // Meteor method stub
  Meteor.methods({
    '/items/insert': function (doc) {
      // insert into local cache, saving away the 
      // original values until we hear back 
      // from the server.
      Items._collection.insert(doc);
    }
  });

  Items.insert({title: 'one'});
}
