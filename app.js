// DIQQAT! Ushbu vibratsiya Planshet, Smartfonlarda ishlaydi ya'ni
// vibratsiya kompyuter, noutbuklarda sezilmaydi!

// Ushbu navigator.vibrate() metodini Safari brauzeri qo'llab quvvatlamaydi!!!


function vibrateOn(){ // oddiy vibratsiya
    window.navigator.vibrate(300);
    console.log("vibrating")
}

function vibrateMultiple(){ // bir necha martalik vibratsiya
    window.navigator.vibrate([100,30,100,30,200,30]);
}

function vibrateStop(){ // vibratsiya to'xtatish
    // window.navigator.vibrate([]); 
    //yoki
    window.navigator.vibrate(0);
}