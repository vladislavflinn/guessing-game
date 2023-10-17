class GuessingGame {
	constructor() {}

	setRange(min, max) {
		this.min = min;
		this.max = max;
	}

	guess() {
		this.assumption = Math.round((this.max + this.min) / 2);
		return this.assumption;
	}

	lower() {
		this.max = this.assumption;
	}

	greater() {
		this.min = this.assumption;
	}
}

module.exports = GuessingGame;
