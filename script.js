// Big number displays
const monthText = document.getElementById("months");
const weekText = document.getElementById("weeks");
const dayText = document.getElementById("days");
const hourText = document.getElementById("hours");
const minText = document.getElementById("minutes");
const secText = document.getElementById("seconds");
let timeText = [monthText, weekText, dayText, hourText, minText, secText];

// Total time left displays
const monthTotal = document.getElementById("monthsTotal");
const weekTotal = document.getElementById("weekTotal");
const dayTotal = document.getElementById("dayTotal");
const hourTotal = document.getElementById("hourTotal");
const minTotal = document.getElementById("minTotal");
const secTotal = document.getElementById("secTotal");
let totalTimeText = [monthTotal, weekTotal, dayTotal, hourTotal, minTotal, secTotal];

// Time Unit Text
const tuMonths = document.getElementById("Maand");
const tuWeeks = document.getElementById("Week");
const tuDays = document.getElementById("Dag");
const tuHours = document.getElementById("Uur");
const tuMins = document.getElementById("Minuut");
const tuSecs = document.getElementById("Sekond");
let timeUnitText = [tuMonths, tuWeeks, tuDays, tuHours, tuMins, tuSecs];
let pluralTimeUnits = ['Maande', 'Weke', 'Dae', 'Ure', 'Minute', 'Sekondes'];

// Amount of time in certain units
const monthMillisec = (1000 * 60 * 60 * 24 * 30.325);
const weekMillisec = (1000 * 60 * 60 * 24 * 7);
const dayMillisec = (1000 * 60 * 60 * 24);
const hourMillisec = (1000 * 60 * 60);
const minMillisec = (1000 * 60);
const secMillisec = (1000);

// Format the total remaining time's values
const timeFormatter = new Intl.NumberFormat('en-UK', { useGrouping: true });

// When we are counting down to
const countDownDate = new Date("Sept 17, 2024 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the difference between now and the count down date
    let difference = countDownDate - now;

    // Time remaining calculations
    let months = Math.floor(difference / monthMillisec);
    let weeks = Math.floor((difference % monthMillisec) / weekMillisec);
    let days = Math.floor((difference % weekMillisec) / dayMillisec);
    let hours = Math.floor((difference % dayMillisec) / hourMillisec);
    let minutes = Math.floor((difference % hourMillisec) / minMillisec);
    let seconds = Math.floor((difference % minMillisec) / secMillisec);

    const timeValues = [months, weeks, days, hours, minutes, seconds];

    timeValues.map((value, index) => {
        if (value === 1) {
            timeUnitText[index].textContent = timeUnitText[index].id;
        } else {
            timeUnitText[index].textContent = pluralTimeUnits[index];
        }
    })

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

    // Total time remaining calculations:
    let totalMonths = Math.floor(difference / monthMillisec);
    let totalWeeks = Math.floor(difference / weekMillisec);
    let totalDays= Math.floor(difference / dayMillisec);
    let totalHours = Math.floor(difference / hourMillisec);
    let totalMins = Math.floor(difference / minMillisec);
    let totalSecs = Math.floor(difference / secMillisec);

    const totalTimeValues = [totalMonths, totalWeeks, totalDays, totalHours, totalMins, totalSecs];

    totalTimeText.map((unit, index) => {
        totalTimeValues[index] = timeFormatter.format(totalTimeValues[index]);
        unit.textContent = `Totaal: ${totalTimeValues[index]}`;
    })
}, 1000);

const addZeroBefore = (timeUnit) => {
    if (timeUnit.toString().length == 1) {
        return "0" + timeUnit;
    }
    return timeUnit;
}