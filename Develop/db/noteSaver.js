const fs = require('fs');
const util= require('util');
const express = require('express');
const uid = require('uuid');
const readFileAsync= util.promisify(fs.readFile);
const writeFileAsync= util.promisify(fs.writeFile);


const app = express();

class Notes {

    

    read(){
        return readFileAsync('/Develop/db/db.json', 'utf8');
    }

    write(note) {
        return writeFileAsync('/Develop/db/db.json', JSON.stringify(note));
    }

    getNotes(){
        return this.read().then(notes =>{
            const notePar=JSON>parse(notes);
            return notePar;
        });
    };

    addNote(note) {

        const {title,text}=note;
        const newNote={id: uid.v4(),title,text};
        return this.getNotes().then(notes =>{
            const newNoteArr = [...notes,newNote];
            return this.write(newNoteArr);
        });
    };

    deleteNotes(id) {
        return this.getNotes()

        .then ((notes)=> notes.filter((note)=>note.id !== id))
        .then((notesDel)=>this.write(notesDel))

        
    }

};


module.exports= new Notes;