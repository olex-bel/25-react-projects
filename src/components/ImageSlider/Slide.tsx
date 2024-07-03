
import type { ComponentProps } from "react";

type SlideProps = {
    imageUrl: string;
    description: string;
} & ComponentProps<"li">

export default function Slide({ imageUrl, description, ...props } : SlideProps) {
    return (
        <li {...props}>
            <img src={imageUrl} alt={description} />
        </li>
    )
}
