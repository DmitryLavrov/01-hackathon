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
			let number = Math.floor(Math.random() * 3);// генерация случайного числа
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
					this.#drawCicle(context);
					break;
			}
			document.body.append(shapeCanvas);
		}


	}

	#drawRect(context) {
		context.fillStyle = "rgb(200, 0, 0)";
		context.fillRect(10, 10, 55, 50);
		context.fillStyle = "rgba(0, 0, 200, 0.5)";
		context.fillRect(30, 30, 55, 50);
	}

	#drawTriangle(context) {
		context.beginPath();
		context.moveTo(75, 50);
		context.lineTo(100, 75);
		context.lineTo(100, 25);
		context.fill();
	}

	#drawCicle(context) {
		context.fillStyle = "rgb(200, 0, 0)";
		context.arc(75, 75, 0, Math.PI * 2, true);
	}
}
