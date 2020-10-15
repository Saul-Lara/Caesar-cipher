import caesarCipher from "./caesar.js";

var alphabet;
var spanishAlphabet = [
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

var englishAlphabet = [
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

document.addEventListener("DOMContentLoaded", function () {
	var btn_cipher = document.getElementById("btn_cipher");
	var btn_decipher = document.getElementById("btn_decipher");

	btn_cipher.addEventListener("click", function () {
		var selectedAlphabet = document.getElementById("mySelect").value;
		var valueA = document.getElementById("valueA").value;
		var valueB = document.getElementById("valueB").value;

		var text = document.getElementById("myTextarea").value;
		var textResult = document.getElementById("myTextResult");

		if (selectedAlphabet == "Spanish") {
			alphabet = spanishAlphabet;
		} else if (selectedAlphabet == "English") {
			alphabet = englishAlphabet;
		} else {
			return alert("Error selecting language.");
		}

		var cipher = new caesarCipher(alphabet, valueA, valueB);

		if (!cipher.validate()) {
			return alert(
				"A and B must be less than " + alphabet.length + " and greater than 0"
			);
		}

		if (text.length == 0) {
			return alert("Fill the message field, please.");
		}

		textResult.innerHTML = cipher.encrypt(text);
	});

	btn_decipher.addEventListener("click", function () {
		console.log("hola 2");
	});
});

/*
var cipher = new caesarCipher(alphabet, a, b);

var text = "krñd oxpgr";

//console.log(cipher.encrypt(text));
console.log(cipher.decrypt(text));
*/
