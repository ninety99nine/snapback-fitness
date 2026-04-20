import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import VirtualTrainingPage from "./pages/plans/VirtualTrainingPage.tsx";
import MealPlansPage from "./pages/plans/MealPlansPage.tsx";
import WorkoutPlansPage from "./pages/plans/WorkoutPlansPage.tsx";
import PersonalTrainingPage from "./pages/plans/PersonalTrainingPage.tsx";
import Transformation from "./pages/Transformation.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Challenges from "./pages/Challenges.tsx";
import Shop from "./pages/Shop.tsx";
import FreeGuide from "./pages/FreeGuide.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/plans/virtual-training" element={<VirtualTrainingPage />} />
          <Route path="/plans/meal-plans" element={<MealPlansPage />} />
          <Route path="/plans/workout-plans" element={<WorkoutPlansPage />} />
          <Route path="/plans/personal-training" element={<PersonalTrainingPage />} />
          <Route path="/transformation" element={<Transformation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/free-guide" element={<FreeGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
