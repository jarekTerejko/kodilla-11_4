function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}
console.log(Phone); 

var iPhone6S = new Phone('Apple', 2250, 'silver');
iPhone6S.printInfo(); // wywołanie metody przedstawiającej telefon dla utworzonego obiektu iPhone6s

iPhone6S.camera = '12Mpx'; // dodalem nowa wlasciwosc do obiektu iPhone6S
console.log(iPhone6S.camera); // nowa wlasciwosc faktycznie istnieje
console.log(iPhone6S); // nowa wlasciwosc faktycznie istnieje

iPhone6S.printInfo2 = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', price is ' + this.price + ' and the camera is ' + this.camera + '.'); // dodalem metode do iPhone6S
}
iPhone6S.printInfo2(); // metoda dziala

Phone.prototype.deviceType = 'smartphone'; // dodalem nowa wlasciwosc do klasy
console.log(iPhone6S.deviceType); // nowa wlasciwosc istnieje


var samsungGalaxyS6 = new Phone('Samsung', 2000, 'green');
samsungGalaxyS6.printInfo();
console.log(samsungGalaxyS6);
console.log(samsungGalaxyS6.deviceType); // nowa wlasciwosc istnieje tez dla samsunga

var onePlusOne = new Phone('OnePlus', 1000, 'grey');
onePlusOne.printInfo();
console.log(onePlusOne);
console.log(onePlusOne.deviceType); // nowa wlasciwosc istnieje tez dla oneplus one


