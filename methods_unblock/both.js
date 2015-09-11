if (Meteor.isClient) {
  Meteor.call('first');
  Meteor.call('second');
}

if (Meteor.isServer) {
  var Future = Npm.require('fibers/future');

  var sleep = function (ms) {
    var future = new Future;
    setTimeout(function () {
      future.return();
    }, ms);
    return future.wait();
  };

  Meteor.methods({
    first: function () {
      console.log("I'm inside the first method!");
      this.unblock();
      sleep(5000);
    },

    second: function () {
      console.log("I'm inside the second method!");
    }
  });
}
