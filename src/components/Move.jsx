import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Move = () => {
  const history = useNavigate();

  //logic
  const handleHome = () => {
    // 실행문 
    // React-router-dom으로 페이지 이동하는 방법2
    history("/");
  }

  const handleAbout = () => {
    // 실행문 
    // React-router-dom으로 페이지 이동하는 방법2
    history("/about");
  }

  //view
  return (
    <div>
      <button type='button' onClick={handleHome}>Home으로 이동</button>
      <button type='button' onClick={handleAbout}>About으로 이동</button>
      
      {/* React-router-dom으로 페이지 이동하는 방법1 */}
      <Link to ="/contact" >Contact로 이동</Link> {/*a 태그로 인식*/}
    </div>
  )
}

export default Move