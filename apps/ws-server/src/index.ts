import {WebSocketServer } from "ws";
const client = require("@repo/db/client")

const server = new WebSocketServer({
    port : 3002
});

server.on("connection", async (socket) => {

    const user = await client.user.create({
        data : {
            Name : Math.random().toString(),
            password : Math.random().toString(),
            email : Math.random().toString()
        }
    })

    socket.send("Hi Server connected")
})