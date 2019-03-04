const validator = require("validator");
const yargs = require("yargs");
const chalk = require("chalk");
const notes = require('./notes.js');

//setup yargs options and app commands
yargs.version("1.0.0");

yargs.command({
    command: 'add',
    describe: 'adds a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){notes.addNote(argv.title, argv.body)}
})

yargs.command({
    command: 'remove',
    describe: 'Removes a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){notes.removeNote(argv.title)}
})

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler(){
        notes.getNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler(){console.log("Will read a note");}
})
yargs.parse();