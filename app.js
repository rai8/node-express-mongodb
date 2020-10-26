const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//seeting up to use ejs
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  //res.send(`<p>Home Page</p>`)
  res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname })
})
//handling redirection
app.get('/about-me', (req, res) => {
  res.redirect('/about')
})

//handling 404 pages
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname })
})
// listening to server
app.listen(PORT, () => {
  console.log(`---------server is running on port ${PORT}----------`)
})
