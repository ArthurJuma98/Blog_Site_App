const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app

const app = express();

//connect to mongoDB

const dbURI = 'mongodb+srv://arthurjuma:feXt3OOLiWRMuKgq@cluster0.ysltvni.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine

app.set('view engine', 'ejs');

//listen for request

//app.listen(3000);

//Middleware & Static files

//use morgan
app.use(morgan('dev'));


//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog2',
//         snippet: 'this is what happens...',
//         body: 'more from this website will be coming soon so do not go and ...'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('657b2fca2db2b523c2e44f1c')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

//static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//app.use(morgan('tiny));


app.use((req, res, next) => {
    console.log('new request was made.');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

// app.use((req, res, next) => {
//     console.log('In the next middleware.');
//     next();
// });

//routes

app.get('/', (req, res) => {

    res.redirect('/blogs');

    // const blogs = [
    //     {title: 'The Maker of Metal', snippet: 'This is the page where we do ...'},
    //     {title: 'Chasing the sunset', snippet: 'We begin the journey by looking at...'},
    //     {title: 'The River Banks', snippet: 'Reaching out for the shores...'}
    // ];
    //res.send('<p>new page</p>');
    // res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.render('about', {title: 'About'});
});

//redirects

// app.get('/about-us', (req, res) => {
//     res.redirect('about');
// });

//blog routes

app.use(blogRoutes);

//404 page

app.use((req, res) => {
    res.status(404).render('404', {title: '404-error'});
});