import { useState } from 'react';
import RatingStar from './RatingStar';

type RatingProps = {
    maxRating: number;
    rating?: number;
    onRatingUpdated?: (rating: number) => void;
};

export default function Rating({maxRating = 5, rating = 0, onRatingUpdated} : RatingProps) {
    const [currentRating, setCurrentRating] = useState(rating);
    const [hoverIndex, setHoverIndex] = useState(0);
    const selectedStarIndex: number = hoverIndex > 0? hoverIndex : currentRating;

    const handleStarHover = (index: number) => {
        setHoverIndex(index);
    };
    const handleStarLeave = () => {
        setHoverIndex(0);
    };
    const handleStarSelected = (index: number) => {
        setCurrentRating(index);

        if (onRatingUpdated) {
            onRatingUpdated(index);
        }
    };

    return (
        <div className='flex'>
            {
                [...Array(maxRating).keys()].map((index: number) => {
                    const starIndex = index + 1;

                    return  (
                        <RatingStar 
                            key={index}
                            starIndex={starIndex}
                            selectedStarIndex={selectedStarIndex}
                            onStarSelect={handleStarSelected}
                            onStarHover={handleStarHover}
                            onStarLeave={handleStarLeave}
                        />
                    );
                })
            }
        </div>
    )
}