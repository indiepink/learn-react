import React from 'react'
import colors from '../colors/colors'

const Card = () => {
  return (
    <>
      <div className='card'>
        <h2 style={colors}>네이버</h2>
        <img src="https://designcompass.org/wp-content/uploads/2024/10/logo-naver.png" alt="네이버" width={500}/>
        <a href="https://www.naver.com/" target="_blank"><p>네이버로 이동 ☞</p></a>
      </div>
      <h1>하하하 색상 넣기 성공~!╰(*°▽°*)╯</h1>
    </>
  )
}

export default Card