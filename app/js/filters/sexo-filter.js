angular.module("mainApp").filter("sexo", function () {

	var _sexoList = {'M': 'Masculino','F': 'Feminino'};	

	return function (input) {
		return _sexoList[input];
	};
});