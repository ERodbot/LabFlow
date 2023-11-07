const User = require("../models/user");
const bcrypt = require("bcryptjs")
const {createAccessToken} = require("../libs/jwt")
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config.js");

const register = async (req, res) => {
    try {
        const { email, password, nombre, apellidos } = req.body;
    
        const userFound = await User.findOne({ email });
    
        if (userFound)
            return res.status(400).json({
            message: ["The email is already in use"],
            });
    
        // hashing the password
        const passwordHash = await bcrypt.hash(password, 10);
    
        // creating the user
        const newUser = new User({
            email,
            password: passwordHash,
            nombre,
            apellidos
        });
    
        // saving the user in the database
        const userSaved = await newUser.save();
    
        // create access token
        const token = await createAccessToken({
            id: userSaved._id,
        });
    
        res.cookie("token", token);
    
        res.json({
            id: userSaved._id,
            email: userSaved.email,

        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
        if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
        id: userFound._id,
        email: userFound.email,
        admin: userFound.admin,
        nombre: userFound.nombre,
        apellidos: userFound.apellidos,
    });
    });
};

const login = async (req,res)=>{
    try {
        const { email, password, admin } = req.body;
        const userFound = await User.findOne({ email });
    
        if (!userFound)
            return res.status(400).json({
            message: ["The email does not exist"],
            });
    
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(400).json({
            message: ["The password is incorrect"],
            });
        }
    
        const token = await createAccessToken({
            id: userFound._id,
        });
    
        res.cookie("token", token, {
            httpOnly: false,
            secure: true,
            sameSite: "none",
        });
        
    
        res.json({
            id: userFound._id,
            email: userFound.email,
            admin: userFound.admin,
            nombre: userFound.nombre,
            apellidos: userFound.apellidos,
        });
        } catch (error) {
        return res.status(500).json({ message: error.message });
        }
};

const logout = (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
    });
    return res.sendStatus(200);
}

module.exports={
    register,
    login,
    logout,
    verifyToken
};

