import React from 'react'

function Answer() {
  return (
    <div>
      <div className="mb-4 pb-10">
          1.ทฤษฎีองค์การข้อใดกล่าวผิด
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={() => console.log("clicked")}>
            <div className="bg-red-200 w-40 h-40 flex justify-center items-center">
              1.ทฤษฎีดั้งเดิม
            </div>
          </button>
          <button onClick={() => console.log("clicked")}>
            <div className="bg-red-200 w-40 h-40 flex justify-center items-center">
              2.ทฤษฎีสมัยใหม่
            </div>
          </button>
          <button onClick={() => console.log("clicked")}>
            <div className="bg-red-200 w-40 h-40 flex justify-center items-center">
              3.ทฤษฎีล้ำสมัย
            </div>
          </button>
        </div>
        <div className="pt-5">
          <button className="btn btn-success w-40" onClick={handleStart}>
            Start
          </button>
        </div>
    </div>
  )
}

export default answer
