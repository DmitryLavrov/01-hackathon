import { Menu } from './core/menu';
import { BackgroundModule } from './modules/background.module';

export class ContextMenu extends Menu {
	constructor() {
		super('#menu');
		const trig = document.querySelector('.forClick');
		trig.addEventListener('contextmenu', (event) => {
			event.preventDefault();
			this.el.style.top = `${event.clientY}px`;
			this.el.style.left = `${event.clientX}px`;
			this.open();
			this.close();
		});
	}

	open() {
		this.el.classList.add('open');
	}

	close() {
		this.el.classList.remove('open');
	}

	add() {
		const bg = new BackgroundModule();
		this.el.innerHTML = bg.toHTML();
		this.el.addEventListener('click', (event) => {
			if (event.target.dataset.type === bg.type) {
				bg.trigger();
				this.close();
			}
		});
	}

	run() {
		this.add();
	}
}
