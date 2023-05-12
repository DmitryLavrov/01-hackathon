import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { CountdownTimerModule } from "./modules/countdownTimer.module";

export class ContextMenu extends Menu {
	constructor() {
		super("#menu");
	}

	open() {
		this.el.classList.add("open");
	}

	close() {
		this.el.classList.remove("open");
	}

	add() {
		const trig = document.querySelector(".forClick");
		trig.addEventListener("contextmenu", (event) => {
			event.preventDefault();
			this.el.style.top = `${event.clientY}px`;
			this.el.style.left = `${event.clientX}px`;
			this.open();
		});

		const bg = new BackgroundModule();

		// this.el.innerHTML = bg.toHTML();
		// this.el.addEventListener("click", (event) => {
		// 	if (event.target.dataset.type === "Module") {
		// 		bg.trigger();
		// 	}
		// });

		const timer = new CountdownTimerModule();

		this.el.innerHTML = timer.toHTML();
		this.el.addEventListener("click", (event) => {
			if (event.target.dataset.type === "CountdownTimer") {
				timer.trigger();
			}
		});
	}

	run() {
		this.add();
	}
}
