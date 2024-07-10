
import type { ReactNode } from "react";
import { useLoadMore } from "../../hooks/useLoadMore";

type LoadMoreChildrenProps<T> = {
    items: T[];
    loading: boolean;
    hasMore: boolean;
    error: string | null;
    loadMore: () => Promise<void>;
};

type LoadMoreDataProps<T> = {
    className?: string;
    children: (props: LoadMoreChildrenProps<T>) => ReactNode;
    fetchData: (skip: number, limit: number, signal?: AbortSignal) => Promise<T[]>;
    limit?: number;
}

export default function LoadMoreData<T>({ children, fetchData, limit=10 }: LoadMoreDataProps<T>) {
    const loadMoreData = useLoadMore(limit, fetchData);

    return (
        <>
            {children({...loadMoreData})}
        </>
    );
}