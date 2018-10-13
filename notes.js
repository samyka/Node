console.log('starting notes.js');

//console.log(module);

//module.exports.age = 25;b

// module.exports.addNote = ()=>{
// 	console.log('addNote')
// 	return 'New note';
// }

// module.exports.add = (a,b) =>{
// 	return a + b;
// };

// JSON 

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};



var addNote = (title, body) => {
console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('Getting all notes')
};

var getNote = (title) => {
	console.log('Getting note', title);
};

var removeNote  = (title) => {
	console.log('Removing Note', title);
}

module.exports =  {
	//  (addNote: addNote) in ES6
	addNote,
	getAll,
	getNote,
	removeNote
};
































