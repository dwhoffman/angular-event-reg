'use strict';

eventsApp.filter('elipseAfterLength', function () {
    return function (input, length) {
        if (input.length > length) {
            return input.substring(0, length) + "...";
        }
        return input;
    };
});

eventsApp.filter('durations', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
})