
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotreOffre from "./pages/NotreOffre";
import NosEngagements from "./pages/NosEngagements";
import QuiSommesNous from "./pages/QuiSommesNous";
import Actualites from "./pages/Actualites";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/notre-offre" element={<NotreOffre />} />
          <Route path="/nos-engagements" element={<NosEngagements />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:id" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
