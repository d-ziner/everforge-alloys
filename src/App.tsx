import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";

// Page Imports
import Home from "@/pages/home";
import ProductsIndex from "@/pages/products/index";
import BrassIngots from "@/pages/products/brass-ingots";
import CopperIngots from "@/pages/products/copper-ingots";
import AluminiumIngots from "@/pages/products/aluminium-ingots";
import About from "@/pages/about";
import Quality from "@/pages/quality";
import ExportMarkets from "@/pages/export-markets";
import Quote from "@/pages/quote";
import Contact from "@/pages/contact";
import ThankYou from "@/pages/thank-you";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={ProductsIndex} />
        <Route path="/products/brass-ingots" component={BrassIngots} />
        <Route path="/products/copper-ingots" component={CopperIngots} />
        <Route path="/products/aluminium-ingots" component={AluminiumIngots} />
        <Route path="/about" component={About} />
        <Route path="/quality" component={Quality} />
        <Route path="/export-markets" component={ExportMarkets} />
        <Route path="/quote" component={Quote} />
        <Route path="/contact" component={Contact} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
