const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//seeting up to use ejs
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  //res.send(`<p>Home Page</p>`)
  //res.sendFile('./views/index.html', { root: __dirname })
  const blogs = [
    /*  { title: 'Yoshi finds egs', snippet: 'Lorem ipsum sit amet consectetur' },
    { title: 'Mario finds stars', snippet: 'Lorem ipsum sit amet consectetur' },
    { title: 'How to defeat browser', snippet: 'Lorem ipsum sit amet consectetur' }, */
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
app.get('/about-me', (req, res) => {
  //res.redirect('/about')
  res.render('about')
})
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
app.listen(PORT, () => {
  console.log(`---------server is running on port ${PORT}----------`)
})
