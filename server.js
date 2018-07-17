/**
 * Created by Administrator on 2018-07-16.
 */


const express =  require('express');
const mongoose =  require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');



const app  = express();
const db =  require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true})
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello'));

const port = process.env.PORT || 5000;

//use routes

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', post);

app.listen(port , () => console.log(`server running on http://localhost:${port}`))
