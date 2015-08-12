'use strict';
cafeui.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event,newEventForm){
            if (newEventForm.$valid) {
                    alert("روی داد :" + event.title + " ذخیره شد !");
            }
        };
        $scope.cancelEvent = function(){
            window.location = "eventdetails.html";
        }
    }
);
