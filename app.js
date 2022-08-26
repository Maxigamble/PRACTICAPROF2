const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router();

router.get('/', (req,res) => res.sendFile(path.join(__dirname+'/public/view/index.html')));
app.use(express.static(path.join(__dirname, '/public/')));

//add the router
app.use('/', router);
app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))