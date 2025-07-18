const fs = require('fs');
console.log(fs);

//not a good way of writing as it is a blocking code(way of writing).
// console.log('starting');
// fs.writeFileSync('Naziya.txt', 'Hello, Naziya!');
// console.log('ending');


// To write asynchronously
console.log('starting');
fs.writeFile('Naziya2.txt', 'Hi what are you doing?', () => {
    console.log('file is written'); 
});
console.log('ending');


//now writing in another file.
fs.writeFile('Naziya3.txt', 'I am going to append in this file name of some superheroes', () =>{
    console.log('file is written');
    fs.readFile('Naziya3.txt', (err, data) => {
        console.log(err);
        // data is in buffer format, so we need to convert it to string.
        // console.log(data);

        console.log(data.toString());
        //if you will do the above thing of creating and reading file multiple time it will create callback hell.
    })
});

//when you want to add something in the file.
fs.appendFile('Naziya3.txt', ' batman, shaktimaan', (error, data) => {
    console.log(data);
    console.log('file appended');
})