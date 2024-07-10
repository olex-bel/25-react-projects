
import type { ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";
import { useLoadMore } from "../../hooks/useLoadMore";

type LoadMoreDataProps<T> = {
    className?: string;
    children: (item: T) => ReactNode;
    fetchData: (skip: number, limit: number, signal?: AbortSignal) => Promise<T[]>;
    limit?: number;
}

export default function LoadMoreData<T>({ className, children, fetchData, limit=10 }: LoadMoreDataProps<T>) {
    const { items, loading, hasMore, error, loadMore } = useLoadMore(limit, fetchData);

    return (
        <>
            <div className={className}>
                {
                    items.map((item) => children(item))
                }
            </div>
            {error && <p className="text-red-800 font-semibold">{error}</p>}
            {hasMore && 
                <button 
                    className="py-2.5 px-5 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" 
                    onClick={loadMore} disabled={loading}>
                    {loading && <FaSpinner className="animate-spin" />}
                    Load More
                </button>
            }
        </>
    );
}