const express = require('express')
const app = express()
const port = 3000

const DataApp = require('./index');


app.get('/', (req, res) => {

    let data = DataApp().getData();
    res.json(data);

})

app.listen(port, ()=>{
    console.log(`listening to port:${port}`)
});