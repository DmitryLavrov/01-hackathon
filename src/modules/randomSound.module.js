import { Module } from "@/core/module";

export class RandomSoundModule extends Module {
	constructor() {
		super("RandomSound", "Рандомный звук");
	}

	trigger() {
		this.iterateFiles();
	}

	iterateFiles() {
		console.log("Работает звук");
	}
}
