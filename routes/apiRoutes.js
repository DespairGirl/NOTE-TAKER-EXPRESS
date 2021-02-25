const fs= require("fs") ;

module.exports = (app) => {

app.get('/api', (req,res) => {
    res.sendFile(path.join(__dirname,))
})

}