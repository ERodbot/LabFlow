const User = require("../models/user")

const getUsers = async (req, res) => {
    try {
        const tasks = await Task.find({ user : req.user.id }).populate("user");
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUsers
}