import { createContext } from "react"

export type AccordionItemContextType = {
    itemId: string;
    controlId: string;
    isOpen: boolean;
    toggleItemSelection: () => void;
};

export const AccordionItemContext = createContext<AccordionItemContextType | null>(null);
