import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ExitIntentPopup from "./components/ExitIntentPopup";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import ResidentialMoving from "./pages/services/ResidentialMoving";
import CommercialMoving from "./pages/services/CommercialMoving";
import SeniorMoving from "./pages/services/SeniorMoving";
import LongDistanceMoving from "./pages/services/LongDistanceMoving";
import ExpressMoving from "./pages/services/ExpressMoving";
import PackingServices from "./pages/services/PackingServices";
import PianoMoving from "./pages/services/PianoMoving";
import StorageSolutions from "./pages/services/StorageSolutions";
import EdmontonPage from "./pages/cities/Edmonton";
import CalgaryPage from "./pages/cities/Calgary";
import VancouverPage from "./pages/cities/Vancouver";
import TorontoPage from "./pages/cities/Toronto";
import OttawaPage from "./pages/cities/Ottawa";
import MontrealPage from "./pages/cities/Montreal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ExitIntentPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/residential" element={<ResidentialMoving />} />
          <Route path="/services/commercial" element={<CommercialMoving />} />
          <Route path="/services/senior" element={<SeniorMoving />} />
          <Route path="/services/long-distance" element={<LongDistanceMoving />} />
          <Route path="/services/express" element={<ExpressMoving />} />
          <Route path="/services/packing" element={<PackingServices />} />
          <Route path="/services/piano" element={<PianoMoving />} />
          <Route path="/services/storage" element={<StorageSolutions />} />
          <Route path="/cities/edmonton" element={<EdmontonPage />} />
          <Route path="/cities/calgary" element={<CalgaryPage />} />
          <Route path="/cities/vancouver" element={<VancouverPage />} />
          <Route path="/cities/toronto" element={<TorontoPage />} />
          <Route path="/cities/ottawa" element={<OttawaPage />} />
          <Route path="/cities/montreal" element={<MontrealPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
