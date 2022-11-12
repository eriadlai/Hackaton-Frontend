import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import SignIn from "../pages/SignIn";
import Navbar from "../components/BarraSuperior";
import PostIdea from "../pages/PostIdea";
export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/PostIdea" element={<PostIdea />} />
      </Routes>
    </BrowserRouter>
  );
}