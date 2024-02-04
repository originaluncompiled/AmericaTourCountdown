const monthText = document.getElementById("months");
const weekText = document.getElementById("weeks");
const dayText = document.getElementById("days");
const hourText = document.getElementById("hours");
const minText = document.getElementById("minutes");
const secText = document.getElementById("seconds");

// Set the date we're counting down to
const countDownDate = new Date("Sept 21, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the difference between now and the count down date
    var difference = countDownDate - now;

    // Time calculations
    var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    var weeks = Math.floor((difference % (1000 * 60 * 60 * 24 * 7 * 30)) / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result
    monthText.textContent = addZeroBefore(months);
    weekText.textContent = addZeroBefore(weeks);
    dayText.textContent = addZeroBefore(days);
    hourText.textContent = addZeroBefore(hours);
    minText.textContent = addZeroBefore(minutes);
    secText.textContent = addZeroBefore(seconds);

    // If the count down is finished, return
    if (difference < 0) {
        return
    }
}, 1000);

const addZeroBefore = (timeUnit) => {
    if (timeUnit.toString().length == 1) {
        return "0" + timeUnit;
    }
    return timeUnit;
}