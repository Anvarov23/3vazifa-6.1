var journey = +prompt("Alisher aka, qancha pulingiz bor?");

var valueDol = 750;
var valueEuro = 120;
var uzToDol = 11000;
var uzToEuro = 11800;


var summDol = (valueDol * uzToDol);
var summEuro = (valueEuro * uzToEuro);
var totalMoney = (summDol + summEuro);

if (journey >= totalMoney) {
    console.log(`“Oq yo’l, Alisher aka!”`)
}
else {
    console.log(`“Alisher aka, ozgina sabr qilish kerak bo’lar ekan.”`)
}