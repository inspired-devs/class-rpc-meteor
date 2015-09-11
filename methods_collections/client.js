if (Meteor.isClient) {
  Items = new Meteor.Collection('items');

  Meteor.subscribe('items');
}
