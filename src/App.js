import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  //logic
  // 페이지 3개: Home, About, Contact
  //view
  return (
    // path 값은 소문자로 작성
    <BrowserRouter>
      <Routes><Route path="/" element={<Home/>}/></Routes>
      <Routes><Route path="/about" element={<About/>}/></Routes>
      <Routes><Route path="/contact" element={<Contact/>}/></Routes>
    </BrowserRouter>
  );
}

export default App;
