import { Module } from '../core/module'

export class ShapeModule extends Module {
	constructor() {
		super("Module", "Shape");
	}

	trigger() {
		console.log('Работает');
		// создаём канву для рисования
		const shapeCanvas = document.createElement("canvas");
		shapeCanvas.id = "shape_";// идентификатор канвы
		if(shapeCanvas.getContext) {
			let number = this.#getRandomNumber(3);// генерация случайного числа
			let context = shapeCanvas.getContext("2d");// контекст канвы
			switch( number ) {
				case 0:
					// прямоугольники
					this.#drawRect(context);
					break;
				case 1:
					// треугольник
					this.#drawTriangle(context);
					break;
				case 2:
					// круг
					this.#drawCircle(context);
					break;
			}
			document.body.append(shapeCanvas);
		}


	}

	#drawRect(context) {
		context.fillStyle = this.#getColor();
		context.fillRect(10, 10, 55, 50);
		context.fillStyle = "rgba(0, 0, 200, " + this.#getRandomNumber(1) + ")";
		context.fillRect(30, 30, 55, 50);
	}

	#drawTriangle(context) {
		context.fillStyle = this.#getColor();
		context.beginPath();
		context.moveTo(75, 50);
		context.lineTo(100, 75);
		context.lineTo(100, 25);
		context.fill();
	}

	#drawCircle(context) {
		context.beginPath();
		context.fillStyle = this.#getColor();
		context.arc(75, 75, 0, Math.PI * 2, true);
	}

	#getColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[this.#getRandomNumber(16)];
		}
		return color;
	}

	#getRandomNumber(number) {
		return Math.floor(Math.random() * number);
	}
}
