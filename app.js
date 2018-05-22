var express = require('express');
const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'views')
var record = require('./backend/res/productRes.js');

app.listen(5555, () => {
    console.log("server running at port 5555");
})

app.get('/', (req, res) => {
    record.LoadPage(1).then((table) => {
        console.log(table);
        res.render("index.ejs", {data: table})
    }).catch(err => console.log('Lỗi: ' + err));
})

