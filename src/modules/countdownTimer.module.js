import { Module } from "@/core/module";

export class CountdownTimerModule extends Module {
	constructor() {
		super("CountdownTimer", "Timer");
	}

	trigger() {
		this.callModalWindow();
	}

	callModalWindow() {
		let time = +prompt("Введите время в секундах").trim();

		if (!isNaN(time)) {
			this.renderingBlock(time);
		} else {
			alert("Введенные данные должны быть числом!");
		}
	}

	renderingBlock(time) {
		const bodyElement = document.body;

		const timerBlock = document.createElement("div");
		const timeElement = document.createElement("span");

		timerBlock.className = "timer-block";
		timeElement.className = "timer-block__time";

		timeElement.innerHTML = time;

		bodyElement.append(timerBlock);
		timerBlock.append(timeElement);

		setInterval(() => {
			timeElement.innerHTML--;

			if (timeElement.innerHTML == 0) {
				timerBlock.remove();
			}
		}, 1000);

		return timerBlock;
	}
}
