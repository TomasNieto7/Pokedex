const express = require('express')
const app = express()

const port = 3000

app.get("/", (req, res, next) => {
    console.log(req)
    res.send("Hello World!")
})

app.listen(port, ()=>{
    console.log(`Server is running in port ${port}`);
})