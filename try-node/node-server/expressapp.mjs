import express from "express";
const port = process.env.PORT || 5000;


const app = express();
const router = express.Router();


/*app.use((req, res, next) => {

    next();
})*/

router.get('/', (req, res) => {

    res.send('Welcome to Node.js server');
})

router.get('/hello', (req, res) => {

    res.send('Welcome to hello');
})

/*
app.use((req, res, next) => {

    res.send("hii");
})

app.use((err, req, res, next) => {

    res.send("hi 2");
})
*/

app.use(router);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})