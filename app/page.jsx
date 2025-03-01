
"use client"
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Publications from "./publications/page";
import Projects from "./projects/page";
import Awards from "./awards/page";
import ContactPage from "./contact/page";
import Resume from "./resume/page";
const Home = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/Farhee_Aalina_Ahmad_CV.pdf"; // Update with correct path
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "Farhee_Aalina_Ahmad_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">Hello I'm <br></br><span>Farhee Aalina Ahmad</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I’m passionate about crafting engaging, user-friendly websites and exploring the transformative potential of blockchain technology in decentralized systems.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb_8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 flex items-center justify-center border border-accent rounded-full 
text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"/>

              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0 rounded-full"><Photo /></div>

        </div>
      </div>
      <Stats />
      <Publications />
      <div>
        <Projects />
      </div>
      <Resume />
      <Awards />
      <ContactPage />
    </section>
  );

}

export default Home
