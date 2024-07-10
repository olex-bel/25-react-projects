
import type { Product } from "./types";

export const fetchData = async (skip: number, limit: number, signal?: AbortSignal) => {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail,rating`, {
          signal,
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
        if (!Array.isArray(data.products)) {
          throw new Error("Invalid response format");
        }
    
        return data.products as Product[];
    } catch (error) {
        console.error("Failed to fetch data", error);
        throw error; // Re-throw the error after logging it
    }
};