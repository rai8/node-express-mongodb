const fs = require('fs')

//reading files
/* fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) throw err
  console.log(data.toString())
}) */
//writing files

/* fs.writeFile('./docs/blog1.txt', 'hello, ninja', () => {
  console.log('file is written')
})

fs.writeFile('./docs/blog2.txt', 'hello,Krishna', () => {
  console.log('file is written')
}) */

//directories
/* fs.mkdir('./assets', err => {
  if (err) throw err
  console.log('directory has been created')
}) */

//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    if (err) throw err
    console.log('file deletion successful')
  })
}
