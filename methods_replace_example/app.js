if (Meteor.isClient) {
  Meteor.connection.registerStore('items', {
    beginUpdate: function (batchSize, reset) {
      log('*********************', 'color: #ccc;');
      log('[items] beginUpdate', 'color: #999;');
    },

    update: function (msg) {
      log('[items] update: ' + JSON.stringify(msg), 'color: brown; font-weight: bold');
    },

    endUpdate: function () {
      log('[items] endUpdate', 'color: #999;');
      log('*********************', 'color: #ccc;');
    }
  });

  handle = Meteor.subscribe('items');
}

if (Meteor.isServer) {
  Items = new Meteor.Collection('items');

  Meteor.publish('items', function () {
    return Items.find();
  });
}
