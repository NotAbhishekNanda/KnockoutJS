var myValue = ko.observable(5); // Creates an observable with an initial value of 5

// Reading the value
console.log(myValue()); // Output: 5

// Updating the value
myValue(10);
console.log(myValue()); // Output: 10

// Subscribing to value changes
myValue.subscribe(function(newValue) {
  console.log('Value changed: ' + newValue);
});

// Changing the value will trigger the subscription callback
myValue(15); // Output: Value changed: 15
