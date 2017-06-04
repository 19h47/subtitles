var fs  = require('fs');
var parser = require('subtitles-parser');


var subtitles = fs.readFileSync(__dirname + '/../subtitles/lost/s05/e05-this-place-is-death.srt', 'utf-8');
var data = parser.fromSrt(subtitles, true);


var start = null;
var i = 0;

// Set current var to avoid unnecessary DOM manipulation
var current = false;
var subtitlesEl = document.querySelector('#subtitles')

function step(timestamp) {
	var progress;
	
	if (start === null) {
		start = timestamp;
	}

	progress = timestamp - start;

	// StartTime
	if (data[i].startTime <= progress && !current) {

		current = true;

		subtitlesEl.innerHTML = data[i].text + '<br>';
	
	}

	// EndTime
	if (data[i].endTime > data[i].startTime && data[i].endTime <= progress) {

		subtitlesEl.innerHTML = '';

		// Current
		current = false;
		// Pass to next entry
		i++;
	}

	requestAnimationFrame(step);
		
}

requestAnimationFrame(step);