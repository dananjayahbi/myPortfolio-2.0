const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create and Save a new User
const createUser = async (req, res) => {
  try {
    // Validate request
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "User content can not be empty",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a User
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      isActive: true,
    });

    // Save User in the database
    const savedUser = await user.save();
    res.send({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while creating the user",
      error: error.message,
    });
  }
};

// Login
const login = async (req, res) => {
  try {
    // Validate request
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Email and password can not be empty",
      });
    }

    // Check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({
        message: "Email is not found",
      });
    }

    // Check if the user is active
    if (!user.isActive) {
      return res.status(400).send({
        message: "User is not active",
      });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).send({
        message: "Invalid password",
      });
    }

    // Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.header("auth-token", token).send({
      message: "Logged in successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while logging in",
      error: error.message,
    });
  }
};

// Get a user by id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({
        message: `Cannot find User with id=${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving User with id=" + id,
      error: error.message,
    });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while retrieving users",
      error: error.message,
    });
  }
};

// Update a user by id
const updateUserById = async (req, res) => {
  try {
    // Validate request
    const { name, email, isActive } = req.body;
    const { id } = req.params;

    const user = await User.findById({ _id: id });

    if (!user) {
      return res.status(404).send({
        message: `Cannot update User with id=${id}. Maybe User was not found!`,
      });
    }

    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.isActive = isActive || user.isActive;

      const updatedUser = await user.save();
      res.send({ message: "User was updated successfully", user: updatedUser });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error updating User",
      error: error.message,
    });
  }
};

// Delete a user by id
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.send({
        message: "User was deleted successfully",
      });
    } else {
      res.send({
        message: `Cannot delete User with id=${id}. Maybe User was not found!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Could not delete User",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  login,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
};
