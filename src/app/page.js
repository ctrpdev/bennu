import { Navbar } from "@/components/navbar/Navbar";
import { Principal } from "@/components/principal/Principal";
import { Services } from "@/components/services/Services";
import { Partners } from "@/components/partners/Partners";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Principal />
      <Services />
      <Partners />
      <Testimonials />
      <Footer />
    </main>
  )
}
