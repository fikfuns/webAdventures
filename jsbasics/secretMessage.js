let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Use an array method to remove last string of the array

secretMessage.pop();
//console.log(secretMessage.length);

// Add words 'to' and 'program'

secretMessage.push('to','Program');
//console.log(secretMessage);

// Change 'easily' to 'right'
console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';
// console.log(secretMessage);

// Remove first string of the array
secretMessage.shift();
//console.log(secretMessage);

// Add string 'Programming' to the beginning of array
secretMessage.unshift('Programming');
//console.log(secretMessage);

// Remove string 'get' 'right' 'the' 'first' 'time', replace with 'know'
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

console.log(secretMessage.join(' '));
