const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:page', (req, res) => {
    const page = req.params.page
    res.render('website', {page})
})

app.listen(port, () => {
  console.log(`Express running on localhost:${port}`)
})