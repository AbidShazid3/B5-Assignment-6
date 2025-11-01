import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";
import { motion } from "motion/react";

const FeaturePage = () => {
  const heading = "Our Core Features";
  const subheading = "DPay Features";
  const features = [
    {
      title: "Send Money",
      description:
        "Send money instantly to other users or family members in just a few taps.",
      icon: <Timer className="size-5 md:size-6" />,
    },
    {
      title: "Cash In",
      description:
        "Add balance easily from any authorized agent — no transaction fee required.",
      icon: <Zap className="size-5 md:size-6" />,
    },
    {
      title: "Cash Out",
      description:
        "Withdraw your balance anytime from nearby agents with secure verification.",
      icon: <ZoomIn className="size-5 md:size-6" />,
    },
    {
      title: "B2B Transfer",
      description:
        "Agents can perform business-to-business transactions seamlessly, with zero fees.",
      icon: <PersonStanding className="size-5 md:size-6" />,
    },
    {
      title: "Add Money",
      description:
        "Easily add money from our trusted banking partners and distributors.",
      icon: <DollarSign className="size-5 md:size-6" />,
    },
    {
      title: "Customer Support",
      description:
        "24/7 support available to assist you with any service-related queries.",
      icon: <MessagesSquare className="size-5 md:size-6" />,
    },
  ];

  return (
    <section className="py-10 px-2 lg:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl text-center"
      >
        {/* Section Heading */}
        <p className="text-sm uppercase tracking-wide text-primary/80 font-medium mb-2">
          {subheading}
        </p>
        <h2 className="text-3xl font-bold md:text-4xl tracking-tight">
          {heading}
        </h2>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturePage;