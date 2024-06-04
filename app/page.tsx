import About from "@/components/About";
import ChefsWord from "@/components/ChefsWord";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <MenuList />
      <ChefsWord />
    </main>
  );
}
