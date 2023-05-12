import { Module } from '@/core/module';

export class BackgroundModule extends Module {
	constructor() {
		super('background', 'Поменять цвет');
	}

	trigger() {
		document.body.style.backgroundColor = this.#getColor();
	}
	#getColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}
