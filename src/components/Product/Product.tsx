
import Rating from "../Rating";
import type { Product } from "./types";

const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

type ProductProps = {
    item: Product;
};

export default function Product({ item }: ProductProps) {
    return (
        <div className="flex flex-col items-center m-2">
            <img className="w-[200px]" src={item.thumbnail} alt={item.title} />
            <p className="font-semibold my-2">{item.title}</p>
            <Rating maxRating={5} rating={Math.ceil(item.rating)} />
            <p className="font-semibold text-lg">{USDollar.format(item.price)}</p>
        </div>
    );
}
