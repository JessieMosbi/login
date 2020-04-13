// params
const port = 3000
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// module
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')

// init
const app = express()
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
// session 相關設定
app.use(session({
  secret: 'keyboard cat', // 可將 cookie 再用簽章加密 (safer)
  cookie: {
    maxAge: 60 * 1000     // 60 秒後過期
  },
  resave: false,          // TODO: (還沒搞懂啥意思...) 每次請求都重新設定 session cookie，假設你的 cookie 是 10 分鐘過期，每次請求都會再設定 10 分鐘
  saveUninitialized: true // TODO: (還沒搞懂啥意思...) 無論有沒有 session cookie ，每次請求都設定個 session cookie ，預設給個標示為 connect.sid
}))

// set routing
app.get('/', (req, res) => {
  // console.log(req.session.username, req.sessionID)

  if (req.session.username) {
    const rs = users.find((user) => (user.email === req.session.username))
    res.render('index', { name: rs.firstName })

    // TODO: update session 的有效期限成預設值(重新計算有效時間)：好像沒效欸...QQ
    // req.session.touch()
    return false
  }
  res.render('login')
})

app.post('/', (req, res) => {
  const email = req.body.email.trim()
  const password = req.body.password.trim()

  if (!email || !password) {
    res.render('login', { email, password, message: '所有欄位請勿空白' })
    return false
  }

  const rs = users.find((user) => (user.email === email) && (user.password === password))
  if (rs) {
    // 儲存 session 資料
    req.session.username = email
    res.render('index', { name: rs.firstName })
  }
  else res.render('login', { email, message: '信箱或密碼錯誤' })
})

app.get('/logout', (req, res) => {
  // 清除 session 資料
  req.session.destroy()
  res.redirect('/')
})

// start server
app.listen(port, () => {
  console.log(`Server is listen to port ${port}`)
})
