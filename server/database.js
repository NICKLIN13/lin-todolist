require("dotenv").config();

const { MongoClient, ServerApiVersion } =require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
};


// CLIENT CONTAINS METHODS
let client;
// TO SEE IF CLIENT HAS BEEN DEFINED. IF NOT, DEFINE IT SITH URI & OPTIONS.
const connectToMongoDB = async () => {
    if (!client) {
        try {
            client = await MongoClient.connect(uri, options);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.log(error);
        }
    }
    return client;
};

const getConnectedClient = () => client;


// EXPORT THESE FUNCTION, ALLOWING OTHERS TO USE
module.exports = { connectToMongoDB, getConnectedClient};