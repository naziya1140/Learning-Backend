import fs from 'fs/promises';//file system promises module for async operations.

let a = await fs.readFile('naziya3.txt');
console.log(a.toString());//passing the output to variable a, earlier we were doing it in the callback function.

let b = await fs.appendFile('naziya3.txt', '\n\n appending using await', ()=>{
    console.log('file appended');
});

