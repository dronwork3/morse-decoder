const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
let exprArr = [];
    for (let i = 0; i < expr.length / 10; i++) {
      let part = expr.slice(i * 10, i * 10 + 10);
      exprArr.push(part);
    }
    let morseString = '';
    let decodeString = ''
    for (let i = 0; i < exprArr.length; i++) {
        for (let j = 0; j < exprArr[i].length / 2; j++) {
            let codePair = exprArr[i].slice(j * 2, j * 2 + 2);
            switch (codePair) {
                case '00':
                    break;
                case '10':
                    morseString += '.';
                    break;
                case '11':
                    morseString += '-';
                    break;
            }

        }
        if (morseString) {
            decodeString += MORSE_TABLE[morseString];
        } else {
            decodeString += ' '
        };
        morseString = '';
    }

    return decodeString;
}

module.exports = {
    decode
}