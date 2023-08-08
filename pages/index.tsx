import React, { useEffect, useState } from 'react'

const index = () => {
  const [currentNumber, setCurrentNumber] = useState<number[]>([]);
  const numberList: Array<number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Back", 0, "Enter"]
  const KeyEvent = (e: string | number) => {
    if (Number(e) || e == "0") {
      if (currentNumber.length < 11) {
          setCurrentNumber([...currentNumber,Number(e)])
          }
        } else if (e == "Back"||e=="Backspace") {
      if (currentNumber.length >= 1) {
        const newNumber = (currentNumber.slice(0, currentNumber.length - 1))
        setCurrentNumber(newNumber)
          }
      } else if (e == "Enter") {
          if (currentNumber.length >= 11) {
            setCurrentNumber([])
          }
    }
  }
  const keyDown = (e: KeyboardEvent) => {
    KeyEvent(e.key)
  }
  const numClick = (e:number|string) => {
    KeyEvent(e)
  }
  useEffect(() => {
        document.addEventListener('keydown', keyDown, false);

    return () => {
        document.removeEventListener('keydown', keyDown, false);
    }
  },[currentNumber])

  return (
    <div style={{ width: "300px",margin:"auto",textAlign:"center"}}>
      <h3>電話番号を入力してください</h3>
      <div style={{height:"30px",textAlign:"left"}}>
      {currentNumber?.map((number: number, index: number) =>
          <span key={index} style={{borderBottom:"1px solid black",margin:"0 10px"}}>{number}</span>
        )}
      </div>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      {numberList.map((number: number|string, index:number) =>
        <button key={index} onClick={()=>numClick(number)} style={{width:"100px",borderRadius:"999px",display:"block"}}>
          {number}
        </button>
        )}
        </div>
    </div>
  )
}

export default index
