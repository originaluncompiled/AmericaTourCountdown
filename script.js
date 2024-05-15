const monthText = document.getElementById("months");
const weekText = document.getElementById("weeks");
const dayText = document.getElementById("days");
const hourText = document.getElementById("hours");
const minText = document.getElementById("minutes");
const secText = document.getElementById("seconds");
let timeText = [monthText, weekText, dayText, hourText, minText, secText];
const monthTotal = document.getElementById("monthsTotal");
const weekTotal = document.getElementById("weekTotal");
const dayTotal = document.getElementById("dayTotal");
const hourTotal = document.getElementById("hourTotal");
const minTotal = document.getElementById("minTotal");
const secTotal = document.getElementById("secTotal");

let timeValues = [];

// Set the date we're counting down to
const countDownDate = new Date("Sept 17, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the difference between now and the count down date
    var difference = countDownDate - now;

    monthTotal.textContent = `Total: ${Math.floor(difference / (1000 * 60 * 60 * 24 * 30.325))}`;
    weekTotal.textContent = `Total: ${Math.floor(difference / (1000 * 60 * 60 * 24 * 7))}`;
    dayTotal.textContent = `Total: ${Math.floor(difference / (1000 * 60 * 60 * 24))}`;
    hourTotal.textContent = `Total: ${Math.floor(difference / (1000 * 60 * 60))}`;
    minTotal.textContent = `Total: ${Math.floor(difference / (1000 * 60))}`;
    secTotal.textContent = `Total: ${Math.floor(difference / (1000))}`;

    // Time calculations
    var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.325));
    var weeks = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.325)) / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timeValues = [months, weeks, days, hours, minutes, seconds];

    // Display the result
    if (difference > 0) {
        timeText.forEach((textUnit, index) => {
            textUnit.textContent = addZeroBefore(timeValues[index]);
        });
    } else if (difference <= 0) {
        timeText.forEach((textUnit) => {
            textUnit.textContent = "00";
        });
    }
}, 1000);

const addZeroBefore = (timeUnit) => {
    if (timeUnit.toString().length == 1) {
        return "0" + timeUnit;
    }
    return timeUnit;
}