// app/page.tsx
"use client";
import Hero from "@/components/hero/Hero";
import GlobalVideoBackground from "./GlobalVideoBackGround";
import NavBar from "@/components/navbar/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "@/components/products/Products";
import ModelSection from "@/components/content/ModelSection"; // Import your new ModelSection component
import FeaturedSpaceMissions from "@/components/content/FeaturedCollection";
import { HeroScrollDemo } from "@/components/pre-footer/HeroScrollDemo";
import { HeroParallaxDemo } from "@/components/pre-footer/HeroParalexDemo";
import Footer from "@/components/footer/Footer"; // Import the Footer component


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
      <FeaturedSpaceMissions/>
      <HeroScrollDemo/>
      <HeroParallaxDemo/>
      <Footer/>
    </QueryClientProvider>
  );
}
