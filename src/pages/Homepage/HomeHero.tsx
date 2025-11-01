import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import HeroImage from "../../assets/images/preview.png";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3 sm:mb-4">
              Take Control of Your Finances
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500 sm:text-5xl md:text-6xl lg:text-7xl">
              Smart Finance, <br /> Brighter Future
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-base sm:text-lg lg:text-xl">
              Unlock your financial potential with expert guidance on investments, loans, tax strategies, and wealth growth. Make informed decisions anytime, anywhere.
            </p>

            <div className="flex w-full gap-3 justify-center lg:justify-start">
              <Link to="/features">
                <Button className="py-3 sm:py-4 px-6 sm:px-8 font-semibold text-white bg-linear-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2 justify-center">
                  Explore More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button className="py-3 sm:py-4 px-6 sm:px-8 font-semibold text-purple-600 border-2 border-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={HeroImage}
              alt="Home Hero"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeHero;
