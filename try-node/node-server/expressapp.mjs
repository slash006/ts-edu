import express from "express";
import bodyParser from "body-parser";
const port = process.env.PORT || 5000;


const app = express();
const router = express.Router();
app.use(bodyParser.json());


/*app.use((req, res, next) => {

    console.log("first middleware");
    next();
})*/


app.use(router);


router.get('/', (req, res) => {

    res.send('Welcome to Node.js server');
})

router.get('/hello', (req, res) => {

    res.send('Welcome to hello' + JSON.stringify(req.query?.abc));
})

router.post('/post', (req, res) => {

    res.send('post data: ' + JSON.stringify(req.body.message));
})

app.use((err, req, res, next) => {

    console.error("cannot get post");
    res.status(500).send(err.message);
})



app.listen(port, () => {
    console.log(`listening on port ${port}`);
})