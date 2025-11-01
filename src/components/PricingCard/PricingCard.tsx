// components/PricingCard.tsx
import { Check } from "lucide-react";
import { motion } from "motion/react";

interface PricingItem {
  label: string;
  fee: string;
}

interface PricingCardProps {
  title: string;
  items: PricingItem[];
  accentColor?: string;
}

const PricingCard = ({ title, items, accentColor = "bg-gradient-to-r from-indigo-500 to-purple-500" }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`mx-auto w-full rounded-3xl shadow-xl p-6 sm:p-8 text-gray-900 bg-white ${accentColor} bg-opacity-10 hover:shadow-2xl transition-all duration-300`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
      </div>
      <ul className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-white bg-opacity-70 rounded-xl p-3 shadow-sm hover:shadow-md transition"
          >
            <span className="font-medium">{item.label}</span>
            <span className="text-muted-foreground">{item.fee}</span>
            <Check className="text-green-500 size-5 md:size-6" />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;