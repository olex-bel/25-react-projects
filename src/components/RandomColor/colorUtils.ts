
type RGB = {
    red: number;
    green: number;
    blue: number;
}

function toHex(num: number): string {
    const hex = num.toString(16);
    return hex.length === 1? '0' + hex : hex;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
}

export function getRandomColor(): RGB {
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);

    return {
        red, green, blue,
    };
}

export function getInvertedColor({ red, green, blue }: RGB): RGB {
    const invertedRed = 255 - red;
    const invertedGreen = 255 - green;
    const invertedBlue = 255 - blue;

    return {
        red: invertedRed,
        green: invertedGreen,
        blue: invertedBlue,
    };
}

export function toHexColor({ red, green, blue }: RGB): string {
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}
