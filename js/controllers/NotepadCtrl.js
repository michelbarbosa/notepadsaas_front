app.controller('NotepadCtrl', function ($scope, $location, notepadServices) {

	$scope.nota = {
		"titulo" : "",
		"texto" : ""
	};

	$scope.pesquisar = function (nome) {
		notepadServices.pesquisarPor(nome, function(nota) {
			console.log(nota);
            if(nota.data.length > 0)
            	$scope.nota = nota.data[0];
            else {
            	$scope.nota.texto = "";
            }
        })
	};

	$scope.salvar = function(nota) {
        notepadServices.salvar(nota, function() {
            console.log("Sucesso");
        })
    };

});