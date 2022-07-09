export default function getRandomNumber(min: number, max: number, decimals: number = 0) {
    if (typeof min !== 'number' || typeof max !== 'number' || typeof decimals !== 'number') {
        throw 'Input have to be a number!';
    }
    if (min === Infinity || max === Infinity) {
        throw 'Input can not be infinity!';
    }
    if (decimals < 0 || decimals > 15) {
        throw 'Number of decimals can not be shorter than 0 and longer than 15!';
    }
    min > max && ([min, max] = [max, min]);
    decimals = Math.floor(decimals);
    decimals = Math.pow(10, decimals);
    max *= decimals;
    const number = Math.floor(Math.random() * (max - min + 1) + min) / decimals;
    return number;
}