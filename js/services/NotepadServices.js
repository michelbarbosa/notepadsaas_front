app.factory('notepadServices', ['$http', function($http) {

        function listar(callback) {
            $http({
                method:'GET',
                url:'http://localhost:8090/nota'
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        function pesquisarPor(nome, callback) {
            $http({
                method:'GET',
                url:'http://localhost:8090/nota/' + nome
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        function salvar(nota, callback) {
            $http({
                method:'POST',
                url:'http://localhost:8090/nota',
                data:JSON.stringify(nota)
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        return {
            listar:listar,
            salvar:salvar,
            pesquisarPor:pesquisarPor
        };
    }])