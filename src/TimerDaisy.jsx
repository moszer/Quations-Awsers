import React from 'react'

function TimerDaisy({ seccond ,min, hours}) {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{"--value":hours}}></span>
      </span>
      hours
    </div> 
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{"--value":min}}></span>
      </span>
      min
    </div> 
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{"--value":seccond}}></span>
      </span>
      sec
    </div>
  </div>
  )
}

export default TimerDaisy
