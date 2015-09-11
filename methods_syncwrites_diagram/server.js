if (Meteor.isServer) {
  // publish the items collection
  Meteor.publish('items', function () {
    return Items.find();
  });

  // The actual server side method
  Meteor.methods({
    '/items/insert': functino (doc) {
      // insert the document into MongoDb
      Items.insert(doc);

      // Return the id as the result
      return doc._id;
    }
  });
}
