import { Menu } from './core/menu';

export class ContextMenu extends Menu {
	constructor() {
		super('#menu');
	}

	open() {
		this.el.classList.add('open');
	}

	close() {
		this.el.classList.remove('open');
	}

	add() {
		const trig = document.querySelector('.forClick');
		trig.addEventListener('contextmenu', (event) => {
			event.preventDefault();
			this.el.style.top = `${event.clientY}px`;
			this.el.style.left = `${event.clientX}px`;
			this.open();
		});

		const element = document.createElement('li');
		element.className = 'menu-item';
		element.innerText = 'test_module';
		element.id = '1';
		this.el.append(element);
	}

	run() {
		this.add();
	}
}
