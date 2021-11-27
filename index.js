const express = require('express')
const path=require('path')
const app = express()
const port = 3000

//setting tempalting engine
app.set('view engine','ejs')

//sending direct output as response
app.get('/', (req, res) => {
  res.send('Hello World! This is Omkar!')
})

//sending html files as resonse
app.get('/about', (req, res) => {
    //res.sendFile(path.join(__dirname,'about.html'));
    res.render('about')
})

// sending json data as response
app.get('/json', (req, res) => {
    res.json({"name": "omkar"})
  })

//sending html pages from public folder using app.use()
app.use(express.static(path.join(__dirname,"public")))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})