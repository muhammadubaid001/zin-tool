import { Bookmark } from "@/components/Bookmark";
import { Feature } from "@/components/layout/Feature";
import { Footer } from "@/components/layout/Footer";
import { Menu } from "@/components/layout/Menu";
import { SearchBar } from "@/components/layout/SearchBar";
import { Slider } from "@/components/layout/Slider";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="h-screen font-Harmony">
      <header style={{ boxShadow: "0 1px 8px rgba(0,0,0,.1)" }}>
        <SearchBar />
        <Menu />
      </header>
      <div className="max-w-7xl mx-auto mt-14 p-6 md:p-0">
        <Bookmark />
        <Slider />
        <Feature />
      </div>
      <Footer />
    </main>
  );
}
