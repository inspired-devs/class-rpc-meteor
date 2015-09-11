if (Meteor.isClient) {
  Meteor.subscribe('items');

  localCache = {
    docs: {},

    insert: function (id, doc) {
      this.saveOriginal(id, undefined);
      this.docs[id] = doc;
      return id;
    },

    update: function (id, doc) {
      if (this.docs[id]) {
        this.saveOriginal(id, this.docs[id]);
        this.docs[id] = doc;
        return 1;
      }
    },

    remove: function (id) {
      if (this.docs[id]) {
        this.saveOriginal(id, this.docs[id]);
        delete this.docs[id];
        return 1;
      }
    },

    saveOriginal: function (id, doc) {
      if (!this._savedOriginals)
        return;

      if (this._savedOriginals.has(id))
        return;

      this._savedOriginals.set(id, doc);
    },

    saveOriginals: function () {
      this._savedOriginals = new LocalCollection._IdMap;
    },

    retrieveOriginals: function () {
      var originals = this._savedOriginals;
      this._savedOriginals = null;
      return originals;
    }
  };

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
    },

    saveOriginals: function () {
      log('***************************', 'color: green;');
      log('So you want me to save any original docs eh?', 'color: green;');
      localCache.saveOriginals();
    },

    retrieveOriginals: function () {
      log('And now you want me to give you what I saved? Okay.', 'color: green;');
      log('***************************', 'color: green;');
      return localCache.retrieveOriginals();
    }
  });

  Meteor.methods({
    '/items/insert': function (doc) {
      var id = makeId('items');
      localCache.insert(id, doc);
      log("Okay, now I'm in the method stub body!", "color: brown;");
    }
  });

  Items = {};
  Items.insert = function (doc) {
    Meteor.call('/items/insert', doc);
    debugger;
  };
}
