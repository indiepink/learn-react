import React from 'react'
import Logical from './../components/Logical';
import Greetting from './../components/Greetting';
import Card from './../components/Card';
import Counter from './../components/Counter';
import Move from '../components/Move';


const Home = () => {
  // logic
  const handleIncrease = () => {
    console.log("➕ 더하기 버튼 클릭!");
  }

  const handleDecrease = () => {
    console.log("➖ 빼기 버튼 클릭!");
  }

  // view
  return (
    <div>HOME
      {/*페이지 이동 버튼 */}
      <Move></Move>
      
      <Logical/>
      <Greetting username="슈퍼스타 송상훈"/>
      <Greetting username="인기스타 송상훈"/>
      <Greetting username="송주령똥꾸멍"/>
      <Card/>
      <Counter onIncreaseClick={handleIncrease} onDecreaseClick={handleDecrease}/>
      {/* 미션: 숫자가 5씩 증가하는 컴포넌트 만들기 */}
      <Counter cnt = {5} onIncreaseClick={handleIncrease} onDecreaseClick={handleDecrease}/>

    </div>
  )
}

export default Home