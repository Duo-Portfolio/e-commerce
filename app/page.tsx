"use client"
import Hero from "@/components/hero/Hero";
import GlobalVideoBackground from "./GlobalVideoBackGround";
import NavBar from "@/components/navbar/NavBar";
import Products from "@/components/products/Products";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import from react-query

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
            <GlobalVideoBackground/>
            <NavBar/>
    <Hero/>
    <Products/>
    </QueryClientProvider>

    
  );
}
