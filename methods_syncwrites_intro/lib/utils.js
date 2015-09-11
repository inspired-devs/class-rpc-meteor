makeId = function (collection) {
  var src = DDP.randomStream('/collection/' + collection);
  return src.id();
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    Items.remove({});
    Items.insert({title: 'one'});
    Items.insert({title: 'two'});
  });
}
