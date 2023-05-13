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
			switch( number ) {
				case 0:
					break;
				case 1:
					break;
				case 2:
					break;
			}
			document.body.append(shapeCanvas);
		}


	}

	#drawRect() {
		let context = shapeCanvas.getContext("2d");// контекст канвы
		context.fillStyle = "rgb(200, 0, 0)";
		context.fillRect(10, 10, 55, 50);
		context.fillStyle = "rgba(0, 0, 200, 0.5)";
		context.fillRect(30, 30, 55, 50);
	}

	#drawTriangle() {

	}

	#drawCicle() {

	}
}
