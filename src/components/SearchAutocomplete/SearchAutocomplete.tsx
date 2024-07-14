
import { useState, useEffect, useId, ChangeEvent, KeyboardEvent } from "react";

type SuggestionItem = {
    id: string;
    value: string;
};

type SearchAutocompleteProps = {
    label: string;
    limit?: number;
    minQueryLength?: number; 
    fetchSuggestions: (query: string, limit: number) => Promise<SuggestionItem[]>;
};

export default function SearchAutocomplete({label, limit = 5, minQueryLength = 3, fetchSuggestions} : SearchAutocompleteProps) {
    const [inputValue, setInputValue] = useState("");
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const id = useId();

    useEffect(() => {
        let timeoutId = null;

        if (query.length >= minQueryLength) {
            timeoutId = setTimeout(async () => {
                const possibleValues = await fetchSuggestions(query, limit);
                setSuggestions(possibleValues);
                setHighlightedIndex(-1);
            }, 1000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }
    }, [query, minQueryLength, limit, fetchSuggestions]);

    const handleInputChange  = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setQuery(value);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setQuery('');
        setSuggestions([]);
        setHighlightedIndex(-1);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown') {
          setHighlightedIndex((prevIndex) =>
            prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1
          );
        } else if (e.key === 'ArrowUp') {
          setHighlightedIndex((prevIndex) =>
            prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1
          );
        } else if (e.key === 'Enter') {
          if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
            handleSuggestionClick(suggestions[highlightedIndex].value);
          }
        } else if (e.key === 'Escape') {
          setSuggestions([]);
        }
    };

    return (
        <div className="w-full relative">
            <input 
                type="text" 
                placeholder="Search..." 
                className="p-1 w-full my-2 border border-solid" 
                value={inputValue} 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={suggestions.length > 0}
                aria-controls={id}
            />
            {suggestions.length > 0 && (
                <ul id={id} className="absolute p-1 top-full left-0 right-0 border-solid border" role="listbox" aria-label={label}>
                    {suggestions.map((suggestion, index) => {
                        return (
                            <li 
                                role="option" 
                                key={suggestion.id} 
                                className={`cursor-pointer ${highlightedIndex === index? "bg-sky-100" : ""}`}
                                onClick={() => handleSuggestionClick(suggestion.value)}
                            >
                                {suggestion.value}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}
