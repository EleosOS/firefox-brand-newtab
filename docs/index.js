let clock, date, time;

const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

setTimeout(() => {
    clock = document.getElementById('clock');
    date = document.getElementById('date');
    time = new Date();
    
    clock.innerText = time.toLocaleTimeString();
    date.innerText = time.toLocaleDateString('default', dateOptions);
}, 1)

setInterval(() => {
    time = new Date();

    clock.innerText = time.toLocaleTimeString();
    date.innerText = time.toLocaleDateString('default', dateOptions);
}, 1000)
