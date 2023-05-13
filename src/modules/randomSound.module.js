import { Module } from "@/core/module";

export class RandomSoundModule extends Module {
	constructor() {
		super("RandomSound", "Рандомный звук");
	}

	trigger() {
		this.iterateFiles();
	}

	iterateFiles() {
		const pathTosound = "src/static/sounds/";
		const soundName = "sound";
		const numberOfSounds = 8;
		const sounds = [];

		for (let i = 0; i < numberOfSounds; i++) {
			sounds.push(`${pathTosound}${soundName}-00${i + 1}.mp3`);
		}

		const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
		const audio = new Audio(randomSound);

		audio.play();
	}
}
