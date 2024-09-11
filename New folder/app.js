const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3004;
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase',{

})
.then(()=> console.log)


// app.get('/',(req,res)=>{
//     res.send('Hello world,from express');
// });

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('book')
});

//Where we will keep books
let books =[];

app.use (cors());

// Configuring body parser middleware 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/book',(req,res)=>{
    const book = req.body;

    //Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to database');
});

app.listen(port,()=>
    console.log(`Hello world app listening on port ${port}`));