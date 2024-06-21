import { createContext } from "react"

export type AccordionContextType = {
    isMultiSelectionEnabled: boolean;
    selectedItemIds: string[];
    setMultiSelectionEnabled: (isEnabled: boolean) => void;
    toggleItemIdSelection: (itemId: string) => void;
    isItemIdSelected: (itemId: string) => boolean;
};

export const AccordionContext = createContext<AccordionContextType | null>(null);