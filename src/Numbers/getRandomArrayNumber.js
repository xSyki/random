export default function getRandomArrayNumber(min, max, length) {
    if( typeof min !== 'number' || typeof max !== 'number' || typeof length !== 'number' ) {
        throw 'Input have to be a number!';
    }
    if( min === Infinity || max === Infinity | length === Infinity ) {
        throw 'Input can not be infinity!';
    }
    if(length < 0 ) {
        throw 'Length of the array can not be shorter than 0!'
    }
    const array = [];
    min > max && ([min, max] = [max, min]);
    for(let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return array;
}