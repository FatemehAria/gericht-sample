import About from "@/components/About";
import ChefsWord from "@/components/ChefsWord";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import MenuList from "@/components/MenuList";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <MenuList />
      <ChefsWord />
    </main>
  );
}
