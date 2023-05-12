import { Module } from '@/core/module';

export class BackgroundModule extends Module {
	constructor() {
		super('Module', 'Бекграунд');
	}

	trigger() {
		console.log('Работает');
	}
}
