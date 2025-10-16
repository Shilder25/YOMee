import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Loader from "@/components/Loader";
import LanguageSelector from "@/components/LanguageSelector";
import Snowfall from "react-snowfall";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Snowfall
            color="#ffffff"
            snowflakeCount={100}
            speed={[0.5, 1.5]}
            wind={[-0.5, 0.5]}
            radius={[0.5, 3.0]}
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              zIndex: 9999,
              pointerEvents: 'none'
            }}
          />
          <LanguageSelector />
          <Loader />
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;