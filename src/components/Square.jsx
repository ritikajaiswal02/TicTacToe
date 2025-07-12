import React from 'react'

function Square(props) {
  return (
    <div className='bg-[#30013689] md:h-35 md:w-35 rounded-3xl flex justify-center items-center text-pink-800 text-7xl font-bold text-shadow-lg/50 h-25 w-25' style={{
    textShadow: "0 0 5px #ff00cc, 0 0 5px #ff00cc, 0 0 5px #ff00cc, 0 0 5px #ff00cc"
  }} onClick={props.onClick} >
        {props.value}
    </div>
  )
}

export default Square