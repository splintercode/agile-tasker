﻿function TimerCtrl($scope) {

    $scope.options = [{ value: 15, label: 15 }, { value: 20, label: 20 }, { value: 25, label: 25 }, { value: 30, label: 30 }];
    $scope.tasks = [];
    $scope.selectedOption = $scope.options[1];
    $scope.currentTime = $scope.selectedOption.value + ":" + "00";
    $scope.localTime = "";
    $scope.taskText = "";
    $scope.isPlaying = false;
    $scope.settingVisible = true;
    $scope.sound = true;

    var snd1 = new Audio("Content/chime.mp3"); // buffers automatically when created
    var snd2 = new Audio("Content/chime.wav"); // buffers automatically when created
    var startTime = new Date().toLocaleTimeString();
    var endTime = new Date().toLocaleTimeString();
    var timerInterval = 0;
    var timerDate = new Date();
    timerDate.setMinutes($scope.selectedOption.value);
    timerDate.setSeconds(0);

    /* --- Click Events ---*/
    $scope.startTimer = function () {
        resetTimer();
        timerInterval = setInterval(intervalTimer, 1000);
        startTime = new Date().toLocaleTimeString();
        $scope.isPlaying = true;
    };

    $scope.stopTimer = function () {
        resetTimer();
        $scope.isPlaying = "";
    };

    $scope.clearList = function () {
        $scope.tasks = [];
    };

    /* --- Helper Functons --- */
    setInterval(updateLocalTime, 1000);
    function updateLocalTime() {
        $scope.localTime = toLocalTime(new Date());
        $scope.$apply();
    }

    function toLocalTime(date) {
        var h = date.getHours();
        var m = date.getMinutes();
        var x = h >= 12 ? 'pm' : 'am';
        h = h % 12;
        h = h ? h : 12;
        m = m < 10 ? '0' + m : m;
        var mytime = h + ':' + m + ' ' + x;
        return mytime;
    }

    function intervalTimer() {
        if (timerDate.getMinutes() === 0 && timerDate.getSeconds() === 0) {
            $scope.stopTimer();
            endTime = new Date().toLocaleTimeString();
            alertNotification();
            pushTask();
        }
        else {
            timerDate.setSeconds(timerDate.getSeconds() - 1);
            $scope.currentTime = getCurrentTime(timerDate);
            document.title = $scope.currentTime;
        }
        $scope.$apply();
    };

    function resetTimer() {
        clearInterval(timerInterval);
        $scope.currentTime = $scope.selectedOption.value + ":" + "00";
        timerDate.setMinutes($scope.selectedOption.value);
        timerDate.setSeconds(0); // Test Switch 
    };

    function getCurrentTime(currentTime) {
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        if (minutes < 10)
            minutes = '0' + minutes;

        if (seconds < 10)
            seconds = '0' + seconds;

        return minutes + ':' + seconds;
    }

    function pushTask() {
        var _text = "Unknown";
        if ($scope.taskText !== "") {
            _text = $scope.taskText;
        }

        $scope.tasks.push({ start: startTime, stop: endTime, text: _text });
        $scope.taskText = "";
    };

    function alertNotification() {
        //FlashTitle();
        if ($scope.sound) {
            playSound();
        }
        alertDesktopNotification();
    };

    function alertDesktopNotification() {
        if (window.webkitNotifications) {
            if (window.webkitNotifications.checkPermission() == 0) {
                var notification_test = window.webkitNotifications.createNotification(
                'Content/logo.png', 'Agile Task Complete', 'Time to take a break!');
                notification_test.ondisplay = function () { };
                notification_test.onclose = function () { };
                notification_test.onClick = function () { };
                notification_test.show();
            }
        }
    };

    function playSound() {
        snd1.play();
        snd2.play();
    }

    document.querySelector('#Startbtn').addEventListener('click', function () {
        if (window.webkitNotifications.checkPermission() === 0) { // 0 is PERMISSION_ALLOWED
            // function defined 
        } else {
            window.webkitNotifications.requestPermission();
        }
    }, false);
}