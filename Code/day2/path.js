import path from 'path';

let filePath = 'C:\\Users\\Naziya Begum\\OneDrive\\Desktop\\Back_end\\day2\\path.js';

console.log(path.basename(filePath));//file name with extension.
console.log(path.dirname(filePath));//directory of the file.
console.log(path.extname(filePath));//extension of the file can be extracted.

console.log(path.join("C:\\", "programs", "Nodejs"));
