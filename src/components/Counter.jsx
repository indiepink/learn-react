import React, { useState } from 'react'

const Counter = () => {
  // logic
  // let count = 0;  // 자바스크립트에서 사용하는 변수 

  // state 
  const [count, setCount] = useState(0);  // [변수명, 함수명], userState에 0을 넣으면 count = 0;

  const handleIncrease = () => {
    setCount((next)=> next >= 10 ? 10 : next + 1);
  }

  const handleDecrease = () => {
    //setCount(count - 1);
    setCount((prev)=> prev <= 0 ? 0 : prev - 1 )
  }

  // view
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button type='button' onClick={handleIncrease}>+1</button>
        <button type='button' onClick={handleDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter