start = true;

function barCount(){

    if (start == true){
    
        let time = 10;
        let count = setInterval(startCount, 1000);
        let width = 100;
        let timeBar = document.getElementById("timeBar");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("seconds");

        function startCount(){

            start = false;

            if(width <= 0){
                clearInterval(count);
                start=true;
            }else{
                width = width - (width/time);
                timeBar.style.width = (width + "%");
            }
            if(time>0){
            --time;
            seconds.innerHTML = pad(time % 60);
            minutes.innerHTML = pad(parseInt(time / 60));
            }            
        }

        function pad(value) {
            var valueString = value + "";
            if (valueString.length < 2) {
                return "0" + valueString;
            } else {
                return valueString;
            }
        }
    }
}