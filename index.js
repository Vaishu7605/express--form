express = require('express')

path = require('path')
fs=require('fs')


app = express();
port = 3000;

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, ()=>{console.log(`server running on port ${port}`)})

app.get('./', (req,res)=>{res.sendFile(path.join(__dirname, 'index.html'))})

app.post('./submit',(req,res)=>{
    details = req.body.fname + req.body.location;
    fs.writeFile('details.txt', details, (err)=>{
        if (err) {
            console.log(err)
        }
        else{
            console.log('file created')
        }
    })
    res.send('Thank you for submitting the form ' + req.body.fname )
})