class caesarCipher {
	constructor(alphabet, a, b) {
		this.alphabet = alphabet;
		this.a = Number(a);
		this.b = Number(b);
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

				let newIndex = this.a * index;

				newIndex = newIndex + this.b;

				newIndex = newIndex % this.n;

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

				if (newIndex < 0) {
					newIndex = this.alphabet.length - Math.abs(newIndex);
					this.result.push(this.alphabet[newIndex]);
				} else {
					this.result.push(this.alphabet[newIndex]);
				}
			}
		});

		return this.result.join("");
	}

	validate() {
		let rtn = false;

		if (
			this.a < this.alphabet.length &&
			this.a > 0 &&
			this.b < this.alphabet.length &&
			this.b > 0
		) {
			rtn = true;
		}
		return rtn;
	}
}

export default caesarCipher;
