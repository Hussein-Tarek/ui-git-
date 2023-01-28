const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hussein',(req,res)=>{
    res.send("Hello I am Hussein");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})