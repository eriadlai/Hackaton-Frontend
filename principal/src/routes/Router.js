import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import SignIn from "../pages/SignIn";
import Navbar from "../components/BarraSuperior";
import PostIdea from "../pages/PostIdea";
import RecetaUbicacion from "../pages/RecetaUbicacion";
import Publicaciones from "../pages/Publicaciones";
import PageMadera from "../utilities/PageMadera";
import PageMetales from "../utilities/PageMetales";
import PagePapel from "../utilities/PagePapel";
import PageTextiles from "../utilities/PageTextiles";
import PageVidrio from "../utilities/PageVidrio";
import PagePlastico from "../utilities/PagePlastico";
export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/PostIdea" element={<PostIdea />} />
        <Route path="/RecetaUbicacion" element={<RecetaUbicacion />} />
        <Route path="/Publicaciones" element={<Publicaciones />} />
        <Route path="/PageMadera" element={<PageMadera />} />
        <Route path="/PageMetales" element={<PageMetales />} />
        <Route path="/PagePapel" element={<PagePapel />} />
        <Route path="/PageTextiles" element={<PageTextiles />} />
        <Route path="/PageVidrio" element={<PageVidrio />} />
        <Route path="/PagePlastico" element={<PagePlastico />} />

      </Routes>
    </BrowserRouter>
  );
}