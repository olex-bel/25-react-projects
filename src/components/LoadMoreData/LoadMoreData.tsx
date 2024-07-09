
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

type LoadMoreDataProps<T> = {
    children: (item: T) => ReactNode;
    fetchData: (skip: number, limit: number) => Promise<T[]>;
    limit?: number;
}

export default function LoadMoreData<T>({ children, fetchData, limit=10 }: LoadMoreDataProps<T>) {
    const [items, setItems] = useState<T[]>([]);

    useEffect(() => {
        let ignoreData = false;

        const loadData = async () => {
            const newItems = await fetchData(0, limit);

            if (!ignoreData) {
                setItems((prevItems) => [...prevItems, ...newItems]);
            }
        };

        loadData();

        return () => { 
            ignoreData = true;
        };
    }, [fetchData, limit]);

    const handleLoadMore = async () => {
        const newItems = await fetchData(items.length, limit);
        setItems((prevItems) => [...prevItems, ...newItems]);
    };

    return (
        <>
            <div>
                {
                    items.map((item) => children(item))
                }
            </div>
            <button onClick={handleLoadMore}>Load More</button>
        </>
    );
}