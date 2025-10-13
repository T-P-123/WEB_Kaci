import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import NotFound from "./pages/NotFound";
import HIITDetail from "./pages/HIITDetail";
import RepsRunDetail from "./pages/RepsRunDetail";
import StretchingDetail from "./pages/StretchingDetail";
import WomenInMotionDetail from "./pages/WomenInMotionDetail";

const queryClient = new QueryClient();

const App = () => {
  // Normalize BASE_URL so BrowserRouter always receives an absolute prefix.
  const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const normalizedBase = basePath === "." ? "/" : basePath || "/";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={normalizedBase}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-mne" element={<About />} />
            <Route path="/sluzby" element={<Services />} />
            <Route path="/programy" element={<Programs />} />
            <Route path="/hiit-detail" element={<HIITDetail />} />
            <Route path="/reps-run-detail" element={<RepsRunDetail />} />
            <Route path="/stretching-detail" element={<StretchingDetail />} />
            <Route path="/women-in-motion-detail" element={<WomenInMotionDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
