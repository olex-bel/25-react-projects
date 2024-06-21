
import { useContext, useId } from "react";
import { AccordionContext } from "./accordionContext";
import { AccordionItemContext } from "./accordionItemContext";
import type { ReactNode } from "react"

type AccordionItemProps = {
    children: ReactNode;
    itemId: string;
    className?: string;
} 

export default function AccordionItem({ itemId, children, className }: AccordionItemProps) {
    const accordionContext = useContext(AccordionContext);
    const controlId = useId();

    if (!accordionContext) {
        throw new Error('AccordionItem component must be a child of the Accordion component. Make sure to render AccordionItem inside the Accordion component\'s content.');
    }

    const toggleItemSelection = () => {
        accordionContext.toggleItemIdSelection(itemId);
    };

    const accordionItemContextValue = {
        itemId,
        controlId,
        isOpen: accordionContext.isItemIdSelected(itemId),
        toggleItemSelection,
    };

    return (
        <AccordionItemContext.Provider value={accordionItemContextValue}>
            <section className={className}>
                {children}
            </section>
        </AccordionItemContext.Provider>
    );
}