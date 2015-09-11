Items = new Meteor.Collection('items');

if (Meteor.isClient) {
  Template.Items.helpers({
    items: function () {
      return Items.find();
    }
  });

  Meteor.subscribe('items');
}

if (Meteor.isServer) {
  Meteor.publish('items', function () {
    return Items.find();
  });

  delete Meteor.server.method_handlers['/items/insert'];
  Meteor.methods({
    '/items/insert': function (doc) {
      var id = makeId('items');
      var fence = DDPServer._CurrentWriteFence.get();
      var write = fence.beginWrite();

      doc._id = id;
      doc.title = doc.title + ' (s)';

      // added message to the client
      Items.insert(doc);

      setTimeout(function () {
        // send update message to client
        write.committed();
      }, 10000);

      return id;
    }
  });
}
