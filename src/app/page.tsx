import Header from "../components/header/Index";
import Befenits from "../components/home/Befenits";
import DeliveryInfo from "../components/home/DeliveryInfo";
// import FAQAccordion from "../components/home/FAQAccordion";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Testmonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main
        id="main-section"
        className="max-w-300 mx-auto flex flex-col gap-40"
      >
        <Hero />
        <Testmonials />
        <Befenits />
        <DeliveryInfo />
        {/* <FAQAccordion /> */}
        <Footer />
      </main>
    </>
  );
}
