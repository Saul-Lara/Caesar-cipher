class caesarCipher {
	constructor(alphabet, a, b) {
		this.alphabet = alphabet;
		this.a = a;
		this.b = b;
		this.n = this.alphabet.length;
		this.text = [];
		this.result = [];
	}

	encrypt(text) {
		let lowerText = text.toLowerCase();
		this.text = lowerText.split("");

		this.text.forEach((element) => {
			if (element == " ") {
				this.result.push(element);
			} else {
				let index = this.alphabet.indexOf(element);

				let newIndex = (this.a * index + this.b) % this.n;

				this.result.push(this.alphabet[newIndex]);
			}
		});
		return this.result.join("");
	}

	decrypt(text) {
		let lowerText = text.toLowerCase();
		this.text = lowerText.split("");

		this.text.forEach((element) => {
			if (element == " ") {
				this.result.push(element);
			} else {
				let index = this.alphabet.indexOf(element);

				let newIndex = ((index - this.b) / this.a) % this.n;

				this.result.push(this.alphabet[newIndex]);
			}
		});

		return this.result.join("");
	}
}

export default caesarCipher;
