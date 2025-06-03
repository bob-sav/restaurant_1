import Hero from "@/components/Hero";
import Restaurant from "@/components/Restaurant";
import Chef from "@/components/Chef";
import Menu from "@/components/Menu";
import Recipes from "@/components/Recipes";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Restaurant />
      <Chef />
      <Menu />
      <Recipes />
      <Reserve />
      <Footer />
    </>
  );
}
