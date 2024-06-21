
import { useReducer } from "react";
import { AccordionContext } from "./accordionContext";
import { accordionReducer, AccordionActionType } from "./accordionReducer";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import type { ReactNode } from "react";


type AccordionProps = {
    children?: ReactNode,
    className?: string;
    isMultiSelectionEnabled?: boolean;
}

function Accordion({ className, children, isMultiSelectionEnabled = false }: AccordionProps) {
    const [state, dispatch] = useReducer(accordionReducer, { 
        isMultiSelectionEnabled,
        selectedItemIds: [],
    });
    const isItemIdSelected = (itemId: string) => state.selectedItemIds.includes(itemId);
    const setMultiSelectionEnabled = (isEnabled: boolean) => dispatch({ type: AccordionActionType.SET_MULTI_SELECTION, payload: isEnabled });
    const toggleItemIdSelection = (itemId: string) => dispatch({ type: AccordionActionType.TOGGLE_SELECTION, payload: itemId});
    const accordionContextValue = {
        isMultiSelectionEnabled: state.isMultiSelectionEnabled,
        selectedItemIds: state.selectedItemIds,
        setMultiSelectionEnabled,
        toggleItemIdSelection,
        isItemIdSelected,
    }

    return (
        <AccordionContext.Provider value={accordionContextValue}>
            <div className={className}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;