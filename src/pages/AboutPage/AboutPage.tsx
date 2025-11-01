import { Code, Cog, PenTool, Shrub } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Our Mission",
    description:
      "We aim to make financial services simple, secure, and accessible for everyone, anytime, anywhere.",
    items: [
      "Secure transactions",
      "Easy accessibility",
      "Customer empowerment",
    ],
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Our Vision",
    description:
      "To be the most trusted mobile financial service provider, empowering customers with convenience and reliability.",
    items: ["Trusted services", "Convenient solutions", "Global reach"],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Our Values",
    description:
      "Integrity, trust, customer focus, and innovation guide everything we do for our users.",
    items: [
      "Integrity first",
      "Customer centricity",
      "Continuous innovation",
    ],
  },
  {
    icon: <Shrub className="h-6 w-6" />,
    title: "Why Choose Us",
    description:
      "We provide fast, secure, and reliable financial solutions that keep our customers happy and in control.",
    items: ["Fast and reliable", "24/7 support", "User-friendly services"],
  },
];

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="py-10 px-2 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="space-y-3 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About Us
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg leading-relaxed">
              We are a trusted mobile financial service provider dedicated to
              making everyday transactions simple, secure, and accessible.
            </p>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            layout
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="border border-border rounded-2xl p-6 sm:p-8 bg-card hover:shadow-md transition-all duration-300 hover:cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3 sm:p-4 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mt-3 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm sm:text-base"
                    >
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;