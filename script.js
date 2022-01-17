//getting the h1 class using queryselector and storing it in countdown variable
const countdown=document.querySelector(".countdown");
let time=10;//assigning 10 to the time
countdown.innerText=time--;//decrementing the timer 
setTimeout(() => {
    countdown.innerText=time--;//displaying the countdown on the screen
    setTimeout(() => {
        countdown.innerText=time--;
        setTimeout(() => {
            countdown.innerText=time--;
            setTimeout(() => {
                countdown.innerText=time--;
                setTimeout(() => {
                    countdown.innerText=time--;
                    setTimeout(() => {
                        countdown.innerText=time--;
                        setTimeout(() => {
                            countdown.innerText=time--;
                            setTimeout(() => {
                                countdown.innerText=time--;
                                setTimeout(() => {
                                    countdown.innerText=time--;
                                    setTimeout(() => {
                                        countdown.innerText="Happy Independence Day"
                                        //after countdown displaying the message on the screen
                                    }, 1000);//setting the time for 1 sec
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
