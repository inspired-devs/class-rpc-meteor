if (Meteor.isClient) {
  var doc = { title: 'One' };

  Meteor.apply('/items/insert', [doc], {
    onResultReceived: function (err, result) {
      console.log('Result: ' + result);
    }
  }, function (err, result) {
    console.log('We have a result AND updated data!');
  });
}
