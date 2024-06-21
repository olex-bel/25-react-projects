import { useContext } from "react";
import { SlArrowDown } from "react-icons/sl";
import { AccordionItemContext } from "./accordionItemContext";
import type { ReactNode } from "react";

type AccordionHeaderProps = {
    children: ReactNode;
    className?: string;
};

export default function AccordionHeader({ children, className }: AccordionHeaderProps) {
    const accordionItemContext = useContext(AccordionItemContext);

    if (!accordionItemContext) {
        throw new Error('AccordionHeader component must be a child of the Accordion component. Make sure to render AccordionItem inside the AccordionItem component\'s content.');
    }

    return (
        <h3 className={className}>
            <button type="button"
                aria-expanded={accordionItemContext.isOpen}
                aria-controls={accordionItemContext.itemId}
                id={accordionItemContext.controlId}
                className="w-full"
                onClick={accordionItemContext.toggleItemSelection}
            >
                <span className="block flex flex-row items-center justify-between">
                    {children}
                    <span className={`transition-transform ${accordionItemContext.isOpen? "rotate-180": ""}`}>
                        <SlArrowDown />
                    </span>
                </span>
            </button>
        </h3>
    );
}
