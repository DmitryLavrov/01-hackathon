import { Module } from "@/core/module";

export class ClickAnalyticsModule extends Module {
	#clicks = 0;
	#seconds = 5;

	constructor() {
		super("ClickAnalytics", "Аналитика кликов");
	}

	trigger() {
		this.counter();
	}

	counter() {
		window.addEventListener("click", this.handlerClick.bind(this));

		const countdown = setInterval(() => {
			this.#seconds--;
			console.log("осталось секунд: ", this.#seconds);

			if (this.#seconds == 0) {
				clearInterval(countdown);

				window.removeEventListener(
					"click",
					this.handlerClick.bind(this)
				);
			}
		}, 1000);
	}

	handlerClick() {
		this.#clicks++;
		console.log("clicks", this.#clicks);
	}

	setClickAnalytics() {}
}
