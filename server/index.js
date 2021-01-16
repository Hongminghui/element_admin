const express = require('express')

const app = express()

app.use(express.json())
app.use(require('cors')())

const { Article } = require('./model')

app.get('/api', async (req, res) => {
  const list = await Article.find()
  res.send(list)
})

// 发表文章
app.post('/api/createArticle', async (req, res) => {
  req.body.author = '李白'
  const article = await Article.create(req.body)
  res.send(article)
})

// 文章列表
app.get('/api/article-list', async (req, res) => {
  const list = await Article.find()

  res.send(list)

})

// 编辑文章
app.get('/api/article/:id/edit', async (req, res) => {
  const id = req.params.id
  const article = await Article.findById(id)
  res.send(article)
})

app.put('/api/edit/:id/article', async (req, res) => {
  const id = req.params.id
  const article = await Article.findByIdAndUpdate(id, req.body)

})

// 删除文章
app.delete('/api/article/:id/delete', async (req, res) => {
  const id = req.params.id
  await Article.findByIdAndDelete(id)
  res.send({
    success: true
  })
})
app.listen(3000, () => {
  console.log('http://localhost:3000')
})



