import Hero from "./components/Hero/Hero";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Solution from "./components/solution/Solution";
import ContactUs from "./components/contactus/ContactUs";
import About from "./components/about/About";

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />
      <WhatWeDo />
      <About />
      <ContactUs />
    </div>
  );
}
