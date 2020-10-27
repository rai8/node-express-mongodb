const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const PORT = process.env.PORT || 3000

//connect to mongodb
//const dbURI = 'mongodb+srv://hytonne:Spacenet98@nodetut.rnors.mongodb.net/nodetut?retryWrites=true&w=majority'
const DB_URI = process.env.dbURI
mongoose
  .connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(result =>
    app.listen(PORT, () => {
      console.log(`---------server is running on port ${PORT}----------`)
    })
  )
  .catch(err => console.log(err))
//seeting up to use ejs
app.set('view engine', 'ejs')

//serving static files- css , images
app.use(express.static('public'))
//logger middleware
app.use(morgan('dev'))
/* app.use((req, res, next) => {
  console.log('new request')
  console.log('host', req.hostname)
  console.log('path', req.path)
  console.log('method', req.method)
  next()
}) */
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my blog',
    body: 'more about my blog see yaaaaaaal',
  })

  //save to the databse
  blog
    .save()
    .then(results => res.send(results))
    .catch(err => console.log(err))
})

//get all blogs documents
app.get('/all-blogs', (req, res, next) => {
  Blog.find()
    .then(results => res.send(results))
    .catch(err => console.log(err))
})

app.get('/', (req, res) => {
  //res.send(`<p>Home Page</p>`)
  //res.sendFile('./views/index.html', { root: __dirname })
  const blogs = [
    { title: 'Yoshi finds egs', snippet: 'Lorem ipsum sit amet consectetur' },
    { title: 'Mario finds stars', snippet: 'Lorem ipsum sit amet consectetur' },
    { title: 'How to defeat browser', snippet: 'Lorem ipsum sit amet consectetur' },
  ]
  res.render('index', {
    title: 'Home',
    blogs,
  })
})

app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', { root: __dirname })
  res.render('about', {
    title: 'About',
  })
})
//handling redirection
/* app.get('/about-me', (req, res) => {
  //res.redirect('/about')
  res.render('about')
}) */
app.get('/blogs/create', (req, res) => {
  res.render('create', {
    title: 'Create',
  })
})

//handling 404 pages
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Not found',
  })
})
// listening to server
/* app.listen(PORT, () => {
  console.log(`---------server is running on port ${PORT}----------`)
})
 */
