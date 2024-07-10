import LoadMoreData from "../components/LoadMoreData";
import { fetchData } from "../components/Product/api";
import Product from "../components/Product/Product";
import { FaSpinner } from "react-icons/fa";

import type { Product as ItemType } from "../components/Product/types";

export default function LoadMoreProductsDemo() {
    return (
        <LoadMoreData<ItemType> limit={12} fetchData={fetchData}>
            {
                ({ items, loading, hasMore, error, loadMore }) => (
                    <main>
                        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-4">
                            {
                                items.map((item) => <Product item={item} />)
                            }
                        </div>
                        <div className="flex flex-col items-center gap-2 mt-5">
                            {error && <p className="text-red-800 font-semibold">{error}</p>}
                            {hasMore && 
                                <button 
                                    className="py-2.5 px-5 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" 
                                    onClick={loadMore} 
                                    disabled={loading}>
                                        <span className="block flex items-center justify-between gap-2">
                                            {loading && <FaSpinner className="animate-spin" />}
                                            Load More
                                        </span>
                                </button>
                            }
                        </div>
                    </main>
                )
            }
        </LoadMoreData>
    );
}
