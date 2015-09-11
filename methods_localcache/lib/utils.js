log = function (msg, style) {
  console.log('%c' + msg, style);
};

makeId = function (collection) {
  var src = DDP.randomStream('/collection/' + collection);
  return src.id();
};
