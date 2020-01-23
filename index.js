// Get the time from a group of inputs.
function getTime(timeGroup) {
	var hours,minutes,seconds,ms;
	var group = "_input" + timeGroup;

	hours = Number(document.getElementById('hours'+group).value);
	minutes = Number(document.getElementById('minutes'+group).value);
	seconds = Number(document.getElementById('seconds'+group).value);
	ms = Number(document.getElementById('ms'+group).value);

	return [hours, minutes, seconds, ms];
}

// Convert time either from an array of hours, minutes, seconds, and ms to a ms value, or an ms value to an array.
function convertTime(time) {
	var hours,minutes,seconds,ms;
	// convert array to ms value
	if (Array.isArray(time)) {
		// array contents: [hours,minutes,seconds,ms]
		// convert hours, minutes, seconds, and ms to ms
		hours = (time[0] * 60 * 60 * 1000);
		minutes = (time[1] * 60 * 1000)
		seconds = (time[2] * 1000)
		ms = (time[3]);

		output = hours + minutes + seconds + ms;
	} else if (typeof time == "number") {
		// Converts ms to array of hours,minutes,seconds,ms
		hours = Math.floor(time / (60 * 60 * 1000));
		hoursCalc = hours * 60 * 60 * 1000;

		minutes = Math.floor((time - hoursCalc) / (60 * 1000));
		minutesCalc = minutes * 60 * 1000;

		seconds = Math.floor((time - hoursCalc - minutesCalc) / 1000)
		secondsCalc = seconds * 1000;

		ms = time - hoursCalc - minutesCalc - secondsCalc;

		output = [hours,minutes,seconds,ms];
	}
	return output;
}

function calc() {
	time1 = convertTime(getTime(1));
	time2 = convertTime(getTime(2)); 
	timeFinal = time1-time2;
	timeFinal = convertTime(timeFinal);

	document.getElementById('hours_output').value = timeFinal[0]
	document.getElementById('minutes_output').value = timeFinal[1]
	document.getElementById('seconds_output').value = timeFinal[2]
	document.getElementById('ms_output').value = timeFinal[3]
}