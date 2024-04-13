import About from "@/components/Home/About/about";
import Banner from "@/components/Home/Banner/banner";
import { Categories } from "@/components/Home/Categories/categories";
import Products from "@/components/Home/Products/products";
import { Footer } from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Products />
      <About />
      <Categories />

      <Footer />
    </main>
  );
}
