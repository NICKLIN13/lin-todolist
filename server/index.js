
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const { connectToMongoDB } = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

const router = require("./routes");

app.use("/api", router)
app.use(express.static("../front-end/build"));

const port = process.env.PORT || 5001;

async function startServer() {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
}

startServer();
