class Stone {
	constructor(x, y) {
	  var options = {
		'density':12,
		'friction': 0.9,
		'restitution':0.8
	  };
	  this.body = Bodies.rectangle(x, y, 50, 50, options);
	  this.width = 150;
	  this.height = 40;
	  World.add(world, this.body);
	};
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,50,50)
            pop()
	}
  };