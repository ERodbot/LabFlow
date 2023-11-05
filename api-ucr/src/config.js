const PORT = process.env.PORT || 3000;
const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb+srv://user:1234@cluster0.uxrqdmd.mongodb.net/apiucr";
const TOKEN_SECRET =  "secret";

//process.env.TOKEN_SECRET ||

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

module.exports = {
    PORT,
    MONGODB_URI,
    TOKEN_SECRET,
    FRONTEND_URL
}