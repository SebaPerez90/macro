import Befenits from "../components/home/Befenits";
import DeliveryInfo from "../components/home/DeliveryInfo";
import FAQ from "../components/home/FAQ";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <>
      <main
        id="main-section"
        className="max-w-300 mx-auto flex flex-col gap-40"
      >
        <Hero />
        <Befenits />
        <DeliveryInfo />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
