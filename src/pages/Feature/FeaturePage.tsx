import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";

const FeaturePage = () => {
  const heading = "Our Core Features";
  const subheading = "DPay Features";

  const features = [
    {
      title: "Send Money",
      description:
        "Send money instantly to other users or family members in just a few taps.",
      icon: <Timer className="w-6 h-6" />,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      title: "Cash In",
      description:
        "Add balance easily from any authorized agent — no transaction fee required.",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-green-400 via-teal-400 to-cyan-400",
    },
    {
      title: "Cash Out",
      description:
        "Withdraw your balance anytime from nearby agents with secure verification.",
      icon: <ZoomIn className="w-6 h-6" />,
      gradient: "from-red-400 via-orange-400 to-yellow-400",
    },
    {
      title: "B2B Transfer",
      description:
        "Agents can perform business-to-business transactions seamlessly, with zero fees.",
      icon: <PersonStanding className="w-6 h-6" />,
      gradient: "from-purple-400 via-pink-400 to-red-400",
    },
    {
      title: "Add Money",
      description:
        "Easily add money from our trusted banking partners and distributors.",
      icon: <DollarSign className="w-6 h-6" />,
      gradient: "from-blue-400 via-indigo-400 to-purple-400",
    },
    {
      title: "Customer Support",
      description:
        "24/7 support available to assist you with any service-related queries.",
      icon: <MessagesSquare className="w-6 h-6" />,
      gradient: "from-yellow-400 via-orange-400 to-red-400",
    },
  ];

  return (
    <section className="py-10 px-2 lg:px-8">
      <div
        className="container mx-auto max-w-6xl text-center space-y-3"
      >
        <p className="text-sm uppercase tracking-wide text-primary/80 font-medium animate-fade-in">
          {subheading}
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
          {heading}
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div
              className={`mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br ${feature.gradient} text-white text-2xl`}
            >
              {feature.icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{feature.title}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturePage;