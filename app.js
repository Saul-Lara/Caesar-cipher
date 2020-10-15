import caesarCipher from "./cesar.js";

document.addEventListener("DOMContentLoaded", function () {
	var btn_cipher = document.getElementById("btn_cipher");
	var btn_decipher = document.getElementById("btn_decipher");

	btn_cipher.addEventListener("click", function () {
		var valueA = document.getElementById("valueA").value;
		var valueB = document.getElementById("valueB").value;
		console.log(valueA, valueB);
	});

	btn_decipher.addEventListener("click", function () {
		console.log("hola 2");
	});
});

/*
var a = 1;
var b = 3;
var alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"ñ",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

var cipher = new caesarCipher(alphabet, a, b);

var text = "krñd oxpgr";

//console.log(cipher.encrypt(text));
console.log(cipher.decrypt(text));
*/
