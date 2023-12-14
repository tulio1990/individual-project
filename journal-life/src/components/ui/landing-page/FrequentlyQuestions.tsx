"use client";

import { faqSection } from "@/lib/constants";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FrequentlyQuestions() {

  return (
    <div className="bg-Kilamanjaro-950 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-10 lg:max-w-none lg:py-18">
            <h1 className="mb-10 text-2xl font-bold text-silverSand-50 font-poppins">
            Frequently Asked Questions
            </h1>
            <Accordion variant="shadow">
                {faqSection.map( (item) => {
                    return (
                        <AccordionItem
                        className="text-Kilamanjaro-950 f-16 font-poppins"
                        key={item.id}
                        aria-label={item.question}
                        title={item.question}
                        >
                        {item.answer}
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
        </div>
    </div>
  );
}