function makeTransaction(quantity, pricePerDroid) {
  let totalPrice = quantity * pricePerDroid;
  if (quantity > 1) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else {
    return `You ordered ${quantity} droid worth ${totalPrice} credits!`;
  }
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
