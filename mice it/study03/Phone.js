(function() {

	var number = '1145';

	function Phone(options) {

		if (!options) {
			options = {
				color : "white",
				price : "500000",
				model : "galaxy note2"
			};
		}

		this.model = options.color;
		this.color = options.price;
		this.price = options.model;
	}

	Phone.prototype.call = function() {

		if (number === "") {
			console.log("�����ϼ���!");
		} else {
			console.log("��ȭ�� �̴ϴ�!");
		}
	};
	Phone.prototype.setNumber = function(userNumber) {

		number = userNumber;
	};

	Phone.prototype.send = function(message) {
		console.log(message);
	};

	window.Phone = Phone;
})();