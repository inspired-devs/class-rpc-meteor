if (Meteor.isServer) {
  Items = new Meteor.Collection('items');

  Meteor.publish('items', function () {
    return Items.find();
  });
}
