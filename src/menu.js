import { Menu } from './core/menu';

export class ContextMenu extends Menu {
	#modules;
	constructor({ selector, modules }) {
		super(selector);
		this.#modules = [];

		const contextMenuTrigger = document.querySelector('.forClick');
		contextMenuTrigger.addEventListener('contextmenu', (event) => {
			event.preventDefault();
			this.#setPosition(event.clientX, event.clientY);
			this.open();
		});

		modules.forEach((ModuleClass) => {
			const module = new ModuleClass();
			this.#modules.push(module);
			this.add(module);
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

	add(module) {
		this.el.innerHTML += module.toHTML();
	}

	run() {
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
