const mongoose = require('mongoose')

//schema is something that defines the structure of our document
const schema = mongoose.Schema

const blogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

//setting up our model based on our structure (schema)
// the const should be in capital
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
