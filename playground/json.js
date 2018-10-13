// var obj = {
//   name: 'Samuel'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Samuel","age": 99}';
// convert JSON string in Objest ==> use PARSE
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
// Add notes
var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);


















