import About from "@/components/Home/About/about";
import Banner from "@/components/Home/Banner/banner";
import Products from "@/components/Home/Products/products";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Products />
      <About />
    </main>
  );
}
