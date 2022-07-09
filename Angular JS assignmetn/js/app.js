(function() {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchMessage = "";
        $scope.lunchItems = "";

        $scope.lunchCalculate = function() {
            var message = $scope.lunchMessage;
            var items = $scope.lunchItems;

            if (items == 0)
                message = "Please enter data first"
            else if (items.split(",").length < 4)
                message = "Enjoy!";
            else
                message = "Too much!";
            $scope.lunchMessage = message;
        }
    }

})();