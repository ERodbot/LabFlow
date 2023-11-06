const User = require("../models/user")

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUsers
}