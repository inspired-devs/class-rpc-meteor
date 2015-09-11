if (Meteor.isServer) {
  insertedDoc = null;

  insert = function (doc) {
    var fence = DDPServer._CurrentWriteFence.get();

    console.log('Begin insert: ' + JSON.stringify(doc));
    var write = fence.beginWrite();

    setTimeout(function () {
      console.log('Completed insert of: ' + JSON.stringify(doc));
      insertedDoc = doc;

      var crossbar = DDPServer._InvalidationCrossbar;
      crossbar.fire({collection: 'items', id: doc._id});

      write.committed();
    }, 5000);
  };

  Meteor.methods({
    '/items/insert': function (doc) {
      insert(doc);
      return doc._id;
    }
  });

  Meteor.publish('items', function () {
    var sub = this;
    var crossbar = DDPServer._InvalidationCrossbar;

    var listener = crossbar.listen({collection: 'items'}, function (notification) {
      console.log('Got a notification! ' + JSON.stringify(notification));
      sub.added('items', notification.id, insertedDoc);
    });

    sub.onStop(function () { listener.stop(); });
  });
}
