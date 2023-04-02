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
    const uppercasePageTitle =  page.charAt(0).toUpperCase() + page.slice(1);

    return res.render('website', { page: uppercasePageTitle })
})

app.listen(port, () => {
  console.log(`Express running on localhost:${port}`)
})


//app.get('/:page', (req, res) => {
//     const page = req.params.page
//     const uppercasePageTitle = 這裡實作page首字大寫的轉換
//     return res.render('website', { page: uppercasePageTitle }) // 把uppercasePageTitle作為page變數傳入
// })

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }