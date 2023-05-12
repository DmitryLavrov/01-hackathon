import { Module } from '@/core/module';

export class BackgroundModuleRed extends Module {
	constructor() {
		super('backgroundRed', 'Ред');
	}

	trigger() {
		document.body.style.backgroundColor = this.#getColor();
	}
	#getColor() {
		return 'red';
	}
}
