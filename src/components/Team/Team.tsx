import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

const Team = () => {
    const heading = "Our Teams";
    const description =
        "Our diverse team of experts brings together decades of experience in design, engineering, and product development.";
    const members = [
        {
            id: "member-1",
            name: "Abid Shazid",
            role: "CEO & Founder",
            avatar: "https://i.ibb.co.com/gMgsqtM9/Abid-Shadat-Noor.jpg",
        },
        {
            id: "member-2",
            name: "Jonas Lupe",
            role: "Head of Technology",
            avatar: "https://i.ibb.co.com/mCYzP3Yj/jonas-leupe-Warg-GLQW-Yk-unsplash.jpg",
        },
        {
            id: "member-3",
            name: "Kealy Connor",
            role: "Lead Backend Engineer",
            avatar: "https://i.ibb.co.com/RchXwd5/5-S-Z-ESTAVILLO-1.png",
        },
        {
            id: "member-4",
            name: "Lahud Alam",
            role: "Lead UI/UX Designer",
            avatar: "https://i.ibb.co.com/j31LXv2/462082235-1803618760045179-6934443572332434588-n.jpg",
        },
        {
            id: "member-5",
            name: "Marcos felipe",
            role: "FinTech Specialist",
            avatar: "https://i.ibb.co.com/D1kBL9b/pexels-cristian-rojas-10041272.jpg",
        },
        {
            id: "member-6",
            name: "Cristiana",
            role: "Customer Experience",
            avatar: "https://i.ibb.co.com/jks54yd/pexels-marcos-felipe-177641462-13331367.jpg",
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
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
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