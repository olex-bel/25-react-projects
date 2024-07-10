
import { useState, useEffect } from "react";


type FetchDataCallback<T> = (skip: number, limit: number, signal?: AbortSignal) => Promise<T[]>

export function useLoadMore<T>(limit: number, fetchData: FetchDataCallback<T>) {
    const [items, setItems] = useState<T[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);
    const [skip, setSkip] = useState(0);

    const loadMore = async () => {
        if (loading || !hasMore)  {
            return;
        }

        setLoading(true);
        setError(null);
    
        try {
            const newItems = await fetchData(skip, limit,);
            
            setHasMore(limit === newItems.length);
            setItems((prevItems) => [...prevItems, ...newItems]);
            setSkip((prevSkip) => prevSkip + limit);
        } catch (err) {
            if (!(err instanceof Error) || err.name !== 'AbortError') {
                    setError('Failed to fetch data');
            }
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        const controller = new AbortController();

        const initialLoadData = async () => {
            setLoading(true);
            setError(null);

            try {
                const newItems = await fetchData(0, limit, controller.signal);
                setHasMore(limit === newItems.length);
                setItems([...newItems]);
                setSkip(limit);
            } catch (err) {
                if (!(err instanceof Error) || err.name !== 'AbortError') {
                        setError('Failed to fetch data');
                }
            } finally {
                setLoading(false);
            }
        }

        initialLoadData();

        return () => {
            controller.abort();
        };
    }, [fetchData, limit]);
    
    return { items, loading, error, hasMore, loadMore };
}
