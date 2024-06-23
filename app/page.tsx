import About from "@/components/About";
import ChefsWord from "@/components/ChefsWord";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import MenuList from "@/components/MenuList";
import PhotoGallery from "@/components/PhotoGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <MenuList />
      <ChefsWord />
      <PhotoGallery />
    </main>
  );
}
