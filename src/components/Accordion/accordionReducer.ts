export enum AccordionActionType {
    SET_MULTI_SELECTION = 'SET_MULTI_SELECTION',
    TOGGLE_SELECTION = 'TOGGLE_SELECTION'
}

export type AccordionState = {
    isMultiSelectionEnabled: boolean;
    selectedItemIds: string[];
};

type SetMultiSelectionAction = {
    type: AccordionActionType.SET_MULTI_SELECTION;
    payload: boolean;
};

type ToggleSelectionAction = {
    type: AccordionActionType.TOGGLE_SELECTION;
    payload: string;
};

type AccordionAction = SetMultiSelectionAction | ToggleSelectionAction;

function toggleSelection(state: AccordionState, action: ToggleSelectionAction) {
    const itemId = action.payload;
    const isSelected = state.selectedItemIds.includes(itemId);

    if (isSelected) {
        return {
            ...state,
            selectedItemIds: state.selectedItemIds.filter(id => id !== itemId),
        };
    } else {
        return {
            ...state,
            selectedItemIds: state.isMultiSelectionEnabled
                ? [itemId, ...state.selectedItemIds]
                : [itemId],
        };
    }
}

export function accordionReducer(state: AccordionState, action: AccordionAction) {
    switch (action.type) {
        case 'SET_MULTI_SELECTION':
            return {
                ...state,
                isMultiSelectionEnabled: action.payload,
                selectedItemIds: action.payload ? state.selectedItemIds : state.selectedItemIds.slice(0, 1),
            };

        case 'TOGGLE_SELECTION':
            return toggleSelection(state, action);

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}
