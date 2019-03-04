const fs = require("fs")

//const objNote = JSON.parse('{"title":"X","body":"X"}');

const getNotes =() => {
    console.log("Here are your notes")
    const myNotes = loadNotes()
    myNotes.forEach((note) =>{
        console.log(note.title)
    })
}

const addNote = (title, body) => {
    const myNotes = loadNotes()

    const duplicateNotes = myNotes.filter((note) => note.title === title)

    if(!duplicateNotes.length){
        myNotes.push({
            "title":title,
            "body":body
        })
        updateNotes(myNotes)
    }else {
        console.log("You already have this note captured")
    }
}

const removeNote = (title) => {
    const myNotes = loadNotes()

    const findNote = myNotes.findIndex((note) => note.title === title)

    console.log(findNote)

    myNotes.splice(findNote,1)
    updateNotes(myNotes)

}

const loadNotes = () => {
    try{
        const databuffer = fs.readFileSync("./notes.json")
        const dataStr = databuffer.toString()
        return JSON.parse(dataStr)
    }catch(e){
        return [];
    }

}

const updateNotes = (notes) => {
    fs.writeFileSync("./notes.json",JSON.stringify(notes),"UTF-8");
}

module.exports = {
    getNotes: getNotes,
    addNote :addNote,
    removeNote : removeNote
};