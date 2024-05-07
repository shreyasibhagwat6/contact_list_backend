const express = require('express');
const app = express();

// app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send("hello");
})

app.listen(3001, () => console.log('hello'))