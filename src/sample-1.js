const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
    // your code here
    let hh = '00';
    let mm = '00';
    let ss = '00';

    if (seconds < 0 || seconds > 86400) return null;
    if (seconds < 10) return `${hh}:${mm}:0${seconds}`;
    if (seconds < 60) return `${hh}:${mm}:${seconds}`;
    
    if (seconds >= 60) {
        mm = Math.trunc(seconds / SECONDS_PER_MIN);

        if (mm.toString().length === 1) mm = `0${mm}`;

        if (10 <= mm && mm < 60) {
            // ss = (seconds % SECONDS_PER_MIN) * 60;
            ss = (seconds % SECONDS_PER_MIN)
            if (ss.toString().length === 1) ss = `0${ss}`;
        }

        if (mm >= 60) {
            hh = Math.trunc(seconds / SECONDS_PER_HOUR);
            
            // mm = Math.trunc(((seconds / SECONDS_PER_HOUR) - hh) * 60);
            mm = Math.trunc((seconds %  SECONDS_PER_HOUR ) / 60);
            
            // ss = Math.trunc(((seconds / SECONDS_PER_HOUR - hh) * 60 - mm) * 60);
            ss = Math.trunc((((seconds %  SECONDS_PER_HOUR ) / 60 - mm) * 60));

            if (hh < 10) hh = `0${hh}`;
            if(mm < 10) mm = `0${mm}`;
            if (ss.toString().length === 1) ss = `0${ss}`;
        }
        return `${hh}:${mm}:${ss}`;
    }
}

console.log(formatTime(86400));
console.log(formatTime(86400*2));
console.log(formatTime(120));
console.log(formatTime(360));
console.log(formatTime(60));
console.log(formatTime(6));
console.log(formatTime(10));
console.log(formatTime(59));
console.log(formatTime(60));
console.log(formatTime(3600));
console.log(formatTime(7260));
console.log(formatTime(7200));
console.log(formatTime(4256));

