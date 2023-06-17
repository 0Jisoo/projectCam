let img;
function preload() {
	img = loadImage('dog1.jpeg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	rectMode(CENTER);
	angleMode(DEGREES);
}

function draw() {
	background(255);
	//img.loadPixels();
	image(img, 0, 0, width, height);

	//for (let y = 0; y < img.height; y = y + 10) {
	//for (let x = 0; x < img.width; x = x + 10) {
		//let pixel_index = (y * img.width + x) * 4;
		//let darkness = (255 - img.pixels[pixel_index]) / 255; //0~1
		//let lightness = img.pixels[pixel_index] /255; //0~1

	//push();
		//translate(x,y);
		//if (darkness > 0.5) {
			//ellipse(0, 0, 10, 10,);
		//}
		//if (darkness <= 0.5) {
			//rect(0, 0, 10, 10);
		//}
		pop();
	//}
	//}
}