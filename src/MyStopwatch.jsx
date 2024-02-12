import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import TimerDaisy from './TimerDaisy';
import { useRecoilState } from 'recoil';

import { textState } from './atoms';

function MyStopwatch({ expiryTimestamp, State }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const [text, setText] = useRecoilState(textState);

  useEffect(() => {
    if (State === "start") { // Fixed comparison operator
      const time = new Date();
      time.setSeconds(time.getSeconds() + 10); // 10 minutes timer
      start();
    } else if (State === "stop") { // Fixed comparison operator and added else if
      pause();
    } else if (State === "restart") { // Fixed comparison operator and added else if
      restart();
    }
  }, [State, start, pause, restart]); // Added dependencies to useEffect

  useEffect(() => {
     setText(seconds);
  }, [seconds])

  return (
    <div className="p-20" style={{ textAlign: 'center' }}>
        <TimerDaisy seccond={seconds} min={minutes} hours={hours} />
    </div>
  );
}

export default MyStopwatch;
