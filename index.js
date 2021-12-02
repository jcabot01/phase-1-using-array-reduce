const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (accum, batch) {return batch + accum}, 0);



/*
## Lab: Use `reduce()` to Create a Single Aggregate of All Items in a List

Let's say we are hard at work in the battery factory. We've assembled several
batches of batteries today. Let's count how many assembled batteries we ended
up with.

* Create a new variable called `totalBatteries`, which holds the sum of all of
  the battery amounts in the `batteryBatches` array. (Note that the
  `batteryBatches` variable has been provided for you in `index.js`.) Naturally,
  you should use `reduce()` for this!

  describe('reducer', function() {
  describe('batteries', function() {
    it('should have a `totalBatteries` variable', function() {
      expect(totalBatteries).to.exist;
    });

    it('should have a number as a result', function() {
      expect(totalBatteries).to.be.a('number');
    });

    it('should have made the sum of all the assembled batteries', function() {
      expect(totalBatteries).to.eql(31);
    });
  });
});

*/