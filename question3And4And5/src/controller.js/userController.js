const User = require("../models/UserModel");

const userListing = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Failed to retrieve users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const createUser = async (req, res) => {
   try{ const { name, email, age, country, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, age, country, password: hashedPassword });
    await user.save();
    res.status(201).json(user);}
    catch (error) {
        console.error('Failed to create users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getUserById = async (req, res) => {
    try{const { name, email, age, country, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(req.params.id, { name, email, age, country, password: hashedPassword }, { new: true });
        res.json(user);
    }catch (error) {
        console.error('Failed to getting user by id:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteUserById = async (req, res) => {
    try{await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
    }catch (error) {
        console.error('Failed to delete user by id:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { userListing ,createUser,getUserById,deleteUserById};