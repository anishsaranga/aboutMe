import Hero from "./Hero";
import Footer from "./Footer";
import MainContent from "./MainContent";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

function App() {
  return (
    <>
      <FlickeringGrid
        className="absolute object-cover z-0"
        squareSize={4}
        gridGap={7}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      <main className="flex flex-col gap-4 bg-zinc-950 min-h-[100dvh] justify-between">
        <Hero />
        <MainContent />
        <Footer />
      </main>
    </>
  );
}

export default App;
