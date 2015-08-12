'use strict';

cafeui.controller('EventController',
    function EventController($scope) {
        $scope.sortorder = 'name';
        $scope.event = {
                title: 'اولین دور همی کافه یوآی',
                date: '۱۳۹۴/۰۷/۲۱',
                time: '۹:۳۰ ق.ظ',
                price : 1,
                location: {
                    address: 'دانشگاه صنعتی ارومیه',
                    room: 'کلاس ۳۰۷'
                },
                img: 'img/CafeUI.png',
                sections: [{
                    name: "محمد شریفی",
                    subject: "تجربه کاربری",
                    duration: 20,
                    vote: 0
                }, {
                    name: "سعید پیری - طراحی رابط کاربری",
                    subject: "رابط کاربری",
                    duration: 15,
                    vote: 0
                }]
            } // end of event

        $scope.UpVote = function(section) {
            section.vote++;
        };
        $scope.DownVote = function(section) {
            section.vote--;
        };

    }
);
