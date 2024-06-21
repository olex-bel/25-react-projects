
import { useContext } from "react";

import { AccordionItemContext } from "./accordionItemContext";
import type { ReactNode } from "react";

type AccordionContentProps = {
    children: ReactNode;
    className?: string;
};


export default function AccordionContent({ children, className }: AccordionContentProps) {
    const accordionItemContext = useContext(AccordionItemContext);

    if (!accordionItemContext) {
        throw new Error('AccordionContent component must be a child of the Accordion component. Make sure to render AccordionItem inside the AccordionItem component\'s content.');
    }

    const contentContentClass = accordionItemContext.isOpen? "" : "hidden";

    return (
        <div 
            id={accordionItemContext.itemId}
            role="region"
            aria-labelledby={accordionItemContext.controlId}
            className={className? `${contentContentClass} ${className}` : contentContentClass}
        >
            {children}
        </div>
    )
}