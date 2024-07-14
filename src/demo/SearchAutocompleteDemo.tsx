import SearchAutocomplete from "../components/SearchAutocomplete";

const fetchSuggestions = async (query: string, limit: number) => {
    try {
        const response = await fetch(`https://dummyjson.com/users/search?q=${query}&limit=${limit}`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      
        const data = await response.json();

        if (!Array.isArray(data.users)) {
            throw new Error("Invalid response format");
        }

        return data.users.map((user: {id: string, lastName: string, firstName: string }) => {
            return {
                id: user.id,
                value: `${user.firstName} ${user.lastName}`,
            }
        })
    } catch (e) {
        return [];
    }
};

export default function SearchAutocompleteDemo() {
    return (
        <main className="m-4 w-[300px]">
            <SearchAutocomplete label="User search" fetchSuggestions={fetchSuggestions} />
        </main>
    )
}
