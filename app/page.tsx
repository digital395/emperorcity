import FloatingEnquiry from "@/components/floating";
import Contact from "@/section/Contact";
import About from "@/section/About";
import Hero from "@/section/Hero";
import Amenities from "@/section/Amenities";
import Gallery from "@/section/Gallery";
import Project from "@/section/Project";
import Investment from "@/section/Investment";
import LocationConnectivity from "@/section/Location";
import Explore from "@/section/Explore";

export default function Home() {
  return (
    <main>
      <FloatingEnquiry />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="amenities">
        <Amenities />
      </section>
      <section id="explore">
        <Explore />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="location">
        <LocationConnectivity />
      </section>
      <section id="investment">
        <Investment />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
