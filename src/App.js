import Card from "./components/Card";
import Greetting from "./components/Greetting";
import Counter from './components/Counter';

function App() {
  // logic
  const handleIncrease = () => {
    console.log("➕ 더하기 버튼 클릭!");
  }

  const handleDecrease = () => {
    console.log("➖ 빼기 버튼 클릭!");
  }

  //view
  return (
    <div className="App">
      <Greetting username="슈퍼스타 송상훈"/>
      <Greetting username="인기스타 송상훈"/>
      <Greetting username="송주령똥꾸멍"/>
      <Card/>
      <Counter onIncreaseClick={handleIncrease} onDecreaseClick={handleDecrease}/>
      {/* 미션: 숫자가 5씩 증가하는 컴포넌트 만들기 */}
      <Counter cnt = {5} onIncreaseClick={handleIncrease} onDecreaseClick={handleDecrease}/>
    </div>
  );
}

export default App;
