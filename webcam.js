let video;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER)
	angleMode(DEGREES)

	video = createCapture(VIDEO)
	video.size(windowWidth, windowHeight);
	video.hide();
	}

function draw() {
	background(255);

	//
	video.loadPixels();
	video.updatePixels();

	for (let y = 0; y < video.height; y = y + 20) {
		for (let x = 0; x < video.width; x = x + 20) {
			let pixel_index = (y * video.width + x) * 4;
      let darkness = (255 - video.pixels[pixel_index]) / 255;

			let 지름 = 10 * darkness;

			push();
			translate(x, y);

			if(darkness > 0.8) {
				fill('#2a9d8f');
				//fill('#ffbe0b');
				noStroke();
				rect(0, 0, 지름, 지름);
			}

			if(darkness <= 0.8 && darkness >=0.6) {
				fill('#ff006e');
				noStroke();
				ellipse(0, 0, 지름, 지름);
			}

			if(darkness < 0.2) {
				fill('#2a9d8f');
				noStroke();
				triangle(5, 5, 10, 15, 20, 13)
				//stroke('#2a9d8f');
				//line(0, 0, 지름, 지름);
	}
			pop();
		}
	}
}