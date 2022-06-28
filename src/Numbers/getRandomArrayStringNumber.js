export default function getRandomArrayStringNumber(minLength, arrayLength, maxLength = minLength) {
    if( typeof minLength !== 'number' || typeof maxLength !== 'number' || typeof arrayLength !== 'number' ) {
        throw 'Input have to be a number!';
    }
    if(minLength < 0 || minLength === Infinity || maxLength < 0 || maxLength === Infinity || arrayLength < 0 || arrayLength === Infinity) {
        throw 'Length can not be shorter than 0 and equal to infinity!';
    }
    minLength > maxLength && ([minLength, maxLength] = [maxLength, minLength]);
    const array = [];
    for(let i = 0; i < arrayLength; i++) {
        let string = "";
        const stringLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength)
        for (let b = 0; b < stringLength; b++) {
            string += Math.floor(Math.random() * 10)
        }
        array.push(string);
    }
    return array;
}