var Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies;
	Mouse = Matter.Mouse;
	MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var circles = [];
var boundaries = [];

var ground;

var mConstraint;

function setup() {
	var canvas = createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	boundaries.push(new Boundary(150, 100, width * 0.6, 20, 0.3))
	boundaries.push(new Boundary(250, 300, width * 0.6, 20, -0.3))

	var canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	var options = {
		mouse: canvasmouse
	}

	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);
}

// function mouseDragged() {
// 	circles.push(new Circle(mouseX, mouseY, 10));
// }

function draw() {
	background(51);

	circles.push(new Circle(random(0,400), -10, 10));

	for (var i = 0; i < circles.length; i++) {
		circles[i].show();
		if (circles[i].isOffScreen()) {
			circles[i].removeFromWorld();
			circles.splice(i, 1);
			i--;
		}
	}
	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].show();
	}
}