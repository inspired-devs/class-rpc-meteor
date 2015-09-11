if (Meteor.isClient) {
  Items = {
    insert: function (doc) {
      doc._id = Random.id();
      Meteor.call('/items/insert', doc);
    }
  };

  Meteor.subscribe('items');
}
