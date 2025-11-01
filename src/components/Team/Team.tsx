import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

const Team = () => {
    const heading = "Our Teams";
    const description =
        "Our diverse team of experts brings together decades of experience in design, engineering, and product development.";
    const members = [
        {
            id: "member-1",
            name: "Sarah Chen",
            role: "CEO & Founder",
            avatar: "https://i.ibb.co.com/5WvF6F5/service-4.jpg",
        },
        {
            id: "member-2",
            name: "Marcus Rodriguez",
            role: "CTO",
            avatar: "https://i.ibb.co.com/BZLhwD1/guide-2.jpg",
        },
        {
            id: "member-3",
            name: "Emily Watson",
            role: "Head of Design",
            avatar: "https://i.ibb.co.com/XXVXHSQ/guide-4.jpg",
        },
        {
            id: "member-4",
            name: "David Kim",
            role: "Lead Engineer",
            avatar: "https://i.ibb.co.com/Kx6RtvM/guide-3.jpg",
        },
        {
            id: "member-5",
            name: "Lisa Thompson",
            role: "Product Manager",
            avatar: "https://i.ibb.co.com/9HRyhQwg/team-5.jpg",
        },
        {
            id: "member-6",
            name: "Alex Johnson",
            role: "UX Designer",
            avatar: "https://i.ibb.co.com/Ld3HCkBP/team-6.jpg",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="py-16 px-4 sm:px-6 lg:px-8 bg-background"
        >
            {/* Heading */}
            <div className="container mx-auto flex flex-col items-center text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-3xl font-bold md:text-4xl tracking-tight"
                >
                    {heading}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg leading-relaxed"
                >
                    {description}
                </motion.p>
            </div>

            {/* Team Members Grid */}
            <div className="container mx-auto grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
                {members.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                        <Avatar className="mb-4 size-20 md:size-24 border-2 border-muted overflow-hidden">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <p className="text-lg font-semibold text-foreground">
                            {member.name}
                        </p>
                        <p className="text-muted-foreground text-sm md:text-base mt-1">
                            {member.role}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Team;