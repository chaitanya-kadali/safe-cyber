import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import AiChatBot from "./components/Hero comps/AiChatBot.jsx";
import Register from "./components/Register.jsx";
import YourProfile from "./components/YourProfie.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<YourProfile />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
