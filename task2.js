import fs from 'fs';

let message = fs.readFileSync('message.txt', 'utf8');
message = message.toLowerCase().split(' ').join('');;

let rightWord = '';
let leftWord = '';

console.log(message);
for (let i = 0; i < message.length; i++) {
    if ((i % 2) != 0 && i != 0) {
        leftWord = leftWord + message[i];
        continue;
    }
    rightWord = rightWord + message[i];
}

let newMessage = rightWord + leftWord;


fs.appendFileSync('output.txt', 'transposition technique: ' + newMessage + '\n');
console.log(newMessage);

