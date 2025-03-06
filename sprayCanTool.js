// This is the SprayCanTool class which simulates a spray can effect on a canvas.
// It has properties for the tool's name, icon, number of points to draw, and the spread of the spray.
// The draw function is called when the mouse is pressed and it randomly places points around the mouse position.

function SprayCanTool() {
  this.name = "sprayCanTool";
  this.icon = "assets/sprayCan.jpg";
  this.points = 13;
  this.spread = 10;
  //if the mouse is pressed paint on the canvas
  //spread describes how far to spread the paint from the mouse pointer
  //points holds how many pixels of paint for each mouse press.
  this.draw = function () {
    if (mouseIsPressed) {
      for (var i = 0; i < this.points; i++) {
        point(
          random(mouseX - this.spread, mouseX + this.spread),
          random(mouseY - this.spread, mouseY + this.spread)
        );
      }
    }
  };
}
