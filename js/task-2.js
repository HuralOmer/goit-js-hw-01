function getShippingMessage(country,price,deliveryFee){
let totaalPrice=price+deliveryFee
console.log("Shipping to "+ country+" will cost "+totaalPrice+" credits")
}

getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);