const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const accountLogin = require('./account')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extend: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    let user = accountLogin(req.body.email, req.body.password)
    if(user.includes('帳號 / 密碼錯誤! 請重新輸入')) {
        res.render('index', { error: user })
    } else {
        res.render('login', { user }) 
    }
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})