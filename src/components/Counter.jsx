import React, { useState } from 'react'

const Counter = ({cnt = 1, onIncreaseClick, onDecreaseClick}) => {
  // logic
  // let count = 0;  // 자바스크립트에서 사용하는 변수 

  // state: 리액트에 존재하는 특별한 변수
  // 두 개의 변수로 이루어져있음 (첫 번째: 데이터, 두 번째: 함수)
  const [count, setCount] = useState(0);  // [변수명, 함수명], userState에 0을 넣으면 count = 0;

  // const handleIncrease = () => {
  //   setCount((next)=> next >= 10 ? 10 : next + 1);
  // }

  // const handleDecrease = () => {
  //   //setCount(count - 1);
  //   setCount((prev)=> prev <= 0 ? 0 : prev - 1 )
  // }

  const handleIncrease = () => {
    setCount((next)=> next + cnt);

    onIncreaseClick();
  }

  const handleDecrease = () => {
    //setCount(count - 1);
    setCount((prev)=> prev - cnt);

    onDecreaseClick();
  }

  // view
  return (
    <div>
      <h1>{cnt} 카운터</h1>
      <h2>{count}</h2>
      <div>
        <button type='button' onClick={handleIncrease}>+{cnt}</button>
        <button type='button' onClick={handleDecrease}>-{cnt}</button>
      </div>
      
    </div>
  )

  
}

export default Counter