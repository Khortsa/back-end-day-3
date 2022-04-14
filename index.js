const express = require('express');
const app = express();
const engine = require("express-handlebars").engine
app.engine('handlebars', engine());

app.use(express.static('public'))
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.render('home', {title: 'hi home'})
})

app.get('/login', (req, res) =>{
    res.render('form');
})

app.post('/form', (req, res) =>{
    console.log(req.body)
})






app.listen(3006, () =>{
    console.log('page running on 3006')
})