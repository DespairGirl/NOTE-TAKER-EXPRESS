const router = require('express').Router();
const noteSaver= require ('./../Develop/db/noteSaver')


router.get('/notes', (req,res) =>{
    noteSaver
    .getNote()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});

router.post('/notes', (req,res) =>{
    noteSaver
    .addNote(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
});

router.delete('/notes/:id', (req,res)=>{
    noteSaver.deleteNote(req.params.id)
    .then(()=> res.json({ok:true}))
    .catch((err)=> res.status(500).json(err))
});




module.exports = router();