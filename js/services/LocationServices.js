app.factory('locationServices', ['$http', function($http) {

        function getLocationAPI(callback) {
            return "https://notepadsaas.herokuapp.com";
        }

        return {
            getLocationAPI:getLocationAPI
        };
    }])