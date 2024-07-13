
import { useState, useEffect } from "react";

export function useLocalStorage<T extends string>(key: string, defaultValue: T) {
    const [value, setValue] = useState(() => {
        const currentValue = localStorage.getItem(key);
        return currentValue || defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue] as const;
}
