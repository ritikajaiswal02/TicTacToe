import { useState } from 'react'
import Square from './components/Square'

function App() {
  const [val, setVal] = useState(Array(9).fill(null))
  const [isX, setX] = useState(true)

  function handleClick(indx) {
    if (val[indx] == null) {
      const copyVal = val
      copyVal[indx] = isX ? "X" : "O"
      setVal(copyVal)
      setX(!isX)
    }
  }

  const handleReset = () => {
    setVal(Array(9).fill(null))
    setX(true)
  }

  const checkWinner = () => {
    const Winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of Winner) {
      const [a, b, c] = logic;
      if (val[a] != null && val[a] == val[b] && val[b] == val[c])
        return val[a]
    }


    return false
  }

  const isWinner = checkWinner()

  const checkTie = () => {
    return val.every(square => square !== null) && !checkWinner();
  };

  return (
    <>
      <div className='flex justify-center items-center flex-col w-[100vw] h-[100vh] font-bold  text-4xl bg-gradient-to-r from-[hsl(276,87%,27%)] via-[#FD1D1D] to-[#FCB045] gap-1 text-[#4a0351cc]'>
        {isWinner ?
          <>
            <div>{isWinner} won the game</div>
            <button onClick={() => handleReset()} className='h-14 p-2 w-40 rounded-4xl mt-5 bg-slate-300 text-2xl'>Restart</button>
          </>
          :
          <>
            <h3>{checkTie()? "No one won":{isX} ? "X turn" : "O turn"}</h3>
            <div className=' border-none flex justify-between  gap-1.5'>
              <Square onClick={() => handleClick(0)} value={val[0]} />
              <Square onClick={() => handleClick(1)} value={val[1]} />
              <Square onClick={() => handleClick(2)} value={val[2]} />
            </div>
            <div className='border-none flex justify-between gap-1.5'>
              <Square onClick={() => handleClick(3)} value={val[3]} />
              <Square onClick={() => handleClick(4)} value={val[4]} />
              <Square onClick={() => handleClick(5)} value={val[5]} />
            </div>
            <div className='border-none flex justify-between gap-1.5'>
              <Square onClick={() => handleClick(6)} value={val[6]} />
              <Square onClick={() => handleClick(7)} value={val[7]} />
              <Square onClick={() => handleClick(8)} value={val[8]} />
            </div>

            <div>{checkTie()?<button onClick={() => handleReset()} className='h-14 w-40 rounded-4xl mt-3 bg-slate-300'>Restart</button>:""}</div>
          </>
        }
      </div>
    </>
  )
}

export default App
