const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')
const PORT = 80
const path = require('path')

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'angular'))) // informing our backend serveer that build is a static folder

app.get('/api/getData', async (req, res) => {
    try {

        let todo = [{
            id: 1,
            title: 'Attend function at Delhi',
            completed: false
        },
        {
            id: 2,
            title: 'Buy laptop ASAP',
            completed: false
        }]

        res.send({data:todo,status: 200})

    } catch (error) {
        console.error(error)
        res.send({error:error.message, status:400})
    }
})






//last route
app.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname,'angular', 'index.html'))
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})