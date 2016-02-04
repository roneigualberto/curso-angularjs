angular.module("mainApp").controller("PessoaFormCtrl",['$scope',function($scope){

	$scope.sexos = [
			{id:'M', descricao:'Masculino'},
			{id:'F', descricao:'Feminino'}
	];

	$scope.estadoCivilList = [
			{id:1, descricao:'Solteiro(a)'},
			{id:2, descricao:'Casado(a)'},
			{id:3, descricao:'Divorciado(a)'},
			{id:4, descricao:'Viuvo(a)'}
	];

	$scope.tabs = [
		{src:'view/dados-pessoais.html', icon: 'glyphicon-user', titulo: 'Perfil'},
		{src:'view/alterar-senha.html', icon: 'glyphicon-lock', titulo: 'Senha'},
		{src:'view/email-form.html', icon: 'glyphicon-envelope', titulo: 'E-mails'},
		{src:'view/contato-form.html', icon: 'glyphicon-earphone', titulo: 'Contato'},
		{src:'view/documento-form.html', icon: 'glyphicon-file', titulo: 'Documentos'},
		{src:'view/endereco-form.html', icon: 'glyphicon-map-marker', titulo: 'Endere\u00e7o'}
	];

	$scope.pessoa = {
		nome: "Ronei Macedo Gualberto",
		emails: [
			{
				id: 1,
				email: "ronei.mac.rmg@gmail.com",
				descricao: "Principal"

			},
			{
				id: 2,
				email: "ronei.mac.rmg@gmail.com",
				descricao: "Secundário"
			}
		]

	};

	$scope.ufs = [
		{id:1, nome:"Amazonas", sigla:"AM"},
		{id:2, nome:"Acre", sigla:"AC"}

	];



}]);