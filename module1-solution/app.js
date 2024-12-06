(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageClass = "";

        $scope.checkIfTooMuch = function () {
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
                $scope.messageClass = "red";
            } else {
                const items = $scope.lunchItems.split(',').filter(item => item.trim() !== "");
                if (items.length === 0) {
                    $scope.message = "Please enter data first";
                    $scope.messageClass = "red";
                } else if (items.length <= 3) {
                    $scope.message = "Enjoy!";
                    $scope.messageClass = "green";
                } else {
                    $scope.message = "Too much!";
                    $scope.messageClass = "green";
                }
            }
        };
    }
})();

