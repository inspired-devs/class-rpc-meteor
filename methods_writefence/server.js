if (Meteor.isServer) {
  Meteor.methods({
    '/items/insert': function (doc) {
      var fence = DDPServer._CurrentWriteFence.get();
      var firstWrite = fence.beginWrite();

      setTimeout(function () {
        firstWrite.committed();
      }, 5000);

      return 'myDocId';
    }
  });
}
