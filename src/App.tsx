import { Routes, Route, Navigate } from "react-router";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import IlCentro from "@/pages/IlCentro";
import Servizi from "@/pages/Servizi";
import Convenzioni from "@/pages/Convenzioni";
import Contatti from "@/pages/Contatti";
import LavoraConNoi from "@/pages/LavoraConNoi";
import Articoli from "@/pages/Articoli";
import ArticoloTecarterapia from "@/pages/ArticoloTecarterapia";
import Privacy from "@/pages/Privacy";
import CookiePolicy from "@/pages/CookiePolicy";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="il-centro" element={<IlCentro />} />
        <Route path="servizi" element={<Servizi />} />
        <Route path="convenzioni" element={<Convenzioni />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="lavora-con-noi" element={<LavoraConNoi />} />
        <Route path="articoli" element={<Articoli />} />
        <Route path="articoli/tecarterapia-cos-e-benefici-quando-utile" element={<ArticoloTecarterapia />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      </Routes>
    </>
  );
}
