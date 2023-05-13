import { Module } from "@/core/module";

export class RandomSoundModule extends Module {
	constructor() {
		super("RandomSound", "Рандомный звук");
	}

	trigger() {
		this.iterateFiles();
	}

	iterateFiles() {
		const audioObj = new Audio("src/static/sounds/sound-007.mp3");
		audioObj.play();
	}
}
