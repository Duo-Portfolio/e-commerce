// app/page.tsx
"use client";
import Hero from "@/components/hero/Hero";
import GlobalVideoBackground from "./GlobalVideoBackGround";
import NavBar from "@/components/navbar/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "@/components/products/Products";
import ModelSection from "@/components/content/ModelSection"; // Import your new ModelSection component

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalVideoBackground />
      <NavBar />
      <Hero />
      <Products />
      
      {/* Use the new ModelSection component */}
      <ModelSection />
      
    </QueryClientProvider>
  );
}
