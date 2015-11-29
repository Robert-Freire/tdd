function assert(message, expr) {
	this.asserts++;
	if (!expr) {
	    throw new Error(message);
	}
	this.successful++;
  	return true;
}


function output(text, color) {
  var p = document.createElement("p");
  p.innerHTML = text;
  p.style.color = color;
  document.body.appendChild(p);
}

function describe(name, test){
	this.asserts = 0;
	this.successful = 0;

	if (typeof this.testSetup == "function"){
		testSetup.apply(this);
	}

	try{
		test.apply(this);
		output (name+ " test OK ", "#0c0");

	} catch (e) {
	    output ("Test failed: " + e.message, "#c00");
	}

	var color = this.successful == this.asserts ? "#0c0": "#c00";
	output("<strong>" + this.asserts  + " tests, " + (this.asserts  - this.successful) + " failures</strong>", color);
}

function testSetup(setup){
	this.testSetup = setup;
}

function testSuite (text, test){
	test.apply(this);
}