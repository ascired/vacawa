(function() {
	var requestAnimationFrame = 
	window.requestAnimationFrame || 
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame || 
	window.msRequestAnimationFrame;

	window.requestAnimationFrame = requestAnimationFrame;

    function getMousePosition() {
    	var pos = mousePos;
    	var bodyBg = document.querySelector('.js-body-bg');
    	if (pos){
    		bodyBg.style.backgroundPosition = pos.x + 'px ' + pos.y + 'px';
    	}
    }

    function closest(el, selector) {
    	const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    	while (el) {
    		if (matchesSelector.call(el, selector)) {
    			return el;
    		} else {
    			el = el.parentElement;
    		}
    	}
    	return null;
    }

    var daysField = document.querySelector('.js-watch-days');
    var hoursField = document.querySelector('.js-watch-hours');
    var minutesField = document.querySelector('.js-watch-minutes');

    var enddate = new Date(2018, 3, 13, 21);

    var DateDiff = {

        daysAndHours: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();

            return remain = {
              days: parseInt((t2-t1)/(24*3600*1000)),
              hours: parseInt((t2-t1)/(24*3600*1000) % 1 * 24),
              minutes: parseInt((t2-t1)/(3600*1000) % 1 * 60)
          };
      }
  }

  function renderTime () {
    var now = new Date();
    var time = now.toLocaleTimeString(now);
    var timeLeft = DateDiff.daysAndHours(now, enddate);
    daysField.innerHTML = timeLeft.days;
    hoursField.innerHTML = timeLeft.hours;
    minutesField.innerHTML = timeLeft.minutes;
}

var date = new Date();

if (enddate - date > 0) {
    setInterval(renderTime, 1000 );
}

})();
