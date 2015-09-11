if (Meteor.isServer) {
  Meteor.methods({
    '/items/insert': function (doc) {

      return 'myDocId';
    }
  });
}
