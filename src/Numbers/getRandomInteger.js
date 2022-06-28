export default function getRandomInteger(min, max) {
    if( typeof min !== 'number' || typeof max !== 'number' ) {
        throw 'Input have to be a number!';
    } 
    if( min === Infinity || max === Infinity ) {
        throw 'Input can not be infinity!';
    }
    min > max && ([min, max] = [max, min]);
    return Math.floor(Math.random() * (max - min + 1) + min);
}