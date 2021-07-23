const timer = () => {
	let deadline = '2055-05-19';

    function getTimeRemaining(endtime) {

        let t = Date.parse(endtime) - Date.parse(new Date()),

        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60);


        return {
			'minutes' : minutes,
            'seconds' : seconds
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
			minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
    
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

			minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
				minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);
};
export default timer;