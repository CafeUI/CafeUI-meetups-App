'use strict';

cafeui.filter('durations',function () {
    //return a function
    return function(duration){
        switch (duration) {
            case 15:
                return 'ربع ساعت';
            case 30:
                return 'نیم ساعت';
            default:
                return duration + ' دقیقه ';
        }
    }
})
