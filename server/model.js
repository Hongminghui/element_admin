const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/element_admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true

})

const ArticleSchema = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  content: { type: String }
})

const Article = mongoose.model('Article', ArticleSchema)



module.exports = { Article }

