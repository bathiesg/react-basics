import React, { useState, useEffect } from 'react';


function Watch({timer}) {
    

    return(
        <><h3>{timer}</h3></>
    )
}

const addSecondsToDate = (date, delay) => {  
    date = new Date(date)
    date.setSeconds(date.getSeconds() + delay)
  
    return date
  }

  const displayTime = (startDate)=> {
    startDate = new Date(startDate);
    const endDate = new Date();
    let timeDiff = (endDate - startDate) / 1000;

   console.log(startDate, endDate);
   console.log(timeDiff);
   console.log(secToHHmmss(timeDiff));
    return secToHHmmss(timeDiff);
}

 function secToHHmmss(seconds){
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    var seconds = Math.ceil(seconds % 60);

    return String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0')
}

export default function TimerHooks() {
    const [timeString, setTimeString] = useState(new Date());
    const [visible, setVisible] = useState();
    const dateString = "Wed Aug 11 2021 00:00:00 GMT+0200 (Central European Summer Time)";
    const [timer, setTimer] = useState("00:00:00");
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let clockTimer;
        if (visible) {
            clockTimer = setInterval(() => {
                setTimeString(new Date())
            },1000)
        } else {
            clearInterval(clockTimer)
        }

        return() => {
            console.log('------------------------------------');
            console.log('component will unmount');
            console.log('------------------------------------');
            clearInterval(clockTimer)
        }
    }, [visible])


    useEffect(() => {
        let datetimer;
        if (!isPaused) {
            datetimer = setInterval(() => {
                setTimer(displayTime(dateString))
            },1000)
    
        }else {
            clearInterval(datetimer)
        }
        
        return() => {
            clearInterval(datetimer)
        }
    }, [isPaused, timer])


    return(
        <>
        <h3>Timer with HOOKS</h3>
        <Watch timer = {timer} />
        <button onClick={() => setIsPaused(false)}>start</button>
        <button onClick={() => setIsPaused(true)}>pause</button>


        {/* {visible && <Watch date = {timeString} />}
        <button onClick={() => setVisible(true)}>+</button>
        <button onClick={() => setVisible(false)}>-</button> */}
        </>
    )
}