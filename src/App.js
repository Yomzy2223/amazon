import Home from "./components/main components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/sign/SignUp";
import SignInEmail from "./components/sign/SignInEmail";
import SignInPassword from "./components/sign/SignInPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin_email" element={<SignInEmail />} />
        <Route path="/signin_password" element={<SignInPassword />} />
      </Routes>
    </div>
  );
}
export default App;
