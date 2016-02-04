var mainApp = angular.module("mainApp",['ngRoute','ngMessages','ui.bootstrap']);


mainApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

	$routeProvider
    	.when('/pessoas', {
        	templateUrl: 'view/pessoa-list.html',
        	controller: 'PessoaListCtrl'
      	})
        .when('/pessoa/form', {
          templateUrl: 'view/pessoa-form.html',
          controller: 'PessoaFormCtrl'
        })
      	.when('/pessoa/edit/:pessoaId', {
        	templateUrl: 'view/pessoa-edit.html',
        	controller: 'PessoaFormCtrl'
      	})
       	.otherwise({redirectTo: '/pessoas'});

    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('/');


}]);




