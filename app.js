console.log('Startinodemonng app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');





// var user = os.userInfo();
// console.log(user)
// fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.age}`);

// var res = notes.addNote();
// console.log(res);
//console.log('Result', notes.add(38, -13));

// 1 -->lodash.com

// lodash---> _.isString
// console.log(_.isString(true));
// console.log(_.isString('Samuel'));

// // lodash ---> _.uniq
// var filteredArray =_.uniq(['Samuel', 1, 'Samuel', 1, 2, 3, 4, 2, 6, 7, 3, 1])
// console.log(filteredArray);



// 3 Yargs  npm install yargs@4.7.1 --save
const argv = yargs.argv;

// 2 ARGV
var command = process.argv[2];
console.log('command:', command);
console.log(process.argv);
console.log('Yargd', argv)

if(command === 'add'){
	//console.log('adding new note');
	notes.addNote(argv.title, argv.body);

} else if(command === 'list'){
	//console.log('Listing all notes');
	notes.getAll();
	 } else if(command === 'read') {
	 	//console.log('reading note');
	 	notes.getAll();
	 	//command ==> node app.js read  --title=Account --body 'this is my Acount'
	 	 } else if(command === 'remove'){
	 	 	//console.log('Removing note');
	 	 	notes.removeNote(argv.title)
		} else {
			console.log('Command not recongnized');
}











































