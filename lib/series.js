'use strict';

function Series(numbers){
  this.digits = numbers.split("").map(Number);

  this.slices = function(num){
    var parentArray = [];
    var number = num;

    if (num > this.digits.length){
      throw new Error('Slice size is too big.');
    }
    for (var i = 0; i < this.digits.length ; i++){
       if (number <= (this.digits.length)){

        var slice = this.digits.slice(i, number);
        parentArray.push(slice);
        number++;
    
      }
    }
    return parentArray;
}
};


    // some kind of iteration over this.digst, push in to the new child arrays
    // close that forEach
    // return parent array
    // this.digits.slice(1);
