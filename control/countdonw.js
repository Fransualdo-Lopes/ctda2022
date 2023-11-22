const countdonw = () => { // instanciando a class para pegar a data futura
    const countDate = new Date('November 21, 2022 16:00:00').getTime();  // data desejada setada
    const now = new Date().getTime();
    const gap = countDate - now;

    // logica do tempo
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // metodo para calcular e pegar a data
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

//metodo para rodar os segundos e chamando a função
setInterval(countdonw, 1000);