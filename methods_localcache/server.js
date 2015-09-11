if (Meteor.isServer) {
  // Just use Meteor collections on the server
  // since we don't want to recreate the entire
  // server side of Mongo Livedata!
  // But on the client we won't use minimongo and
  // instead we'll build our own simple local cache so
  // you can see how it works.
  Items = new Meteor.Collection('items');

  delete Meteor.server.method_handlers['/items/insert'];
  Meteor.methods({
    '/items/insert': function (doc) {
      // Recreate the same id as the client did!
      var id = makeId('items');
      var fence = DDPServer._CurrentWriteFence.get();
      var write = fence.beginWrite();

      // insert into server MongoDb!
      // This will also trigger an observers to
      // send added messages for the new doc!
      // XXX Bring me back!
      doc._id = id;
      Items.insert(doc);

      setTimeout(function () {
        // send the "updated" message now!
        write.committed();
      }, 10000);

      // The "result" is the id of the
      // document!
      return id;
    }
  });

  Meteor.publish('items', function () {
    // this is how the client will get the
    // "added" message for the insert
    return Items.find();
  });
}
