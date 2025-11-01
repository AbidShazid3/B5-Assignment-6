import PricingCard from "@/components/PricingCard/PricingCard";
import { motion } from "motion/react"

const Pricing = () => {
    const personalItems = [
        { label: "Cash Out", fee: "Fee: 1% Per Transaction" },
        { label: "Cash In", fee: "Fee: Free" },
        { label: "Send Money", fee: "Fee: 0.3% Per Transaction" },
        { label: "Add Money", fee: "Fee: Free" },
    ];

    const agentItems = [
        { label: "Cash Out", fee: "Commission: 0.5% Per Transaction" },
        { label: "Cash In", fee: "Commission: 0.5% Per Transaction" },
        { label: "B2B", fee: "Commission: Free" },
        { label: "Add Money", fee: "Commission: Free" },
    ];

    return (
        <section className="py-10 px-2 lg:px-8">

            {/* Section Header */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                layout
                className="text-center"
            >
                <h2 className="text-3xl font-semibold text-pretty lg:text-5xl mb-3">
                    Pricing And Fees
                </h2>
                <p className="text-muted-foreground lg:text-xl text-center">
                    See Our Payment Fees by Account wise
                </p>
            </motion.div>

            {/* Cards */}
            <div
                className="container mx-auto grid md:grid-cols-2 gap-10 mt-10"
            >
                <PricingCard title="Personal User Account" items={personalItems} />
                <PricingCard title="Agent Account" items={agentItems} />
            </div>
        </section>
    );
};

export default Pricing;
