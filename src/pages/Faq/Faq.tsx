import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const Faq = () => {
  const heading = "Frequently Asked Questions";
  const description =
    "Find answers to common questions about our services. Can't find what you're looking for? Contact our support team.";

  const faqItems: FaqItem[] = [
    {
      id: "faq1",
      question: "What is Mobile Money Transfer (MFS)?",
      answer:
        "Mobile Money Transfer (MFS) is a service that allows you to send, receive, and store money securely using your mobile phone without the need for a bank account.",
    },
    {
      id: "faq2",
      question: "How do I register for MFS?",
      answer:
        "You can register by visiting your nearest agent or downloading the MFS app, then completing the registration with your mobile number and national ID.",
    },
    {
      id: "faq3",
      question: "Can I send money to someone who is not registered?",
      answer:
        "Yes, you can send money to both registered and unregistered users. Unregistered users can collect the money from the nearest MFS agent.",
    },
    {
      id: "faq4",
      question: "Is my money safe in MFS?",
      answer:
        "Yes, your money is safe. All transactions are secured with a PIN code, encryption, and regulated under the central bank.",
    },
    {
      id: "faq5",
      question: "What are the charges for sending money?",
      answer:
        "Charges vary depending on the transaction amount. Typically, a small service fee applies for sending, withdrawing, or transferring money.",
    },
    {
      id: "faq6",
      question: "Can I pay bills using MFS?",
      answer:
        "Yes, you can pay utility bills, mobile recharges, and even make online purchases directly from your MFS account.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      layout
      className="pb-32 px-8 pt-10"
    >
      <div className="">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">{heading}</h2>
          <p className="text-muted-foreground text-base md:text-lg">{description}</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-4xl space-y-4 mt-10"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <AccordionTrigger className="flex justify-between items-center p-4 text-lg font-medium text-left hover:bg-gray-50 rounded-xl transition">
                <span>{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};

export default Faq;
