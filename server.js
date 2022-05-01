const express = require('express')
const app = express()
const port = 3000

const DataApp = require('./index');


app.get('/', async (req, res) => {

    let data = await DataApp().loadData();
    if(data) res.json(data);
    

})

app.listen(port, ()=>{
    console.log(`listening to port:${port}`)
});