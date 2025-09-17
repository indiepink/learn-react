// rafce - 기본 구문 (react snippet 설치로 자동 완성 가능)
import React from 'react'

const Greetting = ({username}) => {
  return (
    <div className='greeting'>
      <h1>안녕하세요! {username}님(❁´◡`❁)</h1>
      <p>오늘도 좋은 하루 보내세요~!</p>
    </div>

  )
}

export default Greetting