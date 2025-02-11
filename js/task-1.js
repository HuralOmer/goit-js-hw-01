function makeTransaction(quantity, pricePerDroid) {
  if (quantity > 1) {
    console.log(
      "You ordered " + quantity + " droids worth " + pricePerDroid + "credits!"
    );
  } else {
    console.log(
      "You ordered " + quantity + " droid worth " + pricePerDroid + "credits!"
    );
  }
}
makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
makeTransaction(1, 100);