import fs from 'fs';

let alphabet = fs.readFileSync('alphabet.txt', 'utf8');
alphabet = alphabet.toLowerCase();

let message = fs.readFileSync('message.txt', 'utf8');
message = message.toLowerCase();

let newMessage = '';

for(let i = 0; i < message.length; i++) {
    let pos = alphabet.indexOf(message[i]);

    if (pos == 25) {
        newMessage = newMessage + alphabet[2];
        continue;
    }
    if (pos == 24) {
        newMessage = newMessage + alphabet[1];
        continue;
    }
    if (pos == 23) {
        newMessage = newMessage + alphabet[0];
        continue;
    }
    newMessage = newMessage + alphabet[(pos % alphabet.length) +3];
}

const result = ``

fs.appendFileSync('output.txt', 'substitution technique: ' + newMessage + '\n');
console.log(newMessage);
