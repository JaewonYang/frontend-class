function Main() {
	this.red = null;
	this.spanList = "";
	this.board = document.getElementById("board");
	this.spanArray = document.getElementsByTagName("span");
}

Main.prototype = {
	run : function() {
		this.chessLayer();
		this.spanClickEvent();
	},

	chessLayer : function() {
		for (var i = 0; i < 4; i++) {
			var color = (i % 2 === 0) ? "white" : "black";

			for (var j = 0; j < 4; j++) {
				color = (color === "white") ? "black" : "white";
				this.spanList += "<span class =" + color + "></span>";
				this.board.innerHTML = this.spanList;
			}
		}
	},

	spanClickEvent : function() {
		for (var i = 0; i < this.spanArray.length; i++) {
			var span = this.spanArray[i];
			span.addEventListener('click', this.clickRed.bind(this));
		}
	},

	clickRed : function(e) {
		if (this.red != null) {
			this.red.className = this.red.className.replace(' red', "");
		}
		e.target.className += " red";
		this.red = e.target;
	}
};
var main = new Main();
main.run();