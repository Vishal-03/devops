import * as express from "express";
const  client = require("@repo/db/client");

const app = express.default();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi there");
})

app.post('/signup', async (req, res) => {
    const username = req.body.Name;
    const password = req.body.password;
    const email = req.body.email;

    const user = await client.user.create({
        data : {
            Name : username,
            password : password,
            email : email
        }
    });

    res.json({
        message : "Signup Successfull",
        id : user
    })
})

app.listen(3001);

