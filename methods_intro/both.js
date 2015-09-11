Meteor.methods({
  '/say/hello': function (name) {
    if (this.isSimulation) {
      console.log('Running the Meteor method stub on the client "simulation"');
      return;
    }

    return 'Hello, ' + name;
  }
});

if (Meteor.isClient) {
  Meteor.call('/say/hello', 'Chris', function (err, result) {
    console.log('Result from Server: ' + result);
  });
}
