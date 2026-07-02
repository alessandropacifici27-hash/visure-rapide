import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteChrome } from "@/components/SiteChrome";
import { CookieBanner } from "@/components/CookieBanner";
import Home from "@/pages/Home";
import ChiSiamo from "@/pages/ChiSiamo";
import TipologieCosti from "@/pages/TipologieCosti";
import Contatti from "@/pages/Contatti";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <SiteChrome>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/tipologie-e-costi" element={<TipologieCosti />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </SiteChrome>
      <CookieBanner />
    </BrowserRouter>
  );
}
