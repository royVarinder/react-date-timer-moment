"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimer = DateTimer;
exports.TimeDuration = TimeDuration;
var _react = _interopRequireDefault(require("react"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function DateTimer(props) {
  var dateTimerDivId = 'currentTimerPicker';
  var _props$timeInterval = props.timeInterval,
    timeInterval = _props$timeInterval === void 0 ? 1000 : _props$timeInterval,
    _props$dateTimeFormat = props.dateTimeFormat,
    dateTimeFormat = _props$dateTimeFormat === void 0 ? "DD/MM/YYY HH:mm:ss" : _props$dateTimeFormat,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$timeZone = props.timeZone,
    timeZone = _props$timeZone === void 0 ? '' : _props$timeZone;
  var handleDateTimer = function handleDateTimer() {
    try {
      var currentTime;
      var timerElement = document.getElementById(dateTimerDivId);
      if (!!timerElement) {
        if (!!timeZone) {
          currentTime = (0, _momentTimezone["default"])().tz(timeZone).format(dateTimeFormat);
        } else {
          currentTime = (0, _momentTimezone["default"])().format(dateTimeFormat);
        }
        timerElement.innerHTML = currentTime;
      }
    } catch (error) {
      console.error(error);
    }
  };
  setInterval(handleDateTimer, timeInterval);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dateTimerParentClass ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    id: dateTimerDivId
  }));
}
function TimeDuration(props) {
  try {
    var _props$className2 = props.className,
      className = _props$className2 === void 0 ? '' : _props$className2,
      _props$id = props.id,
      id = _props$id === void 0 ? 'time-duration-id' : _props$id;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var timer;
    var updateDisplay = function updateDisplay(hours, minutes, seconds) {
      try {
        var display = document.getElementById(id);
        if (display) {
          display.innerHTML = "".concat(formatTime(hours), ":").concat(formatTime(minutes), ":").concat(formatTime(seconds));
        }
      } catch (error) {
        console.error(error);
      }
    };
    var formatTime = function formatTime(time) {
      return time < 10 ? "0".concat(time) : time;
    };
    var startStopwatch = function startStopwatch() {
      try {
        clearInterval(timer);
        timer = setInterval(function () {
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
              minutes = 0;
              hours++;
            }
          }
          updateDisplay(hours, minutes, seconds);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };
    startStopwatch();
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "time-duration ".concat(className),
      id: id
    }, "00:00:00");
  } catch (error) {
    console.error(error);
  }
}
