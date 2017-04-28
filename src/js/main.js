var fs  = require('fs');
var parser = require('subtitles-parser');


var subtitles = fs.readFileSync(__dirname + '/../subtitles/lost/s05/e05-this-place-is-death.srt', 'utf-8');

var data = parser.fromSrt(subtitles, true);
console.log(data);

Object.keys(data).map(function(objectKey, index) {
    var value = data[objectKey];

    document.querySelector('#subtitles').innerHTML += value.text + '<br>';
    console.log(value);
});



var start = null;

function step(timestamp) {
  	var progress;
  	
  	if (start === null) {
  		start = timestamp;
  	}

  	progress = timestamp - start;

  	// console.log(progress);
  	
  	
    requestAnimationFrame(step);
  	
}

requestAnimationFrame(step);