import { Menu } from './core/menu';

export class ContextMenu extends Menu {
	#modules;
	constructor(selector) {
		super(selector);
		this.#modules = [];

		const trig = document.querySelector('.forClick');
		trig.addEventListener('contextmenu', (event) => {
			event.preventDefault();
			this.#setPosition(event.clientX, event.clientY);
			this.open();
		});
	}

	open() {
		this.el.classList.add('open');
	}

	close() {
		this.el.classList.remove('open');
	}

	#setPosition(x, y) {
		this.el.style.top = `${y}px`;
		this.el.style.left = `${x}px`;
	}

	addModule(module) {
		this.#modules.push(module);
	}

	add(module) {
		this.el.innerHTML += module.toHTML();
	}

	run() {
		this.#modules.forEach((element) => this.add(element));
		this.el.addEventListener('click', (event) => {
			const moduleType = event.target.dataset.type;
			const moduleToTrigger = this.#modules.find(
				(module) => module.type === moduleType,
			);

			if (moduleToTrigger) {
				moduleToTrigger.trigger();
				this.close();
			}
		});
	}
}
