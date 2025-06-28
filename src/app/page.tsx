import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import AppFeatures from "@/components/sections/appFeature";
import Footer from "@/components/sections/footer";
import ContactUs from "@/components/sections/appInterface";

export default function Home() {
  return (
    <section id="home">
      <main className="min-h-screen flex flex-col">
        <Hero />
        <About />
        <AppFeatures />
        <ContactUs/>
        <Footer />
      </main>
    </section>
  );
}
