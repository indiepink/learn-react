import React from 'react'

const Logical = () => {
  // logic
  // Logical operators
  // 1. and
  const user = {
    isLoggedin: false, // 로그인 여부
    role: "admin" // guest, user 사용자 역할   
  }

  // 관리자 페이지 접급 관리
  if (user.isLoggedin && user.role === "admin") {
    //true인 경우 실행코드
    console.log("✅ 관리자 페이지에 접근 가능");
  } else {
    console.log("❌ 관리자 페이지에 접근 불가능");
  }

  // 일반 사용자 페이지 접근 관리
  if (user.isLoggedin || user.role === "admin") {
    //true인 경우 실행코드
    console.log("✅ 사용자 페이지에 접근 가능");
  } else {
    console.log("❌ 사용자 페이지에 접근 불가능");
  } 

  if(!user.isLoggedin){
    // 로그인 되지 않은 경우
    console.log("로그인을 해주세요.");
  }

  // 구조분해 할당 - 배열, 객체에서 각각의 값이나 속성을 분해하여 손쉽게 별도의 변수에 담아 주는 것
  const colors = ["red", "blue"];
  // const firstColor = colors[0];
  // const secondColor = colors[1];

  const [firstColor, secondColor] = colors; // 가져오는게 배열이라서 [] 사용
  console.log("🚀 ~ Logical ~ secondColor:", secondColor);
  console.log("🚀 ~ Logical ~ firstColor:", firstColor);

  // 객체 구조 분해 할당
  const person = {
    name : "송주령똥꾸멍",
    mbti : "istj"   
  }

  //기존
  //const name = person.name;
  //const mbti = person.mbti;

  const {name:username, mbti} = person; // 순서를 다르게 써도 상관 X (키 값으로 매핑)
  console.log("🚀 ~ Logical ~ mbti:", mbti)
  console.log("🚀 ~ Logical ~ username:", username);

  // spread syntax - 배열이나 객체를 개별 요소로 분해하거나 결합할 때 사용(복제 기능 O)
  //const copyColors = [...colors, "yellow"] ; // yellow 맨 뒤 추가
  const copyColors = ["yellow", ...colors ] ; // yellow 맨 앞 추가
  console.log("🚀 ~ Logical ~ copyColors:", copyColors);
  console.log("🚀 ~ Logical ~ colors:", colors); // 원본 배열은 그대로
  
  const copyPerson = {...person, isAttendent: true, mbti : "esfj"}; // 없으면 새로 추가, 있으면 값 변경
  console.log("🚀 ~ Logical ~ copyPerson:", copyPerson);
  // view
  return (
    <div>Logical</div>
  )
}

export default Logical