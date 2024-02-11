import React from 'react';
import moment from 'moment-timezone';

function DateTimer(props) {
    const dateTimerDivId = 'currentTimerPicker';
    const {
        timeInterval = 1000,
        dateTimeFormat = "DD/MM/YYY HH:mm:ss",
        className = '',
        timeZone = '',
    } = props;
    const handleDateTimer = () => {
        try {
            let currentTime;
            const timerElement = document.getElementById(dateTimerDivId);
            if (!!timerElement) {
                if (!!timeZone) {
                    currentTime = moment().tz(timeZone).format(dateTimeFormat);
                } else {
                    currentTime = moment().format(dateTimeFormat);
                }
                timerElement.innerHTML = currentTime;
            }
        } catch (error) {
            console.error(error);
        }
    };
    setInterval(handleDateTimer, timeInterval);
    return (
        <div className={`dateTimerParentClass ${className}`}><span id={dateTimerDivId}></span></div>
    );
}

function TimeDuration(props) {
    try {
        const { className = '', id = 'time-duration-id' } = props;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let timer;
        const updateDisplay = (hours, minutes, seconds) => {
            try {
                const display = document.getElementById(id);
                if (display) {
                    display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
                }
            } catch (error) {
                console.error(error);
            }

        }

        const formatTime = (time) => {
            return time < 10 ? `0${time}` : time;
        }

        const startStopwatch = () => {
            try {
                clearInterval(timer)
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
        }
        startStopwatch();

        return <div className={`time-duration ${className}`} id={id}>00:00:00</div>
    } catch (error) {
        console.error(error);
    }

}

export { DateTimer, TimeDuration };